---
title: Signal 通道配置
---

# Signal 通道配置

## 前置要求

- OpenClaw 已安装并运行
- Signal 账号
- signal-cli 已安装

## 配置步骤

### 1. 创建机器人

在 Signal 开发者平台创建一个新的机器人或应用。

### 2. 获取凭据

记录以下信息：
- App ID / Bot Token
- App Secret / Webhook URL

### 3. 配置 OpenClaw

```bash
openclaw channel add signal \
  --app-id YOUR_APP_ID \
  --app-secret YOUR_APP_SECRET
```

### 4. 验证连接

```bash
openclaw channel status signal
```

## 常见问题

- 确保机器人已加入对应群组或频道
- 检查 API 权限是否完整
- 查看日志：`openclaw logs --channel signal`
