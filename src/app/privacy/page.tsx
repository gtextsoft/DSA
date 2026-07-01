import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div className="pt-24 pb-16">
        <div className="container-custom max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            Privacy Policy
          </h1>
          <p className="text-gray-600 mb-8">Last updated: July 1, 2026</p>

          <div className="prose prose-gray max-w-none space-y-6 text-gray-700 leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Introduction</h2>
              <p>
                Dr. Stephen Akintayo Global (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) operates stephenakintayo.com.
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit
                our website or use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Information We Collect</h2>
              <p>We may collect information that you voluntarily provide, including:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Name and contact details (email, phone number)</li>
                <li>Messages submitted through contact or inquiry forms</li>
                <li>Event booking and speaking engagement requests</li>
                <li>Newsletter or strategy signup email addresses</li>
              </ul>
              <p className="mt-4">
                We may also automatically collect usage data such as IP address, browser type, pages visited, and
                referring URLs through cookies and analytics tools.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">How We Use Your Information</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Respond to inquiries and provide requested services</li>
                <li>Process event registrations and mentorship requests</li>
                <li>Send updates, newsletters, and marketing communications (with your consent)</li>
                <li>Improve our website, content, and user experience</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Sharing of Information</h2>
              <p>
                We do not sell your personal information. We may share data with trusted service providers who assist
                in operating our website and delivering services, and when required by law or to protect our rights.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Cookies &amp; Analytics</h2>
              <p>
                We use cookies and similar technologies, including Google Analytics, to understand how visitors use our
                site. You can control cookies through your browser settings.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Data Security</h2>
              <p>
                We implement reasonable administrative and technical measures to protect your information. However, no
                method of transmission over the Internet is completely secure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Your Rights</h2>
              <p>
                Depending on your location, you may have rights to access, correct, delete, or restrict processing of
                your personal data. To exercise these rights, contact us at{' '}
                <a href="mailto:ea@stephenakintayo.com" className="text-red-600 hover:underline">
                  ea@stephenakintayo.com
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Contact Us</h2>
              <p>
                For questions about this Privacy Policy, contact us at{' '}
                <a href="mailto:ea@stephenakintayo.com" className="text-red-600 hover:underline">
                  ea@stephenakintayo.com
                </a>{' '}
                or +1 (443) 790-3925.
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
