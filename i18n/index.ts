import i18n from 'i18next'
import frenchTranslations from './fr-FR.json'
import englishTranslations from './en-US.json'

i18n.init({
  resources: {
    fr: frenchTranslations,
    en: englishTranslations,
  },
  fallbackLng: 'en',
  lng: 'en',
  interpolation: {
    escapeValue: false,
  },
  react: {
    useSuspense: false,
  },
})

export default i18n
