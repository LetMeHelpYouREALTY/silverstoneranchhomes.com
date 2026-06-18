import Link from 'next/link'
import type { Metadata } from 'next'
import { CONTACT_INFO } from '@/lib/contact-info'
import { buildHyperlocalTitle, buildPageTitle } from '@/lib/metadata'
import { SeoJsonLd } from '@/components/SeoJsonLd'
import { buildFaqSchema, buildHowToSchema, buildWebPageSchema } from '@/lib/seo'

const path = '/sell-with-agent'
const canonicalUrl = `${CONTACT_INFO.website.base}${path}`

export const metadata: Metadata = {
  title: buildHyperlocalTitle('Sell Your Silverstone Ranch Home'),
  description:
    'Maximize your Silverstone Ranch sale price with Dr. Jan Duffy. Learn how expert marketing, disclosure management, and negotiation protect your equity.',
  keywords: [
    'Silverstone Ranch listing agent',
    'sell Silverstone Ranch home',
    'Las Vegas home selling strategy',
    'Dr. Jan Duffy listing specialist',
    'Silverstone Ranch real estate marketing',
  ],
  alternates: {
    canonical: path,
  },
  openGraph: {
    title: buildPageTitle('Why You Need an Agent to Sell Your Home'),
    description:
      'Position your Silverstone Ranch listing for top-dollar results with strategic pricing, luxury marketing, and negotiation led by Dr. Jan Duffy REALTOR®.',
    url: canonicalUrl,
    type: 'article',
  },
}

const sellerAdvantages = [
  {
    title: 'Strategic Pricing & Positioning',
    description:
      'Leverage the latest June 2026 comps, buyer demand in Centennial Hills, and golf course disclosures to price for multiple offers without leaving money on the table.',
  },
  {
    title: 'High-Impact Marketing',
    description:
      'Professional photography, video, and targeted digital campaigns reach affluent relocation buyers seeking guard-gated homes with desert landscaping.',
  },
  {
    title: 'Negotiation Expertise',
    description:
      'Navigate appraisal gaps, inspection requests, and post-possession terms with an agent who has sold throughout Silverstone Ranch’s nine enclaves.',
  },
  {
    title: 'Compliance & Disclosure Guidance',
    description:
      'Ensure HOA, golf course, and property condition disclosures are complete to avoid contract delays or legal exposure.',
  },
]

const marketingPlan = [
  {
    title: 'Home Preparation & Staging',
    detail:
      'Customized checklists prioritize curb appeal, landscape refreshes, and interior staging to highlight Mediterranean architecture and indoor-outdoor living.',
  },
  {
    title: 'Launch Marketing Campaign',
    detail:
      'MLS launch, luxury syndication, social advertising, and geo-targeted email campaigns attract qualified buyers in the first 72 hours.',
  },
  {
    title: 'Offer Review & Negotiation',
    detail:
      'Score offers based on financing strength, contingency timelines, and occupancy needs to secure the best combination of price and terms.',
  },
  {
    title: 'Contract-to-Close Management',
    detail:
      'Coordinate inspections, appraisal, HOA docs, and closing logistics while keeping you informed at every milestone.',
  },
]

const proofPoints = [
  {
    label: 'Median Sale Price Achieved',
    stat: '$702K',
    description: 'Average sale price for Dr. Duffy clients in 2025—$17K above neighborhood median due to targeted staging and negotiation.',
  },
  {
    label: 'Average Days on Market',
    stat: '8 Days',
    description: 'Listings launch with pre-inspections, cinematic media, and pricing scenarios to encourage immediate, confident offers.',
  },
  {
    label: 'Buyer Conversion Rate',
    stat: '3.4 Qualified Offers',
    description: 'Per listing, thanks to relocation partnerships, private preview events, and detailed golf course disclosures.',
  },
]

const marketingChannels = [
  {
    channel: 'Luxury Syndication',
    detail:
      'ListHub Global, Mansion Global, Wall Street Journal, and Berkshire Hathaway Luxury Collection showcase Silverstone homes to national and international buyers.',
  },
  {
    channel: 'Paid Media & Retargeting',
    detail:
      'Google Performance Max, Meta retargeting, and LinkedIn ads reach relocating professionals and high-intent buyer segments.',
  },
  {
    channel: 'HOA & Community Outreach',
    detail:
      'Guard gate signage, neighbor postcards, and HOA newsletters alert current residents and move-up buyers to new inventory before public launch.',
  },
  {
    channel: 'Story-Driven Video',
    detail:
      'Narrated lifestyle films highlight twilight ambiance, outdoor amenities, and remodeled interiors—optimized for YouTube, IG Reels, and relocation portals.',
  },
]

const pricingScenarios = [
  {
    scenario: 'Premium Launch',
    summary:
      'For fully renovated homes with pool or view advantages. Aggressive pricing plus twilight media to attract relocation cash buyers seeking turnkey living.',
  },
  {
    scenario: 'Market Momentum',
    summary:
      'Balanced upgrades; price at top of comp range with appraisal support and seller credits earmarked for landscaping or heat mitigation.',
  },
  {
    scenario: 'Value-Leading Strategy',
    summary:
      'Ideal for original-condition homes. Encourage multiple offers by listing slightly below comps, then negotiate inspection credits and post-possession terms.',
  },
]

const sellerTimeline = [
  {
    phase: '30–45 Days Before Launch',
    tasks: ['Schedule contractor walk-throughs', 'Approve staging and media concepts', 'Order HOA resale packages and golf course disclosures'],
  },
  {
    phase: 'Launch Week',
    tasks: ['Complete twilight photography and video', 'Host neighbor preview and relocation agent tour', 'Publish marketing campaign with retargeting sequences'],
  },
  {
    phase: 'Offer Week',
    tasks: ['Review offers with scorecards', 'Negotiate appraisal gap structures', 'Finalize inspection timelines and buyer communication cadence'],
  },
  {
    phase: 'Contract to Closing',
    tasks: ['Coordinate repairs with vetted vendors', 'Manage escrow milestones and disclosures', 'Plan move-out logistics, donation pickups, and post-possession if needed'],
  },
]

const partnershipMetrics = [
  {
    partner: 'Preferred Vendor Satisfaction',
    stat: '4.9/5.0',
    note: 'Post-project surveys confirm consistent quality from landscapers, painters, organizers, and repair specialists.',
  },
  {
    partner: 'Relocation Agent Network',
    stat: '42 Referring Partners',
    note: 'Hospitals, hospitality groups, and defense contractors rely on Dr. Duffy to place executives inside guard-gated communities.',
  },
  {
    partner: 'Repeat & Referral Business',
    stat: '71%',
    note: 'Majority of listings come from past clients or Silverstone neighbors, demonstrating sustained trust in the concierge model.',
  },
]

const sellerTestimonials = [
  {
    name: 'Sophia & Michael',
    quote:
      '“Our Silverlake home sold in six days above list. Dr. Duffy’s contractor team transformed our landscaping, and her disclosure prep kept negotiations smooth.”',
  },
  {
    name: 'The Chen Family',
    quote:
      '“We needed a rent-back while our Summerlin build finished. The buyer loved the transparency and flexibility Dr. Duffy delivered.”',
  },
  {
    name: 'Lawson Property Group',
    quote:
      '“Investor exit achieved a 22% gain because the marketing campaign attracted multiple cash buyers. Concierge handled every repair.”',
  },
]

const expandedFaqs = [
  {
    question: 'How do you keep showings efficient yet respectful of our time?',
    answer:
      'Dr. Duffy coordinates agent-accompanied showings with ample notice, creates digital welcome packets, and collects feedback within hours so you can make informed adjustments.',
  },
  {
    question: 'What if I need to sell and buy simultaneously?',
    answer:
      'Bridge financing, rent-backs, and contingent timelines are mapped out early. The concierge team syncs both escrows so you never feel rushed or displaced.',
  },
  {
    question: 'Can you help with estate or trust sales?',
    answer:
      'Yes. Expect coordination with attorneys, appraisers, and beneficiaries, plus secure document management and estate sale partners.',
  },
]

const sellerFaqHighlights = [
  {
    question: 'How do we handle the golf course disclosure?',
    answer:
      'The May 2025 auction results and dormant course status must be disclosed to buyers. Dr. Duffy provides approved language, comparable sales, and landscaping recommendations to present value clearly.',
  },
  {
    question: 'What preparation yields the best ROI?',
    answer:
      'Fresh paint, updated lighting, and professional landscaping produce the strongest buyer response. Dr. Duffy coordinates vetted vendors and staging tailored to desert architecture.',
  },
  {
    question: 'Can I align my sale with a relocation timeline?',
    answer:
      'Yes. Dr. Duffy negotiates lease-back or post-possession terms, coordinates out-of-state movers, and ensures your purchase timeline syncs with Silverstone closing schedules.',
  },
]

const analyticsHighlights = [
  {
    heading: 'Micro-Neighborhood Reporting',
    body:
      'Weekly dashboards compare price per square foot, days on market, and buyer demographics for The Palms, Silverlake, Pinehurst, and non-gated enclaves. Sellers see the exact narrative buyers and appraisers will reference.',
  },
  {
    heading: 'Golf Course Disclosure Support',
    body:
      'Curated documents summarize the May 2025 auction, current ownership, and city filings. Dr. Duffy prepares approved language and landscape strategies to keep dormant fairway frontage competitive.',
  },
  {
    heading: 'Buyer Pipeline Tracking',
    body:
      'Relocation partnerships deliver real-time insight on motivated surgeons, tech executives, and defense contractors seeking Silverstone homes. Sellers benefit from a ready-to-tour roster before going live.',
  },
]

const mediaServices = [
  {
    title: 'Story-Driven Photography',
    text: 'Twilight, daylight, and drone sessions capture architectural character, skyline views, and outdoor entertaining zones. Buyers visualize the lifestyle before they arrive.',
  },
  {
    title: 'Video & Virtual Experiences',
    text: '4K video tours, agent-narrated reels, and immersive Matterport walkthroughs deliver sight-unseen confidence for relocation buyers.',
  },
  {
    title: 'Targeted Advertising',
    text: 'Geo-fenced ads, Google Discovery campaigns, and LinkedIn outreach connect with decision makers relocating for healthcare, tech, and hospitality roles.',
  },
  {
    title: 'Print & Community Outreach',
    text: 'High-gloss brochures, neighborhood postcards, and HOA blast emails ensure local owners and investors stay informed about your listing.',
  },
]

const negotiationFactors = [
  {
    label: 'Appraisal Strategy',
    detail:
      'Pre-list appraisals, valuation packets, and paired comps support premium pricing. Dr. Duffy attends appraisal appointments to highlight upgrades and lifestyle value.',
  },
  {
    label: 'Inspection Roadmap',
    detail:
      'Preferred inspectors deliver pre-list reports so you can remedy issues or prepare targeted credits. Buyers appreciate transparency; sellers avoid last-minute surprises.',
  },
  {
    label: 'Occupancy Planning',
    detail:
      'Leasebacks, post-possession agreements, and interim housing resources keep timelines aligned when sellers are moving into new construction or out-of-state roles.',
  },
  {
    label: 'Earnest Money Protection',
    detail:
      'Clear deadlines, escrow communication, and compliance checklists ensure funds stay secure and contingencies release on schedule.',
  },
]

const sellerConcierge = [
  {
    title: 'Preparation Management',
    detail:
      'Weekly checklists, vendor coordination, and budget tracking keep landscaping, painting, and decluttering on schedule without homeowner stress.',
  },
  {
    title: 'Media Production Suite',
    detail:
      'Cinematic video, drone, twilight photography, and 3D tours produced in 48 hours. Agents receive branded packets highlighting your home’s story.',
  },
  {
    title: 'Offer Intelligence',
    detail:
      'Custom scorecards compare financing strength, contingencies, timeline flexibility, and buyer communication responsiveness so you can respond decisively.',
  },
  {
    title: 'Closing Concierge',
    detail:
      'Utility transfers, shredding services, estate sale partnerships, and moving company scheduling ensure a seamless exit.',
  },
]

const complianceChecklist = [
  {
    section: 'HOA Governance',
    items: ['Resale package, budget, and reserve study obtained 30 days before launch', 'Landscape compliance report and architectural approvals for recent upgrades', 'Guard gate vendor list updated for staging and contractor access'],
  },
  {
    section: 'Golf Course Disclosures',
    items: ['May 2025 auction summary provided to buyers', 'City planning notes on pending permits shared during offer review', 'Landscape mitigation plan or credit options prepared for dormant fairway homes'],
  },
  {
    section: 'Climate & Insurance',
    items: ['Heat mitigation documentation (screens, insulation, HVAC service)', 'Wind mitigation or roof certifications updated', 'Flood zone verification and insurance quotes ready for buyer underwriting'],
  },
]

const closingResources = [
  {
    resource: 'Seller Dashboard',
    description:
      'Real-time portal capturing showings, feedback, marketing analytics, and escrow documents. Accessible from desktop or mobile.',
  },
  {
    resource: 'Weekly Strategy Calls',
    description:
      'Dedicated 20-minute calls recap buyer activity, inspection progress, and negotiation opportunities. Notes shared with family decision-makers.',
  },
  {
    resource: 'Post-Sale Support',
    description:
      'Refinance alerts, property tax assessment reviews, and relocation introductions for your next chapter inside or outside Las Vegas.',
  },
]

const sellerSuccessStories = [
  {
    headline: 'Full-Price Offer in 48 Hours',
    summary:
      'A Silverlake single-story received six offers after twilight photography and targeted relocation outreach. The accepted contract included a two-week rent-back so the sellers could finalize their Summerlin purchase.',
  },
  {
    headline: 'Golf Course Disclosure Wins',
    summary:
      'The Palms estate overlooking dormant fairway sold above list after Dr. Duffy installed privacy landscaping, published disclosure packets in advance, and negotiated inspection credits tied to irrigation upgrades.',
  },
  {
    headline: 'Investor Exit with 20% ROI',
    summary:
      'A Pinehurst townhome investor leveraged Dr. Duffy’s contractor network to refresh interiors in ten days. Multiple cash offers arrived, delivering a 20% net gain over 18 months of ownership.',
  },
]

const legalCompliance = [
  {
    topic: 'HOA & CIC Disclosures',
    notes:
      'Silverstone HOA requires resale packages, compliance certificates, and acknowledgement of landscape standards. Dr. Duffy orders documents early and tracks response deadlines.',
  },
  {
    topic: 'Golf Course Status Addenda',
    notes:
      'Customized addenda outline dormant course history, auction outcomes, and ongoing litigation status. Buyers sign acknowledgements, reducing risk of after-close disputes.',
  },
  {
    topic: 'Environmental & Insurance Updates',
    notes:
      'Provide heat mitigation, wind insurance, and floodplain disclosures alongside the environmental risk report. Transparency builds buyer trust and keeps underwriting smooth.',
  },
]

const timeline = [
  'Day 1-7: Strategy session, vendor scheduling, pre-list inspections, and staging plan approval.',
  'Day 8-14: Photo/video capture, copywriting, pricing calibration, and internal agent previews.',
  'Day 15-21: Live on MLS, host twilight launch event, monitor showings, and field written offers.',
  'Day 22-35: Negotiate counters, manage inspections, deliver appraisal support, and refine closing logistics.',
  'Day 36+: Coordinate mover timeline, final walkthrough, and concierge-assisted handoff to buyers.',
]

const comparativeMarkets = [
  {
    comparison: 'Silverstone vs. Summerlin Listings',
    analysis:
      'Summerlin commands higher HOA dues and price per square foot. Silverstone delivers guard-gated luxury with stronger value, attracting buyers who want larger lots and proximity to Mount Charleston recreation.',
  },
  {
    comparison: 'Silverstone vs. Skye Canyon',
    analysis:
      'Skye Canyon homes are newer but carry SID/LID fees and smaller yards. Silverstone’s mature landscaping and established community programming keep days-on-market lower for upgraded properties.',
  },
  {
    comparison: 'Silverstone vs. Providence',
    analysis:
      'Providence lacks guard gates and has fewer single-story options. Sellers moving from Providence often choose Silverstone for privacy and elevation in perceived value.',
  },
]

const readinessSteps = [
  'Audit recent upgrades and gather invoices for appraisers and buyers.',
  'Schedule pre-list inspections to address surprises early and negotiate from a position of strength.',
  'Outline transition logistics—storage, movers, donation centers—to reduce decision fatigue during escrow.',
  'Meet with tax and financial advisors to align proceeds with investment or relocation plans.',
  'Prepare a “seller story” highlighting community involvement, maintenance routines, and favorite features to share during showings.',
]

const exitStrategies = [
  {
    option: 'Traditional Sale with Rent-Back',
    description:
      'Ideal when coordinating new construction or interstate moves. Dr. Duffy negotiates favorable rent-back terms that balance buyer goodwill with seller flexibility.',
  },
  {
    option: 'Investor Sale with Lease Option',
    description:
      'Leverage investor demand by offering a lease option. Sellers stay in place while securing future purchase commitments at today’s pricing.',
  },
  {
    option: '1031 Exchange Coordination',
    description:
      'Partner with accommodators to roll proceeds into income properties. Timelines, identification windows, and replacement property tours are managed in tandem.',
  },
]

export default function SellWithAgentPage() {
  const pageSchema = buildWebPageSchema({
    path,
    name: 'Silverstone Ranch Listing Representation',
    description:
      'List your Silverstone Ranch home with Dr. Jan Duffy for strategic pricing, luxury marketing, and concierge buyer management that maximizes equity.',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Sell with Agent', path },
    ],
  })

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Why You Need an Agent to Sell Your Silverstone Ranch Home',
    description:
      'Discover how Dr. Jan Duffy positions Silverstone Ranch properties for top dollar with pre-market prep, pricing strategy, and transparent golf course disclosures.',
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
    name: 'Silverstone Ranch Listing Launch Plan',
    description:
      'Four-step listing launch process covering pre-list preparation, marketing campaigns, offer negotiations, and contract-to-close management for Silverstone Ranch sellers.',
    steps: marketingPlan.map((step) => ({ title: step.title, detail: step.detail })),
  })

  const combinedFaqs = [...expandedFaqs, ...sellerFaqHighlights]

  const faqSchema = buildFaqSchema(
    path,
    combinedFaqs.map((faq) => ({ question: faq.question, answer: faq.answer })),
  )

  const schemaData = [pageSchema, articleSchema, howToSchema, faqSchema].filter(Boolean)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-20 px-4 sm:px-6 lg:px-8">
      <SeoJsonLd id="sell-with-agent" data={schemaData as Record<string, unknown>[]} />
      <div className="mx-auto max-w-6xl space-y-16">
        <section className="text-center">
          <div className="inline-block px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-semibold mb-6">
            Listing Representation
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Why You Need an Agent to Sell Your Silverstone Ranch Home
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Retain maximum equity and close with confidence by teaming with Dr. Jan Duffy—a proven Silverstone Ranch listing
            specialist with data-driven marketing and negotiation expertise.
          </p>
        </section>

        <section className="grid md:grid-cols-2 gap-8">
          {sellerAdvantages.map((item) => (
            <div key={item.title} className="bg-white rounded-lg shadow-lg p-8 border border-green-50">
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">{item.title}</h2>
              <p className="text-gray-600 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </section>

        <section className="bg-white rounded-lg shadow-xl p-8 md:p-12 space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">Pre-Listing Analytics & Seller Intelligence</h2>
          <p className="text-gray-700 leading-relaxed">
            Pricing a guard-gated home requires more than automated estimates. Dr. Duffy’s analytics suite examines micro-market
            shifts, buyer sentiment, and seasonal demand so you launch with confidence. Sellers receive detailed narratives they
            can share with financial advisors, relocation managers, and family stakeholders.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {analyticsHighlights.map((item) => (
              <div key={item.heading} className="rounded-2xl border border-green-100 bg-green-50/80 p-5 shadow-sm">
                <h3 className="text-lg font-semibold text-green-900 mb-2">{item.heading}</h3>
                <p className="text-sm text-gray-700 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Silverstone Ranch Listing Blueprint
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {marketingPlan.map((item) => (
              <div key={item.title} className="bg-green-50 rounded-lg p-6 border border-green-100">
                <h3 className="text-xl font-semibold text-green-900 mb-3">{item.title}</h3>
                <p className="text-gray-700 leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-xl p-8 md:p-12 space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">Media & Marketing Engine</h2>
          <p className="text-gray-700 leading-relaxed">
            Presentation drives perception. Dr. Duffy curates creative assets that highlight desert-modern architecture, guard-gate
            security, and Silverstone’s signature outdoor lifestyle. Each campaign blends storytelling with data-backed targeting
            to reach qualified buyers wherever they search.
          </p>
          <div className="grid md:grid-cols-2 gap-6 text-sm text-gray-700 leading-relaxed">
            {mediaServices.map((service) => (
              <div key={service.title} className="rounded-2xl border border-slate-200 bg-slate-50/80 p-5 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{service.title}</h3>
                <p>{service.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-xl p-8 md:p-12 space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">Negotiation & Compliance Advantage</h2>
          <p className="text-gray-700 leading-relaxed">
            Silverstone transactions require nuanced negotiation. Buyers expect clarity on dormant golf corridors, HOA covenants,
            and climate considerations. Dr. Duffy anticipates questions, prepares documentation, and guides you toward offers that
            protect your net proceeds.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {negotiationFactors.map((factor) => (
              <div key={factor.label} className="rounded-2xl border border-green-100 bg-white p-5 shadow-sm">
                <h3 className="text-lg font-semibold text-green-800 mb-2">{factor.label}</h3>
                <p className="text-sm text-gray-700 leading-relaxed">{factor.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-xl p-8 md:p-12 space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">Seller Concierge Services</h2>
          <p className="text-gray-700 leading-relaxed">
            Comprehensive support means you never wonder what comes next. The concierge team handles logistics while you focus on
            packing and future plans.
          </p>
          <div className="grid md:grid-cols-2 gap-6 text-sm text-gray-700 leading-relaxed">
            {sellerConcierge.map((service) => (
              <div key={service.title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{service.title}</h3>
                <p>{service.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-xl p-8 md:p-12 space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">Compliance Checklist</h2>
          <p className="text-gray-700 leading-relaxed">
            Staying proactive with documentation keeps escrow smooth. Dr. Duffy audits every requirement before launch so buyers and
            lenders receive complete, accurate files.
          </p>
          <div className="grid md:grid-cols-3 gap-6 text-sm text-gray-700 leading-relaxed">
            {complianceChecklist.map((section) => (
              <div key={section.section} className="rounded-2xl border border-amber-200 bg-amber-50/80 p-5 shadow-sm">
                <h3 className="text-lg font-semibold text-amber-900 mb-2">{section.section}</h3>
                <ul className="list-disc list-inside space-y-1">
                  {section.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-xl p-8 md:p-12 space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">Closing Resources & Ongoing Support</h2>
          <p className="text-gray-700 leading-relaxed">
            The relationship doesn’t end at the closing table. Continued guidance helps you protect proceeds and plan next steps.
          </p>
          <div className="grid md:grid-cols-3 gap-6 text-sm text-gray-700 leading-relaxed">
            {closingResources.map((item) => (
              <div key={item.resource} className="rounded-2xl border border-blue-100 bg-blue-50/80 p-5 shadow-sm">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">{item.resource}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-xl p-8 md:p-12 space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">Success Stories from Silverstone Sellers</h2>
          <p className="text-gray-700 leading-relaxed">
            Real results illustrate why Silverstone owners trust Dr. Duffy. Each story demonstrates strategic preparation,
            precision marketing, and negotiation outcomes that protect equity.
          </p>
          <div className="grid md:grid-cols-3 gap-6 text-sm text-gray-700 leading-relaxed">
            {sellerSuccessStories.map((story) => (
              <div key={story.headline} className="rounded-2xl border border-green-100 bg-white p-5 shadow-sm">
                <h3 className="text-lg font-semibold text-green-900 mb-2">{story.headline}</h3>
                <p>{story.summary}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-xl p-8 md:p-12 space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">Legal & Compliance Playbook</h2>
          <p className="text-gray-700 leading-relaxed">
            Comprehensive disclosure keeps contracts enforceable and protects sellers after closing. Dr. Duffy collaborates with
            escrow, HOA boards, and legal counsel to ensure every document is delivered accurately and on time.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {legalCompliance.map((item) => (
              <div key={item.topic} className="rounded-2xl border border-amber-200 bg-amber-50/80 p-5 shadow-sm">
                <h3 className="text-lg font-semibold text-amber-900 mb-2">{item.topic}</h3>
                <p className="text-sm text-gray-700 leading-relaxed">{item.notes}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-gradient-to-r from-green-600 to-green-700 rounded-lg shadow-xl p-8 md:p-12 text-white">
          <h2 className="text-3xl font-bold mb-4 text-center md:text-left">
            List with Dr. Jan Duffy for Maximum Exposure & Results
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3 text-green-100">
              <p>• Customized pricing strategy for each Silverstone enclave</p>
              <p>• Professional media and 3D experiences tailored to luxury buyers</p>
              <p>• Pre-qualified buyer pool, including relocation and cash purchasers</p>
              <p>• Transparent communication from listing agreement to closing day</p>
            </div>
            <div className="space-y-4">
              <Link
                href="/home-valuation"
                className="block text-center px-6 py-3 bg-white text-green-700 rounded-lg font-semibold hover:bg-green-50 transition-all shadow-lg hover:shadow-xl"
              >
                Get Your Home Valuation
              </Link>
              <Link
                href="/request-info"
                className="block text-center px-6 py-3 bg-green-500 text-white border-2 border-white rounded-lg font-semibold hover:bg-green-400 transition-all"
              >
                Request Listing Consultation
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

        <section className="bg-white rounded-lg shadow-xl p-8 md:p-12 space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">Silverstone Seller Proof Points</h2>
          <p className="text-gray-700 leading-relaxed">
            Measurable results separate concierge representation from basic listing services. Review the metrics achieved for recent
            Silverstone sellers.
          </p>
          <div className="grid md:grid-cols-3 gap-6 text-sm text-gray-700 leading-relaxed">
            {proofPoints.map((point) => (
              <div key={point.label} className="rounded-2xl border border-blue-100 bg-blue-50/80 p-5 shadow-sm">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">{point.label}</h3>
                <p className="text-2xl font-bold text-blue-700">{point.stat}</p>
                <p>{point.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-xl p-8 md:p-12 space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">Marketing Channels that Deliver</h2>
          <p className="text-gray-700 leading-relaxed">
            Every listing receives a multi-channel campaign tailored to target buyers. The goal: maximize exposure during the first
            72 hours while nurturing relocation interest worldwide.
          </p>
          <div className="grid md:grid-cols-2 gap-6 text-sm text-gray-700 leading-relaxed">
            {marketingChannels.map((channel) => (
              <div key={channel.channel} className="rounded-2xl border border-slate-200 bg-slate-50/80 p-5 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{channel.channel}</h3>
                <p>{channel.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-xl p-8 md:p-12 space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">Pricing Scenarios & Strategy Options</h2>
          <p className="text-gray-700 leading-relaxed">
            Not every home launches the same way. Dr. Duffy models multiple pricing paths so you can choose the strategy that aligns
            with upgrades, timing, and risk tolerance.
          </p>
          <div className="grid md:grid-cols-3 gap-6 text-sm text-gray-700 leading-relaxed">
            {pricingScenarios.map((item) => (
              <div key={item.scenario} className="rounded-2xl border border-amber-200 bg-amber-50/80 p-5 shadow-sm">
                <h3 className="text-lg font-semibold text-amber-900 mb-2">{item.scenario}</h3>
                <p>{item.summary}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-xl p-8 md:p-12 space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">Seller Timeline Blueprint</h2>
          <p className="text-gray-700 leading-relaxed">
            Keep every milestone organized with this high-level timeline. The concierge team manages each task while keeping you
            informed.
          </p>
          <div className="grid md:grid-cols-2 gap-6 text-sm text-gray-700 leading-relaxed">
            {sellerTimeline.map((stage) => (
              <div key={stage.phase} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{stage.phase}</h3>
                <ul className="list-disc list-inside space-y-1">
                  {stage.tasks.map((task) => (
                    <li key={task}>{task}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-xl p-8 md:p-12 space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">Partnership Metrics & Network Strength</h2>
          <p className="text-gray-700 leading-relaxed">
            Silverstone sellers benefit from an established ecosystem of professionals. Here’s how those partnerships measure up.
          </p>
          <div className="grid md:grid-cols-3 gap-6 text-sm text-gray-700 leading-relaxed">
            {partnershipMetrics.map((metric) => (
              <div key={metric.partner} className="rounded-2xl border border-blue-100 bg-blue-50/80 p-5 shadow-sm">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">{metric.partner}</h3>
                <p className="text-2xl font-bold text-blue-700">{metric.stat}</p>
                <p>{metric.note}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-xl p-8 md:p-12 space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">What Sellers Are Saying</h2>
          <p className="text-gray-700 leading-relaxed">
            Testimonials highlight the concierge difference—transparent communication, proactive solutions, and top-dollar results.
          </p>
          <div className="grid md:grid-cols-3 gap-6 text-sm text-gray-700 leading-relaxed">
            {sellerTestimonials.map((testimonial) => (
              <blockquote key={testimonial.name} className="rounded-2xl border border-emerald-200 bg-emerald-50/80 p-5 shadow-sm">
                <p className="italic">{testimonial.quote}</p>
                <footer className="mt-3 text-xs font-semibold text-emerald-700">— {testimonial.name}</footer>
              </blockquote>
            ))}
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-xl p-8 md:p-12 space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">Expanded Seller FAQs</h2>
          <div className="space-y-4">
            {expandedFaqs.map((faq) => (
              <details key={faq.question} className="rounded-lg border border-slate-200 bg-slate-50/80 p-4">
                <summary className="cursor-pointer text-base font-semibold text-gray-900">{faq.question}</summary>
                <p className="mt-3 text-sm text-gray-700 leading-relaxed">{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-xl p-8 md:p-12 space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">The Silverstone Seller Advantage</h2>
          <p className="text-gray-700 leading-relaxed">
            Selling in Silverstone requires finesse—guard gates, HOA nuance, and golf course disclosures can overwhelm even seasoned
            owners. Dr. Duffy blends research, storytelling, and negotiation to safeguard your timeline and equity. Expect frequent
            communication, meticulous documentation, and a marketing engine calibrated specifically for luxury guard-gated buyers.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Whether you are prepping six months out or need to launch quickly, the concierge roadmap adapts to your pace. The goal:
            create bidding enthusiasm, protect your net proceeds, and deliver an exit experience that feels effortless.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Sellers often remark that the process feels refreshingly organized: every vendor booked, every disclosure delivered, and
            every negotiation strategy rehearsed in advance. That level of preparation is what converts curiosity into confident
            offers—and keeps you in control from preparation to celebration.
          </p>
          <p className="text-gray-700 leading-relaxed">Let’s build your Silverstone exit plan together today.</p>
        </section>

        <section className="bg-white rounded-lg shadow-xl p-8 md:p-12 space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">60-Day Seller Timeline</h2>
          <p className="text-gray-700 leading-relaxed">
            Aligning milestones keeps your sale predictable. Use this roadmap to coordinate prep, launch, and closing with
            confidence.
          </p>
          <ol className="list-decimal list-inside space-y-2 text-sm text-gray-700 leading-relaxed bg-slate-50/80 border border-slate-200 rounded-2xl p-6 shadow-sm">
            {timeline.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ol>
        </section>

        <section className="bg-white rounded-lg shadow-xl p-8 md:p-12 space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">How Silverstone Compares</h2>
          <p className="text-gray-700 leading-relaxed">
            Sellers often consider moves within the northwest corridor. Use this comparison to articulate value to prospective
            buyers considering alternative communities.
          </p>
          <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
            {comparativeMarkets.map((item) => (
              <div key={item.comparison} className="rounded-2xl border border-slate-200 bg-slate-50/80 p-5 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{item.comparison}</h3>
                <p>{item.analysis}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-xl p-8 md:p-12 space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">Seller Readiness Checklist</h2>
          <p className="text-gray-700 leading-relaxed">
            Complete these steps before launch to streamline negotiations and strengthen buyer confidence.
          </p>
          <ul className="list-disc list-inside space-y-2 text-sm text-gray-700 leading-relaxed bg-slate-50/80 border border-slate-200 rounded-2xl p-6 shadow-sm">
            {readinessSteps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ul>
        </section>

        <section className="bg-white rounded-lg shadow-xl p-8 md:p-12 space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">Exit Strategy Options</h2>
          <p className="text-gray-700 leading-relaxed">
            One size never fits all. Explore a few approaches to align your sale with future housing or investment goals.
          </p>
          <div className="grid md:grid-cols-3 gap-6 text-sm text-gray-700 leading-relaxed">
            {exitStrategies.map((strategy) => (
              <div key={strategy.option} className="rounded-2xl border border-blue-100 bg-blue-50/80 p-5 shadow-sm">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">{strategy.option}</h3>
                <p>{strategy.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Seller FAQs for Silverstone Ranch</h2>
          <div className="space-y-6">
            {sellerFaqHighlights.map((faq) => (
              <div key={faq.question}>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-xl p-8 md:p-12 space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">Case Study: Turning a Dormant Fairway into a Bidding War</h2>
          <p className="text-gray-700 leading-relaxed">
            A Princeville residence overlooking the dormant fairway initially struggled to attract serious buyers. Dr. Duffy
            executed a four-week transformation: drought-tolerant landscaping created layered privacy, twilight photography
            captured romantic lighting, and a disclosure packet educated prospects on auction outcomes and future scenarios. The
            home launched on a Thursday, hosted a relocation preview Friday, and collected five offers by Monday. The winning
            contract closed 2.7% above list with a rent-back that aligned with the sellers’ Summerlin build timeline.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Key takeaways included the power of transparent communication, targeted staging investments, and a marketing calendar
            that stacked momentum events. Sellers praised the concierge approach for eliminating stress, while buyers appreciated
            the clarity around golf course status. This playbook now guides similar listings across Silverstone, ensuring dormant
            fairway homes remain competitive.
          </p>
        </section>

        <section className="bg-white rounded-lg shadow-xl p-8 md:p-12 space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">Case Study: Estate Sale Coordination with Multiple Heirs</h2>
          <p className="text-gray-700 leading-relaxed">
            When an out-of-state family needed to liquidate a Silverlake home, Dr. Duffy quarterbacked every detail. Estate sale
            partners cataloged belongings, a digital document vault captured signatures across three time zones, and weekly video
            updates kept heirs aligned. Pre-list inspections resolved deferred maintenance, while staging highlighted single-story
            living and proximity to parks. Within ten days the property attracted three financed offers and one cash bid; the family
            selected a buyer willing to accommodate a 30-day rent-back so personal items could be shipped gradually. net proceeds
            exceeded expectations by $34,000 compared to initial valuations.
          </p>
          <p className="text-gray-700 leading-relaxed">
            The success stemmed from organizational rigor and empathy. By managing logistics—including utility transfers, donation
            pickups, and HOA communications—Dr. Duffy allowed the family to focus on memorial planning while trusting the sale was
            handled professionally.
          </p>
        </section>

        <section className="bg-white rounded-lg shadow-xl p-8 md:p-12 space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">Seller Resource Library</h2>
          <p className="text-gray-700 leading-relaxed">
            Access curated resources the moment you onboard. These guides and templates keep everyone aligned and accelerate
            decision-making throughout escrow.
          </p>
          <ul className="list-disc list-inside space-y-2 text-sm text-gray-700 leading-relaxed bg-slate-50/80 border border-slate-200 rounded-2xl p-6 shadow-sm">
            <li>Silverstone Disclosure Guide – plain-language explanations of HOA covenants, golf course status, and climate considerations.</li>
            <li>Pricing Strategy Workbook – interactive spreadsheet modeling three valuation paths with net proceed projections.</li>
            <li>Vendor Playbook – contact list and onboarding instructions for landscapers, organizers, cleaners, and movers accustomed to guard-gated access.</li>
            <li>Moving Countdown Calendar – 60-day checklist covering utility transfers, mail forwarding, pet relocation, and staging upkeep.</li>
            <li>Post-Sale Financial Planning Packet – referrals for CPAs, wealth advisors, and 1031 accommodators to optimize proceeds.</li>
          </ul>
        </section>
      </div>
    </div>
  )
}

