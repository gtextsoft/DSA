import type { Metadata } from 'next'
import './globals.css'
import Chatbot from '@/components/Chatbot'
import GoogleAnalytics from '@/components/GoogleAnalytics'
import JsonLd from '@/components/JsonLd'
import { organizationSchema, personSchema, websiteSchema } from '@/lib/schema'

export const metadata: Metadata = {
  metadataBase: new URL('https://stephenakintayo.com'),
  title: {
    default: 'Dr. Stephen Akintayo - Entrepreneur, Investor & Real Estate Mogul',
    template: '%s | Dr. Stephen Akintayo',
  },
  description:
    'Dr. Stephen Akintayo is a distinguished Nigerian entrepreneur, investor, and mentor. Chairman & CEO of Gtext Holdings, Forbes Best of Africa Leading Investment Coach, and author of 45+ books on real estate and wealth-building.',
  keywords:
    'Stephen Akintayo, real estate, investment coach, entrepreneur, Gtext Holdings, Forbes Best of Africa, billionaire habits, real estate investment, wealth building, Nigeria entrepreneur',
  icons: {
    icon: '/images/SAL.png',
    shortcut: '/images/SAL.png',
    apple: '/images/SAL.png',
  },
  authors: [{ name: 'Dr. Stephen Akintayo' }],
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/SAL.png" type="image/png" />
        <link rel="apple-touch-icon" href="/images/SAL.png" type="image/png" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
        <JsonLd data={[personSchema, organizationSchema, websiteSchema]} />
      </head>
      <body className="font-inter">
        <GoogleAnalytics />
        {children}
        <Chatbot />
      </body>
    </html>
  )
}
