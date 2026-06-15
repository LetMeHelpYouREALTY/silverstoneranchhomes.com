import Link from 'next/link'
import type { Metadata } from 'next'
import { CONTACT_INFO } from '@/lib/contact-info'
import { buildPageTitle } from '@/lib/metadata'
import { SeoJsonLd } from '@/components/SeoJsonLd'
import { buildFaqSchema, buildWebPageSchema } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Environmental Risk Assessment | 30-Year Outlook',
  description:
    'Review heat, wildfire, flood, and wind risks for Silverstone Ranch with mitigation strategies and planning tips for homeowners and buyers in Northwest Las Vegas.',
  keywords: [
    'Silverstone Ranch environmental risk',
    'Las Vegas climate risk 2055',
    'Silverstone Ranch flood risk',
    'Silverstone Ranch wildfire preparedness',
    'heat risk Silverstone Ranch homes',
  ],
  alternates: {
    canonical: '/environmental-risk',
  },
  openGraph: {
    title: buildPageTitle('Environmental Risk Assessment | 30-Year Outlook'),
    description:
      'Analyze Silverstone Ranch heat, wildfire, flood, and wind exposure with mitigation plans curated by Dr. Jan Duffy REALTOR®.',
    url: `${CONTACT_INFO.website.base}/environmental-risk`,
    type: 'article',
  },
}

const riskCategories = [
  {
    name: 'Extreme Heat',
    level: 'High',
    projection: 'Average summer highs projected at 109°F by 2055 with more frequent heat advisories.',
    guidance: [
      'Upgrade to high-SEER HVAC systems with smart thermostats.',
      'Install low-E dual pane windows and reflective roof coatings.',
      'Incorporate drought-tolerant landscaping with irrigation audits to conserve water.',
    ],
    color: 'bg-red-50 border-red-200 text-red-900',
  },
  {
    name: 'Wildfire Exposure',
    level: 'Moderate',
    projection: 'Desert preserves north of the community present ember exposure during extended drought seasons.',
    guidance: [
      'Maintain defensible space: clear brush within 30 feet of structures.',
      'Use Class A fire-rated roofing and metal mesh vent covers.',
      'Confirm HOA-approved desert landscaping plans include non-combustible ground cover near foundations.',
    ],
    color: 'bg-orange-50 border-orange-200 text-orange-900',
  },
  {
    name: 'Flooding & Monsoon Storms',
    level: 'Low to Moderate',
    projection: 'Flash flooding risk during monsoon bursts remains due to nearby washes; FEMA Zone X but 2055 projections suggest stronger summer storms.',
    guidance: [
      'Ensure lot grading directs water away from the home and check French drains annually.',
      'Install backflow preventers on irrigation lines and check roof scuppers each spring.',
      'Discuss flood insurance riders even if not lender-required.',
    ],
    color: 'bg-blue-50 border-blue-200 text-blue-900',
  },
  {
    name: 'High Wind Events',
    level: 'Moderate',
    projection: 'Wind gusts exceeding 50 mph are expected 6–8 times per year with microbursts during monsoon season.',
    guidance: [
      'Schedule annual roof inspections and secure clay or concrete tiles.',
      'Upgrade garage doors to wind-rated models to protect structural integrity.',
      'Install outdoor roller shades and anchor patio furnishings to prevent debris.',
    ],
    color: 'bg-teal-50 border-teal-200 text-teal-900',
  },
]

const planningChecklist = [
  {
    title: 'Energy & Cooling Plan',
    description:
      'Budget for HVAC tune-ups twice per year, smart thermostats, and solar screens to manage rising summer temperatures.',
  },
  {
    title: 'Insurance Review',
    description:
      'Meet with a licensed insurance advisor to evaluate riders for flood, wind, and wildfire coverage under Nevada policies.',
  },
  {
    title: 'HOA Compliance',
    description:
      'Coordinate with the Silverstone Ranch HOA for approved landscape materials, desert plant palettes, and maintenance schedules that align with risk mitigation.',
  },
  {
    title: 'Emergency Preparedness',
    description:
      'Create evacuation plans, confirm local shelter locations, and assemble desert-ready emergency kits for family and pets.',
  },
]

const environmentalFaqs = [
  {
    question: 'What is the heat risk outlook for Silverstone Ranch?',
    answer:
      'Heat risk is Moderate to High with average summer highs reaching 109°F by 2055. Homes with upgraded HVAC, low-E windows, and desert landscaping perform best.',
  },
  {
    question: 'Does Silverstone Ranch face wildfire exposure?',
    answer:
      'Wildfire risk is Moderate due to proximity to desert preserves. Maintaining defensible space, using fire-resistant materials, and coordinating with HOA landscaping teams is recommended.',
  },
  {
    question: 'Are special assessments expected for HOA landscape changes?',
    answer:
      'Current reserves cover routine maintenance, but future drought mitigation or landscaping upgrades may prompt assessments. Request the latest HOA budget during escrow and attend community meetings.',
  },
  {
    question: 'How soon should I line up contractors after closing?',
    answer:
      'Schedule HVAC evaluations, irrigation audits, and roofing inspections within the first 60 days to prepare for summer heat and monsoon season.',
  },
]

const heatStrategies = [
  'Install radiant barriers or additional attic insulation to reduce heat gain by up to 15%.',
  'Opt for desert-friendly shading such as pergolas, motorized shades, or strategically placed trees.',
  'Schedule HVAC tune-ups each spring and fall; enroll in maintenance plans offered by vetted Silverstone vendors.',
]

const floodTips = [
  'Test sump pumps and inspect drainage swales before monsoon season.',
  'Keep sandbags or water-activated barriers on hand for low-lying patio doors.',
  'Review flood insurance options—Zone X properties can obtain low-cost preferred policies.',
]

const windReadiness = [
  'Secure patio furniture, grills, and planters when wind advisories are issued.',
  'Confirm that fences and gates meet HOA reinforcement standards.',
  'Install surge protection to guard electronics against lightning and power fluctuations.',
]

const sustainabilityUpgrades = [
  'Convert turf to xeriscape and enroll in Southern Nevada Water Authority rebate programs.',
  'Leverage NV Energy incentives for solar, battery storage, and smart thermostat installations.',
  'Utilize reflective roof coatings and insulated garage doors to keep interior temps manageable.',
]

const emergencySteps = [
  'Create a family communication plan covering evacuation routes and meetup locations.',
  'Assemble go-bags with first aid, water, pet supplies, and copies of key documents.',
  'Store HOA, insurance, and appraisal records in secure cloud storage for easy access.',
]

const seasonalCalendar = [
  {
    season: 'Spring (March–May)',
    actions: 'Schedule HVAC tune-up, clean gutters and scuppers, refresh irrigation settings before heat spikes.',
  },
  {
    season: 'Summer (June–August)',
    actions: 'Monitor NV Energy alerts, adjust smart thermostats, check pool equipment, and hydrate desert landscaping.',
  },
  {
    season: 'Monsoon (July–September)',
    actions: 'Deploy flood barriers if heavy rain is forecast, secure patio furniture, and test sump pumps.',
  },
  {
    season: 'Fall & Winter (October–February)',
    actions: 'Inspect roofing and stucco, trim desert plants to maintain defensible space, and review insurance renewals.',
  },
]

const insuranceInsights = [
  'Bundle home and auto policies to offset premium increases associated with heat and wind riders.',
  'Request replacement cost endorsements for roofs and HVAC systems to avoid depreciation penalties.',
  'Review wildfire evacuation coverage and loss-of-use benefits; many policies now include temporary housing stipends.',
]

const vendorSupport = [
  'Energy Efficiency: Certified HVAC contractors offering high-SEER systems and duct sealing packages.',
  'Landscape & Irrigation: Desert landscape firms that understand HOA palettes and drip irrigation best practices.',
  'Insurance Advisors: Independent brokers familiar with Nevada-specific riders and wildfire coverage.',
  'Roofing Specialists: Tile roof experts providing wind-rated fastening systems and annual maintenance plans.',
]

export default function EnvironmentalRiskPage() {
  const path = '/environmental-risk'
  const pageSchema = buildWebPageSchema({
    path,
    name: 'Silverstone Ranch Environmental Risk Assessment',
    description:
      'Silverstone Ranch 30-year outlook for heat, wildfire, flood, and wind exposure with mitigation strategies from Dr. Jan Duffy.',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Environmental Risk', path },
    ],
  })

  const faqSchema = buildFaqSchema(
    path,
    environmentalFaqs.map((faq) => ({ question: faq.question, answer: faq.answer })),
  )

  const schemaData = [pageSchema, faqSchema].filter(Boolean)

  return (
    <main className="bg-gradient-to-br from-emerald-50 to-white min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <SeoJsonLd id="environmental-risk" data={schemaData as Record<string, unknown>[]} />
      <div className="mx-auto max-w-6xl space-y-16">
        <section className="text-center md:text-left space-y-6">
          <div className="inline-flex items-center rounded-full border border-emerald-200 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-700">
            Environmental Readiness · Updated June 2026
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">Silverstone Ranch Environmental Risk Assessment</h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            Desert living requires strategic planning. Silverstone Ranch owners prepare for heat, monsoon bursts, wind, and
            wildfire exposure while preserving guard-gated curb appeal. This report outlines the 30-year outlook, HOA
            considerations, and practical upgrades curated by Dr. Jan Duffy for buyers and residents.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            The insights below synthesize climate models, insurance data, and HOA guidelines in effect as of June 2026.
            Use them to prioritize upgrades, coordinate vendor support, and negotiate intelligently when purchasing or
            selling in Silverstone Ranch.
          </p>
        </section>

        <section id="risk-matrix" className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">Risk Snapshot: Heat, Wildfire, Flood, Wind</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {riskCategories.map((risk) => (
              <div key={risk.name} className={`rounded-2xl border shadow-lg p-8 ${risk.color}`}>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-semibold">{risk.name}</h3>
                  <span className="text-sm font-semibold uppercase tracking-wide">{risk.level} Risk</span>
                </div>
                <p className="text-base font-medium mb-4">{risk.projection}</p>
                <ul className="space-y-2 text-sm">
                  {risk.guidance.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-current"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section id="heat-mitigation" className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">Heat Mitigation Playbook</h2>
          <p className="text-sm text-gray-700 leading-relaxed">
            Summers will remain the primary stressor for 89131. Combine HOA-approved upgrades with utility incentives to
            manage indoor comfort and operating costs.
          </p>
          <ul className="space-y-3 text-sm text-gray-700">
            {heatStrategies.map((item) => (
              <li key={item} className="rounded-lg border border-emerald-100 bg-emerald-50/80 p-4">{item}</li>
            ))}
          </ul>
          <p className="text-sm text-gray-700">
            Dr. Duffy coordinates energy audits and can connect you with contractors who already understand Silverstone
            Ranch architectural guidelines.
          </p>
        </section>

        <section id="flood-prep" className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">Flood & Monsoon Preparedness</h2>
          <p className="text-sm text-gray-700 leading-relaxed">
            While FEMA designates most of Silverstone Ranch as Zone X, monsoon bursts can overwhelm washes and roof
            drainage. Proactive maintenance keeps interiors protected.
          </p>
          <ul className="space-y-3 text-sm text-gray-700">
            {floodTips.map((tip) => (
              <li key={tip} className="rounded-lg border border-blue-100 bg-blue-50/80 p-4">{tip}</li>
            ))}
          </ul>
          <p className="text-sm text-gray-700 leading-relaxed">
            Pair these steps with smart-home water sensors near laundry rooms, water heaters, and slab penetrations to
            catch leaks early.
          </p>
        </section>

        <section id="wind-readiness" className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">Wind & Wildfire Readiness</h2>
          <p className="text-sm text-gray-700 leading-relaxed">
            High winds and ember exposure are manageable when homeowners follow a simple checklist before storm season.
          </p>
          <ul className="space-y-3 text-sm text-gray-700">
            {windReadiness.map((tip) => (
              <li key={tip} className="rounded-lg border border-teal-100 bg-teal-50/80 p-4">{tip}</li>
            ))}
          </ul>
          <p className="text-sm text-gray-700">
            Keep roof maintenance receipts and defensible-space photos; they strengthen insurance claims and future buyer
            disclosures.
          </p>
        </section>

        <section id="sustainability" className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">Sustainability Upgrades that Boost Value</h2>
          <p className="text-sm text-gray-700 leading-relaxed">
            Buyers increasingly prioritize eco-friendly homes. Invest in upgrades that lower utility bills and align with
            HOA standards.
          </p>
          <ul className="space-y-3 text-sm text-gray-700">
            {sustainabilityUpgrades.map((tip) => (
              <li key={tip} className="rounded-lg border border-emerald-100 bg-emerald-50/80 p-4">{tip}</li>
            ))}
          </ul>
          <p className="text-sm text-gray-700 leading-relaxed">
            Track payback periods for each project. Solar plus battery storage often reaches breakeven within 8–10 years
            given NV Energy’s current rate structures.
          </p>
        </section>

        <section id="calendar" className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">Seasonal Maintenance Calendar</h2>
          <p className="text-sm text-gray-700 leading-relaxed">
            Align household chores with Silverstone’s climate patterns. Use this calendar as a foundation and customize it
            with your vendor team.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {seasonalCalendar.map((entry) => (
              <div key={entry.season} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
                <h3 className="text-lg font-semibold text-emerald-900 mb-2">{entry.season}</h3>
                <p className="text-sm text-gray-700 leading-relaxed">{entry.actions}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="checklist" className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">30-Year Planning Checklist</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {planningChecklist.map((item) => (
              <div key={item.title} className="bg-emerald-50 rounded-lg p-6 border border-emerald-100">
                <h3 className="text-xl font-semibold text-emerald-900 mb-2">{item.title}</h3>
                <p className="text-gray-700 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="insurance" className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">Insurance & Financial Planning Insights</h2>
          <p className="text-sm text-gray-700 leading-relaxed">
            Premiums across the Southwest have risen alongside climate projections. Adopt these strategies to maintain
            robust coverage while keeping costs manageable.
          </p>
          <ul className="space-y-3 text-sm text-gray-700">
            {insuranceInsights.map((item) => (
              <li key={item} className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">{item}</li>
            ))}
          </ul>
        </section>

        <section id="vendor-support" className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">Trusted Vendor Support Network</h2>
          <p className="text-sm text-gray-700 leading-relaxed">
            Dr. Duffy curates specialists who understand Silverstone Ranch’s architectural controls and climate demands.
            Request introductions tailored to your project scope.
          </p>
          <ul className="space-y-3 text-sm text-gray-700">
            {vendorSupport.map((item) => (
              <li key={item} className="rounded-lg border border-emerald-100 bg-emerald-50/80 p-4">{item}</li>
            ))}
          </ul>
        </section>

        <section id="emergency" className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">Emergency Readiness & Documentation</h2>
          <p className="text-sm text-gray-700 leading-relaxed">
            Having a plan ensures calm when advisories are issued. Follow this sequence to keep your household prepared.
          </p>
          <ul className="space-y-3 text-sm text-gray-700">
            {emergencySteps.map((step) => (
              <li key={step} className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">{step}</li>
            ))}
          </ul>
        </section>

        <section id="community-programs" className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">Community Programs & Rebates</h2>
          <p className="text-sm text-gray-700 leading-relaxed">
            Leverage regional programs to reduce project costs. The Southern Nevada Water Authority’s Water Smart Landscapes
            Rebate provides $3 per square foot for removing water-thirsty grass. NV Energy’s PowerShift program offers
            rebates for smart thermostats, pool pumps, and insulation upgrades. Clark County’s Fire Prevention Bureau hosts
            seasonal defensible-space workshops—a valuable resource for homeowners backing desert preserves.
          </p>
        </section>

        <section id="resident-stories" className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">Resident Voices: Resilience in Action</h2>
          <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
            <p>
              <span className="font-semibold text-emerald-900">The Palms on Patriot Park:</span> A homeowner invested in a
              high-SEER HVAC system, motorized shades, and xeriscape conversion. Their summer electric bills dropped 28%
              year-over-year while curb appeal improved significantly.
            </p>
            <p>
              <span className="font-semibold text-emerald-900">Pinehurst Row Homes:</span> A townhome owner added gutter
              extensions, smart leak detectors, and wind-rated window film. During the July monsoon, the home remained dry,
              and insurance premiums stayed steady thanks to documented upgrades.
            </p>
            <p>
              <span className="font-semibold text-emerald-900">Tuscany Estates:</span> Residents coordinated a community
              clean-up removing brush near the northern perimeter, reducing ember fuel and strengthening neighbor
              relationships in the process.
            </p>
          </div>
        </section>

        <section id="climate-outlook" className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">Climate Outlook: 2030, 2040, 2055 Benchmarks</h2>
          <p className="text-sm text-gray-700 leading-relaxed">
            Regional climate models project average summer highs rising 1.5°F by 2030, 3.2°F by 2040, and over 5°F by 2055.
            Heat advisories will occur more frequently, making high-efficiency cooling and radiant barriers essential.
            Precipitation will remain sporadic yet intense—monsoon bursts bring localized flooding even in FEMA Zone X areas.
            Meanwhile, drought conditions elevate wildfire fuel concerns along preserved desert corridors north of Silverstone
            Ranch.
          </p>
          <p className="text-sm text-gray-700 leading-relaxed">
            Use these benchmarks when planning upgrades. Investing in reflective roofing, drip irrigation, and backup power
            supplies now reduces maintenance costs later and keeps insurance premiums manageable as carriers re-price climate
            exposure.
          </p>
        </section>

        <section id="buyer-seller-strategy" className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">Buyer & Seller Strategy Alignment</h2>
          <div className="grid md:grid-cols-2 gap-6 text-sm text-gray-700 leading-relaxed">
            <div className="rounded-2xl border border-emerald-200 bg-white p-5 shadow-sm">
              <h3 className="text-lg font-semibold text-emerald-800 mb-2">Buyers</h3>
              <p>Incorporate environmental upgrades into offer narratives—highlight willingness to invest in xeriscape, shade
                structures, and heat mitigation. Secure insurance quotes that reflect modernized systems to ease seller
                concerns about closing delays.</p>
            </div>
            <div className="rounded-2xl border border-emerald-200 bg-white p-5 shadow-sm">
              <h3 className="text-lg font-semibold text-emerald-800 mb-2">Sellers</h3>
              <p>Provide energy bills, irrigation audits, and defensible-space documentation. Transparency reassures buyers and
                prevents renegotiations after inspections. Consider offering credits earmarked for heat or landscape upgrades
                instead of broad price reductions.</p>
            </div>
          </div>
        </section>

        <section id="case-studies" className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">Environmental Case Studies from 2025 Closings</h2>
          <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
            <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-5 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Heat-Ready Renovation</h3>
              <p>A Silverlake buyer invested $18K in solar screens, radiant barrier insulation, and a smart thermostat. NV
                Energy rebates covered 20% of costs and trimmed summer bills by $110/month, boosting resale projections.</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-5 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Wildfire Preparedness Credit</h3>
              <p>The Palms seller provided defensible-space receipts and Class A roof documentation, earning a $600 annual
                insurance discount for the buyer and eliminating underwriting delays.</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-5 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Flood Mitigation Success</h3>
              <p>A Pinehurst townhome incorporated permeable pavers and smart leak detection. During the August monsoon, the
                system prevented interior damage, reinforcing the value of proactive upgrades for attached properties.</p>
            </div>
          </div>
        </section>

        <section id="summary" className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">Summary & Next Actions</h2>
          <p className="text-sm text-gray-700 leading-relaxed">
            Environmental readiness underpins long-term value in Silverstone Ranch. Heat, wind, flood, and wildfire risks can
            be mitigated with intentional planning, vetted vendors, and HOA collaboration. By documenting every upgrade and
            maintaining communication logs, you safeguard your investment and ease future resale conversations.
          </p>
          <p className="text-sm text-gray-700 leading-relaxed">
            Partner with Dr. Jan Duffy to tailor this playbook to your home. From energy audits to insurance analysis, you’ll
            receive concierge support every step of the way.
          </p>
        </section>

        <section id="insurance-projections" className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">Insurance Cost Projections</h2>
          <p className="text-sm text-gray-700 leading-relaxed">
            Insurance carriers adjust rates annually based on regional climate data. Expect heat- and wind-related premiums to
            rise 3–6% per year unless mitigation projects are documented. Flood riders remain optional for most Silverstone
            parcels, yet homeowners who install smart leak detectors and submit photos of grading improvements often secure
            preferred rates. Review policies at renewal and request replacement-cost endorsements covering roofs, HVAC
            systems, and solar installations.
          </p>
        </section>

        <section id="buyer-plan" className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">Buyer Action Plan</h2>
          <ul className="space-y-3 text-sm text-gray-700 leading-relaxed">
            <li>Request environmental disclosures during offer drafting so you can factor heat and landscaping upgrades into pricing.</li>
            <li>Budget 1–2% of purchase price for immediate resilience projects: HVAC tune-ups, irrigation audits, and defensible space.</li>
            <li>Secure insurance quotes prior to releasing contingencies to avoid last-minute premium surprises.</li>
            <li>Document the condition of fairway corridors with photos and notes—helpful for future resale or appraisal reviews.</li>
          </ul>
        </section>

        <section id="seller-plan" className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">Seller Disclosure Checklist</h2>
          <ul className="space-y-3 text-sm text-gray-700 leading-relaxed">
            <li>Provide HVAC service logs, irrigation upgrade receipts, and roof inspection reports within the buyer packet.</li>
            <li>Outline any rebates received or pending—buyers appreciate transferable incentives.</li>
            <li>Offer landscape maintenance history and defensible-space diagrams for homes along open desert corridors.</li>
            <li>Summarize HOA communications about golf course status, water conservation, and safety initiatives.</li>
          </ul>
        </section>

        <section id="resources" className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">Resource Directory</h2>
          <ul className="space-y-3 text-sm text-gray-700 leading-relaxed">
            <li>Southern Nevada Water Authority Water Smart Landscapes – Rebates and approved plant lists.</li>
            <li>NV Energy PowerShift – Incentives for smart thermostats, pool pumps, and insulation.</li>
            <li>Clark County Fire Prevention Bureau – Defensible space templates and inspection schedules.</li>
            <li>Las Vegas Valley Water District – Drought updates and emergency conservation notices.</li>
            <li>Las Vegas City Council Agendas – Track development proposals affecting Silverstone Ranch.</li>
          </ul>
        </section>

        <section className="bg-gradient-to-r from-emerald-600 to-emerald-700 rounded-lg shadow-xl p-8 md:p-12 text-white" id="cta">
          <h2 className="text-3xl font-bold mb-4">Partner with Local Experts</h2>
          <p className="text-lg text-emerald-100 mb-6 max-w-2xl">
            Dr. Jan Duffy collaborates with HVAC specialists, insurance advisors, and landscaping crews experienced in desert climate resilience. Gain a full plan before you buy, sell, or renovate within Silverstone Ranch.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/buyers-checklist"
              className="px-6 py-3 bg-white text-emerald-700 rounded-lg font-semibold hover:bg-emerald-50 transition-all shadow-lg hover:shadow-xl text-center"
            >
              Review Buyer Due Diligence Checklist
            </Link>
            <Link
              href="/request-info"
              className="px-6 py-3 bg-emerald-500 text-white border-2 border-white rounded-lg font-semibold hover:bg-emerald-400 transition-all text-center"
            >
              Request Environmental Consult
            </Link>
            <a
              href={`tel:${CONTACT_INFO.phone.tel}`}
              className="px-6 py-3 bg-transparent border-2 border-white rounded-lg font-semibold hover:bg-white/10 transition-all text-center"
            >
              Call Dr. Jan Duffy · {CONTACT_INFO.phone.display}
            </a>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-xl p-8 md:p-12" id="faq">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">What home upgrades best counter Silverstone heat risk?</h3>
              <p className="text-gray-700 leading-relaxed">
                Prioritize HVAC upgrades, attic insulation, low-E windows, and automated shading. Desert-friendly landscaping reduces heat islands and conserves water. Dr. Duffy’s vendor partners provide quotes aligned with your budget.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Are special assessments expected for HOA landscape changes?</h3>
              <p className="text-gray-700 leading-relaxed">
                Current HOA reserves cover ongoing common area maintenance, but drought mitigation initiatives may surface. Stay informed via HOA newsletters and request the latest budget during escrow to plan ahead.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">How soon should I line up contractors after closing?</h3>
              <p className="text-gray-700 leading-relaxed">
                Schedule HVAC evaluations, irrigation audits, and roofing inspections within the first 60 days of ownership to address any seasonal needs before peak summer or monsoon periods.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}

