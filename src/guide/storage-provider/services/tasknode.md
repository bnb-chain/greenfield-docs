---
title: TaskNode
order: 12
---

# TaskNode

TaskNode is the execution unit of SP background tasks. It is a resource consuming service, for which we introduce a 
resource manager, which will stop pulling(supported in the future) or accept tasks when the resource limit is reached.

## Resource manager

ResourceManager is the subsystem of SP, it tracks and accounts for resource usage in the stack, from the internals to 
the application, and provides a mechanism to limit resource usage according to a user configurable policy. The basic 
resources accounted by the ResourceManager include memory, connections, and file  descriptors. These account for both 
space and time used by the stack, as each resource has a direct effect on the system availability and performance. The 
modus operandi of the resource manager is to restrict resource usage at the time of reservation. When a component of 
the stack needs to use a resource, it reserves it in the appropriate scope. The resource manager gates the reservation 
against the scope applicable limits; if the limit is exceeded, then an error is up the component to act accordingly. 
At the lower levels of the stack, this will normally signal a failure of some sorts, like failing to opening a connection, 
which will propagate to the programmer. Some components may be able to handle resource reservation failure more gracefully.

### Example

```go
	scope, err := serviceScope.BeginSpan()
	if err != nil { ... }
	defer scope.Done()

	if err := scope.ReserveMemory(...); err != nil { ... }
	// ... use memory
```

*refer to* [go-libp2p](https://github.com/libp2p/go-libp2p/blob/master/core/network/)

## Task

### Replicate task

#### Key Workflow

##### Ask secondary SP Approval

TaskNode receives the replicate task, it will call the P2P [GetApprovalRequest](./p2p.md) to send requests to all SPs,
and do basic preparations, includes begin resource span, get SP storage params(segment size, replication number etc.),
and generates replicate context for replication.

```go
// ReplicateContext defines the context of replicating object
type ReplicateContext struct {
    object           *storagetypes.ObjectInfo
    scope            rcmgr.ResourceScopeSpan
    storageParams    *storagetypes.Params
    sp               map[uint32]*ApprovalSP
    backupSP         []*ApprovalSP
    replicating      map[uint32]struct{} // the replicate idx being replicated
    replicateRetry   map[uint32]struct{} // the replicate idx has been failed, and waiting to try again
    replicateCh      chan *ReplicateMessage
    mux              sync.RWMutex
    loadSegmentRetry int
    logger           context.Context
    innerErr         error
}
```

##### Load and encode object segments data

Start the background goroutine to serially load object's segments from the piece store and encodes segment by EC, 
transfers the result of EC to foreground goroutine by ReplicateMessage.

```go
// ReplicateMessage defines the replication info between load/encode and replicate goroutines
type ReplicateMessage struct {
	segment    uint32    // the index of segment 
	replicates []uint32  // the index set of replication
	data       [][]byte  // the replication piece data
}
```

##### Replicate piece data to secondary SP

Foreground goroutine receives the replicate message and replicates the piece data to the different secondary SPs.
If some of SPs fails, it will load and encode segments again from the piece store, it will consume less memory. 

### GC task

We'll introduce a gc system for SP to delete the payload data and metadata of SP.

