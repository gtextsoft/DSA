'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function AboutHarvardSection() {
  const harvardFacets = [
    {
      title: 'Harvard Business School Graduate',
      description: 'Dr. Stephen Akintayo completed the prestigious Business Owner Management program at Harvard Business School, one of the world\'s most renowned business institutions. This elite education has enhanced his expertise in strategic leadership and business management.',
      image: '/images/stephen.png',
      href: 'https://hvevnt.vercel.app/'
    },
    {
      title: 'Business Owner Management Expertise',
      description: 'Through Harvard\'s rigorous curriculum, Dr. Akintayo gained cutting-edge insights into scaling businesses, strategic decision-making, and building sustainable enterprises. He now shares these advanced frameworks with business owners worldwide.',
      image: '/images/stephen.png',
      href: 'https://hvevnt.vercel.app/'
    },
    {
      title: 'Harvard Debrief Program Facilitator',
      description: 'Dr. Akintayo facilitates the Harvard Business School Debrief Program, helping serious business owners apply world-class methodologies to transform their enterprises. No wannabes, no tag-alongs—only those who sign the pay-check and carry the weight.',
      image: '/images/stephen.png',
      href: 'https://hvevnt.vercel.app/'
    }
  ]

  return (
    <section className="bg-white py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-black mb-4 sm:mb-5 md:mb-6 uppercase tracking-tight px-2">
            HARVARD BUSINESS
            <span className="block text-red-600 border-b-2 md:border-b-4 border-red-600 inline-block pb-1 sm:pb-2 mt-1 sm:mt-2">
              SCHOOL GRADUATE
            </span>
          </h2>
        </div>

        {/* Grid of Facets */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mt-8 sm:mt-10 md:mt-12">
          {harvardFacets.map((facet, index) => (
            <Link
              key={index}
              href={facet.href}
              className="group bg-white border-2 border-gray-200 hover:border-red-600 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] sm:hover:scale-105"
              {...(facet.href.startsWith('http') && { target: '_blank', rel: 'noopener noreferrer' })}
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

