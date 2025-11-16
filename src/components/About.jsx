import { motion } from 'framer-motion'

const About = () => {
  return (
    <section
      id="sobre"
      className="py-20 bg-gradient-to-b from-white to-blue-50"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Sobre <span className="text-primary">Mim</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded"></div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-2xl p-8 md:p-12 shadow-lg"
        >
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Sou <strong className="text-primary">Kaique Demetrio</strong>, um
            desenvolvedor Full Stack apaixonado por criar soluções tecnológicas
            inovadoras e eficientes. Atualmente, estou cursando{' '}
            <strong>Engenharia de Computação na Unisatc</strong>
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Minha trajetória como desenvolvedor me permitiu trabalhar com
            diversas tecnologias e frameworks, desenvolvendo habilidades sólidas
            tanto no frontend quanto no backend. Tenho experiência em{' '}
            <strong className="text-primary">
              C#, JavaScript, Python, React, Node.js, PostgreSQL e SQLite
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

