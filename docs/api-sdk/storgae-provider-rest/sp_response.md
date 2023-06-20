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
    <Code>98001</Code>
    <Message>server slipped away, try again later</Message>
    <RequestId>14379357152578345503</RequestId>
</Error>
```
