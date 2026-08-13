import type { Metadata } from 'next'
import Header from '@/components/Header'
import { createPageMetadata } from '@/lib/metadata'

export const metadata: Metadata = createPageMetadata({
  title: 'About Dr. Stephen Akintayo - Biography & Legacy',
  description:
    'Learn about Dr. Stephen Akintayo — Chairman of SACI Holdings, Founder of Gtext Holdings, Forbes-recognized investment coach, private equity entrepreneur, philanthropist, and mentor to millions worldwide.',
  path: '/about',
})
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

