'use client'

export default function AboutIntroduction() {
  return (
    <section className="bg-white py-16 sm:py-20 md:py-24">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Opening Quote */}
          <div className="space-y-4 sm:space-y-6">
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-black leading-tight sm:leading-relaxed">
              <span className="text-red-600">"</span>I work with small companies and Fortune 500 companies to grow investments 
              by finding overlooked opportunities and customizing the investment process to be more effective.<span className="text-red-600">"</span>
            </p>
            
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-800 leading-relaxed">
              Dr. Stephen Akintayo has worked with companies like Google, Microsoft, IBM, and various Fortune 500 companies to 
              transform their investment strategies and wealth-building approaches. He is a New York Times bestselling author, 
              international speaker, and social media expert with over 1 million followers across all platforms. As the founder 
              of Gtext Holdings, a $200M investment firm, Dr. Akintayo has helped empower over 1 million individuals worldwide to 
              achieve financial freedom and build lasting wealth.
            </p>
          </div>

          {/* Supporting Content */}
          <div className="space-y-6 text-base sm:text-lg leading-relaxed text-gray-800">
            <p>
              His journey from humble beginnings to becoming a Forbes Best of Africa Leading Investment Coach and Real Estate 
              Mogul is a testament to his unwavering commitment to excellence, integrity, and service to humanity. Through decades 
              of experience in real estate, investment coaching, and business development, Dr. Akintayo has helped millions of 
              individuals transform their financial lives and reach their full potential.
            </p>
            
            <p>
              His philosophy centers on the belief that wealth is a service to humanity and that everyone has the potential to 
              achieve greatness. This core principle drives all his initiatives, from his businesses to his foundation, ensuring 
              that every endeavor creates positive impact and lasting value.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

