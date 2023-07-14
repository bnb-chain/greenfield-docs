---
title: List Groups By Name And Prefix
---

# ListGroupsByNameAndPrefix

## RESTful API Description

This API is used to query a list of group by given prefix/name/source-type. This API only supports `path-style` requests.

## HTTP Request Format

| Description      | Definition                     |
|------------------|--------------------------------|
| Host(path-style) | gnfd-testnet-sp-*.bnbchain.org |
| Path(path-style) | /                              |
| Method           | GET                            |

## HTTP Request Header

| ParameterName                                                      | Type   | Required | Description                                  |
|--------------------------------------------------------------------|--------|----------|----------------------------------------------|
| [Authorization](reference/gnfd_headers.md#authorization-header) | string | yes      | The authorization string of the HTTP request |

## HTTP Request Parameter

### Path Parameter

The request does not have a path parameter.

### Query Parameter


| ParameterName   | Type      | Required | Description                                                                                                                                                                                                                                |
|-----------------|-----------|----------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| group-query     | string    | yes      | group-query is only used for routing location, and it does not need to pass any value                                                                                                                                                      |
| name            | string    | yes      | name defines the name to be searched in the group records                                                                                                                                                                                  |
| prefix          | string    | yes      | prefix the prefix of the group name,    if you search with 'app%coin', the system will return groups that start with 'app' and have 'coin' anywhere in the rest of the string, like 'applicationcoin', 'app_bitcoin', 'app123coinabc', etc |
| source-type     | string    | no       | source-type must in SOURCE_TYPE_ORIGIN SOURCE_TYPE_BSC_CROSS_CHAIN SOURCE_TYPE_MIRROR_PENDING                                                                                                                                              |
| limit           | integer   | no       | limit defines the maximum number of results that should be returned in response, default 50 and maximum 1000                                                                                                                               |
| offset          | integer   | no       | offset defines the position in the list from where to start returning results, default 0 and maximum 100000                                                                                                                                |

### Request Body

The request does not have a request body.

## Request Syntax

```HTTP
GET / HTTP/1.1
Host: gnfd-testnet-sp-*.bnbchain.org
Authorization: Authorization
```

## HTTP Response Header

The response returns the following HTTP headers.

| ParameterName | Type   | Description                 |
|---------------|--------|-----------------------------|
| Content-Type  | string | value is `application/json` |

## HTTP Response Parameter

| ParameterName | Type     | Description                                       |
|---------------|----------|---------------------------------------------------|
| groups        | array    | groups defines the information of the group list  |
| count         | array    | count defines the total groups amount             |

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

### Example 1: List Groups By Name And Prefix

```HTTP
GET /?group-query&source-type=SOURCE_TYPE_ORIGIN&limit=10&offset=100&name=e&prefix=t HTTP/1.1
Host: gnfd-testnet-sp-1.bnbchain.org
Date: Fri, 31 March 2023 17:32:00 GMT
Authorization: authorization string
X-Gnfd-User-Address: user address string
```

### Sample Response: Get Group lists successfully

```HTTP
HTTP/1.1 200 OK
Date: Fri, 31 March 2023 17:32:10 GMT

{
    "groups": [
        {
            "group": {
                "owner": "0x91D7deA99716Cbb247E81F1cfB692009164a967E",
                "group_name": "test",
                "source_type": 0,
                "id": "1",
                "extra": "\"{\\\"description\\\":\\\"no description\\\",\\\"imageUrl\\\":\\\"www.images.com/image1\\\"}\""
            },
            "operator": "0x91D7deA99716Cbb247E81F1cfB692009164a967E",
            "create_at": "41269",
            "create_time": "1683537260",
            "update_at": "41806",
            "update_time": "1683538508",
            "removed": true
        },
        {
            "group": {
                "owner": "0x3560a48bb05A1065Be2988fb5B890f220adFea82",
                "group_name": "testGroup",
                "source_type": 0,
                "id": "2",
                "extra": "\"{\\\"description\\\":\\\"no description\\\",\\\"imageUrl\\\":\\\"www.images.com/image1\\\"}\""
            },
            "operator": "0x0000000000000000000000000000000000000000",
            "create_at": "144203",
            "create_time": "1683777034",
            "update_at": "144203",
            "update_time": "1683777034",
            "removed": false
        },
        {
            "group": {
                "owner": "0x3FB2B6E513095BfbbB923A8799d40673e446ecEc",
                "group_name": "testGroup",
                "source_type": 0,
                "id": "3",
                "extra": "\"{\\\"description\\\":\\\"no description\\\",\\\"imageUrl\\\":\\\"www.images.com/image1\\\"}\""
            },
            "operator": "0x0000000000000000000000000000000000000000",
            "create_at": "144228",
            "create_time": "1683777092",
            "update_at": "144235",
            "update_time": "1683777108",
            "removed": true
        },
        {
            "group": {
                "owner": "0x3FB2B6E513095BfbbB923A8799d40673e446ecEc",
                "group_name": "testGroup",
                "source_type": 0,
                "id": "3",
                "extra": "\"{\\\"description\\\":\\\"no description\\\",\\\"imageUrl\\\":\\\"www.images.com/image1\\\"}\""
            },
            "operator": "0x0000000000000000000000000000000000000000",
            "create_at": "144228",
            "create_time": "1683777092",
            "update_at": "144235",
            "update_time": "1683777108",
            "removed": true
        },
        {
            "group": {
                "owner": "0x3FB2B6E513095BfbbB923A8799d40673e446ecEc",
                "group_name": "testGroup",
                "source_type": 0,
                "id": "3",
                "extra": "\"{\\\"description\\\":\\\"no description\\\",\\\"imageUrl\\\":\\\"www.images.com/image1\\\"}\""
            },
            "operator": "0x0000000000000000000000000000000000000000",
            "create_at": "144228",
            "create_time": "1683777092",
            "update_at": "144235",
            "update_time": "1683777108",
            "removed": true
        }
    ],
    "count": "5"
}
```
