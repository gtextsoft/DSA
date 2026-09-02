import type { Metadata } from 'next'
import './globals.css'
import Chatbot from '@/components/Chatbot'
import GoogleAnalytics from '@/components/GoogleAnalytics'
import JsonLd from '@/components/JsonLd'
import { SITE_URL } from '@/lib/metadata'
import { organizationSchema, personSchema, websiteSchema } from '@/lib/schema'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Stephen Akintayo | Nigerian - American entrepreneur',
    template: '%s | Stephen Akintayo',
  },
  description:
    'Stephen Akintayo, a Nigerian-American entrepreneur, real estate investor, author, and business leader known for driving innovation, wealth creation, and global investment opportunities.',
  keywords:
    'Stephen Akintayo, SACI Holdings, Gtext Holdings, private equity, venture capital, real estate investor, investment coach, Forbes Best of Africa, billionaire habits, wealth building, Houston',
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
