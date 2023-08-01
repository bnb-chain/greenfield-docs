---
title: Simple Storage Service
order: 5
---

# Simple Storage Service

Greenfield Simple Storage Service offers developers comparable API primitives and storage models to the AWS S3 cloud storage which is most utilized in Web2. 

## Features

### Storage Management

Greenfield has storage management features thart you can use to manage your resources, such as buckets, objects and groups. All the metadata of the resources are on-chain and can be only changed through transactions onto the greenfield blockchain. 

* Basic Operations - Create, Delete, Update, Delete, Get and List for buckets, objects and groups
* Miragte Bucket(**WIP**) - Users can easily migrate bucket to other Primary Storage Provider (PrimarySP) through a single transaction.

for more informations, see [storage module design](../greenfield-blockchain/modules/storage-module.md).
  
### Permission Management

Greenfield Providers features for managing permissions to your buckets and objects. By default, Greenfield buckets and the objects in them are private. You only has the permissions to the resources you create. To grant granular resource permissions that support your specific use case of your resources, you can use the following features:

* Ownership - The bucket owner take ownership of every objects in his bucket.
* Public Access - If the bucket or object set to public, every one can access it but not modify it.
* Resource-Based Policy - The owner can configure resource-based permissions for his buckets and the objects in them.

for more informations, see [permission module design](../greenfield-blockchain/modules/permission.md).

## Keys

### Bucket
In Greenfield, a bucket is a virtual container for storing objects. Users must assign each bucket a unique name that complies with DNS naming conventions, consisting of one or more labels separated by periods. It's crucial that the bucket name be globally unique within the Greenfield namespace to prevent two buckets from sharing the same name. 

Once a bucket has been created, objects can be uploaded to it using various methods such as the `gnfd` command line or the `SDKs`. 
Objects within a bucket can be organized and managed like folders (also called "prefixes"). 
Additionally, it's possible to assign a unique key (a string value) to each object within the bucket to distinguish it from other objects.

Every user account can create several buckets. The account will become the "owner" of the bucket.

Each bucket should be associated with its own Primary SP, and the payment accounts for Read and Store functions. The owner's
address will be the default payment account.

### Object

An object is a fundamental unit of storage in Greenfield, which represents a file consisting of data and its associated 
metadata. Each object is uniquely identified within a bucket by its object name (a string value). 
While objects are commonly used to store files, they can contain any type of data, including text, 
images, videos, and program binaries.

Users can upload objects to Greenfield using various methods, including the `gnfd` command line and `SDKs`. They can also download, 
copy, or move objects in a similar way.

Objects in Greenfield have several important characteristics, including:
- name and ID
- owner
- bucket that hosts it
- size and timestamps
- content type
- checkSums for the storage pieces
- storage status
- associated SP information

Object metadata is stored with the bucket name as the prefix of the key. It is possible to iterate through all
objects under the same bucket, but it may be a heavy-lifting job for a large bucket with lots of objects.

### Group

A Group is a collection of accounts with the same permissions. The group name is not allowed to be duplicated under the
same user. However, a group can not create or own any resource. A group can not be a member of another group either.

A resource can only have a limited number of groups associated with it for permissions. This ensures that the on-chain
permission check can be finished within a constant time.

### Resource-Based Policy

The user can use Resource-Based Policy to grant permissions to other accounts. Any resources, such as buckets, objects and groups, can associate several policy. Only the resource owner can put a policy which associate to a resource he owned. 

- A policy associate to a bucket can allow grantee to operate the bucket or the specific objects.
- A policy associate to a object/group can only allow to operator the object/group.

In the reousrce-based policy, the user can use wildcard characters Greenfield Resource Names(GRNS) and other values to grant permission to a subset of objects. For Example, the user can only allow the grantee to access to the objects that begin with a common prefix or end with a given extension, such as `.html`.
