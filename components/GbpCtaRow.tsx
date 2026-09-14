import { Phone, Navigation, Star } from 'lucide-react'
import { CONTACT_INFO } from '@/lib/contact-info'
import { cn } from '@/lib/utils'

type GbpCtaRowProps = {
  className?: string
}

export function GbpCtaRow({ className }: GbpCtaRowProps) {
  return (
    <div className={cn('flex flex-wrap gap-3', className)}>
      <a
        href={`tel:${CONTACT_INFO.phone.tel}`}
        className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow hover:bg-blue-700"
      >
        <Phone className="h-4 w-4" aria-hidden />
        Call {CONTACT_INFO.phone.display}
      </a>
      <a
        href={CONTACT_INFO.gbp.directionsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-2 rounded-full border border-blue-600 px-5 py-2.5 text-sm font-semibold text-blue-700 hover:bg-blue-50"
      >
        <Navigation className="h-4 w-4" aria-hidden />
        Get directions
      </a>
      <a
        href={CONTACT_INFO.gbp.reviewsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-800 hover:bg-slate-50"
      >
        <Star className="h-4 w-4" aria-hidden />
        View Google Reviews
      </a>
    </div>
  )
}
