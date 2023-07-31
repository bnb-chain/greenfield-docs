---
title: List Objects By Object IDs
---

# ListObjectsByObjectIDs

## RESTful API Description

This API is used to query a list of objects metadata info by object ids. This API only supports `path-style` requests.

## HTTP Request Format

| Description      | Definition                     |
|------------------|--------------------------------|
| Host(path-style) | gnfd-testnet-sp-*.bnbchain.org |
| Path(path-style) | /                              |
| Method           | POST                           |

## HTTP Request Header

| ParameterName                                                      | Type   | Required | Description                                  |
|--------------------------------------------------------------------|--------|----------|----------------------------------------------|
| [Authorization](../storgae-provider-rest/sp-reference.md#authorization-header) | string | yes      | The authorization string of the HTTP request |

## HTTP Request Parameter

### Path Parameter

The request does not have a path parameter.

### Query Parameter


| ParameterName | Type   | Description                                                                              |
|---------------|--------|------------------------------------------------------------------------------------------|
| objects-query | string | objects-query is only used for routing location, and it does not need to pass any value  |


### Request Body

| ParameterName | Type     | Description                                |
|---------------|----------|--------------------------------------------|
| ids           | array    | ids defines defines the IDs of the objects |

## Request Syntax

```HTTP
POST / HTTP/1.1
Host: gnfd-testnet-sp-*.bnbchain.org?objects-query
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

| ParameterName | Type     | Description                                        |
|---------------|----------|----------------------------------------------------|
| objects       | array    | objects defines the information of the object list |


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

### Example 1: a list of objects by object ids

```HTTP
POST /?objects-query HTTP/1.1
Host: gnfd-testnet-sp-1.bnbchain.org
Date: Fri, 31 March 2023 17:32:00 GMT
Authorization: authorization string
Content-Type: application/json
Content-Length: length
{
    "ids": [1,2,333]
}
```

### Sample Response: Query a list of objects by object ids successfully

```HTTP
HTTP/1.1 200 OK
Date: Fri, 31 March 2023 17:32:10 GMT
{
    "objects": {
        "1": null,
        "2": null,
        "3": null,
        "4": null,
        "5": null,
        "333": {
            "object_info": {
                "owner": "0xFD53FA60d84B6fa058993871b16Fd492B6d64903",
                "bucket_name": "bg-0521-buc-01-00003-00000",
                "object_name": "bg-obj-1k-00000",
                "id": "333",
                "payload_size": "1024",
                "visibility": 3,
                "content_type": "application/octet-stream",
                "create_at": "1685465760",
                "object_status": 1,
                "redundancy_type": 0,
                "source_type": 0,
                "checksums": [
                    "OpIu9mWQ9SuHkFIgqW3ZaHYQ5BtuXxd64+OocR/hA1c=",
                    "SiUVQ+Te2cTyCaH+5dIa+yHOAwmQYaA6K/V3Nfb8gn4=",
                    "vLW23p/VzslF7tNPdz3GQ/RUPyg2GN2a73sKTRzxvG8=",
                    "vB2IRZJ+FzkzJDsJg7Kdkyz+eX6mRngll7gmkfKfkAE=",
                    "e6OOvf7Kv+ZJSCyexotwYoN4hG6EG4ImK5uyGwO3fBg=",
                    "XsGcWLUcDhTCyFCwdSSoCwTB+buKWbNWY3D0PHqeP7I=",
                    "DBWKPxvZ3YBy4K++2U8lNcU9CtN2xIckgslcpS+ZbAk="
                ],
                "secondary_sp_addresses": [
                    "0x66d06FFe266B46C6F0730cC9Ec2fc5B811cdA085",
                    "0x55f2b3729036567dA574b8640F3eCeDBA590CEE9",
                    "0x87Cc08944D8f63F006F9939f82Fcdb0E723B0C79",
                    "0x4F38A24aAcC530c38975057b5a158f85707f701F",
                    "0xf4AB94Cc32544c7b6BEF058BF629d9C8fDFb64c0",
                    "0x7BB727bdA19F4b6EEc21Cf2cC866c60daF8c2282"
                ]
            },
            "locked_balance": "0x0000000000000000000000000000000000000000000000000000000000000000",
            "removed": false,
            "update_at": "0",
            "delete_at": "0",
            "delete_reason": "",
            "operator": "0x8b97D152149309C15B1C339F547a9aca9Bf629D2",
            "create_tx_hash": "0x87feecde17f96132bc6b7519a8ce274489e99a62d0299bdf50006ffdd6d7c81f",
            "update_tx_hash": "0x7b90405d5e75d42048eaed06310293565923a990fcd8d3eb68dd2e4fcc1758a2",
            "seal_tx_hash": "0x7b90405d5e75d42048eaed06310293565923a990fcd8d3eb68dd2e4fcc1758a2"
        }
    }
}
```