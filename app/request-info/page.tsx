import type { Metadata } from 'next'
import { CONTACT_INFO } from '@/lib/contact-info'
import { buildPageTitle } from '@/lib/metadata'
import { SeoJsonLd } from '@/components/SeoJsonLd'
import { buildAction, buildHowToSchema, buildServiceSchema, buildWebPageSchema } from '@/lib/seo'
import RequestInfoPageClient from './RequestInfoPageClient'

export const metadata: Metadata = {
  title: 'Request Information | Real Estate Concierge',
  description:
    'Request detailed Silverstone Ranch market intelligence, relocation guides, and listing alerts from Dr. Jan Duffy and the concierge team.',
  alternates: {
    canonical: '/request-info',
  },
  openGraph: {
    title: buildPageTitle('Request Information | Real Estate Concierge'),
    description:
      'Receive Silverstone Ranch relocation kits, listing previews, and strategy sessions curated by Dr. Jan Duffy REALTOR®.',
    url: `${CONTACT_INFO.website.base}/request-info`,
    type: 'website',
  },
}

export default function RequestInfoPage() {
  const path = '/request-info'
  const pageSchema = buildWebPageSchema({
    path,
    name: 'Request Silverstone Ranch Information',
    description:
      'Use the concierge request form to receive Silverstone Ranch market intel, relocation resources, and listing previews from Dr. Jan Duffy.',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Request Info', path },
    ],
  })

  const howToSchema = buildHowToSchema({
    path,
    name: 'How to Request Silverstone Ranch Information',
    description:
      'Submit the concierge request form, schedule a follow-up call, and receive curated Silverstone Ranch reports tailored to your goals.',
    steps: [
      {
        title: 'Share Your Details',
        detail: 'Complete the request form with your contact information, preferred timeline, and questions.',
      },
      {
        title: 'Schedule a Strategy Session',
        detail:
          'Choose a call or video meeting to review goals, relocation timelines, or selling objectives with Dr. Jan Duffy.',
      },
      {
        title: 'Receive Curated Market Intelligence',
        detail:
          'Get a customized Silverstone Ranch relocation kit, listing previews, and next-step recommendations delivered to your inbox.',
      },
    ],
  })

  const conciergeInformationService = buildServiceSchema({
    name: 'Silverstone Ranch Information Concierge',
    description:
      'Personalized Silverstone Ranch relocation kits, HOA fee breakdowns, and market analytics delivered by Dr. Jan Duffy.',
    serviceType: ['InformationService', 'RealEstateConsultation'],
    actions: [
      buildAction({
        type: 'ContactAction',
        name: 'Submit Concierge Request',
        target: `${CONTACT_INFO.website.base}/request-info`,
      }),
    ],
  })

  const schemaData = [pageSchema, conciergeInformationService, howToSchema].filter(Boolean)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-20 px-4 sm:px-6 lg:px-8">
      <SeoJsonLd id="request-info" data={schemaData as Record<string, unknown>[]} />
      <RequestInfoPageClient />
    </div>
  )
}

