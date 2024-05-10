"use strict";(self.webpackChunkgreenfield_docs=self.webpackChunkgreenfield_docs||[]).push([[4353],{14345:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"/releaseNotes","metadata":{"permalink":"/greenfield-docs/blog/releaseNotes","editUrl":"https://github.com/bnb-chain/greenfield-docs/blob/main/blog/releaseNotes.md","source":"@site/blog/releaseNotes.md","title":"Release Notes","description":"Greenfield v0.2.1 - Mekong Testnet reset.","date":"2024-05-10T02:58:58.000Z","formattedDate":"May 10, 2024","tags":[],"readingTime":5.5,"hasTruncateMarker":false,"authors":[],"frontMatter":{"title":"Release Notes","icon":"proposal","dir":{"order":7},"order":7}},"content":"## Greenfield v0.2.1 - Mekong Testnet reset.\\n\\nOn May 25th, we reset the Greenfield Testnet and upgrade the Greenfield version to v0.2.1. We\'re excited to introduce this as the Mekong Testnet. Here are key changes to note.\\n\\n\ud83d\udd38The Greenfield BSC Testnet (Chain ID: 5601) will be discontinued. Instead, we\'ll deploy the Greenfield Cross-Chain contracts on the BSC Chapel Testnet (Chain ID: 97).  This means you can fully utilize all the infrastructure of the current BSC Chapel Testnet, such as bscscan, tenderly, theGraph, and so on. BNB and Greenfield resources can still flow freely between Greenfield testnet and BSC testnet.\\n\\n\ud83d\udd38The Greenfield Blockchain gRPC Endpoint will no longer be provided. The ETH-API endpoint has now been integrated with the Tendermint endpoint. All you need is the Tendermint endpoint for the Greenfield Blockchain. Please use [Chainlist](https://www.bnbchainlist.org/) to quickly add BSC Testnet and Greenfield Mekong Testnet.\\n\\n\ud83d\udd38All buckets/objects previously stored on Greenfield Testnet will be cleared and won\'t be available for query anymore. Friendly reminder: Please do not save important data on the testnet. The team will periodically delete outdated data.\\n\\n\ud83d\udd38All account balances will also be reset. However, accounts with a balance under 10 tBNBs can look forward to an airdrop after the reset. For new users, Greenfield will not provide redundant faucets any longer, please get the test BNB from the official faucet [discord channel](https://discord.gg/bnbchain) and use [Dcellar](https://dcellar.io/) to convert it to the BNB on Greenfield.\\n\\n\ud83d\udd38As this is a breaking upgrade, the team will update the document as soon as possible the maintenance is done.\\n\\nGreenfield v0.2.1 - Release for Mekong Testnet \ud83c\udf89\\n\\nThe [Greenfield Blockchain v0.2.1](https://github.com/bnb-chain/greenfield/releases/tag/v0.2.0) and [Storage Provider v0.2.1](https://github.com/bnb-chain/greenfield-storage-provider/releases/tag/v0.2.1) introduces several enhancement exciting features. Let\'s take a look at these:\\n\\n### Enhancement and Feature List \ud83d\udcdd\\n- Bump cosmos-sdk core to version v0.47.2. Cosmos-sdk v0.47.x and v0.46.x have significant differences in consensus engine, ABCI, encoding, dependency injection, and other aspects. Greenfield hopes to update to this version this morning to avoid future upgrade difficulties.\\n- [Challenge Verifier](https://greenfield.bnbchain.org/docs/guide/introduction/ecosystem.html#challenge-verifier) is introduced in  Mekong Testnet. By using Challenge Verifier, the network can ensure that only reliable and trustworthy storage providers are allowed to participate, protecting the network from any potential data loss, corruption, or low-quality service.\\n- Discontinue object and stale permission GC is introduced in v0.2.1. These two features allow for a lighter blockchain state and allow SPs on the testnet to periodically clean up data to maintain long-term operation even without incentives.\\n- Support for more diverse methods of file searches, such as listing objects by prefix or by folder.\\n- Implemented a garbage collection module for the storage provider, reducing the operating costs of the storage provider.\\n\\n## Greenfield v0.1.2 - The maintenance testnet release.\\n\\n[Greenfield Blockchain v0.1.2](https://github.com/bnb-chain/greenfield/releases/tag/v0.1.2) and\\n[Storage Provider v0.1.2](https://github.com/bnb-chain/greenfield-storage-provider/releases/tag/v0.1.2)\\nwas a regular maintenance testnet version of BNB Greenfield. This version fixed several bugs from the\\nprevious version and introduced some features.\\n\\n### Bugfix List\\n- Modification of Storage Fee Destination: Previously, storage fees were directed to the SP operator address.\\n This has been adjusted to the funding address, ensuring smoother transactions and fee collection.\\n- Default SP Price Adjustment: To better reflect actual prices, the default prices in create_sp.json and payment.\\n Param have been modified to align more closely with the current market rates.\\n- Fixing List Group Error: A crucial fix has been made to the listGroup function to adapt it to the new indexing\\n structure of the group, which uses two levels of indexing.\\n- Fixing CLI Bugs: We have addressed some command usage issues, such as those relating to update-group-member and\\n put-policy, and improved the description of some commands.\\n\\n### Feature List\\n- Off-Chain-Auth Solution:  Implementing an off-chain-auth solution, which includes APIs for \\"request nonce\\",\\n \\"update user key\\", and \\"verify off chain auth sig\\". This will greatly improve the user experience for Dapp users,\\n eliminating the need for repetitive wallet popups for signatures.\\n- Path-style API and Upload Progress API: Introducing support for the path-style API and a new query upload progress API.\\n- Seal Object Metrics and Code Refinement: The TaskNode service now includes seal object metrics. We have also refined\\n the replicate task and added some DB logs.\\n- Verify Permission API: The new verify permission API replaces the current chain interface, improving overall\\n performance and reducing latency.\\n- Block Syncer TXHash & Juno Version Update: Updating the block syncer to add txhash info when exporting events.\\n Additionally, updating the Juno version to support the new \\"stop serving\\" feature and included the SP module and GC function.\\n- Metadata Block Syncer Schema Update & ListExpiredBucketsBySp: Updating the block syncer schema according to changes\\n on the chain and events. Also introducing a new method, ListExpiredBucketsBySp, to support GC operations within SP.\\n\\n## Greenfield v0.1.0 - The initial testnet release.\\n\\n[Greenfield Blockchain v0.1.0](https://github.com/bnb-chain/greenfield/releases/tag/v0.1.0) and\\n[Storage Provider v0.1.0](https://github.com/bnb-chain/greenfield-storage-provider/releases/tag/v0.1.0)\\nwas the first testnet version of BNB Greenfield. It represented a fundamental implementation of the \\n[Greenfield Whitepaper](https://github.com/bnb-chain/greenfield-whitepaper). \\n\\nThis version contained a variety of functions, including payment, storage, storage provider, \\ncross-chain, challenge, staking, and governance. It is an important milestone for BNB Greenfield, \\nimplementing many core functions and laying the foundation for future development and improvement.\\n\\n### Features List\\n\\n#### Account && Balance && Transaction\\n\\n- Users can create accounts and transfer BNB through Metamask or other EVM compatible wallets.\\n- Users can grant permission to other users to spend their BNB as transaction fees.\\n\\n#### Storage\\n- Users can create and manage group, bucket, and object on Greenfield.\\n- Users can upload files onto Greenfield in a decentralized way and download them anytime.\\n- Users can upload private files onto Greenfield safely.\\n- Users can grant permission to other users to access their files.\\n- Users can grant permission to other users to manage their resources, including group, bucket, and object.\\n- Users can pay for storage fees using BNB in a streaming manner.\\n- If the storage provider provides poor service, users can challenge them.\\n\\n#### Native Cross Chain Communication\\n\\n- User can transfer BNB between BSC and Greenfield.\\n- User can mirror Group, Bucket, Object to BSC as NFT.\\n- User can manage Group, Bucket, Object on BSC through smart contract directly.\\n- BSC developer can easily integrate Greenfield into their dApp through [SDK](https://github.com/bnb-chain/greenfield-contracts-sdk). \\n\\n#### Storage Provider\\n\\n- Storage Provider can register and update their information.\\n- Storage Provider can update the storage price.\\n- Storage Provider can garbage collect stale storage data on Testnet.\\n\\n#### Validator and Staking\\n\\n- User can stake BNB to become a validator.\\n- Validator update their information.\\n- Validator can get part of revenue from storage fees.\\n- Validator can take part in the governance of Greenfield."}]}')}}]);