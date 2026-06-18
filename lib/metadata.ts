import type { Metadata } from 'next'
import { CONTACT_INFO } from './contact-info'

/**
 * Default HTML `<title>` / Open Graph title segment using the exact GBP business name.
 * Pass a short page label (e.g. "Contact", "Homes for Sale"); empty uses business name only.
 */
export function buildPageTitle(pageTitleSegment: string) {
  const segment = pageTitleSegment.trim()
  if (!segment) return CONTACT_INFO.businessName
  return `${segment} | ${CONTACT_INFO.businessName}`
}

/**
 * Full `<title>` bypassing the root layout template (avoids double business-name suffix).
 * Use for hyperlocal SEO titles that already include brand or location keywords.
 */
export function seoAbsoluteTitle(title: string): Metadata['title'] {
  return { absolute: title.trim() }
}

/** Hyperlocal title pattern: page topic + Silverstone Ranch + ZIP + agent. */
export function buildHyperlocalTitle(topic: string): Metadata['title'] {
  return seoAbsoluteTitle(
    `${topic} | Silverstone Ranch ${CONTACT_INFO.address.postalCode} | ${CONTACT_INFO.agentName}`,
  )
}
