import type { Metadata } from 'next'
import Header from '@/components/Header'
import { createPageMetadata } from '@/lib/metadata'

export const metadata: Metadata = createPageMetadata({
  title: 'Dr. Stephen Akintayo - Entrepreneur, Investor & Real Estate Mogul',
  description:
    'Official home of Dr. Stephen Akintayo — Forbes Best of Africa Leading Investment Coach, Chairman & CEO of Gtext Holdings, and author of 45+ books on wealth-building and real estate.',
  path: '/',
})
import HeroCardone from '@/components/HeroCardone'
import IntroductionSection from '@/components/IntroductionSection'
import OfferingsSection from '@/components/OfferingsSection'
import TestimonialsSection from '@/components/TestimonialsSection'
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
      <StrategySignup />
      <SocialConnection />
      <Footer />
    </main>
  )
} 