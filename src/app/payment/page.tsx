import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PaymentDesk from '@/components/PaymentDesk'
import { createPageMetadata } from '@/lib/metadata'

export const metadata: Metadata = createPageMetadata({
  title: 'General Payment - Stephen Akintayo Foundation',
  description:
    'Complete your payment to Stephen Akintayo Foundation via Stripe (USD/EUR/GBP), Paystack (NGN), or direct bank transfer.',
  path: '/payment',
})

export default function PaymentPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <PaymentDesk />
      <Footer />
    </main>
  )
}
