'use client'

import { useState } from 'react'

export default function BooksSection() {
  const [hoveredBook, setHoveredBook] = useState<string | null>(null)

  const featuredBooks = [
    {
      title: 'Billionaire Habits',
      subtitle: 'Master the Daily Practices of the Ultra-Wealthy',
      orderLink: 'https://www.amazon.com/s?k=stephen+akintayo+billionaire+habits',
      coverColor: 'from-yellow-400 to-yellow-600',
      accentColor: 'yellow',
      gradient: 'bg-gradient-to-br',
      image: 'https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1618844694i/57783562.jpg'
    },
    {
      title: 'Billionaire Codes',
      subtitle: 'Decode the Secrets of Wealth Creation',
      orderLink: 'https://www.amazon.com/s?k=stephen+akintayo+billionaire+codes',
      coverColor: 'from-blue-500 to-blue-700',
      accentColor: 'blue',
      gradient: 'bg-gradient-to-br',
      image: 'https://m.media-amazon.com/images/I/61Z5k8t+j1L._AC_UF1000,1000_QL80_.jpg'
    },
    {
      title: 'Becoming a Billionaire Land Banker',
      subtitle: 'The Ultimate Guide to Real Estate Wealth',
      orderLink: 'https://www.amazon.com/s?k=stephen+akintayo+billionaire+land+banker',
      coverColor: 'from-green-500 to-green-700',
      accentColor: 'green',
      gradient: 'bg-gradient-to-br',
      image: 'https://m.media-amazon.com/images/I/61M2130f5EL._AC_UF1000,1000_QL80_.jpg'
    },
    {
      title: 'The Information Millionaire',
      subtitle: 'Turn Knowledge Into Unlimited Wealth',
      orderLink: 'https://www.amazon.com/s?k=stephen+akintayo+information+millionaire',
      coverColor: 'from-purple-500 to-purple-700',
      accentColor: 'purple',
      gradient: 'bg-gradient-to-br',
      image: 'https://m.media-amazon.com/images/I/61mGRSkSXyL._AC_SX148_SY213_QL70_.jpg'
    }
  ]

  return (
    <section className="bg-black py-16 sm:py-20 md:py-24 lg:py-28">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <div className="inline-block mb-6">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-1 h-8 bg-red-600"></div>
              <span className="text-white/70 text-xs sm:text-sm font-semibold uppercase tracking-[0.2em]">
                New York Times Best-Selling Author
              </span>
              <div className="w-1 h-8 bg-red-600"></div>
            </div>
          </div>
          
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white uppercase tracking-tight leading-tight mb-6">
            Transform Your Life With
            <span className="block text-red-600 mt-2">These Powerful Books</span>
          </h2>
          
          <p className="text-white/80 text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Discover the proven strategies and mindset shifts used by billionaires worldwide. 
            Each book is a masterclass in wealth creation and personal transformation.
          </p>
        </div>

        {/* Books Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
          {featuredBooks.map((book) => (
            <div
              key={book.title}
              className="group"
              onMouseEnter={() => setHoveredBook(book.title)}
              onMouseLeave={() => setHoveredBook(null)}
            >
              <a
                href={book.orderLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full"
              >
                <div className="flex flex-col h-full bg-gray-900 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-red-600/20 hover:-translate-y-2">
                  {/* Book Cover */}
                  <div className={`relative ${!book.image ? `${book.gradient} ${book.coverColor}` : ''} aspect-[2/3] flex flex-col justify-between p-6 sm:p-8 overflow-hidden`}>
                    {/* Book Image */}
                    {book.image && (
                      <img
                        src={book.image}
                        alt={book.title}
                        className="absolute inset-0 w-full h-full object-contain"
                      />
                    )}
                    
                    {/* Decorative Elements */}
                    {!book.image && (
                      <>
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-2xl"></div>
                        <div className="absolute bottom-0 left-0 w-24 h-24 bg-black/20 rounded-full -ml-12 -mb-12 blur-xl"></div>
                      </>
                    )}
                    
                    {/* Book Title */}
                    <div className="relative z-10 flex-1 flex flex-col justify-center">
                      <div className="space-y-3">
                        <h3 className="text-white text-xl sm:text-2xl md:text-3xl font-black leading-tight">
                          {book.title.split(' ').slice(0, 2).join(' ')}
                        </h3>
                        {book.title.split(' ').length > 2 && (
                          <h4 className="text-white/90 text-sm sm:text-base md:text-lg font-bold leading-tight">
                            {book.title.split(' ').slice(2).join(' ')}
                          </h4>
                        )}
                      </div>
                    </div>

                    {/* Author Badge */}
                    <div className="relative z-10 mt-auto pt-4 border-t border-white/20">
                      <div className="text-white/80 text-xs font-semibold uppercase tracking-wider">
                        Dr. Stephen Akintayo
                      </div>
                    </div>

                    {/* Hover Overlay */}
                    <div className={`absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center ${hoveredBook === book.title ? 'opacity-100' : 'opacity-0'}`}>
                      <div className="transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                        <div className="bg-white/10 backdrop-blur-sm rounded-full p-4 border-2 border-white/30">
                          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Book Info */}
                  <div className="p-4 sm:p-6 flex-1 flex flex-col">
                    <p className="text-white/70 text-sm sm:text-base mb-4 line-clamp-2 leading-relaxed">
                      {book.subtitle}
                    </p>
                    
                    {/* CTA Button */}
                    <button className="mt-auto w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 sm:py-4 px-4 sm:px-6 rounded-md transition-all duration-300 text-sm sm:text-base uppercase tracking-wider transform group-hover:scale-105 shadow-lg">
                      Order Now
                    </button>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>

        {/* Additional CTA */}
        <div className="mt-12 sm:mt-16 text-center">
          <p className="text-white/60 text-sm sm:text-base mb-6">
            Start your transformation journey today
          </p>
          <div className="flex items-center justify-center gap-2 text-red-600">
            <span className="w-12 h-0.5 bg-red-600"></span>
            <span className="text-sm font-semibold uppercase tracking-wider">Available on Amazon</span>
            <span className="w-12 h-0.5 bg-red-600"></span>
          </div>
        </div>
      </div>
    </section>
  )
}
