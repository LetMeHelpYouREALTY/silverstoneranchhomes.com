import type { Metadata } from 'next'
import Link from 'next/link'
import { SeoJsonLd } from '@/components/SeoJsonLd'
import { CONTACT_INFO } from '@/lib/contact-info'
import { buildHyperlocalTitle, buildPageTitle } from '@/lib/metadata'
import { SCHOOLS_NEAR_SILVERSTONE } from '@/lib/schools-near-silverstone'
import { buildWebPageSchema } from '@/lib/seo'

const path = '/silverstone-ranch/schools'

export const metadata: Metadata = {
  title: buildHyperlocalTitle('Schools Near Silverstone Ranch'),
  description:
    'Public schools and CCSD context for families buying near Silverstone Ranch (89131)—quick reference with link to the full schools guide.',
  alternates: {
    canonical: '/schools',
  },
  robots: {
    index: false,
    follow: true,
  },
  openGraph: {
    title: buildPageTitle('Schools Near Silverstone Ranch'),
    description:
      'Clark County School District options near Silverstone Ranch in Northwest Las Vegas—quick reference and link to the complete guide.',
    url: `${CONTACT_INFO.website.base}${path}`,
    type: 'website',
  },
}

export default function SilverstoneRanchSchoolsPage() {
  const pageSchema = buildWebPageSchema({
    path,
    name: 'Schools Near Silverstone Ranch',
    description:
      'Overview of Clark County public schools commonly referenced for Silverstone Ranch buyers, with a path to the full schools guide.',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Silverstone Ranch', path: '/silverstone-ranch' },
      { name: 'Schools', path },
    ],
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-16 px-4 sm:px-6 lg:px-8">
      <SeoJsonLd id="silverstone-schools" data={[pageSchema]} />

      <div className="mx-auto max-w-4xl">
        <nav className="text-sm text-gray-500 mb-6" aria-label="Breadcrumb">
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
            <li className="text-gray-900 font-medium">Schools</li>
          </ol>
        </nav>

        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Schools near Silverstone Ranch, Las Vegas
        </h1>
        <p className="text-lg text-gray-700 mb-8 max-w-2xl">
          Silverstone Ranch sits in Northwest Las Vegas (ZIP 89131). Most families reference{' '}
          <strong>Clark County School District (CCSD)</strong> assignments and nearby magnets or charters. Use this page
          as a <strong>quick orientation</strong>—zoning changes, wait lists, and program availability should always be
          confirmed with CCSD or the school directly.
        </p>

        <div className="rounded-xl border border-blue-100 bg-white p-6 shadow-sm mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Commonly referenced schools</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full text-left text-sm text-gray-700">
              <thead>
                <tr className="border-b border-gray-200 text-gray-900">
                  <th className="py-2 pr-4 font-semibold">School</th>
                  <th className="py-2 pr-4 font-semibold">Level</th>
                  <th className="py-2 pr-4 font-semibold">Approx. distance</th>
                  <th className="py-2 font-semibold">GreatSchools (indicative)</th>
                </tr>
              </thead>
              <tbody>
                {SCHOOLS_NEAR_SILVERSTONE.map((s) => (
                  <tr key={s.name} className="border-b border-gray-100">
                    <td className="py-2 pr-4 font-medium">{s.name}</td>
                    <td className="py-2 pr-4">{s.level}</td>
                    <td className="py-2 pr-4">{s.distance}</td>
                    <td className="py-2">{s.rating}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-gray-600">
            Ratings are commonly cited from public sources and can change—verify on the school or district site.
          </p>
        </div>

        <div className="rounded-xl border border-slate-200 bg-slate-50 p-6 mb-10">
          <h2 className="text-lg font-semibold text-gray-900 mb-2">Full guide on this site</h2>
          <p className="text-gray-700 mb-4">
            For enrollment steps, FAQs, private and charter notes, and expanded detail on each campus, use the main
            schools guide—kept as the canonical long-form resource.
          </p>
          <Link
            href="/schools"
            className="inline-flex rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-700"
          >
            Open full Silverstone area schools guide →
          </Link>
        </div>

        <div className="border-t border-gray-200 pt-8">
          <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">Contact</h2>
          <p className="text-gray-900 font-medium">{CONTACT_INFO.businessName}</p>
          <p className="text-gray-700 text-sm">{CONTACT_INFO.address.display}</p>
          <p className="text-sm mt-2">
            <a href={`tel:${CONTACT_INFO.phone.tel}`} className="text-blue-600 font-medium hover:underline">
              {CONTACT_INFO.phone.display}
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
