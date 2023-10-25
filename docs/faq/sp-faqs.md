---
title: SP FAQ
---

### What are requirements for Greenfield Storage Provider?
Storage Providers(SP) should meet the following requirements:
* Collateral:
	* Each SP candidate has to deposit **500 BNB** as collateral
	* SP needs to pledge additional funds to store more data at 200% of the storage fees of the data stored as Primary SP, which is 0.023 * 1024 * 2 = $47.104/TB.

* [Hardware requirements](https://docs.bnbchain.org/greenfield-docs/docs/guide/storage-provider/run-book/run-SP-node#recommended-hardware)

### How does SP receive their rewards?

SP will receive their rewards in `funding address`.

### When to update store price and read price?

Every SP can set their own suggested store price and read price via on-chain transactions. Read how to send commands [here](https://docs.bnbchain.org/greenfield-docs/docs/guide/storage-provider/run-book/join-SP-network#update-sp-price)

There are some [constrains](https://docs.bnbchain.org/greenfield-docs/docs/guide/greenfield-blockchain/modules/billing-and-payment#storage-fee-price-and-adjustment
):
* When to Update : The global rates will be calculated and updated in each month's first block (UTC time) by default.
* When not Update: By default, SPs cannot update their price in the last two days of the current month.


### How much BNB is required by SP to stake in relation to how much space they want to provide?

SP needs to pledge additional funds to store more data at 200% of the storage fees of the data stored as Primary SP, which is about $0.023 * 1024 * 2 = $47.104/TB.

### What's the limit of Storage Provider capacity?

Each VGF serves a limited number of buckets. Once the store size exceeds a specified threshold, the family will no longer allow to serve more buckets.

### How to become a reliable SP?

1. Make sure your SP passed this [standard test](https://github.com/bnb-chain/greenfield-sp-standard-test)
2. If your infra is not working, switch your SP back to `maintenance mode`. Then, back up lost data from secondary SPs.


