import { motion } from 'framer-motion'
import { Github, ExternalLink, Star } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      title: 'GymTracker API',
      description:
        'API completa desenvolvida em ASP.NET Core com SQLite para gerenciamento de treinos e acompanhamento de progresso físico. Sistema robusto com autenticação e controle de exercícios.',
      tech: ['ASP.NET', 'SQLite', 'API REST'],
      link: 'https://github.com/kaiquedm12/GymTracker',
      featured: true,
    },
    {
      title: 'ToDoList em C#',
      description:
        'Aplicação de gerenciamento de tarefas desenvolvida em C# com interface intuitiva. Permite criar, editar e organizar tarefas de forma eficiente.',
      tech: ['C#', 'Windows Forms', '.NET'],
      link: 'https://github.com/kaiquedm12/ToDo-List',
      featured: false,
    },
    {
      title: 'Sistema ERP de Padaria',
      description:
        'Sistema completo de gestão empresarial para padarias, desenvolvido para controlar estoque, vendas, fornecedores e relatórios financeiros.',
      tech: ['JavaScript', 'SQLite', 'ERP'],
      link: 'https://github.com/kaiquedm12/PadBakery',
      featured: true,
    },
    {
      title: 'Moedinha',
      description:
        'Aplicação de gestão financeira pessoal que ajuda a controlar receitas, despesas e planejamento financeiro. Interface moderna e funcionalidades completas.',
      tech: ['Back-end', 'React', 'Node.js'],
      link: 'https://github.com/kaiquedm12/Moedinha',
      featured: false,
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
    <section id="projetos" className="py-20 bg-gradient-to-b from-slate-900 to-slate-800 relative overflow-hidden">
      {/* Background decorativo */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-indigo-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Meus <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-indigo-600">Projetos</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-indigo-600 mx-auto rounded"></div>
          <p className="text-gray-300 mt-4 text-lg">
            Alguns dos projetos que desenvolvi com dedicação
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
              whileHover={{ y: -10 }}
              className="group bg-slate-700 rounded-2xl p-8 shadow-lg border border-slate-600 hover:shadow-2xl transition-all duration-300 relative overflow-hidden"
            >
              {/* Badge de destaque */}
              {project.featured && (
                <div className="absolute top-4 right-4">
                  <div className="flex items-center gap-1 bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    <Star size={12} fill="white" />
                    Destaque
                  </div>
                </div>
              )}

              {/* Gradiente decorativo */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-indigo-600"></div>

              <h3 className="text-2xl font-bold text-white mb-3 pr-20">
                {project.title}
              </h3>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                {project.description}
              </p>

              {/* Tags de tecnologia */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-semibold text-primary bg-slate-600 px-3 py-1.5 rounded-full border border-slate-500"
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
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105 group-hover:from-primary group-hover:to-indigo-600"
              >
                <Github size={20} />
                Ver no GitHub
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

