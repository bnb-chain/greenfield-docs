---
sidebar_label: Gas and Fees
order: 3
---

# Gas and Fees

This document describes how Greenfield charge fee to different transaction types and the token economics of BNB Greenfield.

## Introduction to `Gas` and `Fees`

In the Cosmos SDK, `gas` unit is designated to track resource consumption during execution.

On application-specific blockchains such as Greenfield, computational cost of storage is no 
longer the main factor in determining transaction fees, but rather, it is the incentive mechanism 
of Greenfield. For instance, creating and deleting a storage object use similar I/O and computational 
resources, but Greenfield encourages users to delete unused storage objects to optimize storage space, 
resulting in lower transaction fees.

**Greenfield Blockchain has taken a different approach from the gas meter design in Cosmos SDK. Instead, 
it has redesigned the gashub module to calculate gas consumption based on the type and content of the transaction, 
rather than just the consumption of storage and computational resources.**

Unlike networks like Ethereum, Greenfield transactions do not feature a gas price field. 
Instead, they consist of a fee and a gas wanted field. The gas price is inferred during the transaction pre-execution process, 
and the transactions are queued based on the gas price

:::warning
**This means that Greenfield does not refund any excess gas fees to the transaction sender. 
Therefore, when constructing transactions, it is important to exercise caution when specifying the fees.**
:::

## GasHub

All transaction types need to register their gas calculation logic to gashub. Currently, four types of calculation logic 
are supported:

**MsgGasParams_FixedType**:
```go
type MsgGasParams_FixedType struct {
	FixedType *MsgGasParams_FixedGasParams 
}
```

**MsgGasParams_GrantType**:
```go
type MsgGasParams_GrantType struct {
	GrantType *MsgGasParams_DynamicGasParams 
}
```

**MsgGasParams_MultiSendType**:
```go
type MsgGasParams_MultiSendType struct {
	MultiSendType *MsgGasParams_DynamicGasParams 
}
```

**MsgGasParams_GrantAllowanceType**:
```go
type MsgGasParams_GrantAllowanceType struct {
	GrantAllowanceType *MsgGasParams_DynamicGasParams 
}
```

### Block Gas Meter

`ctx.BlockGasMeter()` serves as the gas meter designed to monitor and restrict gas consumption per block.

However, certain types of transactions may incur a high cost in Greenfield, leading to significant gas consumption. 
Consequently, Greenfield refrains from imposing any gas usage constraints on a block. Instead, Greenfield sets a block 
size limit, preventing blocks from exceeding 1MB in size and mitigating the risk of excessively large blocks.


:::info
There is no gas limitation of a block on Greenfield Blockchain.
:::

## Fee Table

Please note that the gas fee can be updated through governance and may not be immediately reflected in this 
documentation.

| Msg Type                                    | Gas Used           | Gas Price | Expected Fee(assuming BNB $300) |
|---------------------------------------------|--------------------|-----------|---------------------------------|
| authz.MsgExec                               | 1.20E+03           | 5 gwei    | $0.0018                         |
| authz.MsgRevoke                             | 1.20E+03           | 5 gwei    | $0.0018                         |
| bank.MsgSend                                | 1.20E+03           | 5 gwei    | $0.0018                         |
| distribution.MsgSetWithdrawAddress          | 1.20E+03           | 5 gwei    | $0.0018                         |
| distribution.MsgWithdrawDelegatorReward     | 1.20E+03           | 5 gwei    | $0.0018                         |
| distribution.MsgWithdrawValidatorCommission | 1.20E+03           | 5 gwei    | $0.0018                         |
| feegrant.MsgRevokeAllowance                 | 1.20E+03           | 5 gwei    | $0.0018                         |
| gov.MsgDeposit                              | 1.20E+03           | 5 gwei    | $0.0018                         |
| gov.MsgSubmitProposal                       | 2.00E+08           | 5 gwei    | $300                            |
| gov.MsgVote                                 | 2.00E+07           | 5 gwei    | $30                             |
| gov.MsgVoteWeighted                         | 2.00E+07           | 5 gwei    | $30                             |
| oracle.MsgClaim                             | 1.00E+03           | 5 gwei    | $0.0015                         |
| slashing.MsgUnjail                          | 1.20E+03           | 5 gwei    | $0.0018                         |
| staking.MsgBeginRedelegate                  | 1.20E+03           | 5 gwei    | $0.0018                         |
| staking.MsgCancelUnbondingDelegation        | 1.20E+03           | 5 gwei    | $0.0018                         |
| staking.MsgCreateValidator                  | 2.00E+08           | 5 gwei    | $300                            |
| staking.MsgDelegate                         | 1.20E+03           | 5 gwei    | $0.0018                         |
| staking.MsgEditValidator                    | 2.00E+07           | 5 gwei    | $30                             |
| staking.MsgUndelegate                       | 1.20E+03           | 5 gwei    | $0.0018                         |
| bridge.MsgTransferOut                       | 1.20E+03           | 5 gwei    | $0.0018                         |
| sp.MsgDeposit                               | 1.20E+03           | 5 gwei    | $0.0018                         |
| sp.MsgEditStorageProvider                   | 2.00E+07           | 5 gwei    | $30                             |
| staking.MsgCreateStorageProvider            | 2.00E+08           | 5 gwei    | $300                            |
| storage.MsgCopyObject                       | 1.20E+03           | 5 gwei    | $0.0018                         |
| storage.MsgDeleteObject                     | 1.20E+03           | 5 gwei    | $0.0018                         |
| storage.MsgCreateBucket                     | 2.40E+03           | 5 gwei    | $0.0036                         |
| storage.MsgCreateGroup                      | 2.40E+03           | 5 gwei    | $0.0036                         |
| storage.MsgCreateObject                     | 1.20E+03           | 5 gwei    | $0.0018                         |
| storage.MsgDeleteBucket                     | 1.20E+03           | 5 gwei    | $0.0018                         |
| storage.MsgDeleteGroup                      | 1.20E+03           | 5 gwei    | $0.0018                         |
| storage.MsgLeaveGroup                       | 1.20E+03           | 5 gwei    | $0.0018                         |
| storage.MsgRejectSealObject                 | 1.20E+04           | 5 gwei    | $0.018                          |
| storage.MsgSealObject                       | 1.20E+02           | 5 gwei    | $0.00018                        |
| storage.MsgUpdateGroupMember                | 1.20E+03           | 5 gwei    | $0.0018                         |
| storage.MsgCreatePaymentAccount             | 2.00E+05           | 5 gwei    | $0.3                            |
| storage.MsgPutPolicy                        | 2.40E+03           | 5 gwei    | $0.0036                         |
| storage.MsgDeletePolicy                     | 1.20E+03           | 5 gwei    | $0.0018                         |
| storage.MsgWithdraw                         | 1.20E+03           | 5 gwei    | $0.0018                         |
| storage.MsgDisableRefund                    | 1.20E+03           | 5 gwei    | $0.0018                         |
| authz.MsgGrant                              | 8e2 + 8e2 per item | 5 gwei    | $0.0012 per item                |
| bank.MsgMultiSend                           | 8e2 + 8e2 per item | 5 gwei    | $0.0012 per item                |
| feegrant.MsgGrantAllowance                  | 8e2 + 8e2 per item | 5 gwei    | $0.0012 per item                |

## Usage of BNB Token on BNB Greenfield

**BNB** remains the main utility token on Greenfield. **BNB** can be transferred from BSC to Greenfield blockchain, and vice versa. It is used as:

- **Staking token**: This token allows user to self-delegate and delegate as stake, which can earn gas rewards but may result in slash for improper behavior.
- **Gas token**: This token is used to pay the gas to submit transactions on the Greenfield blockchain. This includes both Greenfield local transactions or cross-chain transactions between Greenfield and BSC. The fee is charged at the time of transaction submission and dispatched to Greenfield `validators`, and potentially to Greenfield `Storage Providers` for certain transactions. The fee distribution is done in-protocol and a protocol specification is [described here](https://github.com/bnb-chain/greenfield-cosmos-sdk/blob/master/docs/spec/fee_distribution/f1_fee_distr.pdf).
- **Storage service fee token**: This token is used to pay fees for object storage and download bandwidth data package. Fees are charged as time goes on and dispatched to Greenfield `Storage Providers`.
- **Governance token**: BNB holders may govern the Greenfield by voting on proposals with their staked BNB (not available at launch).

## Revenue Sharing

The main economic drive of Greenfield comes from their `storage providers` who charge users fees for their storage services.
Meanwhile, `validators` play a crucial role in supervising the network's security, maintaining stability and ensuring service quality.
While `validators` may earn transaction fees, this alone may not be enough to guarantee sufficient staking for network security.
Therefore, Greenfield has designed `validators` to receive a reasonable proportion of fees from the storage services they provide.
This approach ensures that users' data is not only stored but that the network is also safe and secure.

## Circulation Model

In Greenfield, there is no inflation of BNB because of its dual-chain structure. Instead, cross-chain transfers are used to allow BNB to flow bi-directionally between Greenfield and Smart Chain. As a result, the total circulation of BNB on Greenfield can fluctuate.

Greenfield use Lock/Unlock mechanism to ensure the total circulation of BNB on both chain is always less than the initial total supply:

1. The transfer-out blockchain will lock the amount from source owner addresses into a module account or smart contract.

2. The transfer-in blockchain will unlock the amount from module account or contract and send it to target addresses.

3. Both networks will never mint BNB.

Refer to [cross chain model](../concept/programmability.md) to get more details about the mechanism.

## Genesis Setup

BNB is transferred from BSC to Greenfield as the first cross-chain action. The initial validator set and `storage provider` of Greenfield at the genesis will first lock a certain amount of BNB into the "Greenfield Token Hub" contract on BSC. This contract is used as part of the native bridge for BNB transferring after the genesis. These initial locked BNB will be used as the self-stake of `validators`, the deposit of `storage provider` and early days gas fees.

The initial BNB allocation on greenfield is around 1M BNB. (TODO: not finalized)

:::tip
No initial donors, foundation, or company will get funds in the genesis setup.

No token inflation.
:::
