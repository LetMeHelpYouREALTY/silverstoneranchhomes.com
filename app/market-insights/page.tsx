import Link from 'next/link'
import type { Metadata } from 'next'
import { CONTACT_INFO } from '@/lib/contact-info'
import { buildPageTitle } from '@/lib/metadata'
import { SeoJsonLd } from '@/components/SeoJsonLd'
import { buildWebPageSchema } from '@/lib/seo'

const path = '/market-insights'
const canonicalUrl = `${CONTACT_INFO.website.base}${path}`

export const metadata: Metadata = {
  title: 'Market Insights | November 2025 Housing Trends',
  description:
    'Review Silverstone Ranch housing trends for November 2025 including median prices, price per square foot, days on market, and buyer vs. seller conditions.',
  keywords: [
    'Silverstone Ranch market report',
    'Silverstone Ranch real estate trends 2025',
    'Centennial Hills housing data',
    'Las Vegas real estate statistics November 2025',
    'Silverstone Ranch days on market',
  ],
  alternates: {
    canonical: path,
  },
  openGraph: {
    title: buildPageTitle('Market Insights | November 2025 Housing Trends'),
    description:
      'November 2025 Silverstone Ranch real estate report: pricing shifts, buyer demand, inventory trends, and guidance from Dr. Jan Duffy REALTOR®.',
    url: canonicalUrl,
    type: 'article',
  },
}

const primaryMetrics = [
  {
    label: 'Median Sale Price',
    value: '$685,000',
    change: '+5.2% YoY',
    description:
      'Driven by renovated guard-gated homes and relocation buyers prioritizing security and proximity to the 215 beltway.',
  },
  {
    label: 'Price Per Sq. Ft.',
    value: '$284',
    change: '+3.8% YoY',
    description:
      'Tight inventory for single-story floor plans continues to push price per square foot higher across all enclaves.',
  },
  {
    label: 'Average Days on Market',
    value: '13 Days',
    change: '-4 Days MoM',
    description:
      'Well-prepped listings secure offers within two weeks; homes requiring updates average 24 days.',
  },
  {
    label: 'Active Listings',
    value: '18 Homes',
    change: '-12% MoM',
    description:
      'Seasonal slowdown plus limited resale inventory creates urgency for buyers with relocation timelines.',
  },
]

const buyerSellerSignals = [
  {
    title: 'Seller Advantage',
    insight:
      'Negotiable items include closing timeline and appliance packages, but price reductions are rare when homes are staged and priced to November 2025 comps.',
  },
  {
    title: 'Buyer Leverage',
    insight:
      'Use golf course status disclosures, HOA landscaping requirements, and appraisal data to request credits for landscape enhancements or closing costs.',
  },
  {
    title: 'Financing Trends',
    insight:
      'Jumbo loans and cash offers account for 48% of closed sales. Rate buydowns are increasingly used to compete with cash contingencies.',
  },
]

const recentSales = [
  {
    address: 'Silverlake Gated Residence',
    listPrice: '$699,500',
    salePrice: '$710,000',
    daysOnMarket: 7,
    highlight: 'Outdoor living upgrade plus three-car garage',
  },
  {
    address: 'The Palms Guard-Gated Estate',
    listPrice: '$785,000',
    salePrice: '$799,000',
    daysOnMarket: 9,
    highlight: 'Remodeled kitchen and pool cabana',
  },
  {
    address: 'Pinehurst Townhome',
    listPrice: '$415,000',
    salePrice: '$420,000',
    daysOnMarket: 11,
    highlight: 'Golf corridor views with HOA-maintained landscape',
  },
]

const zipComparisons = [
  { area: 'Silverstone Ranch (89131)', medianPrice: '$685K', dom: '13', pricePerSqFt: '$284' },
  { area: 'Providence (89166)', medianPrice: '$555K', dom: '18', pricePerSqFt: '$252' },
  { area: 'Skye Canyon (89166)', medianPrice: '$612K', dom: '21', pricePerSqFt: '$265' },
  { area: 'Summerlin North (89134)', medianPrice: '$745K', dom: '16', pricePerSqFt: '$301' },
]

const buyerPlaybook = [
  'Secure full underwriting or reputable cash reserves before touring—competitive offers surface within days.',
  'Budget for appraisal gap coverage, rate buydowns, or credit flex to rival cash-backed buyers relocating from higher-priced metros.',
  'Target renovated homes or plan for $30K–$60K refresh budgets to modernize kitchens and outdoor living spaces.',
  'Layer HOA documents, golf course disclosures, and environmental readiness into your decision matrix.',
]

const sellerPlaybook = [
  'Pre-listing inspections and HVAC service records help justify pricing premiums and avoid “as-is” discounts.',
  'Lean into outdoor staging—clean desert hardscape and privacy upgrades resonate with buyers mindful of the dormant fairways.',
  'Launch listing campaigns mid-week, leverage professional video, and consider private showings for relocation clients arriving weekends.',
  'Offer flexible post-possession or lease-back options to attract contingent buyers transitioning from Summerlin or Skye Canyon.',
]

const seasonalTrends = [
  {
    season: 'Winter 2025',
    detail:
      'Lower inventory and motivated tax-year buyers keep prices stable. Highlight energy efficiency upgrades and offer closing credits for rate buydowns.',
  },
  {
    season: 'Spring 2026 Forecast',
    detail:
      'Expect a surge of listings in March-April. Early prep positions sellers to capture pent-up demand, especially for renovated one-story homes.',
  },
  {
    season: 'Summer 2026 Outlook',
    detail:
      'Heat-driven seasonality slows casual tours, but serious buyers leverage relocation stipends. Schedule twilight open houses and maintain lush desert landscaping.',
  },
]

const techImpacts = [
  'Homes with EV charging, solar, or smart irrigation command premiums of $12K–$18K versus non-upgraded peers.',
  'Matterport tours and hosted video walk-throughs reduce days on market by 2.5 days on average—critical for relocation buyers who view remotely.',
  'AI-driven pricing models corroborate Dr. Duffy’s manual comps, providing data points to defend list price and appraisal values.',
]

const offerTactics = [
  'Use escalation clauses with firm ceilings to outpace offers without blindly overpaying.',
  'Include personalized cover letters detailing relocation timeline and financing strength to build rapport.',
  'Request seller-paid 1-year home warranty or landscaping credit in lieu of price reductions.',
]

const sellerMistakes = [
  'Skipping pre-list inspections, leading to renegotiations after the buyer’s due diligence window.',
  'Neglecting outdoor staging; barren patios undermine Silverstone’s lifestyle appeal.',
  'Underestimating the impact of disclosure transparency—buyers walk when golf course status is omitted.',
]

const faqs = [
  {
    question: 'Will the dormant golf course impact my property value?',
    answer:
      'Buyers still pay premiums for guard-gated access, school zoning, and remodeled interiors. However, pricing models separate golf frontage value until redevelopment plans or landscaping enhancements are confirmed. Request Dr. Duffy’s valuation models to price confidently.',
  },
  {
    question: 'Are price reductions expected heading into 2026?',
    answer:
      'Inventory remains constrained and migration from California/Nevada job hubs continues. Expect moderate appreciation with stronger competition for move-in-ready properties and custom lots.',
  },
  {
    question: 'How can I position my offer to win in Silverstone Ranch?',
    answer:
      'Pair strong financing or cash reserves with appraisal gap coverage, flexible closing dates, and clear HOA compliance assurances. Dr. Duffy crafts competitive yet protected offers for every client scenario.',
  },
]

export default function MarketInsightsPage() {
  const pageSchema = buildWebPageSchema({
    path,
    name: 'Silverstone Ranch Market Insights',
    description:
      'Silverstone Ranch monthly housing trends covering pricing, absorption, and buyer demand insights curated by Dr. Jan Duffy REALTOR®.',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Market Insights', path },
    ],
  })

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Silverstone Ranch Real Estate Market Insights - November 2025',
    description:
      'Explore the latest Silverstone Ranch real estate performance metrics, including pricing trends, days on market, buyer demand, and future outlook as of November 2025.',
    author: { '@type': 'Person', name: CONTACT_INFO.agentName },
    publisher: { '@type': 'Organization', name: CONTACT_INFO.businessName, url: CONTACT_INFO.website.base },
    mainEntityOfPage: pageSchema.url,
    datePublished: '2025-11-07',
    dateModified: '2025-11-07',
    url: pageSchema.url,
  }

  const schemaData = [pageSchema, articleSchema]

  return (
    <main className="bg-gradient-to-br from-blue-50 to-white min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <SeoJsonLd id="market-insights" data={schemaData} />
      <div className="mx-auto max-w-6xl space-y-16">
        <section className="text-center md:text-left space-y-6">
          <div className="inline-flex items-center rounded-full border border-blue-200 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-blue-700">
            Market Insights · November 2025
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
            Silverstone Ranch Real Estate Market Trends
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Silverstone Ranch remains a magnet for relocation clients, medical professionals, and long-time Las Vegas
            residents upgrading into guard-gated living. Inventory contracted another twelve percent this quarter while
            pricing held firm above 2024 levels. Use this report to interpret the numbers, uncover leverage points, and
            coordinate next steps with Dr. Jan Duffy.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            The data below reflects closed transactions through November 3, 2025, supplemented by private sales and
            off-market intelligence. Trends are compared against adjacent Centennial Hills neighborhoods to highlight the
            premium that Silverstone Ranch continues to command.
          </p>
        </section>

        <section id="key-metrics" className="space-y-8">
          <h2 className="text-3xl font-bold text-gray-900">Key Performance Metrics</h2>
          <p className="text-sm text-gray-600">
            The headline numbers show a resilient guard-gated community with rapid absorption and disciplined pricing.
            Drill into the details beneath each tile for context.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {primaryMetrics.map((metric) => (
              <div key={metric.label} className="bg-white rounded-2xl border border-blue-100 p-6 shadow-sm">
                <p className="text-xs uppercase tracking-wide text-gray-500 font-semibold mb-2">{metric.label}</p>
                <p className="text-3xl font-bold text-blue-700 mb-1">{metric.value}</p>
                <p className="text-sm font-semibold text-green-600 mb-3">{metric.change}</p>
                <p className="text-sm text-gray-700 leading-relaxed">{metric.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="signals" className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">Signals Behind the Numbers</h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {buyerSellerSignals.map((signal) => (
              <div key={signal.title} className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{signal.title}</h3>
                <p className="text-sm text-gray-700 leading-relaxed">{signal.insight}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="seasonal-trends" className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">Seasonal Trendline & 2026 Outlook</h2>
          <p className="text-sm text-gray-700 leading-relaxed">
            Plan your move around the seasonal rhythms of Silverstone Ranch. Sellers who align listing launches to peak
            demand windows and buyers who anticipate competition secure better outcomes.
          </p>
          <div className="grid md:grid-cols-3 gap-6 text-sm text-gray-700">
            {seasonalTrends.map((trend) => (
              <div key={trend.season} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{trend.season}</h3>
                <p className="leading-relaxed">{trend.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="market-story" className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">What the Market Story Means for You</h2>
          <p className="text-sm text-gray-600">
            High-level metrics tell only part of the story. Layer these qualitative insights into your financial modeling
            and negotiation approach.
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Buyer Playbook</h3>
              <ul className="space-y-2 text-sm text-gray-700 leading-relaxed">
                {buyerPlaybook.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Seller Playbook</h3>
              <ul className="space-y-2 text-sm text-gray-700 leading-relaxed">
                {sellerPlaybook.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
          </div>
          <p className="text-sm text-gray-700">
            Dr. Duffy tailors each playbook to the specific sub-association—The Palms, Tuscany, Pinehurst, or Silverlake—so
            you capitalize on micro-trends and avoid pitfalls unique to each enclave.
          </p>
        </section>

        <section id="offer-tactics" className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">Offer Tactics That Win in Silverstone Ranch</h2>
          <p className="text-sm text-gray-700 leading-relaxed">
            Offers anchored in data and empathy consistently rise to the top. Apply these tactics to stand out in multiple
            offer environments.
          </p>
          <ul className="space-y-3 text-sm text-gray-700 leading-relaxed">
            {offerTactics.map((tactic) => (
              <li key={tactic} className="rounded-lg border border-blue-100 bg-blue-50/80 p-4">{tactic}</li>
            ))}
          </ul>
        </section>

        <section id="recent-sales" className="space-y-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Recent Closings</h2>
              <p className="text-sm text-gray-500">Recorded through November 3, 2025 · Source: MLS + Dr. Duffy private sales</p>
            </div>
            <Link
              href="/request-info"
              className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl"
            >
              Request Comparable Sales Report
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {recentSales.map((sale) => (
              <div key={sale.address} className="bg-blue-50 rounded-2xl border border-blue-100 p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">{sale.address}</h3>
                <p className="text-sm text-gray-600 mb-1"><span className="font-semibold text-gray-900">List:</span> {sale.listPrice}</p>
                <p className="text-sm text-gray-600 mb-1"><span className="font-semibold text-gray-900">Sold:</span> {sale.salePrice}</p>
                <p className="text-sm text-gray-600 mb-3"><span className="font-semibold text-gray-900">DOM:</span> {sale.daysOnMarket}</p>
                <p className="text-sm text-gray-700">{sale.highlight}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-700">
            Ask Dr. Duffy for the accompanying seller narratives and inspection outcomes. Understanding why buyers made
            specific concessions helps you benchmark your own negotiation plan.
          </p>
        </section>

        <section id="comparisons" className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900 text-center">Northwest Las Vegas Comparison Snapshot</h2>
          <p className="text-sm text-gray-600 text-center max-w-3xl mx-auto">
            Silverstone Ranch commands a premium over nearby master plans thanks to guard-gated access and mature
            landscaping. Compare median price, days on market, and price per square foot to understand the delta.
          </p>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Area</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Median Price</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Days on Market</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price / Sq Ft</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {zipComparisons.map((item) => (
                  <tr key={item.area}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.area}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{item.medianPrice}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{item.dom}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{item.pricePerSqFt}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section id="buyer-demographics" className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">Buyer Demographics & Motivation</h2>
          <p className="text-sm text-gray-700 leading-relaxed">
            Nearly 61% of 2025 purchasers held professional or executive roles, often citing proximity to Centennial Hills
            Hospital, MountainView Hospital, and the medical office corridor along Durango. Military families tied to Nellis
            AFB appreciate the security of guard gates and choose Silverstone for its school zoning. A steady subset of
            investors targets Pinehurst townhomes for furnished rentals aimed at traveling nurses; average monthly rents
            reached $2,550 with 95% occupancy between January and October.
          </p>
          <p className="text-sm text-gray-700 leading-relaxed">
            Lifestyle also fuels demand. Residents value the six-acre park, tennis and pickleball courts, and easy access to
            Floyd Lamb Park. Buyers relocating from California frequently comment on the community’s wide streets, mature
            landscaping, and more relaxed HOA oversight compared to coastal master plans.
          </p>
        </section>

        <section id="seller-mistakes" className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">Common Seller Mistakes to Avoid</h2>
          <p className="text-sm text-gray-700 leading-relaxed">
            Avoid stumbling blocks that erode perceived value or slow absorption.
          </p>
          <ul className="space-y-3 text-sm text-gray-700 leading-relaxed">
            {sellerMistakes.map((mistake) => (
              <li key={mistake} className="rounded-lg border border-red-100 bg-red-50/80 p-4">{mistake}</li>
            ))}
          </ul>
        </section>

        <section id="tech-impact" className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">Technology & Smart Home Impact</h2>
          <p className="text-sm text-gray-700 leading-relaxed">
            Tech-forward upgrades and marketing tools influence both demand and appraisal value. Incorporate these elements
            to strengthen negotiation leverage.
          </p>
          <ul className="space-y-3 text-sm text-gray-700 leading-relaxed">
            {techImpacts.map((impact) => (
              <li key={impact} className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">{impact}</li>
            ))}
          </ul>
        </section>

        <section id="forecast" className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">Forecast: Winter 2025/26 Outlook</h2>
          <p className="text-sm text-gray-700 leading-relaxed">
            Expect moderate appreciation through Q1 2026 as relocation pipelines remain strong and Silverstone Ranch’s
            inventory stays limited. Watch these indicators:
          </p>
          <ul className="space-y-3 text-sm text-gray-700">
            <li>Monitor corporate relocation announcements at the Las Vegas Global Economic Alliance—these moves often precede cash buyers.</li>
            <li>Track mortgage rate stabilization. A sustained drop below 6.5% could add five to eight listings worth of demand per month.</li>
            <li>Watch city planning agendas for any golf course filings; development news could shift buyer sentiment quickly.</li>
            <li>Evaluate seasonal listing windows—February through May historically yields the strongest seller results.</li>
          </ul>
          <p className="text-sm text-gray-700 leading-relaxed">
            Rental fundamentals remain healthy. Inventory of long-term rentals is tight, keeping average single-family rents
            around $3,100. Investors seeking cap rates above 6% target townhomes with value-add renovations.
          </p>
        </section>

        <section id="methodology" className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">Methodology & Data Sources</h2>
          <p className="text-sm text-gray-700 leading-relaxed">
            This report synthesizes data from the Greater Las Vegas Association of REALTORS® (GLVAR), private transaction
            records curated by Dr. Jan Duffy, and national mortgage analytics. Median values are rolling three-month
            averages; list-to-sale ratios capture closed transactions only. Pricing deltas are compared to the same period
            in 2024 unless otherwise noted.
          </p>
          <p className="text-sm text-gray-700 leading-relaxed">
            Need a deeper dive? Schedule a one-on-one strategy session to receive spreadsheets segmented by bedroom count,
            view corridor, renovation level, or HOA sub-association.
          </p>
        </section>

        <section id="macro-drivers" className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">Macro Drivers Fueling Silverstone Demand</h2>
          <p className="text-sm text-gray-700 leading-relaxed">
            Centennial Hills benefits from economic diversification beyond the traditional Strip corridor. The expansion of
            the VA Medical Center, Allegiant Air corporate campus, and logistics growth along the 215 Beltway inject
            high-salaried professionals into the submarket. These households arrive with relocation stipends and robust cash
            reserves, often outbidding local move-up buyers. Meanwhile, limited new construction inside guard gates makes
            Silverstone Ranch a scarce asset, reinforcing long-term appreciation.
          </p>
          <p className="text-sm text-gray-700 leading-relaxed">
            Mortgage rate volatility remains the primary headwind. Yet even as rates oscillate near 7%, demand persists
            thanks to cash-rich relocations and jumbo lenders offering buydown incentives. Dr. Duffy’s lender network
            structures 2-1 and 3-2-1 buydowns funded through seller credits, smoothing affordability without sacrificing
            price integrity.
          </p>
        </section>

        <section id="pricing-scenarios" className="space-y-6">
          <h2 className="text-3x font-bold text-gray-900">Pricing Scenarios for 2026 Planning</h2>
          <p className="text-sm text-gray-700 leading-relaxed">
            Use these forward-looking scenarios to model purchase timing or listing strategy going into 2026. Each assumes
            steady employment growth and a modest decline in mortgage rates during the second half of the year.
          </p>
          <div className="grid md:grid-cols-3 gap-6 text-sm text-gray-700 leading-relaxed">
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900">Conservative Case</h3>
              <p>Median price holds at $680K, DOM rises to 17 days, and list-to-sale ratios normalize near 99%.</p>
              <p className="mt-2">Best approach: emphasize value-add projects and consider modest price adjustments if listings surpass 21 days.</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900">Base Case</h3>
              <p>Median price edges to $698K, DOM remains 14 days, and absorption stays strong for renovated homes.</p>
              <p className="mt-2">Best approach: launch listings in March-April with turnkey presentation to capture relocation wave.</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900">Upside Case</h3>
              <p>Rates dip below 6.25%, unlocking sidelined buyers. Median price pushes past $710K, DOM drops to 10 days.</p>
              <p className="mt-2">Best approach: prepare pre-market interest lists, leverage private previews, and expect multiple offers.</p>
            </div>
          </div>
        </section>

        <section id="buyer-calendar" className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">Buyer Calendar: 45-Day Readiness Checklist</h2>
          <p className="text-sm text-gray-700 leading-relaxed">
            Align your purchase timeline with this weekly roadmap to stay competitive without sacrificing due diligence.
          </p>
          <ol className="space-y-3 text-sm text-gray-700 leading-relaxed list-decimal list-inside">
            <li>Week 1: Secure lender pre-approval, review HOA budgets, and identify backup neighborhoods.</li>
            <li>Week 2: Tour priority listings, collect disclosures, and schedule inspections with flexible slots.</li>
            <li>Week 3: Submit offers featuring escalation clauses, appraisal gap reserves, and concise contingencies.</li>
            <li>Week 4: Conduct inspections within 48 hours, negotiate repairs or credits, and order appraisal.</li>
            <li>Week 5: Finalize insurance riders, complete underwriting conditions, and prepare for closing disclosures.</li>
            <li>Week 6: Perform final walkthrough, coordinate utility transfers, and plan move-in logistics with guard gate.</li>
          </ol>
        </section>

        <section id="seller-success" className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">Seller Success Stories</h2>
          <p className="text-sm text-gray-700 leading-relaxed">
            Case studies highlight the power of data-driven strategy and curated presentation.
          </p>
          <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
            <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-5">
              <p className="font-semibold text-gray-900">Twilight Launch Strategy</p>
              <p>Listing prepped with exterior lighting, drone video, and social ad campaign. Sold $18K above list with five-day close.</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-5">
              <p className="font-semibold text-gray-900">Hybrid Open House & Virtual Tour</p>
              <p>Simultaneous in-person and streamed tours attracted out-of-state buyer; contract accepted within 48 hours.</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-5">
              <p className="font-semibold text-gray-900">Disclosure-First Approach</p>
              <p>Comprehensive golf course packet and pre-list inspection eliminated renegotiations—closing stayed on schedule.</p>
            </div>
          </div>
        </section>

        <section id="risk-mitigation" className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">Risk Mitigation & Contingency Planning</h2>
          <p className="text-sm text-gray-700 leading-relaxed">
            Prepare for surprises to keep transactions on track.
          </p>
          <ul className="space-y-3 text-sm text-gray-700 leading-relaxed">
            <li>Maintain backup lenders and escrow timelines in case mortgage rates shift mid-process.</li>
            <li>Budget 1% of purchase price for post-inspection credits or appraisal adjustments.</li>
            <li>Secure hazard, flood, and wind insurance quotes early to avoid closing delays linked to policy underwriting.</li>
            <li>Store all HOA correspondence and approval letters in a shared drive for easy access during future resale.</li>
          </ul>
        </section>

        <section className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg shadow-xl p-8 md:p-12 text-white" id="cta">
          <h2 className="text-3xl font-bold mb-4">Tailored Strategy for Your Goals</h2>
          <p className="text-lg text-blue-100 mb-6 max-w-2xl">
            Whether you are upsizing within Silverstone Ranch or relocating to Centennial Hills, Dr. Jan Duffy delivers the
            data, negotiation advantage, and vendor support needed for a seamless move.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/home-valuation"
              className="px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl text-center"
            >
              Get Updated Home Valuation
            </Link>
            <Link
              href="/buyers-checklist"
              className="px-6 py-3 bg-blue-500 text-white border-2 border-white rounded-lg font-semibold hover:bg-blue-400 transition-all text-center"
            >
              Review Buyer Due Diligence Checklist
            </Link>
            <a
              href={`tel:${CONTACT_INFO.phone.tel}`}
              className="px-6 py-3 bg-transparent border-2 border-white rounded-lg font-semibold hover:bg-white/10 transition-all text-center"
            >
              Call Dr. Jan Duffy • {CONTACT_INFO.phone.display}
            </a>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-xl p-8 md:p-12" id="faq">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.question}>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white rounded-3xl border border-slate-200 shadow-xl p-8 md:p-12" id="summary">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Summary & Next Steps</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Silverstone Ranch continues to outperform neighboring communities thanks to low inventory, strong relocation
            demand, and guard-gated amenities. Align your strategy with data, leverage Dr. Jan Duffy’s concierge network,
            and move decisively—whether buying, selling, or investing, timing and preparation remain your strongest assets.
          </p>
        </section>
      </div>
    </main>
  )
}

