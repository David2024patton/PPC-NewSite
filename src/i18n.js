import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import enTranslation from "./locales/en/translation.json";
import esTranslation from "./locales/es/translation.json";
import frTranslation from "./locales/fr/translation.json";
import deTranslation from "./locales/de/translation.json";
import zhTranslation from "./locales/zh/translation.json";
import ruTranslation from "./locales/ru/translation.json";
import ukTranslation from "./locales/uk/translation.json";
import viTranslation from "./locales/vi/translation.json";

// Configure i18next
i18n
  .use(LanguageDetector) // Detect user language
  .use(initReactI18next) // Pass i18n instance to react-i18next
  .init({
    debug: true, // Enable debug mode for development
    fallbackLng: "en", // Fallback language if detection fails
    interpolation: {
      escapeValue: false, // React already escapes by default
    },
    resources: {
      en: {
        translation: enTranslation,
      },
      es: {
        translation: esTranslation,
      },
      fr: {
        translation: frTranslation,
      },
      de: {
        translation: deTranslation,
      },
      zh: {
        translation: zhTranslation,
      },
      ru: {
        translation: ruTranslation,
      },
      uk: {
        translation: ukTranslation,
      },
      vi: {
        translation: viTranslation,
      },
    },
  });

export default i18n;