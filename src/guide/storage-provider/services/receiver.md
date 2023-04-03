---
title: Receiver
order: 8
---

# Receiver

Receiver is responsible for accepting the piece data that replicated from the primary SP.

## Key Workflow

### Verify the replicate approval

Receiver receives the ReceivePieceRequest from Gateway that has been basic authenticated, and Gateway will also verify 
the replicate approval whether t signed by self.

### Store the replicated piece data

Receiver receives data stream and store in piece store.

```protobuf
// ReceivePieceRequest is request type for the ReceivePiece RPC method.
message ReceivePieceRequest {
  // object_info defines the information of the object.
  bnbchain.greenfield.storage.ObjectInfo object_info = 1;
  // segment_idx defines the index of segment for piece data.
  uint32 segment_idx = 2;
  // replica_idx defines the index of replicate for piece data.
  uint32 replicate_idx = 3;
  // piece_size defines the size of piece data.
  bytes checksum = 4;
  // piece_data defines the data that replicate piece to storage provider.
  bytes piece_data = 5;
}
```

### Generate integrity hash and signature

After receiving all the replication piece data, calculate the integrity hash and send it to [sign](./signer).
Return the integrity hash and signature to the primary SP for sealing object.
