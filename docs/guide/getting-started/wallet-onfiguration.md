---
title: Wallet Configuration
order: 2
---

# Wallet Configuration

In this guide, you will learn how to use the MetaMask extension to interact with Greenfield Testnet and
Greenfield BSC Testnet, which is a fork of BSC and deployed dedicated for Greenfield Testnet.

We assume you have installed MetaMask and have an account, if not, please refer to [MetaMask](https://metamask.io/download/)
to install it.

## Add BSC Testnet Network
1. Visit [BNBChain List](https://www.bnbchainlist.org/).

2. Click **Connect Wallet**.


![connect-wallet](../../../static/asset/201-Connect-Wallet.png)

3. Find **BNB Smart Chain Testnet**, and click **Add To Metamask**.

<img width="378" alt="202-Greenfield-BSC-Testnet-Chain-List" src="https://github.com/RumeelHussainbnb/bnbgreenfield-docs/assets/93580180/0f9a229a-11cd-4f27-a895-b584a0ac4219"  style={{width:"40%"}}/>


4. When MetaMask prompts a window, click **Approve**.

<img width="346" alt="203-Approve-Add-Greenfield-BSC-Testnet" src="https://github.com/RumeelHussainbnb/bnbgreenfield-docs/assets/93580180/97dcc22d-28de-4176-9b24-bcafa716f7b9" style={{width:"40%"}}/>

## Add Greenfield Testnet Network
1. Visit [BNBChain List](https://www.bnbchainlist.org/).
2. Click **Connect Wallet** if wallet didn't connect.

![connect-wallet](../../../static/asset/201-Connect-Wallet.png)

3. Find **Greenfield Blockchain Testnet**, and click **Add To Metamask**


![greenfield-chain-list](../../../static/asset/204-Greenfield-Testnet-Chain-List.png)

4. When MetaMask prompts a window, click **Approve**

![approve-greenfield-testnet](../../../static/asset/205-Approve-Add-Greenfield-Testnet.png)

## EIP-712

### What is EIP-712

[EIP-712](https://eips.ethereum.org/EIPS/eip-712), which stands for Ethereum Improvement Proposal 712, is a standard for encoding and verifying structured data in Ethereum transactions. It was introduced to improve the security and usability of digital signatures in Ethereum smart contracts.

### Why EIP-712

In simple terms, EIP-712 allows Ethereum smart contracts to define a specific format or structure for the data that needs to be signed. This structured data is often referred to as a "message" or "typed data." By defining the structure, it becomes easier for users and applications to understand what they are signing and for smart contracts to verify the signatures.

### How it works

There is a living [example](https://weijiekoh.github.io/eip712-signing-demo/index.html).

1. Defining the Data Structure: The smart contract specifies a format or schema for the data it expects to be signed. This includes defining the fields, their types, and their order.

2. Hashing the Data: Before signing, the data is hashed (converted into a fixed-length string of characters) following the defined structure. This hash becomes the message to be signed.

3. Signing the Message: Users or applications sign the hashed message with their private keys, creating a digital signature.

4. Verifying the Signature: The smart contract, when presented with the signature and the original data, can verify that the signature matches the data and was created by someone with the corresponding private key.

### EIP-712 for Greenfield

* JS-SDK [example](https://github.com/bnb-chain/greenfield-js-sdk/blob/alpha/packages/chain-sdk/src/sign/signTx.ts)

* [Domain](https://github.com/bnb-chain/greenfield-js-sdk/blob/f3a7ce8f06d6bedf5e07bccccc4ada7676e79f2a/packages/chain-sdk/src/messages/utils.ts#L22) for data structure

```json
  "domain": {
    "name": "Greenfield Tx",
    "version": "1.0.0",
    "chainId": "0x2328",
    "verifyingContract": "greenfield",
    "salt": "0"
  },
```
* Example Types and Typed Messages

```json
{
  "types": {
    "Coin": [
      {
        "name": "amount",
        "type": "uint256"
      },
      {
        "name": "denom",
        "type": "string"
      }
    ],
    "EIP712Domain": [
      {
        "name": "chainId",
        "type": "uint256"
      },
      {
        "name": "name",
        "type": "string"
      },
      {
        "name": "salt",
        "type": "string"
      },
      {
        "name": "verifyingContract",
        "type": "string"
      },
      {
        "name": "version",
        "type": "string"
      }
    ],
    "Fee": [
      {
        "name": "amount",
        "type": "Coin[]"
      },
      {
        "name": "gas_limit",
        "type": "uint256"
      },
      {
        "name": "granter",
        "type": "string"
      },
      {
        "name": "payer",
        "type": "string"
      }
    ],
    "Msg1": [
      {
        "name": "amount",
        "type": "TypeMsg1Amount[]"
      },
      {
        "name": "from_address",
        "type": "string"
      },
      {
        "name": "to_address",
        "type": "string"
      },
      {
        "name": "type",
        "type": "string"
      }
    ],
    "Tx": [
      {
        "name": "account_number",
        "type": "uint256"
      },
      {
        "name": "chain_id",
        "type": "uint256"
      },
      {
        "name": "fee",
        "type": "Fee"
      },
      {
        "name": "memo",
        "type": "string"
      },
      {
        "name": "msg1",
        "type": "Msg1"
      },
      {
        "name": "sequence",
        "type": "uint256"
      },
      {
        "name": "timeout_height",
        "type": "uint256"
      }
    ],
    "TypeMsg1Amount": [
      {
        "name": "amount",
        "type": "string"
      },
      {
        "name": "denom",
        "type": "string"
      }
    ]
  },
  "primaryType": "Tx",
  "domain": {
    "name": "Greenfield Tx",
    "version": "1.0.0",
    "chainId": "0x2328",
    "verifyingContract": "greenfield",
    "salt": "0"
  },
  "message": {
    "account_number": "9",
    "chain_id": "9000",
    "fee": {
      "amount": [
        {
          "amount": "12000",
          "denom": "BNB"
        }
      ],
      "gas_limit": "12000",
      "granter": "",
      "payer": "0xF03Af05bE1a3ADF6Df23E7ee9A151718284FAE1a"
    },
    "memo": "",
    "msg1": {
      "amount": [
        {
          "amount": "1",
          "denom": "BNB"
        }
      ],
      "from_address": "0xF03Af05bE1a3ADF6Df23E7ee9A151718284FAE1a",
      "to_address": "0x46c1598A09B10C633704621Ad752b1ed65Cbfe9c",
      "type": "/cosmos.bank.v1beta1.MsgSend"
    },
    "sequence": "1",
    "timeout_height": "0"
  }
}

```

