'use client'

import { useEffect, useState } from 'react'

export default function Events() {
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

    const element = document.getElementById('events')
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  const events = [
    {
      name: 'Business Growth Conference',
      description: 'A dynamic gathering focused on scaling businesses, unlocking global market access, and leveraging strategy, innovation, and capital for growth.',
      icon: 'fas fa-chart-line',
      color: 'from-sky-blue to-dark-blue',
      features: ['Business Scaling', 'Global Market Access', 'Strategy & Innovation', 'Capital Leverage']
    },
    {
      name: 'Global Believers\' Conference',
      description: 'A powerful convergence of faith and purpose, where believers from various sectors come together to align their spiritual values with business success.',
      icon: 'fas fa-pray',
      color: 'from-purple-400 to-purple-600',
      features: ['Faith & Business', 'Spiritual Values', 'Purpose Alignment', 'Global Influence']
    },
    {
      name: 'Real Estate Investment Masterclass',
      description: 'A hands-on, practical training designed to demystify real estate investing, providing attendees with the tools, strategies, and insights needed.',
      icon: 'fas fa-home',
      color: 'from-green-400 to-green-600',
      features: ['Practical Training', 'Investment Tools', 'Wealth Building', 'Market Insights']
    },
    {
      name: 'International Wealth & Real Estate Tours',
      description: 'Curated experiences that take participants across global markets, giving them direct access to real estate opportunities and international investment education.',
      icon: 'fas fa-plane',
      color: 'from-orange-400 to-orange-600',
      features: ['Global Markets', 'Direct Access', 'Investment Education', 'Curated Experiences']
    }
  ]

  return (
    <section id="events" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-dark-blue mb-4">
            High-Impact Events
          </h2>
          <p className="text-xl text-text-light max-w-3xl mx-auto">
            Empowering entrepreneurs, investors, and visionaries across the globe through transformative conferences and masterclasses
          </p>
          <div className="w-24 h-1 bg-sky-blue mx-auto mt-4"></div>
        </div>

        <div className={`grid lg:grid-cols-2 gap-8 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          {events.map((event, index) => (
            <div
              key={event.name}
              className="bg-light-blue rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${event.color} rounded-full flex items-center justify-center mb-6`}>
                <i className={`${event.icon} text-white text-xl`}></i>
              </div>
              
              <h3 className="text-2xl font-bold text-dark-blue mb-4">
                {event.name}
              </h3>
              
              <p className="text-text-dark leading-relaxed mb-6">
                {event.description}
              </p>
              
              <div className="space-y-2">
                <h4 className="font-semibold text-dark-blue mb-3">Key Focus Areas:</h4>
                <div className="grid grid-cols-2 gap-2">
                  {event.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <i className="fas fa-check text-sky-blue mr-2 text-sm"></i>
                      <span className="text-sm text-text-dark">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="mt-6">
                <button className="btn-primary">
                  <i className="fas fa-calendar-plus mr-2"></i>
                  Register Interest
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-16 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
          <div className="bg-gradient-to-r from-sky-blue to-dark-blue rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Transform Your Life?
            </h3>
            <p className="text-xl mb-6 opacity-90">
              Join thousands of successful entrepreneurs who have attended Dr. Stephen Akintayo's events
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-dark-blue hover:bg-light-blue font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105">
                <i className="fas fa-calendar-check mr-2"></i>
                Book Speaking Engagement
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-dark-blue font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105">
                <i className="fas fa-envelope mr-2"></i>
                Contact for Events
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 