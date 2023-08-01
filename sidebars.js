/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {

  guideSidebar:[
    {
      type: "category",
      label: "Introduction",
      link: {type: 'doc', id: 'guide/home'},
      collapsible: true,
      collapsed: true,
      items:[
        "guide/introduction/overview",
        "guide/introduction/why-greenfield",
      ],
    },
    {
      type: "category",
      label: "Getting Started",
      collapsible: true,
      collapsed: true,
      items:[
        "guide/getting-started/overview",
        "guide/getting-started/wallet-onfiguration",
        "guide/getting-started/network-info",
        "guide/getting-started/get-test-bnb",
        "guide/getting-started/ecosystem",
      ],
    },
    {
      type: "category",
      label: "Core Concepts",
      collapsible: true,
      collapsed: true,
      items:[
        "guide/core-concept/accounts",
        "guide/core-concept/billing-payment",
        "guide/core-concept/simple-storage-svc-model",
        "guide/core-concept/programmability",
        "guide/core-concept/data-availability",
        "guide/core-concept/transaction-lifecycle",
        "guide/core-concept/data-storage",
        "guide/core-concept/gas-fees",
      ],
    },
    {
      type: "category",
      label: "Greenfield Blockchain",
      collapsible: true,
      collapsed: true,
      items:[
        "guide/greenfield-blockchain/overview",
        {
          type: "category",
          label: "Modules",
          collapsible: true,
          collapsed: true,
          items:[
            "guide/greenfield-blockchain/modules/storage-module",
            "guide/greenfield-blockchain/modules/storage-provider",
            "guide/greenfield-blockchain/modules/billing-and-payment",
            "guide/greenfield-blockchain/modules/permission",
            "guide/greenfield-blockchain/modules/cross-chain",
            "guide/greenfield-blockchain/modules/consensus-and-staking",
            "guide/greenfield-blockchain/modules/governance",
            "guide/greenfield-blockchain/modules/data-availability-challenge",
            "guide/greenfield-blockchain/modules/world-state",
          ]
        },
        
        {
          type: "category",
          label: "Run Node",
          collapsible: true,
          collapsed: true,
          items:[
            "guide/greenfield-blockchain/run-node/interact-node",
            "guide/greenfield-blockchain/run-node/run-local-network",
            "guide/greenfield-blockchain/run-node/run-mainnet-node",
            "guide/greenfield-blockchain/run-node/run-testnet-node",
            "guide/greenfield-blockchain/run-node/run-testnet-relayer-and-challenger",
            "guide/greenfield-blockchain/run-node/become-testnet-validator",
          ]
        }
      ],
    },
    {
      type: "category",
      label: "Storage Provider",
      collapsible: true,
      collapsed: true,
      items:[
        {
          type: "category",
          label: "Introduction",
          collapsible: true,
          collapsed: true,
          items:[
            "guide/storage-provider/introduction/overview",
            "guide/storage-provider/introduction/architecture",
            "guide/storage-provider/introduction/standard",
          ]
        },
        {
          type: "category",
          label: "Services",
          collapsible: true,
          collapsed: true,
          items:[
            "guide/storage-provider/services/manager",
            "guide/storage-provider/services/p2p",
            "guide/storage-provider/services/spdb",
            "guide/storage-provider/services/piece-store",
            "guide/storage-provider/services/signer",
            "guide/storage-provider/services/gateway",
            "guide/storage-provider/services/uploader",
            "guide/storage-provider/services/receiver",
            "guide/storage-provider/services/downloader",
            "guide/storage-provider/services/challenge",
            "guide/storage-provider/services/gc",
            "guide/storage-provider/services/tasknode",
            "guide/storage-provider/services/bsdb",
            "guide/storage-provider/services/metadata",
            "guide/storage-provider/services/blocksyncer",
            "guide/storage-provider/services/auth",
            "guide/storage-provider/services/stopserving",
          ]
        },
        
        {
          type: "category",
          label: "Run Node",
          collapsible: true,
          collapsed: true,
          items:[
            "guide/storage-provider/run-book/compile-dependences",
            "guide/storage-provider/run-book/run-local-SP-network",
            "guide/storage-provider/run-book/run-testnet-SP-node",
            "guide/storage-provider/run-book/run-mainnet-SP-node",
            "guide/storage-provider/run-book/piece-store",
            "guide/storage-provider/run-book/config",
            "guide/storage-provider/run-book/common-issues"
          ]
        }
      ]
    },
    {
      type: "category",
      label: "Tutorials",
      collapsible: true,
      collapsed: true,
      link: {type:'doc', id:'guide/tutorials/overview'},
      items:[
        {
          type: "category",
          label: "Building Smart Contract dApps",
          collapsible: true,
          collapsed: true,
          link: {type:'doc', id:'guide/tutorials/dapp/overview'},
          items:[
            "guide/tutorials/dapp/overview",
            "guide/tutorials/dapp/quick-start",
            "guide/tutorials/dapp/primitive-interface",
            "guide/tutorials/dapp/dapp-integration",
            "guide/tutorials/dapp/permission-control",
            "guide/tutorials/dapp/contract-list",
            "guide/tutorials/dapp/showcases"
          ]
        },
        {
          type: "category",
          label: "Building Native dApps",
          collapsible: true,
          collapsed: true,
          link: {type:'doc', id:'guide/tutorials/native-dapp/overview'},
          items:[
            "guide/tutorials/native-dapp/overview",
            "guide/tutorials/native-dapp/file-management-cli/overview",
            "guide/tutorials/native-dapp/hosting-websites-cli/overview",
            "guide/tutorials/native-dapp/file-management-sdk/overview",
          ]
        },
      ]
    },
    {type:'doc', label:'Contribute', id:'contribute'},
  ],

  apiReferenceSidebar:[
    {type: 'doc', label:'RPC Endpoints', id: 'api/endpoints'},
    {
      type: "category",
      label: "Blockchain Command Line",
      link: {type: 'doc', id:'api/blockchain-cli/README'},
      collapsible: true,
      collapsed: true,
      items:[
        "api/blockchain-cli/key-management",
        "api/blockchain-cli/bank",
        "api/blockchain-cli/storage",
        "api/blockchain-cli/storage-provider",
        "api/blockchain-cli/bridge",
        "api/blockchain-cli/governance",
        "api/blockchain-cli/payment",
        "api/blockchain-cli/validator-staking",
        "api/blockchain-cli/challenge"
      ]
    },
    {
      type: "category",
      label: "Blockchain API",
      link: {
        type: 'doc',
        id: 'api/blockchain-rest',
      },
      // @ts-ignore
      items: [
        
        require("./docs/greenfield-api/sidebar.js"),      
    ]
      
    },
    {
      type: 'doc', label:'Storage Command Line', id: 'api/sp-cli',
    },
    {
      type:"category",
      label: "Storage Provider API",
      link: {
        type: 'doc',
        id: 'api/storgae-provider-rest/README',
      },
      items:[
          "api/storgae-provider-rest/get_approval",
          "api/storgae-provider-rest/put_object",
          "api/storgae-provider-rest/get_object",
          "api/storgae-provider-rest/query_bucket_read_quota",
          "api/storgae-provider-rest/list_bucket_read_records",
          "api/storgae-provider-rest/get_user_buckets",
          "api/storgae-provider-rest/list_objects_by_bucket",
          "api/storgae-provider-rest/get_nonce",
          "api/storgae-provider-rest/update_key",
          "api/storgae-provider-rest/get_group_list",
          "api/storgae-provider-rest/sp_response",
          "api/storgae-provider-rest/list_objects_by_object_ids",
          "api/storgae-provider-rest/list_buckets_by_bucket_ids",
          "api/storgae-provider-rest/verify_permission",
          "api/storgae-provider-rest/get_object_meta",
          "api/storgae-provider-rest/get_bucket_meta",
          
      ]        
    },

    {type: 'doc', id: 'api/events'},

    {
      type: "category",
      label: "SDKs",
      link: {
        type: 'doc',
        id: 'sdks/sdks',
      },
      items:[
        "sdks/sdk-go",
        "sdks/sdk-js",
        "sdks/key-management"
      ],
    },
  ],

  faqSidebar:[
    {
      type:"category", 
      label: "FAQs",
      link: {type: 'doc', id: 'faq/greenfield-faqs'},
      collapsible: true,
      collapsed: true,
      items:[
        {type: 'doc', id: 'faq/general-faqs'},
        {type: 'doc', id: 'faq/mirroring-faqs'},
      ]
    },
  ],

  releaseNotesSidebar:[
    {type: 'doc', id: 'release-notes/releaseNotes'},
    {type: 'doc', id: 'release-notes/roadmap'},
    {type: 'doc', id: 'release-notes/features'},
  ],

};

module.exports = sidebars;
