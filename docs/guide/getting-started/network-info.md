---
siebar_label: Network Information 
---

# Network Information

## DCellar
[DCellar](https://dcellar.io), as the inaugural application built on the BNB Greenfield, serves as an ultimate client of the BNB Greenfield network. Besides Basic file management and asset management functions, DCellar can also greatly assist developers in comprehending the functionalities of Greenfield:

- Basic File & Asset Management: With Dcellar, both developers and normal users can upload, store and share files very easily, as well as transfer in/out tokens easily. Besides, DCellar supports batch operations, you can upload, download, delete multiple files at a time. [Check it out →](https://docs.nodereal.io/docs/dcellar-get-started)
- NFT Storage and Minting: With DCellar, developers and users can conveniently store their NFT resources and associated metadata, enabling them to easily mint their own NFTs. Compared to alternative solutions, DCellar provides a more intuitive interaction process, ensuring a seamless experience for users. [Check it out →](https://docs.nodereal.io/docs/dcellar-as-developer-tool#nft-metadata-and-medium-storage)
- SP Connectivity Verification: Greenfield network clients can leverage DCellar to upload and download files to their Service Provider (SP), thereby verifying the correct connection of the SP to the network. This feature enables users to ensure smooth and reliable communication with their chosen SP.[Check it out →](https://docs.nodereal.io/docs/dcellar-as-developer-tool#nft-metadata-and-medium-storage)
- Web Server Functionality: DCellar also functions as a web server, allowing users to effortlessly upload their frontend code to the platform. By setting the uploaded content to public access, anyone can access your web application simply by opening the universal link. This feature simplifies the process of hosting and sharing web applications.[Check it out →](https://docs.nodereal.io/docs/dcellar-as-developer-tool#web-hosting)

## Block Explorers

- [GreenfieldScan](https://greenfieldscan.com), developed by TraceReal.
- [BSC Testnet Explorer](hhttps://testnet.bscscan.com/)

## Testnet Faucet

Please use the official BSC testnet faucet and convert it into BNB on Greenfield through Dcellar,
[Check it out →](https://discord.com/invite/bnbchain) and claim in the testnet-faucet channel.

## Bridge

Greenfield Data Network is a separate blockchain system connected to BNB Smart Chain(BSC), Developers usually need to move assets between Greenfield and BNB Smart Chain(BSC). Besides using native bridge SDKs , you can use DCellar as a Bridge WebUI to move your BNB between these two networks.  [Try it out →](https://dcellar.io)

## RPC Endpoints

### Greenfield Blockchain (Testnet chain-id: greenfield_5600-1)

- `https://gnfd-testnet-fullnode-tendermint-us.bnbchain.org` 
- `https://gnfd-testnet-fullnode-tendermint-us.nodereal.io`

### Greenfield Storage Provider (Testnet)

- `https://gnfd-testnet-sp-1.bnbchain.org` 
- `https://gnfd-testnet-sp-2.bnbchain.org`
- `https://gnfd-testnet-sp-3.bnbchain.org`
- `https://gnfd-testnet-sp-4.bnbchain.org`
- `https://gnfd-testnet-sp-5.bnbchain.org`
- `https://gnfd-testnet-sp-6.bnbchain.org`
- `https://gnfd-testnet-sp-7.bnbchain.org`
- `https://gnfd-testnet-sp-1.nodereal.io`

### Mirroring addresses (Testnet)

- Cross-chain address - the cross chain transaction bridge address `0x57b8A375193b2e9c6481f167BaECF1feEf9F7d4B`
- Group hub address - the smart contract used to interact with group and permissions (also the one that calls callbacks) `0x0Bf7D3Ed3F777D7fB8D65Fb21ba4FBD9F584B579`
- Group token address (ERC-721) `0x089AFF7964E435eB2C7b296B371078B18E2C9A35`
- Permission token address (ERC-1155) `0x80Dd11998159cbea4BF79650fCc5Da72Ffb51EFc`

## Related Projects

- [Greenfield-Blockchain](https://github.com/bnb-chain/greenfield): official Golang implementation of the Greenfield Blockchain.
- [Greenfield-Cosmos-sdk](https://github.com/bnb-chain/greenfield-cosmos-sdk) a cosmos-sdk fork for greenfield.
- [Greenfield-Tendermint](https://github.com/bnb-chain/greenfield-tendermint): the consensus layer of Greenfield blockchain.
- [Greenfield-Contract](https://github.com/bnb-chain/greenfield-contracts): the cross chain contract for Greenfield that deployed on BSC network.
- [Greenfield-Relayer](https://github.com/bnb-chain/greenfield-relayer): the service that relay cross chain package to both chains.
- [Greenfield-Storage-Provider](https://github.com/bnb-chain/greenfield-storage-provider): the storage service infrastructures provided by either organizations or individuals.
- [Greenfield-Cmd](https://github.com/bnb-chain/greenfield-cmd): the most powerful command line to interact with Greenfield system.
- [Greenfield-Common](https://github.com/bnb-chain/greenfield-common): a common library for different repos of greenfield.

## Other

- [awesome-cosmos](https://github.com/cosmos/awesome-cosmos): A community curated list of awesome projects related to the Cosmos ecosystem
