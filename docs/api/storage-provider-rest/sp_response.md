---
title: SP Response
---

# SP Response

If you invoke SP RESTful APIs successfully, you will get a XML represented response:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<GetBucketReadQuotaResult>
    <BucketName>myBucket</BucketName>
    <BucketID>6u754</BucketID>
    <ReadQuotaSize>20</ReadQuotaSize>
    <SPFreeReadQuotaSize>10</SPFreeReadQuotaSize>
    <ReadConsumedSize>5</ReadConsumedSize>
</GetBucketReadQuotaResult>
```

## SP Error Response

When an error occurs, the header information contains the following:

```shell
Content-Type: application/xml
```

An appropriate 3xx, 4xx, or 5xx HTTP status code

The body of the response also contains information about the error. The following sample error response shows the structure of response elements common to all REST error responses.

| ParameterName | Type      | Description                                                                                                                                                                                                                                                             | Ancestor |
| ------------- | --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| Error         | Container | Container for all error elements.                                                                                                                                                                                                                                       | None     |
| Code          | integer   | The error code is an integer that uniquely identifies an error condition. It is meant to be read and understood by programs that detect and handle errors by type.  code                                                                                                |          |
| Message       | string    | The error message contains a generic description of the error condition in English. It is intended for a human audience. Simple programs display the message directly to the end user if they encounter an error condition they don't know how or don't care to handle. | Error    |
| RequestId     | string    | ID of the request associated with the error.                                                                                                                                                                                                                            | Error    |

## Error Response Sample

```xml
<Error>
    <Code>10002</Code>
    <Message>account buckets exceed the limit</Message>
    <RequestId>14379357152578345503</RequestId>
</Error>
```
## List of Error Codes

This list shows the error codes which returns for http display, and inner code that are unique for each error with description.

| Http Status Code | Error Code | Description                                                                                                                                                                                   |
|------------------|------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 400              | 10001      | OoooH.... request lost                                                                                                                                                                        |
| 406              | 10002      | account buckets exceed the limit                                                                                                                                                              |
| 400              | 20001      | unsupported auth op type                                                                                                                                                                      |
| 400              | 20002      | mismatched primary sp                                                                                                                                                                         |
| 400              | 20003      | object has not been created state                                                                                                                                                             |
| 400              | 20004      | object has not been sealed state                                                                                                                                                              |
| 400              | 20005      | payment account is not active                                                                                                                                                                 |
| 400              | 20006      | the user address format is invalid                                                                                                                                                            |
| 404              | 20007      | no such bucket                                                                                                                                                                                |
| 404              | 20008      | no such object                                                                                                                                                                                |
| 400              | 20009      | repeated bucket                                                                                                                                                                               |
| 400              | 20010      | repeated object                                                                                                                                                                               |
| 400              | 20011      | no permission                                                                                                                                                                                 |
| 400              | 20012      | bad signature                                                                                                                                                                                 |
| 400              | 20013      | signed msg must be formatted as ${actionContent}_${expiredTimestamp}                                                                                                                          |
| 400              | 20014      | expiredTimestamp in signed msg must be a unix epoch time in milliseconds                                                                                                                      |
| 400              | 20015      | user public key is expired                                                                                                                                                                    |
| 400              | 30001      | OoooH.... request lost                                                                                                                                                                        |
| 400              | 30002      | object unsealed                                                                                                                                                                               |
| 400              | 30003      | get piece request exceed                                                                                                                                                                      |
| 406              | 30004      | bucket quota overflow                                                                                                                                                                         |
| 400              | 30005      | request params invalid                                                                                                                                                                        |
| 400              | 30006      | request params invalid, no such piece                                                                                                                                                         |
| 400              | 30007      | invalid key format                                                                                                                                                                            |
| 406              | 30008      | stream account has been frozen                                                                                                                                                                |
| 400              | 40001      | OoooH.... request lost                                                                                                                                                                        |
| 404              | 40002      | insufficient approvals from p2p                                                                                                                                                               |
| 500              | 40003      | seal object on chain failed                                                                                                                                                                   |
| 404              | 40004      | approvals exhausted                                                                                                                                                                           |
| 406              | 40005      | secondary integrity hash verification failed                                                                                                                                                  |
| 406              | 40006      | secondary sp mismatch                                                                                                                                                                         |
| 406              | 40007      | replicate idx out of bounds                                                                                                                                                                   |
| 500              | 45202      | recovery only support EC redundancy type                                                                                                                                                      |
| 500              | 45203      | failed to get enough piece data to recovery                                                                                                                                                   |
| 500              | 45204      | EC decode error                                                                                                                                                                               |
| 500              | 45206      | recovery checksum not correct                                                                                                                                                                 |
| 500              | 45207      | get secondary piece data length error                                                                                                                                                         |
| 406              | 45208      | primary sp endpoint not found when recovering                                                                                                                                                 |
| 406              | 45209      | recovery piece index invalid                                                                                                                                                                  |
| 500              | 45210      | migrate piece checksum is not correct                                                                                                                                                         |
| 500              | 45212      | invalid redundancy index                                                                                                                                                                      |
| 500              | 45213      | failed to set object integrity into spdb                                                                                                                                                      |
| 500              | 45214      | invalid piece checksum length                                                                                                                                                                 |
| 400              | 50001      | unsupported sign type                                                                                                                                                                         |
| 400              | 50002      | authorization header format error                                                                                                                                                             |
| 400              | 50003      | request is tampered                                                                                                                                                                           |
| 401              | 50004      | no permission                                                                                                                                                                                 |
| 400              | 50005      | gnfd msg encoding error                                                                                                                                                                       |
| 400              | 50006      | gnfd msg validate error                                                                                                                                                                       |
| 200              | 50007      | approval request is refuse                                                                                                                                                                    |
| 404              | 50008      | unsupported request type                                                                                                                                                                      |
| 400              | 50009      | invalid request header                                                                                                                                                                        |
| 400              | 50010      | invalid request params for query                                                                                                                                                              |
| 400              | 50012      | invalid range params                                                                                                                                                                          |
| 400              | 50013      | stream exception                                                                                                                                                                              |
| 406              | 50014      | mismatch sp                                                                                                                                                                                   |
| 406              | 50015      | signature verification failed                                                                                                                                                                 |
| 403              | 50016      | invalid payload                                                                                                                                                                               |
| 400              | 50017      | The X-Gnfd-App-Domain header is incorrect.                                                                                                                                                    |
| 400              | 50018      | The X-Gnfd-App-Reg-Public-Key header is incorrect.                                                                                                                                            |
| 400              | 50019      | The X-Gnfd-App-Reg-Nonce header is incorrect.                                                                                                                                                 |
| 400              | 50020      | The signed message in Authorization does not match the content in headers.                                                                                                                    |
| 400              | 50021      | The SP addr in the signed message in Authorization is not for the this SP.                                                                                                                    |
| 400              | 50040      | The SP Nonce in the signed message in Authorization is not for the this SP.                                                                                                                   |
| 400              | 50037      | The domain in the signed message in Authorization does not match this website.                                                                                                                |
| 400              | 50038      | The expiry time in signed message in Authorization does not match the expiry time in the header X-Gnfd-Expiry-Timestamp.                                                                      |
| 400              | 50039      | The public key in signed message in Authorization does not match the expiry time in the header X-Gnfd-App-Reg-Public-Key.                                                                     |
| 400              | 50022      | The signed message in Authorization does not match the template.                                                                                                                              |
| 400              | 50023      | The X-Gnfd-Expiry-Timestamp header is incorrect. The expiry date is expected to be within 604800 seconds and formatted in YYYY-DD-MM HH:MM:SS 'GMT'Z, e.g. 2023-04-20 16:34:12 GMT+08:00 .    |
| 400              | 50024      | The X-Gnfd-Expiry-Timestamp parameter is incorrect. The expiry date is expected to be within 604800 seconds and formatted in YYYY-DD-MM HH:MM:SS 'GMT'Z, e.g. 2023-04-20 16:34:12 GMT+08:00 . |
| 404              | 50025      | no such object                                                                                                                                                                                |
| 403              | 50026      | Forbidden to access                                                                                                                                                                           |
| 400              | 50027      | invalid complete                                                                                                                                                                              |
| 400              | 50028      | invalid offset                                                                                                                                                                                |
| 403              | 50029      | sp is not in service status                                                                                                                                                                   |
| 400              | 50030      | The SP is not the correct SP to recovery                                                                                                                                                      |
| 400              | 50031      | The redundancy type of the recovering piece is not EC                                                                                                                                         |
| 500              | 50032      | System busy, try to request later                                                                                                                                                             |
| 500              | 50035      | invalid redundancy index                                                                                                                                                                      |
| 403              | 50036      | bucket is not in service status                                                                                                                                                               |
| 400              | 60001      | OoooH... request lost                                                                                                                                                                         |
| 406              | 60002      | request repeated                                                                                                                                                                              |
| 406              | 60003      | OoooH... request exceed, try again later                                                                                                                                                      |
| 400              | 60004      | task canceled                                                                                                                                                                                 |
| 404              | 60005      | future support                                                                                                                                                                                |
| 406              | 60006      | failed to notify swap out start                                                                                                                                                               |
| 400              | 70001      | request repeated                                                                                                                                                                              |
| 404              | 70002      | insufficient approvals as secondary sp                                                                                                                                                        |
| 400              | 80001      | OoooH... request lost, try again later                                                                                                                                                        |
| 406              | 80002      | request repeated                                                                                                                                                                              |
| 403              | 80003      | replicate piece unfinished                                                                                                                                                                    |
| 406              | 80004      | verify data checksum failed                                                                                                                                                                   |
| 400              | 90001      | OoooH... request lost, try again later                                                                                                                                                        |
| 406              | 90002      | request exceed                                                                                                                                                                                |
| 404              | 90003      | no uploading record                                                                                                                                                                           |
| 404              | 90004      | no such sp                                                                                                                                                                                    |
| 400              | 90005      | request block height exceed latest height                                                                                                                                                     |
| 400              | 98002      | stream closed abnormally                                                                                                                                                                      |
| 400              | 98101      | response type mismatch                                                                                                                                                                        |
| 400              | 98093      | no such object from metadata                                                                                                                                                                  |
| 400              | 110001     | OoooH... request lost, try again later                                                                                                                                                        |
| 403              | 110002     | object not created state                                                                                                                                                                      |
| 406              | 110003     | put object request repeated                                                                                                                                                                   |
| 406              | 110004     | invalid payload data integrity hash                                                                                                                                                           |
| 400              | 110005     | upload payload data stream exception                                                                                                                                                          |
| 400              | 120001     | sign message with private key failed                                                                                                                                                          |
| 400              | 120002     | send sealObject msg failed                                                                                                                                                                    |
| 400              | 120003     | send rejectUnSealObject msg failed                                                                                                                                                            |
| 400              | 120004     | send discontinueBucket msg failed                                                                                                                                                             |
| 400              | 120005     | sign or tx msg pointer dangling                                                                                                                                                               |
| 400              | 120006     | send create gvg msg failed                                                                                                                                                                    |
| 400              | 120007     | send complete migrate bucket failed                                                                                                                                                           |
| 400              | 120008     | send swap out failed                                                                                                                                                                          |
| 400              | 120009     | send complete swap out failed                                                                                                                                                                 |
| 400              | 120010     | send sp exit failed                                                                                                                                                                           |
| 400              | 120011     | send complete sp exit failed                                                                                                                                                                  |
| 400              | 120012     | send update sp price failed                                                                                                                                                                   |
| 400              | 500001     | no such bucket                                                                                                                                                                                |
| 400              | 500002     | seal failed                                                                                                                                                                                   |
| 400              | 500003     | reject unseal failed                                                                                                                                                                          |
| 500              | 540001     | failed to pick virtual group family, need creating global virtual group                                                                                                                       |
| 500              | 540002     | failed to pick global virtual group, need staking more storage size                                                                                                                           |
| 500              | 540003     | metadata is staled, need forcing refresh metadata                                                                                                                                             |
| 500              | 540004     | failed to pick dest sp                                                                                                                                                                        |
| 400              | 970001     | request repeated                                                                                                                                                                              |
| 400              | 970002     | request exceed limit                                                                                                                                                                          |
| 400              | 990101     | OoooH... request lost                                                                                                                                                                         |
| 400              | 990102     | server overload, try again later                                                                                                                                                              |
| 400              | 990301     | OoooH... request lost                                                                                                                                                                         |
| 400              | 990302     | server overload, try again later                                                                                                                                                              |
| 400              | 990601     | OoooH... request lost                                                                                                                                                                         |
| 404              | 990602     | unsupported task type                                                                                                                                                                         |
| 404              | 990603     | no task to dispatch below the require limits                                                                                                                                                  |
| 400              | 990701     | OoooH... request lost                                                                                                                                                                         |
| 404              | 995301     | future support                                                                                                                                                                                |
| 400              | 990801     | OoooH... request lost                                                                                                                                                                         |
| 400              | 990802     | server overload, try again later                                                                                                                                                              |
| 400              | 991001     | OoooH... request lost                                                                                                                                                                         |
| 400              | 991101     | OoooH... request lost                                                                                                                                                                         |
| 400              | 991102     | server overload, try again later                                                                                                                                                              |
| 400              | 991103     | stream closed abnormally                                                                                                                                                                      |

## Rate limit response
If your request exceed the rate limit, the server will return a 429 http code with no detailed description as of now.