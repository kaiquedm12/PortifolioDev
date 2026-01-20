import { motion } from 'framer-motion'
import Image from 'next/image'
import { Download } from 'lucide-react'
import Link from 'next/link'

const Hero = () => {
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

  const softSkills = [
    'Excelente comunicação interpessoal',
    'Colaborativo e orientado para equipe',
    'Análise crítica de problemas',
    'Fácil adaptável a novos contextos',
    'Iniciativa e dinâmica profissional',
  ]

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30 pt-24 pb-20 relative overflow-hidden">
      {/* Background decorativo */}
      <div className="absolute inset-0 overflow-hidden opacity-40">
        <div className="absolute top-20 right-20 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-indigo-200/30 rounded-full blur-3xl"></div>
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
              <span className="text-blue-600 font-semibold text-base">
                Desenvolvedor Full Stack
              </span>
            </motion.div>

            {/* Título */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight"
            >
              Olá, sou o{' '}
              <span className="text-blue-600">
                Kaique Demetrio
              </span>
            </motion.h1>

            {/* Descrição */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-base text-slate-600 leading-relaxed max-w-2xl"
            >
              Desenvolvedor Full Stack especializado em criar soluções digitais de qualidade.
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
                  className="px-3 py-1.5 bg-blue-50 text-blue-700 rounded-lg font-semibold text-xs border border-blue-200 hover:bg-blue-100 transition-colors cursor-default"
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
              className="bg-slate-100/70 backdrop-blur-sm rounded-2xl p-5 border border-slate-200"
            >
              <p className="text-slate-700 text-base">
                <span className="font-bold text-slate-900">Soft Skills:</span>{' '}
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
                className="inline-flex items-center gap-3 px-8 py-3.5 bg-slate-900 text-white rounded-xl font-bold text-base shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Download size={20} />
                Download CV
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
              <div className="absolute inset-0 bg-gradient-to-br from-blue-300/20 to-indigo-300/20 rounded-full blur-2xl"></div>
              
              {/* Image container */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-8 border-white shadow-2xl bg-gradient-to-br from-slate-100 to-slate-200">
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
              <h2 className="text-3xl font-bold text-slate-900">Projetos em destaque</h2>
              <p className="text-slate-600 mt-1">Alguns dos meus trabalhos mais significativos</p>
            </div>
            <Link 
              href="/projetos"
              className="text-slate-900 font-semibold hover:text-blue-600 transition-colors flex items-center gap-2 group"
            >
              ver todos
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
            className="bg-white rounded-2xl p-8 border border-slate-200 shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">GymTracker API</h3>
                <p className="text-slate-600 max-w-2xl">
                  API completa desenvolvida em ASP.NET Core com SQLite para gerenciamento de treinos e acompanhamento de progresso físico. Sistema robusto com autenticação e controle de exercícios.
                </p>
              </div>
              <div className="flex gap-2">
                <motion.a
                  href="https://github.com/kaiquedm12/GymTracker"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  className="px-5 py-2 bg-slate-900 text-white rounded-lg font-semibold text-sm hover:bg-slate-800 transition-colors"
                >
                  GitHub
                </motion.a>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {['ASP.NET Core', 'SQLite', 'C#', 'API REST'].map((tech, idx) => (
                <span key={idx} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-lg text-sm font-semibold border border-blue-200">
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

