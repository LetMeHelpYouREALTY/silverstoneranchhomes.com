import type { Metadata } from 'next'
import { CONTACT_INFO } from './contact-info'
import { MEDIA_ASSETS, absoluteMediaUrl, headingMediaFromText, type MediaId } from './media'

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

function isMediaId(value: string): value is MediaId {
  return Object.prototype.hasOwnProperty.call(MEDIA_ASSETS, value)
}

/** GBP-aligned Open Graph image from a heading or media id. */
export function buildShareImages(headingOrId: string) {
  const mediaId = isMediaId(headingOrId) ? headingOrId : headingMediaFromText(headingOrId)
  return {
    url: absoluteMediaUrl(mediaId),
    width: 1920,
    height: 1080,
    alt: `${headingOrId} | ${CONTACT_INFO.address.display}`,
  }
}

export function withShareImage(openGraph: NonNullable<Metadata['openGraph']>, heading: string): Metadata['openGraph'] {
  return {
    ...openGraph,
    images: [buildShareImages(heading)],
  }
}

/** Attach heading-matched Open Graph + Twitter images for GBP/Maps sharing. */
export function withSocialImages(metadata: Metadata, heading: string): Metadata {
  const image = buildShareImages(heading)
  return {
    ...metadata,
    openGraph: withShareImage(
      {
        type: 'website',
        ...(metadata.openGraph ?? {}),
      },
      heading,
    ),
    twitter: {
      card: 'summary_large_image',
      title: typeof metadata.title === 'string' ? metadata.title : heading,
      description: metadata.description,
      images: [image.url],
      ...metadata.twitter,
    },
  }
}