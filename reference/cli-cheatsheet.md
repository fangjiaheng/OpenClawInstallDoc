---
title: CLI 速查表
---

# CLI 速查表

## 基础命令

```bash
openclaw --help              # 显示帮助
openclaw --version           # 显示版本
openclaw start               # 启动服务
openclaw stop                # 停止服务
openclaw restart             # 重启服务
openclaw status              # 查看状态
```

## 配置命令

```bash
openclaw config list                    # 列出所有配置
openclaw config set api-key <key>       # 设置 API 密钥
openclaw config set model <model>       # 设置模型
openclaw config get <key>               # 获取配置值
openclaw config reset                   # 重置配置
```

## 技能命令

```bash
openclaw skill list                     # 列出已安装技能
openclaw skill install <name>           # 安装技能
openclaw skill uninstall <name>         # 卸载技能
openclaw skill update                   # 更新所有技能
```

## 通道命令

```bash
openclaw channel list                   # 列出通道
openclaw channel add feishu             # 添加飞书通道
openclaw channel remove <name>          # 移除通道
openclaw channel status                 # 查看通道状态
```

## 日志命令

```bash
openclaw logs                           # 查看最新日志
openclaw logs --follow                  # 实时日志流
openclaw logs --level error             # 只看错误日志
```

## 更新命令

```bash
openclaw update                         # 更新到最新版本
openclaw update --check                 # 检查是否有更新
```
