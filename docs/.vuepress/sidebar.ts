import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "/",
    {
      text: "U盘手册",
      icon: "newspaper",
      prefix: "/guide/upan/",
      children: ['产品前言', '操作手册','激活工具使用','安装注意',],
    },
  ],
});
