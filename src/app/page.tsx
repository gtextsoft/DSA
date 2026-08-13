import type { Metadata } from 'next'
import Header from '@/components/Header'
import { createPageMetadata } from '@/lib/metadata'

export const metadata: Metadata = createPageMetadata({
  title: 'Dr. Stephen Akintayo - Chairman, SACI Holdings | Investor & Real Estate Entrepreneur',
  description:
    'Official home of Dr. Stephen Akintayo — Chairman of SACI Holdings, Founder of Gtext Holdings, Forbes Best of Africa Leading Investment Coach, and author of 45+ books on wealth-building and real estate.',
  path: '/',
})
import HeroCardone from '@/components/HeroCardone'
import IntroductionSection from '@/components/IntroductionSection'
import OfferingsSection from '@/components/OfferingsSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import VolunteerCallout from '@/components/VolunteerCallout'
import StrategySignup from '@/components/StrategySignup'
import SocialConnection from '@/components/SocialConnection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
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