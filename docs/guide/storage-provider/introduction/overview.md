---
title: Overview
dir:
  order: 1
order: 1
---

## What is the Greenfield Storage Provider

Storage Providers (abbreviated SP) are storage service infrastructure providers.
Greenfield validators and SPs form a pair synergy to provide the whole storage
service. Validators store the metadata and financial ledger with consensus, while
SPs store the objects' real data, i.e. the payload data, use the Greenfield chain
as the ledger and the single source of truth. SPs provide plenty of convenient
services for users and dApps to operate data on Greenfield.

## How the Greenfield Storage Providers works

SPs need to register themselves first by depositing on the Greenfield blockchain 
as their "Service Stake". Greenfield validators will go through a dedicated
governance procedure to vote for the SPs of their election. When the SPs join and
leave the network, they have to follow a series of actions to ensure data redundancy
for the users; otherwise, their "Service Stake" will be fined.

SPs provide publicly accessible APIs for users to upload, download, and manage data.
These APIs are very similar to Amazon S3 APIs so that existing developers may feel
familiar enough to write code for it. Each SP can and will respond to users' requests
to write (upload) and read (download) data, and serve as the gatekeeper for user permissions
and authentications.

Also each SP has a good connection with the Greenfield network by maintaining its own
local full node so that it can watch the state change directly and index data properly,
send transaction requests timely, manage local data correctly.

SPs are encouraged to advertise their information and prove to the community their
capability, as SPs have to provide a professional storage system with high-quality SLA.
