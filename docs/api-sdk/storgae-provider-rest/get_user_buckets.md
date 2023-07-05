---
title: Get User Buckets
---

# GetUserBuckets

## RESTful API Description

This API is used to query a user's own buckets metadata info. This API only supports `path-style` requests.

## HTTP Request Format

| Description      | Definition                     |
|------------------|--------------------------------|
| Host(path-style) | gnfd-testnet-sp-*.bnbchain.org |
| Path(path-style) | /                              |
| Method           | GET                            |

## HTTP Request Header

| ParameterName                                                      | Type   | Required | Description                                  |
|--------------------------------------------------------------------|--------|----------|----------------------------------------------|
| [Authorization](./referenece/gnfd_headers.md#authorization-header) | string | yes      | The authorization string of the HTTP request |
| X-Gnfd-User-Address                                                | string | yes      | The address of user                          |

## HTTP Request Parameter

### Path Parameter

The request does not have a path parameter.

### Query Parameter

The request does not have a query parameter.

### Request Body

The request does not have a request body.

## Request Syntax

```HTTP
GET / HTTP/1.1
Host: gnfd-testnet-sp-*.bnbchain.org
Authorization: Authorization
X-Gnfd-User-Address: Address
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

### Example 1: Query a user's buckets

```HTTP
GET / HTTP/1.1
Host: gnfd-testnet-sp-1.bnbchain.org
Date: Fri, 31 March 2023 17:32:00 GMT
Authorization: authorization string
X-Gnfd-User-Address: user address string
```

### Sample Response: Query a user's buckets successfully

```HTTP
HTTP/1.1 200 OK
Date: Fri, 31 March 2023 17:32:10 GMT

{
    "buckets": [
        {
            "bucket_info": {
                "owner": "0x0E25AF015EA1Be52e36ce5Ebc4E1558dfcC8eBD0",
                "bucket_name": "rbna62ktkrwm",
                "visibility": 2,
                "id": "3",
                "source_type": 0,
                "create_at": "1681900505",
                "payment_address": "0x0E25AF015EA1Be52e36ce5Ebc4E1558dfcC8eBD0",
                "primary_sp_address": "0x3c5D5A4f6E3EF9c4b7AE4bA5E782D11B16bD1eAD",
                "charged_read_quota": "0",
                "billing_info": {
                    "price_time": "0",
                    "total_charge_size": "0",
                    "secondary_sp_objects_size": []
                },
                "bucket_status": 1
            },
            "removed": true,
            "delete_at": "1681900525",
            "delete_reason": "test",
            "operator": "0x3c5D5A4f6E3EF9c4b7AE4bA5E782D11B16bD1eAD",
            "create_tx_hash": "0x5961fe5ee9be7ecf4817fe3488bebb882e282d2c45ea4228961a83bf660f5489",
            "update_tx_hash": "0xb694ef890d6259767295098c43cdd881570316f3e887658dd9d8f7046424d8cc",
            "update_at": "1172",
            "update_time": "1681900525"
        }
    ]
}
```
