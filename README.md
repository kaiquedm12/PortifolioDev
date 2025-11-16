# Portfólio Kaique Demetrio

Portfólio pessoal moderno desenvolvido com Next.js, React, Tailwind CSS e Framer Motion. Landing page profissional para apresentar projetos, habilidades e informações de contato.

## 🚀 Tecnologias

- **Next.js** - Framework React para produção
- **React** - Biblioteca JavaScript para interfaces
- **Tailwind CSS** - Framework CSS utility-first
- **Framer Motion** - Biblioteca de animações para React
- **Lucide React** - Ícones modernos e leves

## 📋 Pré-requisitos

Antes de começar, você precisa ter instalado em sua máquina:
- Node.js (versão 18 ou superior)
- npm ou yarn

## 🛠️ Instalação

1. Clone o repositório ou navegue até a pasta do projeto:
```bash
cd PortifolioDev
```

2. Instale as dependências:
```bash
npm install
```

## 🏃 Como Rodar o Projeto

### Modo de Desenvolvimento

Execute o servidor de desenvolvimento:

```bash
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver o resultado.

### Build para Produção

Para criar uma build de produção:

```bash
npm run build
```

Para iniciar o servidor de produção:

```bash
npm start
```

## 📁 Estrutura do Projeto

```
PortifolioDev/
├── public/
│   └── kaiquehoje.jpeg          # Foto do perfil
├── src/
│   ├── components/
│   │   ├── Navbar.jsx           # Barra de navegação
│   │   ├── Hero.jsx             # Seção inicial
│   │   ├── About.jsx            # Seção sobre mim
│   │   ├── Projects.jsx         # Seção de projetos
│   │   ├── Skills.jsx           # Seção de habilidades
│   │   └── Contact.jsx          # Seção de contato
│   ├── pages/
│   │   ├── _app.jsx             # Configuração do app
│   │   └── index.jsx            # Página principal
│   └── styles/
│       └── globals.css          # Estilos globais
├── next.config.js               # Configuração do Next.js
├── tailwind.config.js           # Configuração do Tailwind
├── postcss.config.js            # Configuração do PostCSS
└── package.json                  # Dependências do projeto
```

## 🚀 Deploy na Vercel

O Next.js é otimizado para deploy na Vercel. Siga os passos abaixo:

### Opção 1: Deploy via GitHub (Recomendado)

1. Faça push do seu código para um repositório no GitHub

2. Acesse [vercel.com](https://vercel.com) e faça login com sua conta GitHub

3. Clique em "Add New Project"

4. Selecione o repositório do portfólio

5. A Vercel detectará automaticamente que é um projeto Next.js

6. Clique em "Deploy" (não é necessário alterar nenhuma configuração)

7. Aguarde alguns minutos e seu site estará no ar!

### Opção 2: Deploy via CLI da Vercel

1. Instale a CLI da Vercel globalmente:
```bash
npm i -g vercel
```

2. No diretório do projeto, execute:
```bash
vercel
```

3. Siga as instruções no terminal:
   - Se for a primeira vez, faça login
   - Confirme o projeto
   - A Vercel fará o deploy automaticamente

4. Para fazer deploy em produção:
```bash
vercel --prod
```

## 🎨 Personalização

### Cores

As cores principais podem ser alteradas no arquivo `tailwind.config.js`:

```javascript
colors: {
  primary: {
    DEFAULT: '#0066FF',  // Azul principal
    dark: '#0052CC',     // Azul escuro
    light: '#3385FF',    // Azul claro
  },
}
```

### Conteúdo

- **Hero**: Edite o componente `src/components/Hero.jsx`
- **Sobre**: Edite o componente `src/components/About.jsx`
- **Projetos**: Adicione ou remova projetos em `src/components/Projects.jsx`
- **Habilidades**: Modifique as habilidades em `src/components/Skills.jsx`
- **Contato**: Atualize os links sociais em `src/components/Contact.jsx`

### Foto do Perfil

Substitua a imagem `public/kaiquehoje.jpeg` pela sua foto. O componente Hero está configurado para usar este arquivo.

## 📝 Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Cria a build de produção
- `npm start` - Inicia o servidor de produção
- `npm run lint` - Executa o linter do Next.js

## 🌐 Links

- **GitHub**: [github.com/kaiquedm12](https://github.com/kaiquedm12)
- **LinkedIn**: [linkedin.com/in/kaique-demetrio-50a239267](https://www.linkedin.com/in/kaique-demetrio-50a239267/)
- **Instagram**: [instagram.com/kaique.demetrio](https://www.instagram.com/kaique.demetrio/)

## 📄 Licença

Este projeto é de uso pessoal.

---

Desenvolvido com ❤️ por Kaique Demetrio
