import { motion } from 'framer-motion'
import { Github, Linkedin, Instagram, Mail, MessageCircle, Send } from 'lucide-react'

const Contact = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/kaiquedm12',
      color: 'from-gray-700 to-gray-900',
      hoverColor: 'hover:from-gray-800 hover:to-black',
      description: 'Veja meus projetos',
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/kaique-demetrio-50a239267/',
      color: 'from-blue-600 to-blue-700',
      hoverColor: 'hover:from-blue-700 hover:to-blue-800',
      description: 'Conecte-se comigo',
    },
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://www.instagram.com/kaique.demetrio/',
      color: 'from-pink-600 via-purple-600 to-indigo-600',
      hoverColor: 'hover:from-pink-700 hover:via-purple-700 hover:to-indigo-700',
      description: 'Acompanhe meu dia a dia',
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
    <section id="contato" className="py-20 bg-gradient-to-b from-slate-900 to-slate-800 relative overflow-hidden">
      {/* Background decorativo */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-indigo-400/10 rounded-full blur-3xl"></div>
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
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Entre em <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-indigo-600">Contato</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-indigo-600 mx-auto rounded mb-6"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Vamos conversar sobre tecnologia, projetos ou oportunidades! Estou sempre aberto a novos desafios e colaborações.
          </p>
        </motion.div>

        {/* Cards de contato */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6 mb-12"
        >
          {socialLinks.map((social, index) => {
            const IconComponent = social.icon
            return (
              <motion.a
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.05 }}
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
                    <span className="text-sm font-semibold">Acessar</span>
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
          className="bg-slate-700 rounded-2xl p-8 shadow-xl border border-slate-600 text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-indigo-600 rounded-full flex items-center justify-center">
              <Mail size={24} className="text-white" />
            </div>
            <div className="text-left">
              <p className="text-sm text-gray-400 font-semibold">Email</p>
              <a
                href="mailto:kaiquedemetrio@email.com"
                className="text-lg font-bold text-primary hover:text-indigo-600 transition-colors"
              >
                kaiquedemetrio@email.com
              </a>
            </div>
          </div>
          <p className="text-gray-300 text-sm">
            Prefere email? Envie sua mensagem diretamente para minha caixa de entrada!
          </p>
        </motion.div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-gray-300 mb-6">
            Disponível para projetos freelance e oportunidades profissionais
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <span className="px-4 py-2 bg-green-900/30 text-green-300 rounded-full text-sm font-semibold border border-green-700/50">
              Freelance
            </span>
            <span className="px-4 py-2 bg-blue-900/30 text-blue-300 rounded-full text-sm font-semibold border border-blue-700/50">
              Tempo Integral
            </span>
            <span className="px-4 py-2 bg-purple-900/30 text-purple-300 rounded-full text-sm font-semibold border border-purple-700/50">
              Projetos
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact

