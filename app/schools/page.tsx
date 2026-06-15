import type { Metadata } from 'next'
import Link from 'next/link'
import { SeoJsonLd } from '@/components/SeoJsonLd'
import { buildWebPageSchema, buildFaqSchema } from '@/lib/seo'
import { CONTACT_INFO } from '@/lib/contact-info'
import { buildPageTitle } from '@/lib/metadata'
import { SCHOOLS_NEAR_SILVERSTONE } from '@/lib/schools-near-silverstone'
import { SCHOOLS_FAQS } from '@/lib/hyperlocal-faqs'
import { ASSIGNED_SCHOOLS } from '@/lib/market-data'

export const metadata: Metadata = {
  title: 'Silverstone Ranch Schools | O\'Roarke, Cadwallader, Arbor View 89131',
  description:
    `Schools serving Silverstone Ranch (89131): ${ASSIGNED_SCHOOLS.elementary}, ${ASSIGNED_SCHOOLS.middle}, and ${ASSIGNED_SCHOOLS.high}. CCSD zoning guide and enrollment help from ${CONTACT_INFO.agentName}.`,
  alternates: {
    canonical: '/schools',
  },
  openGraph: {
    title: buildPageTitle('Silverstone Ranch Schools | 89131 CCSD Guide'),
    description:
      `CCSD schools for Silverstone Ranch: ${ASSIGNED_SCHOOLS.elementary}, ${ASSIGNED_SCHOOLS.middle}, and ${ASSIGNED_SCHOOLS.high}. Ratings, enrollment, and relocation support.`,
    url: `${CONTACT_INFO.website.base}/schools`,
    type: 'website',
  },
}

const faqs = SCHOOLS_FAQS.map((f) => ({ question: f.question, answer: f.answer }))

export default function SchoolsPage() {
  const path = '/schools'
  const pageSchema = buildWebPageSchema({
    path,
    name: 'Silverstone Ranch Schools Guide',
    description:
      'Comprehensive guide to schools serving Silverstone Ranch in Northwest Las Vegas, including ratings, enrollment information, and educational resources for families.',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Schools', path },
    ],
  })

  const faqSchema = buildFaqSchema(path, faqs)

  const schemaData = [pageSchema, faqSchema].filter((schema): schema is NonNullable<typeof schema> => schema !== null)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-20 px-4 sm:px-6 lg:px-8">
      <SeoJsonLd id="schools" data={schemaData} />
      
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Silverstone Ranch Schools | Education in Northwest Las Vegas
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive guide to top-rated schools serving Silverstone Ranch families, including
            elementary, middle, and high school options in the Clark County School District.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">School District Overview</h2>
          <div className="prose max-w-none">
            <p className="text-gray-700 mb-4">
              Silverstone Ranch is served by the <strong>Clark County School District (CCSD)</strong>,
              the fifth-largest school district in the United States. The community benefits from
              proximity to several highly-rated schools, modern facilities, and diverse educational
              programs.
            </p>
            <p className="text-gray-700">
              Families relocating to Silverstone Ranch can access quality public education options,
              as well as private and charter school alternatives throughout Northwest Las Vegas. Dr. Jan
              Duffy provides school enrollment assistance and district information to help families
              transition smoothly.
            </p>
          </div>
        </div>

        <div className="grid gap-8 mb-12">
          {SCHOOLS_NEAR_SILVERSTONE.map((school, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{school.name}</h3>
                  <p className="text-gray-600 mb-2">{school.level}</p>
                  <p className="text-sm text-gray-500">{school.address}</p>
                </div>
                <div className="mt-4 md:mt-0 text-right">
                  <div className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold mb-2">
                    Rating: {school.rating}
                  </div>
                  <p className="text-sm text-gray-600">Distance: {school.distance}</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mt-4">
                {school.highlights.map((highlight, i) => (
                  <span
                    key={i}
                    className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                  >
                    {highlight}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-blue-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">School Enrollment Assistance</h2>
          <p className="text-gray-700 mb-6">
            Relocating to Silverstone Ranch? Dr. Jan Duffy provides comprehensive school enrollment
            assistance including:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
            <li>School district boundary maps and zoning information</li>
            <li>Enrollment documentation requirements and timelines</li>
            <li>Private and charter school options and application processes</li>
            <li>School ratings and program comparisons</li>
            <li>Introduction to school administrators and PTA contacts</li>
          </ul>
          <Link
            href="/request-info"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
          >
            Request School Information
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 pb-6 last:border-0">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/contact"
            className="inline-block bg-gray-900 text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors font-semibold"
          >
            Contact Dr. Jan Duffy for School Information
          </Link>
        </div>
      </div>
    </div>
  )
}

