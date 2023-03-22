---
title: Ecosystem Players
order: 3
---

## Ecosystem Players
There are several player roles for the whole Greenfield ecosystem.

<div align="center"><img src="../../asset/01-All-Players-of-Greenfield.jpg"  height="80%" width="80%"></div>
<div align="center"><i>Figure All Players of Greenfield</i></div>

### Greenfield Validators

As a PoS blockchain, the Greenfield blockchain has its own validators.
These validators are elected based on the Proof-of-Stake logic.

These validators are responsible for the security of the Greenfield
blockchain. They get involved in the governance and staking of the
blockchain. They form a P2P network that is similar to other PoS
blockchain networks.

Meanwhile, they accept and process transactions to allow users to
operate their objects stored on Greenfield. They maintain the metadata
of Greenfield as the blockchain state, which is the control panel for
both Storage Providers (SPs) and users. These two parties use and update
these states to operate the object storage.

### Greenfield Relayers
The Greenfield Relayer is a bidirectional relaying tool that facilitates communication between 
Greenfield and BSC. This standalone process can only be run by Greenfield validators. The relayer
independently monitors cross-chain events occurring on BSC and Greenfield, and persists them into
a database. Once a few blocks confirm the event and reach finality, the relayer will sign a message
using the BLS private key to confirm the event, and broadcast the signed event (known as "the vote")
through the P2P network on the Greenfield network. Once enough votes from the Greenfield relayer are
collected, the relayer will assemble a cross-chain package transaction and submit it to the BSC or
Greenfield network.

### Storage Providers (SPs)
Storage Providers (SP) are storage service infrastructures that organizations or individuals provide and the 
corresponding roles they play. They use Greenfield as the ledger and the single source of truth. Each SP can and 
will respond to users' requests to write (upload) and read (download) data, and serve as the gatekeeper for 
user rights and authentications.

### Greenfield dApps
Greenfield dApps are applications that provide functions based on
Greenfield storage and its related economic traits to solve some
problems of their users. When users want to create and use the data on Greenfield, 
they may interact with the BNB Greenfield Core Infrastructure via BNB Greenfield dApps 
(decentralized applications). Greenfield provides a friendly smart contract library on the cross-chain facility, 
which can be easily integrated into dapps.

## Participate in the Ecosystem
- [Become A Validator](../greenfield-blockchain/cli/validator-staking.md): validators secure the Greenfield by validating and relaying transactions,
  proposing, verifying and finalizing blocks.
- [Become A Storage Provider](../greenfield-blockchain/cli/storage-provider.md): SPs store the objects' real data, i.e. the payload data. and get paid
  by providing storage services.