'use client'

import { useState, useEffect, useRef } from 'react'

interface Message {
  type: 'user' | 'bot'
  text: string
  timestamp: Date
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
  const [inputText, setInputText] = useState('')
  const [showForm, setShowForm] = useState(false)
  const [userData, setUserData] = useState<UserData>({
    name: '',
    phone: '',
    email: '',
    issue: ''
  })
  const [showSupport, setShowSupport] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      // Initial greeting
      addBotMessage("Hello! I'm here to help you. How can I assist you today?")
      inputRef.current?.focus()
    }
  }, [isOpen])

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const addBotMessage = (text: string) => {
    setMessages(prev => [...prev, { type: 'bot', text, timestamp: new Date() }])
  }

  const addUserMessage = (text: string) => {
    setMessages(prev => [...prev, { type: 'user', text, timestamp: new Date() }])
  }

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault()
    if (!inputText.trim()) return

    const userMessage = inputText.trim()
    addUserMessage(userMessage)
    setInputText('')

    // Process user message and generate bot response
    setTimeout(() => {
      const response = getBotResponse(userMessage.toLowerCase())
      addBotMessage(response)

      // If AI can't answer, show form after a short delay
      if (response.includes("I'm sorry") || response.includes("I don't have")) {
        setTimeout(() => {
          setShowForm(true)
        }, 1000)
      }
    }, 500)
  }

  const getBotResponse = (userMessage: string): string => {
    // Services keywords
    if (userMessage.includes('service') || userMessage.includes('investment') || 
        userMessage.includes('coaching') || userMessage.includes('real estate') ||
        userMessage.includes('business') || userMessage.includes('consulting')) {
      return "We offer a wide range of services including investment coaching, real estate consulting, and business development programs. Our services help individuals and businesses build wealth and achieve financial freedom. Would you like more information about a specific service?"
    }

    // Events keywords
    if (userMessage.includes('event') || userMessage.includes('training') || 
        userMessage.includes('workshop') || userMessage.includes('conference') ||
        userMessage.includes('seminar') || userMessage.includes('upcoming')) {
      return "We host various events including real estate training workshops, investment conferences, and business seminars. You can find upcoming events on our Events page or register for the next available session. Would you like to know about our upcoming events?"
    }

    // Books keywords
    if (userMessage.includes('book') || userMessage.includes('publication') || 
        userMessage.includes('author') || userMessage.includes('read') ||
        userMessage.includes('buy') || userMessage.includes('purchase')) {
      return "We have 45+ published books covering topics like real estate investment, wealth building, and business strategies. You can browse and purchase books from our Store page. Many of our books are bestsellers and have helped millions worldwide. Would you like information about specific books?"
    }

    // Contact keywords
    if (userMessage.includes('contact') || userMessage.includes('phone') || 
        userMessage.includes('email') || userMessage.includes('reach') ||
        userMessage.includes('call') || userMessage.includes('speak')) {
      return "You can reach us through multiple channels:\n• Phone: +234 816 790 1719\n• Email: ea@stephenakintayo.com\n• Visit our Contact page for more options\nOur team is ready to assist you with any inquiries."
    }

    // Mentoring/Consulting keywords
    if (userMessage.includes('mentor') || userMessage.includes('consulting') || 
        userMessage.includes('program') || userMessage.includes('coach') ||
        userMessage.includes('guidance') || userMessage.includes('help')) {
      return "We offer personalized mentoring and consulting programs to help you achieve your financial goals. Our programs include one-on-one coaching, group sessions, and customized business consulting. Would you like to learn more about our mentoring programs or book a consultation?"
    }

    // Greetings
    if (userMessage.includes('hello') || userMessage.includes('hi') || 
        userMessage.includes('hey') || userMessage.includes('good morning') ||
        userMessage.includes('good afternoon') || userMessage.includes('good evening')) {
      return "Hello! I'm here to help you with information about our services, events, books, mentoring programs, or contact details. What would you like to know?"
    }

    // Thank you
    if (userMessage.includes('thank') || userMessage.includes('thanks')) {
      return "You're welcome! If you have any other questions, feel free to ask. I'm here to help!"
    }

    // General inquiries
    if (userMessage.includes('what') || userMessage.includes('who') || 
        userMessage.includes('where') || userMessage.includes('when') ||
        userMessage.includes('how') || userMessage.includes('why')) {
      return "I can help you with information about our services, events, books, mentoring programs, or contact methods. Could you be more specific about what you're looking for?"
    }

    // Default response when AI can't understand
    return "I'm sorry, I don't have specific information about that topic. Let me connect you with our customer support team who can better assist you. Please provide your contact details below."
  }

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Validate form
    if (!userData.name || !userData.phone || !userData.email || !userData.issue) {
      alert('Please fill in all fields')
      return
    }

    // Generate WhatsApp message
    const whatsappMessage = `Name: ${userData.name}\nPhone: ${userData.phone}\nEmail: ${userData.email}\nIssue: ${userData.issue}`
    const encodedMessage = encodeURIComponent(whatsappMessage)
    const whatsappUrl = `https://wa.me/2348167901719?text=${encodedMessage}`

    // Redirect to WhatsApp
    window.open(whatsappUrl, '_blank')
    
    // Reset form and close
    setUserData({ name: '', phone: '', email: '', issue: '' })
    setShowForm(false)
    addBotMessage("Thank you! I've opened WhatsApp with your details. Our team will get back to you shortly.")
  }

  const handleFormInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value
    })
  }

  const handleShowSupport = () => {
    setShowSupport(true)
    setShowForm(false)
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
    <>
      {/* Chat Modal */}
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
              setShowSupport(false)
              setMessages([])
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
            <div
              key={index}
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
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Support Info Display */}
        {showSupport && (
          <div className="bg-blue-50 border-t border-blue-200 p-4">
            <h4 className="font-semibold text-sm text-gray-800 mb-2">Customer Support</h4>
            <div className="space-y-2 text-xs text-gray-700">
              <p><strong>Phone:</strong> +234 816 790 1719</p>
              <p><strong>Email:</strong> ea@stephenakintayo.com</p>
            </div>
            <button
              onClick={() => setShowSupport(false)}
              className="mt-2 text-xs text-blue-600 hover:underline"
            >
              Close
            </button>
          </div>
        )}

        {/* Input Area */}
        {!showForm && (
          <form onSubmit={handleSend} className="border-t border-gray-200 p-4 bg-white">
            <div className="flex gap-2">
              <input
                ref={inputRef}
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
              />
              <button
                type="submit"
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-colors"
                aria-label="Send message"
              >
                <i className="fas fa-paper-plane"></i>
              </button>
            </div>
            <button
              type="button"
              onClick={handleShowSupport}
              className="mt-2 text-xs text-gray-600 hover:text-gray-800 text-left"
            >
              Need human support? Click here
            </button>
          </form>
        )}
      </div>

      {/* User Data Collection Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black/50 z-[60] flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Contact Information</h3>
              <p className="text-sm text-gray-600 mb-4">
                Please provide your details so we can connect you with our support team via WhatsApp.
              </p>
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
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
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
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
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
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
                  <label htmlFor="issue" className="block text-sm font-medium text-gray-700 mb-1">
                    Issue / Inquiry *
                  </label>
                  <textarea
                    id="issue"
                    name="issue"
                    value={userData.issue}
                    onChange={handleFormInputChange}
                    required
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm resize-none"
                    placeholder="Describe your issue or inquiry..."
                  />
                </div>
                <div className="flex gap-3 pt-2">
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
                    }}
                    className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

