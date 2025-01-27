'use client'

import { createContext, ReactNode, useState } from 'react'

type LocaleContextType = {
  locale: string
  setLocale: (locale: string) => void
}

export const LocaleContext = createContext<LocaleContextType>({
  locale: 'fr',
  setLocale: () => {}
})

export default function LocaleProvider({
  children,
  initialLocale
}: {
  children: ReactNode
  initialLocale: string
}) {
  const [locale, setLocale] = useState(initialLocale)

  const updateLocale = (newLocale: string) => {
    setLocale(newLocale)
    document.cookie = `app-locale=${newLocale}; path=/; max-age=31536000; SameSite=Lax`
  }

  return (
    <LocaleContext.Provider value={{ locale, setLocale: updateLocale }}>
      {children}
    </LocaleContext.Provider>
  )
}