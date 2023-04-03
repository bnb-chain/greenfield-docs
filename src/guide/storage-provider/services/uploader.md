---
title: Uploader
order: 7
---

# Uploader

Uploader is responsible for receiving and cutting the object payload data into segments, then storing it in the piece 
store, and notifying the downstream service to asynchronously replicate the object payload data that processed by EC 
to the secondary SP.

## Key Workflow

### Receive and cutting object payload data

Uploader receives the PutObjectRequest from Gateway that has been authenticated. The request is a streaming interface 
that saves system memory resources to the greatest extent. Implemented PayloadStream for customized dynamic cutting 
segments, it will return the segment's data and segment metadata for storing the piece store.

```go
// PayloadStream implement a one-way data flow, writes bytes of any size
// read the fixed data size with payload metadata
type PayloadStream struct {
	objectID       uint64
	replicaIdx     uint32
	segmentSize    uint64
	redundancyType storagetypes.RedundancyType
	entryCh        chan *SegmentEntry
	init           atomic.Value
	close          atomic.Value

	pRead  *io.PipeReader
	pWrite *io.PipeWriter
}
```

### Asynchronously store to piece store 

The background will start multiple goroutines to process the segment entry processed by PayloadStream and store it in 
the piece store.

```go
type SegmentEntry struct {
	objectID       uint64
	replicaIdx     uint32
	segmentIdx     uint32
	redundancyType storagetypes.RedundancyType
	segmentData    []byte
	err            error
}
```

## Message

```protobuf
// PutObjectRequest is request type for the UploadObject RPC method.
message PutObjectRequest {
  // object_info defines the information of the object.
  bnbchain.greenfield.storage.ObjectInfo object_info = 1;
  // payload defines the data of the object.
  bytes payload = 2;
}
```