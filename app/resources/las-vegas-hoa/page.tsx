import type { Metadata } from 'next'
import Link from 'next/link'
import { SeoJsonLd } from '@/components/SeoJsonLd'
import { CONTACT_INFO } from '@/lib/contact-info'
import { buildPageTitle } from '@/lib/metadata'
import { buildWebPageSchema } from '@/lib/seo'

const path = '/resources/las-vegas-hoa'

export const metadata: Metadata = {
  title: 'Las Vegas HOA Guides',
  description:
    'How Las Vegas HOAs work—master associations, sub-associations, and what to read before you buy. Jump to the Silverstone Ranch HOA guide for ZIP 89131 detail.',
  alternates: {
    canonical: path,
  },
  openGraph: {
    title: buildPageTitle('Las Vegas HOA Guides'),
    description:
      'HOA fundamentals for Las Vegas buyers and a direct link to the Silverstone Ranch community guide.',
    url: `${CONTACT_INFO.website.base}${path}`,
    type: 'website',
  },
}

export default function LasVegasHoaIndexPage() {
  const pageSchema = buildWebPageSchema({
    path,
    name: 'Las Vegas HOA Guides',
    description:
      'Introductory guide to homeowner associations in Las Vegas with emphasis on master-planned communities and Silverstone Ranch.',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Resources', path: '/resources' },
      { name: 'Las Vegas HOA Guides', path },
    ],
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white py-16 px-4 sm:px-6 lg:px-8">
      <SeoJsonLd id="las-vegas-hoa-index" data={[pageSchema]} />

      <div className="mx-auto max-w-3xl">
        <nav className="text-sm text-gray-500 mb-6" aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-2">
            <li>
              <Link href="/" className="hover:text-blue-600">
                Home
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li>
              <Link href="/resources" className="hover:text-blue-600">
                Resources
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li className="text-gray-900 font-medium">Las Vegas HOA Guides</li>
          </ol>
        </nav>

        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Las Vegas HOA guides</h1>

        <div className="prose prose-slate max-w-none text-gray-700 space-y-4 mb-10">
          <p>
            Most master-planned communities in Las Vegas use a <strong>master association</strong> plus{' '}
            <strong>sub-associations</strong> for gated villages, front-yard maintenance, or shared amenities. Before you
            remove contingencies, you will want current budgets, CC&Rs, reserve studies, and meeting minutes—not just a
            summary from the listing agent.
          </p>
          <p>
            {CONTACT_INFO.agentName} helps buyers and sellers interpret HOA packages in plain language, flag recurring
            fees versus special assessments, and align closing timelines with association approval rules when needed.
          </p>
        </div>

        <div className="rounded-xl border-2 border-blue-200 bg-blue-50/80 p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Silverstone Ranch (Northwest Las Vegas)</h2>
          <p className="text-gray-700 mb-4">
            For guard-gated Silverstone Ranch—ZIP 89131—use the dedicated HOA guide with fees, amenities, sub-association
            notes, and contact paths.
          </p>
          <Link
            href="/resources/las-vegas-hoa/silverstone-ranch"
            className="inline-flex items-center rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-700"
          >
            Open Silverstone Ranch HOA guide →
          </Link>
        </div>

        <p className="text-sm text-gray-600">
          <Link href="/resources" className="text-blue-600 font-medium hover:underline">
            ← All resources
          </Link>
          {' · '}
          <Link href="/contact" className="text-blue-600 font-medium hover:underline">
            Contact for document review
          </Link>
        </p>
      </div>
    </div>
  )
}
