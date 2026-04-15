import Link from 'next/link'
import type { Metadata } from 'next'
import { CONTACT_INFO } from '@/lib/contact-info'
import { buildPageTitle } from '@/lib/metadata'
import { SeoJsonLd } from '@/components/SeoJsonLd'
import { buildWebPageSchema } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    `Review the ${CONTACT_INFO.businessName} privacy policy outlining data handling, cookies, and contact details for Dr. Jan Duffy REALTOR®.`,
  alternates: {
    canonical: '/privacy',
  },
  openGraph: {
    title: buildPageTitle('Privacy Policy'),
    description:
      `Understand how ${CONTACT_INFO.businessName} manages personal information, website data, and communication preferences.`,
    url: `${CONTACT_INFO.website.base}/privacy`,
    type: 'article',
  },
}

export default function PrivacyPage() {
  const path = '/privacy'
  const pageSchema = buildWebPageSchema({
    path,
    name: `${CONTACT_INFO.businessName} Privacy Policy`,
    description:
      `${CONTACT_INFO.businessName} privacy policy covering personal data usage, third-party services, and contact information for inquiries.`,
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Privacy Policy', path },
    ],
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-20 px-4 sm:px-6 lg:px-8">
      <SeoJsonLd id="privacy" data={pageSchema} />
      <div className="mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Privacy Policy
          </h1>
          <p className="text-lg text-gray-600">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-xl p-8 md:p-12">
          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Introduction</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                {CONTACT_INFO.businessName} (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit 
                our website silverstoneranchhomes.com (the &quot;Site&quot;).
              </p>
              <p className="text-gray-700 leading-relaxed">
                Please read this Privacy Policy carefully. If you do not agree with the terms of this Privacy Policy, 
                please do not access the Site.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Information We Collect</h2>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">2.1 Personal Information</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may collect personal information that you voluntarily provide to us when you:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                <li>Fill out forms on our website (home valuation, request info, book tour, contact forms)</li>
                <li>Subscribe to our newsletter or marketing communications</li>
                <li>Contact us via email or phone</li>
                <li>Interact with our website features</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">
                This information may include:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                <li>Name and contact information (email address, phone number, mailing address)</li>
                <li>Property information (address, property details, preferences)</li>
                <li>Any other information you choose to provide</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">2.2 Automatically Collected Information</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                When you visit our Site, we may automatically collect certain information about your device, including:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>IP address</li>
                <li>Browser type and version</li>
                <li>Operating system</li>
                <li>Pages you visit and time spent on pages</li>
                <li>Referring website addresses</li>
                <li>Date and time of your visit</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. How We Use Your Information</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                <li>Provide, maintain, and improve our services</li>
                <li>Respond to your inquiries, requests, and comments</li>
                <li>Send you property information, market updates, and real estate-related communications</li>
                <li>Schedule property tours and appointments</li>
                <li>Provide home valuations and market analyses</li>
                <li>Send you marketing and promotional communications (with your consent)</li>
                <li>Monitor and analyze usage patterns and trends</li>
                <li>Detect, prevent, and address technical issues</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Information Sharing and Disclosure</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We do not sell, trade, or rent your personal information to third parties. We may share your information 
                in the following circumstances:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                <li><strong>Service Providers:</strong> We may share information with third-party service providers who 
                perform services on our behalf, such as email delivery, hosting, and analytics.</li>
                <li><strong>Business Transfers:</strong> If we are involved in a merger, acquisition, or sale of assets, 
                your information may be transferred as part of that transaction.</li>
                <li><strong>Legal Requirements:</strong> We may disclose your information if required to do so by law or 
                in response to valid requests by public authorities.</li>
                <li><strong>Protection of Rights:</strong> We may disclose information to protect our rights, privacy, 
                safety, or property, and that of our users or others.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Data Security</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We implement appropriate technical and organizational security measures to protect your personal 
                information against unauthorized access, alteration, disclosure, or destruction. However, no method of 
                transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute 
                security.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Your Rights and Choices</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                You have the right to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                <li>Access and receive a copy of your personal information</li>
                <li>Correct inaccurate or incomplete information</li>
                <li>Request deletion of your personal information</li>
                <li>Opt-out of marketing communications by following the unsubscribe instructions in our emails</li>
                <li>Object to processing of your personal information</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                To exercise these rights, please contact us using the information provided in the Contact section below.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Cookies and Tracking Technologies</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may use cookies and similar tracking technologies to track activity on our Site and store certain 
                information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being 
                sent. However, if you do not accept cookies, you may not be able to use some portions of our Site.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Third-Party Links</h2>
              <p className="text-gray-700 leading-relaxed">
                Our Site may contain links to third-party websites. We are not responsible for the privacy practices or 
                content of these third-party sites. We encourage you to read the privacy policies of any third-party 
                sites you visit.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Children&apos;s Privacy</h2>
              <p className="text-gray-700 leading-relaxed">
                Our Site is not intended for children under the age of 18. We do not knowingly collect personal 
                information from children under 18. If you are a parent or guardian and believe your child has provided 
                us with personal information, please contact us.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Changes to This Privacy Policy</h2>
              <p className="text-gray-700 leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the 
                new Privacy Policy on this page and updating the &quot;Last updated&quot; date. You are advised to review 
                this Privacy Policy periodically for any changes.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Contact Us</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have any questions about this Privacy Policy, please contact us:
              </p>
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-gray-700 mb-2">
                  <strong>{CONTACT_INFO.agentName} REALTOR®</strong>
                </p>
                <p className="text-gray-700 mb-2">
                  Phone:{' '}
                  <a href={`tel:${CONTACT_INFO.phone.tel}`} className="text-blue-600 hover:text-blue-700">
                    {CONTACT_INFO.phone.display}
                  </a>
                </p>
                <p className="text-gray-700 mb-2">
                  Email:{' '}
                  <a href={`mailto:${CONTACT_INFO.email}`} className="text-blue-600 hover:text-blue-700">
                    {CONTACT_INFO.email}
                  </a>
                </p>
                <p className="text-gray-700 mb-2">
                  Office:{' '}
                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(CONTACT_INFO.address.display)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-700"
                  >
                    {CONTACT_INFO.address.display}
                  </a>
                </p>
                <p className="text-gray-700">
                  License: {CONTACT_INFO.license}
                </p>
              </div>
            </section>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/"
            className="text-blue-600 hover:text-blue-700 font-medium"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}

