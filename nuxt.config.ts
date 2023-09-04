export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@element-plus/nuxt',
    '@nuxtjs/i18n',
  ],
  build: {
    transpile: ['element-plus/es'],
  },
  elementPlus: { /** Options */ },
})
