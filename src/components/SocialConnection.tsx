'use client'

import Image from 'next/image'

export default function SocialConnection() {
  const socialLinks = [
    { icon: 'fab fa-youtube', href: 'https://youtube.com/@stephenakintayo', label: 'YouTube', color: 'text-red-600' },
    { icon: 'fab fa-instagram', href: 'https://instagram.com/stephenakintayo', label: 'Instagram', color: 'text-pink-500' },
    { icon: 'fab fa-facebook', href: 'https://facebook.com/stephenakintayo', label: 'Facebook', color: 'text-blue-600' },
    { icon: 'fab fa-tiktok', href: 'https://tiktok.com/@stephenakintayo', label: 'TikTok', color: 'text-white' },
    { icon: 'fab fa-snapchat', href: 'https://snapchat.com/add/stephenakintayo', label: 'Snapchat', color: 'text-yellow-400' },
    { icon: 'fab fa-linkedin', href: 'https://linkedin.com/in/stephenakintayo', label: 'LinkedIn', color: 'text-blue-500' },
    { icon: 'fab fa-twitter', href: 'https://twitter.com/stephenakintayo', label: 'X (Twitter)', color: 'text-white' },
  ]

  return (
    <section className="relative bg-black py-16 sm:py-20 md:py-24 overflow-hidden">
      {/* Background BGC Graphic */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="text-[20rem] sm:text-[30rem] font-black text-white/5 leading-none uppercase">
          BGC
        </div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Mobile Preview */}
          <div className="relative order-2 lg:order-1">
            <div className="relative bg-gray-900 rounded-2xl sm:rounded-3xl p-3 sm:p-4 shadow-2xl max-w-xs sm:max-w-sm mx-auto">
              {/* Mobile Screen */}
              <div className="bg-black rounded-xl sm:rounded-2xl overflow-hidden">
                <div className="bg-gray-800 p-3 sm:p-4 border-b border-gray-700">
                  <div className="text-white/60 text-[10px] sm:text-xs mt-1">IF YOU'RE NOT FIRST YOU'RE LAST</div>
                </div>
                <div className="p-3 sm:p-4 space-y-2 sm:space-y-3">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-red-600 flex-shrink-0"></div>
                    <div className="flex-1">
                      <div className="h-2 sm:h-3 bg-white/20 rounded w-20 sm:w-24 mb-1 sm:mb-2"></div>
                      <div className="h-1.5 sm:h-2 bg-white/10 rounded w-24 sm:w-32"></div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-blue-600 flex-shrink-0"></div>
                    <div className="flex-1">
                      <div className="h-2 sm:h-3 bg-white/20 rounded w-16 sm:w-20 mb-1 sm:mb-2"></div>
                      <div className="h-1.5 sm:h-2 bg-white/10 rounded w-20 sm:w-28"></div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-green-600 flex-shrink-0"></div>
                    <div className="flex-1">
                      <div className="h-2 sm:h-3 bg-white/20 rounded w-20 sm:w-28 mb-1 sm:mb-2"></div>
                      <div className="h-1.5 sm:h-2 bg-white/10 rounded w-28 sm:w-36"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-6 sm:space-y-8 order-1 lg:order-2">
            <div className="space-y-6">
              <p className="text-white/90 text-base sm:text-lg leading-relaxed max-w-2xl">
                Everyday I spend several hours across all of my platforms to meet as many of you as I can and share strategies, connections and education for how to grow your business, increase your income, boost your sales, hire the right people and BGC your life.
              </p>
            </div>

            {/* Social Icons Grid */}
            <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-4 gap-3 sm:gap-4 pt-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-900 hover:bg-red-600 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 group border-2 border-gray-800 hover:border-red-600"
                  aria-label={social.label}
                >
                  <i className={`${social.icon} ${social.color} group-hover:text-white text-lg sm:text-2xl md:text-3xl transition-colors duration-300`}></i>
                </a>
              ))}
            </div>

            <a
              href="#"
              className="inline-block text-red-600 hover:text-red-700 font-bold text-lg uppercase tracking-wider transition-colors duration-300"
            >
              LEARN MORE →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

