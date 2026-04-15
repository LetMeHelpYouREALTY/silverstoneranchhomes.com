import Link from 'next/link'
import type { Metadata } from 'next'
import { CONTACT_INFO } from '@/lib/contact-info'
import { buildPageTitle } from '@/lib/metadata'
import { SeoJsonLd } from '@/components/SeoJsonLd'
import { buildWebPageSchema } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description:
    `Read the ${CONTACT_INFO.businessName} terms of service covering website usage, intellectual property, disclaimers, and contact information.`,
  alternates: {
    canonical: '/terms',
  },
  openGraph: {
    title: buildPageTitle('Terms of Service'),
    description:
      `Understand the terms governing the ${CONTACT_INFO.businessName} website, services, and contact procedures.`,
    url: `${CONTACT_INFO.website.base}/terms`,
    type: 'article',
  },
}

export default function TermsPage() {
  const path = '/terms'
  const pageSchema = buildWebPageSchema({
    path,
    name: `${CONTACT_INFO.businessName} Terms of Service`,
    description:
      `${CONTACT_INFO.businessName} terms of service documenting obligations, disclaimers, and communication guidelines.`,
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Terms of Service', path },
    ],
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-20 px-4 sm:px-6 lg:px-8">
      <SeoJsonLd id="terms" data={pageSchema} />
      <div className="mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Terms of Service
          </h1>
          <p className="text-lg text-gray-600">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-xl p-8 md:p-12">
          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Agreement to Terms</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                By accessing or using the {CONTACT_INFO.businessName} website (the &quot;Site&quot;), you agree to be bound by 
                these Terms of Service (&quot;Terms&quot;). If you disagree with any part of these terms, then you may not 
                access the Site.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Use License</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Permission is granted to temporarily access the materials on {CONTACT_INFO.businessName}&apos;s website for 
                personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, 
                and under this license you may not:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose or for any public display</li>
                <li>Attempt to reverse engineer any software contained on the website</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
                <li>Transfer the materials to another person or &quot;mirror&quot; the materials on any other server</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Real Estate Services</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The information provided on this Site is for general informational purposes only. While we strive to 
                provide accurate and up-to-date information, we make no representations or warranties of any kind, 
                express or implied, about:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                <li>The completeness, accuracy, reliability, or availability of property information</li>
                <li>The suitability of any property for your specific needs</li>
                <li>Property values, market conditions, or investment potential</li>
                <li>The accuracy of any third-party information or links</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                All real estate transactions are subject to separate written agreements. This website does not create a 
                broker-client relationship.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. User Accounts and Information</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                When you submit information through our forms, you agree to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Provide accurate, current, and complete information</li>
                <li>Maintain and promptly update your information to keep it accurate</li>
                <li>Not use the Site for any unlawful purpose or in any way that could damage, disable, or impair the Site</li>
                <li>Not attempt to gain unauthorized access to any portion of the Site</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Intellectual Property</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The Site and its original content, features, and functionality are owned by {CONTACT_INFO.businessName} and 
                are protected by international copyright, trademark, patent, trade secret, and other intellectual property 
                laws.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Property images, descriptions, and related content are provided for informational purposes only and may 
                be subject to copyright protection. Unauthorized use of any materials may violate copyright, trademark, 
                and other laws.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Disclaimer</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The materials on {CONTACT_INFO.businessName}&apos;s website are provided on an &apos;as is&apos; basis.{' '}
                {CONTACT_INFO.businessName} makes no warranties, expressed or implied, and hereby disclaims and negates all 
                other warranties including, without limitation, implied warranties or conditions of merchantability, 
                fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Limitations</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                In no event shall {CONTACT_INFO.businessName} or its suppliers be liable for any damages (including, without 
                limitation, damages for loss of data or profit, or due to business interruption) arising out of the use 
                or inability to use the materials on {CONTACT_INFO.businessName}&apos;s website, even if {CONTACT_INFO.businessName}{' '}
                or a {CONTACT_INFO.businessName} authorized representative has been notified orally or in writing of the 
                possibility of such damage.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Accuracy of Materials</h2>
              <p className="text-gray-700 leading-relaxed">
                The materials appearing on {CONTACT_INFO.businessName}&apos;s website could include technical, typographical, 
                or photographic errors. {CONTACT_INFO.businessName} does not warrant that any of the materials on its website 
                are accurate, complete, or current. {CONTACT_INFO.businessName} may make changes to the materials contained on 
                its website at any time without notice.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Links to Third-Party Sites</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                {CONTACT_INFO.businessName} has not reviewed all of the sites linked to our website and is not responsible 
                for the contents of any such linked site. The inclusion of any link does not imply endorsement by{' '}
                {CONTACT_INFO.businessName} of the site. Use of any such linked website is at the user&apos;s own risk.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Modifications</h2>
              <p className="text-gray-700 leading-relaxed">
                {CONTACT_INFO.businessName} may revise these Terms of Service at any time without notice. By using this 
                website you are agreeing to be bound by the then current version of these Terms of Service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Governing Law</h2>
              <p className="text-gray-700 leading-relaxed">
                These Terms shall be interpreted and governed by the laws of the State of Nevada, United States, without 
                regard to its conflict of law provisions. Any disputes arising from these Terms or your use of the Site 
                shall be subject to the exclusive jurisdiction of the courts located in Clark County, Nevada.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Contact Information</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have any questions about these Terms of Service, please contact us:
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

