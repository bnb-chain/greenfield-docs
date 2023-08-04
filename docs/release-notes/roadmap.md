---
title: Roadmap
icon: proposal
order: 2
---

# Roadmap

## Upcoming

### August 3rd, Reset Mekong Testnet

This version will focus on improving the performance and stability of the SP. At the same time, this version will introduce
some advanced features:

- Support data recovery: Recover the data stored on SPs automatically to ensure the data availability on Greenfield
- Support large object and breakpoint resume transfer: Resume data transfer will tremendously improve the transfer
  efficiency and user experience when uploading or downloading a large object from Greenfield
- Introduce new concepts such as Virtual Group, Family, etc., to make bucket migration and storage provider exit more
  lightweight and reduces the storage of chain metadata.

### August 31st, Upgrade Mekong Testnet

This version will implement a hard fork for Greenfield MeKong Testnet, which can be upgraded with zero downtime. At the
same time, this version will introduce some advanced features:

- Support SP graceful exit: It enables SP to join the network freely and exit the network without affecting the user storage experience
- Support migrating bucket: Users can migrate their bucket from one SP to another on their own needs
- Support expired group member: Group members can be given an expiration time, after which they will no longer have
  access to the group even though their account remains part of the group

### September 20th, Launch Mainnet Lena

This version will be a maintenance version for bugfix and enhancement focusing on reducing the cost of operating an SP
and adapting the economy to make SP profitable:

- Support rich underlying storage platforms, such as GCP, B2, and Ali-Cloud OSS
- Adapt the storage economy to make SP profitable

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
- Support SP join by governance, and SP exits freely
- Support data recovery
- Support large object and breakpoint resume transfer

### December 2023, Mainnet

- Support SP reputation system
- Enrich the ecosystem by building abundant toolchains and programming paradigms, such as data marketplace, NFT toolset,
  data migration toolset and so on

### June 2024, Mainnet

- Support off-chain generic computing
- Support perpetual storage
- Data availability layer for BSC and L2 blockchains