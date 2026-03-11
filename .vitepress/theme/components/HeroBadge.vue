<template>
  <div class="hero-badge-container">
    <a href="/install/updating" class="hero-badge">
      <span class="badge-new">NEW</span>
      <span class="badge-text">版本更新指南</span>
      <span class="badge-arrow">→</span>
    </a>
  </div>
</template>

<style scoped>
/* Styles are in custom.css for global override compatibility */
.hero-badge-container {
  display: flex;
  justify-content: center;
  margin-bottom: 16px;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 14px;
  background: var(--vp-c-brand-soft);
  border: 1px solid var(--vp-c-brand-1);
  border-radius: 20px;
  text-decoration: none;
  font-size: 0.82rem;
  font-weight: 500;
  color: var(--vp-c-brand-1);
  transition: background 0.2s, box-shadow 0.2s;
}

.hero-badge:hover {
  background: rgba(224, 90, 43, 0.2);
  box-shadow: 0 2px 12px rgba(224, 90, 43, 0.2);
}

.badge-new {
  background: var(--vp-c-brand-1);
  color: #fff;
  padding: 1px 7px;
  border-radius: 10px;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.04em;
}

.badge-arrow {
  opacity: 0.7;
}
</style>
