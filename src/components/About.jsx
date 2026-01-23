import { motion } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'
import { t } from '../context/translations'

const About = () => {
  const { isDarkMode, language, mounted } = useTheme()

  if (!mounted) return null

  return (
    <section
      className={`py-20 min-h-screen flex items-center transition-all duration-300 ${
        isDarkMode
          ? 'bg-gradient-to-b from-slate-900 via-black to-slate-900'
          : 'bg-gradient-to-b from-slate-50 to-white'
      }`}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${
            isDarkMode ? 'text-white' : 'text-slate-900'
          }`}>
            {language === 'pt' ? 'Sobre' : 'About'} <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
              {language === 'pt' ? 'Mim' : 'Me'}
            </span>
          </h2>
          <div className={`w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded ${
            isDarkMode ? '' : ''
          }`}></div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`rounded-2xl p-8 md:p-12 shadow-xl border transition-all duration-300 ${
            isDarkMode
              ? 'bg-slate-800/40 border-blue-600/40 shadow-slate-900/50'
              : 'bg-white/80 backdrop-blur-sm border-slate-200 shadow-slate-200/50'
          }`}
        >
          <p className={`text-lg leading-relaxed mb-6 ${
            isDarkMode ? 'text-slate-300' : 'text-slate-600'
          }`}>
            <strong className={isDarkMode ? 'text-blue-400' : 'text-indigo-600'}>
              {t('sou', language)} Kaique Demetrio
            </strong>
            , {t('desenvolvedorFullStack', language)}{' '}
            <strong className={isDarkMode ? 'text-slate-300' : 'text-slate-900'}>
              {t('engenharia', language)}
            </strong>
          </p>
          <p className={`text-lg leading-relaxed mb-6 ${
            isDarkMode ? 'text-slate-300' : 'text-slate-600'
          }`}>
            {t('trajetoria', language)}{' '}
            <strong className={isDarkMode ? 'text-blue-400' : 'text-indigo-600'}>
              {t('tecnologias', language)}
            </strong>
            , sempre buscando aplicar as melhores práticas de desenvolvimento e
            criar código limpo e escalável.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default About

