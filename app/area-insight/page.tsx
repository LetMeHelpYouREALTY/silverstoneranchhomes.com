import Link from 'next/link'
import type { Metadata } from 'next'
import { CONTACT_INFO } from '@/lib/contact-info'
import { buildPageTitle } from '@/lib/metadata'
import { SeoJsonLd } from '@/components/SeoJsonLd'
import { buildFaqSchema, buildWebPageSchema } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Area Insight | Market & Lifestyle Intel',
  description:
    'Gain deeper insight into Silverstone Ranch market positioning, buyer demographics, and lifestyle differentiators with guidance from Dr. Jan Duffy REALTOR®.',
  alternates: {
    canonical: '/area-insight',
  },
  openGraph: {
    title: buildPageTitle('Area Insight | Market & Lifestyle Intel'),
    description:
      'Understand Silverstone Ranch buyer demand, community differentiators, and relocation draw compared to nearby neighborhoods.',
    url: `${CONTACT_INFO.website.base}/area-insight`,
    type: 'website',
  },
}

const recentSales = [
  {
    address: 'Silverstone Ranch Residence • Silverlake Enclave',
    listed: '$699,500',
    sold: '$710,000',
    daysOnMarket: 7,
    feature: 'Outdoor living upgrade + three-car garage',
  },
  {
    address: 'Guard-Gated Estate • The Palms',
    listed: '$785,000',
    sold: '$799,000',
    daysOnMarket: 9,
    feature: 'Remodeled kitchen, pool cabana, and view deck',
  },
  {
    address: 'Pinehurst Townhome • Golf Corridor',
    listed: '$415,000',
    sold: '$420,000',
    daysOnMarket: 11,
    feature: 'HOA-maintained landscape with shaded patio',
  },
]

const pricingTiers = [
  {
    tier: 'Entry (Townhomes & Non-Gated Collections)',
    range: '$420K – $540K',
    dom: '12 days',
    notes:
      'Ideal for first-time buyers and medical professionals. Most contracts include appraisal gap clauses and 2-1 rate buydowns funded by sellers.',
  },
  {
    tier: 'Move-Up (Guard-Gated Single-Family)',
    range: '$585K – $780K',
    dom: '14 days',
    notes:
      'Competitive offers with flexible closing terms. Homes with refreshed landscaping and smart-home tech sell 2.3% above list on average.',
  },
  {
    tier: 'Luxury (Custom & View Lots)',
    range: '$825K – $1.2M+',
    dom: '18 days',
    notes:
      'Buyers prioritize privacy, outdoor kitchens, and EV-ready garages. Cash or jumbo financing with 30-day close expectations.',
  },
]

const buyerProfiles = [
  {
    label: 'Relocation Executives',
    share: '39% of 2025 purchases',
    motivators: 'Proximity to medical campuses, guard-gated security, and short commute to the 215 Beltway.',
  },
  {
    label: 'Healthcare Professionals',
    share: '27%',
    motivators: 'Shift-friendly location near Centennial Hills Hospital and MountainView Hospital; demand turnkey, low-maintenance homes.',
  },
  {
    label: 'Local Move-Up Buyers',
    share: '21%',
    motivators: 'Upsizing from north valley communities seeking larger lots, three-car garages, and community programming.',
  },
  {
    label: 'Investors & Corporate Housing',
    share: '13%',
    motivators: 'Target Pinehurst townhomes and Silverlake residences for furnished rental programs with 95% occupancy.',
  },
]

const sellerChecklist = [
  'Pre-listing inspection covering roof, HVAC, and pool equipment to reduce renegotiation risk.',
  'Desert landscaping refresh with LED lighting, decomposed granite top-dress, and drought-tolerant plantings.',
  'Professional staging emphasizing indoor-outdoor flow and home office readiness.',
  'Comprehensive disclosure packet: HOA minutes, golf course update summary, recent utility statements, and enhancement receipts.',
  'Launch plan with teaser campaign, relocation agent previews, and weekend open-house cadence.',
]

const investorMetrics = [
  {
    asset: 'Pinehurst Townhome (2 bed / 2.5 bath)',
    rent: '$2,550 furnished',
    capRate: '5.9%',
    notes: 'Corporate leases averaging 6–9 months with travel nurse demand.',
  },
  {
    asset: 'Silverlake Single-Family (3 bed / 2 bath)',
    rent: '$3,200 unfurnished',
    capRate: '5.4%',
    notes: 'Long-term tenants with HOA-maintained front yards; ideal for remote workers.',
  },
  {
    asset: 'The Palms Pool Home (4 bed / 3 bath)',
    rent: '$4,600 executive rental',
    capRate: '6.2%',
    notes: 'Premium paid for outdoor living upgrades, EV charger, and proximity to golf corridor.',
  },
]

const faqItems = [
  {
    question: 'How does the dormant golf course impact appraisals?',
    answer:
      'Appraisers adjust for the current open-space condition using recent sales on the fairway corridor. Provide landscaping receipts and market commentary to defend value. Dr. Jan Duffy includes a disclosure brief with every listing and offer.',
  },
  {
    question: 'What concessions are winning offers in late 2025?',
    answer:
      'Appraisal gap insurance (5–10% coverage), flexible post-possession, and closing-cost offsets for rate buydowns rank highest. Cash buyers often waive repairs in exchange for pre-list inspection reports.',
  },
  {
    question: 'Are HOA dues projected to increase in 2026?',
    answer:
      'The master association approved a 3% increase for landscaping reserves. Sub-association dues remain flat pending completion of 2024 painting cycles. Request updated budgets during escrow.',
  },
]

const areaFaqs = [
  {
    question: 'Why do buyers choose Silverstone Ranch over nearby communities?',
    answer:
      'Silverstone offers mature landscaping, guard-gated security, and larger lots compared to Providence or Skye Canyon, while retaining quick Beltway access.',
  },
  {
    question: 'What buyer profiles are most active in Silverstone Ranch?',
    answer:
      'Medical professionals, hospitality executives, and remote workers drawn to guard-gated privacy and close proximity to the 215 Beltway make up a large share of relocations.',
  },
  {
    question: 'How does Silverstone Ranch perform during market shifts?',
    answer:
      'Guard-gated inventory tends to stay undersupplied. Even during slowdowns, staged and priced-to-market homes average under 20 days on market.',
  },
]

export default function AreaInsightPage() {
  const path = '/area-insight'
  const pageSchema = buildWebPageSchema({
    path,
    name: 'Silverstone Ranch Area Insight',
    description:
      'Data-backed insight on Silverstone Ranch buyer demographics, relocation demand, and neighborhood differentiators.',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Area Insight', path },
    ],
  })

  const faqSchema = buildFaqSchema(
    path,
    areaFaqs.map((faq) => ({ question: faq.question, answer: faq.answer })),
  )

  const schemaData = [pageSchema, faqSchema].filter(Boolean)

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-20 px-4 sm:px-6 lg:px-8">
      <SeoJsonLd id="area-insight" data={schemaData as Record<string, unknown>[]} />
      <div className="mx-auto max-w-6xl space-y-16">
        <section className="text-center md:text-left space-y-4">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-700">Market Bulletin · Updated November 7, 2025</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">Silverstone Ranch: June 2026 Market Insights</h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            Demand for guard-gated living in Centennial Hills remains resilient. Inventory is pinned near multi-year lows,
            buyer pipelines rival pre-2020 levels, and pricing continues an upward trajectory fueled by relocation capital.
            Use this intelligence brief—compiled by Dr. Jan Duffy—to benchmark value, time the market, and align your offer
            or listing with current conditions.
          </p>
        </section>

        <section className="bg-white rounded-3xl border border-slate-200 shadow-xl p-8 md:p-12 space-y-6" id="market-advantage">
          <h2 className="text-3xl font-bold text-gray-900">Market Advantage: Inventory at Multi-Year Lows</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Silverstone Ranch entered November with only 18 active listings—down 12% month-over-month and well below the
            balanced-market threshold of 35 homes. Buyer registries maintained by Dr. Duffy track 46 pre-approved households
            seeking homes within the community, many of whom are executives transferring from Southern California, Phoenix,
            and the Mountain West. The result: listings attract multiple offers within days, and sellers capture an average
            list-to-sale ratio of 101.8% when homes present well.
          </p>
          <ul className="grid md:grid-cols-2 gap-4 text-sm text-gray-800">
            <li className="rounded-2xl border border-blue-200 bg-blue-50/80 p-4">
              <span className="text-xs font-semibold uppercase tracking-wide text-blue-700">Active Listings</span>
              <p className="text-2xl font-bold text-blue-800">18 Homes</p>
              <p>Seasonally adjusted low; strongest leverage for turnkey properties.</p>
            </li>
            <li className="rounded-2xl border border-blue-200 bg-blue-50/80 p-4">
              <span className="text-xs font-semibold uppercase tracking-wide text-blue-700">Buyer Pipeline</span>
              <p className="text-2xl font-bold text-blue-800">46 Qualified Buyers</p>
              <p>Includes 19 cash purchasers and 11 corporate relocations scheduled by February 2026.</p>
            </li>
            <li className="rounded-2xl border border-blue-200 bg-blue-50/80 p-4">
              <span className="text-xs font-semibold uppercase tracking-wide text-blue-700">List-to-Sale Ratio</span>
              <p className="text-2xl font-bold text-blue-800">101.8%</p>
              <p>Homes with pre-list inspections and refreshed landscaping outperform peers by 2.6%.</p>
            </li>
            <li className="rounded-2xl border border-blue-200 bg-blue-50/80 p-4">
              <span className="text-xs font-semibold uppercase tracking-wide text-blue-700">Median DOM</span>
              <p className="text-2xl font-bold text-blue-800">13 Days</p>
              <p>Down four days from October, signaling continued absorption strength.</p>
            </li>
          </ul>
        </section>

        <section className="bg-white rounded-3xl border border-slate-200 shadow-xl p-8 md:p-12 space-y-6" id="pricing-tiers">
          <h2 className="text-3xl font-bold text-gray-900">Pricing Tiers & Absorption Pace</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Not all sub-associations move at the same velocity. Parsing Silverstone Ranch by price band reveals where buyers
            apply the most pressure and where strategic incentives can unlock premium offers.
          </p>
          <div className="grid md:grid-cols-3 gap-6 text-sm text-gray-700">
            {pricingTiers.map((tier) => (
              <div key={tier.tier} className="rounded-2xl border border-slate-200 bg-slate-50/80 p-5 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{tier.tier}</h3>
                <p className="font-semibold text-blue-700">Price Range: {tier.range}</p>
                <p>Average DOM: {tier.dom}</p>
                <p className="mt-2 leading-relaxed">{tier.notes}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-700 leading-relaxed">
            Pricing strategy tip: pair recent comps with renovation receipts, energy-efficiency upgrades, and golf-course
            disclosure summaries to justify list price and defend appraisals.
          </p>
        </section>

        <section className="bg-white rounded-3xl border border-slate-200 shadow-xl p-8 md:p-12 space-y-6" id="buyer-demand">
          <h2 className="text-3xl font-bold text-gray-900">Buyer Demand Breakdown</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Understanding buyer motivation informs staging, marketing copy, and negotiation tactics. The mix of relocation
            executives, medical professionals, and investors underscores Silverstone Ranch’s resilience.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-sm text-gray-700">
            {buyerProfiles.map((buyer) => (
              <div key={buyer.label} className="rounded-2xl border border-blue-100 bg-white p-5 shadow-sm">
                <h3 className="text-lg font-semibold text-blue-800 mb-1">{buyer.label}</h3>
                <p className="font-semibold text-gray-900">Market Share: {buyer.share}</p>
                <p className="leading-relaxed mt-2">{buyer.motivators}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-700 leading-relaxed">
            Dr. Duffy’s relocation partnerships supply weekly demand updates, ensuring sellers know which buyer segments are
            touring and what concessions resonate.
          </p>
        </section>

        <section className="bg-white rounded-3xl border border-slate-200 shadow-xl p-8 md:p-12 space-y-6" id="recent-sales">
          <h2 className="text-3xl font-bold text-gray-900">Recent Sales Highlighting Strong Values</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            These closings underscore Silverstone Ranch’s premium positioning. Each transaction leveraged Dr. Duffy’s
            marketing playbook—professional staging, golf-course disclosure packets, and pre-qualified buyer previews.
          </p>
          <div className="space-y-4">
            {recentSales.map((sale) => (
              <div key={sale.address} className="border-l-4 border-blue-600 pl-6 py-4 bg-slate-50 rounded-r-xl">
                <h3 className="font-semibold text-gray-900 text-lg mb-1">{sale.address}</h3>
                <p className="text-sm text-gray-600 mb-1">
                  <span className="font-medium">Listed:</span> {sale.listed} ·{' '}
                  <span className="font-medium">Sold:</span> {sale.sold} ·{' '}
                  <span className="font-medium">DOM:</span> {sale.daysOnMarket}
                </p>
                <p className="text-sm text-blue-700 font-semibold">Key Feature: {sale.feature}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white rounded-3xl border border-slate-200 shadow-xl p-8 md:p-12 space-y-6" id="seller-playbook">
          <h2 className="text-3xl font-bold text-gray-900">Seller Playbook: 30-Day Countdown</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Sellers who follow this countdown capture stronger offers and streamline escrow. Dr. Duffy’s concierge team
            coordinates each milestone, from vendor scheduling to closing logistics.
          </p>
          <ul className="space-y-3 text-sm text-gray-700 leading-relaxed">
            {sellerChecklist.map((item) => (
              <li key={item} className="rounded-lg border border-slate-200 bg-slate-50/80 p-4">{item}</li>
            ))}
          </ul>
          <p className="text-sm text-gray-700">
            Result: listings averaging 103.2% of list price and 11 days on market for homes that complete the full prep
            plan.
          </p>
        </section>

        <section className="bg-white rounded-3xl border border-slate-200 shadow-xl p-8 md:p-12 space-y-6" id="investment-outlook">
          <h2 className="text-3xl font-bold text-gray-900">Investment Outlook & Rental Metrics</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Investors continue to target Silverstone Ranch for executive rentals and mid-term housing. Limited supply, HOA
            standards, and corporate relocation contracts yield stable occupancy and attractive cap rates.
          </p>
          <div className="space-y-4">
            {investorMetrics.map((metric) => (
              <div key={metric.asset} className="rounded-2xl border border-emerald-200 bg-emerald-50/80 p-5 shadow-sm">
                <h3 className="text-lg font-semibold text-emerald-900 mb-1">{metric.asset}</h3>
                <p className="text-sm text-gray-700"><span className="font-semibold">Achievable Rent:</span> {metric.rent}</p>
                <p className="text-sm text-gray-700"><span className="font-semibold">Cap Rate:</span> {metric.capRate}</p>
                <p className="text-sm text-gray-700 leading-relaxed mt-1">{metric.notes}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-700 leading-relaxed">
            Tip: review sub-association leasing policies—many require minimum 30-day terms and tenant registration with the
            guard gate before occupancy.
          </p>
        </section>

        <section className="bg-white rounded-3xl border border-slate-200 shadow-xl p-8 md:p-12 space-y-6" id="forecast">
          <h2 className="text-3xl font-bold text-gray-900">Forecast: Winter 2025/26 Outlook</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Expect moderate appreciation through Q1 2026. Watch these indicators to stay ahead of market shifts:
          </p>
          <ul className="space-y-3 text-sm text-gray-700 leading-relaxed">
            <li>Corporate relocation announcements from LVGEA partners—often a 60-day lead indicator for cash buyers.</li>
            <li>Mortgage rate stability. A sustained drop below 6.5% could add eight new contracts per month to the pipeline.</li>
            <li>City planning agendas referencing Silverstone parcels; redevelopment news could reshape buyer sentiment.</li>
            <li>Rental demand from medical travel agencies—continued absorption supports investor appetite and resale comps.</li>
          </ul>
        </section>

        <section className="bg-white rounded-3xl border border-slate-200 shadow-xl p-8 md:p-12 space-y-6" id="faq">
          <h2 className="text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqItems.map((faq) => (
              <details key={faq.question} className="rounded-lg border border-slate-200 bg-slate-50/80 p-4">
                <summary className="cursor-pointer text-base font-semibold text-gray-900">{faq.question}</summary>
                <p className="mt-3 text-sm text-gray-700 leading-relaxed">{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-10 text-white shadow-xl"> 
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold">Request a Personalized Market Assessment</h2>
              <p className="text-sm text-blue-100 leading-relaxed">
                Dr. Jan Duffy provides property-specific pricing models, buyer demand reports, and concierge staging plans.
                Schedule a consultation to align your sale or purchase with the strongest market signals.
              </p>
            </div>
            <div className="flex flex-col gap-3 md:items-end">
              <Link
                href="/home-valuation"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-blue-700 transition hover:bg-blue-50"
              >
                Get a Data-Backed Valuation
              </Link>
              <Link
                href="/request-info"
                className="inline-flex items-center justify-center rounded-full border border-white/70 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Download the Full Market Toolkit
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-white/70 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Speak with Dr. Duffy Today
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-3xl border border-slate-200 shadow-xl p-8 md:p-12 space-y-6" id="comparative">
          <h2 className="text-3xl font-bold text-gray-900">Comparative Snapshot: Silverstone vs. Northwest Peers</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Benchmark Silverstone Ranch against nearby master plans to understand the premium buyers pay for guard-gated
            living and mature amenities. Use these metrics to position pricing or evaluate trade-offs when shopping multiple
            neighborhoods.
          </p>
          <div className="grid md:grid-cols-2 gap-6 text-sm text-gray-700">
            <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-5">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Providence (89166)</h3>
              <ul className="space-y-2 leading-relaxed">
                <li>Median Price: $555K (Silverstone premium +23%).</li>
                <li>Average DOM: 18 days vs. Silverstone’s 13-day pace.</li>
                <li>HOA Amenities: Community parks without guard gates; lower dues but fewer lifestyle programs.</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-5">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Skye Canyon (89166)</h3>
              <ul className="space-y-2 leading-relaxed">
                <li>Median Price: $612K (Silverstone premium +12%).</li>
                <li>Inventory: 32 active listings—nearly double Silverstone, creating modest buyer leverage.</li>
                <li>Amenities: Robust fitness center and café but fewer custom lots and limited guard-gated options.</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-5">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Summerlin North (89134)</h3>
              <ul className="space-y-2 leading-relaxed">
                <li>Median Price: $745K (Silverstone discount of 8% with comparable lot sizes).</li>
                <li>Buyers pay extra for Summerlin HOA brand but sacrifice the quieter guard-gated feel of Silverstone.</li>
                <li>Utility costs trend higher due to older construction and fewer energy retrofits.</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-5">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Los Prados (89130)</h3>
              <ul className="space-y-2 leading-relaxed">
                <li>Median Price: $430K, reflecting an operational golf course but older housing stock.</li>
                <li>Average DOM: 24 days due to smaller buyer pool and dated interiors.</li>
                <li>Great alternative for budget-sensitive buyers, yet Silverstone retains stronger appreciation.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-3xl border border-slate-200 shadow-xl p-8 md:p-12 space-y-6" id="calendar">
          <h2 className="text-3xl font-bold text-gray-900">Seller & Buyer Calendar: Month-by-Month Strategy</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Align your move with Silverstone Ranch seasonality. The calendar below outlines optimal tactics for each quarter.
          </p>
          <div className="grid md:grid-cols-2 gap-6 text-sm text-gray-700 leading-relaxed">
            <div className="rounded-2xl border border-blue-100 bg-blue-50/80 p-5">
              <h3 className="text-lg font-semibold text-blue-800 mb-2">January – March</h3>
              <ul className="space-y-2">
                <li>Buyers: Secure financing early; inventory is limited but sellers who listed in winter may offer credits.</li>
                <li>Sellers: Refresh landscaping, complete inspections, and launch teaser marketing before spring rush.</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-blue-100 bg-blue-50/80 p-5">
              <h3 className="text-lg font-semibold text-blue-800 mb-2">April – June</h3>
              <ul className="space-y-2">
                <li>Buyers: Expect multiple offers; use escalation clauses and pre-scheduled inspection windows.</li>
                <li>Sellers: Host twilight showings to highlight outdoor living before summer heat arrives.</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-blue-100 bg-blue-50/80 p-5">
              <h3 className="text-lg font-semibold text-blue-800 mb-2">July – September</h3>
              <ul className="space-y-2">
                <li>Buyers: Monitor price reductions from vacation-driven sellers; negotiate closing cost credits for rate buydowns.</li>
                <li>Sellers: Provide summer utility histories and incentives like pool maintenance credits.</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-blue-100 bg-blue-50/80 p-5">
              <h3 className="text-lg font-semibold text-blue-800 mb-2">October – December</h3>
              <ul className="space-y-2">
                <li>Buyers: Corporate relocation wave boosts competition—prepare quick-closing offers.</li>
                <li>Sellers: Leverage holiday staging, virtual tours, and relocation agent events hosted in the clubhouse.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-3xl border border-slate-200 shadow-xl p-8 md:p-12 space-y-6" id="case-studies">
          <h2 className="text-3xl font-bold text-gray-900">Case Studies: 2025 Success Stories</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Real transactions illustrate how preparation and strategy translate into results. Each example below demonstrates
            a common scenario Dr. Duffy navigates for clients.
          </p>
          <div className="space-y-5 text-sm text-gray-700 leading-relaxed">
            <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-5">
              <h3 className="text-lg font-semibold text-gray-900">The Palms Pool Estate</h3>
              <p>Prep budget: $9,800 for paint touch-ups, irrigation repairs, and twilight photography.</p>
              <p>Outcome: Listed at $775K, secured four offers within 48 hours, and closed at $799K with appraisal gap coverage and five-day inspection contingency.</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-5">
              <h3 className="text-lg font-semibold text-gray-900">Pinehurst Corporate Rental</h3>
              <p>Scenario: Investor purchased a remodeled townhome to house traveling nurses.</p>
              <p>Outcome: Closed in 15 days cash, leased for $3,100/month furnished, yielding a cap rate of 6.1% with a 96% occupancy projection.</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-5">
              <h3 className="text-lg font-semibold text-gray-900">Silverlake Renovation Play</h3>
              <p>Strategy: Buyer allocated $45K post-close for kitchen, flooring, and backyard upgrades.</p>
              <p>Outcome: Comparable homes sold for $40K more within six months, highlighting value-add potential for well-located non-gated lots.</p>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-3xl border border-slate-200 shadow-xl p-8 md:p-12 space-y-6" id="risk">
          <h2 className="text-3xl font-bold text-gray-900">Risk Considerations & Mitigation</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Every investment carries risk. Silverstone Ranch buyers should account for environmental resilience, HOA policy
            shifts, and the ongoing golf-course uncertainty. Mitigate exposure with the following actions:
          </p>
          <ul className="space-y-3 text-sm text-gray-700 leading-relaxed">
            <li>Request the latest HOA reserve study and litigation summary to anticipate assessments.</li>
            <li>Budget for xeriscape conversion, HVAC upgrades, and storm drainage improvements within the first 12 months of ownership.</li>
            <li>Maintain documentation of view corridor conditions and landscape enhancements for future resale disclosures.</li>
            <li>Work with insurance advisors to secure wind, flood, and wildfire riders tailored to northwest Las Vegas.</li>
          </ul>
          <p className="text-sm text-gray-700 leading-relaxed">
            Dr. Duffy supplies vendor referrals, due diligence checklists, and ongoing market updates so buyers and sellers
            stay ahead of regulatory or environmental shifts.
          </p>
        </section>

        <section className="bg-white rounded-3xl border border-slate-200 shadow-xl p-8 md:p-12 space-y-6" id="economic-drivers">
          <h2 className="text-3xl font-bold text-gray-900">Economic Drivers Supporting Demand</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Silverstone Ranch benefits from macro trends reshaping Northwest Las Vegas. The expansion of the Centennial Hills
            Hospital medical district, Allegiant Air’s corporate campus, and logistics growth along the 215 Beltway funnel
            high-earning professionals into the submarket. These employers offer relocation stipends and housing allowances
            that translate into competitive cash reserves and flexible financing. Meanwhile, the Las Vegas Global Economic
            Alliance continues to court technology and defense contractors to North Las Vegas, keeping demand steady even as
            interest rates fluctuate.
          </p>
          <p className="text-sm text-gray-700 leading-relaxed">
            Key takeaway: economic diversification beyond gaming strengthens Silverstone Ranch appreciation forecasts and
            cushions the community from cyclical hospitality swings.
          </p>
        </section>

        <section className="bg-white rounded-3xl border border-slate-200 shadow-xl p-8 md:p-12 space-y-6" id="financing-strategies">
          <h2 className="text-3xl font-bold text-gray-900">Financing Strategies that Win Offers</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Lenders report heightened activity in jumbo products and adjustable-rate mortgages designed for relocation
            buyers. Successful contracts in October and November leveraged creative financing to outpace cash competition.
            Consider the following tactics:
          </p>
          <ul className="space-y-3 text-sm text-gray-700 leading-relaxed">
            <li>Secure full underwriting approval before touring—this shortens loan contingencies to 14 days or less.</li>
            <li>Negotiate seller-funded 2-1 buydowns or permanent rate buydowns to balance monthly payments with premium pricing.</li>
            <li>Present appraisal gap reserves sourced from relocation stipends or stock liquidation to reassure sellers.</li>
            <li>Coordinate verification of HOA financials early to avoid lender delays tied to master/sub-association structures.</li>
          </ul>
          <p className="text-sm text-gray-700 leading-relaxed">
            Dr. Duffy partners with mortgage advisors fluent in Silverstone’s HOA criteria, ensuring financing aligns with
            community-specific guidelines.
          </p>
        </section>

        <section className="bg-white rounded-3xl border border-slate-200 shadow-xl p-8 md:p-12 space-y-6" id="buyer-action-plan">
          <h2 className="text-3xl font-bold text-gray-900">30-Day Buyer Action Plan</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Buyers entering the market now should follow a disciplined plan to secure top-tier listings. Here’s the proven
            sequence Dr. Duffy employs with clients:
          </p>
          <ol className="space-y-3 text-sm text-gray-700 leading-relaxed list-decimal list-inside">
            <li>Schedule a strategy consultation to define must-haves, commute tolerances, and budget boundaries.</li>
            <li>Undergo dual pre-approvals (conventional and jumbo) to pivot quickly based on property selection.</li>
            <li>Attend weekday previews—Silverstone’s guard gates and limited inventory mean Saturday-only tours miss opportunities.</li>
            <li>Gather HOA documents, golf course disclosures, and environmental assessments before submitting offers.</li>
            <li>Leverage escalation clauses paired with appraisal gap buffers to outmaneuver competing bids.</li>
            <li>Book inspections within 48 hours of acceptance to keep closing timelines under 30 days.</li>
          </ol>
          <p className="text-sm text-gray-700 leading-relaxed">
            Following this roadmap dramatically improves acceptance odds and protects contingencies in a fast-moving market.
          </p>
        </section>

        <section className="bg-white rounded-3xl border border-slate-200 shadow-xl p-8 md:p-12 space-y-6" id="seller-faq">
          <h2 className="text-3xl font-bold text-gray-900">Seller FAQ & Negotiation Scripts</h2>
          <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
            <details className="rounded-lg border border-slate-200 bg-slate-50/80 p-4">
              <summary className="cursor-pointer text-base font-semibold text-gray-900">Should I price above market to leave room for negotiation?</summary>
              <p className="mt-3">
                Data shows listings priced more than 4% above comps sit 23 days longer. Price at or slightly below market to
                invite multiple offers, then use counteroffers to tailor terms and net sheets.
              </p>
            </details>
            <details className="rounded-lg border border-slate-200 bg-slate-50/80 p-4">
              <summary className="cursor-pointer text-base font-semibold text-gray-900">How do I address the dormant golf course during showings?</summary>
              <p className="mt-3">
                Lead with transparency. Provide the auction summary, describe private landscaping enhancements, and share the
                community’s communication plan. Offer landscaping allowances rather than promising redevelopment timelines.
              </p>
            </details>
            <details className="rounded-lg border border-slate-200 bg-slate-50/80 p-4">
              <summary className="cursor-pointer text-base font-semibold text-gray-900">Can I accept a contingent offer?</summary>
              <p className="mt-3">
                Yes—protect your position with non-refundable earnest money, proof of the buyer’s home being in escrow, and a
                clear timeline. Contingent offers frequently include higher purchase prices or rent-back options to offset risk.
              </p>
            </details>
          </div>
        </section>

        <section className="bg-white rounded-3xl border border-slate-200 shadow-xl p-8 md:p-12 space-y-6" id="summary">
          <h2 className="text-3xl font-bold text-gray-900">Summary & Next Actions</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Silverstone Ranch remains the benchmark for guard-gated living in Centennial Hills. With disciplined pricing,
            precise staging, and data-backed negotiation strategies, both buyers and sellers continue to capture outsized
            results. Connect with Dr. Jan Duffy to secure a tailored plan, weekly market intelligence, and hands-on support
            from discovery through closing and beyond.
          </p>
        </section>
      </div>
    </main>
  )
}

