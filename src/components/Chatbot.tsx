'use client'

import { useState, useEffect, useRef } from 'react'

interface Message {
  type: 'user' | 'bot'
  text: string
  timestamp: Date
  options?: string[]
}

interface UserData {
  name: string
  phone: string
  email: string
  issue: string
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [showForm, setShowForm] = useState(false)
  const [userData, setUserData] = useState<UserData>({
    name: '',
    phone: '',
    email: '',
    issue: ''
  })
  const [currentStep, setCurrentStep] = useState<'greeting' | 'main' | 'form'>('greeting')
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const predefinedOptions = {
    greeting: [
      'Services & Programs',
      'Upcoming Events',
      'Books & Publications',
      'Contact Information',
      'Mentoring & Consulting'
    ],
    services: [
      'Investment Coaching',
      'Real Estate Consulting',
      'Business Development',
      'Back to Main Menu'
    ],
    events: [
      'Upcoming Events',
      'Event Registration',
      'Event Details',
      'Back to Main Menu'
    ],
    books: [
      'Browse Books',
      'Purchase Information',
      'Book Recommendations',
      'Back to Main Menu'
    ],
    contact: [
      'Phone Number',
      'Email Address',
      'Location',
      'Back to Main Menu'
    ],
    mentoring: [
      'Mentoring Programs',
      'Consulting Services',
      'Book Consultation',
      'Back to Main Menu'
    ]
  }

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      // Initial greeting
      addBotMessage("Hello! I'm SACI Support. How can I help you today?", predefinedOptions.greeting)
      setCurrentStep('greeting')
    }
  }, [isOpen])

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, showForm])

  const addBotMessage = (text: string, options?: string[]) => {
    setMessages(prev => [...prev, { type: 'bot', text, timestamp: new Date(), options }])
  }

  const addUserMessage = (text: string) => {
    setMessages(prev => [...prev, { type: 'user', text, timestamp: new Date() }])
  }

  const handleOptionClick = (option: string) => {
    addUserMessage(option)

    setTimeout(() => {
      let response = ''
      let nextOptions: string[] | undefined = []

      if (option === 'Services & Programs' || option.includes('Investment Coaching') || option.includes('Real Estate Consulting') || option.includes('Business Development')) {
        if (option === 'Services & Programs') {
          response = "We offer a wide range of services including:\n\n• Investment Coaching - Personal guidance on building wealth through smart investments\n• Real Estate Consulting - Expert advice on property investment and development\n• Business Development - Strategic consulting to grow your business\n\nWhich service interests you most?"
          nextOptions = predefinedOptions.services
        } else if (option === 'Investment Coaching') {
          response = "Our Investment Coaching program helps individuals build wealth through strategic investments. We provide personalized guidance, portfolio management strategies, and wealth-building techniques. Our programs have helped over 1 million individuals worldwide.\n\nWould you like to learn more?"
          nextOptions = predefinedOptions.services
        } else if (option === 'Real Estate Consulting') {
          response = "Real Estate Consulting services offer expert advice on property investment, development, and portfolio building. We help clients identify profitable opportunities and build successful real estate portfolios.\n\nWould you like more information?"
          nextOptions = predefinedOptions.services
        } else if (option === 'Business Development') {
          response = "Business Development consulting helps entrepreneurs and businesses scale effectively. We provide strategic planning, growth strategies, and operational excellence guidance.\n\nInterested in learning more?"
          nextOptions = predefinedOptions.services
        }
      } else if (option === 'Upcoming Events' || option.includes('Event')) {
        if (option === 'Upcoming Events') {
          response = "We host various events throughout the year:\n\n• Real Estate Training Workshops\n• Investment Conferences\n• Business Seminars\n• Networking Events\n\nOur next major event is the Real Estate Live Training on November 22nd, 12:00 pm - 5:00 pm (Virtual Event).\n\nWhat would you like to know about our events?"
          nextOptions = predefinedOptions.events
        } else if (option === 'Event Registration') {
          response = "To register for our events, you can:\n\n• Visit our Events page on the website\n• Call us at +234 816 790 1719\n• Email us at ea@stephenakintayo.com\n• Click 'SECURE YOUR SEAT' on event announcements\n\nWould you like to register now?"
          nextOptions = predefinedOptions.events
        } else if (option === 'Event Details') {
          response = "Our events feature:\n\n• Expert training sessions\n• Real-world case studies\n• Q&A opportunities\n• Networking with like-minded individuals\n• Certification programs\n\nAll events are designed to help you achieve financial freedom and build wealth.\n\nNeed more specific information?"
          nextOptions = predefinedOptions.events
        }
      } else if (option === 'Books & Publications' || option.includes('Book')) {
        if (option === 'Books & Publications') {
          response = "We have 45+ published books covering:\n\n• Real Estate Investment\n• Wealth Building Strategies\n• Business Development\n• Financial Freedom\n\nMany are #1 bestsellers that have helped millions worldwide.\n\nWhat would you like to know?"
          nextOptions = predefinedOptions.books
        } else if (option === 'Browse Books') {
          response = "You can browse our complete collection of books on our Store page. Our books cover topics from beginner to advanced levels in real estate, investment, and business.\n\nVisit the Store section to see all available books and bestsellers."
          nextOptions = predefinedOptions.books
        } else if (option === 'Purchase Information') {
          response = "You can purchase our books through:\n\n• Our online Store page\n• Major book retailers\n• Digital platforms (e-books)\n• Direct order via email: ea@stephenakintayo.com\n\nVisit our Store for current pricing and availability."
          nextOptions = predefinedOptions.books
        } else if (option === 'Book Recommendations') {
          response = "Based on your interests, I can recommend:\n\n• For Real Estate: Our real estate investment guides\n• For Business: Business development and scaling books\n• For Investment: Portfolio management and wealth-building guides\n\nVisit our Store page to see the full collection and find books that match your goals."
          nextOptions = predefinedOptions.books
        }
      } else if (option === 'Contact Information' || option.includes('Phone') || option.includes('Email') || option === 'Location') {
        if (option === 'Contact Information') {
          response = "Here are our contact options:\n\n• Phone: +234 816 790 1719\n• Email: ea@stephenakintayo.com\n• Location: Lagos, Nigeria\n• Website: www.stephenakintayo.com\n\nWhat contact information do you need?"
          nextOptions = predefinedOptions.contact
        } else if (option === 'Phone Number') {
          response = "You can reach us by phone at:\n\n📞 +234 816 790 1719\n\nOur team is available during business hours to assist you with inquiries, bookings, or support.\n\nWould you like to call now or need other contact options?"
          nextOptions = predefinedOptions.contact
        } else if (option === 'Email Address') {
          response = "You can contact us via email at:\n\n📧 ea@stephenakintayo.com\n\nFor general inquiries, bookings, or support, our team will respond promptly.\n\nNeed other ways to reach us?"
          nextOptions = predefinedOptions.contact
        } else if (option === 'Location') {
          response = "Our main office is located in:\n\n📍 Lagos, Nigeria\n\nFor specific location details or to schedule an in-person visit, please contact us via phone or email.\n\nWould you like our contact information?"
          nextOptions = predefinedOptions.contact
        }
      } else if (option === 'Mentoring & Consulting' || option.includes('Mentoring') || option.includes('Consulting') || option === 'Book Consultation') {
        if (option === 'Mentoring & Consulting') {
          response = "We offer comprehensive mentoring and consulting services:\n\n• One-on-One Mentoring Programs\n• Group Coaching Sessions\n• Business Consulting Services\n• Strategic Planning Guidance\n\nOur programs are designed to help you achieve your financial and business goals.\n\nWhat interests you?"
          nextOptions = predefinedOptions.mentoring
        } else if (option === 'Mentoring Programs') {
          response = "Our Mentoring Programs include:\n\n• Personalized coaching sessions\n• Goal-setting and accountability\n• Wealth-building strategies\n• Business growth guidance\n• Long-term success planning\n\nPrograms are tailored to your specific needs and goals.\n\nInterested in enrolling?"
          nextOptions = predefinedOptions.mentoring
        } else if (option === 'Consulting Services') {
          response = "Our Consulting Services cover:\n\n• Investment Strategy Consulting\n• Real Estate Portfolio Development\n• Business Growth Strategies\n• Financial Planning\n• Operational Excellence\n\nWe provide expert guidance to help you make informed decisions.\n\nNeed more details?"
          nextOptions = predefinedOptions.mentoring
        } else if (option === 'Book Consultation') {
          response = "To book a consultation, please provide your contact details so we can connect you with our team via WhatsApp. Our consultants will discuss your needs and schedule a session that works for you.\n\nPlease fill out the form below:"
          nextOptions = []
          setShowForm(true)
          setCurrentStep('form')
        }
      } else if (option === 'Back to Main Menu') {
        response = "How can I help you today?"
        nextOptions = predefinedOptions.greeting
        setCurrentStep('main')
      } else if (option === 'I need human support' || option === 'Connect with Support') {
        response = "I'll connect you with our customer support team. Please provide your contact details below so we can assist you via WhatsApp:"
        nextOptions = []
        setShowForm(true)
        setCurrentStep('form')
      }

      if (response) {
        addBotMessage(response, nextOptions)
      }
    }, 500)
  }

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Validate form
    if (!userData.name || !userData.phone || !userData.email || !userData.issue) {
      addBotMessage("Please fill in all fields to proceed.", [])
      return
    }

    // Generate WhatsApp message
    const whatsappMessage = `Name: ${userData.name}\nPhone: ${userData.phone}\nEmail: ${userData.email}\nIssue: ${userData.issue}`
    const encodedMessage = encodeURIComponent(whatsappMessage)
    const whatsappUrl = `https://wa.me/2348167901719?text=${encodedMessage}`

    // Add confirmation message
    addBotMessage("Thank you! I'm opening WhatsApp with your details. Our support team will get back to you shortly.", [])
    
    // Reset form
    setUserData({ name: '', phone: '', email: '', issue: '' })
    setShowForm(false)
    setCurrentStep('main')

    // Redirect to WhatsApp after a short delay
    setTimeout(() => {
      window.open(whatsappUrl, '_blank')
    }, 1000)
  }

  const handleFormInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value
    })
  }

  const handleSupportClick = () => {
    addUserMessage('I need human support')
    setTimeout(() => {
      addBotMessage("I'll connect you with our customer support team. Please provide your contact details below:", [])
      setShowForm(true)
      setCurrentStep('form')
    }, 500)
  }

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 z-20 w-12 h-12 sm:w-14 sm:h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-xl transition-all duration-300"
        aria-label="Open chatbot"
      >
        <i className="fas fa-question text-white text-lg sm:text-xl"></i>
      </button>
    )
  }

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 z-50 w-[90vw] sm:w-[380px] md:w-[400px] h-[600px] bg-white rounded-lg shadow-2xl flex flex-col overflow-hidden">
      {/* Header */}
      <div className="bg-green-500 text-white p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
            <i className="fas fa-robot text-lg"></i>
          </div>
          <div>
            <h3 className="font-semibold text-sm sm:text-base">SACI Support</h3>
            <p className="text-xs text-white/90">Online now</p>
          </div>
        </div>
        <button
          onClick={() => {
            setIsOpen(false)
            setShowForm(false)
            setMessages([])
            setCurrentStep('greeting')
            setUserData({ name: '', phone: '', email: '', issue: '' })
          }}
          className="text-white hover:text-gray-200 transition-colors"
          aria-label="Close chatbot"
        >
          <i className="fas fa-times text-xl"></i>
        </button>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
        {messages.map((msg, index) => (
          <div key={index}>
            <div
              className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] rounded-lg px-4 py-2 text-sm ${
                  msg.type === 'user'
                    ? 'bg-green-500 text-white'
                    : 'bg-gray-200 text-gray-800'
                }`}
              >
                {msg.text.split('\n').map((line, i) => (
                  <div key={i}>{line}</div>
                ))}
              </div>
            </div>
            
            {/* Options buttons after bot messages */}
            {msg.type === 'bot' && msg.options && msg.options.length > 0 && (
              <div className="mt-2 flex flex-wrap gap-2">
                {msg.options.map((option, optIndex) => (
                  <button
                    key={optIndex}
                    onClick={() => handleOptionClick(option)}
                    className="bg-green-100 hover:bg-green-200 text-green-800 text-xs px-3 py-1.5 rounded-full transition-colors border border-green-300"
                  >
                    {option}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}

        {/* Form inside chat messages */}
        {showForm && (
          <div className="mt-4 bg-white border-2 border-green-500 rounded-lg p-4">
            <h4 className="font-semibold text-sm text-gray-800 mb-3">Contact Information</h4>
            <form onSubmit={handleFormSubmit} className="space-y-3">
              <div>
                <label htmlFor="name" className="block text-xs font-medium text-gray-700 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={userData.name}
                  onChange={handleFormInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-xs font-medium text-gray-700 mb-1">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={userData.phone}
                  onChange={handleFormInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
                  placeholder="+234 816 790 1719"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs font-medium text-gray-700 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={userData.email}
                  onChange={handleFormInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="issue" className="block text-xs font-medium text-gray-700 mb-1">
                  Issue / Inquiry *
                </label>
                <textarea
                  id="issue"
                  name="issue"
                  value={userData.issue}
                  onChange={handleFormInputChange}
                  required
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm resize-none"
                  placeholder="Describe your issue or inquiry..."
                />
              </div>
              <div className="flex gap-2 pt-2">
                <button
                  type="submit"
                  className="flex-1 bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors text-sm"
                >
                  Send via WhatsApp
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setShowForm(false)
                    setUserData({ name: '', phone: '', email: '', issue: '' })
                    setCurrentStep('main')
                  }}
                  className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Footer with support option */}
      <div className="border-t border-gray-200 p-3 bg-white">
        <button
          onClick={handleSupportClick}
          className="w-full text-xs text-gray-600 hover:text-gray-800 text-center py-2 hover:underline"
        >
          Need human support? Click here
        </button>
      </div>
    </div>
  )
}
