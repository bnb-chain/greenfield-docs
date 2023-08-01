---
title: File Management with SDK
order: 1
---

# Building with Greenfield SDK

Several Chain API libraries are available. These libraries manage the low-level logic of connecting to Greenfield node, making requests, and handing the responses.
* [go-sdk](https://github.com/bnb-chain/greenfield-go-sdk)
* [js-sdk](https://github.com/bnb-chain/greenfield-js-sdk)

In this tutorial we’ll use the go-SDK library to interact with testnet.

## Prerequisites
Before getting started, you should be familiar with:
* [Greenfield basics](https://docs.bnbchain.org/greenfield-docs/docs/guide/introduction/overview)
* Greenfield command line [examples](https://github.com/bnb-chain/greenfield-cmd#examples)

Also, make sure you have the following dependencies installed with the latest version:
* Go version above 1.19

## Go-SDK Features
* **basic.go** includes the basic functions to fetch the blockchain info.
* **storage.go** includes the most storage functions such as creating a bucket, uploading files, downloading files, heading, and deleting resources.
* **group.go** includes group-related functions such as creating a group and updating group member.
* **payment.go** includes the payment-related functions to a management payment account.
* **crosschain.go** includes the cross-chain-related functions to transfer or mirror resources to BSC.

## Setup
### Create a Go Project
Let’s set up a Go project with the necessary dependencies.

Init
```
$ mkdir ~/hellogreenfield
$ cd ~/hellogreenfield
$ go mod init hellogreenfield
```

Add SDK Dependencies
```
$ go get github.com/bnb-chain/greenfield-go-sdk
```

Edit go.mod to replace dependencies
```
replace (
 cosmossdk.io/api => github.com/bnb-chain/greenfield-cosmos-sdk/api v0.0.0-20230425074444-eb5869b05fe9
 cosmossdk.io/math => github.com/bnb-chain/greenfield-cosmos-sdk/math v0.0.0-20230425074444-eb5869b05fe9
 github.com/cometbft/cometbft => github.com/bnb-chain/greenfield-cometbft v0.0.1
 github.com/confio/ics23/go => github.com/cosmos/cosmos-sdk/ics23/go v0.8.0
 github.com/cosmos/cosmos-sdk => github.com/bnb-chain/greenfield-cosmos-sdk v0.2.1
)
```

### Test a simple function
Now we’re ready to connect to Greenfield testnet and interact with the storage provider APIs. Let’s write a simple script to query the Greenfield version to verify if everything works as expected.

Create a ```main.go``` file in your project and add the following code.
```
package main
​
import (
 "context"
 "log"
​
 "github.com/bnb-chain/greenfield-go-sdk/client"
 "github.com/bnb-chain/greenfield-go-sdk/types"
)
​
const (
 rpcAddr     = "https://gnfd-testnet-fullnode-tendermint-us.bnbchain.org:443"
 chainId     = "greenfield_5600-1"
 privateKey  = ""
)
​
func main() {
 account, err := types.NewAccountFromPrivateKey("test", privateKey)
 if err != nil {
  log.Fatalf("New account from private key error, %v", err)
 }
 cli, err := client.New(chainId, rpcAddr, client.Option{DefaultAccount: account})
 if err != nil {
  log.Fatalf("unable to new greenfield client, %v", err)
 }
 ctx := context.Background()
 nodeInfo, versionInfo, err := cli.GetNodeInfo(ctx)
 if err != nil {
  log.Fatalf("unable to get node info, %v", err)
 }
 log.Printf("nodeInfo moniker: %s, go version: %s", nodeInfo.Moniker, versionInfo.GoVersion)
 height, err := cli.GetLatestBlockHeight(ctx)
 if err != nil {
  log.Fatalf("unable to get latest block height, %v", err)
 }
​
 log.Printf("Current block height: %d", height)
}
```

Run the following command in your project directory:
```
go run main.go
```
This will output something like:
```
2023/06/22 10:44:16 nodeInfo moniker: validator-a, go version: go version go1.20.4 linux/amd64
2023/06/22 10:44:16 Current block height: 817082
```
If everything is set up correctly, your code will be able to connect to the Greenfield node and return the chain data as shown above.

## Get Chain Data
In the previous step, we created a ```main.go``` file to demonstrate the basic steps to connect to the node and initialize a ```Client``` to query chain data. Next, let’s use some more functions.
Get current chain head:
We can add the following code in main.go to query current head of the chain.

```
blockByHeight, err := cli.GetBlockByHeight(ctx,height)
 if err != nil {
  log.Fatalf("unable to get block by height, %v", err)
 }
 log.Printf("Current block height: %d", blockByHeight.GetHeader())
 ```
Get Address balance
With a given greenfield wallet address, you can query its balance by calling ```GetAccountBalance``` function.
```
balance, err := cli.GetAccountBalance(ctx, account.GetAddress().String())
 if err != nil {
  log.Fatalf("unable to get balance, %v", err)
 }
 log.Printf("%s Current balance: %s", account.GetAddress().String(), balance.String())
 ```
Apart from the basic data queries shown above, there are many more features. Please see the [JSON-RPC API Reference](https://docs.bnbchain.org/greenfield-docs/docs/api-sdk/endpoints) for all Greenfield API definitions.

## Manage Wallet
Greenfield wallets hold addresses that you can use to manage objects, sign transactions, and pay for gas fees. In this section, we will demonstrate different ways to manage your wallet.
1. First, let’s make sure your connected node is running and the wallet address contains some testnet BNB.
2. Create a new file called ```account.go``` in the same project as earlier. This is where we’ll write all out wallet-related code.
3. In ```account.go``` import modules and initialize your private key or mnemonic phrase.

```
//import mnemonic
account, err := types.NewAccountFromMnemonic("test", mnemonic)
//import private key
account, err := types.NewAccountFromPrivateKey("test", privateKey)
```
Let’s create a second wallet address so we can test transfers. The new address will be created locally and start with 0 token balance:
```
account2, _, err := types.NewAccount("test2")
```
Now, let’s try to transfer tBNB to this new address. Under the hood, this will create a transaction to transfer tBNB from fromAddress to toAddress, sign the transaction using SDK, and send the signed transaction to the Greenfield node.
```
transferTxHash, err := cli.Transfer(ctx, account2.GetAddress().String(), math.NewIntFromUint64(1000000000000000000), types2.TxOption{})
 if err != nil {
  log.Fatalf("unable to send, %v", err)
 }
 log.Printf("Transfer response: %s", transferTxHash)
​
 waitForTx, err := cli.WaitForTx(ctx, transferTxHash)
​
 log.Printf("Wair for tx: %s", waitForTx.String())
​
 balance, err = cli.GetAccountBalance(ctx, account2.GetAddress().String())
 ```
Run the code to test the transfer of tBNB:
```
go run account.go
```

This will output something like:
```
raw_log: '[{"msg_index":0,"events":[{"type":"message","attributes":[{"key":"action","value":"/cosmos.bank.v1beta1.MsgSend"},{"key":"sender","value":"0x525482AB3922230e4D73079890dC905dCc3D37cd"},{"key":"module","value":"bank"}]},{"type":"coin_spent","attributes":[{"key":"spender","value":"0x525482AB3922230e4D73079890dC905dCc3D37cd"},{"key":"amount","value":"1BNB"}]},{"type":"coin_received","attributes":[{"key":"receiver","value":"0x78C3A3d10B1032bB2810366361dCE84E2e92eFCB"},{"key":"amount","value":"1BNB"}]},{"type":"transfer","attributes":[{"key":"recipient","value":"0x78C3A3d10B1032bB2810366361dCE84E2e92eFCB"},{"key":"sender","value":"0x525482AB3922230e4D73079890dC905dCc3D37cd"},{"key":"amount","value":"1BNB"}]},{"type":"message","attributes":[{"key":"sender","value":"0x525482AB3922230e4D73079890dC905dCc3D37cd"}]}]}]'
timestamp: "2023-06-22T20:02:19Z"
tx:
 '@type': /cosmos.tx.v1beta1.Tx
 auth_info:
   fee:
     amount:
     - amount: "6000000000000"
       denom: BNB
     gas_limit: "1200"
     granter: ""
     payer: ""
   signer_infos:
   - mode_info:
       single:
         mode: SIGN_MODE_EIP_712
     public_key:
       '@type': /cosmos.crypto.eth.ethsecp256k1.PubKey
       key: AirjhHwjRcZ34op5yCKHtDkn91RDgFOY8cJmbHH6Tmlu
     sequence: "12"
   tip: null
 body:
   extension_options: []
   memo: ""
   messages:
   - '@type': /cosmos.bank.v1beta1.MsgSend
     amount:
     - amount: "1"
       denom: BNB
     from_address: 0x525482AB3922230e4D73079890dC905dCc3D37cd
     to_address: 0x78C3A3d10B1032bB2810366361dCE84E2e92eFCB
   non_critical_extension_options: []
   timeout_height: "0"
 signatures:
 - FjUNT2dzpQZhCmVTLDGMEy1uR1NaNLeYjvqQiPr2xHM5xxeYP5Mic8CSxZtg3k4WHcAIEnQNcszqBi7fsgETagA=
txhash: DFC2CE0514FE334B5BCB6BC3EBCCCD7A6E16B4CAEDC4FFDBE3F2FA3B6E548E61
```
## Make a storage deal
Storing data is one of the most important features of Greenfield. In this section, we’ll walk through the end-to-end process of storing your data on the Greenfield network. We’ll start by importing your data, then make a storage deal with a storage provider, and finally wait for the deal to complete.

### 1. Create a main file
Create a ```storage.go``` file in your demo project and add the following boilerplate code:
```
func main() {​
    // initialize account
    account, err: = types.NewAccountFromPrivateKey("test", privateKey)
    log.Println("address info:", account)​
    if err != nil {
        log.Fatalf("New account from private key error, %v", err)
    }

    //initialize client
    cli, err: = client.New(chainId, rpcAddr, client.Option {
        DefaultAccount: account
    })
    if err != nil {
        log.Fatalf("unable to new greenfield client, %v", err)
    }
    ctx: = context.Background()​
        // 1. choose storage provider
        ​
        // 2. Create a bucket
        ​
        // 3. Upload your data and set a quota
        ​
}
```
### 2. Choose your own SP
You can query the list of SP.
```
// get storage providers list
spLists, err: = cli.ListStorageProviders(ctx, true)
if err != nil {
        log.Fatalf("fail to list in service sps")
    }
//choose the first sp to be the primary SP
primarySP: = spLists[0].GetOperatorAddress()
 ```
### 3. Create your bucket
Bucket can be private or public. You can customize it with options.
* VISIBILITY_TYPE_PUBLIC_READ
* VISIBILITY_TYPE_PRIVATE
```
chargedQuota := uint64(100)
visibility := storageTypes.VISIBILITY_TYPE_PUBLIC_READ
opts := types.CreateBucketOptions{Visibility: visibility, ChargedQuota: chargedQuota}
```
To understand how does quota work, read this.
### 4. Upload your object
Objects can also be private or public.
Uploading objects is composed of two parts: create and put.
* ```CreateObject``` gets an approval of creating an object and sends createObject txn to Greenfield network.
* ```PutObject``` supports the second stage of uploading the object to bucket.

```
// create and put object
txnHash, err := cli.CreateObject(ctx, bucketName, objectName, bytes.NewReader(buffer.Bytes()), types.CreateObjectOptions{})
​
handleErr(err, "CreateObject")
​
err = cli.PutObject(ctx, bucketName, objectName, int64(buffer.Len()),
  bytes.NewReader(buffer.Bytes()), types.PutObjectOptions{TxnHash: txnHash})
handleErr(err, "PutObject")
​
log.Printf("object: %s has been uploaded to SP\n", objectName)
​
waitObjectSeal(cli, bucketName, objectName)
```
The primary SP syncs with secondary SPs to set up the data redundancy, and then it signs a ```Seal``` transaction with the finalized metadata for storage. If the primary SP determines that it doesn't want to store the file due to whatever reason, it can also "SealReject" the request.
### 5. Object management
#### 5.1 Read object
You can call ```GetObject``` function to download data.
```
// get object
 reader, info, err := cli.GetObject(ctx, bucketName, objectName, types.GetObjectOption{})
 handleErr(err, "GetObject")
 log.Printf("get object %s successfully, size %d \n", info.ObjectName, info.Size)
 handleErr(err, "GetObject")
 objectBytes, err := io.ReadAll(reader)
 if !bytes.Equal(objectBytes, buffer.Bytes()) {
  handleErr(errors.New("download content not same"), "GetObject")
 }
 ```
#### 5.2 Update object visibility
* You can call ```UpdateBucketVisibility``` to change bucket visibility
* You can call ```UpdateObjectVisibility``` to change object visibility
​​
```
updateBucketTx, err := ccli.UpdateBucketVisibility(s.ClientContext, bucketName,
  storageTypes.VISIBILITY_TYPE_PRIVATE, types.UpdateVisibilityOption{})
 ```

#### 5.3 Delete object
The function DeleteObject support deleting objects.
```
// delete object
 delTx, err := cli.DeleteObject(ctx, bucketName, objectName, types.DeleteObjectOption{})
 handleErr(err, "DeleteObject")
 _, err = cli.WaitForTx(ctx, delTx)
 if err != nil {
  log.Fatalln("txn fail")
 }
 log.Printf("object: %s has been deleted\n", objectName)
```
## Conclusion
Congratulations on making it all the way through this tutorial! In this tutorial, we learned the basics of interacting with the Greenfield network using SDK library.
