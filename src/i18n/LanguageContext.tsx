import React, { createContext, useContext, useEffect, useState } from "react";
import { Language, Translations, translations } from "./translations";

const SOUTH_AMERICA_AND_LUSOPHONE_COUNTRIES = new Set([
  // South America
  "BR", "AR", "CL", "UY", "PY", "BO", "PE", "EC", "CO", "VE", "GY", "SR", "GF",
  // Lusophone countries
  "PT", "AO", "MZ", "CV", "GW", "ST", "TL", "MO"
]);

const SOUTH_AMERICA_AND_LUSOPHONE_TZ_PREFIXES = [
  "America/Sao_Paulo",
  "America/Fortaleza",
  "America/Belem",
  "America/Manaus",
  "America/Cuiaba",
  "America/Porto_Velho",
  "America/Rio_Branco",
  "America/Recife",
  "America/Maceio",
  "America/Bahia",
  "America/Campo_Grande",
  "America/Noronha",
  "America/Araguaina",
  "America/Boa_Vista",
  "America/Santarem",
  "America/Buenos_Aires",
  "America/Cordoba",
  "America/Rosario",
  "America/Montevideo",
  "America/Santiago",
  "America/Bogota",
  "America/Lima",
  "America/Asuncion",
  "America/La_Paz",
  "America/Caracas",
  "America/Guayaquil",
  "America/Guyana",
  "America/Paramaribo",
  "America/Cayenne",
  "Europe/Lisbon",
  "Atlantic/Madeira",
  "Atlantic/Azores",
  "Africa/Luanda",
  "Africa/Maputo",
  "Africa/Bissau",
  "Africa/Sao_Tome",
];

function detectInitialLanguage(): Language {
  if (typeof window === "undefined") return "pt";

  // 1. Check user manual override in localStorage
  const saved = localStorage.getItem("hvm_lang");
  if (saved === "pt" || saved === "en") {
    return saved;
  }

  // 2. Check browser languages
  const navLangs = navigator.languages || [navigator.language || ""];
  const isPtLang = navLangs.some((l) => l.toLowerCase().startsWith("pt"));
  if (isPtLang) {
    return "pt";
  }

  // 3. Check client timezone
  try {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || "";
    const matchesTz = SOUTH_AMERICA_AND_LUSOPHONE_TZ_PREFIXES.some((prefix) =>
      tz.toLowerCase().startsWith(prefix.toLowerCase())
    );
    if (matchesTz) {
      return "pt";
    }
  } catch {
    // Ignore timezone detection errors
  }

  // 4. Default: devices accessed outside Brazil/South America default to English
  return "en";
}

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "pt",
  setLang: () => {},
  t: translations.pt,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>(detectInitialLanguage);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    try {
      localStorage.setItem("hvm_lang", newLang);
    } catch {
      // Ignore storage errors
    }
  };

  // Background accurate GeoIP check if user has not explicitly manually overridden
  useEffect(() => {
    const saved = localStorage.getItem("hvm_lang");
    if (saved) return; // User already chose, respect their choice

    let isMounted = true;
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 2000);

    fetch("https://ipapi.co/json/", { signal: controller.signal })
      .then((res) => res.json())
      .then((data) => {
        clearTimeout(timeoutId);
        if (!isMounted) return;
        const country = (data.country_code || data.country || "").toUpperCase();
        if (country) {
          if (SOUTH_AMERICA_AND_LUSOPHONE_COUNTRIES.has(country)) {
            setLangState("pt");
          } else {
            setLangState("en");
          }
        }
      })
      .catch(() => {
        // Fallback silently if offline or blocked by adblockers, keeping initial detection
      });

    return () => {
      isMounted = false;
      clearTimeout(timeoutId);
      controller.abort();
    };
  }, []);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
