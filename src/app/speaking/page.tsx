'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { submitWeb3Form } from '@/lib/web3forms'

export default function Speaking() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organisation: '',
    eventType: '',
    audienceSize: '',
    location: '',
    date: '',
    message: ''
  })
  const [result, setResult] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setResult('Sending...')

    const payload = new FormData(e.currentTarget)
    payload.append('subject', 'Speaking engagement request')

    try {
      const data = await submitWeb3Form(payload)
      if (data.success) {
        setResult('Thank you for your booking request. We will contact you soon.')
        e.currentTarget.reset()
        setFormData({
          name: '',
          email: '',
          organisation: '',
          eventType: '',
          audienceSize: '',
          location: '',
          date: '',
          message: ''
        })
      } else {
        setResult(data.message || 'Something went wrong. Please try again.')
      }
    } catch {
      setResult('Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const socialLinks = [
    { name: 'LinkedIn', icon: 'fab fa-linkedin' },
    { name: 'Instagram', icon: 'fab fa-instagram' },
    { name: 'YouTube', icon: 'fab fa-youtube' },
    { name: 'Facebook', icon: 'fab fa-facebook' },
    { name: 'X', icon: 'fab fa-x-twitter' }
  ]

  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div className="pt-24 pb-16">
        <div className="container-custom">
          {/* Main Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8">
            Book a Speaking Engagement with Dr. Stephen Akintayo
          </h1>

          {/* Contact Information */}
          <div className="mb-12 space-y-2 text-gray-700 text-base md:text-lg">
            <p><strong>Email:</strong> ea@stephenakintayo.com</p>
            <p><strong>Phone:</strong> +1 (443) 790-3925</p>
            <p><strong>Website:</strong> www.stephenakintayo.com/contact</p>
          </div>

          {/* Booking Form */}
          <form onSubmit={handleSubmit} className="max-w-2xl space-y-6 mb-16">
            <div>
              <label htmlFor="name" className="block text-gray-900 font-semibold mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-amber-50 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-luxury-gold focus:border-luxury-gold"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-gray-900 font-semibold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-amber-50 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-luxury-gold focus:border-luxury-gold"
              />
            </div>

            <div>
              <label htmlFor="organisation" className="block text-gray-900 font-semibold mb-2">
                Organisation
              </label>
              <input
                type="text"
                id="organisation"
                name="organisation"
                value={formData.organisation}
                onChange={handleChange}
                placeholder="Enter your organisation"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-amber-50 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-luxury-gold focus:border-luxury-gold"
              />
            </div>

            <div>
              <label htmlFor="eventType" className="block text-gray-900 font-semibold mb-2">
                Event Type
              </label>
              <select
                id="eventType"
                name="eventType"
                value={formData.eventType}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-amber-50 text-gray-900 focus:outline-none focus:ring-2 focus:ring-luxury-gold focus:border-luxury-gold"
              >
                <option value="">Select event type</option>
                <option value="conference">Conference</option>
                <option value="seminar">Seminar</option>
                <option value="workshop">Workshop</option>
                <option value="keynote">Keynote Speech</option>
                <option value="training">Training Session</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="audienceSize" className="block text-gray-900 font-semibold mb-2">
                Audience Size
              </label>
              <input
                type="text"
                id="audienceSize"
                name="audienceSize"
                value={formData.audienceSize}
                onChange={handleChange}
                placeholder="Enter audience size"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-amber-50 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-luxury-gold focus:border-luxury-gold"
              />
            </div>

            <div>
              <label htmlFor="location" className="block text-gray-900 font-semibold mb-2">
                Location
              </label>
              <input
                type="text"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="Enter location"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-amber-50 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-luxury-gold focus:border-luxury-gold"
              />
            </div>

            <div>
              <label htmlFor="date" className="block text-gray-900 font-semibold mb-2">
                Date
              </label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-amber-50 text-gray-900 focus:outline-none focus:ring-2 focus:ring-luxury-gold focus:border-luxury-gold"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-gray-900 font-semibold mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Enter your message"
                rows={5}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-amber-50 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-luxury-gold focus:border-luxury-gold resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full btn-luxury disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Sending...' : 'Submit'}
            </button>

            {result && (
              <p
                className={`text-center font-medium ${
                  result.includes('Thank you')
                    ? 'text-green-700'
                    : result === 'Sending...'
                      ? 'text-gray-600'
                      : 'text-red-700'
                }`}
              >
                {result}
              </p>
            )}
          </form>

          {/* Connect with Dr. Akintayo Section */}
          <section className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Connect with Dr. Akintayo
            </h2>

            <div className="flex flex-wrap gap-6 md:gap-8 mb-12">
              {socialLinks.map((social, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border-2 border-gray-900 flex items-center justify-center mb-2 hover:bg-gray-100 transition-colors duration-300 cursor-pointer">
                    <i className={`${social.icon} text-xl md:text-2xl text-gray-900`}></i>
                  </div>
                  <span className="text-sm md:text-base text-gray-700">{social.name}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Quote Section */}
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg md:text-xl text-gray-600 italic leading-relaxed">
              "You were not born to be poor — you were born to be great. Your wealth is a service to humanity." — Dr. Stephen Akintayo
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}

