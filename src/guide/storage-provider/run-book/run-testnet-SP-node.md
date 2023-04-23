---
title: Run Testnet SP node
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
* Piece Store: AWS S3, MinIO(Beta)
* 4 Greenfield Account with enough BNB tokens

::: info
Each storage provider will hold 4 different accounts serving different purposes:

* Operator Account(**cold wallet**): Used to edit the information of the StorageProvider. Please make sure it have enough BNB to deposit the create storage provider proposal(1 BNB) and pay the gas fee of EditStorageProvider transaction.
* Funding Account(**hot wallet**): Used to deposit staking tokens and receive earnings. It is important to ensure that there is enough money in this account, and the user must submit a deposit as a guarantee. At least 1000+ BNB are required for staking.
* Seal Account(**hot wallet**): Used to seal the user's object. Please make sure it have enough BNB to pay the gas fee of SealObject transaction.
* Approval Account(**cold wallet**): Used to approve user's requests. This account does not require holding BNB tokens.

You can use the below command to generate this four account:

```shell
./build/bin/gnfd keys add operator --keyring-backend os
./build/bin/gnfd keys add funding --keyring-backend os
./build/bin/gnfd keys add seal --keyring-backend os
./build/bin/gnfd keys add approval --keyring-backend os
```

and then export the private key to prepare for SP deployment

```shell
./build/bin/gnfd keys export operator --unarmored-hex --unsafe  --keyring-backend os
./build/bin/gnfd keys export funding --unarmored-hex --unsafe  --keyring-backend os
./build/bin/gnfd keys export seal --unarmored-hex --unsafe --keyring-backend os
./build/bin/gnfd keys export approval --unarmored-hex --unsafe --keyring-backend os
```
:::

## Create Storage Provider

### 1. Compile SP

Compile SP can refer this [doc](./compile-dependences.md#compile-sp).

### 2. Configuration

#### Make configuration template

```shell
# dump default configuration
./gnfd-sp config.dump
```

#### Edit configuration

```toml
# start service list
Service = ["gateway", "uploader", "downloader", "challenge", "tasknode", "receiver", "signer", "blocksyncer", "metadata", "manager"]
# sp operator address 
SpOperatorAddress = ""
# service endpoint for other to connect
[Endpoint]
challenge = "localhost:9333"
downloader = "localhost:9233"
gateway = "gnfd.test-sp.com"
metadata = "localhost:9733"
p2p = "localhost:9833"
receiver = "localhost:9533"
signer = "localhost:9633"
tasknode = "localhost:9433"
uploader = "localhost:9133"
# service listen address
[ListenAddress]
challenge = "localhost:9333"
downloader = "localhost:9233"
gateway = "localhost:9033"
metadata = "localhost:9733"
p2p = "localhost:9833"
receiver = "localhost:9533"
signer = "localhost:9633"
tasknode = "localhost:9433"
uploader = "localhost:9133"
# SQL configuration
[SpDBConfig]
User = "root"
Passwd = "test_pwd"
Address = "localhost:3306"
Database = "storage_provider_db"
# piece store configuration
[PieceStoreConfig]
Shards = 0
[PieceStoreConfig.Store]
# default use local file system 
Storage = "file"
BucketURL = "./data"
# greenfiel chain configuration
[ChainConfig]
ChainID = "greenfield_9000-1741"
[[ChainConfig.NodeAddr]]
GreenfieldAddresses = ["localhost:9090"]
TendermintAddresses = ["http://localhost:26750"]
# signer configuration
[SignerCfg]
GRPCAddress = "localhost:9633"
APIKey = ""
WhitelistCIDR = ["127.0.0.1/32"]
GasLimit = 210000
OperatorPrivateKey = ""
FundingPrivateKey = ""
SealPrivateKey = ""
ApprovalPrivateKey = ""
# block syncer configuration
# signer configuration
[BlockSyncerCfg]
Modules = ["epoch", "bucket", "object", "payment"]
Dsn = "localhost:3308"
# p2p node configuration
[P2PCfg]
ListenAddress = "127.0.0.1:9933"
# p2p node msg Secp256k1 encryption key, it is different from other SP's addresses
P2PPrivateKey = ""
# p2p node's bootstrap node, format: [node_id1@ip1:port1, node_id2@ip1:port2]
Bootstrap = []
# log configuration
[LogCfg]
Level = "info"
Path = "./gnfd-sp.log"
# metrics configuration
[MetricsCfg]
Enabled = false
HTTPAddress = "localhost:24036"
```

### 3. Start

```shell
# start sp
./gnfd-sp --config ${config_file_path}
```

## Add Storage Provider to Greenfield testnet

### 1. Authorization

Before creating the storage provider, it is necessary to allow the module account of the gov module to deduct the tokens from the funding account specified by the SP, because the addition of CreateStorageProvider requires submitting a proposal to the gov module, and only after enough validators approve can the SP be truly created on the chain and provide services externally. The address of the gov module account is `0x7b5Fe22B5446f7C62Ea27B8BD71CeF94e03f3dF2`.

```shell
./build/bin/gnfd keys show operator --keyring-backend os 
./build/bin/gnfd tx sp grant 0x7b5Fe22B5446f7C62Ea27B8BD71CeF94e03f3dF2 --spend-limit 1000BNB --SPAddress {operatorAddress} --from funding --keyring-backend os --node https://gnfd-testnet-fullnode-tendermint-us.bnbchain.org:443 
```

The above command requires the funding account of the SP to send the transaction to allow the gov module to have the permission to deduct tokens from the funding account of SP which specified by operator address

### 2. submit-proposal

The SP needs to initiate an on-chain proposal that specifies the Msg information to be automatically executed after the vote is approved. In this case, the Msg is `MsgCreateStorageProvider`. It's worth noting that the deposit tokens needs to be greater than the minimum deposit tokens specified on the chain.

```shell
./build/bin/gnfd tx gov submit-proposal path/to/create_sp.json --from operator --keyring-backend os --node https://gnfd-testnet-fullnode-tendermint-us.bnbchain.org:443

# create_sp.json
./create_sp.json
{
  "messages":[
  {
    "@type":"/bnbchain.greenfield.sp.MsgCreateStorageProvider",
    "description":{
      "moniker": "sp0",
      "identity":"",
      "website":"",
      "security_contact":"",
      "details":""
    },
    "sp_address":"{operate_address}",
    "funding_address":"{funding_address}",
    "seal_address":"{seal_address}",
    "approval_address":"{approval_address}",
    "endpoint": "https://sp0.greenfield.io",
    "deposit":{
      "denom":"BNB",
      "amount":"10000000000000000000000"
    },
    "read_price": "0.060000000000000000",
    "store_price": "0.019000000000000000",
    "free_read_quota": 10000,
    "creator":"0x7b5Fe22B5446f7C62Ea27B8BD71CeF94e03f3dF2"
  }
],
  "metadata": "4pIMOgIGx1vZGU=",
  "deposit": "1000000000000000000BNB"
}

```

### 3. deposit tokens to the proposal

Each proposal needs to have enough tokens deposited to enter the voting stage.

```shell
./build/bin/gnfd tx gov deposit {proposal_id} 1BNB --from sp0 --keyring-backend os --node https://gnfd-testnet-fullnode-tendermint-us.bnbchain.org:443
```

### 4. Wait voting and check voting result

After submitting the proposal successfully, you must wait for the voting to be completed and the proposal to be approved. It will last 7days on mainnet while 1 day on testnet. Once it has passed and is executed successfully, you can verify that the storage provider has been joined.

::: Note

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

## Deposit

This command is used for the SP to supplement collateral, because if the service status of the SP is not good during operation, it will be slashed by users, resulting in the deduction of its deposit tokens.

```shell
gnfd tx sp deposit [sp-address] [value] [flags]
```

## EditStorageProvider

This command is used to edit the information of the SP, including endpoint, description and .etc.

```shell
gnfd tx sp edit-storage-provider [sp-address] [flags]
```
