import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import { CONTACT_INFO } from '@/lib/contact-info'
import { buildPageTitle } from '@/lib/metadata'
import { SeoJsonLd } from '@/components/SeoJsonLd'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { buildFaqSchema, buildRealEstateListingItemList, buildServiceSchema, buildWebPageSchema, buildAction } from '@/lib/seo'
import { HOMES_FOR_SALE_FAQS } from '@/lib/hyperlocal-faqs'
import { MARKET_SNAPSHOT } from '@/lib/market-data'

export const metadata: Metadata = {
  title: 'Silverstone Ranch Homes for Sale | 89131 Listings',
  description:
    `Browse Silverstone Ranch homes for sale in Las Vegas 89131. ${MARKET_SNAPSHOT.reportMonth} market stats, guard-gated enclaves, and buyer concierge from ${CONTACT_INFO.agentName} REALTOR®.`,
  alternates: {
    canonical: '/homes-for-sale',
  },
  openGraph: {
    title: buildPageTitle('Homes for Sale | Curated Listings & Buyer Guide'),
    description:
      'Explore guard-gated Silverstone Ranch listings, buyer resources, and concierge support for relocation and luxury purchases.',
    url: `${CONTACT_INFO.website.base}/homes-for-sale`,
    type: 'website',
  },
}

const marketSnapshot = [
  {
    label: 'Median Sale Price',
    value: MARKET_SNAPSHOT.medianPrice,
    caption: MARKET_SNAPSHOT.medianPriceYoY + ' year-over-year',
  },
  {
    label: 'Price Per Sq. Ft.',
    value: MARKET_SNAPSHOT.pricePerSqFt,
    caption: 'Single-story homes command premium in 89131',
  },
  {
    label: 'Avg. Days on Market',
    value: MARKET_SNAPSHOT.daysOnMarket,
    caption: MARKET_SNAPSHOT.daysOnMarketChange,
  },
  {
    label: 'Active Listings',
    value: MARKET_SNAPSHOT.activeListings,
    caption: MARKET_SNAPSHOT.activeListingsChange,
  },
]

/** Representative Silverstone Ranch listing placeholders for ItemList schema until live MLS feed. */
const listingSchemaEntries = [
  {
    name: 'Silverstone Ranch Homes for Sale — The Palms',
    url: `${CONTACT_INFO.website.base}/neighborhoods/the-palms`,
    description: 'Guard-gated estate homes in The Palms enclave, Silverstone Ranch 89131.',
  },
  {
    name: 'Silverstone Ranch Homes for Sale — Pinehurst',
    url: `${CONTACT_INFO.website.base}/neighborhoods/pinehurst`,
    description: 'Gated townhome villas in Pinehurst, Silverstone Ranch 89131.',
  },
  {
    name: 'Silverstone Ranch Homes for Sale — Silverlake',
    url: `${CONTACT_INFO.website.base}/neighborhoods/silverlake`,
    description: 'Guard-gated single-family homes in Silverlake, Silverstone Ranch 89131.',
  },
]

export default function HomesForSalePage() {
  const path = '/homes-for-sale'
  const pageSchema = buildWebPageSchema({
    path,
    name: 'Homes for Sale | Silverstone Ranch',
    description:
      'Curated Silverstone Ranch listings with market stats, community insights, and concierge buyer support from Dr. Jan Duffy.',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Homes for Sale', path },
    ],
  })

  const faqSchema = buildFaqSchema(path, HOMES_FOR_SALE_FAQS.map((f) => ({ question: f.question, answer: f.answer })))

  const buyerServiceSchema = buildServiceSchema({
    name: 'Silverstone Ranch Buyer Representation',
    description:
      'Concierge buyer representation for guard-gated and non-gated Silverstone Ranch homes in ZIP 89131—including tours, offer strategy, and HOA disclosure review.',
    serviceType: ['BuyerRepresentation'],
    actions: [
      buildAction({
        type: 'ScheduleAction',
        name: 'Book a Silverstone Ranch Tour',
        target: `${CONTACT_INFO.website.base}/book-tour`,
      }),
    ],
  })

  const listingItemList = buildRealEstateListingItemList({
    path,
    name: 'Silverstone Ranch Homes for Sale',
    listings: listingSchemaEntries,
  })

  const schemaData = [pageSchema, buyerServiceSchema, faqSchema, listingItemList].filter(
    (s): s is NonNullable<typeof s> => s != null,
  ) as Record<string, unknown>[]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-20 px-4 sm:px-6 lg:px-8">
      <SeoJsonLd id="homes-for-sale" data={schemaData} />
      <div className="mx-auto max-w-7xl">
        <Breadcrumbs
          items={[
            { name: 'Home', path: '/' },
            { name: 'Homes for Sale' },
          ]}
        />
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Homes For Sale in Silverstone Ranch
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover luxury homes in one of Las Vegas&apos; premier communities. 
            Experience the perfect blend of elegance, comfort, and modern living.
          </p>
        </div>

        {/* Market Snapshot & Search Filters */}
        <div className="mb-16 grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 bg-white rounded-lg shadow-lg p-8 border border-blue-100">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">June 2026 Market Snapshot</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {marketSnapshot.map((item) => (
                <div key={item.label} className="rounded-lg border border-blue-100 bg-blue-50 p-4 text-center">
                  <div className="text-sm uppercase tracking-wide text-blue-700 font-semibold mb-1">
                    {item.label}
                  </div>
                  <div className="text-2xl font-bold text-blue-900 mb-1">{item.value}</div>
                  <div className="text-xs text-blue-700">{item.caption}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 border border-blue-100">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Search Filters</h2>
            <p className="text-sm text-gray-600 mb-6">
              Narrow the current Silverstone Ranch inventory by price, size, or days on market. Ask Dr. Duffy for private and coming-soon listings not shown online.
            </p>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="minPrice" className="text-xs font-semibold text-gray-600 uppercase tracking-wide block mb-1">
                    Min Price
                  </label>
                  <input
                    id="minPrice"
                    type="text"
                    placeholder="$550,000"
                    className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                  />
                </div>
                <div>
                  <label htmlFor="maxPrice" className="text-xs font-semibold text-gray-600 uppercase tracking-wide block mb-1">
                    Max Price
                  </label>
                  <input
                    id="maxPrice"
                    type="text"
                    placeholder="$900,000"
                    className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="beds" className="text-xs font-semibold text-gray-600 uppercase tracking-wide block mb-1">
                    Bedrooms
                  </label>
                  <select
                    id="beds"
                    className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                  >
                    <option value="3+">3+</option>
                    <option value="4+">4+</option>
                    <option value="5+">5+</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="baths" className="text-xs font-semibold text-gray-600 uppercase tracking-wide block mb-1">
                    Bathrooms
                  </label>
                  <select
                    id="baths"
                    className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                  >
                    <option value="2+">2+</option>
                    <option value="2.5+">2.5+</option>
                    <option value="3+">3+</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="dom" className="text-xs font-semibold text-gray-600 uppercase tracking-wide block mb-1">
                  Max Days on Market
                </label>
                <input
                  id="dom"
                  type="range"
                  min="0"
                  max="60"
                  defaultValue="21"
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-gray-500">
                  <span>0</span>
                  <span>21</span>
                  <span>60</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <input
                  id="excludeGolf"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <label htmlFor="excludeGolf" className="text-sm text-gray-700">
                  Exclude homes overlooking dormant golf course land
                </label>
              </div>

              <button
                type="button"
                className="w-full rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 transition-all"
              >
                Request Matching Listings
              </button>
            </form>
            <p className="mt-4 text-xs text-gray-500">
              Silverstone Ranch inventory updates hourly. Submit the form and Dr. Duffy will send curated options plus coming-soon homes you won&apos;t find on public portals. School attendance boundaries are set by CCSD—confirm zoning at
              <a
                href="https://ccsd.net/schools/zoning/"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-1 font-semibold text-blue-600 hover:underline"
              >
                ccsd.net/schools/zoning
              </a>
              {' '}before you write an offer.
            </p>
          </div>
        </div>

        {/* Featured Property */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Featured Property
          </h2>
          <div className="bg-white rounded-lg shadow-xl overflow-hidden hover:shadow-2xl transition-shadow">
            <div className="md:flex">
              <div className="md:w-1/2 relative h-64 md:h-auto bg-gray-200">
                <Image
                  src="/images/property/exterior-front-elevation.jpg"
                  alt="Silverstone Ranch luxury residence"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="md:w-1/2 p-8">
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-3">
                    Featured Listing
                  </span>
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">
                    Signature Silverstone Residence
                  </h3>
                  <p className="text-lg text-gray-600 mb-4">
                    Silverstone Ranch · Centennial Hills · Las Vegas, NV 89131
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-6 pb-6 border-b border-gray-200">
                  <div>
                    <div className="text-2xl font-bold text-blue-600 mb-1">3-4</div>
                    <div className="text-sm text-gray-600">Bedrooms</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-blue-600 mb-1">2.5-3.5</div>
                    <div className="text-sm text-gray-600">Bathrooms</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-blue-600 mb-1">2,000+</div>
                    <div className="text-sm text-gray-600">Square Feet</div>
                  </div>
                </div>

                <p className="text-gray-700 mb-6">
                  Stunning Silverstone Ranch residence featuring modern upgrades, spacious indoor-outdoor living,
                  and premium finishes. Enjoy guard-gated privacy, access to community parks, and proximity to top
                  Centennial Hills conveniences.
                </p>
                <div className="mb-6 rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
                  ⚠️ Former golf course frontage: The Silverstone golf course has been closed since 2015. Following the
                  May 2025 auction, no reopening or redevelopment plan has been filed. Views from this portion of the
                  community currently overlook dormant land. Budget for landscape improvements and factor this
                  uncertainty into negotiations.
                </div>

                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/#photos"
                    className="flex-1 md:flex-none px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-center font-semibold"
                  >
                    View Photos
                  </Link>
                  <Link
                    href="/request-info"
                    className="flex-1 md:flex-none px-6 py-3 bg-white text-blue-600 border-2 border-blue-600 rounded-lg hover:bg-blue-50 transition-all font-semibold text-center"
                  >
                    Request Info
                  </Link>
                  <Link
                    href="/book-tour"
                    className="flex-1 md:flex-none px-6 py-3 bg-white text-blue-600 border-2 border-blue-600 rounded-lg hover:bg-blue-50 transition-all font-semibold text-center"
                  >
                    Book Tour
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Listings Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            More Properties Available
          </h2>
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 text-center border-2 border-dashed border-gray-300">
            <div className="max-w-2xl mx-auto">
              <div className="mb-6">
                <svg
                  className="mx-auto h-16 w-16 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Explore More Silverstone Ranch Properties
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                Dr. Jan Duffy has access to exclusive listings throughout Silverstone Ranch 
                and the greater Las Vegas area. Contact us to discover homes that match 
                your lifestyle and budget.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/#agent"
                  className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 font-semibold"
                >
                  Contact Agent
                </Link>
                <Link
                  href="/home-valuation"
                  className="px-8 py-3 bg-white text-blue-600 border-2 border-blue-600 rounded-lg hover:bg-blue-50 transition-all font-semibold"
                >
                  Get Home Valuation
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Community Information */}
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
            Why Choose Silverstone Ranch?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Top-Rated Schools
              </h3>
              <p className="text-gray-600">
                Excellent school district with highly-rated public and private schools 
                serving the community.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Prime Location
              </h3>
              <p className="text-gray-600">
                Conveniently located in North Las Vegas with easy access to shopping, 
                dining, entertainment, and major employment centers.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Luxury Amenities
              </h3>
              <p className="text-gray-600">
                Community features include parks, walking trails, recreational facilities, 
                and beautifully maintained common areas.
              </p>
            </div>
          </div>
        </div>

        {/* Agent Contact CTA */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg shadow-xl p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Find Your Dream Home?
          </h2>
          <p className="text-lg mb-8 text-blue-100 max-w-2xl mx-auto">
            Dr. Jan Duffy, Top 1% REALTOR®, specializes in Silverstone Ranch properties. 
            Get expert guidance and access to exclusive listings.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${CONTACT_INFO.phone.tel}`}
              className="px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 font-semibold"
            >
              Call {CONTACT_INFO.phone.display}
            </a>
            <Link
              href="/request-info"
              className="px-8 py-3 bg-blue-500 text-white border-2 border-white rounded-lg hover:bg-blue-400 transition-all font-semibold"
            >
              Request Information
            </Link>
          </div>
        </div>

        <section className="mb-16 bg-white rounded-lg shadow-xl p-8 md:p-12">
          <h2 className="text-3xl font-semibold text-gray-900 mb-6">Current Inventory Breakdown</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Inventory shifts every week. The November 7, 2025 analysis below highlights active, pending, and private listings
            categorized by lot size, builder series, and upgrade level. Use it as a snapshot—connect with Dr. Duffy for the
            latest status before you schedule tours or craft offers.
          </p>
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">Series</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">Beds/Baths</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">Lot Type</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">Status</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">List Range</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 text-sm text-gray-700">
                <tr className="bg-white">
                  <td className="px-4 py-3 font-semibold">Pinehurst Collection</td>
                  <td className="px-4 py-3">3-4 bed · 2-3 bath</td>
                  <td className="px-4 py-3">Interior lots</td>
                  <td className="px-4 py-3">4 active · 1 coming soon</td>
                  <td className="px-4 py-3">$590K – $655K</td>
                </tr>
                <tr className="bg-gray-50/70">
                  <td className="px-4 py-3 font-semibold">Silverlake Estates</td>
                  <td className="px-4 py-3">4-5 bed · 3-4 bath</td>
                  <td className="px-4 py-3">Pool-friendly, 8,000+ sq ft lots</td>
                  <td className="px-4 py-3">6 active · 2 pending</td>
                  <td className="px-4 py-3">$720K – $860K</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-3 font-semibold">Heights at Silverstone</td>
                  <td className="px-4 py-3">Single-story, multigenerational suites</td>
                  <td className="px-4 py-3">Corner + cul-de-sac</td>
                  <td className="px-4 py-3">3 active · 1 private</td>
                  <td className="px-4 py-3">$835K – $915K</td>
                </tr>
                <tr className="bg-gray-50/70">
                  <td className="px-4 py-3 font-semibold">Townhome Villas</td>
                  <td className="px-4 py-3">2-3 bed · 2.5 bath</td>
                  <td className="px-4 py-3">Gated courtyard entries</td>
                  <td className="px-4 py-3">2 active · 3 leased</td>
                  <td className="px-4 py-3">$435K – $498K</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-xs text-gray-500">
            *Data compiled from MLS, pocket listings, and homeowner outreach programs. Availability subject to change. Confirm HOA
            dues and golf course disclosures prior to offer submission.
          </p>
        </section>

        <section className="mb-16 bg-white rounded-lg shadow-xl p-8 md:p-12">
          <h2 className="text-3xl font-semibold text-gray-900 mb-6">Silverstone Buyer Journey</h2>
          <div className="grid lg:grid-cols-4 gap-6 text-sm text-gray-700 leading-relaxed">
            <div className="rounded-2xl border border-blue-100 bg-blue-50/80 p-5">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">Week 1: Prep & Strategy</h3>
              <p>Consult with Dr. Duffy, secure pre-approval, define must-haves, and subscribe to off-market inventory alerts.</p>
            </div>
            <div className="rounded-2xl border border-blue-100 bg-blue-50/80 p-5">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">Week 2: Tours & Comparables</h3>
              <p>Tour curated properties (including twilight showings), review valuation packets, and evaluate HOA resale docs.</p>
            </div>
            <div className="rounded-2xl border border-blue-100 bg-blue-50/80 p-5">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">Week 3: Offer & Negotiation</h3>
              <p>Submit offer with escalation strategies, inspection timelines, and golf course disclosures acknowledged.</p>
            </div>
            <div className="rounded-2xl border border-blue-100 bg-blue-50/80 p-5">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">Week 4+: Due Diligence</h3>
              <p>Complete inspections, appraisal, insurance binding, and closing prep. Receive move-in concierge checklist.</p>
            </div>
          </div>
        </section>

        <section className="mb-16 bg-white rounded-lg shadow-xl p-8 md:p-12">
          <h2 className="text-3xl font-semibold text-gray-900 mb-6">Compare Silverstone to Nearby Communities</h2>
          <div className="grid md:grid-cols-3 gap-8 text-sm text-gray-700 leading-relaxed">
            <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-5">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Silverstone Ranch</h3>
              <p>Guard-gated security, larger lot sizes, and established landscaping. HOA covers controlled access, common area upkeep, and community programming.</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-5">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Skye Canyon</h3>
              <p>Newer builds with resort amenities but higher SID/LID fees. Smaller lots; popular with active families seeking quick 215 access.</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-5">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Tule Springs</h3>
              <p>Expansive master-planned area with future retail development. Silverstone offers more mature landscaping and guard-gated feel.</p>
            </div>
          </div>
          <p className="mt-6 text-gray-700 leading-relaxed">
            Buyers choose Silverstone for the peace of mind that comes with dedicated gatehouse staff, established tree canopy, and
            proximity to Floyd Lamb Park. The dormant golf course requires smart negotiation, yet the long-term upside remains
            attractive for homeowners wanting stability near the 215 beltway.
          </p>
        </section>

        <section className="mb-16 bg-white rounded-lg shadow-xl p-8 md:p-12">
          <h2 className="text-3xl font-semibold text-gray-900 mb-6">Frequently Asked Buying Questions</h2>
          <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
            <details className="rounded-lg border border-slate-200 bg-slate-50/80 p-4">
              <summary className="cursor-pointer text-base font-semibold text-gray-900">How fast do homes move under $700K?</summary>
              <p className="mt-3">
                Homes priced between $630K and $700K average nine days on market. Expect multiple offers within the first week; Dr. Duffy recommends touring immediately when alerts hit your inbox.
              </p>
            </details>
            <details className="rounded-lg border border-slate-200 bg-slate-50/80 p-4">
              <summary className="cursor-pointer text-base font-semibold text-gray-900">Can I negotiate if the home backs dormant golf course land?</summary>
              <p className="mt-3">
                Yes. Buyers often secure landscaping credits, fencing allowances, or price adjustments to offset limited views. Documented golf course status is part of your due diligence package.
              </p>
            </details>
            <details className="rounded-lg border border-slate-200 bg-slate-50/80 p-4">
              <summary className="cursor-pointer text-base font-semibold text-gray-900">Are there rental restrictions?</summary>
              <p className="mt-3">
                Silverstone Ranch requires a minimum six-month lease, HOA approval, and compliance with guard-gate registration. Investors should review HOA bylaws before writing offers.
              </p>
            </details>
            <details className="rounded-lg border border-slate-200 bg-slate-50/80 p-4">
              <summary className="cursor-pointer text-base font-semibold text-gray-900">What about insurance considerations?</summary>
              <p className="mt-3">
                Insurance premiums vary based on heat and wind mitigation. Work with carriers that recognize Silverstone’s lower wildfire and flood risk compared to western valley communities.
              </p>
            </details>
          </div>
        </section>

        <section className="mb-16 bg-white rounded-lg shadow-xl p-8 md:p-12">
          <h2 className="text-3xl font-semibold text-gray-900 mb-6">Buyer Mindset & Offer Strategy</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Silverstone attracts buyers looking for established landscaping, guard-gated streets, and proximity to Centennial Hills
            amenities. Understanding motivations by segment helps you craft offers or prep your listing with sharper focus.
          </p>
          <div className="grid md:grid-cols-3 gap-6 text-sm text-gray-700 leading-relaxed">
            <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-5 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Relocation Executives</h3>
              <p>Prioritize quick occupancy, turnkey finishes, and guard-gate security. They often travel while home searches continue; virtual previews and move-in concierge services seal the deal.</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-5 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Medical & Hospitality Professionals</h3>
              <p>Value commute times to Centennial Hills Hospital and the Strip. Offer flexible closing or leasebacks to align with shift rotations and contract start dates.</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-5 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Move-Up Las Vegas Residents</h3>
              <p>Transitioning from Summerlin, Skye Canyon, or Providence, they focus on backyard space and multi-gen layouts. Highlight landscape upgrades, casita potential, and HOA amenity access.</p>
            </div>
          </div>
        </section>

        <section className="mb-16 bg-white rounded-lg shadow-xl p-8 md:p-12">
          <h2 className="text-3xl font-semibold text-gray-900 mb-6">Seller Advisory Corner</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Considering selling in the next 12 months? Use these insights to plan renovations, budget for carrying costs, and
            understand what buyers expect in June 2026.
          </p>
          <div className="grid md:grid-cols-2 gap-6 text-sm text-gray-700 leading-relaxed">
            <div className="rounded-2xl border border-amber-200 bg-amber-50/80 p-5 shadow-sm">
              <h3 className="text-lg font-semibold text-amber-900 mb-2">Pre-List Essentials</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Invest $8K–$12K in desert landscaping refresh; buyers pay premiums for mature yards and evening lighting.</li>
                <li>Service HVAC, pool equipment, and water softeners—inspection-ready systems calm relocation concerns.</li>
                <li>Create a one-page brief summarizing the 2025 golf course status to hand buyers before tours.</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-amber-200 bg-amber-50/80 p-5 shadow-sm">
              <h3 className="text-lg font-semibold text-amber-900 mb-2">Pricing & Timing</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>List between late January and May to capture relocation budgets and corporate allowances.</li>
                <li>Homes with new exterior paint and refreshed stone accents average 3.4% higher list-to-sale ratios.</li>
                <li>Budget for seller credits tied to heat mitigation or privacy landscaping when backing dormant fairways.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-16 bg-white rounded-lg shadow-xl p-8 md:p-12">
          <h2 className="text-3xl font-semibold text-gray-900 mb-6">Service Providers You’ll Need</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Dr. Duffy maintains a vetted roster of professionals familiar with Silverstone guidelines. Partnering with local experts
            keeps projects compliant and timelines tight.
          </p>
          <div className="grid md:grid-cols-3 gap-6 text-sm text-gray-700 leading-relaxed">
            <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-5 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Landscape & Outdoor Living</h3>
              <p>Certified Water Smart Landscapes designers, irrigation auditors, and low-voltage lighting crews ready for quick refreshes or full backyard transformations.</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-5 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Home Systems & Efficiency</h3>
              <p>HVAC specialists, solar screen installers, and insulation pros who understand HOA requirements and desert climate performance expectations.</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-5 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Contracts & Compliance</h3>
              <p>Escrow officers, insurance advisors, and real estate attorneys that routinely process Silverstone transactions and stay current on golf course disclosures.</p>
            </div>
          </div>
        </section>

        <section className="mb-16 bg-white rounded-lg shadow-xl p-8 md:p-12">
          <h2 className="text-3xl font-semibold text-gray-900 mb-6">Silverstone Lifestyle Spotlight</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Buyers pursue Silverstone for more than homes—they invest in a lifestyle that balances outdoor adventure, community
            events, and curated amenities.
          </p>
          <div className="grid md:grid-cols-2 gap-6 text-sm text-gray-700 leading-relaxed">
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Seasonal Programming</h3>
              <p>Holiday golf-cart parades, summer splash parties, fall movie nights, and farmer’s markets hosted in the six-acre park keep neighbors connected year-round.</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Outdoor Access</h3>
              <p>Five-minute drives lead to Floyd Lamb Park, Tule Springs Fossil Beds, and Centennial Hills Library & YMCA—perfect for paddleboarding mornings, trail runs, and wellness classes.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

