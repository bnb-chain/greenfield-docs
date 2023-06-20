---
title: Put Object
---

# PutObject

## RESTful API Description

This API is used to upload an object to Greenfield SP. And it supports both `virutal-hosted-style` and `path-style` requests.

## HTTP Request Format

| Desscription               | Definition                                |
| -------------------------- | ----------------------------------------- |
| Host(virutal-hosted-style) | BucketName.gnfd-testnet-sp-*.bnbchain.org |
| Path(virutal-hosted-style) | /ObjectName                               |
| Method                     | PUT                                       |

## HTTP Request Header

| ParameterName                                                      | Type   | Required | Description                                                                                        |
| ------------------------------------------------------------------ | ------ | -------- | -------------------------------------------------------------------------------------------------- |
| [Authorization](./referenece/gnfd_headers.md#authorization-header) | string | yes      | The authorization string of the HTTP request                                                       |
| Content-Type                                                       | string | no       | The Content-Type representation header is used to indicate the original media type of the resource |
| Content-Length                                                     | string | no       | The Content-Length header indicates the size of the message body, in bytes, sent to the recipient. |

`Content-Type` is determined by specific object, such as the content type of an image could be image/jpeg.

## HTTP Request Parameter

### Path Parameter

The request does not have a path parameter.

### Query Parameter

The request does not have a query parameter.

### Request Body

The request body is a binary data that you want to store in Greenfield SP.

## Request Syntax

```HTTP
PUT /ObjectName HTTP/1.1
Host: BucketName.gnfd-testnet-sp-*.bnbchain.org
X-Gnfd-Txn-Hash: Txn-Hash
Authorization: Authorization

Body
```

## HTTP Response Header

The response returns the following HTTP headers.

| ParameterName     | Type   | Description                           |
| ----------------- | ------ | ------------------------------------- |
| X-Gnfd-Request-ID | string | defines trace id, trace request in sp |
| Etag              | string | Entity tag for the uploaded object    |

## HTTP Response Parameter

### Response Body

If the request is successful, the service sends back an HTTP 200 response.

If you failed to send request to get approval, you will get error response body in [XML](./sp_response.md#sp-error-response).

## Response Syntax

```HTTP
HTTP/1.1 200
X-Gnfd-Request-ID: RequestID
Etag: Etag
```

## Examples

The examples given all use virutal-hosted-style.

### Example 1: Upload an object

```HTTP
PUT /my-image.jpg HTTP/1.1
Host: myBucket.gnfd-testnet-sp-*.bnbchain.org
Date: Fri, 31 March 2023 17:32:00 GMT
Authorization: authorization string
Content-Type: image/jpeg
Content-Length: 11434
X-Gnfd-Txn-Hash: e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855
[11434 bytes of object data]
```

### Sample Response: Upload an object successfully

```HTTP
HTTP/1.1 200 OK
X-Gnfd-Request-ID: 4208447844380058399
Date: Fri, 31 March 2023 17:32:10 GMT
ETag: "1b2cf535f27731c974343645a3985328"
Content-Length: 11434
```
