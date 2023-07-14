---
title: List Buckets By Bucket IDs
---

# ListBucketsByBucketIDs

## RESTful API Description

This API is used to query a list of buckets metadata info by buckets ids. This API only supports `path-style` requests.

## HTTP Request Format

| Description      | Definition                     |
|------------------|--------------------------------|
| Host(path-style) | gnfd-testnet-sp-*.bnbchain.org |
| Path(path-style) | /                              |
| Method           | POST                           |

## HTTP Request Header

| ParameterName                                                      | Type   | Required | Description                                  |
|--------------------------------------------------------------------|--------|----------|----------------------------------------------|
| [Authorization](reference/gnfd_headers.md#authorization-header) | string | yes      | The authorization string of the HTTP request |

## HTTP Request Parameter

### Path Parameter

The request does not have a path parameter.

### Query Parameter


| ParameterName | Type   | Description                                                                             |
|---------------|--------|-----------------------------------------------------------------------------------------|
| buckets-query | string | buckets-query is only used for routing location, and it does not need to pass any value |


### Request Body

| ParameterName | Type     | Description                                 |
|---------------|----------|---------------------------------------------|
| ids           | array    | ids defines defines the IDs of the buckets  |

## Request Syntax

```HTTP
POST / HTTP/1.1
Host: gnfd-testnet-sp-*.bnbchain.org?buckets-query
Date: Fri, 31 March 2023 17:32:00 GMT
Authorization: authorization string
Content-Type: application/json
Content-Length: length
{
    "ids": []
}
```

## HTTP Response Header

The response returns the following HTTP headers.

| ParameterName | Type   | Description                 |
|---------------|--------|-----------------------------|
| Content-Type  | string | value is `application/json` |

## HTTP Response Parameter

| ParameterName           | Type     | Description                                        |
|-------------------------|----------|----------------------------------------------------|
| buckets                 | array    | buckets defines the information of the bucket list |


### Response Body

If the request is successful, the service sends back an HTTP 200 response.

If you failed to send request, you will get error response body in [XML](./sp_response.md#sp-error-response).

## Response Syntax

```HTTP
HTTP/1.1 200
JSON Body
```

## Examples

The examples given all use path-style.

### Example 1: a list of buckets by bucket ids

```HTTP
POST / HTTP/1.1
Host: gnfd-testnet-sp-1.bnbchain.org
Date: Fri, 31 March 2023 17:32:00 GMT
Authorization: authorization string
Content-Type: application/json
Content-Length: length
{
    "ids": [1,2,333]
}
```

### Sample Response: Query a list of buckets by bucket ids successfully

```HTTP
HTTP/1.1 200 OK
Date: Fri, 31 March 2023 17:32:10 GMT
{
    "buckets": {
        "1": null,
        "2": null,
        "333": {
            "bucket_info": {
                "owner": "0x2a7646d7D73e7D1952DbAD66f063dD532111F6af",
                "bucket_name": "bg-0521-buc-02-00020-00000",
                "visibility": 2,
                "id": "333",
                "source_type": 0,
                "create_at": "1685464514",
                "payment_address": "0x2a7646d7D73e7D1952DbAD66f063dD532111F6af",
                "primary_sp_address": "0x55f2b3729036567dA574b8640F3eCeDBA590CEE9",
                "charged_read_quota": "0",
                "billing_info": {
                    "price_time": "0",
                    "total_charge_size": "0",
                    "secondary_sp_objects_size": []
                },
                "bucket_status": 1
            },
            "removed": false,
            "delete_at": "1685730423",
            "delete_reason": "testnet cleanup",
            "operator": "0x2a7646d7D73e7D1952DbAD66f063dD532111F6af",
            "create_tx_hash": "0xbef8ad7f68b89d8bdaff41d195e93df80478a94830fa3f8e31c66435084d1532",
            "update_tx_hash": "0xd606897a39a94ea0f702f12ce1d17f580bc5653538ff91bb421e6a485b8df2e4",
            "update_at": "123911",
            "update_time": "1685644023"
        }
    }
}
```