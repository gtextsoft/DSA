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
      description: 'Discover the daily routines and mindset shifts that separate the wealthy from the average.',
      category: 'Wealth Building',
      icon: 'fas fa-crown',
      color: 'from-yellow-400 to-yellow-600'
    },
    {
      title: 'Billionaire Codes',
      description: 'Unlock the secret principles and strategies used by the world\'s most successful entrepreneurs.',
      category: 'Business Strategy',
      icon: 'fas fa-key',
      color: 'from-blue-400 to-blue-600'
    },
    {
      title: 'Real Estate Mastery',
      description: 'A comprehensive guide to building wealth through strategic real estate investments.',
      category: 'Real Estate',
      icon: 'fas fa-home',
      color: 'from-green-400 to-green-600'
    },
    {
      title: 'Investment Psychology',
      description: 'Master the mental game of investing and develop the mindset of successful investors.',
      category: 'Psychology',
      icon: 'fas fa-brain',
      color: 'from-purple-400 to-purple-600'
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
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <Image 
              src="/images/stephen.png" 
              alt="Dr. Stephen Akintayo - Author" 
              width={80}
              height={80}
              className="w-20 h-20 rounded-full object-cover shadow-lg"
            />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-dark-blue mb-4">
            Published Works
          </h2>
          <p className="text-xl text-text-light max-w-3xl mx-auto">
            Author of 45+ books aimed at demystifying real estate and wealth-building, including international bestsellers
          </p>
          <div className="w-24 h-1 bg-sky-blue mx-auto mt-4"></div>
        </div>

        {/* Featured Books */}
        <div className={`grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          {featuredBooks.map((book, index) => (
            <div
              key={book.title}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="p-6">
                <div className={`w-16 h-16 bg-gradient-to-br ${book.color} rounded-full flex items-center justify-center mb-4`}>
                  <i className={`${book.icon} text-white text-xl`}></i>
                </div>
                
                <div className="mb-3">
                  <span className="text-xs font-semibold text-sky-blue uppercase tracking-wide">
                    {book.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-dark-blue mb-3">
                  {book.title}
                </h3>
                
                <p className="text-text-dark text-sm leading-relaxed mb-4">
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
        <div className={`grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
          {bookCategories.map((category, index) => (
            <div
              key={category.name}
              className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-sky-blue to-dark-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <i className={`${category.icon} text-white text-xl`}></i>
              </div>
              
              <h3 className="text-xl font-bold text-dark-blue mb-2">
                {category.name}
              </h3>
              
              <div className="text-3xl font-bold text-sky-blue mb-2">
                {category.count}
              </div>
              
              <p className="text-text-light text-sm">
                Books Published
              </p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className={`text-center ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-4xl font-bold text-dark-blue mb-2">45+</div>
              <div className="text-text-light">Books Published</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-4xl font-bold text-dark-blue mb-2">1M+</div>
              <div className="text-text-light">Copies Sold</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-4xl font-bold text-dark-blue mb-2">15+</div>
              <div className="text-text-light">Languages</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-16 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
          <div className="bg-gradient-to-r from-sky-blue to-dark-blue rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Transform Your Life Through Knowledge
            </h3>
            <p className="text-xl mb-6 opacity-90">
              Get access to Dr. Stephen Akintayo's complete library of wealth-building and real estate investment books
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-dark-blue hover:bg-light-blue font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105">
                <i className="fas fa-book mr-2"></i>
                Browse All Books
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-dark-blue font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105">
                <i className="fas fa-gift mr-2"></i>
                Free Chapter
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 