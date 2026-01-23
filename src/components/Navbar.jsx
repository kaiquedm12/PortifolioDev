import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Code2, Moon, Sun, Globe } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useTheme } from '../context/ThemeContext'
import { t } from '../context/translations'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const router = useRouter()
  const { isDarkMode, toggleDarkMode, language, toggleLanguage, mounted } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: t('inicio', language), href: '/' },
    { name: t('sobre', language), href: '/sobre' },
    { name: t('projetos', language), href: '/projetos' },
    { name: t('contato', language), href: '/contato' },
  ]

  const isActive = (href) => {
    if (href === '/') return router.pathname === '/'
    return router.pathname.startsWith(href)
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isDarkMode
          ? 'bg-slate-900/80 border-b border-slate-700/50 shadow-lg shadow-slate-900/50'
          : 'bg-white/80 backdrop-blur-lg border-b border-slate-200/50 shadow-lg shadow-slate-200/50'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-2 cursor-pointer"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center shadow-lg">
                <Code2 size={20} className="text-white" />
              </div>
              <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                Kaique Dev
              </span>
            </motion.div>
          </Link>

          {/* Desktop Menu */}
          <div className={`hidden md:flex items-center space-x-2 ${isDarkMode ? 'text-white' : 'text-slate-700'}`}>
            {navItems.map((item, index) => (
              <Link key={item.href} href={item.href}>
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className={`relative px-4 py-2 rounded-lg font-medium transition-all duration-300 cursor-pointer ${
                    isActive(item.href)
                      ? 'text-blue-600'
                      : isDarkMode
                      ? 'text-slate-300 hover:text-blue-400'
                      : 'text-slate-700 hover:text-blue-600'
                  }`}
                >
                  {item.name}
                  {isActive(item.href) && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600"
                      initial={false}
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </motion.div>
              </Link>
            ))}

            {/* Botões de Tema e Idioma */}
            {mounted && (
              <>
                <motion.button
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  onClick={toggleDarkMode}
                  className={`p-2.5 rounded-lg transition-all duration-300 ${
                    isDarkMode
                      ? 'bg-slate-800 hover:bg-slate-700 text-yellow-400'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                  }`}
                  title={isDarkMode ? 'Modo Claro' : 'Modo Escuro'}
                >
                  {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
                </motion.button>

                <motion.button
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  onClick={toggleLanguage}
                  className={`p-2.5 rounded-lg transition-all duration-300 font-bold flex items-center gap-1.5 text-sm ${
                    isDarkMode
                      ? 'bg-slate-800 hover:bg-slate-700 text-blue-400'
                      : 'bg-slate-100 hover:bg-slate-200 text-blue-600'
                  }`}
                  title={language === 'pt' ? 'Switch to English' : 'Mudar para Português'}
                >
                  <Globe size={18} />
                  {language === 'pt' ? 'PT' : 'EN'}
                </motion.button>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            {mounted && (
              <>
                <motion.button
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  onClick={toggleDarkMode}
                  className={`p-2 rounded-lg transition-all duration-300 ${
                    isDarkMode
                      ? 'bg-slate-800 text-yellow-400'
                      : 'bg-slate-100 text-slate-700'
                  }`}
                >
                  {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
                </motion.button>

                <motion.button
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  onClick={toggleLanguage}
                  className={`p-2 rounded-lg transition-all duration-300 font-bold text-xs ${
                    isDarkMode
                      ? 'bg-slate-800 text-blue-400'
                      : 'bg-slate-100 text-blue-600'
                  }`}
                >
                  {language === 'pt' ? 'EN' : 'PT'}
                </motion.button>
              </>
            )}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-lg transition-colors ${
                isDarkMode
                  ? 'text-blue-400 hover:bg-slate-800'
                  : 'text-blue-600 hover:bg-blue-50'
              }`}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className={`md:hidden border-t overflow-hidden ${
              isDarkMode
                ? 'bg-slate-900 border-slate-700'
                : 'bg-white border-slate-200'
            }`}
          >
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item, index) => (
                <Link key={item.href} href={item.href}>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index }}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`w-full text-left px-4 py-3 rounded-lg font-medium transition-all duration-300 cursor-pointer ${
                      isActive(item.href)
                        ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg'
                        : isDarkMode
                        ? 'text-slate-300 hover:bg-slate-800'
                        : 'text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    {item.name}
                  </motion.div>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navbar

