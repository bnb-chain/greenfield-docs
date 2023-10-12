---
title: Go SDK Example
---

# Quickstart


The Greenfield SDK for Go provides APIs and utilities that developers can use to build Go applications that use Greenfield services, such as data storage and permission management.

The SDK simplifies the process of programming directly with a web service interface. It takes care of many underlying details, including authentication, retrying requests, and managing errors.

This guide provides configuration information, sample code, and an introduction to the SDK utilities.

## Install


The Greenfield SDK for Go requires [Go 1.20 or later](https://go.dev/).You can view your current version of Go by running the go version command. For information about installing or upgrading your version of Go, see https://golang.org/doc/install.

To install the SDK and its dependencies, run the following Go command.

```bash
# Get latest
$ go get github.com/bnb-chain/greenfield-go-sdk
```

Edit `go.mod` to replace dependencies

```
replace (
    cosmossdk.io/api => github.com/bnb-chain/greenfield-cosmos-sdk/api v0.0.0-20230816082903-b48770f5e210
    cosmossdk.io/math => github.com/bnb-chain/greenfield-cosmos-sdk/math v0.0.0-20230816082903-b48770f5e210
    github.com/cometbft/cometbft => github.com/bnb-chain/greenfield-cometbft v0.0.3
    github.com/cometbft/cometbft-db => github.com/bnb-chain/greenfield-cometbft-db v0.8.1-alpha.1
    github.com/cosmos/cosmos-sdk => github.com/bnb-chain/greenfield-cosmos-sdk v0.2.4
    github.com/cosmos/iavl => github.com/bnb-chain/greenfield-iavl v0.20.1
    github.com/syndtr/goleveldb => github.com/syndtr/goleveldb v1.0.1-0.20210819022825-2ae1ddf74ef7
    github.com/consensys/gnark-crypto => github.com/consensys/gnark-crypto v0.7.0
)
```

## Usage

Now we’re ready to connect to Greenfield testnet and interact with the Greenfield APIs. Let’s write a simple script to query the Greenfield version to verify if everything works as expected.

### Create client

Create a `main.go` file in your project and add the following code.

```go
package main

import (
	"context"
	"log"

	"github.com/bnb-chain/greenfield-go-sdk/client"
	"github.com/bnb-chain/greenfield-go-sdk/types"
)

const (
	rpcAddr     = "https://gnfd-testnet-fullnode-tendermint-us.bnbchain.org:443"
	chainId     = "greenfield_5600-1"
	privateKey  = ""
)

func main() {
	// import acccount
	account, err := types.NewAccountFromPrivateKey("test", privateKey)
	if err != nil {
		log.Fatalf("New account from private key error, %v", err)
	}

	// create client
	cli, err := client.New(chainId, rpcAddr, client.Option{DefaultAccount: account})
	if err != nil {
		log.Fatalf("unable to new greenfield client, %v", err)
	}
	ctx := context.Background()

	// get node info from RPC
	nodeInfo, versionInfo, err := cli.GetNodeInfo(ctx)
	if err != nil {
		log.Fatalf("unable to get node info, %v", err)
	}
	log.Printf("nodeInfo moniker: %s, go version: %s", nodeInfo.Moniker, versionInfo.GoVersion)

	// query latest block height
	height, err := cli.GetLatestBlockHeight(ctx)
	if err != nil {
		log.Fatalf("unable to get latest block height, %v", err)
	}

	log.Printf("Current block height: %d", height)
}
```

Run the following command in your project directory:

```bash
go run main.go
```

This will output something like:

```
2023/06/22 10:44:16 nodeInfo moniker: validator-a, go version: go version go1.20.4 linux/amd64
2023/06/22 10:44:16 Current block height: 817082
```

If everything is set up correctly, your code will be able to connect to the Greenfield node and return the chain data as shown above.

### Queries


In the previous step, we created a `main.go` file to demonstrate the basic steps to connect to the node and initialize a `Client` to query chain data. Next, let’s use some more functions.

#### 1. Get Current Chain Head

We can add the following code in`main.go`to query current head of the chain.

```go
  // query latest block height
  blockByHeight, err := cli.GetBlockByHeight(ctx,height)
	if err != nil {
		log.Fatalf("unable to get block by height, %v", err)
	}
	log.Printf("Current block height: %d", blockByHeight.GetHeader())
```

#### 2. Get Address Balance

With a given greenfield wallet address, you can query its balance by calling `GetAccountBalance` function.

```go
	// query current balance
	balance, err := cli.GetAccountBalance(ctx, account.GetAddress().String())
	if err != nil {
		log.Fatalf("unable to get balance, %v", err)
	}
	log.Printf("%s Current balance: %s", account.GetAddress().String(), balance.String())
```

#### 3. Query Storage Providers


In addition, the SDK provides support for querying the list of storage providers available and offers generic search capabilities for exploring metadata attributes.


```go
	cli, err := client.New(chainId, rpcAddr, client.Option{DefaultAccount: account})
	if err != nil {
		log.Fatalf("unable to new greenfield client, %v", err)
	}
	ctx := context.Background()

	// get storage providers list
	spLists, err := cli.ListStorageProviders(ctx, true)
	if err != nil {
		log.Fatalf("fail to list in service sps")
	}

```

#### 4. Query Storage Price

```go
	// choose the first sp to be the primary SP
	primarySP := spLists[0].GetOperatorAddress()

	// query price for storing data
	price, err := cli.GetStoragePrice(ctx,primarySP)
	if err != nil {
		log.Fatalf("fail to list in service sps")
	}

	log.Printf("Read Price is %s and Store price is %s \n",price.ReadPrice,price.StorePrice)

```

#### 5. Query Buckets

You can query the bucket info like this:

```go
	// head bucket
	bucketInfo, err := cli.HeadBucket(ctx, bucketName)
	handleErr(err, "HeadBucket")
	log.Println("bucket info:", bucketInfo.String())
```

#### 5. Query Objects

List all the objects under the same bucket

```go
    // list object
	objects, err := cli.ListObjects(ctx, bucketName, types.ListObjectsOptions{
		ShowRemovedObject: false, Delimiter: "", MaxKeys: 100, EndPointOptions: &types.EndPointOptions{
			Endpoint:  httpsAddr, // sp endpoint
			SPAddress: "",
		}})
	log.Println("list objects result:")
	for _, obj := range objects.Objects {
		i := obj.ObjectInfo
		log.Printf("object: %s, status: %s\n", i.ObjectName, i.ObjectStatus)
	}
```

Apart from the basic data queries shown above, there are many more features. Please see the[JSON-RPC API Reference](https://docs.bnbchain.org/greenfield-docs/docs/api/endpoints)for all Greenfield API definitions.


### Transactions

#### 1. Manage Wallet

Greenfield wallets hold addresses that you can use to manage objects, sign transactions, and pay for gas fees. In this section, we will demonstrate different ways to manage your wallet.

* First, let’s make sure your connected node is running and the wallet address contains some testnet BNB.
* Create a new file called `account.go` in the same project as earlier. This is where we’ll write all out wallet-related code.
* In `account.go` import modules and initialize your private key or mnemonic phrase.

```go
	//import mnemonic
	account, err := types.NewAccountFromMnemonic("test", mnemonic)
	//import private key
	account, err := types.NewAccountFromPrivateKey("test", privateKey)
```

Let’s create a second wallet address so we can test transfers. The new address will be created locally and start with 0 token balance:

```go
	//create a differet account
	account2, _, err := types.NewAccount("test2")
```

Now, let’s try to transfer tBNB to this new address. Under the hood, this will create a transaction to transfer tBNB from`fromAddress`to`toAddress`, sign the transaction using SDK, and send the signed transaction to the Greenfield node.

```go
	// transfer token to acccount2
	transferTxHash, err := cli.Transfer(ctx, account2.GetAddress().String(), math.NewIntFromUint64(1000000000000000000), types2.TxOption{})
	if err != nil {
		log.Fatalf("unable to send, %v", err)
	}
	log.Printf("Transfer response: %s", transferTxHash)

	// wait for transaction hash
	waitForTx, err := cli.WaitForTx(ctx, transferTxHash)

	log.Printf("Wait for tx: %s", waitForTx.String())

	//verify account2's balance
	balance, err = cli.GetAccountBalance(ctx, account2.GetAddress().String())
```

Run the code to test the transfer of tBNB:

```go
	go run account.go
```

This will output something like:

```shell
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

### Make A Storage Deal

Storing data is one of the most important features of Greenfield. In this section, we’ll walk through the end-to-end process of storing your data on the Greenfield network. We’ll start by importing your data, then make a storage deal with a storage provider, and finally wait for the deal to complete.

#### 1. Create a `storage.go` file

Create a `storage.go` file in yourdemoproject and add the following boilerplate code:

```go
func main() {

  // initialize account
  account, err := types.NewAccountFromPrivateKey("test", privateKey)
  log.Println("address info:", account)

  if err != nil {
	  log.Fatalf("New account from private key error, %v", err)
  }

  //initialize client
  cli, err := client.New(chainId, rpcAddr, client.Option{DefaultAccount: account})
  if err != nil {
	  log.Fatalf("unable to new greenfield client, %v", err)
  }
  ctx := context.Background()

  // 1. choose storage provider

  // 2. Create a bucket

  // 3. Upload your data and set a quota
}
```


#### 2. Choose SP

You can query the list of SP.

```go
	// get storage providers list
	spLists, err := cli.ListStorageProviders(ctx, true)
	if err != nil {
		log.Fatalf("fail to list in service sps")
	}
	//choose the first sp to be the primary SP
	primarySP := spLists[0].GetOperatorAddress()
```

#### 3. Create Buckets

Bucket can be private or public. You can customize it with options.

*   VISIBILITY\_TYPE\_PUBLIC\_READ
*   VISIBILITY\_TYPE\_PRIVATE

```go
	chargedQuota := uint64(100)
	visibility := storageTypes.VISIBILITY_TYPE_PUBLIC_READ
	opts := types.CreateBucketOptions{Visibility: visibility, ChargedQuota: chargedQuota}
```

To understand how does `quota` work, read [this](https://docs.bnbchain.org/greenfield-docs/docs/guide/core-concept/billing-payment#storage-service-fee).



#### 4. Upload Objects

Objects can also be private or public.


Uploading objects is composed of two parts: `create` and `put`.

*   `CreateObject` gets an approval of creating an object and sends createObject txn to Greenfield network.
*   `PutObject` supports the second stage of uploading the object to bucket.

```go
    // create and put object
	txnHash, err := cli.CreateObject(ctx, bucketName, objectName, bytes.NewReader(buffer.Bytes()), types.CreateObjectOptions{})

	handleErr(err, "CreateObject")

	// Put your object
	err = cli.PutObject(ctx, bucketName, objectName, int64(buffer.Len()),
		bytes.NewReader(buffer.Bytes()), types.PutObjectOptions{TxnHash: txnHash})
	handleErr(err, "PutObject")

	log.Printf("object: %s has been uploaded to SP\n", objectName)

	//wait for SP to seal your object
	waitObjectSeal(cli, bucketName, objectName)
```

The primary SP syncs with secondary SPs to set up the data redundancy, and then it signs a "`Seal`" transaction with the finalized metadata for storage. If the primary SP determines that it doesn't want to store the file due to whatever reason, it can also "`SealReject`" the request.



### Object Management

#### 1. Read Object

You can call `GetObject` function to download data.

```go
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



#### 2. Update Object Visibility

You can call `UpdateObjectVisibility` to change object visibility

```go
	// update object visibility
	updateBucketTx, err := ccli.UpdateBucketVisibility(s.ClientContext, bucketName,
	storageTypes.VISIBILITY_TYPE_PRIVATE, types.UpdateVisibilityOption{})
```

#### 3. Delete Object

The function `DeleteObject` support deleting objects.

```go
	// delete object
	delTx, err := cli.DeleteObject(ctx, bucketName, objectName, types.DeleteObjectOption{})
	handleErr(err, "DeleteObject")
	_, err = cli.WaitForTx(ctx, delTx)
	if err != nil {
		log.Fatalln("txn fail")
	}
	log.Printf("object: %s has been deleted\n", objectName)
```

## Greenfield Client Documentation

## Usage

```
    import "github.com/bnb-chain/greenfield-go-sdk/client"
```

Package client provides a client for interact with greenfield storage network.

### Usage

#### Type Account

```go
type Account interface {
	GetAccount(ctx context.Context, address string) (authTypes.AccountI, error)
	GetAccountBalance(ctx context.Context, address string) (*sdk.Coin, error)
	GetPaymentAccount(ctx context.Context, address string) (*paymentTypes.PaymentAccount, error)
	GetModuleAccounts(ctx context.Context) ([]authTypes.ModuleAccountI, error)
	GetModuleAccountByName(ctx context.Context, name string) (authTypes.ModuleAccountI, error)
	GetPaymentAccountsByOwner(ctx context.Context, owner string) ([]*paymentTypes.PaymentAccount, error)

	CreatePaymentAccount(ctx context.Context, address string, txOption gnfdSdkTypes.TxOption) (string, error)
	Transfer(ctx context.Context, toAddress string, amount math.Int, txOption gnfdSdkTypes.TxOption) (string, error)
	MultiTransfer(ctx context.Context, details []types.TransferDetail, txOption gnfdSdkTypes.TxOption) (string, error)
}
```


#### Type Basic

Basic interface defines basic functions of greenfield client.

```go
type Basic interface {
    GetNodeInfo(ctx context.Context) (*p2p.DefaultNodeInfo, *tmservice.VersionInfo, error)
    
    GetStatus(ctx context.Context) (*ctypes.ResultStatus, error)
    GetCommit(ctx context.Context, height int64) (*ctypes.ResultCommit, error)
    GetLatestBlockHeight(ctx context.Context) (int64, error)
    GetLatestBlock(ctx context.Context) (*bfttypes.Block, error)
    GetSyncing(ctx context.Context) (bool, error)
    GetBlockByHeight(ctx context.Context, height int64) (*bfttypes.Block, error)
    GetBlockResultByHeight(ctx context.Context, height int64) (*ctypes.ResultBlockResults, error)
    
    GetValidatorSet(ctx context.Context) (int64, []*bfttypes.Validator, error)
    GetValidatorsByHeight(ctx context.Context, height int64) ([]*bfttypes.Validator, error)
    
    WaitForBlockHeight(ctx context.Context, height int64) error
    WaitForTx(ctx context.Context, hash string) (*ctypes.ResultTx, error)
    WaitForNBlocks(ctx context.Context, n int64) error
    WaitForNextBlock(ctx context.Context) error
    
    SimulateTx(ctx context.Context, msgs []sdk.Msg, txOpt types.TxOption, opts ...grpc.CallOption) (*tx.SimulateResponse, error)
    SimulateRawTx(ctx context.Context, txBytes []byte, opts ...grpc.CallOption) (*tx.SimulateResponse, error)
    BroadcastTx(ctx context.Context, msgs []sdk.Msg, txOpt types.TxOption, opts ...grpc.CallOption) (*tx.BroadcastTxResponse, error)
    BroadcastRawTx(ctx context.Context, txBytes []byte, sync bool) (*sdk.TxResponse, error)
    
    BroadcastVote(ctx context.Context, vote votepool.Vote) error
    QueryVote(ctx context.Context, eventType int, eventHash []byte) (*ctypes.ResultQueryVote, error)
}
```


#### Type Bucket

```go
type Bucket interface {
	GetCreateBucketApproval(ctx context.Context, createBucketMsg *storageTypes.MsgCreateBucket) (*storageTypes.MsgCreateBucket, error)
	// CreateBucket get approval of creating bucket and send createBucket txn to greenfield chain
	// primaryAddr indicates the HEX-encoded string of the primary storage provider address to which the bucket will be created
	CreateBucket(ctx context.Context, bucketName string, primaryAddr string, opts types.CreateBucketOptions) (string, error)
	DeleteBucket(ctx context.Context, bucketName string, opt types.DeleteBucketOption) (string, error)

	UpdateBucketVisibility(ctx context.Context, bucketName string, visibility storageTypes.VisibilityType, opt types.UpdateVisibilityOption) (string, error)
	UpdateBucketInfo(ctx context.Context, bucketName string, opts types.UpdateBucketOptions) (string, error)
	UpdateBucketPaymentAddr(ctx context.Context, bucketName string, paymentAddr sdk.AccAddress, opt types.UpdatePaymentOption) (string, error)

	HeadBucket(ctx context.Context, bucketName string) (*storageTypes.BucketInfo, error)
	HeadBucketByID(ctx context.Context, bucketID string) (*storageTypes.BucketInfo, error)
	// PutBucketPolicy put the bucket policy to the principal, return the txn hash
	// the principal can be generated by NewPrincipalWithAccount or NewPrincipalWithGroupId
	PutBucketPolicy(ctx context.Context, bucketName string, principal types.Principal, statements []*permTypes.Statement, opt types.PutPolicyOption) (string, error)
	// DeleteBucketPolicy delete the bucket policy of the principal，return the txn hash
	// the principal can be generated by NewPrincipalWithAccount or NewPrincipalWithGroupId
	DeleteBucketPolicy(ctx context.Context, bucketName string, principal types.Principal, opt types.DeletePolicyOption) (string, error)
	// GetBucketPolicy get the bucket policy info of the user specified by principalAddr.
	// principalAddr indicates the HEX-encoded string of the principal address
	GetBucketPolicy(ctx context.Context, bucketName string, principalAddr string) (*permTypes.Policy, error)
	// IsBucketPermissionAllowed check if the permission of bucket is allowed to the user.
	// userAddr indicates the HEX-encoded string of the user address
	IsBucketPermissionAllowed(ctx context.Context, userAddr string, bucketName string, action permTypes.ActionType) (permTypes.Effect, error)

	ListBuckets(ctx context.Context, opts types.ListBucketsOptions) (types.ListBucketsResult, error)
	ListBucketReadRecord(ctx context.Context, bucketName string, opts types.ListReadRecordOptions) (types.QuotaRecordInfo, error)

	BuyQuotaForBucket(ctx context.Context, bucketName string, targetQuota uint64, opt types.BuyQuotaOption) (string, error)
	GetBucketReadQuota(ctx context.Context, bucketName string) (types.QuotaInfo, error)
	// ListBucketsByBucketID list buckets by bucket ids
	ListBucketsByBucketID(ctx context.Context, bucketIds []uint64, opts types.EndPointOptions) (types.ListBucketsByBucketIDResponse, error)
	GetMigrateBucketApproval(ctx context.Context, migrateBucketMsg *storageTypes.MsgMigrateBucket) (*storageTypes.MsgMigrateBucket, error)
	MigrateBucket(ctx context.Context, bucketName string, opts types.MigrateBucketOptions) (string, error)
    CancelMigrateBucket(ctx context.Context, bucketName string, opts types.CancelMigrateBucketOptions) (uint64, string, error)
}

```


#### Type Challenge

```go
type Challenge interface {
	// GetChallengeInfo return the challenge hash and data results based on the objectID and index info
	// If the sp endpoint or sp address info is not set in the GetChallengeInfoOptions, the SP endpoint will be routed by the redundancyIndex
	GetChallengeInfo(ctx context.Context, objectID string, pieceIndex, redundancyIndex int, opts types.GetChallengeInfoOptions) (types.ChallengeResult, error)
	SubmitChallenge(ctx context.Context, challengerAddress, spOperatorAddress, bucketName, objectName string, randomIndex bool, segmentIndex uint32, txOption gnfdsdktypes.TxOption) (*sdk.TxResponse, error)
	AttestChallenge(ctx context.Context, submitterAddress, challengerAddress, spOperatorAddress string, challengeId uint64, objectId math.Uint, voteResult challengetypes.VoteResult, voteValidatorSet []uint64, VoteAggSignature []byte, txOption gnfdsdktypes.TxOption) (*sdk.TxResponse, error)
	LatestAttestedChallenges(ctx context.Context, req *challengetypes.QueryLatestAttestedChallengesRequest) ([]uint64, error)
	InturnAttestationSubmitter(ctx context.Context, req *challengetypes.QueryInturnAttestationSubmitterRequest) (*challengetypes.QueryInturnAttestationSubmitterResponse, error)
	ChallengeParams(ctx context.Context, req *challengetypes.QueryParamsRequest) (*challengetypes.QueryParamsResponse, error)
}
```


#### Type Client

```go
type Client interface {
	Basic
	Bucket
	Object
	Group
	Challenge
	Account
	Payment
	SP
	Proposal
	Validator
	Distribution
	CrossChain
	FeeGrant
	VirtualGroup
	OffChainAuth
	
	GetDefaultAccount() (*types.Account, error)
	SetDefaultAccount(account *types.Account)
	EnableTrace(outputStream io.Writer, onlyTraceErr bool)
}
```


#### Func New

`New` function instantiate greenfield chain with chain info, account info and options.
endpoint indicates the rpc address of greenfield

```go
func New(chainID string, endpoint string, option Option) (Client, error)
```


#### Type CrossChain

```go
type CrossChain interface {
	TransferOut(ctx context.Context, toAddress string, amount math.Int, txOption gnfdSdkTypes.TxOption) (*sdk.TxResponse, error)

	Claims(ctx context.Context, srcShainId, destChainId uint32, sequence uint64, timestamp uint64, payload []byte, voteAddrSet []uint64, aggSignature []byte, txOption gnfdSdkTypes.TxOption) (*sdk.TxResponse, error)
    GetChannelSendSequence(ctx context.Context, destChainId sdk.ChainID, channelId uint32) (uint64, error)
    GetChannelReceiveSequence(ctx context.Context, destChainId sdk.ChainID, channelId uint32) (uint64, error)
	GetInturnRelayer(ctx context.Context, req *oracletypes.QueryInturnRelayerRequest) (*oracletypes.QueryInturnRelayerResponse, error)
    GetCrossChainPackage(ctx context.Context, destChainId sdk.ChainID, channelId uint32, sequence uint64) ([]byte, error)

    MirrorGroup(ctx context.Context, destChainId sdk.ChainID, groupId math.Uint, groupName string, txOption gnfdSdkTypes.TxOption) (*sdk.TxResponse, error)
    MirrorBucket(ctx context.Context, destChainId sdk.ChainID, bucketId math.Uint, bucketName string, txOption gnfdSdkTypes.TxOption) (*sdk.TxResponse, error)
    MirrorObject(ctx context.Context, destChainId sdk.ChainID, objectId math.Uint, bucketName, objectName string, txOption gnfdSdkTypes.TxOption) (*sdk.TxResponse, error)
}
```


#### Type Distribution

```go
type Distribution interface {
	SetWithdrawAddress(ctx context.Context, withdrawAddr string, txOption gnfdsdktypes.TxOption) (string, error)
	WithdrawValidatorCommission(ctx context.Context, txOption gnfdsdktypes.TxOption) (string, error)
	WithdrawDelegatorReward(ctx context.Context, validatorAddr string, txOption gnfdsdktypes.TxOption) (string, error)
	FundCommunityPool(ctx context.Context, amount math.Int, txOption gnfdsdktypes.TxOption) (string, error)
}
```


#### Type FeeGrant

```go
type FeeGrant interface {
	GrantBasicAllowance(ctx context.Context, granteeAddr string, feeAllowanceAmount math.Int, expiration *time.Time, txOption gnfdsdktypes.TxOption) (string, error)
	QueryBasicAllowance(ctx context.Context, granterAddr, granteeAddr string) (*feegrant.BasicAllowance, error)

	// for generic allowance(BasicAllowance, PeriodicAllowance, AllowedMsgAllowance)
	GrantAllowance(ctx context.Context, granteeAddr string, allowance feegrant.FeeAllowanceI, txOption gnfdsdktypes.TxOption) (string, error)
	QueryAllowance(ctx context.Context, granterAddr, granteeAddr string) (*feegrant.Grant, error)
	QueryAllowances(ctx context.Context, granteeAddr string) ([]*feegrant.Grant, error)

	RevokeAllowance(ctx context.Context, granteeAddr string, txOption gnfdsdktypes.TxOption) (string, error)
}
```


#### Type Group

```go
type Group interface {
	// CreateGroup create a new group on greenfield chain the group members can be initialized  or not
	CreateGroup(ctx context.Context, groupName string, opt types.CreateGroupOptions) (string, error)
	// DeleteGroup send DeleteGroup txn to greenfield chain and return txn hash
	DeleteGroup(ctx context.Context, groupName string, opt types.DeleteGroupOption) (string, error)
	// UpdateGroupMember support adding or removing members from the group and return the txn hash
	// groupOwnerAddr indicates the HEX-encoded string of the group owner address
	// addAddresses indicates the HEX-encoded string list of the member addresses to be added
	// removeAddresses indicates the HEX-encoded string list of the member addresses to be removed
    // expirationTime  indicates the expiration time of the group member, user need set the expiration time for the addAddresses
    UpdateGroupMember(ctx context.Context, groupName string, groupOwnerAddr string,
    addAddresses, removeAddresses []string, opts types.UpdateGroupMemberOption) (string, error)
	// LeaveGroup make the member leave the specific group
	// groupOwnerAddr indicates the HEX-encoded string of the group owner address
	LeaveGroup(ctx context.Context, groupName string, groupOwnerAddr string, opt types.LeaveGroupOption) (string, error)
	// HeadGroup query the groupInfo on chain, return the group info if exists return err info if group not exist
	// groupOwnerAddr indicates the HEX-encoded string of the group owner address
	HeadGroup(ctx context.Context, groupName string, groupOwnerAddr string) (*storageTypes.GroupInfo, error)
	// HeadGroupMember query the group member info on chain, return true if the member exists in group
	// groupOwnerAddr indicates the HEX-encoded string of the group owner address
	// headMember indicates the HEX-encoded string of the group member address
	HeadGroupMember(ctx context.Context, groupName string, groupOwner, headMember string) bool
	// PutGroupPolicy apply group policy to user specified by principalAddr, the sender need to be the owner of the group
	// principalAddr indicates the HEX-encoded string of the principal address
	PutGroupPolicy(ctx context.Context, groupName string, principalAddr string, statements []*permTypes.Statement, opt types.PutPolicyOption) (string, error)
	// DeleteGroupPolicy  delete group policy of the principal, the sender need to be the owner of the group
	// principalAddr indicates the HEX-encoded string of the principal address
	DeleteGroupPolicy(ctx context.Context, groupName string, principalAddr string, opt types.DeletePolicyOption) (string, error)
	// GetBucketPolicyOfGroup get the bucket policy info of the group specified by group id
	// it queries a bucket policy that grants permission to a group
	GetBucketPolicyOfGroup(ctx context.Context, bucketName string, groupId uint64) (*permTypes.Policy, error)
	// GetObjectPolicyOfGroup get the object policy info of the group specified by group id
	// it queries an object policy that grants permission to a group
	GetObjectPolicyOfGroup(ctx context.Context, bucketName, objectName string, groupId uint64) (*permTypes.Policy, error)
	// GetGroupPolicy get the group policy info of the user specified by principalAddr
	GetGroupPolicy(ctx context.Context, groupName string, principalAddr string) (*permTypes.Policy, error)
	// ListGroup get the group list by name and prefix.
	// prefix is the start of the search pattern. The system will only return groups that start with this prefix.
	// name is the ending of the search pattern.
	// it provides fuzzy searches by inputting a specific name and prefix
	ListGroup(ctx context.Context, name, prefix string, opts types.ListGroupsOptions) (types.ListGroupsResult, error)
    // RenewGroupMember renew a list of group members and their expiration time
    RenewGroupMember(ctx context.Context, groupOwnerAddr, groupName string, memberAddresses []string, opts types.RenewGroupMemberOption) (string, error)
    // ListGroupMembers returns a list of members contained within the group specified by the group id, including those for which the user's expiration time has already elapsed
    ListGroupMembers(ctx context.Context, groupID int64, opts types.GroupMembersPaginationOptions) (*types.GroupMembersResult, error)
    // ListGroupsByAccount returns a list of all groups that the user has joined, including those for which the user's expiration time has already elapsed
    // By default, the user is the sender. Other users can be set using the option
    ListGroupsByAccount(ctx context.Context, opts types.GroupsPaginationOptions) (*types.GroupsResult, error)
    // ListGroupsByOwner returns a list of groups owned by the specified user, including those for which the user's expiration time has already elapsed
    // By default, the user is the sender. Other users can be set using the option
    ListGroupsByOwner(ctx context.Context, opts types.GroupsOwnerPaginationOptions) (*types.GroupsResult, error)
}
```


#### Type Object

```go
type Object interface {
	GetCreateObjectApproval(ctx context.Context, createObjectMsg *storageTypes.MsgCreateObject) (*storageTypes.MsgCreateObject, error)
	CreateObject(ctx context.Context, bucketName, objectName string, reader io.Reader, opts types.CreateObjectOptions) (string, error)
	PutObject(ctx context.Context, bucketName, objectName string, objectSize int64, reader io.Reader, opts types.PutObjectOptions) error
	putObjectResumable(ctx context.Context, bucketName, objectName string, objectSize int64, reader io.Reader, opts types.PutObjectOptions) error
	FPutObject(ctx context.Context, bucketName, objectName, filePath string, opts types.PutObjectOptions) (err error)
	CancelCreateObject(ctx context.Context, bucketName, objectName string, opt types.CancelCreateOption) (string, error)
	DeleteObject(ctx context.Context, bucketName, objectName string, opt types.DeleteObjectOption) (string, error)
	GetObject(ctx context.Context, bucketName, objectName string, opts types.GetObjectOptions) (io.ReadCloser, types.ObjectStat, error)
	FGetObject(ctx context.Context, bucketName, objectName, filePath string, opts types.GetObjectOptions) error
	FGetObjectResumable(ctx context.Context, bucketName, objectName, filePath string, opts types.GetObjectOptions) error

	// HeadObject query the objectInfo on chain to check th object id, return the object info if exists
	// return err info if object not exist
	HeadObject(ctx context.Context, bucketName, objectName string) (*types.ObjectDetail, error)
	// HeadObjectByID query the objectInfo on chain by object id, return the object info if exists
	// return err info if object not exist
	HeadObjectByID(ctx context.Context, objID string) (*types.ObjectDetail, error)
	// UpdateObjectVisibility update the visibility of the object
	UpdateObjectVisibility(ctx context.Context, bucketName, objectName string, visibility storageTypes.VisibilityType, opt types.UpdateObjectOption) (string, error)
	// PutObjectPolicy apply object policy to the principal, return the txn hash
	// The principal can be generated by NewPrincipalWithAccount or NewPrincipalWithGroupId
	PutObjectPolicy(ctx context.Context, bucketName, objectName string, principal types.Principal,
		statements []*permTypes.Statement, opt types.PutPolicyOption) (string, error)
	// DeleteObjectPolicy delete the object policy of the principal, return the txn hash
	// The principal can be generated by NewPrincipalWithAccount or NewPrincipalWithGroupId
	DeleteObjectPolicy(ctx context.Context, bucketName, objectName string, principal types.Principal, opt types.DeletePolicyOption) (string, error)
	// GetObjectPolicy get the object policy info of the user specified by principalAddr.
	// principalAddr indicates the HEX-encoded string of the principal address
	GetObjectPolicy(ctx context.Context, bucketName, objectName string, principalAddr string) (*permTypes.Policy, error)
	// IsObjectPermissionAllowed check if the permission of the object is allowed to the user
	// userAddr indicates the HEX-encoded string of the user address
	IsObjectPermissionAllowed(ctx context.Context, userAddr string, bucketName, objectName string, action permTypes.ActionType) (permTypes.Effect, error)
	ListObjects(ctx context.Context, bucketName string, opts types.ListObjectsOptions) (types.ListObjectsResult, error)
	// ComputeHashRoots compute the integrity hash, content size and the redundancy type of the file
	// If isSerial is true, compute the integrity hash using the serial way
	// If isSerial is false or not provided, compute the integrity hash using the parallel way
	ComputeHashRoots(reader io.Reader, isSerial bool) ([][]byte, int64, storageTypes.RedundancyType, error)

	// CreateFolder creates an empty object used as folder.
	// objectName must ending with a forward slash (/) character
	CreateFolder(ctx context.Context, bucketName, objectName string, opts types.CreateObjectOptions) (string, error)
	// GetObjectUploadProgress return the status of the uploading object
	GetObjectUploadProgress(ctx context.Context, bucketName, objectName string) (string, error)

	// GetObjectResumableUploadOffset return the status of the uploading object
	GetObjectResumableUploadOffset(ctx context.Context, bucketName, objectName string) (uint64, error)
	// ListObjectsByObjectID list objects by object ids
	ListObjectsByObjectID(ctx context.Context, objectIds []uint64, opts types.EndPointOptions) (types.ListObjectsByObjectIDResponse, error)
}
```


### Type OffChainAuth
```go
type OffChainAuth interface {
    RegisterEDDSAPublicKey(spAddress string, spEndpoint string) (string, error)
    OffChainAuthSign(unsignBytes []byte) string
}
```

#### Type Option

Option is a configuration struct used to provide optional parameters to the
client constructor.

```go
type Option struct {
	// GrpcDialOption is the list of gRPC dial options used to configure the connection to the blockchain node.
	GrpcDialOption grpc.DialOption
	// account used to set the default account of client
	DefaultAccount *types.Account
	// Secure is a flag that specifies whether the client should use HTTPS or not.
	Secure bool
	// Transport is the HTTP transport used to send requests to the storage provider endpoint.
	Transport http.RoundTripper
	// Host is the target sp server hostname
	Host string
    // OffChainAuthOption consists of a EdDSA private key and the domain where the EdDSA keys will be registered for.
    // This property should not be set in most cases unless you want to use go-sdk to test if the SP support off-chain-auth feature.
    // Once this property is set, the request will be signed in "off-chain-auth" way rather than v1
    OffChainAuthOption *OffChainAuthOption
    // UseWebSocketConn specifies that connection to Chain is via websocket
    UseWebSocketConn bool
    // ExpireSeconds indicates the number of seconds after which the authentication of the request sent to the SP will become invalid，the default value is 1000
    ExpireSeconds uint64
}
```


#### type Payment

```go
type Payment interface {
	GetStreamRecord(ctx context.Context, streamAddress string) (*paymentTypes.StreamRecord, error)

	Deposit(ctx context.Context, toAddress string, amount math.Int, txOption gnfdSdkTypes.TxOption) (string, error)
	Withdraw(ctx context.Context, fromAddress string, amount math.Int, txOption gnfdSdkTypes.TxOption) (string, error)
	DisableRefund(ctx context.Context, paymentAddress string, txOption gnfdSdkTypes.TxOption) (string, error)
}
```


#### Type Proposal

```go
type Proposal interface {
	SubmitProposal(ctx context.Context, msgs []sdk.Msg, depositAmount math.Int, title, summary string, opts types.SubmitProposalOptions) (uint64, string, error)
	VoteProposal(ctx context.Context, proposalID uint64, voteOption govTypesV1.VoteOption, opts types.VoteProposalOptions) (string, error)
	GetProposal(ctx context.Context, proposalID uint64) (*govTypesV1.Proposal, error)
}
```


#### Type SP

```go
type SP interface {
	// ListStorageProviders return the storage provider info on chain
	// isInService indicates if only display the sp with STATUS_IN_SERVICE status
	ListStorageProviders(ctx context.Context, isInService bool) ([]spTypes.StorageProvider, error)
	// GetStorageProviderInfo return the sp info with the sp chain address
	GetStorageProviderInfo(ctx context.Context, SPAddr sdk.AccAddress) (*spTypes.StorageProvider, error)
	// GetStoragePrice returns the storage price for a particular storage provider, including update time, read price, store price and .etc.
	GetStoragePrice(ctx context.Context, SPAddr string) (*spTypes.SpStoragePrice, error)
	// GetGlobalSpStorePrice returns the global storage price, including update time and store price
	GetGlobalSpStorePrice(ctx context.Context) (*spTypes.GlobalSpStorePrice, error)
    // GrantDepositForStorageProvider submit a grant transaction to allow gov module account to deduct the specified number of token
    GrantDepositForStorageProvider(ctx context.Context, spAddr string, depositAmount math.Int, opts types.GrantDepositForStorageProviderOptions) (string, error)
	// CreateStorageProvider submits a proposal to create a storage provider to the greenfield blockchain, and it returns a proposal ID
	CreateStorageProvider(ctx context.Context, fundingAddr, sealAddr, approvalAddr, gcAddr, blsPubKey, blsProof, endpoint string, depositAmount math.Int, description spTypes.Description, opts types.CreateStorageProviderOptions) (uint64, string, error)
	// UpdateSpStoragePrice updates the read price, storage price and free read quota for a particular storage provider
	UpdateSpStoragePrice(ctx context.Context, spAddr string, readPrice, storePrice sdk.Dec, freeReadQuota uint64, TxOption gnfdSdkTypes.TxOption) (string, error)
    // UpdateSpStatus set an SP status between STATUS_IN_SERVICE and STATUS_IN_MAINTENANCE, duration is requested time an SP wish to stay in maintenance mode
    // for setting to STATUS_IN_SERVICE, duration is set to 0
    UpdateSpStatus(ctx context.Context, spAddr string, status spTypes.Status, duration int64, TxOption gnfdSdkTypes.TxOption) (string, error)
}
```


#### Type Validator

```go
type Validator interface {
	// ListValidators lists all validators (if status is empty string) or validators filtered by status.
	// status:
	//  "BOND_STATUS_UNBONDED",
	//  "BOND_STATUS_UNBONDING",
	//	"BOND_STATUS_BONDED",
	ListValidators(ctx context.Context, status string) (*stakingtypes.QueryValidatorsResponse, error)

    CreateValidator(ctx context.Context, description stakingtypes.Description, commission stakingtypes.CommissionRates,
        selfDelegation math.Int, validatorAddress string, ed25519PubKey string, selfDelAddr string, relayerAddr string, challengerAddr string, blsKey, blsProof string,
        proposalDepositAmount math.Int, proposalTitle, proposalSummary, proposalMetadata string, txOption gnfdsdktypes.TxOption) (uint64, string, error)
    EditValidator(ctx context.Context, description stakingtypes.Description, newRate *sdktypes.Dec,
		newMinSelfDelegation *math.Int, newRelayerAddr, newChallengerAddr, newBlsKey, blsProof string, txOption gnfdsdktypes.TxOption) (string, error)
    DelegateValidator(ctx context.Context, validatorAddr string, amount math.Int, txOption gnfdsdktypes.TxOption) (string, error)
	BeginRedelegate(ctx context.Context, validatorSrcAddr, validatorDestAddr string, amount math.Int, txOption gnfdsdktypes.TxOption) (string, error)
	Undelegate(ctx context.Context, validatorAddr string, amount math.Int, txOption gnfdsdktypes.TxOption) (string, error)
	CancelUnbondingDelegation(ctx context.Context, validatorAddr string, creationHeight int64, amount math.Int, txOption gnfdsdktypes.TxOption) (string, error)
	GrantDelegationForValidator(ctx context.Context, delegationAmount math.Int, txOption gnfdsdktypes.TxOption) (string, error)

	UnJailValidator(ctx context.Context, txOption gnfdsdktypes.TxOption) (string, error)
	ImpeachValidator(ctx context.Context, validatorAddr string, txOption gnfdsdktypes.TxOption) (string, error)
}
```



## Code Repository SDK
- [Official Go implementation SDK](https://github.com/bnb-chain/greenfield-go-sdk)


## More info

* [Storage Module on Greenfield](https://docs.bnbchain.org/greenfield-docs/docs/guide/greenfield-blockchain/modules/storage-module): The storage module on Greenfield Chain.
* [Storage Provider on Greenfield](https://docs.bnbchain.org/greenfield-docs/docs/guide/greenfield-blockchain/modules/storage-provider): The storage provider on Greenfield Chain.
* [Data Availability Challenge](https://docs.bnbchain.org/greenfield-docs/docs/guide/greenfield-blockchain/modules/data-availability-challenge): The correctness of payload be stored in SP.
* [Storage Provider Introduction](https://docs.bnbchain.org/greenfield-docs/docs/guide/storage-provider/introduction/overview): The Greenfield Storage Provider documents.
* [Storage Provider Compiling and Dependencies](https://docs.bnbchain.org/greenfield-docs/docs/guide/storage-provider/run-book/compile-dependences): The detailed introduction to sp compiling and dependencies.
* [Run Local Storage Provider Network](https://docs.bnbchain.org/greenfield-docs/docs/guide/storage-provider/run-book/run-local-SP-network): The introduction to run local SP env for testing.
* [Run Testnet Storage Provider Node](https://docs.bnbchain.org/greenfield-docs/docs/guide/storage-provider/run-book/run-testnet-SP-node): The introduction to run testnet SP node.
