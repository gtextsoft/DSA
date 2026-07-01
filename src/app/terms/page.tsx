import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div className="pt-24 pb-16">
        <div className="container-custom max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            Terms &amp; Conditions
          </h1>
          <p className="text-gray-600 mb-8">Last updated: July 1, 2026</p>

          <div className="prose prose-gray max-w-none space-y-6 text-gray-700 leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Agreement to Terms</h2>
              <p>
                By accessing stephenakintayo.com, you agree to be bound by these Terms &amp; Conditions. If you do not
                agree, please do not use this website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Use of Website</h2>
              <p>You agree to use this website only for lawful purposes. You may not:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Attempt to gain unauthorized access to our systems or data</li>
                <li>Use the site to transmit harmful, fraudulent, or misleading content</li>
                <li>Reproduce, distribute, or exploit site content without written permission</li>
                <li>Interfere with the proper functioning of the website</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Intellectual Property</h2>
              <p>
                All content on this website — including text, images, logos, videos, and course materials — is the
                property of Dr. Stephen Akintayo Global or its licensors and is protected by applicable copyright and
                trademark laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Services &amp; Products</h2>
              <p>
                Information on this website about coaching, events, books, and mentorship programs is for general
                informational purposes. Specific terms for paid products and services are governed by separate agreements
                at the point of purchase or registration.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Disclaimer</h2>
              <p>
                Content on this website does not constitute financial, legal, or investment advice. Results from
                coaching, courses, or mentorship programs vary. Past performance is not indicative of future results.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Limitation of Liability</h2>
              <p>
                To the fullest extent permitted by law, Dr. Stephen Akintayo Global shall not be liable for any indirect,
                incidental, or consequential damages arising from your use of this website or reliance on its content.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">External Links</h2>
              <p>
                This website may link to third-party sites including our university, foundation, store, and partner
                platforms. We are not responsible for the content or practices of those external websites.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Changes to Terms</h2>
              <p>
                We reserve the right to update these Terms at any time. Continued use of the website after changes
                constitutes acceptance of the revised Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Contact</h2>
              <p>
                Questions about these Terms? Contact{' '}
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
