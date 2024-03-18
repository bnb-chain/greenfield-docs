---
title: Roadmap
icon: proposal
order: 2
---

# Roadmap

## Upcoming

### Pawnee Upgrade
The Pawnee hardfork will introduce several enhance features in this upgrade.
1. Support atomic object update: To update an object currently, the process involves deleting the existing object on the
   chain and then creating a new object with the same name. This feature enables users to directly modify the content of
   objects. For further information, please refer to [BEP366](https://github.com/bnb-chain/BEPs/blob/master/BEPs/BEP-366.md).
2. Support delete object in created status: Currently, objects in the 'created' state can only be deleted through a
   'cancel create' transaction. This feature enables users to send deletion transactions for objects in any state.

### Serengeti Upgrade
The Pawnee hardfork will introduce server features in this upgrade:
1. Primary SP acts as an upload agent: It allows users to send objects directly to the primary SP without sending transactions on chain.  The primary SP will then create the object on-chain on behalf of the user, eliminating the requirement for users to switch over to the Greenfield network and incur gas fees when they create objects on Greenfield. Please refer to [BEP364](https://github.com/bnb-chain/BEPs/blob/master/BEPs/BEP-364.md).
2. Simplifying Off-Chain Authentication: It streamlines the authentication process, reducing developer integration complexity and improving user interaction. Please refer to [BEP346](https://github.com/bnb-chain/BEPs/blob/master/BEPs/BEP-346.md).
3. Improve payment user experience: It is a storage fee paymaster solution for sponsors to cover storage costs on Greenfield, making it easier for regular users to utilize the platform. Please refer to [BEP362](https://github.com/bnb-chain/BEPs/blob/master/BEPs/BEP-362.md).

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