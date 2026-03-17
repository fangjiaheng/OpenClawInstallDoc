---
layout: home

hero:
  name: OpenClaw
  text: 真正能做事的 AI
  tagline: "🆓 开源免费 · 🔒 本地运行 · 💬 多平台支持"
  image:
    light: /assets/openclaw-logo-text-dark.avif
    dark: /assets/openclaw-logo-text.avif
    alt: OpenClaw
  actions:
    - theme: brand
      text: 快速安装
      link: /install/
    - theme: alt
      text: 查看文档
      link: /install/

features:
  - icon: 🖥️
    title: 本地运行
    details: 完全本地化运行，数据不上云，保护隐私。支持 macOS、Linux、Windows 和 Docker 部署。
  - icon: 💬
    title: 多平台支持
    details: 支持飞书、企业微信、钉钉、Telegram、WhatsApp、QQ 等多个主流消息平台。
  - icon: 🔧
    title: 完整系统访问
    details: 读写文件、执行终端命令、管理进程。真正意义上的计算机使用代理。
  - icon: 🔌
    title: 技能与插件
    details: 通过 MCP 协议扩展能力，访问技能市场安装社区贡献的插件，或自己开发定制技能。
---

## 快速开始

选择适合你的安装方式：

**一键安装脚本（推荐）**

```bash
curl -fsSL https://openclaw.ai/install.sh | bash
```

**Docker 部署**

```bash
./docker-setup.sh
```

**手动安装**

```bash
npm install -g openclaw@latest
openclaw onboard --install-daemon
```

查看完整安装文档：[安装指南](/install/)

## 相关链接

- [OpenClaw 官方文档](https://docs.openclaw.ai/zh-CN)
- [GitHub 仓库](https://github.com/openclaw/openclaw)
- [Node.js 官网](https://nodejs.org/zh-cn)
