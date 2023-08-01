---
title: Get Nonce
---

# GetNonce

## RESTful API Description

This API is used to query the current user account key record.

See [off-chain authentication specification](https://greenfield.bnbchain.org/docs/guide/storage-provider/services/auth.html)

## HTTP Request Format

| Description | Definition                     |
| ----------- | ------------------------------ |
| Host        | gnfd-testnet-sp-*.bnbchain.org |
| Path        | /auth/request_nonce            |
| Method      | GET                            |

## HTTP Request Header

| ParameterName       | Type   | Required | Description                               |
| ------------------- | ------ | -------- | ----------------------------------------- |
| X-Gnfd-User-Address | string | yes      | user address for the account key          |
| X-Gnfd-App-Domain   | string | yes      | app domain for the account key            |
| Authorization       | string | no       | no need to pass in any authorization info |

## HTTP Request Parameter

### Path Parameter

The request does not have a path parameter.

### Query Parameter

The request does not have a query parameter.

### Request Body

The request does not have a request body.

## Request Syntax

```HTTP
GET /auth/request_nonce HTTP/1.1
Host: gnfd-testnet-sp-*.bnbchain.org
X-Gnfd-User-Address: UserAddress
X-Gnfd-App-Domain: AppDomain
```

### Response Header

The response returns the following HTTP headers.

| ParameterName | Type   | Description                 |
| ------------- | ------ | --------------------------- |
| Content-Type  | string | value is `application/json` |

## HTTP Response Parameter

### Response Body

If the request is successful, the service sends back an HTTP 200 response.

The following data is returned in JSON format by the service.

| ParameterName      | Type    | Description                                                                                              |
| ------------------ | ------- | -------------------------------------------------------------------------------------------------------- |
| current_nonce      | integer | current nonce for given account address and app domain                                                   |
| next_nonce         | integer | next nonce for given account address and app domain, which will be used for new account key registration |
| current_public_key | string  | current public key for given account address and app domain                                              |
| expiry_date        | integer | expire date for the current public key                                                                   |

## Response Syntax

```HTTP
HTTP/1.1 200
Content-Type: application/json

JSON Body
```

## Examples

### Example 1: Get nonce for a new combination of user address and app domain

#### request

```HTTP
GET /auth/request_nonce HTTP/1.1
Host: gnfd-testnet-sp-4.bnbchain.org
X-Gnfd-User-Address: 0x3d0a49B091ABF8940AD742c0139416cEB30CdEe0
X-Gnfd-App-Domain: https://greenfield.dapp.io
```

#### response

```json
{
    "current_nonce": 0,
    "next_nonce": 1,
    "current_public_key": "",
    "expiry_date": "1683885489612"
}
```

### Example 2: Get nonce for an existing combination of user address and app domain

#### response

```json
{
    "current_nonce": 7,
    "next_nonce": 8,
    "current_public_key": "ba149b8e932b38cf4098bad7f5189e23ad59672d5e6cb141c515e0e34ea9652e",
    "expiry_date": "1683885489612"
}
```
