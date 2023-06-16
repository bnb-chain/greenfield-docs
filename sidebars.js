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
        "guide/introduction/ecosystem",
        "guide/introduction/token-economics",
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
        "guide/getting-started/get-test-bnb",
        "guide/getting-started/interact-with-greenfield",
      ],
    },
    {
      type: "category",
      label: "Core Concepts",
      collapsible: true,
      collapsed: true,
      items:[
        "guide/concept/accounts",
        "guide/concept/key-management",
        "guide/concept/gas-fees",
        "guide/concept/billing-payment",
        "guide/concept/simple-storage-svc-model",
        "guide/concept/programmability",
        "guide/concept/data-availability",
        "guide/concept/transaction-lifecycle",
        "guide/concept/data-storage",
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
          type: 'doc', id: 'guide/storage-provider/cli/cli',
        },
        {
          type: "category",
          label: "Run Book",
          collapsible: true,
          collapsed: true,
          items:[
            "guide/storage-provider/run-book/compile-dependences",
            "guide/storage-provider/run-book/run-local-SP-network",
            "guide/storage-provider/run-book/run-testnet-SP-node",
            "guide/storage-provider/run-book/run-mainnet-SP-node"
          ]
        }
      ]
    },
    {
      type: "category",
      label: "Build Dapps",
      collapsible: true,
      collapsed: true,
      items:[
        "guide/dapp/overview",
        "guide/dapp/quick-start",
        "guide/dapp/primitive-interface",
        "guide/dapp/dapp-integration",
        "guide/dapp/permisson-control",
        "guide/dapp/contract-list",
        "guide/dapp/showcases"
      ]
    },
    {
      type: 'doc', id:'guide/resources'
    }
  ],

  apiReferenceSidebar:[
    {type: 'doc', id: 'api-sdk/endpoints'},
    {
      type: "category",
      label: "Blockchain API",
      link: {
        type: 'doc',
        id: 'api-sdk/blockchain-rest',
      },
      // @ts-ignore
      items: require("./docs/greenfield-api/sidebar.js"),
    },
    {
      type:"category",
      label: "Storage Provider API",
      items:[
        "api-sdk/storgae-provider-rest/get_approval",
        "api-sdk/storgae-provider-rest/put_object",
        "api-sdk/storgae-provider-rest/get_object",
        "api-sdk/storgae-provider-rest/query_bucket_read_quota",
        "api-sdk/storgae-provider-rest/list_bucket_read_records",
        "api-sdk/storgae-provider-rest/get_user_buckets",
        "api-sdk/storgae-provider-rest/list_objects_by_bucket",
        {
          type:"category",
          label: "Reference",
          items:[
            "api-sdk/storgae-provider-rest/referenece/virtual_hosting_of_buckets",
            "api-sdk/storgae-provider-rest/referenece/gnfd_headers"
          ]
        },
        {
          type:"category",
          label: "Common",
          items:[
            "api-sdk/storgae-provider-rest/common/error",
            "api-sdk/storgae-provider-rest/common/get_approval_header",
          ]
        },
      ]
    },

    {type: 'doc', id: 'api-sdk/events'},
    { type:'doc', id:'api-sdk/sdk'}
  ],

  faqSidebar:[
    {type: 'doc', id: 'faq/greenfield-faqs'},
  ],

  releaseNotesSidebar:[
    {type: 'doc', id: 'release-notes/releaseNotes'},
    {type: 'doc', id: 'release-notes/roadmap'},
    {type: 'doc', id: 'release-notes/features'},
  ],

};

module.exports = sidebars;
