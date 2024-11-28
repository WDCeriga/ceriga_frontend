import i18n from "i18next";
import Backend from "i18next-http-backend";
import LanguadeDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";


const resources = {
 
};

i18n
  .use(Backend)
  .use(LanguadeDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    debug: true,
    detection: {
      order: ["queryString", "cookie"],
      caches: ["cookie"],
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
