---
title: SP Config
---

## SP Config

This section gives you a complete config of SP. `./gnfd-sp config.dump` will generate a template config.toml.

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
# FundingPrivateKey doesn't need to write
FundingPrivateKey = ''
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
# optional
EnableSkipFailedToMigrateObject = false

# now we don't use p2p, this item doesn't need to fill
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
DisableProbe = false
# required
MetricsHTTPAddress = ''
# required
PProfHTTPAddress = ''
# required
ProbeHTTPAddress = ''

# optional
[Rcmgr]
# optional
DisableRcmgr = false

# optional
[Rcmgr.GfSpLimiter]
# optional
[Rcmgr.GfSpLimiter.System]
# optional
Memory = 0
# optional
Tasks = 0
# optional
TasksHighPriority = 0
# optional
TasksMediumPriority = 0
# optional
TasksLowPriority = 0
# optional
Fd = 0
# optional
Conns = 0
# optional
ConnsInbound = 0
# optional
ConnsOutbound = 0

# optional
[Rcmgr.GfSpLimiter.Transient]
# optional
Memory = 0
# optional
Tasks = 0
# optional
TasksHighPriority = 0
# optional
TasksMediumPriority = 0
# optional
TasksLowPriority = 0
# optional
Fd = 0
# optional
Conns = 0
# optional
ConnsInbound = 0
# optional
ConnsOutbound = 0

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
# required
Workers = 0
# optional
BsDBWriteAddress = ''

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
SubscribeSPExitEventIntervalMillisecond = 0
# optional
SubscribeSwapOutExitEventIntervalMillisecond = 0
# optional
SubscribeBucketMigrateEventIntervalMillisecond = 0
# optional
GVGPreferSPList = []
```

### App info

These fields are optional.

```shell
# optional
Env = ''
# optional
AppID = ''
# optional
Server = []
# optional
GRPCAddress = ''
```

### Database

To config `[SpDB]`, `[BsDB]`, you have to input the `user name`, `db password`,`db address`  and  `db name` in these fields.

### PieceStore

To config `[PieceStore]` and `[PieceStore.Store]`, you can read the details in this [doc](./piece-store.md)

### Chain info

* `ChainID` of mainnet is `greenfield_1017-1` and testnet is `greenfield_5600-1`.
* `ChainAddress` is RPC endpoint of mainnet, you can find RPC info [here](../../../api/endpoints.md)

### SpAccount

These private keys are generated during wallet setup.

### Endpoint

`[Endpoint]` specified the URL of different services.

For single-machine host (not recommended):

```toml
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

```toml
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

### P2P

:::note

We don't use P2P service in mainnet and testnet, so users can ignore P2P items.

:::

* `P2PPrivateKey` and `node_id` is generated by `./gnfd-sp p2p.create.key -n 1`
* `P2PAntAddress` is your load balance address. If you don't have a load balance address, you should have a public IP and use it in `P2PAddress`. It consists of `ip:port`.
* `P2PBootstrap` can be left empty.

### Gateway

```toml
[Gateway]
DomainName = 'region.sp-name.com'
```

The correct configuration should not include the protocol prefix `https://`.

### BlockSyncer

Here is block_syncer config. The configuration of BsDBWriteAddress can be the same as the BSDB.Address module here. To enhance performance, you can set up the write database address here and the corresponding read database address in BSDB.

```toml
Modules = ['epoch','bucket','object','payment','group','permission','storage_provider','prefix_tree', 'virtual_group','sp_exit_events','object_id_map']
Workers = 50
BsDBWriteAddress = 'localhost:3306'
```

### FundingPrivateKey

There is no need to write `FundingPrivateKey` in config.toml. It should be kept in cold wallet for safety.

### Rcmgr

ResourceManager manages resources within SP system, tracking and accounting for usage across the stack, from internal components to applications. It also allows for resource usage to be limited based on user-configurable policies. Config schema shows as below:

```proto
message GfSpLimit {
  int64 memory = 1;
  int32 tasks = 2;
  int32 tasks_high_priority = 3;
  int32 tasks_medium_priority = 4;
  int32 tasks_low_priority = 5;
  int32 fd = 6;
  int32 conns = 7;
  int32 conns_inbound = 8;
  int32 conns_outbound = 9;
}

message GfSpLimiter {
  GfSpLimit system = 1;
  GfSpLimit transient = 2;
  map<string, GfSpLimit> service_limit = 3;
}
```

### SP Probe

It contains two probes: liveness and readiness probe. If users want to check SP whether is healthy and ready. Users can refer [Kubernetes docs](https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-probes/) to learn related concepts. About detailed SP probe info, users can refer [SP probe](https://github.com/bnb-chain/greenfield-storage-provider/blob/master/core/prober/prober.go).

## SP Mainnet Recommended Config

This section shows the config of official in Greenfield, so users can add use similar config:

```toml
# optional
Env = "mainnet"
# optional
Server = []
# optional
GRPCAddress = '0.0.0.0:9333'

[SpDB]
# required
User = ''
# required
Passwd = ''
# required
Address = '{your_db_address}'
# required
Database = 'storage_provider_db'

[BsDB]
# required
User = ''
# required
Passwd = ''
# required
Address = '{your_db_address}'
# required
Database = 'block_syncer'

[PieceStore]
# required
Shards = 0

[PieceStore.Store]
# required
Storage = 's3'
# optional
BucketURL = '{your_bucker_url}'
# optional
MaxRetries = 5
# optional
MinRetryDelay = 0
# optional
TLSInsecureSkipVerify = false
# required
IAMType = 'SA'

[Chain]
# required
ChainID = 'greenfield_1017-1'
# required
ChainAddress = ['{your_fullnode_address}']

[SpAccount]
# required
SpOperatorAddress = '{your_operator_address}'
# required
# OperatorPrivateKey = ''
# required
# SealPrivateKey = ''
# required
# ApprovalPrivateKey = ''
# required
# GcPrivateKey = ''

[Endpoint]
# required
ApproverEndpoint = 'approver:9333'
# required
ManagerEndpoint = 'manager:9333'
# required
DownloaderEndpoint = 'downloader:9333'
# required
ReceiverEndpoint = 'receiver:9333'
# required
MetadataEndpoint = 'metadata:9333'
# required
UploaderEndpoint = 'uploader:9333'
# required
P2PEndpoint = 'p2p-service:9333'
# required
SignerEndpoint = 'signer:9333'
# required
AuthenticatorEndpoint = 'localhost:9333'

[Gateway]
# required
DomainName = '{your_domain_name}'
# required
HTTPAddress = '0.0.0.0:9033'

[P2P]
# optional
#P2PPrivateKey = ''
# optional
P2PAddress = '0.0.0.0:9933'
# optional
P2PAntAddress = ''
# optional
P2PBootstrap = []
# optional
# P2PPingPeriod = 0

[Parallel]
# optional
DiscontinueBucketEnabled = false
# optional
DiscontinueBucketKeepAliveDays = 365
# optional
GlobalMaxUploadingParallel = 3072
# optional
UploadObjectParallelPerNode = 100
# optional
ReceivePieceParallelPerNode = 1024
# optional
DownloadObjectParallelPerNode = 200
# optional
ChallengePieceParallelPerNode = 200
# optional
AskReplicateApprovalParallelPerNode = 10240
# optional
GlobalCreateBucketApprovalParallel = 1024
# optional
GlobalCreateObjectApprovalParallel = 1024
# optional
GlobalUploadObjectParallel = 1024
# optional
GlobalReplicatePieceParallel = 1024
# optional
GlobalSealObjectParallel = 1024
# optional
GlobalReceiveObjectParallel = 10240
# optional
GlobalBackupTaskParallel = 1024
# optional
GlobalRecoveryPieceParallel = 1024
# optional
GlobalGcObjectSafeBlockDistance = 64
# optional
GlobalMigrateGVGParallel = 10

[Monitor]
# required
DisableMetrics = false
# required
DisablePProf = false
# required
DisableProbe = false
# required
MetricsHTTPAddress = '0.0.0.0:24367'
# required
PProfHTTPAddress = '0.0.0.0:24368'
# required
ProbeHTTPAddress = '0.0.0.0:24369'

# optional
[Rcmgr]
# optional
DisableRcmgr = false
# optional
[Rcmgr.GfSpLimiter]
# optional
[Rcmgr.GfSpLimiter.System]
# optional
Memory = 4294967296
# optional
Tasks = 10240
# optional
TasksHighPriority = 128
# optional
TasksMediumPriority = 1024
# optional
TasksLowPriority = 16
# optional
Fd = 2147483647
# optional
Conns = 2147483647
# optional
ConnsInbound = 2147483647
# optional
ConnsOutbound = 2147483647

[BlockSyncer]
# required
Modules = ['epoch','bucket','object','payment','group','permission','storage_provider','prefix_tree','virtual_group','sp_exit_events','object_id_map']
# required
Workers = 50
# optional
BsDBWriteAddress = "{your_db_address}"

[APIRateLimiter]
# optional
PathPattern = [{Key = "/auth/request_nonce", RateLimit = 100, RatePeriod = 'S'}, {Key = "/auth/update_key", RateLimit = 100, RatePeriod = 'S'},
{Key = "/permission/.+/[^/]*/.+", RateLimit = 100, RatePeriod = 'S'},{Key = "/greenfield/admin/v1/get-approval", RateLimit = 100, RatePeriod = 'S'},
{Key = "/greenfield/admin/v1/challenge", RateLimit = 20, RatePeriod = 'S'},
{Key = "/greenfield/admin/v2/challenge", RateLimit = 20, RatePeriod = 'S'},
{Key = "/greenfield/receiver/v1/replicate-piece", RateLimit = 100, RatePeriod = 'S'},{Key = "/greenfield/recovery/v1/get-piece", RateLimit = 50, RatePeriod = 'S'},
{Key = "/greenfield/migrate/v1/notify-migrate-swap-out-task", RateLimit = 10, RatePeriod = 'S'},{Key = "/greenfield/migrate/v1/migrate-piece", RateLimit = 10, RatePeriod = 'S'},
{Key = "/greenfield/migrate/v1/migration-bucket-approval", RateLimit = 10, RatePeriod = 'S'},{Key = "/greenfield/migrate/v1/get-swap-out-approval", RateLimit = 10, RatePeriod = 'S'},
{Key = "/download/[^/]*/.+", RateLimit = 150, RatePeriod = 'S'},{Key = "/download", RateLimit = 150, RatePeriod = 'S'},
{Key = "/view/[^/]*/.+", RateLimit = 150, RatePeriod = 'S'},{Key = "/view", RateLimit = 150, RatePeriod = 'S'},
{Key = "/status", RateLimit = 200, RatePeriod = 'S'},{Key = "/.+/.+[?]offset.*", RateLimit = 20, RatePeriod = 'S'},
{Key = "/.+/.+[?]upload-context.*", RateLimit = 20, RatePeriod = 'S'},{Key = "/.+/.+[?]upload-progress.*", RateLimit = 20, RatePeriod = 'S'},
{Key = "/.+/.+[?]bucket-meta.*", RateLimit = 200, RatePeriod = 'S'},{Key = "/.+/.+[?]object-meta.*", RateLimit = 200, RatePeriod = 'S'},
{Key = "/.+/.+", RateLimit = 150, RatePeriod = 'S'},{Key = "/.+[?]read-quota.*", RateLimit = 100, RatePeriod = 'S'},{Key = "/.+[?]list-read-quota.*", RateLimit = 100, RatePeriod = 'S'},
{Key = "/.+/$", RateLimit = 200, RatePeriod = 'S'},{Key = "/[?].*group-query.*", RateLimit = 200, RatePeriod = 'S'},
{Key = "/[?].*objects-query.*", RateLimit = 200, RatePeriod = 'S'},{Key = "/[?].*buckets-query.*", RateLimit = 200, RatePeriod = 'S'},
{Key = "/[?].*verify-id.*", RateLimit = 200, RatePeriod = 'S'},{Key = "/[?].*user-groups.*", RateLimit = 200, RatePeriod = 'S'},
{Key = "/[?].*group-members.*", RateLimit = 200, RatePeriod = 'S'},{Key = "/[?].*owned-groups.*", RateLimit = 200, RatePeriod = 'S'},
{Key = "/$", RateLimit = 200, RatePeriod = 'S'},{Key = "/.+", RateLimit = 200, RatePeriod = 'S'}]
# optional
HostPattern = []

[Manager]
# optional
EnableLoadTask = true
# optional
GVGPreferSPList = [1,2,3,4,5,6,7]

[Executor]
# optional
ListenSealRetryTimeout = 30
```
