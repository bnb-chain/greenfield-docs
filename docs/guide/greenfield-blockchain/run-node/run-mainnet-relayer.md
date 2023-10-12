---
title: Run Mainnet Relayer
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

These two keys refer to `validator_relayer` and `validator_bls` created in [become-mainnet-validator](../run-node/become-mainnet-validator.md) step 2.

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
Please refer to [Mainnet configure](https://github.com/bnb-chain/bnb-chain-charts/blob/master/gnfd-relayer-testnet-values/values.yaml#L4) for the Mainnet config example.

For Testnet config, refer to [Testnet configure](https://github.com/bnb-chain/bnb-chain-charts/blob/master/gnfd-relayer-testnet-values/values.yaml#L4).
:::


1. Set relayer private key and bls private key import method (via file or aws secret) and keys, and the block monitoring start height.

    ```
      "greenfield_config": {
        "key_type": "local_private_key", // or "aws_private_key" if you are using aws secret manager.
         ...
        "aws_bls_secret_name": "",
        "private_key": "your_private_key", // this is the relayer private key for relaying transaction.
        "bls_private_key": "your_private_key", // this is the bls key for signing crosschain package.
         ...
        "start_height": 1,  // please change to the current block height of greenfield network.
      }, 
      "bsc_config": {
        "key_type": "local_private_key",  // or "aws_private_key" if you are using aws secret manager.
        ...
        "rpc_addrs": [
           "bsc_rpc_address"
        ],
        "private_key": "your_private_key", // same as the above one in greenfield_congfig.
        ...
        "start_height": 0,   // please change to the current block height of BSC network.
      }
    ```
Note:
You might encounter `Rate limit` issue for using official BSC endpoints, we would highly recommend using 3rd Party RPCs, like the [NodeReal MegaNode](https://nodereal.io/meganode)

2. Config crossChain, greenfield light client and relayer hub smart contracts addresses, others can keep the default value, refer to this 
   [contract-list](../../../tutorials/dapp/contract-list.md) to get these addresses.
    ```
    "relay_config": {
        ... 
        "cross_chain_contract_addr": "0xa5B2c9194131A4E0BFaCbF9E5D6722c873159cb7",
        "greenfield_light_client_contract_addr": "0xa9249cefF9cBc9BAC0D9167b79123b6C7413F50a",
        "relayer_hub_contract_addr": "0x31C477F05CE58bB81A9FB4b8c00560f1cBe185d1"
      }
    ```

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
replace ${pass}, ${user}, ${host} with your Mysql instance credentials and host. 

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