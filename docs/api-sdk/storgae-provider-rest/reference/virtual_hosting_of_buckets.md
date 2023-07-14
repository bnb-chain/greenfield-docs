---
title: Virtual Hosting of Buckets
order: 1
---
## Virtual-hosted-style requests

Greenfield SP supports both virtual-hosted-style and path-style URI. It's like AWS S3 so you can easily use Greenfield SP RESTful APIs.

In a virtual-hosted–style URI, the bucket name is part of the domain name in the URL. Greenfield SP virtual-hosted–style URLs use the following format:

```shell
https://BucketName.gnfd-testnet-sp-*.bnbchain.org/key-name
```

In this example, `EXAMPLE-BUCKET` is the bucket name and `sp.pdf` is the key name:

```shell
https://EXAMPLE-BUCKET.gnfd-testnet-sp-*.bnbchain.org/sp.pdf
```

## Path-style requests

In Greenfield SP, path-style URLs use the following format:

```shell
https://gnfd-testnet-sp-*.bnbchain.org/bucket-name/key-name
```

For example, if you create a bucket named `EXAMPLE-BUCKET`, and you want to access the `sp.pdf` object in that bucket, you can use the following path-style URL:

```shell
https://gnfd-testnet-sp-*.bnbchain.org/EXAMPLE-BUCKET/sp.pdf
```
