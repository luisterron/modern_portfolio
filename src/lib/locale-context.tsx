'use client';
import { createContext, useContext, useState, useEffect } from 'react';
import type { Locale } from './translate';

type LocaleContextValue = {
  locale: Locale;
  toggleLocale: () => void;
};

const LocaleContext = createContext<LocaleContextValue | undefined>(undefined);

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>('en');

  useEffect(() => {
    const stored = localStorage.getItem('locale') as Locale | null;
    if (stored === 'en' || stored === 'es') {
      setLocale(stored);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('locale', locale);
    if (typeof document !== 'undefined') {
      document.documentElement.lang = locale;
    }
  }, [locale]);

  const toggleLocale = () => {
    setLocale((prev) => (prev === 'en' ? 'es' : 'en'));
  };

  return (
    <LocaleContext.Provider value={{ locale, toggleLocale }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) {
    throw new Error('useLocale must be used within LocaleProvider');
  }
  return ctx;
}
