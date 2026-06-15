import Link from 'next/link'
import type { SilverstoneListing } from '@/lib/realscout/types'
import { CONTACT_INFO } from '@/lib/contact-info'

type SilverstoneListingCardsProps = {
  listings: SilverstoneListing[]
}

/**
 * Server-rendered MLS listing cards from RealScout feed (89131 / 89143 hyperlocal).
 */
export function SilverstoneListingCards({ listings }: SilverstoneListingCardsProps) {
  if (!listings.length) {
    return (
      <div className="rounded-xl border border-blue-100 bg-blue-50/50 p-8 text-center">
        <p className="text-slate-700 mb-4">
          No active Silverstone Ranch (89131) listings are showing in the MLS feed right now. Contact{' '}
          {CONTACT_INFO.agentName} for pocket listings and coming-soon inventory.
        </p>
        <Link
          href="/book-tour"
          className="inline-flex rounded-full bg-blue-600 px-6 py-2.5 text-sm font-semibold text-white hover:bg-blue-700"
        >
          Schedule a private tour
        </Link>
      </div>
    )
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {listings.map((listing) => (
        <article
          key={listing.id}
          className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow"
        >
          {listing.image ? (
            <a href={listing.url} target="_blank" rel="noopener noreferrer">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={listing.image}
                alt={`${listing.address} — Silverstone Ranch area home for sale`}
                loading="lazy"
                className="h-48 w-full object-cover"
              />
            </a>
          ) : (
            <div className="flex h-48 items-center justify-center bg-slate-100 text-sm text-slate-500">
              Photo unavailable
            </div>
          )}
          <div className="p-5">
            <p className="text-xl font-bold text-blue-800">{listing.displayPrice}</p>
            <p className="mt-1 text-sm font-medium text-slate-900">{listing.address}</p>
            <p className="mt-2 text-xs text-slate-600">{listing.subtitle}</p>
            <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-emerald-700">{listing.listingStatus}</p>
            <a
              href={listing.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex text-sm font-semibold text-blue-600 hover:text-blue-800"
            >
              View listing on RealScout →
            </a>
          </div>
        </article>
      ))}
    </div>
  )
}
