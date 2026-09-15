'use client'

import { useState } from 'react'
import ImageGallery from 'react-image-gallery'
import { propertyPhotos } from '@/lib/property-photos'
import { SectionHeading } from '@/components/SectionHeading'
// CSS is imported globally in app/layout.tsx

export default function PhotoGallery() {
  const [showGallery, setShowGallery] = useState(false)

  const galleryItems = propertyPhotos.map((photo) => ({
    original: photo.original,
    originalAlt: photo.alt,
    thumbnail: photo.thumbnail,
    thumbnailAlt: photo.alt,
    description: photo.description,
    originalTitle: photo.description,
  }))

  return (
    <section id="photos" className="py-20 px-4 sm:px-6 lg:px-8 bg-white scroll-mt-20">
      <div className="mx-auto max-w-7xl">
        <SectionHeading>Silverstone Ranch Lifestyle Gallery</SectionHeading>

        {!showGallery ? (
          <div className="text-center">
            <button
              onClick={() => setShowGallery(true)}
              className="px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Launch Slideshow Viewer
            </button>
          </div>
        ) : (
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold text-gray-900">Photo Gallery</h3>
              <button
                onClick={() => setShowGallery(false)}
                className="px-4 py-2 text-sm bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
              >
                Close Gallery
              </button>
            </div>
            <ImageGallery
              items={galleryItems}
              showPlayButton={false}
              showFullscreenButton={true}
              showThumbnails={true}
              thumbnailPosition="bottom"
              slideInterval={3000}
              autoPlay={false}
            />
          </div>
        )}

        {/* Photo Grid Preview */}
        {!showGallery && (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-12">
            {propertyPhotos.slice(0, 8).map((photo, index) => (
              <figure
                key={index}
                className="group cursor-pointer"
                onClick={() => setShowGallery(true)}
              >
                <picture>
                  <source srcSet={photo.original} type="image/jpeg" />
                  <img
                    src={photo.original}
                    alt={photo.alt}
                    className="w-full h-52 md:h-48 lg:h-56 object-cover rounded-lg shadow-sm group-hover:shadow-lg transition-shadow"
                    loading="lazy"
                  />
                </picture>
                {photo.description && (
                  <figcaption className="mt-3 text-sm text-gray-600 group-hover:text-gray-800">
                    {photo.description}
                  </figcaption>
                )}
              </figure>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

