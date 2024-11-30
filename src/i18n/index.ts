import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import zh from './locales/zh';
import en from './locales/en';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      zh: { translation: zh },
      en: { translation: en }
    },
    // 默认语言
    lng: 'en',
    // 当前语言的翻译不存在时，使用的语言
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n; 