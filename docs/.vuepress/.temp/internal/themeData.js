export const themeData = JSON.parse("{\"encrypt\":{},\"author\":{\"name\":\"惊涵网络\",\"url\":\"/\"},\"logo\":\"https://sihengl.gitee.io/jinghan/logo/Upan.png\",\"docsDir\":\"src\",\"footer\":\"惊涵网络-玖司恒\",\"displayFooter\":true,\"editLink\":false,\"contributors\":false,\"locales\":{\"/\":{\"lang\":\"en-US\",\"navbarLocales\":{\"langName\":\"English\",\"selectLangAriaLabel\":\"Select language\"},\"metaLocales\":{\"author\":\"Author\",\"date\":\"Writing Date\",\"origin\":\"Original\",\"views\":\"Page views\",\"category\":\"Category\",\"tag\":\"Tag\",\"readingTime\":\"Reading Time\",\"words\":\"Words\",\"toc\":\"On This Page\",\"prev\":\"Prev\",\"next\":\"Next\",\"lastUpdated\":\"Last update\",\"contributors\":\"Contributors\",\"editLink\":\"Edit this page\",\"print\":\"Print\"},\"outlookLocales\":{\"themeColor\":\"Theme Color\",\"darkmode\":\"Theme Mode\",\"fullscreen\":\"Full Screen\"},\"routeLocales\":{\"skipToContent\":\"Skip to main content\",\"notFoundTitle\":\"Page not found\",\"notFoundMsg\":[\"There’s nothing here.\",\"How did we get here?\",\"That’s a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"back\":\"Go back\",\"home\":\"Take me home\",\"openInNewWindow\":\"Open in new window\"},\"navbar\":[\"/\"],\"sidebar\":{\"/\":[{\"text\":\"首页\",\"icon\":\"home\",\"link\":\"/\"},{\"text\":\"U盘手册\",\"icon\":\"newspaper\",\"prefix\":\"guide/\",\"link\":\"/guide/产品前言.html\",\"children\":[\"/guide/产品前言.html\",\"/guide/操作手册.html\",\"/guide/激活工具使用.md\"]}]}}}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
