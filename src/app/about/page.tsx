import Header from '@/components/Header'
import AboutHero from '@/components/AboutHero'
import AboutIntroduction from '@/components/AboutIntroduction'
import AboutQuote from '@/components/AboutQuote'
import AboutGrid from '@/components/AboutGrid'
import AboutHarvardSection from '@/components/AboutHarvardSection'
import AboutLargeQuote from '@/components/AboutLargeQuote'
import Footer from '@/components/Footer'

export default function About() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <AboutHero />
      <AboutIntroduction />
      <AboutQuote />
      <AboutGrid />
      <AboutHarvardSection />
      <AboutLargeQuote />
      <Footer />
    </main>
  )
}

