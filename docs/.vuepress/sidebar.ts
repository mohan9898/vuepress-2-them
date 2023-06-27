import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "/",
    {
      text: "U盘手册",
      icon: "newspaper",
      prefix: "/guide/",
      collapsible: true,
      children: ['/产品前言.html', '/操作手册.html','/激活工具使用.md'],
    },
  ],
});