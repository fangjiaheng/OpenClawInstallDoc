<template>
  <div class="channels-section">
    <p class="channels-section-title">已集成的消息渠道</p>
    <div class="marquee-wrapper">
      <div class="marquee-track">
        <a
          v-for="(ch, i) in [...channels, ...channels]"
          :key="`${ch.id}-${i}`"
          :href="`/channels/${ch.id}`"
          class="channel-card"
        >
          <img :src="`/assets/channels/${ch.id}.png`" :alt="ch.name" @error="onImgError" />
          <div>
            <div class="channel-card-name">{{ ch.name }}</div>
            <div class="channel-card-status">✅ 已支持</div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const channels = [
  { id: 'feishu',      name: '飞书' },
  { id: 'whatsapp',   name: 'WhatsApp' },
  { id: 'telegram',   name: 'Telegram' },
  { id: 'discord',    name: 'Discord' },
  { id: 'slack',      name: 'Slack' },
  { id: 'dingtalk',   name: '钉钉' },
  { id: 'wecom',      name: '企业微信' },
  { id: 'qqbot',      name: 'QQ 机器人' },
  { id: 'signal',     name: 'Signal' },
  { id: 'imessage',   name: 'iMessage' },
  { id: 'mattermost', name: 'Mattermost' },
]

function onImgError(e: Event) {
  const img = e.target as HTMLImageElement
  img.style.display = 'none'
}
</script>

<style scoped>
.channels-section {
  padding: 48px 0;
  overflow: hidden;
  background: var(--vp-c-bg-soft);
  border-top: 1px solid var(--vp-c-divider);
  border-bottom: 1px solid var(--vp-c-divider);
}

.channels-section-title {
  text-align: center;
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--vp-c-text-3);
  margin-bottom: 24px;
}

.marquee-wrapper {
  overflow: hidden;
  width: 100%;
}

.marquee-track {
  display: flex;
  width: max-content;
  animation: marquee 28s linear infinite;
  gap: 16px;
  padding: 4px 0;
  will-change: transform;
}

.marquee-track:hover {
  animation-play-state: paused;
}

@keyframes marquee {
  0%   { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

.channel-card {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 20px;
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  white-space: nowrap;
  cursor: pointer;
  transition: border-color 0.2s, box-shadow 0.2s;
  text-decoration: none;
  color: inherit;
  flex-shrink: 0;
}

.channel-card:hover {
  border-color: var(--vp-c-brand-1);
  box-shadow: 0 4px 16px rgba(224, 90, 43, 0.15);
}

.channel-card img {
  width: 32px;
  height: 32px;
  border-radius: 6px;
  object-fit: contain;
}

.channel-card-name {
  font-weight: 600;
  font-size: 0.95rem;
}

.channel-card-status {
  font-size: 0.78rem;
  color: #22c55e;
  font-weight: 500;
}
</style>
