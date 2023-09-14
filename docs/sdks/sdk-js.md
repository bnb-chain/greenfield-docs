---
title: Javascript SDK
---

# Quickstart

The BNB Greenfield JavaScript SDK is designed for front-end environments and provides an API for interacting with BNB Greenfield decentralized storage. It offers a range of operations, including retrieving permission details, gas fees, etc. The SDK also includes a crypto component for signing transactions and sending them to BNB Greenfield.

However, it should be noted that this SDK does not include methods for interacting with BNB Smart Chain (BSC). For a comprehensive understanding of available operations, refer to the [API Reference](https://github.com/bnb-chain/greenfield-js-sdk).

## Install

```bash
npm install @bnb-chain/greenfield-js-sdk
```

## Usage

To utilize the SDK functionality, users need to instantiate a client object from the SDK. This client object serves as the interface to interact with BNB Greenfield and perform the desired operations.

### Create client
```js
import {Client} from '@bnb-chain/greenfield-js-sdk'

// Node.js
const { Client } = require('@bnb-chain/greenfield-js-sdk');
const { ACCOUNT_ADDRESS, ACCOUNT_PRIVATEKEY } = require('./env');

const client = Client.create('https://gnfd-testnet-fullnode-tendermint-ap.bnbchain.org', '5600');
```

> Browser need load wasm manually.

The SDK offers two types of operations - sending transactions to BNB Greenfield, allowing users to modify the state of the blockchain; the second type enables users to send queries and retrieve metadata information about objects stored on the blockchain. 

The SDK consists of two parts:

* Chain: https://docs.bnbchain.org/greenfield-docs/docs/api/blockchain-rest
* Storage Provider: https://docs.bnbchain.org/greenfield-docs/docs/api/storage-provider-rest

### Transactions

#### 1. Transaction construction

The SDK offers functionality for transferring tokens between accounts, providing a straightforward and convenient way to perform token transfers. With the SDK, users can easily initiate and execute token transfers within the desired accounts, streamlining the process of managing and exchanging tokens.

The SDK includes functionality for simulating and broadcasting transactions, allowing users to retrieve essential information related to gas fees, and sending the transaction over network.

```js
const { simulate, broadcast } = await client.account.transfer({
  fromAddress: address,
  toAddress: transferInfo.to,
  amount: [
    {
      denom: 'BNB',
      amount: ethers.utils.parseEther(transferInfo.amount).toString(),
    },
  ],
});
```

#### 2. Simulate Transactions
This function returns the estimated gas limit, gas price, and overall gas fee.

```js
// simulate tx
const simulateInfo = await simulate({
    denom: 'BNB',
});

```

Example output

```json
{
   "gasLimit":2400,
   "gasPrice":"5000000000",
   "gasFee":"0.000012"
}
```

#### 3. Broadcast Transactions

Use the API endpoint to send the transaction data to the blockchain network.

```js
// broadcast tx
// This includes details such as gas limit, gas price, and overall gas fee.
const broadcastRes = await broadcast({
  denom: 'BNB',
  gasLimit: Number(simulateInfo.gasLimit),
  gasPrice: simulateInfo.gasPrice,
  payer: address,
  granter: '',
});
```

#### NOTICE: Signature mode for `Broadcast`  

`broadcast` use `window.ethereum` as signature provider by default.

If you want to use others, you can set `signTypedDataCallback`:

```js
// TrustWallet
const broadcastRes = await broadcast({
  //...
  signTypedDataCallback: async (addr: string, message: string) => {
    return await window.trustwallet.request({
      method: 'eth_signTypedData_v4',
      params: [addr, message],
    });
  }
});
```

If you broadcast in Nodejs, you can broadcast a tx by `privateKey`:
```js
const broadcastRes = await broadcast({
  //...
  privateKey: '0x.......'
});
```

Example output after broadcast your transaction:
```json
{
   "code":0,
   "height":449276,
   "txIndex":0,
   "events":[
      {
         "type":"coin_spent",
         "attributes":[
            "Array"
         ]
      },
      {
         "type":"coin_received",
         "attributes":[
            "Array"
         ]
      },
      {
         "type":"transfer",
         "attributes":[
            "Array"
         ]
      },
      {
         "type":"message",
         "attributes":[
            "Array"
         ]
      },
      {
         "type":"tx",
         "attributes":[
            "Array"
         ]
      },
      {
         "type":"tx",
         "attributes":[
            "Array"
         ]
      },
      {
         "type":"tx",
         "attributes":[
            "Array"
         ]
      },
      {
         "type":"message",
         "attributes":[
            "Array"
         ]
      },
      {
         "type":"coin_spent",
         "attributes":[
            "Array"
         ]
      },
      {
         "type":"coin_received",
         "attributes":[
            "Array"
         ]
      },
      {
         "type":"transfer",
         "attributes":[
            "Array"
         ]
      },
      {
         "type":"message",
         "attributes":[
            "Array"
         ]
      },
      {
         "type":"greenfield.payment.EventStreamRecordUpdate",
         "attributes":[
            "Array"
         ]
      },
      {
         "type":"greenfield.payment.EventStreamRecordUpdate",
         "attributes":[
            "Array"
         ]
      },
      {
         "type":"greenfield.payment.EventStreamRecordUpdate",
         "attributes":[
            "Array"
         ]
      },
      {
         "type":"greenfield.storage.EventCreateBucket",
         "attributes":[
            "Array"
         ]
      }
   ],
   "rawLog":"[{\"msg_index\":0,\"events\":[{\"type\":\"message\",\"attributes\":[{\"key\":\"action\",\"value\":\"/greenfield.storage.MsgCreateBucket\"},{\"key\":\"sender\",\"value\":\"0x525482AB3922230e4D73079890dC905dCc3D37cd\"},{\"key\":\"module\",\"value\":\"storage\"}]},{\"type\":\"coin_spent\",\"attributes\":[{\"key\":\"spender\",\"value\":\"0x525482AB3922230e4D73079890dC905dCc3D37cd\"},{\"key\":\"amount\",\"value\":\"1255106370BNB\"}]},{\"type\":\"coin_received\",\"attributes\":[{\"key\":\"receiver\",\"value\":\"0x040fFD5925D40E11c67b7238A7fc9957850B8b9a\"},{\"key\":\"amount\",\"value\":\"1255106370BNB\"}]},{\"type\":\"transfer\",\"attributes\":[{\"key\":\"recipient\",\"value\":\"0x040fFD5925D40E11c67b7238A7fc9957850B8b9a\"},{\"key\":\"sender\",\"value\":\"0x525482AB3922230e4D73079890dC905dCc3D37cd\"},{\"key\":\"amount\",\"value\":\"1255106370BNB\"}]},{\"type\":\"message\",\"attributes\":[{\"key\":\"sender\",\"value\":\"0x525482AB3922230e4D73079890dC905dCc3D37cd\"}]},{\"type\":\"greenfield.payment.EventStreamRecordUpdate\",\"attributes\":[{\"key\":\"account\",\"value\":\"\\\"0x525482AB3922230e4D73079890dC905dCc3D37cd\\\"\"},{\"key\":\"buffer_balance\",\"value\":\"\\\"1320750144000\\\"\"},{\"key\":\"crud_timestamp\",\"value\":\"\\\"1694704373\\\"\"},{\"key\":\"frozen_netflow_rate\",\"value\":\"\\\"0\\\"\"},{\"key\":\"lock_balance\",\"value\":\"\\\"0\\\"\"},{\"key\":\"netflow_rate\",\"value\":\"\\\"-2183780\\\"\"},{\"key\":\"settle_timestamp\",\"value\":\"\\\"1695265973\\\"\"},{\"key\":\"static_balance\",\"value\":\"\\\"0\\\"\"},{\"key\":\"status\",\"value\":\"\\\"STREAM_ACCOUNT_STATUS_ACTIVE\\\"\"}]},{\"type\":\"greenfield.payment.EventStreamRecordUpdate\",\"attributes\":[{\"key\":\"account\",\"value\":\"\\\"0x8D720138eC1f2006dbe283C9A0f6eCe4B5c2fF1e\\\"\"},{\"key\":\"buffer_balance\",\"value\":\"\\\"0\\\"\"},{\"key\":\"crud_timestamp\",\"value\":\"\\\"1694704373\\\"\"},{\"key\":\"frozen_netflow_rate\",\"value\":\"\\\"0\\\"\"},{\"key\":\"lock_balance\",\"value\":\"\\\"0\\\"\"},{\"key\":\"netflow_rate\",\"value\":\"\\\"32023799692\\\"\"},{\"key\":\"settle_timestamp\",\"value\":\"\\\"0\\\"\"},{\"key\":\"static_balance\",\"value\":\"\\\"1612084953752131\\\"\"},{\"key\":\"status\",\"value\":\"\\\"STREAM_ACCOUNT_STATUS_ACTIVE\\\"\"}]},{\"type\":\"greenfield.payment.EventStreamRecordUpdate\",\"attributes\":[{\"key\":\"account\",\"value\":\"\\\"0xdF5F0588f6B09f0B9E58D3426252db25Dc74E7a1\\\"\"},{\"key\":\"buffer_balance\",\"value\":\"\\\"0\\\"\"},{\"key\":\"crud_timestamp\",\"value\":\"\\\"1694704373\\\"\"},{\"key\":\"frozen_netflow_rate\",\"value\":\"\\\"0\\\"\"},{\"key\":\"lock_balance\",\"value\":\"\\\"0\\\"\"},{\"key\":\"netflow_rate\",\"value\":\"\\\"1294425392\\\"\"},{\"key\":\"settle_timestamp\",\"value\":\"\\\"0\\\"\"},{\"key\":\"static_balance\",\"value\":\"\\\"121675983099\\\"\"},{\"key\":\"status\",\"value\":\"\\\"STREAM_ACCOUNT_STATUS_ACTIVE\\\"\"}]},{\"type\":\"greenfield.storage.EventCreateBucket\",\"attributes\":[{\"key\":\"bucket_id\",\"value\":\"\\\"744\\\"\"},{\"key\":\"bucket_name\",\"value\":\"\\\"vpxyylsyey\\\"\"},{\"key\":\"charged_read_quota\",\"value\":\"\\\"10000\\\"\"},{\"key\":\"create_at\",\"value\":\"\\\"1694704373\\\"\"},{\"key\":\"global_virtual_group_family_id\",\"value\":\"4\"},{\"key\":\"owner\",\"value\":\"\\\"0x525482AB3922230e4D73079890dC905dCc3D37cd\\\"\"},{\"key\":\"payment_address\",\"value\":\"\\\"0x525482AB3922230e4D73079890dC905dCc3D37cd\\\"\"},{\"key\":\"primary_sp_id\",\"value\":\"2\"},{\"key\":\"source_type\",\"value\":\"\\\"SOURCE_TYPE_ORIGIN\\\"\"},{\"key\":\"status\",\"value\":\"\\\"BUCKET_STATUS_CREATED\\\"\"},{\"key\":\"visibility\",\"value\":\"\\\"VISIBILITY_TYPE_PUBLIC_READ\\\"\"}]}]}]",
   "transactionHash":"D304242145ED9B44F05431C3798B3273CF2A907E6AE1CA892759985C900D6E72",
   "gasUsed":2400,
   "gasWanted":2400
}
```

#### 4. Multi-Transactions

The SDK also provides support for bundling multiple operations into a single transaction, thereby reducing gas fees. This feature allows users to optimize their transactions by combining several operations together, minimizing the overall gas cost associated with executing them individually. By leveraging this functionality, users can effectively manage their gas fees and enhance the efficiency of their transactions within the blockchain network using the SDK.

```js
const createGroupTx = await client.group.createGroup(params);
const mirrorGroupTx = await client.crosschain.mirrorGroup({
    groupName,
    id,
    operator,
  });

const principal = {
  type: PermissionTypes.PrincipalType.PRINCIPAL_TYPE_GNFD_GROUP,
  value: GRNToString(newGroupGRN(address as string, groupName)),
};

const statement: PermissionTypes.Statement = {
  effect: PermissionTypes.Effect.EFFECT_ALLOW,
  actions: [PermissionTypes.ActionType.ACTION_GET_OBJECT],
  resources: [
    GRNToString(
      type === 'Data'
        ? newObjectGRN(bucketName, name)
        : newObjectGRN(bucketName, '*'),
    ),
  ],
};

const policyTx = await client.object.putObjectPolicy(bucketName, name, {
  operator: address,
  statements: [statement],
  principal,
});

const { simulate, broadcast } = await multiTx([
  createGroupTx,
  mirrorGroupTx,
  policyTx,
]);
```

### Querying Metadata

* Account info

```js

const { client, selectSp, generateString } = require('./client');
const { ACCOUNT_ADDRESS, ACCOUNT_PRIVATEKEY } = require('./env');
const Long = require('long');

(async () => {
  // get account info
  const addrInfo = await client.account.getAccount(ACCOUNT_ADDRESS);

  console.log('address is', addrInfo);


})
```

Example output

```json
{
   "address":"0x525482AB3922230e4D73079890dC905dCc3D37cd",
   "pubKey":{
      "typeUrl":"/cosmos.crypto.eth.ethsecp256k1.PubKey",
      "value":"CiECKuOEfCNFxnfiinnIIoe0OSf3VEOAU5jxwmZscfpOaW4="
   },
   "accountNumber":"5012",
   "sequence":"9"
}
```

### Storage Provider Client

> https://docs.bnbchain.org/greenfield-docs/docs/api/storgae-provider-rest

In addition, the SDK provides support for querying the list of storage providers available and offers generic search capabilities for exploring metadata attributes.

SDK support two [authentication type](https://docs.bnbchain.org/greenfield-docs/docs/api/storage-provider-rest#authentication-type):

* ECDSA: It is usually used on Node.js (Because it need to use a private key)
* EDDSA: It is usually used in a browser

`getBucketReadQuota` as example:

```js
// generate seed:
const allSps = await getAllSps();
const offchainAuthRes = await client.offchainauth.genOffChainAuthKeyPairAndUpload(
  {
    sps: allSps,
    chainId: GREEN_CHAIN_ID,
    expirationMs: 5 * 24 * 60 * 60 * 1000,
    domain: window.location.origin,
    address: 'your address',
  },
  provider: 'wallet provider',
);

// request sp api
const bucketQuota = await client.bucket.getBucketReadQuota(
  {
    bucketName,
  },
  {
    type: 'EDDSA',
    seed: offchainAuthRes.seedString,
    domain: window.location.origin,
    address: 'your address',
  },
);
```

```js
// Node.js:
// request sp api
const bucketQuota = await client.bucket.getBucketReadQuota(
  {
    bucketName,
  },
  {
    type: 'ECDSA',
    privateKey: '0x....'
  },
);
```

Others functions:

#### List Storage Providers

```js
export const getSps = async () => {
  const sps = await client.sp.getStorageProviders();
  const finalSps = (sps ?? []).filter(
    (v: any) => v?.description?.moniker !== 'QATest',
  );

  return finalSps;
};
```

#### Search for objects

It's important to note that even if an object is set to private, its metadata remains publicly accessible. This metadata includes information such as file size, file type, and file name. 

```js
export const searchKey = async (key: string) => {
  try {
    return await client.sp.listGroup(key, `${DAPP_NAME}_`, {
      sourceType: 'SOURCE_TYPE_ORIGIN',
      limit: 1000,
      offset: 0,
    });
  } catch (e) {
    return [];
}
```

## Examples

* [Next.js](https://github.com/bnb-chain/greenfield-js-sdk/tree/alpha/examples/nextjs)
* [Node.js](https://github.com/bnb-chain/greenfield-js-sdk/tree/alpha/examples/nodejs)

## Code Repository SDK
- [Official JS implementation SDK](https://github.com/bnb-chain/greenfield-js-sdk)