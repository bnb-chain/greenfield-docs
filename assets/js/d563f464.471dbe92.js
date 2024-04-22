"use strict";(self.webpackChunkgreenfield_docs=self.webpackChunkgreenfield_docs||[]).push([[8446],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>b});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),c=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,b=u["".concat(i,".").concat(m)]||u[m]||p[m]||s;return n?a.createElement(b,l(l({ref:t},d),{},{components:n})):a.createElement(b,l({ref:t},d))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,l=new Array(s);l[0]=m;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[u]="string"==typeof e?e:r,l[1]=o;for(var c=2;c<s;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(67294),r=n(86010);const s={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(s.tabItem,l),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>p});var a=n(87462),r=n(67294),s=n(86010),l=n(72389),o=n(67392),i=n(7094),c=n(12466);const d={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function u(e){const{lazy:t,block:n,defaultValue:l,values:u,groupId:p,className:m}=e,b=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=u??b.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),f=(0,o.l)(g,((e,t)=>e.value===t.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const k=null===l?l:l??b.find((e=>e.props.default))?.props.value??b[0].props.value;if(null!==k&&!g.some((e=>e.value===k)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${k}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:h,setTabGroupChoices:y}=(0,i.U)(),[N,v]=(0,r.useState)(k),x=[],{blockElementScrollPositionUntilNextRender:j}=(0,c.o5)();if(null!=p){const e=h[p];null!=e&&e!==N&&g.some((t=>t.value===e))&&v(e)}const T=e=>{const t=e.currentTarget,n=x.indexOf(t),a=g[n].value;a!==N&&(j(t),v(a),null!=p&&y(p,String(a)))},w=e=>{let t=null;switch(e.key){case"Enter":T(e);break;case"ArrowRight":{const n=x.indexOf(e.currentTarget)+1;t=x[n]??x[0];break}case"ArrowLeft":{const n=x.indexOf(e.currentTarget)-1;t=x[n]??x[x.length-1];break}}t?.focus()};return r.createElement("div",{className:(0,s.Z)("tabs-container",d.tabList)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":n},m)},g.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>x.push(e),onKeyDown:w,onClick:T},l,{className:(0,s.Z)("tabs__item",d.tabItem,l?.className,{"tabs__item--active":N===t})}),n??t)}))),t?(0,r.cloneElement)(b.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},b.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function p(e){const t=(0,l.Z)();return r.createElement(u,(0,a.Z)({key:String(t)},e))}},43675:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>b,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var a=n(87462),r=(n(67294),n(3905)),s=n(65488),l=n(85162);const o={title:"Simple Tool for File Management (JS)",order:3},i="Building File Management Tool with Greenfield SDK (JS)",c={unversionedId:"tutorials/app/file-management/js-file-managemet",id:"tutorials/app/file-management/js-file-managemet",title:"Simple Tool for File Management (JS)",description:"Several Chain API libraries are available. These libraries manage the low-level logic of connecting to the Greenfield node, making requests, and handing the responses.",source:"@site/docs/tutorials/app/file-management/js-file-managemet.mdx",sourceDirName:"tutorials/app/file-management",slug:"/tutorials/app/file-management/js-file-managemet",permalink:"/greenfield-docs/docs/tutorials/app/file-management/js-file-managemet",draft:!1,editUrl:"https://github.com/bnb-chain/greenfield-docs/blob/main/docs/tutorials/app/file-management/js-file-managemet.mdx",tags:[],version:"current",frontMatter:{title:"Simple Tool for File Management (JS)",order:3},sidebar:"tutorialsSidebar",previous:{title:"Simple Tool for File Management",permalink:"/greenfield-docs/docs/tutorials/app/file-management/basic-file-management"},next:{title:"Dataset Batch operations",permalink:"/greenfield-docs/docs/tutorials/app/file-management/batch-upload"}},d={},u=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setup",id:"setup",level:2},{value:"Create Project",id:"create-project",level:3},{value:"Create Greenfield Client",id:"create-greenfield-client",level:3},{value:"Test a simple function",id:"test-a-simple-function",level:3},{value:"Get Address balance",id:"get-address-balance",level:2},{value:"Manage Wallet",id:"manage-wallet",level:2},{value:"Make a storage deal",id:"make-a-storage-deal",level:2},{value:"0. Create the main file",id:"0-create-the-main-file",level:3},{value:"1. Choose your own SP",id:"1-choose-your-own-sp",level:3},{value:"2. Create your bucket",id:"2-create-your-bucket",level:3},{value:"3. Create Object and Upload Object",id:"3-create-object-and-upload-object",level:3},{value:"4. Object management",id:"4-object-management",level:3},{value:"4.1 Download object",id:"41-download-object",level:4},{value:"4.2 Update object visibility",id:"42-update-object-visibility",level:4},{value:"4.3 Delete Object",id:"43-delete-object",level:4},{value:"Conclusion",id:"conclusion",level:2},{value:"Tutorials Source Code",id:"tutorials-source-code",level:3}],p={toc:u},m="wrapper";function b(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"building-file-management-tool-with-greenfield-sdk-js"},"Building File Management Tool with Greenfield SDK (JS)"),(0,r.kt)("p",null,"Several Chain API libraries are available. These libraries manage the low-level logic of connecting to the Greenfield node, making requests, and handing the responses."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/bnb-chain/greenfield-go-sdk"},"go-sdk")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/bnb-chain/greenfield-js-sdk"},"js-sdk"))),(0,r.kt)("p",null,"In this tutorial, we\u2019ll use the JS-SDK library to interact with testnet."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"Before getting started, you should be familiar with:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.bnbchain.org/greenfield-docs/docs/guide/introduction/overview"},"Greenfield basics")),(0,r.kt)("li",{parentName:"ul"},"Follow the instructions provided in ",(0,r.kt)("a",{parentName:"li",href:"https://docs.bnbchain.org/greenfield-docs/docs/guide/getting-started/token-transfer"},"Token Transfer"),". Please be aware that if your account does not have any BNB, the transaction will not be executed.")),(0,r.kt)("h2",{id:"setup"},"Setup"),(0,r.kt)("h3",{id:"create-project"},"Create Project"),(0,r.kt)(s.Z,{groupId:"example",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"browser",label:"Browser",mdxType:"TabItem"},(0,r.kt)("p",null,"Follow ",(0,r.kt)("a",{parentName:"p",href:"https://docs.bnbchain.org/greenfield-js-sdk/getting-started/quick-start"},"Quick Start")," to create the project.")),(0,r.kt)(l.Z,{value:"nodejs",label:"Nodejs",mdxType:"TabItem"},(0,r.kt)("p",null,"Create a new ",(0,r.kt)("inlineCode",{parentName:"p"},"index.js"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Nodejs create project"',title:'"Nodejs',create:!0,'project"':!0},"> mkdir gnfd-app\n> cd gnfd-app\n> touch index.js\n")),(0,r.kt)("p",null,"Install SDK:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="npm install deps"',title:'"npm',install:!0,'deps"':!0},"> npm init -y\n> npm add @bnb-chain/greenfield-js-sdk\n")))),(0,r.kt)("h3",{id:"create-greenfield-client"},"Create Greenfield Client"),(0,r.kt)(s.Z,{groupId:"example",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"browser",label:"Browser",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="Create testnet Client"',title:'"Create',testnet:!0,'Client"':!0},"import { Client } from '@bnb-chain/greenfield-js-sdk';\n\nconst client = Client.create('https://gnfd-testnet-fullnode-tendermint-ap.bnbchain.org, '5600');\n"))),(0,r.kt)(l.Z,{value:"nodejs",label:"Nodejs",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="Create testnet client"',title:'"Create',testnet:!0,'client"':!0},"const {Client}  = require('@bnb-chain/greenfield-js-sdk');\n\n// testnet\nconst client = Client.create('https://gnfd-testnet-fullnode-tendermint-ap.bnbchain.org', '5600');\n")))),(0,r.kt)("h3",{id:"test-a-simple-function"},"Test a simple function"),(0,r.kt)(s.Z,{groupId:"example",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"browser",label:"Browser",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'<button\n  className="button is-primary"\n  onClick={async () => {\n    const latestBlockHeight = await client.basic.getLatestBlockHeight();\n\n    alert(JSON.stringify(latestBlockHeight));\n  }}\n>\n  getLatestBlockHeight\n</button>\n'))),(0,r.kt)(l.Z,{value:"nodejs",label:"Nodejs",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="index.js"',title:'"index.js"'},";(async () => {\n  const latestBlockHeight = await client.basic.getLatestBlockHeight()\n\n  console.log('latestBlockHeight', latestBlockHeight)\n})()\n")),(0,r.kt)("p",null,"Run ",(0,r.kt)("inlineCode",{parentName:"p"},"index.js")," to get the latest block height:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"> node index.js\n")),(0,r.kt)("p",null,"This will output like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"latestBlockHeight 3494585\n")))),(0,r.kt)("h2",{id:"get-address-balance"},"Get Address balance"),(0,r.kt)("p",null,"In the previous step, we verified that the client was OK."),(0,r.kt)("p",null,"Now we try more features for an account."),(0,r.kt)(s.Z,{groupId:"example",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"browser",label:"Browser",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"<button\n  className=\"button is-primary\"\n  onClick={async () => {\n    if (!address) return;\n\n    const balance = await client.account.getAccountBalance({\n      address: address,\n      denom: 'BNB',\n    });\n\n    alert(JSON.stringify(balance));\n  }}\n>\n  getAccountBalance\n</button>\n"))),(0,r.kt)(l.Z,{value:"nodejs",label:"Nodejs",mdxType:"TabItem"},(0,r.kt)("p",null,"You can query an account's balance by calling ",(0,r.kt)("inlineCode",{parentName:"p"},"account.getAccountBalance")," function."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="get account\'s balance"',title:'"get',"account's":!0,'balance"':!0},";(async () => {\n    const balance = await client.account.getAccountBalance({\n    address: '0x1C893441AB6c1A75E01887087ea508bE8e07AAae',\n    denom: 'BNB'\n  })\n\n  console.log('balance: ', balance)\n})()\n")),(0,r.kt)("p",null,"Run ",(0,r.kt)("inlineCode",{parentName:"p"},"node index.js")," to get the account's balance:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"balance: { balance: { denom: 'BNB', amount: '4804586044359520195' } }\n")))),(0,r.kt)("p",null,"Apart from the basic data queries shown above, there are many more features. Please see the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.bnbchain.org/greenfield-js-sdk/category/api"},"API Reference")," for all Greenfield API definitions."),(0,r.kt)("h2",{id:"manage-wallet"},"Manage Wallet"),(0,r.kt)("p",null,"The wallet in Nodejs is generated by a private key, but the wallet plugin(MetaMask, CollectWallet, etc) can't get the user's private key in the browser, so another way is needed."),(0,r.kt)(s.Z,{groupId:"example",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"browser",label:"Browser",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"<button\n  className=\"button is-primary\"\n  onClick={async () => {\n    if (!address) return;\n\n    const transferTx = await client.account.transfer({\n      fromAddress: address,\n      toAddress: '0x0000000000000000000000000000000000000000',\n      amount: [\n        {\n          denom: 'BNB',\n          amount: '1000000000',\n        },\n      ],\n    });\n\n    const simulateInfo = await transferTx.simulate({\n      denom: 'BNB',\n    });\n\n    const res = await transferTx.broadcast({\n      denom: 'BNB',\n      gasLimit: Number(simulateInfo.gasLimit),\n      gasPrice: simulateInfo.gasPrice,\n      payer: address,\n      granter: '',\n      signTypedDataCallback: async (addr: string, message: string) => {\n        const provider = await connector?.getProvider();\n        return await provider?.request({\n          method: 'eth_signTypedData_v4',\n          params: [addr, message],\n        });\n      },\n    });\n\n    if (res.code === 0) {\n      alert('transfer success!!');\n    }\n  }}\n>\n  transfer\n</button>\n"))),(0,r.kt)(l.Z,{value:"nodejs",label:"Nodejs",mdxType:"TabItem"},(0,r.kt)("p",null,"In general, we need to put the private key in the ",(0,r.kt)("inlineCode",{parentName:"p"},".env")," file and ignore this file in the ",(0,r.kt)("inlineCode",{parentName:"p"},".gitignore")," file (for account security)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"> touch .env\n")),(0,r.kt)("p",null,"Add this information to ",(0,r.kt)("inlineCode",{parentName:"p"},".env"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"# fill your account info\nACCOUNT_PRIVATEKEY=0x...\nACCOUNT_ADDRESS=0x...\n")),(0,r.kt)("p",null,"Install ",(0,r.kt)("inlineCode",{parentName:"p"},"dotenv")," dependencies(for loading variables from .env):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"> npm install dotenv\n")),(0,r.kt)("p",null,"Everything is ready and we can transfer the transaction now."),(0,r.kt)("p",null,"Create ",(0,r.kt)("inlineCode",{parentName:"p"},"transfer.js")," file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="transfer.js"',title:'"transfer.js"'},"require('dotenv').config();\nconst {Client} = require('@bnb-chain/greenfield-js-sdk');\nconst client = Client.create('https://gnfd-testnet-fullnode-tendermint-ap.bnbchain.org', '5600');\n\n;(async () => {\n\n  // construct tx\n  const transferTx = await client.account.transfer({\n    fromAddress: process.env.ACCOUNT_ADDRESS,\n    toAddress: '0x0000000000000000000000000000000000000000',\n    amount: [\n      {\n        denom: 'BNB',\n        amount: '1000000000',\n      },\n    ],\n  })\n\n  // simulate transfer tx\n  const simulateInfo = await transferTx.simulate({\n    denom: 'BNB',\n  });\n\n  // broadcast transfer tx\n  const res = await transferTx.broadcast({\n    denom: 'BNB',\n    gasLimit: Number(simulateInfo.gasLimit),\n    gasPrice: simulateInfo.gasPrice,\n    payer: process.env.ACCOUNT_ADDRESS,\n    granter: '',\n    privateKey: process.env.ACCOUNT_PRIVATEKEY,\n  })\n\n  console.log('res', res)\n})()\n")),(0,r.kt)("p",null,"Running ",(0,r.kt)("inlineCode",{parentName:"p"},"node transfer.js"),":"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"transfer tx response"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  code: 0,\n  height: 3495211,\n  txIndex: 0,\n  events: [\n    { type: \'coin_spent\', attributes: [Array] },\n    { type: \'coin_received\', attributes: [Array] },\n    { type: \'transfer\', attributes: [Array] },\n    { type: \'message\', attributes: [Array] },\n    { type: \'tx\', attributes: [Array] },\n    { type: \'tx\', attributes: [Array] },\n    { type: \'tx\', attributes: [Array] },\n    { type: \'message\', attributes: [Array] },\n    { type: \'coin_spent\', attributes: [Array] },\n    { type: \'coin_received\', attributes: [Array] },\n    { type: \'transfer\', attributes: [Array] },\n    { type: \'message\', attributes: [Array] }\n  ],\n  rawLog: \'[{"msg_index":0,"events":[{"type":"message","attributes":[{"key":"action","value":"/cosmos.bank.v1beta1.MsgSend"},{"key":"sender","value":"0x1C893441AB6c1A75E01887087ea508bE8e07AAae"},{"key":"module","value":"bank"}]},{"type":"coin_spent","attributes":[{"key":"spender","value":"0x1C893441AB6c1A75E01887087ea508bE8e07AAae"},{"key":"amount","value":"1000000000BNB"}]},{"type":"coin_received","attributes":[{"key":"receiver","value":"0x0000000000000000000000000000000000000000"},{"key":"amount","value":"1000000000BNB"}]},{"type":"transfer","attributes":[{"key":"recipient","value":"0x0000000000000000000000000000000000000000"},{"key":"sender","value":"0x1C893441AB6c1A75E01887087ea508bE8e07AAae"},{"key":"amount","value":"1000000000BNB"}]},{"type":"message","attributes":[{"key":"sender","value":"0x1C893441AB6c1A75E01887087ea508bE8e07AAae"}]}]}]\',\n  transactionHash: \'1B731E99A55868F773E9A7C951D9325BE7995616B990924D47491320599789DE\',\n  msgResponses: [\n    {\n      typeUrl: \'/cosmos.bank.v1beta1.MsgSendResponse\',\n      value: Uint8Array(0) []\n    }\n  ],\n  gasUsed: 1200n,\n  gasWanted: 1200n\n}\n'))))),(0,r.kt)("p",null,"More TxClient ",(0,r.kt)("a",{parentName:"p",href:"https://docs.bnbchain.org/greenfield-js-sdk/client/tx-client"},"References"),"."),(0,r.kt)("h2",{id:"make-a-storage-deal"},"Make a storage deal"),(0,r.kt)("p",null,"Storing data is one of the most important features of Greenfield. In this section, we\u2019ll walk through the end-to-end process of storing your data on the Greenfield network. We\u2019ll start by importing your data, then make a storage deal with a storage provider, and finally wait for the deal to complete."),(0,r.kt)("h3",{id:"0-create-the-main-file"},"0. Create the main file"),(0,r.kt)(s.Z,{groupId:"example",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"browser",label:"Browser",mdxType:"TabItem"},(0,r.kt)("p",null,"The browser doesn't need the main file.")),(0,r.kt)(l.Z,{value:"nodejs",label:"Nodejs",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"> touch storage.js\n")))),(0,r.kt)("h3",{id:"1-choose-your-own-sp"},"1. Choose your own SP"),(0,r.kt)("p",null,"You can query the list of SP:"),(0,r.kt)(s.Z,{groupId:"example",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"browser",label:"Browser",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="utils/offchainAuth.ts"',title:'"utils/offchainAuth.ts"'},"export const getSps = async () => {\n  const sps = await client.sp.getStorageProviders();\n  const finalSps = (sps ?? []).filter((v: any) => v.endpoint.includes('nodereal'));\n\n  return finalSps;\n};\n\nexport const getAllSps = async () => {\n  const sps = await getSps();\n\n  return sps.map((sp) => {\n    return {\n      address: sp.operatorAddress,\n      endpoint: sp.endpoint,\n      name: sp.description?.moniker,\n    };\n  });\n};\n\nexport const selectSp = async () => {\n  const finalSps = await getSps();\n\n  const selectIndex = Math.floor(Math.random() * finalSps.length);\n\n  const secondarySpAddresses = [\n    ...finalSps.slice(0, selectIndex),\n    ...finalSps.slice(selectIndex + 1),\n  ].map((item) => item.operatorAddress);\n  const selectSpInfo = {\n    id: finalSps[selectIndex].id,\n    endpoint: finalSps[selectIndex].endpoint,\n    primarySpAddress: finalSps[selectIndex]?.operatorAddress,\n    sealAddress: finalSps[selectIndex].sealAddress,\n    secondarySpAddresses,\n  };\n\n  return selectSpInfo;\n};\n\nconst getOffchainAuthKeys = async (address: string, provider: any) => {\n  const storageResStr = localStorage.getItem(address);\n\n  if (storageResStr) {\n    const storageRes = JSON.parse(storageResStr) as IReturnOffChainAuthKeyPairAndUpload;\n    if (storageRes.expirationTime < Date.now()) {\n      alert('Your auth key has expired, please generate a new one');\n      localStorage.removeItem(address);\n      return;\n    }\n\n    return storageRes;\n  }\n\n  const allSps = await getAllSps();\n  const offchainAuthRes = await client.offchainauth.genOffChainAuthKeyPairAndUpload(\n    {\n      sps: allSps,\n      chainId: GREEN_CHAIN_ID,\n      expirationMs: 5 * 24 * 60 * 60 * 1000,\n      domain: window.location.origin,\n      address,\n    },\n    provider,\n  );\n\n  const { code, body: offChainData } = offchainAuthRes;\n  if (code !== 0 || !offChainData) {\n    throw offchainAuthRes;\n  }\n\n  localStorage.setItem(address, JSON.stringify(offChainData));\n  return offChainData;\n};\n"))),(0,r.kt)(l.Z,{value:"nodejs",label:"Nodejs",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="storage.js"',title:'"storage.js"'},";(async () => {\n  // get storage providers list\n  const sps = await client.sp.getStorageProviders()\n\n  // choose the first up to be the primary SP\n  const primarySP = sps[0].operatorAddress;\n})()\n")))),(0,r.kt)("h3",{id:"2-create-your-bucket"},"2. Create your bucket"),(0,r.kt)("p",null,"Bucket can be private or public. You can customize it with options."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"VisibilityType"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"VISIBILITY_TYPE_PUBLIC_READ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"VISIBILITY_TYPE_PRIVATE"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="create bucket"',title:'"create','bucket"':!0},"import { Long, VisibilityType, RedundancyType, bytesFromBase64 } from '@bnb-chain/greenfield-js-sdk';\nconst createBucketTx = await client.bucket.createBucket(\n  {\n    bucketName: info.bucketName,\n    creator: address,\n    visibility: VisibilityType.VISIBILITY_TYPE_PUBLIC_READ,\n    chargedReadQuota: Long.fromString('0'),\n    primarySpAddress: spInfo.primarySpAddress,\n    paymentAddress: address,\n  },\n);\n\nconst simulateInfo = await createBucketTx.simulate({\n  denom: 'BNB',\n});\n\nconsole.log('simulateInfo', simulateInfo);\n\nconst res = await createBucketTx.broadcast({\n  denom: 'BNB',\n  gasLimit: Number(simulateInfo?.gasLimit),\n  gasPrice: simulateInfo?.gasPrice || '5000000000',\n  payer: address,\n  granter: '',\n});\n")),(0,r.kt)("h3",{id:"3-create-object-and-upload-object"},"3. Create Object and Upload Object"),(0,r.kt)("p",null,"Objects can also be private or public."),(0,r.kt)("p",null,"Getting the file's checksum needs ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/bnb-chain/greenfield-js-sdk/tree/main/packages/reed-solomon"},"reed-solomon"),":"),(0,r.kt)(s.Z,{groupId:"example",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"browser",label:"Browser",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { ReedSolomon } from '@bnb-chain/reed-solomon';\n\nconst rs = new ReedSolomon();\n\n// file is File type\nconst fileBytes = await file.arrayBuffer();\nconst expectCheckSums = rs.encode(new Uint8Array(fileBytes));\n"))),(0,r.kt)(l.Z,{value:"nodejs",label:"Nodejs",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const fs = require('node:fs');\nconst { NodeAdapterReedSolomon } = require('@bnb-chain/reed-solomon/node.adapter');\n\nconst filePath = './CHANGELOG.md';\nconst fileBuffer = fs.readFileSync(filePath);\nconst rs = new NodeAdapterReedSolomon();\nconst expectCheckSums = await rs.encodeInWorker(__filename, Uint8Array.from(fileBuffer));\n")))),(0,r.kt)("p",null,"Getting approval of creating an object and sending ",(0,r.kt)("inlineCode",{parentName:"p"},"createObject")," txn to the Greenfield network:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"const createObjectTx = await client.object.createObject(\n  {\n    bucketName: info.bucketName,\n    objectName: info.objectName,\n    creator: address,\n    visibility: VisibilityType.VISIBILITY_TYPE_PRIVATE,\n    contentType: fileType,\n    redundancyType: RedundancyType.REDUNDANCY_EC_TYPE,\n    payloadSize: Long.fromInt(fileBuffer.length),\n    expectChecksums: expectCheckSums.map((x) => bytesFromBase64(x)),\n  },\n);\n\nconst simulateInfo = await createObjectTx.simulate({\n  denom: 'BNB',\n});\n\nconst res = await createObjectTx.broadcast({\n  denom: 'BNB',\n  gasLimit: Number(simulateInfo?.gasLimit),\n  gasPrice: simulateInfo?.gasPrice || '5000000000',\n  payer: address,\n  granter: '',\n});\n")),(0,r.kt)("p",null,"Upload Object:"),(0,r.kt)(s.Z,{groupId:"example",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"browser",label:"Browser",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"await client.object.uploadObject(\n  {\n    bucketName: info.bucketName,\n    objectName: info.objectName,\n    body: info.file,\n    txnHash: txnHash,\n  },\n  {\n    type: 'EDDSA',\n    domain: window.location.origin,\n    seed: offChainData.seedString,\n    address,\n  },\n);\n"))),(0,r.kt)(l.Z,{value:"nodejs",label:"Nodejs",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"await client.object.uploadObject(\n  {\n      bucketName: bucketName,\n      objectName: objectName,\n      body: createFile(filePath),\n      txnHash: createObjectTxRes.transactionHash,\n  },\n  {\n      type: 'ECDSA',\n      privateKey: ACCOUNT_PRIVATEKEY,\n  }\n);\n\n// convert buffer to file\nfunction createFile(path) {\n  const stats = fs.statSync(path);\n  const fileSize = stats.size;\n\n  return {\n    name: path,\n    type: '',\n    size: fileSize,\n    content: fs.readFileSync(path),\n  }\n}\n")))),(0,r.kt)("h3",{id:"4-object-management"},"4. Object management"),(0,r.kt)("h4",{id:"41-download-object"},"4.1 Download object"),(0,r.kt)(s.Z,{groupId:"example",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"browser",label:"Browser",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"await client.object.downloadFile(\n  {\n    bucketName: info.bucketName,\n    objectName: info.objectName,\n  },\n  {\n    type: 'EDDSA',\n    address,\n    domain: window.location.origin,\n    seed: offChainData.seedString,\n  },\n);\n"))),(0,r.kt)(l.Z,{value:"nodejs",label:"Nodejs",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="manage.js"',title:'"manage.js"'},";(async () => {\n\n  // download object\n  const res = await client.object.getObject({\n    bucketName: 'extfkdcxxd',\n    objectName: 'yhulwcfxye'\n  }, {\n    type: 'ECDSA',\n    privateKey: ACCOUNT_PRIVATEKEY,\n  })\n\n  // res.body is Blob\n  console.log('res', res)\n  const buffer = Buffer.from([res.body]);\n  fs.writeFileSync('your_output_file', buffer)\n})()\n")))),(0,r.kt)("h4",{id:"42-update-object-visibility"},"4.2 Update object visibility"),(0,r.kt)(s.Z,{groupId:"example",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"browser",label:"Browser",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"const tx = await client.object.updateObjectInfo({\n  bucketName: info.bucketName,\n  objectName: info.objectName,\n  operator: address,\n  visibility: 1,\n});\n\nconst simulateTx = await tx.simulate({\n  denom: 'BNB',\n});\n\nconst res = await tx.broadcast({\n  denom: 'BNB',\n  gasLimit: Number(simulateTx?.gasLimit),\n  gasPrice: simulateTx?.gasPrice || '5000000000',\n  payer: address,\n  granter: '',\n});\n"))),(0,r.kt)(l.Z,{value:"nodejs",label:"Nodejs",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const tx = await client.object.updateObjectInfo({\n  bucketName: 'extfkdcxxd',\n  objectName: 'yhulwcfxye',\n  operator: ACCOUNT_ADDRESS,\n  visibility: 1,\n})\n\nconst simulateTx = await tx.simulate({\n  denom: 'BNB',\n})\n\nconst createObjectTxRes = await tx.broadcast({\n  denom: 'BNB',\n  gasLimit: Number(simulateTx?.gasLimit),\n  gasPrice: simulateTx?.gasPrice || '5000000000',\n  payer: ACCOUNT_ADDRESS,\n  granter: '',\n  privateKey: ACCOUNT_PRIVATEKEY,\n});\n")))),(0,r.kt)("h4",{id:"43-delete-object"},"4.3 Delete Object"),(0,r.kt)(s.Z,{groupId:"example",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"browser",label:"Browser",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"const tx = await client.object.deleteObject({\n  bucketName: info.bucketName,\n  objectName: info.objectName,\n  operator: address,\n});\n\nconst simulateTx = await tx.simulate({\n  denom: 'BNB',\n});\n\nconst res = await tx.broadcast({\n  denom: 'BNB',\n  gasLimit: Number(simulateTx?.gasLimit),\n  gasPrice: simulateTx?.gasPrice || '5000000000',\n  payer: address,\n  granter: '',\n});\n"))),(0,r.kt)(l.Z,{value:"nodejs",label:"Nodejs",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},";(async () => {\n  const tx = await client.object.deleteObject({\n    bucketName: 'extfkdcxxd',\n    objectName: 'yhulwcfxye',\n    operator: ACCOUNT_ADDRESS,\n  });\n\n  const simulateTx = await tx.simulate({\n    denom: 'BNB',\n  })\n\n  const createObjectTxRes = await tx.broadcast({\n    denom: 'BNB',\n    gasLimit: Number(simulateTx?.gasLimit),\n    gasPrice: simulateTx?.gasPrice || '5000000000',\n    payer: ACCOUNT_ADDRESS,\n    granter: '',\n    privateKey: ACCOUNT_PRIVATEKEY,\n  });\n\n  if (createObjectTxRes.code === 0) {\n    console.log('delete object success')\n  }\n})()\n")))),(0,r.kt)("h2",{id:"conclusion"},"Conclusion"),(0,r.kt)("p",null,"Congratulations on making it through this tutorial! In this tutorial, we learned the basics of interacting with the Greenfield network using the SDK library."),(0,r.kt)("h3",{id:"tutorials-source-code"},"Tutorials Source Code"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/bnb-chain/greenfield-js-sdk/tree/main/examples/nodejs-file-management"},"Nodejs File Management")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/bnb-chain/greenfield-js-sdk/tree/main/examples/browser-file-management"},"Browser File Management"))))}b.isMDXComponent=!0}}]);