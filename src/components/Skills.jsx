import { motion } from 'framer-motion'
import {
  Code2,
  Database,
  Server,
  Box,
  FileCode,
  GitBranch,
  Layers,
  Zap,
} from 'lucide-react'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: Code2,
      skills: [
        { name: 'JavaScript', level: 90, color: 'bg-yellow-500' },
        { name: 'TypeScript', level: 85, color: 'bg-blue-500' },
        { name: 'React', level: 88, color: 'bg-cyan-500' },
        { name: 'HTML/CSS', level: 92, color: 'bg-orange-500' },
      ],
    },
    {
      title: 'Backend',
      icon: Server,
      skills: [
        { name: 'Node.js', level: 85, color: 'bg-green-500' },
        { name: 'C#', level: 90, color: 'bg-purple-500' },
        { name: 'Python', level: 80, color: 'bg-blue-500' },
        { name: 'Java', level: 75, color: 'bg-orange-500' },
      ],
    },
    {
      title: 'Database',
      icon: Database,
      skills: [
        { name: 'PostgreSQL', level: 85, color: 'bg-blue-500' },
        { name: 'MySQL', level: 82, color: 'bg-orange-500' },
        { name: 'SQLite', level: 88, color: 'bg-gray-500' },
        { name: 'MongoDB', level: 75, color: 'bg-green-500' },
      ],
    },
    {
      title: 'Tools & Others',
      icon: Box,
      skills: [
        { name: 'Git', level: 90, color: 'bg-orange-500' },
        { name: 'Docker', level: 78, color: 'bg-blue-500' },
        { name: 'Spring Boot', level: 80, color: 'bg-green-500' },
        { name: 'REST APIs', level: 92, color: 'bg-purple-500' },
      ],
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
    <section id="habilidades" className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background decorativo */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute top-10 right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-20 w-64 h-64 bg-indigo-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Minhas <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-indigo-600">Habilidades</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-indigo-600 mx-auto rounded"></div>
          <p className="text-gray-600 mt-4 text-lg">
            Tecnologias e ferramentas que domino
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          {skillCategories.map((category, categoryIndex) => {
            const IconComponent = category.icon
            return (
              <motion.div
                key={categoryIndex}
                variants={itemVariants}
                className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300"
              >
                {/* Cabeçalho da categoria */}
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-200">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-indigo-600 rounded-xl flex items-center justify-center">
                    <IconComponent size={24} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {category.title}
                  </h3>
                </div>

                {/* Skills com barras de progresso */}
                <div className="space-y-5">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold text-gray-700">
                          {skill.name}
                        </span>
                        <span className="text-sm font-bold text-primary">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.2 * skillIndex }}
                          className={`h-full ${skill.color} rounded-full`}
                        ></motion.div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Estatísticas adicionais */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { icon: Code2, label: 'Linguagens', value: '8+' },
            { icon: Layers, label: 'Frameworks', value: '10+' },
            { icon: Database, label: 'Databases', value: '5+' },
            { icon: Zap, label: 'Experiência', value: '3+ anos' },
          ].map((stat, index) => {
            const IconComponent = stat.icon
            return (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-gradient-to-br from-primary to-indigo-600 rounded-2xl p-6 text-white text-center shadow-lg"
              >
                <IconComponent size={32} className="mx-auto mb-3" />
                <p className="text-3xl font-bold mb-1">{stat.value}</p>
                <p className="text-sm opacity-90">{stat.label}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills

