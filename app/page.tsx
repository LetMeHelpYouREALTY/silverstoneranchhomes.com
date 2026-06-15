import type { Metadata } from 'next'
import Link from 'next/link'
import PhotoGallery from '@/components/PhotoGallery'
import AgentSummaryCard from '@/components/AgentSummaryCard'
import ScrollToTop from '@/components/ScrollToTop'
import { VirtualOpenHouseButton } from '@/components/VirtualOpenHouseButton'
import { ServicesLocationConversion } from '@/components/ServicesLocationConversion'
import { SilverstoneListingCards } from '@/components/SilverstoneListingCards'
import { SeoJsonLd } from '@/components/SeoJsonLd'
import {
  buildAggregateRatingSchema,
  buildAction,
  buildFaqSchema,
  buildRealEstateListingItemList,
  buildReviewSchema,
  buildServiceSchema,
  buildWebPageSchema,
} from '@/lib/seo'
import { CONTACT_INFO } from '@/lib/contact-info'
import { buildPageTitle } from '@/lib/metadata'
import { HOMEPAGE_FAQS } from '@/lib/hyperlocal-faqs'
import { MARKET_SNAPSHOT } from '@/lib/market-data'
import {
  fetchHyperlocalListingCount,
  fetchSilverstoneListings,
  formatActiveListingStat,
  listingsToSchemaEntries,
} from '@/lib/realscout/fetch-listings'

export const metadata: Metadata = {
  title: 'Silverstone Ranch REALTOR® | Homes for Sale 89131',
  description:
    `Buy or sell in Silverstone Ranch (89131), Centennial Hills. Guard-gated enclaves, HOA guidance, ${MARKET_SNAPSHOT.reportMonth} market data, and concierge real estate services from ${CONTACT_INFO.agentName}.`,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: buildPageTitle('Community Overview & Luxury Insights'),
    description:
      'Discover Silverstone Ranch in Northwest Las Vegas—gated neighborhoods, curated amenities, and expert representation from Dr. Jan Duffy REALTOR®.',
    url: CONTACT_INFO.website.url,
    type: 'website',
  },
}

const homepageTestimonials = [
  {
    author: 'Elena & Marcus H.',
    quote:
      'We wanted space for entertaining without leaving Centennial Hills. Silverstone’s guard gate, trails, and HOA concierge made our transition seamless. Dr. Duffy handled everything—from lender introductions to the final walkthrough.',
  },
  {
    author: 'The Price Family',
    quote:
      'We were nervous about selling while building in Skye Canyon. Jan staged our home, negotiated $35K over list, and coordinated movers, landscapers, and HOA docs in under 21 days.',
  },
  {
    author: 'Casey & Priya R.',
    quote:
      'Moving from Orange County was daunting. The relocation kit, private tour, and vendor referrals made it effortless. We were in our new Silverstone home within six weeks.',
  },
]

export default async function HomePage() {
  const [liveListings, liveCount] = await Promise.all([
    fetchSilverstoneListings({ hyperlocalOnly: true, limit: 6 }),
    fetchHyperlocalListingCount(),
  ])
  const activeListingStat = formatActiveListingStat(liveCount)

  const communityStats = [
    {
      label: `Median Price (${MARKET_SNAPSHOT.reportMonthShort})`,
      value: MARKET_SNAPSHOT.medianPriceShort,
      detail: `${MARKET_SNAPSHOT.medianPriceYoY} year-over-year across the Silverstone Ranch micro-market (89131).`,
    },
    {
      label: 'Average Days on Market',
      value: MARKET_SNAPSHOT.daysOnMarket,
      detail: 'Well-priced homes still attract offers; overpriced listings face longer absorption in 2026.',
    },
    {
      label: 'Active MLS Listings (89131)',
      value: activeListingStat.value,
      detail: activeListingStat.detail,
    },
  ]

  const path = '/'
  const pageSchema = buildWebPageSchema({
    path,
    name: CONTACT_INFO.businessName,
    description: CONTACT_INFO.gbpDescription,
  })

  const listingItemList =
    liveListings.length > 0
      ? buildRealEstateListingItemList({
          path: '/homes-for-sale',
          name: 'Silverstone Ranch Homes for Sale',
          listings: listingsToSchemaEntries(liveListings),
        })
      : null

  const services = [
    buildServiceSchema({
      name: 'Silverstone Ranch Buyer Concierge',
      description:
        'Relocation strategy, private community tours, and offer negotiation tailored to Silverstone Ranch guard-gated neighborhoods.',
      serviceType: ['BuyerRepresentation', 'RelocationService'],
      actions: [
        buildAction({
          type: 'ScheduleAction',
          name: 'Schedule a Private Tour',
          target: `${CONTACT_INFO.website.base}/book-tour`,
        }),
      ],
    }),
    buildServiceSchema({
      name: 'Listing Concierge & Pricing Strategy',
      description:
        'Data-backed pricing, presentation, and negotiation framework built for luxury listings in Northwest Las Vegas.',
      serviceType: ['SellerRepresentation'],
      actions: [
        buildAction({
          type: 'ReserveAction',
          name: 'Request Home Valuation',
          target: `${CONTACT_INFO.website.base}/home-valuation`,
        }),
      ],
    }),
    buildServiceSchema({
      name: 'Silverstone Ranch Relocation Kit',
      description:
        'Guard gate procedures, school registration resources, vendor introductions, and HOA fee breakdowns for out-of-state buyers.',
      serviceType: ['RelocationService'],
      actions: [
        buildAction({
          type: 'ContactAction',
          name: 'Request Community Information',
          target: `${CONTACT_INFO.website.base}/request-info`,
        }),
      ],
    }),
  ]

  const reviewList = homepageTestimonials.map((review) =>
    buildReviewSchema({
      author: review.author,
      reviewBody: review.quote,
      rating: 5,
    }),
  )

  const agentSchema = {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    name: CONTACT_INFO.agentName,
    url: CONTACT_INFO.website.url,
    award: 'Berkshire Hathaway Circle – Top 1% Las Vegas REALTORS® for closed volume (2024)',
    review: reviewList,
    aggregateRating: buildAggregateRatingSchema({
      ratingValue: 4.9,
      reviewCount: 37,
    }),
    areaServed: CONTACT_INFO.serviceAreas,
    sameAs: CONTACT_INFO.socialProfiles.map((profile) => profile.url),
  }

  const faqSchema = buildFaqSchema('/', HOMEPAGE_FAQS.map((f) => ({ question: f.question, answer: f.answer })))

  const schemaData = [pageSchema, agentSchema, faqSchema, listingItemList, ...services].filter(
    (s): s is NonNullable<typeof s> => s != null,
  ) as Record<string, unknown>[]

  return (
    <main className="bg-white">
      <SeoJsonLd id="home-schema" data={schemaData as Record<string, unknown>[]} />
      <section className="bg-gradient-to-br from-blue-50 via-white to-slate-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl grid gap-10 lg:grid-cols-[1.2fr_1fr] items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-700 mb-3">
              Silverstone Ranch, Centennial Hills · June 2026
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Live Exceptionally in Silverstone Ranch, the Guard-Gated Enclave of Northwest Las Vegas
            </h1>
            <p className="text-lg text-slate-700 mb-6">
              Serving buyers and sellers in <strong className="font-semibold text-slate-900">Silverstone Ranch</strong> and{' '}
              <strong className="font-semibold text-slate-900">Centennial Hills (89131)</strong>—from desert-modern homes to
              resort-style amenities. Get local pricing context, HOA-aware guidance, and concierge representation from{' '}
              {CONTACT_INFO.agentName} when you buy, sell, or relocate here.
            </p>
            <div className="grid sm:grid-cols-3 gap-4">
              {communityStats.map((item) => (
                <div key={item.label} className="rounded-2xl border border-blue-100 bg-white p-4 shadow-sm">
                  <p className="text-xs uppercase tracking-wide text-blue-600 font-semibold mb-1">{item.label}</p>
                  <p className="text-2xl font-bold text-blue-900 mb-1">{item.value}</p>
                  <p className="text-xs text-blue-700 leading-relaxed">{item.detail}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/book-tour"
                className="inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow hover:bg-blue-700 transition"
              >
                Schedule a Private Tour
              </Link>
              <Link
                href="/homes-for-sale"
                className="inline-flex items-center justify-center rounded-full border border-blue-600 px-6 py-3 text-sm font-semibold text-blue-600 hover:bg-blue-50 transition"
              >
                {liveCount > 0 ? `View ${liveCount} Live Listing${liveCount === 1 ? '' : 's'}` : 'Browse Homes for Sale'}
              </Link>
              <Link
                href="/home-valuation"
                className="inline-flex items-center justify-center rounded-full border border-blue-600 px-6 py-3 text-sm font-semibold text-blue-600 hover:bg-blue-50 transition"
              >
                Unlock Your Home Value
              </Link>
              <Link
                href="/request-info"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-100 transition"
              >
                Request Community Info
              </Link>
            </div>
          </div>
          <div className="rounded-2xl border border-blue-100 bg-white p-6 shadow-lg">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">Why Buyers Trust Dr. Jan Duffy</h2>
            <ul className="space-y-3 text-sm text-slate-700">
              <li>
                <span className="font-semibold text-blue-600">Top 1% Las Vegas REALTOR®:</span> Dedicated concierge-style
                representation for luxury and guard-gated clients.
              </li>
              <li>
                <span className="font-semibold text-blue-600">Local Expertise:</span> Decades of insight on Silverstone HOA
                covenants, golf course history, and off-market inventory.
              </li>
              <li>
                <span className="font-semibold text-blue-600">Data-Driven Strategy:</span> June 2026 pricing models and
                negotiation tactics that keep deals on track from appraisal to closing.
              </li>
              <li>
                <span className="font-semibold text-blue-600">Relocation Ready:</span> Seamless coordination with preferred
                lenders, movers, inspectors, and staging partners.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <ServicesLocationConversion />

      {liveListings.length > 0 ? (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 border-t border-slate-200">
          <div className="mx-auto max-w-6xl">
            <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h2 className="text-3xl font-bold text-slate-900">Live Silverstone Ranch Listings</h2>
                <p className="mt-2 text-slate-700">
                  {liveCount} active home{liveCount === 1 ? '' : 's'} in ZIP 89131/89143 from Dr. Jan Duffy&apos;s RealScout MLS feed.
                </p>
              </div>
              <Link
                href="/homes-for-sale"
                className="inline-flex shrink-0 items-center justify-center rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-700"
              >
                View all listings
              </Link>
            </div>
            <SilverstoneListingCards listings={liveListings} />
          </div>
        </section>
      ) : null}

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white border-t border-slate-200">
        <div className="mx-auto max-w-6xl space-y-10">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Silverstone Service Suite</h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              Buying or selling inside a guard-gated community demands precision. Dr. Duffy’s in-house service suite gives clients
              one point of contact for every milestone—research, pricing, presentation, negotiation, and post-closing support. The
              result is a streamlined experience that protects timelines and keeps stakeholders aligned from strategy session to
              key handoff.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-5 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Research & Forecasting</h3>
                <p className="text-sm text-slate-700 leading-relaxed">
                  Weekly market briefs analyze pricing bands, absorption rates, and buyer demographics for each Silverstone
                  enclave. You know exactly how your home stacks up before the first showing.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-5 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Presentation & Storytelling</h3>
                <p className="text-sm text-slate-700 leading-relaxed">
                  Certified staging partners, cinematic photography, and narrative-rich marketing copy highlight indoor-outdoor
                  living, golf course disclosures, and community amenities buyers crave.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-5 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Contract to Closing</h3>
                <p className="text-sm text-slate-700 leading-relaxed">
                  Concierge transaction managers coordinate inspections, appraisal responses, HOA approvals, and concierge move
                  services so every signature lands on time.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Lifestyle Pillars that Define Silverstone Ranch</h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              Silverstone balances resort-style amenities with the everyday essentials busy households expect. From education
              pathways to outdoor escapes and dining corridors, each pillar has been curated to support long-term residency
              and strong resale demand.
            </p>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-5 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Education & Enrichment</h3>
                <p className="text-sm text-slate-700 leading-relaxed">
                  Zoned for O’Roarke Elementary, Cadwallader Middle, and Arbor View High, families enjoy 7–8/10 GreatSchools
                  ratings. Charter and private options—Somerset Academy, Doral Red Rock, Faith Lutheran—sit within 20 minutes.
                  Weekend enrichment includes STEM labs, youth sports at Centennial Hills YMCA, and arts programming at the
                  Centennial library complex.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-5 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Outdoor & Wellness</h3>
                <p className="text-sm text-slate-700 leading-relaxed">
                  Walking loops, pickleball courts, splash pads, and picnic lawns create resort energy inside the gates. A
                  five-minute drive unlocks Floyd Lamb Park fishing lagoons, Mount Charleston trails, and mountain biking in
                  Skye Canyon. Residents participate in sunrise yoga, twilight concerts, and desert stargazing nights arranged
                  by the HOA concierge.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-5 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Dining & Conveniences</h3>
                <p className="text-sm text-slate-700 leading-relaxed">
                  Grocery runs are effortless with Whole Foods, Smith’s Marketplace, and Costco nearby. Local eateries such as
                  The Stove, Firefly Tapas, and Tenaya Creek Brewery join boutique coffee shops and pastry bars. Downtown
                  Summerlin’s culinary scene and Red Rock Canyon’s lodge dining remain under 20 minutes away.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Neighborhood Spotlights</h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              Silverstone is composed of distinct sub-associations, each offering unique architecture, HOA benefits, and lot
              orientation. Understanding these nuances helps match lifestyle priorities with the right street.
            </p>
            <div className="grid gap-6 lg:grid-cols-3">
              <div className="rounded-2xl border border-blue-100 bg-white p-5 shadow-sm">
                <h3 className="text-lg font-semibold text-blue-700 mb-2">
                  <Link href="/neighborhoods/the-palms" className="hover:underline">
                    The Palms
                  </Link>
                </h3>
                <p className="text-sm text-slate-700 leading-relaxed">
                  The only guard-gated enclave—estate lots, Mediterranean façades, and 24/7 manned entry. Ideal for luxury
                  outdoor living.
                </p>
              </div>
              <div className="rounded-2xl border border-blue-100 bg-white p-5 shadow-sm">
                <h3 className="text-lg font-semibold text-blue-700 mb-2">
                  <Link href="/neighborhoods/tuscany" className="hover:underline">
                    Tuscany &amp; The Cottages
                  </Link>
                </h3>
                <p className="text-sm text-slate-700 leading-relaxed">
                  Gated streets with front-yard maintenance, clubhouse access, and flexible floor plans at $252/mo HOA.
                </p>
              </div>
              <div className="rounded-2xl border border-blue-100 bg-white p-5 shadow-sm">
                <h3 className="text-lg font-semibold text-blue-700 mb-2">
                  <Link href="/neighborhoods/pinehurst" className="hover:underline">
                    Pinehurst Townhomes
                  </Link>
                </h3>
                <p className="text-sm text-slate-700 leading-relaxed">
                  Lock-and-leave townhomes bordering the dormant fairway—highest HOA tier ($286/mo) with pool coverage.
                </p>
              </div>
              <div className="rounded-2xl border border-blue-100 bg-white p-5 shadow-sm">
                <h3 className="text-lg font-semibold text-blue-700 mb-2">
                  <Link href="/neighborhoods/silverlake" className="hover:underline">
                    Silverlake
                  </Link>
                </h3>
                <p className="text-sm text-slate-700 leading-relaxed">
                  Gated single-story homes on quarter-acre lots—compare with{' '}
                  <Link href="/neighborhoods/windermere" className="text-blue-600 hover:underline">
                    Windermere
                  </Link>{' '}
                  townhomes for lock-and-leave options.
                </p>
              </div>
              <div className="rounded-2xl border border-blue-100 bg-white p-5 shadow-sm">
                <h3 className="text-lg font-semibold text-blue-700 mb-2">
                  <Link href="/neighborhoods/somerset" className="hover:underline">
                    Somerset
                  </Link>
                  {' · '}
                  <Link href="/neighborhoods/greenfield" className="hover:underline">
                    Greenfield
                  </Link>
                </h3>
                <p className="text-sm text-slate-700 leading-relaxed">
                  Non-gated villages at the lowest HOA tier ($200/mo). Also explore{' '}
                  <Link href="/neighborhoods/clairbrook" className="text-blue-600 hover:underline">
                    Clairbrook
                  </Link>
                  ,{' '}
                  <Link href="/neighborhoods/eastpoint" className="text-blue-600 hover:underline">
                    Eastpoint
                  </Link>
                  , and{' '}
                  <Link href="/neighborhoods/parkfield" className="text-blue-600 hover:underline">
                    Parkfield
                  </Link>
                  .
                </p>
              </div>
              <div className="rounded-2xl border border-blue-100 bg-white p-5 shadow-sm">
                <h3 className="text-lg font-semibold text-blue-700 mb-2">
                  <Link href="/neighborhoods/amberly" className="hover:underline">
                    Amberly
                  </Link>
                </h3>
                <p className="text-sm text-slate-700 leading-relaxed">
                  Gated enclave with controlled access. Full community hub:{' '}
                  <Link href="/silverstone-ranch" className="text-blue-600 hover:underline">
                    Silverstone Ranch guide
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Relocation Intelligence</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              Most relocation buyers arrive from California, Arizona, and Mountain West metros. Arrival allowances often fund
              appraisal gaps or temporary housing, so expect competitive offers in turnkey price bands. Dr. Duffy’s relocation
              kit includes guard gate procedures, DMV timelines, school registration links, and vetted vendor introductions to
              reduce stress.
            </p>
            <p className="text-slate-700 leading-relaxed">
              Remote work remains a priority. Silverstone’s fiber connectivity, clubhouse co-working lounges, and shaded
              courtyard seating support digital-first businesses. When you need downtown resources, the Centennial Hills
              Transit Center and express bus routes offer reliable alternatives to parking on the Strip.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white border-t border-slate-200">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Visualize Silverstone Ranch</h2>
          <p className="text-slate-700 mb-8">
            Tour Mediterranean façades, desert landscaping, and interior vignettes curated for relocation buyers. Each
            image highlights the balance of luxury and livability embedded in every Silverstone Ranch residence.
          </p>
          <PhotoGallery />
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 border-t border-slate-200">
        <div className="mx-auto max-w-6xl grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-start">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Meet Your Silverstone Ranch Specialist</h2>
            <p className="text-slate-700 mb-6">
              Dr. Jan Duffy pairs doctoral-level research skills with concierge real estate service. From uncovering
              private inventory to aligning lending, inspections, and HOA documents, she ensures every Silverstone
              transaction closes with confidence.
            </p>
            <p className="text-slate-700 mb-6">
              Schedule a conversation to receive a tailored relocation kit, neighborhood comparisons, lender
              introductions, and an action plan that maximizes the next 30, 60, and 90 days of your home search.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/request-info"
                className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-blue-700 transition"
              >
                Request Your Relocation Kit
              </Link>
              <Link
                href="/buyers-checklist"
                className="inline-flex items-center justify-center rounded-lg border border-blue-600 px-4 py-2 text-sm font-semibold text-blue-600 hover:bg-blue-50 transition"
              >
                Review the Buyer Checklist
              </Link>
            </div>
          </div>
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
            <AgentSummaryCard />
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white border-t border-slate-200">
        <div className="mx-auto max-w-6xl grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Buyer Strategy Playbook</h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              Silverstone inventory moves quickly when homes are staged and priced correctly. Prepare dual financing options—
              conventional and jumbo—so you can pivot by sub-association. Pair offers with appraisal gap coverage, flexible
              closing timelines, and clear acknowledgement of the dormant golf course to stand out from relocation competition.
            </p>
            <ul className="space-y-3 text-sm text-slate-700 leading-relaxed">
              <li>Tour mid-week to access private showings and preview events hosted by Dr. Duffy’s relocation partners.</li>
              <li>Request HOA budgets, meeting minutes, and reserve studies before releasing contingencies.</li>
              <li>Budget 1–2% of purchase price for desert landscaping enhancements that sharpen fairway views.</li>
            </ul>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Seller Success Framework</h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              Sellers achieve premium results when they pair transparency with presentation. Provide disclosure packets
              summarizing auction history, landscaping plans, and HOA statements. Stage outdoor living areas with cafe lighting
              and desert-friendly furnishings to help buyers visualize private retreats even with dormant fairways.
            </p>
            <ul className="space-y-3 text-sm text-slate-700 leading-relaxed">
              <li>Schedule pre-listing inspections (roof, HVAC, pool) to avoid renegotiations.</li>
              <li>Offer credits earmarked for landscaping or heat-mitigation upgrades instead of broad price cuts.</li>
              <li>Leverage twilight photography and video tours to showcase skyline and mountain backdrops.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 border-t border-slate-200">
        <div className="mx-auto max-w-6xl space-y-8">
          <h2 className="text-3xl font-bold text-slate-900">What Residents Are Saying</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <blockquote className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm text-slate-700 leading-relaxed italic">
                “We wanted space for entertaining without leaving Centennial Hills. Silverstone’s guard gate, trails, and HOA
                concierge made our transition seamless. Dr. Duffy handled everything—from lender introductions to the final
                walkthrough.”
              </p>
              <footer className="mt-3 text-xs font-semibold text-slate-900">— The Donovan Family, The Palms</footer>
            </blockquote>
            <blockquote className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm text-slate-700 leading-relaxed italic">
                “As surgeons with variable hours, we needed low-maintenance living and quick hospital access. Pinehurst
                townhomes delivered, and the fitness loop keeps us active between shifts.”
              </p>
              <footer className="mt-3 text-xs font-semibold text-slate-900">— Drs. Martinez & Chen, Pinehurst</footer>
            </blockquote>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white border-t border-slate-200">
        <div className="mx-auto max-w-6xl space-y-6">
          <h2 className="text-3xl font-bold text-slate-900">Home Finance & Logistics Snapshot</h2>
          <p className="text-slate-700 leading-relaxed">
            Every Silverstone transaction requires a blend of financial readiness and lifestyle planning. Dr. Duffy’s lending
            partners pre-underwrite loans within 48 hours, outline appraisal gap strategies, and model payment scenarios based on
            HOA dues and insurance updates. Her concierge also connects you with moving companies, pet transport, and school
            registration teams so your relocation keeps momentum.
          </p>
          <div className="grid md:grid-cols-3 gap-6 text-sm text-slate-700 leading-relaxed">
            <div className="rounded-2xl border border-blue-100 bg-white p-5 shadow-sm">
              <h3 className="text-lg font-semibold text-blue-700 mb-2">Financing Essentials</h3>
              <p>Dual pre-approvals (conventional + jumbo), appraisal gap reserves, and buydown credits engineered to win in
                multiple-offer scenarios.</p>
            </div>
            <div className="rounded-2xl border border-blue-100 bg-white p-5 shadow-sm">
              <h3 className="text-lg font-semibold text-blue-700 mb-2">Insurance & Risk</h3>
              <p>Heat, wind, and flood mitigation recommendations lower premiums. Ask for the environmental risk guide tailored to
                Silverstone’s microclimate.</p>
            </div>
            <div className="rounded-2xl border border-blue-100 bg-white p-5 shadow-sm">
              <h3 className="text-lg font-semibold text-blue-700 mb-2">Move-In Logistics</h3>
              <p>Guard gate registration, utility transfer schedules, HOA orientation, and vendor introductions handled by Dr.
                Duffy’s concierge team.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white border-t border-slate-200">
        <div className="mx-auto max-w-6xl space-y-6">
          <h2 className="text-3xl font-bold text-slate-900">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {HOMEPAGE_FAQS.map((faq) => (
              <details key={faq.question} className="rounded-lg border border-slate-200 bg-slate-50/80 p-4">
                <summary className="cursor-pointer text-base font-semibold text-slate-900">{faq.question}</summary>
                <p className="mt-3 text-sm text-slate-700 leading-relaxed">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 border-t border-slate-200">
        <div className="mx-auto max-w-6xl space-y-8">
          <h2 className="text-3xl font-bold text-slate-900">Market Data Deep Dive</h2>
          <p className="text-slate-700 leading-relaxed">
            June 2026 trends reveal Silverstone’s resilience: median sale price $685K (+5.2% YoY), average price per
            square foot $284, and list-to-sale ratio 101.8%. Cash and jumbo-financed buyers account for nearly half of
            transactions, underscoring the importance of appraisal-ready pricing and curated staging. Inventory remains below
            20 active homes, with the strongest absorption in renovated one-story floor plans backing interior streets.
          </p>
          <div className="grid md:grid-cols-3 gap-6 text-sm text-slate-700 leading-relaxed">
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Relocation Pipeline</h3>
              <p>46 pre-approved buyers tracked by Dr. Duffy—medical professionals, tech executives, and defense contractors—are
                actively seeking guard-gated homes in Centennial Hills.</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Investor Snapshot</h3>
              <p>Townhomes leased furnished average $2,550/month with 95% occupancy. Single-family rentals capture $3,100–$3,400
                depending on outdoor upgrades.</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Seasonal Outlook</h3>
              <p>Expect a listing surge March–May 2026. Preparing enhancements now positions sellers to capitalize on peak demand
                and relocation allowances.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white border-t border-slate-200">
        <div className="mx-auto max-w-6xl space-y-6">
          <h2 className="text-3xl font-bold text-slate-900">45-Day Relocation Timeline</h2>
          <ol className="space-y-3 text-sm text-slate-700 leading-relaxed list-decimal list-inside bg-slate-50/80 border border-slate-200 rounded-2xl p-6 shadow-sm">
            <li>Week 1: Strategy session with Dr. Duffy, lender pre-approval, guard gate orientation, and HOA document review.</li>
            <li>Week 2: Private tours, neighborhood comparisons, and collection of disclosure packets for shortlisted homes.</li>
            <li>Week 3: Offer submission, inspections, appraisal scheduling, and negotiation of landscaping/heat mitigation credits.</li>
            <li>Week 4: Finalize underwriting, confirm insurance riders, and coordinate movers plus concierge services.</li>
            <li>Week 5+: Complete final walkthrough, transfer utilities, attend community welcome events, and integrate with Silverstone social groups.</li>
          </ol>
        </div>
      </section>

      <VirtualOpenHouseButton />
      <ScrollToTop />
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white border-t border-slate-200">
        <div className="mx-auto max-w-6xl space-y-6">
          <h2 className="text-3xl font-bold text-slate-900">Silverstone Snapshot & Next Steps</h2>
          <p className="text-slate-700 leading-relaxed">
            Use this site as your command center. Explore deep dives on HOA fees, environmental risk, buyer checklists, and golf
            course disclosures, then connect with Dr. Duffy to align your goals with the June 2026 market. Whether you&apos;re
            comparing sub-associations, pricing an upcoming sale, or designing a relocation roadmap, the Silverstone team is ready
            to support every milestone.
          </p>
        </div>
      </section>
    </main>
  )
}
