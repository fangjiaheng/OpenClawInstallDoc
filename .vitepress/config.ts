import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: 'OpenClaw 安装指南',
  description: '真正能做事的 AI — 开源免费的 Claude 中文社区版',

  ignoreDeadLinks: true,

  head: [
    ['link', { rel: 'icon', href: '/assets/pixel-lobster.svg', type: 'image/svg+xml' }],
  ],

  themeConfig: {
    logo: '/assets/pixel-lobster.svg',
    siteTitle: 'OpenClaw 安装指南',

    nav: [
      { text: '首页', link: '/' },
      {
        text: '安装',
        link: '/install/',
        activeMatch: '/install/',
      },
      { text: '技能市场', link: '/market/' },
      { text: '技术支持', link: '/support/' },
    ],

    sidebar: [
      {
        text: '安装',
        collapsed: true,
        items: [
          { text: '安装概述', link: '/install/' },
          { text: 'Docker', link: '/install/docker' },
          { text: 'Node.js', link: '/install/node' },
          { text: '更新', link: '/install/updating' },
          { text: '卸载', link: '/install/uninstall' },
        ],
      },
      {
        text: '消息通道',
        collapsed: false,
        items: [
          { text: '微信', link: '/channels/wechat' },
          { text: '企业微信', link: '/channels/wecom' },
          { text: '飞书', link: '/channels/feishu' },
          { text: '钉钉', link: '/channels/dingtalk' },
          { text: 'QQ 机器人', link: '/channels/qqbot' },
          { text: 'Telegram', link: '/channels/telegram' },
          { text: 'WhatsApp', link: '/channels/whatsapp' },
          { text: 'iMessage', link: '/channels/imessage' },
        ],
      },
      // {
      //   text: '网关与运维',
      //   collapsed: true,
      //   items: [
      //     { text: 'Nginx 配置', link: '/ops/nginx' },
      //     { text: '反向代理', link: '/ops/reverse-proxy' },
      //     { text: '监控告警', link: '/ops/monitoring' },
      //   ],
      // },
      // {
      //   text: '工具与技能',
      //   collapsed: true,
      //   items: [
      //     { text: '内置工具', link: '/tools/builtin' },
      //     { text: 'MCP 协议', link: '/tools/mcp' },
      //     { text: '自定义技能', link: '/tools/custom' },
      //   ],
      // },
      // {
      //   text: '模型提供商',
      //   collapsed: true,
      //   items: [
      //     { text: 'Anthropic Claude', link: '/providers/anthropic' },
      //     { text: 'OpenAI 兼容', link: '/providers/openai-compat' },
      //     { text: '本地模型', link: '/providers/local' },
      //   ],
      // },
      // {
      //   text: '平台',
      //   collapsed: true,
      //   items: [
      //     { text: 'macOS', link: '/platform/macos' },
      //     { text: 'Linux', link: '/platform/linux' },
      //     { text: 'Windows', link: '/platform/windows' },
      //     { text: 'Docker', link: '/platform/docker' },
      //   ],
      // },
      // {
      //   text: '自动化',
      //   collapsed: true,
      //   items: [
      //     { text: '定时任务', link: '/automation/cron' },
      //     { text: 'Webhook', link: '/automation/webhook' },
      //     { text: '工作流', link: '/automation/workflow' },
      //   ],
      // },
      // {
      //   text: '核心概念',
      //   collapsed: true,
      //   items: [
      //     { text: '架构总览', link: '/concepts/architecture' },
      //     { text: '记忆系统', link: '/concepts/memory' },
      //     { text: '权限模型', link: '/concepts/permissions' },
      //   ],
      // },
    ],

    footer: {
      message: '基于 MIT 许可发布',
      copyright: 'Copyright © 2026-present OpenClaw-CN',
    },

    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium',
      },
    },

    docFooter: {
      prev: '上一页',
      next: '下一页',
    },

    outline: {
      label: '页面导航',
    },

    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
  },
})
