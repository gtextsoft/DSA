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
      name: 'Global Wealth Festival',
      description: 'Connecting global investors and thought leaders. A premier gathering for networking, learning, and wealth creation strategies from the world\'s best minds.',
      icon: 'fas fa-globe',
      color: 'from-sky-blue to-dark-blue',
      features: ['Global Networking', 'Wealth Strategies', 'Investor Connections', 'Thought Leadership']
    },
    {
      name: 'Global Property Festival',
      description: 'Africa\'s premier real estate gathering. Bringing together property developers, investors, and real estate professionals from across the continent and beyond.',
      icon: 'fas fa-home',
      color: 'from-green-400 to-green-600',
      features: ['Property Development', 'Real Estate Investment', 'Market Insights', 'Global Opportunities']
    },
    {
      name: 'Billionaire Habits Masterclass',
      description: 'Transformative sessions on mindset, wealth, and leadership. Learn the daily disciplines and strategic principles that billionaires use to build and maintain wealth.',
      icon: 'fas fa-crown',
      color: 'from-yellow-400 to-yellow-600',
      features: ['Mindset Mastery', 'Wealth Disciplines', 'Leadership Principles', 'Strategic Thinking']
    }
  ]

  const collaborators = [
    'Grant Cardone',
    'John C. Maxwell',
    'Ryan Serhant',
    'Robert Kiyosaki',
    'Dr. Brian Tracy',
    'Dr. Les Brown'
  ]

  return (
    <section id="events" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="heading-lg text-dark-blue mb-3 sm:mb-4">
            Global Platforms for Learning, Networking & Growth
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-text-light max-w-3xl mx-auto px-4">
            Dr. Akintayo hosts and speaks at leading conferences worldwide designed to empower entrepreneurs and investors
          </p>
          <div className="w-16 sm:w-24 h-1 bg-sky-blue mx-auto mt-4"></div>
        </div>

        <div className={`grid lg:grid-cols-2 gap-6 sm:gap-8 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          {events.map((event, index) => (
            <div
              key={event.name}
              className="bg-light-blue rounded-xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br ${event.color} rounded-full flex items-center justify-center mb-4 sm:mb-6`}>
                <i className={`${event.icon} text-white text-base sm:text-xl`}></i>
              </div>
              
              <h3 className="text-xl sm:text-2xl font-bold text-dark-blue mb-3 sm:mb-4">
                {event.name}
              </h3>
              
              <p className="text-sm sm:text-base text-text-dark leading-relaxed mb-4 sm:mb-6">
                {event.description}
              </p>
              
              <div className="space-y-2">
                <h4 className="font-semibold text-dark-blue mb-2 sm:mb-3 text-sm sm:text-base">Key Focus Areas:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {event.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <i className="fas fa-check text-sky-blue mr-2 text-xs sm:text-sm flex-shrink-0"></i>
                      <span className="text-xs sm:text-sm text-text-dark">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="mt-4 sm:mt-6">
                <button className="btn-primary w-full sm:w-auto">
                  <i className="fas fa-calendar-plus mr-2"></i>
                  Register Interest
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Past Collaborations */}
        <div className={`mt-12 sm:mt-16 text-center ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
          <h3 className="heading-md text-dark-blue mb-6 sm:mb-8">
            Past Collaborations
          </h3>
          <p className="text-sm sm:text-base text-text-dark mb-4">
            Dr. Akintayo has collaborated with these business legends:
          </p>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8">
            {collaborators.map((collaborator, index) => (
              <span
                key={index}
                className="inline-flex items-center px-4 py-2 rounded-full bg-light-blue text-dark-blue font-medium text-sm sm:text-base"
              >
                <i className="fas fa-user-tie mr-2 text-sky-blue"></i>
                {collaborator}
              </span>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-12 sm:mt-16 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
          <div className="bg-gradient-to-r from-sky-blue to-dark-blue rounded-2xl p-6 sm:p-8 text-white">
            <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
              Ready to Transform Your Life?
            </h3>
            <p className="text-base sm:text-lg md:text-xl mb-4 sm:mb-6 opacity-90">
              Join thousands of successful entrepreneurs who have attended Dr. Stephen Akintayo's events
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4">
              <a href="#contact" className="bg-white text-dark-blue hover:bg-light-blue font-semibold py-3 px-4 sm:px-6 rounded-lg transition-all duration-300 transform hover:scale-105 text-sm sm:text-base w-full sm:w-auto inline-flex items-center justify-center">
                <i className="fas fa-calendar-check mr-2"></i>
                Register for Upcoming Events
              </a>
              <a href="#contact" className="border-2 border-white text-white hover:bg-white hover:text-dark-blue font-semibold py-3 px-4 sm:px-6 rounded-lg transition-all duration-300 transform hover:scale-105 text-sm sm:text-base w-full sm:w-auto inline-flex items-center justify-center">
                <i className="fas fa-image mr-2"></i>
                View Event Gallery
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 