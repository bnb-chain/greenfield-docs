---
title: Get Approval
---

# GetApproval

## RESTful API Description

This API is used to sign an approval for creating a bucket action or creating an object action. And it only supports `path-style` requests.

## HTTP Request Format

This API only supports path-style requests.

| Description      | Definition                        |
| ---------------- | --------------------------------- |
| Host(path-style) | gnfd-testnet-sp-*.bnbchain.org    |
| Path(path-style) | /greenfield/admin/v1/get-approval |
| Method           | GET                               |

## HTTP Request Header

| ParameterName                                                            | Type   | Required | Description                                  |
| ------------------------------------------------------------------------ | ------ | -------- | -------------------------------------------- |
| X-Gnfd-Unsigned-Msg                                                      | string | yes      | defines unsigned msg                         |
| [Authorization](../storgae-provider-rest/README.md#authorization-header) | string | yes      | The authorization string of the HTTP request |

X-Gnfd-Unsigned-Msg header consists of [MsgCreateBucket](#msgcreatebucket) and [MsgCreateObject](#msgcreateobject). You can read [Greenfield headers](../storgae-provider-rest/README.md) to know how to marshal and unmarshal them.

### MsgCreateBucket

| ParameterName     | Type                              | Description                                                                                                                                                                                                         |
| ----------------- | --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Creator           | string                            | Creator is the account address of bucket creator, it is also the bucket owner.                                                                                                                                      |
| BucketName        | string                            | BucketName is a globally unique name of bucket.                                                                                                                                                                     |
| Visibility        | [VisibilityType](#visibilitytype) | visibility means the bucket is private or public. If private, only bucket owner or grantee can read it, otherwise every greenfield user can read it.                                                                |
| PaymentAddress    | string                            | PaymentAddress is an account address specified by bucket owner to pay the read fee. Default: creator.                                                                                                               |
| PrimarySpAddress  | string                            | PrimarySpAddress  is the address of primary sp.                                                                                                                                                                     |
| PrimarySpApproval | [Approval](#approval)             | PrimarySpApproval is the approval info of the primary SP which indicates that primary sp confirm the user's request.                                                                                                |
| ChargedReadQuota  | unsigned integer                  | ChargedReadQuota defines the read data that users are charged for, measured in bytes. The available read data for each user is the sum of the free read data provided by SP and the ChargeReadQuota specified here. |

### MsgCreateObject

| ParameterName              | Type                              | Description                                                                                                                                                  |
| -------------------------- | --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Creator                    | string                            | Creator is the account address of object uploader.                                                                                                           |
| BucketName                 | string                            | BucketName is the name of the bucket where the object is stored.                                                                                             |
| ObjectName                 | string                            | ObjectName is the name of object.                                                                                                                            |
| PayloadSize                | integer                           | PayloadSize is size of the object's payload.                                                                                                                 |
| Visibility                 | [VisibilityType](#visibilitytype) | VisibilityType means the object is private or public. If private, only object owner or grantee can access it, otherwise every greenfield user can access it. |
| ContentType                | string                            | ContentType is a standard MIME type describing the format of the object.                                                                                     |
| PrimarySpApproval          | [Approval](#approval)             | PrimarySpApproval is the approval info of the primary SP which indicates that primary sp confirm the user's request.                                         |
| ExpectChecksums            | byteArray                         | ExpectChecksums is a list of hashes which was generate by redundancy algorithm.                                                                              |
| RedundancyType             | [RedundancyType](#redundancytype) | RedundancyType specifies which redundancy type is used.                                                                                                      |
| ExpectSecondarySpAddresses | stringArray                       | ExpectSecondarySpAddresses is a list of StorageProvider address which is optional.                                                                           |

### Approval

| ParameterName | Type      | Description                               |
| ------------- | --------- | ----------------------------------------- |
| ExpiredHeight | integer   | ExpiredHeight is expired at which height. |
| Sig           | byteArray | Sig is signature                          |

### RedundancyType

| Value | Description                      |
| ----- | -------------------------------- |
| 0     | Redundancy type is replica type. |
| 1     | Redundancy type is ec type.      |

### VisibilityType

| Value | Description                     |
| ----- | ------------------------------- |
| 0     | Visibility type is unspecified. |
| 1     | Visibility type is public read. |
| 2     | Visibility type is private.     |
| 3     | Visibility type is inherit.     |

:::caution
If the bucket visibility is inherited, it's finally set to private. If the object Visibility is inherited, it's the same as bucket.
:::

## HTTP Request Parameter

### Path Parameter

The request does not have a path parameter.

### Query Parameter

| ParameterName | Type   | Required | Description                                             |
| ------------- | ------ | -------- | ------------------------------------------------------- |
| action        | string | yes      | The action of approval:`CreateBucket` or `CreateObject` |

### Request Body

The request does not have a request body.

## Request Syntax

```HTTP
GET /greenfield/admin/v1/get-approval?action=action HTTP/1.1
Host: gnfd-testnet-sp-*.bnbchain.org
Content-Type: ContentType
X-Gnfd-Unsigned-Msg: UnsignedMsg
Authorization: Authorization
```

## HTTP Response Header

The response returns the following HTTP headers.

| ParameterName                                                             | Type   | Description                           |
| ------------------------------------------------------------------------- | ------ | ------------------------------------- |
| X-Gnfd-Request-ID                                                         | string | defines trace id, trace request in sp |
| [X-Gnfd-Signed-Msg](../storgae-provider-rest/README.md#x-gnfd-signed-msg) | string | defines signed msg                    |

## HTTP Response Parameter

### Response Body

If the request is successful, the service sends back an HTTP 200 response.

If you failed to send request to get approval, you will get error response body in [XML](./sp_response.md#sp-error-response).

## Response Syntax

```HTTP
HTTP/1.1 200
X-Gnfd-Request-ID: RequestID
X-Gnfd-Signed-Msg: SignedMsg
```

## Examples

The examples given all use path-style.

### Example 1: Create bucket

The following request sends `CreateBucket` action to get approval.

```HTTP
GET /greenfield/admin/v1/get-approval?action=CreateBucket HTTP/1.1
Host: gnfd-testnet-sp-1.bnbchain.org
Date: Fri, 31 March 2023 17:32:00 GMT
X-Gnfd-Unsigned-Msg: unsigned msg string
Authorization: authorization string
```

### Sample Response: Create bucket successfully

```HTTP
HTTP/1.1 200 OK
X-Gnfd-Request-ID: 14779951378820359452
X-Gnfd-Signed-Msg: df5857b2ac67b491ba6d9c6632618be7fb22de13662356b593d74103408cf1af46eed90edaa77bdb65b12fc63ee3bec8314ad7bb0f3ae099ccf7dafe22abff2e01
```

## Example 2: Create object

The following request sends `CreateObject` action to get approval.

```HTTP
GET /greenfield/admin/v1/get-approval?action=CreateObject HTTP/1.1
Host: gnfd-testnet-sp-1.bnbchain.org
Date: Fri, 31 March 2023 17:32:00 GMT
X-Gnfd-Unsigned-Msg: unsigned msg string
Authorization: authorization string
```

### Sample Response: Create object successfully

```HTTP
HTTP/1.1 200 OK
X-Gnfd-Request-ID: 4208447844380058399
X-Gnfd-Signed-Msg: f00daace3251076f270984e596bbd72b1b1f2a1ae0443e6f32f37cef73d541d568a542333f6a9af2f235724d2a763b3cdc0b370d978d0315b8414fa51fc32a2e00
```

## Example 3: Failed to create bucket

The following request sends `CreateBucket` action to get approval.

```HTTP
GET /greenfield/admin/v1/get-approval?action=CreateBucket HTTP/1.1
Host: gnfd-testnet-sp-1.bnbchain.org
Date: Fri, 31 March 2023 17:32:00 GMT
X-Gnfd-Unsigned-Msg: unsigned msg string
Authorization: authorization string
```

## Sample Response: There is an internal error in SP server

```HTTP
HTTP/1.1 403 Forbidden

<Error>
    <Code>InvalidUnsignedMsg</Code>
    <Message>The uinsigned message is not valid for creating bucket</Message>
    <RequestId>14379357152578345503</RequestId>
</Error>
```
