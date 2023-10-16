"use strict";(self.webpackChunkgreenfield_docs=self.webpackChunkgreenfield_docs||[]).push([[4382],{65488:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(87462),r=n(67294),o=n(86010),l=n(72389),s=n(67392),i=n(7094),c=n(12466);const u={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function p(e){const{lazy:t,block:n,defaultValue:l,values:p,groupId:d,className:m}=e,h=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=p??h.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),g=(0,s.l)(k,((e,t)=>e.value===t.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const f=null===l?l:l??h.find((e=>e.props.default))?.props.value??h[0].props.value;if(null!==f&&!k.some((e=>e.value===f)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${f}" but none of its children has the corresponding value. Available values are: ${k.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:b,setTabGroupChoices:x}=(0,i.U)(),[y,v]=(0,r.useState)(f),N=[],{blockElementScrollPositionUntilNextRender:w}=(0,c.o5)();if(null!=d){const e=b[d];null!=e&&e!==y&&k.some((t=>t.value===e))&&v(e)}const C=e=>{const t=e.currentTarget,n=N.indexOf(t),a=k[n].value;a!==y&&(w(t),v(a),null!=d&&x(d,String(a)))},A=e=>{let t=null;switch(e.key){case"Enter":C(e);break;case"ArrowRight":{const n=N.indexOf(e.currentTarget)+1;t=N[n]??N[0];break}case"ArrowLeft":{const n=N.indexOf(e.currentTarget)-1;t=N[n]??N[N.length-1];break}}t?.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",u.tabList)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},m)},k.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,key:t,ref:e=>N.push(e),onKeyDown:A,onClick:C},l,{className:(0,o.Z)("tabs__item",u.tabItem,l?.className,{"tabs__item--active":y===t})}),n??t)}))),t?(0,r.cloneElement)(h.filter((e=>e.props.value===y))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},h.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==y})))))}function d(e){const t=(0,l.Z)();return r.createElement(p,(0,a.Z)({key:String(t)},e))}},99280:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>p});var a=n(87462),r=(n(67294),n(3905)),o=n(65488),l=n(85162);const s={title:"How to develop BSC smart contract for Greenfield",order:3},i="Quick Start",c={unversionedId:"tutorials/dapp/quick-start",id:"tutorials/dapp/quick-start",title:"How to develop BSC smart contract for Greenfield",description:"In this guide, we will walk you through the process of data permission management using the BSC smart contract as a simple howcase of cross chain program-ability of Greenfield.",source:"@site/docs/tutorials/dapp/quick-start.mdx",sourceDirName:"tutorials/dapp",slug:"/tutorials/dapp/quick-start",permalink:"/greenfield-docs/docs/tutorials/dapp/quick-start",draft:!1,editUrl:"https://github.com/bnb-chain/greenfield-docs/blob/main/docs/tutorials/dapp/quick-start.mdx",tags:[],version:"current",frontMatter:{title:"How to develop BSC smart contract for Greenfield",order:3},sidebar:"tutorialsSidebar",previous:{title:"Overview",permalink:"/greenfield-docs/docs/tutorials/dapp/overview"},next:{title:"Integrating BSC Smart Contracts with Greenfield Projects",permalink:"/greenfield-docs/docs/tutorials/dapp/dapp-integration"}},u={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Steps",id:"steps",level:3}],d={toc:p},m="wrapper";function h(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"quick-start"},"Quick Start"),(0,r.kt)("p",null,"In this guide, we will walk you through the process of data permission management using the BSC smart contract as a simple howcase of cross chain program-ability of Greenfield."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"Before starting, make sure you have the following tools installed:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/bnb-chain/greenfield-cmd"},"gnfd-cmd")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/bnb-chain/greenfield-contracts"},"gnfd-contract"))),(0,r.kt)("p",null,"Please follow the readme of the above two repositories to install the tools and configure the environment."),(0,r.kt)("p",null,"Ensure you get an account that get funds on both BSC and Greenfield network."),(0,r.kt)("h3",{id:"steps"},"Steps"),(0,r.kt)("p",null,"In the following example, Account A(0x0fEd1aDD48b497d619EF50160f9135c6E221D5F0, stored in ",(0,r.kt)("inlineCode",{parentName:"p"},"keyA.json"),") will grant Account B(0x3bD70E10D71C6E882E3C1809d26a310d793646eB, stored in ",(0,r.kt)("inlineCode",{parentName:"p"},"keyB.json"),")\nthe access to his private file through BSC contract."),(0,r.kt)("p",null,"Besides, you can save the password to a file and use ",(0,r.kt)("inlineCode",{parentName:"p"},"-p")," to specify the password file. For example, ",(0,r.kt)("inlineCode",{parentName:"p"},"gnfd-cmd -p password.txt ..."),"."),(0,r.kt)("p",null,"Before starting, please make sure you created related accounts by ",(0,r.kt)("inlineCode",{parentName:"p"},"gnfd-cmd account import")," or  ",(0,r.kt)("inlineCode",{parentName:"p"},"gnfd-cmd account new")," and have the config.toml file in the current directory.\nPlease note that the account should have enough balance before sending transactions to greenfield."),(0,r.kt)("p",null,"The content of the ",(0,r.kt)("inlineCode",{parentName:"p"},"config.toml")," is as follows:"),(0,r.kt)(o.Z,{defaultValue:"mainnet",values:[{label:"Mainnet",value:"mainnet"},{label:"Testnet",value:"testnet"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"mainnet",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'rpcAddr = "https://greenfield-chain.bnbchain.org:443"\nchainId = "greenfield_1017-1"\n'))),(0,r.kt)(l.Z,{value:"testnet",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'rpcAddr = "https://gnfd-testnet-fullnode-tendermint-us.bnbchain.org:443"\nchainId = "greenfield_5600-1"\n')))),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Prepare environment")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ export AccountA=0x0fEd1aDD48b497d619EF50160f9135c6E221D5F0\n$ export AccountB=0x3bD70E10D71C6E882E3C1809d26a310d793646eB\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Create a temporary file ",(0,r.kt)("inlineCode",{parentName:"li"},"story.txt"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'$ echo "this is a fun story" > story.txt \n')),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Create a bucket named ",(0,r.kt)("inlineCode",{parentName:"li"},"funbucket"),".")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ gnfd-cmd -c config.toml -k keyA.json -p password.txt bucket create gnfd://funbucket\n")),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"Create a private object named ",(0,r.kt)("inlineCode",{parentName:"li"},"story.txt")," in the bucket ",(0,r.kt)("inlineCode",{parentName:"li"},"funbucket"),".")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'$ gnfd-cmd -c config.toml -k keyA.json -p password.txt object put --contentType "text/xml" --visibility private ./story.txt  gnfd://funbucket/story.txt\n')),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},"Create a group named ",(0,r.kt)("inlineCode",{parentName:"li"},"fungroup"),".")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ gnfd-cmd -c config.toml -k keyA.json -p password.txt group create fungroup\ncreate group: fungroup succ, txn hash:17B6AE2C8D30B6D6EEABEE81DB8B37CF735655E9087CB02DC98EFF1DCA9FBE3A, group id: 136 \n")),(0,r.kt)("p",null,"The console will return the id of the group, which is ",(0,r.kt)("inlineCode",{parentName:"p"},"136")," in this case."),(0,r.kt)("ol",{start:6},(0,r.kt)("li",{parentName:"ol"},"Bind the group ",(0,r.kt)("inlineCode",{parentName:"li"},"fungroup")," to the object ",(0,r.kt)("inlineCode",{parentName:"li"},"story.txt"),".")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"## Example, replace the ${GroupId} with the group id you get in the previous step\n$ export GroupId=136\n$ gnfd-cmd -c config.toml -k keyA.json -p password.txt policy put --groupId ${GroupId} --actions get grn:o::funbucket/story.txt   \n")),(0,r.kt)("ol",{start:6},(0,r.kt)("li",{parentName:"ol"},"Mirror the group to BSC network.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"## Example, replace the ${GroupId} with the group id you get in the previous step\n## 97 is the chainId of BSC testnet\n## 56 is the chainId of BSC mainnet\n\n$ export ChainId=56\n$ gnfd-cmd -c config.toml -k keyA.json -p password.txt group mirror --destChainId ${GroupId} --id ${GroupId} \n")),(0,r.kt)("ol",{start:7},(0,r.kt)("li",{parentName:"ol"},"Try to access the file through AccountB.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"## Example\n$ gnfd-cmd -c config.toml -k keyA.json -p password.txt group head-member --groupOwner ${AccountA}  ${AccountB}  fungroup\nthe user does not exist in the group\n$ gnfd-cmd -c config.toml -k keyB.json -p password.txt object get gnfd://funbucket/story.txt ./story-copy.txt\nrun command error: statusCode 403 : code : AccessDenied  (Message: Access Denied)\n")),(0,r.kt)("p",null,"It turns out that AccountB is not permitted to access the file, which is expected."),(0,r.kt)("ol",{start:8},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Clone the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/bnb-chain/greenfield-contracts"},"gnfd-contract")," repository and install the dependencies.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Grant the access to Account B through the contract."))),(0,r.kt)(o.Z,{defaultValue:"mainnet",values:[{label:"Mainnet",value:"mainnet"},{label:"Testnet",value:"testnet"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"mainnet",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'export RPC_MAIN=https://bsc-dataseed.bnbchain.org\n$ forge script foundry-scripts/GroupHub.s.sol:GroupHubScript \\\n--sig "addMember(address operator, uint256 groupId, address member)" \\\n${AccountA} ${GroupId} ${AccountB} \\\n-f $RPC_MAIN \\\n--private-key 148748590a8b83dxxxxxxxxxxxxxxxxx \\\n--legacy \\\n--broadcast\n'))),(0,r.kt)(l.Z,{value:"testnet",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'export RPC_TEST=https://bsc-testnet-dataseed.bnbchain.org\n$ forge script foundry-scripts/GroupHub.s.sol:GroupHubScript \\\n--sig "addMember(address operator, uint256 groupId, address member)" \\\n${AccountA} ${GroupId} ${AccountB} \\\n-f $RPC_TEST\\\n--private-key 148748590a8b83dxxxxxxxxxxxxxxxxx \\\n--legacy \\\n--broadcast\n')))),(0,r.kt)("ol",{start:10},(0,r.kt)("li",{parentName:"ol"},"Wait 30 seconds, and try to access the file through AccountB again.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"## Example\n$ gnfd-cmd -c config.toml -k keyA.json -p password.txt group head-member --groupOwner ${AccountA}  ${AccountB} fungroup\nthe user is a member of the group\n$ gnfd-cmd -c config.toml -k keyB.json -p password.txt object get gnfd://funbucket/story.txt \ndownload object story.txt successfully, the file path is ./story-copy.txt, content length:20\n")))}h.isMDXComponent=!0}}]);