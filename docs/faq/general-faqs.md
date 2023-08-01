---
title: General FAQ
---

### Does Greenfield have a token? How can I get it?

BNB remains the main utility token on Greenfield, no other token on Greenfield.
You can acquire BNB in multiple ways:

1. [Buy BNB](https://www.binance.com/en/how-to-buy/bnb) if you never own it.
2. Cross chain transfer BNB from BSC network to greenfield using [DCellar](https://pending_domain_name) if you get any BEP20 BNB.
3. Get BNB from other Greenfield users.

### What is the utility of BNB on Greenfield?

BNB is used as staking token, gas token, storage service fee token, governance token. Refer to [token economics](../guide/core-concept/gas-fees.md)
for more details.

### Does Greenfield support smart contract?

The Greenfield blockchain does not support smart contract, but the native cross chain between BSC and Greenfield bring programmability to the ecosystem. More tech details is explained [here](../guide/core-concept/programmability.md), you can start integrating smart contract with Greenfield following the [tutorial](../guide/dapp/quick-start.md).

### What consensus algorithm does Greenfield run on?

[Tendermint is the consensus engine](https://blog.cosmos.network/tendermint-explained-bringing-bft-based-pos-to-the-public-blockchain-domain-f22e274a0fdb) that powers Greenfield BPoS.

### Is the file permanently stored in Greenfield?

No. Currently, Greenfield charge storages fees in a stream manner, so if a user's account balance is insufficient and in arrears, it is possible that their data may be lost and cannot be recovered.

Greenfield may support permanent storage in the future.

### Can I update the files after it is uploaded?

Update is not yet supported, but it can be accomplished through deletion and upload.

### Can I enjoy lower price for the data I previously stored if the storage price goes down?

Sure, but it requires any transaction that modifies the payment flow, such as uploading or deleting files, to trigger it.

### Will I also have to pay more for the data I have previously stored if the storage price goes up?

In theory, yes. However, Greenfield will strictly limit the frequency and magnitude of price adjustments by storage providers to minimize the impact on users.

### If the storage provider loses my data or refuses to provide service, what can I do?

This situation is usually unlikely to happen because Greenfield uses redundant error-correction coding to keep your data safe across multiple storage providers.

If such a scenario occurs, you can initiate a data availability challenge, and validators will verify the integrity, availability, and service quality of your data while penalizing the corresponding storage provider.

You can continue to receive rewards until the storage provider fully recovers your data or provides the service.

### How can I make my valuable data circulate?

You can mirror your data and access permissions to the BNB Smart Chain network, and trade your data through various DApps and data trading platforms.

### How long can the data uploaded to the testnet be saved?

Testnet is used for testing, so it won't keep user's data for a long time. It is expected to be dropped after 7 days.
