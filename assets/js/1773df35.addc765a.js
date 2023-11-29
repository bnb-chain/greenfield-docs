"use strict";(self.webpackChunkgreenfield_docs=self.webpackChunkgreenfield_docs||[]).push([[7483],{3905:(e,t,a)=>{a.d(t,{Zo:()=>o,kt:()=>g});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),d=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},o=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,o=p(e,["components","mdxType","originalType","parentName"]),u=d(a),c=n,g=u["".concat(s,".").concat(c)]||u[c]||m[c]||l;return a?r.createElement(g,i(i({ref:t},o),{},{components:a})):r.createElement(g,i({ref:t},o))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=c;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[u]="string"==typeof e?e:n,i[1]=p;for(var d=2;d<l;d++)i[d]=a[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},97101:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>d});var r=a(87462),n=(a(67294),a(3905));const l={title:"Get Approval"},i="GetApproval",p={unversionedId:"api/storage-provider-rest/get_approval",id:"api/storage-provider-rest/get_approval",title:"Get Approval",description:"RESTful API Description",source:"@site/docs/api/storage-provider-rest/get_approval.md",sourceDirName:"api/storage-provider-rest",slug:"/api/storage-provider-rest/get_approval",permalink:"/greenfield-docs/docs/api/storage-provider-rest/get_approval",draft:!1,editUrl:"https://github.com/bnb-chain/greenfield-docs/blob/main/docs/api/storage-provider-rest/get_approval.md",tags:[],version:"current",frontMatter:{title:"Get Approval"},sidebar:"apiReferenceSidebar",previous:{title:"Greenfield SP RESTful APIs",permalink:"/greenfield-docs/docs/api/storage-provider-rest/"},next:{title:"Put Object",permalink:"/greenfield-docs/docs/api/storage-provider-rest/put_object"}},s={},d=[{value:"RESTful API Description",id:"restful-api-description",level:2},{value:"HTTP Request Format",id:"http-request-format",level:2},{value:"HTTP Request Header",id:"http-request-header",level:2},{value:"MsgCreateBucket",id:"msgcreatebucket",level:3},{value:"MsgCreateObject",id:"msgcreateobject",level:3},{value:"Approval",id:"approval",level:3},{value:"RedundancyType",id:"redundancytype",level:3},{value:"VisibilityType",id:"visibilitytype",level:3},{value:"HTTP Request Parameter",id:"http-request-parameter",level:2},{value:"Path Parameter",id:"path-parameter",level:3},{value:"Query Parameter",id:"query-parameter",level:3},{value:"Request Body",id:"request-body",level:3},{value:"Request Syntax",id:"request-syntax",level:2},{value:"HTTP Response Header",id:"http-response-header",level:2},{value:"HTTP Response Parameter",id:"http-response-parameter",level:2},{value:"Response Body",id:"response-body",level:3},{value:"Response Syntax",id:"response-syntax",level:2},{value:"Examples",id:"examples",level:2},{value:"Example 1: Create bucket",id:"example-1-create-bucket",level:3},{value:"Sample Response: Create bucket successfully",id:"sample-response-create-bucket-successfully",level:3},{value:"Example 2: Create object",id:"example-2-create-object",level:2},{value:"Sample Response: Create object successfully",id:"sample-response-create-object-successfully",level:3},{value:"Example 3: Failed to create bucket",id:"example-3-failed-to-create-bucket",level:2},{value:"Sample Response: There is an internal error in SP server",id:"sample-response-there-is-an-internal-error-in-sp-server",level:2}],o={toc:d},u="wrapper";function m(e){let{components:t,...a}=e;return(0,n.kt)(u,(0,r.Z)({},o,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"getapproval"},"GetApproval"),(0,n.kt)("h2",{id:"restful-api-description"},"RESTful API Description"),(0,n.kt)("p",null,"This API is used to sign an approval for creating a bucket action or creating an object action. And it only supports ",(0,n.kt)("inlineCode",{parentName:"p"},"path-style")," requests."),(0,n.kt)("h2",{id:"http-request-format"},"HTTP Request Format"),(0,n.kt)("p",null,"This API only supports path-style requests."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Definition"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Host(path-style)"),(0,n.kt)("td",{parentName:"tr",align:null},"gnfd-testnet-sp*.bnbchain.org")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Path(path-style)"),(0,n.kt)("td",{parentName:"tr",align:null},"/greenfield/admin/v1/get-approval")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Method"),(0,n.kt)("td",{parentName:"tr",align:null},"GET")))),(0,n.kt)("h2",{id:"http-request-header"},"HTTP Request Header"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"ParameterName"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Required"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"X-Gnfd-Unsigned-Msg"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"yes"),(0,n.kt)("td",{parentName:"tr",align:null},"defines unsigned msg")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/greenfield-docs/docs/api/storage-provider-rest/#authorization-header"},"Authorization")),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"yes"),(0,n.kt)("td",{parentName:"tr",align:null},"The authorization string of the HTTP request")))),(0,n.kt)("p",null,"X-Gnfd-Unsigned-Msg header consists of ",(0,n.kt)("a",{parentName:"p",href:"#msgcreatebucket"},"MsgCreateBucket")," and ",(0,n.kt)("a",{parentName:"p",href:"#msgcreateobject"},"MsgCreateObject"),". You can read ",(0,n.kt)("a",{parentName:"p",href:"/greenfield-docs/docs/api/storage-provider-rest/"},"Greenfield headers")," to know how to marshal and unmarshal them."),(0,n.kt)("h3",{id:"msgcreatebucket"},"MsgCreateBucket"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"ParameterName"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Creator"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Creator is the account address of bucket creator, it is also the bucket owner.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"BucketName"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"BucketName is a globally unique name of bucket.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Visibility"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"#visibilitytype"},"VisibilityType")),(0,n.kt)("td",{parentName:"tr",align:null},"visibility means the bucket is private or public. If private, only bucket owner or grantee can read it, otherwise every greenfield user can read it.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"PaymentAddress"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"PaymentAddress is an account address specified by bucket owner to pay the read fee. Default: creator.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"PrimarySpAddress"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"PrimarySpAddress  is the address of primary sp.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"PrimarySpApproval"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"#approval"},"Approval")),(0,n.kt)("td",{parentName:"tr",align:null},"PrimarySpApproval is the approval info of the primary SP which indicates that primary sp confirm the user's request.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"ChargedReadQuota"),(0,n.kt)("td",{parentName:"tr",align:null},"unsigned integer"),(0,n.kt)("td",{parentName:"tr",align:null},"ChargedReadQuota defines the read data that users are charged for, measured in bytes. The available read data for each user is the sum of the free read data provided by SP and the ChargeReadQuota specified here.")))),(0,n.kt)("h3",{id:"msgcreateobject"},"MsgCreateObject"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"ParameterName"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Creator"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Creator is the account address of object uploader.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"BucketName"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"BucketName is the name of the bucket where the object is stored.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"ObjectName"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"ObjectName is the name of object.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"PayloadSize"),(0,n.kt)("td",{parentName:"tr",align:null},"integer"),(0,n.kt)("td",{parentName:"tr",align:null},"PayloadSize is size of the object's payload.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Visibility"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"#visibilitytype"},"VisibilityType")),(0,n.kt)("td",{parentName:"tr",align:null},"VisibilityType means the object is private or public. If private, only object owner or grantee can access it, otherwise every greenfield user can access it.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"ContentType"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"ContentType is a standard MIME type describing the format of the object.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"PrimarySpApproval"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"#approval"},"Approval")),(0,n.kt)("td",{parentName:"tr",align:null},"PrimarySpApproval is the approval info of the primary SP which indicates that primary sp confirm the user's request.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"ExpectChecksums"),(0,n.kt)("td",{parentName:"tr",align:null},"byteArray"),(0,n.kt)("td",{parentName:"tr",align:null},"ExpectChecksums is a list of hashes which was generate by redundancy algorithm.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"RedundancyType"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"#redundancytype"},"RedundancyType")),(0,n.kt)("td",{parentName:"tr",align:null},"RedundancyType specifies which redundancy type is used.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"ExpectSecondarySpAddresses"),(0,n.kt)("td",{parentName:"tr",align:null},"stringArray"),(0,n.kt)("td",{parentName:"tr",align:null},"ExpectSecondarySpAddresses is a list of StorageProvider address which is optional.")))),(0,n.kt)("h3",{id:"approval"},"Approval"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"ParameterName"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"ExpiredHeight"),(0,n.kt)("td",{parentName:"tr",align:null},"integer"),(0,n.kt)("td",{parentName:"tr",align:null},"ExpiredHeight is expired at which height.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Sig"),(0,n.kt)("td",{parentName:"tr",align:null},"byteArray"),(0,n.kt)("td",{parentName:"tr",align:null},"Sig is signature")))),(0,n.kt)("h3",{id:"redundancytype"},"RedundancyType"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Value"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"0"),(0,n.kt)("td",{parentName:"tr",align:null},"Redundancy type is replica type.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"1"),(0,n.kt)("td",{parentName:"tr",align:null},"Redundancy type is ec type.")))),(0,n.kt)("h3",{id:"visibilitytype"},"VisibilityType"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Value"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"0"),(0,n.kt)("td",{parentName:"tr",align:null},"Visibility type is unspecified.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"1"),(0,n.kt)("td",{parentName:"tr",align:null},"Visibility type is public read.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"2"),(0,n.kt)("td",{parentName:"tr",align:null},"Visibility type is private.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"3"),(0,n.kt)("td",{parentName:"tr",align:null},"Visibility type is inherit.")))),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"If the bucket visibility is inherited, it's finally set to private. If the object Visibility is inherited, it's the same as bucket.")),(0,n.kt)("h2",{id:"http-request-parameter"},"HTTP Request Parameter"),(0,n.kt)("h3",{id:"path-parameter"},"Path Parameter"),(0,n.kt)("p",null,"The request does not have a path parameter."),(0,n.kt)("h3",{id:"query-parameter"},"Query Parameter"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"ParameterName"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Required"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"action"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"yes"),(0,n.kt)("td",{parentName:"tr",align:null},"The action of approval:",(0,n.kt)("inlineCode",{parentName:"td"},"CreateBucket")," or ",(0,n.kt)("inlineCode",{parentName:"td"},"CreateObject"))))),(0,n.kt)("h3",{id:"request-body"},"Request Body"),(0,n.kt)("p",null,"The request does not have a request body."),(0,n.kt)("h2",{id:"request-syntax"},"Request Syntax"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-HTTP"},"GET /greenfield/admin/v1/get-approval?action=action HTTP/1.1\nHost: gnfd-testnet-sp*.bnbchain.org\nContent-Type: ContentType\nX-Gnfd-Unsigned-Msg: UnsignedMsg\nAuthorization: Authorization\n")),(0,n.kt)("h2",{id:"http-response-header"},"HTTP Response Header"),(0,n.kt)("p",null,"The response returns the following HTTP headers."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"ParameterName"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"X-Gnfd-Request-ID"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"defines trace id, trace request in sp")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/greenfield-docs/docs/api/storage-provider-rest/#x-gnfd-signed-msg"},"X-Gnfd-Signed-Msg")),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"defines signed msg")))),(0,n.kt)("h2",{id:"http-response-parameter"},"HTTP Response Parameter"),(0,n.kt)("h3",{id:"response-body"},"Response Body"),(0,n.kt)("p",null,"If the request is successful, the service sends back an HTTP 200 response."),(0,n.kt)("p",null,"If you failed to send request to get approval, you will get error response body in ",(0,n.kt)("a",{parentName:"p",href:"/greenfield-docs/docs/api/storage-provider-rest/sp_response#sp-error-response"},"XML"),"."),(0,n.kt)("h2",{id:"response-syntax"},"Response Syntax"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-HTTP"},"HTTP/1.1 200\nX-Gnfd-Request-ID: RequestID\nX-Gnfd-Signed-Msg: SignedMsg\n")),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)("p",null,"The examples given all use path-style."),(0,n.kt)("h3",{id:"example-1-create-bucket"},"Example 1: Create bucket"),(0,n.kt)("p",null,"The following request sends ",(0,n.kt)("inlineCode",{parentName:"p"},"CreateBucket")," action to get approval."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-HTTP"},"GET /greenfield/admin/v1/get-approval?action=CreateBucket HTTP/1.1\nHost: gnfd-testnet-sp1.bnbchain.org\nDate: Fri, 31 March 2023 17:32:00 GMT\nX-Gnfd-Unsigned-Msg: unsigned msg string\nAuthorization: authorization string\n")),(0,n.kt)("h3",{id:"sample-response-create-bucket-successfully"},"Sample Response: Create bucket successfully"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-HTTP"},"HTTP/1.1 200 OK\nX-Gnfd-Request-ID: 14779951378820359452\nX-Gnfd-Signed-Msg: df5857b2ac67b491ba6d9c6632618be7fb22de13662356b593d74103408cf1af46eed90edaa77bdb65b12fc63ee3bec8314ad7bb0f3ae099ccf7dafe22abff2e01\n")),(0,n.kt)("h2",{id:"example-2-create-object"},"Example 2: Create object"),(0,n.kt)("p",null,"The following request sends ",(0,n.kt)("inlineCode",{parentName:"p"},"CreateObject")," action to get approval."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-HTTP"},"GET /greenfield/admin/v1/get-approval?action=CreateObject HTTP/1.1\nHost: gnfd-testnet-sp1.bnbchain.org\nDate: Fri, 31 March 2023 17:32:00 GMT\nX-Gnfd-Unsigned-Msg: unsigned msg string\nAuthorization: authorization string\n")),(0,n.kt)("h3",{id:"sample-response-create-object-successfully"},"Sample Response: Create object successfully"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-HTTP"},"HTTP/1.1 200 OK\nX-Gnfd-Request-ID: 4208447844380058399\nX-Gnfd-Signed-Msg: f00daace3251076f270984e596bbd72b1b1f2a1ae0443e6f32f37cef73d541d568a542333f6a9af2f235724d2a763b3cdc0b370d978d0315b8414fa51fc32a2e00\n")),(0,n.kt)("h2",{id:"example-3-failed-to-create-bucket"},"Example 3: Failed to create bucket"),(0,n.kt)("p",null,"The following request sends ",(0,n.kt)("inlineCode",{parentName:"p"},"CreateBucket")," action to get approval."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-HTTP"},"GET /greenfield/admin/v1/get-approval?action=CreateBucket HTTP/1.1\nHost: gnfd-testnet-sp1.bnbchain.org\nDate: Fri, 31 March 2023 17:32:00 GMT\nX-Gnfd-Unsigned-Msg: unsigned msg string\nAuthorization: authorization string\n")),(0,n.kt)("h2",{id:"sample-response-there-is-an-internal-error-in-sp-server"},"Sample Response: There is an internal error in SP server"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-HTTP"},"HTTP/1.1 403 Forbidden\n\n<Error>\n    <Code>InvalidUnsignedMsg</Code>\n    <Message>The uinsigned message is not valid for creating bucket</Message>\n    <RequestId>14379357152578345503</RequestId>\n</Error>\n")))}m.isMDXComponent=!0}}]);