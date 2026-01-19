import { motion } from 'framer-motion'
import Image from 'next/image'
import { Code2, Sparkles, Rocket } from 'lucide-react'

const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const badges = [
    { icon: Code2, text: 'Back-end Developer', color: 'bg-blue-900/30 text-blue-300 border border-blue-700/50' },
    { icon: Sparkles, text: 'Criativo & Inovador', color: 'bg-purple-900/30 text-purple-300 border border-purple-700/50' },
    { icon: Rocket, text: 'Sempre Aprendendo', color: 'bg-green-900/30 text-green-300 border border-green-700/50' },
  ]

  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-16 relative overflow-hidden"
    >
      {/* Background decorativo */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="inline-block"
            >
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                Bem-vindo ao meu portfólio
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
            >
              Olá, eu sou{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-indigo-600">
                Kaique Demetrio
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl md:text-2xl text-gray-300 leading-relaxed"
            >
              Desenvolvedor Back-end.
            </motion.p>

            {/* Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-wrap gap-3"
            >
              {badges.map((badge, index) => {
                const IconComponent = badge.icon
                return (
                  <div
                    key={index}
                    className={`flex items-center gap-2 px-4 py-2 ${badge.color} rounded-full text-sm font-semibold`}
                  >
                    <IconComponent size={16} />
                    <span>{badge.text}</span>
                  </div>
                )
              })}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <button
                onClick={() => scrollToSection('projetos')}
                className="px-8 py-3 bg-gradient-to-r from-primary to-indigo-600 text-white rounded-2xl font-semibold hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
              >
                Ver Projetos
              </button>
              <button
                onClick={() => scrollToSection('contato')}
                className="px-8 py-3 bg-slate-800 text-primary border-2 border-primary rounded-2xl font-semibold hover:bg-primary hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Entrar em Contato
              </button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="relative w-80 h-80 md:w-96 md:h-96">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-indigo-500/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-slate-700 shadow-2xl bg-gradient-to-br from-gray-600 to-gray-800">
                <Image
                  src="/kaiquehoje.jpeg"
                  alt="Kaique Demetrio"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              {/* Círculos decorativos flutuantes */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 w-16 h-16 bg-primary/20 rounded-full"
              ></motion.div>
              <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -bottom-4 -left-4 w-20 h-20 bg-indigo-500/20 rounded-full"
              ></motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero

