---
title: List Objects By Bucket
---

# ListObjectsByBucket

## RESTful API Description

This API is used to query a bucket's all objects metadata info. And it supports both `virutal-hosted-style` and `path-style` requests.

## HTTP Request Format

| Description                | Definition                                |
| -------------------------- | ----------------------------------------- |
| Host(virutal-hosted-style) | BucketName.gnfd-testnet-sp-*.bnbchain.org |
| Path(virutal-hosted-style) | /                                         |
| Method                     | GET                                       |

You should set `BucketName` in url host to list objects of the bucket.

## HTTP Request Header

| ParameterName                                                      | Type   | Required | Description                                  |
| ------------------------------------------------------------------ | ------ | -------- | -------------------------------------------- |
| [Authorization](./referenece/gnfd_headers.md#authorization-header) | string | yes      | The authorization string of the HTTP request |

## HTTP Request Parameter

### Path Parameter

The request does not have a path parameter.

### Query Parameter

| ParameterName      | Type    | Required | Description                                                                                                                                                                |
| ------------------ | ------- | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| max-keys           | integer | no       | max-keys defines the maximum number of keys returned to the response body, the biggest number is 1000.If not specified, the default value is 50.                           |
| prefix             | string  | no       | prefix limits the response to keys that begin with the specified prefix                                                                                                    |
| continuation-token | string  | no       | continuation-token is the token returned from a previous list objects request to indicate where in the list of objects to resume the listing. This is used for pagination. |
| start-after        | string  | no       | start-after defines the starting object name for the listing of objects                                                                                                    |
| delimiter          | string  | no       | delimiter is a character you use to group keys, currently only '/' is supported                                                                                            |

### Request Body

The request does not have a request body.

## Request Syntax

```HTTP
GET / HTTP/1.1
Host: BucketName.gnfd-testnet-sp-*.bnbchain.org
Authorization: Authorization
```

## HTTP Response Header

The response returns the following HTTP headers.

| ParameterName | Type   | Description                 |
| ------------- | ------ | --------------------------- |
| Content-Type  | string | value is `application/json` |

## HTTP Response Parameter

| ParameterName           | Type    | Description                                                                                                                                                    |
| ----------------------- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| objects                 | array   | objects defines the list of object                                                                                                                             |
| key_count               | integer | key_count is the number of keys returned with this request                                                                                                     |
| max_keys                | integer | max_keys sets the maximum number of keys returned in the response                                                                                              |
| is_truncated            | boolean | is_truncated set to false if all of the results were returned. set to true if more keys are available to return                                                |
| next_continuation_token | string  | next_continuation_token is sent when is_truncated is true, which means there are more keys in the bucket that can be listed                                    |
| name                    | string  | name of the bucket                                                                                                                                             |
| prefix                  | string  | prefix is the prefix used during the query                                                                                                                     |
| delimiter               | string  | delimiter is the delimiter used during the query                                                                                                               |
| common_prefixes         | array   | common_prefixes a list of strings representing common prefixes. common_prefixes are those parts of object key names that fall between the specified delimiters |
| continuation_token      | integer | continuationToken is the continuation token used during the query                                                                                              |

### Response Body

If the request is successful, the service sends back an HTTP 200 response.

If you failed to send request, you will get error response body in [XML](./sp_response.md#sp-error-response).

## Response Syntax

```HTTP
HTTP/1.1 200

JSON Body
```

## Examples

The examples given all use virutal-hosted-style.

### Example 1: Query a bucket's objects

```HTTP
GET / HTTP/1.1
Host: myBucket.gnfd-testnet-sp-*.bnbchain.org?max-keys=1&continuation-token=Y2NjYy8=&prefix=aaa/&delimiter=/
Date: Fri, 31 March 2023 17:32:00 GMT
Authorization: authorization string
```

### Sample Response: Query a bucket's objects

```HTTP
HTTP/1.1 200 OK
Date: Fri, 31 March 2023 17:32:10 GMT

{
    "objects": [],
    "key_count": "1",
    "max_keys": "1",
    "is_truncated": true,
    "next_continuation_token": "ci8=",
    "name": "myBucket",
    "prefix": "aaa/",
    "delimiter": "/",
    "common_prefixes": [
        "cccc/"
    ],
    "continuation_token": "Y2NjYy8="
}
```
