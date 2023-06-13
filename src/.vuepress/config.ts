import { defineUserConfig } from "vuepress";
import { searchProPlugin } from "vuepress-plugin-search-pro";
import { redirectPlugin } from "vuepress-plugin-redirect";
import { getDirname, path } from "@vuepress/utils";
import theme from "./theme.js";

const base = process.env.BASE_PATH ? process.env.BASE_PATH : "/";

export default defineUserConfig({
  base: base,
  title: "BNB Greenfield",
  description: "Greenfield is a decentralized storage platform",
  // locales: {
  //   "/": {
  //     lang: "en-US",
  //     title: "Docs Demo",
  //     description: "A docs demo for vuepress-theme-hope",
  //   },
  //   "/zh/": {
  //     lang: "zh-CN",
  //     title: "文档演示",
  //     description: "vuepress-theme-hope 的文档演示",
  //   },
  // },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,

  plugins: [
    searchProPlugin({
      // index all contents
      indexContent: true,
      // add supports for category and tags
      customFields: [
        {
          getter: (page) => page.frontmatter.category,
          formatter: "Category: $content",
        },
        {
          getter: (page) => page.frontmatter.tag,
          formatter: "Tag: $content",
        },
      ],
    }),
    redirectPlugin({
    }),
  ],

  alias: {
    // Redirect aliases to modified theme components
    //
    // The modified DateInfo component displays the last published date rather than the
    // first published date so it is easier to see if a document has recently changed. 
    "@theme-hope/modules/info/components/DateInfo": path.resolve(
      getDirname(import.meta.url),
      "./components/DateInfo.ts",
    ),
  },
});
