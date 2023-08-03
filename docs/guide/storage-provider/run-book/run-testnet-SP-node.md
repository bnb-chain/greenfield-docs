---
title: Run Testnet SP Node
order: 3
---
This guide helps you to set up a Storage Provider and add it to Greenfield testnet.

## Recommended Prerequisites

The following lists the recommended hardware requirements:

* VPS running recent versions of Mac OS X, Linux, or Windows；
* 16 cores of CPU, 64 GB of memory(RAM);
* 1 Gbps network connection with upload/download speeds of 10MB/s+；
* At least 1 TB disk space for backend storage;
* 50GB+ SQL database;
* Piece Store: AWS S3, MinIO(Beta);
* 5 Greenfield accounts with enough BNB tokens.

:::danger IMPORTANT
Each storage provider will hold 5 different accounts serving different purposes:

* Operator Account: Used to edit the information of the StorageProvider. Please make sure it have enough BNB to deposit the create storage provider proposal(1 BNB) and pay the gas fee of `EditStorageProvider` transaction.
* Funding Account: Used to deposit staking tokens and receive earnings. It is important to ensure that there is enough money in this account, and the user must submit a deposit as a guarantee. At least **1000+** BNB are required for staking. You should use this address to send `CreateValidator` proposal on-chain. 
* Seal Account: Used to seal the user's object. Please make sure it has enough BNB to pay the gas fee of `SealObject` transaction.
* Approval Account: Used to approve user's requests. This account does not require holding BNB tokens.
* GC Account: It is a special address for sp and is used by sp to clean up local expired or unwanted storage. Please make sure it has enough BNB tokens because it's going to keep sending transactions up the chain.

You can use the below command to generate this five accounts:

```shell
./build/bin/gnfd keys add operator --keyring-backend os
./build/bin/gnfd keys add funding --keyring-backend os
./build/bin/gnfd keys add seal --keyring-backend os
./build/bin/gnfd keys add approval --keyring-backend os
./build/bin/gnfd keys add gc --keyring-backend os
```

and then export the private key to prepare for SP deployment:

```shell
./build/bin/gnfd keys export operator --unarmored-hex --unsafe  --keyring-backend os
./build/bin/gnfd keys export funding --unarmored-hex --unsafe  --keyring-backend os
./build/bin/gnfd keys export seal --unarmored-hex --unsafe --keyring-backend os
./build/bin/gnfd keys export approval --unarmored-hex --unsafe --keyring-backend os
./build/bin/gnfd keys export gc --unarmored-hex --unsafe --keyring-backend os
```

Please keep these five private keys safe!

:::

## Create Storage Provider

### 1. Compile SP

[Compile SP doc](./compile-dependences.md#compile-sp).

### 2. SP Testnet Config

#### Generate config template

```shell
cd greenfield-storage-provider/build

# dump default configuration
./gnfd-sp config.dump
```

#### Write config

```toml
Server = []
GRPCAddress = '0.0.0.0:9333'

[SpDB]
User = '${db_user}'
Passwd = '${db_password}'
Address = '${db_address}'
Database = 'storage_provider_db'

[BsDB]
User = '${db_user}'
Passwd = '${db_password}'
Address = '${db_address}'
Database = 'block_syncer'

[BsDBBackup]
User = '${db_user}'
Passwd = '${db_password}'
Address = '${db_address}'
Database = 'block_syncer_backup'

[PieceStore]
Shards = 0

[PieceStore.Store]
Storage = 's3'
BucketURL = '${bucket_url}'
MaxRetries = 5
MinRetryDelay = 0
TLSInsecureSkipVerify = false
IAMType = 'SA'

[Chain]
ChainID = '${chain_id}'
ChainAddress = ['${chain_address}']

[SpAccount]
SpOperatorAddress = '${sp_operator_address}'
OperatorPrivateKey = '${operator_private_key}'
FundingPrivateKey = '${funding_private_key}'
SealPrivateKey = '${seal_private_key}'
ApprovalPrivateKey = '${approval_private_key}'
GcPrivateKey = '${gc_private_key}'

[Endpoint]
ApproverEndpoint = 'manager:9333'
ManagerEndpoint = 'manager:9333'
DownloaderEndpoint = 'downloader:9333'
ReceiverEndpoint = 'receiver:9333'
MetadataEndpoint = 'metadata:9333'
UploaderEndpoint = 'uploader:9333'
P2PEndpoint = 'p2p:9333'
SignerEndpoint = 'signer:9333'
AuthenticatorEndpoint = 'localhost:9333'

[Gateway]
DomainName = '${sp_domain_name}'
HTTPAddress = '0.0.0.0:9033'

[P2P]
# p2p node msg Secp256k1 encryption key, it is different from other SP's addresses
P2PPrivateKey = '${p2p_private_key}'
P2PAddress = '0.0.0.0:9933'
P2PAntAddress = '${load_balance_doamin:port}'
P2PBootstrap = ['node_id@load_balance_doamin:port'] # p2p node's bootstrap node, format: [node_id1@ip1:port1, node_id2@ip1:port2]
P2PPingPeriod = 0

[Parallel]
DiscontinueBucketEnabled = true
DiscontinueBucketKeepAliveDays = 2

[Monitor]
DisableMetrics = false
DisablePProf = false
MetricsHTTPAddress = '0.0.0.0:24367'
PProfHTTPAddress = '0.0.0.0:24368'

[Rcmgr]
DisableRcmgr = false

[Metadata]
IsMasterDB = true
BsDBSwitchCheckIntervalSec = 30

[BlockSyncer]
Modules = ['epoch','bucket','object','payment','group','permission','storage_provider','prefix_tree']
Dsn = "user:passwd*@tcp(localhost:3306)/block_syncer?parseTime=true&multiStatements=true&loc=Local"
DsnSwitched = ''
RecreateTables = false
Workers = 50
EnableDualDB = false
```

:::info About SP Testnet Config

`ChainID` of testnet is `greenfield_5600-1`.

`ChainAddress` of testnet you can use `https://gnfd-testnet-fullnode-tendermint-us.bnbchain.org:443`. Moreover, you can run your own fullnode and use its address.

`P2PPrivateKey` and `node_id` is generated by `./gnfd-sp p2p.create.key -n 1`.

`P2PAntAddress` is your load balance address. If you don't have a load balance address, you should have a public IP and use it in `P2PAddress`.

`P2PBootstrap` consists of [node_id1@ip1:port1, node_id2@ip1:port2], you can use P2PAntAddress or P2PAddress as `ip:port`.

`BlockSyncer.Dsn` the user name and password need to be replaced, but this value can also be set in the environment variable BLOCK_SYNCER_DSN, which the code reads first as a configuration

We recommend you writing `db User, db password, db address, bucketURL, OperatorPrivateKey, FundingPrivateKey, SealPrivateKey, ApprovalPrivateKey, GcPrivateKey and P2PPrivatekey` into environment variables for safety.

:::

### 3. Create Database

You should create three databases: SpDB, BsDB and BsDBBackup, take MySQL as an example, other DB is the same:

block_syncer and block_syncer_backup require the <font color=red>utf8mb4_unicode_ci encoding</font> format

```shell
# login in mysql and create database
# the default encoding for the database should be utf8mb4_unicode_ci
mysql> CREATE DATABASE storage_provider_db;
mysql> CREATE DATABASE block_syncer;
mysql> CREATE DATABASE block_syncer_backup;
# check the database encoding format
mysql> show create database block_syncer;
```

This is the encoding we expect to see

| Database | Create Database |
|----------|-----------------|
|blocl_syncer |  CREATE DATABASE `block_syncer` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_0900_ai_ci` */|


### 4. Run SP

```shell
# start sp
./gnfd-sp --config ${config_file_path}
```

## Add Storage Provider to Greenfield testnet

### 1. Authorization

Before creating the storage provider, it is necessary to allow the module account of the gov module to deduct the tokens from the funding account specified by the SP, because the addition of CreateStorageProvider requires submitting a proposal to the gov module, and only after enough validators approve can the SP be truly created on the chain and provide services externally. The address of the gov module account is `0x7b5Fe22B5446f7C62Ea27B8BD71CeF94e03f3dF2`.

```shell
./build/bin/gnfd keys show operator --keyring-backend os 
./build/bin/gnfd tx sp grant 0x7b5Fe22B5446f7C62Ea27B8BD71CeF94e03f3dF2 --spend-limit 1000000000000000000000BNB --SPAddress {operator_address} --from {funding_address} --keyring-backend os --node https://gnfd-testnet-fullnode-tendermint-us.bnbchain.org:443 
```

The above command requires the funding account of the SP to send the transaction to allow the gov module to have permission to deduct tokens from the funding account of SP which is specified by the operator address.

:::note
You can execute this command to query on-chain parameters. `./gnfd q sp params --node https://gnfd-testnet-fullnode-tendermint-us.bnbchain.org:443`
:::

### 2. submit-proposal

The SP needs to initiate an on-chain proposal that specifies the Msg information to be automatically executed after the vote is approved. In this case, the Msg is `MsgCreateStorageProvider`. It's worth noting that the deposit tokens needs to be greater than the minimum deposit tokens specified on the chain.

```shell
./build/bin/gnfd tx gov submit-proposal path/to/create_sp.json --from {funding_address} --keyring-backend os --node https://gnfd-testnet-fullnode-tendermint-us.bnbchain.org:443

# create_sp.json
$ cat ./create_sp.json
{
  "messages":[
  {
    "@type":"/greenfield.sp.MsgCreateStorageProvider",
    "description":{
      "moniker": "sp0",
      "identity":"",
      "website":"",
      "security_contact":"",
      "details":""
    },
    "sp_address":"{operator_address}",
    "funding_address":"{funding_address}",
    "seal_address":"{seal_address}",
    "approval_address":"{approval_address}",
    "gc_address":"{gc_address}",
    "endpoint": "https://sp0.greenfield.io",
    "deposit":{
      "denom":"BNB",
      "amount":"1000000000000000000000"
    },
    "read_price": "0.060000000000000000",
    "store_price": "0.019000000000000000",
    "free_read_quota": 10000,
    "creator":"0x7b5Fe22B5446f7C62Ea27B8BD71CeF94e03f3dF2"
  }
],
  "metadata": "4pIMOgIGx1vZGU=",
  "title": "Create <name> Validator",
  "summary": "create <name> validator",
  "deposit": "1000000000000000000BNB"
}
```

### 3. deposit tokens to the proposal

Each proposal needs to have enough tokens deposited to enter the voting stage.

```shell
./build/bin/gnfd tx gov deposit {proposal_id} 1BNB --from {funding_address} --keyring-backend os --node https://gnfd-testnet-fullnode-tendermint-us.bnbchain.org:443
```

### 4. Wait voting and check voting result

After submitting the proposal successfully, you must wait for the voting to be completed and the proposal to be approved. It will last 7days on mainnet while 1 day on testnet. Once it has passed and is executed successfully, you can verify that the storage provider has been joined.

:::caution

Default voting time is 30 seconds.

Please ensure that the storage provider service is running before it has been joined.

:::

You can check the on-chain SP information to confirm whether the SP has been successfully created.

```shell
./build/bin/gnfd query sp storage-providers --node https://gnfd-testnet-fullnode-tendermint-us.bnbchain.org:443
```

Alternatively, you can check the proposal to know about its execution status.

```shell
./build/bin/gnfd query gov proposal {proposal_id} --node https://gnfd-testnet-fullnode-tendermint-us.bnbchain.org:443
```

### Deposit

This command is used for the SP to supplement collateral, because if the service status of the SP is not good during operation, it will be slashed by users, resulting in the deduction of its deposit tokens.

```shell
gnfd tx sp deposit [sp-address] [value] [flags]
```

### EditStorageProvider

This command is used to edit the information of the SP, including endpoint, description and .etc.

```shell
gnfd tx sp edit-storage-provider [sp-address] [flags]
```

## Operate with Greenfield Testnet

Users can use Greenfield Cmd or DCellar to operate in Testnet:

* Greenfield Cmd: [repo](https://github.com/bnb-chain/greenfield-cmd)

* DCellar: [website](https://dcellar.io/)
