---
title: 微信
---

# 微信

状态：可通过腾讯提供的微信插件接入 Openclaw。

---

## 快速开始

按下面顺序执行即可完成微信通道接入。

### 1. 安装微信插件

```bash
openclaw plugins install "@tencent-weixin/openclaw-weixin"
```

说明：

- 这条命令用于安装微信官方插件
- 只需要安装一次，安装完成后 Openclaw 才能识别 `openclaw-weixin` 这个通道
- 如果安装成功，后续就可以继续执行登录和网关重启

### 2. 登录微信通道

```bash
openclaw channels login --channel openclaw-weixin
```

说明：

- 这条命令用于给微信插件完成登录授权
- 执行后会进入交互式登录流程，通常需要按提示完成扫码或确认登录
- 登录成功后，本机会保存该通道的登录态，供 Gateway 接收和发送微信消息

### 3. 重启 Gateway 使通道生效

```bash
openclaw gateway restart
```

说明：

- 这条命令用于重启 Gateway，重新加载刚安装并登录完成的微信通道
- 如果 Gateway 原本已经在运行，执行这一步后新通道才会正式接管消息
- 如果您是首次配置，也可以直接运行 `openclaw gateway` 启动网关

---

## 推荐执行顺序

```bash
openclaw plugins install "@tencent-weixin/openclaw-weixin"
openclaw channels login --channel openclaw-weixin
openclaw gateway restart
```

对应关系：

- 第一步：安装插件
- 第二步：完成微信登录授权
- 第三步：重启网关加载微信通道

---

## 常见说明

### 为什么先装插件再登录

因为 `openclaw channels login --channel openclaw-weixin` 依赖插件提供的通道定义；如果插件未安装，Openclaw 无法识别这个 channel。

### 重启 Gateway 的目的是什么

Gateway 负责实际收发消息。安装插件和登录完成后，重启一次可以确保最新通道配置被加载。
