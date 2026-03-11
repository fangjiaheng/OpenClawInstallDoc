<template>
  <div class="wechat-float">
    <a
      href="https://github.com/jiulingyun/openclaw-cn#社区"
      target="_blank"
      rel="noopener noreferrer"
      class="wechat-float-btn"
      title="加入社区"
    >
      <!-- WeChat icon -->
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.295.295a.326.326 0 0 0 .166-.054l1.903-1.114a.864.864 0 0 1 .717-.098 10.16 10.16 0 0 0 2.833.402c.268 0 .532-.012.796-.041-.27-.694-.418-1.436-.418-2.207 0-3.76 3.294-6.812 7.384-6.812.262 0 .52.014.776.04C15.984 4.977 12.64 2.188 8.69 2.188zm-1.9 3.42c.524 0 .949.424.949.949s-.425.948-.949.948-.948-.424-.948-.948.424-.949.948-.949zm5.012 0c.524 0 .949.424.949.949s-.425.948-.949.948-.948-.424-.948-.948.424-.949.948-.949z"/>
        <path d="M23.658 14.708c0-3.394-3.256-6.155-7.226-6.155-4.016 0-7.226 2.761-7.226 6.155 0 3.394 3.21 6.155 7.226 6.155.87 0 1.715-.126 2.496-.354a.655.655 0 0 1 .54.074l1.503.877a.26.26 0 0 0 .131.044.24.24 0 0 0 .24-.24.418.418 0 0 0-.04-.167l-.308-1.167a.473.473 0 0 1 .17-.532c1.418-1.07 2.294-2.647 2.294-4.49zm-9.593-.764a.745.745 0 1 1 0-1.49.745.745 0 0 1 0 1.49zm4.734 0a.745.745 0 1 1 0-1.49.745.745 0 0 1 0 1.49z"/>
      </svg>
      <span>加入社区</span>
    </a>
  </div>
</template>

<style scoped>
.wechat-float {
  position: fixed;
  bottom: 24px;
  right: 24px;
  z-index: 100;
}

.wechat-float-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 18px;
  background: #07c160;
  color: #fff;
  border: none;
  border-radius: 24px;
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 4px 20px rgba(7, 193, 96, 0.4);
  transition: transform 0.2s, box-shadow 0.2s;
  text-decoration: none;
  white-space: nowrap;
}

.wechat-float-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 28px rgba(7, 193, 96, 0.5);
  color: #fff;
}

.wechat-float-btn svg {
  width: 20px;
  height: 20px;
  fill: currentColor;
  flex-shrink: 0;
}

@media (max-width: 640px) {
  .wechat-float {
    bottom: 16px;
    right: 16px;
  }

  .wechat-float-btn span {
    display: none;
  }

  .wechat-float-btn {
    padding: 12px;
    border-radius: 50%;
  }
}
</style>
