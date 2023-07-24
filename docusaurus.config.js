// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "BNB Greenfield",
  tagline: "Decentralized Data Storage and Economy",
  url: "https://bnb-chain.github.io/",
  baseUrl: "/greenfield-docs/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  trailingSlash: false,
  
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "bnb-chain", // Usually your GitHub org/user name.
  projectName: "greenfield-docs", // Usually your repo name.

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/bnb-chain/greenfield-docs/blob/main/",
          docLayoutComponent: "@theme/DocPage",
          docItemComponent: "@theme/ApiItem" // Derived from docusaurus-theme-openapi
        },
        blog: {
          showReadingTime: true,
          editUrl: "https://github.com/bnb-chain/greenfield-docs/blob/main/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css")
        }
      })
    ]
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      docs: {
        sidebar: {
          hideable: true
        }
      },
      algolia: {
        // The application ID provided by Algolia
        appId: '3LF005YNGZ',
  
        // Public API key: it is safe to commit it
        apiKey: 'dbc11ec6638f9c767ef6ed2856871f58',
  
        indexName: 'bnbchain',
  
        // Optional: see doc section below
        // contextualSearch: true,
  
        // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
        externalUrlRegex: 'https://docs.bnbchain.org/',
      },
      navbar: {
        title: "BNB Greenfield",
        logo: {
          alt: "Greenfield Logo",
          src: "img/logo.svg"
        },
        items: [
          {
            label: "Guide",
            position: "left",
            to: "/docs/guide/introduction/overview"
          },
          {
            //type: 'dropdown',
            label: "API Reference",
            position: "left",
            to: "/docs/api-sdk/endpoints",
          },
          
          {
            label: "Releases",
            position:"left",
            to: "/docs/release-notes/releaseNotes"
          },
          {
            label: "FAQs",
            position: "left",
            to: "/docs/faq/greenfield-faqs"
          },
          {
            href: 'https://github.com/bnb-chain/greenfield-docs',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
          },
        ]
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ["ruby", "csharp", "php"]
      }
    }),

  plugins: [
    [
      "docusaurus-plugin-openapi-docs",
      {
        id: "openapi",
        docsPluginId: "classic",
        config: {
          greenfield: {
            specPath: "swagger/greenfield-api.yaml",
            outputDir: "docs/greenfield-api",
            downloadUrl:
              "https://raw.githubusercontent.com/bnb-chain/greenfield-docs/main/swagger/greenfield-api.yaml",
           sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag"
            }
          }
        }
      }
    ]
  ],

  themes: ["docusaurus-theme-openapi-docs"]
};

module.exports = config;
