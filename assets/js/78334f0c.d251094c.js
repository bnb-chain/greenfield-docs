"use strict";(self.webpackChunkgreenfield_docs=self.webpackChunkgreenfield_docs||[]).push([[4275],{3905:(e,n,a)=>{a.d(n,{Zo:()=>i,kt:()=>g});var t=a(67294);function o(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function r(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function l(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?r(Object(a),!0).forEach((function(n){o(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function s(e,n){if(null==e)return{};var a,t,o=function(e,n){if(null==e)return{};var a,t,o={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||(o[a]=e[a]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var p=t.createContext({}),d=function(e){var n=t.useContext(p),a=n;return e&&(a="function"==typeof e?e(n):l(l({},n),e)),a},i=function(e){var n=d(e.components);return t.createElement(p.Provider,{value:n},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var a=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),c=d(a),m=o,g=c["".concat(p,".").concat(m)]||c[m]||u[m]||r;return a?t.createElement(g,l(l({ref:n},i),{},{components:a})):t.createElement(g,l({ref:n},i))}));function g(e,n){var a=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=a.length,l=new Array(r);l[0]=m;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s[c]="string"==typeof e?e:o,l[1]=s;for(var d=2;d<r;d++)l[d]=a[d];return t.createElement.apply(null,l)}return t.createElement.apply(null,a)}m.displayName="MDXCreateElement"},70182:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var t=a(87462),o=(a(67294),a(3905));const r={title:"On-chain Governance",order:7},l="On-chain Governance",s={unversionedId:"guide/greenfield-blockchain/cli/governance",id:"guide/greenfield-blockchain/cli/governance",title:"On-chain Governance",description:"Quick Start",source:"@site/docs/guide/greenfield-blockchain/cli/governance.md",sourceDirName:"guide/greenfield-blockchain/cli",slug:"/guide/greenfield-blockchain/cli/governance",permalink:"/greenfield-docs/docs/guide/greenfield-blockchain/cli/governance",draft:!1,editUrl:"https://github.com/bnb-chain/greenfield-docs/blob/master/docs/guide/greenfield-blockchain/cli/governance.md",tags:[],version:"current",frontMatter:{title:"On-chain Governance",order:7},sidebar:"guideSidebar",previous:{title:"Cross Chain Transfer",permalink:"/greenfield-docs/docs/guide/greenfield-blockchain/cli/bridge"},next:{title:"Payment",permalink:"/greenfield-docs/docs/guide/greenfield-blockchain/cli/payment"}},p={},d=[{value:"Quick Start",id:"quick-start",level:2},{value:"Query",id:"query",level:2},{value:"deposit",id:"deposit",level:3},{value:"deposits",id:"deposits",level:3},{value:"param",id:"param",level:3},{value:"params",id:"params",level:3},{value:"proposal",id:"proposal",level:3},{value:"proposals",id:"proposals",level:3},{value:"proposer",id:"proposer",level:3},{value:"tally",id:"tally",level:5},{value:"vote",id:"vote",level:3},{value:"votes",id:"votes",level:3},{value:"Transactions",id:"transactions",level:2},{value:"deposit",id:"deposit-1",level:3},{value:"draft-proposal",id:"draft-proposal",level:3},{value:"submit-proposal",id:"submit-proposal",level:3},{value:"Greenfield module parameter change proposal",id:"greenfield-module-parameter-change-proposal",level:4},{value:"BSC smart contract parameter change  proposal",id:"bsc-smart-contract-parameter-change--proposal",level:4},{value:"BSC smart contract upgrade proposal",id:"bsc-smart-contract-upgrade-proposal",level:4}],i={toc:d},c="wrapper";function u(e){let{components:n,...a}=e;return(0,o.kt)(c,(0,t.Z)({},i,a,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"on-chain-governance"},"On-chain Governance"),(0,o.kt)("h2",{id:"quick-start"},"Quick Start"),(0,o.kt)("p",null,"Start a local cluster:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'## Start a local cluster\n$ bash ./deployment/localup/localup.sh all 3\n$ alias gnfd="./build/bin/gnfd"\n\n## Create a proposal\n$ gnfd tx gov submit-proposal  /path/to/your_file.json  --from 0x7224A7Ad3c484814165baf1d51D1356B014a659B  --home ./deployment/localup/.local/validator0 --keyring-backend test --node http://localhost:26750 -b block\n\n## Make a deposit \n$ gnfd tx gov deposit 1 1000000000000000000BNB  --from 0x7224A7Ad3c484814165baf1d51D1356B014a659B  --home ./deployment/localup/.local/validator0 --keyring-backend test --node http://localhost:26750 -b block\n\n## Vote the proposal from validator1\ngnfd tx gov vote 1  yes --from 0x029dF90943a668560529666FEC22e28E40e83c4c  --home ./deployment/localup/.local/validator1 --keyring-backend test --node http://localhost:26750 -b block\n\n## Query the proposal details\ngnfd query gov proposal 1\n\n')),(0,o.kt)("h2",{id:"query"},"Query"),(0,o.kt)("p",null,"The CLI ",(0,o.kt)("inlineCode",{parentName:"p"},"query")," commands allow users to query ",(0,o.kt)("inlineCode",{parentName:"p"},"gov")," state."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"$ gnfd query gov help\n")),(0,o.kt)("h3",{id:"deposit"},"deposit"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"deposit")," command allows users to query a deposit for a given proposal from a given depositor."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"$  gnfd query gov deposit [proposal-id] [depositer-addr] [flags]\n")),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ gnfd query gov deposit 4 0x50508768BD41e5CD4A82A0fBc38C14d3bEA45A78 \n")),(0,o.kt)("p",null,"Example Output:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'amount:\n- amount: "200"\n  denom: BNB\ndepositor: 0x50508768BD41e5CD4A82A0fBc38C14d3bEA45A78\nproposal_id: "4"\n')),(0,o.kt)("h3",{id:"deposits"},"deposits"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"deposits")," command allows users to query all deposits for a given proposal."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ gnfd query gov deposits [proposal-id] [flags]\n")),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ gnfd query gov deposits 4\n")),(0,o.kt)("p",null,"Example Output:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'deposits:\n- amount:\n  - amount: "200"\n    denom: BNB\n  depositor: 0x50508768BD41e5CD4A82A0fBc38C14d3bEA45A78\n  proposal_id: "4"\npagination:\n  next_key: null\n  total: "0"\n')),(0,o.kt)("h3",{id:"param"},"param"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"param")," command allows users to query a given parameter for the ",(0,o.kt)("inlineCode",{parentName:"p"},"gov")," module."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ gnfd query gov param [param-type] [flags]\n")),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ gnfd query gov param deposit\n")),(0,o.kt)("p",null,"Example Output:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'max_deposit_period: "300000000000"\nmin_deposit:\n- amount: "1000000000000000000"\n  denom: BNB\n')),(0,o.kt)("h3",{id:"params"},"params"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"params")," command allows users to query all parameters for the ",(0,o.kt)("inlineCode",{parentName:"p"},"gov")," module."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ gnfd query gov params [flags]\n")),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ gnfd query gov params\n")),(0,o.kt)("p",null,"Example Output:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'deposit_params:\n  max_deposit_period: "300000000000"\n  min_deposit:\n  - amount: "1000000000000000000"\n    denom: BNB\ntally_params:\n  quorum: "0.334000000000000000"\n  threshold: "0.500000000000000000"\n  veto_threshold: "0.334000000000000000"\nvoting_params:\n  voting_period: "300000000000"\n')),(0,o.kt)("h3",{id:"proposal"},"proposal"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"proposal")," command allows users to query a given proposal."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ gnfd query gov proposal [proposal-id] [flags]\n")),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ gnfd query gov proposal 6\n")),(0,o.kt)("p",null,"Example Output:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'deposit_end_time: "2023-02-21T11:30:01.519490Z"\nfinal_tally_result:\n  abstain_count: "0"\n  no_count: "0"\n  no_with_veto_count: "0"\n  yes_count: "10000000000000000000000000"\nid: "6"\nmessages:\n- \'@type\': /cosmos.gov.v1.MsgExecLegacyContent\n  authority: 0x7b5Fe22B5446f7C62Ea27B8BD71CeF94e03f3dF2\n  content:\n    \'@type\': /cosmos.params.v1beta1.ParameterChangeProposal\n    changes:\n    - key: RelayerTimeout\n      subspace: oracle\n      value: \'"100"\'\n    description: change\n    title: test change params\nmetadata: ""\nstatus: PROPOSAL_STATUS_PASSED\nsubmit_time: "2023-02-21T11:25:01.519490Z"\ntotal_deposit:\n- amount: "1000000000000000200"\n  denom: BNB\nvoting_end_time: "2023-02-21T11:30:36.733936Z"\nvoting_start_time: "2023-02-21T11:25:36.733936Z"\n')),(0,o.kt)("h3",{id:"proposals"},"proposals"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"proposals")," command allows users to query all proposals with optional filters."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ gnfd query gov proposals [flags]\n")),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ gnfd query gov proposals\n")),(0,o.kt)("p",null,"Example Output:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'pagination:\n  next_key: null\n  total: "0"\nproposals:\n- deposit_end_time: "2023-02-21T10:43:28.710910Z"\n  final_tally_result:\n    abstain_count: "0"\n    no_count: "0"\n    no_with_veto_count: "0"\n    yes_count: "10000000000000000000000000"\n  id: "1"\n  messages:\n  - \'@type\': /bnbchain.greenfield.sp.MsgCreateStorageProvider\n    approval_address: 0x7aFEf7876FE8bf0b805d8dF9d6bE0dD1CD798E29\n    creator: 0x7b5Fe22B5446f7C62Ea27B8BD71CeF94e03f3dF2\n    deposit:\n      amount: "10000000000000000000000"\n      denom: BNB\n    description:\n      details: ""\n      identity: ""\n      moniker: sp0\n      security_contact: ""\n      website: ""\n    endpoint: sp0.greenfield.io\n    funding_address: 0x0ffF366CccF2FD21445ACe1f19d316951F4144CC\n    seal_address: 0x7Bc6Eb822b7B8419037cce5F4Cb50209Dfc7CDbD\n    sp_address: 0xba73b99Bfba6B3df6398c7c4C2c916A28c26d100\n  metadata: 4pIMOgIGx1vZGU=\n  status: PROPOSAL_STATUS_PASSED\n  submit_time: "2023-02-21T10:38:28.710910Z"\n  total_deposit:\n  - amount: "2000000000000000000"\n    denom: BNB\n  voting_end_time: "2023-02-21T10:43:28.710910Z"\n  voting_start_time: "2023-02-21T10:38:28.710910Z"\n- deposit_end_time: "2023-02-21T10:43:58.917763Z"\n  final_tally_result:\n    abstain_count: "0"\n    no_count: "0"\n    no_with_veto_count: "0"\n    yes_count: "10000000000000000000000000"\n  id: "2"\n  messages:\n  - \'@type\': /bnbchain.greenfield.sp.MsgCreateStorageProvider\n    approval_address: 0x3CE5E18B05Fd349801DBa9e98E0aB694E2B8C985\n    creator: 0x7b5Fe22B5446f7C62Ea27B8BD71CeF94e03f3dF2\n    deposit:\n      amount: "10000000000000000000000"\n      denom: BNB\n    description:\n      details: ""\n      identity: ""\n      moniker: sp1\n      security_contact: ""\n      website: ""\n    endpoint: sp1.greenfield.io\n    funding_address: 0xa2D705f57D4c50F5c7694590187A62171a149836\n    seal_address: 0x53ADC854036F14E0bb989F4Ba3104d66A95FB7C4\n    sp_address: 0x93B6cFf6EdB72Fd15ff32DAbC6cd6F9b17C51bd8\n  metadata: 4pIMOgIGx1vZGU=\n  status: PROPOSAL_STATUS_PASSED\n  submit_time: "2023-02-21T10:38:58.917763Z"\n  total_deposit:\n  - amount: "2000000000000000000"\n    denom: BNB\n  voting_end_time: "2023-02-21T10:43:58.917763Z"\n  voting_start_time: "2023-02-21T10:38:58.917763Z"\n- deposit_end_time: "2023-02-21T10:44:29.103061Z"\n  final_tally_result:\n    abstain_count: "0"\n    no_count: "0"\n    no_with_veto_count: "0"\n    yes_count: "10000000000000000000000000"\n  id: "3"\n  messages:\n  - \'@type\': /bnbchain.greenfield.sp.MsgCreateStorageProvider\n    approval_address: 0x8AFa83E423fb3C0D1ED30761730b742963897C8c\n    creator: 0x7b5Fe22B5446f7C62Ea27B8BD71CeF94e03f3dF2\n    deposit:\n      amount: "10000000000000000000000"\n      denom: BNB\n    description:\n      details: ""\n      identity: ""\n      moniker: sp2\n      security_contact: ""\n      website: ""\n    endpoint: sp2.greenfield.io\n    funding_address: 0xf54B0622BbA7eE596E688A0a993267583078327f\n    seal_address: 0xb6eCa481Cb3C1861aD9f4D65F5a014aAcD0ebbc5\n    sp_address: 0xc52E29c12a16f9CC37Ef1728C05b0129187564d2\n  metadata: 4pIMOgIGx1vZGU=\n  status: PROPOSAL_STATUS_PASSED\n  submit_time: "2023-02-21T10:39:29.103061Z"\n  total_deposit:\n  - amount: "2000000000000000000"\n    denom: BNB\n  voting_end_time: "2023-02-21T10:44:29.103061Z"\n  voting_start_time: "2023-02-21T10:39:29.103061Z"\n- deposit_end_time: "2023-02-21T11:30:01.519490Z"\n  final_tally_result:\n    abstain_count: "0"\n    no_count: "0"\n    no_with_veto_count: "0"\n    yes_count: "10000000000000000000000000"\n  id: "6"\n  messages:\n  - \'@type\': /cosmos.gov.v1.MsgExecLegacyContent\n    authority: 0x7b5Fe22B5446f7C62Ea27B8BD71CeF94e03f3dF2\n    content:\n      \'@type\': /cosmos.params.v1beta1.ParameterChangeProposal\n      changes:\n      - key: RelayerTimeout\n        subspace: oracle\n        value: \'"100"\'\n      description: change\n      title: test change params\n  metadata: ""\n  status: PROPOSAL_STATUS_PASSED\n  submit_time: "2023-02-21T11:25:01.519490Z"\n  total_deposit:\n  - amount: "1000000000000000200"\n    denom: BNB\n  voting_end_time: "2023-02-21T11:30:36.733936Z"\n  voting_start_time: "2023-02-21T11:25:36.733936Z"\n')),(0,o.kt)("h3",{id:"proposer"},"proposer"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"proposer")," command allows users to query the proposer for a given proposal."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ gnfd query gov proposer [proposal-id] [flags]\n")),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ gnfd query gov proposer 1\n")),(0,o.kt)("p",null,"Example Output:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'proposal_id: "6"\nproposer: 0x50508768BD41e5CD4A82A0fBc38C14d3bEA45A78\n')),(0,o.kt)("h5",{id:"tally"},"tally"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"tally")," command allows users to query the tally of a given proposal vote."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ gnfd query gov tally [proposal-id] [flags]\n")),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ gnfd query gov tally 1\n")),(0,o.kt)("p",null,"Example Output:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'abstain_count: "0"\nno_count: "0"\nno_with_veto_count: "0"\nyes_count: "10000000000000000000000000"\n')),(0,o.kt)("h3",{id:"vote"},"vote"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"vote")," command allows users to query a vote for a given proposal."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ gnfd query gov vote [proposal-id] [voter-addr] [flags]\n")),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ gnfd query gov vote 7 0x8313D43DdA0958e11Fb8840DC75540d0755859F3\n")),(0,o.kt)("p",null,"Example Output:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'metadata: ""\noptions:\n- option: VOTE_OPTION_YES\n  weight: "1.000000000000000000"\nproposal_id: "7"\nvoter: 0x8313D43DdA0958e11Fb8840DC75540d0755859F3\n')),(0,o.kt)("h3",{id:"votes"},"votes"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"votes")," command allows users to query all votes for a given proposal."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ gnfd query gov votes [proposal-id] [flags]\n")),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ gnfd query gov votes 7\n")),(0,o.kt)("p",null,"Example Output:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'pagination:\n  next_key: null\n  total: "0"\nvotes:\n- metadata: ""\n  options:\n  - option: VOTE_OPTION_YES\n    weight: "1.000000000000000000"\n  proposal_id: "7"\n  voter: 0x8313D43DdA0958e11Fb8840DC75540d0755859F3\n')),(0,o.kt)("h2",{id:"transactions"},"Transactions"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"tx")," commands allow users to interact with the ",(0,o.kt)("inlineCode",{parentName:"p"},"gov")," module."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ gnfd tx gov --help\n")),(0,o.kt)("h3",{id:"deposit-1"},"deposit"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"deposit")," command allows users to deposit tokens for a given proposal."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ gnfd tx gov deposit [proposal-id] [deposit] [flags]\n")),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ gnfd tx gov deposit 1 1000000000000000000BNB --from 0x50508768BD41e5CD4A82A0fBc38C14d3bEA45A78\n")),(0,o.kt)("h3",{id:"draft-proposal"},"draft-proposal"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"draft-proposal")," creates a draft for any type of proposal."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ gnfd tx gov draft-proposal\n")),(0,o.kt)("h3",{id:"submit-proposal"},"submit-proposal"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"submit-proposal")," submits a governance proposal along with messages and metadata defined in json file"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ gnfd tx gov submit-proposal [path-to-proposal-json] [flags]\n")),(0,o.kt)("p",null,"Example:"),(0,o.kt)("h4",{id:"greenfield-module-parameter-change-proposal"},"Greenfield module parameter change proposal"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ gnfd tx gov submit-proposal /path/to/proposal.json --from 0x2737dca53A25120358f4811c762f71712eF23aFE\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'\n{\n  "messages": [\n    {\n      "@type": "/cosmos.gov.v1.MsgExecLegacyContent",\n      "content": {\n        "@type": "/cosmos.params.v1beta1.ParameterChangeProposal",\n        "title": "Oracle params change",\n        "description": "Change",\n        "changes": [\n          {\n            "subspace": "oracle",\n            "key": "RelayerTimeout",\n            "value": "\\"100\\""\n          }\n        ]\n      },\n      "authority": "0x7b5Fe22B5446f7C62Ea27B8BD71CeF94e03f3dF2"\n    }\n  ],\n  "metadata": "4pIMOgIGx1vZGU=",\n  "deposit": "1000000000000000000BNB"\n}\n')),(0,o.kt)("h4",{id:"bsc-smart-contract-parameter-change--proposal"},"BSC smart contract parameter change  proposal"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "messages": [\n    {\n      "@type": "/cosmos.gov.v1.MsgExecLegacyContent",\n      "content": {\n        "@type": "/cosmos.params.v1beta1.ParameterChangeProposal",\n        "title": "BSC smart contract parameter change",\n        "description": "change contract parameter",\n        "changes": [\n          {\n            "subspace": "BSC",\n            "key": "batchSizeForOracle",\n            "value": "0000000000000000000000000000000000000000000000000000000000000033"\n          }\n        ],\n        "cross_chain": true,\n        "addresses": ["0x6c615C766EE6b7e69275b0D070eF50acc93ab880"]\n      },\n      "authority": "0x7b5Fe22B5446f7C62Ea27B8BD71CeF94e03f3dF2"\n    }\n  ],\n  "metadata": "4pIMOgIGx1vZGU=",\n  "deposit": "1000000000000000000BNB"\n}\n')),(0,o.kt)("h4",{id:"bsc-smart-contract-upgrade-proposal"},"BSC smart contract upgrade proposal"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "messages": [\n    {\n      "@type": "/cosmos.gov.v1.MsgExecLegacyContent",\n      "content": {\n        "@type": "/cosmos.params.v1beta1.ParameterChangeProposal",\n        "title": "upgrade GovHub and CrossChain",\n        "description": "upgrade GovHub and CrossChain",\n        "changes": [\n          {\n            "subspace": "BSC",\n            "key": "upgrade",\n            "value": "0x8f86403A4DE0BB5791fa46B8e795C547942fE4Cf"\n          },\n          {\n            "subspace": "BSC",\n            "key": "upgrade",\n            "value": "0x9d4454B023096f34B160D6B654540c56A1F81688"\n          }\n        ],\n        "cross_chain": true,\n        "addresses": [\n          "0x6c615C766EE6b7e69275b0D070eF50acc93ab880",\n          "0x04ED4ad3cDe36FE8ba944E3D6CFC54f7Fe6c3C72"\n        ]\n      },\n      "authority": "0x7b5Fe22B5446f7C62Ea27B8BD71CeF94e03f3dF2"\n    }\n  ],\n  "metadata": "4pIMOgIGx1vZGU=",\n  "deposit": "1000000000000000000BNB"\n}\n')))}u.isMDXComponent=!0}}]);