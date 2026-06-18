import type { Metadata } from 'next'
import { CONTACT_INFO } from '@/lib/contact-info'
import { buildHyperlocalTitle, buildPageTitle } from '@/lib/metadata'
import { SeoJsonLd } from '@/components/SeoJsonLd'
import { FaqSection } from '@/components/FaqSection'
import { HOME_VALUATION_FAQS } from '@/lib/hyperlocal-faqs'
import { buildAction, buildFaqSchema, buildHowToSchema, buildServiceSchema, buildWebPageSchema } from '@/lib/seo'
import HomeValuationPageClient from './HomeValuationPageClient'

const path = '/home-valuation'
const faqs = HOME_VALUATION_FAQS.map((f) => ({ question: f.question, answer: f.answer }))

export const metadata: Metadata = {
  title: buildHyperlocalTitle('Silverstone Ranch Home Valuation'),
  description:
    `Request a free Silverstone Ranch (89131) home valuation from ${CONTACT_INFO.agentName}. Data-driven pricing, enclave comps, and seller roadmap for Centennial Hills.`,
  alternates: {
    canonical: path,
  },
  openGraph: {
    title: buildPageTitle('Silverstone Ranch Home Valuation | 89131'),
    description:
      'Unlock your Silverstone Ranch home value with a custom market analysis, pricing strategy, and selling roadmap from Dr. Jan Duffy.',
    url: `${CONTACT_INFO.website.base}${path}`,
    type: 'website',
  },
}

export default function HomeValuationPage() {
  const pageSchema = buildWebPageSchema({
    path,
    name: 'Silverstone Ranch Home Valuation',
    description:
      'Request a Silverstone Ranch home valuation to receive pricing analysis, seller intelligence, and a personalized selling roadmap from Dr. Jan Duffy.',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Home Valuation', path },
    ],
  })

  const howToSchema = buildHowToSchema({
    path,
    name: 'Silverstone Ranch Home Valuation Process',
    description:
      'Understand the steps Dr. Jan Duffy takes to deliver a customized Silverstone Ranch home valuation and selling strategy.',
    steps: [
      {
        title: 'Submit Your Property Details',
        detail:
          'Provide address, property highlights, and timeline so the concierge team can start compiling market data.',
      },
      {
        title: 'Consultation & Data Review',
        detail:
          'Discuss upgrades, comparables, and seller goals while Dr. Duffy reviews neighborhood analytics and buyer demand.',
      },
      {
        title: 'Receive Pricing Roadmap',
        detail:
          'Get a tailored valuation report with recommended list price, staging suggestions, and launch timeline.',
      },
    ],
  })

  const valuationServiceSchema = buildServiceSchema({
    name: 'Silverstone Ranch Pricing & Valuation Strategy',
    description:
      'Comprehensive valuation roadmap with neighborhood analytics, upgrade review, and launch timeline tailored to Silverstone Ranch sellers.',
    serviceType: ['HomeValuationService'],
    actions: [
      buildAction({
        type: 'ReserveAction',
        name: 'Request Valuation',
        target: `${CONTACT_INFO.website.base}${path}`,
      }),
    ],
  })

  const faqSchema = buildFaqSchema(path, faqs, ['.speakable-answer'])

  const schemaData = [pageSchema, valuationServiceSchema, howToSchema, faqSchema].filter(Boolean)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-20 px-4 sm:px-6 lg:px-8">
      <SeoJsonLd id="home-valuation" data={schemaData as Record<string, unknown>[]} />
      <HomeValuationPageClient />
      <div className="mx-auto max-w-3xl px-4">
        <FaqSection faqs={faqs} heading="Silverstone Ranch Valuation FAQs" />
      </div>
    </div>
  )
}
