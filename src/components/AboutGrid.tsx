'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function AboutGrid() {
  const facets = [
    {
      title: 'Internationally Renowned Investment and Real Estate Expert',
      description: 'Dr. Stephen Akintayo is recognized as the number-one investment trainer and real estate mogul in Africa. Voted one of the top Investment Influencers by Forbes, his strategies have transformed millions of lives.',
      image: '/images/stephen.png',
      href: '/about'
    },
    {
      title: 'Author of 45+ Sales and Business Books',
      description: 'Bestselling author including multiple #1 bestsellers like "Investment Mastery," "Real Estate Wealth Building," and "The Millionaires Path." His books have sold millions of copies worldwide.',
      image: '/images/stephen.png',
      href: '/store'
    },
    {
      title: 'Creator of Akintayo University',
      description: 'Premier online investment and wealth-building education platform with over 8,000 video segments. Serving over 850,000 individuals and Fortune 100 companies worldwide.',
      image: '/images/stephen.png',
      href: '/store'
    },
    {
      title: 'A Dynamic, Highly Sought After, International Speaker, Coach and Consultant',
      description: 'Dr. Akintayo speaks to audiences of hundreds of thousands worldwide, sharing investment strategies, wealth-building principles, and entrepreneurial insights on stages across Africa, Europe, and the Americas.',
      image: '/images/stephen.png',
      href: '/events'
    },
    {
      title: 'An Incredibly Successful Entrepreneur',
      description: 'Founder and CEO of Gtext Holdings, a $200M investment firm. Dr. Akintayo offers insights on sales, marketing, real estate investment, wealth building, and entrepreneurship through his global ventures.',
      image: '/images/stephen.png',
      href: '/businesses'
    },
    {
      title: 'Regular Commentator and Guest Appearing on Major Media Outlets',
      description: 'Featured on CNN, BBC, CNBC Africa, and Forbes. Regular contributor to major publications and media outlets, sharing expert insights on investment, real estate, and wealth building.',
      image: '/images/stephen.png',
      href: '/media'
    },
    {
      title: 'Real Estate Investor, Disrupter, Mogul and Founder of Gtext Holdings',
      description: 'Dr. Akintayo owns and operates a private equity real estate firm with assets worth over $200 Million. He is one of the Top Crowdfunders in Africa, raising significant equity through innovative platforms.',
      image: '/images/stephen.png',
      href: '/businesses'
    },
    {
      title: 'Philanthropist and Believer in Giving Back',
      description: 'Through the Millionaires Mission 2050 Foundation, Dr. Akintayo mentors underprivileged youth in financial literacy and entrepreneurship, creating opportunities for the next generation.',
      image: '/images/stephen.png',
      href: '/foundation'
    },
    {
      title: 'International Social Media Influencer',
      description: 'With over 1 million followers across all platforms, Dr. Akintayo uses his massive following to educate, inspire, and empower individuals worldwide. Voted one of the top Investment Influencers to watch.',
      image: '/images/stephen.png',
      href: '/media'
    }
  ]

  return (
    <section className="bg-white py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-black mb-4 sm:mb-5 md:mb-6 uppercase tracking-tight px-2">
            THE AKINTAYO
            <span className="block text-red-600 border-b-2 md:border-b-4 border-red-600 inline-block pb-1 sm:pb-2 mt-1 sm:mt-2">
              MOVEMENT
            </span>
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-4 sm:space-y-5 md:space-y-6 text-sm sm:text-base md:text-lg lg:text-xl text-gray-800 leading-relaxed px-2 sm:px-4">
            <p>
              The Akintayo Movement originated from Dr. Stephen Akintayo's bestselling books and investment philosophy. 
              The movement has grown into a global phenomenon featuring investment conferences, wealth-building programs, 
              and educational platforms that have empowered millions worldwide.
            </p>
            <p>
              Learn more about the <Link href="/events" className="text-red-600 hover:text-red-700 font-bold underline">investment conferences</Link> and 
              {' '}<Link href="/events" className="text-red-600 hover:text-red-700 font-bold underline">HERE!</Link>
            </p>
          </div>
        </div>

        {/* Grid of Facets */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mt-8 sm:mt-10 md:mt-12">
          {facets.map((facet, index) => (
            <Link
              key={index}
              href={facet.href}
              className="group bg-white border-2 border-gray-200 hover:border-red-600 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] sm:hover:scale-105"
            >
              {/* Image */}
              <div className="relative w-full h-48 sm:h-56 md:h-64 overflow-hidden">
                <Image 
                  src={facet.image}
                  alt={facet.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              
              {/* Content */}
              <div className="p-4 sm:p-5 md:p-6 space-y-3 sm:space-y-4">
                <h3 className="text-base sm:text-lg md:text-xl font-black text-black uppercase tracking-tight leading-[1.2] sm:leading-tight">
                  {facet.title}
                </h3>
                <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed line-clamp-4">
                  {facet.description}
                </p>
                <div className="text-red-600 font-bold text-xs sm:text-sm uppercase tracking-wider group-hover:text-red-700">
                  LEARN MORE →
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

