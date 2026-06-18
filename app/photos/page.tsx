import type { Metadata } from 'next'
import { CONTACT_INFO } from '@/lib/contact-info'
import { buildHyperlocalTitle, buildPageTitle } from '@/lib/metadata'
import { SeoJsonLd } from '@/components/SeoJsonLd'
import { FaqSection } from '@/components/FaqSection'
import { PHOTOS_FAQS } from '@/lib/hyperlocal-faqs'
import { buildFaqSchema, buildImageGallerySchema, buildWebPageSchema } from '@/lib/seo'
import { propertyPhotos } from '@/lib/property-photos'
import PhotosPageClient from './PhotosPageClient'

const path = '/photos'
const faqs = PHOTOS_FAQS.map((f) => ({ question: f.question, answer: f.answer }))
const base = CONTACT_INFO.website.base

const galleryImages = propertyPhotos.slice(0, 6).map((photo) => ({
  url: `${base}${photo.original}`,
  caption: photo.alt,
}))

export const metadata: Metadata = {
  title: buildHyperlocalTitle('Silverstone Ranch Photo Gallery'),
  description:
    `Tour Silverstone Ranch (89131) architecture, interiors, and outdoor living through curated photography. Mediterranean and desert contemporary homes in Centennial Hills by ${CONTACT_INFO.agentName}.`,
  alternates: {
    canonical: path,
  },
  openGraph: {
    title: buildPageTitle('Silverstone Ranch Photo Gallery | 89131'),
    description:
      'Experience Silverstone Ranch architecture, interiors, and amenity spaces via curated photography and buyer resources.',
    url: `${CONTACT_INFO.website.base}${path}`,
    type: 'website',
    images: galleryImages.map((img) => ({ url: img.url, alt: img.caption })),
  },
}

export default function PhotosPage() {
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

  const gallerySchema = buildImageGallerySchema({
    path,
    name: 'Silverstone Ranch Lifestyle Gallery',
    images: galleryImages,
  })

  const faqSchema = buildFaqSchema(path, faqs, ['.speakable-answer'])

  const schemaData = [pageSchema, gallerySchema, faqSchema].filter(Boolean)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-20 px-4 sm:px-6 lg:px-8">
      <SeoJsonLd id="photos" data={schemaData as Record<string, unknown>[]} />
      <PhotosPageClient />
      <div className="mx-auto max-w-3xl px-4">
        <FaqSection faqs={faqs} heading="Silverstone Ranch Photo FAQs" />
      </div>
    </div>
  )
}
