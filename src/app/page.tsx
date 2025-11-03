import Header from '@/components/Header'
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