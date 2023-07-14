---
title: SPDB
order: 3
---

# SPDB

SP(Storage Provider Database) store needs to implement SPDB interface. SQL database is used by default.
The following mainly introduces the data schemas corresponding to several core interfaces.

```go
// SPDB contains all the methods required by sql database
type SPDB interface {
    Job
    Object
    ObjectIntegrity
    Traffic
    SPInfo
    StorageParam
}
```

## JobContext

JobContext records the context of uploading a payload data, it contains two tables: JobTable and ObjectTable.

`Job` interface as follows:

```go
// Job interface which contains job related to object id interface
type Job interface {
    // CreateUploadJob create upload job and return job context
    CreateUploadJob(objectInfo *storagetypes.ObjectInfo) (*servicetypes.JobContext, error)
    // UpdateJobState update the state of a job by object id
    UpdateJobState(objectID uint64, state servicetypes.JobState) error
    // GetJobByID get job context by job id and return job context
    GetJobByID(jobID uint64) (*servicetypes.JobContext, error)
    // GetJobByObjectID get job context by object id
    GetJobByObjectID(objectID uint64) (*servicetypes.JobContext, error)
}
```

### Job Table

JobTable describes some important data about job type and job state. Every operation in SP is a job which drives by state machine.

Below is the schema of `Jobtable`:

```go
// JobTable table schema
type JobTable struct {
    // JobID defines the unique id of a job
    JobID        uint64 `gorm:"primary_key;autoIncrement"`
    // JobType defines the type of a job
    JobType      int32
    // JobState defines the state of a job
    JobState     int32
    // JobErrorCode defines the error code when a job abnormal termination
    JobErrorCode uint32
    // CreatedTime defines the job create time, used to jobs garbage collection
    CreatedTime  time.Time
    // ModifiedTime defines the job last modified time, used to judge timeout
    ModifiedTime time.Time
}
```

Below is the enum of `Jobtype and JobState`:

```protobuf
enum JobType {
  // default job type
  JOB_TYPE_UNSPECIFIED = 0;
  // upload object
  JOB_TYPE_UPLOAD_OBJECT = 1;
  // delete object
  JOB_TYPE_DELETE_OBJECT = 2;
}

enum JobState {
  // default job state
  JOB_STATE_INIT_UNSPECIFIED = 0;

  // uploading payload data to primary SP
  JOB_STATE_UPLOAD_OBJECT_DOING = 1;
  // upload payload data to primary SP has done
  JOB_STATE_UPLOAD_OBJECT_DONE = 2;
  // failed to upload primary SP
  JOB_STATE_UPLOAD_OBJECT_ERROR = 3;

  // alloc secondary SPs is doing
  JOB_STATE_ALLOC_SECONDARY_DOING = 4;
  // alloc secondary SPs has done
  JOB_STATE_ALLOC_SECONDARY_DONE = 5;
  // failed to alloc secondary SPs
  JOB_STATE_ALLOC_SECONDARY_ERROR = 6;

  // replicating payload data to secondary SPs
  JOB_STATE_REPLICATE_OBJECT_DOING = 7;
  // replicate payload data to secondary SPs has done
  JOB_STATE_REPLICATE_OBJECT_DONE = 8;
  // failed to replicate payload data to secondary SPs
  JOB_STATE_REPLICATE_OBJECT_ERROR = 9;

  // signing seal object transaction
  JOB_STATE_SIGN_OBJECT_DOING = 10;
  // sign seal object transaction has done
  JOB_STATE_SIGN_OBJECT_DONE = 11;
  // failed to sign seal object transaction
  JOB_STATE_SIGN_OBJECT_ERROR = 12;

  // seal object transaction is doing on chain
  JOB_STATE_SEAL_OBJECT_TX_DOING = 13;
  // seal object transaction has done
  JOB_STATE_SEAL_OBJECT_DONE = 14;
  // failed to run seal object transaction
  JOB_STATE_SEAL_OBJECT_ERROR = 15;
}
```

### Object Table

ObjectTable stores basic information about an upload object metadata.

`Object` interface as follows:

```go
// Object interface which contains get and set object info interface
type Object interface {
    // GetObjectInfo get object info by object id
    GetObjectInfo(objectID uint64) (*storagetypes.ObjectInfo, error)
    // SetObjectInfo set(maybe overwrite) object info by object id
    SetObjectInfo(objectID uint64, objectInfo *storagetypes.ObjectInfo) error
}
```

Below is the schema of `ObjectTable`:

```go
// ObjectTable table schema
type ObjectTable struct {
    // ObjectID defines the unique ID of an obejct
    ObjectID             uint64 `gorm:"primary_key"`
    // JobID defines the unique id of a job.
    JobID                uint64 `gorm:"index:job_to_object"`
    // Owner defines the owner of an object
    Owner                string
    // BucketName deinfes the bucket name to which an object belongs
    BucketName           string
    // ObjectName defines the object name
    ObjectName           string
    // PayloadSize defines the obejct size
    PayloadSize          uint64
    // IsPublic defines an object is public
    IsPublic             bool
    // ContentType defines an obejct content type
    ContentType          string
    // CreatedAtHeight defines an obejct created at which chain height 
    CreatedAtHeight      int64
    // ObjectStatus defines object status
    ObjectStatus         int32
    // RedundancyType defines the redundancy type of an object used
    RedundancyType       int32
    // SourceType defines the source type of an object
    SourceType           int32
    // SpIntegrityHash defines sp inetgirty hash
    SpIntegrityHash      string
    // SecondarySpAddresses defines secondary sp addresses
    SecondarySpAddresses string
}
```

Below is the enum of `RedundancyType, ObjectStatus and SourceType`:

```protobuf
enum RedundancyType {
  // default redundancy type is replica
  REDUNDANCY_REPLICA_TYPE = 0;
  // redundancy type is ec
  REDUNDANCY_EC_TYPE = 1;
  // redundancy type is inline type
  REDUNDANCY_INLINE_TYPE = 2;
}

enum ObjectStatus {
  // default object status is initialized
  OBJECT_STATUS_INIT = 0;
  // object status is in service
  OBJECT_STATUS_IN_SERVICE = 1;
}

enum SourceType {
  // default source type that object is origin
  SOURCE_TYPE_ORIGIN = 0;
  // object is from bsc cross chain
  SOURCE_TYPE_BSC_CROSS_CHAIN = 1;
}
```

## Integrity

For each object there are some pieces root hashes stored on greenfield chain to keep data integrity. And for the pieces of an object stored on a specific SP, the SP keeps these pieces' hashes, which are used for storage proof.

ObjectIntegrity interface as follows:

```go
// ObjectIntegrity abstract object integrity interface
type ObjectIntegrity interface {
    // GetObjectIntegrity get integrity meta info by object id
    GetObjectIntegrity(objectID uint64) (*IntegrityMeta, error)
    // SetObjectIntegrity set(maybe overwrite) integrity hash info to db
    SetObjectIntegrity(integrity *IntegrityMeta) error
}
```

### Integrity Table

Below is the schema of `IntegrityMetaTable`:

```go
// IntegrityMetaTable table schema
type IntegrityMetaTable struct {
    // ObjectID defines the unique ID of an obejct
    ObjectID      uint64 `gorm:"primary_key"`
    // PieceHashList defines the piece hash list of an obejct by using sha256
    PieceHashList string
    // IntegrityHash defines
    the integrity hash of an object
    IntegrityHash string
    // Signature defines the signature of an obejct's IntegrityHash by using Secondary SP's private key
    Signature     string
}
```

## SPInfo

Each SP should manage the information of all SP which join in Greenfield chain. Therefore, SPInfo interface provides seven methods to manage SP.

`SPInfo` interface as follows:

```go
// SPInfo interface
type SPInfo interface {
    // UpdateAllSp update all sp info, delete old sp info
    UpdateAllSp(spList []*sptypes.StorageProvider) error
    // FetchAllSp if status is nil return all sp info; otherwise return sp info by status
    FetchAllSp(status ...sptypes.Status) ([]*sptypes.StorageProvider, error)
    // FetchAllSpWithoutOwnSp if status is nil return all sp info without own sp;
    // otherwise return sp info by status without own sp
    FetchAllSpWithoutOwnSp(status ...sptypes.Status) ([]*sptypes.StorageProvider, error)
    // GetSpByAddress return sp info by address and addressType
    GetSpByAddress(address string, addressType SpAddressType) (*sptypes.StorageProvider, error)
    // GetSpByEndpoint return sp info by endpoint
    GetSpByEndpoint(endpoint string) (*sptypes.StorageProvider, error)

    // GetOwnSpInfo return own sp info
    GetOwnSpInfo() (*sptypes.StorageProvider, error)
    // SetOwnSpInfo set(maybe overwrite) own sp info
    SetOwnSpInfo(sp *sptypes.StorageProvider) error
}
```

The meta information schema about a SP as follows:

```go
// SpInfoTable table schema
type SpInfoTable struct {
    // OperatorAddress defines the account address of the storage provider's operator; It also is the unique index key of sp.
    OperatorAddress string `gorm:"primary_key"`
    // IsOwn is used to identify whether is current sp's info
    IsOwn           bool   `gorm:"primary_key"`
    // FundingAddress defines one of the storage provider's accounts which is used to deposit and reward.
    FundingAddress  string
    // SealAddress defines one of the storage provider's accounts which is used to SealObject
    SealAddress     string
    // ApprovalAddress defines one of the storage provider's accounts which is used to approve use's createBucket/createObject request
    ApprovalAddress string
    // TotalDeposit defines the number of tokens deposited by this storage provider for staking.
    TotalDeposit    string
    // Status defines the current service status of this storage provider
    Status          int32
    // Endpoint define the storage provider's network service address
    Endpoint        string
    // Moniker defines a human-readable name for the storage provider
    Moniker         string
    // Identity defines an optional identity signature (ex. UPort or Keybase).
    Identity        string
    // Website defines an optional website link.
    Website         string
    // SecurityContact defines an optional email for security contact.
    SecurityContact string
    // Details define other optional details.
    Details         string
}
```

```protobuf
// Status is the status of a storage provider.
enum Status {
  // SP is in service
  STATUS_IN_SERVICE = 0;
  // SP is in jailed
  STATUS_IN_JAILED = 1;
  // SP is graceful exiting
  STATUS_GRACEFUL_EXITING = 2;
  // SP is out of service
  STATUS_OUT_OF_SERVICE = 3;
}
```

## StorageParams

Each SP should store basic storage params about Greenfield chain.

StorageParams interface as follows:

```go
// StorageParam interface
type StorageParam interface {
    // GetStorageParams return storage params
    GetStorageParams() (*storagetypes.Params, error)
    // SetStorageParams set(maybe overwrite) storage params
    SetStorageParams(params *storagetypes.Params) error
}
```

Below is the schema of `StorageParamsTable`:

```go
type StorageParamsTable struct {
    // ID is the primary key of StorageParamsTable
    ID                      int64 `gorm:"primary_key;autoIncrement"`
    // MaxSegmentSize is the maximum size of a segment. default: 16M 
    MaxSegmentSize          uint64
    // RedundantDataChunkNum is the num of data chunks of EC redundancy algorithm
    RedundantDataChunkNum   uint32
    // RedundantParityChunkNum is the num of parity chunks of EC redundancy algorithm
    RedundantParityChunkNum uint32
    // MaxPayloadSize is the maximum size of the payload, default: 2G
    MaxPayloadSize          uint64
}
```

## Traffic

Traffic provides traffic control to ensure service security.

`Traffic` interface as follows:

```go
// Traffic define a series of traffic interfaces
type Traffic interface {
    // CheckQuotaAndAddReadRecord create bucket traffic firstly if bucket is not existed,
    // and check whether the added traffic record exceeds the quota, if it exceeds the quota,
    // it will return error, Otherwise, add a record and return nil.
    CheckQuotaAndAddReadRecord(record *ReadRecord, quota *BucketQuota) error
    // GetBucketTraffic return bucket traffic info,
    // notice maybe return (nil, nil) while there is no bucket traffic
    GetBucketTraffic(bucketID uint64, yearMonth string) (*BucketTraffic, error)
    // GetReadRecord return record list by time range
    GetReadRecord(timeRange *TrafficTimeRange) ([]*ReadRecord, error)
    // GetBucketReadRecord return bucket record list by time range
    GetBucketReadRecord(bucketID uint64, timeRange *TrafficTimeRange) ([]*ReadRecord, error)
    // GetObjectReadRecord return object record list by time range
    GetObjectReadRecord(objectID uint64, timeRange *TrafficTimeRange) ([]*ReadRecord, error)
    // GetUserReadRecord return user record list by time range
    GetUserReadRecord(userAddress string, timeRange *TrafficTimeRange) ([]*ReadRecord, error)
}
```

Below is the schema of `BucketTrafficTable` and `ReadRecordTable`:

```go
// BucketTrafficTable table schema
type BucketTrafficTable struct {
    // BucketID is used to identify a bucket which is globally unqiue
    BucketID uint64 `gorm:"primary_key"`
    // Month is used to record month
    Month    string `gorm:"primary_key"`

    // BucketName is the name of a bucket
    BucketName       string
    // ReadConsumedSize is read consumed size
    ReadConsumedSize uint64
    // ReadQuotaSize = the greenfield chain bucket quota + the sp default free quota
    ReadQuotaSize uint64
    // ModifiedTime is the modified time of a bucket
    ModifiedTime  time.Time
}

// ReadRecordTable table schema
type ReadRecordTable struct {
    // ReadRecordID is primary key
    ReadRecordID uint64 `gorm:"primary_key;autoIncrement"`

    // BucketID is used to identify a bucket which is globally unqiue
    BucketID        uint64 `gorm:"index:bucket_to_read_record"`
    // ObjectID is used to identify an object which is globally unqiue
    ObjectID        uint64 `gorm:"index:object_to_read_record"`
    // UserAddress records user address
    UserAddress     string `gorm:"index:user_to_read_record"`
    // ReadTimestampUs read time timestamp in microsecond
    ReadTimestampUs int64  `gorm:"index:time_to_read_record"`

    // BucketName records bucket name
    BucketName string
    // ObjectName records object name
    ObjectName string
    // ReadSize records read size
    ReadSize   uint64
}
```

## ServiceConfig

ServiceConfig interface provides two methods get and set sp config for easily starting sp.

The configs of sp are stored in JSON format. Version is used to identify different config.

`ServiceConfig` interface as follows:

```go
// ServiceConfig defines a series of reading and setting service config interfaces
type ServiceConfig interface {
    GetAllServiceConfigs() (string, string, error)
    SetAllServiceConfigs(version, config string) error
}
```
