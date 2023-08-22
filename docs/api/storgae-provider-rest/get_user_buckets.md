---
title: Get User Buckets
---

# GetUserBuckets

## RESTful API Description

This API is used to query a user's own buckets metadata info. This API only supports `path-style` requests.

## HTTP Request Format

| Description      | Definition                     |
| ---------------- | ------------------------------ |
| Host(path-style) | gnfd-testnet-sp-*.bnbchain.org |
| Path(path-style) | /                              |
| Method           | GET                            |

## HTTP Request Header

| ParameterName       | Type   | Required | Description         |
| ------------------- | ------ | -------- | ------------------- |
| X-Gnfd-User-Address | string | yes      | The address of user |

## HTTP Request Parameter

### Path Parameter

The request does not have a path parameter.

### Query Parameter

| ParameterName   | Type    | Required | Description                                                                                                                                                                                       |
| --------------- | ------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| include-removed | boolean | no       | include-removed determines whether to include buckets that have been marked as removed in the list. If the parameter is not passed, it will return the data that has not been removed by default. |

### Request Body

The request does not have a request body.

## Request Syntax

```HTTP
GET / HTTP/1.1
Host: gnfd-testnet-sp-*.bnbchain.org
X-Gnfd-User-Address: Address
```

## HTTP Response Header

The response returns the following HTTP headers.

| ParameterName | Type   | Description                 |
| ------------- | ------ | --------------------------- |
| Content-Type  | string | value is `application/xml`  |

## HTTP Response Parameter

| ParameterName | Type  | Description                                        |
| ------------- | ----- | -------------------------------------------------- |
| buckets       | array | buckets defines the information of the bucket list |

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

### Example 1: Query a user's buckets

```HTTP
GET / HTTP/1.1
Host: gnfd-testnet-sp-1.bnbchain.org?include-removed=false
Date: Fri, 31 March 2023 17:32:00 GMT
X-Gnfd-User-Address: user address string
```

### Sample Response: Query a user's buckets successfully

```HTTP
HTTP/1.1 200 OK
X-Gnfd-Request-ID: 4208447844380058399
Date: Fri, 31 March 2023 17:32:10 GMT

<?xml version="1.0" encoding="UTF-8"?>
<GfSpGetUserBucketsResponse>
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
    <Buckets>
        <BucketInfo>
            <Owner>0xBC212bF5d6004311E350a531A1946D572C4d85E4</Owner>
            <BucketName>j6it2</BucketName>
            <Visibility>2</Visibility>
            <Id>2</Id>
            <SourceType>0</SourceType>
            <CreateAt>1692278045</CreateAt>
            <PaymentAddress>0xBC212bF5d6004311E350a531A1946D572C4d85E4</PaymentAddress>
            <GlobalVirtualGroupFamilyId>1</GlobalVirtualGroupFamilyId>
            <ChargedReadQuota>0</ChargedReadQuota>
            <BucketStatus>1</BucketStatus>
        </BucketInfo>
        <Removed>false</Removed>
        <DeleteAt>1693055775</DeleteAt>
        <DeleteReason>testnet cleanup</DeleteReason>
        <Operator>0xBC212bF5d6004311E350a531A1946D572C4d85E4</Operator>
        <CreateTxHash>0x8284859bf59b0fbde5a4836b0ffb1449fece0167ccd774782c37e4ed10af9047</CreateTxHash>
        <UpdateTxHash>0x2a1c313dec9196b07cef8008f0e0e614c804a0c28dc08c9d78648afac1908bce</UpdateTxHash>
        <UpdateAt>82179</UpdateAt>
        <UpdateTime>1692450975</UpdateTime>
    </Buckets>
</GfSpGetUserBucketsResponse>
```
