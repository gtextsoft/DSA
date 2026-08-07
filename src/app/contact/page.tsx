'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Contact() {
  const [result, setResult] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitting(true)
    setResult('Sending...')

    const formData = new FormData(event.currentTarget)
    formData.append('access_key', '2c6e8a6c-10b8-49dc-a43a-b81253879c6a')

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      })

      const data = await response.json()

      if (data.success) {
        setResult('Thank you! Your message has been sent successfully.')
        event.currentTarget.reset()
      } else {
        setResult(data.message || 'Something went wrong. Please try again.')
      }
    } catch {
      setResult('Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div className="pt-24 pb-16">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-12 text-center">
            Contact Dr. Stephen Akintayo
          </h1>

          <div className="max-w-2xl mx-auto">
            <form onSubmit={onSubmit} className="space-y-6 mb-12">
              <div>
                <label htmlFor="name" className="block text-gray-900 font-semibold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-luxury-gold focus:border-luxury-gold"
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
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-luxury-gold focus:border-luxury-gold"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-gray-900 font-semibold mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-luxury-gold focus:border-luxury-gold"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-900 font-semibold mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-luxury-gold focus:border-luxury-gold resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-luxury disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>

              {result && (
                <p
                  className={`text-center font-medium ${
                    result.includes('successfully')
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

            <div className="text-center space-y-4 text-gray-700">
              <p><strong>Email:</strong> ea@stephenakintayo.com</p>
              <p><strong>Phone:</strong> +1 (443) 790-3925</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}

