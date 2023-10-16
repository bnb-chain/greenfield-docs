"use strict";(self.webpackChunkgreenfield_docs=self.webpackChunkgreenfield_docs||[]).push([[7479],{43640:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>y,default:()=>_,frontMatter:()=>d,metadata:()=>b,toc:()=>g});var i=r(87462),s=(r(67294),r(3905)),a=r(26389),l=r(94891),p=r(75190),n=r(47507),o=r(24310),m=r(63303),c=(r(75035),r(85162));const d={id:"query-global-sp-store-price-by-time",title:"QueryGlobalSpStorePriceByTime",description:"Get global store price by time",sidebar_label:"QueryGlobalSpStorePriceByTime",hide_title:!0,hide_table_of_contents:!0,api:{description:"Get global store price by time",operationId:"QueryGlobalSpStorePriceByTime",responses:{200:{description:"A successful response.",content:{"*/*":{schema:{type:"object",properties:{global_sp_store_price:{type:"object",properties:{update_time_sec:{type:"string",format:"int64",title:"update time, unix timestamp in seconds"},read_price:{type:"string",title:"read price, in bnb wei per charge byte"},primary_store_price:{type:"string",title:"primary store price, in bnb wei per charge byte"},secondary_store_price:{type:"string",title:"secondary store price, in bnb wei per charge byte"}},title:"global sp store price, the price for all sps"}}}}}},default:{description:"An unexpected error response.",content:{"*/*":{schema:{type:"object",properties:{error:{type:"string"},code:{type:"integer",format:"int32"},message:{type:"string"},details:{type:"array",items:{type:"object",properties:{type_url:{type:"string"},value:{type:"string",format:"byte"}}}}}}}}}},parameters:[{name:"timestamp",description:"unix timestamp in seconds. If it's 0, it will return the latest price.",in:"path",required:!0,schema:{type:"string",format:"int64"}}],tags:["StorageProvider"],method:"get",path:"/greenfield/sp/global_sp_store_price_by_time/{timestamp}",servers:[{url:"https://greenfield-chain.bnbchain.org",description:"Mainnet RPC (uses live data)"},{url:"https://gnfd-testnet-fullnode-tendermint-us.bnbchain.org",description:"Testnet RPC (uses test data)"}],info:{title:"Greenfield - gRPC Gateway docs",description:"A REST interface for state queries",version:"1.0.0"},postman:{name:"QueryGlobalSpStorePriceByTime",description:{content:"Get global store price by time",type:"text/plain"},url:{path:["greenfield","sp","global_sp_store_price_by_time",":timestamp"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) unix timestamp in seconds. If it's 0, it will return the latest price.",type:"text/plain"},type:"any",value:"",key:"timestamp"}]},header:[{key:"Accept",value:"*/*"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/greenfield-api/greenfield-grpc-gateway-docs",custom_edit_url:null},y=void 0,b={unversionedId:"greenfield-api/query-global-sp-store-price-by-time",id:"greenfield-api/query-global-sp-store-price-by-time",title:"QueryGlobalSpStorePriceByTime",description:"Get global store price by time",source:"@site/docs/greenfield-api/query-global-sp-store-price-by-time.api.mdx",sourceDirName:"greenfield-api",slug:"/greenfield-api/query-global-sp-store-price-by-time",permalink:"/greenfield-docs/docs/greenfield-api/query-global-sp-store-price-by-time",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"query-global-sp-store-price-by-time",title:"QueryGlobalSpStorePriceByTime",description:"Get global store price by time",sidebar_label:"QueryGlobalSpStorePriceByTime",hide_title:!0,hide_table_of_contents:!0,api:{description:"Get global store price by time",operationId:"QueryGlobalSpStorePriceByTime",responses:{200:{description:"A successful response.",content:{"*/*":{schema:{type:"object",properties:{global_sp_store_price:{type:"object",properties:{update_time_sec:{type:"string",format:"int64",title:"update time, unix timestamp in seconds"},read_price:{type:"string",title:"read price, in bnb wei per charge byte"},primary_store_price:{type:"string",title:"primary store price, in bnb wei per charge byte"},secondary_store_price:{type:"string",title:"secondary store price, in bnb wei per charge byte"}},title:"global sp store price, the price for all sps"}}}}}},default:{description:"An unexpected error response.",content:{"*/*":{schema:{type:"object",properties:{error:{type:"string"},code:{type:"integer",format:"int32"},message:{type:"string"},details:{type:"array",items:{type:"object",properties:{type_url:{type:"string"},value:{type:"string",format:"byte"}}}}}}}}}},parameters:[{name:"timestamp",description:"unix timestamp in seconds. If it's 0, it will return the latest price.",in:"path",required:!0,schema:{type:"string",format:"int64"}}],tags:["StorageProvider"],method:"get",path:"/greenfield/sp/global_sp_store_price_by_time/{timestamp}",servers:[{url:"https://greenfield-chain.bnbchain.org",description:"Mainnet RPC (uses live data)"},{url:"https://gnfd-testnet-fullnode-tendermint-us.bnbchain.org",description:"Testnet RPC (uses test data)"}],info:{title:"Greenfield - gRPC Gateway docs",description:"A REST interface for state queries",version:"1.0.0"},postman:{name:"QueryGlobalSpStorePriceByTime",description:{content:"Get global store price by time",type:"text/plain"},url:{path:["greenfield","sp","global_sp_store_price_by_time",":timestamp"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) unix timestamp in seconds. If it's 0, it will return the latest price.",type:"text/plain"},type:"any",value:"",key:"timestamp"}]},header:[{key:"Accept",value:"*/*"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/greenfield-api/greenfield-grpc-gateway-docs",custom_edit_url:null},sidebar:"apiReferenceSidebar",previous:{title:"StreamRecords",permalink:"/greenfield-docs/docs/greenfield-api/stream-records"},next:{title:"SpParams",permalink:"/greenfield-docs/docs/greenfield-api/sp-params"}},u={},g=[{value:"QueryGlobalSpStorePriceByTime",id:"queryglobalspstorepricebytime",level:2}],h={toc:g},f="wrapper";function _(e){let{components:t,...r}=e;return(0,s.kt)(f,(0,i.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"queryglobalspstorepricebytime"},"QueryGlobalSpStorePriceByTime"),(0,s.kt)("p",null,"Get global store price by time"),(0,s.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"Path Parameters")),(0,s.kt)("div",null,(0,s.kt)("ul",null,(0,s.kt)(p.Z,{className:"paramsItem",param:{name:"timestamp",description:"unix timestamp in seconds. If it's 0, it will return the latest price.",in:"path",required:!0,schema:{type:"string",format:"int64"}},mdxType:"ParamsItem"})))),(0,s.kt)("div",null,(0,s.kt)(a.Z,{mdxType:"ApiTabs"},(0,s.kt)(c.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"A successful response.")),(0,s.kt)("div",null,(0,s.kt)(l.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(c.Z,{label:"*/*",value:"*/*",mdxType:"TabItem"},(0,s.kt)(m.Z,{mdxType:"SchemaTabs"},(0,s.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"global_sp_store_price"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)(o.Z,{collapsible:!1,name:"update_time_sec",required:!1,schemaName:"int64",qualifierMessage:void 0,schema:{type:"string",format:"int64",title:"update time, unix timestamp in seconds"},mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!1,name:"read_price",required:!1,schemaName:"read price, in bnb wei per charge byte",qualifierMessage:void 0,schema:{type:"string",title:"read price, in bnb wei per charge byte"},mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!1,name:"primary_store_price",required:!1,schemaName:"primary store price, in bnb wei per charge byte",qualifierMessage:void 0,schema:{type:"string",title:"primary store price, in bnb wei per charge byte"},mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!1,name:"secondary_store_price",required:!1,schemaName:"secondary store price, in bnb wei per charge byte",qualifierMessage:void 0,schema:{type:"string",title:"secondary store price, in bnb wei per charge byte"},mdxType:"SchemaItem"}))))))),(0,s.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(n.Z,{responseExample:'{\n  "global_sp_store_price": {\n    "update_time_sec": "string",\n    "read_price": "string",\n    "primary_store_price": "string",\n    "secondary_store_price": "string"\n  }\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,s.kt)(c.Z,{label:"default",value:"default",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"An unexpected error response.")),(0,s.kt)("div",null,(0,s.kt)(l.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(c.Z,{label:"*/*",value:"*/*",mdxType:"TabItem"},(0,s.kt)(m.Z,{mdxType:"SchemaTabs"},(0,s.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(o.Z,{collapsible:!1,name:"error",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!1,name:"code",required:!1,schemaName:"int32",qualifierMessage:void 0,schema:{type:"integer",format:"int32"},mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"details"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,s.kt)(o.Z,{collapsible:!1,name:"type_url",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!1,name:"value",required:!1,schemaName:"byte",qualifierMessage:void 0,schema:{type:"string",format:"byte"},mdxType:"SchemaItem"}),(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))))),(0,s.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(n.Z,{responseExample:'{\n  "error": "string",\n  "code": 0,\n  "message": "string",\n  "details": [\n    {\n      "type_url": "string",\n      "value": "string"\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}_.isMDXComponent=!0}}]);