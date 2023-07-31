---
title: Get Bucket Meta
---

# GetBucketMeta

## RESTful API Description

This API is used to get bucket meta by bucket name. And it supports both `virtual-hosted-style` and `path-style` requests.

## HTTP Request Format

| Description                | Definition                                |
|----------------------------|-------------------------------------------|
| Host(virtual-hosted-style) | BucketName.gnfd-testnet-sp-*.bnbchain.org |
| Path(virtual-hosted-style) |                                           |
| Method                     | GET                                       |

## HTTP Request Header

| ParameterName                                                     | Type   | Required | Description                                   |
|-------------------------------------------------------------------|--------|----------|-----------------------------------------------|
| [Authorization](../storgae-provider-rest/sp-reference.md#authorization-header) | string | yes      | The authorization string of the HTTP request. |
<!--TODO:Authorization is no longer needed in the next testnet release-->
## HTTP Request Parameter

### Path Parameter

### Query Parameter


| ParameterName | Type   | Description                                                                           |
|---------------|--------|---------------------------------------------------------------------------------------|
| bucket-meta   | string | bucket-meta is only used for routing location, and it does not need to pass any value |

### Request Body

The request does not have a request body.

## Request Syntax

```HTTP
GET /?bucket-meta HTTP/1.1
Host: BucketName.gnfd-testnet-sp-*.bnbchain.org
Authorization: Authorization
```

## HTTP Response Header

| ParameterName | Type   | Description                 |
|---------------|--------|-----------------------------|
| Content-Type  | string | value is `application/json` |

## HTTP Response Parameter

| ParameterName | Type                          | Description                                                         |
|---------------|-------------------------------|---------------------------------------------------------------------|
| bucket        | [Bucket](#bucket)             | bucket defines the bucket meta                                      |
| stream_record | [StreamRecord](#streamrecord) | stream_record defines the stream payment record of a stream account |


### Bucket

| ParameterName    | Type                              | Description                                                                                             |
|------------------|-----------------------------------|---------------------------------------------------------------------------------------------------------|
| Owner            | string                            | Owner is the object owner                                                                               |
| BucketName       | string                            | BucketName is the name of the bucket                                                                    |
| Visibility       | [VisibilityType](#visibilitytype) | Visibility defines the highest permissions for bucket. When an bucket is public, everyone can access it |
| Id               | Uint                              | Id is the unique identification for bucket                                                              |
| SourceType       | [SourceType](#sourcetype)         | SourceType defines which chain the user should send the bucket management transactions to               |
| CreateAt         | int64                             | CreateAt define the block timestamp when the bucket created                                             |
| PrimarySPAddress | string                            | PrimarySPAddress is the unique address of the primary sp                                                |
| PaymentAddress   | string                            | payment_address is the address of the payment account                                                   |
| ChargedReadQuota | uint64                            | ChargedReadQuota defines the traffic quota for read in bytes per month.                                 |
| BucketStatus     | [BucketStatus](#bucketstatus)     | BucketStatus define the status of the bucket                                                            |

### StreamRecord

| ParameterName     | Type                                        | Description                                                                                                             |
|-------------------|---------------------------------------------|-------------------------------------------------------------------------------------------------------------------------|
| Account           | string                                      | Account is the account address                                                                                          |
| CrudTimestamp     | int64                                       | CrudTimestamp defines latest update timestamp of the stream record                                                      |
| NetflowRate       | big.Int                                     | NetflowRate defines the per-second rate that an account's balance is changing.                                          |
| StaticBalance     | big.Int                                     | StaticBalance defines the balance of the stream account at the latest CRUD timestamp                                    |
| BufferBalance     | big.Int                                     | BufferBalance defines reserved balance of the stream account                                                            |
| LockBalance       | big.Int                                     | LockBalance defines the locked balance of the stream account after it puts a new object and before the object is sealed |
| Status            | [StreamAccountStatus](#streamaccountstatus) | Status defines the status of the stream account                                                                         |
| SettleTimestamp   | int64                                       | SettleTimestamp defines the unix timestamp when the stream account will be settled                                      |
| OutFlowCount      | uint64                                      | OutFlowCount defines the count of its out flows                                                                         |
| FrozenNetflowRate | big.Int                                     | FrozenNetflowRate defines the frozen netflow rate, which is used when resuming stream account                           |

### BucketStatus

| Value | Description                   |
|-------|-------------------------------|
| 0     | bucket status is created      |
| 1     | bucket status is discontinued |

### StreamAccountStatus

| Value | Description                                                                |
|-------|----------------------------------------------------------------------------|
| 0     | STREAM_ACCOUNT_STATUS_ACTIVE defines the active status of a stream account |
| 1     | STREAM_ACCOUNT_STATUS_FROZEN defines the frozen status of a stream account |

### VisibilityType

| Value | Description                    |
|-------|--------------------------------|
| 0     | Visibility type is unspecified |
| 1     | Visibility type is public read |
| 2     | Visibility type is private     |
| 3     | Visibility type is inherit     |

### SourceType

| Value | Description                 |
|-------|-----------------------------|
| 0     | SOURCE_TYPE_ORIGIN          |
| 1     | SOURCE_TYPE_BSC_CROSS_CHAIN |
| 2     | SOURCE_TYPE_MIRROR_PENDING  |

### Response Body

If the request is successful, the service sends back an HTTP 200 response.

If you failed to send request, you will get error response body in [XML](./sp_response.md#sp-error-response).

## Response Syntax

```HTTP
HTTP/1.1 200
X-Gnfd-Request-ID: RequestID

Body
```

## Examples

The examples given all use virtual-hosted-style.

### Example 1: Get Object Meta

```HTTP
GET /?bucket-meta HTTP/1.1
Host: uvfzo.gnfd-testnet-sp-1.bnbchain.org
Date: Fri, 31 March 2023 17:32:00 GMT
Authorization: authorization string
```

### Sample Response: Get Object Meta successfully

```HTTP
HTTP/1.1 200 OK
Date: Fri, 31 March 2023 17:32:10 GMT

{
    "bucket": {
        "bucket_info": {
            "owner": "0xE0523429EA945CeD7bd3B170fd8dBe797778049b",
            "bucket_name": "uvfzo",
            "visibility": 1,
            "id": "7155",
            "source_type": 0,
            "create_at": "1687942206",
            "payment_address": "0xE0523429EA945CeD7bd3B170fd8dBe797778049b",
            "primary_sp_address": "0x87Cc08944D8f63F006F9939f82Fcdb0E723B0C79",
            "charged_read_quota": "7372800000000",
            "billing_info": {
                "price_time": "0",
                "total_charge_size": "0",
                "secondary_sp_objects_size": []
            },
            "bucket_status": 1
        },
        "removed": false,
        "delete_at": "1688719854",
        "delete_reason": "testnet cleanup",
        "operator": "0xE0523429EA945CeD7bd3B170fd8dBe797778049b",
        "create_tx_hash": "0x099908c60dd0fc8692384ff0fce83b9515b4f314b0e16e3b350b012541e42d87",
        "update_tx_hash": "0xdc78c1bc350f518f07a0407fd80300b6a496e963674f5e9c77531c2d3aa3788f",
        "update_at": "110511",
        "update_time": "1688115054"
    },
    "stream_record": {
        "account": "0xE0523429EA945CeD7bd3B170fd8dBe797778049b",
        "crud_timestamp": "1688964834",
        "netflow_rate": "-25715663",
        "static_balance": "0",
        "buffer_balance": "399929990976000",
        "lock_balance": "6095481984000",
        "status": 0,
        "settle_timestamp": "1704430434",
        "out_flows": [
            {
                "to_address": "0x21109411DDEF406C075c8fE000a3ee15110aF9D0",
                "rate": "9338893"
            },
            {
                "to_address": "0x2e66aa9e1Ae23a4A683E6d71a3C8162c566C98fb",
                "rate": "30196"
            },
            {
                "to_address": "0x3c883b6edF3e199faC735a7b2b012ebAf5371C01",
                "rate": "1793809"
            },
            {
                "to_address": "0x6554D1898eb7d0174CFB834ce6f73dD42cd284BE",
                "rate": "7153123"
            },
            {
                "to_address": "0x873AF49af2CC09055741Fb7476dBdc7c397636F5",
                "rate": "1787769"
            },
            {
                "to_address": "0x9C244D795175DC9F933786e60D6af325adA7AD62",
                "rate": "1793809"
            },
            {
                "to_address": "0xB373a07A981264419134451F44016a8E64DeD059",
                "rate": "1781731"
            },
            {
                "to_address": "0xE183689c42dBF8aE6b8D406BFb53D3169731DEDF",
                "rate": "1781730"
            },
            {
                "to_address": "0xdF5F0588f6B09f0B9E58D3426252db25Dc74E7a1",
                "rate": "254603"
            }
        ]
    }
}
```