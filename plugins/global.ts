import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import { ID_INJECTION_KEY } from 'element-plus'

export default defineNuxtPlugin(async (NuxtApp) => {
  // 全局组件引入
  for (const [key, component] of Object.entries(ElementPlusIconsVue))
    NuxtApp.vueApp.component(key, component)

  NuxtApp.vueApp.provide(ID_INJECTION_KEY, {
    prefix: Math.floor(Math.random() * 10000),
    current: 0,
  })
})
