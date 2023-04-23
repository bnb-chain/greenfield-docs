---
title: Deploy SP
order: 1
---

## Dependence

* SQL: no requirements for the SQL DB version

> MariaDB - 5.5.68 and Aurora(MySQL 5.7) 2.10.3 has been practiced.

- Install MySQL in CentOS

```shell
wget http://repo.mysql.com/mysql-community-release-el7-5.noarch.rpm
rpm -ivh mysql-community-release-el7-5.noarch.rpm
yum update
yum install mysql-server

# set permission
chown -R mysql:mysql /var/lib/mysql/

# init mysql
mysqld --initialize

# start mysql
systemctl start mysqld

# check the MySQL running status
systemctl status mysqld
```

You also can use MariaDB to replace MySQL.

```shell
# install mysql
yum install mariadb-server mariadb 

# start MariaDB
systemctl start mariadb

# stop MariaDB
systemctl stop mariadb

# restart MariaDB
systemctl restart mariadb
```

Check MySQL

```shell
mysqladmin --version
```

- Payload Store: [AWS S3](https://aws.amazon.com/s3), [MinIO](https://min.io)(Beta)

## Compile

```shell
# clone source
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

## Join greenfield chain

- [Join MainNet](https://github.com/bnb-chain/greenfield-docs/blob/master/src/guide/greenfield-blockchain/run-node/run-mainnet-node.md)

- [Join TestNet](https://github.com/bnb-chain/greenfield-docs/blob/master/src/guide/greenfield-blockchain/run-node/run-testnet-node.md)

- [Setup private netWork](https://github.com/bnb-chain/greenfield-docs/blob/master/src/guide/greenfield-blockchain/run-node/run-local-network.md)

## Add SP to greenfield chain

[Add SP to greenfield chain](https://github.com/bnb-chain/greenfield-docs/blob/master/src/guide/storage-provider/run-book/run-testnet-SP-node.md)

## Make configuration

```shell
# dump the configuration template to './config.toml'
./gnfd-sp config.dump
```

[configuration template](https://github.com/bnb-chain/greenfield-storage-provider/blob/master/config/config_template.toml)

## Start with local model
```shell
# show services list
./gnfd-sp list
blocksyncer          Syncs block data to db
challenge            Provides the ability to query the integrity hash and piece data
downloader           Downloads object from the backend and statistical read traffic
gateway              Receives the sdk request
metadata             Provides the ability to query meta data
receiver             Receives data pieces of an object from other storage provider and store
signer               Sign the transaction and broadcast to chain
tasknode             Executes background task
uploader             Uploads object payload to greenfield

# start 
nohup ./gnfd-sp -config ${config_file} -server ${service_name_list} 2>&1 &

# gnfd-sp supports obtaining sensitive information from environment variables, these includes:
# AWS
AWS_ACCESS_KEY 
AWS_SECRET_KEY
AWS_SESSION_TOKEN
BUCKET_URL

# SQLDB
SP_DB_USER
SP_DB_PASSWORD
SP_DB_ADDRESS
SP_DB_DATABASE

# signer service environment variables
SIGNER_OPERATOR_PRIV_KEY
SIGNER_FUNDING_PRIV_KEY
SIGNER_APPROVAL_PRIV_KEY
SIGNER_SEAL_PRIV_KEY
```

## Start with remote mode

```shell
export SP_DB_USER=${SP_DB_USER}
export SP_DB_PASSWORD=${SP_DB_PASSWORD}
export SP_DB_ADDRESS=${SP_DB_ADDRESS}
export SP_DB_DATABASE=${SP_DB_DATABASE}

# upload configuration
./gnfd-sp config.upload -c ${config_file_path}
or
./gnfd-sp config.upload -c ${config_file_path} -db.user ${db_user} -db.password ${db_password} -db.address ${db_address} -db.database ${db_database}

# start service
nohup ./gnfd-sp config.remote -server ${service_name_list} 2>&1 &
or 
nohup ./gnfd-sp config.remote -server ${service_name_list} -db.user ${db_user} -db.password ${db_password} -db.address ${db_address} -db.database ${db_database} 2>&1 &
```