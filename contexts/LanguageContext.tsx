'use client'

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { Language, translations } from '@/lib/i18n'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: typeof translations.id
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('id')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // Get language from localStorage or default to 'id'
    const savedLanguage = (localStorage.getItem('language') as Language) || 'id'
    setLanguageState(savedLanguage)
    setMounted(true)
  }, [])

  useEffect(() => {
    // Update HTML lang attribute when language changes
    if (mounted) {
      document.documentElement.lang = language === 'id' ? 'id' : 'en'
    }
  }, [language, mounted])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    if (mounted) {
      localStorage.setItem('language', lang)
    }
  }

  // Always provide context, even before mounted (to prevent errors)
  // Use default 'id' language until mounted
  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        t: translations[language],
      }}
    >
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

