import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import type { Language, TranslationKey } from "@/lib/translations";
import { translations } from "@/lib/translations";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: TranslationKey) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");

  useEffect(() => {
    // Get saved language from localStorage or system preference
    const saved = localStorage.getItem("language") as Language | null;
    if (saved && (saved === "en" || saved === "hi")) {
      setLanguageState(saved);
    } else {
      // Try to detect system language
      const browserLang = navigator.language.toLowerCase();
      if (browserLang.startsWith("hi")) {
        setLanguageState("hi");
      }
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("language", lang);
  };

  const t = (key: TranslationKey): string => {
    return translations[language][key] || translations.en[key];
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}
