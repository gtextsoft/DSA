'use client'

import { useState } from 'react'

export default function StrategySignup() {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Add your form submission logic here
    setTimeout(() => {
      setIsSubmitting(false)
      setEmail('')
      alert('Thank you for subscribing!')
    }, 1000)
  }

  return (
    <section className="bg-black border-t-4 border-red-600 py-16 sm:py-20">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-900 rounded-lg p-8 sm:p-12">
            {/* Heading Section */}
            <div className="text-center mb-8">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tight mb-4">
                SIGN UP TO GET{' '}
                <span className="text-red-600 border-b-4 border-red-600 inline-block pb-2">
                  DR. AKINTAYO'S
                </span>
                {' '}STRATEGY OF THE WEEK
              </h2>
              <p className="text-white/80 text-base sm:text-lg max-w-2xl mx-auto">
                Get exclusive investment strategies, market insights, and wealth-building tips delivered directly to your inbox.
              </p>
            </div>

            {/* Form Section */}
            <div className="max-w-2xl mx-auto">
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-1 bg-white text-black py-3 px-4 sm:px-6 rounded-md font-semibold text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-red-600 w-full"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-red-600 hover:bg-red-700 text-white font-black py-3 px-6 sm:px-8 rounded-md transition-all duration-300 uppercase tracking-wider whitespace-nowrap disabled:opacity-50 text-sm sm:text-base w-full sm:w-auto"
                >
                  {isSubmitting ? 'SUBSCRIBING...' : 'SUBSCRIBE NOW'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

