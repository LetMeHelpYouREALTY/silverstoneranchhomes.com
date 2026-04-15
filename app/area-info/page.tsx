import Link from 'next/link'
import type { Metadata } from 'next'
import { CONTACT_INFO } from '@/lib/contact-info'
import { buildPageTitle } from '@/lib/metadata'
import { SeoJsonLd } from '@/components/SeoJsonLd'
import { buildFaqSchema, buildWebPageSchema } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Area Information | Neighborhood Highlights',
  description:
    'Navigate Silverstone Ranch, Tule Springs, and Centennial Hills—commute times, amenities, schools, and recreation with insights from Dr. Jan Duffy REALTOR®.',
  alternates: {
    canonical: '/area-info',
  },
  openGraph: {
    title: buildPageTitle('Area Information | Neighborhood Highlights'),
    description:
      'Explore commute options, dining, recreation, and educational resources surrounding Silverstone Ranch in Centennial Hills.',
    url: `${CONTACT_INFO.website.base}/area-info`,
    type: 'website',
  },
}

const travelTimes = [
  { destination: '215 Beltway Entrance', time: '6 minutes', detail: 'Direct access at N Hualapai Way for quick commutes to Summerlin or the Strip.' },
  { destination: 'Downtown Summerlin', time: '18 minutes', detail: 'Shopping, dining, and entertainment hub for west-side residents.' },
  { destination: 'Las Vegas Strip', time: '28 minutes', detail: 'Ride-share and express bus routes connect Silverstone Ranch to resort corridors.' },
  { destination: 'Harry Reid International Airport', time: '32 minutes', detail: 'Plan on 35–40 minutes during peak travel windows.' },
]

const nearbyHighlights = [
  { icon: '🛍️', title: 'Centennial Center & Skye Canyon Marketplace', description: 'Whole Foods, Smith’s Marketplace, Nordstrom Rack, cafés, and boutique fitness studios within a ten-minute drive.' },
  { icon: '🍽️', title: 'Dining & Nightlife', description: 'Local favorites such as The Stove, Firefly Tapas, and fast-growing breweries line the Centennial Hills corridor.' },
  { icon: '🌳', title: 'Parks & Outdoor Recreation', description: 'Floyd Lamb Park, Mount Charleston trails, and Gilcrease Orchard offer hiking, picnicking, and seasonal festivals.' },
  { icon: '🏥', title: 'Healthcare Access', description: 'Centennial Hills Hospital, MountainView Hospital, VA clinics, and specialty medical centers within a fifteen-minute radius.' },
  { icon: '🎓', title: 'Education & Enrichment', description: 'O’Roarke Elementary, Cadwallader Middle, Arbor View High, Somerset Academy, and Faith Lutheran offer diversified academic pathways.' },
  { icon: '🎭', title: 'Culture & Entertainment', description: 'Las Vegas Paiute Golf Resort, Santa Fe Station, and downtown Summerlin arts programming keep calendars full year-round.' },
]

const commuterOptions = [
  {
    mode: 'Driving',
    detail: 'Residents reach the 215 Beltway via Hualapai Way and Lone Mountain Road. Peak travel times average 22 minutes to downtown Summerlin and 35 minutes to the Strip.',
  },
  {
    mode: 'Express Bus',
    detail: 'The RTC CX Centennial Express links Centennial Hills Transit Center to Downtown Las Vegas and the Strip. Park-and-ride lots keep commutes simple for hospitality professionals.',
  },
  {
    mode: 'Cycling & Micro-Mobility',
    detail: 'Bike lanes and wide sidewalks along Grand Montecito Parkway connect to Skye Canyon and Floyd Lamb Park. E-bikes and scooters are popular for short errands.',
  },
]

const diningGuide = [
  {
    category: 'Chef-Driven Dining',
    spots: [
      'The Stove NV – brunch classics with city skyline views.',
      'Ada’s Wine Bar – downtown Summerlin tapas destination with curated wine flights.',
      'Echo & Rig – steakhouse and butcher shop ideal for celebratory dinners.',
    ],
  },
  {
    category: 'Casual & Family Favorites',
    spots: [
      'Rachel’s Kitchen, Capriotti’s, and Cafe Rio for quick meals near grocery hubs.',
      'Firefly Tapas and Tenaya Creek Brewery for local nightlife within fifteen minutes.',
      'Skye Canyon Marketplace food hall featuring Thai, Mediterranean, and artisan pizza concepts.',
    ],
  },
  {
    category: 'Coffee & Remote Work Spots',
    spots: [
      'PublicUs Centennial for craft coffee and coworking nooks.',
      'Mothership Coffee Roasters inside the Sahara West Library complex.',
      'Starbucks Reserve at Skye Canyon with patio seating and reliable Wi-Fi.',
    ],
  },
]

const healthcareProviders = [
  {
    name: 'Centennial Hills Hospital Medical Center',
    detail: '226-bed facility with Level III NICU, maternity services, and comprehensive emergency department.',
  },
  {
    name: 'VA Northwest Primary Care Clinic',
    detail: 'Dedicated services for veterans including primary care, behavioral health, and specialty referrals.',
  },
  {
    name: 'MountainView Hospital & Medical District',
    detail: 'Cardiology, orthopedics, and oncology specialists located 20 minutes south via the 215 Beltway.',
  },
  {
    name: 'Elite Medical Center Centennial',
    detail: 'Free-standing ER and urgent care for expedited treatment with concierge coordination.',
  },
]

const recreationGuide = [
  {
    area: 'Floyd Lamb Park at Tule Springs',
    activities: ['Fishing lagoons stocked year-round', 'Equestrian arenas and trailheads', 'Historic ranch tours and picnic shelters'],
  },
  {
    area: 'Mount Charleston',
    activities: ['Cathedral Rock and Mary Jane Falls hikes', 'Lee Canyon ski and snowboard resort', 'Seasonal wildflower photography outings'],
  },
  {
    area: 'Las Vegas Paiute Golf Resort',
    activities: ['Three Pete Dye-designed golf courses', 'Wedding and event venues with desert backdrops', 'Pro shop and dining with member benefits'],
  },
]

const relocationChecklist = [
  'Schedule DMV appointments for Nevada licenses within 30 days of establishing residency.',
  'Transfer medical records and identify in-network providers near Centennial Hills Hospital.',
  'Enroll students in CCSD using the online registration portal; confirm immunization requirements.',
  'Coordinate pet licensing with the City of Las Vegas Animal Care and Control.',
  'Set up NV Energy, Southwest Gas, and Las Vegas Valley Water District accounts prior to closing.',
]

const communityFaqs = [
  {
    question: 'How long does it take to reach the Las Vegas Strip from Silverstone Ranch?',
    answer:
      'Expect a 28-minute drive under normal traffic via the 215 Beltway and US-95. Ride-share and express bus routes also connect residents to the resort corridor.',
  },
  {
    question: 'Which hospitals and healthcare providers are nearby?',
    answer:
      'Centennial Hills Hospital sits within 10 minutes, with MountainView Hospital, VA clinics, and specialty medical centers accessible across the northwest valley.',
  },
  {
    question: 'What outdoor recreation options are available close to Silverstone Ranch?',
    answer:
      'Residents frequent Floyd Lamb Park, Gilcrease Orchard, and Mount Charleston trails for hiking, picnicking, and seasonal festivals.',
  },
]

export default function AreaInfoPage() {
  const path = '/area-info'
  const pageSchema = buildWebPageSchema({
    path,
    name: 'Silverstone Ranch Area Information',
    description:
      'Commuting, amenities, and lifestyle resources surrounding Silverstone Ranch to help buyers plan daily routines.',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Area Information', path },
    ],
  })

  const faqSchema = buildFaqSchema(
    path,
    communityFaqs.map((faq) => ({ question: faq.question, answer: faq.answer })),
  )

  const schemaData = [pageSchema, faqSchema].filter(Boolean)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-20 px-4 sm:px-6 lg:px-8">
      <SeoJsonLd id="area-info" data={schemaData as Record<string, unknown>[]} />
      <div className="mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-700 mb-3">Centennial Hills Orientation · Updated November 2025</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Silverstone Ranch Area Information</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Understand the broader Centennial Hills ecosystem that surrounds Silverstone Ranch. From transit access and
            retail to healthcare, schools, and recreation, this guide reveals how residents mix luxury living with daily
            convenience in Northwest Las Vegas.
          </p>
        </div>

        <section className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-12 border border-slate-200" id="location-overview">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Where Silverstone Ranch Fits in Las Vegas</h2>
          <p className="text-gray-700 leading-relaxed mb-6 text-lg">
            Silverstone Ranch anchors the northern edge of the Centennial Hills master plan, roughly 20 miles from the
            Las Vegas Strip and 12 miles from downtown Summerlin. Elevated desert terrain provides sweeping views while
            the 215 Beltway keeps commutes efficient. The community borders Skye Canyon to the west and the Las Vegas
            Paiute tribal land to the north, preserving open desert vistas and cooler evening temperatures.
          </p>
          <p className="text-gray-700 leading-relaxed text-lg mb-6">
            Residents enjoy the balance of suburban tranquility and urban connectivity. Major employment centers—including
            hospitals, tech campuses, and hospitality headquarters—are within a 30-minute radius. Meanwhile, Centennial
            Hills’ growth continues with new retail, dining, and public infrastructure scheduled through 2026, sustaining
            long-term appreciation for guard-gated neighborhoods like Silverstone Ranch.
          </p>
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">Travel Times & Commute Planning</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {travelTimes.map((item) => (
              <div key={item.destination} className="rounded-2xl border border-slate-200 bg-slate-50/80 p-4">
                <p className="text-xs uppercase tracking-wide text-blue-600 font-semibold mb-1">{item.destination}</p>
                <p className="text-sm text-gray-900 font-semibold mb-1">{item.time}</p>
                <p className="text-sm text-gray-700">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-12 border border-slate-200" id="commuter-options">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Transportation & Commuter Options</h2>
          <p className="text-gray-700 leading-relaxed text-lg mb-6">
            Silverstone Ranch residents leverage multiple transportation modes to navigate the valley. From drive time to
            transit access, the community’s location supports diverse lifestyles and work schedules.
          </p>
          <div className="space-y-4">
            {commuterOptions.map((option) => (
              <div key={option.mode} className="rounded-2xl border border-blue-100 bg-blue-50/70 p-5 shadow-sm">
                <h3 className="text-xl font-semibold text-blue-800 mb-2">{option.mode}</h3>
                <p className="text-sm text-gray-700 leading-relaxed">{option.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-12 border border-slate-200" id="community-benefits">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Community Benefits & Daily Convenience</h2>
          <p className="text-gray-700 leading-relaxed text-lg mb-6">
            Silverstone Ranch benefits from Centennial Hills’ rapid expansion. Anchored by town centers such as the
            Centennial Center complex, Skye Canyon Marketplace, and the Village of Centennial Hills, residents have access
            to national retailers, boutique storefronts, coffee shops, pharmacies, and pet services within minutes. Foodies
            appreciate a growing restaurant scene featuring chef-driven concepts, craft breweries, and farm-to-table cafés.
          </p>
          <p className="text-gray-700 leading-relaxed text-lg mb-6">
            Recreation remains a mainstay. The 680-acre Floyd Lamb Park offers fishing lagoons, equestrian facilities, and
            shaded picnic groves. Gilcrease Orchard delivers seasonal produce and fall festivals, while Mount Charleston
            trails provide year-round hiking and winter sports less than 45 minutes away.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {nearbyHighlights.map((highlight) => (
              <div key={highlight.title} className="rounded-2xl border border-slate-200 bg-slate-50/80 p-5 shadow-sm">
                <div className="text-3xl mb-3">{highlight.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{highlight.title}</h3>
                <p className="text-sm text-gray-700 leading-relaxed">{highlight.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-12 border border-slate-200" id="dining-guide">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Dining & Entertainment Guide</h2>
          <p className="text-gray-700 leading-relaxed text-lg mb-6">
            Upscale dining, casual favorites, and remote-work-friendly cafés cluster around Silverstone Ranch. Explore these
            curated lists to plan date nights, family dinners, and business meetups.
          </p>
          <div className="space-y-6">
            {diningGuide.map((group) => (
              <div key={group.category} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{group.category}</h3>
                <ul className="space-y-2 text-sm text-gray-700 leading-relaxed">
                  {group.spots.map((spot) => (
                    <li key={spot}>• {spot}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-12 border border-slate-200" id="healthcare">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Healthcare & Wellness Infrastructure</h2>
          <p className="text-gray-700 leading-relaxed text-lg mb-6">
            Proximity to major healthcare systems is a top reason professionals relocate to Silverstone Ranch. Residents
            benefit from emergency care, specialty clinics, and wellness programs without leaving the northwest valley.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {healthcareProviders.map((provider) => (
              <div key={provider.name} className="rounded-2xl border border-blue-100 bg-blue-50/80 p-5 shadow-sm">
                <h3 className="text-lg font-semibold text-blue-800 mb-2">{provider.name}</h3>
                <p className="text-sm text-gray-700 leading-relaxed">{provider.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-12 border border-slate-200" id="recreation">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Outdoor Recreation & Weekend Adventures</h2>
          <p className="text-gray-700 leading-relaxed text-lg mb-6">
            Within a short drive, Silverstone residents transition from desert tranquility to alpine escapes. Use this
            guide to plan weekend outings that take advantage of the valley’s natural assets.
          </p>
          <div className="space-y-6">
            {recreationGuide.map((rec) => (
              <div key={rec.area} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{rec.area}</h3>
                <ul className="space-y-2 text-sm text-gray-700 leading-relaxed">
                  {rec.activities.map((activity) => (
                    <li key={activity}>• {activity}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-12 border border-slate-200" id="golf-disclosure">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Golf Course Disclosure & Future Outlook</h2>
          <div className="mb-6 rounded-xl border border-amber-200 bg-amber-50 p-5 text-sm text-amber-900">
            <strong className="font-semibold">Golf Course Disclosure:</strong> The Silverstone golf course has been closed
            since 2015 and sold at auction in May 2025. The new owner has not announced a redevelopment plan, so
            properties along the former fairways currently overlook dormant land. Landscaping upgrades and appraisal
            adjustments should be factored into any purchase. Stay updated via the dedicated golf course status page.
            <Link
              href="/golf-course-status"
              className="ml-2 font-semibold text-amber-900 underline decoration-amber-500 decoration-2 underline-offset-4 hover:text-amber-700"
            >
              Review the full timeline →
            </Link>
          </div>
          <p className="text-gray-700 leading-relaxed text-lg">
            While the fairways remain dormant, many homeowners have embraced private landscaping projects—installing desert
            gardens, artificial turf, and outdoor living zones to preserve views. Dr. Jan Duffy advises buyers on tree
            placement, fencing options, and HOA-approved enhancements that balance aesthetics with future redevelopment
            possibilities.
          </p>
        </section>

        <section className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-12 border border-slate-200" id="schools">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Schools & Education Access</h2>
          <p className="text-gray-700 leading-relaxed text-lg mb-6">
            Silverstone Ranch families can access high-performing Clark County School District campuses. O’Roarke
            Elementary, Cadwallader Middle School, and Arbor View High School each hold 7–8/10 GreatSchools ratings with
            specialized programs in STEM, arts, and career technical education. Charter options such as Somerset Academy
            Sky Pointe and Doral Academy Red Rock provide additional pathways, while Faith Lutheran and The Meadows School
            offer rigorous private curricula approximately 20 minutes south in Summerlin.
          </p>
          <p className="text-gray-700 leading-relaxed text-lg">
            Enrollment timelines vary, so start registration early. Dr. Jan Duffy coordinates school tours, introduction to
            parent communities, and scheduling support for families relocating mid-semester.
            <Link href="/schools" className="ml-2 font-semibold text-blue-600 hover:text-blue-700">
              Read the detailed school guide →
            </Link>
          </p>
        </section>

        <section className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-12 border border-slate-200" id="market-link">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Market Highlights & Investment Outlook</h2>
          <p className="text-gray-700 leading-relaxed text-lg mb-6">
            November 2025 market research shows Silverstone Ranch median prices at $685K, price per square foot at $284,
            and a brisk 13-day average for days on market. List-to-sale ratios hover around 101.8%, a testament to the
            neighborhood’s desirability and limited inventory. Relocation demand from healthcare, hospitality, and
            technology sectors continues to support stable appreciation.
          </p>
          <p className="text-gray-700 leading-relaxed text-lg mb-6">
            Sellers benefit from polished property presentation and well-documented maintenance. Buyers should secure
            pre-approval, consider appraisal gap coverage, and leverage Dr. Jan Duffy’s negotiation strategies for
            competitive offers.
          </p>
          <Link href="/market-insights" className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-700">
            Dive into the full market insights report →
          </Link>
        </section>

        <section className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-12 border border-slate-200" id="environmental">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Environmental Factors & Resilience Planning</h2>
          <p className="text-gray-700 leading-relaxed text-lg mb-6">
            Desert living requires a forward-looking approach. Silverstone Ranch homeowners are adopting high-SEER HVAC
            equipment, smart thermostats, xeriscape conversion rebates, and reflective roofing to counter rising summer
            temperatures. Monsoon readiness includes inspecting drainage channels, installing backflow preventers, and
            securing patio furniture ahead of seasonal wind events. HOA architectural guidelines support these upgrades
            while preserving community aesthetics.
          </p>
          <p className="text-gray-700 leading-relaxed text-lg">
            Review the environmental risk guide to evaluate 30-year projections for heat, wind, and flood, plus vendor
            recommendations from Dr. Jan Duffy’s trusted network.
            <Link href="/environmental-risk" className="ml-2 font-semibold text-blue-600 hover:text-blue-700">
              Access the environmental readiness playbook →
            </Link>
          </p>
        </section>

        <section className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-12 border border-slate-200" id="relocation">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Relocation Checklist & Concierge Support</h2>
          <p className="text-gray-700 leading-relaxed text-lg mb-6">
            Silverstone Ranch attracts professionals moving from California, Arizona, and the Midwest. Stay organized with
            this relocation checklist compiled by Dr. Jan Duffy’s concierge team.
          </p>
          <ul className="space-y-3 text-sm text-gray-700 leading-relaxed">
            {relocationChecklist.map((item) => (
              <li key={item} className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">{item}</li>
            ))}
          </ul>
        </section>

        <section className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-12 border border-slate-200" id="buyer-roadmap">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Buying Roadmap with Dr. Jan Duffy</h2>
          <p className="text-gray-700 leading-relaxed text-lg mb-6">
            Ready to make Silverstone Ranch home? Follow this roadmap to move from research to closing with clarity. Dr.
            Jan Duffy supports each milestone, coordinating lenders, inspectors, HOA disclosure packets, and closing
            logistics.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-blue-100 bg-blue-50/80 p-5">
              <h3 className="text-sm font-semibold text-blue-700 uppercase tracking-wide mb-2">Step 1: Strategy Session</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Discuss goals, financing readiness, and timeline. Receive curated neighborhood comparisons and the latest
                golf course disclosures.
              </p>
            </div>
            <div className="rounded-2xl border border-blue-100 bg-blue-50/80 p-5">
              <h3 className="text-sm font-semibold text-blue-700 uppercase tracking-wide mb-2">Step 2: Preview & Shortlist</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Tour high-fit properties, evaluate HOA documents, and estimate enhancement budgets based on view corridors
                and landscape plans.
              </p>
            </div>
            <div className="rounded-2xl border border-blue-100 bg-blue-50/80 p-5">
              <h3 className="text-sm font-semibold text-blue-700 uppercase tracking-wide mb-2">Step 3: Offer & Close</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Structure competitive offers with appraisal strategies, inspection timelines, and concierge-level closing
                support.
              </p>
            </div>
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/buyers-checklist"
              className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-blue-700 transition"
            >
              Download the Buyer Checklist
            </Link>
            <Link
              href="/request-info"
              className="inline-flex items-center justify-center rounded-lg border border-blue-600 px-4 py-2 text-sm font-semibold text-blue-600 hover:bg-blue-50 transition"
            >
              Request a Strategy Session
            </Link>
            <Link
              href="/book-tour"
              className="inline-flex items-center justify-center rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100 transition"
            >
              Schedule a Community Tour
            </Link>
          </div>
        </section>

        <section className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-12 border border-slate-200" id="transit-detail">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Transit & Commute Logistics</h2>
          <p className="text-gray-700 leading-relaxed text-lg mb-6">
            Residents leverage a mix of personal vehicles, express buses, and rideshare hubs to navigate Las Vegas. The
            Centennial Hills Transit Center—less than ten minutes away—offers park-and-ride convenience with routes to the
            Strip and Downtown. RideShare staging zones outside the guard gate streamline airport transfers, while planned
            roadway improvements along Grand Montecito Parkway will widen lanes and add protected bike shoulders by 2027.
          </p>
          <p className="text-gray-700 leading-relaxed text-lg">
            Obtaining a residential decal from the guard gate speeds re-entry during peak hours. Dr. Jan Duffy provides a
            relocation checklist covering DMV registration, express bus schedules, and smart-route suggestions to avoid
            congestion during large-scale city events.
          </p>
        </section>

        <section className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-12 border border-slate-200" id="future-development">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Future Developments & Infrastructure Pipeline</h2>
          <p className="text-gray-700 leading-relaxed text-lg mb-6">
            Centennial Hills continues to attract investment. The City of Las Vegas has allocated funds for a new regional
            library branch, expanded fire station coverage, and upgrades to Floyd Lamb Park including an amphitheater and
            enhanced trail lighting. Commercial permits filed for Skye Canyon Marketplace phase two will introduce upscale
            dining, boutique fitness, and a co-working lounge—amenities that complement Silverstone lifestyle priorities.
          </p>
          <p className="text-gray-700 leading-relaxed text-lg">
            Monitoring city council agendas keeps residents informed about road projects, school rezoning considerations, and
            any proposals touching the dormant golf course parcels. Dr. Duffy circulates quarterly development briefs to
            clients, helping buyers and sellers anticipate how improvements may influence property values.
          </p>
        </section>

        <section className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-12 border border-slate-200" id="resident-voices">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Resident Perspectives</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
            <blockquote className="border-l-4 border-blue-600 bg-blue-50/80 p-5 rounded-r-2xl">
              “After years in Summerlin, we wanted more peace without losing convenience. Silverstone delivers: grocery runs
              take minutes, and the kids can bike to friends’ houses inside the guard gates.”—The Garcia Family, Tuscany Village
            </blockquote>
            <blockquote className="border-l-4 border-blue-600 bg-blue-50/80 p-5 rounded-r-2xl">
              “As tech consultants, we value the express bus to Downtown and the fiber internet speeds. We host client calls
              from the clubhouse lounge overlooking the park.”—Marcus & Lee, Silverlake Enclave
            </blockquote>
          </div>
        </section>

        <section className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-12 border border-slate-200" id="relocation-plan">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Buyer Action Plan</h2>
          <ol className="space-y-4 text-sm text-gray-700 leading-relaxed list-decimal list-inside">
            <li>Schedule a strategy call with Dr. Duffy to align budget, timing, and preferred sub-associations.</li>
            <li>Secure lender pre-approval and relocation benefits documentation to strengthen negotiation leverage.</li>
            <li>Tour priority homes, gather HOA documents, and evaluate commute routes during peak hours.</li>
            <li>Craft offers incorporating appraisal gap reserves, flexible closings, and acknowledgment of golf course disclosures.</li>
            <li>Book inspections and environmental assessments within the first week of escrow to safeguard contingencies.</li>
          </ol>
        </section>

        <section className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-12 border border-slate-200" id="seller-plan">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Seller Preparation Checklist</h2>
          <ul className="space-y-3 text-sm text-gray-700 leading-relaxed">
            <li>Refresh desert landscaping, update exterior lighting, and document upgrades with receipts.</li>
            <li>Stage key rooms and outdoor living areas to highlight guard-gated privacy and trail access.</li>
            <li>Compile HOA minutes, golf course status summaries, and amenity guides for prospective buyers.</li>
            <li>Launch listing campaigns mid-week with twilight photography and relocation agent previews.</li>
            <li>Coordinate concierge services—cleaning, repair vendors, move-out logistics—to maintain momentum through closing.</li>
          </ul>
        </section>

        <section className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-12 border border-slate-200" id="area-faq">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
            <details className="rounded-lg border border-slate-200 bg-slate-50/80 p-4">
              <summary className="cursor-pointer text-base font-semibold text-gray-900">How noisy is Centennial Hills compared to central Las Vegas?</summary>
              <p className="mt-3">
                Elevated topography and distance from major resorts keep ambient noise low. Occasional aircraft activity stems
                from North Las Vegas Airport training flights, but guard gates and landscaped buffers maintain a quiet
                environment.
              </p>
            </details>
            <details className="rounded-lg border border-slate-200 bg-slate-50/80 p-4">
              <summary className="cursor-pointer text-base font-semibold text-gray-900">What internet providers serve Silverstone Ranch?</summary>
              <p className="mt-3">
                Cox, CenturyLink, and multiple fiber providers offer gigabit speeds. Most residents opt for fiber-to-home
                connections, ideal for streaming, remote work, and smart-home automation.
              </p>
            </details>
            <details className="rounded-lg border border-slate-200 bg-slate-50/80 p-4">
              <summary className="cursor-pointer text-base font-semibold text-gray-900">Where do residents shop for daily essentials?</summary>
              <p className="mt-3">
                Whole Foods, Smith’s Marketplace, Costco, and Target are within a 10-minute radius. Gourmet markets, pet
                boutiques, and specialty wine shops reside along Grand Montecito Parkway and Skye Canyon Drive.
              </p>
            </details>
          </div>
        </section>

        <section className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-slate-200" id="next-steps">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Next Steps & Personalized Guidance</h2>
          <p className="text-gray-700 leading-relaxed text-lg mb-6">
            Whether you are relocating, upsizing, or investing, Silverstone Ranch offers the lifestyle, amenities, and
            appreciation potential discerning buyers seek. Dr. Jan Duffy, Berkshire Hathaway HomeServices, leverages
            detailed market intelligence, a curated vendor network, and concierge-level service to make every transaction
            seamless.
          </p>
          <p className="text-gray-700 leading-relaxed text-lg mb-6">
            Connect today to receive your customized relocation kit, calendar of upcoming community events, and private
            listing previews tailored to your goals.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/request-info"
              className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-blue-700 transition"
            >
              Start the Conversation
            </Link>
            <Link
              href="/buy-with-agent"
              className="inline-flex items-center justify-center rounded-lg border border-blue-600 px-4 py-2 text-sm font-semibold text-blue-600 hover:bg-blue-50 transition"
            >
              Why Work with Dr. Jan Duffy
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}

