import React, { createContext, useContext, useState, useEffect } from "react";

const LanguageContext = createContext();

export const LanguageProvider = ({ children, initialLanguage }) => {
  const [currentLang, setCurrentLang] = useState(initialLanguage);

  useEffect(() => {
    // Update localStorage whenever currentLang changes
    localStorage.setItem("language", currentLang);
    // Update the lang attribute of the html tag
    document.documentElement.lang = currentLang;
  }, [currentLang]);

  const changeLanguage = (lang) => {
    setCurrentLang(lang);
  };

  return (
    <LanguageContext.Provider value={{ currentLang, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  return useContext(LanguageContext);
};
