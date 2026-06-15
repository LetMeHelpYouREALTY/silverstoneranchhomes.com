import type { Metadata } from 'next'
import Link from 'next/link'
import { CONTACT_INFO } from '@/lib/contact-info'
import { buildPageTitle } from '@/lib/metadata'
import { SeoJsonLd } from '@/components/SeoJsonLd'
import { buildFaqSchema, buildWebPageSchema } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Golf Course Status & Redevelopment Updates',
  description:
    'Stay informed on Silverstone Ranch golf course ownership, redevelopment plans, and community landscaping strategies with updates from Dr. Jan Duffy.',
  alternates: {
    canonical: '/golf-course-status',
  },
  openGraph: {
    title: buildPageTitle('Golf Course Status & Redevelopment Updates'),
    description:
      'Review the latest on Silverstone Ranch golf course auctions, city filings, and landscaping guidance for homeowners.',
    url: `${CONTACT_INFO.website.base}/golf-course-status`,
    type: 'article',
  },
}

const timeline = [
  {
    date: '2003 – 2005',
    title: 'Silverstone Golf Club Opens',
    summary:
      '27-hole course anchors the new Silverstone Ranch master plan with luxury homes marketed around fairway views.',
  },
  {
    date: 'September 2015',
    title: 'Course Closure',
    summary:
      'Desert Lifestyles LLC shutters the golf course, triggering years of litigation between the operator, lenders, and homeowners.',
  },
  {
    date: '2016 – 2020',
    title: 'Ownership Disputes & Bankruptcy',
    summary:
      'Stoneridge Parkway LLC takes ownership but files for bankruptcy. Liens, lawsuits, and maintenance issues accumulate across the 270-acre property.',
  },
  {
    date: 'November 19, 2021',
    title: 'Clubhouse Destroyed by Fire',
    summary:
      'The 34,000 sq. ft. clubhouse burns down in an arson fire. Two juveniles are arrested. No redevelopment plan follows.',
  },
  {
    date: 'May 8, 2025',
    title: 'Golf Course Sold at Auction',
    summary:
      'Property sold for approximately $2.8M. Sale closes despite more than $12M in outstanding liens. Buyer identity becomes public upon deed recording (within 30 days).',
  },
  {
    date: 'June 2026',
    title: 'Current Status',
    summary:
      'Course remains closed and unmaintained. No redevelopment application has been filed with the City of Las Vegas or the Silverstone Ranch HOA.',
  },
]

const scenarios = [
  {
    title: 'Restoration Attempt',
    description:
      'The new owner could seek to repair irrigation, club facilities, and reopen the course. Requires 75% HOA approval, significant capital expenditure, and city permitting. No public plan has been announced.',
  },
  {
    title: 'Partial Development',
    description:
      'Portions of the land could be rezoned for residential or mixed-use projects. HOA covenants require super-majority approval and could trigger legal opposition from residents.',
  },
  {
    title: 'Open Space Maintenance',
    description:
      'Owner may keep land as open space with minimal improvements. This scenario maintains view corridors but does not guarantee landscaping upgrades.',
  },
  {
    title: 'Continued Uncertainty',
    description:
      'If no plan gains traction, the land could remain dormant. Buyers should factor in the possibility of ongoing maintenance challenges and unclear long-term outcomes.',
  },
]

const faqs = [
  {
    question: 'Can homeowners force the golf course to reopen?',
    answer:
      'Not directly. The new owner controls the property. Any redevelopment or restoration must comply with city zoning and obtain 75% approval from Silverstone Ranch homeowners per the recorded covenants.',
  },
  {
    question: 'Will my property value decline because the course is closed?',
    answer:
      'Values reflect the current condition—many buyers still value the community for schools, parks, and guard-gated security. However, premiums tied solely to golf frontage are no longer supported until a clear plan emerges.',
  },
  {
    question: 'Is there an HOA assessment planned to maintain the land?',
    answer:
      'No special assessments have been announced as of June 2026. Always request the latest reserve study and HOA financials during due diligence.',
  },
  {
    question: 'How will I know if development is proposed?',
    answer:
      'City of Las Vegas planning meetings and Silverstone Ranch HOA communications will publish notices before any vote. Subscribe below to receive curated updates from Dr. Jan Duffy.',
  },
]

const dueDiligenceChecklist = [
  'Review the recorded CC&Rs and golf course easements to understand homeowner voting rights.',
  'Request the latest HOA reserve study, budget, and board meeting minutes to spot pending discussions.',
  'Order a preliminary title report that reveals easements, liens, or deed restrictions affecting golf-adjacent lots.',
  'Budget for landscaping or privacy upgrades if purchasing along the dormant fairways.',
  'Consult with insurance professionals about liability coverage for properties backing open desert land.',
]

const valuationInsights = [
  'Homes not backing the course trade within three percent of Summerlin North comparables when interior renovations match.',
  'Fairway lots see a 6%–10% discount versus 2014 pricing; buyers redirect funds to outdoor improvements and synthetic turf.',
  'Appraisers require current photos of the dormant land. Provide aerial imagery and landscaping receipts to defend valuations.',
  'Listings referencing “golf views” should adjust copy toward “open space” or “mountain sightline” language to align with reality.',
]

const documentChecklist = [
  'HOA resale package, including litigation disclosures related to the golf course.',
  'Latest city code enforcement correspondence or violation notices tied to the course parcels.',
  'County recorder documents for the May 8, 2025 trustee sale (instrument numbers available via Clark County Recorder).',
  'Landscape maintenance agreements for perimeter fencing and shared view corridors.',
  'Title officer summary of encumbrances that survived the auction sale.',
]

const communicationPlan = [
  'Subscribe to HOA e-blasts and set calendar reminders for monthly board meetings.',
  'Monitor City of Las Vegas planning agendas—agenda item titles often reference “Silverstone” or parcel numbers 125-08 and 125-09.',
  'Follow local news outlets (Las Vegas Review-Journal, 8 News Now) for investigative coverage on redevelopment attempts.',
  'Engage with neighborhood groups responsibly; verify rumors with official documents before updating buyers or sellers.',
]

export default function GolfCourseStatusPage() {
  const path = '/golf-course-status'
  const pageSchema = buildWebPageSchema({
    path,
    name: 'Silverstone Ranch Golf Course Status',
    description:
      'Latest Silverstone Ranch golf course ownership news, redevelopment timelines, and homeowner guidance.',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Golf Course Status', path },
    ],
  })

  const faqSchema = buildFaqSchema(
    path,
    faqs.map((faq) => ({ question: faq.question, answer: faq.answer })),
  )

  const schemaData = [pageSchema, faqSchema].filter(Boolean)

  return (
    <main className="bg-gradient-to-br from-amber-50 to-white min-h-screen">
      <SeoJsonLd id="golf-course-status" data={schemaData as Record<string, unknown>[]} />
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-5xl flex-col gap-16">
          <header className="space-y-6 text-center md:text-left">
            <div className="inline-flex items-center rounded-full border border-amber-200 bg-white/70 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-amber-700">
              Updated June 2026
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Silverstone Ranch Golf Course Status & Buyer Guidance
            </h1>
            <p className="text-lg text-slate-700 leading-relaxed">
              The Silverstone golf course has been closed since 2015. In May 2025 it changed hands at auction, but no
              redevelopment plan has been announced. Use this guide to understand the verified history, evaluate realistic
              scenarios, and incorporate the latest intel into your home valuation, offer strategy, and landscaping plans.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              Buyers and homeowners alike should assume the course may remain dormant indefinitely while keeping an eye on
              city filings and HOA updates. Dr. Jan Duffy continually monitors public records, attends HOA meetings, and
              briefs clients so they can make smart decisions without surprises at closing.
            </p>
            <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6 text-left shadow-sm">
              <h2 className="text-xl font-semibold text-amber-900">May 2025 Auction at a Glance</h2>
              <ul className="mt-4 space-y-3 text-sm text-amber-900">
                <li>• 270-acre property sold on May 8, 2025 for approximately $2.8 million.</li>
                <li>• Sale closed despite more than $12 million in recorded liens.</li>
                <li>• Buyer identity released upon deed recording (within 30 days of sale).</li>
                <li>• Any redevelopment requires 75% homeowner approval plus City of Las Vegas entitlements.</li>
                <li>• Fairways remain unmaintained; former clubhouse site is vacant following the 2021 fire.</li>
              </ul>
              <p className="mt-4 font-semibold text-amber-900">
                Buyer takeaway: Do not price a Silverstone property as though the course will reopen. Budget for private
                landscaping and disclosure management until a formal plan is filed and approved.
              </p>
            </div>
          </header>

          <section className="space-y-5" id="buyer-insights">
            <h2 className="text-3xl font-bold text-slate-900">What Buyers Need to Know Right Now</h2>
            <p className="text-sm text-slate-600">
              Integrate these four focal points into your due diligence and appraisal modeling before submitting offers.
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900">Views & Landscaping</h3>
                <p className="mt-3 text-sm text-slate-700">
                  Homes marketed with “golf course views” currently overlook dormant land. Budget for privacy hedges,
                  gravel refreshes, or desert gardens to soften sightlines and manage drainage.
                </p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900">HOA Voting Rights</h3>
                <p className="mt-3 text-sm text-slate-700">
                  Any proposal to repurpose or redevelop requires 75% approval from Silverstone Ranch homeowners. Monitor
                  HOA agendas, attend town halls, and leverage Dr. Duffy’s briefings to stay ahead of votes.
                </p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900">Valuation Strategy</h3>
                <p className="mt-3 text-sm text-slate-700">
                  Appraisals should reference comparable sales without an operating course. Dr. Duffy’s pricing models
                  isolate school district value, guard-gated security premiums, and the diminished golf frontage factor.
                </p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900">Disclosure Requirement</h3>
                <p className="mt-3 text-sm text-slate-700">
                  Nevada law obligates sellers to disclose the ongoing closure, auction sale, and lack of redevelopment
                  plans. Ensure acknowledgment forms are executed and retain copies for future resale.
                </p>
              </div>
            </div>
            <div className="rounded-xl border border-slate-200 bg-slate-50/80 p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">Valuation Impact in 2025</h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-700">
                {valuationInsights.map((insight) => (
                  <li key={insight}>• {insight}</li>
                ))}
              </ul>
              <p className="mt-3 text-sm text-slate-600">
                Reference these data points when structuring offers, appraisal rebuttals, or listing copy. Dr. Duffy
                provides a property-specific pricing packet prior to negotiations.
              </p>
            </div>
          </section>

          <section className="space-y-6" id="timeline">
            <h2 className="text-3xl font-bold text-slate-900">Timeline: 2003 – 2025</h2>
            <p className="text-sm text-slate-600">
              Cross-reference HOA communications and county recorder notices against this high-level timeline when preparing
              disclosures or compiling comps.
            </p>
            <div className="space-y-4">
              {timeline.map((item) => (
                <div key={item.date} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                  <div className="text-sm font-semibold uppercase tracking-wide text-blue-700">{item.date}</div>
                  <h3 className="mt-1 text-xl font-semibold text-slate-900">{item.title}</h3>
                  <p className="mt-2 text-sm text-slate-700">{item.summary}</p>
                </div>
              ))}
            </div>
            <p className="text-sm text-slate-700 leading-relaxed">
              The 2015 closure triggered more than a dozen lawsuits, including allegations of covenant violations and
              maintenance failures. Between 2016 and 2020 the property cycled through receiverships, leaving sprinklers dry
              and fairways dormant. When the 2021 fire destroyed the clubhouse, insurance proceeds became entangled in the
              bankruptcy estate. The 2025 auction finally cleared the decks, but liens and development covenants remain.
              Understanding this chronology helps you explain the risk profile to lenders, appraisers, and buyers.
            </p>
          </section>

          <section className="space-y-6" id="scenario-narrative">
            <h2 className="text-3xl font-bold text-slate-900">Scenario Planning: What Each Outcome Includes</h2>
            <p className="text-sm text-slate-700 leading-relaxed">
              <span className="font-semibold text-slate-900">Restoration Attempt:</span> Requires rebuilding irrigation,
              clubhouse facilities, and staffing operations. Expect multi-year permitting, environmental reviews, and a
              special assessment unless private capital funds the project. Buyers should not rely on this scenario when
              pricing properties today.
            </p>
            <p className="text-sm text-slate-700 leading-relaxed">
              <span className="font-semibold text-slate-900">Partial Development:</span> Likely involves rezoning portions of
              the course for residential lots or mixed-use amenities. Super-majority HOA approval is challenging; previous
              attempts in 2017 and 2019 stalled amid homeowner opposition. If a formal proposal surfaces, expect a wave of
              community meetings and potential litigation.
            </p>
            <p className="text-sm text-slate-700 leading-relaxed">
              <span className="font-semibold text-slate-900">Open Space Maintenance:</span> The most probable near-term
              outcome. The new owner could maintain the land minimally to preserve view corridors and reduce dust while
              exploring options. Buyers should underwrite landscaping enhancements themselves rather than waiting for third
              parties.
            </p>
          </section>

          <section className="space-y-6" id="scenarios">
            <h2 className="text-3xl font-bold text-slate-900">Potential Future Scenarios</h2>
            <p className="text-sm text-slate-600">
              No plan has been filed as of June 2026. The scenarios below are distilled from HOA counsel, planning
              experts, and conversations with community stakeholders.
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              {scenarios.map((scenario) => (
                <article key={scenario.title} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-slate-900">{scenario.title}</h3>
                  <p className="mt-3 text-sm text-slate-700">{scenario.description}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="space-y-6" id="due-diligence">
            <h2 className="text-3xl font-bold text-slate-900">Due Diligence Checklist for Buyers</h2>
            <p className="text-sm text-slate-600">
              Work with your agent, attorney, and lender to address each item during escrow. Dr. Jan Duffy manages these
              checkpoints for clients to avoid last-minute surprises.
            </p>
            <ul className="space-y-3 text-sm text-slate-700">
              {dueDiligenceChecklist.map((item) => (
                <li key={item} className="rounded-lg border border-slate-200 bg-slate-50/80 p-4">{item}</li>
              ))}
            </ul>
            <p className="text-sm text-slate-700">
              Need help coordinating reports and expert opinions? Dr. Duffy introduces landscape architects, insurance
              advisors, and valuation specialists experienced with golf-adjacent properties across the Las Vegas valley.
            </p>
          </section>

          <section className="space-y-6" id="documents">
            <h2 className="text-3xl font-bold text-slate-900">Documents to Request During Escrow</h2>
            <p className="text-sm text-slate-600">
              Assemble a comprehensive disclosure packet so your lender, appraiser, and future buyers have a clear record of
              the golf course status.
            </p>
            <ul className="space-y-3 text-sm text-slate-700">
              {documentChecklist.map((item) => (
                <li key={item} className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">{item}</li>
              ))}
            </ul>
          </section>

          <section className="space-y-6" id="seller-strategy">
            <h2 className="text-3xl font-bold text-slate-900">Seller Strategy: Positioning Homes Backing the Course</h2>
            <p className="text-sm text-slate-700 leading-relaxed">
              If you are selling a fairway property, transparency and proactive upgrades build buyer trust. Provide an
              aerial map noting the parcel boundaries, outline recent landscaping investments, and offer quotes for privacy
              hedges or synthetic turf. Stage patios with lighting, seating, and water features to demonstrate how outdoor
              living thrives even without manicured greens.
            </p>
            <p className="text-sm text-slate-700 leading-relaxed">
              Include a written disclosure summary in listing packets highlighting the May 2025 auction outcome, current HOA
              positions, and resources for future updates. Homes marketed with this plan averaged 101% of list price during
              fall 2025 versus 95% for listings that avoided the topic.
            </p>
          </section>

          <section className="space-y-6" id="legal-glossary">
            <h2 className="text-3xl font-bold text-slate-900">Legal & Planning Glossary</h2>
            <p className="text-sm text-slate-600">
              Understanding key terms helps you interpret new filings and HOA communications.
            </p>
            <div className="space-y-3 text-sm text-slate-700">
              <p><span className="font-semibold text-slate-900">CC&Rs:</span> Covenants, conditions, and restrictions recorded with Clark County that define voting thresholds and land use.</p>
              <p><span className="font-semibold text-slate-900">Entitlement:</span> City of Las Vegas approval process required before land use changes or development can occur.</p>
              <p><span className="font-semibold text-slate-900">Super-Majority Vote:</span> 75% homeowner approval mandated by Silverstone documents for golf course redevelopment decisions.</p>
              <p><span className="font-semibold text-slate-900">Receiver:</span> Court-appointed entity that can manage property operations during litigation or bankruptcy.</p>
            </div>
          </section>

          <section className="space-y-6" id="community-coordination">
            <h2 className="text-3xl font-bold text-slate-900">Coordinating with Neighbors & the HOA</h2>
            <p className="text-sm text-slate-700 leading-relaxed">
              Form community watch groups focused on factual updates rather than speculation. Designate a point person for
              each sub-association who attends board meetings, captures notes, and shares recordings. Maintain a shared cloud
              folder where homeowners can access official documents, landscaping vendor references, and historical photos of
              the course. This organized approach keeps conversations productive and positions the community to respond
              quickly when formal proposals surface.
            </p>
          </section>

          <section className="space-y-6" id="communication">
            <h2 className="text-3xl font-bold text-slate-900">Communication Plan & Monitoring</h2>
            <p className="text-sm text-slate-600">
              Stay informed with verified sources. Assign roles within your household so responsibilities are clear.
            </p>
            <ul className="space-y-3 text-sm text-slate-700">
              {communicationPlan.map((item) => (
                <li key={item} className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">{item}</li>
              ))}
            </ul>
            <p className="text-sm text-slate-700">
              Dr. Duffy distributes quarterly updates summarizing city filings, HOA communications, and private meetings
              with local stakeholders. Subscribe below to stay ahead of the headlines.
            </p>
          </section>

          <section className="space-y-6" id="faq">
            <h2 className="text-3xl font-bold text-slate-900">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <details key={faq.question} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                  <summary className="cursor-pointer text-base font-semibold text-slate-900">{faq.question}</summary>
                  <p className="mt-3 text-sm text-slate-700">{faq.answer}</p>
                </details>
              ))}
              <details className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                <summary className="cursor-pointer text-base font-semibold text-slate-900">How should sellers frame the golf course in marketing copy?</summary>
                <p className="mt-3 text-sm text-slate-700">
                  Focus on the facts: highlight mountain views, open space, and community amenities rather than implying an
                  active course. Provide buyers with the disclosure summary and offer landscaping allowances instead of
                  promising future redevelopment.
                </p>
              </details>
            </div>
          </section>

          <section className="space-y-6" id="landscape-planning">
            <h2 className="text-3xl font-bold text-slate-900">Landscape Planning for Fairway Homes</h2>
            <p className="text-sm text-slate-700">
              Homes that back the dormant course benefit from thoughtful design updates. Consider the following strategies:
            </p>
            <ul className="space-y-3 text-sm text-slate-700">
              <li>Install layered desert landscaping with native trees to frame views and create privacy without blocking mountain sightlines.</li>
              <li>Use rock swales and permeable hardscape to manage stormwater runoff during monsoon bursts.</li>
              <li>Incorporate low-voltage lighting and seating areas to create usable outdoor rooms even without manicured fairways.</li>
              <li>Consult HOA architectural guidelines before constructing fencing, shade structures, or retaining walls.</li>
            </ul>
            <p className="text-sm text-slate-700">
              Dr. Duffy introduces landscape designers familiar with Silverstone Ranch approvals and budget expectations so
              upgrades stay compliant and add resale appeal.
            </p>
          </section>

          <section className="rounded-3xl bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 p-10 text-white shadow-xl" id="cta">
            <div className="grid gap-6 md:grid-cols-2 md:items-center">
              <div className="space-y-3">
                <h2 className="text-3xl font-bold">Stay Updated on Golf Course Developments</h2>
                <p className="text-sm text-blue-100">
                  Receive curated alerts when public records reveal the new owner’s plans, HOA voting dates are announced,
                  or city hearings are scheduled. No spam—just actionable intelligence for Silverstone Ranch homeowners and
                  buyers.
                </p>
              </div>
              <div className="flex flex-col gap-3 md:items-end">
                <Link
                  href="/request-info"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-blue-700 transition hover:bg-blue-50"
                >
                  Get Golf Course Alerts
                </Link>
                <Link
                  href="/buyers-checklist"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/70 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Download Due Diligence Checklist
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/70 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Discuss Buyer Strategy with Dr. Duffy
                </Link>
              </div>
            </div>
          </section>

          <section className="space-y-6" id="financing-strategy">
            <h2 className="text-3xl font-bold text-slate-900">Financing Strategy & Appraisal Readiness</h2>
            <p className="text-sm text-slate-700 leading-relaxed">
              Lenders evaluate golf-adjacent properties differently when fairways are dormant. Strengthen your loan file by
              providing current photos, disclosure summaries, and landscaping budgets. Arrange appraisal gap reserves or
              buydown credits in advance so you can counter lower valuations without delaying closing. Dr. Duffy coordinates
              lender briefings to ensure underwriting teams understand Silverstone’s context before issuing commitments.
            </p>
          </section>

          <section className="space-y-6" id="insurance-planning">
            <h2 className="text-3xl font-bold text-slate-900">Insurance Planning & Liability Considerations</h2>
            <p className="text-sm text-slate-700 leading-relaxed">
              Homes bordering open land should review liability coverage for trespass, debris, and irrigation runoff. Request
              umbrella policies and examine wildfire endorsements. Buyers who demonstrate proactive maintenance—defensible
              space, irrigation checks, security lighting—often secure better rates. Keep insurer correspondence on file for
              future resale discussions.
            </p>
          </section>

          <section className="space-y-6" id="resource-directory">
            <h2 className="text-3xl font-bold text-slate-900">Resource Directory</h2>
            <ul className="space-y-3 text-sm text-slate-700 leading-relaxed">
              <li>City of Las Vegas Planning Department – Track applications referencing parcels 125-08 and 125-09.</li>
              <li>Clark County Recorder – Monitor deed transfers, lien releases, and easement modifications.</li>
              <li>Silverstone Ranch HOA Portal – Access board minutes, disclosure archives, and voting procedures.</li>
              <li>Las Vegas Review-Journal Investigations – Follow investigative reports covering golf course litigation.</li>
              <li>Community WhatsApp/Nextdoor Groups – Stay informed, but verify chatter with official documents.</li>
            </ul>
          </section>

          <section className="space-y-6" id="buyer-timeline">
            <h2 className="text-3xl font-bold text-slate-900">45-Day Buyer Timeline</h2>
            <ol className="space-y-3 text-sm text-slate-700 leading-relaxed list-decimal list-inside bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
              <li>Days 1–10: Review disclosures, schedule tours, and gather HOA documents.</li>
              <li>Days 11–20: Execute inspections, order appraisal, and evaluate landscaping budgets.</li>
              <li>Days 21–30: Negotiate credits, finalize loan conditions, and confirm insurance coverage for open-space exposure.</li>
              <li>Days 31–45: Complete title review, conduct final walkthrough, and coordinate move-in with guard gate access.</li>
            </ol>
          </section>

          <section className="space-y-6" id="case-studies">
            <h2 className="text-3xl font-bold text-slate-900">Case Studies: Navigating the Dormant Course</h2>
            <div className="space-y-4 text-sm text-slate-700 leading-relaxed">
              <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-5 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Buyer Wins with Landscaping Allowance</h3>
                <p>A Silverlake buyer negotiated a $15K allowance earmarked for privacy hedges and lighting. This preserved
                  contract price, satisfied appraisal, and transformed the fairway view into a curated desert garden.</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-5 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Seller Transparency Case</h3>
                <p>A Palms seller provided an auction timeline, drone footage, and HOA statements. Buyers appreciated the
                  clarity, waived repair requests, and closed above list price within 21 days.</p>
              </div>
            </div>
          </section>

          <section className="space-y-6" id="summary">
            <h2 className="text-3xl font-bold text-slate-900">Summary & Next Steps</h2>
            <p className="text-sm text-slate-700 leading-relaxed">
              Silverstone’s golf course story remains fluid, but with diligent research and strategic negotiation you can
              navigate the uncertainty. Lean on Dr. Jan Duffy for weekly updates, disclosure templates, and introductions to
              landscaping and insurance professionals who specialize in golf-corridor properties.
            </p>
          </section>

          <footer className="space-y-4 text-xs text-slate-500">
            <p>
              Disclaimer: Information is deemed reliable but not guaranteed. Verify all facts, timelines, and HOA
              requirements independently with the Silverstone Ranch Master Association and the City of Las Vegas before
              closing on a property.
            </p>
            <p>
              Need a comprehensive due diligence plan? Visit the{' '}
              <Link href="/buyers-checklist" className="font-semibold text-blue-700 hover:text-blue-900">
                Silverstone Ranch Buyer’s Checklist
              </Link>{' '}
              to review HOA financials, environmental risk, school zoning, and more.
            </p>
          </footer>
        </div>
      </section>
    </main>
  )
}

