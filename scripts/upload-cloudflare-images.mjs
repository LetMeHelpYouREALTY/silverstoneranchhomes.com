#!/usr/bin/env node
/**
 * Upload git-backed section JPEGs to Cloudflare Hosted Images (primary CDN).
 *
 * Required env:
 *   CLOUDFLARE_IMAGES_API_TOKEN  (Account → Images → Edit)
 *
 * Optional env:
 *   CLOUDFLARE_ACCOUNT_ID        (defaults to the Silverstone Images account)
 *   NEXT_PUBLIC_CLOUDFLARE_IMAGES_HASH
 *   NEXT_PUBLIC_CLOUDFLARE_IMAGES_VARIANT  (default: public)
 *
 * Custom IDs match lib/media.ts MEDIA_IDS:
 *   https://imagedelivery.net/{hash}/{id}/public
 *
 * Docs:
 *   https://developers.cloudflare.com/images/storage/upload-images/upload-custom-path/
 *   https://developers.cloudflare.com/images/optimization/hosted-images/serve-uploaded-images/
 *
 * Usage: node scripts/upload-cloudflare-images.mjs
 */
import { existsSync, writeFileSync } from 'node:fs'
import { readFile } from 'node:fs/promises'
import { basename, join } from 'node:path'

const ACCOUNT_ID = process.env.CLOUDFLARE_ACCOUNT_ID?.trim() || '2cc579c1ec9e426ed585e933ebf4753b'
const TOKEN = process.env.CLOUDFLARE_IMAGES_API_TOKEN?.trim()
const HASH = process.env.NEXT_PUBLIC_CLOUDFLARE_IMAGES_HASH?.trim() || 'byE6BTe9lNqo21V57n4aPQ'
const VARIANT = process.env.NEXT_PUBLIC_CLOUDFLARE_IMAGES_VARIANT?.trim() || 'public'
const ROOT = join(process.cwd(), 'public', 'images', 'sections')
const SITE = 'https://www.silverstoneranchhomes.com'

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

function deliveryUrl(id) {
  return `https://imagedelivery.net/${HASH}/${id}/${VARIANT}`
}

function isDuplicate(json) {
  const message = JSON.stringify(json.errors || json).toLowerCase()
  return (
    message.includes('duplicate') ||
    message.includes('already exists') ||
    message.includes('unspecified image id')
  )
}

async function upload(id, filePath) {
  const buf = await readFile(filePath)
  const form = new FormData()
  form.set('id', id)
  form.set('requireSignedURLs', 'false')
  form.set(
    'metadata',
    JSON.stringify({
      source: 'git',
      path: `public/images/sections/${basename(filePath)}`,
      site: SITE,
    }),
  )
  form.set('file', new File([buf], basename(filePath), { type: 'image/jpeg' }))

  const res = await fetch(`https://api.cloudflare.com/client/v4/accounts/${ACCOUNT_ID}/images/v1`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${TOKEN}` },
    body: form,
  })
  const json = await res.json()
  if (!json.success) {
    if (isDuplicate(json)) {
      console.log(`skip (exists): ${id}`)
      return { status: 'exists', json }
    }
    throw new Error(`${id}: ${JSON.stringify(json.errors || json)}`)
  }
  console.log(`uploaded: ${id}`)
  return { status: 'uploaded', json }
}

async function headOk(id) {
  const res = await fetch(deliveryUrl(id), { method: 'HEAD' })
  return res.ok
}

async function main() {
  if (!TOKEN) {
    console.error(
      'Missing CLOUDFLARE_IMAGES_API_TOKEN (Account → Images → Edit). Git backups in public/images/sections remain the live source until the token is set.',
    )
    process.exit(1)
  }
  if (!existsSync(ROOT)) {
    throw new Error(`Missing ${ROOT}`)
  }

  const results = []
  for (const id of MEDIA_IDS) {
    const filePath = join(ROOT, `${id}.jpg`)
    if (!existsSync(filePath)) {
      console.warn(`missing git backup: ${filePath}`)
      results.push({ id, status: 'missing-file' })
      continue
    }
    const result = await upload(id, filePath)
    results.push({ id, status: result.status })
  }

  const verified = []
  const missing = []
  for (const id of MEDIA_IDS) {
    const ok = await headOk(id)
    if (ok) verified.push(id)
    else missing.push(id)
  }

  const report = {
    accountId: ACCOUNT_ID,
    hash: HASH,
    variant: VARIANT,
    uploaded: results.filter((row) => row.status === 'uploaded').length,
    existed: results.filter((row) => row.status === 'exists').length,
    verified: verified.length,
    missing,
    sample: deliveryUrl('hero-guard-gated'),
  }
  const reportPath = join(process.cwd(), 'reports', 'cloudflare-images-upload.json')
  writeFileSync(reportPath, `${JSON.stringify(report, null, 2)}\n`)

  console.log(`\nVerified ${verified.length}/${MEDIA_IDS.length} hosted images at ${HASH}/${VARIANT}.`)
  if (missing.length) {
    console.warn(`Not yet on imagedelivery.net: ${missing.join(', ')}`)
    console.warn('Leave NEXT_PUBLIC_CLOUDFLARE_IMAGES_DELIVERY unset so git backups stay live.')
    process.exit(1)
  }

  console.log('All hosted images return 200.')
  console.log(`Set NEXT_PUBLIC_CLOUDFLARE_IMAGES_DELIVERY=1 in Vercel Production.`)
  console.log(`Delivery: ${deliveryUrl('<image_id>')}`)
  console.log('Git copies in public/images/sections remain the backup source of truth.')
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
