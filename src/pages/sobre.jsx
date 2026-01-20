import Head from 'next/head'
import Navbar from '../components/Navbar'
import About from '../components/About'
import Footer from '../components/Footer'

export default function Sobre() {
  return (
    <>
      <Head>
        <title>Sobre - Kaique Demetrio</title>
        <meta
          name="description"
          content="Conheça mais sobre Kaique Demetrio, desenvolvedor Full Stack."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="alternate icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen">
        <Navbar />
        <About />
        <Footer />
      </main>
    </>
  )
}
