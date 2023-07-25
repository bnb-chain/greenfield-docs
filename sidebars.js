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
        "guide/getting-started/resources",
        "guide/getting-started/get-test-bnb",
        //"guide/getting-started/interact-with-greenfield",
        "guide/introduction/ecosystem",
      ],
    },
    {
      type: "category",
      label: "Core Concepts",
      collapsible: true,
      collapsed: true,
      items:[
        "guide/concept/accounts",
        "guide/concept/billing-payment",
        "guide/concept/simple-storage-svc-model",
        "guide/concept/programmability",
        "guide/concept/data-availability",
        "guide/concept/transaction-lifecycle",
        "guide/concept/data-storage",
        "guide/concept/gas-fees",
        "guide/introduction/token-economics",
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
      label: "Building Smart Contract Dapp",
      collapsible: true,
      collapsed: true,
      link: {type:'doc', id:'guide/dapp/overview'},
      items:[
        "guide/dapp/quick-start",
        "guide/dapp/primitive-interface",
        "guide/dapp/dapp-integration",
        "guide/dapp/permisson-control",
        "guide/dapp/contract-list",
        "guide/dapp/showcases"
      ]
    },
    {
      type: "category",
      label: "Building Native Dapp",
      collapsible: true,
      collapsed: true,
      link: {type:'doc', id:'guide/native-app/overview'},
      items:[
      ]
    },
    {type:'doc', label:'FAQs', id:'faq/greenfield-faqs'},
    {type:'doc', label:'Contribute', id:'contribute'},
  ],

  apiReferenceSidebar:[
    {type: 'doc', label:'RPC Endpoints', id: 'api-sdk/endpoints'},
    {
      type: "category",
      label: "Blockchain API",
      link: {
        type: 'doc',
        id: 'api-sdk/blockchain-rest',
      },
      // @ts-ignore
      items: [
        {
          type: "category",
          label: "Command Line",
          link: {type: 'doc', id:'guide/greenfield-blockchain/cli/README'},
          collapsible: true,
          collapsed: true,
          items:[
            "guide/greenfield-blockchain/cli/key-management",
            "guide/greenfield-blockchain/cli/bank",
            "guide/greenfield-blockchain/cli/storage",
            "guide/greenfield-blockchain/cli/storage-provider",
            "guide/greenfield-blockchain/cli/bridge",
            "guide/greenfield-blockchain/cli/governance",
            "guide/greenfield-blockchain/cli/payment",
            "guide/greenfield-blockchain/cli/validator-staking",
          ]
        },
        require("./docs/greenfield-api/sidebar.js"),      
    ]
      
    },
    {
      type:"category",
      label: "Storage Provider API",
      items:[
        {
          type: 'doc', id: 'guide/storage-provider/cli/cli',
        },
        {
          type:"category",
          label: "API Endpoints",
          collapsed: true,
          items:[
            "api-sdk/storgae-provider-rest/get_approval",
          "api-sdk/storgae-provider-rest/put_object",
          "api-sdk/storgae-provider-rest/get_object",
          "api-sdk/storgae-provider-rest/query_bucket_read_quota",
          "api-sdk/storgae-provider-rest/list_bucket_read_records",
          "api-sdk/storgae-provider-rest/get_user_buckets",
          "api-sdk/storgae-provider-rest/list_objects_by_bucket",
          "api-sdk/storgae-provider-rest/get_nonce",
          "api-sdk/storgae-provider-rest/update_key",
          "api-sdk/storgae-provider-rest/get_group_list",
          "api-sdk/storgae-provider-rest/sp_response",
          "api-sdk/storgae-provider-rest/list_objects_by_object_ids",
          "api-sdk/storgae-provider-rest/list_buckets_by_bucket_ids",
          "api-sdk/storgae-provider-rest/verify_permission",
          "api-sdk/storgae-provider-rest/get_object_meta",
          "api-sdk/storgae-provider-rest/get_bucket_meta",
          ]
        },
        {
          type:"category",
          label: "Reference",
          items:[
            "api-sdk/storgae-provider-rest/reference/virtual_hosting_of_buckets",
            "api-sdk/storgae-provider-rest/reference/gnfd_headers"
          ]
        },
      ]
    },

    {type: 'doc', id: 'api-sdk/events'},

    {
      type: "category",
      label: "SDKs",
      link: {
        type: 'doc',
        id: 'api-sdk/sdks',
      },
      items:[
        "api-sdk/sdk-go",
        "api-sdk/sdk-js",
        "api-sdk/key-management"
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
