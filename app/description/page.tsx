import Link from 'next/link'
import type { Metadata } from 'next'
import { CONTACT_INFO } from '@/lib/contact-info'
import { buildPageTitle } from '@/lib/metadata'
import { SeoJsonLd } from '@/components/SeoJsonLd'
import { buildFaqSchema, buildWebPageSchema } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Community Description | Lifestyle Overview',
  description:
    'Dive into Silverstone Ranch community highlights—architecture, amenities, schools, and lifestyle perks curated by Dr. Jan Duffy REALTOR®.',
  alternates: {
    canonical: '/description',
  },
  openGraph: {
    title: buildPageTitle('Community Description | Lifestyle Overview'),
    description:
      'Learn about Silverstone Ranch architecture, amenities, schools, and lifestyle experiences with guidance from Dr. Jan Duffy.',
    url: `${CONTACT_INFO.website.base}/description`,
    type: 'website',
  },
}

const communityFaqs = [
  {
    question: 'What architectural styles dominate Silverstone Ranch?',
    answer:
      'Expect Spanish, Mediterranean, and desert-modern elevations with stone accents, gated courtyards, and flexible floor plans that emphasize indoor-outdoor living.',
  },
  {
    question: 'Are there updates on the dormant golf course?',
    answer:
      'The May 2025 auction placed the former fairways with a redevelopment group evaluating park concepts. Native landscaping and walking paths remain accessible, and Dr. Duffy tracks every city filing for clients.',
  },
  {
    question: 'How close are essential services and schools?',
    answer:
      'Centennial Hills Hospital, Smith’s Marketplace, Costco, and zoned schools like O’Roarke Elementary and Arbor View High sit within a ten-minute drive of the guard gates.',
  },
  {
    question: 'Can investors purchase homes in Silverstone?',
    answer:
      'Yes. Lease terms must be six months or longer, tenants register with the guard gate, and landscape standards must stay compliant. Dr. Duffy guides investors through approvals and leasing demand.',
  },
]

export default function DescriptionPage() {
  const path = '/description'
  const pageSchema = buildWebPageSchema({
    path,
    name: 'Silverstone Ranch Community Overview',
    description:
      'Comprehensive overview of Silverstone Ranch architecture, amenities, schools, and lifestyle experiences curated for buyers and sellers.',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Community Description', path },
    ],
  })

  const faqSchema = buildFaqSchema(
    path,
    communityFaqs.map((faq) => ({ question: faq.question, answer: faq.answer })),
  )

  const schemaData = [pageSchema, faqSchema].filter(Boolean)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-20 px-4 sm:px-6 lg:px-8">
      <SeoJsonLd id="description" data={schemaData as Record<string, unknown>[]} />
      <div className="mx-auto max-w-6xl space-y-16">
        <section className="text-center max-w-3xl mx-auto">
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-6">
            Community Overview
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Silverstone Ranch Community Overview</h1>
          <p className="text-lg text-gray-600">
            Explore guard-gated neighborhoods, architectural character, and lifestyle amenities that define Silverstone Ranch in
            Northwest Las Vegas.
          </p>
        </section>

        <section className="bg-white rounded-lg shadow-xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Community Story & Setting</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Silverstone Ranch rose from the desert between 2003 and 2008, transforming 27 holes of rolling fairways into one of
            Centennial Hills’ most beloved guard-gated enclaves. The community stretches along the foothills north of the 215
            Beltway, where the Spring and Sheep Mountain ranges create a dramatic skyline and cooler evening breezes. Every
            approach to Silverstone is intentional: palm-lined boulevards, tree canopies, and meticulously maintained xeriscape
            plantings guide residents to a staffed gatehouse that sets the tone for a secure yet welcoming neighborhood.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Today, Silverstone balances its golf-course origins with a forward-looking lifestyle. Walking and biking paths trace
            the former fairways, connecting nine micro-neighborhoods to a six-acre community park, lighted basketball courts,
            and picnic lawns. With Downtown Summerlin, the medical district, and national recreation areas minutes away,
            homeowners enjoy suburban calm without sacrificing convenience. Dr. Jan Duffy narrates this story for clients by
            weaving market analytics, HOA history, and neighborhood anecdotes into every tour.
          </p>
        </section>

        <section className="bg-white rounded-lg shadow-xl p-8 md:p-12 space-y-8">
          <h2 className="text-3xl font-bold text-gray-900">Neighborhood Profiles</h2>
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-3">The Palms (Guard-Gated Core)</h3>
            <p className="text-gray-700 leading-relaxed">
              The Palms anchors Silverstone with estate-style residences ranging from 2,800 to over 4,000 square feet. Deep lot
              setbacks create dramatic driveways, and private courtyards extend interior living to the outdoors. Many homes
              feature casitas and multi-generational suites, appealing to households seeking flexible space. Residents enjoy a
              short stroll to the community park and appreciate the privacy afforded by single-access entry and professional
              landscaping that wraps every cul-de-sac.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-3">Pinehurst (Townhome Villas)</h3>
            <p className="text-gray-700 leading-relaxed">
              Pinehurst blends lock-and-leave convenience with Silverstone charm. Two-story townhomes measure 1,345 to 2,015 square
              feet and include attached two-car garages, generous storage, and covered patios positioned to capture sunrise and
              sunset views. Maintenance is HOA-managed, making Pinehurst a favorite among medical professionals from nearby
              Centennial Hills Hospital and snowbirds who want an easy, low-maintenance base in Las Vegas.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-3">Silverlake (Single-Story Specialists)</h3>
            <p className="text-gray-700 leading-relaxed">
              Silverlake is synonymous with single-story living. Homes measure 2,025 to 2,825 square feet and sit on lots up to a
              quarter acre, plenty of space for pools, outdoor kitchens, and putting greens. Interiors emphasize open-concept
              great rooms, split-bedroom configurations, and oversize garages that easily accommodate desert toys or workshops.
              The neighborhood sells quickly thanks to limited single-story supply across Las Vegas.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-3">Princeville Collection</h3>
            <p className="text-gray-700 leading-relaxed">
              Positioned along the former golf course, the Princeville Collection offers the community’s most dramatic curb
              appeal. Two-story homes boast grand staircases, lofts that transition into game rooms or offices, and panoramic
              windows framing mountain vistas. Three-car garages and generous side yards appeal to car enthusiasts and families
              with recreational vehicles. Even with the course dormant, the wide sightlines remain a major draw for buyers.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-3">Amberly, Clairbrook, Eastpoint, Greenfield, Parkfield & Somerset</h3>
            <p className="text-gray-700 leading-relaxed">
              These non-gated villages provide approachable entry points into Silverstone while retaining the signature
              landscaping, architectural diversity, and neighborly energy the community is known for. Streets meander around
              pocket parks and green space, creating an inviting environment for evening walks, dog-friendly meetups, and
              seasonal block parties. Buyers appreciate the balance of value, space, and community engagement found in these
              neighborhoods.
            </p>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Architecture & Interior Design</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Silverstone homes blend Mediterranean and contemporary influences. Expect stucco exteriors, stacked-stone accents,
            wrought-iron balconies, and clay tile roofs that complement the desert palette. Inside, soaring ceilings, transom
            windows, and engineered hardwood or travertine floors create a sophisticated yet livable environment. Great rooms
            connect seamlessly to kitchens with oversized islands, professional appliance packages, and walk-in pantries. Owner
            suites rival resort retreats with spa-like baths, frameless showers, soaking tubs, and custom closets.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Buyers also value the thoughtful storage solutions hidden throughout: drop zones near garages, built-in shelving in
            lofts, and climate-controlled wine closets in select plans. Smart-home enhancements—Nest thermostats, integrated
            security, and EV-ready outlets—are increasingly common, supporting modern lifestyles without compromising the
            community’s timeless aesthetic.
          </p>
        </section>

        <section className="bg-white rounded-lg shadow-xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Indoor-Outdoor Living</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Living in Silverstone means embracing Southern Nevada’s sunshine. Many homes feature multi-panel sliders that erase
            the line between great rooms and covered patios. Outdoor kitchens, fire pits, misting systems, and pebble-finish
            pools turn backyards into year-round entertainment zones. Desert-friendly plant palettes—agaves, rosemary, and dwarf
            palms—deliver color and texture while keeping water usage in check. For homes bordering dormant fairways, residents
            invest in creative landscaping: raised planters, privacy hedges, and art installations that elevate the view.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Community amenities complement private outdoor spaces. The six-acre park hosts weekend soccer games, yoga classes,
            and food truck gatherings. Lighted basketball and tennis courts stay active into the evening thanks to soft desert
            breezes. Families often bike from neighborhood to neighborhood, connecting with friends along the way. Silverstone is
            designed for movement, wellness, and connection.
          </p>
        </section>

        <section className="bg-white rounded-lg shadow-xl p-8 md:p-12 space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">Lifestyle Pillars</h2>
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-3">Guard-Gated Security</h3>
            <p className="text-gray-700 leading-relaxed">
              A staffed gatehouse monitors guests, deliveries, and service providers around the clock. Residents register frequent
              visitors, while temporary access codes keep contractors and vendors accountable. The result is a tranquil
              neighborhood where kids ride bikes freely and homeowners travel with confidence.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-3">Recreation & Wellness</h3>
            <p className="text-gray-700 leading-relaxed">
              Silverstone connects to the Floyd Lamb Park ecosystem, offering miles of trails, picnic lakes, and wildlife viewing.
              Within the neighborhood, residents enjoy fitness classes at the park pavilion, boot camps on the basketball courts,
              and seasonal fun runs that weave through former fairways. Centennial Hills YMCA and library sit minutes away,
              providing indoor pools, cultural programming, and community education.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-3">Convenience & Connectivity</h3>
            <p className="text-gray-700 leading-relaxed">
              Daily errands are effortless with Smith’s Marketplace, Costco, Trader Joe’s, and boutique dining within a ten-minute
              drive. Centennial Hills Hospital anchors a robust medical corridor, while quick freeway access connects commuters to
              Summerlin, the Strip, or the airport. Silverstone’s location balances tranquility with efficiency.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-3">Community Spirit</h3>
            <p className="text-gray-700 leading-relaxed">
              HOA-hosted events—from fall festivals to holiday golf-cart parades—create lasting friendships. The community message
              board overflows with babysitter recommendations, gardening clubs, and philanthropic initiatives. Dr. Duffy herself
              sponsors scholarship drives and neighborhood cleanups, reinforcing a culture of giving back.
            </p>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Market Momentum & Data</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            June 2026 market performance underscores Silverstone’s desirability. Median sale price sits at $685,000—up 5.2%
            year-over-year—while price per square foot averages $284. Renovated single-story homes command an 8% premium over
            two-story counterparts due to limited supply. Inventory remains tight with 18 active listings, and well-presented
            homes secure offers in under two weeks. Buyers appreciate the guard-gated lifestyle, established landscaping, and
            proximity to top-ranked schools like O’Roarke Elementary, Cadwallader Middle, and Arbor View High.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Dr. Jan Duffy tracks micro-neighborhood performance weekly, sharing absorption rates, buyer demographics, and investor
            activity with her clients. Her analytics inform pricing strategy, staging recommendations, and negotiation tactics so
            every seller enters the market with clarity.
          </p>
        </section>

        <section className="bg-white rounded-lg shadow-xl p-8 md:p-12 space-y-8">
          <h2 className="text-3xl font-bold text-gray-900">Buyer Success Checklist</h2>
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-3">Review Golf Course Disclosures</h3>
            <p className="text-gray-700 leading-relaxed">
              Understand the May 2025 auction history, current land status, and potential redevelopment scenarios. Dr. Duffy
              supplies city records, HOA correspondence, and landscape enhancement ideas so you can visualize long-term plans for
              any former fairway lot.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-3">Confirm HOA Guidelines</h3>
            <p className="text-gray-700 leading-relaxed">
              Budget for $62 monthly dues on single-family homes and $190 on townhomes. Review architectural standards, rental
              minimums, and landscape requirements early to avoid surprises. The HOA remains proactive about curb appeal and
              community safety.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-3">Secure Competitive Financing</h3>
            <p className="text-gray-700 leading-relaxed">
              With multiple-offer scenarios common, Dr. Duffy encourages buyers to obtain fully underwritten approvals with
              conventional and jumbo options. Her lender partners design appraisal gap strategies and buydown credits that keep
              offers attractive without sacrificing protections.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-3">Plan for Climate-Smart Upgrades</h3>
            <p className="text-gray-700 leading-relaxed">
              Silverstone homes already feature efficient windows and zoned HVAC systems, yet additional improvements—solar
              shades, smart thermostats, drip irrigation audits—optimize comfort and stabilise utility costs, especially in peak
              summer months.
            </p>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-xl p-8 md:p-12 space-y-8">
          <h2 className="text-3xl font-bold text-gray-900">Seller Strategy Playbook</h2>
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-3">60 Days Before Listing</h3>
            <p className="text-gray-700 leading-relaxed">
              Schedule a strategy session with Dr. Duffy to align pricing expectations and timelines. Refresh landscaping, touch
              up exterior paint, and service HVAC systems. Order HOA resale packages and gather warranty documents so buyers see a
              well-maintained home from day one.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-3">Launch Week</h3>
            <p className="text-gray-700 leading-relaxed">
              Professional stagers and photographers capture sunrise and twilight imagery that highlight architecture and outdoor
              living. Dr. Duffy previews the home with relocation agents, coordinates guard-gated open houses, and launches a
              multi-channel marketing campaign featuring video, print, and digital assets.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-3">Under Contract</h3>
            <p className="text-gray-700 leading-relaxed">
              Expect a detailed weekly report covering inspections, appraisal status, contingency timelines, and repair
              negotiations. Dr. Duffy keeps communication transparent with buyers’ agents while protecting your leverage. Her
              closing concierge team handles moving logistics, donation pickups, and utility transfers so you can focus on your
              next chapter.
            </p>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-xl p-8 md:p-12 space-y-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <details className="rounded-lg border border-slate-200 bg-slate-50/80 p-4">
            <summary className="cursor-pointer text-base font-semibold text-gray-900">What architectural styles dominate Silverstone Ranch?</summary>
            <p className="mt-3 text-sm text-gray-700 leading-relaxed">
              Mediterranean-inspired elevations anchor the community—stucco exteriors, iron balconies, and tile roofs—yet interior
              renovations often lean contemporary with quartz counters, linear fireplaces, and smart lighting. This blend keeps
              the neighborhood timeless while embracing modern conveniences.
            </p>
          </details>
          <details className="rounded-lg border border-slate-200 bg-slate-50/80 p-4">
            <summary className="cursor-pointer text-base font-semibold text-gray-900">Are there updates on the dormant golf course?</summary>
            <p className="mt-3 text-sm text-gray-700 leading-relaxed">
              The course remains closed following the May 2025 auction, and no redevelopment application has been approved. The
              HOA continues advocacy with the City of Las Vegas to ensure any future proposals complement existing homes and
              preserve property values.
            </p>
          </details>
          <details className="rounded-lg border border-slate-200 bg-slate-50/80 p-4">
            <summary className="cursor-pointer text-base font-semibold text-gray-900">How close are essential services and schools?</summary>
            <p className="mt-3 text-sm text-gray-700 leading-relaxed">
              Centennial Hills Hospital, Smith’s Marketplace, Costco, and boutique dining are all within ten minutes. Zoned
              schools include O’Roarke Elementary, Cadwallader Middle, and Arbor View High, while charter and private options are
              equally accessible. Always verify boundaries with Clark County School District before closing.
            </p>
          </details>
          <details className="rounded-lg border border-slate-200 bg-slate-50/80 p-4">
            <summary className="cursor-pointer text-base font-semibold text-gray-900">Can investors purchase homes in Silverstone?</summary>
            <p className="mt-3 text-sm text-gray-700 leading-relaxed">
              Yes—leases must be six months or longer, tenants register with the guard gate, and properties must remain compliant
              with landscape standards. Dr. Duffy works closely with investors to evaluate rental demand, HOA approvals, and
              long-term appreciation potential.
            </p>
          </details>
        </section>

        <section className="bg-white rounded-lg shadow-xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Connect with Dr. Jan Duffy</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Ready to explore homes, compare sub-associations, or evaluate your next move? Dr. Jan Duffy delivers concierge-level
            guidance rooted in analytics, local relationships, and community advocacy. She lives and works in Centennial Hills,
            giving her clients a decisive advantage.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/request-info"
              className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 font-semibold"
            >
              Request Community Consultation
            </Link>
            <a
              href={`tel:${CONTACT_INFO.phone.tel}`}
              className="px-8 py-3 bg-white text-blue-600 border-2 border-blue-600 rounded-lg hover:bg-blue-50 transition-all font-semibold text-center"
            >
              Call {CONTACT_INFO.phone.display}
            </a>
          </div>
        </section>
      </div>
    </div>
  )
}

