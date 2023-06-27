import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "/",
    {
      text: "U盘手册",
      icon: "newspaper",
      prefix: true,
      children: ['/guide/产品前言.html', '/guide/操作手册.html','/guide/激活工具使用.md'],
    },
  ],
});