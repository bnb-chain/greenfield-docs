"use strict";(self.webpackChunkgreenfield_docs=self.webpackChunkgreenfield_docs||[]).push([[4771],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=o.createContext({}),s=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(n),m=a,g=u["".concat(c,".").concat(m)]||u[m]||d[m]||r;return n?o.createElement(g,l(l({ref:t},p),{},{components:n})):o.createElement(g,l({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var s=2;s<r;s++)l[s]=n[s];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},41666:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>s});var o=n(87462),a=(n(67294),n(3905));const r={title:"Access Control Management with CLI",order:2},l="Access Control Management with CLI",i={unversionedId:"tutorials/get-started/cmd-access-control",id:"tutorials/get-started/cmd-access-control",title:"Access Control Management with CLI",description:"Background",source:"@site/docs/tutorials/get-started/cmd-access-control.md",sourceDirName:"tutorials/get-started",slug:"/tutorials/get-started/cmd-access-control",permalink:"/greenfield-docs/docs/tutorials/get-started/cmd-access-control",draft:!1,editUrl:"https://github.com/bnb-chain/greenfield-docs/blob/main/docs/tutorials/get-started/cmd-access-control.md",tags:[],version:"current",frontMatter:{title:"Access Control Management with CLI",order:2},sidebar:"tutorialsSidebar",previous:{title:"Basic File Management with CLI",permalink:"/greenfield-docs/docs/tutorials/get-started/file-management/overview"},next:{title:"Overview",permalink:"/greenfield-docs/docs/tutorials/app/overview"}},c={},s=[{value:"Background",id:"background",level:2},{value:"Verifying the Environment",id:"verifying-the-environment",level:2},{value:"Query Bucket Info",id:"query-bucket-info",level:2},{value:"Access Control Management Workflow with Group",id:"access-control-management-workflow-with-group",level:2},{value:"Group Operations",id:"group-operations",level:3},{value:"Policy Operations",id:"policy-operations",level:3},{value:"Update Access Control with Group",id:"update-access-control-with-group",level:3},{value:"Remove a member from group:",id:"remove-a-member-from-group",level:4},{value:"Add expiretime for membership",id:"add-expiretime-for-membership",level:4},{value:"Remove Policy",id:"remove-policy",level:4},{value:"Conclusion",id:"conclusion",level:2}],p={toc:s},u="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"access-control-management-with-cli"},"Access Control Management with CLI"),(0,a.kt)("h2",{id:"background"},"Background"),(0,a.kt)("p",null,"In our last tutorial, we have guided you through the process of setting up your environment, installing the necessary tools, and effectively backing up your files to BNB Greenfield, leveraging the benefits of decentralized storage while ensuring data security and ownership."),(0,a.kt)("p",null,"To dive furthur into advanced concepts of Greenfield, we will  cover how to handle objects access control with the CLI tool, manage your groups and polocoes."),(0,a.kt)("h2",{id:"verifying-the-environment"},"Verifying the Environment"),(0,a.kt)("p",null,"Please refer to ",(0,a.kt)("a",{parentName:"p",href:"/greenfield-docs/docs/tutorials/get-started/file-management/overview#Installation"},"this doc")," to make sure you have completed installation of ",(0,a.kt)("inlineCode",{parentName:"p"},"gnfd-cmd")," and setting up your accounts."),(0,a.kt)("h2",{id:"query-bucket-info"},"Query Bucket Info"),(0,a.kt)("p",null,"To query the bucket, execute:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"./gnfd-cmd bucket head gnfd://website-bucket\n")),(0,a.kt)("p",null,"You should be able to see"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'latest bucket info:\nowner:"0x525482AB3922230e4D73079890dC905dCc3D37cd"\nbucket_name:"website-bucket"\nvisibility:VISIBILITY_TYPE_PRIVATE\nid:"3101"\ncreate_at:2023-10-31 01:17:15\npayment_address:"0x525482AB3922230e4D73079890dC905dCc3D37cd"\nglobal_virtual_group_family_id:40\n')),(0,a.kt)("h2",{id:"access-control-management-workflow-with-group"},"Access Control Management Workflow with Group"),(0,a.kt)("p",null,"To manage how users can access your files, you have to follow this process:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Set ",(0,a.kt)("inlineCode",{parentName:"li"},"Principle Address")," which has the administrator role"),(0,a.kt)("li",{parentName:"ol"},"Customize groups members"),(0,a.kt)("li",{parentName:"ol"},"Customize access policy, which may depends on different circustances"),(0,a.kt)("li",{parentName:"ol"},"Bind/unbind policy with group")),(0,a.kt)("h3",{id:"group-operations"},"Group Operations"),(0,a.kt)("p",null,"The group commands is used to create group, update group members, delete group and query group info."),(0,a.kt)("p",null,"To create a group one need to call the following storage ",(0,a.kt)("inlineCode",{parentName:"p"},"create group")," command with the desired group name."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"// create group\ngnfd-cmd group create gnfd://website-group\n")),(0,a.kt)("p",null,"The operation will submit a transaction to BNB Greenfield blockchain to write the associated metadata. The result should look something similar to the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"make_group: gnfd://website-group\ntransaction hash: A1FD3A0E2A337716C344392B840DCC8E804553AF42504FBD6F4C46B9C5B8FAF9\ngroup id: 712\n")),(0,a.kt)("p",null,"As you can see, the result returns a transaction hash, which one can inspect using the block scanner, e.g. ",(0,a.kt)("a",{parentName:"p",href:"https://greenfieldscan.com/"},"https://greenfieldscan.com"),". Going to ",(0,a.kt)("a",{parentName:"p",href:"https://testnet.greenfieldscan.com/tx/A1FD3A0E2A337716C344392B840DCC8E804553AF42504FBD6F4C46B9C5B8FAF9"},"https://testnet.greenfieldscan.com/tx/A1FD3A0E2A337716C344392B840DCC8E804553AF42504FBD6F4C46B9C5B8FAF9"),", will show all the details of the transaction."),(0,a.kt)("p",null,"Add a new member to the group"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"// update group member\ngnfd-cmd group update --addMembers 0x843e77D639b6C382e91ef489881963209cB238E5 gnfd://website-group\n")),(0,a.kt)("p",null,"To verify the new member is indeed part of the group"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"// head group member\ngnfd-cmd group head-member  0x843e77D639b6C382e91ef489881963209cB238E5 website-group\n")),(0,a.kt)("p",null,"The result should look something similar to the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"the user 0x843e77D639b6C382e91ef489881963209cB238E5 is a member of the group: gnfd://website-group\n")),(0,a.kt)("h3",{id:"policy-operations"},"Policy Operations"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"gnfd-cmd policy")," command supports the policy for put/delete resources policy(including objects, buckets, and groups) to the principal."),(0,a.kt)("p",null,"The principal is need to be set by ",(0,a.kt)("inlineCode",{parentName:"p"},"--grantee")," which indicates a greenfield account or ",(0,a.kt)("inlineCode",{parentName:"p"},"--groupId")," which indicates group id."),(0,a.kt)("p",null,'The object policy action can be "create", "delete", "copy", "get" , "execute", "list" or "all". The bucket policy actions can be "update", "delete", "create", "list", "update", "getObj", "createObj" and so on. The group policy actions can be "update", "delete" or all, update indicates the update-group-member action.'),(0,a.kt)("p",null,"In this example, the principal grants the ",(0,a.kt)("inlineCode",{parentName:"p"},"delete bucket"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"update bucket")," access to this group"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"// grant bucket operation permissions to a group\ngnfd-cmd policy put --groupId 712 --actions delete,update,createObj,getObj grn:b::website-bucket\n")),(0,a.kt)("p",null,"The result should look something similar to the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'put policy of the bucket:website-bucket succ, txn hash: 63735FBF6BDFF95AEED9B8BC8D794474431C77E7EBF768BFAA9E3F7CFB25FF97\nlatest bucket policy info:\n id:"2316" principal:<type:PRINCIPAL_TYPE_GNFD_GROUP value:"172" > resource_type:RESOURCE_TYPE_BUCKET resource_id:"3101" statements:<effect:EFFECT_ALLOW actions:ACTION_DELETE_BUCKET actions:ACTION_UPDATE_BUCKET_INFO actions:ACTION_CREATE_OBJECT >\n')),(0,a.kt)("p",null,"As you can see, the result returns a transaction hash, which one can inspect using the block scanner, e.g. ",(0,a.kt)("a",{parentName:"p",href:"https://greenfieldscan.com/"},"https://greenfieldscan.com"),". Going to ",(0,a.kt)("a",{parentName:"p",href:"https://testnet.greenfieldscan.com/tx/63735FBF6BDFF95AEED9B8BC8D794474431C77E7EBF768BFAA9E3F7CFB25FF97"},"https://testnet.greenfieldscan.com/tx/63735FBF6BDFF95AEED9B8BC8D794474431C77E7EBF768BFAA9E3F7CFB25FF97"),", will show all the details of the ",(0,a.kt)("inlineCode",{parentName:"p"},"put policy")," transaction."),(0,a.kt)("p",null,"Upload a private file with principal account:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'gnfd-cmd object put --contentType "text/xml" --visibility private ./website/index.html gnfd://website-bucket/index.html\n')),(0,a.kt)("p",null,"In this example, the principal grants the ",(0,a.kt)("inlineCode",{parentName:"p"},"delete object"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"update object")," access to this group"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"// grant object operation permissions to a group\ngnfd-cmd policy put --groupId 712 --actions get,delete grn:o::website-bucket/index.html\n")),(0,a.kt)("p",null,"The result should look something similar to the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'put policy of the object:index.html succ, txn hash: BD2E3F74B2FBD18300B2C313E8F0393426C851EC3A9153F37DFD6CDC10F92FF8\nlatest object policy info:\n id:"2318" principal:<type:PRINCIPAL_TYPE_GNFD_GROUP value:"712" > resource_type:RESOURCE_TYPE_OBJECT resource_id:"187293" statements:<effect:EFFECT_ALLOW actions:ACTION_GET_OBJECT actions:ACTION_DELETE_OBJECT >\n')),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Transaction Details",src:n(68969).Z,width:"1844",height:"634"})),(0,a.kt)("p",null,"To verify the group policy is working, you can try view the private object with account ",(0,a.kt)("inlineCode",{parentName:"p"},"0x843e77D639b6C382e91ef489881963209cB238E5"),"."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Go to explorer and find the detail page of the private object."),(0,a.kt)("li",{parentName:"ol"},'Click on "Preview" button'),(0,a.kt)("li",{parentName:"ol"},"Unlock your wallet and choose the right address. Then, you should be able to view the html file.")),(0,a.kt)("p",null,"or you can download the file with ",(0,a.kt)("inlineCode",{parentName:"p"},"gnfd-cmd")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"./gnfd-cmd object get  gnfd://website-bucket/index.html\n")),(0,a.kt)("h3",{id:"update-access-control-with-group"},"Update Access Control with Group"),(0,a.kt)("p",null,"The command to update a group is very simple."),(0,a.kt)("h4",{id:"remove-a-member-from-group"},"Remove a member from group:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"// update group member\ngnfd-cmd group update --removeMembers 0xca807A58caF20B6a4E3eDa3531788179E5bc816b gnfd://groupname\n\n")),(0,a.kt)("h4",{id:"add-expiretime-for-membership"},"Add expiretime for membership"),(0,a.kt)("p",null,"You can set the expire timestamp for the newly added member. The default value is no experiation."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"// update group member\ngnfd-cmd group update --removeMembers 0xca807A58caF20B6a4E3eDa3531788179E5bc816b gnfd://groupname --expireTime 1699699763\n\n")),(0,a.kt)("h4",{id:"remove-policy"},"Remove Policy"),(0,a.kt)("p",null,"Here is an example to delete a policy"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Delete a policy for an adress")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"gnfd-cmd policy rm --grantee 0x843e77D639b6C382e91ef489881963209cB238E5 --actions get grn:o::website-bucket/index.html\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Delete a policy for a group")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"gnfd-cmd policy rm --groupId 111 --actions get grn:o::website-bucket/index.html\n")),(0,a.kt)("h2",{id:"conclusion"},"Conclusion"),(0,a.kt)("p",null,"Overall, the access control management of Greenfield is very powerful and can be used in many scenarios.\nIt is highly recommended for users to engage in hands-on exploration by trying out different account group management operations and permissioning mechanisms. This will provide a deeper understanding of how BNB Greenfield functions and how to effectively manage and secure data within the decentralized storage system."))}d.isMDXComponent=!0},68969:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/view_private_file-8323f96bb1989cb022fb27c3c6c4ea77.png"}}]);