"use strict";(self.webpackChunkgreenfield_docs=self.webpackChunkgreenfield_docs||[]).push([[6916],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,h=p["".concat(l,".").concat(m)]||p[m]||u[m]||i;return n?r.createElement(h,o(o({ref:t},d),{},{components:n})):r.createElement(h,o({ref:t},d))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},79432:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const i={title:"Storage Provider Lifecycle",order:8},o="Storage Provider Lifecycle",s={unversionedId:"guide/core-concept/storage-provider-lifecycle",id:"guide/core-concept/storage-provider-lifecycle",title:"Storage Provider Lifecycle",description:"This document describes the entire lifecycle of a storage provider from joining the Greenfield Storage Network to exiting.",source:"@site/docs/guide/core-concept/storage-provider-lifecycle.md",sourceDirName:"guide/core-concept",slug:"/guide/core-concept/storage-provider-lifecycle",permalink:"/greenfield-docs/docs/guide/core-concept/storage-provider-lifecycle",draft:!1,editUrl:"https://github.com/bnb-chain/greenfield-docs/blob/main/docs/guide/core-concept/storage-provider-lifecycle.md",tags:[],version:"current",frontMatter:{title:"Storage Provider Lifecycle",order:8},sidebar:"guideSidebar",previous:{title:"Transaction Lifecycle",permalink:"/greenfield-docs/docs/guide/core-concept/transaction-lifecycle"},next:{title:"Data Storage",permalink:"/greenfield-docs/docs/guide/core-concept/data-storage"}},l={},c=[{value:"Preparation",id:"preparation",level:2},{value:"Proposal",id:"proposal",level:2},{value:"In Service",id:"in-service",level:2},{value:"In Maintenance",id:"in-maintenance",level:2},{value:"Exit",id:"exit",level:2},{value:"Graceful Exit",id:"graceful-exit",level:3},{value:"Forced Exit",id:"forced-exit",level:3}],d={toc:c},p="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"storage-provider-lifecycle"},"Storage Provider Lifecycle"),(0,a.kt)("p",null,"This document describes the entire lifecycle of a storage provider from joining the Greenfield Storage Network to exiting."),(0,a.kt)("h2",{id:"preparation"},"Preparation"),(0,a.kt)("p",null,"First, the storage provider needs to learn how to run and create a storage provider node, which requires several different user accounts and a unified external EndPoint."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Follow Recommended Prerequisites to get ready"),(0,a.kt)("li",{parentName:"ul"},"Create the required accounts, E.g operator/fundig/seal/approval/gv/bls"),(0,a.kt)("li",{parentName:"ul"},"Run all services of Storage Provider")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"For more information, please see ",(0,a.kt)("a",{parentName:"p",href:"/greenfield-docs/docs/guide/storage-provider/run-book/run-SP-node"},"Run Storage Provider"))),(0,a.kt)("h2",{id:"proposal"},"Proposal"),(0,a.kt)("p",null,"The Storage Provider (SP) must initiate an on-chain proposal that outlines the Msg information to be automatically executed after receiving approval through the voting process. Specifically, the Msg in this case is ",(0,a.kt)("inlineCode",{parentName:"p"},"MsgCreateStorageProvider"),". It's essential to ensure that the deposit tokens exceed the minimum deposit tokens specified on the chain."),(0,a.kt)("p",null,"Below are the required fields that need to be modified in the proposal:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Addresses:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"sp_address: The address of the storage provider that will be added to the network."),(0,a.kt)("li",{parentName:"ul"},"seal_address: The address used for sealing object"),(0,a.kt)("li",{parentName:"ul"},"approval_address: The address responsible for approving bucket/object creation."),(0,a.kt)("li",{parentName:"ul"},"gc_address: The address for garbage collection."),(0,a.kt)("li",{parentName:"ul"},"maintenance_address: The address is used for testing while in maintenance mode."))),(0,a.kt)("li",{parentName:"ul"},"EndPoint: Details of the endpoint where the SP will serve data requests."),(0,a.kt)("li",{parentName:"ul"},"Quota & Price:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"read_price: The cost in Gwei per byte per second for read operations."),(0,a.kt)("li",{parentName:"ul"},"stora_price: The cost in Gwei per byte per second for data storage"),(0,a.kt)("li",{parentName:"ul"},"free_read_quota: The default free read quota allocated to users (e.g., 10GB)."))),(0,a.kt)("li",{parentName:"ul"},"Deposit for SP Staking:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"The SP must stake at least 1000 BNB (Binance Coin) in the testnet as a commitment to providing storage services."))),(0,a.kt)("li",{parentName:"ul"},"Deposit for Proposal:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"The proposal itself must have a deposit of at least 1 BNB in the testnet.")))),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"For more information, please see ",(0,a.kt)("a",{parentName:"p",href:"/greenfield-docs/docs/guide/storage-provider/run-book/join-SP-network"},"Add Storage Provider to Greenfield Network"))),(0,a.kt)("p",null,"Initiating this on-chain proposal with the necessary modifications and deposits is a crucial step for the SP to become an active participant in the Greenfield network, offering reliable and secure storage services to users. By complying with the proposal requirements, the SP can enhance its reputation and attract more users, contributing to the growth and success of the decentralized storage ecosystem."),(0,a.kt)("h2",{id:"in-service"},"In Service"),(0,a.kt)("p",null,"During the in-service status, Storage Providers (SPs) actively engage in the network's daily operations. They handle a variety of user requests, including data storage, retrieval, and other storage-related operations."),(0,a.kt)("p",null,"SPs assume a critical role in maintaining the availability, integrity, and confidentiality of the data they store. As gatekeepers of user access, they enforce proper authentication and authorization procedures to safeguard data from unauthorized access or tampering."),(0,a.kt)("p",null,"At this stage, SPs must create virtual groups within the Greenfield network to efficiently serve buckets and objects. These virtual groups, resembling disk sectors, allow SPs to manage data storage in a more organized and optimized manner. By associating objects with virtual groups, SPs can limit the range of secondary storage providers responsible for storing object replica data, which enhances data redundancy and resilience."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"for more information, please see ",(0,a.kt)("a",{parentName:"p",href:"/greenfield-docs/docs/guide/greenfield-blockchain/modules/virtual-group#abstract"},"Virtual Group"))),(0,a.kt)("p",null,"Additionally, SPs are required to provide corresponding stakes for the amount of data they store. This staking mechanism further incentivizes SPs to offer reliable and high-quality services to users. By staking tokens or digital assets, SPs demonstrate their commitment to maintaining a robust and trustworthy network, aligning their interests with the overall security and success of the storage ecosystem."),(0,a.kt)("p",null,"Moreover, the creation of virtual groups and staking helps to disentangle the interdependency between buckets/objects and SPs. By doing so, SPs mitigate the need for an extensive volume of transactions when modifying on-chain BucketInfo and ObjectInfo during SP exits and bucket migrations. This leads to more efficient network management and smoother transitions during changes in the network's composition."),(0,a.kt)("p",null,"As SPs continue to serve user needs and actively participate in network operations, their reputation and service quality become paramount. A positive reputation score is crucial for attracting more users to store their data with a particular SP. Through continuous improvement and adaptation, SPs can enhance their services, increase storage capacity, and maintain a competitive edge in the dynamic decentralized storage market."),(0,a.kt)("h2",{id:"in-maintenance"},"In Maintenance"),(0,a.kt)("p",null,"The maintenance mode for service providers (SPs) is a status in which SPs do not serve any create/upload requests from users. There are two circumstances in which an SP can be in maintenance mode:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"When an SP joins the network after a proposal has passed, it will stay in ",(0,a.kt)("inlineCode",{parentName:"li"},"STATUS_IN_MAINTENANCE")," until it sends a transaction\nincluding msg ",(0,a.kt)("inlineCode",{parentName:"li"},"MsgUpdateStorageProviderStatus")," to Greenfield to change its status to ",(0,a.kt)("inlineCode",{parentName:"li"},"STATUS_IN_SERVICE"),"."),(0,a.kt)("li",{parentName:"ol"},"If an SP is already in service, it can send a transaction with msg ",(0,a.kt)("inlineCode",{parentName:"li"},"MsgUpdateStorageProviderStatus")," to Greenfield and request a maintenance duration,\nif there are no restrictions violated, the SP is allowed to enter maintenance mode immediately.",(0,a.kt)("admonition",{parentName:"li",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Note: The SP needs to send a transaction to Greenfield to update its status back ",(0,a.kt)("inlineCode",{parentName:"p"},"STATUS_IN_SERVICE")," before its request duration ends, or Greenfield would do it mandatorily.")))),(0,a.kt)("p",null,"There are two restrictions that apply when an SP requests to be in maintenance. These restrictions work with the parameters ",(0,a.kt)("inlineCode",{parentName:"p"},"num_of_historical_blocks_for_maintenance_records"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"maintenance_duration_quota")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"num_of_lockup_blocks_for_maintenance"),". Refer to ",(0,a.kt)("a",{parentName:"p",href:"/greenfield-docs/docs/guide/greenfield-blockchain/modules/storage-provider#params"},"Params")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The total maintenance duration for each SP, within the number of blocks defined by ",(0,a.kt)("inlineCode",{parentName:"li"},"num_of_historical_blocks_for_maintenance_records"),", should not exceed the ",(0,a.kt)("inlineCode",{parentName:"li"},"maintenance_duration_quota"),"."),(0,a.kt)("li",{parentName:"ul"},"An SP is not allowed to make two consecutive requests to ",(0,a.kt)("inlineCode",{parentName:"li"},"STATUS_IN_MAINTENANCE")," within ",(0,a.kt)("inlineCode",{parentName:"li"},"num_of_lockup_blocks_for_maintenance"),", even if there are enough quotas for it.")),(0,a.kt)("p",null,"To ensure the quality of service provided, we strongly recommend that SPs conduct a self-test via the maintenance account before turning back to ",(0,a.kt)("inlineCode",{parentName:"p"},"STATUS_IN_SERVICE"),". This includes creating buckets/objects to verify that all functionalities work as expected. For a detailed illustration on how to use SDK to create bucket/object, please refer to the ",(0,a.kt)("a",{parentName:"p",href:"/greenfield-docs/docs/sdks/"},"SDKs"),"."),(0,a.kt)("h2",{id:"exit"},"Exit"),(0,a.kt)("p",null,"There are two types of exit based on the behavior and choices of the SP: Graceful Exit and Forced Exit."),(0,a.kt)("h3",{id:"graceful-exit"},"Graceful Exit"),(0,a.kt)("p",null,"At some point, the SP may choose to voluntarily exit the Greenfield storage network for various reasons.\nEnsuring a graceful exit process is crucial to ensure a seamless transition of responsibilities and data to other SPs.\nDuring the exit process, the SP must continue to fulfill user serve user querying requests, Once the exit process is\nsuccessfully completed, the SP can retrieve all the staked BNB."),(0,a.kt)("p",null,"To execute a graceful exit, all its stored data need to be migrated to other successor SPs that are willing to take over.",(0,a.kt)("br",{parentName:"p"}),"\n","This data migration process involves recovering data from the exiting SP by successor SPs in a secure and efficient manner.\nAfter the exit SP sending a ",(0,a.kt)("inlineCode",{parentName:"p"},"StorageProviderExit")," transaction to the Greenfield Blockchain, its status will turn to ",(0,a.kt)("inlineCode",{parentName:"p"},"STATUS_GRACEFUL_EXITING"),".\nA successor SP can initiate the recovery process by first sending a ",(0,a.kt)("inlineCode",{parentName:"p"},"ReserveSwapIn")," transaction to the Greenfield Blockchain, reserving the\nexit SP's position in the respective Global Virtual Group (GVG) or GVG Family so that it will be allowed to recover data from other SPs.\nOnce the successor SP successfully takes over all data in a GVG or GVG Family, it will send a ",(0,a.kt)("inlineCode",{parentName:"p"},"CompleteSwapIn")," transaction to the Greenfield Blockchain,\nconfirming the completion of the data transfer process."),(0,a.kt)("p",null,"Greenfield Blockchain incorporates an effective consensus mechanism to facilitate and validate the graceful exit process.\nThis mechanism ensures that the exit is carried out transparently, maintaining the network's integrity and preventing\nany disruptions or data loss during the transition."),(0,a.kt)("p",null,"To ensure the safe and reliable migration of data, frequent data challenges are applied to the SPs that take over the data.\nThese challenges are designed to verify the integrity and consistency of the migrated data, reassuring users that their data remains secure and accessible."),(0,a.kt)("h3",{id:"forced-exit"},"Forced Exit"),(0,a.kt)("p",null,"An uncooperative SP no longer wishes to provide service and refuses to go through the standard graceful exit process. In such a case,\nGreenfield governance will force the SP to exit, make it enter ",(0,a.kt)("inlineCode",{parentName:"p"},"STATUS_FORCED_EXITING"),". The data recovery process for successor SP is the same as graceful exit mentioned above.\nHowever, a forced exit SP will face penalties, and its staked BNB will be locked into the Payment module governance account, this payment account is used to receive forced settlement fee, and pay for potential debt from late forced settlement."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"for more information, please see ",(0,a.kt)("a",{parentName:"p",href:"/greenfield-docs/docs/guide/greenfield-blockchain/modules/virtual-group#sp-exit-workflow"},"SP exit"))))}u.isMDXComponent=!0}}]);