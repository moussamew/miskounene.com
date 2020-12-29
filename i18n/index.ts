import i18n from 'i18next'
import frenchTranslations from './fr-FR.json'
import englishTranslations from './en-US.json'

export enum Language {
  FR = 'fr',
  EN = 'en',
}

i18n.init({
  resources: {
    fr: frenchTranslations,
    en: englishTranslations,
  },
  fallbackLng: Language.EN,
  lng: Language.EN,
  interpolation: {
    escapeValue: false,
  },
  react: {
    useSuspense: false,
  },
})

export default i18n
