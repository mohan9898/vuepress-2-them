import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "/",
    {
      text: "U盘手册",
      collapsible: "true",
      icon: "newspaper",
      prefix: "/guide/upan/",
      children: ['产品前言', '操作手册','激活工具使用','安装注意',],
    },
    {
      text: "文件使用",
      collapsible: "true",
      icon: "fa-files",
      prefix: "/guide/file/",
      children: ['系统镜像下载',],
    },
  ],
});
