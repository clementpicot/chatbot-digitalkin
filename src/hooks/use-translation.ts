'use client'

import { useContext } from 'react'
import { LocaleContext } from '@/providers/locale-provider'
import enTranslations from '@/locales/en.json'
import frTranslations from '@/locales/fr.json'

type Translations = Record<string, string>

const translations: Record<string, Translations> = {
  en: enTranslations,
  fr: frTranslations
}

export function useTranslation() {
  const { locale } = useContext(LocaleContext)
  
  const t = (key: string): string => {
    return translations[locale][key] || key
  }

  return { t }
}