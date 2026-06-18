import type { Metadata } from 'next'
import { CONTACT_INFO } from '@/lib/contact-info'
import { buildHyperlocalTitle, buildPageTitle } from '@/lib/metadata'
import { SeoJsonLd } from '@/components/SeoJsonLd'
import { buildAction, buildFaqSchema, buildLocalBusinessSchema, buildServiceSchema, buildWebPageSchema } from '@/lib/seo'
import { CONTACT_FAQS } from '@/lib/hyperlocal-faqs'
import ContactPageClient from './ContactPageClient'

export const metadata: Metadata = {
  title: buildHyperlocalTitle('Contact Silverstone Ranch REALTOR®'),
  description:
    `Contact ${CONTACT_INFO.agentName} for Silverstone Ranch (89131) tours, valuations, and HOA guidance. Call ${CONTACT_INFO.phone.display}, email, or chat with ${CONTACT_INFO.businessName}.`,
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: buildPageTitle('Contact'),
    description:
      `Reach ${CONTACT_INFO.businessName} for property tours, valuations, and HOA guidance. Connect by phone, email, or chat.`,
    url: `${CONTACT_INFO.website.base}/contact`,
    type: 'website',
  },
}

export default function ContactPage() {
  const path = '/contact'
  const pageSchema = buildWebPageSchema({
    path,
    name: `Contact ${CONTACT_INFO.businessName}`,
    description:
      `Connect with ${CONTACT_INFO.businessName} by phone, email, or chat for Las Vegas real estate support.`,
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Contact', path },
    ],
  })

  const localBusinessSchema = buildLocalBusinessSchema()

  const conciergeServiceSchema = buildServiceSchema({
    name: 'Silverstone Ranch Concierge Desk',
    description:
      'Concierge support for property tours, HOA documents, relocation resources, and valuation consults within Silverstone Ranch.',
    serviceType: ['CustomerService', 'RealEstateConsultation'],
    actions: [
      buildAction({
        type: 'ContactAction',
        name: `Call ${CONTACT_INFO.businessName}`,
        target: `tel:${CONTACT_INFO.phone.tel}`,
      }),
      buildAction({
        type: 'ContactAction',
        name: 'Email Dr. Jan Duffy',
        target: `mailto:${CONTACT_INFO.email}`,
      }),
      buildAction({
        type: 'ScheduleAction',
        name: 'Chat with Concierge',
        target: `${CONTACT_INFO.website.base}${CONTACT_INFO.chat.url}`,
      }),
    ],
  })

  const faqSchema = buildFaqSchema(
    path,
    CONTACT_FAQS.map((f) => ({ question: f.question, answer: f.answer })),
    ['.speakable-answer'],
  )

  const schemaData = [pageSchema, localBusinessSchema, conciergeServiceSchema, faqSchema].filter(Boolean)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-20 px-4 sm:px-6 lg:px-8">
      <SeoJsonLd id="contact-page" data={schemaData as Record<string, unknown>[]} />
      <ContactPageClient faqs={CONTACT_FAQS.map((f) => ({ question: f.question, answer: f.answer }))} />
    </div>
  )
}

