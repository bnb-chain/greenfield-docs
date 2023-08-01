---
title: Get Object Meta
---

# GetObjectMeta

## RESTful API Description

This API is used to get object meta by object and bucket name. And it supports both `virtual-hosted-style` and `path-style` requests.

## HTTP Request Format

| Description                | Definition                                |
|----------------------------|-------------------------------------------|
| Host(virtual-hosted-style) | BucketName.gnfd-testnet-sp-*.bnbchain.org |
| Path(virtual-hosted-style) | /:object                                  |
| Method                     | GET                                       |

## HTTP Request Header

## HTTP Request Parameter

### Path Parameter

| ParameterName | Type   | Description                       |
|---------------|--------|-----------------------------------|
| object        | string | object defines the name of object |

### Query Parameter


| ParameterName | Type   | Description                                                                           |
|---------------|--------|---------------------------------------------------------------------------------------|
| object-meta   | string | object-meta is only used for routing location, and it does not need to pass any value |

### Request Body

The request does not have a request body.

## Request Syntax

```HTTP
GET /ObjectName?object-meta HTTP/1.1
Host: BucketName.gnfd-testnet-sp-*.bnbchain.org
```

## HTTP Response Header

| ParameterName | Type   | Description                 |
|---------------|--------|-----------------------------|
| Content-Type  | string | value is `application/json` |

## HTTP Response Parameter

| ParameterName | Type              | Description                    |
|---------------|-------------------|--------------------------------|
| object        | [Object](#object) | object defines the object meta |


### Object

| ParameterName  | Type                              | Description                                                                                                                        |
|----------------|-----------------------------------|------------------------------------------------------------------------------------------------------------------------------------|
| Owner          | string                            | Owner is the object owner                                                                                                          |
| Creator        | string                            | Creator is the address of the uploader, it always be same as owner address                                                         |
| BucketName     | string                            | BucketName is the name of the bucket                                                                                               |
| ObjectName     | string                            | ObjectName is the name of object                                                                                                   |
| Id             | Uint                              | Id is the unique identifier of object                                                                                              |
| PayloadSize    | uint64                            | PayloadSize is the total size of the object payload                                                                                |
| Visibility     | [VisibilityType](#visibilitytype) | Visibility defines the highest permissions for object. When an object is public, everyone can access it                            |
| ContentType    | string                            | ContentType defines the format of the object which should be a standard MIME type.                                                 |
| CreateAt       | int64                             | CreateAt defines the block timestamp when the object is created                                                                    |
| ObjectStatus   | [ObjectStatus](#objectstatus)     | ObjectStatus defines the upload status of the object                                                                               |
| RedundancyType | [RedundancyType](#redundancytype) | RedundancyType defines the type of the redundancy which can be multi-replication or EC                                             |
| SourceType     | [SourceType](#sourceType)         | SourceType defines the source of the object                                                                                        |
| Checksums      | [][]byte                          | Checksums defines the root hash of the pieces which stored in a SP. add omit tag to omit the field when converting to NFT metadata |

### RedundancyType

| Value | Description                     |
|-------|---------------------------------|
| 0     | Redundancy type is replica type |
| 1     | Redundancy type is ec type      |

### ObjectStatus

| Value | Description                   |
|-------|-------------------------------|
| 0     | object status is created      |
| 1     | object status is sealed       |
| 2     | object status is discontinued |

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
GET /j0qplcrkab?object-meta HTTP/1.1
Host: uvfzo.gnfd-testnet-sp-1.bnbchain.org
Date: Fri, 31 March 2023 17:32:00 GMT
```

### Sample Response: Get Object Meta successfully

```HTTP
HTTP/1.1 200 OK
Date: Fri, 31 March 2023 17:32:10 GMT

{
    "object": {
        "object_info": {
            "owner": "0xE0523429EA945CeD7bd3B170fd8dBe797778049b",
            "bucket_name": "uvfzo",
            "object_name": "j0qplcrkab",
            "id": "7080",
            "payload_size": "1048576",
            "visibility": 3,
            "content_type": "application/octet-stream",
            "create_at": "1687942210",
            "object_status": 1,
            "redundancy_type": 0,
            "source_type": 0,
            "checksums": [
                "QWEwTdjezECzPmTunWk3RXHGEsehhrmH2aKcvTKK0Mc=",
                "2R1pDBZiQXzkSFWdq9Vo7klfazjSCmddkAoqOrv3oao=",
                "2R1pDBZiQXzkSFWdq9Vo7klfazjSCmddkAoqOrv3oao=",
                "2R1pDBZiQXzkSFWdq9Vo7klfazjSCmddkAoqOrv3oao=",
                "2R1pDBZiQXzkSFWdq9Vo7klfazjSCmddkAoqOrv3oao=",
                "2R1pDBZiQXzkSFWdq9Vo7klfazjSCmddkAoqOrv3oao=",
                "2R1pDBZiQXzkSFWdq9Vo7klfazjSCmddkAoqOrv3oao="
            ],
            "secondary_sp_addresses": [
                "0xf4AB94Cc32544c7b6BEF058BF629d9C8fDFb64c0",
                "0x7BB727bdA19F4b6EEc21Cf2cC866c60daF8c2282",
                "0x4F38A24aAcC530c38975057b5a158f85707f701F",
                "0x66d06FFe266B46C6F0730cC9Ec2fc5B811cdA085",
                "0xD142052d8C0881FC7485C1270c3510BC442E05DD",
                "0x55f2b3729036567dA574b8640F3eCeDBA590CEE9"
            ]
        },
        "locked_balance": "0x0000000000000000000000000000000000000000000000000000000000000000",
        "removed": false,
        "update_at": "0",
        "delete_at": "0",
        "delete_reason": "",
        "operator": "0x527503a291A556DE3befD5e25Fc1F4bA0b0C6e8A",
        "create_tx_hash": "0x66c59a4c311f34d0b206116f2424af146bdf30108a4cece5a619fc833bab4852",
        "update_tx_hash": "0x51e459a0b126df31940a271f6d5a7d025bd08628b66b3be1b960246e9b7a19c8",
        "seal_tx_hash": "0x51e459a0b126df31940a271f6d5a7d025bd08628b66b3be1b960246e9b7a19c8"
    }
}
```