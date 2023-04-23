---
title: Run Local SP Network
order: 2
---

This guide helps you to set up a local Greenfield Storage Provider network for testing
and other development related purposes.

## Recommended Prerequisites

The following lists the recommended hardware requirements:

* VPS running recent versions of Mac OS X, Linux, or Windows；
* 16 cores of CPU, 64 GB of memory(RAM);
* At least 100GB disk space for backend storage; 
* 10GB+ SQL Database.

## Quickly setup local Greenfield BlockChain network

1. Build

```shell
git clone https://github.com/bnb-chain/greenfield.git
cd greenfield
make build
```

2. Start
```shell
# 1 validator and 7 storage providers
bash ./deployment/localup/localup.sh all 1 7
```

3. Export the keys of sps
```shell
bash ./deployment/localup/localup.sh export_sps 1 1

# result example
# {
#   "sp0": {
#     "OperatorAddr": "0x14539343413EB47899B0935287ab1111Df891d04",
#     "FundingAddr": "0x21c6ff21DD7012DE1CCf9055f2eB234A44a1d3fB",
#     "SealAddr": "0x8e424c6Db42Ad9A5d91b24e20b5f603eC70abbA3",
#     "ApprovalAddr": "0x7Aa5C8B50696f1D15B3A60d6629f7318c605bb4C",
#     "GcAddr": "0xfa238a4B262e1dc35c4970A2296A2444B956c9Ca",
#     "OperatorPrivKey": "ba6e97958d9c43d1ad54923eba99f8d59f54a0c66c78a5dcbc004c5c3ec72f8c",
#     "FundingPrivKey": "bd9d9e7823cd2dc7bc20f1b6676c3025cdda6cf5a8df9b04597fdff42c29af01",
#     "SealPrivKey": "aacd6b834627fdbc5de2bfdb1db31be0ea810a941854787653814c8040a9dd39",
#     "ApprovalPrivKey": "32108ed1a47c0af965824f84ac2162c029f347eec6d0988e642330b0ac264c85",
#     "GcPrivKey": "2fad16031b4fd9facb7dacda3da4ca4dd5f005f4166891bf9f7be13e02abb12d"
#   }
# }
```

## Setup local SP network

1. Compile

```shell
# clone source code
git clone https://github.com/bnb-chain/greenfield-storage-provider.git

# install compile tools
cd greenfield-storage-provider
make install-tools

# compile
make build

# show the gnfd-sp version information
cd build
./gnfd-sp version

Greenfield Storage Provider
    __                                                       _     __
    _____/ /_____  _________ _____ ____     ____  _________ _   __(_)___/ /__  _____
    / ___/ __/ __ \/ ___/ __  / __  / _ \   / __ \/ ___/ __ \ | / / / __  / _ \/ ___/
    (__  ) /_/ /_/ / /  / /_/ / /_/ /  __/  / /_/ / /  / /_/ / |/ / / /_/ /  __/ /
    /____/\__/\____/_/   \__,_/\__, /\___/  / .___/_/   \____/|___/_/\__,_/\___/_/
    /____/       /_/

Version : vx.x.x
Branch  : master
Commit  : 6eb30c3bda1a29fc97a4345559944c35cd560517
Build   : go1.18.4 darwin amd64 2023-03-04 23:54

# show the gnfd-sp help
./gnfd-sp -h
```

2. Generate localup env

Generate directories/configs, create databases after building gnfd binary.

```bash
# The first time setup GEN_CONFIG_TEMPLATE=1, and the other time is 0.
# When equal to 1, the configuration template will be generated.
GEN_CONFIG_TEMPLATE=1
bash ./deployment/localup/localup.sh --reset ${GEN_CONFIG_TEMPLATE}
```

3. Overwrite db and sp info

Overwrite all sps' db and sp info according to the real environment.

```
deployment/localup/local_env/
├── sp0
│   ├── config.toml   # templated config
│   ├── db.info       # to overwrite real db info
│   ├── gnfd-sp0      # sp binary
│   └── sp.info       # to overwrite real sp info
├── sp1
├── ...
```

Update the `config.toml` of the SP with the private key and address exported above.

```toml
...
SpOperatorAddress = "<OperatorAddress>"
...

[SignerCfg]
GRPCAddress = "localhost:10633"
APIKey = ""
WhitelistCIDR = ["0.0.0.0/0"]
GasLimit = 210000
OperatorPrivateKey = "<PrivateKey>"
FundingPrivateKey = "<PrivateKey>"
SealPrivateKey = "<PrivateKey>"
ApprovalPrivateKey = "<PrivateKey>"
GcPrivateKey = "<PrivateKey>"
```

4. Start SP

Make config.toml real according to db and sp info, and start sps.

```bash
# In first time setup GEN_CONFIG_TEMPLATE=1, and the other time is 0.
# When equal to 1, the configuration template will be generated.
GEN_CONFIG_TEMPLATE=0
bash ./deployment/localup/localup.sh --reset ${GEN_CONFIG_TEMPLATE}
bash ./deployment/localup/localup.sh --start
```

The environment directory is as follows:
```
deployment/localup/local_env/
├── sp0
│   ├── config.toml    # real config
│   ├── data           # piecestore data directory
│   ├── db.info
│   ├── gnfd-sp0
│   ├── gnfd-sp.log    # gnfd-sp log file
│   ├── log.txt
│   └── sp.info
├── sp1
├── ...
```

5. Other supported commands

```bash
% bash ./deployment/localup/localup.sh --help
Usage: deployment/localup/localup.sh [option...] {help|reset|start|stop|print}

   --help                           display help info
   --reset $GEN_CONFIG_TEMPLATE     reset env, $GEN_CONFIG_TEMPLATE=0 or =1
   --start                          start storage providers
   --stop                           stop storage providers
   --print                          print sp local env work directory
```
