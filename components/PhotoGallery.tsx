'use client'

import { useState } from 'react'
import Image from 'next/image'
import ImageGallery from 'react-image-gallery'
import 'react-image-gallery/styles/css/image-gallery.css'

import { propertyPhotos } from '@/lib/property-photos'

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
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Silverstone Ranch Lifestyle Gallery
        </h2>

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

        {/* Photo Grid Preview - Optimized with next/image for Core Web Vitals */}
        {!showGallery && (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-12">
            {propertyPhotos.slice(0, 8).map((photo, index) => (
              <figure
                key={index}
                className="group cursor-pointer relative"
                onClick={() => setShowGallery(true)}
              >
                <div className="relative w-full h-52 md:h-48 lg:h-56 rounded-lg overflow-hidden shadow-sm group-hover:shadow-lg transition-shadow">
                  <Image
                    src={photo.original}
                    alt={photo.alt}
                    fill
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-cover"
                    loading={index < 4 ? 'eager' : 'lazy'}
                    priority={index < 4}
                  />
                </div>
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

