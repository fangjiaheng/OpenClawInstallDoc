---
title: Slack 通道配置
---

# Slack 通道配置

## 前置要求

- OpenClaw 已安装并运行
- Slack 工作区管理员权限
- Slack 应用配置权限

## 配置步骤

### 1. 创建机器人

在 Slack 开发者平台创建一个新的机器人或应用。

### 2. 获取凭据

记录以下信息：
- App ID / Bot Token
- App Secret / Webhook URL

### 3. 配置 OpenClaw

```bash
openclaw channel add slack \
  --app-id YOUR_APP_ID \
  --app-secret YOUR_APP_SECRET
```

### 4. 验证连接

```bash
openclaw channel status slack
```

## 常见问题

- 确保机器人已加入对应群组或频道
- 检查 API 权限是否完整
- 查看日志：`openclaw logs --channel slack`
