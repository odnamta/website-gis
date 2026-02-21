'use client'

import { createContext, useContext, useState, useEffect, type ReactNode } from 'react'
import type { Locale, Translations } from './types'
import { id } from './translations/id'
import { en } from './translations/en'

const translations: Record<Locale, Translations> = { id, en }

interface LanguageContextType {
  locale: Locale
  t: Translations
  toggleLanguage: () => void
}

const LanguageContext = createContext<LanguageContextType | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>('id')

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const langParam = params.get('lang')
    if (langParam === 'en' || langParam === 'id') {
      setLocale(langParam)
      localStorage.setItem('gis-lang', langParam)
      return
    }

    const saved = localStorage.getItem('gis-lang') as Locale | null
    if (saved === 'en' || saved === 'id') {
      setLocale(saved)
    }
  }, [])

  useEffect(() => {
    document.documentElement.lang = locale
  }, [locale])

  const toggleLanguage = () => {
    const next = locale === 'id' ? 'en' : 'id'
    setLocale(next)
    localStorage.setItem('gis-lang', next)
  }

  return (
    <LanguageContext.Provider value={{ locale, t: translations[locale], toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) throw new Error('useLanguage must be used within LanguageProvider')
  return context
}
