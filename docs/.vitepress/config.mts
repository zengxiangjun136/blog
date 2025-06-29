import { defineConfig } from 'vitepress'

export default defineConfig({

  vite: {
    server: {
      allowedHosts: true
    }
  },

  title: "finally",
  description: "为您提供最好的毕业指导方式",
  lastUpdated: true,
  themeConfig: {

    // 网站logo
    logo: '/logo.svg',

    // 头部导航栏
    nav: [
      { text: '主页', link: '/' },
      { text: '往期毕设', link: '/往期毕设参考/公寓租赁系统.md' },
      { text: '指导记录', link: '/指导记录参考/指导记录1.md' },
      { text: '业务接待', link: '/业务接待/index.md' },
      { text: '联系我们', link: '/联系我们/index.md' },
    ],

    // 侧边导航栏
    sidebar: {
      '/往期毕设参考/': [
        {
          text: '往期毕设参考',
          items: [
            { text: '公寓租赁系统', link: '/往期毕设参考/公寓租赁系统.md' },
            { text: '图书管理系统', link: '/往期毕设参考/图书管理系统.md' },
            { text: '音乐小程序', link: '/往期毕设参考/音乐小程序.md' }
          ]
        }
      ],
      '/指导记录参考/': [
        {
          text: '指导记录参考',
          items: [
            { text: '指导记录1', link: '/指导记录参考/指导记录1.md' },
            { text: '指导记录2', link: '/指导记录参考/指导记录2.md' },
            { text: '指导记录3', link: '/指导记录参考/指导记录3.md' }
          ]
        }
      ]
    },

    // 目录标题栏
    outline: {
      level: 'deep',
    },

    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },

    lastUpdated: {
      text: '最后更新于',
    },

    notFound: {
      title: '页面未找到',
      quote:
        '但如果你不改变方向，并且继续寻找，你可能最终会到达你所前往的地方。',
      linkLabel: '前往首页',
      linkText: '带我回首页'
    },

    langMenuLabel: '多语言',
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    skipToContentLabel: '跳转到内容',

    footer: {
      message: '基于 MIT 许可发布',
      copyright: `版权所有 © 2019-${new Date().getFullYear()} `
    },
  }
})
