'use client'

import Link from 'next/link'

export default function PropertyMap() {
  const mapsApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
  const staticMapUrl = 'https://staticmap.openstreetmap.de/staticmap.php?center=36.2856,-115.285&zoom=13&size=800x400&markers=36.2856,-115.285,lightblue1'
  const staticMapUrl2x = 'https://staticmap.openstreetmap.de/staticmap.php?center=36.2856,-115.285&zoom=13&size=1600x800&markers=36.2856,-115.285,lightblue1'

  return (
    <section id="map" className="scroll-mt-20 bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-8 text-3xl font-bold text-gray-900">Property Location</h2>

        <div className="relative mb-8 overflow-hidden rounded-2xl border border-gray-200 bg-gray-100 shadow-lg">
          <picture>
            <source srcSet={`${staticMapUrl2x} 2x, ${staticMapUrl} 1x`} type="image/png" />
            <img
              src={staticMapUrl}
              srcSet={`${staticMapUrl2x} 2x`}
              alt="Map showing Silverstone Ranch community in Northwest Las Vegas"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </picture>
          <div className="absolute inset-x-4 bottom-4 flex flex-wrap items-center justify-between gap-3 rounded-xl bg-white/90 px-4 py-3 text-sm sm:text-base">
            <span className="font-semibold text-gray-900">View the interactive map experience</span>
            <a
              href="https://www.google.com/maps/place/Silverstone+Ranch,+Las+Vegas,+NV+89131"
              className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 font-semibold text-white transition hover:bg-blue-700"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open in Google Maps
            </a>
          </div>
        </div>

        {mapsApiKey && (
          <details className="mb-8 overflow-hidden rounded-2xl border border-blue-100 bg-blue-50/70 px-6 py-4 text-sm text-blue-900">
            <summary className="cursor-pointer text-base font-semibold text-blue-900">
              Launch embedded Google Map (optional)
            </summary>
            <div className="mt-4 aspect-video overflow-hidden rounded-xl border border-blue-100">
              <iframe
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src={`https://www.google.com/maps/embed/v1/place?key=${mapsApiKey}&q=Silverstone+Ranch,+Las+Vegas,+NV+89131`}
                title="Silverstone Ranch Google Map"
              />
            </div>
          </details>
        )}

        <div className="bg-blue-50 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Discover Silverstone Ranch Living in Centennial Hills, Nevada
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Nestled in the heart of Northwest Las Vegas, Silverstone Ranch offers a prestigious gated luxury oasis
            where modern elegance blends seamlessly with desert charm. Imagine waking up to protected Spring Mountain
            views, stepping outside your Mediterranean-inspired home, and experiencing a community crafted with
            sophistication and convenience in mind.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            This exclusive, guard-gated enclave isn&apos;t just a place to live; it&apos;s a lifestyle upgrade. 
            Located just 10 minutes from shopping at Centennial Center, CCSD campuses, and 
            the sprawling 680-acre Floyd Lamb Park, every detail has been designed to enhance daily routines. 
            The nearby 215 Beltway puts the Strip just 30 minutes away, while world-class healthcare at 
            Centennial Hills Hospital ensures peace of mind right in your neighborhood.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Beyond its prime location, this luxury Las Vegas community boasts immaculately manicured landscapes, 
            resort-style amenities, and Mediterranean-inspired architecture that radiates elegance. Whether 
            you&apos;re lounging poolside, exploring nearby nature trails, or enjoying the upscale charm of the 
            neighborhood, you&apos;ll quickly see why Centennial Hills ranks among Las Vegas&apos; fastest-growing 
            luxury communities, with property values appreciating 15% annually. For customized driving directions,
            <Link href="/contact" className="ml-1 font-semibold text-blue-700 hover:text-blue-800">reach out to Dr. Duffy</Link> and receive a curated relocation guide.
          </p>
        </div>
      </div>
    </section>
  )
}

