import type { Metadata } from 'next'
import { CONTACT_INFO } from '@/lib/contact-info'
import { buildPageTitle } from '@/lib/metadata'
import { SeoJsonLd } from '@/components/SeoJsonLd'
import { buildAction, buildHowToSchema, buildServiceSchema, buildWebPageSchema } from '@/lib/seo'
import HomeValuationPageClient from './HomeValuationPageClient'

export const metadata: Metadata = {
  title: 'Home Valuation | Instant Market Analysis',
  description:
    'Request a Silverstone Ranch home valuation and receive a data-driven pricing roadmap from Dr. Jan Duffy REALTOR®. Insights tailored to your property.',
  alternates: {
    canonical: '/home-valuation',
  },
  openGraph: {
    title: buildPageTitle('Home Valuation | Instant Market Analysis'),
    description:
      'Unlock your Silverstone Ranch home value with a custom market analysis, pricing strategy, and selling roadmap from Dr. Jan Duffy.',
    url: `${CONTACT_INFO.website.base}/home-valuation`,
    type: 'website',
  },
}

export default function HomeValuationPage() {
  const path = '/home-valuation'
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
        target: `${CONTACT_INFO.website.base}/home-valuation`,
      }),
    ],
  })

  const schemaData = [pageSchema, valuationServiceSchema, howToSchema].filter(Boolean)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-20 px-4 sm:px-6 lg:px-8">
      <SeoJsonLd id="home-valuation" data={schemaData as Record<string, unknown>[]} />
      <HomeValuationPageClient />
    </div>
  )
}

