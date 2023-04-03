import { defineUserConfig } from "vuepress";
import { searchProPlugin } from "vuepress-plugin-search-pro";
import { redirectPlugin } from 'vuepress-plugin-redirect';
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
});
