"use strict";(self.webpackChunkgreenfield_docs=self.webpackChunkgreenfield_docs||[]).push([[9625],{73829:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>r,toc:()=>d});var n=a(87462),l=(a(67294),a(3905));const i={title:"Challenge",order:9},s="Challenge",r={unversionedId:"api/blockchain-cli/challenge",id:"api/blockchain-cli/challenge",title:"Challenge",description:"Abstract",source:"@site/docs/api/blockchain-cli/challenge.md",sourceDirName:"api/blockchain-cli",slug:"/api/blockchain-cli/challenge",permalink:"/greenfield-docs/docs/api/blockchain-cli/challenge",draft:!1,editUrl:"https://github.com/bnb-chain/greenfield-docs/blob/main/docs/api/blockchain-cli/challenge.md",tags:[],version:"current",frontMatter:{title:"Challenge",order:9},sidebar:"apiReferenceSidebar",previous:{title:"Validator Staking",permalink:"/greenfield-docs/docs/api/blockchain-cli/validator-staking"},next:{title:"Blockchain API",permalink:"/greenfield-docs/docs/api/blockchain-rest"}},u={},d=[{value:"Abstract",id:"abstract",level:2},{value:"Quick Start",id:"quick-start",level:2},{value:"Detailed CLI",id:"detailed-cli",level:2},{value:"Query",id:"query",level:3},{value:"latest-attested-challenges",id:"latest-attested-challenges",level:4},{value:"inturn-attestation-submitter",id:"inturn-attestation-submitter",level:4},{value:"params",id:"params",level:4},{value:"Transactions",id:"transactions",level:3},{value:"submit",id:"submit",level:4}],o={toc:d},c="wrapper";function p(e){let{components:t,...a}=e;return(0,l.kt)(c,(0,n.Z)({},o,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"challenge"},"Challenge"),(0,l.kt)("h2",{id:"abstract"},"Abstract"),(0,l.kt)("p",null,"The challenge module is responsible for handling on-chain challenges that are either generated or submitted by users."),(0,l.kt)("p",null,"Users can submit a challenge and query the latest attested challenges through cli commands."),(0,l.kt)("h2",{id:"quick-start"},"Quick Start"),(0,l.kt)("p",null,"No local node setup is required for this module as it relies on multiple services to function. We will be using the testnet node instead.    "),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Clone the ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/bnb-chain/greenfield"},"greenfield repository")),(0,l.kt)("li",{parentName:"ol"},"Build the ",(0,l.kt)("inlineCode",{parentName:"li"},"gnfd")," binary with ",(0,l.kt)("inlineCode",{parentName:"li"},"make build"))),(0,l.kt)("h2",{id:"detailed-cli"},"Detailed CLI"),(0,l.kt)("p",null,"A user can query and interact with the ",(0,l.kt)("inlineCode",{parentName:"p"},"challenge")," module using the CLI."),(0,l.kt)("h3",{id:"query"},"Query"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"query")," commands allow users to query ",(0,l.kt)("inlineCode",{parentName:"p"},"challenge")," state."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"./build/bin/gnfd query challenge --help\n")),(0,l.kt)("h4",{id:"latest-attested-challenges"},"latest-attested-challenges"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"latest-attested-challenges")," command allows users to query the latest challenges that have been attested by the user."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"./build/bin/gnfd query challenge latest-attested-challenges [flags]\n")),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"./build/bin/gnfd query challenge latest-attested-challenges --node https://gnfd-testnet-fullnode-tendermint-us.bnbchain.org:443\n")),(0,l.kt)("p",null,"Example Output:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yml"},' - id: "400"\n   result: CHALLENGE_FAILED\n - id: "461"\n   result: CHALLENGE_SUCCEED\n')),(0,l.kt)("h4",{id:"inturn-attestation-submitter"},"inturn-attestation-submitter"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"inturn-attestation-submitter")," command allows users to query the off-chain challenger service that is currently in charge of attesting.   "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"./build/bin/gnfd query inturn-attestation-submitter [flags]\n")),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"./build/bin/gnfd query challenge inturn-attestation-submitter --node https://gnfd-testnet-fullnode-tendermint-us.bnbchain.org:443\n")),(0,l.kt)("p",null,"Example Output:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yml"},'bls_pub_key: 828e81c5c39..\nsubmit_interval:\n  end: "1681960490"\n  start: "1681960480"\n')),(0,l.kt)("h4",{id:"params"},"params"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"params")," command allows users to query the current settings for the challenge module.  "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"./build/bin/gnfd query challenge params [flags] \n")),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"./build/bin/gnfd query challenge params --node https://gnfd-testnet-fullnode-tendermint-us.bnbchain.org:443\n")),(0,l.kt)("p",null,"Example Output:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yml"},'params:\n  attestation_inturn_interval: "120"\n  attestation_kept_count: "300"\n  challenge_count_per_block: "1"\n  challenge_keep_alive_period: "300"\n  heartbeat_interval: "1000"\n  reward_submitter_ratio: "0.001000000000000000"\n  reward_submitter_threshold: "1000000000000000"\n  reward_validator_ratio: "0.900000000000000000"\n  slash_amount_max: "1000000000000000000"\n  slash_amount_min: "10000000000000000"\n  slash_amount_size_rate: "0.008500000000000000"\n  slash_cooling_off_period: "300"\n  sp_slash_counting_window: "0"\n  sp_slash_max_amount: "0"\n')),(0,l.kt)("h3",{id:"transactions"},"Transactions"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"tx")," commands allow users to interact with the ",(0,l.kt)("inlineCode",{parentName:"p"},"challenge")," module."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"./build/bin/gnfd tx challenge [command] --help\n")),(0,l.kt)("h4",{id:"submit"},"submit"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"submit")," command allows users to submit a challenge for an object stored by any storage provider."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"./build/bin/gnfd tx challenge submit [sp-operator-address] [bucket-name] [object-name] [random-index] [segment-index] [flags]\n")),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"./build/bin/gnfd tx challenge submit 0x950E2FBD285BC42E30EA69A8C1AB17EEDC70C447 ch69bd3t tq true 0 --keyring-backend test --node https://gnfd-testnet-fullnode-tendermint-us.bnbchain.org:443 -b block --from yourWalletName\n")),(0,l.kt)("p",null,"The result of the challenge can be queried using the ",(0,l.kt)("inlineCode",{parentName:"p"},"AttestedChallenge")," method through ",(0,l.kt)("a",{parentName:"p",href:"https://gnfd-testnet-fullnode-tendermint-us.bnbchain.org/openapi"},"GRPC swagger"),".q"))}p.isMDXComponent=!0}}]);