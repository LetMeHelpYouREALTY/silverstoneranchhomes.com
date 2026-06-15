import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Calendar,
  ChevronRight,
  ExternalLink,
  FileText,
  GraduationCap,
  Home,
  Key,
  Mail,
  MapPin,
  Phone,
  Shield,
  Users,
} from 'lucide-react'
import { CONTACT_INFO } from '@/lib/contact-info'
import { buildPageTitle } from '@/lib/metadata'
import { SeoJsonLd } from '@/components/SeoJsonLd'
import { buildAction, buildFaqSchema, buildServiceSchema, buildWebPageSchema } from '@/lib/seo'

const canonicalPath = '/resources/las-vegas-hoa/silverstone-ranch'
const canonicalUrl = `${CONTACT_INFO.website.base}${canonicalPath}`
const heroImageUrl = `${CONTACT_INFO.website.url}images/property/exterior-front-elevation.jpg`

export const metadata: Metadata = {
  title: 'HOA in Las Vegas | Fees, Amenities & Contacts',
  description:
    'Explore Silverstone Ranch HOA in Northwest Las Vegas. Review annual fees, gated amenities, community management contacts, and neighborhood highlights tailored for homeowners and buyers.',
  keywords: [
    'Silverstone Ranch HOA',
    'Silverstone Ranch Las Vegas',
    'Las Vegas HOA fees',
    'Northwest Las Vegas gated community',
    'Summerlin area HOA',
  ],
  alternates: {
    canonical: canonicalUrl,
  },
  openGraph: {
    title: buildPageTitle('HOA | Las Vegas Fees, Amenities & Community Guide'),
    description:
      'Detailed Silverstone Ranch HOA overview including dues, amenities, architectural guidelines, and management contacts for Northwest Las Vegas homeowners.',
    url: canonicalUrl,
    type: 'article',
    images: [
      {
        url: heroImageUrl,
        width: 1200,
        height: 630,
        alt: 'Silverstone Ranch aerial view showing community layout and desert landscaping',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: buildPageTitle('HOA | Las Vegas Fees & Amenities'),
    description:
      'Homeowners guide to the Silverstone Ranch HOA with up-to-date fees, amenities, community docs, and local insights from Dr. Jan Duffy.',
    images: [heroImageUrl],
  },
}

const hoaFaqs = [
  {
    question: 'How do you keep showings efficient yet respectful of our time?',
    answer:
      'Dr. Duffy coordinates agent-accompanied showings with ample notice, creates digital welcome packets, and collects feedback quickly so you can adjust without disruption.',
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

export default function SilverstoneRanchHoaPage() {
  const breadcrumbs = [
    { href: '/', label: 'Home' },
    { href: '/resources', label: 'Resources' },
    { href: '/resources/las-vegas-hoa', label: 'Las Vegas HOA Guides' },
  ]

  const pageSchema = buildWebPageSchema({
    path: canonicalPath,
    name: 'Silverstone Ranch HOA Guide',
    description:
      'Complete guide to Silverstone Ranch HOA fees, contacts, documents, and community amenities maintained for homeowners and buyers.',
    breadcrumb: breadcrumbs.map((item) => ({ name: item.label, path: item.href })).concat({ name: 'Silverstone Ranch HOA', path: canonicalPath }),
  })

  const faqSchema = buildFaqSchema(
    canonicalPath,
    hoaFaqs.map((faq) => ({ question: faq.question, answer: faq.answer })),
  )

  const hoaDocumentService = buildServiceSchema({
    name: 'Silverstone Ranch HOA Document Concierge',
    description:
      'Delivery of HOA budgets, resale packages, architectural guidelines, and amenity overviews for Silverstone Ranch homeowners and buyers.',
    serviceType: ['DocumentService', 'RealEstateConsultation'],
    actions: [
      buildAction({
        type: 'ContactAction',
        name: 'Request HOA Packet',
        target: `${CONTACT_INFO.website.base}/request-info`,
      }),
      buildAction({
        type: 'ContactAction',
        name: 'Speak with HOA Concierge',
        target: `tel:${CONTACT_INFO.phone.tel}`,
      }),
    ],
  })

  const schemaData = [pageSchema, hoaDocumentService, faqSchema].filter(Boolean)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white py-20 px-4 sm:px-6 lg:px-8">
      <SeoJsonLd id="silverstone-hoa" data={schemaData as Record<string, unknown>[]} />
      <div className="mx-auto max-w-6xl space-y-16">
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex flex-wrap items-center gap-2 text-sm text-slate-600">
            {breadcrumbs.map((crumb, index) => (
              <li key={crumb.href} className="flex items-center">
                <Link
                  href={crumb.href}
                  className="transition-colors hover:text-blue-700"
                >
                  {crumb.label}
                </Link>
                {index < breadcrumbs.length - 1 && (
                  <ChevronRight className="mx-2 h-4 w-4 text-slate-400" aria-hidden="true" />
                )}
              </li>
            ))}
            <li className="font-semibold text-slate-900">Silverstone Ranch HOA</li>
          </ol>
        </nav>

        <header className="mb-12">
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">
            Las Vegas HOA Spotlight
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Silverstone Ranch HOA: Fees, Amenities & Community Overview
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-700">
            Comprehensive guide to Silverstone Ranch in Northwest Las Vegas—including HOA fees, approved amenities,
            architectural guidelines, and how to work with Dr. Jan Duffy when buying or selling within the community.
          </p>
        </header>

        <section className="mb-12 rounded-3xl border border-slate-200 bg-white shadow-xl">
          <div className="grid gap-10 overflow-hidden rounded-3xl lg:grid-cols-5">
            <div className="relative h-full lg:col-span-2">
              <picture>
                <source srcSet="/images/property/exterior-front-elevation.jpg" type="image/jpeg" />
                <img
                  src="/images/property/exterior-front-elevation.jpg"
                  alt="Silverstone Ranch Las Vegas exterior with desert landscaping and gated entrance"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </picture>
            </div>
            <div className="lg:col-span-3 p-8 sm:p-10">
              <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-wide text-blue-700">
                <Shield className="h-4 w-4" aria-hidden="true" />
                Northwest Las Vegas Gated Community
              </div>
              <h2 className="mt-3 text-3xl font-bold text-slate-900">
                Why Silverstone Ranch HOA Appeals to Golf Course Lifestyle Buyers
              </h2>
              <p className="mt-4 text-lg text-slate-700">
                Silverstone Ranch is a guard-gated enclave surrounding the former Silverstone Golf Club, prized for its
                mature landscaping, mountain views, and proximity to the 215 Beltway. Homeowners benefit from tranquil
                cul-de-sacs, single- and two-story floor plans, and lifestyle perks that attract move-up buyers seeking
                Northwest Las Vegas living with easy access to Summerlin amenities.
              </p>
              <ul className="mt-6 grid gap-4 text-sm text-slate-700 sm:grid-cols-2">
                <li className="flex items-start gap-3 rounded-xl border border-slate-100 bg-slate-50/80 p-4">
                  <Calendar className="mt-1 h-5 w-5 text-blue-600" aria-hidden="true" />
                  <span>
                    Established HOA with consistent reserves and routine maintenance schedules that preserve property
                    values year after year.
                  </span>
                </li>
                <li className="flex items-start gap-3 rounded-xl border border-slate-100 bg-slate-50/80 p-4">
                  <Users className="mt-1 h-5 w-5 text-blue-600" aria-hidden="true" />
                  <span>
                    Multiple sub-associations (Tropicana, Tuscany, Palms) offering distinct collections of single-family
                    residences tailored to diverse buyer needs.
                  </span>
                </li>
                <li className="flex items-start gap-3 rounded-xl border border-slate-100 bg-slate-50/80 p-4">
                  <MapPin className="mt-1 h-5 w-5 text-blue-600" aria-hidden="true" />
                  <span>
                    Minutes to Centennial Hills shopping, Floyd Lamb Park, and the new Durango Station entertainment
                    corridor, keeping Silverstone residents connected.
                  </span>
                </li>
                <li className="flex items-start gap-3 rounded-xl border border-slate-100 bg-slate-50/80 p-4">
                  <Home className="mt-1 h-5 w-5 text-blue-600" aria-hidden="true" />
                  <span>
                    Homes average 2,500–4,000 sq ft with open-concept layouts, three-car garages, and outdoor living
                    spaces perfect for desert evenings.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section id="hoa-fees" className="mb-12 rounded-3xl border border-slate-200 bg-white/80 p-8 shadow-lg">
          <div className="flex items-start justify-between gap-6">
            <div>
              <h2 className="text-3xl font-bold text-slate-900">Silverstone Ranch HOA Fees</h2>
              <p className="mt-3 max-w-3xl text-slate-700">
                Fees vary by neighborhood pod and are billed quarterly. Below is the updated breakdown for Q4 2025.
                Always verify current assessments and special budgets during escrow—Dr. Jan Duffy confirms amounts as
                part of every due diligence review.
              </p>
            </div>
            <div className="hidden rounded-full border border-blue-100 bg-blue-50 px-6 py-2 text-sm font-medium text-blue-700 md:block">
              Updated June 2026
            </div>
          </div>

          <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200">
            <table className="min-w-full divide-y divide-slate-200 text-left text-sm text-slate-700">
              <caption className="sr-only">
                2025 Silverstone Ranch HOA Fee Breakdown
              </caption>
              <thead className="bg-slate-50 text-xs font-semibold uppercase tracking-wider text-slate-500">
                <tr>
                  <th scope="col" className="px-6 py-4">Neighborhood</th>
                  <th scope="col" className="px-6 py-4">Master HOA</th>
                  <th scope="col" className="px-6 py-4">Sub HOA</th>
                  <th scope="col" className="px-6 py-4">Total Monthly</th>
                  <th scope="col" className="px-6 py-4">Includes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 bg-white">
                <tr>
                  <th scope="row" className="px-6 py-5 text-base font-semibold text-slate-900">
                    The Palms (Guard-Gated Single-Family)
                  </th>
                  <td className="px-6 py-5">$158</td>
                  <td className="px-6 py-5">$82</td>
                  <td className="px-6 py-5 font-semibold text-blue-700">$240</td>
                  <td className="px-6 py-5">24/7 guard house, boulevard landscaping, trail lighting, private park</td>
                </tr>
                <tr>
                  <th scope="row" className="px-6 py-5 text-base font-semibold text-slate-900">
                    Tuscany &amp; Cottages (Gated Single-Family)
                  </th>
                  <td className="px-6 py-5">$158</td>
                  <td className="px-6 py-5">$94</td>
                  <td className="px-6 py-5 font-semibold text-blue-700">$252</td>
                  <td className="px-6 py-5">Front yard landscape, exterior paint cycle, clubhouse + fitness, reserves</td>
                </tr>
                <tr>
                  <th scope="row" className="px-6 py-5 text-base font-semibold text-slate-900">
                    Pinehurst Townhomes (Golf Corridor)
                  </th>
                  <td className="px-6 py-5">$158</td>
                  <td className="px-6 py-5">$128</td>
                  <td className="px-6 py-5 font-semibold text-blue-700">$286</td>
                  <td className="px-6 py-5">Roof + exterior insurance, landscape, private pool, pest control</td>
                </tr>
                <tr>
                  <th scope="row" className="px-6 py-5 text-base font-semibold text-slate-900">
                    Non-Gated Villages (Eastpoint, Greenfield, Somerset)
                  </th>
                  <td className="px-6 py-5">$158</td>
                  <td className="px-6 py-5">$42</td>
                  <td className="px-6 py-5 font-semibold text-blue-700">$200</td>
                  <td className="px-6 py-5">Arterial landscape, common park upkeep, community security patrol</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-6 rounded-xl bg-slate-900 px-6 py-5 text-sm text-slate-50 sm:flex sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <Shield className="h-5 w-5" aria-hidden="true" />
              <p className="font-medium">
                Tip: Order resale demand, status letter, and gate access forms 10–14 days in advance to avoid rush fees
                or delayed closings.
              </p>
            </div>
            <Link href="/request-info" className="mt-4 inline-flex items-center gap-2 rounded-lg bg-blue-500 px-4 py-2 font-semibold text-white shadow transition hover:bg-blue-600 sm:mt-0">
              Request Updated Fee Sheet
              <ChevronRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </section>

        <section id="amenities" className="mb-12 grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-slate-900">Amenity Highlights</h2>
            <p className="mt-3 text-slate-700">
              Residents enjoy guard-gated privacy and resort-inspired spaces. Lifestyle features vary by neighborhood but
              commonly include:
            </p>
            <ul className="mt-6 space-y-4 text-slate-700">
              <li className="flex items-start gap-3">
                <Shield className="mt-1 h-5 w-5 text-blue-600" aria-hidden="true" />
                24/7 staffed entry gates with rolling patrol and neighborhood watch coordination.
              </li>
              <li className="flex items-start gap-3">
                <Users className="mt-1 h-5 w-5 text-blue-600" aria-hidden="true" />
                Private parks, playgrounds, and picnic pavilions with view corridors to Mount Charleston.
              </li>
              <li className="flex items-start gap-3">
                <Key className="mt-1 h-5 w-5 text-blue-600" aria-hidden="true" />
                Key fob access to tennis courts and fitness paths surrounding the former championship golf course,
                which remains closed pending redevelopment.
              </li>
              <li className="flex items-start gap-3">
                <Calendar className="mt-1 h-5 w-5 text-blue-600" aria-hidden="true" />
                Seasonal community events, including holiday gatherings and outdoor movie nights.
              </li>
            </ul>
            <div className="mt-6 rounded-xl border border-blue-100 bg-blue-50 px-5 py-4 text-sm text-blue-800">
              <strong className="font-semibold">Homeowner Insight:</strong> Clubhouse spaces can be reserved for
              private events with a refundable deposit—ask for the 2025 reservation calendar when planning parties.
            </div>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-slate-900">Architectural Review & Guidelines</h2>
            <p className="mt-3 text-slate-700">
              Exterior projects require Architectural Review Committee (ARC) approval. Typical submissions include:
            </p>
            <ol className="mt-6 space-y-3 text-slate-700">
              <li className="flex items-start gap-3">
                <span className="mt-1 block h-6 w-6 rounded-full bg-blue-600 text-center text-sm font-semibold text-white">1</span>
                Pre-submittal consultation with the HOA manager to confirm current color palettes and material
                guidelines.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 block h-6 w-6 rounded-full bg-blue-600 text-center text-sm font-semibold text-white">2</span>
                Completed ARC form, site plan, elevation drawings, and neighboring impact acknowledgment.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 block h-6 w-6 rounded-full bg-blue-600 text-center text-sm font-semibold text-white">3</span>
                Allow 30 days for review; expedited requests may incur additional fees. Construction must begin within
                90 days of approval.
              </li>
            </ol>
            <div className="mt-6 space-y-3 text-sm text-slate-700">
              <p>
                <strong>Tip:</strong> Solar installations are approved when panels are flush-mounted and conduit is fully
                concealed. Submit paint chips and roofing schematics with your application for faster turnaround.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-2 text-blue-600 transition hover:text-blue-700">
                Need a preferred contractor introduction? Contact Dr. Duffy now
                <ChevronRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>

        <section id="documents" className="mb-12 rounded-3xl border border-slate-200 bg-white p-8 shadow-lg">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="text-3xl font-bold text-slate-900">HOA Documents & Disclosures</h2>
              <p className="mt-3 max-w-3xl text-slate-700">
                Nevada law requires sellers to deliver updated resale documents (CC&Rs, bylaws, reserve study, meeting
                minutes) at least 10 days before closing. As your listing agent, Dr. Duffy orders the full package from
                the HOA and verifies receipt with the buyer.
              </p>
            </div>
            <Link
              href="/book-tour"
              className="inline-flex items-center gap-2 rounded-full border border-blue-200 px-5 py-2 text-sm font-semibold text-blue-700 transition hover:border-blue-300 hover:bg-blue-50"
            >
              Meet for HOA Strategy Session
              <ChevronRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-100 bg-slate-50/70 p-6">
              <h3 className="flex items-center gap-3 text-xl font-semibold text-slate-900">
                <FileText className="h-5 w-5 text-blue-600" aria-hidden="true" />
                Core Documents
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-slate-700">
                <li>CC&Rs + Amendments (latest revision 2023)</li>
                <li>Articles of Incorporation & Bylaws</li>
                <li>Rules & Regulations / Community Standards</li>
                <li>Reserve Study Summary + Budget</li>
                <li>Master insurance certificate</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
              <h3 className="flex items-center gap-3 text-xl font-semibold text-slate-900">
                <Calendar className="h-5 w-5 text-blue-600" aria-hidden="true" />
                Important Deadlines
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-slate-700">
                <li>Resale package delivery: within 10 days of request</li>
                <li>Buyer right to cancel: 5 days after receiving docs</li>
                <li>Demand letter processing: 7 business days lead time</li>
                <li>Move-in coordination: notify gatehouse 48 hours prior</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
              <h3 className="flex items-center gap-3 text-xl font-semibold text-slate-900">
                <Shield className="h-5 w-5 text-blue-600" aria-hidden="true" />
                Rental Restrictions
              </h3>
              <p className="mt-3 text-sm text-slate-700">
                Minimum lease term is 30 days. Owners must submit tenant registration forms prior to occupancy. Short-term
                rentals under 30 days are not permitted under current Clark County ordinances.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-100 bg-slate-50/70 p-6">
              <h3 className="flex items-center gap-3 text-xl font-semibold text-slate-900">
                <MapPin className="h-5 w-5 text-blue-600" aria-hidden="true" />
                Management Contact
              </h3>
              <address className="mt-3 not-italic text-sm text-slate-700">
                CAMCO HOA Management<br />
                7181 N Hualapai Way, Ste 115<br />
                Las Vegas, NV 89166
              </address>
              <div className="mt-3 space-y-2 text-sm text-blue-700">
                <a href="tel:7025313382" className="flex items-center gap-2 hover:text-blue-800">
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  (702) 531-3382
                </a>
                <a href="tel:7028393990" className="flex items-center gap-2 hover:text-blue-800">
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  Guard Gate: (702) 839-3990
                </a>
                <a href="mailto:hoa@camconevada.com" className="flex items-center gap-2 hover:text-blue-800">
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  hoa@camconevada.com
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="market-insights" className="mb-12 rounded-3xl border border-slate-200 bg-white p-8 shadow-lg">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="text-3xl font-bold text-slate-900">Buyer & Seller Insights</h2>
              <p className="mt-3 max-w-3xl text-slate-700">
                Silverstone Ranch inventory remains tight, with June 2026 closings averaging 13 days on market and
                list-to-sale ratios of 101.8%. Renovated kitchens, energy-efficient upgrades, and outdoor living zones
                continue to command premiums.
              </p>
            </div>
            <Link
              href="/homes-for-sale"
              className="inline-flex items-center gap-2 rounded-full border border-blue-200 px-5 py-2 text-sm font-semibold text-blue-700 transition hover:border-blue-300 hover:bg-blue-50"
            >
              View Current Listings
              <ChevronRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-100 bg-slate-50/80 p-6">
              <h3 className="text-lg font-semibold text-slate-900">Median Price (Jun 2026)</h3>
              <p className="mt-2 text-3xl font-bold text-blue-700">$685,000</p>
              <p className="mt-3 text-sm text-slate-700">Up 5.2% year-over-year with strongest demand for renovated 4-bedroom plans.</p>
            </div>
            <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">Buyer Hot Buttons</h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-700">
                <li>Prepaid solar &amp; energy efficiency upgrades</li>
                <li>Backyards with covered patios + built-in BBQ</li>
                <li>Office/flex rooms for remote work</li>
                <li>Proximity to charter schools and parks</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">Seller Checklist</h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-700">
                <li>Refresh exterior paint to approved palette</li>
                <li>Service HVAC &amp; desert landscaping</li>
                <li>Stage primary bedroom + great room</li>
                <li>Prepare HOA resale docs early</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 rounded-2xl border border-blue-100 bg-blue-50 p-6 text-sm text-blue-800">
            <p>
              Looking for hyper-local stats? Explore our <Link href="/area-insight" className="font-semibold hover:text-blue-900">Silverstone Ranch market insights</Link> and subscribe for monthly HOA trend reports curated by Dr. Duffy.
            </p>
          </div>
        </section>

        <section id="schools" className="mb-12 rounded-3xl border border-slate-200 bg-white p-8 shadow-lg">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="text-3xl font-bold text-slate-900">School Assignments &amp; Ratings</h2>
              <p className="mt-3 max-w-3xl text-slate-700">
                Silverstone Ranch is currently zoned to highly-rated Clark County School District campuses focused on STEM
                and college-ready pathways. Ratings reflect June 2026 GreatSchools.org data; always verify attendance
                boundaries directly with CCSD prior to enrollment or purchase.
              </p>
            </div>
            <a
              href="https://ccsd.net/schools/zoning/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-blue-200 px-5 py-2 text-sm font-semibold text-blue-700 transition hover:border-blue-300 hover:bg-blue-50"
            >
              Verify CCSD Zoning
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>

          <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200">
            <table className="min-w-full divide-y divide-slate-200 text-left text-sm text-slate-700">
              <thead className="bg-slate-50 text-xs font-semibold uppercase tracking-wider text-slate-500">
                <tr>
                  <th scope="col" className="px-6 py-4">Campus</th>
                  <th scope="col" className="px-6 py-4">GreatSchools Rating*</th>
                  <th scope="col" className="px-6 py-4">Distance</th>
                  <th scope="col" className="px-6 py-4">Highlights</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 bg-white">
                <tr>
                  <th scope="row" className="px-6 py-5 text-base font-semibold text-slate-900">
                    O&apos;Roarke Elementary School
                  </th>
                  <td className="px-6 py-5"><span className="rounded-full bg-blue-100 px-3 py-1 font-semibold text-blue-700">7 / 10</span></td>
                  <td className="px-6 py-5">1.4 miles</td>
                  <td className="px-6 py-5">STEM labs, robotics club, after-school tutoring</td>
                </tr>
                <tr>
                  <th scope="row" className="px-6 py-5 text-base font-semibold text-slate-900">
                    Ralph Cadwallader Middle School
                  </th>
                  <td className="px-6 py-5"><span className="rounded-full bg-blue-100 px-3 py-1 font-semibold text-blue-700">8 / 10</span></td>
                  <td className="px-6 py-5">2.2 miles</td>
                  <td className="px-6 py-5">Project Lead the Way engineering electives, award-winning band program</td>
                </tr>
                <tr>
                  <th scope="row" className="px-6 py-5 text-base font-semibold text-slate-900">
                    Arbor View High School
                  </th>
                  <td className="px-6 py-5"><span className="rounded-full bg-blue-100 px-3 py-1 font-semibold text-blue-700">7 / 10</span></td>
                  <td className="px-6 py-5">3.6 miles</td>
                  <td className="px-6 py-5">Advanced Placement, medical academy CTE tracks, nationally ranked athletics</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-6 rounded-xl border border-blue-100 bg-blue-50 px-5 py-4 text-sm text-blue-800">
            <div className="flex items-start gap-3">
              <GraduationCap className="mt-0.5 h-5 w-5" aria-hidden="true" />
              <p>
                *Ratings sourced from GreatSchools.org as of November 7, 2025. Attendance zones and program offerings are
                subject to change—confirm directly with the Clark County School District zoning office or call
                <a href="tel:7027996430" className="ml-1 font-semibold hover:underline">(702) 799-6430</a>.
              </p>
            </div>
          </div>
        </section>

        <section id="faq" className="mb-12 rounded-3xl border border-slate-200 bg-white p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-slate-900">Frequently Asked Questions</h2>
          <div className="mt-6 space-y-6 text-slate-700">
            <article>
              <h3 className="text-xl font-semibold text-slate-900">
                How do I set up gate access for vendors or moving trucks?
              </h3>
              <p className="mt-2">
                Submit the vendor/move request form to the guardhouse at least 48 hours in advance. Provide company name,
                driver ID, and service window. Dr. Duffy can coordinate access for staging teams during the listing
                process.
              </p>
            </article>
            <article>
              <h3 className="text-xl font-semibold text-slate-900">
                Are there age restrictions or community lifestyle rules?
              </h3>
              <p className="mt-2">
                Silverstone Ranch is an all-ages community. Quiet hours run 10 p.m.–6 a.m., and architectural controls
                ensure cohesive curb appeal across all village pods.
              </p>
            </article>
            <article>
              <h3 className="text-xl font-semibold text-slate-900">
                Can I keep recreational vehicles or boats on property?
              </h3>
              <p className="mt-2">
                RVs and boats must be stored in fully enclosed garages. Temporary parking up to 48 hours requires prior
                approval from HOA management and may be limited during peak community events.
              </p>
            </article>
          </div>
        </section>

        <section id="cta" className="rounded-3xl bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 p-8 text-white shadow-xl sm:p-12">
          <div className="grid gap-8 sm:grid-cols-2 sm:items-center">
            <div>
              <h2 className="text-3xl font-bold">Partner with Dr. Jan Duffy for Silverstone Ranch Strategies</h2>
              <p className="mt-4 text-sm text-blue-50">
                Schedule a consultation to review tailored comps, identify upcoming listings, and plan improvements that
                deliver maximum ROI within HOA guidelines.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <Link
                href="/home-valuation"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-base font-semibold text-blue-700 transition hover:bg-blue-50"
              >
                Request a Home Valuation
                <ChevronRight className="h-5 w-5" aria-hidden="true" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/60 px-5 py-3 text-base font-semibold text-white transition hover:bg-white/10"
              >
                Ask a Silverstone HOA Question
                <ChevronRight className="h-5 w-5" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

