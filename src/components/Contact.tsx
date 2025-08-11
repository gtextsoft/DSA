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
      value: '+234 XXX XXX XXXX',
      link: 'tel:+234XXXXXXXXX'
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
      value: 'stephenakintayo.com',
      link: 'https://stephenakintayo.com'
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
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <Image 
              src="/images/stephen.png" 
              alt="Dr. Stephen Akintayo" 
              width={80}
              height={80}
              className="w-20 h-20 rounded-full object-cover shadow-lg"
            />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-dark-blue mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-text-light max-w-3xl mx-auto">
            Ready to transform your life? Contact Dr. Stephen Akintayo for speaking engagements, consultations, or collaborations.
          </p>
          <div className="w-24 h-1 bg-sky-blue mx-auto mt-4"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className={`${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <h3 className="text-2xl font-bold text-dark-blue mb-6">Send a Message</h3>
            
            {notification && (
              <div className={`mb-6 p-4 rounded-lg ${
                notification.type === 'success' 
                  ? 'bg-green-100 text-green-800 border border-green-200' 
                  : 'bg-red-100 text-red-800 border border-red-200'
              }`}>
                {notification.message}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-dark-blue mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-blue focus:border-transparent transition-all duration-300"
                    placeholder="Your full name"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-dark-blue mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-blue focus:border-transparent transition-all duration-300"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-dark-blue mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-blue focus:border-transparent transition-all duration-300"
                  placeholder="What is this regarding?"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-dark-blue mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-blue focus:border-transparent transition-all duration-300 resize-none"
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
          <div className={`space-y-8 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
            <div>
              <h3 className="text-2xl font-bold text-dark-blue mb-6">Contact Information</h3>
              
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-sky-blue to-dark-blue rounded-full flex items-center justify-center">
                      <i className={`${info.icon} text-white`}></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-dark-blue">{info.title}</h4>
                      <a 
                        href={info.link} 
                        className="text-sky-blue hover:text-dark-blue transition-colors duration-300"
                      >
                        {info.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-dark-blue mb-6">Follow Dr. Stephen Akintayo</h3>
              
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gradient-to-br from-sky-blue to-dark-blue rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-300"
                    aria-label={social.label}
                  >
                    <i className={`${social.icon} text-lg`}></i>
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-sky-blue to-dark-blue rounded-xl p-6 text-white">
              <h4 className="text-xl font-bold mb-4">Ready to Transform Your Life?</h4>
              <p className="mb-4 opacity-90">
                Book Dr. Stephen Akintayo for your next event, conference, or private consultation.
              </p>
              <button className="bg-white text-dark-blue hover:bg-light-blue font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105">
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