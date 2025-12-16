import { useTranslation } from "react-i18next";
import { useEffect } from "react";

export const useLanguage = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "ar" ? "en" : "ar";
    i18n.changeLanguage(newLang);
    localStorage.setItem("language", newLang);
    document.documentElement.dir = newLang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = newLang;
  };

  const setLanguage = (lang: "ar" | "en") => {
    i18n.changeLanguage(lang);
    localStorage.setItem("language", lang);
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = lang;
  };

  useEffect(() => {
    const savedLang = localStorage.getItem("language") || "ar";
    document.documentElement.dir = savedLang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = savedLang;
  }, []);

  return {
    currentLanguage: i18n.language,
    isArabic: i18n.language === "ar",
    toggleLanguage,
    setLanguage,
  };
};
