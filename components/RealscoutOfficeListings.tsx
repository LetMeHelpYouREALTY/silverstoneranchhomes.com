'use client'

import { createElement, useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import Script from 'next/script'

export function RealscoutOfficeListings() {
  // Inject styles when component mounts
  useEffect(() => {
    if (typeof document !== 'undefined' && !document.getElementById('realscout-styles')) {
      const style = document.createElement('style')
      style.id = 'realscout-styles'
      style.textContent = 'realscout-office-listings { --rs-listing-divider-color: #0e64c8; width: 100%; }'
      document.head.appendChild(style)
    }
  }, [])
  const [scriptLoaded, setScriptLoaded] = useState(false)
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: '200px', // Start loading 200px before component is visible
  })

  return (
    <section ref={ref} className="bg-slate-900 py-16 px-4 sm:px-6 lg:px-8">
      {inView && (
        <Script
          src="https://em.realscout.com/widgets/realscout-web-components.umd.js"
          type="module"
          strategy="lazyOnload"
          onLoad={() => setScriptLoaded(true)}
        />
      )}
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center text-white">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-300">Featured Silverstone Ranch Inventory</p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Explore Current Silverstone Ranch Listings</h2>
          <p className="mt-4 text-slate-200">
            Browse the newest guard-gated homes for sale curated by Dr. Jan Duffy. Customize filters, request tours, and
            save favorites directly in RealScout.
          </p>
        </div>
        <div className="rounded-2xl border border-blue-500/40 bg-white/95 p-4 shadow-2xl shadow-blue-900/20">
          {/* RealScout Web Component - only render when script is loaded */}
          {scriptLoaded ? (
            createElement('realscout-office-listings', {
              'agent-encoded-id': 'QWdlbnQtMjI1MDUw',
              'sort-order': 'NEWEST',
              'listing-status': 'For Sale',
              'property-types': ',SFR',
              'price-min': '500000',
              'price-max': '600000',
            })
          ) : (
            <div className="flex min-h-[400px] items-center justify-center">
              <p className="text-slate-600">Loading listings...</p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
