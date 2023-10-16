"use strict";(self.webpackChunkgreenfield_docs=self.webpackChunkgreenfield_docs||[]).push([[4555],{81322:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>l,contentTitle:()=>r,default:()=>m,frontMatter:()=>s,metadata:()=>i,toc:()=>d});var n=t(87462),a=(t(67294),t(3905));const s={title:"SP Compiling and Dependencies"},r=void 0,i={unversionedId:"guide/storage-provider/run-book/compile-dependences",id:"guide/storage-provider/run-book/compile-dependences",title:"SP Compiling and Dependencies",description:"Compile SP",source:"@site/docs/guide/storage-provider/run-book/compile-dependences.md",sourceDirName:"guide/storage-provider/run-book",slug:"/guide/storage-provider/run-book/compile-dependences",permalink:"/greenfield-docs/docs/guide/storage-provider/run-book/compile-dependences",draft:!1,editUrl:"https://github.com/bnb-chain/greenfield-docs/blob/main/docs/guide/storage-provider/run-book/compile-dependences.md",tags:[],version:"current",frontMatter:{title:"SP Compiling and Dependencies"},sidebar:"guideSidebar",previous:{title:"BSDB",permalink:"/greenfield-docs/docs/guide/storage-provider/modules/bsdb"},next:{title:"Run Local SP Network",permalink:"/greenfield-docs/docs/guide/storage-provider/run-book/run-local-SP-network"}},l={},d=[{value:"Compile SP",id:"compile-sp",level:2},{value:"Note",id:"note",level:3},{value:"SP Dependencies",id:"sp-dependencies",level:2},{value:"SPDB and BSDB",id:"spdb-and-bsdb",level:3},{value:"PieceStore",id:"piecestore",level:3},{value:"Install Dependencies",id:"install-dependencies",level:3},{value:"Install MySQL in CentOS",id:"install-mysql-in-centos",level:4}],p={toc:d},c="wrapper";function m(e){let{components:o,...t}=e;return(0,a.kt)(c,(0,n.Z)({},p,t,{components:o,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"compile-sp"},"Compile SP"),(0,a.kt)("p",null,"Compilation dependencies:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://go.dev"},"Golang"),": SP is written in Golang, you need to install it. Golang version requires ",(0,a.kt)("inlineCode",{parentName:"li"},"1.20+"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://buf.build"},"Buf"),": A new way of working with Protocol Buffers. SP uses Buf to manage proto files."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/cosmos/gogoproto"},"protoc-gen-gocosmos"),": Protocol Buffers for Go with Gadgets. SP uses this protobuf compiler to generate pb.go files."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/uber-go/mock"},"mockgen"),": A mocking framework for the Go programming language that is used in unit test."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://stedolan.github.io/jq/"},"jq"),": Command-line JSON processor. Users should install jq according to your operating system.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"# clone source code\ngit clone https://github.com/bnb-chain/greenfield-storage-provider.git\n\ncd greenfield-storage-provider/\n\n# install dependent tools: buf, protoc-gen-gocosmos and mockgen\nmake install-tools\n\n# compile sp\nmake build\n\n# move to build directory\ncd build\n\n# execute gnfd-sp binary file\n./gnfd-sp version\n\n# show the gnfd-sp version information\nGreenfield Storage Provider\n    __                                                       _     __\n    _____/ /_____  _________ _____ ____     ____  _________ _   __(_)___/ /__  _____\n    / ___/ __/ __ \\/ ___/ __  / __  / _ \\   / __ \\/ ___/ __ \\ | / / / __  / _ \\/ ___/\n    (__  ) /_/ /_/ / /  / /_/ / /_/ /  __/  / /_/ / /  / /_/ / |/ / / /_/ /  __/ /\n    /____/\\__/\\____/_/   \\__,_/\\__, /\\___/  / .___/_/   \\____/|___/_/\\__,_/\\___/_/\n    /____/       /_/\n\nVersion : v1.0.0\nBranch  : master\nCommit  : 7e1f56809c5385bf1ea6f41d318ab1419dcb0f86\nBuild   : go1.20.3 darwin arm64 2023-10-08 10:31\n\n# show the gnfd-sp help info\n./gnfd-sp -h\n")),(0,a.kt)("h3",{id:"note"},"Note"),(0,a.kt)("p",null,"If you've already executed ",(0,a.kt)("inlineCode",{parentName:"p"},"make install-tools")," command in your shell, but you failed to make build and encountered one of the following error messages:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"# error message 1\nbuf: command not found\n# you can execute the following command, assumed that you installed golang in /usr/local/go/bin. Other OS are similar.\nGO111MODULE=on GOBIN=/usr/local/go/bin go install github.com/bufbuild/buf/cmd/buf@v1.25.0\n\n# error message 2\nFailure: plugin gocosmos: could not find protoc plugin for name gocosmos - please make sure protoc-gen-gocosmos is installed and present on your $PATH\n# you can execute the fowllowing command, assumed that you installed golang in /usr/local/go/bin. Other OS are similar.\nGO111MODULE=on GOBIN=/usr/local/go/bin go install github.com/cosmos/gogoproto/protoc-gen-gocosmos@latest\n\n# if you want to execute unit test of sp, you should execute the following command, assumed that you installed golang in /usr/local/go/bin. Other OS are similar.\nGO111MODULE=on GOBIN=/usr/local/go/bin go install go.uber.org/mock/mockgen@latest\n")),(0,a.kt)("p",null,"Above error messages are due to users don't set go env correctly. More info users can search ",(0,a.kt)("inlineCode",{parentName:"p"},"GOROOT"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"GOPATH")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"GOBIN"),"."),(0,a.kt)("h2",{id:"sp-dependencies"},"SP Dependencies"),(0,a.kt)("p",null,"If a user wants to start SP in local mode or testnet mode, you must prepare ",(0,a.kt)("inlineCode",{parentName:"p"},"SPDB"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"BSDB")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"PieceStore")," dependencies."),(0,a.kt)("h3",{id:"spdb-and-bsdb"},"SPDB and BSDB"),(0,a.kt)("p",null,"SP uses ",(0,a.kt)("a",{parentName:"p",href:"/greenfield-docs/docs/guide/storage-provider/modules/spdb"},"SPDB")," and ",(0,a.kt)("a",{parentName:"p",href:"/greenfield-docs/docs/guide/storage-provider/modules/bsdb"},"BSDB")," to store some metadata such as object info, object integrity hash, etc. These two DBs now use ",(0,a.kt)("inlineCode",{parentName:"p"},"RDBMS")," to complete corresponding function."),(0,a.kt)("p",null,"Users now can use ",(0,a.kt)("inlineCode",{parentName:"p"},"MySQL")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"MariaDB")," to store metadata.The following lists the supported RDBMS:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://www.mysql.com/"},"MySQL")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://mariadb.org/"},"MariaDB"))),(0,a.kt)("p",null,"More types of database such as ",(0,a.kt)("inlineCode",{parentName:"p"},"PostgreSQL")," or NewSQL will be supported in the future."),(0,a.kt)("h3",{id:"piecestore"},"PieceStore"),(0,a.kt)("p",null,"Greenfield is a decentralized data storage system which uses object storage as the main data storage system. SP encapsulates data storage as ",(0,a.kt)("a",{parentName:"p",href:"/greenfield-docs/docs/guide/storage-provider/modules/piece-store"},"PieceStore")," which provides common interfaces to be compatible with multiple data storage systems. Therefore, if a user wants to join SP or test the function of SP, you must use a data storage system."),(0,a.kt)("p",null,"The following lists the supported data storage systems:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://aws.amazon.com/s3/"},"AWS S3"),": An object storage can be used in production environment."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://www.alibabacloud.com/en/product/object-storage-service"},"Aliyun OSS"),": Fully managed object storage service to store and access any amount of data from anywhere."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://www.backblaze.com/cloud-storage"},"B2"),": Backblaze B2 provides unlimited data storage in the cloud at 1/5th the cost of Amazon S3."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://min.io/"},"MinIO"),": An object storage can be used in production environment which is compatible with AWS S3."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/POSIX"},"POSIX Filesystem"),": Local filesystem is used for experiencing the basic features of SP and understanding how SP works. The piece data created by SP cannot be got within the network and can only be used on a single machine.")),(0,a.kt)("p",null,"Detailed info about ",(0,a.kt)("inlineCode",{parentName:"p"},"PieceStore"),", you can refer this ",(0,a.kt)("a",{parentName:"p",href:"/greenfield-docs/docs/guide/storage-provider/run-book/piece-store"},"doc"),"."),(0,a.kt)("h3",{id:"install-dependencies"},"Install Dependencies"),(0,a.kt)("h4",{id:"install-mysql-in-centos"},"Install MySQL in CentOS"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Install MySQL yum package")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"# 1. Download MySQL yum package\nwget http://repo.mysql.com/mysql57-community-release-el7-10.noarch.rpm\n\n# 2. Install MySQL source\nrpm -Uvh mysql57-community-release-el7-10.noarch.rpm\n\n# 3. Install public key\nrpm --import https://repo.mysql.com/RPM-GPG-KEY-mysql-2022\n\n# 4. Install MySQL server\nyum install -y mysql-community-server\n\n# 5. Start MySQL\nsystemctl start mysqld.service\n\n# 6. Check whether the startup is successful\nsystemctl status mysqld.service\n\n# 7. Get temporary password\ngrep 'temporary password' /var/log/mysqld.log \n\n# 8. Login MySQL through temporary password\n# After you log in with the temporary password, do not perform any other operations. Otherwise, an error will occur. In this case, you need to change the password\nmysql -uroot -p\n\n# 9. change MySQL password rules\nmysql> set global validate_password_policy=0;\nmysql> set global validate_password_length=1;\nmysql> ALTER USER 'root'@'localhost' IDENTIFIED BY 'yourpassword';\n")))}m.isMDXComponent=!0}}]);