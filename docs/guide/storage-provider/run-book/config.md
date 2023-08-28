---
title: SP Config
order: 6
---

# SP Config

This section gives you a complete config of SP. `./gnfd-sp config.dump` will generate a template for you.

```toml
# optional
Env = ''
# optional
AppID = ''
# optional
Server = []
# optional
GRPCAddress = ''

[SpDB]
# required
User = ''
# required
Passwd = ''
# required
Address = ''
# required
Database = ''
# optional
ConnMaxLifetime = 0
# optional
ConnMaxIdleTime = 0
# optional
MaxIdleConns = 0
# optional
MaxOpenConns = 0

[BsDB]
# required
User = ''
# required
Passwd = ''
# required
Address = ''
# required
Database = ''
# optional
ConnMaxLifetime = 0
# optional
ConnMaxIdleTime = 0
# optional
MaxIdleConns = 0
# optional
MaxOpenConns = 0

[PieceStore]
# required
Shards = 0

[PieceStore.Store]
# required
Storage = ''
# optional
BucketURL = ''
# optional
MaxRetries = 0
# optional
MinRetryDelay = 0
# optional
TLSInsecureSkipVerify = false
# required
IAMType = ''

[Chain]
# required
ChainID = ''
# required
ChainAddress = []
# optional
SealGasLimit = 0
# optional
SealFeeAmount = 0
# optional
RejectSealGasLimit = 0
# optional
RejectSealFeeAmount = 0
# optional
DiscontinueBucketGasLimit = 0
# optional
DiscontinueBucketFeeAmount = 0
# optional
CreateGlobalVirtualGroupGasLimit = 0
# optional
CreateGlobalVirtualGroupFeeAmount = 0
# optional
CompleteMigrateBucketGasLimit = 0
# optional
CompleteMigrateBucketFeeAmount = 0

[SpAccount]
# required
SpOperatorAddress = ''
# required
OperatorPrivateKey = ''
# required
SealPrivateKey = ''
# required
ApprovalPrivateKey = ''
# required
GcPrivateKey = ''
# required
BlsPrivateKey = ''

[Endpoint]
# required
ApproverEndpoint = ''
# required
ManagerEndpoint = ''
# required
DownloaderEndpoint = ''
# required
ReceiverEndpoint = ''
# required
MetadataEndpoint = ''
# required
UploaderEndpoint = ''
# required
P2PEndpoint = ''
# required
SignerEndpoint = ''
# required
AuthenticatorEndpoint = ''

[Approval]
# optional
BucketApprovalTimeoutHeight = 0
# optional
ObjectApprovalTimeoutHeight = 0
# optional
ReplicatePieceTimeoutHeight = 0

[Bucket]
# optional
AccountBucketNumber = 0
# optional
FreeQuotaPerBucket = 0
# optional
MaxListReadQuotaNumber = 0
# optional
MaxPayloadSize = 0

[Gateway]
# required
DomainName = ''
# required
HTTPAddress = ''

[Executor]
# optional
MaxExecuteNumber = 0
# optional
AskTaskInterval = 0
# optional
AskReplicateApprovalTimeout = 0
# optional
AskReplicateApprovalExFactor = 0.0
# optional
ListenSealTimeoutHeight = 0
# optional
ListenSealRetryTimeout = 0
# optional
MaxListenSealRetry = 0

[P2P]
# optional
P2PPrivateKey = ''
# optional
P2PAddress = ''
# optional
P2PAntAddress = ''
# optional
P2PBootstrap = []
# optional
P2PPingPeriod = 0

[Parallel]
# optional
GlobalCreateBucketApprovalParallel = 0
# optional
GlobalCreateObjectApprovalParallel = 0
# optional
GlobalMaxUploadingParallel = 0
# optional
GlobalUploadObjectParallel = 0
# optional
GlobalReplicatePieceParallel = 0
# optional
GlobalSealObjectParallel = 0
# optional
GlobalReceiveObjectParallel = 0
# optional
GlobalGCObjectParallel = 0
# optional
GlobalGCZombieParallel = 0
# optional
GlobalGCMetaParallel = 0
# optional
GlobalRecoveryPieceParallel = 0
# optional
GlobalMigrateGVGParallel = 0
# optional
GlobalBackupTaskParallel = 0
# optional
GlobalDownloadObjectTaskCacheSize = 0
# optional
GlobalChallengePieceTaskCacheSize = 0
# optional
GlobalBatchGcObjectTimeInterval = 0
# optional
GlobalGcObjectBlockInterval = 0
# optional
GlobalGcObjectSafeBlockDistance = 0
# optional
GlobalSyncConsensusInfoInterval = 0
# optional
UploadObjectParallelPerNode = 0
# optional
ReceivePieceParallelPerNode = 0
# optional
DownloadObjectParallelPerNode = 0
# optional
ChallengePieceParallelPerNode = 0
# optional
AskReplicateApprovalParallelPerNode = 0
# optional
QuerySPParallelPerNode = 0
# required
DiscontinueBucketEnabled = false
# optional
DiscontinueBucketTimeInterval = 0
# required
DiscontinueBucketKeepAliveDays = 0
# optional
LoadReplicateTimeout = 0
# optional
LoadSealTimeout = 0

[Task]
# optional
UploadTaskSpeed = 0
# optional
DownloadTaskSpeed = 0
# optional
ReplicateTaskSpeed = 0
# optional
ReceiveTaskSpeed = 0
# optional
SealObjectTaskTimeout = 0
# optional
GcObjectTaskTimeout = 0
# optional
GcZombieTaskTimeout = 0
# optional
GcMetaTaskTimeout = 0
# optional
SealObjectTaskRetry = 0
# optional
ReplicateTaskRetry = 0
# optional
ReceiveConfirmTaskRetry = 0
# optional
GcObjectTaskRetry = 0
# optional
GcZombieTaskRetry = 0
# optional
GcMetaTaskRetry = 0

[Monitor]
# required
DisableMetrics = false
# required
DisablePProf = false
# required
MetricsHTTPAddress = ''
# required
PProfHTTPAddress = ''

[Rcmgr]
# optional
DisableRcmgr = false

[Log]
# optional
Level = ''
# optional
Path = ''

[Metadata]
# required
IsMasterDB = false
# optional
BsDBSwitchCheckIntervalSec = 0

[BlockSyncer]
# required
Modules = []
# optional
BsDBWriteAddress = ''
# required
Workers = 0

[APIRateLimiter]
# optional
PathPattern = []
# optional
HostPattern = []
# optional
APILimits = []

[APIRateLimiter.IPLimitCfg]
# optional
On = false
# optional
RateLimit = 0
# optional
RatePeriod = ''

[Manager]
# optional
EnableLoadTask = false
# optional
SubscribeSPExitEventIntervalSec = 0
# optional
SubscribeSwapOutExitEventIntervalSec = 0
# optional
SubscribeBucketMigrateEventIntervalSec = 0
# optional
GVGPreferSPList = []
```

## App info
These fields are optional and they can.
```
GRPCAddress = '0.0.0.0:9333'
```
## Database

To config `[SpDB]`, `[BsDB]`, you have to input the `user name`, `db password`,`db address`  and  `db name` in these fields.

## PieceStore

To config `[PieceStore]` and `[PieceStore.Store]`, you can read the details in this [doc](./piece-store.md)

## Chain info

* `ChainID` of testnet is `greenfield_5600-1`.
* `ChainAddress` is RPC endpoint of testnet, you can find RPC info [here](../../../api/endpoints.md)

## SpAccount
These private keys are generated during wallet setup.


## Endpoint
`[Endpoint]` specified the URL of different services.

For single-machine host (not recommended):
```
[Endpoint]
ApproverEndpoint = ''
ManagerEndpoint = ''
DownloaderEndpoint = ''
ReceiverEndpoint = ''
MetadataEndpoint = ''
UploaderEndpoint = ''
P2PEndpoint = ''
SignerEndpoint = ''
AuthenticatorEndpoint = ''
```

For K8S cluster:
```
[Endpoint]
ApproverEndpoint = 'manager:9333'
ManagerEndpoint = 'manager:9333'
DownloaderEndpoint = 'downloader:9333'
ReceiverEndpoint = 'receiver:9333'
MetadataEndpoint = 'metadata:9333'
UploaderEndpoint = 'uploader:9333'
P2PEndpoint = 'p2p:9333'
SignerEndpoint = 'signer:9333'
AuthenticatorEndpoint = 'localhost:9333'
```

## P2P
* `P2PPrivateKey` and `node_id` is generated by `./gnfd-sp p2p.create.key -n 1`

* `P2PAntAddress` is your load balance address. If you don't have a load balance address, you should have a public IP and use it in `P2PAddress`. It consists of `ip:port`.

* `P2PBootstrap` can be left empty.

## BlockSyncer
Here is block_syncer config.
The configuration of BsDBWriteAddress can be the same as the BSDB.Address module here. To enhance performance, you can set up the write database address here and the corresponding read database address in BSDB.
```
Modules = ['epoch','bucket','object','payment','group','permission','storage_provider','prefix_tree', 'virtual_group','sp_exit_events','object_id_map']
BsDBWriteAddress = 'localhost:3306'
Workers = 50
```
