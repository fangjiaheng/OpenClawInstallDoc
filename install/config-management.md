---
title: 配置管理
---

# 配置管理

## 配置文件

默认位置：`~/.openclaw/config.yaml`

## 命令行管理

```bash
# 查看所有配置
openclaw config list

# 设置配置项
openclaw config set <key> <value>

# 获取配置项
openclaw config get <key>

# 重置为默认
openclaw config reset
```

## 配置导出/导入

```bash
# 导出
openclaw config export > my-config.yaml

# 导入
openclaw config import my-config.yaml
```
