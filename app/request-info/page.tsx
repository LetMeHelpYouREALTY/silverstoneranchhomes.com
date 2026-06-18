import type { Metadata } from 'next'
import { CONTACT_INFO } from '@/lib/contact-info'
import { buildHyperlocalTitle, buildPageTitle } from '@/lib/metadata'
import { SeoJsonLd } from '@/components/SeoJsonLd'
import { FaqSection } from '@/components/FaqSection'
import { REQUEST_INFO_FAQS } from '@/lib/hyperlocal-faqs'
import { buildAction, buildFaqSchema, buildHowToSchema, buildServiceSchema, buildWebPageSchema } from '@/lib/seo'
import RequestInfoPageClient from './RequestInfoPageClient'

const path = '/request-info'
const faqs = REQUEST_INFO_FAQS.map((f) => ({ question: f.question, answer: f.answer }))

export const metadata: Metadata = {
  title: buildHyperlocalTitle('Request Silverstone Ranch Market Info'),
  description:
    `Request Silverstone Ranch (89131) relocation kits, HOA breakdowns, listing alerts, and market intel from ${CONTACT_INFO.agentName} in Centennial Hills.`,
  alternates: {
    canonical: path,
  },
  openGraph: {
    title: buildPageTitle('Request Silverstone Ranch Info | 89131'),
    description:
      'Receive Silverstone Ranch relocation kits, listing previews, and strategy sessions curated by Dr. Jan Duffy REALTOR®.',
    url: `${CONTACT_INFO.website.base}${path}`,
    type: 'website',
  },
}

export default function RequestInfoPage() {
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
        target: `${CONTACT_INFO.website.base}${path}`,
      }),
    ],
  })

  const faqSchema = buildFaqSchema(path, faqs, ['.speakable-answer'])

  const schemaData = [pageSchema, conciergeInformationService, howToSchema, faqSchema].filter(Boolean)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-20 px-4 sm:px-6 lg:px-8">
      <SeoJsonLd id="request-info" data={schemaData as Record<string, unknown>[]} />
      <RequestInfoPageClient />
      <div className="mx-auto max-w-3xl px-4">
        <FaqSection faqs={faqs} heading="Silverstone Ranch Info Request FAQs" />
      </div>
    </div>
  )
}
