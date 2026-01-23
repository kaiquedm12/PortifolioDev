import { motion } from 'framer-motion'
import { Github, Linkedin, Instagram, Mail, MessageCircle, Send } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'
import { t } from '../context/translations'

const Contact = () => {
  const { isDarkMode, language, mounted } = useTheme()
  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/kaiquedm12',
      color: 'from-gray-700 to-gray-900',
      hoverColor: 'hover:from-gray-800 hover:to-black',
      description: language === 'pt' ? 'Veja meus projetos' : 'View my projects',
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/kaique-demetrio-50a239267/',
      color: 'from-blue-600 to-blue-700',
      hoverColor: 'hover:from-blue-700 hover:to-blue-800',
      description: language === 'pt' ? 'Conecte-se comigo' : 'Connect with me',
    },
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://www.instagram.com/kaique.demetrio/',
      color: 'from-pink-600 via-purple-600 to-indigo-600',
      hoverColor: 'hover:from-pink-700 hover:via-purple-700 hover:to-indigo-700',
      description: language === 'pt' ? 'Acompanhe meu dia a dia' : 'Follow my daily life',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section className={`py-20 min-h-screen relative overflow-hidden transition-all duration-300 ${
      isDarkMode
        ? 'bg-gradient-to-b from-black via-slate-950 to-black'
        : 'bg-gradient-to-b from-slate-50 to-white'
    }`}>
      {/* Background decorativo */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className={`absolute top-20 left-1/4 w-96 h-96 rounded-full blur-3xl ${
          isDarkMode
            ? 'bg-blue-600/10'
            : 'bg-primary/10'
        }`}></div>
        <div className={`absolute bottom-20 right-1/4 w-96 h-96 rounded-full blur-3xl ${
          isDarkMode
            ? 'bg-blue-500/10'
            : 'bg-indigo-400/10'
        }`}></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-block mb-4">
            <div className="flex items-center justify-center w-16 h-16 mx-auto bg-gradient-to-br from-primary to-indigo-600 rounded-2xl shadow-lg">
              <MessageCircle size={32} className="text-white" />
            </div>
          </div>
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${
            isDarkMode ? 'text-white' : 'text-slate-900'
          }`}>
            {language === 'pt' ? 'Entre em' : 'Get in'} <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">{language === 'pt' ? 'Contato' : 'Touch'}</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded mb-6"></div>
          <p className={`text-lg max-w-2xl mx-auto leading-relaxed ${
            isDarkMode ? 'text-slate-400' : 'text-slate-600'
          }`}>
            {language === 'pt' 
              ? 'Vamos conversar sobre tecnologia, projetos ou oportunidades! Estou sempre aberto a novos desafios e colaborações.'
              : 'Let\'s talk about technology, projects or opportunities! I\'m always open to new challenges and collaborations.'
            }
          </p>
        </motion.div>

        {/* Cards de contato */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 mb-12"
        >
          {socialLinks.map((social, index) => {
            const IconComponent = social.icon
            return (
              <motion.a
                key={index}
                variants={itemVariants}
                whileHover={{ y: -12, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative bg-gradient-to-br ${social.color} ${social.hoverColor} rounded-2xl p-8 shadow-xl transition-all duration-300 overflow-hidden`}
              >
                {/* Efeito de brilho */}
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                
                <div className="relative z-10 text-white text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <IconComponent size={32} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{social.name}</h3>
                  <p className="text-sm opacity-90">{social.description}</p>
                  <div className="mt-4 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-sm font-semibold">{language === 'pt' ? 'Acessar' : 'Access'}</span>
                    <Send size={14} />
                  </div>
                </div>
              </motion.a>
            )
          })}
        </motion.div>

        {/* Email destacado */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className={`rounded-2xl p-8 shadow-xl border text-center transition-all duration-300 ${
            isDarkMode
              ? 'bg-slate-900/80 shadow-slate-900/50 border-slate-800'
              : 'bg-white shadow-slate-200/50 border-slate-200'
          }`}
        >
          <div className="mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
              <Mail size={32} className="text-white" />
            </div>
            <h3 className={`text-2xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
              {language === 'pt' ? 'Entre em Contato' : 'Get in Touch'}
            </h3>
            <p className={`text-sm mb-6 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              {language === 'pt' ? 'Envie-me um email diretamente!' : 'Send me an email directly!'}
            </p>
          </div>
          <motion.a
            href="mailto:kaiquedemetrio2017123@gmail.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-xl hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300"
          >
            <Mail size={20} />
            {language === 'pt' ? 'Enviar Email' : 'Send Email'}
          </motion.a>
        </motion.div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className={`mb-8 font-medium text-lg ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>
            {language === 'pt' 
              ? 'Disponível para projetos freelance e oportunidades profissionais'
              : 'Available for freelance projects and professional opportunities'
            }
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl text-base font-bold shadow-lg shadow-green-500/30 border-2 border-green-400">
              ✓ {language === 'pt' ? 'Freelance' : 'Freelance'}
            </span>
            <span className="px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-xl text-base font-bold shadow-lg shadow-blue-500/30 border-2 border-blue-400">
              ✓ {language === 'pt' ? 'Tempo Integral' : 'Full Time'}
            </span>
            <span className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-xl text-base font-bold shadow-lg shadow-purple-500/30 border-2 border-purple-400">
              ✓ {language === 'pt' ? 'Projetos' : 'Projects'}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact

