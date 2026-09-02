import type { Metadata } from 'next'
import Header from '@/components/Header'
import JsonLd from '@/components/JsonLd'
import { createPageMetadata } from '@/lib/metadata'
import { homepageGraphSchema } from '@/lib/schema'
import HeroCardone from '@/components/HeroCardone'
import IntroductionSection from '@/components/IntroductionSection'
import OfferingsSection from '@/components/OfferingsSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import VolunteerCallout from '@/components/VolunteerCallout'
import StrategySignup from '@/components/StrategySignup'
import SocialConnection from '@/components/SocialConnection'
import Footer from '@/components/Footer'

export const metadata: Metadata = createPageMetadata({
  title: 'Stephen Akintayo | Nigerian - American entrepreneur',
  description:
    'Stephen Akintayo, a Nigerian-American entrepreneur, real estate investor, author, and business leader known for driving innovation, wealth creation, and global investment opportunities.',
  path: '/',
})

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <JsonLd data={homepageGraphSchema} />
      <Header />
      <HeroCardone />
      <IntroductionSection />
      <OfferingsSection />
      <TestimonialsSection />
      <VolunteerCallout />
      <StrategySignup />
      <SocialConnection />
      <Footer />
    </main>
  )
} 