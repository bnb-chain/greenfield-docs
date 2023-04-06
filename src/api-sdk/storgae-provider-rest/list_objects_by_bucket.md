---
title: List Objects By Bucket
order: 9
---

# ListObjectsByBucket

## RESTful API Description

This API is used to query a bucket's all objects metadata info.

## HTTP Request Format

| Description | Definition                                |
|-------------|-------------------------------------------|
| Host        | BucketName.gnfd-testnet-sp-*.bnbchain.org |
| Path        | /                                         |
| Method      | GET                                       |

You should set `BucketName` in url host to list objects of the bucket.

## HTTP Request Header

| ParameterName       | Type   | Required | Description                                  |
|---------------------|--------|----------|----------------------------------------------|
| Authorization       | string | yes      | The authorization string of the HTTP request |

## HTTP Request Parameter

### Path Parameter

The request does not have a path parameter.

### Query Parameter

The request does not have a query parameter.

### Request Body

The request does not have a request body.

## Request Syntax

```shell
GET / HTTP/1.1
Host: gnfd.nodereal.com
Authorization: Authorization
```

## HTTP Response Header

The response returns the following HTTP headers.

| ParameterName | Type   | Description                 |
|---------------|--------|-----------------------------|
| Content-Type  | string | value is `application/json` |

## HTTP Response Parameter

### Response Body

If the request is successful, the service sends back an HTTP 200 response.

If you failed to send request to get approval, you will get error response body in [XML](./common/error.md#sp-error-response-parameter).

## Response Syntax

```shell
HTTP/1.1 200

JSON Body
```

## Examples

### Example 1: Query a bucket's objects

```shell
GET / HTTP/1.1
Host: BucketName.gnfd.nodereal.com
Date: Fri, 31 March 2023 17:32:00 GMT
Authorization: authorization string

```

### Sample Response: Query a bucket's objects

```shell
HTTP/1.1 200 OK
Date: Fri, 31 March 2023 17:32:10 GMT
Content-Length: 11434

[11434 bytes of object data]

```
