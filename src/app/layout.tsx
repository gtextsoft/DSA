import type { Metadata } from 'next'
import './globals.css'
import Chatbot from '@/components/Chatbot'

export const metadata: Metadata = {
  metadataBase: new URL('https://stephenakintayo.com'),
  title: 'Dr. Stephen Akintayo - Entrepreneur, Investor & Real Estate Mogul | Forbes Best of Africa',
  description: 'Dr. Stephen Akintayo is a distinguished Nigerian entrepreneur, investor, and mentor. Chairman & CEO of Gtext Holdings, Forbes Best of Africa Leading Investment Coach, and author of 45+ books on real estate and wealth-building.',
  keywords: 'Stephen Akintayo, real estate, investment coach, entrepreneur, Gtext Holdings, Forbes Best of Africa, billionaire habits, real estate investment, wealth building, Nigeria entrepreneur',
  authors: [{ name: 'Dr. Stephen Akintayo' }],
  openGraph: {
    title: 'Dr. Stephen Akintayo - Entrepreneur, Investor & Real Estate Mogul',
    description: 'Forbes Best of Africa Leading Investment Coach and Real Estate Mogul. Chairman & CEO of Gtext Holdings, author of 45+ books, and mentor to millions.',
    type: 'website',
    url: 'https://stephenakintayo.com',
    images: [
      {
        url: '/images/stephen-akintayo-profile.jpg',
        width: 1200,
        height: 630,
        alt: 'Dr. Stephen Akintayo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dr. Stephen Akintayo - Entrepreneur, Investor & Real Estate Mogul',
    description: 'Forbes Best of Africa Leading Investment Coach and Real Estate Mogul. Chairman & CEO of Gtext Holdings.',
    images: ['/images/stephen-akintayo-profile.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://stephenakintayo.com',
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
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Dr. Stephen Akintayo",
              "jobTitle": "Chairman and CEO of Gtext Holdings",
              "description": "Distinguished Nigerian entrepreneur, investor, and mentor, renowned for his transformative impact in real estate, investment coaching, and philanthropy.",
              "url": "https://stephenakintayo.com",
              "sameAs": [
                "https://linkedin.com/in/stephenakintayo",
                "https://twitter.com/stephenakintayo",
                "https://instagram.com/stephenakintayo"
              ],
              "worksFor": {
                "@type": "Organization",
                "name": "Gtext Holdings"
              },
              "alumniOf": {
                "@type": "Organization",
                "name": "Olabisi Onabanjo University"
              },
              "award": [
                "Forbes Best of Africa Leading Investment Coach and Real Estate Mogul"
              ]
            })
          }}
        />
      </head>
      <body className="font-inter">
        {children}
        <Chatbot />
      </body>
    </html>
  )
} 