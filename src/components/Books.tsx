'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function Books() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById('books')
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  const featuredBooks = [
    {
      title: 'Billionaire Habits',
      description: 'The habits billionaires use that the poor ignore. Discover the daily routines and mindset shifts that separate the wealthy from the average.',
      category: 'Wealth Building',
      icon: 'fas fa-crown',
      color: 'from-yellow-400 to-yellow-600'
    },
    {
      title: 'Billionaire Codes',
      description: 'The secrets and systems for scalable wealth. Unlock the secret principles and strategies used by the world\'s most successful entrepreneurs.',
      category: 'Business Strategy',
      icon: 'fas fa-key',
      color: 'from-blue-400 to-blue-600'
    },
    {
      title: 'Becoming a Billionaire Land Banker',
      description: 'Strategic playbook for real estate success. A comprehensive guide to building wealth through strategic land banking and real estate investments.',
      category: 'Real Estate',
      icon: 'fas fa-home',
      color: 'from-green-400 to-green-600'
    },
    {
      title: 'The Information Millionaire',
      description: 'How to monetize knowledge and digital opportunities. Master the art of leveraging information for wealth creation.',
      category: 'Digital Wealth',
      icon: 'fas fa-laptop',
      color: 'from-purple-400 to-purple-600'
    },
    {
      title: 'Managing Family Finance',
      description: 'Financial wisdom for sustainable homes. Practical strategies for building and maintaining family wealth across generations.',
      category: 'Financial Planning',
      icon: 'fas fa-users',
      color: 'from-pink-400 to-pink-600'
    }
  ]

  const mediaPlatforms = [
    {
      name: 'Investment Chat in a Rolls Royce',
      description: 'Financial insights with global icons and thought leaders.',
      icon: 'fas fa-microphone',
      color: 'from-red-400 to-red-600'
    },
    {
      name: 'The Leadership Podcast',
      description: 'Leadership lessons from the world\'s best minds.',
      icon: 'fas fa-podcast',
      color: 'from-blue-400 to-blue-600'
    },
    {
      name: 'The Billionaire Habits Podcast',
      description: 'Daily wealth disciplines for lasting success.',
      icon: 'fas fa-headphones',
      color: 'from-yellow-400 to-yellow-600'
    }
  ]

  const bookCategories = [
    { name: 'Real Estate', count: 15, icon: 'fas fa-home' },
    { name: 'Wealth Building', count: 12, icon: 'fas fa-chart-line' },
    { name: 'Business Strategy', count: 10, icon: 'fas fa-chess' },
    { name: 'Leadership', count: 8, icon: 'fas fa-users' }
  ]

  return (
    <section id="books" className="section-padding bg-light-blue">
      <div className="container-custom">
        <div className="text-center mb-12 sm:mb-16">
          <div className="flex justify-center mb-4 sm:mb-6">
            <Image 
              src="/images/stephen.png" 
              alt="Dr. Stephen Akintayo - Author" 
              width={80}
              height={80}
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover shadow-lg"
            />
          </div>
          <h2 className="heading-lg text-dark-blue mb-3 sm:mb-4">
            Timeless Principles for Modern Wealth Creation
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-text-light max-w-3xl mx-auto px-4">
            Dr. Akintayo is the author of over 45 books, including international bestsellers that have transformed thousands of readers into disciplined wealth builders.
          </p>
          <div className="w-16 sm:w-24 h-1 bg-sky-blue mx-auto mt-4"></div>
        </div>

        {/* Featured Books */}
        <div className={`grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6 mb-12 sm:mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          {featuredBooks.map((book, index) => (
            <div
              key={book.title}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="p-4 sm:p-6">
                <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br ${book.color} rounded-full flex items-center justify-center mb-3 sm:mb-4`}>
                  <i className={`${book.icon} text-white text-base sm:text-xl`}></i>
                </div>
                
                <div className="mb-2 sm:mb-3">
                  <span className="text-xs font-semibold text-sky-blue uppercase tracking-wide">
                    {book.category}
                  </span>
                </div>
                
                <h3 className="text-lg sm:text-xl font-bold text-dark-blue mb-2 sm:mb-3">
                  {book.title}
                </h3>
                
                <p className="text-xs sm:text-sm text-text-dark leading-relaxed mb-3 sm:mb-4">
                  {book.description}
                </p>
                
                <button className="w-full btn-primary text-sm">
                  <i className="fas fa-shopping-cart mr-2"></i>
                  Get Book
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Book Categories */}
        <div className={`grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
          {bookCategories.map((category, index) => (
            <div
              key={category.name}
              className="bg-white rounded-xl p-4 sm:p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-sky-blue to-dark-blue rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <i className={`${category.icon} text-white text-base sm:text-xl`}></i>
              </div>
              
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-dark-blue mb-2">
                {category.name}
              </h3>
              
              <div className="text-2xl sm:text-3xl font-bold text-sky-blue mb-2">
                {category.count}
              </div>
              
              <p className="text-xs sm:text-sm text-text-light">
                Books Published
              </p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className={`text-center ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <div className="grid sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg">
              <div className="text-3xl sm:text-4xl font-bold text-dark-blue mb-2">45+</div>
              <div className="text-sm sm:text-base text-text-light">Books Published</div>
            </div>
            <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg">
              <div className="text-3xl sm:text-4xl font-bold text-dark-blue mb-2">1M+</div>
              <div className="text-sm sm:text-base text-text-light">Copies Sold</div>
            </div>
            <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg">
              <div className="text-3xl sm:text-4xl font-bold text-dark-blue mb-2">15+</div>
              <div className="text-sm sm:text-base text-text-light">Languages</div>
            </div>
          </div>
        </div>

        {/* Media Platforms */}
        <div className={`mb-12 sm:mb-16 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
          <h3 className="heading-md text-dark-blue mb-6 sm:mb-8 text-center">
            Media Platforms
          </h3>
          <div className="grid sm:grid-cols-3 gap-4 sm:gap-6">
            {mediaPlatforms.map((platform, index) => (
              <div
                key={platform.name}
                className="bg-white rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br ${platform.color} rounded-full flex items-center justify-center mb-3 sm:mb-4 mx-auto`}>
                  <i className={`${platform.icon} text-white text-base sm:text-xl`}></i>
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-dark-blue mb-2 sm:mb-3 text-center">
                  {platform.name}
                </h4>
                <p className="text-xs sm:text-sm text-text-dark leading-relaxed text-center">
                  {platform.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-12 sm:mt-16 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
          <div className="bg-gradient-to-r from-sky-blue to-dark-blue rounded-2xl p-6 sm:p-8 text-white">
            <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
              Transform Your Life Through Knowledge
            </h3>
            <p className="text-base sm:text-lg md:text-xl mb-4 sm:mb-6 opacity-90">
              Get access to Dr. Stephen Akintayo's complete library of wealth-building and real estate investment books
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4">
              <button className="bg-white text-dark-blue hover:bg-light-blue font-semibold py-3 px-4 sm:px-6 rounded-lg transition-all duration-300 transform hover:scale-105 text-sm sm:text-base w-full sm:w-auto">
                <i className="fas fa-book mr-2"></i>
                Explore All Books
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-dark-blue font-semibold py-3 px-4 sm:px-6 rounded-lg transition-all duration-300 transform hover:scale-105 text-sm sm:text-base w-full sm:w-auto">
                <i className="fas fa-users mr-2"></i>
                Join the Mentorship Community
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 