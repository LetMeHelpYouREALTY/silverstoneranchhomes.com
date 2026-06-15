import Image from 'next/image'
import Link from 'next/link'

export default function HomesForSale() {
  const snapshot = [
    {
      label: 'Median Price',
      value: '$685K',
      caption: 'Jun 2026 closings',
    },
    {
      label: 'Price / Sq Ft',
      value: '$284',
      caption: 'Up 3.8% YoY',
    },
    {
      label: 'Avg. DOM',
      value: '13 Days',
      caption: 'Faster by 4 days',
    },
    {
      label: 'Active Listings',
      value: '18',
      caption: 'Guard-gated & gated',
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 scroll-mt-20">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
          Silverstone Ranch Luxury Highlights
        </h2>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-12">
          {snapshot.map((item) => (
            <div key={item.label} className="rounded-lg border border-blue-100 bg-white p-6 shadow-sm">
              <p className="text-xs uppercase tracking-wide text-blue-600 font-semibold mb-1">{item.label}</p>
              <p className="text-2xl font-bold text-blue-900 mb-1">{item.value}</p>
              <p className="text-xs text-blue-700">{item.caption}</p>
            </div>
          ))}
        </div>
        <p className="mb-8 text-xs text-gray-500">
          School assignments referenced on this page reflect June 2026 CCSD zoning for O&apos;Roarke ES, Cadwallader MS, and Arbor View HS.
          Verify boundaries at
          <a
            href="https://ccsd.net/schools/zoning/"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-1 font-semibold text-blue-600 hover:underline"
          >
            ccsd.net/schools/zoning
          </a>
          {' '}before scheduling tours.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Featured Property Card */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="relative h-64 bg-gray-200">
              <Image
                src="/images/property/exterior-front-elevation.jpg"
                alt="Silverstone Ranch luxury home exterior"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                priority={false}
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Featured Luxury Residence
              </h3>
              <p className="text-gray-600 mb-4">Silverstone Ranch · Las Vegas, NV 89131</p>
              <div className="flex items-center justify-between mb-4">
                <span className="text-2xl font-bold text-blue-600">
                  Private Consultation for Pricing
                </span>
              </div>
              <div className="flex flex-wrap gap-2 mb-4 text-sm text-gray-600">
                <span>3-4 Beds</span>
                <span>•</span>
                <span>2.5-3.5 Baths</span>
                <span>•</span>
                <span>2,000+ sq ft</span>
              </div>
            <p className="text-gray-600 mb-4">
              Located within Silverstone Ranch&apos;s guard-gated footprint with access to top-rated schools, parks, and
              Centennial Hills conveniences.
            </p>
            <div className="mb-4 rounded-lg border border-amber-200 bg-amber-50 p-3 text-xs text-amber-900">
              ⚠️ Homes that once overlooked manicured fairways now face dormant land. The golf course has remained
              closed since 2015 and, despite the May 2025 auction, future use is still undetermined. Budget for view and
              landscaping enhancements accordingly.
            </div>
              <Link
                href="/#photos"
                className="block w-full text-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Explore Community Gallery
              </Link>
            </div>
          </div>

          {/* Placeholder for additional listings */}
          <div className="bg-white rounded-lg shadow-md p-8 text-center border-2 border-dashed border-gray-300">
            <p className="text-gray-600 mb-4">
              Custom-curated listings tailored to Silverstone Ranch buyers
            </p>
            <p className="text-sm text-gray-500">
              Contact Dr. Jan Duffy for additional residences across the community
            </p>
            <Link
              href="/#agent"
              className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Connect with the Agent
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

