import Link from 'next/link'
import type { Metadata } from 'next'
import { CONTACT_INFO } from '@/lib/contact-info'
import { buildPageTitle } from '@/lib/metadata'
import { SeoJsonLd } from '@/components/SeoJsonLd'
import { buildFaqSchema, buildHowToSchema, buildWebPageSchema } from '@/lib/seo'

const path = '/buy-with-agent'
const canonicalUrl = `${CONTACT_INFO.website.base}${path}`

export const metadata: Metadata = {
  title: 'Why You Need a Buyer Agent',
  description:
    'Discover why partnering with Dr. Jan Duffy as your buyer agent in Silverstone Ranch gives you negotiation leverage, inside access to listings, and a seamless closing.',
  keywords: [
    'Silverstone Ranch buyer agent',
    'buying a home Silverstone Ranch',
    'Las Vegas buyer representation',
    'Dr. Jan Duffy real estate agent',
    'Silverstone Ranch real estate guidance',
  ],
  alternates: {
    canonical: path,
  },
  openGraph: {
    title: buildPageTitle('Why You Need a Buyer Agent'),
    description:
      'Partner with Dr. Jan Duffy REALTOR® to unlock pre-market opportunities, negotiate confidently, and streamline your Silverstone Ranch home purchase.',
    url: canonicalUrl,
    type: 'article',
  },
}

const benefitHighlights = [
  {
    title: 'Unlock Guard-Gated Inventory',
    description:
      'Gain access to homes that never hit public portals through Dr. Duffy’s Silverstone Ranch network of homeowners, lenders, and relocation partners.',
  },
  {
    title: 'Negotiate with Market Precision',
    description:
      'Use current November 2025 pricing models, HOA assessments, and golf course disclosures to secure fair value without overpaying for view corridors.',
  },
  {
    title: 'Navigate HOA & Golf Course Disclosures',
    description:
      'Understand community covenants, dormant golf course status, and future development scenarios before submitting an offer.',
  },
  {
    title: 'Protect Your Earnest Money',
    description:
      'Coordinate inspections, appraisal timelines, and contingency releases so your investment is secure throughout closing.',
  },
]

const processSteps = [
  {
    title: 'Strategy Consultation',
    detail:
      'Clarify must-haves, financing readiness, and timelines. Receive curated neighborhood insights and comparable sales for each Silverstone enclave.',
  },
  {
    title: 'Pre-Market Property Alerts',
    detail:
      'Leverage Dr. Duffy’s private database for move-in ready homes, remodel opportunities, and new construction nearby before they hit MLS.',
  },
  {
    title: 'Offer Structuring & Negotiation',
    detail:
      'Craft competitive offers with escalation clauses, appraisal gap coverage, and seller concessions aligned to the latest market data.',
  },
  {
    title: 'Due Diligence & Closing',
    detail:
      'Coordinate inspections, review HOA resale packages, negotiate repairs, and ensure a smooth handoff on closing day.',
  },
]

const conciergeDeliverables = [
  {
    heading: 'Neighborhood Intelligence Reports',
    description:
      'Weekly snapshots recap price trajectories, absorption rates, and buyer profiles for The Palms, Tuscany, Pinehurst, Silverlake, and non-gated enclaves. Compare property taxes, HOA dues, and future development notes before you tour.',
  },
  {
    heading: 'Golf Course Due Diligence Briefings',
    description:
      'Stay ahead of planning commission hearings, auction updates, and redevelopment rumors with Dr. Duffy’s curated document library. Learn mitigation tactics for landscaping, fencing, and privacy enhancements along dormant fairways.',
  },
  {
    heading: 'Relocation Concierge',
    description:
      'Out-of-state buyers receive guidance for guard gate registration, school enrollment, DMV appointments, and vendor scheduling. Concierge support continues after closing with move-in kits, neighborhood introductions, and HOA orientation.',
  },
]

const negotiationPlaybook = [
  {
    label: 'Build Offer Transparency',
    detail:
      'Include acknowledgement of the dormant golf course, HOA dues, and planned improvements so sellers see you have done the homework. Transparent offers build trust and reduce renegotiations.',
  },
  {
    label: 'Use Appraisal Gap Strategies Wisely',
    detail:
      'Pair gap coverage with inspection credits or rate buydowns. Dr. Duffy maps out likely appraisal ranges and coordinates supporting documentation before the appraiser steps inside.',
  },
  {
    label: 'Align Closing with Seller Goals',
    detail:
      'Offer flexible possession timelines, rent-backs, or storage solutions when sellers need to coordinate new construction or interstate moves. Concierge logistics make your offer stand out without sacrificing protections.',
  },
  {
    label: 'Leverage Inspection Data',
    detail:
      'Rather than asking for broad price cuts, negotiate targeted credits for heat mitigation, landscaping refreshes, or appliance warranties. Sellers stay engaged because they understand how funds will be used.',
  },
]

const financingInsights = [
  {
    title: 'Conventional & Jumbo Pairing',
    body:
      'Most Silverstone buyers prepare both conventional and jumbo approvals. This flexibility allows you to pivot between townhomes, single-story estates, and two-story view properties without restarting underwriting.',
  },
  {
    title: 'Strategic Rate Buydowns',
    body:
      'Dr. Duffy’s lenders model seller-paid buydowns and temporary 2-1 structures to balance monthly payments with short-term cash needs. When used with appraisal gap funds, buydowns often secure acceptance over cash offers.',
  },
  {
    title: 'HOA & Insurance Planning',
    body:
      'Expect $62/month HOA dues for single-family homes and $190/month for townhomes. Pair this with insurance quotes that factor heat, wind, and flood mitigation; Dr. Duffy maintains a roster of carriers familiar with Silverstone’s risk profile.',
  },
  {
    title: 'Equity Preservation Modeling',
    body:
      'Analytical dashboards compare projected appreciation, rental potential, and holding costs. Buyers see impact over five- and ten-year horizons, supporting confident decisions about upgrades and future resale timing.',
  },
]

const dueDiligenceChecklist = [
  {
    title: 'HOA Document Review',
    tips: [
      'Examine budgets, reserve studies, and enforcement policies for landscaping, exterior paint, and short-term rentals.',
      'Confirm architectural approval requirements for solar, shade structures, and security features.',
      'Review meeting minutes for golf course announcements, capital projects, or litigation updates.',
    ],
  },
  {
    title: 'Property Condition Snapshot',
    tips: [
      'Schedule roof, HVAC, and pool inspections early. Desert climates accelerate wear on equipment—plan credits proactively.',
      'Assess irrigation lines and landscape lighting to gauge water efficiency and nighttime presentation.',
      'Request utility history to compare with upgraded energy packages available in nearby communities.',
    ],
  },
  {
    title: 'Lifestyle Alignment',
    tips: [
      'Measure commute times to Centennial Hills Hospital, Nellis Air Force Base, and Downtown Summerlin during peak hours.',
      'Confirm proximity to trailheads, parks, and recreational hubs that match your wellness goals.',
      'Coordinate school tours and verify zoning through Clark County School District before you remove contingencies.',
    ],
  },
]

const relocationTimeline = [
  {
    week: 'Week 1',
    focus:
      'Orientation call, financing review, and Silverstone neighborhood mapping. Concierge gathers HOA docs, utility averages, and school boundary confirmations before tours begin.',
  },
  {
    week: 'Week 2',
    focus:
      'Curated showings (virtual and in-person), lifestyle assessments for parks and commute times, and initial vendor introductions for inspectors and insurance advisors.',
  },
  {
    week: 'Week 3',
    focus:
      'Offer drafting with escalation options, appraisal preparation, and negotiation strategies accounting for golf course disclosures and HOA requirements.',
  },
  {
    week: 'Week 4',
    focus:
      'Due diligence coordination, inspection repair negotiations, lender underwriting, and move-in concierge scheduling.',
  },
]

const riskMitigation = [
  {
    topic: 'Climate & Environmental Planning',
    detail:
      'Heat mitigation upgrades, wind-rated roof inspections, and flood insurance assessments ensure policies are accurate and premiums stay manageable.',
  },
  {
    topic: 'HOA Compliance',
    detail:
      'Review architectural guidelines, rental restrictions, and landscaping standards. Dr. Duffy pre-clears planned improvements with HOA boards when possible.',
  },
  {
    topic: 'Financial Safeguards',
    detail:
      'Appraisal gap reserves, contingency calendars, and earnest money protection clauses keep buyers secure even in competitive offer cycles.',
  },
  {
    topic: 'Legal & Disclosure Review',
    detail:
      'Golf course status addenda, CC&R acknowledgements, and city planning updates are summarized for quick reference prior to signature.',
  },
]

const digitalToolset = [
  {
    name: 'Silverstone Tracker App',
    description:
      'Delivers instant alerts for new listings, price changes, and HOA announcements. Customize feeds by enclave, price band, and preferred features.',
  },
  {
    name: 'Buyer Command Portal',
    description:
      'Centralizes contracts, inspection reports, lender milestones, and timeline tasks. Supports digital signatures and collaborative notes.',
  },
  {
    name: 'Neighborhood Data Studio',
    description:
      'Interactive maps showing DOM trends, price per square foot, and amenity proximity. Layer seasonal insights and historical comparables for context.',
  },
]

const postClosingServices = [
  {
    title: 'Move-In Concierge',
    summary:
      'Utility transfers, guard gate registration, mailbox setup, and security system configuration are scheduled the week of closing.',
  },
  {
    title: 'Vendor Welcome Package',
    summary:
      'Introductions to landscape designers, pool technicians, housekeepers, and maintenance professionals who already serve Silverstone households.',
  },
  {
    title: 'Community Integration',
    summary:
      'Personal invitations to HOA events, school orientations, and neighborhood clubs. Dr. Duffy hosts quarterly meetups for recent buyers to build relationships.',
  },
  {
    title: 'Equity Growth Check-Ins',
    summary:
      'Semi-annual market updates, refinance guidance, and renovation ROI consultations so you can plan future moves with confidence.',
  },
]

const investmentAngles = [
  {
    angle: 'Long-Term Rental Strategy',
    description:
      'Pinehurst townhomes and non-gated villages deliver steady rental demand from medical professionals and corporate transferees. Dr. Duffy connects investors with property managers and lease-up teams.',
  },
  {
    angle: 'Value-Add Renovations',
    description:
      'Target homes with original kitchens or landscaping. Concierge contractors complete upgrades pre-move-in, unlocking instant equity while aligning with HOA standards.',
  },
  {
    angle: 'Second Home Retreat',
    description:
      'Snowbirds leverage guard-gated security, maintenance packages, and concierge check-ins. Hybrid occupancy plans support personal use plus seasonal rental income.',
  },
]

const serviceMetrics = [
  {
    label: 'Average Offer-to-Close Timeline',
    value: '29 Days',
    explanation: 'Coordinated inspections, appraisal prep, and lender communication minimize delays even with relocation loans.',
  },
  {
    label: 'Inspection Issue Resolution Rate',
    value: '97%',
    explanation: 'Vendor relationships and pre-inspection walkthroughs reduce surprise repairs and keep escrow momentum strong.',
  },
  {
    label: 'Client Referral Volume',
    value: '68%',
    explanation: 'A majority of new buyers are referred by past clients, relocation directors, or Silverstone neighbors impressed with the concierge model.',
  },
]

const financingFaqs = [
  {
    question: 'Can I combine VA or FHA financing with escalation clauses?',
    answer:
      'Yes. Dr. Duffy coordinates with lenders to structure escalation language that respects program guidelines while keeping your offer competitive. Appraisal gap coverage can be paired with reserves or seller credits.',
  },
  {
    question: 'How do rate buydowns compare to price reductions?',
    answer:
      'Buydowns often deliver larger monthly savings than a price cut and can be funded by sellers eager to maintain list price optics. Scenario worksheets show breakeven timelines so you can decide confidently.',
  },
  {
    question: 'What if I need to sell before I buy?',
    answer:
      'Bridge loans, rent-backs, and contingent contracts are all part of the plan. Dr. Duffy sequences listing prep and buyer offers so you never feel rushed or homeless between transactions.',
  },
]

const comparativeInsights = [
  {
    community: 'Silverstone Ranch vs. Skye Canyon',
    insight:
      'Silverstone offers mature landscaping, guard-gate security, and larger lots. Skye Canyon delivers newer construction but higher SID/LID fees. Dr. Duffy helps buyers weigh HOA dues, commute times, and resale trends before committing.',
  },
  {
    community: 'Silverstone Ranch vs. Providence',
    insight:
      'Providence features a variety of builder styles but lacks guard gates. Buyers seeking privacy and established trees often migrate to Silverstone after comparing nighttime ambiance and HOA amenities.',
  },
  {
    community: 'Silverstone Ranch vs. Summerlin',
    insight:
      'Summerlin commands higher price per square foot and metropolitan proximity. Silverstone delivers similar luxury with stronger value for golf-adjacent homes and faster access to Mount Charleston recreation.',
  },
]

const buyerTestimonials = [
  {
    name: 'The Harris Family',
    quote:
      '“We toured virtually from Boston for three weeks. Dr. Duffy’s video walk-throughs and HOA briefings made us feel present at every showing. When we arrived, the perfect home was waiting with inspections complete.”',
  },
  {
    name: 'Jordan & Malik',
    quote:
      '“As first-time buyers, we expected stress. Instead, we received daily updates, vendor introductions, and a clear roadmap. Our offer beat two cash bids, and we never felt pressured.”',
  },
  {
    name: 'Investor Collective LLC',
    quote:
      '“Portfolio analysis, leasing projections, and renovation teams were ready on day one. Our Pinehurst acquisition hit pro forma within the first quarter thanks to Dr. Duffy’s management bench.”',
  },
]

const readinessChecklist = [
  'Collect W-2s, pay stubs, and asset statements for underwriting. Lenders can pre-underwrite within 48 hours when documents are prepared.',
  'Decide on non-negotiables versus wish-list items: outdoor kitchen, single-story layout, golf course view, or proximity to schools.',
  'Review guard gate procedures, guest policies, and parking rules to ensure lifestyle alignment.',
  'Discuss climate comfort upgrades (solar screens, smart thermostats, misters) and budget appropriately.',
  'Schedule time to explore the community beyond tours—visit parks, shops, and favorite restaurants to envision daily life.',
]

const internationalSupport = [
  {
    title: 'Currency & Banking Guidance',
    detail:
      'Coordinate with international-friendly lenders and currency exchange experts to lock favorable rates and navigate reporting requirements.',
  },
  {
    title: 'Remote Touring & Translation',
    detail:
      'Live-stream tours with simultaneous translation, detailed floor plan markups, and cultural considerations for multi-generational households.',
  },
  {
    title: 'Visa & Residency Coordination',
    detail:
      'Introduce immigration attorneys and tax advisors who align home purchases with investor visas or relocation programs.',
  },
]

const mortgageScenarios = [
  {
    scenario: 'Conventional 20% Down',
    insight:
      'Pairs well with appraisal gap reserves and rate buydowns. Ideal for buyers prioritizing long-term stability with competitive monthly payments.',
  },
  {
    scenario: 'Jumbo with Asset Depletion',
    insight:
      'High-net-worth clients leverage investment portfolios to qualify while keeping cash flexible for renovations or future acquisitions.',
  },
  {
    scenario: 'FHA/VA Hybrid Strategies',
    insight:
      'First-time buyers and military families can combine low down payments with seller credits for closing costs. Dr. Duffy structures offers that remain attractive to sellers.',
  },
  {
    scenario: 'Bridge & HELOC Combinations',
    insight:
      'Move-up buyers unlock equity from existing homes without rush. Bridge loans cover down payments while HELOCs fund immediate upgrades.',
  },
]

const diligenceSupport = [
  {
    heading: 'Inspection Playbook',
    description:
      'Roof, HVAC, pool, and plumbing experts deliver reports within 48 hours. Repair bids arrive simultaneously so you can negotiate with clarity.',
  },
  {
    heading: 'Insurance & Warranty Alignments',
    description:
      'Introduce carriers familiar with Silverstone risks plus home warranty providers that cover smart-home systems and high-end appliances.',
  },
  {
    heading: 'Document Audit',
    description:
      'Concierge team reviews HOA minutes, reserve studies, and city permits—flagging anything that might impact remodeling plans or rental intentions.',
  },
]

export default function BuyWithAgentPage() {
  const pageSchema = buildWebPageSchema({
    path,
    name: 'Silverstone Ranch Buyer Representation',
    description:
      'Work with Dr. Jan Duffy REALTOR® to access pre-market Silverstone Ranch listings, negotiate winning offers, and manage every HOA and inspection milestone.',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Buy with Agent', path },
    ],
  })

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: `Why You Need a Buyer Agent | ${CONTACT_INFO.businessName}`,
    description:
      'Expert guidance from Dr. Jan Duffy helps Silverstone Ranch buyers uncover inventory, negotiate pricing, and navigate HOA due diligence in Northwest Las Vegas.',
    author: {
      '@type': 'Person',
      name: CONTACT_INFO.agentName,
      email: CONTACT_INFO.email,
      telephone: CONTACT_INFO.phone.international,
    },
    publisher: {
      '@type': 'Organization',
      name: CONTACT_INFO.businessName,
      url: CONTACT_INFO.website.base,
    },
    mainEntityOfPage: pageSchema.url,
    url: pageSchema.url,
  }

  const howToSchema = buildHowToSchema({
    path,
    name: 'Silverstone Ranch Buying Framework',
    description:
      'Follow the Silverstone Ranch buying framework to prepare strategy sessions, negotiate offers, and manage due diligence with concierge support.',
    steps: processSteps.map((step) => ({ title: step.title, detail: step.detail })),
  })

  const faqSchema = buildFaqSchema(
    path,
    financingFaqs.map((faq) => ({ question: faq.question, answer: faq.answer })),
  )

  const schemaData = [pageSchema, articleSchema, howToSchema, faqSchema].filter(Boolean)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-20 px-4 sm:px-6 lg:px-8">
      <SeoJsonLd id="buy-with-agent" data={schemaData as Record<string, unknown>[]} />
      <div className="mx-auto max-w-6xl space-y-16">
        <section className="text-center">
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-6">
            Buyer Representation
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Why You Need a Buyer Agent for Silverstone Ranch
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Partner with Dr. Jan Duffy to unlock off-market inventory, negotiate confidently, and complete due diligence in the
            Silverstone Ranch community of Northwest Las Vegas.
          </p>
        </section>

        <section className="grid md:grid-cols-2 gap-8">
          {benefitHighlights.map((item) => (
            <div key={item.title} className="bg-white rounded-lg shadow-lg p-8 border border-blue-50">
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">{item.title}</h2>
              <p className="text-gray-600 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </section>

        <section className="bg-white rounded-lg shadow-xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            The Silverstone Ranch Buying Framework
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6 text-center max-w-3xl mx-auto">
            Every client receives a bespoke roadmap anchored in analytics, concierge service, and neighborhood expertise. From the
            first conversation to post-closing concierge, Dr. Duffy keeps the timeline moving with clarity.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {processSteps.map((step) => (
              <div key={step.title} className="bg-blue-50 rounded-lg p-6 border border-blue-100">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{step.title}</h3>
                <p className="text-gray-700 leading-relaxed">{step.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-xl p-8 md:p-12 space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">Concierge Deliverables that Elevate Every Purchase</h2>
          <p className="text-gray-700 leading-relaxed">
            Dr. Duffy’s concierge model removes friction at every step. Buyers receive ongoing education, proactive planning, and
            vendor coordination, ensuring no detail is overlooked while pursuing a guard-gated home.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {conciergeDeliverables.map((item) => (
              <div key={item.heading} className="rounded-2xl border border-blue-100 bg-blue-50/80 p-5 shadow-sm">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">{item.heading}</h3>
                <p className="text-sm text-gray-700 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Relocation Concierge & Local Insight</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Relocation buyers rely on fast, accurate information. Dr. Duffy’s concierge system covers school introductions, guard
            gate registration, DMV scheduling, utility setup, and vetted contractor referrals. Weekly check-ins keep you informed
            of new listings, price adjustments, and private previews so you can move quickly even from out of state.
          </p>
          <div className="grid md:grid-cols-2 gap-6 text-sm text-gray-700 leading-relaxed">
            <div className="rounded-2xl border border-blue-100 bg-blue-50/80 p-5">
              <h3 className="text-lg font-semibold text-blue-800 mb-2">Silverstone Market Intelligence</h3>
              <p>
                Receive neighborhood-specific comps, absorption rates, and HOA updates every Monday. Know when inventory shifts
                and which sub-associations are set to launch listings.
              </p>
            </div>
            <div className="rounded-2xl border border-blue-100 bg-blue-50/80 p-5">
              <h3 className="text-lg font-semibold text-blue-800 mb-2">Lifestyle Matching</h3>
              <p>
                Pair your wish list—trail access, single-story living, outdoor kitchens—with the sub-association that delivers the
                best fit. Dr. Duffy tours day and night to showcase community energy.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Financial Strategy & Offer Toolkit</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Competitive offers balance speed with security. Work with lenders familiar with Silverstone’s HOA structure, and
            coordinate appraisal gap reserves or buydown credits that strengthen your position without inflating risk.
          </p>
          <ul className="space-y-3 text-sm text-gray-700 leading-relaxed">
            <li>Secure dual pre-approvals (conventional + jumbo) with underwriting completed before touring.</li>
            <li>Build escalation clauses with defined caps and inspection credit requests tied to landscaping or heat mitigation.</li>
            <li>Keep insurance providers looped in early—documented risk mitigation can reduce premiums by 5–8%.</li>
            <li>Use flexible closing dates or rent-backs to win over sellers coordinating cross-country moves.</li>
          </ul>
        </section>

        <section className="bg-white rounded-lg shadow-xl p-8 md:p-12 space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">Negotiation Playbook Tailored to Silverstone Ranch</h2>
          <p className="text-gray-700 leading-relaxed">
            Dr. Duffy’s negotiation approach balances empathy with data. Sellers receive clear explanations, while buyers secure
            meaningful protections. The playbook evolves with every comp, ensuring your offer resonates in a fast-moving market.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {negotiationPlaybook.map((item) => (
              <div key={item.label} className="rounded-2xl border border-slate-200 bg-slate-50/80 p-5 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{item.label}</h3>
                <p className="text-sm text-gray-700 leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-xl p-8 md:p-12 space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">Financing Insights that Give You an Edge</h2>
          <div className="grid md:grid-cols-2 gap-6 text-sm text-gray-700 leading-relaxed">
            {financingInsights.map((item) => (
              <div key={item.title} className="rounded-2xl border border-blue-100 bg-white p-5 shadow-sm">
                <h3 className="text-lg font-semibold text-blue-700 mb-2">{item.title}</h3>
                <p>{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-xl p-8 md:p-12 space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">Success Stories from 2025 Closings</h2>
          <p className="text-gray-700 leading-relaxed">
            Recent clients showcase the versatility of Silverstone’s housing stock and Dr. Duffy’s strategic toolkit. Each
            scenario demonstrates how tailored financing, negotiation, and concierge support translate into winning outcomes.
          </p>
          <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
            <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-5">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Relocation Cash Offer</h3>
              <p>California tech executives secured a Silverlake property by offering a 10-day close, flexible rent-back, and
                appraisal waiver backed by Dr. Duffy’s valuation packet. The sellers accepted within hours.</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-5">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Financed Buyer Victory</h3>
              <p>A medical professional used a jumbo loan with rate buydown credits, appraisal gap coverage, and HOA document review
                to edge out two cash bids while keeping contingencies.</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-5">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Investor Renovation Play</h3>
              <p>An investor acquired a Pinehurst townhome with long-term rental demand. Dr. Duffy coordinated contractors to add
                energy-efficient windows, securing a tenant pre-close.</p>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-xl p-8 md:p-12 space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">Due Diligence Checklist</h2>
          <p className="text-gray-700 leading-relaxed">
            Guard-gated due diligence extends beyond standard inspections. Use this checklist to stay organized and anticipate the
            information sellers expect from serious buyers.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {dueDiligenceChecklist.map((item) => (
              <div key={item.title} className="rounded-2xl border border-amber-200 bg-amber-50/80 p-5 shadow-sm">
                <h3 className="text-lg font-semibold text-amber-900 mb-2">{item.title}</h3>
                <ul className="list-disc list-inside space-y-2 text-sm text-gray-700 leading-relaxed">
                  {item.tips.map((tip) => (
                    <li key={tip}>{tip}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Buyer Questions Answered</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                How competitive is Silverstone Ranch in late 2025?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                The community remains a preferred choice for guard-gated security, top Centennial Hills schools, and proximity to
                Floyd Lamb Park. Homes are averaging under two weeks on market with multiple offers on renovated properties. Dr.
                Duffy monitors every price adjustment and notifies clients immediately.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Can I negotiate despite a seller’s market?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Yes. Updated market stats, appraisal data, and the dormant golf course timeline provide leverage. Dr. Duffy
                structures offers that balance aggressive terms with protections for appraisal, inspection, and HOA reviews.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                What due diligence is unique to Silverstone Ranch?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Buyers must review HOA resale packages, understand golf course status, confirm school zoning, and verify landscape
                maintenance obligations. Dr. Duffy helps decode every document so you purchase with confidence.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-xl p-8 md:p-12 space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">Buyer Readiness Checklist</h2>
          <p className="text-gray-700 leading-relaxed">
            Use this checklist to stay organized before touring. Completing these steps accelerates underwriting and keeps offer
            decisions precise.
          </p>
          <ul className="list-disc list-inside space-y-2 text-sm text-gray-700 leading-relaxed bg-slate-50/80 border border-slate-200 rounded-2xl p-6 shadow-sm">
            {readinessChecklist.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="bg-white rounded-lg shadow-xl p-8 md:p-12 space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">Why Silverstone Buyers Choose Dr. Duffy</h2>
          <p className="text-gray-700 leading-relaxed">
            From analytical dashboards to relocation concierge calls, every touchpoint is designed to reduce uncertainty and
            maximize joy. Clients appreciate the blend of high-touch service and research depth—tour packets arrive with valuation
            charts, golf course disclosures, and neighborhood lifestyle notes so you can focus on how each home feels rather than
            hunting for information.
          </p>
          <p className="text-gray-700 leading-relaxed">
            The concierge partnership continues beyond closing. Dr. Duffy monitors policy changes, organizes quarterly market
            briefings, and shares vendor updates so your equity and enjoyment grow year after year. Choosing Silverstone is more
            than a purchase—it is an invitation into a community stewarded by professionals who care about long-term success.
          </p>
        </section>

        <section className="bg-white rounded-lg shadow-xl p-8 md:p-12 space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">Next Steps to Start Your Journey</h2>
          <p className="text-gray-700 leading-relaxed">
            Schedule a discovery session to outline budget, timing, and lifestyle goals. Dr. Duffy will assemble your Silverstone
            Roadmap—complete with neighborhood comps, financing introductions, and a curated tour plan. Within 48 hours you will
            know exactly which homes to target, how to structure offers, and what contingencies protect your investment.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Already familiar with the community? Request a VIP tour focusing on micro-differences between enclaves, from trail
            access to sunrise views. Whether you are months away or ready to write today, the concierge team adapts to your pace
            and keeps momentum high without pressure.
          </p>
          <p className="text-gray-700 leading-relaxed">Your Silverstone story begins the moment you reach out.</p>
        </section>

        <section className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg shadow-xl p-8 md:p-12 text-white">
          <h2 className="text-3xl font-bold mb-4 text-center md:text-left">
            Secure Your Silverstone Ranch Home with Expert Representation
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3 text-blue-100">
              <p>• Personalized relocation guidance for out-of-state buyers</p>
              <p>• Daily market monitoring for price reductions and new releases</p>
              <p>• HOA document review and golf course status disclosures</p>
              <p>• Trusted lender, inspector, and contractor introductions</p>
            </div>
            <div className="space-y-4">
              <Link
                href="/request-info"
                className="block text-center px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl"
              >
                Request Buyer Strategy Session
              </Link>
              <Link
                href="/book-tour"
                className="block text-center px-6 py-3 bg-blue-500 text-white border-2 border-white rounded-lg font-semibold hover:bg-blue-400 transition-all"
              >
                Schedule a Private Tour
              </Link>
              <a
                href={`tel:${CONTACT_INFO.phone.tel}`}
                className="block text-center px-6 py-3 bg-transparent border-2 border-white rounded-lg font-semibold hover:bg-white/10 transition-all"
              >
                Call Dr. Jan Duffy: {CONTACT_INFO.phone.display}
              </a>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <details className="rounded-lg border border-slate-200 bg-slate-50/80 p-4">
              <summary className="cursor-pointer text-base font-semibold text-gray-900">What sets Dr. Duffy apart from other agents?</summary>
              <p className="mt-3 text-sm text-gray-700 leading-relaxed">
                A doctorate-level research background, top 1% Las Vegas production, and deep relationships within Silverstone.
                You receive concierge support from introduction to post-closing events.
              </p>
            </details>
            <details className="rounded-lg border border-slate-200 bg-slate-50/80 p-4">
              <summary className="cursor-pointer text-base font-semibold text-gray-900">Can Dr. Duffy help with new construction nearby?</summary>
              <p className="mt-3 text-sm text-gray-700 leading-relaxed">
                Absolutely. She negotiates builder incentives, oversees design center appointments, and aligns new construction timelines with Silverstone resale opportunities.</p>
            </details>
            <details className="rounded-lg border border-slate-200 bg-slate-50/80 p-4">
              <summary className="cursor-pointer text-base font-semibold text-gray-900">How do I stay updated once I’m under contract?</summary>
              <p className="mt-3 text-sm text-gray-700 leading-relaxed">
                Expect weekly status reports covering inspections, appraisal progress, HOA approvals, and closing preparations—plus real-time check-ins for milestones.</p>
            </details>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-xl p-8 md:p-12 space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">Relocation Timeline & Milestones</h2>
          <p className="text-gray-700 leading-relaxed">
            Know exactly what happens each week. This four-week framework keeps relocations on schedule and ensures every document,
            inspection, and decision is handled proactively.
          </p>
          <div className="grid md:grid-cols-2 gap-6 text-sm text-gray-700 leading-relaxed">
            {relocationTimeline.map((item) => (
              <div key={item.week} className="rounded-2xl border border-slate-200 bg-slate-50/80 p-5 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{item.week}</h3>
                <p>{item.focus}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-xl p-8 md:p-12 space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">Risk Mitigation Checklist</h2>
          <p className="text-gray-700 leading-relaxed">
            Dr. Duffy anticipates potential roadblocks so buyers stay confident. Review the safeguards implemented during every
            Silverstone transaction.
          </p>
          <div className="grid md:grid-cols-2 gap-6 text-sm text-gray-700 leading-relaxed">
            {riskMitigation.map((item) => (
              <div key={item.topic} className="rounded-2xl border border-amber-200 bg-amber-50/80 p-5 shadow-sm">
                <h3 className="text-lg font-semibold text-amber-900 mb-2">{item.topic}</h3>
                <p>{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-xl p-8 md:p-12 space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">Digital Toolset for Informed Decisions</h2>
          <p className="text-gray-700 leading-relaxed">
            Technology keeps remote buyers aligned with the on-the-ground experience. Access real-time data and streamline
            approvals from anywhere.
          </p>
          <div className="grid md:grid-cols-3 gap-6 text-sm text-gray-700 leading-relaxed">
            {digitalToolset.map((tool) => (
              <div key={tool.name} className="rounded-2xl border border-blue-100 bg-blue-50/80 p-5 shadow-sm">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">{tool.name}</h3>
                <p>{tool.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-xl p-8 md:p-12 space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">Post-Closing Services</h2>
          <p className="text-gray-700 leading-relaxed">
            Support continues after closing day. The concierge team stays in touch to ensure your home functions flawlessly and you
            feel connected to Silverstone Ranch.
          </p>
          <div className="grid md:grid-cols-2 gap-6 text-sm text-gray-700 leading-relaxed">
            {postClosingServices.map((service) => (
              <div key={service.title} className="rounded-2xl border border-slate-200 bg-slate-50/80 p-5 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{service.title}</h3>
                <p>{service.summary}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-xl p-8 md:p-12 space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">Investment Angles Worth Exploring</h2>
          <p className="text-gray-700 leading-relaxed">
            Silverstone’s guard-gated infrastructure appeals to primary residents and investors alike. Evaluate these pathways with
            Dr. Duffy’s ROI models and vendor network.
          </p>
          <div className="grid md:grid-cols-3 gap-6 text-sm text-gray-700 leading-relaxed">
            {investmentAngles.map((item) => (
              <div key={item.angle} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{item.angle}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-xl p-8 md:p-12 space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">Service Metrics that Matter</h2>
          <p className="text-gray-700 leading-relaxed">
            Numbers tell the story of Dr. Duffy’s buyer advocacy. These metrics highlight efficiency, negotiation strength, and
            client satisfaction across recent Silverstone transactions.
          </p>
          <div className="grid md:grid-cols-3 gap-6 text-sm text-gray-700 leading-relaxed">
            {serviceMetrics.map((metric) => (
              <div key={metric.label} className="rounded-2xl border border-blue-100 bg-blue-50/80 p-5 shadow-sm">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">{metric.label}</h3>
                <p className="text-2xl font-bold text-blue-700">{metric.value}</p>
                <p>{metric.explanation}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-xl p-8 md:p-12 space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">Financing FAQs</h2>
          <div className="space-y-4">
            {financingFaqs.map((faq) => (
              <details key={faq.question} className="rounded-lg border border-slate-200 bg-slate-50/80 p-4">
                <summary className="cursor-pointer text-base font-semibold text-gray-900">{faq.question}</summary>
                <p className="mt-3 text-sm text-gray-700 leading-relaxed">{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-xl p-8 md:p-12 space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">Compare Silverstone with Nearby Communities</h2>
          <p className="text-gray-700 leading-relaxed">
            Understanding nearby options clarifies why Silverstone shines. Dr. Duffy outlines the pros and trade-offs of each area
            so you invest with confidence.
          </p>
          <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
            {comparativeInsights.map((item) => (
              <div key={item.community} className="rounded-2xl border border-slate-200 bg-slate-50/80 p-5 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{item.community}</h3>
                <p>{item.insight}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-xl p-8 md:p-12 space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">Buyer Testimonials</h2>
          <p className="text-gray-700 leading-relaxed">
            Hear directly from families, professionals, and investors who relied on Dr. Duffy to navigate Silverstone Ranch.
          </p>
          <div className="grid md:grid-cols-3 gap-6 text-sm text-gray-700 leading-relaxed">
            {buyerTestimonials.map((testimonial) => (
              <blockquote key={testimonial.name} className="rounded-2xl border border-blue-100 bg-white p-5 shadow-sm">
                <p className="italic">{testimonial.quote}</p>
                <footer className="mt-3 text-xs font-semibold text-blue-700">— {testimonial.name}</footer>
              </blockquote>
            ))}
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-xl p-8 md:p-12 space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">International Buyer Support</h2>
          <p className="text-gray-700 leading-relaxed">
            Silverstone attracts global buyers seeking a foothold in Las Vegas. Dr. Duffy’s team bridges time zones, financial
            regulations, and cultural nuances with ease.
          </p>
          <div className="grid md:grid-cols-3 gap-6 text-sm text-gray-700 leading-relaxed">
            {internationalSupport.map((item) => (
              <div key={item.title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{item.title}</h3>
                <p>{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-xl p-8 md:p-12 space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">Mortgage Scenario Planning</h2>
          <p className="text-gray-700 leading-relaxed">
            Align financing with lifestyle goals. These scenarios illustrate how different loan products influence monthly payments,
            negotiation leverage, and renovation planning.
          </p>
          <div className="grid md:grid-cols-2 gap-6 text-sm text-gray-700 leading-relaxed">
            {mortgageScenarios.map((item) => (
              <div key={item.scenario} className="rounded-2xl border border-blue-100 bg-blue-50/80 p-5 shadow-sm">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">{item.scenario}</h3>
                <p>{item.insight}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-xl p-8 md:p-12 space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">Due Diligence Support Services</h2>
          <p className="text-gray-700 leading-relaxed">
            Detailed due diligence wins trust from sellers and keeps you protected. Dr. Duffy manages each component with vetted
            professionals and clear documentation.
          </p>
          <div className="grid md:grid-cols-3 gap-6 text-sm text-gray-700 leading-relaxed">
            {diligenceSupport.map((item) => (
              <div key={item.heading} className="rounded-2xl border border-emerald-200 bg-emerald-50/80 p-5 shadow-sm">
                <h3 className="text-lg font-semibold text-emerald-900 mb-2">{item.heading}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

