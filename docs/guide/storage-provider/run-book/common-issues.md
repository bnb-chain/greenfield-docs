---
title: SP Common Issues
order: 5
---

This is a list of solutions to common SP deployment issues

## Create Storage Provider Proposal Failed

Examples: [here](https://greenfieldscan.com/proposal/4) and [here](https://greenfieldscan.com/proposal/31)

* Reason 1: The proposal initiator address does not have balance of **1k BNB** as deposit
* Reason 2: The proposal initiator address does not grant gov module to spend 1k BNB, as instructed [here](https://docs.bnbchain.org/greenfield-docs/docs/guide/storage-provider/run-book/run-testnet-SP-node#1-authorization)

## Address not found issue

### Description

After starting SP binary, see the following error:

```shell
rpc error: code = NotFound desc = rpc error: code = NotFound desc = account 0x12334567890 not found: key not found"
```

### Root Cause

It's not possiible to find information about a newly created address on chain.

### Solution

Before starting your SP, transfer BNB to all of your 5 addresses.

## Database Configuration Issue

### Description

After starting SP binary, see the following error:

```shell
Table "block_syncer.master_db" does not exist
Failed to get db config from config file
```

### Root Cause

Data source name(dsn) is not set in `config.toml`.

### Solution

```shell
[BlockSyncer]
Modules = ['epoch','bucket','object','payment','group','permission','storage_provider','prefix_tree']
Dsn = [BsDB_User]:[BsDB_Passwd]@tcp([BsDB_Address])/[BsDB_Database?parseTime=true&multiStatements=true&loc=Local
```

## Object Sealed State Issue

### Description

After uploading a file, you see an error message:

```shell
Message: object has not been sealed state
```

From SP log, you see the following:

```shell
{"t":"2023-07-10T11:34:50.856+0800","l":"error","caller":"gfspapp/sign_server.go:42","msg":"failed to seal object","error":"code_space:\"signer\" http_status_code:400 inner_code:120002 description:\"failed to broadcast seal object tx, error: failed to broadcast tx, resp code: 13\" "}
```

### Root Cause

`Seal address` does not have enough BNB to sign seal transactions

### Solution

Transfer BNB to `Seal address`.

## P2P Issue

### Description

After uploading a file, you see an error message:

```shell
{"t":"2023-07-05T10:22:37.365Z","I":"warn","caller":"p2pnode/node.go:223","msg":"failed to get sufficient approvals","task_key":"ReplicatePieceApproval-bucketimage-1-object:OAT.png-id:215241","expect":6,"accepted":0} {"t":"2023-07-05T10:22:37.365Z","I":"error","caller":"p2p/p2p_task.go:39","msg":"failed to get sufficient approvals as secondary sp","task_key":"ReplicatePieceApproval-bucketimage-1-object:OAT.png-id:215241","accept":0,"min":6,"max":6} {"t":"2023-07-05T10:22:37.365Z","I":"error","caller":"gfspapp/p2p_server.go:29","msg":"failed to get replicate piece approval from p2p","task_key":"ReplicatePieceApproval-bucketimage-1-object:OAT.png-id:215241","error":"code_space:rp2pr http_status_code:404 inner_code:70002 description:rinsufficient approvals as secondary spr "} {"t":"2023-07-05T10:22:37.369Z","I":"error","caller":"executor/execute_replicate.go:58","msg":"failed get approvals","task_key":"Replicating-bucketimage-1- object:OAT.png-id:215241","error":"code_space:rp2pr http_status_code:404 inner_code:70002 description:rinsufficient approvals as secondary spr "} {"t":"2023-07-05T10:22:37.376Z","I":"info","caller":"gfspapp/manage_server.go:158","msg":"begin to handle reported task","task_key":"Replicating-bucketimage-1-object:OAT.png-id:215241","task_info":"key[Replicating-bucketimage-1-object:OAT.png-id:215241], type[ReplicatePieceTask], priority[255], limit[memory:25165824 tasks:1 tasks_high_priorityl ], create[1688552547], update[1688552547], timeout[90], retry[1], max_retry[3], runner[127.0.0.1], error[code_space:rp2pr http_status_code:404 inner_code:70002 description:rinsufficient approvals as secondary spr ]"} {"t":"2023-07-05T10:22:37.376Z","I":"error","caller":"manager/manage_task.go:176","msg":"handler error replicate piece task","task_key":"Replicating-bucketimage-1-object:OAT.png-id:215241","task_info":"key[Replicating-bucketimage-1-object:OAT.png-id:215241], type[ReplicatePieceTask], priority[255], limit[memory:25165824 tasks:1 tasks_high_priorityl ], create[1688552547], update[1688552547], timeout[90], retry[1], max_retry[3], runner[127.0.0.1], error[code_space:\"p2py http_status_code:404 inner_code:70002 description:yinsufficient approvals as secondary spr ]","error":"code_space:rp2pr http_status_code:404 inner_code:70002 description:rinsufficient approvals as secondary spr "}

```

### Root Cause

SP is not connected with other SPs in P2P network

### Solution

check [P2P] setting in `config.toml`:

```shell
[P2P]
# p2p node msg Secp256k1 encryption key, it is different from other SP's addresses
P2PPrivateKey = '${p2p_private_key}'
P2PAddress = '0.0.0.0:9933'
P2PAntAddress = '${load_balance_doamin:port}'
P2PBootstrap = ["16Uiu2HAkvgrSt4oUNZ8rWe2qpimLDajyqD6Ca7LV7n9FkzzPNDQh@k8s-gftestne-p2pexter-bc25ac70bc-a31e9596d87054c3.elb.us-east-1.amazonaws.com:9933"]
P2PPingPeriod = 0
```

`P2PAntAddress` is your load balance address. If you don't have a load balance address, you should have a public IP and use it in `P2PAddress`.
`P2PBootstrap` consists of `[node_id1@ip1:port1, node_id2@ip1:port2]`, you can use `P2PAntAddress` or `P2PAddress` as `ip:port`. Public node is: `16Uiu2HAkvgrSt4oUNZ8rWe2qpimLDajyqD6Ca7LV7n9FkzzPNDQh@k8s-gftestne-p2pexter-bc25ac70bc-a31e9596d87054c3.elb.us-east-1.amazonaws.com:9933`

## Minio Authentication Issue

### Description

Cannot config Minio as storage

```shell
{"t":"2023-07-17T18:05:40.245+0800","l":"debug","caller":"storage/object_storage.go:15","msg":"created minio storage at endpoint http://172.17.0.2:9000/hashquark"}
Jul 17 18:05:41 10-7-46-85 gnfd-sp[18585]: {"t":"2023-07-17T18:05:40.245+0800","l":"info","caller":"storage/minio.go:37","msg":"new minio store succeeds","bucket":"hashquark"}
Jul 17 18:07:01 10-7-46-85 gnfd-sp[18585]: {"t":"2023-07-17T18:07:00.893+0800","l":"error","caller":"storage/s3.go:147","msg":"S3 failed to head bucket","error":"NoCredentialProviders: no valid providers in chain. Deprecated.\n\tFor verbose messaging see aws.Config.CredentialsChainVerboseErrors"}
Jul 17 18:07:01 10-7-46-85 gnfd-sp[18585]: {"t":"2023-07-17T18:07:00.893+0800","l":"error","caller":"piece/piece_store.go:88","msg":"failed to head bucket","error":"NoCredentialProviders: no valid providers in chain. Deprecated.\n\tFor verbose messaging see aws.Config.CredentialsChainVerboseErrors"}
Jul 17 18:07:01 10-7-46-85 gnfd-sp[18585]: {"t":"2023-07-17T18:07:00.893+0800","l":"error","caller":"piece/piece_store.go:77","msg":"failed to check bucket due to storage is not configured rightly ","error":"deny access bucket","object":"minio://hashquark/"}
Jul 17 18:07:01 10-7-46-85 gnfd-sp[18585]: {"t":"2023-07-17T18:07:00.893+0800","l":"error","caller":"piece/piece_store.go:21","msg":"failed to create storage","error":"deny access bucket"}
```

### Root Cause

This is a Minio authentication

### Solution

You can refer [here](./piece-store.md#minio).
