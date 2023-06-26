import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  
  base: "/",
  title: '惊涵系统U盘',
  head: [['link', { rel: 'icon', href: 'https://sihengl.gitee.io/jinghan/logo/Upan.png' }]],
  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});