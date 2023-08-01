"use strict";(self.webpackChunkgreenfield_docs=self.webpackChunkgreenfield_docs||[]).push([[4701],{67369:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>p,toc:()=>d});var r=a(87462),n=(a(67294),a(3905));const l={title:"Verify Permission"},i="Verify Permission",p={unversionedId:"api/storgae-provider-rest/verify_permission",id:"api/storgae-provider-rest/verify_permission",title:"Verify Permission",description:"RESTful API Description",source:"@site/docs/api/storgae-provider-rest/verify_permission.md",sourceDirName:"api/storgae-provider-rest",slug:"/api/storgae-provider-rest/verify_permission",permalink:"/greenfield-docs/docs/api/storgae-provider-rest/verify_permission",draft:!1,editUrl:"https://github.com/bnb-chain/greenfield-docs/blob/main/docs/api/storgae-provider-rest/verify_permission.md",tags:[],version:"current",frontMatter:{title:"Verify Permission"},sidebar:"apiReferenceSidebar",previous:{title:"List Buckets By Bucket IDs",permalink:"/greenfield-docs/docs/api/storgae-provider-rest/list_buckets_by_bucket_ids"},next:{title:"Get Object Meta",permalink:"/greenfield-docs/docs/api/storgae-provider-rest/get_object_meta"}},s={},d=[{value:"RESTful API Description",id:"restful-api-description",level:2},{value:"HTTP Request Format",id:"http-request-format",level:2},{value:"HTTP Request Header",id:"http-request-header",level:2},{value:"HTTP Request Parameter",id:"http-request-parameter",level:2},{value:"Path Parameter",id:"path-parameter",level:3},{value:"Query Parameter",id:"query-parameter",level:3},{value:"Request Body",id:"request-body",level:3},{value:"Request Syntax",id:"request-syntax",level:2},{value:"HTTP Response Header",id:"http-response-header",level:2},{value:"HTTP Response Parameter",id:"http-response-parameter",level:2},{value:"Effect",id:"effect",level:3},{value:"Action",id:"action",level:3},{value:"Response Body",id:"response-body",level:3},{value:"Response Syntax",id:"response-syntax",level:2},{value:"Examples",id:"examples",level:2},{value:"Example 1: Verify permission",id:"example-1-verify-permission",level:3},{value:"Sample Response: Verify permission successfully",id:"sample-response-verify-permission-successfully",level:3}],o={toc:d},m="wrapper";function u(e){let{components:t,...a}=e;return(0,n.kt)(m,(0,r.Z)({},o,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"verify-permission"},"Verify Permission"),(0,n.kt)("h2",{id:"restful-api-description"},"RESTful API Description"),(0,n.kt)("p",null,"This API is used to Verify the input account\u2019s permission to input items. This API only supports ",(0,n.kt)("inlineCode",{parentName:"p"},"path-style")," requests."),(0,n.kt)("h2",{id:"http-request-format"},"HTTP Request Format"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Definition"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Host(path-style)"),(0,n.kt)("td",{parentName:"tr",align:null},"gnfd-testnet-sp-*.bnbchain.org")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Path(path-style)"),(0,n.kt)("td",{parentName:"tr",align:null},"/permission/:operator/:bucket/:action")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Method"),(0,n.kt)("td",{parentName:"tr",align:null},"GET")))),(0,n.kt)("h2",{id:"http-request-header"},"HTTP Request Header"),(0,n.kt)("h2",{id:"http-request-parameter"},"HTTP Request Parameter"),(0,n.kt)("h3",{id:"path-parameter"},"Path Parameter"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"ParameterName"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Required"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"operator"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"yes"),(0,n.kt)("td",{parentName:"tr",align:null},"operator defines the address of operator")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"bucket"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"yes"),(0,n.kt)("td",{parentName:"tr",align:null},"bucket defines the name of bucket")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"action"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"#action"},"Action")),(0,n.kt)("td",{parentName:"tr",align:null},"yes"),(0,n.kt)("td",{parentName:"tr",align:null},"action defines the operations you can execute in greenfield storage network")))),(0,n.kt)("h3",{id:"query-parameter"},"Query Parameter"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"ParameterName"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Required"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"object"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"no"),(0,n.kt)("td",{parentName:"tr",align:null},"object defines the name of object")))),(0,n.kt)("h3",{id:"request-body"},"Request Body"),(0,n.kt)("p",null,"The request does not have a request body."),(0,n.kt)("h2",{id:"request-syntax"},"Request Syntax"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-HTTP"},"GET / HTTP/1.1\nHost: gnfd-testnet-sp-*.bnbchain.org/permission/:operator/:bucket/:action?object=object\n")),(0,n.kt)("h2",{id:"http-response-header"},"HTTP Response Header"),(0,n.kt)("p",null,"The response returns the following HTTP headers."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"ParameterName"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Content-Type"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"value is ",(0,n.kt)("inlineCode",{parentName:"td"},"application/json"))))),(0,n.kt)("h2",{id:"http-response-parameter"},"HTTP Response Parameter"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"ParameterName"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"effect"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"#effect"},"Effect")),(0,n.kt)("td",{parentName:"tr",align:null},"effect defines the effect of the operation permission, include EFFECT_UNSPECIFIED(0)/EFFECT_ALLOW(1)/EFFECT_DENY(2)")))),(0,n.kt)("h3",{id:"effect"},"Effect"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Value"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"0"),(0,n.kt)("td",{parentName:"tr",align:null},"EFFECT_UNSPECIFIED")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"1"),(0,n.kt)("td",{parentName:"tr",align:null},"EFFECT_ALLOW")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"2"),(0,n.kt)("td",{parentName:"tr",align:null},"EFFECT_DENY")))),(0,n.kt)("h3",{id:"action"},"Action"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Value"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"0"),(0,n.kt)("td",{parentName:"tr",align:null},"ACTION_UNSPECIFIED")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"1"),(0,n.kt)("td",{parentName:"tr",align:null},"ACTION_UPDATE_BUCKET_INFO")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"2"),(0,n.kt)("td",{parentName:"tr",align:null},"ACTION_DELETE_BUCKET")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"3"),(0,n.kt)("td",{parentName:"tr",align:null},"ACTION_CREATE_OBJECT")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"4"),(0,n.kt)("td",{parentName:"tr",align:null},"ACTION_DELETE_OBJECT")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"5"),(0,n.kt)("td",{parentName:"tr",align:null},"ACTION_COPY_OBJECT")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"6"),(0,n.kt)("td",{parentName:"tr",align:null},"ACTION_GET_OBJECT")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"7"),(0,n.kt)("td",{parentName:"tr",align:null},"ACTION_EXECUTE_OBJECT")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"8"),(0,n.kt)("td",{parentName:"tr",align:null},"ACTION_LIST_OBJECT")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"9"),(0,n.kt)("td",{parentName:"tr",align:null},"ACTION_UPDATE_GROUP_MEMBER")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"10"),(0,n.kt)("td",{parentName:"tr",align:null},"ACTION_DELETE_GROUP")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"11"),(0,n.kt)("td",{parentName:"tr",align:null},"ACTION_UPDATE_OBJECT_INFO")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"12"),(0,n.kt)("td",{parentName:"tr",align:null},"ACTION_UPDATE_GROUP_EXTRA")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"99"),(0,n.kt)("td",{parentName:"tr",align:null},"ACTION_TYPE_ALL")))),(0,n.kt)("h3",{id:"response-body"},"Response Body"),(0,n.kt)("p",null,"If the request is successful, the service sends back an HTTP 200 response."),(0,n.kt)("p",null,"If you failed to send request, you will get error response body in ",(0,n.kt)("a",{parentName:"p",href:"/greenfield-docs/docs/api/storgae-provider-rest/sp_response#sp-error-response"},"XML"),"."),(0,n.kt)("h2",{id:"response-syntax"},"Response Syntax"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-HTTP"},"HTTP/1.1 200\n\nJSON Body\n")),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)("p",null,"The examples given all use path-style."),(0,n.kt)("h3",{id:"example-1-verify-permission"},"Example 1: Verify permission"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-HTTP"},"GET / HTTP/1.1\nHost: gnfd-testnet-sp-1.bnbchain.org/permission/0x9d90A123c3A559a295fa99cCbC82b5ad2C33196B/asnnv/6?object=obgeio5g3y\nDate: Fri, 31 March 2023 17:32:00 GMT\n")),(0,n.kt)("h3",{id:"sample-response-verify-permission-successfully"},"Sample Response: Verify permission successfully"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-HTTP"},'HTTP/1.1 200 OK\nDate: Fri, 31 March 2023 17:32:10 GMT\n\n{\n    "effect": 2\n}\n')))}u.isMDXComponent=!0}}]);