import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "星歌计划 - 文档站",
  description: "游玩手册 / 插件指南 / 命令帮助",
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
      { text: '新人指南', link: '/beginner_helper/helper' }
    ],

    sidebar: [
      {
        text: '指南',
        collapsed: false,
        items: [
          { text: '新人指南', link: 'beginner_helper/helper' },
        ]
      },
      {
        text: '文档',
        collapsed: true,
        items: [
          { text: '服务器守则', link: 'docs/rules' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/DianFenMian/cdn_starsong_docs' }
    ]
  }
})
