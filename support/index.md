---
title: 技术支持
sidebar: false
outline: false
pageClass: support-page
prev: false
next: false
---

<style>
/* 仅针对技术支持页面的样式 */
.support-page .VPDoc.has-sidebar .content-container,
.support-page .VPDoc.has-aside .content-container {
  max-width: 100% !important;
}

.support-page .VPDoc .container {
  max-width: 100% !important;
}

.support-page .VPDoc .content {
  max-width: 100% !important;
  padding: 0 !important;
}

.support-page .VPDoc .aside {
  display: none !important;
}

.support-page .VPSidebar {
  display: none !important;
}
</style>

<style scoped>
.support-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem 3rem;
}

.support-header {
  text-align: center;
  margin-bottom: 3rem;
}

.support-header h1 {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
}

.support-header p {
  font-size: 1.1rem;
  color: var(--vp-c-text-2);
}

.cards-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-bottom: 2rem;
}

.support-card {
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  padding: 2rem;
}

.support-card h2 {
  margin-top: 0;
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
  color: var(--vp-c-text-1);
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.contact-item {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.contact-label {
  font-size: 0.9rem;
  color: var(--vp-c-text-2);
  font-weight: 500;
}

.contact-value {
  font-size: 1.2rem;
  color: var(--vp-c-text-1);
  font-weight: 600;
  font-family: monospace;
}

.contact-item img {
  width: 100%;
  max-width: 300px;
  height: auto;
  border-radius: 8px;
  margin: 1rem auto;
  display: block;
}

.service-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.service-list li {
  padding: 0.75rem 0;
  padding-left: 1.5rem;
  position: relative;
  color: var(--vp-c-text-1);
}

.service-list li:before {
  content: "✓";
  position: absolute;
  left: 0;
  color: var(--vp-c-brand-1);
  font-weight: bold;
}

@media (max-width: 768px) {
  .support-container {
    padding: 2rem 1rem;
  }

  .cards-row {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .support-card {
    padding: 1.5rem;
  }
}
</style>

<div class="support-container">

<div class="support-header">
  <h1>💬 技术支持</h1>
  <p>专业的技术支持团队，随时为您提供帮助</p>
</div>

<div class="cards-row">

<div class="support-card">
  <h2>🎯 专业服务</h2>

  <ul class="service-list">
    <li><strong>找不到合适的 AI 服务？</strong> - 我们提供专业的技术支持</li>
    <li><strong>企业级部署方案</strong> - 为您的团队定制最佳部署配置</li>
    <li><strong>Claude Code</strong> -  当前最流行和性能最强的AI之一</li>
    <li><strong>为你提供可靠的中转服务</strong> - 仅需0.8元/刀</li>
    <li><strong>后台支持试试查询用量</strong> - 无需担忧小龙虾大量耗费Token欠费的问题</li>
    <li><strong>技术24小时提供支持</strong> - 为你解决封号和用不了的后顾之忧</li>
  </ul>
</div>

<div class="support-card">
  <h2>📱 联系我们</h2>
  <div class="contact-info">
    <div class="contact-item">
      <img src="../images/WechatQRCode.jpg" alt="微信二维码" style="width: 100%; max-width: 300px; height: auto; border-radius: 8px; margin: 1rem auto; display: block;">
    </div>
  </div>
</div>

</div>

</div>
