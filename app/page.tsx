import Header from '@/components/pages/Header'
import Hero from '@/components/pages/Hero'
import About from '@/components/pages/About'
import Services from '@/components/pages/Services'
import Contact from '@/components/pages/Contact'
import Footer from '@/components/pages/Footer'

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Services />
      <Contact />
      <Footer />
    </main>
  )
}
