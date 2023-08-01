---
title: Storage Provider
order: 2
---

# Storage Provider

## Abstract

The storage providers (SP) are storage service infrastructures that organizations or individuals provide and the
corresponding roles they play. They use Greenfield as the ledger and the single source of truth. Each SP can and
will respond to users' requests to write (upload) and read (download) data, and serve as the gatekeeper for
user rights and authentications.

The SP module is responsible for managing and keeping storage providers in the network. This includes:

- **Metadata**: Basic information, such as address, tokens, and status, about each SP.
- **Deposit**: Aspiring SPs must stake tokens to guarantee their capacity to offer storage services.
- **Slash**: Stored data on an SP is occasionally challenged. If the challenge succeeds, the SP is penalized by losing some of its staked tokens.
- **Reputation**: We are implementing a reputation system to assess the quality of each SP's service. Users can select an SP based on its reputation score to store their data.
- **Exit**: SPs can leave voluntarily as long as they adhere to specific rules and recover their staked tokens. Greenfield may also force an SP to exit if it lacks sufficient staked tokens or its reputation score falls below the minimum requirements for an SP.

## Key Workflow

### Join the network

SPs have to register themselves first by depositing BNB tokens on the Greenfield blockchain as their "Service Stake". 
The validators will go through a dedicated governance procedure to vote for the SPs of their election. SPs are encouraged to
advertise their information and prove to the community their capability, as SPs have to provide a professional storage
system with high-quality SLA.

It will take several transactions to join the greenfield storage network for storage provider.

1. The funding account of SP should grant the governance module account to deduct tokens for staking;
2. The SP submit a `CreateStorageProvider` proposal to governance module;
3. Deposit enough BNB tokens for the proposal;
4. The validators should either vote `Pass` or `reject` for the proposal;
5. When more than half of the validators have voted, the storage provider will be automatically created on chain.

### Leave the network

When the SPs join or leave the network, they have to follow a series of actions to ensure data redundancy for the
users; otherwise, their "Service Stake" will be fined. This is achieved through the data availability challenge and
validator governance votes.

### Reputation

We'll introduce a reputation system for storage provider to evaluate the quality of service of SP.

## State

### StorageProvider

The storage provider can be in one of these several statuses:

* `STATUS_IN_SERVICE`: The SP is in service. it can serve user's Create/Upload/Download request.
* `STATUS_IN_JAILED`: The SP has been slashed many times, and its deposit tokens is insufficient.
* `STATUS_GRACEFUL_EXITING`: The SP is exiting gracefully. All the object stored in it will be shifted to another sp.
* `STATUS_OUT_OF_SERVICE`: The SP is out of service. it can be a short-lived service unavailable. Users are unable
  to store or get payload data on it.

The storage providers metadata should be primarily stored and accessed by the `OperatorAddr`, an EIP712 account address
for the operator of the storage provider. Three additional indices are maintained per storage provider metadata in
order to fulfill required lookups for SealObject/Deposit/Slash/GetApproval.

* StorageProvider: `0x21 | OperatorAddr -> ProtocolBuffer(StorageProvider)`
* StorageProviderByFundingAddress: `0x22 | FundingAddress -> OperatorAddr`
* StorageProviderBySealAddress: `0x23 | SealAddress -> OperatorAddr`
* StorageProviderByApprovalAddress: `0x24 | ApprovalAddress -> OperatorAddr`

Each storage provider's state is stored in a `StorageProvider` struct.

```protobuf
message StorageProvider {
  option (gogoproto.equal) = false;
  option (gogoproto.goproto_stringer) = false;

  // operator_address defines the address of the sp's operator; It also is the unique index key of sp.
  string operator_address = 1 [(cosmos_proto.scalar) = "cosmos.AddressString"];
  // fund_address define the account address of the storage provider for deposit, remuneration.
  string funding_address = 2 [(cosmos_proto.scalar) = "cosmos.AddressString"];
  // seal_address define the account address of the storage provider for sealObject
  string seal_address = 3 [(cosmos_proto.scalar) = "cosmos.AddressString"];
  // approval_address define the account address of the storage provider for ack CreateBucket/Object.
  string approval_address = 4 [(cosmos_proto.scalar) = "cosmos.AddressString"];
  // total_deposit define the deposit token
  string total_deposit = 5 [
    (cosmos_proto.scalar) = "cosmos.Int",
    (gogoproto.customtype) = "github.com/cosmos/cosmos-sdk/types.Int",
    (gogoproto.nullable) = false
  ];
  // status is the status of sp, which can be (in_service/read_only_service/graceful_exiting/out_of_service)
  Status status = 6;
  // endpoint is the service address of the storage provider
  string endpoint = 7;
  // description defines the description terms for the validator.
  Description description = 8 [(gogoproto.nullable) = false];
}
```

### Params

Params is a module-wide configuration structure that stores system parameters
and defines overall functioning of the SP module.

```protobuf
// Params defines the parameters for the module.
message Params {
  option (gogoproto.equal) = true;
  option (gogoproto.goproto_stringer) = false;

  // deposit_denom defines the staking coin denomination.
  string deposit_denom = 1;
  // min_deposit_amount defines the minimum deposit amount for storage providers.
  string min_deposit = 2 [
    (cosmos_proto.scalar) = "cosmos.Int",
    (gogoproto.customtype) = "github.com/cosmos/cosmos-sdk/types.Int",
    (gogoproto.nullable) = false
  ];
}
```

### Deposit Pool

The SP module uses its module account to manage all the staking tokens deposited by storage providers.

## Message

### MsgCreateStorageProvider

A storage provider is created using the `MsgCreateProvider` messages.

```protobuf
message MsgCreateStorageProvider {
  option (cosmos.msg.v1.signer) = "creator";

  string creator = 1 [(cosmos_proto.scalar) = "cosmos.AddressString"];
  Description description = 2 [(gogoproto.nullable) = false];
  string sp_address = 3 [(cosmos_proto.scalar) = "cosmos.AddressString"];
  string funding_address = 4 [(cosmos_proto.scalar) = "cosmos.AddressString"];
  string seal_address = 5 [(cosmos_proto.scalar) = "cosmos.AddressString"];
  string approval_address = 6 [(cosmos_proto.scalar) = "cosmos.AddressString"];
  string endpoint = 7;
  cosmos.base.v1beta1.Coin deposit = 8 [(gogoproto.nullable) = false];
}
```

This message is expected to fail if:

* Another storage provider with this operator/seal/funding/approval address is already registered;
* The initial deposit tokens do not belong to the denomination that is specified as the deposit denomination of the SP module;
* The deposit tokens is insufficient.

### MsgEditStorageProvider

The metadata of a storage provider can be edited by using `MsgEditStorageProvider` messages.

```protobuf
// MsgEditStorageProvider defines a SDK message for editing an existed SP.
message MsgEditStorageProvider {
  option (cosmos.msg.v1.signer) = "sp_address";

  string sp_address = 1 [(cosmos_proto.scalar) = "cosmos.AddressString"];
  string endpoint = 2;
  Description description = 3 [(gogoproto.nullable) = false];
}
```

This message is expected to fail if:

* The storage provider is not existed;
* The description fields are too large.

### MsgDeposit

When the deposit tokens of a storage provider are insufficient, it can use `MsgDeposit` messages to resupply the
deposit tokens.

```protobuf
// MsgDeposit defines a SDK message to deposit token for SP.
message MsgDeposit {
  option (cosmos.msg.v1.signer) = "creator";

  // creator is the msg signer, it should be SP address or sp's fund address
  string creator = 1 [(cosmos_proto.scalar) = "cosmos.AddressString"];
  // sp_address is the operator address of sp
  string sp_address = 2 [(cosmos_proto.scalar) = "cosmos.AddressString"];
  // deposit is a mount of token which used to deposit for SP
  cosmos.base.v1beta1.Coin deposit = 3 [(gogoproto.nullable) = false];
}
```

This message is expected to fail if:

* The storage provider doesn't exist;
* The tokens that are deposited do not belong to the denomination that is specified as the deposit denomination of the SP module.