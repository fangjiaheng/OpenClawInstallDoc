import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import './custom.css'
import HeroBadge from './components/HeroBadge.vue'
import ChannelsMarquee from './components/ChannelsMarquee.vue'
import InstallSection from './components/InstallSection.vue'
import WechatFloat from './components/WechatFloat.vue'

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'home-hero-info-before': () => h(HeroBadge),
      'layout-bottom': () => h(WechatFloat),
    })
  },
  enhanceApp({ app }) {
    app.component('ChannelsMarquee', ChannelsMarquee)
    app.component('InstallSection', InstallSection)
    app.component('HeroBadge', HeroBadge)
    app.component('WechatFloat', WechatFloat)
  },
}
