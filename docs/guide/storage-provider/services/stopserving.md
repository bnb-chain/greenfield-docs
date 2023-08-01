---
title: Stop Serving
order: 15
---

Stop Serving is the background service running in primary SP, which is used to actively
delete buckets stored by it.

**It only runs in testnet environment for remove historical data, and it will NOT run in mainnet.** 

![Stop-Serving-Workflow](../../../../static/asset/502-Stop-Serving-Workflow.png)

<div style={{textAlign:'center'}}><i>Stop Serving Main Workflows</i></div>

Stop Serving is running in background periodically. The main workflows are as follows:

* When the SP starts up, it loads the "BucketKeepAliveDays" config to indicate how long a bucket will remain alive (7 days on testnet);

* Then it calls the metadata service to retrieve buckets created earlier than the specified number of days; 

* Then it sends discontinue bucket transactions to the Greenfield chain, and the blockchain will emit discontinue bucket events;

* After a set amount of time (7 days on testnet), the discontinued buckets are deleted on the chain, and delete object and delete bucket events are emitted;

* Finally, the GC service recycles the storage space of the deleted objects and buckets. 

This service is still under development and will be online soon.
