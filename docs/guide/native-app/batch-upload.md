---
title: Objects batch uploading by Greenfield-Go-SDK
order: 2
---

# Objects Batch uploading

In `Greenfield`, uploading an object to a bucket is a two-stage procedure. First, it needs to broadcast a transaction 
including the object meta to the Greenfield Chain, after the transaction is confirmed, PUT the object to Greenfield Storage 
Provider. In the first stage, every transaction needs to be signed by the primary key(also known as `account`, refer to 
[accounts](../concept/accounts.md) for more details). And if you are accessing `Greenfield` via front-end app and connecting 
wallet like Metamask(or other compatible wallets), you will be asked for approval to sign the transaction. For those who 
want to upload a batch of objects, this process can become annoying because they have to repeatedly approve wallet's pop-up 
requests to send transactions. In order to overcome the inconvenience, we have come out with two alternative ways:

- Within a single transaction, embed multiple `MsgCreateObject` messages and broadcast it to Greenfield Chain.
- Use a temporary account generated from your primary account's signing signature and use it to broadcast transaction to 
  `Greenfied` chain on on behalf of the primary account for every object.
 
Due to the limitation of transaction size in `Greenfield`, we strongly recommend choosing the second way if you are
uploading more than 10 objects at once. In this tutorial, we will cover the steps to achieve this using `Greenfield-go-sdk`.

## Create a bucket for object storage.

Before we get started, we would need to create a bucket to hold objects using the primary account. This requires broadcasting 
a transaction to `Greenfield`. The code below shows how to fill in the `CreateBucket` request with the bucket name and 
selected Storage Provider that will serve our bucket, after the transaction is sent, you might also want to check the bucket's
existence to confirm its creation.


```go
primaryAccount, _ := types.NewAccountFromPrivateKey("primaryAccount", privateKey)
cli, _ := client.New(chainId, rpcAddr, client.Option{DefaultAccount: primaryAccount})
ctx := context.Background()
// get storage providers list
isInService := true
spLists, _ := cli.ListStorageProviders(ctx, isInService)
// choose the first sp to be the primary SP, you are free to choose any other one
primarySP := spLists[0].GetOperatorAddress()
// sends a request to Greenfield to create a bucket.
cli.CreateBucket(ctx, "yourBucketName", primarySP, types.CreateBucketOptions{})
// wait for confirmation
time.Sleep(3 * time.Second)
// get bucket meta data from Greenfield
bucketInfo, _ := cli.HeadBucket(ctx, "yourBucketName")
```

## Temporary account generation

Once the bucket is created, we can start generating the temporary account. A private key is 32 bytes represented as a 
64 hexadecimal character string. We can create any random 64 hexadecimal character string to form a private key.
However, in that case, we won't be able to recover it and reuse in the future. So, it is more preferred to use a designed 
payload to generate the private key. In the code snippet below, we concatenate a `signPayload` by string "payload" and 
the account sequence, We then use the signature signed by our primary account to form a newly created private key. 
The `signPayload` acts like a password. No matter what manipulation is applied to the `signPayload` to generate the signature, 
as long as we remember the `signPayload`, we can always retrieve the private key by applying the same manipulation again. 
The example shown here is just one way to get the signature and used for new temporary priavte key, but you are free to 
use any other algorithm.

```go
// generate the temp account using user's primary account signing on payload decided by user, here we add the account nonce to be part of sign payload
signPayload := fmt.Sprintf("payload%d", primaryAccount.GetSequence())
tempAcct, _ := genTemporaryAccount(primaryAccount, signPayload)
tempAcctAddr, _ := tempAcct.GetAddress().Marshal()
```
```go
// genTemporaryAccount generates a temporary account, the signPayload is to be signed by user's own private key(Primary account),
// and the signature is used to generate the temporary account's private key.
// User can reconvert account with the signPayload at any time
func genTemporaryAccount(acct *types.Account, signPayload string) (*types.Account, error) {
    signBz := []byte(signPayload)
    sig, err := acct.Sign(tmhash.Sum(signBz))
    if err != nil {
    return nil, err
    }
    if len(sig) < privateKeyLength {
    return nil, fmt.Errorf("required signature lenght is no less than %d, cur lenght %d", privateKeyLength, len(sig))
    }
    return types.NewAccountFromPrivateKey("temp", hex.EncodeToString(sig[:privateKeyLength]))
}
```

## Grant temporary account permissions

To entitle the temporary account to create objects on behalf of the primary account, two types of permissions are 
required. Both need to be granted by the primary account:
- Grant the creating object permission in the bucket. `Policy` defines that the operation that can be enforced on a resource by an account or a group. Refer to [permission](../greenfield-blockchain/modules/permission.md) to get more details
- Grant an allowance so that the gas fee will be deducted from the primary account, and the primary account will be the owner of objects. 

Again, we would need to broadcast transaction including these two types of granting messages to `Greenfield` using the primary account. 

```go
// grant the temporary account creating objects permission in primary accout's bucket
statement := &permTypes.Statement{
    Actions: []permTypes.ActionType{permTypes.ACTION_CREATE_OBJECT},
    Effect:  permTypes.EFFECT_ALLOW,
}
msgPutPolicy := storageTypes.NewMsgPutPolicy(primaryAccount.GetAddress(), gnfdTypes.NewBucketGRN("yourBucketName").String(), 
	permTypes.NewPrincipalWithAccount(tempAcct.GetAddress()), []*permTypes.Statement{statement}, nil)

// grant allowance to temporary account only allow it to broadcast expected transaction type, which is creaing obejct transaction. 
allowedMsg := make([]string, 0)
allowedMsg = append(allowedMsg, "/greenfield.storage.MsgCreateObject")
allowance, _ := feegrant.NewAllowedMsgAllowance(&feegrant.BasicAllowance{}, allowedMsg)
msgGrantAllowance, _ := feegrant.NewMsgGrantAllowance(allowance, primaryAccount.GetAddress(), tempAcct.GetAddress())

// broadcast tx to Greenfield
cli.BroadcastTx(ctx, []sdk.Msg{msgGrantAllowance, msgPutPolicy}, types.TxOption{})
```

## Create object meta and put object

At this point, the temporary account should have enough permissions. We can now use it for the two-stage object uploading process.
```go
// switch to use temporary account
cli.SetDefaultAccount(tempAcct)
// define primary account as the granter.
txOpt := types.TxOption{FeeGranter: primaryAccount.GetAddress()}
// create object content
var buffer bytes.Buffer
line := `0123456789`
for i := 0; i < 100; i++ {
    buffer.WriteString(fmt.Sprintf("%s", line))
}
// create the object meta on Greenfield Chain
cli.CreateObject(ctx, "yourBucketName", "yourObjectName", bytes.NewReader(buffer.Bytes()), types.CreateObjectOptions{TxOpts: &txOpt})
// wait for a block, once there is meta created on chain, we can upload the object to Greenfield Storage provider
time.Sleep(3 * time.Second)
// upload the object to Greenfield Storage Provider
cli.PutObject(ctx, "yourBucketName", "yourObjectName", int64(buffer.Len()), bytes.NewReader(buffer.Bytes()), types.PutObjectOptions{})
```