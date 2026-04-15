import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import { Phone, Mail, ExternalLink, Award, Briefcase, Users, Calendar, Newspaper } from 'lucide-react'
import { CONTACT_INFO } from '@/lib/contact-info'
import { buildPageTitle } from '@/lib/metadata'
import { SeoJsonLd } from '@/components/SeoJsonLd'
import { buildFaqSchema, buildWebPageSchema } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Meet Dr. Jan Duffy | REALTOR®',
  description:
    'Learn about Dr. Jan Duffy’s concierge approach, credentials, and community leadership serving Silverstone Ranch buyers and sellers.',
  alternates: {
    canonical: '/agent',
  },
  openGraph: {
    title: buildPageTitle('Meet Dr. Jan Duffy | REALTOR®'),
    description:
      'Discover the concierge representation, accolades, and Silverstone Ranch expertise provided by Dr. Jan Duffy REALTOR®.',
    url: `${CONTACT_INFO.website.base}/agent`,
    type: 'profile',
  },
}

const credentials = [
  'Top 1% Las Vegas REALTOR® · Berkshire Hathaway HomeServices',
  'Doctorate in Education – research-driven approach to market insights',
  'Certified Luxury Home Marketing Specialist (CLHMS)',
  'Member, Institute for Luxury Home Marketing & Women’s Council of REALTORS®',
]

const conciergeServices = [
  'Guard-gated tour scheduling with HOA approval, guest access, and private previews',
  'Tailored relocation kits covering school enrollment, healthcare providers, and utility setup',
  'Vendor network for inspections, renovation design, staging, and smart-home integrations',
  'Weekly status reports covering contract milestones, appraisal updates, and HOA approvals',
]

const successStories = [
  {
    title: 'California to Silverstone in 21 Days',
    summary:
      'Negotiated a $18K landscaping credit and five-day rent-back, giving the relocating buyers time to move while the seller completed their build in Skye Canyon.',
  },
  {
    title: 'Medical Professionals Win with FHA Jumbo Blend',
    summary:
      'Structured a dual-loan approach with rate buydowns, allowing the couple to secure a Pinehurst townhome ahead of cash investors without waiving protections.',
  },
  {
    title: 'Investor Secures Long-Term Tenant Pre-Close',
    summary:
      'Guided the buyer through HOA rental approval, vendor upgrades, and corporate lease placement, yielding a 6.1% cap rate.',
  },
]

const communityInvolvement = [
  'Annual sponsor of the Silverstone Ranch Community Fall Festival & Charity Drive',
  'Chair, Centennial Hills Education Partnerships supporting scholarships and classroom grants',
  'Volunteer mentor for UNLV real estate students and Women’s Council of REALTORS® leadership programs',
]

const faqs = [
  {
    question: 'How does Dr. Duffy uncover off-market opportunities?',
    answer:
      'Through long-standing relationships with Silverstone homeowners, HOA stakeholders, and relocation partners, Dr. Duffy is notified of upcoming listings weeks in advance. Clients receive private preview windows before homes hit the MLS.',
  },
  {
    question: 'What does the concierge team handle during escrow?',
    answer:
      'Inspection scheduling, appraisal coordination, repair negotiation, HOA document review, contractor bids, lender communication, and weekly milestone reporting so buyers and sellers stay confident.',
  },
  {
    question: 'Can Dr. Duffy help with new construction near Silverstone?',
    answer:
      'Yes. She negotiates builder incentives, monitors construction milestones, and aligns move-in timelines with the sale or purchase of Silverstone properties to minimize double moves and carrying costs.',
  },
]

const careerTimeline = [
  {
    year: '2008',
    milestone:
      'Transitioned from higher education leadership into residential real estate, bringing data analysis and curriculum design skills into market research and client education.',
  },
  {
    year: '2012',
    milestone:
      'Joined Berkshire Hathaway HomeServices and launched a concierge vendor network tailored to guard-gated and golf community homeowners.',
  },
  {
    year: '2017',
    milestone:
      'Expanded the relocation division, partnering with regional hospitals, gaming enterprises, and defense contractors to support executive transfers into Centennial Hills.',
  },
  {
    year: '2020',
    milestone:
      'Pioneered virtual open house experiences for Silverstone listings, blending 3D tours, live Q&A, and HOA meet-the-neighbor sessions during the pandemic pivot.',
  },
  {
    year: '2024',
    milestone:
      'Ranked among the top 1% of Las Vegas REALTORS® for closed volume.',
  },
]

const mediaFeatures = [
  {
    outlet: 'Las Vegas Review-Journal',
    highlight: 'Quoted on the future of Northwest Las Vegas master plans and the rebirth of guard-gated amenities following golf course closures.',
  },
  {
    outlet: 'FOX5 Las Vegas',
    highlight: 'Regular market analyst discussing relocation trends, HOA resources, and seasonal pricing shifts in Centennial Hills.',
  },
  {
    outlet: 'Berkshire Hathaway Luxury Collection Magazine',
    highlight: 'Featured for developing data-backed marketing narratives that resonate with West Coast move-up buyers.',
  },
]

const partnershipHighlights = [
  {
    title: 'Relocation & Corporate Services',
    detail:
      'Dr. Duffy is on the preferred agent list for major healthcare systems, hospitality brands, and federal contractors. She coordinates neighborhood immersions, temporary housing, and school tours for executives and clinical hires.',
  },
  {
    title: 'Builder & Developer Liaison',
    detail:
      'Collaborates with new-home builders in Skye Canyon, Tule Springs, and Summerlin to negotiate design incentives, ensuring clients can bridge timelines between new construction and Silverstone resale transactions.',
  },
  {
    title: 'Philanthropic Partnerships',
    detail:
      'Supports Project 150, Nevada Partnership for Homeless Youth, and local school foundations. Proceeds from every Silverstone sale fund classroom technology and community wellness initiatives.',
  },
]

const educationBackground = [
  {
    degree: 'Doctor of Education (Ed.D.)',
    institution: 'Pepperdine University',
    focus:
      'Organizational leadership and curriculum design—frameworks now used to translate market data into actionable buyer and seller roadmaps.',
  },
  {
    degree: 'Master of Science – Communication',
    institution: 'Virginia Commonwealth University',
    focus:
      'Persuasion theory and stakeholder communication, supporting transparent negotiations and HOA collaboration across Silverstone enclaves.',
  },
  {
    degree: 'Bachelor of Science – Business Administration',
    institution: 'University of Nevada, Las Vegas',
    focus:
      'Real estate finance, marketing, and analytics coursework tailored to the Las Vegas metro—foundational for pricing strategy and investment modeling.',
  },
]

const clientPlaybooks = [
  {
    clientType: 'Relocation Households',
    highlights: [
      'Virtual orientation with neighborhood flyovers, guard gate introductions, and school enrollment planning.',
      'Cross-state timeline mapping to coordinate home sale in origin city with Silverstone purchase.',
      'Access to vetted vendors for immediate move-in projects such as security system upgrades and smart irrigation installs.',
    ],
  },
  {
    clientType: 'Move-Up Sellers & Buyers',
    highlights: [
      'Equity analysis compares upgrade ROI versus list-now scenarios, supported by staging and contractor coordination.',
      'Back-to-back transaction management with bridge financing options and rent-back negotiation strategies.',
      'Weekly progress dashboards covering listing prep, showings, offer timelines, and purchase escrow milestones.',
    ],
  },
  {
    clientType: 'Investors & 1031 Exchanges',
    highlights: [
      'Cap rate modeling for Pinehurst townhomes and nearby master-planned rental demand.',
      'Lease-up services, corporate housing partnerships, and HOA compliance oversight.',
      'Coordination of 1031 identification windows, lender approvals, and property management handoffs.',
    ],
  },
]

const silverstoneMap = [
  {
    pillar: 'The Palms & Princeville',
    insight:
      'Estate lots with entertainer layouts. Dr. Duffy monitors landscaping regulations, golf course view corridors, and recent custom remodel valuations to keep pricing synchronized with luxury demand.',
  },
  {
    pillar: 'Silverlake & Somerset',
    insight:
      'Single-story enclaves ideal for downsizers. Pricing depends on pool upgrades and HVAC efficiency—concierge teams prioritize pre-inspections and energy audits before launch.',
  },
  {
    pillar: 'Pinehurst Townhomes',
    insight:
      'Investor and lock-and-leave favorite. HOA guidelines shift seasonally; Dr. Duffy stays in constant contact with the board to expedite approvals for tenancy and design updates.',
  },
  {
    pillar: 'Non-Gated Villages',
    insight:
      'Amberly, Clairbrook, Eastpoint, and Parkfield deliver approachable price points. Emphasis on neighborhood amenity access and proximity to parks strengthens buyer conversion.',
  },
]

const givingBack = [
  {
    initiative: 'Silverstone Scholarship Fund',
    detail:
      'Annual scholarships for graduating Arbor View High School seniors pursuing STEM or healthcare degrees. Funded through a portion of Silverstone transaction proceeds.',
  },
  {
    initiative: 'Community Resilience Workshops',
    detail:
      'Hosts quarterly sessions on heat mitigation, emergency preparedness, and HOA best practices with city planners and Las Vegas Fire & Rescue representatives.',
  },
  {
    initiative: 'Neighborhood Wellness Drives',
    detail:
      'Organizes blood drives, food pantry collections, and pet adoption events in partnership with local nonprofits and the guard gate staff.',
  },
]

const closingChecklist = [
  'Schedule a strategy call to outline goals, timelines, and budget parameters.',
  'Receive your personalized Silverstone Roadmap—neighborhood matches, vendor contacts, and lender introductions.',
  'Tour curated homes virtually or in person with concierge scheduling and disclosure packets pre-delivered.',
  'Move forward with confident negotiations supported by appraisal-ready data, inspection guidance, and contractual oversight.',
  'Celebrate closing with Dr. Duffy’s relocation concierge, which coordinates move-in services, guard gate registration, and community introductions.',
]

const analyticsLab = [
  {
    title: 'Weekly Market Pulse',
    description:
      'A proprietary dashboard monitors absorption rates, pricing shifts, and competing inventory across Centennial Hills and Summerlin, giving Silverstone clients context beyond their neighborhood.',
  },
  {
    title: 'Scenario Forecasting',
    description:
      'What-if modeling evaluates multiple pricing strategies, renovation investments, and closing timelines to anticipate negotiation outcomes and net proceeds.',
  },
  {
    title: 'Buyer Behavior Index',
    description:
      'Tracks relocation inquiries, corporate relocation budgets, and downstream demand from feeder markets such as Southern California, Phoenix, and Seattle.',
  },
]

const communicationStandards = [
  '24/7 accessibility via phone, text, or concierge portal with two-hour maximum response time during active escrow.',
  'Weekly executive summaries summarizing milestones, financial updates, and upcoming decisions for all parties.',
  'Document vault with version control, ensuring HOA docs, inspection reports, and lender communications stay organized.',
  'Dedicated relocation portal for out-of-state clients featuring video updates, digital signatures, and expense tracking.',
]

const buyerWorkflow = [
  {
    phase: 'Orientation & Discovery',
    details:
      'Virtual consultation, needs assessment, and curated community briefings. Concierge requests HOA docs and utility averages before tours.',
  },
  {
    phase: 'Touring & Shortlisting',
    details:
      'Day and twilight showings, disclosure packets on iPad, and lifestyle mapping for schools, trails, and commute options. Private previews arranged when available.',
  },
  {
    phase: 'Offer Strategy',
    details:
      'Comparative pricing grids, escalation pathways, appraisal prep, and buyer letters aligned with HOA etiquette. Negotiations focus on lifestyle value and contingencies.',
  },
  {
    phase: 'Due Diligence & Closing',
    details:
      'Inspection coordination, vendor estimates, HOA compliance checks, and moving logistics. Final walkthrough includes smart-home tutorial and concierge move-in checklist.',
  },
]

const sellerWorkflow = [
  {
    phase: 'Assessment & Planning',
    details:
      'In-depth property evaluation, upgrade ROI analysis, and timeline mapping. Concierge team schedules vendors and staging consults.',
  },
  {
    phase: 'Launch & Marketing',
    details:
      'Cinematic media production, luxury syndication, geo-targeted ads, and neighborhood outreach. Feedback loops adjust positioning in real time.',
  },
  {
    phase: 'Offer Vetting',
    details:
      'Scorecards compare financing strength, contingencies, and occupancy terms. Dr. Duffy handles counteroffers, appraisal narratives, and inspection negotiations.',
  },
  {
    phase: 'Closing & Transition',
    details:
      'Escrow management, legal compliance, and concierge exit services, including donation pickups, utility transfers, and guard gate coordination.',
  },
]

const advisoryPrograms = [
  {
    name: 'Silverstone Seller Advisory',
    summary:
      'Quarterly workshop that outlines staging trends, HOA policy changes, and pricing strategies for homeowners considering a sale in the next 6–18 months.',
  },
  {
    name: 'Buyer Readiness Intensive',
    summary:
      'Small-group sessions covering financing prep, relocation logistics, and contract walkthroughs. Participants receive custom action plans and vendor introductions.',
  },
  {
    name: 'Investor Insight Roundtable',
    summary:
      'Monthly virtual round-up comparing rental rates, cap rates, and renovation plays across Centennial Hills, Summerlin, and Henderson guard-gated communities.',
  },
]

const digitalResources = [
  {
    resource: 'Silverstone Market Tracker App',
    description:
      'A mobile dashboard delivering push notifications for new listings, price reductions, and upcoming HOA meetings. Personalized feeds align with your saved neighborhoods and budget.',
  },
  {
    resource: 'On-Demand Education Library',
    description:
      'Video modules and PDFs covering appraisal prep, golf course disclosures, climate resilience upgrades, and relocation checklists. Updated every quarter with the latest market intel.',
  },
  {
    resource: 'Concierge Portal',
    description:
      'Secure portal housing contracts, inspection reports, vendor invoices, and digital signatures. Clients track progress and communicate with the team in real time.',
  },
]

const successMetrics = [
  {
    metric: 'Average Days on Market for Listings',
    value: '8.5 Days',
    context: '17% faster than overall Centennial Hills average thanks to targeted marketing and pricing precision.',
  },
  {
    metric: 'List-to-Sale Ratio',
    value: '102.4%',
    context: 'Achieved through appraisal-ready pricing, pre-list inspections, and negotiation frameworks tailored to Silverstone disclosures.',
  },
  {
    metric: 'Relocation Satisfaction Score',
    value: '4.9/5.0',
    context: 'Surveyed executives cite concierge move-in services, video updates, and school orientation support as standout differentiators.',
  },
]

const certifications = [
  {
    name: 'Certified Residential Specialist (CRS)',
    description:
      'Advanced coursework in negotiation, technology, and marketing delivers a data-backed approach to pricing and presentation for Silverstone listings.',
  },
  {
    name: 'Certified Luxury Home Marketing Specialist (CLHMS) – Guild Designation',
    description:
      'Recognizes luxury production volume and mastery of affluent buyer expectations, ensuring high-end marketing collateral and global syndication.',
  },
  {
    name: 'Accredited Buyer’s Representative (ABR®)',
    description:
      'Specialized training in buyer advocacy, relocation logistics, and contract structure that safeguards client interests from offer to closing.',
  },
]

const neighborhoodStories = [
  {
    title: 'Repositioning a Dormant Fairway Property',
    narrative:
      'A Princeville home overlooking dormant greens received limited interest until Dr. Duffy executed targeted landscaping, privacy screening, and disclosure education. Within a week, three offers surfaced, each acknowledging future land-use scenarios. Sellers closed 2.3% above ask while buyers felt informed and confident.',
  },
  {
    title: 'Townhome Transformation for Corporate Lease',
    narrative:
      'A Pinehurst investor sought higher returns. Dr. Duffy curated mid-century furnishings, smart locks, and flexible lease terms, then aligned the property with a travel nurse agency. Occupancy jumped to 95% with multi-year commitments, boosting cap rate to 6.1%.',
  },
  {
    title: 'Coordinating a Multi-State Relocation',
    narrative:
      'A medical family relocating from Seattle needed to sell, buy, and enroll children in school within 45 days. Concierge teams managed virtual tours, contingent offers, and guard gate approvals; the family moved in two weeks before school started with every vendor appointment pre-scheduled.',
  },
]

const continuingEducation = [
  'Quarterly Masterminds with Berkshire Hathaway HomeServices luxury leadership covering global buyer trends.',
  'Clark County planning workshops focused on land-use updates affecting Silverstone and neighboring master plans.',
  'National Association of REALTORS® courses on fair housing compliance, ensuring equitable representation for every client.',
  'Certifications in negotiation psychology and conflict resolution that support calm, solution-oriented closings.',
]

const strategicAlliances = [
  {
    partner: 'Centennial Hills Medical Network',
    description:
      'Provides relocation referrals for physicians, nurses, and administrators. Dr. Duffy handles tour logistics timed around credentialing and onboarding schedules.',
  },
  {
    partner: 'Southern Nevada Builder Guild',
    description:
      'Supplies early access to spec homes, design center credits, and construction updates so clients can synchronize new-build timelines with Silverstone sales.',
  },
  {
    partner: 'Luxury Home Concierge Collective',
    description:
      'A curated roster of interior designers, smart-home integrators, landscape architects, and private chefs who elevate listings and deliver turnkey move-ins.',
  },
  {
    partner: 'Estate Planning & Tax Advisors',
    description:
      'Ensures sellers and investors align exits with capital gains strategies, 1031 exchanges, and trust objectives while keeping transactions compliant.',
  },
]

export default function AgentPage() {
  const path = '/agent'
  const pageSchema = buildWebPageSchema({
    path,
    name: 'Meet Dr. Jan Duffy',
    description:
      'Learn about Dr. Jan Duffy REALTOR®, her concierge approach, and leadership within the Silverstone Ranch community.',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Meet the Agent', path },
    ],
  })

  const faqSchema = buildFaqSchema(
    path,
    faqs.map((faq) => ({ question: faq.question, answer: faq.answer })),
  )

  const schemaData = [pageSchema, faqSchema].filter(Boolean)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-20 px-4 sm:px-6 lg:px-8">
      <SeoJsonLd id="agent" data={schemaData as Record<string, unknown>[]} />
      <div className="mx-auto max-w-6xl space-y-16">
        <section>
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Meet Dr. Jan Duffy</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Top 1% Las Vegas REALTOR® specializing in Silverstone Ranch luxury homes.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-xl p-8 md:p-12">
            <div className="grid md:grid-cols-[0.9fr_1.1fr] gap-12 items-start">
              <div className="relative">
                <div className="relative w-full aspect-square rounded-lg overflow-hidden shadow-xl bg-gray-200">
                  <Image
                    src="/images/agent/dr-jan-duffy-headshot-04.jpg"
                    alt="Dr. Jan Duffy REALTOR"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6 leading-tight">
                  A research-driven, concierge-focused advisor guiding buyers and sellers through Silverstone Ranch and the
                  greater Centennial Hills market.
                </h2>
                <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                  Dr. Duffy combines doctoral-level analytics with two decades of Las Vegas real estate expertise. She knows every
                  cul-de-sac, HOA covenant, and market trend influencing guard-gated values. Clients benefit from insider access to
                  off-market listings, tailored financing strategy, and meticulous transaction management.
                </p>
                <div className="bg-blue-50 rounded-lg p-6 mb-6">
                  <h3 className="font-semibold text-gray-900 mb-4 text-xl">Credentials & Recognition</h3>
                  <ul className="space-y-3 text-gray-700">
                    {credentials.map((item) => (
                      <li key={item} className="flex items-start">
                        <span className="text-blue-600 mr-2 text-xl">✓</span>
                        <span className="text-lg leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                  From the first conversation to long after closing, Dr. Duffy’s concierge team handles every detail—tour logistics,
                  inspection coordination, valuation prep, staging, and move-in services—so clients stay focused on lifestyle, not
                  paperwork.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-xl p-8 md:p-12 space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">Career Timeline & Professional Evolution</h2>
          <p className="text-gray-700 leading-relaxed">
            Every chapter of Dr. Duffy’s career has emphasized education, advocacy, and client-centered results. The timeline below
            highlights key milestones that shaped her concierge methodology and market influence.
          </p>
          <div className="space-y-4">
            {careerTimeline.map((item) => (
              <div key={item.year} className="rounded-2xl border border-slate-200 bg-slate-50/80 p-5 shadow-sm flex gap-4">
                <div className="flex-shrink-0">
                  <Calendar className="h-10 w-10 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">{item.year}</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">{item.milestone}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Concierge-Level Representation</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-gray-50 rounded-lg border border-slate-200 text-center">
              <Award className="h-10 w-10 text-blue-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Analytics & Pricing</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Custom valuations with micro-neighborhood comps, buyer demand tracking, and appraisal strategy.
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg border border-slate-200 text-center">
              <Briefcase className="h-10 w-10 text-blue-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Negotiation Advantage</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Escalation clauses, appraisal gap coverage, inspection credits, and closing logistics tailored to your goals.
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg border border-slate-200 text-center">
              <Users className="h-10 w-10 text-blue-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">24/7 Communication</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Rapid responses, weekly milestone updates, and detailed walkthrough guides keep everyone aligned.
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg border border-slate-200 text-center">
              <div className="text-4xl mb-3">🌵</div>
              <h3 className="font-semibold text-gray-900 mb-2">Lifestyle Integration</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Relocation kits, school tours, fitness passes, and community introductions ease your transition.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-xl p-8 md:p-12 space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">Concierge Services at a Glance</h2>
          <p className="text-gray-700 leading-relaxed">
            The concierge checklist covers hundreds of micro-tasks. Here are the pillars that Silverstone buyers and sellers rely
            on most when partnering with Dr. Duffy.
          </p>
          <div className="bg-blue-50 rounded-lg p-6">
            <ul className="space-y-3 text-gray-700 text-lg leading-relaxed">
              {conciergeServices.map((item) => (
                <li key={item} className="flex items-start">
                  <span className="text-blue-600 mr-2 text-xl">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-xl p-8 md:p-12 space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">Partnership Network & Community Impact</h2>
          <p className="text-gray-700 leading-relaxed">
            Relationships sustain Silverstone’s momentum. Dr. Duffy’s partner ecosystem spans corporations, schools, and
            nonprofits—each collaboration reinforcing her commitment to community wellness.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {partnershipHighlights.map((item) => (
              <div key={item.title} className="rounded-2xl border border-slate-200 bg-slate-50/80 p-5 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-700 leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-xl p-8 md:p-12 space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">Client Success Stories</h2>
          <p className="text-gray-700 leading-relaxed">
            Recent transactions demonstrate the breadth of Dr. Duffy’s representation—from relocation families to investors and
            luxury sellers. Each story highlights a unique strategy designed to achieve measurable results.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {successStories.map((story) => (
              <div key={story.title} className="rounded-2xl border border-slate-200 bg-slate-50/80 p-5 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{story.title}</h3>
                <p className="text-sm text-slate-700 leading-relaxed">{story.summary}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-xl p-8 md:p-12 space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">Media Features & Thought Leadership</h2>
          <p className="text-gray-700 leading-relaxed">
            Journalists and industry organizations seek Dr. Duffy’s insight on market movement, HOA governance, and consumer
            education. Her commentary keeps Silverstone families informed and positions the community on the regional stage.
          </p>
          <div className="space-y-4">
            {mediaFeatures.map((feature) => (
              <div key={feature.outlet} className="rounded-2xl border border-blue-100 bg-white p-5 shadow-sm flex gap-4">
                <div className="flex-shrink-0">
                  <Newspaper className="h-9 w-9 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">{feature.outlet}</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">{feature.highlight}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Community Leadership</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Dr. Duffy believes strong communities are built beyond contracts. Her volunteer commitments and sponsorships keep
            Silverstone vibrant while expanding resources for neighbors.
          </p>
          <ul className="space-y-3 text-gray-700 leading-relaxed text-sm">
            {communityInvolvement.map((item) => (
              <li key={item} className="rounded-lg border border-slate-200 bg-slate-50/80 p-4">{item}</li>
            ))}
          </ul>
        </section>

        <section className="bg-white rounded-lg shadow-xl p-8 md:p-12 space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">Client & Partner Testimonials</h2>
          <p className="text-gray-700 leading-relaxed">
            Silverstone homeowners, relocation managers, and vendors echo a consistent message: Dr. Duffy delivers concierge
            service, thoughtful communication, and measurable results.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <blockquote className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm text-sm text-gray-700 leading-relaxed">
              “Dr. Duffy guided our executive relocation with weekly updates, HOA introductions, and school tours. We toured six
              homes virtually before flying in, and she negotiated a rent-back that cushioned our move from San Diego.”
              <footer className="mt-3 text-xs font-semibold text-slate-900">— Corporate Relocation Director</footer>
            </blockquote>
            <blockquote className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm text-sm text-gray-700 leading-relaxed">
              “Our Pinehurst investment property sold in three days after Dr. Duffy coordinated upgrades and pre-inspections. Her
              marketing materials drew multiple cash offers even with golf course disclosures.”
              <footer className="mt-3 text-xs font-semibold text-slate-900">— Silverstone Investor</footer>
            </blockquote>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-xl p-8 md:p-12 space-y-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details key={faq.question} className="rounded-lg border border-slate-200 bg-slate-50/80 p-4">
                <summary className="cursor-pointer text-base font-semibold text-gray-900">{faq.question}</summary>
                <p className="mt-3 text-sm text-gray-700 leading-relaxed">{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Information</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-gray-50 rounded-lg border border-slate-200">
              <Phone className="h-8 w-8 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Phone</h3>
              <a href={`tel:${CONTACT_INFO.phone.tel}`} className="text-lg font-semibold text-blue-600 hover:text-blue-700">
                {CONTACT_INFO.phone.display}
              </a>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg border border-slate-200">
              <Mail className="h-8 w-8 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="text-lg font-semibold text-blue-600 hover:text-blue-700 break-all"
              >
                {CONTACT_INFO.email}
              </a>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg border border-slate-200">
              <ExternalLink className="h-8 w-8 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Website</h3>
              <a
                href={CONTACT_INFO.website.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-semibold text-blue-600 hover:text-blue-700"
              >
                {CONTACT_INFO.website.display}
              </a>
            </div>
          </div>
          <div className="text-center mt-6">
            <p className="text-sm text-gray-600">License: {CONTACT_INFO.license}</p>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-xl p-8 md:p-12 space-y-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Ready to Work Together?</h2>
          <p className="text-lg text-gray-700 leading-relaxed text-center max-w-4xl mx-auto">
            Dr. Duffy approaches every Silverstone engagement as a lifelong alliance. The relationship extends beyond escrow—she
            monitors policy changes, alerts clients to refinance opportunities, coordinates vendor refreshes, and hosts annual
            community check-ins. Whether you are expanding, downsizing, or investing, you gain a dedicated strategist who
            understands how each decision shapes wealth, lifestyle, and neighborhood vitality.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed text-center max-w-3xl mx-auto mb-8">
            Whether you’re purchasing a move-in ready home, renovating an estate, or selling to relocate, Dr. Jan Duffy delivers
            tailored strategy, curated resources, and concierge coordination across Centennial Hills.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book-tour"
              className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl font-semibold text-center"
            >
              Schedule a Consultation
            </Link>
            <Link
              href="/request-info"
              className="px-8 py-3 bg-white text-blue-600 border-2 border-blue-600 rounded-lg hover:bg-blue-50 transition-all font-semibold text-center"
            >
              Request Relocation Kit
            </Link>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-xl p-8 md:p-12 space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">Academic Foundation & Continuing Education</h2>
          <p className="text-gray-700 leading-relaxed">
            Dr. Duffy’s academic background fuels her research-minded approach. She transforms graduate-level methodology into client
            playbooks that clarify every decision, from pricing to renovation planning.
          </p>
          <div className="grid md:grid-cols-3 gap-6 text-sm text-gray-700 leading-relaxed">
            {educationBackground.map((entry) => (
              <div key={entry.degree} className="rounded-2xl border border-blue-100 bg-white p-5 shadow-sm">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">{entry.degree}</h3>
                <p className="font-semibold">{entry.institution}</p>
                <p>{entry.focus}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-xl p-8 md:p-12 space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">Client Playbooks Tailored to Your Journey</h2>
          <p className="text-gray-700 leading-relaxed">
            No two transactions are identical. Dr. Duffy crafts bespoke playbooks that anticipate pain points, align stakeholders,
            and deliver concierge support from introduction to closing day.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {clientPlaybooks.map((playbook) => (
              <div key={playbook.clientType} className="rounded-2xl border border-slate-200 bg-slate-50/80 p-5 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{playbook.clientType}</h3>
                <ul className="list-disc list-inside space-y-2 text-sm text-gray-700 leading-relaxed">
                  {playbook.highlights.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-xl p-8 md:p-12 space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">Silverstone Expertise Map</h2>
          <p className="text-gray-700 leading-relaxed">
            Each Silverstone enclave operates like a micro-market. Dr. Duffy maintains real-time dossiers on pricing, HOA budgets,
            and buyer profiles to keep clients ahead of the curve.
          </p>
          <div className="grid md:grid-cols-2 gap-6 text-sm text-gray-700 leading-relaxed">
            {silverstoneMap.map((item) => (
              <div key={item.pillar} className="rounded-2xl border border-blue-100 bg-white p-5 shadow-sm">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">{item.pillar}</h3>
                <p>{item.insight}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-xl p-8 md:p-12 space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">Giving Back to Silverstone & Centennial Hills</h2>
          <p className="text-gray-700 leading-relaxed">
            Community stewardship is woven into Dr. Duffy’s business plan. Every transaction fuels philanthropic initiatives that
            strengthen education, safety, and wellness across Northwest Las Vegas.
          </p>
          <div className="grid md:grid-cols-3 gap-6 text-sm text-gray-700 leading-relaxed">
            {givingBack.map((item) => (
              <div key={item.initiative} className="rounded-2xl border border-emerald-200 bg-emerald-50/80 p-5 shadow-sm">
                <h3 className="text-lg font-semibold text-emerald-900 mb-2">{item.initiative}</h3>
                <p>{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-xl p-8 md:p-12 space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">Closing Checklist: Your Next Five Moves</h2>
          <p className="text-gray-700 leading-relaxed">
            Ready to explore listings or prep your Silverstone home for market? Follow this checklist to engage Dr. Duffy’s team and
            move forward with clarity.
          </p>
          <ol className="list-decimal list-inside space-y-2 text-sm text-gray-700 leading-relaxed bg-slate-50/80 border border-slate-200 rounded-2xl p-6 shadow-sm">
            {closingChecklist.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </section>

        <section className="bg-white rounded-lg shadow-xl p-8 md:p-12 space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">Market Analytics Lab</h2>
          <p className="text-gray-700 leading-relaxed">
            Data translates into negotiating power. Dr. Duffy’s analytics lab synthesizes MLS statistics, economic indicators, and
            buyer sentiment so every recommendation is backed by evidence.
          </p>
          <div className="grid md:grid-cols-3 gap-6 text-sm text-gray-700 leading-relaxed">
            {analyticsLab.map((item) => (
              <div key={item.title} className="rounded-2xl border border-blue-100 bg-white p-5 shadow-sm">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-xl p-8 md:p-12 space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">Communication Standards You Can Count On</h2>
          <p className="text-gray-700 leading-relaxed">
            Transparent, proactive communication keeps stress low. Clients receive predictable check-ins and real-time updates
            tailored to their preferred format.
          </p>
          <ul className="list-disc list-inside space-y-2 text-sm text-gray-700 leading-relaxed bg-slate-50/80 border border-slate-200 rounded-2xl p-6 shadow-sm">
            {communicationStandards.map((standard) => (
              <li key={standard}>{standard}</li>
            ))}
          </ul>
        </section>

        <section className="bg-white rounded-lg shadow-xl p-8 md:p-12 space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">Buyer Workflow: From Vision to Keys</h2>
          <p className="text-gray-700 leading-relaxed">
            The buyer journey is organized into distinct phases, each supported by concierge services and analytics. Expect clarity at
            every milestone.
          </p>
          <div className="grid md:grid-cols-2 gap-6 text-sm text-gray-700 leading-relaxed">
            {buyerWorkflow.map((stage) => (
              <div key={stage.phase} className="rounded-2xl border border-blue-100 bg-white p-5 shadow-sm">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">{stage.phase}</h3>
                <p>{stage.details}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-xl p-8 md:p-12 space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">Seller Workflow: Strategy to Celebration</h2>
          <p className="text-gray-700 leading-relaxed">
            Staging, marketing, and negotiation align inside a structured roadmap. Sellers stay informed without being overwhelmed.
          </p>
          <div className="grid md:grid-cols-2 gap-6 text-sm text-gray-700 leading-relaxed">
            {sellerWorkflow.map((stage) => (
              <div key={stage.phase} className="rounded-2xl border border-slate-200 bg-slate-50/80 p-5 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{stage.phase}</h3>
                <p>{stage.details}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-xl p-8 md:p-12 space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">Advisory Programs & Community Education</h2>
          <p className="text-gray-700 leading-relaxed">
            Beyond individual transactions, Dr. Duffy curates education programs that empower Silverstone neighbors to plan ahead.
            These advisory tracks keep residents informed and ready for their next move.
          </p>
          <div className="grid md:grid-cols-3 gap-6 text-sm text-gray-700 leading-relaxed">
            {advisoryPrograms.map((program) => (
              <div key={program.name} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{program.name}</h3>
                <p>{program.summary}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-xl p-8 md:p-12 space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">Digital Resources at Your Fingertips</h2>
          <p className="text-gray-700 leading-relaxed">
            Clients stay connected to market shifts and transaction milestones through proprietary digital platforms. Everything you
            need—from disclosures to vendor coordination—lives in one secure ecosystem.
          </p>
          <div className="grid md:grid-cols-3 gap-6 text-sm text-gray-700 leading-relaxed">
            {digitalResources.map((item) => (
              <div key={item.resource} className="rounded-2xl border border-blue-100 bg-blue-50/80 p-5 shadow-sm">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">{item.resource}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-xl p-8 md:p-12 space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">Proven Performance Metrics</h2>
          <p className="text-gray-700 leading-relaxed">
            Measurable results validate the concierge approach. Dr. Duffy’s Silverstone transactions consistently outperform
            broader market benchmarks.
          </p>
          <div className="grid md:grid-cols-3 gap-6 text-sm text-gray-700 leading-relaxed">
            {successMetrics.map((item) => (
              <div key={item.metric} className="rounded-2xl border border-emerald-200 bg-emerald-50/80 p-5 shadow-sm">
                <h3 className="text-lg font-semibold text-emerald-900 mb-2">{item.metric}</h3>
                <p className="text-2xl font-bold text-emerald-700">{item.value}</p>
                <p>{item.context}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-xl p-8 md:p-12 space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">Professional Certifications & Recognition</h2>
          <p className="text-gray-700 leading-relaxed">
            Continuing education keeps strategy sharp. These designations reflect Dr. Duffy’s commitment to advanced negotiation,
            luxury marketing, and buyer advocacy.
          </p>
          <div className="grid md:grid-cols-3 gap-6 text-sm text-gray-700 leading-relaxed">
            {certifications.map((item) => (
              <div key={item.name} className="rounded-2xl border border-blue-100 bg-white p-5 shadow-sm">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">{item.name}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-xl p-8 md:p-12 space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">Neighborhood Case Studies</h2>
          <p className="text-gray-700 leading-relaxed">
            Every success story is rooted in preparation, transparency, and market insight. These case studies show how strategy
            adapts to different Silverstone enclaves and client priorities.
          </p>
          <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
            {neighborhoodStories.map((story) => (
              <div key={story.title} className="rounded-2xl border border-slate-200 bg-slate-50/80 p-5 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{story.title}</h3>
                <p>{story.narrative}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-xl p-8 md:p-12 space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">Always Learning, Always Leading</h2>
          <p className="text-gray-700 leading-relaxed">
            The Las Vegas market evolves quickly. Dr. Duffy invests in ongoing education and community collaboration to keep
            Silverstone clients ahead of policy changes, negotiation trends, and lifestyle expectations.
          </p>
          <ul className="list-disc list-inside space-y-2 text-sm text-gray-700 leading-relaxed bg-slate-50/80 border border-slate-200 rounded-2xl p-6 shadow-sm">
            {continuingEducation.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="bg-white rounded-lg shadow-xl p-8 md:p-12 space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">Strategic Alliances & Vendor Bench</h2>
          <p className="text-gray-700 leading-relaxed">
            Real estate is a team sport. Dr. Duffy cultivates alliances that streamline complex moves and elevate property
            presentation. These partnerships extend concierge reach far beyond the transaction.
          </p>
          <div className="grid md:grid-cols-2 gap-6 text-sm text-gray-700 leading-relaxed">
            {strategicAlliances.map((ally) => (
              <div key={ally.partner} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{ally.partner}</h3>
                <p>{ally.description}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-700 leading-relaxed">
            The vendor bench is continually vetted for licensing, insurance, and client satisfaction. Whether you need bespoke
            closet systems, landscape redesign, or executive relocation services, introductions happen within 24 hours—complete with
            proposals and negotiated timelines.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Quarterly performance reviews with each partner ensure quality stays exceptional. Metrics include response time,
            workmanship, client feedback, and post-project follow-up. If standards ever slip, replacements are sourced immediately,
            protecting the concierge promise that Silverstone residents rely on.
          </p>
          <p className="text-gray-700 leading-relaxed">
            The result is a trusted ecosystem where every specialist understands Silverstone expectations before stepping onto the property.
          </p>
        </section>
      </div>
    </div>
  )
}

