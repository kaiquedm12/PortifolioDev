import { motion } from 'framer-motion'
import { Github, Linkedin, Instagram } from 'lucide-react'

const Contact = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/kaiquedm12',
      color: 'hover:bg-gray-900 hover:text-white',
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/kaique-demetrio-50a239267/',
      color: 'hover:bg-blue-600 hover:text-white',
    },
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://www.instagram.com/kaique.demetrio/',
      color: 'hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:text-white',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <section id="contato" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Entre em <span className="text-primary">Contato</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded"></div>
          <p className="text-lg text-gray-600 mt-6">
            Vamos conversar sobre tecnologia, projetos ou oportunidades!
          </p>
        </motion.div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-6"
        >
          {socialLinks.map((social, index) => {
            const IconComponent = social.icon
            return (
              <motion.a
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-3 px-8 py-4 bg-white border-2 border-primary text-primary rounded-2xl font-semibold transition-all duration-300 shadow-lg ${social.color}`}
              >
                <IconComponent size={24} />
                <span>{social.name}</span>
              </motion.a>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Contact

