import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Businesses from '@/components/Businesses'
import Events from '@/components/Events'
import Books from '@/components/Books'
import Courses from '@/components/Courses'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Businesses />
      <Events />
      <Books />
      <Courses />
      <Contact />
      <Footer />
    </main>
  )
} 