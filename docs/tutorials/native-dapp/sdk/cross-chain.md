---
title: Cross-chain Access Control with Greenfield SDK
order: 3
---

# Cross-chain Access Control with Resource Mirroring

In this tutorial we’ll use the go-SDK library to transfer control over objects to the smart contract on BSC and allowing on-chain management. Object mirroring enables greater flexibility and control over decentralized storage on BNB Greenfield to all dApps on BSC. It leverages the capabilities of the BSC and its smart contract functionality to provide enhanced functionality and interoperability between the two platforms.

## Prerequisites
Before getting started, you should be familiar with:
* [Greenfield basics](https://docs.bnbchain.org/greenfield-docs/docs/guide/introduction/overview)
* Greenfield command line [examples](https://github.com/bnb-chain/greenfield-cmd#examples)

Also, make sure you have the following dependencies installed with the latest version:
* Go version above 1.20

## Cross Chain Mechanism
Cross-chain communication serves as the foundation for enabling the exchange of assets, data, and functionalities across disparate blockchains, facilitating a more connected and efficient decentralised ecosystem.

Cross-communication between BNB Greenfield and BSC stands apart from the approaches taken by Polkadot, Chainlink, and Cosmos in several significant aspects.


| **Cross chain communication features** | **BNB Greenfield/BSC**                     | **Cosmos/IBC**             | **Polkadot**                              | **Chainlink CCIP**                           |
| -------------------------------------- | ------------------------------------------ | -------------------------- | ----------------------------------------- | -------------------------------------------- |
| Bulk messaging                         | Custom and performant                      | General application        | General application                       | General application                          |
| Compatibility                          | Fully compatible with EVM and Ethereum L2s | Only Cosmos ecosystem      | Only Polkadot ecosystem                   | Specific implementations for each blockchain |
| Security Model                         | Own validators                             | Shared                     | Shared                                    | Own validators                               |
| Tokenomics                             | BNB                                        | ATOM                       | DOT                                       | LINK                                         |
| Address Scheme                         | Unified - same addresses                   | Can be different addresses | Can be different addresses                | Can be different addresses                   |
| Composability                          | Shared components with BNB Chain ecosystem | Implementation in progress | Shared components with Polkadot ecosystem | New implementation for each network          |
https://www.bnbchain.org/en/blog/cross-chain-innovation-in-the-bnb-greenfield-programmable-environment

## Account Setup
### Create a Go Project
Let’s set up a Go project with the necessary dependencies.

### Init
```sh
$ mkdir ~/hellogreenfield
$ cd ~/hellogreenfield
$ go mod init hellogreenfield
```

### Add SDK Dependencies
```sh
$ go get github.com/bnb-chain/greenfield-go-sdk
```

Edit go.mod to replace dependencies
```sh
replace (
    cosmossdk.io/api => github.com/bnb-chain/greenfield-cosmos-sdk/api v0.0.0-20230425074444-eb5869b05fe9
    cosmossdk.io/math => github.com/bnb-chain/greenfield-cosmos-sdk/math v0.0.0-20230425074444-eb5869b05fe9
    github.com/cometbft/cometbft => github.com/bnb-chain/greenfield-cometbft v0.0.2
    github.com/cometbft/cometbft-db => github.com/bnb-chain/greenfield-cometbft-db v0.8.1-alpha.1
    github.com/cosmos/cosmos-sdk => github.com/bnb-chain/greenfield-cosmos-sdk v0.2.3
    github.com/cosmos/iavl => github.com/bnb-chain/greenfield-iavl v0.20.1-alpha.1
    github.com/syndtr/goleveldb => github.com/syndtr/goleveldb v1.0.1-0.20210819022825-2ae1ddf74ef7
)
```
### Install dependensies
```sh
go mod tidy
```

### Test a simple function

You can refer to the [overview](./file-management/overview.md) to learn about how to create a simple `main.go`

If everything is set up correctly, your code will be able to connect to the Greenfield node and return the chain data as shown above.

### Account setup

```go
account, err := types.NewAccountFromPrivateKey("test", privateKey)
	if err != nil {
		log.Fatalf("New account from private key error, %v", err)
	}
	cli, err := client.New(chainId, rpcAddr, client.Option{DefaultAccount: account})
	if err != nil {
		log.Fatalf("unable to new greenfield client, %v", err)
	}
	ctx := context.Background()

```

### Create Buckets
Now, let's use the imported account to create a bucket.

In this example,

```go
	// get storage providers list
	spLists, err := cli.ListStorageProviders(ctx, true)
	if err != nil {
		log.Fatalf("fail to list in service sps")
	}
	// choose the first sp to be the primary SP
	primarySP := spLists[0].GetOperatorAddress()

	bucketName := storageTestUtil.GenRandomBucketName()

	txHash, err := cli.CreateBucket(ctx, bucketName, primarySP, types.CreateBucketOptions{})
	handleErr(err, "CreateBucket")
	log.Printf("create bucket %s on SP: %s successfully \n", bucketName, spLists[0].Endpoint)

	waitForTx, _ := cli.WaitForTx(ctx, txHash)
	log.Printf("Wait for tx: %s", waitForTx.TxResult.String())
```

The example return message is like the following:

```shell
2023/10/31 13:14:54 create bucket ylatitsb on SP: https://gnfd-testnet-sp1.bnbchain.org successfully
2023/10/31 13:14:54 Wait for tx: data:"\0225\n+/greenfield.storage.MsgCreateBucketResponse\022\006\n\0043175\032\010\000\000\000\000\000\000\201\006" log:"[{\"msg_index\":0,\"events\":[{\"type\":\"message\",\"attributes\":[{\"key\":\"action\",\"value\":\"/greenfield.storage.MsgCreateBucket\"},{\"key\":\"sender\",\"value\":\"0x525482AB3922230e4D73079890dC905dCc3D37cd\"},{\"key\":\"module\",\"value\":\"storage\"}]},{\"type\":\"greenfield.storage.EventCreateBucket\",\"attributes\":[{\"key\":\"bucket_id\",\"value\":\"\\\"3175\\\"\"},{\"key\":\"bucket_name\",\"value\":\"\\\"ylatitsb\\\"\"},{\"key\":\"charged_read_quota\",\"value\":\"\\\"0\\\"\"},{\"key\":\"create_at\",\"value\":\"\\\"1698779691\\\"\"},{\"key\":\"global_virtual_group_family_id\",\"value\":\"40\"},{\"key\":\"owner\",\"value\":\"\\\"0x525482AB3922230e4D73079890dC905dCc3D37cd\\\"\"},{\"key\":\"payment_address\",\"value\":\"\\\"0x525482AB3922230e4D73079890dC905dCc3D37cd\\\"\"},{\"key\":\"primary_sp_id\",\"value\":\"1\"},{\"key\":\"source_type\",\"value\":\"\\\"SOURCE_TYPE_ORIGIN\\\"\"},{\"key\":\"status\",\"value\":\"\\\"BUCKET_STATUS_CREATED\\\"\"},{\"key\":\"visibility\",\"value\":\"\\\"VISIBILITY_TYPE_PRIVATE\\\"\"}]}]}]" gas_wanted:2400 gas_used:2400 events:<type:"coin_spent" attributes:<key:"spender" value:"0x525482AB3922230e4D73079890dC905dCc3D37cd" index:true > attributes:<key:"amount" value:"12000000000000BNB" index:true > > events:<type:"coin_received" attributes:<key:"receiver" value:"0xf1829676DB577682E944fc3493d451B67Ff3E29F" index:true > attributes:<key:"amount" value:"12000000000000BNB" index:true > > events:<type:"transfer" attributes:<key:"recipient" value:"0xf1829676DB577682E944fc3493d451B67Ff3E29F" index:true > attributes:<key:"sender" value:"0x525482AB3922230e4D73079890dC905dCc3D37cd" index:true > attributes:<key:"amount" value:"12000000000000BNB" index:true > > events:<type:"message" attributes:<key:"sender" value:"0x525482AB3922230e4D73079890dC905dCc3D37cd" index:true > > events:<type:"tx" attributes:<key:"fee" value:"12000000000000BNB" index:true > attributes:<key:"fee_payer" value:"0x525482AB3922230e4D73079890dC905dCc3D37cd" index:true > > events:<type:"tx" attributes:<key:"acc_seq" value:"0x525482AB3922230e4D73079890dC905dCc3D37cd/70" index:true > > events:<type:"tx" attributes:<key:"signature" value:"aKL7wpB1b0107d1OleaHKKBw5mXUskggINbq7hsr90s6MzgV88DxjAGak37xz9V4LsoH0sr7saqBmBrE5MKJtgA=" index:true > > events:<type:"message" attributes:<key:"action" value:"/greenfield.storage.MsgCreateBucket" index:true > attributes:<key:"sender" value:"0x525482AB3922230e4D73079890dC905dCc3D37cd" index:true > attributes:<key:"module" value:"storage" index:true > > events:<type:"greenfield.storage.EventCreateBucket" attributes:<key:"bucket_id" value:"\"3175\"" index:true > attributes:<key:"bucket_name" value:"\"ylatitsb\"" index:true > attributes:<key:"charged_read_quota" value:"\"0\"" index:true > attributes:<key:"create_at" value:"\"1698779691\"" index:true > attributes:<key:"global_virtual_group_family_id" value:"40" index:true > attributes:<key:"owner" value:"\"0x525482AB3922230e4D73079890dC905dCc3D37cd\"" index:true > attributes:<key:"payment_address" value:"\"0x525482AB3922230e4D73079890dC905dCc3D37cd\"" index:true > attributes:<key:"primary_sp_id" value:"1" index:true > attributes:<key:"source_type" value:"\"SOURCE_TYPE_ORIGIN\"" index:true > attributes:<key:"status" value:"\"BUCKET_STATUS_CREATED\"" index:true > attributes:<key:"visibility" value:"\"VISIBILITY_TYPE_PRIVATE\"" index:true > >
```

* Query the bucket with `HeadBucket` function
```go
	// head bucket
	bucketInfo, err := cli.HeadBucket(ctx, bucketName)
	handleErr(err, "HeadBucket")
	log.Println("bucket info:", bucketInfo.String())
```
The example return message is like the following:
```shell
2023/10/31 13:14:54 bucket info: owner:"0x525482AB3922230e4D73079890dC905dCc3D37cd" bucket_name:"ylatitsb" visibility:VISIBILITY_TYPE_PRIVATE id:"3175" create_at:1698779691 payment_address:"0x525482AB3922230e4D73079890dC905dCc3D37cd" global_virtual_group_family_id:40
```

### Mirror Bucket Metadata to BSC
In Greenfield, object mirroring refers to the process of transferring control over objects stored on BNB Greenfield to a smart contract on BNB Smart Chain (BSC)

This allows the object to be fully managed on-chain on BSC, meaning that users or other smart contracts can perform various operations and changes to the object through on-chain transactions.

During the mirroring process from BNB Greenfield to BSC, the content of the file itself is not copied. This means that neither the data nor the file metadata, which is stored on the BNB Greenfield blockchain, is transferred to BSC.


```go
	// mirror bucket
	txResp, err := cli.MirrorBucket(ctx, sdk.ChainID(crossChainDestBsChainId), bucketInfo.Id, bucketName, gnfdSdkTypes.TxOption{})
	handleErr(err, "MirrorBucket")
	waitForTx, _ = cli.WaitForTx(ctx, txResp.TxHash)
	log.Printf("Wait for tx: %s", waitForTx.TxResult.String())
	log.Printf("successfully mirrored bucket wiht bucket id %s to BSC", bucketInfo.Id)

```

```shell
2023/10/31 21:43:57 bucket: sdkexamplebucket policy info:id:"2358" principal:<type:PRINCIPAL_TYPE_GNFD_ACCOUNT value:"0x843e77D639b6C382e91ef489881963209cB238E5" > resource_type:RESOURCE_TYPE_BUCKET resource_id:"429" statements:<effect:EFFECT_ALLOW actions:ACTION_UPDATE_BUCKET_INFO actions:ACTION_DELETE_BUCKET actions:ACTION_DELETE_OBJECT actions:ACTION_GET_OBJECT >
2023/10/31 21:43:57 bucket info: owner:"0x525482AB3922230e4D73079890dC905dCc3D37cd" bucket_name:"ylatitsb" visibility:VISIBILITY_TYPE_PRIVATE id:"3175" create_at:1698779691 payment_address:"0x525482AB3922230e4D73079890dC905dCc3D37cd" global_virtual_group_family_id:40
```

You can also inspect using the block scanner, e.g. [https://greenfieldscan.com](https://greenfieldscan.com/).


### Source Code
* [Go-SDK](https://github.com/bnb-chain/greenfield-go-sdk/blob/master/examples/crosschain.go)
* [JS-SDK](https://github.com/bnb-chain/greenfield-js-sdk/blob/main/examples/nextjs/src/components/mirror/index.tsx)
