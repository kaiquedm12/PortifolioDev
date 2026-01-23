import { createContext, useContext, useState, useEffect } from 'react'

const ThemeContext = createContext()

export function ThemeProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [language, setLanguage] = useState('pt')
  const [mounted, setMounted] = useState(false)

  // Carregar preferências do localStorage
  useEffect(() => {
    const savedDarkMode = localStorage.getItem('darkMode') === 'true'
    const savedLanguage = localStorage.getItem('language') || 'pt'
    
    setIsDarkMode(savedDarkMode)
    setLanguage(savedLanguage)
    setMounted(true)
  }, [])

  // Aplicar modo escuro
  useEffect(() => {
    if (!mounted) return
    
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    localStorage.setItem('darkMode', isDarkMode)
  }, [isDarkMode, mounted])

  // Salvar idioma
  useEffect(() => {
    if (!mounted) return
    localStorage.setItem('language', language)
  }, [language, mounted])

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
  }

  const toggleLanguage = () => {
    setLanguage(language === 'pt' ? 'en' : 'pt')
  }

  const value = {
    isDarkMode,
    toggleDarkMode,
    language,
    toggleLanguage,
    mounted,
  }

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme deve ser usado dentro de ThemeProvider')
  }
  return context
}
