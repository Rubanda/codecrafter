import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { useRouter, usePathname } from 'next/navigation'

interface LanguageState {
  language: string
  setLanguage: (language: string) => void
}

export const useLanguageStore = create<LanguageState>()(
  persist(
    (set) => ({
      language: 'en',
      setLanguage: (language) => {
        set({ language })
      },
    }),
    {
      name: 'language-storage',
    }
  )
)

export function useLanguageSwitcher() {
  const router = useRouter()
  const pathname = usePathname()
  const { language, setLanguage } = useLanguageStore()

  const switchLanguage = (newLanguage: string) => {
    setLanguage(newLanguage)
    // Get the path without the language prefix
    const pathWithoutLocale = pathname.replace(/^\/[a-z]{2}/, '')
    // Navigate to the new language path
    console.log(`store for language ${newLanguage} /${newLanguage}${pathWithoutLocale}`)
    router.push(`/${newLanguage}${pathWithoutLocale}`)
  }

  return { language, switchLanguage }
} 