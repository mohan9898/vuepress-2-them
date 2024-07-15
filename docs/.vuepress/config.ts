import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { hopeTheme } from "vuepress-theme-hope";

export default defineUserConfig({
  theme: hopeTheme({
    plugins: {
      components: {
        // 你想使用的组件
        components: [
          "ArtPlayer",
          "AudioPlayer",
          "Badge",
          "BiliBili",
          "CodePen",
          "PDF",
          "Replit",
          "Share",
          "SiteInfo",
          "StackBlitz",
          // "VidStack",
          "VideoPlayer",
          "XiGua",
          "YouTube",
        ],
      },
    },
  }),
  base: "/",
  title: '惊涵系统U盘',
  head: [['link', { rel: 'icon', href: 'https://raw.gitmirror.com/mohan9898/jinghan/main/win/logo/Upan.svg' }]],
  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
