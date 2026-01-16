import { motion } from 'framer-motion'
import {
  Code2,
  Database,
  Server,
  Box,
  FileCode,
  GitBranch,
} from 'lucide-react'

const Skills = () => {
  const skills = [
    { name: 'JavaScript', icon: Code2, color: 'bg-yellow-100 text-yellow-700' },
    { name: 'TypeScript', icon: Code2, color: 'bg-blue-100 text-blue-700' },
    { name: 'React', icon: Code2, color: 'bg-cyan-100 text-cyan-700' },
    { name: 'Node.js', icon: Server, color: 'bg-green-100 text-green-700' },
    { name: 'C#', icon: Code2, color: 'bg-purple-100 text-purple-700' },
    { name: 'Python', icon: Code2, color: 'bg-blue-100 text-blue-700' },
    { name: 'Java', icon: Code2, color: 'bg-orange-100 text-orange-700' },
    { name: 'Spring Boot', icon: Box, color: 'bg-green-100 text-green-700' },
    { name: 'PostgreSQL', icon: Database, color: 'bg-blue-100 text-blue-700' },
    { name: 'MySQL', icon: Database, color: 'bg-orange-100 text-orange-700' },
    { name: 'SQLite', icon: Database, color: 'bg-gray-100 text-gray-700' },
    { name: 'Docker', icon: Box, color: 'bg-blue-100 text-blue-700' },
    { name: 'Git', icon: GitBranch, color: 'bg-gray-100 text-gray-700' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
      },
    },
  }

  return (
    <section id="habilidades" className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Minhas <span className="text-primary">Habilidades</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded"></div>
        </motion.div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {skills.map((skill, index) => {
            const IconComponent = skill.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.1, y: -5 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col items-center justify-center text-center"
              >
                <div
                  className={`w-16 h-16 rounded-full ${skill.color} flex items-center justify-center mb-4`}
                >
                  <IconComponent size={32} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {skill.name}
                </h3>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills

