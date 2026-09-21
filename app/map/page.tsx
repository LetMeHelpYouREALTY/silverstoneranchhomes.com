import type { Metadata } from 'next'
import Link from 'next/link'
import { CONTACT_INFO } from '@/lib/contact-info'
import { buildHyperlocalTitle, buildPageTitle, withShareImage } from '@/lib/metadata'
import { SeoJsonLd } from '@/components/SeoJsonLd'
import { FaqSection } from '@/components/FaqSection'
import { MAP_FAQS } from '@/lib/hyperlocal-faqs'
import { buildFaqSchema, buildMapPlaceSchema, buildWebPageSchema } from '@/lib/seo'
import { GoogleMapEmbed } from '@/components/GoogleMapEmbed'
import { GbpCtaRow } from '@/components/GbpCtaRow'
import { SectionHeading } from '@/components/SectionHeading'
import { ASSIGNED_SCHOOLS } from '@/lib/market-data'

const path = '/map'
const faqs = MAP_FAQS.map((f) => ({ question: f.question, answer: f.answer }))

export const metadata: Metadata = {
  title: buildHyperlocalTitle('Silverstone Ranch Map & Location'),
  description:
    `Interactive map of Silverstone Ranch (89131) in Centennial Hills—guard gates, schools, parks, and Northwest Las Vegas conveniences. Directions from ${CONTACT_INFO.agentName}.`,
  alternates: {
    canonical: '/map',
  },
  openGraph: withShareImage(
    {
    title: buildPageTitle('Interactive Map | Neighborhood Orientation'),
    description:
      'Visualize Silverstone Ranch guard gates, parks, schools, and nearby services via an interactive map curated by Dr. Jan Duffy.',
    url: `${CONTACT_INFO.website.base}/map`,
    type: 'website',
  },
    'Silverstone Ranch location and map',
  ),
}

export default function MapPage() {
  const pageSchema = buildWebPageSchema({
    path,
    name: 'Silverstone Ranch Map',
    description:
      'Interactive Silverstone Ranch map showing guard gates, amenity hubs, and surrounding conveniences for relocation planning.',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Map', path },
    ],
  })

  const mapPlaceSchema = buildMapPlaceSchema({
    path,
    name: 'Silverstone Ranch, Las Vegas NV 89131',
    description:
      'Guard-gated master-planned community in Centennial Hills, Northwest Las Vegas, with geo coordinates for relocation planning.',
  })

  const faqSchema = buildFaqSchema(path, faqs, ['.speakable-answer'])

  const schemaData = [pageSchema, mapPlaceSchema, faqSchema].filter(Boolean)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-20 px-4 sm:px-6 lg:px-8">
      <SeoJsonLd id="map" data={schemaData as Record<string, unknown>[]} />
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Silverstone Ranch Location & Map
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover the prime Centennial Hills location of Silverstone Ranch and the lifestyle conveniences just
            minutes away.
          </p>
          <GbpCtaRow className="mt-6 flex justify-center" />
        </div>

        {/* Map Section */}
        <div className="bg-white rounded-lg shadow-xl p-4 md:p-8 mb-12">
          <SectionHeading>Interactive Map</SectionHeading>
          <GoogleMapEmbed
            query="Silverstone Ranch, Las Vegas, NV 89131"
            title="Silverstone Ranch community map"
            className="mb-8"
          />
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Office pin</h3>
          <GoogleMapEmbed
            query={CONTACT_INFO.address.display}
            title={`${CONTACT_INFO.businessName} office location`}
            className="mb-6"
          />
          <div className="text-center">
            <a
              href={CONTACT_INFO.gbp.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 font-semibold"
            >
              Open directions in Google Maps
            </a>
          </div>
        </div>

        {/* Location Details */}
        <div className="bg-white rounded-lg shadow-xl p-8 md:p-12 mb-12">
          <SectionHeading>Discover Silverstone Ranch Living in Centennial Hills, Nevada</SectionHeading>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-6 text-lg">
              Nestled in the heart of Northwest Las Vegas, Silverstone Ranch offers a prestigious gated oasis where
              modern elegance blends seamlessly with desert charm. Residents enjoy protected Spring Mountain views,
              Mediterranean-inspired architecture, and a community crafted with sophistication and convenience in mind.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6 text-lg">
              This guard-gated enclave isn&apos;t just a place to live; it&apos;s a lifestyle upgrade. Located minutes from
              shopping at Centennial Center, CCSD campuses including {ASSIGNED_SCHOOLS.elementary}, and the sprawling 680-acre Floyd Lamb
              Park, every detail is designed to elevate daily living. The nearby 215 Beltway places the Strip within
              a 30-minute drive, while Centennial Hills Hospital delivers healthcare right in the
              neighborhood.
            </p>

            <p className="text-gray-700 leading-relaxed text-lg">
              Beyond its prime location, this luxury Las Vegas community boasts immaculately manicured landscapes, 
              resort-style amenities, and Mediterranean-inspired architecture that radiates elegance. Whether 
              you&apos;re lounging poolside, exploring nearby nature trails, or enjoying the upscale charm of the 
              neighborhood,               you&apos;ll quickly see why Centennial Hills remains one of Las Vegas&apos; actively growing
              luxury communities. Confirm current pricing with {CONTACT_INFO.agentName} before you offer.
            </p>
          </div>
        </div>

        {/* Nearby Points of Interest */}
        <div className="bg-white rounded-lg shadow-xl p-8 md:p-12 mb-12">
          <SectionHeading>Nearby Points of Interest</SectionHeading>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 bg-gray-50 rounded-lg">
              <div className="text-3xl mb-3">🛍️</div>
              <h3 className="font-semibold text-gray-900 mb-2">Centennial Center</h3>
              <p className="text-sm text-gray-600">Designer shopping - 10 minutes away</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <div className="text-3xl mb-3">🏫</div>
              <h3 className="font-semibold text-gray-900 mb-2">{ASSIGNED_SCHOOLS.elementary}</h3>
              <p className="text-sm text-gray-600">
                Also nearby: {ASSIGNED_SCHOOLS.middle} and {ASSIGNED_SCHOOLS.high}. Verify zoning at ccsd.net/zoning.
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <div className="text-3xl mb-3">🌳</div>
              <h3 className="font-semibold text-gray-900 mb-2">Floyd Lamb Park</h3>
              <p className="text-sm text-gray-600">680-acre park - 10 minutes</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <div className="text-3xl mb-3">🛣️</div>
              <h3 className="font-semibold text-gray-900 mb-2">215 Beltway</h3>
              <p className="text-sm text-gray-600">Easy access to the Strip</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <div className="text-3xl mb-3">🏥</div>
              <h3 className="font-semibold text-gray-900 mb-2">Centennial Hills Hospital</h3>
              <p className="text-sm text-gray-600">Healthcare nearby</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <div className="text-3xl mb-3">⛰️</div>
              <h3 className="font-semibold text-gray-900 mb-2">Spring Mountains</h3>
              <p className="text-sm text-gray-600">Protected mountain views</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg shadow-xl p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Explore Silverstone Ranch?</h2>
          <p className="text-lg mb-8 text-blue-100 max-w-2xl mx-auto">
            Schedule a private tour to experience the community in person and discover which Silverstone Ranch village
            aligns with your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book-tour"
              className="px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 font-semibold"
            >
              Schedule a Tour
            </Link>
            <Link
              href="/request-info"
              className="px-8 py-3 bg-blue-500 text-white border-2 border-white rounded-lg hover:bg-blue-400 transition-all font-semibold"
            >
              Request Information
            </Link>
          </div>
        </div>

        <div className="mx-auto max-w-3xl">
          <FaqSection faqs={faqs} heading="Silverstone Ranch Location FAQs" />
        </div>
      </div>
    </div>
  )
}

