import { motion } from 'framer-motion'
import { Github, Linkedin, Instagram, Mail } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'
import { t } from '../context/translations'

const Footer = () => {
  const { isDarkMode, language, mounted } = useTheme()
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/kaiquedm12',
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/kaique-demetrio-50a239267/',
    },
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://www.instagram.com/kaique.demetrio/',
    },
  ]

  return (
    <footer className={`transition-all duration-300 py-12 ${
      isDarkMode
        ? 'bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-100'
        : 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo e Descrição */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold text-white">
              Kaique Demetrio
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              {t('descricao', language)}
            </p>
          </motion.div>

          {/* Links Rápidos */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-4"
          >
            <h3 className={`text-lg font-semibold mb-4 ${isDarkMode ? 'text-slate-100' : 'text-white'}`}>
              {language === 'pt' ? 'Links Rápidos' : 'Quick Links'}
            </h3>
            <ul className="space-y-2">
              {[
                { pt: 'Início', en: 'Home' },
                { pt: 'Sobre', en: 'About' },
                { pt: 'Projetos', en: 'Projects' },
                { pt: 'Contato', en: 'Contact' },
              ].map((item) => (
                <li key={item.pt}>
                  <a
                    href={`#${item.pt.toLowerCase()}`}
                    className={`transition-colors duration-300 text-sm hover:text-indigo-400 ${
                      isDarkMode ? 'text-slate-400' : 'text-slate-300'
                    }`}
                  >
                    {language === 'pt' ? item.pt : item.en}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Redes Sociais */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className={`text-lg font-semibold mb-4 ${isDarkMode ? 'text-slate-100' : 'text-white'}`}>
              {language === 'pt' ? 'Redes Sociais' : 'Social Media'}
            </h3>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 rounded-full flex items-center justify-center hover:bg-indigo-600 hover:scale-110 transition-all duration-300 hover:text-white ${
                      isDarkMode
                        ? 'bg-slate-800/50 text-slate-400'
                        : 'bg-slate-700/50 text-slate-300'
                    }`}
                    aria-label={social.name}
                  >
                    <IconComponent size={20} />
                  </a>
                )
              })}
            </div>
            <div className={`flex items-center gap-2 text-sm mt-4 ${isDarkMode ? 'text-slate-400' : 'text-slate-300'}`}>
              <Mail size={16} />
              <span>kaiquedemetrio2017123@gmail.com</span>
            </div>
          </motion.div>
        </div>

        {/* Linha divisória */}
        <div className={`border-t pt-8 ${isDarkMode ? 'border-slate-800' : 'border-slate-700'}`}>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className={`text-sm text-center md:text-left ${isDarkMode ? 'text-slate-500' : 'text-slate-400'}`}
            >
              © {currentYear} Kaique Demetrio. {language === 'pt' ? 'Todos os direitos reservados.' : 'All rights reserved.'}
            </motion.p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
