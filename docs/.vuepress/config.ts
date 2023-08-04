import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { defineClientConfig } from '@vuepress/client'
import GlobalPopup from './components/GlobalPopup.vue'

export default defineUserConfig({
  
  rootComponents: [GlobalPopup],

  base: "/",
  title: '惊涵系统U盘',
  head: [['link', { rel: 'icon', href: 'https://sihengl.gitee.io/jinghan/logo/Upan.png' }]],
  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});