import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import ar from "./locales/ar.json";
import en from "./locales/en.json";

const getInitialLanguage = () => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("language") || "ar";
  }
  return "ar";
};

i18n.use(initReactI18next).init({
  resources: {
    ar: { translation: ar },
    en: { translation: en },
  },
  lng: getInitialLanguage(),
  fallbackLng: "ar",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
