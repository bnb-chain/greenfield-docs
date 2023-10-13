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
        "guide/getting-started/greenfield-command",
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
        "guide/core-concept/key-management",
        "guide/core-concept/billing-payment",
        "guide/core-concept/programmability",
        "guide/core-concept/simple-storage-service",
        "guide/core-concept/data-availability",
        "guide/core-concept/transaction-lifecycle",
        "guide/core-concept/storage-provider-lifecycle",
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
            "guide/greenfield-blockchain/modules/virtual-group",
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
          label: "Overview",
          collapsible: true,
          collapsed: true,
          items:[
            "guide/storage-provider/introduction/overview",
            "guide/storage-provider/introduction/workflow",
            "guide/storage-provider/introduction/standard",
          ]
        },
        {
          type: "category",
          label: "Modules",
          collapsible: true,
          collapsed: true,
          items:[
            "guide/storage-provider/modules/gateway",
            "guide/storage-provider/modules/approver",
            "guide/storage-provider/modules/authenticator",
            "guide/storage-provider/modules/uploader",
            "guide/storage-provider/modules/downloader",
            "guide/storage-provider/modules/signer",
            "guide/storage-provider/modules/manager",
            "guide/storage-provider/modules/taskexecutor",
            "guide/storage-provider/modules/receiver",
            "guide/storage-provider/modules/metadata",
            "guide/storage-provider/modules/blocksyncer",
            "guide/storage-provider/modules/spdb",
            "guide/storage-provider/modules/piece-store",
            "guide/storage-provider/modules/redundancy",
            "guide/storage-provider/modules/bsdb",
            "guide/storage-provider/modules/p2p",
          ]
        },
        
        {
          type: "category",
          label: "Run Storage Provider",
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
        id: 'api/storage-provider-rest/README',
      },
      items:[
          "api/storage-provider-rest/get_approval",
          "api/storage-provider-rest/put_object",
          "api/storage-provider-rest/resumable_put_object",
          "api/storage-provider-rest/get_object",
          "api/storage-provider-rest/query_bucket_read_quota",
          "api/storage-provider-rest/list_bucket_read_records",
          "api/storage-provider-rest/get_user_buckets",
          "api/storage-provider-rest/list_objects_by_bucket",
          "api/storage-provider-rest/get_nonce",
          "api/storage-provider-rest/update_key",
          "api/storage-provider-rest/get_group_list",
          "api/storage-provider-rest/sp_response",
          "api/storage-provider-rest/list_objects_by_ids",
          "api/storage-provider-rest/list_buckets_by_ids",
          "api/storage-provider-rest/verify_permission",
          "api/storage-provider-rest/get_object_meta",
          "api/storage-provider-rest/list_group_members",
          "api/storage-provider-rest/get_bucket_meta",
          "api/storage-provider-rest/list_user_groups",
          "api/storage-provider-rest/list_user_owned_groups",
          "api/storage-provider-rest/list_user_payment_accounts",
          "api/storage-provider-rest/list_user_payment_streams",
          "api/storage-provider-rest/list_groups_by_ids",
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
        "sdks/sdk-js"
      ],
    },
  ],

  tutorialsSidebar: [
    {
      type: "category",
      label: "Tutorials",
      collapsible: true,
      collapsed: true,
      link: {type:'doc', id:'tutorials/overview'},
      items:[
        {
          type: "category",
          label: "Building programmable storage",
          collapsible: true,
          collapsed: true,
          link: {type:'doc', id:'tutorials/dapp/overview'},
          items:[
            "tutorials/dapp/overview",
            "tutorials/dapp/quick-start",
            "tutorials/dapp/dapp-integration",
            "tutorials/dapp/permission-control",
            "tutorials/dapp/primitive-interface",
            "tutorials/dapp/contract-list",
            "tutorials/dapp/showcases",
          ]
        },
        {
          type: "category",
          label: "Interacting with storage",
          collapsible: true,
          collapsed: true,
          link: {type:'doc', id:'tutorials/native-dapp/overview'},
          items:[
            "tutorials/native-dapp/overview",
            {
              type: "category",
              label: "CLI",
              collapsible: true,
              collapsed: true,
              items:[
                "tutorials/native-dapp/cli/file-management/overview",
                "tutorials/native-dapp/cli/hosting-websites/overview",
              ]
            },
            {
              type: "category",
              label: "SDK",
              collapsible: true,
              collapsed: true,
              items:[
                "tutorials/native-dapp/sdk/file-management/overview",
                "tutorials/native-dapp/sdk/resumable-upload/overview",
                "tutorials/native-dapp/sdk/batch-upload"
              ]
            },
          ]
        }
      ]
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
