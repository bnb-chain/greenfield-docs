---
title: Gas and Fees
order: 3
---

# Gas and Fees

This document describes how Greenfield charge fee to different transaction types.

## Introduction to `Gas` and `Fees`

In the Cosmos SDK, `gas` unit is designated to track resource consumption during execution.

On application-specific blockchains such as Greenfield, computational cost of storage is no 
longer the main factor in determining transaction fees, but rather, it is the incentive mechanism 
of Greenfield. For instance, creating and deleting a storage object use similar I/O and computational 
resources, but Greenfield encourages users to delete unused storage objects to optimize storage space, 
resulting in lower transaction fees.

**Greenfield Blockchain has taken a different approach from the gas meter design in Cosmos SDK. Instead, it has redesigned the gashub module to calculate gas consumption based on the type and content of the transaction, rather than just the consumption of storage and computational resources.**

Unlike networks like Ethereum, Greenfield transactions do not feature a gas price field. 
Instead, they consist of a fee and a gas wanted field. The gas price is inferred during 
the execution process and competes for entry into the transaction pool based on the gas price.

::: warning
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


::: info
There is no gas limitation of a block on Greenfield Blockchain.
:::

## Fee Table

Please note that the following information can be updated at any time and may not be immediately reflected in the 
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

