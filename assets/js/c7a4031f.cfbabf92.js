"use strict";(self.webpackChunkgreenfield_docs=self.webpackChunkgreenfield_docs||[]).push([[9255],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>u});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},f="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),f=c(r),p=o,u=f["".concat(s,".").concat(p)]||f[p]||g[p]||i;return r?n.createElement(u,a(a({ref:t},d),{},{components:r})):n.createElement(u,a({ref:t},d))}));function u(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[f]="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},37369:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>g,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=r(87462),o=(r(67294),r(3905));const i={title:"Getting Test tBNB",description:"How to get tBNB for Greenfield Testnet",order:6},a="Getting Test tBNB",l={unversionedId:"guide/getting-started/get-test-bnb",id:"guide/getting-started/get-test-bnb",title:"Getting Test tBNB",description:"How to get tBNB for Greenfield Testnet",source:"@site/docs/guide/getting-started/get-test-bnb.md",sourceDirName:"guide/getting-started",slug:"/guide/getting-started/get-test-bnb",permalink:"/greenfield-docs/docs/guide/getting-started/get-test-bnb",draft:!1,editUrl:"https://github.com/bnb-chain/greenfield-docs/blob/main/docs/guide/getting-started/get-test-bnb.md",tags:[],version:"current",frontMatter:{title:"Getting Test tBNB",description:"How to get tBNB for Greenfield Testnet",order:6},sidebar:"guideSidebar",previous:{title:"Network Information",permalink:"/greenfield-docs/docs/guide/getting-started/network-info"},next:{title:"Greenfield Command",permalink:"/greenfield-docs/docs/guide/getting-started/greenfield-command"}},s={},c=[{value:"Claim tBNB from BSC Faucet",id:"claim-tbnb-from-bsc-faucet",level:2},{value:"Bridge to Greenfield",id:"bridge-to-greenfield",level:2}],d={toc:c},f="wrapper";function g(e){let{components:t,...r}=e;return(0,o.kt)(f,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"getting-test-tbnb"},"Getting Test tBNB"),(0,o.kt)("p",null,"You can claim the test tBNB tokens on BSC Testnet by the faucet, and bridge it to Greenfield Testnet."),(0,o.kt)("h2",{id:"claim-tbnb-from-bsc-faucet"},"Claim tBNB from BSC Faucet"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"There are several ways to claim test tBNB tokens, please refer to ",(0,o.kt)("a",{parentName:"p",href:"https://docs.bnbchain.org/docs/bsc-faucet"},"BSC faucet doc"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Switch to the BSC Testnet in your wallet and check your balance. "))),(0,o.kt)("h2",{id:"bridge-to-greenfield"},"Bridge to Greenfield"),(0,o.kt)("p",null,"You can use ",(0,o.kt)("a",{parentName:"p",href:"https://greenfield.bnbchain.org/en/bridge"},"BNB Greenfield Bridge")," or ",(0,o.kt)("a",{parentName:"p",href:"https://testnet.dcellar.io/"},"DCellar Testnet")," to transfer BNB from BSC to Greenfield and vice versa. You can follow ",(0,o.kt)("a",{parentName:"p",href:"https://docs.nodereal.io/docs/dcellar-get-started#transfer-in"},"How to Transfer In")," to bridge tBNBs from BSC Testnet to Greenfield Testnet, and ",(0,o.kt)("a",{parentName:"p",href:"https://docs.nodereal.io/docs/dcellar-get-started#transfer-out"},"How to Transfer Out")," to bridge tBNBs from Greenfield Testnet to BSC Testnet."))}g.isMDXComponent=!0}}]);