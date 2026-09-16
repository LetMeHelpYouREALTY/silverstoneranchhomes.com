#!/usr/bin/env node
/**
 * HEAD-check hosted Images delivery URLs without an API token.
 * Usage: node scripts/verify-cloudflare-images.mjs
 */
const HASH = process.env.NEXT_PUBLIC_CLOUDFLARE_IMAGES_HASH?.trim() || 'byE6BTe9lNqo21V57n4aPQ'
const VARIANT = process.env.NEXT_PUBLIC_CLOUDFLARE_IMAGES_VARIANT?.trim() || 'public'

const MEDIA_IDS = [
  'hero-guard-gated',
  'hero-aerial-community',
  'hero-amenities-pool',
  'hero-listings-kitchen',
  'hero-golf-fairway',
  'hero-schools-campus',
  'hero-contact-office',
  'hero-home-valuation',
  'hero-map-location',
  'section-neighborhood-street',
  'section-outdoor-trails',
  'section-hoa-clubhouse',
  'section-seller-staging',
  'section-buyer-tour',
  'section-dining-plaza',
  'section-finance',
  'section-hospital',
  'section-shopping',
  'section-research',
  'section-recreation',
  'section-evening-outdoor',
  'section-commute',
  'section-events',
  'section-desert-horizon',
  'section-video-tour',
  'section-floorplan-interior',
  'section-smart-home',
  'section-architecture',
  'og-square-home',
]

async function main() {
  const ok = []
  const missing = []
  for (const id of MEDIA_IDS) {
    const url = `https://imagedelivery.net/${HASH}/${id}/${VARIANT}`
    const res = await fetch(url, { method: 'HEAD' })
    const line = `${res.status} ${url}`
    if (res.ok) {
      ok.push(id)
      console.log(`ok   ${line}`)
    } else {
      missing.push(id)
      console.log(`miss ${line} ${res.headers.get('cf-images') || ''}`.trim())
    }
  }
  console.log(`\n${ok.length}/${MEDIA_IDS.length} hosted. Delivery flag stays off until this is ${MEDIA_IDS.length}/${MEDIA_IDS.length}.`)
  if (missing.length) process.exit(2)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
