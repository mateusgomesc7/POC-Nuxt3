import { en } from './en.json'
import { ptbr } from './ptbr.json'

export default defineI18nConfig(() => ({
    legacy: false,
    locale: 'en',
    messages: {
      en,
      ptbr
    }
  }))
  