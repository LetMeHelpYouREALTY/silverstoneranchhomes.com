import type { Metadata } from 'next'
import Link from 'next/link'
import { CONTACT_INFO } from '@/lib/contact-info'
import { buildPageTitle } from '@/lib/metadata'
import { SeoJsonLd } from '@/components/SeoJsonLd'
import { buildWebPageSchema } from '@/lib/seo'

const mapsApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY

export const metadata: Metadata = {
  title: 'Interactive Map | Neighborhood Orientation',
  description:
    'Explore Silverstone Ranch through an interactive map highlighting guard gates, amenities, schools, and surrounding conveniences.',
  alternates: {
    canonical: '/map',
  },
  openGraph: {
    title: buildPageTitle('Interactive Map | Neighborhood Orientation'),
    description:
      'Visualize Silverstone Ranch guard gates, parks, schools, and nearby services via an interactive map curated by Dr. Jan Duffy.',
    url: `${CONTACT_INFO.website.base}/map`,
    type: 'website',
  },
}

export default function MapPage() {
  const path = '/map'
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-20 px-4 sm:px-6 lg:px-8">
      <SeoJsonLd id="map" data={pageSchema} />
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Silverstone Ranch Location & Map
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover the prime Centennial Hills location of Silverstone Ranch and the lifestyle conveniences just
            minutes away.
          </p>
        </div>

        {/* Map Section */}
        <div className="bg-white rounded-lg shadow-xl p-4 md:p-8 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Interactive Map</h2>
          <div className="bg-gray-100 rounded-lg overflow-hidden h-96 mb-6">
            <iframe
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src={mapsApiKey 
                ? `https://www.google.com/maps/embed/v1/place?key=${mapsApiKey}&q=Silverstone+Ranch,+Las+Vegas,+NV+89131`
                : 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3218.070049335604!2d-115.294!3d36.286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c8d3f8b77f1b0d%3A0x3af5d52cb7b4dc65!2sSilverstone%20Ranch!5e0!3m2!1sen!2sus!4v1700000000000'
              }
            />
          </div>
          <div className="text-center">
            <a
              href="https://www.google.com/maps/place/Silverstone+Ranch,+Las+Vegas,+NV+89131"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 font-semibold"
            >
              Open in Google Maps
            </a>
          </div>
        </div>

        {/* Location Details */}
        <div className="bg-white rounded-lg shadow-xl p-8 md:p-12 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Discover Silverstone Ranch Living in Centennial Hills, Nevada
          </h2>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-6 text-lg">
              Nestled in the heart of Northwest Las Vegas, Silverstone Ranch offers a prestigious gated oasis where
              modern elegance blends seamlessly with desert charm. Residents enjoy protected Spring Mountain views,
              Mediterranean-inspired architecture, and a community crafted with sophistication and convenience in mind.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6 text-lg">
              This guard-gated enclave isn&apos;t just a place to live; it&apos;s a lifestyle upgrade. Located minutes from
              designer shopping at Centennial Center, top-rated CCSD schools, and the sprawling 680-acre Floyd Lamb
              Park, every detail is designed to elevate daily living. The nearby 215 Beltway places the Strip within
              a 30-minute drive, while Centennial Hills Hospital delivers world-class healthcare right in the
              neighborhood.
            </p>

            <p className="text-gray-700 leading-relaxed text-lg">
              Beyond its prime location, this luxury Las Vegas community boasts immaculately manicured landscapes, 
              resort-style amenities, and Mediterranean-inspired architecture that radiates elegance. Whether 
              you&apos;re lounging poolside, exploring nearby nature trails, or enjoying the upscale charm of the 
              neighborhood, you&apos;ll quickly see why Centennial Hills ranks among Las Vegas&apos; fastest-growing 
              luxury communities, with property values appreciating 15% annually.
            </p>
          </div>
        </div>

        {/* Nearby Points of Interest */}
        <div className="bg-white rounded-lg shadow-xl p-8 md:p-12 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Nearby Points of Interest</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 bg-gray-50 rounded-lg">
              <div className="text-3xl mb-3">🛍️</div>
              <h3 className="font-semibold text-gray-900 mb-2">Centennial Center</h3>
              <p className="text-sm text-gray-600">Designer shopping - 10 minutes away</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <div className="text-3xl mb-3">🏫</div>
              <h3 className="font-semibold text-gray-900 mb-2">Top-Rated Schools</h3>
              <p className="text-sm text-gray-600">CCSD schools nearby</p>
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
              <p className="text-sm text-gray-600">World-class healthcare nearby</p>
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
      </div>
    </div>
  )
}

