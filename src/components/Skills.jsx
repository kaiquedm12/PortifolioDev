import { motion } from 'framer-motion'
import {
  Code2,
  Database,
  Server,
  Box,
  FileCode,
  GitBranch,
  Cpu,
  LayoutTemplate,
  Wind,
} from 'lucide-react'

const Skills = () => {
  const skills = [
    { name: 'JavaScript', icon: Code2, color: 'bg-yellow-900/30 text-yellow-300', borderColor: 'border-yellow-700/50' },
    { name: 'TypeScript', icon: Code2, color: 'bg-blue-900/30 text-blue-300', borderColor: 'border-blue-700/50' },
    { name: 'React', icon: LayoutTemplate, color: 'bg-cyan-900/30 text-cyan-300', borderColor: 'border-cyan-700/50' },
    { name: 'Node.js', icon: Server, color: 'bg-green-900/30 text-green-300', borderColor: 'border-green-700/50' },
    { name: 'C#', icon: Cpu, color: 'bg-purple-900/30 text-purple-300', borderColor: 'border-purple-700/50' },
    { name: 'Python', icon: Code2, color: 'bg-blue-900/30 text-blue-300', borderColor: 'border-blue-700/50' },
    { name: 'Java', icon: Cpu, color: 'bg-orange-900/30 text-orange-300', borderColor: 'border-orange-700/50' },
    { name: 'Spring Boot', icon: Box, color: 'bg-green-900/30 text-green-300', borderColor: 'border-green-700/50' },
    { name: 'PostgreSQL', icon: Database, color: 'bg-blue-900/30 text-blue-300', borderColor: 'border-blue-700/50' },
    { name: 'MySQL', icon: Database, color: 'bg-orange-900/30 text-orange-300', borderColor: 'border-orange-700/50' },
    { name: 'SQLite', icon: Database, color: 'bg-slate-700/50 text-gray-300', borderColor: 'border-slate-600/50' },
    { name: 'Docker', icon: Box, color: 'bg-cyan-900/30 text-cyan-300', borderColor: 'border-cyan-700/50' },
    { name: 'Git', icon: GitBranch, color: 'bg-red-900/30 text-red-300', borderColor: 'border-red-700/50' },
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
    <section id="habilidades" className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
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
                className="bg-slate-700 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col items-center justify-center text-center border border-slate-600"
              >
                <div
                  className={`w-16 h-16 rounded-full ${skill.color} border ${skill.borderColor} flex items-center justify-center mb-4`}
                >
                  <IconComponent size={32} />
                </div>
                <h3 className="text-lg font-semibold text-white">
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

