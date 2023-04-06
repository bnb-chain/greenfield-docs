---
title: Run Mainnet SP node
order: 2
---
This guide helps you to set up a Storage Provider and add it to Greenfield mainnet.

## Prerequisites
The hardware must meet below requirements:
* VPS running recent versions of Mac OS X, Linux, or Windows；
* 16 cores of CPU, 64 GB of memory(RAM);
* 1 GBbps network connection with upload/download speeds of 10MB/s+；
* At least 1 TB disk space for backend storage; 
* 50GB+ SQL database;
* Piece Store: AWS S3, MinIO(Beta)

## Create Storage Provider
### 1. Prepare 4 account addresses in advance

Each storage provider will hold 4 different accounts serving different purposes:

* Operator Address: Used to edit the information of the StorageProvider.
* Funding Address: Used to deposit staking tokens and receive earnings. It is important to ensure that there is enough money in this account, and the user must submit a deposit as a guarantee.
* Seal Address: Used to seal the user's object.
* Approval Address: Used to approve user's requests.

### 2. Deduct Tokens Authorization
Before creating the storage provider, it is necessary to allow the module account of the gov module to deduct the tokens from the funding account specified by the SP, because the addition of CreateStorageProvider requires submitting a proposal to the gov module, and only after enough validators approve can the SP be truly created on the chain and provide services externally. "The address of the gov module account is `0x7b5Fe22B5446f7C62Ea27B8BD71CeF94e03f3dF2`.

```shell
./build/bin/gnfd tx sp grant 0x7b5Fe22B5446f7C62Ea27B8BD71CeF94e03f3dF2 --spend-limit 1000000bnb --SPAddress 0x78FeF615b06251ecfA9Ba01B7DB2BFA892722dDC --from sp0_fund --home ./deployment/localup/.local/sp0 --keyring-backend test --node http://localhost:26750
```

The above command requires the funding account of the SP to send the transaction to allow the gov module to have the permission to deduct tokens from the funding account of SP which specified by operator address

### 3. submit-proposal

The SP needs to initiate an on-chain proposal that specifies the Msg information to be automatically executed after the vote is approved. In this case, the Msg is `MsgCreateStorageProvider`. It's worth noting that the deposit tokens needs to be greater than the minimum deposit tokens specified on the chain.

```shell
./build/bin/gnfd tx gov submit-proposal ./deployment/localup/create_sp.json --from sp0 --keyring-backend test --home ./deployment/localup/.local/sp0  --node http://localhost:26750

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
    "sp_address":"0x78FeF615b06251ecfA9Ba01B7DB2BFA892722dDC",
    "funding_address":"0x1d05CCD43A6c27fBCdfE6Ac727B0e9B889AAbC3B",
    "seal_address":"0x2163A7A41a71ea4A831E4F5Af7f90dd32E440592",
    "approval_address":"0x78FeF615b06251ecfA9Ba01B7DB2BFA892722dDC",
    "endpoint": "sp0.greenfield.io",
    "deposit":{
      "denom":"BNB",
      "amount":"10000000000000000000000"
    },
    "read_price": "100.000000000000000000",
    "store_price": "10000.000000000000000000",
    "free_read_quota": 10000,
    "creator":"0x7b5Fe22B5446f7C62Ea27B8BD71CeF94e03f3dF2"
  }
],
  "metadata": "4pIMOgIGx1vZGU=",
  "deposit": "1000000000000000000BNB"
}

```

### 4. deposit tokens to the proposal
Each proposal needs to have enough tokens deposited to enter the voting stage.

```shell
./build/bin/gnfd tx gov deposit 1 10000bnb --from sp0 --keyring-backend test --home ./deployment/localup/.local/sp0  --node http://localhost:26750
```

### 5. Validator voting 

Validators are required to send transactions to vote. Only after more than 2/3 of the validators vote in favor can this proposal pass.

```shell
./build/bin/gnfd tx gov vote {proposal_id} yes --from validator0 --keyring-backend test --home ./deployment/localup/.local/validator0  --node http://localhost:26750     
```

### 6. Wait for the voting results

Generally, each proposal has a voting window period, which can be viewed in the on-chain configuration. The default is 300 seconds. After the voting period ends, it will be determined whether enough validators have voted in favor. You can check the on-chain SP information to confirm whether the SP has been successfully created.

```shell
./build/bin/gnfd query sp storage-providers --node http://localhost:26750
```

Alternatively, you can check the proposal to know about its execution status.

```shell
./build/bin/gnfd query proposal {proposal_id} --node http://localhost:26750
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
