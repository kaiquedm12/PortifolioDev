import { motion } from 'framer-motion'
import { GraduationCap, Code2, Target, Lightbulb } from 'lucide-react'

const About = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: 'Educação',
      description: 'Engenharia de Computação - Unisatc',
      color: 'bg-blue-100 text-blue-700',
    },
    {
      icon: Code2,
      title: 'Experiência',
      description: 'Full Stack Development',
      color: 'bg-purple-100 text-purple-700',
    },
    {
      icon: Target,
      title: 'Foco',
      description: 'Código limpo e escalável',
      color: 'bg-green-100 text-green-700',
    },
    {
      icon: Lightbulb,
      title: 'Paixão',
      description: 'Soluções inovadoras',
      color: 'bg-yellow-100 text-yellow-700',
    },
  ]

  return (
    <section
      id="sobre"
      className="py-20 bg-gradient-to-b from-white via-blue-50 to-white relative overflow-hidden"
    >
      {/* Background decorativo */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute top-20 right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-64 h-64 bg-indigo-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Sobre <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-indigo-600">Mim</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-indigo-600 mx-auto rounded"></div>
        </motion.div>

        {/* Cards de destaque */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
        >
          {highlights.map((item, index) => {
            const IconComponent = item.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white rounded-2xl p-6 shadow-lg text-center hover:shadow-2xl transition-all duration-300"
              >
                <div className={`w-14 h-14 mx-auto rounded-full ${item.color} flex items-center justify-center mb-3`}>
                  <IconComponent size={24} />
                </div>
                <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Conteúdo principal */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-white rounded-2xl p-8 md:p-12 shadow-xl border border-gray-100"
        >
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              Sou <strong className="text-primary font-semibold">Kaique Demetrio</strong>, um
              desenvolvedor Full Stack apaixonado por criar soluções tecnológicas
              inovadoras e eficientes. Atualmente, estou cursando{' '}
              <strong className="text-primary font-semibold">Engenharia de Computação na Unisatc</strong>,
              onde aprimoro constantemente meus conhecimentos técnicos e teóricos.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              Minha trajetória como desenvolvedor me permitiu trabalhar com
              diversas tecnologias e frameworks, desenvolvendo habilidades sólidas
              tanto no frontend quanto no backend. Tenho experiência em{' '}
              <strong className="text-primary font-semibold">
                C#, JavaScript, Python, React, Node.js, PostgreSQL e SQLite
              </strong>
              , sempre buscando aplicar as melhores práticas de desenvolvimento e
              criar código limpo e escalável.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              Meu objetivo é continuar evoluindo como desenvolvedor, contribuindo para
              projetos desafiadores e fazendo a diferença através da tecnologia. 
              Acredito no poder da inovação e estou sempre em busca de novos aprendizados.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">10+</p>
                <p className="text-sm text-gray-600 mt-1">Projetos</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">5+</p>
                <p className="text-sm text-gray-600 mt-1">Tecnologias</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">100%</p>
                <p className="text-sm text-gray-600 mt-1">Dedicação</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About

