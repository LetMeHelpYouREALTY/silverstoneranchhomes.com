import Link from 'next/link'
import type { Metadata } from 'next'
import { CONTACT_INFO } from '@/lib/contact-info'
import { buildPageTitle } from '@/lib/metadata'
import { SeoJsonLd } from '@/components/SeoJsonLd'
import { buildFaqSchema, buildWebPageSchema } from '@/lib/seo'
import { AMENITIES_FAQS } from '@/lib/hyperlocal-faqs'

const coreAmenities = [
  {
    icon: '🌳',
    title: 'Central Park & Greenbelts',
    description:
      'A 6-acre park anchors Silverstone Ranch with lawns, shade structures, picnic pavilions, and rolling greenbelts linking each village.',
  },
  {
    icon: '🎾',
    title: 'Tennis, Pickleball & Courts',
    description:
      'Lighted tennis and pickleball courts, basketball hoops, and open play areas keep residents active from sunrise to dusk.',
  },
  {
    icon: '👨‍👩‍👧‍👦',
    title: 'Playgrounds & Splash Pads',
    description:
      'Age-specific playgrounds, splash pads, and tot lots provide safe, shaded spaces for families to gather year-round.',
  },
  {
    icon: '🚶',
    title: 'Walking, Biking & Fitness Loops',
    description:
      'Miles of paved trails wrap the former fairways, connecting neighborhoods to parks, schools, and community amenities.',
  },
]

const amenityClusters = [
  {
    title: 'The Palms Recreation Corridor',
    summary:
      'Located near the main guard gate, this cluster combines the largest playground, covered picnic pads, and easy access to the clubhouse lawn.',
    highlights: ['Shade sails with misting stations', 'Tot lot with rubberized surfacing', 'Direct trail connections to Pinehurst'],
  },
  {
    title: 'Pinehurst Fitness Loop',
    summary:
      'Townhome residents enjoy a circuit of outdoor fitness stations, dog-walking spurs, and benches overlooking the former fairways.',
    highlights: ['Push-up and stretching stations', 'Water fountains for pets', 'Low-level lighting for evening walks'],
  },
  {
    title: 'Tuscany Garden Squares',
    summary:
      'Pocket greens within the Tuscany sub-association deliver community herb gardens, bocce courts, and pop-up event spaces.',
    highlights: ['Seasonal herb plantings', 'Bocce and lawn game storage', 'Gathering pergolas with cafe lighting'],
  },
]

const wellnessHighlights = [
  {
    title: 'Centennial Hills YMCA',
    detail: 'Group fitness, indoor aquatics, and youth programs five minutes from the guard gate.',
  },
  {
    title: 'Mount Charleston & Summerlin Trails',
    detail: 'Elevation escapes, hiking, and cycling routes within 35 minutes.',
  },
  {
    title: 'Centennial Hills Hospital & Clinics',
    detail: 'A 226-bed hospital, VA clinic, and specialty practices within a 10-minute drive.',
  },
  {
    title: 'Floyd Lamb Park & Gilcrease Orchard',
    detail: 'Fishing lagoons, equestrian arenas, and seasonal farm events just north of the community.',
  },
]

const eventHighlights = [
  {
    season: 'Winter & Early Spring',
    activities:
      'Holiday light strolls, cocoa stations by the clubhouse lawn, and “New Year Reset” fitness classes offered in partnership with local trainers.',
  },
  {
    season: 'Late Spring & Summer',
    activities:
      'Outdoor movie nights, splash pad socials, kids’ sports camps, and sunset pickleball leagues designed for all skill levels.',
  },
  {
    season: 'Fall Lifestyle Series',
    activities:
      'Farmer market pop-ups, wine-and-learn garden nights, and pet adoption fairs hosted in the central park amphitheater.',
  },
]

const nearbyAttractions = [
  {
    name: 'Downtown Summerlin',
    distance: '18 minutes',
    description:
      'Retail, dining, and entertainment hub featuring City National Arena, Las Vegas Ballpark, and weekly artisan markets.',
  },
  {
    name: 'Red Rock Canyon',
    distance: '25 minutes',
    description:
      'Scenic loop drive, world-class hiking, and rock climbing vistas ideal for weekend adventures.',
  },
  {
    name: 'Aliante Nature Discovery Park',
    distance: '12 minutes',
    description:
      'Interactive discovery zones, splash features, and a scenic lake perfect for family outings.',
  },
  {
    name: 'Tule Springs Fossil Beds',
    distance: '15 minutes',
    description:
      'National monument showcasing Ice Age fossils, interpretive trails, and ranger-led educational programs.',
  },
]

const residentStories = [
  {
    name: 'Rachel • The Palms',
    story:
      '“We relocated from Orange County and instantly felt the difference: quiet mornings, kids biking to the park, and our own private pickleball crew. Silverstone has the amenities of a resort but the warmth of a neighborhood.”',
  },
  {
    name: 'Ahmed & Priya • Pinehurst Townhomes',
    story:
      '“As two physicians, we needed low-maintenance living. The HOA handles landscaping, the fitness loop keeps us active, and we can reach the hospital in eight minutes.”',
  },
  {
    name: 'Melissa • Tuscany',
    story:
      '“The garden squares host seasonal potlucks and yoga classes. It feels like a boutique community with concierge-level programming.”',
  },
]

const familyCalendar = [
  {
    month: 'January – March',
    events: ['Winter wellness boot camps', 'Junior chef classes in the clubhouse kitchen', 'Pickleball clinics for all ages'],
  },
  {
    month: 'April – June',
    events: ['Spring splash pad kickoff', 'Family relay races on the central lawn', 'Garden planting day with local nurseries'],
  },
  {
    month: 'July – September',
    events: ['Sunset concert series', 'Movie nights under the stars', 'Back-to-school supply drive and community BBQ'],
  },
  {
    month: 'October – December',
    events: ['Fall harvest festival', 'Holiday pet parade and adoption showcase', 'New Year’s Eve fireworks viewing party'],
  },
]

const buyerTips = [
  'Schedule community tours during late afternoon to experience lighting, amenities, and security procedures firsthand.',
  'Review HOA minutes for upcoming projects—amenity enhancements can influence property values and dues.',
  'Plan for landscaping enhancements if purchasing along the dormant fairway; private design upgrades reinforce open space views.',
]

const sellerTips = [
  'Highlight proximity to parks and trails in listing descriptions; buyers respond to lifestyle narratives.',
  'Stage patios and courtyards with cafe lighting and outdoor lounges to emphasize indoor-outdoor living.',
  'Provide a curated amenity guide during showings, including event calendars and guard gate procedures.',
]

const expandedFaqs = [
  ...AMENITIES_FAQS.map((f) => ({ question: f.question, answer: f.answer })),
  {
    question: 'What are the HOA dues, and what do they cover?',
    answer:
      'Master association dues range from $200 to $286 per month depending on sub-association. Fees cover guard gate staffing, landscaping of common areas, amenity maintenance, community events, and reserve funding for long-term improvements.',
  },
  {
    question: 'Can I reserve amenities for private events?',
    answer:
      'Yes. The clubhouse, cabanas, and park pavilions can be reserved through the CAMCO portal. Expect refundable deposits and proof of insurance for larger gatherings. Book 45–60 days ahead during peak seasons.',
  },
  {
    question: 'Are there age-specific programs?',
    answer:
      'Silverstone coordinates toddler playgroups, teen leadership councils, adult fitness classes, and active adult socials. Seasonal academies—tennis, swim, art, and STEM—cater to multiple age groups.',
  },
  {
    question: 'How pet-friendly is the community?',
    answer:
      'Pet stations, shaded dog paths, and monthly “Yappy Hours” at the park make Silverstone highly pet-friendly. HOA guidelines require leashes and adherence to quiet hours, but there are ample spaces for pets to socialize.',
  },
]

export const metadata: Metadata = {
  title: 'Silverstone Ranch Amenities | Parks & Trails 89131',
  description:
    'Silverstone Ranch amenities in Las Vegas 89131: six-acre park, tennis, pickleball, trails, HOA programming, and lifestyle resources for buyers from Dr. Jan Duffy.',
  alternates: {
    canonical: '/amenities',
  },
  openGraph: {
    title: buildPageTitle('Amenities & Lifestyle | Parks, Trails, Clubhouse'),
    description:
      'Discover Silverstone Ranch parks, recreation, and HOA programming designed for luxury living in Centennial Hills.',
    url: `${CONTACT_INFO.website.base}/amenities`,
    type: 'website',
  },
}

export default function AmenitiesPage() {
  const path = '/amenities'
  const pageSchema = buildWebPageSchema({
    path,
    name: 'Silverstone Ranch Amenities & Lifestyle',
    description:
      'Guide to Silverstone Ranch parks, recreation amenities, and concierge programming for residents and prospective buyers.',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Amenities', path },
    ],
  })

  const faqSchema = buildFaqSchema(path, expandedFaqs)
  const schemaData = [pageSchema, faqSchema].filter(Boolean)

  return (
    <main className="bg-white">
      <SeoJsonLd id="amenities" data={schemaData as Record<string, unknown>[]} />
      <section className="bg-gradient-to-br from-blue-50 via-white to-slate-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-700 mb-3">Lifestyle Guide · Updated June 2026</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Silverstone Ranch Amenities & Lifestyle
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            Silverstone Ranch delivers a guarded, resort-inspired experience in Centennial Hills. From a 6-acre central park
            to miles of walking loops, the community is designed for families, active adults, and professionals balancing
            luxury with everyday convenience. This guide breaks down the amenity pillars that set Silverstone apart and
            shows how Dr. Jan Duffy helps buyers experience each feature firsthand.
          </p>
          <p className="text-lg text-gray-700">
            Each sub-association—The Palms, Tuscany, Pinehurst, and Silverlake—connects residents to the master plan’s
            recreation network. Whether you schedule a private tour or explore during an open house, use this page as your
            blueprint for amenity walk-throughs, vendor coordination, and lifestyle planning.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white border-t border-slate-200" id="core-amenities">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Core Community Amenities</h2>
          <p className="text-gray-700 mb-8 text-lg leading-relaxed">
            The master association invests heavily in common-space upkeep and recreational programming. Landscaped entries,
            rolling greenbelts, and targeted lighting elevate the arrival experience day and night. Residents benefit from
            on-site amenities maintained year-round by professional crews—a key differentiator among Northwest Las Vegas
            enclaves.
          </p>
          <div className="grid gap-6 sm:grid-cols-2">
            {coreAmenities.map((amenity) => (
              <div key={amenity.title} className="rounded-2xl border border-slate-200 bg-slate-50/80 p-6 shadow-sm">
                <div className="text-4xl mb-4">{amenity.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{amenity.title}</h3>
                <p className="text-sm text-gray-700 leading-relaxed">{amenity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 border-t border-slate-200" id="amenity-clusters">
        <div className="mx-auto max-w-5xl space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">Amenity Clusters & Neighborhood Highlights</h2>
          <p className="text-sm text-gray-700 leading-relaxed">
            Amenities are strategically distributed so every neighborhood reaches a park, trail, or gathering space within
            minutes. Use this map-friendly overview to plan walking tours and assess proximity when evaluating listings.
          </p>
          <div className="space-y-6">
            {amenityClusters.map((cluster) => (
              <div key={cluster.title} className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">{cluster.title}</h3>
                <p className="text-sm text-gray-700 leading-relaxed mb-3">{cluster.summary}</p>
                <ul className="space-y-2 text-sm text-gray-700">
                  {cluster.highlights.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 border-t border-slate-200" id="clubhouse-programming">
        <div className="mx-auto max-w-5xl grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-start">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Clubhouse Programming & Social Calendar</h2>
            <p className="text-gray-700 mb-6 text-lg leading-relaxed">
              HOA staff coordinate an evolving calendar of events at the main clubhouse. Seasonal celebrations, movie nights,
              youth camps, and themed tastings foster social connection. Meeting rooms and covered patios are available for
              private reservations with refundable deposits, making it easy to host milestone events without leaving the
              neighborhood.
            </p>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Amenities You Can Reserve</h3>
            <ul className="space-y-3 text-sm text-gray-700">
              <li>Clubhouse great room with catering kitchen and AV hookups for presentations.</li>
              <li>Pool cabanas and shade structures—ideal for summer birthdays or weekend socials.</li>
              <li>Tennis and pickleball courts with night lighting for league play.</li>
              <li>Park pavilions with built-in grills for family reunions and outdoor celebrations.</li>
            </ul>
            <p className="text-gray-700 mt-4 text-sm">
              Reservation requests can be submitted via the CAMCO homeowner portal. Dr. Jan Duffy provides clients with the
              latest fee schedule and insurance requirements so plans stay on track.
            </p>
          </div>
          <aside className="rounded-2xl border border-blue-100 bg-white shadow-lg p-6">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Tour Amenities with Dr. Jan Duffy</h3>
            <p className="text-sm text-gray-700 mb-4">
              Schedule a curated community tour covering parks, clubhouse facilities, guard gate operations, and nearby
              conveniences. Dr. Duffy also introduces you to HOA representatives and preferred service vendors.
            </p>
            <div className="flex flex-col gap-3">
              <Link
                href="/book-tour"
                className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-blue-700 transition"
              >
                Schedule a Community Tour
              </Link>
              <Link
                href="/request-info"
                className="inline-flex items-center justify-center rounded-lg border border-blue-600 px-4 py-2 text-sm font-semibold text-blue-600 hover:bg-blue-50 transition"
              >
                Download Amenity Map
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white border-t border-slate-200" id="events">
        <div className="mx-auto max-w-5xl space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">Seasonal Lifestyle Events</h2>
          <p className="text-sm text-gray-700 leading-relaxed">
            Silverstone Ranch events blend community bonding with elevated amenities. The HOA partners with local chefs,
            fitness pros, and entertainers to deliver experiences that rival boutique resorts.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {eventHighlights.map((event) => (
              <div key={event.season} className="rounded-2xl border border-slate-200 bg-slate-50/80 p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{event.season}</h3>
                <p className="text-sm text-gray-700 leading-relaxed">{event.activities}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white border-t border-slate-200" id="outdoor-living">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Outdoor Living & Trail Network</h2>
          <p className="text-gray-700 mb-6 text-lg leading-relaxed">
            Silverstone Ranch prioritizes outdoor recreation. Trail loops stitch together each sub-association, allowing
            residents to walk, jog, and bike without crossing major roads. Many pathways border the former golf fairways,
            granting uninterrupted desert vistas. Fitness stations, pet-friendly waste stations, and shaded rest nodes are
            strategically installed to support everyday routines.
          </p>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Key Trail Highlights</h3>
          <ul className="space-y-3 text-sm text-gray-700">
            <li><span className="font-semibold text-blue-600">Fairway Loop:</span> 2.3-mile circuit encircling the dormant golf corridors—ideal for sunrise walks.</li>
            <li><span className="font-semibold text-blue-600">Park Connector:</span> Shortcuts linking Pinehurst, Tuscany, and The Palms to the central park and playgrounds.</li>
            <li><span className="font-semibold text-blue-600">Neighborhood Spurs:</span> Cul-de-sac cut-throughs that lead to nearby schools and bus stops.</li>
            <li><span className="font-semibold text-blue-600">Bike-Friendly Streets:</span> Low-traffic residential lanes with traffic calming and widened shoulders.</li>
          </ul>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 border-t border-slate-200" id="hoa-services">
        <div className="mx-auto max-w-5xl grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-start">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">HOA Services & Resident Support</h2>
            <p className="text-gray-700 mb-6 text-lg leading-relaxed">
              The master association, managed by CAMCO, oversees 24/7 guard services, landscaping along the parkways,
              reserve planning, and community communications. Sub-associations within Silverstone Ranch—such as The Palms,
              Tuscany, and Pinehurst—layer on additional services like front-yard maintenance or exterior paint schedules.
            </p>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Digital Homeowner Tools</h3>
            <ul className="space-y-3 text-sm text-gray-700">
              <li>Online payment portal with automatic draft and credit card options.</li>
              <li>Architectural review submissions handled through a digital ticketing system.</li>
              <li>Visitor management for guard gates via smartphone apps and QR codes.</li>
              <li>Community alerts and event calendars distributed through email and SMS.</li>
            </ul>
          </div>
          <aside className="rounded-2xl border border-blue-100 bg-white shadow-lg p-6">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Need the Latest HOA Docs?</h3>
            <p className="text-sm text-gray-700 mb-4">
              Dr. Jan Duffy coordinates resale demand letters, status certificates, and architectural guidelines for buyers
              and sellers—ensuring smooth contingencies and on-time closings.
            </p>
            <Link
              href="/request-info"
              className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-blue-700 transition"
            >
              Request HOA Documentation Support
            </Link>
          </aside>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white border-t border-slate-200" id="resident-stories">
        <div className="mx-auto max-w-5xl space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">Resident Stories & Lifestyle Testimonials</h2>
          <p className="text-sm text-gray-700 leading-relaxed">
            Hear how neighbors leverage Silverstone amenities to enhance daily life. These stories often resonate with buyers
            considering their first tour.
          </p>
          <div className="space-y-4">
            {residentStories.map((story) => (
              <blockquote key={story.name} className="rounded-2xl border border-slate-200 bg-slate-50/80 p-5 shadow-sm">
                <p className="text-sm text-gray-700 leading-relaxed italic">{story.story}</p>
                <footer className="mt-2 text-xs font-semibold text-gray-900">— {story.name}</footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white border-t border-slate-200" id="family-calendar">
        <div className="mx-auto max-w-5xl space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">Family & Community Event Calendar</h2>
          <p className="text-sm text-gray-700 leading-relaxed">
            Use this seasonal guide to map family activities, volunteer opportunities, and social events that keep Silverstone
            vibrant year-round.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {familyCalendar.map((window) => (
              <div key={window.month} className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-blue-700 mb-2">{window.month}</h3>
                <ul className="space-y-2 text-sm text-gray-700 leading-relaxed">
                  {window.events.map((event) => (
                    <li key={event}>• {event}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 border-t border-slate-200" id="wellness-network">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Wellness & Recreation Network Beyond the Gates</h2>
          <p className="text-gray-700 mb-6 text-lg leading-relaxed">
            Centennial Hills is a wellness-forward district. Residents couple on-site amenities with a network of nearby
            resources, including boutique fitness studios, medical centers, and outdoor adventures. Whether you prefer
            curated fitness classes or weekend hikes, Silverstone Ranch keeps healthy living convenient.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {wellnessHighlights.map((item) => (
              <div key={item.title} className="rounded-2xl border border-slate-200 bg-slate-50/80 p-5 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-700 leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 border-t border-slate-200" id="nearby-attractions">
        <div className="mx-auto max-w-5xl space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">Nearby Experiences for Silverstone Residents</h2>
          <p className="text-sm text-gray-700 leading-relaxed">
            Weekend adventures are a short drive away. Use this list to plan day trips, enrichment for visiting guests, or
            lifestyle content for relocation buyers evaluating the community.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {nearbyAttractions.map((spot) => (
              <div key={spot.name} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{spot.name}</h3>
                <p className="text-sm text-gray-600 mb-1"><span className="font-semibold text-gray-900">Distance:</span> {spot.distance}</p>
                <p className="text-sm text-gray-700 leading-relaxed">{spot.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 border-t border-slate-200" id="buyer-seller-guidance">
        <div className="mx-auto max-w-5xl space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">Guidance for Buyers & Sellers</h2>
          <div className="grid md:grid-cols-2 gap-6 text-sm text-gray-700 leading-relaxed">
            <div className="rounded-2xl border border-green-100 bg-green-50/80 p-6">
              <h3 className="text-lg font-semibold text-green-800 mb-2">Buyer Tips</h3>
              <ul className="space-y-2">
                {buyerTips.map((tip) => (
                  <li key={tip}>• {tip}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-green-100 bg-green-50/80 p-6">
              <h3 className="text-lg font-semibold text-green-800 mb-2">Seller Tips</h3>
              <ul className="space-y-2">
                {sellerTips.map((tip) => (
                  <li key={tip}>• {tip}</li>
                ))}
              </ul>
            </div>
          </div>
          <p className="text-sm text-gray-700 leading-relaxed">
            Dr. Duffy customizes these playbooks by sub-association, ensuring Pinehurst townhomes, The Palms estates, and
            Tuscany cottages each present their strongest lifestyle advantages.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 border-t border-slate-200" id="next-steps">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Plan Your Silverstone Ranch Experience</h2>
          <p className="text-gray-700 mb-6 text-lg leading-relaxed">
            Ready to explore amenities in person? Reach out to Dr. Jan Duffy for a curated tour, HOA document review, and a
            tailored lifestyle consultation. Whether you are relocating, upsizing, or investing, you will receive concierge
            support across lending, staging, and contract negotiations.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/book-tour"
              className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-blue-700 transition"
            >
              Schedule Amenities Tour
            </Link>
            <Link
              href="/homes-for-sale"
              className="inline-flex items-center justify-center rounded-lg border border-blue-600 px-4 py-2 text-sm font-semibold text-blue-600 hover:bg-blue-50 transition"
            >
              Browse Homes Near the Park
            </Link>
            <Link
              href="/buyers-checklist"
              className="inline-flex items-center justify-center rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100 transition"
            >
              Download Buyer Checklist
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 border-t border-slate-200" id="faq">
        <div className="mx-auto max-w-5xl space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[...expandedFaqs].map((item) => (
              <details key={item.question} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
                <summary className="cursor-pointer text-base font-semibold text-gray-900">{item.question}</summary>
                <p className="mt-3 text-sm text-gray-700 leading-relaxed">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white border-t border-slate-200" id="wellness-programming">
        <div className="mx-auto max-w-5xl space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">Wellness Programming & Resident Fitness</h2>
          <p className="text-sm text-gray-700 leading-relaxed">
            Beyond the trail network, Silverstone Ranch curates a robust wellness calendar. Certified trainers host sunrise
            boot camps and restorative yoga on the central lawn. Seasonal “Wellness Weeks” pair infrared sauna pop-ups with
            nutritional workshops featuring local chefs. The HOA also negotiates discounted memberships with nearby fitness
            studios, making it easy to complement in-community workouts with specialized training.
          </p>
          <p className="text-sm text-gray-700 leading-relaxed">
            Parents appreciate youth programming that introduces healthy habits early: swim safety clinics in summer, junior
            tennis ladders, and mindfulness workshops promoted through the community newsletter. Active adult residents enjoy
            low-impact classes—tai chi, water aerobics, and mobility training—tailored to longevity and injury prevention.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 border-t border-slate-200" id="amenity-maintenance">
        <div className="mx-auto max-w-5xl space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">Amenity Maintenance & Capital Planning</h2>
          <p className="text-sm text-gray-700 leading-relaxed">
            Silverstone’s reserve study outlines a 20-year roadmap for upgrades. Tennis court resurfacing cycles every five
            years, play structures receive safety audits quarterly, and irrigation controllers are upgraded community-wide to
            conserve water. Residents can review upcoming projects within the HOA portal, ensuring transparency around dues
            allocation and prioritization.
          </p>
          <p className="text-sm text-gray-700 leading-relaxed">
            Recent enhancements include LED pathway lighting, expanded pickleball court seating, and shade canopy
            replacements. Future initiatives under review for 2026 feature splash pad refreshes, smart hydration stations,
            and a potential co-working lounge adjacent to the clubhouse. These investments keep amenities current while
            protecting property values.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white border-t border-slate-200" id="accessibility">
        <div className="mx-auto max-w-5xl space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">Accessibility & Inclusive Design</h2>
          <p className="text-sm text-gray-700 leading-relaxed">
            Amenities are engineered with accessibility in mind. Wheelchair-friendly ramps connect the clubhouse to the
            central lawn, playgrounds incorporate sensory panels and ADA-compliant swings, and trail networks feature gentle
            slopes for walkers and strollers. Community events provide quiet zones, captioned presentations, and allergy-aware
            catering options to ensure every resident feels welcome.
          </p>
          <p className="text-sm text-gray-700 leading-relaxed">
            Homeowners seeking to add accessibility features—chair lifts, wider doorways, tactile paving—can submit expedited
            architectural requests. The HOA maintains a list of approved vendors familiar with Silverstone design guidelines
            to streamline projects.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 border-t border-slate-200" id="concierge">
        <div className="mx-auto max-w-5xl space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">Homeowner Concierge & Vendor Support</h2>
          <p className="text-sm text-gray-700 leading-relaxed">
            Silverstone’s concierge desk assists with event planning, vendor referrals, and welcome packets for new residents.
            Need a pet sitter, landscape designer, or private chef for a backyard celebration? The concierge team curates
            vetted professionals who understand guard gate procedures and community standards.
          </p>
          <p className="text-sm text-gray-700 leading-relaxed">
            New buyers receive a digital handbook outlining service schedules, recycling tips, emergency contacts, and HOA
            communication channels. Dr. Jan Duffy supplements this with a relocation kit covering utility setup, school
            introductions, and recommended contractors—making move-in seamless.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white border-t border-slate-200" id="sustainability">
        <div className="mx-auto max-w-5xl space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">Sustainability & Energy Efficiency Initiatives</h2>
          <p className="text-sm text-gray-700 leading-relaxed">
            Silverstone Ranch partners with Southern Nevada Water Authority and NV Energy to promote eco-friendly living.
            Community-wide irrigation audits, desert landscaping workshops, and rebate sign-up drives reduce water
            consumption without sacrificing curb appeal. Many homeowners convert turf to native plant palettes using HOA-approved
            designs, freeing budget for outdoor kitchens or pergola upgrades.
          </p>
          <p className="text-sm text-gray-700 leading-relaxed">
            Solar-ready guidelines and EV charging best practices are built into architectural review documents. Dr. Jan
            Duffy provides a vetted contractor list for solar panels, battery storage, smart irrigation, and whole-home air
            purification—upgrades that elevate comfort while attracting sustainability-minded buyers.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 border-t border-slate-200" id="remote-work">
        <div className="mx-auto max-w-5xl space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">Remote Work & Digital Lifestyle Support</h2>
          <p className="text-sm text-gray-700 leading-relaxed">
            High-speed fiber connectivity, quiet pocket parks, and shaded courtyard seating make remote work seamless. The
            clubhouse offers reservable conference rooms, podcast-ready breakout spaces, and printing services for residents
            running home-based enterprises. Outdoor work pods equipped with Wi-Fi extenders allow professionals to take
            client calls amidst landscaped vistas.
          </p>
          <p className="text-sm text-gray-700 leading-relaxed">
            Community groups host mastermind breakfasts, small business showcases, and continuing education sessions—ideal
            for networking with fellow entrepreneurs and relocation executives. These amenities help homeowners balance
            productivity with the resort-like environment Silverstone is known for.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white border-t border-slate-200" id="summary">
        <div className="mx-auto max-w-5xl space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">Summary & Next Steps</h2>
          <p className="text-sm text-gray-700 leading-relaxed">
            Silverstone Ranch blends resort-caliber amenities with the warmth of a close-knit neighborhood. Whether you are
            exploring trail loops at sunrise, hosting celebrations on the clubhouse lawn, or leveraging concierge support for
            home upgrades, the community elevates daily living at every turn.
          </p>
          <p className="text-sm text-gray-700 leading-relaxed">
            Partner with Dr. Jan Duffy to tour amenities in person, align HOA expectations with your goals, and secure the
            vendors needed to personalize your Silverstone lifestyle. From first showing to post-closing orientation, you
            will have a trusted guide every step of the way.
          </p>
        </div>
      </section>
    </main>
  )
}

