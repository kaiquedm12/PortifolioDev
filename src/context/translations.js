export const translations = {
  pt: {
    inicio: 'Início',
    sobre: 'Sobre',
    projetos: 'Projetos',
    contato: 'Contato',
    descricao: 'Desenvolvedor Full Stack.',
    darkMode: 'Modo Escuro',
    language: 'Idioma',
    english: 'Inglês',
    portuguese: 'Português',
    // Hero
    sobreTexto: 'Desenvolvedor Full Stack apaixonado por criar soluções inovadoras',
    curriculo: 'Currículo',
    descobrir: 'Descobrir Mais',
    // About
    sobreMim: 'Sobre Mim',
    sou: 'Sou',
    desenvolvedorFullStack: 'um desenvolvedor Full Stack apaixonado por criar soluções tecnológicas inovadoras e eficientes. Atualmente, estou cursando',
    engenharia: 'Engenharia de Computação na Unisatc',
    trajetoria: 'Minha trajetória como desenvolvedor me permitiu trabalhar com diversas tecnologias e frameworks, desenvolvendo habilidades sólidas tanto no frontend quanto no backend. Tenho experiência em',
    tecnologias: 'C#, JavaScript, Python, React, Node.js, PostgreSQL e SQLite',
    // Projects
    meusProjetos: 'Meus Projetos',
    verProjeto: 'Ver Projeto',
    // Contact
    faleComigo: 'Fale Comigo',
    envieMensagem: 'Envie uma mensagem e responderei o mais breve possível',
    // Footer
    linksRapidos: 'Links Rápidos',
    redesSociais: 'Redes Sociais',
    todosDireitos: 'Todos os direitos reservados',
  },
  en: {
    inicio: 'Home',
    sobre: 'About',
    projetos: 'Projects',
    contato: 'Contact',
    descricao: 'Full Stack Developer.',
    darkMode: 'Dark Mode',
    language: 'Language',
    english: 'English',
    portuguese: 'Portuguese',
    // Hero
    sobreTexto: 'Full Stack Developer passionate about creating innovative solutions',
    curriculo: 'Resume',
    descobrir: 'Discover More',
    // About
    sobreMim: 'About Me',
    sou: 'I am',
    desenvolvedorFullStack: 'a Full Stack developer passionate about creating innovative and efficient technological solutions. Currently, I am studying',
    engenharia: 'Computer Engineering at Unisatc',
    trajetoria: 'My journey as a developer has allowed me to work with various technologies and frameworks, developing solid skills in both frontend and backend. I have experience with',
    tecnologias: 'C#, JavaScript, Python, React, Node.js, PostgreSQL and SQLite',
    // Projects
    meusProjetos: 'My Projects',
    verProjeto: 'View Project',
    // Contact
    faleComigo: 'Get In Touch',
    envieMensagem: 'Send me a message and I will respond as soon as possible',
    // Footer
    linksRapidos: 'Quick Links',
    redesSociais: 'Social Networks',
    todosDireitos: 'All rights reserved',
  },
}

export function t(key, language) {
  return translations[language]?.[key] || translations['pt'][key] || key
}
