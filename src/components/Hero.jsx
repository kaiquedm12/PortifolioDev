import { motion } from 'framer-motion'
import Image from 'next/image'
import { Download } from 'lucide-react'
import Link from 'next/link'
import { useTheme } from '../context/ThemeContext'
import { t } from '../context/translations'

const Hero = () => {
  const { isDarkMode, language, mounted } = useTheme()
  
  const technologies = [
    'React',
    'React Native',
    'Expo',
    'Next.js',
    'TypeScript',
    'Tailwind CSS',
    'Node.js',
    'Java',
    'C#',
    'ASP.NET',
    'PostgreSQL',
    'SQLite',
  ]

  const softSkills = language === 'pt' ? [
    'Excelente comunicação interpessoal',
    'Colaborativo e orientado para equipe',
    'Análise crítica de problemas',
    'Fácil adaptável a novos contextos',
    'Iniciativa e dinâmica profissional',
  ] : [
    'Excellent interpersonal communication',
    'Collaborative and team-oriented',
    'Critical problem analysis',
    'Easily adaptable to new contexts',
    'Initiative and professional dynamics',
  ]

  if (!mounted) return null

  return (
    <section className={`min-h-screen pt-24 pb-20 relative overflow-hidden transition-all duration-300 ${
      isDarkMode
        ? 'bg-gradient-to-br from-black via-slate-900 to-blue-950'
        : 'bg-gradient-to-br from-slate-50 via-white to-blue-50/30'
    }`}>
      {/* Background decorativo */}
      <div className="absolute inset-0 overflow-hidden opacity-40">
        <div className={`absolute top-20 right-20 w-96 h-96 rounded-full blur-3xl ${
          isDarkMode ? 'bg-blue-600/20' : 'bg-blue-200/30'
        }`}></div>
        <div className={`absolute bottom-20 left-20 w-96 h-96 rounded-full blur-3xl ${
          isDarkMode ? 'bg-indigo-600/20' : 'bg-indigo-200/30'
        }`}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-[1fr,400px] gap-16 items-start">
          {/* Conteúdo principal */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Tag */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <span className={`font-semibold text-base ${
                isDarkMode ? 'text-blue-400' : 'text-blue-600'
              }`}>
                {t('descricao', language)}
              </span>
            </motion.div>

            {/* Título */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className={`text-4xl md:text-5xl font-bold leading-tight ${
                isDarkMode ? 'text-white' : 'text-slate-900'
              }`}
            >
              {language === 'pt' ? 'Olá, sou o' : 'Hi, I am'}{' '}
              <span className="text-blue-500">
                Kaique Demetrio
              </span>
            </motion.h1>

            {/* Descrição */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className={`text-base leading-relaxed max-w-2xl ${
                isDarkMode ? 'text-slate-300' : 'text-slate-600'
              }`}
            >
              {language === 'pt' 
                ? 'Desenvolvedor Full Stack especializado em criar soluções digitais de qualidade.'
                : 'Full Stack Developer specialized in creating quality digital solutions.'
              }
            </motion.p>

            {/* Tecnologias */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-3"
            >
              {technologies.map((tech, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 + index * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                  className={`px-3 py-1.5 rounded-lg font-semibold text-xs border transition-colors cursor-default ${
                    isDarkMode
                      ? 'bg-blue-900/40 text-blue-300 border-blue-600/50 hover:bg-blue-900/60'
                      : 'bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100'
                  }`}
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>

            {/* Soft Skills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className={`rounded-2xl p-5 border transition-all duration-300 ${
                isDarkMode
                  ? 'bg-blue-900/20 border-blue-600/40'
                  : 'bg-slate-100/70 backdrop-blur-sm border-slate-200'
              }`}
            >
              <p className={`text-base ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                <span className={`font-bold ${isDarkMode ? 'text-blue-300' : 'text-slate-900'}`}>
                  {language === 'pt' ? 'Soft Skills:' : 'Soft Skills:'}
                </span>{' '}
                {softSkills.join(', ')}
              </p>
            </motion.div>

            {/* Botão Download CV */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <motion.a
                href="/Kaique_Demetrio_FullStack.pdf"
                download
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`inline-flex items-center gap-3 px-8 py-3.5 rounded-xl font-bold text-base shadow-lg hover:shadow-xl transition-all duration-300 ${
                  isDarkMode
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-slate-900 text-white hover:bg-slate-800'
                }`}
              >
                <Download size={20} />
                {language === 'pt' ? 'Download CV' : 'Download Resume'}
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Imagem */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative w-72 h-72 lg:w-80 lg:h-80">
              {/* Glow effect */}
              <div className={`absolute inset-0 rounded-full blur-2xl ${
                isDarkMode 
                  ? 'bg-gradient-to-br from-blue-600/20 to-indigo-600/20'
                  : 'bg-gradient-to-br from-blue-300/20 to-indigo-300/20'
              }`}></div>
              
              {/* Image container */}
              <div className={`relative w-full h-full rounded-full overflow-hidden border-8 shadow-2xl ${
                isDarkMode
                  ? 'border-blue-900/50 bg-gradient-to-br from-slate-800 to-slate-900'
                  : 'border-white bg-gradient-to-br from-slate-100 to-slate-200'
              }`}>
                <Image
                  src="/kaiquehoje.jpeg"
                  alt="Kaique Demetrio"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Projetos em destaque */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-20"
        >
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className={`text-3xl font-bold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                {language === 'pt' ? 'Projetos em destaque' : 'Featured Projects'}
              </h2>
              <p className={`mt-1 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                {language === 'pt' ? 'Alguns dos meus trabalhos mais significativos' : 'Some of my most significant works'}
              </p>
            </div>
            <Link 
              href="/projetos"
              className={`font-semibold transition-colors flex items-center gap-2 group ${
                isDarkMode 
                  ? 'text-blue-400 hover:text-blue-300'
                  : 'text-slate-900 hover:text-blue-600'
              }`}
            >
              {language === 'pt' ? 'ver todos' : 'view all'}
              <svg 
                className="w-5 h-5 group-hover:translate-x-1 transition-transform" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* Projeto GymTracker */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className={`rounded-2xl p-8 border shadow-lg hover:shadow-xl transition-all duration-300 ${
              isDarkMode
                ? 'bg-slate-800/40 border-blue-600/40 hover:border-blue-500/60'
                : 'bg-white border-slate-200'
            }`}
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className={`text-2xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                  GymTracker API
                </h3>
                <p className={`max-w-2xl ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  {language === 'pt'
                    ? 'API completa desenvolvida em ASP.NET Core com SQLite para gerenciamento de treinos e acompanhamento de progresso físico. Sistema robusto com autenticação e controle de exercícios.'
                    : 'Complete API developed in ASP.NET Core with SQLite for workout management and physical progress tracking. Robust system with authentication and exercise control.'
                  }
                </p>
              </div>
              <div className="flex gap-2">
                <motion.a
                  href="https://github.com/kaiquedm12/GymTracker"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  className={`px-5 py-2 rounded-lg font-semibold text-sm transition-colors ${
                    isDarkMode
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-slate-900 text-white hover:bg-slate-800'
                  }`}
                >
                  GitHub
                </motion.a>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {['ASP.NET Core', 'SQLite', 'C#', 'API REST'].map((tech, idx) => (
                <span 
                  key={idx} 
                  className={`px-3 py-1 rounded-lg text-sm font-semibold border ${
                    isDarkMode
                      ? 'bg-blue-900/40 text-blue-300 border-blue-600/50'
                      : 'bg-blue-50 text-blue-700 border-blue-200'
                  }`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero

