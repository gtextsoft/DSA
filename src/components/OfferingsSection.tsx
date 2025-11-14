'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function OfferingsSection() {
  const offerings = [
    {
      title: 'EVENTS',
      subtitle: 'BGC',
      description: 'Join Dr. Stephen Akintayo at exclusive investment conferences and masterclasses',
      image: '/images/bgc261.jpg',
      href: '/events',
      bgColor: 'bg-gray-900'
    },
    {
      title: 'PODCAST',
      subtitle: 'BGC',
      description: 'Listen to weekly episodes featuring investment strategies and success stories',
      image: '/images/bgc262.jpg',
      href: '/media',
      bgColor: 'bg-gray-800'
    },
    {
      title: 'TRAINING',
      subtitle: 'BGC',
      description: 'Comprehensive investment and wealth-building training programs',
      image: '/images/bgc261.jpg',
      href: 'https://stephenakintayouniversity.com/',
      bgColor: 'bg-gray-900'
    },
    {
      title: 'STORE',
      subtitle: 'BGC',
      description: 'Browse our collection of books, courses, and exclusive products',
      image: '/images/bgc262.jpg',
      href: 'https://stephenakintayouniversity.com/products',
      bgColor: 'bg-black',
      isStore: true
    }
  ]

  const storeOptions = [
    { name: 'Shop on Amazon', href: 'https://www.amazon.com/s?k=stephen+akintayo&ref=sr_pg_1' },
    { name: 'Official Store', href: 'https://stephenakintayouniversity.com/products' }
  ]

  return (
    <section className="bg-black py-16 sm:py-20">
      <div className="container-custom">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {offerings.map((offering, index) => {
            // Special handling for STORE with dropdown
            if (offering.isStore) {
              return (
                <div
                  key={index}
                  className="group relative bg-black rounded-lg overflow-visible hover:scale-105 transition-all duration-300 shadow-2xl"
                >
                  {/* Background Image */}
                  <div className="relative w-full h-64 sm:h-80 rounded-lg overflow-hidden">
                    <Image 
                      src={offering.image}
                      alt={offering.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                  </div>
                  
                  {/* Content Overlay */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-between rounded-lg">
                    {/* BGC Badge */}
                    <div className="text-6xl sm:text-7xl font-black text-white/20 uppercase leading-none">
                      {offering.subtitle}
                    </div>
                    
                    {/* Title and Description */}
                    <div className="space-y-2">
                      <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">
                        {offering.title}
                      </h3>
                      <p className="text-white/80 text-sm leading-relaxed">
                        {offering.description}
                      </p>
                    </div>
                  </div>

                  {/* Dropdown Menu on Hover */}
                  <div className="absolute top-full left-0 right-0 mt-2 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 z-50">
                    <div className="bg-black border border-white/10 rounded-lg shadow-2xl overflow-hidden">
                      {storeOptions.map((option, optIndex) => (
                        <Link
                          key={optIndex}
                          href={option.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block px-4 py-3 text-sm text-white hover:bg-gray-900 hover:text-red-600 transition-colors duration-300 border-b border-white/5 last:border-b-0"
                        >
                          {option.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )
            }

            // Regular cards
            return (
              <Link 
                key={index}
                href={offering.href}
                className={`group relative ${offering.bgColor} rounded-lg overflow-hidden hover:scale-105 transition-all duration-300 shadow-2xl`}
                {...(offering.href.startsWith('http') && { target: '_blank', rel: 'noopener noreferrer' })}
              >
                {/* Background Image */}
                <div className="relative w-full h-64 sm:h-80">
                  <Image 
                    src={offering.image}
                    alt={offering.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                </div>
                
                {/* Content Overlay */}
                <div className="absolute inset-0 p-6 flex flex-col justify-between">
                  {/* BGC Badge */}
                  <div className="text-6xl sm:text-7xl font-black text-white/20 uppercase leading-none">
                    {offering.subtitle}
                  </div>
                  
                  {/* Title and Description */}
                  <div className="space-y-2">
                    <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">
                      {offering.title}
                    </h3>
                    <p className="text-white/80 text-sm leading-relaxed">
                      {offering.description}
                    </p>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}

