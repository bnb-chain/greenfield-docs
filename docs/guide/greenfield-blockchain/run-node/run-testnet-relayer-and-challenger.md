---
title: Run Testnet Relayer and Challenger
order: 6
---

# Run Relayer and Challenger on Testnet

## Relayer

### Deployment

#### Config

Modify `config.json` file in config folder. Or, you can create a new one and specify the path by `--config-path` flag when start the relayer.

1. Set your relayer private key and bls private key imported method (via file or aws secret), deployment environment and gas limit.

    ```
      "greenfield_config": {
        "key_type": "local_private_key",
        "aws_region": "",
        "aws_secret_name": "",
        "aws_bls_secret_name": "",
        "rpc_addrs": [
          "https://gnfd-testnet-fullnode-tendermint-us.bnbchain.org:443"
        ],
        "private_key": "your_private_key",
        "bls_private_key": "your_private_key",
        "chain_id": 5600,
        "start_height": 1,
        "number_of_blocks_for_finality": 0,
        "monitor_channel_list": [1,2,3,4,5,6],
        "gas_limit": 1000,
        "fee_amount": 5000000000000,
        "chain_id_string": "greenfield_5600-1",
        "use_websocket": true
      }, 
      "bsc_config": {
        "key_type": "local_private_key",
        "aws_region": "",
        "aws_secret_name": "",
        "rpc_addrs": [
          "https://data-seed-prebsc-1-s1.binance.org:8545/"
        ],
        "private_key": "your_private_key",
        "gas_limit": 4700000,
        "gas_price": 20000000000,
        "number_of_blocks_for_finality": 2,
        "start_height": 0,
        "chain_id": 97
      }
    ```

2. Config crossChain and greenfield light client smart contracts addresses, others can keep default value.

    ```
    "relay_config": {
        "bsc_to_greenfield_inturn_relayer_timeout": 90,
        "greenfield_to_bsc_inturn_relayer_timeout": 45,
        "greenfield_sequence_update_latency": 8,
        "bsc_sequence_update_latency": 12,
        "greenfield_event_type_cross_chain": "cosmos.crosschain.v1.EventCrossChain",
        "bsc_cross_chain_package_event_name": "CrossChainPackage",
        "cross_chain_package_event_hex": "0x64998dc5a229e7324e622192f111c691edccc3534bbea4b2bd90fbaec936845a",
        "cross_chain_contract_addr": "0x57b8A375193b2e9c6481f167BaECF1feEf9F7d4B",
        "greenfield_light_client_contract_addr": "0x4916f5c0688d058659aFce361E2A8F3F5b75CAd5"
      }
    ```

3. Set your log and backup preferences.

    ```
    "log_config": {
      "level": "DEBUG",
      "filename": "log.txt",
      "max_file_size_in_mb": 100 (file size threshold)  
      "max_backups_of_log_files": 2 (backup count threshold)
      "max_age_to_retain_log_files_in_days": 10 (backup age threshold)
      "use_console_logger": true,
      "use_file_logger": false,
      "compress": false
    }
    ```

4. Config your database settings. We Support mysql or sqlite.

    example: use mysql
    ```
    "db_config": {
      "dialect": "mysql",
        "key_type": "local_private_key",
        "aws_region": "",
        "aws_secret_name": "",
        "password": "pass",
        "username": "root",
        "url": "/greenfield-relayer?charset=utf8&parseTime=True&loc=Local",
        "max_idle_conns": 10,
        "max_open_conns": 100
    }
    ```

    use sqlite
    ```
      "db_config": {
        "dialect": "sqlite3",
        "key_type": "",
        "aws_region": "",
        "aws_secret_name": "",
        "password": "",
        "username": "",
        "url": "greenfield-relayer.db",
        "max_idle_conns": 10,
        "max_open_conns": 100
      },
    ```

5. Set alert config to send a telegram message when the data-seeds are not healthy.

    ```
    "alert_config": {
      "identity": your_bot_identity
      "telegram_bot_id": your_bot_id
      "telegram_chat_id": your_chat_id  
    }
    ```

### Build

Build binary:

```shell script
make build
```

Build docker image:

```shell script
make build_docker
```

### Run

#### Run MySQL in Docker(this can be skipped if you are using sqlite)

```shell
docker run --name gnfd-mysql -p 3306:3306 -e MYSQL_ROOT_PASSWORD=root -d mysql:8.0
```

##### Create Schema

Create schema in MySQL client:

```shell
CREATE SCHEMA IF NOT EXISTS `greenfield-relayer` DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci;
```

#### Update Config

Update keys and db config in `config.json` file.

#### Start Relayer

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

## Challenger

### Deployment

#### Config

1. Set your private key import method (via file or aws secret), deployment environment and gas limit.

   ```
     "greenfield_config": {
       "key_type": "local_private_key" or "aws_private_key" depending on whether you are storing the keys on aws or locally in this json file
       "aws_region": set this if you chose "aws_private_key"
       "aws_secret_name": set this if you chose "aws_private_key"
       "aws_bls_secret_name": set this if you chose "aws_private_key"
       "private_key": set this if you chose "local_private_key"
       "bls_private_key": set this if you chose "local_private_key" 
       "rpc_addrs": [
         "https://gnfd-testnet-fullnode-tendermint-us.bnbchain.org:443"
       ],
       "chain_id_string": "greenfield_5600-1"
       "gas_limit": 1000,
       "fee_amount": "5000000000000",
       "fee_denom": "BNB",
       "no_simulate": true
       "deduplication_interval": 100
     }
   ```

2. Set your log and backup preferences.

   ```
   "log_config": {
     "level": "DEBUG",
     "filename": "log.txt",
     "max_file_size_in_mb": 100 (file size threshold)  
     "max_backups_of_log_files": 2 (backup count threshold)
     "max_age_to_retain_log_files_in_days": 10 (backup age threshold)
     "use_console_logger": true,
     "use_file_logger": false,
     "compress": false
   }
   ```

3. Config your database settings.

   ```
   "db_config": {
     "dialect": "mysql",
     "db_path": "your_db_path"
     "key_type": "local_private_key" or "aws_private_key" depending on whether you are storing the keys on aws or locally in this json file
     "aws_region": set this if you chose "aws_private_key"
     "aws_secret_name": set this if you chose "aws_private_key"
     "username": set this if you chose "local_private_key"
     "password": set this if you chose "local_private_key"
     "max_idle_conns": 20, (set according to your db performance)
     "max_open_conns": 40, (set according to your db performance)
     "debug_mode": false
   }
   ```

4. Set alert config to send a telegram message when the application exceeds the max retries for certain operations.

   ```
   "alert_config": {
     "identity": your_bot_identity
     "telegram_bot_id": your_bot_id
     "telegram_chat_id": your_chat_id  
   }
   ```


### Build

Build binary:

```shell script
make build
```

Build docker image:

```shell script
make build_docker
```

### Run

#### Run MySQL in Docker(this can be skipped if you are using sqlite)

```shell
docker run --name gnfd-mysql -p 3306:3306 -e MYSQL_ROOT_PASSWORD=root -d mysql:5.7
```

#### Create Schema

Create schema in MySQL client:

```shell
CREATE SCHEMA IF NOT EXISTS `challenger` DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci;
```

#### Update Config

Update keys and db config in `config.json` file.

#### Start Challenger

```shell script
./build/greenfield-challenger --config-type [local or aws] --config-path config_file_path  --aws-region [aws region or omit] --aws-secret-key [aws secret key for config or omit]
```

Example:
```shell script
./build/greenfield-challenger --config-type local --config-path config/config.json
```

Run docker:
```shell script
docker run -it -v /your/data/path:/greenfield-challenger -e CONFIG_TYPE="local" -e CONFIG_FILE_PATH=/your/config/file/path/in/container -d greenfield-challenger
```
