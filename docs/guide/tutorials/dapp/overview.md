---
title: Overview
order: 1
---

# Overview

:::tip

#### Pre-requisite Readings

* [Native cross chain communication protocol](../greenfield-blockchain/modules/cross-chain.md)

:::

The real power of the Greenfield ecosystem lies in that the platform is not only designed to store the data, but also to
support the creation of value based on the data assets and its related economy.

The asset traits of the data are firstly established on the permissions, e.g. the permission to read the data. When
this right is disconnected from the data itself, they become tradable assets and enlarge the value of the data. 
The data permissions can be transferred cross-chain onto BSC and become digital assets there. This creates a
variety of possibilities to integrate these assets with the existing DeFi protocols and models on BSC.

This gets even further enhanced by the smart contracts on BSC, which enjoy the same address format as accounts on the
Greenfield blockchain and can be the owners of the data objects and inherit different permissions. This will unleash
many new business opportunities based on the data and its operations.


## Resource Mirror
The Greenfield Blockchain provides a comprehensive set of resources that can be mirrored on the BNB Smart Chain (BSC). 
This includes buckets, objects, and groups, which can be stored and managed on the BSC as non-fungible tokens (NFTs) 
conforming to the ERC-721 standard.

A bucket is a logical container for storing objects in Greenfield. An object, on the other hand, is a fundamental unit 
of storage in Greenfield that represents a file consisting of data and its associated metadata. 
Lastly, a group is a collection of accounts with the same permissions.

These resources can be mirrored on the BSC as ERC-721 NFTs, along with the members within a group, which represent 
permissions to specify resources, that can be mirrored as ERC-1155 token. At present, the NFTs are not transferable, 
but the transferability feature will be added in the near future.

Once these resources are mirrored on BSC, they can be directly managed by smart contracts on BSC. 
These operations will directly affect the storage format, access permissions, and other aspects of the data on greenfield. 
In other words, any changes made to the decentralized application on BSC will also reflect changes on Greenfield. 
This integration between Greenfield Blockchain and BNB Smart Chain allows for greater flexibility and accessibility 
when it comes to accessing and manipulating data, ultimately leading to a more streamlined and efficient 
data management process.

More details are discussed in [Mirroring FAQ](../../faq/mirroring-faqs.md).

## Resource Operating Primitives

A number of cross-chain primitives have been defined on BSC to enable developers to manage greenfield resources on the 
BSC directly, without the need for intermediaries.

**BNB**:
- transfer BNB bidirectionally between BSC and Greenfield

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

Users can also approve smart contracts to operate the aforementioned resources instead, check the [design](permisson-control.md) for more details.

Greenfield's cross-chain programming capability is based on these minimum resource operation interface. 
Dapp smart contracts can flexibly combine and call these cross-chain interfaces to achieve more complex application logic.

For more detailed interface, please refer to [here](primitive-interface.md), 
and for the deployment address of cross-chain smart contracts on BSC, please refer to [here](contract-list.md).

## SDK and Examples

Greenfield provides a convenient [SDK](https://github.com/bnb-chain/greenfield-contracts-sdk) for DApps to integrate quickly, 
which includes several sample codes of different paradigms.

## What is more

- [Quick Start](quick-start.md): editing permission through BSC smart contract.
- [Primitives Interface](primitive-interface.md): lean more about the primitives interfaces.
- [Permission Control](permisson-control.md): learn more about the permission control.
- [Smart Contract Integration](dapp-integration.md): learn more about how to integrate with smart contracts.
- [Showcases](showcases.md): learn more about the showcases.



