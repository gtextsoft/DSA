import type { Metadata } from 'next'
import Header from '@/components/Header'
import { createPageMetadata } from '@/lib/metadata'

export const metadata: Metadata = createPageMetadata({
  title: 'Investment Coaching - Dr. Stephen Akintayo',
  description:
    'Transform your financial future with personalized investment coaching from Dr. Stephen Akintayo. Proven strategies for wealth creation and real estate investment.',
  path: '/coaching',
})
import Footer from '@/components/Footer'

export default function Coaching() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div className="pt-24 pb-16">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 text-center">
            Investment Coaching with Dr. Stephen Akintayo
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto text-center leading-relaxed">
            Transform your financial future with personalized investment coaching from Dr. Stephen Akintayo. 
            Learn proven strategies for wealth creation, real estate investment, and business growth.
          </p>
        </div>
      </div>
      <Footer />
    </main>
  )
}

