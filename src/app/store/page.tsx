import Header from '@/components/Header'
import Books from '@/components/Books'
import Footer from '@/components/Footer'

export default function Store() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div className="pt-[110px] sm:pt-[120px] md:pt-[130px]">
        <div className="container-custom py-12 sm:py-16">
          <div className="text-center mb-8 sm:mb-12">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-gray-900 mb-4 sm:mb-6 uppercase tracking-tight">
              Book Store
            </h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed px-4">
              Browse Dr. Stephen Akintayo's collection of books, courses, and educational resources designed to help you achieve financial freedom.
            </p>
          </div>
        </div>
      </div>
      <Books />
      <Footer />
    </main>
  )
}

