---
title: Storage Provider Lifecycle
order: 8
---

# Storage Provider Lifecycle

This document describes the entire lifecycle of a storage provider from joining the Greenfield Storage Network to exiting.

## Preparation

First, the storage provider needs to learn how to run and create a storage provider node, which requires several different user accounts and a unified external EndPoint.

- Follow Recommended Prerequisites to get ready
- Create the required accounts, E.g operator/fundig/seal/approval/gv/bls
- Run all services of Storage Provider

:::note
For more information, please see [Run TestNet Storage Provider](../storage-provider/run-book/run-testnet-SP-node.md)
:::

## Proposal

The Storage Provider (SP) must initiate an on-chain proposal that outlines the Msg information to be automatically executed after receiving approval through the voting process. Specifically, the Msg in this case is `MsgCreateStorageProvider`. It's essential to ensure that the deposit tokens exceed the minimum deposit tokens specified on the chain.

Below are the required fields that need to be modified in the proposal:

- Addresses:
  - sp_address: The address of the storage provider that will be added to the network.
  - seal_address: The address used for sealing object
  - approval_address: The address responsible for approving bucket/object creation.
  - gc_address: The address for garbage collection.
- EndPoint: Details of the endpoint where the SP will serve data requests.
- Quota & Price:
  - read_price: The cost in Gwei per byte per second for read operations.
  - stora_price: The cost in Gwei per byte per second for data storage
  - free_read_quota: The default free read quota allocated to users (e.g., 10GB).
- Deposit for SP Staking:
  - The SP must stake at least 1000 BNB (Binance Coin) in the testnet as a commitment to providing storage services.
- Deposit for Proposal:
  - The proposal itself must have a deposit of at least 1 BNB in the testnet.

:::note
For more information, please see [Add Storage Provider to greenfield network](../storage-provider/run-book/run-testnet-SP-node.md#add-storage-provider-to-greenfield-testnet)
:::

Initiating this on-chain proposal with the necessary modifications and deposits is a crucial step for the SP to become an active participant in the Greenfield network, offering reliable and secure storage services to users. By complying with the proposal requirements, the SP can enhance its reputation and attract more users, contributing to the growth and success of the decentralized storage ecosystem.

## In Service

During the in-service status, Storage Providers (SPs) actively engage in the network's daily operations. They handle a variety of user requests, including data storage, retrieval, and other storage-related operations.

SPs assume a critical role in maintaining the availability, integrity, and confidentiality of the data they store. As gatekeepers of user access, they enforce proper authentication and authorization procedures to safeguard data from unauthorized access or tampering.

At this stage, SPs must create virtual groups within the Greenfield network to efficiently serve buckets and objects. These virtual groups, resembling disk sectors, allow SPs to manage data storage in a more organized and optimized manner. By associating objects with virtual groups, SPs can limit the range of secondary storage providers responsible for storing object replica data, which enhances data redundancy and resilience.

:::note
for more information, please see [Virtual Group](../greenfield-blockchain/modules/virtual-group.md#abstract)
:::

Additionally, SPs are required to provide corresponding stakes for the amount of data they store. This staking mechanism further incentivizes SPs to offer reliable and high-quality services to users. By staking tokens or digital assets, SPs demonstrate their commitment to maintaining a robust and trustworthy network, aligning their interests with the overall security and success of the storage ecosystem.

Moreover, the creation of virtual groups and staking helps to disentangle the interdependency between buckets/objects and SPs. By doing so, SPs mitigate the need for an extensive volume of transactions when modifying on-chain BucketInfo and ObjectInfo during SP exits and bucket migrations. This leads to more efficient network management and smoother transitions during changes in the network's composition.

As SPs continue to serve user needs and actively participate in network operations, their reputation and service quality become paramount. A positive reputation score is crucial for attracting more users to store their data with a particular SP. Through continuous improvement and adaptation, SPs can enhance their services, increase storage capacity, and maintain a competitive edge in the dynamic decentralized storage market.

## Exit

At some point, the SP may choose to voluntarily exit the Greenfield storage network for various reasons. Ensuring a graceful exit process is crucial to ensure a seamless transition of responsibilities and data to other SPs. During the exit process, the SP has the option to withdraw its staked tokens, but this withdrawal may be subject to any penalties or obligations associated with the exit.

To execute a graceful exit, the SP needs to migrate all its stored data to other SPs that are willing to take over. This data migration process involves transferring data from the exiting SP to the new SP in a secure and efficient manner. The exiting SP initiates this migration by sending a `SwapOut` transaction to the Greenfield Blockchain, formally withdrawing from the respective Global Virtual Group (GVG) or GVG Family. Simultaneously, the SP will receive back its staking tokens for data storage, ensuring a fair settlement. 

Once the successor SP successfully takes over all data in a GVG or GVG Family, it will send a `CompleteSwapOut` transaction to the Greenfield Blockchain, confirming the completion of the data transfer process.

Greenfield Blockchain incorporates an effective consensus mechanism to facilitate and validate the graceful exit process. This mechanism ensures that the exit is carried out transparently, maintaining the network's integrity and preventing any disruptions or data loss during the transition.

To ensure the safe and reliable migration of data, frequent data challenges are applied to the SPs that take over the data. These challenges are designed to verify the integrity and consistency of the migrated data, reassuring users that their data remains secure and accessible.

:::note
for more information, please see [SP exit](../greenfield-blockchain/modules/virtual-group.md#sp-exit-workflow)
:::