'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Speaking() {
  const [formData, setFormData] = useState({
    name: '',
    organisation: '',
    eventType: '',
    audienceSize: '',
    location: '',
    date: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    alert('Thank you for your booking request. We will contact you soon!')
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
            Book Dr. Stephen Akintayo for Your Next Event
          </h1>

          {/* Contact Information */}
          <div className="mb-12 space-y-2 text-gray-700 text-base md:text-lg">
            <p><strong>Email:</strong> ea@stephenakintayo.com</p>
            <p><strong>Phone:</strong> +1 (443) 790-3925</p>
            <p><strong>Website:</strong> www.stephenakintayo.com/booking</p>
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
                className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-amber-50 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
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
                className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-amber-50 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
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
                className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-amber-50 text-gray-900 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
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
                className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-amber-50 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
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
                className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-amber-50 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
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
                className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-amber-50 text-gray-900 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
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
                className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-amber-50 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 text-base md:text-lg"
            >
              Submit
            </button>
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

