import type { Metadata } from 'next'
import { CONTACT_INFO } from '@/lib/contact-info'
import { buildPageTitle } from '@/lib/metadata'
import { SeoJsonLd } from '@/components/SeoJsonLd'
import { buildWebPageSchema } from '@/lib/seo'
import PhotosPageClient from './PhotosPageClient'

export const metadata: Metadata = {
  title: 'Photo Gallery',
  description:
    'Tour Silverstone Ranch through curated photography highlighting architecture, interiors, and outdoor living curated by Dr. Jan Duffy REALTOR®.',
  alternates: {
    canonical: '/photos',
  },
  openGraph: {
    title: buildPageTitle('Photo Gallery'),
    description:
      'Experience Silverstone Ranch architecture, interiors, and amenity spaces via curated photography and buyer resources.',
    url: `${CONTACT_INFO.website.base}/photos`,
    type: 'website',
  },
}

export default function PhotosPage() {
  const path = '/photos'
  const pageSchema = buildWebPageSchema({
    path,
    name: 'Silverstone Ranch Photo Gallery',
    description:
      'Curated Silverstone Ranch photo gallery showcasing architecture, interiors, and community amenities for luxury buyers.',
    breadcrumb: [
      { name: 'Home', path: '/' },
      { name: 'Photos', path },
    ],
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-20 px-4 sm:px-6 lg:px-8">
      <SeoJsonLd id="photos" data={pageSchema} />
      <PhotosPageClient />
    </div>
  )
}

