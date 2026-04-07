import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import enCommon from './en/common.json'
import amCommon from './am/common.json'

const STORAGE_KEY = 'orthodoxpath-lang'

function getStoredLanguage() {
  if (typeof window === 'undefined') return 'en'
  const stored = window.localStorage.getItem(STORAGE_KEY)
  return stored === 'am' || stored === 'en' ? stored : 'en'
}

function setHtmlLang(lng) {
  if (typeof document === 'undefined') return
  document.documentElement.lang = lng
}

const initialLng = getStoredLanguage()
setHtmlLang(initialLng)

i18n.use(initReactI18next).init({
  resources: {
    en: { common: enCommon },
    am: { common: amCommon },
  },
  lng: initialLng,
  fallbackLng: 'en',
  defaultNS: 'common',
  ns: ['common'],
  interpolation: {
    escapeValue: false,
  },
})

i18n.on('languageChanged', (lng) => {
  if (typeof window !== 'undefined') {
    window.localStorage.setItem(STORAGE_KEY, lng)
  }
  setHtmlLang(lng)
})

export { STORAGE_KEY }
export default i18n
