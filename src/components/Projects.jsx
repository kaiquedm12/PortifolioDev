import { motion } from 'framer-motion'
import { Github, ExternalLink, Star } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

const Projects = () => {
  const { isDarkMode, language, mounted } = useTheme()

  const projects = [
    {
      title: 'GymTracker API',
      description: language === 'pt'
        ? 'API completa desenvolvida em ASP.NET Core com SQLite para gerenciamento de treinos e acompanhamento de progresso físico. Sistema robusto com autenticação e controle de exercícios.'
        : 'Complete API developed in ASP.NET Core with SQLite for workout management and physical progress tracking. Robust system with authentication and exercise control.',
      tech: ['ASP.NET', 'SQLite', 'API REST'],
      link: 'https://github.com/kaiquedm12/GymTracker',
      featured: true,
    },
    {
      title: 'ToDoList em C#',
      description: language === 'pt'
        ? 'Aplicação de gerenciamento de tarefas desenvolvida em C# com interface intuitiva. Permite criar, editar e organizar tarefas de forma eficiente.'
        : 'Task management application developed in C# with intuitive interface. Allows you to create, edit and organize tasks efficiently.',
      tech: ['C#', 'Windows Forms', '.NET'],
      link: 'https://github.com/kaiquedm12/ToDo-List',
      featured: false,
    },
    {
      title: language === 'pt' ? 'Sistema ERP de Padaria' : 'Bakery ERP System',
      description: language === 'pt'
        ? 'Sistema completo de gestão empresarial para padarias, desenvolvido para controlar estoque, vendas, fornecedores e relatórios financeiros.'
        : 'Complete business management system for bakeries, developed to control inventory, sales, suppliers and financial reports.',
      tech: ['JavaScript', 'SQLite', 'ERP'],
      link: 'https://github.com/kaiquedm12/PadBakery',
      featured: true,
    },
    {
      title: 'Moedinha',
      description: language === 'pt'
        ? 'Aplicação de gestão financeira pessoal que ajuda a controlar receitas, despesas e planejamento financeiro. Interface moderna e funcionalidades completas.'
        : 'Personal financial management application that helps you control income, expenses and financial planning. Modern interface and complete features.',
      tech: ['Full Stack', 'React', 'Node.js'],
      link: 'https://github.com/kaiquedm12/Moedinha',
      featured: false,
    },
  ]

  if (!mounted) return null

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
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <section className={`py-20 min-h-screen relative overflow-hidden transition-all duration-300 ${
      isDarkMode
        ? 'bg-gradient-to-b from-slate-900 via-black to-slate-900'
        : 'bg-gradient-to-b from-white to-slate-50'
    }`}>
      {/* Background decorativo */}
      <div className={`absolute inset-0 overflow-hidden ${isDarkMode ? 'opacity-10' : 'opacity-20'}`}>
        <div className={`absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl ${
          isDarkMode ? 'bg-blue-600/20' : 'bg-primary/10'
        }`}></div>
        <div className={`absolute bottom-20 right-10 w-72 h-72 rounded-full blur-3xl ${
          isDarkMode ? 'bg-indigo-600/20' : 'bg-indigo-400/10'
        }`}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${
            isDarkMode ? 'text-white' : 'text-slate-900'
          }`}>
            {language === 'pt' ? 'Meus' : 'My'} <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              {language === 'pt' ? 'Projetos' : 'Projects'}
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded mb-6"></div>
          <p className={`mt-4 text-lg ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            {language === 'pt' ? 'Alguns dos projetos que desenvolvi com dedicação' : 'Some of the projects I developed with dedication'}
          </p>
        </motion.div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`group rounded-2xl p-8 border transition-all duration-300 relative overflow-hidden ${
                isDarkMode
                  ? 'bg-slate-800/40 border-blue-600/40 hover:border-blue-500/60 shadow-lg hover:shadow-blue-900/30'
                  : 'bg-white border-slate-200 shadow-lg hover:shadow-2xl hover:border-indigo-200'
              }`}
            >
              {/* Badge de destaque */}
              {project.featured && (
                <div className="absolute top-4 right-4">
                  <div className="flex items-center gap-1 bg-gradient-to-r from-amber-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                    <Star size={12} fill="white" />
                    {language === 'pt' ? 'Destaque' : 'Featured'}
                  </div>
                </div>
              )}

              {/* Gradiente decorativo */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-600 to-purple-600"></div>

              <h3 className={`text-2xl font-bold mb-3 pr-20 ${
                isDarkMode ? 'text-white' : 'text-slate-900'
              }`}>
                {project.title}
              </h3>
              
              <p className={`mb-6 leading-relaxed ${
                isDarkMode ? 'text-slate-400' : 'text-slate-600'
              }`}>
                {project.description}
              </p>

              {/* Tags de tecnologia */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className={`text-xs font-semibold px-3 py-1.5 rounded-full border ${
                      isDarkMode
                        ? 'bg-blue-900/40 text-blue-300 border-blue-600/50'
                        : 'text-indigo-700 bg-indigo-50 border-indigo-200'
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Botão GitHub */}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 ${
                  isDarkMode
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:shadow-lg hover:shadow-blue-900/50'
                    : 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:shadow-xl hover:shadow-indigo-500/50'
                }`}
              >
                <Github size={20} />
                {language === 'pt' ? 'Ver no GitHub' : 'View on GitHub'}
                <ExternalLink size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Projects

