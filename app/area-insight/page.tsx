import Link from 'next/link'
import type { Metadata } from 'next'
import { CONTACT_INFO } from '@/lib/contact-info'
import { MARKET_SNAPSHOT } from '@/lib/market-data'
import { buildPageTitle, withShareImage } from '@/lib/metadata'
import { SeoJsonLd } from '@/components/SeoJsonLd'
import { buildFaqSchema, buildWebPageSchema } from '@/lib/seo'
import { SectionHeading } from '@/components/SectionHeading'

export const metadata: Metadata = {
  title: 'Area Insight | Market & Lifestyle Intel',
  description:
    'Gain deeper insight into Silverstone Ranch market positioning, buyer demographics, and lifestyle differentiators with guidance from Dr. Jan Duffy REALTOR®.',
  alternates: {
    canonical: '/area-insight',
  },
  openGraph: withShareImage(
    {
    title: buildPageTitle('Area Insight | Market & Lifestyle Intel'),
    description:
      'Understand Silverstone Ranch buyer demand, community differentiators, and relocation draw compared to nearby neighborhoods.',
    url: `${CONTACT_INFO.website.base}/area-insight`,
    type: 'website',
  },
    'Silverstone Ranch area guide',
  ),
}

const buyerProfiles = [
  {
    label: 'Commute-first buyers',
    motivators: 'Minutes to the 215 Beltway, Centennial Hills Hospital, and the medical offices along Durango.',
  },
  {
    label: 'Gate and HOA comparison',
    motivators: 'The Palms has the staffed gate. Other villages are gated or open. Dues and access rules change by sub-association.',
  },
  {
    label: 'Move-up buyers',
    motivators: 'Comparing lot size, garage count, and outdoor living against the 12-month sold median, not against a list price.',
  },
  {
    label: 'Investors',
    motivators: 'Rents and cap rates are not in the September 2026 community report. Request a rent comp before you underwrite.',
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
    asset: 'What the September 2026 report does publish',
    notes: `${MARKET_SNAPSHOT.closings12Month} closings, ${MARKET_SNAPSHOT.medianPrice} median sold, ${MARKET_SNAPSHOT.topSale} top sale, ${MARKET_SNAPSHOT.monthsOfSupply} of supply.`,
  },
  {
    asset: 'What it does not publish',
    notes: 'Enclave rents, cap rates, and buyer-occupation shares. Those figures are not estimated on this page.',
  },
]

const faqItems = [
  {
    question: 'How does the dormant golf course impact appraisals?',
    answer:
      'Appraisers adjust for the current open-space condition using recent sales on the fairway corridor. Provide landscaping receipts and market commentary to defend value. Dr. Jan Duffy includes a disclosure brief with every listing and offer.',
  },
  {
    question: 'What concessions show up when supply is about five months?',
    answer:
      'With 5.4 months of supply and a median ask above the sold median, buyers have room to negotiate repairs, closing costs, and timing. The exact concession depends on the comp set for that enclave.',
  },
  {
    question: 'Are HOA dues projected to increase in 2026?',
    answer:
      'Request the current budget and reserve study in the resale package. A 2026 dues change has been discussed; confirm the adopted amount before you remove contingencies.',
  },
]

const areaFaqs = [
  {
    question: 'Why do buyers choose Silverstone Ranch over nearby communities?',
    answer:
      'Buyers compare landscaping, lot size, whether the village has a staffed gate, and drive time to the 215 Beltway. The September 2026 comparison table is the number set to use, not an older peer-median list.',
  },
  {
    question: 'What buyer profiles are most active in Silverstone Ranch?',
    answer:
      'Medical professionals, hospitality executives, and remote workers drawn to guard-gated privacy and close proximity to the 215 Beltway make up a large share of relocations.',
  },
  {
    question: 'How does Silverstone Ranch perform during market shifts?',
    answer: `The ${MARKET_SNAPSHOT.windowLabel} median days on market was ${MARKET_SNAPSHOT.daysOnMarket}, with ${MARKET_SNAPSHOT.monthsOfSupply} of supply. That is a balanced tape, not a sub-20-day market.`,
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
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-700">Market Bulletin · {MARKET_SNAPSHOT.reportMonth}</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">Silverstone Ranch Area Guide | Centennial Hills 89131</h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            This brief uses the {MARKET_SNAPSHOT.reportMonth} Silverstone Ranch row: {MARKET_SNAPSHOT.medianPrice} median sold
            across {MARKET_SNAPSHOT.closings12Month} closings in the {MARKET_SNAPSHOT.windowLabel} window,{' '}
            {MARKET_SNAPSHOT.daysOnMarket} median DOM, and {MARKET_SNAPSHOT.monthsOfSupply} of supply. The full table is on
            the market insights page.
          </p>
        </section>

        <section className="bg-white rounded-3xl border border-slate-200 shadow-xl p-8 md:p-12 space-y-6" id="market-advantage">
          <SectionHeading>September 2026 Supply Reading</SectionHeading>
          <p className="text-lg text-gray-700 leading-relaxed">
            On September 18, 2026, Silverstone Ranch had {MARKET_SNAPSHOT.activeListings} active listings at a{' '}
            {MARKET_SNAPSHOT.medianAsk} median ask. That is {MARKET_SNAPSHOT.monthsOfSupply} of supply against the 12-month
            closing pace. The sold median was {MARKET_SNAPSHOT.medianPrice}. The ask sits above what closed.
          </p>
          <ul className="grid md:grid-cols-2 gap-4 text-sm text-gray-800">
            <li className="rounded-2xl border border-blue-200 bg-blue-50/80 p-4">
              <span className="text-xs font-semibold uppercase tracking-wide text-blue-700">Active Listings</span>
              <p className="text-2xl font-bold text-blue-800">{MARKET_SNAPSHOT.activeListings}</p>
              <p>Count as of September 18, 2026.</p>
            </li>
            <li className="rounded-2xl border border-blue-200 bg-blue-50/80 p-4">
              <span className="text-xs font-semibold uppercase tracking-wide text-blue-700">Median Ask</span>
              <p className="text-2xl font-bold text-blue-800">{MARKET_SNAPSHOT.medianAsk}</p>
              <p>Above the {MARKET_SNAPSHOT.medianPrice} sold median.</p>
            </li>
            <li className="rounded-2xl border border-blue-200 bg-blue-50/80 p-4">
              <span className="text-xs font-semibold uppercase tracking-wide text-blue-700">Months of Supply</span>
              <p className="text-2xl font-bold text-blue-800">{MARKET_SNAPSHOT.monthsOfSupply}</p>
              <p>A balanced reading, not a multi-year inventory low.</p>
            </li>
            <li className="rounded-2xl border border-blue-200 bg-blue-50/80 p-4">
              <span className="text-xs font-semibold uppercase tracking-wide text-blue-700">Median DOM</span>
              <p className="text-2xl font-bold text-blue-800">{MARKET_SNAPSHOT.daysOnMarket}</p>
              <p>{MARKET_SNAPSHOT.windowLabel}.</p>
            </li>
          </ul>
        </section>

        <section className="bg-white rounded-3xl border border-slate-200 shadow-xl p-8 md:p-12 space-y-6" id="pricing-tiers">
          <SectionHeading>Pricing by Enclave</SectionHeading>
          <p className="text-lg text-gray-700 leading-relaxed">
            The September 19, 2026 report publishes a community median, not a townhome, guard-gated, or luxury band.
            Pair the {MARKET_SNAPSHOT.medianPrice} sold median and {MARKET_SNAPSHOT.medianAsk} median ask with the comps
            for the specific village before you set a list price or an offer.
          </p>
          <p className="text-sm text-gray-700 leading-relaxed">
            <Link href="/market-insights" className="font-semibold text-blue-700 hover:text-blue-900">
              Open the September 2026 market report
            </Link>{' '}
            for the comparison table, then book a CMA for the floor plan you are pricing.
          </p>
        </section>

        <section className="bg-white rounded-3xl border border-slate-200 shadow-xl p-8 md:p-12 space-y-6" id="buyer-demand">
          <SectionHeading>Buyer Demand Breakdown</SectionHeading>
          <p className="text-lg text-gray-700 leading-relaxed">
            The September report does not publish buyer shares by occupation. These are the comparisons buyers actually make
            on a tour.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-sm text-gray-700">
            {buyerProfiles.map((buyer) => (
              <div key={buyer.label} className="rounded-2xl border border-blue-100 bg-white p-5 shadow-sm">
                <h3 className="text-lg font-semibold text-blue-800 mb-1">{buyer.label}</h3>
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
          <SectionHeading>What the 12-Month Tape Shows</SectionHeading>
          <p className="text-lg text-gray-700 leading-relaxed">
            {MARKET_SNAPSHOT.closings12Month} closings, a {MARKET_SNAPSHOT.averageSold} average sold price, and a{' '}
            {MARKET_SNAPSHOT.topSale} top sale. Street-level examples are not reprinted here. Q3 recorded{' '}
            {MARKET_SNAPSHOT.q3ClosingsToDate} closings from July 1 through September 18, 2026, and that count can still rise
            as closings post.
          </p>
        </section>

        <section className="bg-white rounded-3xl border border-slate-200 shadow-xl p-8 md:p-12 space-y-6" id="seller-playbook">
          <SectionHeading>Seller Playbook: 30-Day Countdown</SectionHeading>
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
            Prep still matters. The published median was {MARKET_SNAPSHOT.daysOnMarket} on market, and the median ask was
            above the sold median, so a prepared home is priced against closings rather than against a guaranteed premium.
          </p>
        </section>

        <section className="bg-white rounded-3xl border border-slate-200 shadow-xl p-8 md:p-12 space-y-6" id="investment-outlook">
          <SectionHeading>Investment Outlook & Rental Metrics</SectionHeading>
          <p className="text-lg text-gray-700 leading-relaxed">
            Rents and cap rates are not in the September 19, 2026 community table. Use the published sale figures, then
            request a rent comp before you underwrite.
          </p>
          <div className="space-y-4">
            {investorMetrics.map((metric) => (
              <div key={metric.asset} className="rounded-2xl border border-emerald-200 bg-emerald-50/80 p-5 shadow-sm">
                <h3 className="text-lg font-semibold text-emerald-900 mb-1">{metric.asset}</h3>
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
          <SectionHeading>Fall 2026 Reading</SectionHeading>
          <p className="text-lg text-gray-700 leading-relaxed">
            This is the September 19, 2026 record, not a price forecast for the next quarter.
          </p>
          <ul className="space-y-3 text-sm text-gray-700 leading-relaxed">
            <li>{MARKET_SNAPSHOT.monthsOfSupply} of supply and a {MARKET_SNAPSHOT.medianAsk} median ask versus a {MARKET_SNAPSHOT.medianPrice} sold median.</li>
            <li>Southern Nevada’s existing single-family median was {MARKET_SNAPSHOT.southernNevadaSfrMedian} in August 2026.</li>
            <li>City planning agendas for golf course filings can move fairway-adjacent negotiations without moving the community median.</li>
          </ul>
        </section>

        <section className="bg-white rounded-3xl border border-slate-200 shadow-xl p-8 md:p-12 space-y-6" id="faq">
          <SectionHeading>Frequently Asked Questions</SectionHeading>
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
          <SectionHeading>Comparative Snapshot: Silverstone vs. Northwest Peers</SectionHeading>
          <p className="text-lg text-gray-700 leading-relaxed">
            Same {MARKET_SNAPSHOT.windowLabel} window and the same September 19, 2026 source as the market insights page.
          </p>
          <div className="grid md:grid-cols-2 gap-6 text-sm text-gray-700">
            <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-5">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Silverstone Ranch</h3>
              <ul className="space-y-2 leading-relaxed">
                <li>Median sold: {MARKET_SNAPSHOT.medianPrice}</li>
                <li>Median DOM: {MARKET_SNAPSHOT.daysOnMarket}</li>
                <li>Price per square foot: {MARKET_SNAPSHOT.pricePerSqFt}</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-5">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Rhodes Ranch</h3>
              <ul className="space-y-2 leading-relaxed">
                <li>Median sold: $535,000</li>
                <li>Median DOM: 28 days</li>
                <li>Price per square foot: $245</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-5">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Los Prados</h3>
              <ul className="space-y-2 leading-relaxed">
                <li>Median sold: $435,000</li>
                <li>Median DOM: 29 days</li>
                <li>Price per square foot: $231</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-5">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Four-city market</h3>
              <ul className="space-y-2 leading-relaxed">
                <li>Median sold: {MARKET_SNAPSHOT.metroMedianPrice}</li>
                <li>Median DOM: {MARKET_SNAPSHOT.metroMedianDom}</li>
                <li>Las Vegas, Henderson, North Las Vegas, and Boulder City. Price per square foot was not published for this row.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-3xl border border-slate-200 shadow-xl p-8 md:p-12 space-y-6" id="calendar">
          <SectionHeading>Seller & Buyer Calendar: Month-by-Month Strategy</SectionHeading>
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
          <SectionHeading>Case Studies: 2025 Success Stories</SectionHeading>
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
          <SectionHeading>Risk Considerations & Mitigation</SectionHeading>
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
          <SectionHeading>Economic Drivers Supporting Demand</SectionHeading>
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
          <SectionHeading>Financing Strategies that Win Offers</SectionHeading>
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
          <SectionHeading>30-Day Buyer Action Plan</SectionHeading>
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
          <SectionHeading>Seller FAQ & Negotiation Scripts</SectionHeading>
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
          <SectionHeading>Summary & Next Actions</SectionHeading>
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

