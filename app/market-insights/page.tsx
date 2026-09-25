import Link from 'next/link'
import type { Metadata } from 'next'
import { CONTACT_INFO } from '@/lib/contact-info'
import { buildPageTitle, withShareImage } from '@/lib/metadata'
import { SeoJsonLd } from '@/components/SeoJsonLd'
import { SectionHeading } from '@/components/SectionHeading'
import { buildFaqSchema, buildWebPageSchema } from '@/lib/seo'
import { MARKET_INSIGHTS_FAQS } from '@/lib/hyperlocal-faqs'
import { MARKET_SNAPSHOT } from '@/lib/market-data'

const path = '/market-insights'
const canonicalUrl = `${CONTACT_INFO.website.base}${path}`

export const metadata: Metadata = {
  title: `Silverstone Ranch Market Report | ${MARKET_SNAPSHOT.reportMonth} · 89131`,
  description:
    `Silverstone Ranch (89131) housing report for ${MARKET_SNAPSHOT.reportMonth}: ${MARKET_SNAPSHOT.medianPrice} median sold, ${MARKET_SNAPSHOT.daysOnMarket} median DOM, ${MARKET_SNAPSHOT.windowLabel}, from ${CONTACT_INFO.agentName}.`,
  keywords: [
    'Silverstone Ranch market report',
    'Silverstone Ranch real estate trends 2026',
    'Centennial Hills housing data 89131',
    'Las Vegas real estate statistics September 2026',
    'Silverstone Ranch days on market',
  ],
  alternates: {
    canonical: path,
  },
  openGraph: withShareImage(
    {
    title: buildPageTitle(`Market Insights | ${MARKET_SNAPSHOT.reportMonth} Housing Trends`),
    description:
      `${MARKET_SNAPSHOT.reportMonth} Silverstone Ranch real estate report: ${MARKET_SNAPSHOT.medianPrice} median sold, ${MARKET_SNAPSHOT.daysOnMarket} median DOM, and guidance from Dr. Jan Duffy REALTOR®.`,
    url: canonicalUrl,
    type: 'article',
  },
    'Silverstone Ranch market insights',
  ),
}

const primaryMetrics = [
  {
    label: 'Median Sale Price',
    value: MARKET_SNAPSHOT.medianPrice,
    change: MARKET_SNAPSHOT.medianPriceContext,
    description: `${MARKET_SNAPSHOT.closings12Month} MLS closings. Average sold price was ${MARKET_SNAPSHOT.averageSold}. Top sale in the window was ${MARKET_SNAPSHOT.topSale}.`,
  },
  {
    label: 'Price Per Sq. Ft.',
    value: MARKET_SNAPSHOT.pricePerSqFt,
    change: MARKET_SNAPSHOT.pricePerSqFtContext,
    description:
      'This is the 12-month sold price per square foot for the Silverstone Ranch row. Enclave and lot type still move the number.',
  },
  {
    label: 'Median Days on Market',
    value: MARKET_SNAPSHOT.daysOnMarket,
    change: MARKET_SNAPSHOT.daysOnMarketChange,
    description: `The four-city market median in the same window was ${MARKET_SNAPSHOT.metroMedianDom}. A 40-day median is slower than a first-week offer market.`,
  },
  {
    label: 'Active Listings',
    value: MARKET_SNAPSHOT.activeListings,
    change: MARKET_SNAPSHOT.activeListingsChange,
    description: `Median ask ${MARKET_SNAPSHOT.medianAsk}. That is ${MARKET_SNAPSHOT.monthsOfSupply} of supply against the 12-month closing pace.`,
  },
]

const buyerSellerSignals = [
  {
    title: 'Seller Advantage',
    insight: `The median ask on September 18, 2026 was ${MARKET_SNAPSHOT.medianAsk}, above the ${MARKET_SNAPSHOT.medianPrice} sold median. Listings priced to closed comps are the ones that match this tape.`,
  },
  {
    title: 'Buyer Leverage',
    insight: `${MARKET_SNAPSHOT.monthsOfSupply} of supply gives buyers time to read HOA documents, golf course disclosures, and the appraisal before they waive terms.`,
  },
  {
    title: 'Financing Context',
    insight:
      'The same September 19, 2026 report cites Freddie Mac’s 6.95% average 30-year rate for the week ending September 17, 2026. Silverstone’s cash and jumbo share is not published in that table.',
  },
]

const windowHighlights = [
  {
    label: 'Closings',
    value: MARKET_SNAPSHOT.closings12Month,
    detail: MARKET_SNAPSHOT.windowLabel,
  },
  {
    label: 'Q3 closings to date',
    value: MARKET_SNAPSHOT.q3ClosingsToDate,
    detail: 'July 1 through September 18, 2026',
  },
  {
    label: 'Top sale',
    value: MARKET_SNAPSHOT.topSale,
    detail: 'Highest closing in the 12-month window',
  },
]

const zipComparisons = [
  { area: 'Silverstone Ranch', medianPrice: '$539,000', dom: '40', pricePerSqFt: '$233' },
  { area: 'Rhodes Ranch', medianPrice: '$535,000', dom: '28', pricePerSqFt: '$245' },
  { area: 'Los Prados', medianPrice: '$435,000', dom: '29', pricePerSqFt: '$231' },
  { area: 'Four-city market', medianPrice: '$445,000', dom: '30', pricePerSqFt: 'Not reported' },
]

const buyerPlaybook = [
  'Secure full underwriting before touring. The 12-month median was 40 days on market, so a prepared offer still matters, and a first-week deadline is not the community norm.',
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
    season: 'Summer 2026',
    detail: `${MARKET_SNAPSHOT.q3ClosingsToDate} Silverstone Ranch closings were recorded from July 1 through September 18, 2026. That quarter is still posting, so treat the count as partial.`,
  },
  {
    season: 'Fall 2026',
    detail: `${MARKET_SNAPSHOT.activeListings} active listings and ${MARKET_SNAPSHOT.monthsOfSupply} of supply, with a ${MARKET_SNAPSHOT.medianAsk} median ask versus a ${MARKET_SNAPSHOT.medianPrice} sold median.`,
  },
  {
    season: 'Prior winter pattern',
    detail:
      'Across the 37 staffed-gate communities in the same report, January and February 2026 were the busiest months. Silverstone’s month-by-month counts are not broken out.',
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

const faqs = MARKET_INSIGHTS_FAQS.map((f) => ({ question: f.question, answer: f.answer }))

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
    headline: `Silverstone Ranch Real Estate Market Insights - ${MARKET_SNAPSHOT.reportMonth}`,
    description: `Silverstone Ranch performance for the ${MARKET_SNAPSHOT.windowLabel} window: ${MARKET_SNAPSHOT.medianPrice} median sold, ${MARKET_SNAPSHOT.daysOnMarket} median DOM, and ${MARKET_SNAPSHOT.monthsOfSupply} of supply.`,
    author: { '@type': 'Person', name: CONTACT_INFO.agentName },
    publisher: { '@type': 'Organization', name: CONTACT_INFO.businessName, url: CONTACT_INFO.website.base },
    mainEntityOfPage: pageSchema.url,
    datePublished: MARKET_SNAPSHOT.datePublished,
    dateModified: MARKET_SNAPSHOT.dateModified,
    url: pageSchema.url,
  }

  const faqSchema = buildFaqSchema(path, MARKET_INSIGHTS_FAQS.map((f) => ({ question: f.question, answer: f.answer })))

  const schemaData = [pageSchema, articleSchema, faqSchema].filter(
    (s): s is NonNullable<typeof s> => s != null,
  ) as Record<string, unknown>[]

  return (
    <main className="bg-gradient-to-br from-blue-50 to-white min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <SeoJsonLd id="market-insights" data={schemaData} />
      <div className="mx-auto max-w-6xl space-y-16">
        <section className="text-center md:text-left space-y-6">
          <div className="inline-flex items-center rounded-full border border-blue-200 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-blue-700">
            Market Insights · {MARKET_SNAPSHOT.reportMonth}
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
            Silverstone Ranch Real Estate Market Trends
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            This page reports the Silverstone Ranch row from the {MARKET_SNAPSHOT.sourceName}, published September 19, 2026.
            The window is {MARKET_SNAPSHOT.windowLabel}: {MARKET_SNAPSHOT.closings12Month} closings, a {MARKET_SNAPSHOT.medianPrice}{' '}
            median sold price, and {MARKET_SNAPSHOT.monthsOfSupply} of supply. Use it to see where list prices sit against
            what actually closed, then book a comp review with Dr. Jan Duffy.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            Active counts and the median ask are as of September 18, 2026. Q3 closings through that date are partial.
            Southern Nevada’s existing single-family median of {MARKET_SNAPSHOT.southernNevadaSfrMedian} is a separate Las
            Vegas REALTORS® series for August 2026 and is not the Silverstone figure.
          </p>
        </section>

        <section id="key-metrics" className="space-y-8">
          <SectionHeading>Key Performance Metrics</SectionHeading>
          <p className="text-sm text-gray-600">
            The headline numbers show a resilient guard-gated community with rapid absorption and disciplined pricing.
            Drill into the details beneath each tile for context.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {primaryMetrics.map((metric) => (
              <div key={metric.label} className="bg-white rounded-2xl border border-blue-100 p-6 shadow-sm">
                <p className="text-xs uppercase tracking-wide text-gray-500 font-semibold mb-2">{metric.label}</p>
                <p className="text-3xl font-bold text-blue-700 mb-1">{metric.value}</p>
                <p className="text-sm font-semibold text-slate-600 mb-3">{metric.change}</p>
                <p className="text-sm text-gray-700 leading-relaxed">{metric.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="signals" className="space-y-6">
          <SectionHeading>Signals Behind the Numbers</SectionHeading>
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
          <SectionHeading>Seasonal Trendline & 2026 Outlook</SectionHeading>
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
          <SectionHeading>What the Market Story Means for You</SectionHeading>
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
          <SectionHeading>Offer Tactics That Win in Silverstone Ranch</SectionHeading>
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
              <SectionHeading>12-Month Closing Tape</SectionHeading>
              <p className="text-sm text-gray-500">
                {MARKET_SNAPSHOT.sourceName} · {MARKET_SNAPSHOT.windowLabel}
              </p>
            </div>
            <Link
              href="/request-info"
              className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl"
            >
              Request Comparable Sales Report
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {windowHighlights.map((item) => (
              <div key={item.label} className="bg-blue-50 rounded-2xl border border-blue-100 p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">{item.label}</h3>
                <p className="text-3xl font-bold text-blue-700 mb-2">{item.value}</p>
                <p className="text-sm text-gray-700">{item.detail}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-700">
            Street-level comps are not reprinted here. Book a consultation for the three or four closings that match the
            floor plan, lot, and enclave you are pricing.
          </p>
        </section>

        <section id="comparisons" className="space-y-6">
          <SectionHeading className="text-center">Northwest Las Vegas Comparison Snapshot</SectionHeading>
          <p className="text-sm text-gray-600 text-center max-w-3xl mx-auto">
            Same source and same {MARKET_SNAPSHOT.windowLabel} window. Rhodes Ranch and Los Prados are other staffed-gate
            rows. The four-city row is Las Vegas, Henderson, North Las Vegas, and Boulder City. Price per square foot was
            not published for the four-city total.
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
          <SectionHeading>Buyer Demographics & Motivation</SectionHeading>
          <p className="text-sm text-gray-700 leading-relaxed">
            Buyers in this price band are comparing commute time to Centennial Hills Hospital, the 215 Beltway, and the
            medical offices along Durango, plus HOA dues and whether the enclave has a staffed gate. The published report
            does not break Silverstone closings out by occupation or household type. Rental rates are not in that table—
            request a rent comp before you underwrite Pinehurst or any other village.
          </p>
          <p className="text-sm text-gray-700 leading-relaxed">
            Lifestyle also fuels demand. Residents value the six-acre park, tennis and pickleball courts, and easy access to
            Floyd Lamb Park. Buyers relocating from California frequently comment on the community’s wide streets, mature
            landscaping, and more relaxed HOA oversight compared to coastal master plans.
          </p>
        </section>

        <section id="seller-mistakes" className="space-y-6">
          <SectionHeading>Common Seller Mistakes to Avoid</SectionHeading>
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
          <SectionHeading>Technology & Smart Home Impact</SectionHeading>
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
          <SectionHeading>Fall 2026 Conditions</SectionHeading>
          <p className="text-sm text-gray-700 leading-relaxed">
            The figures on this page are the September 19, 2026 reading. They are not a price forecast. Watch these items
            before you treat the 12-month median as next month’s list price:
          </p>
          <ul className="space-y-3 text-sm text-gray-700">
            <li>{MARKET_SNAPSHOT.activeListings} active listings and a {MARKET_SNAPSHOT.medianAsk} median ask, against a {MARKET_SNAPSHOT.medianPrice} sold median.</li>
            <li>{MARKET_SNAPSHOT.q3ClosingsToDate} closings from July 1 through September 18, 2026. Later postings can raise that count.</li>
            <li>Las Vegas REALTORS® reported a {MARKET_SNAPSHOT.southernNevadaSfrMedian} existing single-family median for August 2026 ({MARKET_SNAPSHOT.southernNevadaSfrMedianNote}).</li>
            <li>City planning agendas for golf course filings. A land-use change can move fairway-adjacent negotiations without moving the community median.</li>
          </ul>
        </section>

        <section id="methodology" className="space-y-6">
          <SectionHeading>Methodology & Data Sources</SectionHeading>
          <p className="text-sm text-gray-700 leading-relaxed">
            Silverstone Ranch, Rhodes Ranch, Los Prados, and the four-city comparison come from the{' '}
            <a href={MARKET_SNAPSHOT.sourceUrl} className="font-semibold text-blue-700 hover:text-blue-900" rel="noopener noreferrer" target="_blank">
              {MARKET_SNAPSHOT.sourceName}
            </a>
            , Las Vegas MLS data pulled through Repliers on September 19, 2026. The Southern Nevada single-family median is
            Las Vegas REALTORS® for August 2026, reported September 9, 2026. This page does not mix those two series into one median.
          </p>
          <p className="text-sm text-gray-700 leading-relaxed">
            Need a deeper dive? Schedule a one-on-one strategy session to receive spreadsheets segmented by bedroom count,
            view corridor, renovation level, or HOA sub-association.
          </p>
        </section>

        <section id="macro-drivers" className="space-y-6">
          <SectionHeading>Macro Drivers Fueling Silverstone Demand</SectionHeading>
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
          <SectionHeading>Prices in the September 19, 2026 Report</SectionHeading>
          <p className="text-sm text-gray-700 leading-relaxed">
            These are the published prices from the September 19, 2026 report. They are a record of the last 12 months, not three forecast cases.
          </p>
          <div className="grid md:grid-cols-3 gap-6 text-sm text-gray-700 leading-relaxed">
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900">Sold median</h3>
              <p>{MARKET_SNAPSHOT.medianPrice} across {MARKET_SNAPSHOT.closings12Month} closings. Average sold price was {MARKET_SNAPSHOT.averageSold}.</p>
              <p className="mt-2">Price a listing or an offer against similar closings, not against the community-wide median alone.</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900">Asking median</h3>
              <p>{MARKET_SNAPSHOT.medianAsk} median ask on {MARKET_SNAPSHOT.activeListings} active listings as of September 18, 2026.</p>
              <p className="mt-2">The ask sits above the sold median. That gap is where negotiation starts.</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900">Top of the tape</h3>
              <p>The highest Silverstone Ranch closing in the window was {MARKET_SNAPSHOT.topSale}.</p>
              <p className="mt-2">A single high sale does not reset the median. Confirm the comp set for the enclave before you anchor there.</p>
            </div>
          </div>
        </section>

        <section id="buyer-calendar" className="space-y-6">
          <SectionHeading>Buyer Calendar: 45-Day Readiness Checklist</SectionHeading>
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
          <SectionHeading>Seller Success Stories</SectionHeading>
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
          <SectionHeading>Risk Mitigation & Contingency Planning</SectionHeading>
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
          <SectionHeading className="text-center">Frequently Asked Questions</SectionHeading>
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
          <SectionHeading>Summary & Next Steps</SectionHeading>
          <p className="text-lg text-gray-700 leading-relaxed">
            Silverstone Ranch’s September 19, 2026 reading is a {MARKET_SNAPSHOT.medianPrice} 12-month sold median,{' '}
            {MARKET_SNAPSHOT.daysOnMarket} median DOM, and {MARKET_SNAPSHOT.monthsOfSupply} of supply. The median ask is
            higher than the sold median. Align the offer or the list price with closed comps, then book the next step with
            Dr. Jan Duffy.
          </p>
        </section>
      </div>
    </main>
  )
}

