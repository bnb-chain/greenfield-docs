---
title: SP Compiling and Dependencies
order: 1
---

## Compile SP

Compilation dependencies:

- [Golang](https://go.dev/): SP is written in Golang, you need to install it. The version should be greater than or equal to `go1.18.x`.
- [Buf](https://buf.build/docs/installation/): A new way of working with Protocol Buffers. SP uses Buf to manage proto files.
- [protoc-gen-gogofaster](https://github.com/gogo/protobuf): Protocol Buffers for Go with Gadgets. SP use the protobuf compiler to generate pb.go files.
- [Mockgen](https://github.com/golang/mock): A mocking framework for the Go programming language that is used in unit test.

```shell
# clone source code
git clone https://github.com/bnb-chain/greenfield-storage-provider.git

cd greenfield-storage-provider

# install dependent tools: buf, protoc-gen-gogofaster and mockgen
make install-tools

# compile sp
make build

# move to build directory
cd build

# execute gnfd-sp binary file
./gnfd-sp version

# show the gnfd-sp version information
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

# show the gnfd-sp help info
./gnfd-sp -h
```

### Note

If you've already executed `make install-tools` instruction in your shell, but you failed to make build and encountered one of the following error messages:

```shell
# error message 1
buf: command not found

# error message 2
Failure: plugin gogofaster: could not find protoc plugin for name gogofaster - please make sure protoc-gen-gogofaster is installed and present on your $PATH
```

You can execute one of the fowlloing instructions in shell:

```shell
GO111MODULE=on GOBIN=/usr/local/bin go install github.com/bufbuild/buf/cmd/buf@v1.17.0
GO111MODULE=on GOBIN=/usr/local/bin go install github.com/gogo/protobuf/protoc-gen-gogofaster@latest
GO111MODULE=on GOBIN=/usr/local/bin go install github.com/golang/mock/mockgen@v1.6.0
```

## SP Dependencies

If a user wants to start SP in local mode or testnet mode, you must prepare `SPDB`, `BSDB` and `PieceStore` dependencies.

### SPDB and BSDB

SP uses [SPDB](../services/spdb.md) and [BSDB](../services/bsdb.md) to store some matadata such as object info, object integrity hash, etc. These two DBs now use `RDBMS` to complete corresponding function.

Users now can use `MySQL` or `MariaDB` to store metadata.The following lists the supported RDBMS:

1. [MySQL](https://www.mysql.com/)
2. [MariaDB](https://mariadb.org/)

More types of database such as `PostgreSQL` or NewSQL will be supported in the future.

### PieceStore

Greenfield is a decentralized data storage system which uses object storage as the main data storage system. SP encapsulates data storage as [PieceStore](../services/piece-store.md) which provides common interfaces to be compatible with multiple data storage system. Therefore, if a user wants to join SP or test the function of SP, you must use a data storage system.

The following lists the supported data storage systems:

1. [AWS S3](https://aws.amazon.com/s3/): An object storage can be used in production environment.
2. [MinIO](https://min.io/): An object storage can be used in production environment which is compatible with AWS S3.
3. [POSIX Filesystem](https://en.wikipedia.org/wiki/POSIX): Local filesystem is used for experiencing the basic features of SP and understanding how SP works. The piece data created by SP cannot be getted within the network and can only be used on a single machine.
