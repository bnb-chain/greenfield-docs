---
title: Run Local SP Network
order: 1
---
This guide helps you to set up a local Greenfield Storage Provider network for testing
and other development related purposes.

## Prerequisites
The hardware needs to meet below requirements:
* VPS running recent versions of Mac OS X, Linux, or Windows；
* 16 cores of CPU, 64 GB of memory(RAM);
* At least 100GB disk space for backend storage; 

## Setup local Greenfield block chain
[setup private Greenfield block chain network](https://gnksidemo.github.io/docs/greenfield-blockchain/run-node/run-local-network.html)

## Setup local SP network

1. Compile
```shell
# clone source code
git clone https://github.com/bnb-chain/greenfield-storage-provider.git

# install complie tools
cd greenfield-storage-provider
make install-tools

# complie
bash build.sh

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
Build   : go1.20.1 darwin amd64 2023-03-04 23:54

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
