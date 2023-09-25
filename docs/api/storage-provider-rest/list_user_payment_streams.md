---
title: List User Payment Streams
---

# ListUserPaymentStreams

## RESTful API Description

This API is used to list user bucket info by given payment account. This API only supports `path-style` requests.

## HTTP Request Format

| Description      | Definition                     |
| ---------------- | ------------------------------ |
| Host(path-style) | gnfd-testnet-sp-*.bnbchain.org |
| Path(path-style) | /                              |
| Method           | GET                            |

## HTTP Request Header

## HTTP Request Parameter

### Path Parameter

The request does not have a path parameter.

### Query Parameter

| ParameterName   | Type    | Required | Description                                                                               |
| --------------- | ------- | -------- | ----------------------------------------------------------------------------------------- |
| payment-buckets | string  | yes      | payment-buckets is only used for routing location, and it does not need to pass any value |
| payment-account | string  | yes      | payment-account defines the payment account address                                       |

### Request Body

The request does not have a request body.

## Request Syntax

```HTTP
GET / HTTP/1.1
Host: gnfd-testnet-sp-*.bnbchain.org/?payment-buckets
```

## HTTP Response Header

The response returns the following HTTP headers.

| ParameterName | Type   | Description                 |
| ------------- | ------ | --------------------------- |
| Content-Type  | string | value is `application/xml`  |

## HTTP Response Parameter

| ParameterName | Type                          | Description                       |
| ------------- | ----------------------------- | --------------------------------- |
| Buckets       | [Bucket](#bucket)             | buckets defines a list of buckets |

### Bucket

| ParameterName    | Type                              | Description                                                                                             |
| ---------------- | --------------------------------- | ------------------------------------------------------------------------------------------------------- |
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

### BucketStatus

| Value | Description                   |
| ----- | ----------------------------- |
| 0     | bucket status is created      |
| 1     | bucket status is discontinued |

### VisibilityType

| Value | Description                    |
| ----- | ------------------------------ |
| 0     | Visibility type is unspecified |
| 1     | Visibility type is public read |
| 2     | Visibility type is private     |
| 3     | Visibility type is inherit     |

### SourceType

| Value | Description                 |
| ----- | --------------------------- |
| 0     | SOURCE_TYPE_ORIGIN          |
| 1     | SOURCE_TYPE_BSC_CROSS_CHAIN |
| 2     | SOURCE_TYPE_MIRROR_PENDING  |


### Response Body

If the request is successful, the service sends back an HTTP 200 response.

If you failed to send request, you will get error response body in [XML](./sp_response.md#sp-error-response).

## Response Syntax

```HTTP
HTTP/1.1 200

XML Body
```

## Examples

The examples given all use path-style.

### Example 1: List user payment streams

```HTTP
GET / HTTP/1.1
Host: gnfd-testnet-sp-1.bnbchain.org/?user-payments
Date: Fri, 31 March 2023 17:32:00 GMT
X-Gnfd-User-Address: user address string
```

### Sample Response: list user payment streams successfully

```HTTP
HTTP/1.1 200 OK
X-Gnfd-Request-ID: 4208447844380058399
Date: Fri, 31 March 2023 17:32:10 GMT

<?xml version="1.0" encoding="UTF-8"?>
<ListUserPaymentStreams>
    <Buckets>
        <BucketInfo>
            <Owner>0xBC212bF5d6004311E350a531A1946D572C4d85E4</Owner>
            <BucketName>wcm2w</BucketName>
            <Visibility>2</Visibility>
            <Id>241</Id>
            <SourceType>0</SourceType>
            <CreateAt>1692366630</CreateAt>
            <PaymentAddress>0xBC212bF5d6004311E350a531A1946D572C4d85E4</PaymentAddress>
            <GlobalVirtualGroupFamilyId>4</GlobalVirtualGroupFamilyId>
            <ChargedReadQuota>0</ChargedReadQuota>
            <BucketStatus>1</BucketStatus>
        </BucketInfo>
        <Removed>false</Removed>
        <DeleteAt>1693144356</DeleteAt>
        <DeleteReason>testnet cleanup</DeleteReason>
        <Operator>0xBC212bF5d6004311E350a531A1946D572C4d85E4</Operator>
        <CreateTxHash>0xfcab5c93def74983f22cf3826bd3bd8f66db3bd51552832e343a179290c27fe0</CreateTxHash>
        <UpdateTxHash>0xb2a0ff3b38f1cc65e55ff094661c0ad5d2aa515f48bb883aef5754238532b925</UpdateTxHash>
        <UpdateAt>120197</UpdateAt>
        <UpdateTime>1692539556</UpdateTime>
    </Buckets>
    <Buckets>
        <BucketInfo>
            <Owner>0xBC212bF5d6004311E350a531A1946D572C4d85E4</Owner>
            <BucketName>sz9cu</BucketName>
            <Visibility>2</Visibility>
            <Id>135</Id>
            <SourceType>0</SourceType>
            <CreateAt>1692337680</CreateAt>
            <PaymentAddress>0xBC212bF5d6004311E350a531A1946D572C4d85E4</PaymentAddress>
            <GlobalVirtualGroupFamilyId>2</GlobalVirtualGroupFamilyId>
            <ChargedReadQuota>0</ChargedReadQuota>
            <BucketStatus>1</BucketStatus>
        </BucketInfo>
        <Removed>false</Removed>
        <DeleteAt>1693115382</DeleteAt>
        <DeleteReason>testnet cleanup</DeleteReason>
        <Operator>0xBC212bF5d6004311E350a531A1946D572C4d85E4</Operator>
        <CreateTxHash>0x2eab7e67b6a53f81432d4bc919319f211ddcf9cfddac7df259564ccbc70a3521</CreateTxHash>
        <UpdateTxHash>0xeb81c7599ed043fdc7cae127cb440353a4a6b74cd87ee7a6fe81fe1accdeefa7</UpdateTxHash>
        <UpdateAt>107749</UpdateAt>
        <UpdateTime>1692510582</UpdateTime>
    </Buckets>
    <Buckets>
        <BucketInfo>
            <Owner>0xBC212bF5d6004311E350a531A1946D572C4d85E4</Owner>
            <BucketName>bdu5d</BucketName>
            <Visibility>2</Visibility>
            <Id>114</Id>
            <SourceType>0</SourceType>
            <CreateAt>1692336285</CreateAt>
            <PaymentAddress>0xBC212bF5d6004311E350a531A1946D572C4d85E4</PaymentAddress>
            <GlobalVirtualGroupFamilyId>4</GlobalVirtualGroupFamilyId>
            <ChargedReadQuota>0</ChargedReadQuota>
            <BucketStatus>1</BucketStatus>
        </BucketInfo>
        <Removed>false</Removed>
        <DeleteAt>1693113935</DeleteAt>
        <DeleteReason>testnet cleanup</DeleteReason>
        <Operator>0xBC212bF5d6004311E350a531A1946D572C4d85E4</Operator>
        <CreateTxHash>0xaec3bb18fa6c4b40cd784135b65edc9f55705e044eedc58f6ec8b1ec484053ff</CreateTxHash>
        <UpdateTxHash>0xc72703d2d2c1cbd56e55013d857f03335553a3a1db60130a4bf3117468260c0e</UpdateTxHash>
        <UpdateAt>107127</UpdateAt>
        <UpdateTime>1692509135</UpdateTime>
    </Buckets>
    <Buckets>
        <BucketInfo>
            <Owner>0xBC212bF5d6004311E350a531A1946D572C4d85E4</Owner>
            <BucketName>mjoo1</BucketName>
            <Visibility>2</Visibility>
            <Id>25</Id>
            <SourceType>0</SourceType>
            <CreateAt>1692321962</CreateAt>
            <PaymentAddress>0xBC212bF5d6004311E350a531A1946D572C4d85E4</PaymentAddress>
            <GlobalVirtualGroupFamilyId>7</GlobalVirtualGroupFamilyId>
            <ChargedReadQuota>0</ChargedReadQuota>
            <BucketStatus>1</BucketStatus>
        </BucketInfo>
        <Removed>false</Removed>
        <DeleteAt>1693099716</DeleteAt>
        <DeleteReason>testnet cleanup</DeleteReason>
        <Operator>0xBC212bF5d6004311E350a531A1946D572C4d85E4</Operator>
        <CreateTxHash>0x1b0a1b35debdc0f8d68e87e54a6edec79acea57973e1a4b817f3fcef9568dda5</CreateTxHash>
        <UpdateTxHash>0xf88c849041c0aad2bbb91f0fb95db5405cf38f459fabd909fb079dd34eb986bc</UpdateTxHash>
        <UpdateAt>101013</UpdateAt>
        <UpdateTime>1692494916</UpdateTime>
    </Buckets>
</ListUserPaymentStreams>
```
