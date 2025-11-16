import { motion } from 'framer-motion'
import { Github } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      title: 'GymTracker API',
      description:
        'API completa desenvolvida em ASP.NET Core com SQLite para gerenciamento de treinos e acompanhamento de progresso físico. Sistema robusto com autenticação e controle de exercícios.',
      tech: 'ASP.NET + SQLite',
      link: 'https://github.com/kaiquedm12/GymTracker',
    },
    {
      title: 'ToDoList em C#',
      description:
        'Aplicação de gerenciamento de tarefas desenvolvida em C# com interface intuitiva. Permite criar, editar e organizar tarefas de forma eficiente.',
      tech: 'C#',
      link: 'https://github.com/kaiquedm12/ToDo-List',
    },
    {
      title: 'Sistema ERP de Padaria',
      description:
        'Sistema completo de gestão empresarial para padarias, desenvolvido para controlar estoque, vendas, fornecedores e relatórios financeiros.',
      tech: 'C# + SQLite',
      link: 'https://github.com/kaiquedm12/PadBakery',
    },
    {
      title: 'Moedinha',
      description:
        'Aplicação de gestão financeira pessoal que ajuda a controlar receitas, despesas e planejamento financeiro. Interface moderna e funcionalidades completas.',
      tech: 'Full Stack',
      link: 'https://github.com/kaiquedm12/Moedinha',
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
    <section id="projetos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Meus <span className="text-primary">Projetos</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded"></div>
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
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {project.title}
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-primary bg-blue-50 px-3 py-1 rounded-full">
                  {project.tech}
                </span>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-primary hover:text-primary-dark font-semibold transition-colors"
                >
                  <Github size={20} />
                  Ver no GitHub
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Projects

