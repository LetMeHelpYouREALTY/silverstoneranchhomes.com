import type { Metadata } from 'next'
import Link from 'next/link'
import { SeoJsonLd } from '@/components/SeoJsonLd'
import { buildWebPageSchema, buildAeoFaqSchema } from '@/lib/seo'
import { CONTACT_INFO } from '@/lib/contact-info'
import {
  SILVERSTONE_RANCH_FAQS,
  REAL_ESTATE_PROCESS_FAQS,
  AGENT_VALUE_FAQS,
  LOCAL_AREA_FAQS,
} from '@/lib/aeo-faqs'

export const metadata: Metadata = {
  title: 'Silverstone Ranch FAQ | Real Estate Questions Answered',
  description:
    'Get answers to frequently asked questions about Silverstone Ranch real estate, HOA fees, market trends, buying process, and working with Dr. Jan Duffy. Expert guidance for Las Vegas homebuyers.',
  alternates: {
    canonical: '/faq',
  },
  openGraph: {
    title: 'Silverstone Ranch FAQ | Your Questions Answered',
    description:
      'Comprehensive answers about Silverstone Ranch homes, HOA fees, market conditions, and the buying process from Las Vegas real estate expert Dr. Jan Duffy.',
    url: `${CONTACT_INFO.website.base}/faq`,
    type: 'website',
  },
}

export default function FaqPage() {
  const allFaqs = [
    ...SILVERSTONE_RANCH_FAQS,
    ...REAL_ESTATE_PROCESS_FAQS,
    ...AGENT_VALUE_FAQS,
    ...LOCAL_AREA_FAQS,
  ]

  const pageSchema = buildWebPageSchema({
    path: '/faq',
    name: 'Silverstone Ranch Frequently Asked Questions',
    description:
      'Comprehensive FAQ covering Silverstone Ranch real estate, HOA information, market insights, and buying guidance from expert REALTOR® Dr. Jan Duffy.',
    type: 'FAQPage',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'FAQ', path: '/faq' },
    ],
  })

  const faqSchema = buildAeoFaqSchema('/faq', allFaqs)

  return (
    <main className="bg-white">
      <SeoJsonLd id="faq-schema" data={[pageSchema, faqSchema]} />

      <section className="bg-gradient-to-br from-blue-50 via-white to-slate-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-700 mb-3">
            Expert Answers · Updated November 2025
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6 leading-tight">
            Silverstone Ranch Real Estate FAQ
          </h1>
          <p className="text-lg text-slate-700 mb-6">
            Get expert answers to the most common questions about buying, selling, and living in Silverstone Ranch.
            This comprehensive guide covers HOA fees, market trends, schools, amenities, and working with Dr. Jan
            Duffy for your real estate needs in Northwest Las Vegas.
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <Link
              href="/book-tour"
              className="inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow hover:bg-blue-700 transition"
            >
              Schedule a Tour
            </Link>
            <Link
              href="/request-info"
              className="inline-flex items-center justify-center rounded-full border border-blue-600 px-6 py-3 text-sm font-semibold text-blue-600 hover:bg-blue-50 transition"
            >
              Ask a Question
            </Link>
          </div>

          {/* Table of Contents for AEO */}
          <nav className="rounded-2xl border border-blue-100 bg-white shadow-sm p-6 mb-12">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">Quick Navigation</h2>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <h3 className="font-semibold text-blue-700 mb-2">Community & Lifestyle</h3>
                <ul className="space-y-1 text-blue-600">
                  <li>
                    <a href="#silverstone-ranch" className="hover:underline">
                      Silverstone Ranch Overview
                    </a>
                  </li>
                  <li>
                    <a href="#hoa-fees" className="hover:underline">
                      HOA Fees & Assessments
                    </a>
                  </li>
                  <li>
                    <a href="#amenities" className="hover:underline">
                      Community Amenities
                    </a>
                  </li>
                  <li>
                    <a href="#schools" className="hover:underline">
                      Schools & Education
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-blue-700 mb-2">Buying & Market</h3>
                <ul className="space-y-1 text-blue-600">
                  <li>
                    <a href="#market-conditions" className="hover:underline">
                      Market Conditions
                    </a>
                  </li>
                  <li>
                    <a href="#buying-process" className="hover:underline">
                      Buying Process & Timeline
                    </a>
                  </li>
                  <li>
                    <a href="#working-with-agent" className="hover:underline">
                      Working with Dr. Jan Duffy
                    </a>
                  </li>
                  <li>
                    <a href="#local-area" className="hover:underline">
                      Northwest Las Vegas
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

          {/* Silverstone Ranch FAQs */}
          <section id="silverstone-ranch" className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 pb-3 border-b-2 border-blue-600">
              About Silverstone Ranch
            </h2>
            <div className="space-y-8">
              {SILVERSTONE_RANCH_FAQS.map((faq, index) => (
                <div key={index} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">{faq.question}</h3>
                  <p className="text-slate-700 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Buying Process FAQs */}
          <section id="buying-process" className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 pb-3 border-b-2 border-blue-600">
              Buying Process & Costs
            </h2>
            <div className="space-y-8">
              {REAL_ESTATE_PROCESS_FAQS.map((faq, index) => (
                <div key={index} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">{faq.question}</h3>
                  <p className="text-slate-700 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Agent Value FAQs */}
          <section id="working-with-agent" className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 pb-3 border-b-2 border-blue-600">
              Working with Dr. Jan Duffy
            </h2>
            <div className="space-y-8">
              {AGENT_VALUE_FAQS.map((faq, index) => (
                <div key={index} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">{faq.question}</h3>
                  <p className="text-slate-700 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Local Area FAQs */}
          <section id="local-area" className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 pb-3 border-b-2 border-blue-600">
              Northwest Las Vegas Area
            </h2>
            <div className="space-y-8">
              {LOCAL_AREA_FAQS.map((faq, index) => (
                <div key={index} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">{faq.question}</h3>
                  <p className="text-slate-700 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="rounded-2xl bg-gradient-to-br from-blue-600 to-blue-700 p-8 text-white shadow-lg">
            <h2 className="text-3xl font-bold mb-4">Still Have Questions?</h2>
            <p className="text-lg mb-6 text-blue-50">
              Dr. Jan Duffy provides personalized answers and guidance for your specific situation. Schedule a
              consultation to discuss your Silverstone Ranch real estate goals.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/request-info"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-blue-600 shadow hover:bg-blue-50 transition"
              >
                Ask Your Question
              </Link>
              <Link
                href="/agent"
                className="inline-flex items-center justify-center rounded-full border-2 border-white px-6 py-3 text-sm font-semibold text-white hover:bg-blue-600 transition"
              >
                Meet Dr. Jan Duffy
              </Link>
            </div>
          </section>
        </div>
      </section>
    </main>
  )
}
