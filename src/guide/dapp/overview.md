---
title: Overview
order: 1
---

# Overview

The real power of the Greenfield ecosystem lies in that the platform is not only designed to store the data, but also to
support the creation of value based on the data assets and its related economy.

The asset traits of the data are firstly established on the permissions, e.g. the permission to read the data. When
this right is disconnected from the data itself, they become tradable assets and enlarge the value of the data. 
The data permissions can be transferred cross-chain onto BSC and become digital assets there. This creates a
variety of possibilities to integrate these assets with the existing DeFi protocols and models on BSC.

This gets even further enhanced by the smart contracts on BSC, which enjoy the same address format as accounts on the
Greenfield blockchain and can be the owners of the data objects and inherit different permissions. This will unleash
many new business opportunities based on the data and its operations.

:::note

#### Pre-requisite Readings

* [Native cross chain communication protocol](../greenfield-blockchain/modules/cross-chain.md)

:::


## Resource Mirror
Almost all kinds of resources defined in Greenfield Blockchain can be mirrored onto BSC:

- [Bucket](../concept/simple-storage-svc-model.md#Bucket): bucket is a logical container for storing objects in Greenfield.
- [Object](../concept/simple-storage-svc-model.md#Object): object is a fundamental unit of storage in Greenfield, which represents 
  a file consisting of data and its associated metadata.
- [Group](../concept/simple-storage-svc-model.md#group): group is a collection of accounts with the same permissions.

Bucket, Object, and Group are mirrored on the BNB Smart Chain (BSC) as NFTs using the [ERC-721](https://eips.ethereum.org/EIPS/eip-721) standard. 
The members within a [Group](../concept/simple-storage-svc-model.md#group), which represent permissions to specify resources, 
are mirrored as NFTs using the [ERC-1155](https://eips.ethereum.org/EIPS/eip-1155) standard. At present, 
the NFT is not transferable, although support for transferability will be added in the near future.


## Resource Operating Primitives

A few series of cross-chain primitives are defined for dApps to call to
operate on these resource entities.


**BNB**:
- transfer bidirectionally between BSC and Greenfield among accounts

**Bucket**:
- create a bucket on BSC
- delete a bucket on BSC
- mirror bucket from Greenfield to BSC

**Object**:
- delete an object on BSC 
- mirror object from Greenfield to BSC
- grant/revoke permissions of objects on BSC to accounts/groups
- create an object on BSC (pending)
- copy objects on BSC (pending)
- Kick off the execution of an object on BSC (pending)

**Group**:
- create a group on BSC
- delete a group on BSC
- change group members on BSC
- mirror group from Greenfield to BSC

Users can also approve smart contracts to operate the aforementioned resources instead.

## Callbacks
Due to the foundation of programmability being cross-chain communication, this means that one operation on resources 
is not immediately completed and requires asynchronous waiting for confirmation messages to return to BSC.

BSC dApps, i.e. smart contracts on BSC, are allowed to implement their own logic to handle confirmation packages. 


## SDK and Examples

Greenfield provides a convenient SDK for DApps to integrate quickly, which includes several sample codes of different 
paradigms. (pending)

## What is more

- [Quick Start](quick-start.md): building an ebook shop.
- [Primitives Interface](primitive-interface.md): lean more about the primitives interfaces.



