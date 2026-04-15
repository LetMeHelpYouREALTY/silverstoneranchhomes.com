import type { Metadata } from 'next'
import Link from 'next/link'
import { FileText, Home, MapPin } from 'lucide-react'
import { SeoJsonLd } from '@/components/SeoJsonLd'
import { CONTACT_INFO } from '@/lib/contact-info'
import { buildPageTitle } from '@/lib/metadata'
import { buildWebPageSchema } from '@/lib/seo'

const path = '/resources'

export const metadata: Metadata = {
  title: 'Resources',
  description:
    'Guides and resources for Northwest Las Vegas buyers and homeowners—HOA insights, Silverstone Ranch community context, and local real estate tools from Dr. Jan Duffy.',
  alternates: {
    canonical: path,
  },
  openGraph: {
    title: buildPageTitle('Real Estate Resources | Northwest Las Vegas'),
    description:
      'HOA guides, community resources, and local tools for Silverstone Ranch and Centennial Hills from Dr. Jan Duffy.',
    url: `${CONTACT_INFO.website.base}${path}`,
    type: 'website',
  },
}

const cards = [
  {
    href: '/resources/las-vegas-hoa',
    title: 'Las Vegas HOA guides',
    description:
      'Overview of homeowner association topics in Las Vegas and a path to the Silverstone Ranch HOA deep dive.',
    icon: Home,
  },
  {
    href: '/resources/las-vegas-hoa/silverstone-ranch',
    title: 'Silverstone Ranch HOA',
    description:
      'Fees, amenities, contacts, and sub-association context for buyers and owners inside ZIP 89131.',
    icon: MapPin,
  },
  {
    href: '/schools',
    title: 'Schools guide',
    description:
      'Clark County public options and relocation notes for families moving to Northwest Las Vegas.',
    icon: FileText,
  },
] as const

export default function ResourcesPage() {
  const pageSchema = buildWebPageSchema({
    path,
    name: 'Real Estate Resources | Northwest Las Vegas',
    description:
      'Central hub for HOA guides, Silverstone Ranch community resources, and local buyer tools.',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Resources', path },
    ],
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-16 px-4 sm:px-6 lg:px-8">
      <SeoJsonLd id="resources-hub" data={[pageSchema]} />

      <div className="mx-auto max-w-4xl">
        <nav className="text-sm text-gray-500 mb-6" aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-2">
            <li>
              <Link href="/" className="hover:text-blue-600">
                Home
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li className="text-gray-900 font-medium">Resources</li>
          </ol>
        </nav>

        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Resources</h1>
        <p className="text-lg text-gray-700 mb-10 max-w-2xl">
          Practical guides for Northwest Las Vegas real estate—starting with HOA context for Las Vegas and Silverstone
          Ranch, plus links to schools and community tools {CONTACT_INFO.agentName} uses with clients every week.
        </p>

        <ul className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
          {cards.map(({ href, title, description, icon: Icon }) => (
            <li key={href}>
              <Link
                href={href}
                className="flex h-full flex-col rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:border-blue-300 hover:shadow-md"
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600 text-white">
                  <Icon className="h-5 w-5" aria-hidden />
                </div>
                <h2 className="text-xl font-semibold text-gray-900 mb-2">{title}</h2>
                <p className="text-gray-600 text-sm leading-relaxed flex-1">{description}</p>
                <span className="mt-4 text-sm font-semibold text-blue-600">Open guide →</span>
              </Link>
            </li>
          ))}
        </ul>

        <p className="mt-10 text-sm text-gray-600">
          Questions?{' '}
          <Link href="/contact" className="font-medium text-blue-600 hover:underline">
            Contact {CONTACT_INFO.businessName}
          </Link>
          .
        </p>
      </div>
    </div>
  )
}
