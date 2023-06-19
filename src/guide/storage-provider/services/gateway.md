---
title: Gateway
order: 6
---

# Gateway

The Gateway service is the unified entrance of SP, which provides a unified application programming interface (HTTP Restful API).
If you are interested in the specific programming interface, we invite you to the [following page]().

## Overview

<div align=center><img src="../../..//asset/05-SP-Gateway.jpg" width="700px"></div>
<div align="center"><i>Gateway Architecture</i></div>

### Authorization Checker

* Verifies the signature of request to ensure that the request has not been tampered with.
* Checks the authorization to ensure the corresponding account has permissions on resources.
* Checks the object state and payment account state to ensure the object is sealed and the payment account is active.

### Request Router

According to the type of specific request, it is forwarded to the corresponding backend microservice.

### Flow Controller

In the future, according to the flow control configuration information, flow control will be performed to provide 
higher-quality services and avoid service overload.

### Load Balancer

In the future, when routing back-end microservices, load balancing will be done according to policies such as 
service quality.

### Micro Service Clients

Various microservice clients inside SP, including Uploader, Downloader, etc.

### Universal Endpoint

We implement the Universal Endpoint according to [Greenfield Whitepaper's this chapter](https://github.com/bnb-chain/greenfield-whitepaper/blob/main/part3.md#231-universal-endpoint).

All objects can be identified and accessed via a universal path:

gnfd://<bucket_name><object_name>?[parameter]*

where:

* "gnfd://" is the fixed leading identifier, which is mandatory

* bucket_name is the bucket name of the object, which is mandatory

* object_name is the name of the object, which is mandatory

* parameter is a list of key-value pair for the additional information for the URI, which is optional

Each SP will register multiple endpoints to access their services, e.g. "SP1" may ask their users to download objects via https://greenfield.sp1.com/download.
And the full download RESTful API would be like: https://greenfield.sp1.com/download/mybucket/myobject.jpg.

Universal Endpoint supports using any valid endpoint for any SP, and automatically redirects to the correct endpoint containing
the object for download.

For instance, when users access a testnet endpoint greenfield.sp1.com of SP1, the request url will be:
https://greenfield.sp1.com/download/mybucket/myobject.jpg.
Universal Endpoint will find the correct endpoint for myobject.jpg, here SP3, and redirect the user to:
https://greenfield.sp3.com/download/mybucket/myobject.jpg and download the file.

<div align=center><img src="../../..//asset/501-SP-Gateway-Universal-Endpoint.png"></div>
<div align="center"><i>Universal Endpoint Logic Flow</i></div>

#### Download File

If you want to download a file using Universal Endpoint, the url is like: https://greenfield.sp1.com/download/mybucket/myobject.jpg.
This is enforced by adding to the header:
```md
    Content-Disposition=attachment
```

#### View File

If you want to view a file using Universal Endpoint without download, the url is like: https://greenfield.sp1.com/view/mybucket/myobject.jpg.
This is enforced by adding to the header:
```md
    Content-Disposition=inline
```

#### Public File Access

Public files can be downloaded/viewed with the following points to notice:
1. Downloader/viewer's quota will not be deducted, but the object owner's quota will be deducted per download/view.
2. If a file is not specified public or private, the status (public/private) of the bucket containing the file determines if the file can be downloaded/viewd as public file.
3. If a file is not sealed, it cannot be downloaded/viewed.

#### Private File Access

In design and will be provided in the new few releases. Currently, if you try to download/view a private file, an error will be thrown to let you know the object key is illegal for use.
