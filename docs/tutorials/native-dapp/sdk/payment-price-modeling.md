---
title: Payment Price Modeling
order: 2
---

# Payment Price Modeling

For payment introduction, please refer
to [Core concepts / Billing and Payment](https://docs.bnbchain.org/greenfield-docs/docs/guide/core-concept/billing-payment),
[Greenfield Blockchain / Billing and Payment](https://docs.bnbchain.org/greenfield-docs/docs/guide/greenfield-blockchain/modules/billing-and-payment)

## Basic points of payment account

- a payment account can pay for many buckets at the same time, and it will only record one number as the `NetflowRate` .
  For example, a payment account is associated with 3 buckets, with flows `-100` , `-200` , `-300` , then
  the `NetflowRate` is
  `-600`.

- when have the total `NetflowRate` you cannot do the reserve calculation from payment account's perspective, for
  example, if the `NetflowRate` is `-1000`, you do not know how many buckets/objects are related to it.

- **any updates** to the payment account, e.g., increase lock fee (when creating object), deposit BNB into it, change
  netflow rate (e.g., create bucket, seal object), it will trigger settlement.

- for settlement, the main purpose is to pre-charge fee for `ReserveTime` (e.g., 6 months), and when reserving fees,
  it will reserve for the new `NetflowRate` , which means that it actually reserves for many buckets/objects although
  you are updating one object/bucket.

## Outflows go to where?

For storage fee, it will be not streamed to storage providers directly. It will be streamed to:

- Global Virtual Group Family's virtual funding address for download fee and primary sp's store fee

- Global Virtual Group's virtual funding address for all secondary sp's sore fee

- Validator tax pool for extra tax fee (e.g. 1%), which will be used for rewarding data availability challenge
  submitters.

## Parameters/Queries

- Get global store price by
  time([QueryGlobalSpStorePriceByTime](https://docs.bnbchain.org/greenfield-docs/docs/greenfield-api/query-global-sp-store-price-by-time#queryglobalspstorepricebytime))

  ```json
  {
      "global_sp_store_price": {
          "update_time_sec": "1693526400",
          "read_price": "0.108000000000000000",
          "primary_store_price": "0.016000000000000000",
          "secondary_store_price": "0.001920000000000000"
      }
  }
  ```

- Query min charge
  size([QueryParamsByTimestamp](https://docs.bnbchain.org/greenfield-docs/docs/greenfield-api/query-params-by-timestamp))

  ```json
  {
      "params": {
          "versioned_params": {
              "max_segment_size": "16777216",
              "redundant_data_chunk_num": 4,
              "redundant_parity_chunk_num": 2,
              "min_charge_size": "1048576"
          },
          "max_payload_size": "34359738368"
      }
  }
  ```

- Query reserve time and validator tax
  rate([ParamsByTimestamp](https://docs.bnbchain.org/greenfield-docs/docs/greenfield-api/params-by-timestamp))

  ```json
  {
    "params": {
      "versioned_params": {
        "reserve_time": "604800",
        "validator_tax_rate": "0.010000000000000000"
      },
      "payment_account_count_limit": "200",
      "forced_settle_time": "43200",
      "max_auto_settle_flow_count": "100",
      "max_auto_resume_flow_count": "100",
      "fee_denom": "BNB",
      "withdraw_time_lock_threshold": "100000000000000000000",
      "withdraw_time_lock_duration": "86400"
    }
  }
  ```

## Storage Workflows

### Create Bucket

When creating bucket, the data package `ChargedReadQuota` can be defined by the bucket owner.

- the outflow going to Global Virtual Group Family will be created for read/download fee

  ```js
  primaryTotalFlowRate = readPrice * ChargedReadQuota
  // readPrice is the result of QueryGlobalSpStorePriceByTime
  ```

- the outflow going to validator tax pool will be created for extra validator tax fee

  ```js
  toValidators = validatorTaxRate * primaryTotalFlowRate
  // validatorTaxRate is the result of ParamsByTimestamp
  ```

Total Read Flow Rate:

```js
total = primaryTotalFlowRate + toValidators
```

### Update Bucket

The bucket owner can update the data package `ChargedReadQuota` of his bucket, e.g., increasing the read quota.
Then the outflow will be updated to reflect the new quota.

- the outflow which goes to Global Virtual Group Family will be updated
- the outflow which goes to validator tax pool will be updated

Note:  it needs 30 days interval to make the read quote smaller more.
Example

```
if ChargedReadQuota was set as 5G at 2023-07-03
the bucket owner can change the ChargedReadQuota bigger at any time
the bucket owner cannot change the ChargedReadQuota smaller before 2023-08-02 (30 days)
```

The bucket owner can also assign new payment account to his bucket. In such case,

- old payment account's outflow which goes to the Global Virtual Group Family will be decreased or removed
- old payment account's outflow which goes to validator tax pool will be decreased or removed
- new payment accounts' outflow going to Global Virtual Group Family will be created for read fee
- new payment accounts' outflow going to validator tax pool will be created for extra validator tax fee

Be noted, if read fee or store fee has been changed (e.g., the primary sp updated its read fee), during updating bucket,
it will also recalculate the store fee for all objects in the bucket. After updating bucket,
the bucket need to pay using the new price for both store and read fee.

### Delete Bucket

When deleting a bucket, there should be no object in it. The related outflows will be updated,

- the outflow which goes to the Global Virtual Group Family will be decreased or removed
- the outflow which goes to validator tax pool will be decreased or removed

```js
primaryTotalFlowRate = readPrice * ChargedReadQuota
// readPrice is the result of QueryGlobalSpStorePriceByTime
validatorTaxRate * primaryTotalFlowRate
// validatorTaxRate is the result of ParamsByTimestamp
```

### Create Object

When creating an object which is not empty, there will be not outflow change for the bucket's payment account.
However, some amount of BNB will be locked in `LockBalance` of payment account to make sure the payment account has
enough
BNB for storing the object for at least `ReserveTime` long when sealing the object.

The locked fee is calculated as below:

```js
primaryRate = PrimaryStorePrice * ChargeSize
// PrimaryStorePrice is from the result of QueryGlobalSpStorePriceByTime
secondaryRate = SecondaryStorePrice * ChargeSize * SecondaySPNumber
// SecondaryStorePrice is from the result of QueryGlobalSpStorePriceByTime
// SecondaySPNumber is from the result of QueryParamsByTimestamp
validatorTaxRate = ValidatorTaxRate * (primaryRate + secondaryRate)
// validatorTaxRate is the result of ParamsByTimestamp

total = primaryRate + secondaryRate + validatorTaxRate

amount = total * versionedParams.ReserveTime
//ReserveTime is the result of ParamsByTimestamp
```

The `ChargeSize` is calculated from the object's payload size, if the payload size is less than 128k (defined by the
`MinChargeSize` parameter in storage params ) then `ChargeSize` is 128k, otherwise `ChargeSize` is equal to payload
size.

When creating an object which is empty, it will be sealed directly.

### Seal Object

When sealing object, the locked fee will be moved from lock balance `LockBalance` to buffer balance `BufferBalance` and
the
following outflows will be created for the payment account.

- the outflow going to Global Virtual Group Family will be created for primary store fee
- the outflow going to Global Virtual Group will be created for secondary store fee
- the outflow going to validator tax pool will be created for extra validator tax fee

```js
primaryRate = PrimaryStorePrice * ChargeSize
// PrimaryStorePrice is from the result of QueryGlobalSpStorePriceByTime
secondaryRate = SecondaryStorePrice * ChargeSize * SecondaySPNumber
// SecondaryStorePrice is from the result of QueryGlobalSpStorePriceByTime
// SecondaySPNumber is from the result of QueryParamsByTimestamp
validatorTaxRate = ValidatorTaxRate * (primaryRate + secondaryRate)
// validatorTaxRate is the result of ParamsByTimestamp

total = primaryRate + secondaryRate + validatorTaxRate
```

Be noted, if read fee or store fee has been changed (e.g., the primary sp updated its read fee), during sealing object,
it will also recalculate the read fee and the store fee for all objects in the bucket. After sealing object, the bucket
need to pay using the new price for both store fee and read fee.

If seal failed, the locked fee during `Create Object` is still kept in `LockBalance` of the payment account. Via
`CancelCreateObject` transaction, the locked fee will be unlocked and added to static balance of the payment account.

### Delete Object

When deleting an object, the following outflows will be updated.

- the outflow which goes to Global Virtual Group Family will be decreased or removed
- the outflow which goes to Global Virtual Group will be decreased or removed
- the outflow which goes to validator tax pool will be decreased or removed

```js
primaryRate = PrimaryStorePrice * ChargeSize
// PrimaryStorePrice is from the result of QueryGlobalSpStorePriceByTime
secondaryRate = SecondaryStorePrice * ChargeSize * SecondaySPNumber
// SecondaryStorePrice is from the result of QueryGlobalSpStorePriceByTime
// SecondaySPNumber is from the result of QueryParamsByTimestamp
validatorTaxRate = ValidatorTaxRate * (primaryRate + secondaryRate)
// validatorTaxRate is the result of ParamsByTimestamp

total = primaryRate + secondaryRate + validatorTaxRate
```

Be noted, when deleting an object, if it is stored less than `ReserveTime` , it still needs to pay for
storing `ReserveTime` and the unpaid fee will be transferred to Global Virtual Group Family, Global Virtual Group, and
validator tax pool.

```js
unpaiedTime = objectInfo.CreateAt + versionParams.ReserveTime - blockTime
needToPay = total * unpaiedTime
// the needToPay amount will transfer to GVG/GVG Family/Validator Tax Pool
```

## How to re-calculate read/store fee for a bucket with a lot of objects?

Query [`HeadBucket`](https://docs.bnbchain.org/greenfield-docs/docs/greenfield-api/head-bucket#headbucket) , you will
get `ChargedReadQuota` of the bucket.
Query [`HeadBucketExtra`](https://docs.bnbchain.org/greenfield-docs/docs/greenfield-api/head-bucket-extra) , you will
get the following information:

```json5
{
    "extra_info": {
        "price_time": "1693535126",
        // the time of the payment price, used to calculate the charge rate of the bucket
        "total_charge_size": "2097152",
        // the total size of the objects in the bucket, used to calculate the charge rate of the bucket
        "local_virtual_groups": [
            {
                "id": 1,
                "global_virtual_group_id": 5,
                "stored_size": "12113",
                "total_charge_size": "2097152"
            }
        ],
        // local_virtual_groups contains all the lvg of this bucket.
        "next_local_virtual_group_id": 0
    }
}
```

Using `PriceTime` in the response, then you can get the read price and the store price which are used for the bucket. As
well as the `ValidatorTaxRate` and `ReserveTime` parameters, which are versioned.  
Using `TotalChargeSize` in the response, then you can get the total size for charging store fee.

For read fee, it is very similar to the section `CreateBucket`.

For store fee, you can do the calculation as follows (which is not the most accurate):

```js
primaryRate = PrimaryStorePrice * ChargeSize
// PrimaryStorePrice is from the result of QueryGlobalSpStorePriceByTime
secondaryRate = SecondaryStorePrice * ChargeSize * SecondaySPNumber
// SecondaryStorePrice is from the result of QueryGlobalSpStorePriceByTime
// SecondaySPNumber is from the result of QueryParamsByTimestamp
validatorTaxRate = ValidatorTaxRate * (primaryRate + secondaryRate)
// validatorTaxRate is the result of ParamsByTimestamp

total = primaryRate + secondaryRate + validatorTaxRate
```

For store fee, you can do the accurate calculation as follows:

```js
totalRate = 0

for (let lvg in lvgs) {
    primaryRate = PrimaryStorePrice * lvg.TotalChargeSize
    // PrimaryStorePrice is from the result of QueryGlobalSpStorePriceByTime
    secondaryRate = SecondaryStorePrice * lvg.TotalChargeSize * SecondaySPNumber
    // SecondaryStorePrice is from the result of QueryGlobalSpStorePriceByTime
    // SecondaySPNumber is from the result of QueryParamsByTimestamp
    validatorTaxRate = ValidatorTaxRate * (primaryRate + secondaryRate)
    // validatorTaxRate is the result of Params  ByTimestamp
}

total := primaryRate + secondaryRate + validatorTaxRate

totalRate += total
```

## Fees to be paid in Dapps (pseudo code formula)

Get current payment account
state([StreamRecord](https://docs.bnbchain.org/greenfield-docs/docs/greenfield-api/stream-record#streamrecord))

```json5
{
    "stream_record": {
        "account": "0x254435068d1494fa63354a39b6B859FeA4de3f49",
        "crud_timestamp": "1696072153",
        "netflow_rate": "0",
        // The per-second rate that an account's balance is changing. It is the sum of the account's inbound and outbound flow rates.
        "static_balance": "0",
        // The balance of the stream account at the latest CRUD timestamp.
        "buffer_balance": "0",
        // reserved balance of the stream account If the netflow rate is negative, the reserved balance is `netflow_rate * reserve_time`
        "lock_balance": "0",
        "status": "STREAM_ACCOUNT_STATUS_FROZEN",
        "settle_timestamp": "1695985808",
        "out_flow_count": "3",
        "frozen_netflow_rate": "-2397206"
    }
}
```

### Netflow Rate at a certain time

```js
netflow_rate = bucket1_rate + bucket2_rate //...+bucketN_rate

bucketN_rate = quotaRate + taxQuotaRate + storeRate + taxStoreRate

quotaRate = readPrice * ChargedReadQuota
taxQuotaRate = tax * quotaRate

totalRate = 0
// https://gnfd-testnet-fullnode-tendermint-us.bnbchain.org/openapi#/Query/HeadBucketExtra
for (let lvg in lvgs) {
    primaryRate = PrimaryStorePrice * lvg.TotalChargeSize
    secondaryRate = SecondaryStorePrice * lvg.TotalChargeSize * SecondaySPNumber
    validatorTaxRate = ValidatorTaxRate * (primaryRate + secondaryRate)
    total := primaryRate + secondaryRate + validatorTaxRate
    totalRate += total
}

storeRate + taxStoreRate = totalRate
```

### Buffer Balance at a certain time

```js
buffer_balance = netflow_rate * reserve_time
```

### Lock Balance at a certain time

```js
lock_balance = (file1_netflow_rate1 * reserve_time1 + file2_netflow_rate2 * reserve_time2) // + ... + fileN_netflow_rateM*reserve_timeP)
```

### Create Object

```js
settlement_fee = delta_time * netflow_rate
prepared_fee = (storeRate + taxRate) * reserve_time
```

### Delete Object

```js
settlement_fee = delta_time * netflow_rate
refund_fee = (storeRate + taxRate) * (reserve_time - unpaiedTime)
```

### Create Bucket

```js
settlement_fee = ChargedReadQuota == 0 ? 0 : delta_time * netflow_rate
prepared_fee = (quotaRate + taxRate) * reserve_time
```

### Delete Bucket

```js
settlement_fee = ChargedReadQuota == 0 ? 0 : delta_time * netflow_rate
refund_fee = (quotaRate + taxRate) * reserve_time
```

### Update Bucket

```js
settlement_fee = delta_time * netflow_rate
prepared_or_refund_fee = (price_time_legacy_bucket_rate - current_time_bucket_rate) * reserve_time
```

### Foce Settle Time

```go
payDuration := streamRecord.StaticBalance.Add(streamRecord.BufferBalance).Quo(streamRecord.NetflowRate.Abs())
settleTimestamp = currentTimestamp - int64(params.ForcedSettleTime) + payDuration.Int64()
```

