import Link from 'next/link'
import type { Metadata } from 'next'
import { CONTACT_INFO } from '@/lib/contact-info'
import { buildHyperlocalTitle, buildPageTitle } from '@/lib/metadata'
import { SeoJsonLd } from '@/components/SeoJsonLd'
import { FaqSection } from '@/components/FaqSection'
import { VIDEO_FAQS } from '@/lib/hyperlocal-faqs'
import { buildFaqSchema, buildVideoObjectSchema, buildWebPageSchema } from '@/lib/seo'

const path = '/video'
const faqs = VIDEO_FAQS.map((f) => ({ question: f.question, answer: f.answer }))
const thumbnailUrl = `${CONTACT_INFO.website.base}/images/property/exterior-front-elevation.jpg`

export const metadata: Metadata = {
  title: buildHyperlocalTitle('Silverstone Ranch Video Tours'),
  description:
    `Watch Silverstone Ranch (89131) property tours, community highlights, and virtual walk-throughs curated by ${CONTACT_INFO.agentName} for Centennial Hills buyers.`,
  alternates: {
    canonical: '/video',
  },
  openGraph: {
    title: buildPageTitle('Video Tour Library'),
    description:
      'Stream Silverstone Ranch property walkthroughs, amenity spotlights, and relocation videos produced by Dr. Jan Duffy.',
    url: `${CONTACT_INFO.website.base}/video`,
    type: 'website',
  },
}

export default function VideoPage() {
  const pageSchema = buildWebPageSchema({
    path,
    name: 'Silverstone Ranch Video Library',
    description:
      'Collection of Silverstone Ranch video tours, amenity spotlights, and relocation content for luxury buyers.',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Video', path },
    ],
  })

  const videoSchema = buildVideoObjectSchema({
    path,
    name: 'Silverstone Ranch Virtual Community Tour',
    description:
      'Virtual tour preview of Silverstone Ranch homes, amenities, and Centennial Hills lifestyle—schedule a live session with Dr. Jan Duffy.',
    thumbnailUrl,
    uploadDate: '2026-06-01',
  })

  const faqSchema = buildFaqSchema(path, faqs, ['.speakable-answer'])

  const schemaData = [pageSchema, videoSchema, faqSchema].filter(Boolean)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-20 px-4 sm:px-6 lg:px-8">
      <SeoJsonLd id="video" data={schemaData as Record<string, unknown>[]} />
      <div className="mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Silverstone Ranch Virtual Tour & Video
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experience Silverstone Ranch through immersive video tours showcasing featured residences, community
            amenities, and lifestyle moments from the comfort of your home.
          </p>
        </div>

        {/* Video Section */}
        <div className="bg-white rounded-lg shadow-xl p-8 md:p-12 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Property Virtual Tour</h2>
          <div className="bg-gray-100 rounded-lg overflow-hidden aspect-video mb-8 flex items-center justify-center">
            <div className="text-center p-8">
              <svg
                className="mx-auto h-16 w-16 text-gray-400 mb-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p className="text-gray-600 mb-4">
                Virtual tour video will be embedded here
              </p>
              <p className="text-sm text-gray-500">
                Contact us to schedule a live virtual tour
              </p>
            </div>
          </div>

          <div className="text-center">
            <p className="text-gray-700 mb-6 text-lg">
              Preview Silverstone Ranch at your own pace—tour open-concept interiors, outdoor living spaces, and gated
              amenities through curated video walk-throughs. When you&apos;re ready, schedule a live virtual session with
              Dr. Jan Duffy for deeper insights.
            </p>
            <Link
              href="/book-tour"
              className="inline-block px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 font-semibold"
            >
              Schedule a Live Virtual Tour
            </Link>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="bg-white rounded-lg shadow-xl p-8 md:p-12 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
            Why Take a Virtual Tour?
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-4xl mb-4">🏠</div>
              <h3 className="font-semibold text-gray-900 mb-2">Explore at Your Pace</h3>
              <p className="text-sm text-gray-600">
                Take your time viewing each room and detail without feeling rushed
              </p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="font-semibold text-gray-900 mb-2">View from Anywhere</h3>
              <p className="text-sm text-gray-600">
                Experience the property from the comfort of your home, no matter where you are
              </p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-4xl mb-4">⏰</div>
              <h3 className="font-semibold text-gray-900 mb-2">Available 24/7</h3>
              <p className="text-sm text-gray-600">
                Access the virtual tour anytime, day or night, at your convenience
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg shadow-xl p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready for an In-Person Tour?</h2>
          <p className="text-lg mb-8 text-blue-100 max-w-2xl mx-auto">
            After exploring the virtual content, schedule a private in-person tour to experience Silverstone Ranch
            neighborhoods, parks, and residences firsthand with Dr. Jan Duffy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book-tour"
              className="px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 font-semibold"
            >
              Book an In-Person Tour
            </Link>
            <Link
              href="/request-info"
              className="px-8 py-3 bg-blue-500 text-white border-2 border-white rounded-lg hover:bg-blue-400 transition-all font-semibold"
            >
              Request More Information
            </Link>
          </div>
        </div>

        <FaqSection faqs={faqs} heading="Silverstone Ranch Virtual Tour FAQs" className="max-w-4xl mx-auto" />
      </div>
    </div>
  )
}

