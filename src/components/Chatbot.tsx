'use client'

import { useState, useEffect, useRef, Fragment } from 'react'
import { usePathname } from 'next/navigation'
import { isCampaignPath } from '@/lib/campaigns'

interface Message {
  type: 'user' | 'bot'
  text: string
  timestamp: Date
  options?: string[]
  /** Local UI messages (greeting, errors, form prompts) are not sent to the AI */
  local?: boolean
}

interface UserData {
  name: string
  phone: string
  email: string
  issue: string
}

const SUGGESTED_QUESTIONS = [
  'Who is Dr. Stephen Akintayo?',
  'What upcoming events are there?',
  'Which books has he written?',
  'How do I book coaching or mentorship?',
  'How can I book him to speak?'
]

const URL_PATTERN = /(https?:\/\/[^\s)]+[^\s).,;:!?'"])/g

function renderLine(line: string) {
  return line.split(URL_PATTERN).map((part, i) =>
    i % 2 === 1 ? (
      <a
        key={i}
        href={part}
        target="_blank"
        rel="noopener noreferrer"
        className="underline break-all text-green-700 hover:text-green-900"
      >
        {part}
      </a>
    ) : (
      <Fragment key={i}>{part}</Fragment>
    )
  )
}

export default function Chatbot() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [showForm, setShowForm] = useState(false)
  const [userData, setUserData] = useState<UserData>({
    name: '',
    phone: '',
    email: '',
    issue: ''
  })
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      // Initial greeting
      addBotMessage(
        "Hello! I'm SACI Support, Dr. Stephen Akintayo's AI assistant. Ask me anything about his businesses, books, events, coaching or speaking — or pick a question below.",
        SUGGESTED_QUESTIONS,
        true
      )
    }
  }, [isOpen])

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, showForm, isLoading])

  const addBotMessage = (text: string, options?: string[], local = false) => {
    setMessages(prev => [...prev, { type: 'bot', text, timestamp: new Date(), options, local }])
  }

  const sendMessage = async (text: string) => {
    const question = text.trim()
    if (!question || isLoading) return

    const userMessage: Message = { type: 'user', text: question, timestamp: new Date() }
    const history = [...messages, userMessage]
    setMessages(history)
    setInput('')
    setIsLoading(true)

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: history
            .filter(m => !m.local)
            .map(m => ({ role: m.type === 'user' ? 'user' : 'assistant', content: m.text }))
        })
      })
      const data = await res.json().catch(() => ({}))
      if (res.ok && typeof data.reply === 'string') {
        addBotMessage(data.reply)
      } else {
        addBotMessage(
          `${data.error || 'Sorry, something went wrong.'} You can also reach our team on WhatsApp.`,
          ['Connect with Support'],
          true
        )
      }
    } catch {
      addBotMessage(
        "Sorry, I couldn't connect right now. Please check your internet connection, or reach our team on WhatsApp.",
        ['Connect with Support'],
        true
      )
    } finally {
      setIsLoading(false)
    }
  }

  const handleOptionClick = (option: string) => {
    if (option === 'Connect with Support') {
      handleSupportClick()
      return
    }
    sendMessage(option)
  }

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Validate form
    if (!userData.name || !userData.phone || !userData.email || !userData.issue) {
      addBotMessage("Please fill in all fields to proceed.", [], true)
      return
    }

    // Generate WhatsApp message
    const whatsappMessage = `Name: ${userData.name}\nPhone: ${userData.phone}\nEmail: ${userData.email}\nIssue: ${userData.issue}`
    const encodedMessage = encodeURIComponent(whatsappMessage)
    const whatsappUrl = `https://wa.me/2348167901719?text=${encodedMessage}`

    // Add confirmation message
    addBotMessage("Thank you! I'm opening WhatsApp with your details. Our support team will get back to you shortly.", [], true)

    // Reset form
    setUserData({ name: '', phone: '', email: '', issue: '' })
    setShowForm(false)

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
    setMessages(prev => [...prev, { type: 'user', text: 'I need human support', timestamp: new Date(), local: true }])
    setTimeout(() => {
      addBotMessage("I'll connect you with our customer support team. Please provide your contact details below:", [], true)
      setShowForm(true)
    }, 500)
  }

  if (isCampaignPath(pathname)) {
    return null
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
    <div className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 z-50 w-[90vw] sm:w-[380px] md:w-[400px] h-[600px] max-h-[85vh] bg-white rounded-lg shadow-2xl flex flex-col overflow-hidden">
      {/* Header */}
      <div className="bg-green-500 text-white p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
            <i className="fas fa-robot text-lg"></i>
          </div>
          <div>
            <h3 className="font-semibold text-sm sm:text-base">SACI Support</h3>
            <p className="text-xs text-white/90">AI assistant · Online now</p>
          </div>
        </div>
        <button
          onClick={() => {
            setIsOpen(false)
            setShowForm(false)
            setMessages([])
            setInput('')
            setUserData({ name: '', phone: '', email: '', issue: '' })
          }}
          className="w-8 h-8 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 text-white transition-all duration-200 hover:rotate-90"
          aria-label="Close chatbot"
          title="Close chat"
        >
          <i className="fas fa-times text-lg"></i>
        </button>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50" aria-live="polite">
        {messages.map((msg, index) => (
          <div key={index}>
            <div
              className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] rounded-lg px-4 py-2 text-sm break-words ${
                  msg.type === 'user'
                    ? 'bg-green-500 text-white'
                    : 'bg-gray-200 text-gray-800'
                }`}
              >
                {msg.text.split('\n').map((line, i) => (
                  <div key={i} className={line.trim() ? '' : 'h-2'}>
                    {msg.type === 'bot' ? renderLine(line) : line}
                  </div>
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
                    disabled={isLoading}
                    className="bg-green-100 hover:bg-green-200 text-green-800 text-xs px-3 py-1.5 rounded-full transition-colors border border-green-300 disabled:opacity-50"
                  >
                    {option}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}

        {/* Typing indicator */}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-gray-200 text-gray-600 rounded-lg px-4 py-3 text-sm flex items-center gap-1" aria-label="Assistant is typing">
              <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
              <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
              <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></span>
            </div>
          </div>
        )}

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

      {/* Message input */}
      <form
        onSubmit={(e) => {
          e.preventDefault()
          sendMessage(input)
        }}
        className="border-t border-gray-200 p-3 bg-white flex items-center gap-2"
      >
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          maxLength={1000}
          placeholder="Type your question..."
          aria-label="Type your question"
          className="flex-1 px-3 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
        />
        <button
          type="submit"
          disabled={isLoading || !input.trim()}
          className="w-10 h-10 flex-shrink-0 bg-green-500 hover:bg-green-600 disabled:bg-gray-300 text-white rounded-full flex items-center justify-center transition-colors"
          aria-label="Send message"
        >
          <i className="fas fa-paper-plane text-sm"></i>
        </button>
      </form>

      {/* Footer with support option */}
      <div className="px-3 pb-2 bg-white">
        <button
          onClick={handleSupportClick}
          className="w-full text-xs text-gray-600 hover:text-gray-800 text-center py-1 hover:underline"
        >
          Need human support? Click here
        </button>
      </div>
    </div>
  )
}
