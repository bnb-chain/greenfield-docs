---
title: Objects batch uploading by Greenfield-Go-SDK
order: 2
---

# Objects Batch uploading

In `Greenfield`, uploading an object to a bucket is a two-stage procedure. First, it needs to broadcast a transaction 
including the object meta to the Greenfield Chain, after the transaction is confirmed, PUT the object to Greenfield Storage 
Provider. In the first stage, every transaction needs to be signed by the primary key(AKA account, refer to 
[accounts](../concept/accounts.md) for more details). And if you are accessing `Greenfield` via front-end app and connect 
wallet like Metamask(or other compatible wallet), you will be asked for approval to sign the transaction. For those who 
want to upload batch of objects, this might get annoying because he/she has to repeatedly approve wallet's pop-up requests 
to send transactions. In order to overcome the such troublesome, we come out with two alternative ways:

- Within a single transaction, embed multiple `MsgCreateObject` messages and broadcast it to Greenfield Chain.
- Use a temporary account derived from your primary account and use it to broadcast transaction fto chain in the background.

Due to there is limitation of transaction size in `Greenfield`, we strongly recommend you to choose the second way if you are
uploading more than 25 objects at once. In this tutorial, we will cover it step by step via `Greenfield-go-sdk`.

## Create a bucket for object storage.

Before we get started, we would need to create a bucket to hold objects by the primary account. This also require broadcasting 
a transaction to `Greenfield`. As the code below shown, we fill in the `CreateBucket` request with the name of bucket and 
selected Storage Provider which going to serve our bucket, after transaction is sent. You might also want to check the bucket 
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
64 hexadecimal character string. Actually we can create any random 64 hexadecimal character string to form a private key. 
But in that way, we are not able to recover it and re-use in the future. So, use a designed payload to generate the private 
key is more preferred. As the code snippet below shown, we concat a `signPayload` by string "payload" and the account sequence, 
And then use the signature signed by our primary account to form a newly created private key. The `signPayload` is like a password, 
no matter what manipulation is applied on the `signPayload` to generate the signature, as long as we memorize the `signPayload`, 
we can always retrieve the private key by applying the same manipulation again. The example shown here is just one way to get the
signature, you are free to use any other algorithm  This is the temporary account we are going
to use for objects uploading.

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

## Grant temporary account permission

To entitle the temporary account to create objects on behalf of primary account, there are two type of permission are 
required. Both need to be granted by the primary account:
- grant the creating object permission in the bucket. `Policy` defines that the operation that can be enforced on a resource by an account or a group. Refer to [permission](../greenfield-blockchain/modules/permission.md) to get more details
- grant allowance so that gas fee will be deducted from the primary account. And the primary account will be the owner of objects. 

Again, we would need to broadcast transaction including these two type of granting message to `Greenfield` by primary account. 

```go
// a. Put bucket policy to enable 
statement := &permTypes.Statement{
Actions: []permTypes.ActionType{permTypes.ACTION_CREATE_OBJECT},
Effect:  permTypes.EFFECT_ALLOW,
}
msgPutPolicy := storageTypes.NewMsgPutPolicy(primaryAccount.GetAddress(), gnfdTypes.NewBucketGRN("yourBucketName").String(), 
	permTypes.NewPrincipalWithAccount(tempAcct.GetAddress()), []*permTypes.Statement{statement}, nil)

// b. grant allowance to temporary account only allow it to represent primary account to broadcast expected transaction. 
allowedMsg := make([]string, 0)
allowedMsg = append(allowedMsg, "/greenfield.storage.MsgCreateObject")
allowance, _ := feegrant.NewAllowedMsgAllowance(&feegrant.BasicAllowance{}, allowedMsg)
msgGrantAllowance, _ := feegrant.NewMsgGrantAllowance(allowance, primaryAccount.GetAddress(), tempAcct.GetAddress())

// broadcast tx to Greenfield
tx, _ := cli.BroadcastTx(ctx, []sdk.Msg{msgGrantAllowance, msgPutPolicy}, types.TxOption{})
```

## Create Object meta and put Object

Your temporary account should have enought permission at this moment.
```go
// switch to use temporary account
cli.SetDefaultAccount(tempAcct)
// define primary account as the granter.
txOpt := types.TxOption{FeeGranter: primaryAccount.GetAddress()}
// create the object meta Greenfield Chain
cli.CreateObject(ctx, "yourBucketName", "yourObjectName", bytes.NewReader(buffer.Bytes()), types.CreateObjectOptions{TxOpts: &txOpt})
// wait for a block, once there is meta created on chain, we can upload the object to Storage provider
time.Sleep(3 * time.Second)
// uplaod the exact object to Greenfield Storage Provider
cli.PutObject(ctx, "yourBucketName", "yourObjectName", int64(buffer.Len()),
bytes.NewReader(buffer.Bytes()), types.PutObjectOptions{})
s.Require().NoError(err)
```






