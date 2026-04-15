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
