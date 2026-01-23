import Head from 'next/head'
import Navbar from '../components/Navbar'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import { useTheme } from '../context/ThemeContext'

export default function Contato() {
  const { isDarkMode } = useTheme()
  
  return (
    <>
      <Head>
        <title>Contato - Kaique Demetrio</title>
        <meta
          name="description"
          content="Entre em contato com Kaique Demetrio."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="alternate icon" href="/favicon.ico" />
      </Head>
      <main className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'dark' : ''}`}>
        <Navbar />
        <Contact />
        <Footer />
      </main>
    </>
  )
}
