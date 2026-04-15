import Link from 'next/link'
import type { Metadata } from 'next'
import { CONTACT_INFO } from '@/lib/contact-info'
import { buildPageTitle } from '@/lib/metadata'
import { SeoJsonLd } from '@/components/SeoJsonLd'
import { buildFaqSchema, buildHowToSchema, buildWebPageSchema } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Buyer Checklist | Due Diligence & Closing Timeline',
  description:
    'Follow the step-by-step Silverstone Ranch buyer checklist created by Dr. Jan Duffy to cover financing, HOA disclosures, inspections, and closing coordination.',
  keywords: [
    'Silverstone Ranch buyer checklist',
    'buying a home due diligence Las Vegas',
    'Silverstone Ranch escrow timeline',
    'HOA documents Silverstone Ranch',
    'Silverstone Ranch inspection checklist',
  ],
  alternates: {
    canonical: '/buyers-checklist',
  },
  openGraph: {
    title: buildPageTitle('Buyer Checklist | Due Diligence & Closing Timeline'),
    description:
      'Stay on schedule with the Silverstone Ranch buyer checklist—financing prep, HOA documents, inspections, and closing tasks curated by Dr. Jan Duffy.',
    url: `${CONTACT_INFO.website.base}/buyers-checklist`,
    type: 'article',
  },
}

const checklistSections = [
  {
    title: 'Before You Write an Offer',
    items: [
      'Complete financing pre-approval or proof-of-funds for cash purchases.',
      'Discuss ideal floor plans, guard-gated priorities, and timing with Dr. Duffy.',
      'Review recent Silverstone Ranch comps plus golf course status disclosures.',
      'Plan 1–2 backup neighborhoods (Providence, Skye Canyon) in case inventory is limited.',
    ],
  },
  {
    title: 'Offer & Negotiation Phase',
    items: [
      'Structure earnest money deposits and contingency timelines with your agent.',
      'Include appraisal gap coverage or rate buydowns if competing with cash offers.',
      'Request HOA resale package, CC&Rs, and budget immediately upon acceptance.',
      'Schedule inspections within 5 days: general, HVAC, roof, sewer scope if recommended.',
    ],
  },
  {
    title: 'Due Diligence Within 10–15 Days',
    items: [
      'Analyze inspection reports and negotiate repairs, credits, or price adjustments.',
      'Review environmental risk guidance for heat, wind, flood, and wildfire planning.',
      'Confirm insurance coverage, including optional flood or windstorm riders.',
      'Evaluate HOA meeting minutes and special assessment history for upcoming projects.',
    ],
  },
  {
    title: 'Loan Approval & Closing Prep',
    items: [
      'Provide lenders updated documents; lock interest rate and order appraisal.',
      'Coordinate closing timeline with your current housing or relocation provider.',
      'Arrange utilities transfer, mover schedules, and HOA gate access forms.',
      'Plan final walkthrough 48 hours before closing to confirm condition and repairs.',
    ],
  },
]

const howToSteps = [
  {
    title: 'Consult & Get Pre-Approved',
    detail:
      'Meet with Dr. Jan Duffy to align goals, secure financing pre-approval, and receive curated property lists.',
  },
  {
    title: 'Offer Strategy & Negotiation',
    detail: 'Review comps, golf course disclosures, and HOA rules to craft a competitive yet protected offer.',
  },
  {
    title: 'Due Diligence Window',
    detail: 'Order inspections, review HOA resale package, confirm insurance coverage, and evaluate environmental risks.',
  },
  {
    title: 'Closing & Move-In Coordination',
    detail:
      'Finalize loan conditions, walkthrough the property, and coordinate move-in with HOA gate passes and vendors.',
  },
]

const advancedResearch = [
  'Compare each sub-association’s amenities, dues, and architectural guidelines to understand long-term costs.',
  'Map commute options during rush hour to gauge realistically how long it takes to reach the Strip, Summerlin, or Nellis AFB.',
  'Analyze nearby development plans—new retail and road projects often raise property desirability and HOA expectations.',
  'Study environmental considerations (heat risk, wind exposure, monsoon drainage) using the Silverstone environmental guide.',
]

const financingToolkit = [
  'Secure dual pre-approvals (conventional and jumbo) so you can pivot quickly by price band.',
  'Discuss buydown strategies with lenders; many relocation buyers leverage employer credits to reduce first-year payments.',
  'Ask about extended rate locks if you have a home to sell out-of-state—Silverstone inventory can move fast, but you may need flexibility.',
  'Review HOA documentation with your lender to ensure reserve levels meet underwriting requirements.',
]

const inspectionItems = [
  'General home inspection with detailed photo report and repair estimates.',
  'Roof evaluation with emphasis on tile underlayment, flashing, and wind clips.',
  'HVAC performance testing, duct cleaning assessment, and SEER rating verification.',
  'Sewer scope for older phases plus camera inspections on pool plumbing where applicable.',
  'Pest, radon, and pool inspections when property type warrants.',
]

const financingConsiderations = [
  'Compare jumbo products with rate buydown options to remain competitive against cash buyers.',
  'Coordinate loan timelines with HOA resale package delivery to avoid closing delays.',
  'Discuss lock-and-shop strategies if purchasing new construction or homes needing major renovation.',
]

const closingLogistics = [
  'Confirm title vesting, home warranty coverage, and post-possession needs at least one week prior to signing.',
  'Verify gate codes, remote access, and smart home credentials during the final walkthrough.',
  'Schedule cleaners, movers, and landscapers for the day after closing to allow for paint touch-ups or punch-list items.',
]

const relocationTips = [
  'Ship non-essential items ahead of time using climate-controlled services to avoid heat damage during summer moves.',
  'Coordinate DMV registration, Nevada driver’s license appointments, and school enrollment within the first 10 days after closing.',
  'Research local healthcare providers and transfer prescriptions to Centennial Hills pharmacies before move-in.',
]

const hoaDocuments = [
  'Master association CC&Rs, bylaws, and rules plus sub-association supplements if applicable.',
  'Latest reserve study outlining funding levels for common areas and long-term capital projects.',
  'Insurance certificates for master policies covering common walls, guard gates, and clubhouse facilities.',
  'Meeting minutes from the prior 12 months summarizing landscaping initiatives and golf course updates.',
]

const moveInChecklist = [
  'Submit guard gate access forms and request additional RFID decals for household vehicles.',
  'Update mailing address with USPS, financial institutions, and subscription services.',
  'Schedule trash and recycling setup according to the City of Las Vegas calendar.',
  'Introduce yourself to neighbors at the next community event or via Silverstone social groups.',
]

const faqs = [
  {
    question: 'How long does the Silverstone escrow process usually take?',
    answer:
      'Most transactions close within 30–45 days. Build in extra time if you need architectural approvals for renovations, are coordinating out-of-state movers, or require complex financing.',
  },
  {
    question: 'Do I need special HOA forms for gate access?',
    answer:
      'Yes. Submit visitor and vendor forms at least 48 hours in advance. Dr. Duffy’s concierge team sends the latest templates and ensures guards are briefed before inspections or moving trucks arrive.',
  },
  {
    question: 'What happens if the appraisal comes in low?',
    answer:
      'Leverage appraisal gap clauses, request reconsideration with updated comps, or negotiate credits. Dr. Duffy prepares valuation packets tailored to Silverstone before the appraiser visits the property.',
  },
  {
    question: 'Is there a preferred order for inspections?',
    answer:
      'Schedule the general inspection first, followed by specialty inspections based on findings—roof, sewer, pool, and HVAC. This sequencing allows you to renegotiate efficiently within the contingency window.',
  },
  {
    question: 'What post-closing services does Dr. Duffy provide?',
    answer:
      'You receive vendor introductions, quarterly market updates, HOA meeting summaries, and invitations to community events so you stay connected long after move-in.',
  },
]

export default function BuyersChecklistPage() {
  const path = '/buyers-checklist'
  const pageSchema = buildWebPageSchema({
    path,
    name: 'Silverstone Ranch Buyer Checklist',
    description:
      'Step-by-step Silverstone Ranch buyer checklist covering financing, inspections, HOA documentation, and closing tasks with guidance from Dr. Jan Duffy.',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Buyer Checklist', path },
    ],
    additional: {
      about: CONTACT_INFO.businessName,
    },
  })

  const howToSchema = buildHowToSchema({
    path,
    name: 'Silverstone Ranch Buyer Checklist',
    description:
      'Use this Silverstone Ranch buyer roadmap to prepare offers, manage inspections, and coordinate move-in with HOA approvals.',
    steps: howToSteps,
    totalTime: 'P45D',
  })

  const faqSchema = buildFaqSchema(
    path,
    faqs.map((faq) => ({ question: faq.question, answer: faq.answer })),
  )

  const schemaData = [pageSchema, howToSchema, faqSchema].filter(Boolean)

  return (
    <main className="bg-gradient-to-br from-slate-50 to-white min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <SeoJsonLd id="buyers-checklist" data={schemaData as Record<string, unknown>[]} />
      <div className="mx-auto max-w-6xl space-y-16">
        <section className="text-center md:text-left space-y-6">
          <div className="inline-flex items-center rounded-full border border-slate-200 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-slate-700">
            Buyer Toolkit · November 2025
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">Silverstone Ranch Buyer Checklist</h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            Buying in Silverstone Ranch demands a refined approach—balancing guard-gated HOA requirements, the dormant golf
            course, and accelerated sales cycles. This guide outlines each step from pre-approval to move-in so you can
            navigate the process with confidence alongside Dr. Jan Duffy.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Start with the overview below, then dive into the detailed checklist, inspection playbook, financing tasks, and
            closing logistics. Every step includes action items, recommended timelines, and links to supporting resources.
          </p>
        </section>

        <section id="overview" className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">Silverstone Buying Overview</h2>
          <p className="text-sm text-gray-700 leading-relaxed">
            Transactions typically progress over 30–45 days. Buyers should aim for the following milestones:
          </p>
          <ol className="space-y-3 text-sm text-gray-700 list-decimal list-inside bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
            <li>Week 1: Pre-approval, strategy session, property shortlist.</li>
            <li>Week 2: Offer submission, negotiations, earnest money deposit.</li>
            <li>Week 3: Inspection marathon (general, roof, HVAC, sewer), appraisal ordered.</li>
            <li>Week 4: Loan conditions, HOA document review, repair negotiations.</li>
            <li>Week 5: Final walkthrough, closing disclosure, recording, move-in coordination.</li>
          </ol>
          <p className="text-sm text-gray-700 leading-relaxed">
            Relocation buyers arriving from California, Arizona, and military assignments often compress this timeline into
            a single extended trip. Dr. Duffy coordinates private previews and digital walk-throughs so you can select and
            secure a property before boarding your return flight.
          </p>
        </section>

        <section id="advanced-research" className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">Pre-Offer Research Essentials</h2>
          <p className="text-sm text-gray-700 leading-relaxed">
            Layer these research steps onto the standard checklist to make informed decisions and avoid surprises after
            closing.
          </p>
          <ul className="space-y-3 text-sm text-gray-700 leading-relaxed">
            {advancedResearch.map((item) => (
              <li key={item} className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">{item}</li>
            ))}
          </ul>
        </section>

        <section id="checklist" className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">Step-by-Step Checklist</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {checklistSections.map((section) => (
              <div key={section.title} className="bg-white rounded-lg shadow-lg p-8 border border-slate-100">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{section.title}</h3>
                <ul className="space-y-3 text-sm text-gray-700">
                  {section.items.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-1 h-2 w-2 rounded-full bg-blue-500"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section id="financing-toolkit" className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">Financing Toolkit & Lender Strategy</h2>
          <p className="text-sm text-gray-700 leading-relaxed">
            Competitive financing keeps offers resilient even against cash buyers. Coordinate with lenders familiar with
            guard-gated communities and multi-layered HOAs.
          </p>
          <ul className="space-y-3 text-sm text-gray-700 leading-relaxed">
            {financingToolkit.map((item) => (
              <li key={item} className="rounded-lg border border-blue-100 bg-blue-50/80 p-4">{item}</li>
            ))}
          </ul>
        </section>

        <section id="inspection" className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">Inspection & Vendor Playbook</h2>
          <p className="text-sm text-gray-700 leading-relaxed">
            Silverstone Ranch homes benefit from comprehensive due diligence. Coordinate inspections during the first week
            of escrow to preserve your contingency window.
          </p>
          <ul className="space-y-3 text-sm text-gray-700">
            {inspectionItems.map((item) => (
              <li key={item} className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">{item}</li>
            ))}
          </ul>
          <p className="text-sm text-gray-700">
            Dr. Duffy maintains a vetted vendor roster familiar with HOA guidelines, gating logistics, and Silverstone’s
            unique site conditions. Request the list after your consultation.
          </p>
        </section>

        <section id="hoa-documents" className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">Master HOA & Sub-Association Documents</h2>
          <p className="text-sm text-gray-700 leading-relaxed">
            Silverstone Ranch is governed by a master association layered with sub-associations such as The Palms, Tuscany,
            and Pinehurst. Each adds rules and maintenance responsibilities. Request and review the following documents
            during due diligence:
          </p>
          <ul className="space-y-3 text-sm text-gray-700">
            {hoaDocuments.map((doc) => (
              <li key={doc} className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">{doc}</li>
            ))}
          </ul>
          <p className="text-sm text-gray-700">
            Highlight any upcoming capital projects—such as perimeter wall repairs or landscaping upgrades—and factor them
            into your budgeting and negotiation strategy.
          </p>
        </section>

        <section id="financing" className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">Financing & Appraisal Considerations</h2>
          <p className="text-sm text-gray-700 leading-relaxed">
            Align your financing strategy with Silverstone’s price points and appraisal dynamics. Guard-gated premiums and
            golf course disclosures can influence lender underwriting—plan accordingly.
          </p>
          <ul className="space-y-3 text-sm text-gray-700">
            {financingConsiderations.map((item) => (
              <li key={item} className="rounded-lg border border-blue-100 bg-blue-50/80 p-4">{item}</li>
            ))}
          </ul>
          <p className="text-sm text-gray-700 leading-relaxed">
            Provide appraisers with renovation receipts, landscape upgrades, and energy efficiency improvements. These
            supporting documents help defend values when golf course uncertainty enters the conversation.
          </p>
        </section>

        <section id="relocation" className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">Relocation Logistics & Lifestyle Planning</h2>
          <p className="text-sm text-gray-700 leading-relaxed">
            Many Silverstone Ranch buyers relocate from out of state. Use these tips to simplify the transition.
          </p>
          <ul className="space-y-3 text-sm text-gray-700 leading-relaxed">
            {relocationTips.map((tip) => (
              <li key={tip} className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">{tip}</li>
            ))}
          </ul>
          <p className="text-sm text-gray-700 leading-relaxed">
            Dr. Duffy’s concierge team assists with school introductions, fitness club referrals, and local service
            providers so your household settles in quickly.
          </p>
        </section>

        <section id="closing" className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">Closing Logistics & Move-In</h2>
          <p className="text-sm text-gray-700 leading-relaxed">
            The final stretch involves synchronizing title, HOA, and vendor tasks. Use this checklist to stay ahead of the
            closing curve.
          </p>
          <ul className="space-y-3 text-sm text-gray-700">
            {closingLogistics.map((item) => (
              <li key={item} className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">{item}</li>
            ))}
          </ul>
          <p className="text-sm text-gray-700 leading-relaxed">
            Schedule a key exchange meeting at the guard gate or clubhouse to ensure access devices and remotes transfer
            smoothly.
          </p>
        </section>

        <section id="move-in" className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">Move-In & First 30 Days</h2>
          <p className="text-sm text-gray-700 leading-relaxed">
            After recording, handle these essentials to settle in efficiently.
          </p>
          <ul className="space-y-3 text-sm text-gray-700 leading-relaxed">
            {moveInChecklist.map((item) => (
              <li key={item} className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">{item}</li>
            ))}
          </ul>
        </section>

        <section id="toolkit" className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900 text-center">Request the Full Buyer Toolkit</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-3 text-sm text-gray-600">
              {[
                'Printable due diligence checklist in PDF format (provided after consultation).',
                'Vendor roster for inspections, HVAC service, landscapers, and insurance advisors.',
                'Budget worksheet covering closing costs, reserves, and post-move upgrades.',
                'Sample offer language for escalation clauses, appraisal gap coverage, and HOA acknowledgments.',
              ].map((highlight) => (
                <div key={highlight} className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-blue-500"></span>
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
            <div className="space-y-4">
              <Link
                href="/request-info"
                className="block text-center px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl"
              >
                Request Buyer Toolkit Access
              </Link>
              <Link
                href="/book-tour"
                className="block text-center px-6 py-3 bg-white text-blue-600 border-2 border-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-all"
              >
                Schedule Property Tours
              </Link>
              <a
                href={`tel:${CONTACT_INFO.phone.tel}`}
                className="block text-center px-6 py-3 bg-transparent border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-all"
              >
                Call Dr. Jan Duffy: {CONTACT_INFO.phone.display}
              </a>
            </div>
          </div>
        </section>

        <section id="faq" className="bg-white rounded-lg shadow-xl p-8 md:p-12 space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details key={faq.question} className="rounded-lg border border-slate-200 bg-slate-50/80 p-4">
                <summary className="cursor-pointer text-base font-semibold text-gray-900">{faq.question}</summary>
                <p className="mt-3 text-sm text-gray-700 leading-relaxed">{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section id="neighborhood-comparison" className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">Comparing Silverstone to Neighboring Communities</h2>
          <p className="text-sm text-gray-700 leading-relaxed">
            Understanding how Silverstone stacks up against nearby master plans sharpens your offer strategy. Providence
            provides newer construction but lacks guard gates, while Skye Canyon offers an urban village feel with fewer
            mature trees and smaller lot sizes. Summerlin North commands higher HOA dues and similar amenities but carries a
            premium for brand recognition. By aggregating this data, Dr. Duffy helps you calibrate price negotiations,
            repair allowances, and long-term appreciation expectations.
          </p>
          <p className="text-sm text-gray-700 leading-relaxed">
            Buyers prioritizing school zoning, park access, and guard-gated security consistently lean toward Silverstone.
            Investors seeking furnished rental returns compare Pinehurst townhomes to Skye Canyon’s loft products; Silverstone
            wins on occupancy, while Skye Canyon offers more contemporary architecture. Use these insights to justify offer
            terms when sellers question pricing variances.
          </p>
        </section>

        <section id="risk-mitigation" className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">Risk Mitigation & Contingency Planning</h2>
          <p className="text-sm text-gray-700 leading-relaxed">
            Even with thorough due diligence, unexpected issues can surface. Build resilience into your escrow timeline by
            securing backup lenders, maintaining a reserve for post-inspection repairs, and confirming insurance coverage
            before waiving contingencies. If the appraisal returns below contract price, Dr. Duffy prepares reconsiderations
            backed by private-sale comps and renovation receipts. If inspections reveal defects, lean on vendor estimates to
            negotiate credits without derailing timelines.
          </p>
          <p className="text-sm text-gray-700 leading-relaxed">
            Keep a communication log documenting all HOA interactions, gate access requests, and seller disclosures. This
            record protects you during negotiations and informs future resale conversations. In addition, review the golf
            course status summary and environmental risk guide with your lender so underwriting teams understand Silverstone’s
            unique landscape.
          </p>
        </section>

        <section id="post-close" className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">Post-Close Integration & Concierge Support</h2>
          <p className="text-sm text-gray-700 leading-relaxed">
            After recording, Dr. Duffy stays engaged. You will receive quarterly market updates, introductions to HOA board
            members, and invites to neighborhood events so you build relationships quickly. Her concierge team coordinates
            vendor walkthroughs—landscapers, pool techs, smart-home integrators—ensuring warranties transfer and maintenance
            plans are established within the first month.
          </p>
          <p className="text-sm text-gray-700 leading-relaxed">
            For clients relocating with children, Dr. Duffy arranges meet-and-greets with school liaisons, sports leagues, and
            enrichment programs. Active adults receive curated lists of golf groups, volunteer opportunities, and wellness
            classes. These touchpoints transform a transaction into a smooth lifestyle transition.
          </p>
        </section>

        <section id="resources" className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">Resource Directory & Support Network</h2>
          <p className="text-sm text-gray-700 leading-relaxed">
            Bookmark these resources as you move through escrow and settling in. Dr. Duffy maintains relationships with each
            provider, expediting appointments and securing Silverstone-specific guidance when needed.
          </p>
          <ul className="space-y-3 text-sm text-gray-700 leading-relaxed">
            <li>Centennial Hills HOA Portal – Pay assessments, submit architectural requests, and reserve amenities.</li>
            <li>Silverstone Concierge Desk – Book community tours, vendor referrals, and welcome packets.</li>
            <li>Clark County Recorder – Track deed recordings, notice-of-value updates, and HOA filings.</li>
            <li>Southern Nevada Water Authority – Apply for Water Smart Landscape rebates and schedule irrigation audits.</li>
            <li>Las Vegas Global Economic Alliance – Monitor relocation announcements that influence buyer demand.</li>
          </ul>
        </section>

        <section id="timeline-breakdown" className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">Detailed 45-Day Timeline Breakdown</h2>
          <div className="grid md:grid-cols-3 gap-6 text-sm text-gray-700 leading-relaxed">
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Days 1–10 · Discovery</h3>
              <p>Finalize financing, tour priority homes, and gather HOA documents. Begin assembling vendor roster and insurance quotes.</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Days 11–25 · Due Diligence</h3>
              <p>Complete inspections, order appraisal, and negotiate repairs. Review environmental risk report and landscaping budgets.</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Days 26–45 · Closing Prep</h3>
              <p>Finalize underwriting, confirm title vesting, arrange movers, and prepare for final walkthrough with repair receipts in hand.</p>
            </div>
          </div>
        </section>

        <section id="case-studies" className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">Case Studies: Buyer Wins in 2025</h2>
          <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
            <div className="rounded-2xl border border-blue-100 bg-blue-50/80 p-5 shadow-sm">
              <h3 className="text-lg font-semibold text-blue-800 mb-2">Appraisal Gap Success</h3>
              <p>A relocating tech executive offered 3% above list with $25K appraisal gap coverage. Inspection credits offset landscaping updates, leading to a 32-day close.</p>
            </div>
            <div className="rounded-2xl border border-blue-100 bg-blue-50/80 p-5 shadow-sm">
              <h3 className="text-lg font-semibold text-blue-800 mb-2">Cash & Rent-Back Strategy</h3>
              <p>Local buyers sold a Summerlin home, submitted cash with a 45-day rent-back for sellers, and secured a Pinehurst townhome without bidding wars.</p>
            </div>
            <div className="rounded-2xl border border-blue-100 bg-blue-50/80 p-5 shadow-sm">
              <h3 className="text-lg font-semibold text-blue-800 mb-2">Inspection Negotiation Win</h3>
              <p>A dual-inspection approach uncovered roof maintenance needs. Dr. Duffy negotiated a $12K credit while preserving closing timeline.</p>
            </div>
          </div>
        </section>

        <section id="maintenance-plan" className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">Post-Closing Maintenance Priorities</h2>
          <div className="grid md:grid-cols-2 gap-6 text-sm text-gray-700 leading-relaxed">
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">First Week</h3>
              <p>Schedule HVAC service, replace air filters, test smoke/CO detectors, and verify pool equipment settings.</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">First Month</h3>
              <p>Review irrigation timers, set up recurring pest control, and capture baseline utility readings for future comparisons.</p>
            </div>
          </div>
        </section>

        <section id="community-engagement" className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">Community Engagement Roadmap</h2>
          <p className="text-sm text-gray-700 leading-relaxed">
            Join HOA meetings, volunteer committees, and social groups to build relationships. Silverstone offers fitness clubs, pickleball leagues, pet meetups, and book clubs. Participation keeps you informed about community decisions and fosters neighbor connections—critical for quick vendor referrals and support during project approvals.
          </p>
        </section>

        <section className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg shadow-xl p-8 md:p-12 text-white" id="cta">
          <h2 className="text-3xl font-bold mb-4">Need Help with the Next Step?</h2>
          <p className="text-lg text-blue-100 mb-6 max-w-2xl">
            Dr. Jan Duffy coordinates inspections, introduces trusted lenders, and ensures Silverstone Ranch HOA
            documentation is fully reviewed before you release contingencies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/market-insights"
              className="px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl text-center"
            >
              Review Market Insights
            </Link>
            <Link
              href="/environmental-risk"
              className="px-6 py-3 bg-blue-500 text-white border-2 border-white rounded-lg font-semibold hover:bg-blue-400 transition-all text-center"
            >
              Understand Environmental Risk
            </Link>
            <Link
              href="/buy-with-agent"
              className="px-6 py-3 bg-transparent border-2 border-white rounded-lg font-semibold hover:bg-white/10 transition-all text-center"
            >
              Learn Why a Buyer Agent Matters
            </Link>
          </div>
        </section>
      </div>
    </main>
  )
}

