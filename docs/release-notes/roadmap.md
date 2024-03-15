---
title: Roadmap
icon: proposal
order: 2
---

# Roadmap

## Upcoming

### Pawnee Upgrade
The Pawnee Upgrade introduces the following major feature:
- Support Greenfield Atomic Object Update: Previously, users face the inconvenience of having to delete and recreate objects in Greenfield in order to replace their content.
  Pawnee Upgrade offers a more efficient and seamless object update process. See https://github.com/bnb-chain/BEPs/pull/346

### Ural Upgrade
The Ural hardfork introduces one significant feature in this upgrade.
1. Support bucket migration: With this new feature, users can migrate their bucket to another storage provider(SP) as
   the primary SP if they are not satisfied with the current service provided.

### Pawnee Upgrade
The Pawnee hardfork will introduce several enhance features in this upgrade.
1. Support atomic object update: To update an object currently, the process involves deleting the existing object on the
   chain and then creating a new object with the same name. This feature enables users to directly modify the content of
   objects. For further information, please refer to [BEP346](https://github.com/bnb-chain/BEPs/pull/346).
2. Support delete object in created status: Currently, objects in the 'created' state can only be deleted through a
   'cancel create' transaction. This feature enables users to send deletion transactions for objects in any state.

## Long Term

### March 2023, Testnet Congo

- Support Ethereum compatible address and EIP-712 transactions
- Support cross-chain token transfer between BSC and Greenfield
- Support storage management, including bucket, object, and group operations
- Support stream payment billing system

### May 2023, Testnet Mekong

- Support mirror storage resources from Greenfield to BSC, and cross-chain programming paradigm on BSC
- Support permission management on buckets, objects, and groups
- Support data challenge

### September 2023, Launch Mainnet Lena

- Support SP standard framework
- Support SP join by governance
- Support data recovery
- Support large object and breakpoint resume transfer

### December 2023, Mainnet

- Enrich the ecosystem by building abundant toolchains and programming paradigms, such as data marketplace, NFT toolset,
  data migration toolset and so on
- Link Greenfield with opBNB
- Greenfield bundle service
- Resource tagging and indexing

### March 2024, Mainnet
- Cross-chain permission control
- Support the free exit of SP
- Simple data migration
- Object atomic update

### June 2024, Mainnet

- Enhance user experience of using greenfield and cross-chain programming
- Paymaster
- Data availability layer for BSC and L2 blockchains

### December 2024, Mainnet

- Support off-chain generic computing
- Support permanent storage
- Higher performance

For additional information, please refer to the [BNB Greenfield Roadmap Proposal](https://forum.bnbchain.org/t/bnb-greenfield-roadmap-proposal/2273).