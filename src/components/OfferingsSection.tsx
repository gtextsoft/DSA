'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function OfferingsSection() {
  const offerings = [
    {
      title: 'EVENTS',
      subtitle: '10X',
      description: 'Join Dr. Stephen Akintayo at exclusive investment conferences and masterclasses',
      image: '/images/stephen.png',
      href: '/events',
      bgColor: 'bg-gray-900'
    },
    {
      title: 'PODCAST',
      subtitle: '10X',
      description: 'Listen to weekly episodes featuring investment strategies and success stories',
      image: '/images/stephen.png',
      href: '/media',
      bgColor: 'bg-gray-800'
    },
    {
      title: 'TRAINING',
      subtitle: '10X',
      description: 'Comprehensive investment and wealth-building training programs',
      image: '/images/stephen.png',
      href: '/coaching',
      bgColor: 'bg-gray-900'
    },
    {
      title: 'STUDIOS',
      subtitle: '10X',
      description: 'Exclusive content and behind-the-scenes access to Dr. Akintayo\'s world',
      image: '/images/stephen.png',
      href: '/media',
      bgColor: 'bg-black'
    }
  ]

  return (
    <section className="bg-black py-16 sm:py-20">
      <div className="container-custom">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {offerings.map((offering, index) => (
            <Link 
              key={index}
              href={offering.href}
              className={`group relative ${offering.bgColor} rounded-lg overflow-hidden hover:scale-105 transition-all duration-300 shadow-2xl`}
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
                {/* 10X Badge */}
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
          ))}
        </div>
      </div>
    </section>
  )
}

