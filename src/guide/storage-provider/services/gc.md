---
title: Garbage Collection
order: 11
---

Garbage Collection(GC) is the background service running in SP, which is used to recycle
the storage space of those deleted objects on the Greenfield chain.

GC service is running in background periodically. It comprises below steps:

* When SP starting up, load the metadata "BlockNumberHandledByGC" stored in the local
metadata database, which is used to record the block height handled by GC service; 

* Check if the previous background GC tasks have finished; if not, continue the tasks
based on the contexts stored in the local metadata database; 

* Get the deleted object list from the metadata service based on block height, construct
GC tasks and dispatch them to TaskNode service; 

* Each TaskNode runs GC tasks to remove all the pieces of the deleted objects from piece
store, updates local SP's metadata as well. 

It is still under development now, will be online soon.
