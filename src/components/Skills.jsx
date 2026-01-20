import { motion } from 'framer-motion'

const Skills = () => {
  const technologies = [
    'React',
    'React Native',
    'Expo',
    'Next.js',
    'TypeScript',
    'Tailwind CSS',
    'JavaScript',
    'Node.js',
    'C#',
    'Python',
    'Java',
    'Spring Boot',
    'PostgreSQL',
    'MySQL',
    'SQLite',
    'Docker',
    'Git',
  ]

  const softSkills = [
    'Comunicação',
    'Trabalho em equipe',
    'Resolução de problemas',
    'Adaptabilidade',
    'Proatividade',
    'Pensamento crítico',
    'Organização',
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          {/* Tecnologias */}
          <div className="mb-12">
            <div className="flex flex-wrap gap-3 mb-8">
              {technologies.map((tech, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="px-5 py-2.5 bg-blue-50 text-blue-700 rounded-xl font-semibold text-sm border border-blue-200 hover:bg-blue-100 hover:border-blue-300 transition-all duration-300 shadow-sm hover:shadow-md cursor-default"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-slate-50 rounded-2xl p-6 border border-slate-200"
          >
            <p className="text-slate-700 text-base leading-relaxed">
              <span className="font-bold text-slate-900">Soft Skills:</span>{' '}
              {softSkills.join(', ')}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills

