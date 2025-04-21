import { useEffect, useState } from "react";

const SUPPORTED_LANGUAGES = ["sv", "en", "de", "fi"];

export const useLanguage = () => {
  const [lang, setLang] = useState("sv");

  useEffect(() => {
    const stored = localStorage.getItem("lang");
    if (stored && SUPPORTED_LANGUAGES.includes(stored)) {
      setLang(stored);
    }
  }, []);

  const changeLanguage = (newLang: string) => {
    setLang(newLang);
    localStorage.setItem("lang", newLang);
  };

  return { lang, setLang: changeLanguage };
};
