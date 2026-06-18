import type { Metadata } from 'next'
import { CONTACT_INFO } from '@/lib/contact-info'
import { buildHyperlocalTitle, buildPageTitle } from '@/lib/metadata'
import { SeoJsonLd } from '@/components/SeoJsonLd'
import { FaqSection } from '@/components/FaqSection'
import { BOOK_TOUR_FAQS } from '@/lib/hyperlocal-faqs'
import { buildAction, buildFaqSchema, buildHowToSchema, buildServiceSchema, buildWebPageSchema } from '@/lib/seo'
import BookTourPageClient from './BookTourPageClient'

const path = '/book-tour'
const faqs = BOOK_TOUR_FAQS.map((f) => ({ question: f.question, answer: f.answer }))

export const metadata: Metadata = {
  title: buildHyperlocalTitle('Book a Silverstone Ranch Home Tour'),
  description:
    `Schedule a private or virtual Silverstone Ranch (89131) property tour with ${CONTACT_INFO.agentName}. Guard-gate access, curated listings, and concierge coordination in Centennial Hills.`,
  alternates: {
    canonical: path,
  },
  openGraph: {
    title: buildPageTitle('Book a Silverstone Ranch Tour | 89131'),
    description:
      'Arrange in-person or virtual Silverstone Ranch tours, guard gate access, and custom itineraries with Dr. Jan Duffy.',
    url: `${CONTACT_INFO.website.base}${path}`,
    type: 'website',
  },
}

const tourSteps = [
  {
    title: 'Share Your Schedule',
    detail: 'Tell us your preferred dates, time windows, and whether you are visiting in person or virtually.',
  },
  {
    title: 'Curate Listings & Preview Routes',
    detail: 'Receive a tailored line-up of Silverstone Ranch homes plus comparable neighborhoods based on your goals.',
  },
  {
    title: 'Tour with Concierge Support',
    detail: 'Arrive to pre-confirmed guard gate access, printed disclosures, and vendor introductions after each showing.',
  },
]

export default function BookTourPage() {
  const pageSchema = buildWebPageSchema({
    path,
    name: 'Book a Silverstone Ranch Tour',
    description:
      'Schedule private or virtual tours of Silverstone Ranch listings with concierge coordination from Dr. Jan Duffy.',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Book a Tour', path },
    ],
  })

  const howToSchema = buildHowToSchema({
    path,
    name: 'Silverstone Ranch Tour Scheduling',
    description: 'Three-step process to schedule a Silverstone Ranch tour with concierge support.',
    steps: tourSteps,
  })

  const tourServiceSchema = buildServiceSchema({
    name: 'Silverstone Ranch Private Tour Coordination',
    description:
      'Concierge tour planning with guard gate access, itinerary design, and post-tour vendor introductions for Silverstone Ranch listings.',
    serviceType: ['TourBookingService'],
    actions: [
      buildAction({
        type: 'ScheduleAction',
        name: 'Book a Tour',
        target: `${CONTACT_INFO.website.base}${path}`,
      }),
    ],
  })

  const faqSchema = buildFaqSchema(path, faqs, ['.speakable-answer'])

  const schemaData = [pageSchema, tourServiceSchema, howToSchema, faqSchema].filter(Boolean)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-20 px-4 sm:px-6 lg:px-8">
      <SeoJsonLd id="book-tour" data={schemaData as Record<string, unknown>[]} />
      <BookTourPageClient />
      <div className="mx-auto max-w-3xl px-4">
        <FaqSection faqs={faqs} heading="Silverstone Ranch Tour FAQs" />
      </div>
    </div>
  )
}
