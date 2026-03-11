---
title: 基础配置
---

# 基础配置

## 配置文件位置

OpenClaw 配置文件默认存储在 `~/.openclaw/config.yaml`。

## 常用配置项

```yaml
# API 配置
api:
  provider: anthropic
  key: sk-ant-...
  model: claude-opus-4-5-20251101

# 服务配置
server:
  host: 0.0.0.0
  port: 3000

# 日志级别
log:
  level: info
```

## 环境变量

也可以通过环境变量覆盖配置：

```bash
ANTHROPIC_API_KEY=sk-ant-... openclaw start
```
