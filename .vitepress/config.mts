import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "星歌计划 - 文档站",
  description: "星歌计划 Minecraft 服务器官方文档 - 新手指南、服务器规则、游戏指令帮助",
  srcDir: 'pages',
  outDir: 'dist',
  ignoreDeadLinks: true,
  cleanUrls: true,
  
  // 多语言配置
  lang: 'zh-CN',
  
  // 头部标签配置
  head: [
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }],
    ['meta', { name: 'keywords', content: 'Minecraft, 星歌计划, 服务器, 文档, 指南, 新人教程' }],
    ['meta', { name: 'author', content: '星歌计划团队' }],
    ['meta', { name: 'theme-color', content: '#dfaf6a' }],
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }]
  ],
  
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    outline: {
      level: [2, 3],
      label: '页面导航'
    },
    
    // 导航栏配置 - 简洁专业的结构，参考 ClassIsland 设计
    nav: [
      { text: '首页', link: '/' },
      { text: '快速开始', link: '/beginner_helper/helper' },
      { 
        text: '服务器文档', 
        items: [
          { text: '服务器规则', link: '/docs/rules' },
          { text: '图像使用规则', link: '/docs/pic_rules' },
          { text: '指令说明', link: '/docs/commands' },
          { text: '插件介绍', link: '/docs/plugins' },
          { text: '常见问题', link: '/docs/faq' }
        ]
      },
      {
        text: '社区',
        items: [
          { text: '贡献指南', link: '/CONTRIBUTING' },
          { text: '写作规范', link: '/docs/STYLE_GUIDE' },
          { text: '术语表', link: '/docs/GLOSSARY' }
        ]
      }
    ],

    // 侧边栏配置 - ClassIsland 风格的层级结构
    sidebar: {
      '/': [
        {
          text: '🚀 快速开始',
          collapsed: false,
          items: [
            { text: '新人指南', link: '/beginner_helper/helper' },
            { text: '常见问题', link: '/docs/faq' }
          ]
        },
        {
          text: '📚 服务器文档',
          collapsed: false,
          items: [
            { text: '服务器规则', link: '/docs/rules' },
            { text: '图像使用规则', link: '/docs/pic_rules' },
            { text: '指令说明', link: '/docs/commands' },
            { text: '插件介绍', link: '/docs/plugins' }
          ]
        },
        {
          text: '🛠️ 社区',
          collapsed: true,
          items: [
            { text: '贡献指南', link: '/CONTRIBUTING' },
            { text: '写作规范', link: '/docs/STYLE_GUIDE' },
            { text: '内容准则', link: '/docs/CONTENT_GUIDELINES' },
            { text: '术语表', link: '/docs/GLOSSARY' }
          ]
        }
      ],
      '/beginner_helper/': [
        {
          text: '🚀 快速开始',
          items: [
            { text: '新人指南', link: '/beginner_helper/helper' },
            { text: '返回首页', link: '/' }
          ]
        }
      ],
      '/docs/': [
        {
          text: '📚 服务器文档',
          items: [
            { text: '服务器规则', link: '/docs/rules' },
            { text: '图像使用规则', link: '/docs/pic_rules' },
            { text: '指令说明', link: '/docs/commands' },
            { text: '插件介绍', link: '/docs/plugins' },
            { text: '常见问题', link: '/docs/faq' }
          ]
        },
        {
          text: '📖 社区指南',
          items: [
            { text: '写作规范', link: '/docs/STYLE_GUIDE' },
            { text: '内容准则', link: '/docs/CONTENT_GUIDELINES' },
            { text: '术语表', link: '/docs/GLOSSARY' }
          ]
        }
      ]
    },

    // 社交链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/DianFenMian/cdn_starsong_docs' }
    ],
    
    // 页脚配置 - ClassIsland 风格的专业版权信息
    footer: {
      message: '基于 MIT 许可发布',
      copyright: 'Copyright © 2024 星歌计划团队 | 本文档以 CC BY-NC-SA 4.0 许可协议授权'
    },
    
    // 编辑页面链接
    editLink: {
      pattern: 'https://github.com/DianFenMian/cdn_starsong_docs/edit/main/pages/:path',
      text: '在 GitHub 上编辑此页面'
    },
    
    // 最后更新时间
    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    },
    
    // 搜索配置
    search: {
      provider: 'local',
      options: {
        placeholder: '搜索文档',
        translations: {
          button: {
            buttonText: '搜索文档',
            buttonAriaLabel: '搜索文档'
          },
          modal: {
            searchBox: {
              resetButtonTitle: '清除查询条件',
              resetButtonAriaLabel: '清除查询条件',
              cancelButtonText: '取消',
              cancelButtonAriaLabel: '取消'
            },
            startScreen: {
              recentSearchesTitle: '搜索历史',
              noRecentSearchesText: '没有搜索历史',
              saveRecentSearchButtonTitle: '保存至搜索历史',
              removeRecentSearchButtonTitle: '从搜索历史中移除',
              favoriteSearchesTitle: '收藏',
              removeFavoriteSearchButtonTitle: '从收藏中移除'
            },
            errorScreen: {
              titleText: '无法获取结果',
              helpText: '你可能需要检查你的网络连接'
            },
            footer: {
              selectText: '选择',
              navigateText: '切换',
              closeText: '关闭'
            },
            noResultsScreen: {
              noResultsText: '无法找到相关结果',
              suggestedQueryText: '你可以尝试查询',
              reportMissingResultsText: '你认为该查询应该有结果？',
              reportMissingResultsLinkText: '点击反馈'
            }
          }
        }
      }
    }
  }
})
