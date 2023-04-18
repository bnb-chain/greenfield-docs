---
title: Overview
order: 1
---

# Overview

:::note

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
permissions to specify resources, that can be mirrored as ERC-1155 NFTs. At present, the NFTs are not transferable, 
but the transferability feature will be added in the near future.

Once these resources are mirrored on BSC, they can be directly accessed and managed by smart contracts on BSC. 
These operations will directly affect the storage format, access permissions, and other aspects of the data on greenfield. 
In other words, any changes made to the decentralized application on BSC will also reflect changes on Greenfield. 
This integration between Greenfield Blockchain and BNB Smart Chain allows for greater flexibility and accessibility 
when it comes to accessing and manipulating data, ultimately leading to a more streamlined and efficient 
data management process.

## Resource Operating Primitives

A number of cross-chain primitives have been defined on BSC to enable developers to manage greenfield resources on the 
BSC directly, without the need for intermediaries.

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

Greenfield's cross-chain programming capability is based on these minimum resource operation interface. 
Dapp smart contracts can flexibly combine and call these cross-chain interfaces to achieve more complex application logic.

For more detailed interface, please refer to [here](primitive-interface.md), 
and for the deployment address of cross-chain smart contracts on BSC, please refer to [here](contract-list.md).

## Data Marketplace
In this part, we are presenting a prototype for a universal data market.
The purpose of this prototype is to offer a simple and straightforward example of how a data market can be built on the BSC network.

We believe that a universal data market can potentially revolutionize the way data is exchanged and utilized. To ensure 
that the marketplace is functional, there are several functions that it should provide. These functions include but are not 
limited to:

- Data storage and management: The Greenfield can be used to store and manage data to ensure that it is 
  easily accessible and organized.
- User authentication and authorization: The Greenfield provides powerful data access control features, 
  where user data is often tied to a specific group and only members of that group have permission to access the desired data.
- Listing Data: After users have mirrored their group to BSC, they can set corresponding payment policies through the smart contract of the data marketplace, 
  and approve the smart contract to manage the group. Then, users can upload or edit more profiles for this data,
  and these profiles can be stored in the backend of the marketplace.
- Sell Data: After the user pays through the smart contract of the data marketplace, the smart contract will add the user into
  the group as a new member. After the event of adding a new group member occurs, 
  it will be reflected on Greenfield within a dozen seconds, and the user will be able to access the purchased data, and also
  get a ERC1155 token as a proof of purchase.
- Payment and billing: Payment and billing is an area where smart contracts excel in handling. 
  In the realm of the BSC, there are many valuable digital assets that can be used for payment. 
  The payment strategy can be more flexible, allowing users to choose whether to pay a one-time fee or a monthly subscription. 
  The platform can receive a portion of the commission, which can incentivize the platform to provide better services. 
  Additionally, all payment processes happen on the blockchain, which is transparent and visible to everyone.
- Data preview: Users can either upload public preview data to Greenfield or grant data marketplace for reading
  to automatically generate preview data.
- Search and discovery: The marketplace should have an easy-to-use search and discovery system to help buyers find the data they need, 
  which requires a robust indexing backend system.
- Data privacy and security: Greenfield is responsible for data storage and privacy protection, which enables the data 
  marketplace to have a very lightweight design in this regard. By not having to worry about these aspects, 
  data marketplace can focus on other features and functionalities that will benefit its users. 

We hope that this prototype can inspire developers and entrepreneurs to explore the potential of the BSC network for 
building innovative and impactful data market solutions.


## SDK and Examples

Greenfield provides a convenient [SDK](https://github.com/bnb-chain/greenfield-contracts-sdk) for DApps to integrate quickly, 
which includes several sample codes of different paradigms.

## What is more

- [Quick Start](quick-start.md): building an ebook shop.
- [Primitives Interface](primitive-interface.md): lean more about the primitives interfaces.



