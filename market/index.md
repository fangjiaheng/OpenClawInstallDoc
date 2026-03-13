---
title: 技能市场
sidebar: false
outline: false
pageClass: market-page
---

<style>
/* 仅针对技能市场页面的样式 */
.market-page .VPDoc.has-sidebar .content-container,
.market-page .VPDoc.has-aside .content-container {
  max-width: 100% !important;
}

.market-page .VPDoc .container {
  max-width: 100% !important;
}

.market-page .VPDoc .content {
  max-width: 100% !important;
  padding: 0 !important;
}

.market-page .VPDoc .aside {
  display: none !important;
}

.market-page .VPSidebar {
  display: none !important;
}
</style>

<style scoped>
.skills-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem 2rem;
}

.skills-header {
  text-align: center;
  margin-bottom: 3rem;
}

.skills-header h1 {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
}

.skills-header p {
  font-size: 1.1rem;
  color: var(--vp-c-text-2);
}

.category-title {
  font-size: 1.5rem;
  margin: 2.5rem 0 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid var(--vp-c-divider);
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.skill-card {
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  padding: 1.5rem;
  transition: all 0.3s ease;
  cursor: pointer;
}

.skill-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border-color: var(--vp-c-brand-1);
}

.skill-icon {
  font-size: 2rem;
  margin-bottom: 0.75rem;
}

.skill-name {
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: var(--vp-c-text-1);
}

.skill-desc {
  font-size: 0.9rem;
  color: var(--vp-c-text-2);
  margin-bottom: 1rem;
  line-height: 1.5;
}

.skill-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.85rem;
  color: var(--vp-c-text-3);
}

.skill-author {
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

.skill-install {
  background: var(--vp-c-brand-soft);
  color: var(--vp-c-brand-1);
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-family: monospace;
  font-size: 0.8rem;
}

.guide-section {
  max-width: 1000px;
  margin: 3rem auto;
  padding: 2rem;
  background: var(--vp-c-bg-soft);
  border-radius: 8px;
}

.guide-section h2 {
  margin-top: 0;
}

@media (max-width: 768px) {
  .skills-container {
    padding: 1.5rem 1rem;
  }

  .skills-grid {
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    gap: 1rem;
  }
}
</style>

<div class="skills-container">

<div class="skills-header">
  <h1>🎯 技能市场</h1>
  <p>探索社区贡献的 OpenClaw 技能，一键安装扩展你的 AI 助手能力</p>
</div>

<h2 class="category-title">🛠️ 开发工具</h2>

<div class="skills-grid">

<div class="skill-card">
  <div class="skill-icon">🐙</div>
  <div class="skill-name">GitHub 集成</div>
  <div class="skill-desc">管理仓库、查看 PR、处理 Issues</div>
  <div class="skill-meta">
    <div class="skill-author">👤 OpenClaw Team</div>
    <div class="skill-install">github</div>
  </div>
</div>

<div class="skill-card">
  <div class="skill-icon">🔍</div>
  <div class="skill-name">代码审查助手</div>
  <div class="skill-desc">自动代码审查、优化建议、安全检查</div>
  <div class="skill-meta">
    <div class="skill-author">👤 Community</div>
    <div class="skill-install">code-review</div>
  </div>
</div>

<div class="skill-card">
  <div class="skill-icon">⚡</div>
  <div class="skill-name">API 测试工具</div>
  <div class="skill-desc">快速测试 REST API、生成测试用例</div>
  <div class="skill-meta">
    <div class="skill-author">👤 Community</div>
    <div class="skill-install">api-tester</div>
  </div>
</div>

<div class="skill-card">
  <div class="skill-icon">📦</div>
  <div class="skill-name">包管理助手</div>
  <div class="skill-desc">依赖检查、版本更新、安全漏洞扫描</div>
  <div class="skill-meta">
    <div class="skill-author">👤 Community</div>
    <div class="skill-install">pkg-manager</div>
  </div>
</div>

<div class="skill-card">
  <div class="skill-icon">🔧</div>
  <div class="skill-name">Docker 助手</div>
  <div class="skill-desc">容器管理、镜像构建、日志查看</div>
  <div class="skill-meta">
    <div class="skill-author">👤 Community</div>
    <div class="skill-install">docker-helper</div>
  </div>
</div>

<div class="skill-card">
  <div class="skill-icon">📊</div>
  <div class="skill-name">性能分析</div>
  <div class="skill-desc">代码性能分析、优化建议</div>
  <div class="skill-meta">
    <div class="skill-author">👤 Community</div>
    <div class="skill-install">profiler</div>
  </div>
</div>

</div>

<h2 class="category-title">💼 办公效率</h2>

<div class="skills-grid">

<div class="skill-card">
  <div class="skill-icon">📝</div>
  <div class="skill-name">文档生成器</div>
  <div class="skill-desc">自动生成项目文档、API 文档</div>
  <div class="skill-meta">
    <div class="skill-author">👤 Community</div>
    <div class="skill-install">doc-gen</div>
  </div>
</div>

<div class="skill-card">
  <div class="skill-icon">📊</div>
  <div class="skill-name">数据分析</div>
  <div class="skill-desc">Excel/CSV 处理、数据可视化</div>
  <div class="skill-meta">
    <div class="skill-author">👤 Community</div>
    <div class="skill-install">data-analysis</div>
  </div>
</div>

<div class="skill-card">
  <div class="skill-icon">📧</div>
  <div class="skill-name">邮件助手</div>
  <div class="skill-desc">邮件分类、自动回复、信息提取</div>
  <div class="skill-meta">
    <div class="skill-author">👤 Community</div>
    <div class="skill-install">email-helper</div>
  </div>
</div>

<div class="skill-card">
  <div class="skill-icon">📅</div>
  <div class="skill-name">日程管理</div>
  <div class="skill-desc">日历集成、会议提醒、任务追踪</div>
  <div class="skill-meta">
    <div class="skill-author">👤 Community</div>
    <div class="skill-install">calendar</div>
  </div>
</div>

<div class="skill-card">
  <div class="skill-icon">📋</div>
  <div class="skill-name">待办清单</div>
  <div class="skill-desc">任务管理、优先级排序、进度追踪</div>
  <div class="skill-meta">
    <div class="skill-author">👤 Community</div>
    <div class="skill-install">todo-list</div>
  </div>
</div>

<div class="skill-card">
  <div class="skill-icon">🔔</div>
  <div class="skill-name">通知中心</div>
  <div class="skill-desc">集成多平台通知、智能提醒</div>
  <div class="skill-meta">
    <div class="skill-author">👤 Community</div>
    <div class="skill-install">notifier</div>
  </div>
</div>

</div>

<h2 class="category-title">🎨 内容创作</h2>

<div class="skills-grid">

<div class="skill-card">
  <div class="skill-icon">🖼️</div>
  <div class="skill-name">图片处理</div>
  <div class="skill-desc">批量压缩、格式转换、水印添加</div>
  <div class="skill-meta">
    <div class="skill-author">👤 Community</div>
    <div class="skill-install">image-tools</div>
  </div>
</div>

<div class="skill-card">
  <div class="skill-icon">🎬</div>
  <div class="skill-name">视频字幕</div>
  <div class="skill-desc">自动生成字幕、多语言翻译</div>
  <div class="skill-meta">
    <div class="skill-author">👤 Community</div>
    <div class="skill-install">subtitle-gen</div>
  </div>
</div>

<div class="skill-card">
  <div class="skill-icon">🌐</div>
  <div class="skill-name">翻译助手</div>
  <div class="skill-desc">多语言翻译、术语对照</div>
  <div class="skill-meta">
    <div class="skill-author">👤 Community</div>
    <div class="skill-install">translator</div>
  </div>
</div>

<div class="skill-card">
  <div class="skill-icon">✍️</div>
  <div class="skill-name">文案助手</div>
  <div class="skill-desc">SEO 优化、标题生成、内容润色</div>
  <div class="skill-meta">
    <div class="skill-author">👤 Community</div>
    <div class="skill-install">copywriter</div>
  </div>
</div>

<div class="skill-card">
  <div class="skill-icon">🎵</div>
  <div class="skill-name">音频处理</div>
  <div class="skill-desc">音频转文字、降噪、格式转换</div>
  <div class="skill-meta">
    <div class="skill-author">👤 Community</div>
    <div class="skill-install">audio-tools</div>
  </div>
</div>

<div class="skill-card">
  <div class="skill-icon">📸</div>
  <div class="skill-name">截图工具</div>
  <div class="skill-desc">网页截图、滚动截图、标注</div>
  <div class="skill-meta">
    <div class="skill-author">👤 Community</div>
    <div class="skill-install">screenshot</div>
  </div>
</div>

</div>

<h2 class="category-title">💰 金融工具</h2>

<div class="skills-grid">

<div class="skill-card">
  <div class="skill-icon">📈</div>
  <div class="skill-name">股票行情</div>
  <div class="skill-desc">实时查询股票价格、K线数据、盘口信息</div>
  <div class="skill-meta">
    <div class="skill-author">👤 Community</div>
    <div class="skill-install">stock-quote</div>
  </div>
</div>

<div class="skill-card">
  <div class="skill-icon">📊</div>
  <div class="skill-name">财务分析</div>
  <div class="skill-desc">上市公司财报分析、财务指标计算</div>
  <div class="skill-meta">
    <div class="skill-author">👤 Community</div>
    <div class="skill-install">financial-analysis</div>
  </div>
</div>

<div class="skill-card">
  <div class="skill-icon">📉</div>
  <div class="skill-name">技术指标</div>
  <div class="skill-desc">MA、MACD、KDJ 等技术指标分析</div>
  <div class="skill-meta">
    <div class="skill-author">👤 Community</div>
    <div class="skill-install">tech-indicator</div>
  </div>
</div>

<div class="skill-card">
  <div class="skill-icon">💼</div>
  <div class="skill-name">投资组合</div>
  <div class="skill-desc">持仓管理、收益计算、风险分析</div>
  <div class="skill-meta">
    <div class="skill-author">👤 Community</div>
    <div class="skill-install">portfolio</div>
  </div>
</div>

<div class="skill-card">
  <div class="skill-icon">🔔</div>
  <div class="skill-name">行情提醒</div>
  <div class="skill-desc">价格预警、涨跌停提醒、成交量异动</div>
  <div class="skill-meta">
    <div class="skill-author">👤 Community</div>
    <div class="skill-install">price-alert</div>
  </div>
</div>

<div class="skill-card">
  <div class="skill-icon">📰</div>
  <div class="skill-name">资讯聚合</div>
  <div class="skill-desc">财经新闻、公告、研报自动抓取</div>
  <div class="skill-meta">
    <div class="skill-author">👤 Community</div>
    <div class="skill-install">news-feed</div>
  </div>
</div>

</div>

<div class="guide-section">

## 📦 如何使用技能

### 安装技能

```bash
# 查看所有可用技能
openclaw skills list

# 安装指定技能
openclaw skills install <skill-name>

# 示例：安装 GitHub 集成
openclaw skills install github
```

### 使用技能

技能安装后会自动集成到 OpenClaw 中，直接在对话中使用：

```
你：帮我审查这段代码
AI：好的，我使用代码审查技能来分析...
```

### 管理技能

```bash
# 查看已安装的技能
openclaw skills installed

# 更新技能
openclaw skills update <skill-name>

# 卸载技能
openclaw skills uninstall <skill-name>
```

</div>

<div class="guide-section">

## 🛠️ 开发自己的技能

想要创建自定义技能？

1. 查看 [MCP 协议文档](https://modelcontextprotocol.io/)
2. 使用 [技能开发模板](https://github.com/openclaw/skill-template)
3. 加入 [社区讨论](https://github.com/openclaw/openclaw/discussions)

</div>

</div>
