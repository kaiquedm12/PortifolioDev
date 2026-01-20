import Head from 'next/head'
import Navbar from '../components/Navbar'
import Projects from '../components/Projects'
import Footer from '../components/Footer'

export default function Projetos() {
  return (
    <>
      <Head>
        <title>Projetos - Kaique Demetrio</title>
        <meta
          name="description"
          content="Veja os projetos desenvolvidos por Kaique Demetrio."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="alternate icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen">
        <Navbar />
        <Projects />
        <Footer />
      </main>
    </>
  )
}
