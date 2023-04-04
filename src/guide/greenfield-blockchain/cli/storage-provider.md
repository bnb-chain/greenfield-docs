---
title: Storage Provider
order: 4
---

# Storage Provider

The SP module is responsible for managing and maintaining all storage providers in the Greenfield network. It provides basic functions such as joining, depositing, editing, and etc.

## QuickStart

To begin, start a local cluster with m validator and n storage provider

```shell
$ bash ./deployment/localup/localup.sh all 3 7
```
The above command will create a local Greenfield chain network, which initializes three validators and seven storage providers.

## Query

The CLI `query` commands allow users to query `sp` state. You can use it to query the status of the storage provider, where params include minimum bond, bond denom, etc.; storage-provider can query the SP at a specific address; storage-providers can query all SPs.

```shell
$ ./build/bin/gnfd query sp --help
Querying commands for the sp module

Usage:
  gnfd query sp [flags]
  gnfd query sp [command]

Available Commands:
  params            Shows the parameters of the module
  storage-provider  Query storage-provider with specify address
  storage-providers Query StorageProviders

```
