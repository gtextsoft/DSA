import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Store() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div className="pt-24 pb-16">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 text-center">
            Store
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto text-center leading-relaxed">
            Browse Dr. Stephen Akintayo's collection of books, courses, and educational resources designed to help you achieve financial freedom.
          </p>
        </div>
      </div>
      <Footer />
    </main>
  )
}

