import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { SeoJsonLd } from '@/components/SeoJsonLd'
import { CONTACT_INFO } from '@/lib/contact-info'
import { buildPageTitle } from '@/lib/metadata'
import { getNeighborhoodContent, NEIGHBORHOOD_SLUGS } from '@/lib/silverstone-neighborhoods'
import { buildFaqSchema, buildServiceSchema, buildWebPageSchema, buildAction } from '@/lib/seo'

type PageProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return NEIGHBORHOOD_SLUGS.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const content = getNeighborhoodContent(slug)
  if (!content) {
    return { title: 'Neighborhood' }
  }
  const path = `/neighborhoods/${content.slug}`
  return {
    title: content.titleSegment,
    description: content.metaDescription,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: buildPageTitle(content.titleSegment),
      description: content.metaDescription,
      url: `${CONTACT_INFO.website.base}${path}`,
      type: 'website',
    },
  }
}

const quickLinks = [
  { href: '/silverstone-ranch', label: 'Silverstone Ranch community guide' },
  { href: '/description', label: 'Neighborhood profiles & property description' },
  { href: '/homes-for-sale', label: 'Homes for sale' },
  { href: '/area-info', label: 'Area info & service map' },
  { href: '/contact', label: 'Contact & tours' },
] as const

export default async function NeighborhoodPage({ params }: PageProps) {
  const { slug } = await params
  const content = getNeighborhoodContent(slug)
  if (!content) {
    notFound()
  }

  const path = `/neighborhoods/${content.slug}`
  const displayName = content.h1.split('|')[0]?.trim() ?? content.h1

  const pageSchema = buildWebPageSchema({
    path,
    name: `${displayName} | Silverstone Ranch`,
    description: content.metaDescription,
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Silverstone Ranch', path: '/silverstone-ranch' },
      { name: displayName, path },
    ],
  })

  const faqSchema = buildFaqSchema(
    path,
    content.faqs.map((f) => ({ question: f.question, answer: f.answer })),
  )

  const serviceSchema = buildServiceSchema({
    name: `${displayName} Real Estate Services`,
    description: `Buyer and seller representation for ${displayName} in Silverstone Ranch (89131)—tours, pricing, HOA review, and negotiation by ${CONTACT_INFO.agentName}.`,
    serviceType: ['BuyerRepresentation', 'SellerRepresentation'],
    actions: [
      buildAction({
        type: 'ScheduleAction',
        name: `Tour ${displayName}`,
        target: `${CONTACT_INFO.website.base}/book-tour`,
      }),
    ],
  })

  const schemaData = [pageSchema, serviceSchema, faqSchema].filter(
    (s): s is NonNullable<typeof s> => s != null,
  ) as Record<string, unknown>[]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white py-16 px-4 sm:px-6 lg:px-8">
      <SeoJsonLd id={`neighborhood-${content.slug}`} data={schemaData} />

      <div className="mx-auto max-w-4xl">
        <nav className="text-sm text-gray-500 mb-8" aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-2">
            <li>
              <Link href="/" className="hover:text-blue-600">
                Home
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li>
              <Link href="/silverstone-ranch" className="hover:text-blue-600">
                Silverstone Ranch
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li className="text-gray-900 font-medium">{displayName}</li>
          </ol>
        </nav>

        <header className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">{content.h1}</h1>
          <p className="text-lg text-gray-700 leading-relaxed">{content.intro}</p>
        </header>

        <ul className="mb-10 flex flex-wrap gap-2">
          {content.bullets.map((item) => (
            <li
              key={item}
              className="rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-900"
            >
              {item}
            </li>
          ))}
        </ul>

        <div className="space-y-10 mb-12">
          {content.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">{section.heading}</h2>
              <p className="text-gray-700 leading-relaxed">{section.body}</p>
            </section>
          ))}
        </div>

        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm mb-12">
          <h2 className="text-lg font-semibold text-gray-900 mb-3">Explore next</h2>
          <ul className="space-y-2">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-blue-600 hover:text-blue-800 font-medium">
                  {link.label} →
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-xl border border-slate-200 bg-slate-50 p-6 mb-12">
          <h2 className="text-lg font-semibold text-gray-900 mb-2">{CONTACT_INFO.businessName}</h2>
          <p className="text-gray-700 text-sm mb-1">{CONTACT_INFO.address.display}</p>
          <p className="text-gray-700 text-sm mb-3">
            <a href={`tel:${CONTACT_INFO.phone.tel}`} className="text-blue-600 font-medium hover:underline">
              {CONTACT_INFO.phone.display}
            </a>
            {' · '}
            <a href={`mailto:${CONTACT_INFO.email}`} className="text-blue-600 hover:underline">
              {CONTACT_INFO.email}
            </a>
          </p>
          <p className="text-xs text-gray-500">
            {CONTACT_INFO.brokerage} · License {CONTACT_INFO.license}
          </p>
        </div>

        <section className="border-t border-gray-200 pt-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently asked questions</h2>
          <div className="space-y-6">
            {content.faqs.map((faq) => (
              <div key={faq.question}>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
