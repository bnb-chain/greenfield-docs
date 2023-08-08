"use strict";(self.webpackChunkgreenfield_docs=self.webpackChunkgreenfield_docs||[]).push([[4852],{2632:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var t=a(87462),l=(a(67294),a(3905));const r={title:"Run Testnet Relayer and Challenger",order:5},i="Run Testnet Relayer and Challenger",s={unversionedId:"guide/greenfield-blockchain/run-node/run-testnet-relayer-and-challenger",id:"guide/greenfield-blockchain/run-node/run-testnet-relayer-and-challenger",title:"Run Testnet Relayer and Challenger",description:"Relayer",source:"@site/docs/guide/greenfield-blockchain/run-node/run-testnet-relayer-and-challenger.md",sourceDirName:"guide/greenfield-blockchain/run-node",slug:"/guide/greenfield-blockchain/run-node/run-testnet-relayer-and-challenger",permalink:"/greenfield-docs/docs/guide/greenfield-blockchain/run-node/run-testnet-relayer-and-challenger",draft:!1,editUrl:"https://github.com/bnb-chain/greenfield-docs/blob/main/docs/guide/greenfield-blockchain/run-node/run-testnet-relayer-and-challenger.md",tags:[],version:"current",frontMatter:{title:"Run Testnet Relayer and Challenger",order:5},sidebar:"guideSidebar",previous:{title:"Run Testnet Node",permalink:"/greenfield-docs/docs/guide/greenfield-blockchain/run-node/run-testnet-node"},next:{title:"Become Testnet Validator",permalink:"/greenfield-docs/docs/guide/greenfield-blockchain/run-node/become-testnet-validator"}},o={},c=[{value:"Relayer",id:"relayer",level:2},{value:"Preparation",id:"preparation",level:3},{value:"Deployment",id:"deployment",level:3},{value:"Config",id:"config",level:4},{value:"Build",id:"build",level:3},{value:"Run",id:"run",level:3},{value:"Run MySQL in Docker(this can be skipped if you are using sqlite)",id:"run-mysql-in-dockerthis-can-be-skipped-if-you-are-using-sqlite",level:4},{value:"Create Schema",id:"create-schema",level:5},{value:"Update Config",id:"update-config",level:4},{value:"Start Relayer",id:"start-relayer",level:4},{value:"Challenger",id:"challenger",level:2},{value:"Preparation",id:"preparation-1",level:3},{value:"Deployment",id:"deployment-1",level:3},{value:"Config",id:"config-1",level:4},{value:"Build",id:"build-1",level:3},{value:"Run",id:"run-1",level:3},{value:"Run MySQL in Docker(this can be skipped if you are using sqlite)",id:"run-mysql-in-dockerthis-can-be-skipped-if-you-are-using-sqlite-1",level:4},{value:"Create Schema",id:"create-schema-1",level:4},{value:"Update Config",id:"update-config-1",level:4},{value:"Start Challenger",id:"start-challenger",level:4},{value:"Deployment in Kubernetes",id:"deployment-in-kubernetes",level:2},{value:"Common Operations",id:"common-operations",level:3},{value:"How to uninstall",id:"how-to-uninstall",level:2},{value:"Parameters",id:"parameters",level:2}],p={toc:c},d="wrapper";function u(e){let{components:n,...a}=e;return(0,l.kt)(d,(0,t.Z)({},p,a,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"run-testnet-relayer-and-challenger"},"Run Testnet Relayer and Challenger"),(0,l.kt)("h2",{id:"relayer"},"Relayer"),(0,l.kt)("h3",{id:"preparation"},"Preparation"),(0,l.kt)("p",null,"Get the greenfield-relayer app by running the following command in your terminal:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"git clone --branch \"$(curl -s https://api.github.com/repos/bnb-chain/greenfield-relayer/releases/latest  | jq -r '.tag_name')\" https://github.com/bnb-chain/greenfield-relayer.git\ncd greenfield-relayer\n")),(0,l.kt)("h3",{id:"deployment"},"Deployment"),(0,l.kt)("h4",{id:"config"},"Config"),(0,l.kt)("p",null,"Modify ",(0,l.kt)("inlineCode",{parentName:"p"},"config/config.json"),". Or, you can create a new one and specify the config path by ",(0,l.kt)("inlineCode",{parentName:"p"},"--config-path")," flag when start the relayer."),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"Please refer to the example ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/bnb-chain/bnb-chain-charts/blob/master/gnfd-relayer-testnet-values/values.yaml#L4"},"testnet configure"),".")),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Set your relayer private key and bls private key imported method (via file or aws secret), gas limit and also the start height."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},'  "greenfield_config": {\n    // or "aws_private_key" if you are using aws secret manager.\n    "key_type": "local_private_key", \n     ...\n    "aws_bls_secret_name": "",\n    "private_key": "your_private_key",\n    "bls_private_key": "your_private_key",\n     ...\n     // please change to the current block height of greenfield network.\n    "start_height": 0, \n  }, \n  "bsc_config": {\n    // or "aws_private_key" if you are using aws secret manager.\n    "key_type": "local_private_key", \n    ...\n    "private_key": "your_private_key",\n    "gas_limit": 4700000,\n    "gas_price": 20000000000,\n    ...\n    // please change to the current block height of BSC network.\n    "start_height": 0,  \n  }\n'))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Config crossChain and greenfield light client smart contracts addresses, others can keep default value, refer to this\n",(0,l.kt)("a",{parentName:"p",href:"/greenfield-docs/docs/tutorials/dapp/contract-list"},"page")," to get the address."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},'"relay_config": {\n    ... \n    "cross_chain_contract_addr": "0x57b8A375193b2e9c6481f167BaECF1feEf9F7d4B",\n    "greenfield_light_client_contract_addr": "0x4916f5c0688d058659aFce361E2A8F3F5b75CAd5"\n  }\n'))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Config your database settings. We Support mysql or sqlite."),(0,l.kt)("p",{parentName:"li"},"mysql example:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},'"db_config": {\n  "dialect": "mysql",\n    "key_type": "local_private_key",\n    "aws_region": "",\n    "aws_secret_name": "",\n    "password": "pass",\n    "username": "root",\n    "url": "/greenfield-relayer?charset=utf8&parseTime=True&loc=Local",\n    "max_idle_conns": 10,\n    "max_open_conns": 100\n}\n')),(0,l.kt)("p",{parentName:"li"},"sqlite example:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},'  "db_config": {\n    "dialect": "sqlite3",\n    "key_type": "",\n    "aws_region": "",\n    "aws_secret_name": "",\n    "password": "",\n    "username": "",\n    "url": "greenfield-relayer.db",\n    "max_idle_conns": 10,\n    "max_open_conns": 100\n  },\n')))),(0,l.kt)("h3",{id:"build"},"Build"),(0,l.kt)("p",null,"Build binary:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"make build\n")),(0,l.kt)("p",null,"Build docker image:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"make build_docker\n")),(0,l.kt)("h3",{id:"run"},"Run"),(0,l.kt)("h4",{id:"run-mysql-in-dockerthis-can-be-skipped-if-you-are-using-sqlite"},"Run MySQL in Docker(this can be skipped if you are using sqlite)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"docker run --name gnfd-mysql -p 3306:3306 -e MYSQL_ROOT_PASSWORD=root -d mysql:8.0\n")),(0,l.kt)("h5",{id:"create-schema"},"Create Schema"),(0,l.kt)("p",null,"Create schema in MySQL client:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"CREATE SCHEMA IF NOT EXISTS `greenfield-relayer` DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci;\n")),(0,l.kt)("h4",{id:"update-config"},"Update Config"),(0,l.kt)("p",null,"Update keys and db config in ",(0,l.kt)("inlineCode",{parentName:"p"},"config.json")," file."),(0,l.kt)("h4",{id:"start-relayer"},"Start Relayer"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"./build/greenfield-relayer --config-type [local or aws] --config-path config_file_path  --aws-region [aws region or omit] --aws-secret-key [aws secret key for config or omit]\n")),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"./build/greenfield-relayer --config-type local --config-path config/config.json\n")),(0,l.kt)("p",null,"Run docker:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},'docker run -it -v /your/data/path:/greenfield-relayer -e CONFIG_TYPE="local" -e CONFIG_FILE_PATH=/your/config/file/path/in/container -d greenfield-relayer\n')),(0,l.kt)("p",null,"Or you can deploy the greenfield relayer application using Helm Chart V3. Please refer to ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/bnb-chain/greenfield/blob/master/deployment/helm/relayer-readme.md"},"relayer-readme"),"."),(0,l.kt)("h2",{id:"challenger"},"Challenger"),(0,l.kt)("h3",{id:"preparation-1"},"Preparation"),(0,l.kt)("p",null,"Get the greenfield-challenger app by running the following command in your terminal:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"git clone --branch \"$(curl -s https://api.github.com/repos/bnb-chain/greenfield-challenger/releases/latest  | jq -r '.tag_name')\" https://github.com/bnb-chain/greenfield-challenger.git\ncd greenfield-challenger\n")),(0,l.kt)("h3",{id:"deployment-1"},"Deployment"),(0,l.kt)("h4",{id:"config-1"},"Config"),(0,l.kt)("p",null,"Modify ",(0,l.kt)("inlineCode",{parentName:"p"},"config/config.json"),". Or, you can create a new one and specify the config path by ",(0,l.kt)("inlineCode",{parentName:"p"},"--config-path")," flag when start the challenger."),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"See ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/bnb-chain/bnb-chain-charts/blob/master/gnfd-challenger-testnet-values/values.yaml#L4"},"testnet values"),". Reference for a complete testnet config file")),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Set your private key and bls key (via file or aws secret)."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},'  "greenfield_config": {\n    "key_type": "local_private_key" or "aws_private_key" depending on whether you are storing the keys on aws or locally in this json file\n    "aws_region": set this if you chose "aws_private_key"\n    "aws_secret_name": set this if you chose "aws_private_key"\n    "aws_bls_secret_name": set this if you chose "aws_private_key"\n    "private_key": set this if you chose "local_private_key"\n    "bls_private_key": set this if you chose "local_private_key" \n     ...\n  }\n'))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Config your database settings."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},'"db_config": {\n  "dialect": "mysql",\n  "db_path": "your_db_path"\n  "key_type": "local_private_key" or "aws_private_key" depending on whether you are storing the keys on aws or locally in this json file\n  "aws_region": set this if you chose "aws_private_key"\n  "aws_secret_name": set this if you chose "aws_private_key"\n  "username": set this if you chose "local_private_key"\n  "password": set this if you chose "local_private_key"\n  ...\n}\n')))),(0,l.kt)("h3",{id:"build-1"},"Build"),(0,l.kt)("p",null,"Build binary:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"make build\n")),(0,l.kt)("p",null,"Build docker image:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"make build_docker\n")),(0,l.kt)("h3",{id:"run-1"},"Run"),(0,l.kt)("h4",{id:"run-mysql-in-dockerthis-can-be-skipped-if-you-are-using-sqlite-1"},"Run MySQL in Docker(this can be skipped if you are using sqlite)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"docker run --name gnfd-mysql -p 3306:3306 -e MYSQL_ROOT_PASSWORD=root -d mysql:5.7\n")),(0,l.kt)("h4",{id:"create-schema-1"},"Create Schema"),(0,l.kt)("p",null,"Create schema in MySQL client:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"CREATE SCHEMA IF NOT EXISTS `challenger` DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci;\n")),(0,l.kt)("h4",{id:"update-config-1"},"Update Config"),(0,l.kt)("p",null,"Update keys and db config in ",(0,l.kt)("inlineCode",{parentName:"p"},"config.json")," file."),(0,l.kt)("h4",{id:"start-challenger"},"Start Challenger"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"./build/greenfield-challenger --config-type [local or aws] --config-path config_file_path  --aws-region [aws region or omit] --aws-secret-key [aws secret key for config or omit]\n")),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"./build/greenfield-challenger --config-type local --config-path config/config.json\n")),(0,l.kt)("p",null,"Run docker:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},'docker run -it -v /your/data/path:/greenfield-challenger -e CONFIG_TYPE="local" -e CONFIG_FILE_PATH=/your/config/file/path/in/container -d greenfield-challenger\n')),(0,l.kt)("h2",{id:"deployment-in-kubernetes"},"Deployment in Kubernetes"),(0,l.kt)("p",null,"These are the steps to deploy the greenfield challenger and relayer using Helm Chart V3."),(0,l.kt)("p",null,"We run these commands first to get the chart and test the installation."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-console"},"helm repo add bnb-chain https://chart.bnbchain.world/\nhelm repo update\nhelm show values bnb-chain/gnfd-challenger-testnet-values > testnet-challenger-values.yaml\nhelm install greenfield-challenger bnb-chain/gnfd-challenger -f testnet-challenger-values.yaml -n NAMESPACE --debug --dry-run\nhelm show values bnb-chain/gnfd-relayer-testnet-values > testnet-relayer-values.yaml\nhelm install greenfield-relayer bnb-chain/gnfd-relayer -f testnet-relayer-values.yaml -n NAMESPACE --debug --dry-run\n")),(0,l.kt)("p",null,"If dry-run runs successfully, we install the chart:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"helm install greenfield-challenger bnb-chain/gnfd-challenger -f testnet-challenger-values.yaml -n NAMESPACE\nhelm install greenfield-relayer bnb-chain/gnfd-relayer -f testnet-relayer-values.yaml -n NAMESPACE\n")),(0,l.kt)("h3",{id:"common-operations"},"Common Operations"),(0,l.kt)("p",null,"Get the pods lists by running this commands:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-console"},"kubectl get pods -n NAMESPACE\n")),(0,l.kt)("p",null,"See the history of versions of challenger and relayer  with command."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-console"},"helm history greenfield-challenger -n NAMESPACE\nhelm history greenfield-relayer -n NAMESPACE\n")),(0,l.kt)("h2",{id:"how-to-uninstall"},"How to uninstall"),(0,l.kt)("p",null,"Remove application with command."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-console"},"helm uninstall greenfield-challenger -n NAMESPACE\nhelm uninstall greenfield-relayer -n NAMESPACE\n")),(0,l.kt)("h2",{id:"parameters"},"Parameters"),(0,l.kt)("p",null,"The following tables lists the configurable parameters of the chart and their default values."),(0,l.kt)("p",null,"You ",(0,l.kt)("strong",{parentName:"p"},"must")," change the values according to the your aws environment parametes in\n",(0,l.kt)("inlineCode",{parentName:"p"},"greenfield-challenger/testnet-values.yaml")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"greenfield-relayer/testnet-values.yaml")," file."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"In ",(0,l.kt)("inlineCode",{parentName:"p"},"greenfield-config"),", change: ",(0,l.kt)("inlineCode",{parentName:"p"},"private_key")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"bls_private_key"),".")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"In ",(0,l.kt)("inlineCode",{parentName:"p"},"db_config"),", change: ",(0,l.kt)("inlineCode",{parentName:"p"},"password"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"username"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"url"),"."))))}u.isMDXComponent=!0}}]);