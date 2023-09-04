import { createI18n } from 'vue-i18n'
import Cookies from 'js-cookie'
import en from '@/locales/en.json'

// import ar from '@/locales/ar.json'
// import es from '@/locales/es.json'
// import fr from '@/locales/fr.json'
// import hi from '@/locales/hi.json'
// import ja from '@/locales/ja.json'
// import ru from '@/locales/ru.json'
// import zh from '@/locales/zh.json'
// import zhtw from '@/locales/zhtw.json'

const message = {
  // ar,
  en,
  // es,
  // fr,
  // hi,
  // ja,
  // ru,
  // zh,
  // zhtw,
}

const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: Cookies.get('lang') || 'zh',
  warnHtmlMessage: false,
  messages: message,
})

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(i18n)
})
