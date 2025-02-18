import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Импортируем переводы вручную
import translationEN from "./eng/translation.json";
import translationRU from "./ru/translation.json";

i18n
  .use(LanguageDetector) // Определение языка
  .use(initReactI18next) // Интеграция с React
  .init({
    fallbackLng: "ru", // Язык по умолчанию
    supportedLngs: ["ru", "en"],
    debug: true, // Включи для отладки
    resources: {
      en: { translation: translationEN },
      ru: { translation: translationRU },
    },
    interpolation: {
      escapeValue: false, // React уже экранирует строки
    },
    detection: {
      order: ["localStorage", "navigator"], // Откуда определять язык
      caches: ["localStorage"], // Сохранять в localStorage
    },
  });

export default i18n;
