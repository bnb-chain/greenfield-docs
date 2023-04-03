---
title: Signer
order: 5
---

# Signer

Signer uses the SP's private keys to sign the message, the messages to form a transaction and sign the transaction to 
broadcast it to the Greenfield BlockChain, or the messages exchanged between SPs.

## CreateBucketMsg

Before the client creates a bucket, it needs to send the MsgCreateBucket to the primary SP to obtain approval. If the SP
is willing to serve the bucket, it will sign it by ApprovalPrivateKey, and the client broadcasts the message signed by 
the SP's ApprovalPrivateKey to the chain.

```protobuf
message MsgCreateBucket {
    option (cosmos.msg.v1.signer) = "creator";
    
    // creator defines the account address of bucket creator, it is also the bucket owner.
    string creator = 1 [(cosmos_proto.scalar) = "cosmos.AddressString"];
    // bucket_name defines a globally unique name of bucket
    string bucket_name = 2;
    // visibility means the bucket is private or public. if private, only bucket owner or grantee can read it,
    // otherwise every greenfield user can read it.
    VisibilityType visibility = 3;
    // payment_address defines an account address specified by bucket owner to pay the read fee. Default: creator
    string payment_address = 4 [(cosmos_proto.scalar) = "cosmos.AddressString"];
    // primary_sp_address defines the address of primary sp.
    string primary_sp_address = 6 [(cosmos_proto.scalar) = "cosmos.AddressString"];
    // primary_sp_approval defines the approval info of the primary SP which indicates that primary sp confirm the user's request.
    Approval primary_sp_approval = 7;
    // charged_read_quota defines the read data that users are charged for, measured in bytes.
    // The available read data for each user is the sum of the free read data provided by SP and
    // the ChargeReadQuota specified here.
    uint64 charged_read_quota = 8;
}

// Approval is the signature information returned by the Primary Storage Provider (SP) to the user
// after allowing them to create a bucket or object, which is then used for verification on the chain
// to ensure agreement between the Primary SP and the user."
message Approval {
  // expired_height is the block height at which the signature expires.
  uint64 expired_height = 1;
  // The signature needs to conform to the EIP 712 specification.
  bytes sig = 2;
}
```

## MsgCreateObject

Before the client creates a object, it needs to send the MsgCreateObject to the primary SP to obtain approval. If the SP
is willing to serve the bucket, it will sign it by ApprovalPrivateKey, and the client broadcasts the message signed by
the SP's ApprovalPrivateKey to the chain. SP fills the ExpiredHeight of PrimarySpApproval.

```protobuf
message MsgCreateBucket {
    option (cosmos.msg.v1.signer) = "creator";
    
    // creator defines the account address of bucket creator, it is also the bucket owner.
    string creator = 1 [(cosmos_proto.scalar) = "cosmos.AddressString"];
    // bucket_name defines a globally unique name of bucket
    string bucket_name = 2;
    // visibility means the bucket is private or public. if private, only bucket owner or grantee can read it,
    // otherwise every greenfield user can read it.
    VisibilityType visibility = 3;
    // payment_address defines an account address specified by bucket owner to pay the read fee. Default: creator
    string payment_address = 4 [(cosmos_proto.scalar) = "cosmos.AddressString"];
    // primary_sp_address defines the address of primary sp.
    string primary_sp_address = 6 [(cosmos_proto.scalar) = "cosmos.AddressString"];
    // primary_sp_approval defines the approval info of the primary SP which indicates that primary sp confirm the user's request.
    Approval primary_sp_approval = 7;
    // charged_read_quota defines the read data that users are charged for, measured in bytes.
    // The available read data for each user is the sum of the free read data provided by SP and
    // the ChargeReadQuota specified here.
    uint64 charged_read_quota = 8;
}

// Approval is the signature information returned by the Primary Storage Provider (SP) to the user
// after allowing them to create a bucket or object, which is then used for verification on the chain
// to ensure agreement between the Primary SP and the user."
message Approval {
  // expired_height is the block height at which the signature expires.
  uint64 expired_height = 1;
  // The signature needs to conform to the EIP 712 specification.
  bytes sig = 2;
}
```

## IntegrityHash

SP stores object payload data, it also saves the integrity hash and signs it, which will be used for seal object, and 
these integrity hashes and signatures will also be used for challenge.

```protobuf
// SignIntegrityHashRequest is request type for the SignIntegrityHash RPC method.
message SignIntegrityHashRequest {
    // data defines the Hash set that would be calculated to IntegrityHash and signed by the PrimarySP approval address.
    repeated bytes data = 1;
    // object_id defines the unique id of the object.
    uint64 object_id = 2;
}

// SignIntegrityHashResponse is response type for the SignIntegrityHash RPC method.
message SignIntegrityHashResponse {
    // integrity_hash defines the a Hash val that calculated by the input.
    bytes integrity_hash = 1;
    // signature defines the MsgCreateObject signature that signed by the PrimarySP approval address.
    bytes signature = 2;
}
```

## MsgSealObject

Primary SP signs the MsgSealObject and broadcasts it on Greenfield BlockChain.

```protobuf
message MsgSealObject {
    option (cosmos.msg.v1.signer) = "operator";
    
    // operator defines the account address of primary SP
    string operator = 1 [(cosmos_proto.scalar) = "cosmos.AddressString"];
    // bucket_name defines the name of the bucket where the object is stored.
    string bucket_name = 2;
    // object_name defines the name of object to be sealed.
    string object_name = 3;
    // secondary_sp_addresses defines a list of storage provider which store the redundant data.
    repeated string secondary_sp_addresses = 4 [(cosmos_proto.scalar) = "cosmos.AddressString"];
    // secondary_sp_signatures defines the signature of the secondary sp that can
    // acknowledge that the payload data has received and stored.
    repeated bytes secondary_sp_signatures = 5;
}
```

## GetApprovalRequest

Primary SP sends GetApprovalRequest to other SPs, asking if they are willing to serve as obejcet's secondary SP through 
the p2p protocol.

```protobuf
// GetApprovalRequest defines the request of getting approval
message GetApprovalRequest {
    // object_info define the object info for getting approval
    bnbchain.greenfield.storage.ObjectInfo object_info = 1;
    // sp_operator_address define sp operator public key
    string sp_operator_address = 2;
    // signature define the signature of sp sign the msg
    bytes signature = 4;
}
```

## GetApprovalResponse

SP ack the GetApprovalRequest by GetApprovalResponse with its signature.

```protobuf
// GetApprovalResponse defines the response of getting approval
message GetApprovalResponse {
  // object_info define the object info for getting approval
  bnbchain.greenfield.storage.ObjectInfo object_info = 1;
  // sp_operator_address define sp operator public key
  string sp_operator_address = 2;
  // expired_time defines the approval valid deadline
  int64 expired_time = 3;
  // refused_reason defines the reason of refusing
  string refused_reason = 4;
  // signature define the signature of sp sign the msg
  bytes signature = 5;
}
```