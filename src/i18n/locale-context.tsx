"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { defaultLocale, normalizeLocale, type Locale } from "./config";
import { createTranslator } from "./translate";

type LocaleContextValue = {
  locale: Locale;
  setLocale: (nextLocale: Locale) => void;
};

const LocaleContext = createContext<LocaleContextValue>({
  locale: defaultLocale,
  setLocale: () => {},
});

function persistLocale(nextLocale: Locale) {
  localStorage.setItem("locale", nextLocale);
  document.cookie = `locale=${nextLocale}; path=/; max-age=31536000; samesite=lax`;
}

export function LocaleProvider({
  locale,
  children,
}: {
  locale: Locale;
  children: React.ReactNode;
}) {
  const [currentLocale, setCurrentLocale] = useState<Locale>(locale);

  useEffect(() => {
    const stored = normalizeLocale(localStorage.getItem("locale"));
    if (stored && stored !== currentLocale) {
      setCurrentLocale(stored);
      persistLocale(stored);
      return;
    }

    if (!stored && locale !== currentLocale) {
      setCurrentLocale(locale);
      persistLocale(locale);
    }
  }, [locale]);

  const value = useMemo<LocaleContextValue>(
    () => ({
      locale: currentLocale,
      setLocale: (nextLocale) => {
        if (nextLocale === currentLocale) return;
        setCurrentLocale(nextLocale);
        persistLocale(nextLocale);
      },
    }),
    [currentLocale],
  );

  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  );
}

export function useLocale() {
  return useContext(LocaleContext).locale;
}

export function useSetLocale() {
  return useContext(LocaleContext).setLocale;
}

export function useT() {
  const locale = useLocale();
  return createTranslator(locale);
}
