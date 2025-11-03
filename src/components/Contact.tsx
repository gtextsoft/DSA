'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [notification, setNotification] = useState<{ type: 'success' | 'error', message: string } | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById('contact')
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setNotification({ type: 'error', message: 'Please fill in all fields' })
      return
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      setNotification({ type: 'error', message: 'Please enter a valid email address' })
      return
    }

    // Simulate form submission
    setNotification({ type: 'success', message: 'Thank you! Your message has been sent. We\'ll get back to you soon.' })
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  const contactInfo = [
    {
      icon: 'fas fa-envelope',
      title: 'Email',
      value: 'ea@stephenakintayo.com',
      link: 'mailto:ea@stephenakintayo.com'
    },
    {
      icon: 'fas fa-phone',
      title: 'Phone',
      value: '+1 (443) 790-3925',
      link: 'tel:+14437903925'
    },
    {
      icon: 'fas fa-map-marker-alt',
      title: 'Location',
      value: 'Lagos, Nigeria',
      link: '#'
    },
    {
      icon: 'fas fa-globe',
      title: 'Website',
      value: 'www.stephenakintayo.com/booking',
      link: 'https://stephenakintayo.com/booking'
    }
  ]

  const socialLinks = [
    { icon: 'fab fa-linkedin', link: 'https://linkedin.com/in/stephenakintayo', label: 'LinkedIn' },
    { icon: 'fab fa-twitter', link: 'https://twitter.com/stephenakintayo', label: 'Twitter' },
    { icon: 'fab fa-instagram', link: 'https://instagram.com/stephenakintayo', label: 'Instagram' },
    { icon: 'fab fa-youtube', link: 'https://youtube.com/@stephenakintayo', label: 'YouTube' }
  ]

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12 sm:mb-16">
          <div className="flex justify-center mb-4 sm:mb-6">
            <Image 
              src="/images/stephen.png" 
              alt="Dr. Stephen Akintayo" 
              width={80}
              height={80}
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover shadow-lg"
            />
          </div>
          <h2 className="heading-lg text-dark-blue mb-3 sm:mb-4">
            Book Dr. Stephen Akintayo for Your Next Event
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-text-light max-w-3xl mx-auto px-4">
            Ready to transform your life? Contact Dr. Stephen Akintayo for speaking engagements, consultations, or collaborations.
          </p>
          <div className="w-16 sm:w-24 h-1 bg-sky-blue mx-auto mt-4"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Form */}
          <div className={`${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <h3 className="text-xl sm:text-2xl font-bold text-dark-blue mb-4 sm:mb-6">Send a Message</h3>
            
            {notification && (
              <div className={`mb-4 sm:mb-6 p-3 sm:p-4 rounded-lg text-sm sm:text-base ${
                notification.type === 'success' 
                  ? 'bg-green-100 text-green-800 border border-green-200' 
                  : 'bg-red-100 text-red-800 border border-red-200'
              }`}>
                {notification.message}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label htmlFor="name" className="block text-xs sm:text-sm font-medium text-dark-blue mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-blue focus:border-transparent transition-all duration-300 text-sm sm:text-base"
                    placeholder="Your full name"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-dark-blue mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-blue focus:border-transparent transition-all duration-300 text-sm sm:text-base"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-xs sm:text-sm font-medium text-dark-blue mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-blue focus:border-transparent transition-all duration-300 text-sm sm:text-base"
                  placeholder="What is this regarding?"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs sm:text-sm font-medium text-dark-blue mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-blue focus:border-transparent transition-all duration-300 resize-none text-sm sm:text-base"
                  placeholder="Tell us more about your inquiry..."
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn-primary w-full">
                <i className="fas fa-paper-plane mr-2"></i>
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className={`space-y-6 sm:space-y-8 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-dark-blue mb-4 sm:mb-6">Contact Information</h3>
              
              <div className="space-y-3 sm:space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center space-x-3 sm:space-x-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-sky-blue to-dark-blue rounded-full flex items-center justify-center flex-shrink-0">
                      <i className={`${info.icon} text-white text-sm sm:text-base`}></i>
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="font-semibold text-dark-blue text-sm sm:text-base">{info.title}</h4>
                      <a 
                        href={info.link} 
                        className="text-sky-blue hover:text-dark-blue transition-colors duration-300 text-xs sm:text-sm break-words"
                      >
                        {info.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-dark-blue mb-4 sm:mb-6">Follow Dr. Stephen Akintayo</h3>
              
              <div className="flex flex-wrap gap-3 sm:gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-sky-blue to-dark-blue rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-300"
                    aria-label={social.label}
                  >
                    <i className={`${social.icon} text-base sm:text-lg`}></i>
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-sky-blue to-dark-blue rounded-xl p-4 sm:p-6 text-white">
              <h4 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Ready to Transform Your Life?</h4>
              <p className="mb-3 sm:mb-4 opacity-90 text-sm sm:text-base">
                Book Dr. Stephen Akintayo for your next event, conference, or private consultation.
              </p>
              <blockquote className="mb-3 sm:mb-4 text-sm sm:text-base italic opacity-95 border-l-2 border-white pl-3">
                "You were not born to be poor — you were born to be great. Your wealth is a service to humanity."
                <br />
                <span className="mt-1 block">— Dr. Stephen Akintayo</span>
              </blockquote>
              <button className="bg-white text-dark-blue hover:bg-light-blue font-semibold py-2 sm:py-3 px-4 sm:px-6 rounded-lg transition-all duration-300 transform hover:scale-105 w-full sm:w-auto text-sm sm:text-base">
                <i className="fas fa-calendar-check mr-2"></i>
                Book Speaking Engagement
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 