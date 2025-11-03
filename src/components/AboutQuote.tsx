'use client'

export default function AboutQuote() {
  return (
    <section className="bg-white py-16 sm:py-20 md:py-24">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-black text-black mb-4 sm:mb-6 uppercase tracking-tight leading-tight">
            SUCCESS IS YOUR
            <span className="block text-red-600 border-b-2 sm:border-b-4 border-red-600 inline-block pb-1 sm:pb-2 mt-1 sm:mt-2">
              DUTY, OBLIGATION, RESPONSIBILITY
            </span>
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-700 uppercase tracking-wider">
            — Dr. Stephen Akintayo
          </p>
        </div>
      </div>
    </section>
  )
}

