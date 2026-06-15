import Link from 'next/link'
import type { Metadata } from 'next'
import { CONTACT_INFO } from '@/lib/contact-info'
import { buildPageTitle } from '@/lib/metadata'
import { SeoJsonLd } from '@/components/SeoJsonLd'
import { buildFaqSchema, buildWebPageSchema } from '@/lib/seo'

const quickFacts = [
  { label: 'Location', value: 'Centennial Hills, Northwest Las Vegas (ZIP 89131)' },
  { label: 'Community Type', value: 'Guard-gated master-planned enclave with sub-associations' },
  { label: 'Homes Built', value: '2003 – 2008 by Pulte and Toll Brothers' },
  { label: 'Price Range (Jun 2026)', value: '$550K – $1.1M+' },
  { label: 'HOA Dues', value: '$200 – $286 per month depending on sub-association' },
]

const deepDiveLinks = [
  {
    title: 'Lifestyle & Amenities',
    description:
      'Pool complexes, tennis and pickleball courts, clubhouse programming, and nearby Centennial Hills attractions.',
    href: '/amenities',
  },
  {
    title: 'Golf Course History & Status',
    description:
      'Full timeline of the course closure, the 2025 auction, ownership updates, and how dormant fairways affect valuations.',
    href: '/golf-course-status',
  },
  {
    title: 'Schools & Education',
    description:
      'CCSD orientation for Silverstone Ranch families—quick reference plus a link to the full area schools guide.',
    href: '/silverstone-ranch/schools',
  },
  {
    title: 'Market Insights & Pricing',
    description:
      'Current pricing trends, days on market, and buyer demand across Silverstone’s villages.',
    href: '/market-insights',
  },
  {
    title: 'Environmental & Climate Outlook',
    description:
      'Heat projections, monsoon preparedness, and resilience upgrades for desert living.',
    href: '/environmental-risk',
  },
  {
    title: 'Buyer Strategy & Due Diligence',
    description:
      'Onboarding checklist, HOA document review, and negotiation playbook guided by Dr. Jan Duffy.',
    href: '/buyers-checklist',
  },
]

const neighborhoodLinks = [
  {
    name: 'The Palms',
    description: 'Guard-gated single-family homes with larger lots and custom landscaping.',
    href: '/neighborhoods/the-palms',
  },
  {
    name: 'Tuscany & The Cottages',
    description: 'Gated streets with front-yard maintenance, club access, and flexible floor plans.',
    href: '/neighborhoods/tuscany',
  },
  {
    name: 'Pinehurst Townhomes',
    description: 'Lock-and-leave residences bordering the former golf corridors.',
    href: '/neighborhoods/pinehurst',
  },
  {
    name: 'Silverlake',
    description: 'Guard-gated single-family homes with estate lots and privacy-oriented landscaping.',
    href: '/neighborhoods/silverlake',
  },
  {
    name: 'Eastpoint',
    description: 'Non-gated village homes prized for family-friendly streets and master-plan amenities.',
    href: '/neighborhoods/eastpoint',
  },
  {
    name: 'Amberly',
    description: 'Gated enclave with controlled access and cohesive streetscapes in Centennial Hills.',
    href: '/neighborhoods/amberly',
  },
]

export const metadata: Metadata = {
  title: 'Silverstone Ranch Community Guide | Las Vegas 89131',
  description:
    'Complete Silverstone Ranch (89131) guide: guard-gated enclaves, HOA fees, schools, amenities, golf course status, and REALTOR® services from Dr. Jan Duffy.',
  alternates: {
    canonical: '/silverstone-ranch',
  },
  openGraph: {
    title: buildPageTitle('Community Guide | Neighborhood Overview'),
    description:
      'Explore Silverstone Ranch neighborhoods, HOA structure, amenity highlights, and lifestyle insights in Northwest Las Vegas.',
    url: `${CONTACT_INFO.website.base}/silverstone-ranch`,
    type: 'website',
  },
}

const overviewFaqs = [
  {
    question: 'How many guard-gated enclaves comprise Silverstone Ranch?',
    answer:
      'Silverstone Ranch features nine guard-gated and gated enclaves, each with unique floor plans, HOA dues, and landscaping standards.',
  },
  {
    question: 'What is the HOA fee range for Silverstone Ranch?',
    answer:
      'Master association dues average $135 per month with sub-association fees ranging from $65–$220 depending on neighborhood and maintenance coverage.',
  },
  {
    question: 'Are there current assessments related to the former golf course?',
    answer:
      'No assessments are active as of June 2026, but redevelopment updates are tracked quarterly by Dr. Jan Duffy who briefs clients on any city filings.',
  },
]

export default function SilverstoneRanchPage() {
  const path = '/silverstone-ranch'
  const pageSchema = buildWebPageSchema({
    path,
    name: 'Silverstone Ranch Community Guide',
    description:
      'In-depth Silverstone Ranch community overview covering neighborhoods, HOA structure, amenities, and market insights.',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Silverstone Ranch', path },
    ],
  })

  const faqSchema = buildFaqSchema(
    path,
    overviewFaqs.map((faq) => ({ question: faq.question, answer: faq.answer })),
  )

  const schemaData = [pageSchema, faqSchema].filter(Boolean)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-20 px-4 sm:px-6 lg:px-8">
      <SeoJsonLd id="silverstone-ranch" data={schemaData as Record<string, unknown>[]} />
      <main className="bg-white">
        <section className="bg-gradient-to-br from-blue-50 via-white to-slate-50 py-16 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-700 mb-3">
              Comprehensive Community Guide · Updated June 2026
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Silverstone Ranch Community Hub
            </h1>
            <p className="text-lg text-slate-700 mb-6">
              Welcome to the definitive overview of Silverstone Ranch—Centennial Hills’ signature guard-gated enclave. This
              hub consolidates every detail buyers and residents need: HOA insights, golf course status, market analytics,
              environmental planning, school assignments, and concierge services from Dr. Jan Duffy, Berkshire Hathaway
              HomeServices.
            </p>
            <p className="text-lg text-slate-700 mb-6">
              Use the table of contents to jump to the sections that matter most or follow the narrative for a step-by-step
              deep dive. Each topic links to dedicated pages with expanded coverage so you can evaluate Silverstone Ranch
              with clarity and confidence.
            </p>
            <nav className="rounded-2xl border border-blue-100 bg-white shadow-sm p-6">
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">Table of Contents</h2>
              <ol className="space-y-3 text-sm text-blue-700">
                <li>
                  <a href="#quick-facts" className="hover:underline">
                    Quick Facts & Location Snapshot
                  </a>
                </li>
                <li>
                  <a href="#lifestyle" className="hover:underline">
                    Lifestyle Pillars & Amenities Overview
                  </a>
                </li>
                <li>
                  <a href="#market" className="hover:underline">
                    Market Insights & Pricing Dynamics
                  </a>
                </li>
                <li>
                  <a href="#schools" className="hover:underline">
                    Schools & Education Pathways
                  </a>
                </li>
                <li>
                  <a href="#environment" className="hover:underline">
                    Environmental Planning & Risk Readiness
                  </a>
                </li>
                <li>
                  <a href="#neighborhoods" className="hover:underline">
                    Explore Silverstone Neighborhoods
                  </a>
                </li>
                <li>
                  <a href="#resources" className="hover:underline">
                    Deep Dive Resources & Next Steps
                  </a>
                </li>
              </ol>
            </nav>
          </div>
        </section>

        <section id="quick-facts" className="py-16 px-4 sm:px-6 lg:px-8 bg-white border-t border-slate-200">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Quick Facts & Location Snapshot</h2>
            <p className="text-slate-700 mb-6">
              Silverstone Ranch sits on the northern edge of Centennial Hills, framed by the Spring Mountains and Sheep
              Range. Residents enjoy fast access to the 215 Beltway, Floyd Lamb Park, and a growing slate of dining and
              retail options. Guard houses on Silverstone Ranch Drive maintain controlled access while landscaped parkways
              provide a resort-caliber arrival experience.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {quickFacts.map((fact) => (
                <div key={fact.label} className="rounded-2xl border border-slate-200 bg-slate-50/80 p-4">
                  <p className="text-xs uppercase tracking-wide text-blue-600 font-semibold mb-1">{fact.label}</p>
                  <p className="text-sm text-slate-800 leading-relaxed">{fact.value}</p>
                </div>
              ))}
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-3">Getting Around</h3>
            <p className="text-slate-700 mb-4">
              The community anchors a walkable radius to grocery stores, coffee shops, Centennial Hills Hospital, and the
              690-acre Floyd Lamb Park. The 215 Beltway connects residents to the Las Vegas Strip in roughly 30 minutes and
              to Summerlin’s employment centers in under 20 minutes. Ride-share pickup zones are located outside the guard
              gates for smooth guest access.
            </p>
            <p className="text-slate-700">
              Inside the community, wide sidewalks, desert landscaping, and low-profile lighting create a pedestrian-friendly
              environment. Biking paths connect to nearby regional trails, offering fitness and leisure options without
              leaving the neighborhood footprint.
            </p>
          </div>
        </section>

        <section id="lifestyle" className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 border-t border-slate-200">
          <div className="mx-auto max-w-5xl grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-start">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Lifestyle Pillars & Amenities Overview</h2>
              <p className="text-slate-700 mb-6">
                Life in Silverstone Ranch centers on curated amenities: staffed gate houses, resident-only parks, tennis and
                pickleball courts, and walking trails that wrap the former championship golf course. Seasonal programming
                ranges from outdoor movie nights to HOA-sponsored fitness classes. The desert climate is harnessed through
                mature landscaping and water-smart upgrades that keep common areas vibrant year-round.
              </p>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">HOA Services & Support</h3>
              <p className="text-slate-700 mb-4">
                CAMCO Management oversees the master association alongside several sub-associations. Services include access
                control, landscape maintenance of arterial streets, event coordination, and capital reserve planning. The
                HOA recently modernized digital portals for dues payment, architectural submissions, and guard gate visitor
                management—streamlining the homeowner experience.
              </p>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Health & Wellness Nearby</h3>
              <p className="text-slate-700">
                Centennial Hills Hospital, VA clinics, and specialty medical practices operate within a five-mile radius.
                Residents also take advantage of the Centennial Hills YMCA, Vistas Park trail system, and private fitness
                studios sprinkled across the retail centers surrounding the community.
              </p>
            </div>
            <aside className="rounded-2xl border border-blue-100 bg-white shadow-lg p-6">
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">Plan Your On-Site Tour</h3>
              <p className="text-sm text-slate-700 mb-4">
                Request a guided tour with Dr. Jan Duffy to preview amenities, review HOA documents, and understand future
                development around Silverstone Ranch. Tours include curated stops such as the neighborhood parks, clubhouse
                amenities, and upcoming commercial additions to the Centennial Hills corridor.
              </p>
              <div className="flex flex-col gap-3">
                <Link
                  href="/book-tour"
                  className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-blue-700 transition"
                >
                  Schedule a Community Tour
                </Link>
                <Link
                  href="/request-info"
                  className="inline-flex items-center justify-center rounded-lg border border-blue-600 px-4 py-2 text-sm font-semibold text-blue-600 hover:bg-blue-50 transition"
                >
                  Download the Amenity Map
                </Link>
              </div>
            </aside>
          </div>
        </section>

        <section id="market" className="py-16 px-4 sm:px-6 lg:px-8 bg-white border-t border-slate-200">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Market Insights & Pricing Dynamics</h2>
            <p className="text-slate-700 mb-6">
              As of June 2026, Silverstone Ranch remains a competitive micro-market. Inventory tightened 12% from the
              previous quarter, while buyer demand outpaced active listings thanks to interstate relocations, medical
              professionals stationed at nearby facilities, and Las Vegas locals seeking guard-gated security. Properties
              that present turnkey finishes and well-managed outdoor spaces often attract multiple offers within a week.
            </p>
            <h3 className="text-xl font-semibold text-slate-900 mb-3">Key Metrics (June 2026)</h3>
            <ul className="grid sm:grid-cols-2 gap-4 text-sm text-slate-700 mb-6">
              <li className="rounded-xl bg-slate-50/80 border border-slate-200 p-4">
                <span className="block text-xs uppercase tracking-wide text-blue-600 font-semibold mb-1">Median Sale Price</span>
                $685,000 · Renovated 4-bedroom homes lead market activity.
              </li>
              <li className="rounded-xl bg-slate-50/80 border border-slate-200 p-4">
                <span className="block text-xs uppercase tracking-wide text-blue-600 font-semibold mb-1">Average Days on Market</span>
                13 days · Sellers who stage and price to comps outpace the metro average by 9 days.
              </li>
              <li className="rounded-xl bg-slate-50/80 border border-slate-200 p-4">
                <span className="block text-xs uppercase tracking-wide text-blue-600 font-semibold mb-1">List-to-Sale Ratio</span>
                101.8% · Buyers often include appraisal gap coverage or credit flexibility to remain competitive.
              </li>
              <li className="rounded-xl bg-slate-50/80 border border-slate-200 p-4">
                <span className="block text-xs uppercase tracking-wide text-blue-600 font-semibold mb-1">Active Listings</span>
                18 homes · Balanced mix of single-story and two-story residences across sub-associations.
              </li>
            </ul>
            <p className="text-slate-700 mb-6">
              Dr. Jan Duffy maintains a proprietary market model that layers Silverstone-specific comps, golf course view
              adjustments, and environmental considerations. Buyers receive tailored price bands before touring; sellers get
              staging checklists, vendor introductions, and pricing scenarios for various listing windows.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/market-insights"
                className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-blue-700 transition"
              >
                View Detailed Market Report
              </Link>
              <Link
                href="/home-valuation"
                className="inline-flex items-center justify-center rounded-lg border border-blue-600 px-4 py-2 text-sm font-semibold text-blue-600 hover:bg-blue-50 transition"
              >
                Request Custom Valuation
              </Link>
            </div>
          </div>
        </section>

        <section id="schools" className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 border-t border-slate-200">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Schools & Education Pathways</h2>
            <p className="text-slate-700 mb-6">
              Families gravitate to Silverstone Ranch for access to highly rated Clark County School District campuses and a
              growing roster of charter and private schools. O’Roarke Elementary, Cadwallader Middle School, and Arbor View
              High School anchor the public pathway. GreatSchools ratings range from 7/10 to 8/10, with concentrated STEM,
              arts, and athletics programs supporting student outcomes.
            </p>
            <p className="text-slate-700 mb-6">
              Specialized charter options include Somerset Academy Sky Pointe and Doral Academy Red Rock, each within a
              short drive. Private education seekers often consider The Meadows School or Faith Lutheran, located roughly
              20 minutes away in Summerlin.
            </p>
            <div className="rounded-2xl border border-blue-100 bg-white shadow-sm p-6">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Planning Your Education Strategy</h3>
              <ul className="space-y-3 text-sm text-slate-700">
                <li>Zoning can change yearly—verify attendance boundaries with CCSD’s zoning office at (702) 799-6430.</li>
                <li>Enrollment packets for charter and magnet programs often open in January; plan ahead to secure spots.</li>
                <li>Dr. Jan Duffy curates school tour itineraries and introduces relocation clients to parent networks.</li>
              </ul>
              <Link
                href="/schools"
                className="mt-4 inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-700"
              >
                Explore the full school guide →
              </Link>
            </div>
          </div>
        </section>

        <section id="environment" className="py-16 px-4 sm:px-6 lg:px-8 bg-white border-t border-slate-200">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Environmental Planning & Risk Readiness</h2>
            <p className="text-slate-700 mb-6">
              Silverstone Ranch homeowners plan for desert climate realities—rising summer heat, monsoon bursts, and seasonal
              wind events. Recent resilience upgrades include high-SEER HVAC systems, smart thermostats, xeriscape yard
              conversions, and reinforced roofing materials. The community’s Architectural Review Committee has streamlined
              approvals for solar, shade structures, and drought-tolerant landscaping that align with the master aesthetic.
            </p>
            <p className="text-slate-700">
              Review the environmental risk guide to understand 30-year projections, mitigation checklists, and vendor
              partners recommended by Dr. Jan Duffy. Combining forward-looking planning with HOA compliance keeps operating
              costs predictable and safeguards property values.
            </p>
            <Link
              href="/environmental-risk"
              className="mt-6 inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-700"
            >
              Read the environmental readiness playbook →
            </Link>
          </div>
        </section>

        <section id="neighborhoods" className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 border-t border-slate-200">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Explore Silverstone Neighborhoods</h2>
            <p className="text-slate-700 mb-8">
              Silverstone Ranch is composed of distinct enclaves, each offering a unique blend of floor plans, HOA services,
              and landscape treatments. Use the neighborhood spotlights below to evaluate pricing, lot sizes, and lifestyle
              features before scheduling private showings.
            </p>
            <div className="grid gap-6 lg:grid-cols-2">
              {neighborhoodLinks.map((neighborhood) => (
                <Link
                  key={neighborhood.href}
                  href={neighborhood.href}
                  className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                >
                  <h3 className="text-xl font-semibold text-slate-900 group-hover:text-blue-700 transition mb-2">
                    {neighborhood.name}
                  </h3>
                  <p className="text-sm text-slate-700 mb-3">{neighborhood.description}</p>
                  <span className="text-sm font-semibold text-blue-600 group-hover:text-blue-700">View guide →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section id="resources" className="py-16 px-4 sm:px-6 lg:px-8 bg-white border-t border-slate-200">
          <div className="mx-auto max-w-5xl grid gap-12 lg:grid-cols-[1.2fr_0.8fr] items-start">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Deep Dive Resources & Next Steps</h2>
              <p className="text-slate-700 mb-6">
                Continue exploring Silverstone Ranch with handpicked guides curated for June 2026. Each resource provides
                keyword-rich, reader-friendly insights tailored for relocation clients, investors, and current residents
                evaluating their next move.
              </p>
              <div className="grid gap-4">
                {deepDiveLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="group rounded-2xl border border-slate-200 bg-slate-50/80 p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                  >
                    <h3 className="text-lg font-semibold text-slate-900 group-hover:text-blue-700 transition mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-700 leading-relaxed">{item.description}</p>
                    <span className="mt-3 inline-flex items-center text-sm font-semibold text-blue-600 group-hover:text-blue-700">
                      Read more →
                    </span>
                  </Link>
                ))}
              </div>
            </div>
            <aside className="rounded-2xl border border-blue-100 bg-white shadow-lg p-6">
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">Partner with Dr. Jan Duffy</h3>
              <p className="text-sm text-slate-700 mb-4">
                Receive customized Silverstone Ranch analyses, relocation checklists, lender introductions, and private
                showing coordination. Dr. Duffy’s concierge team navigates HOA compliance, disclosure packages, and contract
                negotiations so you can focus on selecting the right property.
              </p>
              <div className="flex flex-col gap-3">
                <Link
                  href="/request-info"
                  className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-blue-700 transition"
                >
                  Request Your Strategy Session
                </Link>
                <Link
                  href="/buyers-checklist"
                  className="inline-flex items-center justify-center rounded-lg border border-blue-600 px-4 py-2 text-sm font-semibold text-blue-600 hover:bg-blue-50 transition"
                >
                  Download the Buyer Checklist
                </Link>
                <Link
                  href="/book-tour"
                  className="inline-flex items-center justify-center rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100 transition"
                >
                  Schedule a Community Tour
                </Link>
              </div>
            </aside>
          </div>
        </section>
      </main>
    </div>
  )
}
