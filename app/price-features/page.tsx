import Link from 'next/link'
import type { Metadata } from 'next'
import { CONTACT_INFO } from '@/lib/contact-info'
import { buildPageTitle } from '@/lib/metadata'
import { SeoJsonLd } from '@/components/SeoJsonLd'
import { buildWebPageSchema } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Price & Features Guide',
  description:
    'Explore Silverstone Ranch pricing bands, upgrade packages, and lifestyle amenities with insights from Dr. Jan Duffy REALTOR®.',
  alternates: {
    canonical: '/price-features',
  },
  openGraph: {
    title: buildPageTitle('Price & Features Guide'),
    description:
      'Compare pricing tiers, upgrade ROI, and community amenities across Silverstone Ranch enclaves with curated guidance from Dr. Jan Duffy.',
    url: `${CONTACT_INFO.website.base}/price-features`,
    type: 'website',
  },
}

const designPackages = [
  {
    title: 'Kitchen Refresh',
    items: ['Quartz waterfall islands with extended dining ledges', 'Monogram, Wolf, or Café appliance packages', 'Matte black fixtures paired with under-cabinet lighting'],
  },
  {
    title: 'Outdoor Living Suite',
    items: ['Custom pergolas with misting systems for summer entertaining', 'Built-in grills, pizza ovens, and beverage centers', 'Desert-friendly turf with accent lighting and xeriscape upgrades'],
  },
  {
    title: 'Wellness Retreats',
    items: ['Primary suite spa conversions with steam showers and freestanding tubs', 'Flex rooms outfitted as fitness studios with acoustic enhancements', 'Air purification, whole-home humidifiers, and smart thermostats'],
  },
]

const energyHighlights = [
  {
    heading: 'Smart HVAC Zoning',
    detail:
      'Dual or tri-zone HVAC systems paired with Nest or Ecobee thermostats reduce cooling loads during peak summer months while keeping casitas and lofts comfortable.',
  },
  {
    heading: 'Solar & Battery Readiness',
    detail:
      'Many Silverstone roofs already include conduit runs and load calculations for solar arrays or Tesla Powerwall integration, simplifying renewable upgrades.',
  },
  {
    heading: 'Water Efficiency',
    detail:
      'Drip irrigation, smart controllers, and desert plant palettes qualify homeowners for Southern Nevada Water Authority incentives and lower monthly bills.',
  },
]

const upgradeROI = [
  {
    title: 'Outdoor Kitchens & Shade Structures',
    roi: '112% ROI · Average budget $18K – $28K',
    note: 'Entertaining space is a top buyer priority. Custom pergolas with lighting and misting systems keep patios useful year-round and drive premium offers.',
  },
  {
    title: 'Primary Suite Spa Renovations',
    roi: '105% ROI · Average budget $22K – $36K',
    note: 'Freestanding tubs, frameless showers, and custom closet systems create hotel-level retreats that photograph beautifully and appraise favorably.',
  },
  {
    title: 'Energy Efficiency Package',
    roi: '98% ROI · Average budget $12K – $18K',
    note: 'Combining low-E windows, insulation upgrades, and variable-speed pool equipment reduces operating costs and appeals to relocation buyers focused on sustainability.',
  },
]

const floorPlanProfiles = [
  {
    name: 'Silverlake Collection',
    description:
      'Single-story plans spanning 2,100–2,800 square feet with open great rooms, split bedrooms, and optional casitas. Popular with downsizers and multi-gen households seeking minimal stairs and expansive outdoor space.',
  },
  {
    name: 'The Palms Estates',
    description:
      'Two-story residences 3,000–4,000+ square feet featuring dramatic foyers, double-height living rooms, and three-car garages. Perfect for entertainers and families needing flexible loft or office space.',
  },
  {
    name: 'Pinehurst Townhomes',
    description:
      'Lock-and-leave layouts from 1,350–2,000 square feet with attached garages and private patios. HOA handles exterior maintenance, freeing time for frequent travelers and busy professionals.',
  },
  {
    name: 'Princeville Luxury Homes',
    description:
      'Executive homes along former fairways offering panoramic windows, motorized shades, and resort-style backyards. Elevated finishes include curved staircases, dual kitchens, and wine rooms.',
  },
]

const seasonalMaintenance = [
  {
    season: 'Spring',
    tasks: ['Aerate and replenish desert landscaping mulch', 'Service HVAC ahead of summer usage spikes', 'Inspect roof tiles and gutters after winter storms'],
  },
  {
    season: 'Summer',
    tasks: ['Calibrate irrigation timers for heat waves', 'Clean pool filtration systems monthly', 'Refresh exterior paint touch-ups before monsoon rains'],
  },
  {
    season: 'Fall',
    tasks: ['Schedule window washing and solar screen cleaning', 'Seal outdoor countertops and pavers', 'Plan holiday lighting within HOA guidelines'],
  },
  {
    season: 'Winter',
    tasks: ['Service fireplaces and outdoor heaters', 'Check weather stripping on doors and sliders', 'Audit energy consumption to plan future upgrades'],
  },
]

const financingScenarios = [
  {
    label: 'Lifestyle Upgrade Financing',
    description:
      'Pair a conventional mortgage with a renovation line to fund outdoor kitchens, casitas, or wellness spaces immediately after closing while leveraging builder-grade pricing data.',
  },
  {
    label: 'Energy & Sustainability Incentives',
    description:
      'Combine local utility rebates, federal tax credits, and green financing to install solar, smart irrigation, and energy-efficient windows with minimal upfront cash.',
  },
  {
    label: 'Equity Harvest Strategy',
    description:
      'Use HELOCs or cash-out refinance options to unlock equity for investment properties while maintaining Silverstone as a long-term residence.',
  },
]

export default function PriceFeaturesPage() {
  const path = '/price-features'
  const pageSchema = buildWebPageSchema({
    path,
    name: 'Silverstone Ranch Price & Features Guide',
    description:
      'Detailed overview of Silverstone Ranch pricing tiers, upgrade packages, and lifestyle amenities curated for luxury buyers.',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Price & Features', path },
    ],
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-20 px-4 sm:px-6 lg:px-8">
      <SeoJsonLd id="price-features" data={pageSchema} />
      <div className="mx-auto max-w-6xl space-y-16">
        <section className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Silverstone Ranch Features & Lifestyle
          </h1>
          <p className="text-lg text-gray-600">
            Discover hallmark design elements, floor plan versatility, and neighborhood advantages that make Silverstone Ranch a
            top choice in Northwest Las Vegas.
          </p>
        </section>

        <section className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg shadow-xl p-8 md:p-12 text-center text-white">
          <p className="text-sm text-blue-100 mb-2 uppercase tracking-wide">Featured Residence Insight</p>
          <p className="text-5xl md:text-6xl font-bold mb-4">Private Consultation</p>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            Connect with Dr. Jan Duffy for community-wide pricing trends, off-market opportunities, and a tailored valuation
            strategy for your Silverstone Ranch home.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/request-info"
              className="px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 font-semibold"
            >
              Request Pricing Information
            </Link>
            <a
              href={`tel:${CONTACT_INFO.phone.tel}`}
              className="px-8 py-3 bg-blue-500 text-white border-2 border-white rounded-lg hover:bg-blue-400 transition-all font-semibold"
            >
              Call {CONTACT_INFO.phone.display}
            </a>
          </div>
        </section>

        <section className="grid lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-xl p-8 md:p-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Residence & Lifestyle Features</h2>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-600 mr-3 text-xl">✓</span>
                <span className="text-lg">Gourmet kitchens with granite or quartz surfaces and premium appliances</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3 text-xl">✓</span>
                <span className="text-lg">Custom cabinetry, designer fixtures, and architectural millwork</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3 text-xl">✓</span>
                <span className="text-lg">Integrated stainless appliance suites with smart-home capabilities</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3 text-xl">✓</span>
                <span className="text-lg">Hardwood, porcelain tile, and upgraded carpet options throughout</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3 text-xl">✓</span>
                <span className="text-lg">Energy-efficient windows with plantation shutters</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3 text-xl">✓</span>
                <span className="text-lg">Crown molding, tray ceilings, and designer lighting packages</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3 text-xl">✓</span>
                <span className="text-lg">Owner&apos;s suites with lounge areas and custom closet systems</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3 text-xl">✓</span>
                <span className="text-lg">Spa-inspired baths with dual vanities, soaking tubs, and walk-in showers</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3 text-xl">✓</span>
                <span className="text-lg">Resort-style covered patios and built-in outdoor kitchens</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3 text-xl">✓</span>
                <span className="text-lg">Professional desert landscaping with accent lighting and water features</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3 text-xl">✓</span>
                <span className="text-lg">Two- and three-car garages with storage solutions and EV-ready options</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3 text-xl">✓</span>
                <span className="text-lg">Great rooms with fireplaces, media niches, and flexible retreat spaces</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-xl p-8 md:p-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Typical Silverstone Specifications</h2>
            <dl className="space-y-6">
              <div className="flex justify-between items-center py-4 border-b border-gray-200">
                <dt className="font-semibold text-gray-700 text-lg">Bedrooms</dt>
                <dd className="text-gray-900 font-bold text-xl">3-5</dd>
              </div>
              <div className="flex justify-between items-center py-4 border-b border-gray-200">
                <dt className="font-semibold text-gray-700 text-lg">Bathrooms</dt>
                <dd className="text-gray-900 font-bold text-xl">2.5-4.5</dd>
              </div>
              <div className="flex justify-between items-center py-4 border-b border-gray-200">
                <dt className="font-semibold text-gray-700 text-lg">Square Feet</dt>
                <dd className="text-gray-900 font-bold text-xl">2,000 – 4,000+ sq. ft.</dd>
              </div>
              <div className="flex justify-between items-center py-4 border-b border-gray-200">
                <dt className="font-semibold text-gray-700 text-lg">Lot Size</dt>
                <dd className="text-gray-900 font-bold text-xl">Up to 1/3 acre</dd>
              </div>
              <div className="flex justify-between items-center py-4 border-b border-gray-200">
                <dt className="font-semibold text-gray-700 text-lg">Year Built</dt>
                <dd className="text-gray-900 font-bold text-xl">2003 – 2008</dd>
              </div>
              <div className="flex justify-between items-center py-4 border-b border-gray-200">
                <dt className="font-semibold text-gray-700 text-lg">Garage</dt>
                <dd className="text-gray-900 font-bold text-xl">2-3 Car</dd>
              </div>
              <div className="flex justify-between items-center py-4 border-b border-gray-200">
                <dt className="font-semibold text-gray-700 text-lg">Community</dt>
                <dd className="text-gray-900 font-bold text-xl">Silverstone Ranch</dd>
              </div>
              <div className="flex justify-between items-center py-4">
                <dt className="font-semibold text-gray-700 text-lg">Property Profile</dt>
                <dd className="text-gray-900 font-bold text-xl">Single-family homes & residences along former fairways</dd>
              </div>
            </dl>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-xl p-8 md:p-12 space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">Floor Plan Profiles & Lifestyle Fit</h2>
          <p className="text-gray-700 leading-relaxed">
            Every Silverstone enclave introduces unique design cues. Understanding the nuances helps buyers match floor plans to
            lifestyle goals and future resale value.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {floorPlanProfiles.map((plan) => (
              <div key={plan.name} className="rounded-2xl border border-slate-200 bg-slate-50/80 p-5 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{plan.name}</h3>
                <p className="text-sm text-gray-700 leading-relaxed">{plan.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-xl p-8 md:p-12 space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">Design Packages & Upgrade Paths</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Builders such as Pulte and William Lyon delivered Silverstone with flexible architectural palettes. Most homes feature a
            blend of Mediterranean and contemporary elements. During resale, sellers frequently invest in modernization projects
            that buyers can carry forward with ease.
          </p>
          <div className="grid md:grid-cols-3 gap-6 text-sm text-gray-700 leading-relaxed">
            {designPackages.map((pkg) => (
              <div key={pkg.title} className="rounded-2xl border border-blue-100 bg-blue-50/80 p-5">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">{pkg.title}</h3>
                <ul className="space-y-2">
                  {pkg.items.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-xl p-8 md:p-12 space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">Operating Costs & Ownership Planning</h2>
          <div className="grid md:grid-cols-2 gap-8 text-gray-700 leading-relaxed">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Monthly Considerations</h3>
              <ul className="space-y-2 text-sm">
                <li>HOA dues: $62/month single-family · $190/month townhomes</li>
                <li>Average NV Energy bill: $220 summer | $140 winter (3,000 sq ft home)</li>
                <li>Water & sewer: $110 with Water Smart Landscapes upgrades</li>
                <li>Landscape maintenance: $160–$220 for bi-weekly service</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Annual Planning</h3>
              <ul className="space-y-2 text-sm">
                <li>Reserve $1,200 for HVAC service and filter replacements</li>
                <li>Budget $900 for exterior paint touch-ups every 2–3 years</li>
                <li>Plan $1,500 for desert landscaping refresh and drip audits</li>
                <li>Allocate $400 for smart home/security system subscriptions</li>
              </ul>
            </div>
          </div>
          <p className="mt-4 text-sm text-gray-600">
            Ask Dr. Duffy for vetted vendors and HOA-approved landscape designers to streamline your ownership experience.
          </p>
        </section>

        <section className="bg-white rounded-lg shadow-xl p-8 md:p-12 space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">Energy Efficiency & Sustainability Highlights</h2>
          <p className="text-gray-700 leading-relaxed">
            Sustainability upgrades are more than eco-friendly—they reduce operating costs and strengthen resale narratives. Silverstone
            homes already feature efficient bones, making additional improvements straightforward.
          </p>
          <div className="grid md:grid-cols-3 gap-6 text-sm text-gray-700 leading-relaxed">
            {energyHighlights.map((item) => (
              <div key={item.heading} className="rounded-2xl border border-emerald-200 bg-emerald-50/80 p-5 shadow-sm">
                <h3 className="text-lg font-semibold text-emerald-900 mb-2">{item.heading}</h3>
                <p>{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-xl p-8 md:p-12 space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">Upgrade ROI Guide</h2>
          <p className="text-gray-700 leading-relaxed">
            Choosing the right upgrades protects your investment and appeals to buyers attuned to quality. Use this guide to prioritize
            projects before listing or immediately after closing.
          </p>
          <div className="grid md:grid-cols-3 gap-6 text-sm text-gray-700 leading-relaxed">
            {upgradeROI.map((item) => (
              <div key={item.title} className="rounded-2xl border border-amber-200 bg-amber-50/80 p-5 shadow-sm">
                <h3 className="text-lg font-semibold text-amber-900 mb-2">{item.title}</h3>
                <p className="font-semibold">{item.roi}</p>
                <p>{item.note}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-xl p-8 md:p-12 space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">Seasonal Maintenance Blueprint</h2>
          <p className="text-gray-700 leading-relaxed">
            Staying ahead of seasonal upkeep preserves curb appeal and prevents costly repairs. Silverstone’s HOA appreciates proactive homeowners, and buyers notice well-maintained properties immediately.
          </p>
          <div className="grid md:grid-cols-2 gap-6 text-sm text-gray-700 leading-relaxed">
            {seasonalMaintenance.map((season) => (
              <div key={season.season} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{season.season}</h3>
                <ul className="list-disc list-inside space-y-1">
                  {season.tasks.map((task) => (
                    <li key={task}>{task}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-xl p-8 md:p-12 space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">Financing Scenarios for Enhancement Projects</h2>
          <p className="text-gray-700 leading-relaxed">
            Pair your Silverstone purchase with strategic financing to complete dream upgrades or leverage equity for future investments.
          </p>
          <div className="grid md:grid-cols-3 gap-6 text-sm text-gray-700 leading-relaxed">
            {financingScenarios.map((scenario) => (
              <div key={scenario.label} className="rounded-2xl border border-blue-100 bg-blue-50/80 p-5 shadow-sm">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">{scenario.label}</h3>
                <p>{scenario.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-xl p-8 md:p-12 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Additional Highlights</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-4xl mb-4">🏡</div>
              <h3 className="font-semibold text-gray-900 mb-2">Premium Finishes</h3>
              <p className="text-gray-600 text-sm">
                High-end materials and craftsmanship throughout
              </p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-4xl mb-4">🌳</div>
              <h3 className="font-semibold text-gray-900 mb-2">Outdoor Living</h3>
              <p className="text-gray-600 text-sm">
                Beautifully landscaped yard with resort-style patio
              </p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-4xl mb-4">✨</div>
              <h3 className="font-semibold text-gray-900 mb-2">Modern Updates</h3>
              <p className="text-gray-600 text-sm">
                Recently updated with contemporary features
              </p>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg shadow-xl p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Experience Silverstone Ranch?</h2>
          <p className="text-lg mb-8 text-blue-100 max-w-2xl mx-auto">
            Contact Dr. Jan Duffy to schedule a personal tour, explore upcoming listings, or discuss a tailored marketing plan for
            your Silverstone Ranch residence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book-tour"
              className="px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 font-semibold"
            >
              Schedule a Tour
            </Link>
            <Link
              href="/request-info"
              className="px-8 py-3 bg-blue-500 text-white border-2 border-white rounded-lg hover:bg-blue-400 transition-all font-semibold"
            >
              Request Information
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}

