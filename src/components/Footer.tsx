'use client'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    'Quick Links': [
      { name: 'About', href: '#about' },
      { name: 'Businesses', href: '#businesses' },
      { name: 'Events', href: '#events' },
      { name: 'Books', href: '#books' },
      { name: 'Contact', href: '#contact' }
    ],
    'Services': [
      { name: 'Speaking Engagements', href: '#contact' },
      { name: 'Investment Consulting', href: '#businesses' },
      { name: 'Real Estate Tours', href: '#events' },
      { name: 'Mentorship Programs', href: '#about' }
    ],
    'Resources': [
      { name: 'Books & Publications', href: '#books' },
      { name: 'Events & Conferences', href: '#events' },
      { name: 'Foundation', href: '#' },
      { name: 'Media Kit', href: '#' }
    ]
  }

  const socialLinks = [
    { icon: 'fab fa-linkedin', href: 'https://linkedin.com/in/stephenakintayo', label: 'LinkedIn' },
    { icon: 'fab fa-twitter', href: 'https://twitter.com/stephenakintayo', label: 'Twitter' },
    { icon: 'fab fa-instagram', href: 'https://instagram.com/stephenakintayo', label: 'Instagram' },
    { icon: 'fab fa-youtube', href: 'https://youtube.com/@stephenakintayo', label: 'YouTube' },
    { icon: 'fab fa-facebook', href: 'https://facebook.com/stephenakintayo', label: 'Facebook' }
  ]

  return (
    <footer className="bg-dark-blue text-white">
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold mb-4">Dr. Stephen Akintayo</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Distinguished Nigerian entrepreneur, investor, and mentor. Forbes Best of Africa Leading Investment Coach 
                and Real Estate Mogul. Chairman & CEO of Gtext Holdings.
              </p>
              
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-sky-blue hover:bg-white hover:text-dark-blue rounded-full flex items-center justify-center transition-all duration-300"
                    aria-label={social.label}
                  >
                    <i className={`${social.icon}`}></i>
                  </a>
                ))}
              </div>
            </div>

            {/* Footer Links */}
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h4 className="text-lg font-semibold mb-4">{category}</h4>
                <ul className="space-y-2">
                  {links.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        className="text-gray-300 hover:text-sky-blue transition-colors duration-300"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-700 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-300 text-sm mb-4 md:mb-0">
              © {currentYear} Dr. Stephen Akintayo. All rights reserved.
            </div>
            
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-300 hover:text-sky-blue transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-300 hover:text-sky-blue transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-gray-300 hover:text-sky-blue transition-colors duration-300">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-12 h-12 bg-sky-blue hover:bg-dark-blue text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
        aria-label="Back to top"
      >
        <i className="fas fa-chevron-up"></i>
      </button>
    </footer>
  )
} 