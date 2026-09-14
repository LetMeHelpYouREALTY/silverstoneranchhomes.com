import { Phone, Navigation, Star, MapPin, Clock } from 'lucide-react'
import { CONTACT_INFO } from '@/lib/contact-info'

export function GbpLocalBar() {
  return (
    <div className="border-b border-blue-100 bg-blue-50/80 text-slate-800">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-3 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div className="min-w-0">
          <p className="text-sm font-semibold text-slate-900">{CONTACT_INFO.businessName}</p>
          <p className="mt-0.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-600">
            <span className="inline-flex items-center gap-1">
              <MapPin className="h-3.5 w-3.5 text-blue-700" aria-hidden />
              {CONTACT_INFO.address.display}
            </span>
            <span className="inline-flex items-center gap-1">
              <Clock className="h-3.5 w-3.5 text-blue-700" aria-hidden />
              {CONTACT_INFO.businessHours.display} daily
            </span>
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <a
            href={`tel:${CONTACT_INFO.phone.tel}`}
            className="inline-flex items-center gap-1.5 rounded-full bg-blue-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-blue-700"
          >
            <Phone className="h-3.5 w-3.5" aria-hidden />
            Call {CONTACT_INFO.phone.display}
          </a>
          <a
            href={CONTACT_INFO.gbp.directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-white px-3 py-1.5 text-xs font-semibold text-blue-800 hover:bg-blue-50"
          >
            <Navigation className="h-3.5 w-3.5" aria-hidden />
            Directions
          </a>
          <a
            href={CONTACT_INFO.gbp.reviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-white px-3 py-1.5 text-xs font-semibold text-blue-800 hover:bg-blue-50"
          >
            <Star className="h-3.5 w-3.5" aria-hidden />
            Google Reviews
          </a>
        </div>
      </div>
    </div>
  )
}
