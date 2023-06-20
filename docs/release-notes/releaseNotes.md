---
title: Release Notes
icon: proposal
dir:
  order: 7
order: 7
---

# Release Notes

## Greenfield v0.2.2 - Testnet reset.

On June 25th, we reset the Greenfield Testnet and upgrade the Greenfield version to v0.2.2. Here are key changes to note.

🔸All buckets/objects previously stored on Greenfield Testnet will be cleared and won't be available for query anymore. Friendly reminder: Please do not save important data on the testnet. The team will periodically delete outdated data.

🔸All account balances will also be reset. However, accounts with a balance under 10 tBNBs can look forward to an airdrop after the reset. For new users, Greenfield will not provide redundant faucets any longer, please get the test BNB from the official faucet [discord channel](https://discord.gg/bnbchain) and use [Dcellar](https://dcellar.io/) to convert it to the BNB on Greenfield.

Greenfield v0.2.2 🎉

The [Greenfield Blockchain v0.2.2](https://github.com/bnb-chain/greenfield/releases/tag/v0.2.2) and [Storage Provider v0.2.2](https://github.com/bnb-chain/greenfield-storage-provider/releases/tag/v0.2.2) introduces several enhancement exciting features. Let's take a look at these:

* [#249](https://github.com/bnb-chain/greenfield/pull/249) This feature will support multiple messages in a transaction using `EIP712 `sign approach. Allowing multiple messages will provide a better user experience for dApp users.
* [#250](https://github.com/bnb-chain/greenfield/pull/250) his feature allows mirroring bucket/object/group by using `id` or `name`. By using name, we can package some messages in a single tx, e.g., `CreateBucket`  `MirrorBucket` in one tx.
* [#268](https://github.com/bnb-chain/greenfield/pull/268) This feature records the challenge attestation results for the recent challenges.
* [#276](https://github.com/bnb-chain/greenfield/pull/276) This feature support adding keyManager into txOpt, so that allow large batch of transactions sent by a single client


### Enhancement and Feature List 📝

## Greenfield v0.2.1 - Mekong Testnet reset.

On May 25th, we reset the Greenfield Testnet and upgrade the Greenfield version to v0.2.1. We're excited to introduce this as the Mekong Testnet. Here are key changes to note.

🔸The Greenfield BSC Testnet (Chain ID: 5601) will be discontinued. Instead, we'll deploy the Greenfield Cross-Chain contracts on the BSC Chapel Testnet (Chain ID: 97).  This means you can fully utilize all the infrastructure of the current BSC Chapel Testnet, such as bscscan, tenderly, theGraph, and so on. BNB and Greenfield resources can still flow freely between Greenfield testnet and BSC testnet.

🔸The Greenfield Blockchain gRPC Endpoint will no longer be provided. The ETH-API endpoint has now been integrated with the Tendermint endpoint. All you need is the Tendermint endpoint for the Greenfield Blockchain. Please use [Chainlist](https://www.bnbchainlist.org/) to quickly add BSC Testnet and Greenfield Mekong Testnet.

🔸All buckets/objects previously stored on Greenfield Testnet will be cleared and won't be available for query anymore. Friendly reminder: Please do not save important data on the testnet. The team will periodically delete outdated data.

🔸All account balances will also be reset. However, accounts with a balance under 10 tBNBs can look forward to an airdrop after the reset. For new users, Greenfield will not provide redundant faucets any longer, please get the test BNB from the official faucet [discord channel](https://discord.gg/bnbchain) and use [Dcellar](https://dcellar.io/) to convert it to the BNB on Greenfield.

🔸As this is a breaking upgrade, the team will update the document as soon as possible the maintenance is done.

Greenfield v0.2.1 - Release for Mekong Testnet 🎉

The [Greenfield Blockchain v0.2.1](https://github.com/bnb-chain/greenfield/releases/tag/v0.2.0) and [Storage Provider v0.2.1](https://github.com/bnb-chain/greenfield-storage-provider/releases/tag/v0.2.1) introduces several enhancement exciting features. Let's take a look at these:

### Enhancement and Feature List 📝
- Bump cosmos-sdk core to version v0.47.2. Cosmos-sdk v0.47.x and v0.46.x have significant differences in consensus engine, ABCI, encoding, dependency injection, and other aspects. Greenfield hopes to update to this version this morning to avoid future upgrade difficulties.
- [Challenge Verifier](https://greenfield.bnbchain.org/docs/guide/introduction/ecosystem.html#challenge-verifier) is introduced in  Mekong Testnet. By using Challenge Verifier, the network can ensure that only reliable and trustworthy storage providers are allowed to participate, protecting the network from any potential data loss, corruption, or low-quality service.
- Discontinue object and stale permission GC is introduced in v0.2.1. These two features allow for a lighter blockchain state and allow SPs on the testnet to periodically clean up data to maintain long-term operation even without incentives.
- Support for more diverse methods of file searches, such as listing objects by prefix or by folder.
- Implemented a garbage collection module for the storage provider, reducing the operating costs of the storage provider.

## Greenfield v0.1.2 - The maintenance testnet release.

[Greenfield Blockchain v0.1.2](https://github.com/bnb-chain/greenfield/releases/tag/v0.1.2) and
[Storage Provider v0.1.2](https://github.com/bnb-chain/greenfield-storage-provider/releases/tag/v0.1.2)
was a regular maintenance testnet version of BNB Greenfield. This version fixed several bugs from the
previous version and introduced some features.

### Bugfix List
- Modification of Storage Fee Destination: Previously, storage fees were directed to the SP operator address.
 This has been adjusted to the funding address, ensuring smoother transactions and fee collection.
- Default SP Price Adjustment: To better reflect actual prices, the default prices in create_sp.json and payment.
 Param have been modified to align more closely with the current market rates.
- Fixing List Group Error: A crucial fix has been made to the listGroup function to adapt it to the new indexing
 structure of the group, which uses two levels of indexing.
- Fixing CLI Bugs: We have addressed some command usage issues, such as those relating to update-group-member and
 put-policy, and improved the description of some commands.

### Feature List
- Off-Chain-Auth Solution:  Implementing an off-chain-auth solution, which includes APIs for "request nonce",
 "update user key", and "verify off chain auth sig". This will greatly improve the user experience for Dapp users,
 eliminating the need for repetitive wallet popups for signatures.
- Path-style API and Upload Progress API: Introducing support for the path-style API and a new query upload progress API.
- Seal Object Metrics and Code Refinement: The TaskNode service now includes seal object metrics. We have also refined
 the replicate task and added some DB logs.
- Verify Permission API: The new verify permission API replaces the current chain interface, improving overall
 performance and reducing latency.
- Block Syncer TXHash & Juno Version Update: Updating the block syncer to add txhash info when exporting events.
 Additionally, updating the Juno version to support the new "stop serving" feature and included the SP module and GC function.
- Metadata Block Syncer Schema Update & ListExpiredBucketsBySp: Updating the block syncer schema according to changes
 on the chain and events. Also introducing a new method, ListExpiredBucketsBySp, to support GC operations within SP.

## Greenfield v0.1.0 - The initial testnet release.

[Greenfield Blockchain v0.1.0](https://github.com/bnb-chain/greenfield/releases/tag/v0.1.0) and
[Storage Provider v0.1.0](https://github.com/bnb-chain/greenfield-storage-provider/releases/tag/v0.1.0)
was the first testnet version of BNB Greenfield. It represented a fundamental implementation of the 
[Greenfield Whitepaper](https://github.com/bnb-chain/greenfield-whitepaper). 

This version contained a variety of functions, including payment, storage, storage provider, 
cross-chain, challenge, staking, and governance. It is an important milestone for BNB Greenfield, 
implementing many core functions and laying the foundation for future development and improvement.

### Features List

#### Account && Balance && Transaction

- Users can create accounts and transfer BNB through Metamask or other EVM compatible wallets.
- Users can grant permission to other users to spend their BNB as transaction fees.

#### Storage
- Users can create and manage group, bucket, and object on Greenfield.
- Users can upload files onto Greenfield in a decentralized way and download them anytime.
- Users can upload private files onto Greenfield safely.
- Users can grant permission to other users to access their files.
- Users can grant permission to other users to manage their resources, including group, bucket, and object.
- Users can pay for storage fees using BNB in a streaming manner.
- If the storage provider provides poor service, users can challenge them.

#### Native Cross Chain Communication

- User can transfer BNB between BSC and Greenfield.
- User can mirror Group, Bucket, Object to BSC as NFT.
- User can manage Group, Bucket, Object on BSC through smart contract directly.
- BSC developer can easily integrate Greenfield into their dApp through [SDK](https://github.com/bnb-chain/greenfield-contracts-sdk). 

#### Storage Provider

- Storage Provider can register and update their information.
- Storage Provider can update the storage price.
- Storage Provider can garbage collect stale storage data on Testnet.

#### Validator and Staking

- User can stake BNB to become a validator.
- Validator update their information.
- Validator can get part of revenue from storage fees.
- Validator can take part in the governance of Greenfield.