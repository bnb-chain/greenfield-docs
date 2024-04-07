"use strict";(self.webpackChunkgreenfield_docs=self.webpackChunkgreenfield_docs||[]).push([[2439],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),i=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},u=function(e){var t=i(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=i(a),c=r,h=d["".concat(s,".").concat(c)]||d[c]||m[c]||l;return a?n.createElement(h,p(p({ref:t},u),{},{components:a})):n.createElement(h,p({ref:t},u))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,p=new Array(l);p[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:r,p[1]=o;for(var i=2;i<l;i++)p[i]=a[i];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},88629:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>i});var n=a(87462),r=(a(67294),a(3905));const l={title:"Resumable Put Object"},p="ResumablePutObject",o={unversionedId:"api/storage-provider-rest/resumable_put_object",id:"api/storage-provider-rest/resumable_put_object",title:"Resumable Put Object",description:"RESTful API Description",source:"@site/docs/api/storage-provider-rest/resumable_put_object.md",sourceDirName:"api/storage-provider-rest",slug:"/api/storage-provider-rest/resumable_put_object",permalink:"/greenfield-docs/docs/api/storage-provider-rest/resumable_put_object",draft:!1,editUrl:"https://github.com/bnb-chain/greenfield-docs/blob/main/docs/api/storage-provider-rest/resumable_put_object.md",tags:[],version:"current",frontMatter:{title:"Resumable Put Object"},sidebar:"apiReferenceSidebar",previous:{title:"Put Object",permalink:"/greenfield-docs/docs/api/storage-provider-rest/put_object"},next:{title:"Get Object",permalink:"/greenfield-docs/docs/api/storage-provider-rest/get_object"}},s={},i=[{value:"RESTful API Description",id:"restful-api-description",level:2},{value:"HTTP Request Format",id:"http-request-format",level:2},{value:"HTTP Request Header",id:"http-request-header",level:2},{value:"HTTP Request Parameter",id:"http-request-parameter",level:2},{value:"Path Parameter",id:"path-parameter",level:3},{value:"Query Parameter",id:"query-parameter",level:3},{value:"Request Body",id:"request-body",level:3},{value:"Request Syntax",id:"request-syntax",level:2},{value:"HTTP Response Header",id:"http-response-header",level:2},{value:"HTTP Response Parameter",id:"http-response-parameter",level:2},{value:"Response Body",id:"response-body",level:3},{value:"Response Syntax",id:"response-syntax",level:2},{value:"Examples",id:"examples",level:2},{value:"Example 1: Upload an object",id:"example-1-upload-an-object",level:3},{value:"Sample Response: Upload an object successfully",id:"sample-response-upload-an-object-successfully",level:3},{value:"RESTful API Description",id:"restful-api-description-1",level:2},{value:"HTTP Request Format",id:"http-request-format-1",level:2},{value:"HTTP Request Header",id:"http-request-header-1",level:2},{value:"HTTP Request Parameter",id:"http-request-parameter-1",level:2},{value:"Path Parameter",id:"path-parameter-1",level:3},{value:"Query Parameter",id:"query-parameter-1",level:3},{value:"Request Body",id:"request-body-1",level:3},{value:"Request Syntax",id:"request-syntax-1",level:2},{value:"HTTP Response Header",id:"http-response-header-1",level:2},{value:"HTTP Response Parameter",id:"http-response-parameter-1",level:2},{value:"Response Body",id:"response-body-1",level:3},{value:"Response Syntax",id:"response-syntax-1",level:2},{value:"Examples",id:"examples-1",level:2},{value:"Example 1: Upload an object",id:"example-1-upload-an-object-1",level:3},{value:"Sample Response: Upload an object successfully",id:"sample-response-upload-an-object-successfully-1",level:3}],u={toc:i},d="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"resumableputobject"},"ResumablePutObject"),(0,r.kt)("h2",{id:"restful-api-description"},"RESTful API Description"),(0,r.kt)("p",null,"This API is used to upload an object to Greenfield SP. It serves for two types of upload, either a new object which is just created or to update an existing object.\nAnd it supports both ",(0,r.kt)("inlineCode",{parentName:"p"},"virtual-hosted-style")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"path-style")," requests."),(0,r.kt)("h2",{id:"http-request-format"},"HTTP Request Format"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Desscription"),(0,r.kt)("th",{parentName:"tr",align:null},"Definition"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Host(virtual-hosted-style)"),(0,r.kt)("td",{parentName:"tr",align:null},"BucketName.gnfd-testnet-sp*.bnbchain.org")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Path(path-style)"),(0,r.kt)("td",{parentName:"tr",align:null},"/ObjectName")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Method"),(0,r.kt)("td",{parentName:"tr",align:null},"POST")))),(0,r.kt)("h2",{id:"http-request-header"},"HTTP Request Header"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"ParameterName"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/greenfield-docs/docs/api/storage-provider-rest/#authorization-header"},"Authorization")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},"The authorization string of the HTTP request")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Content-Type"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"The Content-Type representation header is used to indicate the original media type of the resource")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Content-Length"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"The Content-Length header indicates the size of the message body, in bytes, sent to the recipient.")))),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Content-Type")," is determined by specific object, such as the content type of image could be image/jpeg."),(0,r.kt)("h2",{id:"http-request-parameter"},"HTTP Request Parameter"),(0,r.kt)("h3",{id:"path-parameter"},"Path Parameter"),(0,r.kt)("p",null,"The request does not have a path parameter."),(0,r.kt)("h3",{id:"query-parameter"},"Query Parameter"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"ParameterName"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"offset"),(0,r.kt)("td",{parentName:"tr",align:null},"long"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"The offset of the chunk in the entire file, if the breakpoint is resumed, you can use the query interface to get the offset.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"complete"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"True if the last piece, not false.")))),(0,r.kt)("h3",{id:"request-body"},"Request Body"),(0,r.kt)("p",null,"The request body is a binary data that you want to store in Greenfield SP."),(0,r.kt)("h2",{id:"request-syntax"},"Request Syntax"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-HTTP"},"POST /${bucketName}/${objectName}?offset=${offset}&complete=${complete} HTTP/1.1\nHost: $(host)\nContent-Length: ${length}\nContent-Type: ${contentType}\nContent-MD5: ${md5}\n\n<data of body>\n")),(0,r.kt)("h2",{id:"http-response-header"},"HTTP Response Header"),(0,r.kt)("p",null,"The response returns the following HTTP headers."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"ParameterName"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"X-Gnfd-Request-ID"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"defines trace id, trace request in sp")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Etag"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Entity tag for the uploaded object")))),(0,r.kt)("h2",{id:"http-response-parameter"},"HTTP Response Parameter"),(0,r.kt)("h3",{id:"response-body"},"Response Body"),(0,r.kt)("p",null,"If the request is successful, the service sends back an HTTP 200 response."),(0,r.kt)("p",null,"If you failed to send request to get approval, you will get error response body in ",(0,r.kt)("a",{parentName:"p",href:"/greenfield-docs/docs/api/storage-provider-rest/sp_response#sp-error-response"},"XML"),"."),(0,r.kt)("h2",{id:"response-syntax"},"Response Syntax"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-HTTP"},"HTTP/1.1 200\nX-Gnfd-Request-ID: RequestID\nEtag: Etag\n")),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("p",null,"The examples given all use virtual-hosted-style."),(0,r.kt)("h3",{id:"example-1-upload-an-object"},"Example 1: Upload an object"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-HTTP"},"PUT /my-image.jpg HTTP/1.1\nHost: myBucket.gnfd-testnet-sp*.bnbchain.org\nurl[/bucket/object?complete=false&offset=0]\nDate: Fri, 31 March 2023 17:32:00 GMT\nAuthorization: authorization string\nContent-Type: image/jpeg\nContent-Length: 11434\nX-Gnfd-Txn-Hash: e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855\n[11434 bytes of object data]\n")),(0,r.kt)("h3",{id:"sample-response-upload-an-object-successfully"},"Sample Response: Upload an object successfully"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-HTTP"},'HTTP/1.1 200 OK\nX-Gnfd-Request-ID: 4208447844380058399\nDate: Fri, 31 March 2023 17:32:10 GMT\nETag: "1b2cf535f27731c974343645a3985328"\nContent-Length: 11434\n')),(0,r.kt)("h1",{id:"delegateresumableputobject"},"DelegateResumablePutObject"),(0,r.kt)("h2",{id:"restful-api-description-1"},"RESTful API Description"),(0,r.kt)("p",null,"This API is used to delegate upload an object to Greenfield SP. It serves for two types of upload, either a new object which is just created or to update an existing object.\nAnd it supports both ",(0,r.kt)("inlineCode",{parentName:"p"},"virtual-hosted-style")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"path-style")," requests."),(0,r.kt)("h2",{id:"http-request-format-1"},"HTTP Request Format"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Desscription"),(0,r.kt)("th",{parentName:"tr",align:null},"Definition"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Host(virtual-hosted-style)"),(0,r.kt)("td",{parentName:"tr",align:null},"BucketName.gnfd-testnet-sp*.bnbchain.org")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Path(path-style)"),(0,r.kt)("td",{parentName:"tr",align:null},"/ObjectName")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Method"),(0,r.kt)("td",{parentName:"tr",align:null},"POST")))),(0,r.kt)("h2",{id:"http-request-header-1"},"HTTP Request Header"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"ParameterName"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/greenfield-docs/docs/api/storage-provider-rest/#authorization-header"},"Authorization")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},"The authorization string of the HTTP request")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Content-Type"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"The Content-Type representation header is used to indicate the original media type of the resource")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Content-Length"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"The Content-Length header indicates the size of the message body, in bytes, sent to the recipient.")))),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Content-Type")," is determined by specific object, such as the content type of image could be image/jpeg."),(0,r.kt)("h2",{id:"http-request-parameter-1"},"HTTP Request Parameter"),(0,r.kt)("h3",{id:"path-parameter-1"},"Path Parameter"),(0,r.kt)("p",null,"The request does not have a path parameter."),(0,r.kt)("h3",{id:"query-parameter-1"},"Query Parameter"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"ParameterName"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"offset"),(0,r.kt)("td",{parentName:"tr",align:null},"long"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"The offset of the chunk in the entire file, if the breakpoint is resumed, you can use the query interface to get the offset.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"complete"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"True if the last piece, not false.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"delegate"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},"The identity of the delegate upload request")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"is_update"),(0,r.kt)("td",{parentName:"tr",align:null},"bool"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether to delegate the request for the update")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"payload_size"),(0,r.kt)("td",{parentName:"tr",align:null},"uint64"),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},"the payload size of object")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"visibility"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"the visibility  of object")))),(0,r.kt)("h3",{id:"request-body-1"},"Request Body"),(0,r.kt)("p",null,"The request body is a binary data that you want to store in Greenfield SP."),(0,r.kt)("h2",{id:"request-syntax-1"},"Request Syntax"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-HTTP"},"POST /${bucketName}/${objectName}?delegate&&is_update=${is_update}&payload_size=${payload_size}&visibility=${visibility}&offset=${offset}&complete=${complete} HTTP/1.1\nHost: $(host)\nContent-Length: ${length}\nContent-Type: ${contentType}\nContent-MD5: ${md5}\n\n<data of body>\n")),(0,r.kt)("h2",{id:"http-response-header-1"},"HTTP Response Header"),(0,r.kt)("p",null,"The response returns the following HTTP headers."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"ParameterName"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"X-Gnfd-Request-ID"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"defines trace id, trace request in sp")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Etag"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Entity tag for the uploaded object")))),(0,r.kt)("h2",{id:"http-response-parameter-1"},"HTTP Response Parameter"),(0,r.kt)("h3",{id:"response-body-1"},"Response Body"),(0,r.kt)("p",null,"If the request is successful, the service sends back an HTTP 200 response."),(0,r.kt)("p",null,"If you failed to send request to get approval, you will get error response body in ",(0,r.kt)("a",{parentName:"p",href:"/greenfield-docs/docs/api/storage-provider-rest/sp_response#sp-error-response"},"XML"),"."),(0,r.kt)("h2",{id:"response-syntax-1"},"Response Syntax"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-HTTP"},"HTTP/1.1 200\nX-Gnfd-Request-ID: RequestID\nEtag: Etag\n")),(0,r.kt)("h2",{id:"examples-1"},"Examples"),(0,r.kt)("p",null,"The examples given all use virtual-hosted-style."),(0,r.kt)("h3",{id:"example-1-upload-an-object-1"},"Example 1: Upload an object"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-HTTP"},"PUT /my-image.jpg HTTP/1.1\nHost: myBucket.gnfd-testnet-sp*.bnbchain.org\nurl[/bucket/object?delegate&is_update=false&payload_size=1&visibility=1&complete=false&offset=0]\nDate: Fri, 31 March 2023 17:32:00 GMT\nAuthorization: authorization string\nContent-Type: image/jpeg\nContent-Length: 11434\nX-Gnfd-Txn-Hash: e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855\n[11434 bytes of object data]\n")),(0,r.kt)("h3",{id:"sample-response-upload-an-object-successfully-1"},"Sample Response: Upload an object successfully"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-HTTP"},'HTTP/1.1 200 OK\nX-Gnfd-Request-ID: 4208447844380058399\nDate: Fri, 31 March 2023 17:32:10 GMT\nETag: "1b2cf535f27731c974343645a3985328"\nContent-Length: 11434\n')))}m.isMDXComponent=!0}}]);