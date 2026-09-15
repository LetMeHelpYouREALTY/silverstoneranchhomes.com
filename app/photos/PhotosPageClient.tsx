'use client'

import { useState } from 'react'
import ImageGallery from 'react-image-gallery'
import Link from 'next/link'
// CSS is imported globally in app/layout.tsx
import { CONTACT_INFO } from '@/lib/contact-info'
import { propertyPhotos } from '@/lib/property-photos'
import { SectionHeading } from '@/components/SectionHeading'

const photoCollections = [
  {
    title: 'Architectural Highlights',
    description:
      'Curb appeal moments showcasing stone accents, arched entries, and nighttime illumination that frames Silverstone facades.'
  },
  {
    title: 'Interior Living Spaces',
    description:
      'Great rooms, formal dining, and flex spaces styled for hosting, remote work, and everyday relaxation.'
  },
  {
    title: 'Chef-Inspired Kitchens',
    description:
      'Island seating, quartz counters, statement lighting, and pro-grade appliances ready for culinary adventures.'
  },
  {
    title: 'Primary Retreats',
    description:
      'Owner suites with lounge corners, spa baths, and custom closets—ideal for unwinding after desert sunsets.'
  },
  {
    title: 'Outdoor Sanctuaries',
    description:
      'Covered patios, fire pits, and resort-style pools framed by mature palm trees and mountain backdrops.'
  },
  {
    title: 'Community Lifestyle',
    description:
      'Walking trails, parks, and guard-gated entries that reinforce the Silverstone Ranch way of life.'
  }
]

const buyerUseCases = [
  {
    title: 'Relocation Buyers',
    bullets: [
      'Preview home styles and community amenities before booking flights.',
      'Share galleries with decision makers or executive relocation teams to align preferences quickly.',
      'Use visual tours to shortlist homes and plan weekend itineraries in Silverstone Ranch from afar.'
    ]
  },
  {
    title: 'Current Silverstone Owners',
    bullets: [
      'Benchmark upgrades and staging ideas against top-performing listings.',
      'Share lifestyle visuals with friends or family considering a move to the neighborhood.',
      'Inspire design refreshes or outdoor living enhancements to elevate resale value.'
    ]
  },
  {
    title: 'Investors',
    bullets: [
      'Document condition of flooring, cabinetry, and mechanical systems to evaluate renovation costs remotely.',
      'Track HOA-compliant landscaping ideas for future rental positioning and maintenance budgeting.',
      'Use photo metadata to build marketing funnels and furnished rental previews before acquisition closes.'
    ]
  }
]

export default function PhotosPageClient() {
  const [showGallery, setShowGallery] = useState(false)

  const galleryItems = propertyPhotos.map((photo) => ({
    original: photo.original,
    originalAlt: photo.alt,
    originalTitle: photo.description,
    thumbnail: photo.thumbnail,
    thumbnailAlt: photo.alt,
    description: photo.description,
  }))

  return (
    <div className="mx-auto max-w-7xl">
      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Silverstone Ranch Lifestyle Gallery</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Explore featured Silverstone Ranch residences, outdoor living spaces, and community amenities captured in high definition. These visuals showcase the craftsmanship and resort-inspired lifestyle available across the neighborhood.
        </p>
      </div>

      <section className="mb-16 bg-white rounded-lg shadow-xl p-8 md:p-12">
        <SectionHeading>Gallery Themes & Inspiration</SectionHeading>
        <p className="text-gray-700 leading-relaxed mb-6">
          Each photo set is organized around how Silverstone residents live, entertain, and recharge. Use these themes to plan your own shoot, assess staging, or compare craftsmanship across listings.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-sm text-gray-700 leading-relaxed">
          {photoCollections.map((group) => (
            <div key={group.title} className="rounded-2xl border border-blue-100 bg-blue-50/80 p-5">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">{group.title}</h3>
              <p>{group.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16 bg-white rounded-lg shadow-xl p-8 md:p-12">
        <SectionHeading>Staging & Photography Blueprint</SectionHeading>
        <p className="text-gray-700 leading-relaxed mb-6">
          Silverstone homes perform best online when photography showcases lifestyle benefits and climatic advantages. Pair the tips below with Dr. Duffy’s preferred vendor list to elevate your next photo session.
        </p>
        <ul className="space-y-3 text-sm text-gray-700 leading-relaxed">
          <li>Highlight indoor/outdoor transitions—slide-away doors, courtyards, and patios with mountain views.</li>
          <li>Capture twilight hours to emphasize architectural lighting and desert landscapes.</li>
          <li>Use wide-angle perspectives sparingly; prioritize editorial compositions that align with luxury buyer expectations.</li>
          <li>Leverage lifestyle captions in listing marketing to connect visuals with tangible benefits (gated security, outdoor kitchens, etc.).</li>
        </ul>
      </section>

      <section className="mb-16 bg-white rounded-lg shadow-xl p-8 md:p-12">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6">Curated Photo Gallery</h2>
        {showGallery ? (
          <div className="space-y-6">
            <ImageGallery
              items={galleryItems}
              showThumbnails
              showFullscreenButton
              showPlayButton={false}
              additionalClass="rounded-lg overflow-hidden shadow-xl"
            />
            <button
              onClick={() => setShowGallery(false)}
              className="w-full md:w-auto px-6 py-3 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition"
            >
              Hide Gallery
            </button>
          </div>
        ) : (
          <div className="text-center">
            <button
              onClick={() => setShowGallery(true)}
              className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl"
            >
              View Full Gallery
            </button>
          </div>
        )}
      </section>

      <section className="mb-16 bg-white rounded-lg shadow-xl p-8 md:p-12">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6">How Buyers & Owners Use This Gallery</h2>
        <div className="grid md:grid-cols-3 gap-6 text-gray-700 leading-relaxed">
          {buyerUseCases.map((useCase) => (
            <div key={useCase.title} className="rounded-2xl border border-slate-200 bg-slate-50/80 p-5">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">{useCase.title}</h3>
              <ul className="space-y-2 text-sm">
                {useCase.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-2">
                    <span className="text-blue-600">•</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white rounded-lg shadow-xl p-8 md:p-12">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6">Plan Your Silverstone Experience</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Pair these visuals with private tours to understand how homes live throughout the day. Dr. Duffy coordinates sunrise and sunset showings, HOA briefings, and vendor introductions to help you visualize life inside Silverstone Ranch.
        </p>
        <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
          <Link
            href="/book-tour"
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl"
          >
            Schedule Private Tours
          </Link>
          <Link
            href="/request-info"
            className="inline-block px-6 py-3 bg-white text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition-all"
          >
            Request Community Information
          </Link>
          <a
            href={`mailto:${CONTACT_INFO.email}`}
            className="inline-block px-6 py-3 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition-all"
          >
            Email Dr. Jan Duffy
          </a>
        </div>
      </section>
    </div>
  )
}
