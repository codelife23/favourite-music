import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { INITIAL_LANGUAGE } from "./helpers/variables";

// Import translations
import { default as resources } from "./translations/index";

i18n.use(initReactI18next).init({
  resources,
  lng: INITIAL_LANGUAGE,
  debug: false,

  interpolation: {
    escapeValue: false, // not needed for react as it escapes by default
  },
});

export default i18n;
