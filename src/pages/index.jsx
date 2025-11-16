import Head from 'next/head'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <>
      <Head>
        <title>Kaique Demetrio - Desenvolvedor Full Stack</title>
        <meta
          name="description"
          content="Portfólio de Kaique Demetrio - Desenvolvedor Full Stack especializado em C#, JavaScript, Python, React, Node.js e muito mais."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </>
  )
}

