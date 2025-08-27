import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "星歌计划文档",
  description: "星歌计划 Minecraft 服务器官方文档",
  srcDir: 'pages',
  outDir: 'dist',
  ignoreDeadLinks: true,
  cleanUrls: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    outline: {
      level: [1, 3],    // 显示 h1 到 h3 级别的标题
    },
    nav: [
      { text: '首页', link: '/' },
      { text: '从这里开始', link: '/getting-started/welcome-letter' },
      { text: '管理教程', link: '/tutorials/admin-manual' },
      { text: '实时数据', link: '/updates/real-time-data' },
      { text: '规则附录', link: '/appendix/readme' }
    ],

    sidebar: [
      {
        text: '从这里开始',
        collapsed: false,
        items: [
          { text: '致您的一封信', link: '/getting-started/welcome-letter' }
        ]
      },
      {
        text: 'SSP使用教程',
        collapsed: false,
        items: [
          { text: '管理手册', link: '/tutorials/admin-manual' }
        ]
      },
      {
        text: '实时更新中',
        collapsed: false,
        items: [
          { text: '实时数据', link: '/updates/real-time-data' }
        ]
      },
      {
        text: '附录',
        collapsed: false,
        items: [
          { text: '此分组阅前必读', link: '/appendix/readme' },
          { text: '旅者公约（玩家守则）', link: '/appendix/player-covenant' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/TencentEdgeOne/pages-templates/tree/main/examples/vitepress-template' }
    ]
  }
})
