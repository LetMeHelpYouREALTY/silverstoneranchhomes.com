import Link from 'next/link'
import type { Metadata } from 'next'
import { CONTACT_INFO } from '@/lib/contact-info'
import { buildHyperlocalTitle, buildPageTitle, withShareImage } from '@/lib/metadata'
import { SeoJsonLd } from '@/components/SeoJsonLd'
import { SectionHeading } from '@/components/SectionHeading'
import { GbpCtaRow } from '@/components/GbpCtaRow'
import AgentSummaryCard from '@/components/AgentSummaryCard'
import AmenityMapClient from '@/components/amenity-map/AmenityMapClient'
import { COMMUNITY_LOCATION } from '@/lib/nearby-amenities-config'
import {
  CURATED_NEARBY_PLACES,
  NEARBY_COMMUTE_DESTINATIONS,
  curatedPlacesForCategory,
} from '@/lib/curated-nearby-places'
import { NEARBY_AMENITIES_FAQS } from '@/lib/hyperlocal-faqs'
import {
  buildFaqSchema,
  buildGeoCoordinates,
  buildMapPlaceSchema,
  buildNearbyPlacesItemList,
  buildRealEstateAgentSchema,
  buildWebPageSchema,
} from '@/lib/seo'
import { ASSIGNED_SCHOOLS } from '@/lib/market-data'

const path = '/nearby-amenities'

export const metadata: Metadata = {
  title: buildHyperlocalTitle(`Nearby Amenities in ${COMMUNITY_LOCATION.name}`),
  description:
    `Restaurants, grocery, parks, healthcare, schools, and shopping near Silverstone Ranch (${COMMUNITY_LOCATION.postalCode}), Centennial Hills. Interactive map and buyer FAQs from ${CONTACT_INFO.agentName}.`,
  alternates: {
    canonical: path,
  },
  openGraph: withShareImage(
    {
      title: buildPageTitle(`Nearby Amenities in ${COMMUNITY_LOCATION.name}, Las Vegas`),
      description:
        'Hyperlocal amenity map and verified nearby destinations for Silverstone Ranch buyers and relocation clients.',
      url: `${CONTACT_INFO.website.base}${path}`,
      type: 'website',
    },
    `Nearby amenities in ${COMMUNITY_LOCATION.name}`,
  ),
}

const categorySections = [
  {
    id: 'dining',
    title: 'Dining & Cafes',
    body: `Centennial Hills and west Summerlin corridors feed Silverstone Ranch with chef-driven spots and casual chains. Timbers Bar & Grill on N Durango and dining in Downtown Summerlin are common weekend destinations—typically 15–25 minutes from the gates (approximate). Grocery runs often pair with quick bites along the N Durango retail corridor.`,
    categories: ['restaurants', 'cafes'] as const,
  },
  {
    id: 'parks',
    title: 'Parks & Recreation',
    body: `Inside the gates, Silverstone Ranch’s six-acre community park anchors trails, courts, and playgrounds. Outside the neighborhood, Floyd Lamb Park at Tule Springs offers fishing lagoons, picnic lawns, and equestrian areas—a regional draw minutes north of ZIP ${COMMUNITY_LOCATION.postalCode}.`,
    categories: ['parks'] as const,
  },
  {
    id: 'golf',
    title: 'Golf & Outdoor Sports',
    body:
      'Silverstone’s on-site golf course remains dormant; buyers on fairway lots should review HOA and city disclosures. Public golf is available at TPC Las Vegas in Summerlin and other west-valley courses, while the Centennial Hills YMCA adds indoor aquatics and group fitness.',
    categories: ['golf', 'fitness'] as const,
  },
  {
    id: 'healthcare',
    title: 'Healthcare',
    body:
      'Centennial Hills Hospital on N Durango Drive is the primary acute-care campus for northwest valley residents, with specialty clinics and urgent care along the same corridor. MountainView Hospital and VA resources are also reachable via the 215 Beltway (approximate drive times vary by time of day).',
    categories: ['healthcare', 'pharmacies'] as const,
  },
  {
    id: 'shopping',
    title: 'Grocery & Shopping',
    body: `Smith's Marketplace, Whole Foods (Downtown Summerlin), and Costco (Summerlin) anchor routine errands for Silverstone households. The N Durango corridor bundles grocery, pharmacy, and services—often the first stop for new residents setting up utilities and home goods.`,
    categories: ['grocery', 'shopping'] as const,
  },
  {
    id: 'schools',
    title: 'Schools & Commutes',
    body: `Most Silverstone Ranch addresses assign to ${ASSIGNED_SCHOOLS.elementary}, ${ASSIGNED_SCHOOLS.middle}, and ${ASSIGNED_SCHOOLS.high} through CCSD—confirm boundaries at ccsd.net/zoning. The 215 Beltway connects Centennial Hills to Downtown Summerlin, the Strip, and Harry Reid International Airport; times below are approximate and traffic-dependent.`,
    categories: ['schools'] as const,
  },
] as const

export default function NearbyAmenitiesPage() {
  const faqs = NEARBY_AMENITIES_FAQS.map((f) => ({ question: f.question, answer: f.answer }))

  const pageSchema = buildWebPageSchema({
    path,
    name: `Nearby Amenities in ${COMMUNITY_LOCATION.name}, Las Vegas`,
    description:
      'Interactive amenity map and verified nearby restaurants, parks, healthcare, schools, and shopping for Silverstone Ranch relocation buyers.',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Nearby Amenities', path },
    ],
  })

  const communityPlaceSchema = {
    ...buildMapPlaceSchema({
      path,
      name: `${COMMUNITY_LOCATION.name}, ${COMMUNITY_LOCATION.city} ${COMMUNITY_LOCATION.postalCode}`,
      description:
        'Guard-gated master-planned community in Centennial Hills, Northwest Las Vegas, with geo coordinates for nearby amenity search.',
    }),
    geo: buildGeoCoordinates(),
  }

  const placesItemList = buildNearbyPlacesItemList({
    path,
    name: `Featured places near ${COMMUNITY_LOCATION.name}`,
    places: CURATED_NEARBY_PLACES.map((place) => ({
      name: place.name,
      schemaType: place.schemaType,
      ...(place.address ? { address: place.address } : {}),
    })),
  })

  const faqSchema = buildFaqSchema(path, faqs, ['.speakable-answer'])
  const agentSchema = {
    ...buildRealEstateAgentSchema(),
    areaServed: ['Silverstone Ranch, Las Vegas, NV 89131', ...CONTACT_INFO.serviceAreas],
  }

  const schemaData = [pageSchema, communityPlaceSchema, placesItemList, faqSchema, agentSchema].filter(Boolean)

  return (
    <main className="bg-white">
      <SeoJsonLd id="nearby-amenities-schema" data={schemaData as Record<string, unknown>[]} />

      <section className="bg-gradient-to-br from-blue-50 via-white to-slate-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-700 mb-3">
            Centennial Hills · ZIP {COMMUNITY_LOCATION.postalCode}
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6 leading-tight">
            Nearby Amenities in {COMMUNITY_LOCATION.name}, Las Vegas
          </h1>
          <p className="text-lg text-slate-700 leading-relaxed mb-4">
            Buyers relocating to Silverstone Ranch ask the same questions: where do you grocery shop, how far is the
            Strip, and which hospitals sit closest to the guard gates? This page answers those questions in plain language
            and maps verified destinations around the community center (
            {COMMUNITY_LOCATION.center.lat.toFixed(4)}, {COMMUNITY_LOCATION.center.lng.toFixed(4)}).
          </p>
          <p className="text-lg text-slate-700 leading-relaxed">
            Use the interactive map for live nearby results, or browse the featured list below—each business links to a
            primary source used to verify its name and address. For a private driving tour, contact {CONTACT_INFO.agentName}{' '}
            at {CONTACT_INFO.phone.display}.
          </p>
          <GbpCtaRow className="mt-6" />
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-slate-200" aria-labelledby="amenity-map-heading">
        <div className="mx-auto max-w-6xl space-y-6">
          <SectionHeading id="amenity-map-heading" showImage={false}>
            Interactive amenity map
          </SectionHeading>
          <AmenityMapClient variant="full" />
        </div>
      </section>

      {categorySections.map((section) => (
        <section
          key={section.id}
          id={section.id}
          className="py-16 px-4 sm:px-6 lg:px-8 border-t border-slate-200 bg-slate-50/50"
        >
          <div className="mx-auto max-w-5xl space-y-6">
            <SectionHeading as="h2" showImage={false}>{section.title}</SectionHeading>
            <p className="text-slate-700 leading-relaxed">{section.body}</p>
            <div className="grid gap-4 sm:grid-cols-2">
              {section.categories.flatMap((categoryId) =>
                curatedPlacesForCategory(categoryId).map((place) => (
                  <article
                    key={`${section.id}-${place.name}`}
                    className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                  >
                    <h3 className="text-lg font-semibold text-slate-900">{place.name}</h3>
                    <p className="text-sm text-slate-600">{place.address}</p>
                    {place.note ? <p className="mt-2 text-sm text-slate-700">{place.note}</p> : null}
                  </article>
                )),
              )}
            </div>
          </div>
        </section>
      ))}

      <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-slate-200" id="commute">
        <div className="mx-auto max-w-5xl space-y-6">
          <SectionHeading showImage={false}>Approximate drive times</SectionHeading>
          <p className="text-sm text-slate-600">
            Times are approximate and vary with traffic, guard-gate exit, and destination parking.
          </p>
          <ul className="grid gap-4 md:grid-cols-2">
            {NEARBY_COMMUTE_DESTINATIONS.map((dest) => (
              <li key={dest.name} className="rounded-2xl border border-blue-100 bg-white p-5 shadow-sm">
                <h3 className="text-lg font-semibold text-blue-800">{dest.name}</h3>
                <p className="mt-2 text-sm text-slate-700">{dest.approximateDrive}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-slate-200 bg-slate-50" id="faq">
        <div className="mx-auto max-w-5xl space-y-6">
          <SectionHeading showImage={false}>Nearby amenities FAQs</SectionHeading>
          <div className="space-y-4">
            {faqs.map((item) => (
              <details key={item.question} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
                <summary className="cursor-pointer text-base font-semibold text-slate-900">{item.question}</summary>
                <p className="speakable-answer mt-3 text-sm text-slate-700 leading-relaxed">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-slate-200">
        <div className="mx-auto max-w-5xl grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-start">
          <div>
            <SectionHeading showImage={false}>Your Silverstone Ranch amenity expert</SectionHeading>
            <p className="text-slate-700 leading-relaxed mb-4">
              {CONTACT_INFO.agentName}, {CONTACT_INFO.brokerage} · Nevada license {CONTACT_INFO.license}. Hyperlocal
              guidance for guard-gated tours, HOA resale packages, and commute planning in ZIP {COMMUNITY_LOCATION.postalCode}.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/book-tour"
                className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-blue-700"
              >
                Schedule a tour
              </Link>
              <Link
                href="/homes-for-sale"
                className="inline-flex items-center justify-center rounded-lg border border-blue-600 px-4 py-2 text-sm font-semibold text-blue-600 hover:bg-blue-50"
              >
                View homes for sale
              </Link>
              <Link
                href="/amenities"
                className="inline-flex items-center justify-center rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100"
              >
                On-site community amenities
              </Link>
            </div>
          </div>
          <AgentSummaryCard />
        </div>
      </section>
    </main>
  )
}
