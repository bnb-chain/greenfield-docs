---
title: Storage Object
order: 3
---

# Storage

## Abstract
The storage module is responsible for handling bucket, object related operations on Greenfield blockchain. Not all operations are listed
in this page, for those operations which involves interactions with the Storage Provider in order to
complete tasks such as obtaining authentication information and sending request data, for example, creating a bucket or object requires a storage
provider's approval signature, we recommend using the more powerful tool [greenfield commands](https://github.com/bnb-chain/greenfield-cmd) 
to complete such transactions and queries.

For testnet usage, please replace the flag of node address `--node https://greenfield-chain.bnbchain.org:443` to --node `https://gnfd-testnet-fullnode-tendermint-us.bnbchain.org:443`

## HeadBucket

```shell
gnfd query storage head-bucket [bucket-name] [flags]
```

Example:

```sh
gnfd query storage head-bucket bucketname --node https://greenfield-chain.bnbchain.org:443
```

## UpdateBucketInfo

```shell
gnfd tx storage update-bucket-info [bucket-name] [charged-read-quota] [flags]
```

Example:

```shell
gnfd tx storage update-bucket-info bucketname 1000000000 --from your_key --home ~/.gnfd --node https://greenfield-chain.bnbchain.org:443
```

## MirrorBucket

```shell
gnfd tx storage mirror-bucket [flags]
```

Example:

mirror a bucket by bucket name
```shell
gnfd tx storage mirror-bucket --bucket-name bucketname --dest-chain-id 56 --from your_key --home ~/.gnfd --node https://greenfield-chain.bnbchain.org:443
```
mirror a bucket by bucket id
```shell
gnfd tx storage mirror-bucket --bucket-id 1 --dest-chain-id 56 --from your_key --home ~/.gnfd --node https://greenfield-chain.bnbchain.org:443
```

## HeadObject

```shell
gnfd query storage head-object [bucket-name] [object-name] [flags]
```

Example:

```sh
gnfd query storage head-object bukcetname objectname --node https://greenfield-chain.bnbchain.org:443
```

## DeleteObject

```shell
gnfd tx storage delete-object [bucket-name] [object-name] [flags]
```

Example:

```shell
gnfd tx storage delete-object bucketname objectname --from your_key --home ~/.gnfd --node https://greenfield-chain.bnbchain.org:443
```

## CancelCreateObject

```shell
gnfd tx storage cancel-create-object [bucket-name] [object-name] [flags]
```

Example:

```shell
gnfd tx storage cancel-create-object bucketname objectname --from your_key --home ~/.gnfd --node https://greenfield-chain.bnbchain.org:443
```

## UpdateObjectInfo

Currently only support update object's visibility
```shell
gnfd tx storage update-object-info [bucket-name] [object-name] [flags]
```

Example:

```shell
gnfd tx storage update-object-info bucketname objectname --visibility VISIBILITY_TYPE_PRIVATE --from your_key --home ~/.gnfd --node https://greenfield-chain.bnbchain.org:443
```

## MirrorObject

```shell
gnfd tx storage mirror-object [flags]
```

Example:

mirror a object by bucket, object name
```shell
gnfd tx storage mirror-object --bucket-name bucketname --object-name objectname --dest-chain-id 56 --from your_key --home ~/.gnfd --node https://greenfield-chain.bnbchain.org:443
```
mirror a bucket by bucket id
```shell
gnfd tx storage mirror-object --object-id 1 --dest-chain-id 56 --from your_key --home ~/.gnfd --node https://greenfield-chain.bnbchain.org:443
```


## CreateGroup

```shell
gnfd tx storage create-group [group-name] [flags]
```
Example:
```shell
gnfd tx storage create-group groupname --extra groupInfo --from your_key --home ~/.gnfd --node https://greenfield-chain.bnbchain.org:443
```

## DeleteGroup

```shell
gnfd tx storage delete-group [group-name] [flags]
```
Example:
```shell
gnfd tx storage delete-group groupname --from your_key --home ~/.gnfd --node https://greenfield-chain.bnbchain.org:443
```

## UpdateGroupMember

```shell
gnfd tx storage update-group-member [group-name] [member-to-add] [member-expiration-to-add] [member-to-delete]
```
Example:
Add a group member
```shell
gnfd tx storage update-group-member groupname  0x... 1697017398 "" --from your_key --home ~/.gnfd --node https://greenfield-chain.bnbchain.org:443
```
Delete a group member
```shell
gnfd tx storage update-group-member groupname  ""  "" 0x... --from your_key --home ~/.gnfd --node https://greenfield-chain.bnbchain.org:443
```

## UpdateGroupExtra

```shell
gnfd tx storage update-group-extra [group-name] [extra]
```

Example:
```shell
gnfd tx storage update-group-extra groupname extraInfo --from your_key --home ~/.gnfd --node https://greenfield-chain.bnbchain.org:443
```

## RenewGroupMember

```shell
gnfd tx storage renew-group-member [group-name] [member] [member-expiration]
```
Example:
```shell
gnfd tx storage renew-group-member groupname 0x... 123456678 --from your_key --home ~/.gnfd --node https://greenfield-chain.bnbchain.org:443
```


## LeaveGroup

```shell
gnfd tx storage leave-group [group-owner] [group-name]
```
Example:
```shell
gnfd tx storage leave-group 0x... groupname --from your_key --home ~/.gnfd --node https://greenfield-chain.bnbchain.org:443
```

## MirrorGroup

```shell
gnfd tx storage mirror-group [flags]
```

Example:

mirror a group by group name
```shell
gnfd tx storage mirror-group --group-name groupname --dest-chain-id 56 --from your_key --home ~/.gnfd --node https://greenfield-chain.bnbchain.org:443
```
mirror a group by group id
```shell
gnfd tx storage mirror-group --group-id 1 --dest-chain-id 56 --from your_key --home ~/.gnfd --node https://greenfield-chain.bnbchain.org:443
```