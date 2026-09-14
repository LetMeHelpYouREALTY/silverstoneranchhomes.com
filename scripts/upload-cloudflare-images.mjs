#!/usr/bin/env node
/**
 * Upload git-backed section images to Cloudflare Images (primary CDN).
 *
 * Required env:
 *   CLOUDFLARE_ACCOUNT_ID
 *   CLOUDFLARE_IMAGES_API_TOKEN  (Account → Images → Edit)
 *
 * Usage: node scripts/upload-cloudflare-images.mjs
 *
 * Custom IDs match lib/media.ts so production can resolve
 * https://imagedelivery.net/{hash}/{id}/public
 *
 * Docs: https://developers.cloudflare.com/images/upload-images/
 */
import { existsSync } from 'node:fs'
import { readFile } from 'node:fs/promises'
import { basename, join } from 'node:path'

const ACCOUNT_ID = process.env.CLOUDFLARE_ACCOUNT_ID
const TOKEN = process.env.CLOUDFLARE_IMAGES_API_TOKEN
const ROOT = join(process.cwd(), 'public', 'images', 'sections')

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
  'og-square-home',
]

if (!ACCOUNT_ID || !TOKEN) {
  console.error(
    'Missing CLOUDFLARE_ACCOUNT_ID or CLOUDFLARE_IMAGES_API_TOKEN. Git backups in public/images/sections remain the live source until credentials are set.',
  )
  process.exit(1)
}

async function upload(id, filePath) {
  const buf = await readFile(filePath)
  const form = new FormData()
  form.set('id', id)
  form.set('file', new File([buf], basename(filePath), { type: 'image/jpeg' }))

  const res = await fetch(`https://api.cloudflare.com/client/v4/accounts/${ACCOUNT_ID}/images/v1`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${TOKEN}` },
    body: form,
  })
  const json = await res.json()
  if (!json.success) {
    const message = JSON.stringify(json.errors || json)
    if (message.toLowerCase().includes('duplicate') || message.includes('already exists')) {
      console.log(`skip (exists): ${id}`)
      return json
    }
    throw new Error(`${id}: ${message}`)
  }
  console.log(`uploaded: ${id}`)
  return json
}

async function main() {
  if (!existsSync(ROOT)) {
    throw new Error(`Missing ${ROOT}`)
  }
  for (const id of MEDIA_IDS) {
    const filePath = join(ROOT, `${id}.jpg`)
    if (!existsSync(filePath)) {
      console.warn(`missing git backup: ${filePath}`)
      continue
    }
    await upload(id, filePath)
  }
  console.log('\nSet NEXT_PUBLIC_CLOUDFLARE_IMAGES_HASH in Vercel to your Cloudflare Images account hash.')
  console.log('Git copies in public/images/sections remain the backup source of truth.')
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
