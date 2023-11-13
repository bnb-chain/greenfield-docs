---
title: Run Relayer
order: 5
---

## Prerequisites

### Recommended Hardware

The following lists the recommended hardware requirements:
- Hardware Requirements: Desktop or laptop hardware running recent versions of Mac OS X, or Linux.
- CPU: 4 cores
- RAM: 4 GB
- Relational database: Mysql

### Key Preparation
- Relayer private key: This is the account which is used to relay transaction between Greenfield and the BSC. Ensure it has balance on both Blockchain network.
- Bls private key: Used to create bls signature for cross-chain package.

These two keys refer to `validator_relayer` and `validator_bls` created in [become-validator](../run-node/become-validator.md) step 2.

You can retrieve them with the following commands.
```bash
gnfd keys export validator_relayer --unarmored-hex --unsafe --keyring-backend test

gnfd keys export validator_bls --unarmored-hex --unsafe --keyring-backend test
```

## Prepare binary

Get the greenfield-relayer app by running the following command in your terminal:

```bash
git clone --branch "$(curl -s https://api.github.com/repos/bnb-chain/greenfield-relayer/releases/latest  | jq -r '.tag_name')" https://github.com/bnb-chain/greenfield-relayer.git
cd greenfield-relayer
```

## Config

Modify `config/config.json`. Or, you can create a new one and specify the config path by `--config-path` flag when start the relayer.

:::info
For Testnet config, refer to [Testnet configure](https://github.com/bnb-chain/bnb-chain-charts/blob/master/gnfd-relayer-testnet-values/values.yaml#L4). 
You can use it as a template for your Mainnet config by adapting a few changes as illustrated below.
:::


1. Set relayer private key and bls private key import method (via file or aws secret) and keys, the block monitoring start heights.
    ```
      "greenfield_config": {
        "key_type": "local_private_key", // or "aws_private_key" if you are using aws secret manager.
         ...
        "aws_bls_secret_name": "",
        "private_key": "your_private_key", // this is the relayer private key for relaying transaction.
        "bls_private_key": "your_private_key", // this is the bls key for signing crosschain package.
        "rpc_addrs": [
          "https://greenfield-chain.bnbchain.org:443"
         ]
        "chain_id": 1017,
         ...
        "start_height": 1,  // please change to the current block height of Greenfield network.
        "chain_id_string": "greenfield_1017-1"
      }, 
      "bsc_config": {
        "key_type": "local_private_key",  // or "aws_private_key" if you are using aws secret manager.
        ...
        "rpc_addrs": [
           "BSC_RPC"
        ],
        "private_key": "your_private_key", // same as the above one in greenfield_congfig.
        "gas_limit": 20000000,
        "gas_price": 3000000001,
        ...
        "start_height": 0,   // please change to the current block height of BSC network.
        "chain_id": 56
      }
    ```
   Note:
   Refer to [Greenfield Endpoints](../../../api/endpoints.md) for Greenfield RPC address,
   [BSC Endpoints](https://docs.bscscan.com/misc-tools-and-utilities/public-rpc-nodes) for BSC RPC address, and use the appropriate ones based on your location.
   
   You might encounter `Rate limit` issue for using official BSC endpoints, we would highly recommend using 3rd Party RPCs, like the [NodeReal MegaNode](https://nodereal.io/meganode)

2. Config crossChain, greenfield light client and relayer hub smart contracts addresses, others can keep the default value, refer to this 
   [contract-list](../../core-concept/cross-chain/contract-list.md) to get addresses for Mainnet/Testnet.
   
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

   <Tabs
   defaultValue="mainnet"
   values={[
   {label: 'Mainnet', value: 'mainnet'},
   {label: 'Testnet', value: 'testnet'},
   ]}>
   <TabItem value="mainnet">

    "relay_config": {
        ... 
        "cross_chain_contract_addr": "0x77e719b714be09F70D484AB81F70D02B0E182f7d",
        "greenfield_light_client_contract_addr": "0x433bB48Bd86c089375e53b2E2873A9C4bC0e986B",
        "relayer_hub_contract_addr": "0x31C477F05CE58bB81A9FB4b8c00560f1cBe185d1"
      }

  </TabItem>
  <TabItem value="testnet">

    "relay_config": {
        ... 
        "cross_chain_contract_addr": "0xa5B2c9194131A4E0BFaCbF9E5D6722c873159cb7",
        "greenfield_light_client_contract_addr": "0xa9249cefF9cBc9BAC0D9167b79123b6C7413F50a",
        "relayer_hub_contract_addr": "0x91cA83d95c8454277d1C297F78082B589e6E4Ea3"
      }

  </TabItem>
</Tabs>



3. Config the database settings.
 ```
    "db_config": {
      "dialect": "mysql",
      "key_type": "local_private_key",
      "aws_region": "",
      "aws_secret_name": "",
      "password": "${pass}",
      "username": "${user}",
      "url": "tcp(${host})/greenfield-relayer?charset=utf8&parseTime=True&loc=Local",
      "max_idle_conns": 10,
      "max_open_conns": 100
    }
   ```
Please replace `${pass}`, `${user}`, `${host}` with your Mysql instance credential and host. 

## Build

Build the binary:

```shell script
make build
```

Or

Build docker image:

```shell script
make build_docker
```

## Run

### Create DB Schema
Make sure the database instance is running.

Create schema by MySQL client:

```shell
CREATE SCHEMA IF NOT EXISTS `greenfield-relayer` DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci;
```

### Start Relayer

```shell script
./build/greenfield-relayer --config-type [local or aws] --config-path config_file_path  --aws-region [aws region or omit] --aws-secret-key [aws secret key for config or omit]
```

Example:
```shell script
./build/greenfield-relayer --config-type local --config-path config/config.json
```

Run docker:
```shell script
docker run -it -v /your/data/path:/greenfield-relayer -e CONFIG_TYPE="local" -e CONFIG_FILE_PATH=/your/config/file/path/in/container -d greenfield-relayer
```

Or you can deploy the greenfield relayer application using Helm Chart V3. Please refer to [relayer-readme](https://github.com/bnb-chain/greenfield/blob/master/deployment/helm/relayer-readme.md).