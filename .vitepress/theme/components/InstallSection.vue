<template>
  <div class="install-section" id="install">
    <div class="install-section-header">
      <h2 class="install-section-title">一键安装</h2>
      <label class="mirror-toggle">
        <span>{{ isMirror ? '🇨🇳 国内镜像' : '🌐 国际源' }}</span>
        <label class="toggle-switch">
          <input type="checkbox" v-model="isMirror" />
          <span class="toggle-slider"></span>
        </label>
      </label>
    </div>

    <div class="install-tabs">
      <button
        v-for="(tab, i) in tabs"
        :key="tab.id"
        class="install-tab"
        :class="{ active: activeTab === i }"
        @click="activeTab = i"
      >
        {{ tab.label }}
      </button>
    </div>

    <div v-if="tabs[activeTab].id !== 'docker'" class="install-code-block">
      <pre><code>{{ currentCode }}</code></pre>
      <button class="copy-btn" @click="copyCode">{{ copied ? '✓ 已复制' : '复制' }}</button>
    </div>

    <div v-else>
      <div class="docker-info">
        <div class="docker-icon">🐳</div>
        <div>
          <div class="docker-desc">
            使用 Docker 快速部署 OpenClaw，无需配置环境。适合服务器和 NAS 用户。
          </div>
          <a href="/install/docker-quick" class="docker-link">查看完整 Docker 部署指南 →</a>
        </div>
      </div>
      <div class="install-code-block">
        <pre><code>{{ currentCode }}</code></pre>
        <button class="copy-btn" @click="copyCode">{{ copied ? '✓ 已复制' : '复制' }}</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const isMirror = ref(false)
const activeTab = ref(0)
const copied = ref(false)

const tabs = [
  { id: 'mac-linux', label: 'macOS / Linux' },
  { id: 'windows',   label: 'Windows' },
  { id: 'npm',       label: 'npm' },
  { id: 'pnpm',      label: 'pnpm' },
  { id: 'docker',    label: '🐳 Docker' },
]

const codes: Record<string, { intl: string; mirror: string }> = {
  'mac-linux': {
    intl: `curl -fsSL https://raw.githubusercontent.com/jiulingyun/openclaw-cn/main/install.sh | bash`,
    mirror: `curl -fsSL https://mirror.openclaw.cn/install.sh | bash`,
  },
  'windows': {
    intl: `irm https://raw.githubusercontent.com/jiulingyun/openclaw-cn/main/install.ps1 | iex`,
    mirror: `irm https://mirror.openclaw.cn/install.ps1 | iex`,
  },
  'npm': {
    intl: `npm install -g openclaw-cn`,
    mirror: `npm install -g openclaw-cn --registry https://registry.npmmirror.com`,
  },
  'pnpm': {
    intl: `pnpm add -g openclaw-cn`,
    mirror: `pnpm add -g openclaw-cn --registry https://registry.npmmirror.com`,
  },
  'docker': {
    intl: `docker run -d \\
  --name openclaw \\
  -e ANTHROPIC_API_KEY=your_key \\
  -v ~/.openclaw:/root/.openclaw \\
  ghcr.io/jiulingyun/openclaw-cn:latest`,
    mirror: `docker run -d \\
  --name openclaw \\
  -e ANTHROPIC_API_KEY=your_key \\
  -v ~/.openclaw:/root/.openclaw \\
  registry.cn-hangzhou.aliyuncs.com/openclaw/openclaw-cn:latest`,
  },
}

const currentCode = computed(() => {
  const tabId = tabs[activeTab.value].id
  return isMirror.value ? codes[tabId].mirror : codes[tabId].intl
})

async function copyCode() {
  try {
    await navigator.clipboard.writeText(currentCode.value)
    copied.value = true
    setTimeout(() => { copied.value = false }, 2000)
  } catch {
    // fallback: select text
  }
}
</script>

<style scoped>
.install-section {
  max-width: 900px;
  margin: 0 auto;
  padding: 48px 24px 64px;
}

.install-section-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
  flex-wrap: wrap;
  gap: 12px;
}

.install-section-title {
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0;
  border: none;
  padding: 0;
}

.mirror-toggle {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 0.9rem;
  color: var(--vp-c-text-2);
  cursor: pointer;
}

.toggle-switch {
  position: relative;
  width: 44px;
  height: 24px;
  display: inline-block;
}

.toggle-switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.toggle-slider {
  position: absolute;
  inset: 0;
  background: var(--vp-c-divider);
  border-radius: 24px;
  transition: background 0.25s;
  cursor: pointer;
}

.toggle-slider::before {
  content: '';
  position: absolute;
  width: 18px;
  height: 18px;
  left: 3px;
  top: 3px;
  background: #fff;
  border-radius: 50%;
  transition: transform 0.25s;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
}

.toggle-switch input:checked + .toggle-slider {
  background: var(--vp-c-brand-1);
}

.toggle-switch input:checked + .toggle-slider::before {
  transform: translateX(20px);
}

.install-tabs {
  display: flex;
  gap: 4px;
  border-bottom: 1px solid var(--vp-c-divider);
  margin-bottom: 0;
  padding-bottom: 0;
}

.install-tab {
  padding: 8px 16px;
  font-size: 0.88rem;
  font-weight: 500;
  cursor: pointer;
  border: none;
  background: transparent;
  color: var(--vp-c-text-2);
  border-bottom: 2px solid transparent;
  margin-bottom: -1px;
  border-radius: 4px 4px 0 0;
  transition: color 0.2s, border-color 0.2s;
  font-family: inherit;
}

.install-tab:hover {
  color: var(--vp-c-text-1);
}

.install-tab.active {
  color: var(--vp-c-brand-1);
  border-bottom-color: var(--vp-c-brand-1);
}

.install-code-block {
  position: relative;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 0 0 8px 8px;
  overflow: hidden;
}

.install-code-block pre {
  margin: 0;
  padding: 20px 24px;
  overflow-x: auto;
  font-size: 0.9rem;
  line-height: 1.6;
}

.install-code-block code {
  font-family: var(--vp-font-family-mono);
  color: var(--vp-c-text-1);
}

.copy-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 4px 10px;
  font-size: 0.78rem;
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider);
  border-radius: 6px;
  cursor: pointer;
  color: var(--vp-c-text-2);
  transition: all 0.2s;
  font-family: inherit;
}

.copy-btn:hover {
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
}

.docker-info {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  padding: 16px 0 0;
}

.docker-icon {
  font-size: 2.5rem;
  line-height: 1;
  flex-shrink: 0;
}

.docker-desc {
  font-size: 0.9rem;
  color: var(--vp-c-text-2);
  line-height: 1.6;
  padding-top: 4px;
}

.docker-link {
  display: inline-block;
  margin-top: 8px;
  color: var(--vp-c-brand-1);
  font-size: 0.875rem;
  font-weight: 500;
  text-decoration: none;
}

.docker-link:hover {
  text-decoration: underline;
}

@media (max-width: 640px) {
  .install-section-header {
    flex-direction: column;
    align-items: flex-start;
  }

  .install-tab {
    padding: 8px 10px;
    font-size: 0.82rem;
  }
}
</style>
