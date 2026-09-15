import { CONTACT_INFO } from '@/lib/contact-info'

type GoogleMapEmbedProps = {
  query: string
  title: string
  className?: string
}

export function GoogleMapEmbed({ query, title, className }: GoogleMapEmbedProps) {
  const mapsApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
  const placeId = CONTACT_INFO.gbp.placeId
  const usePlaceId = query === CONTACT_INFO.address.display || query === CONTACT_INFO.businessName
  const src = mapsApiKey
    ? usePlaceId
      ? `https://www.google.com/maps/embed/v1/place?key=${mapsApiKey}&q=place_id:${placeId}`
      : `https://www.google.com/maps/embed/v1/place?key=${mapsApiKey}&q=${encodeURIComponent(query)}`
    : usePlaceId
      ? `https://www.google.com/maps?cid=${CONTACT_INFO.gbp.cid}&output=embed`
      : `https://www.google.com/maps?q=${encodeURIComponent(query)}&output=embed`

  return (
    <div className={className}>
      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-sm">
        <iframe
          title={title}
          width="100%"
          height="420"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          src={src}
        />
      </div>
      <p className="mt-3 text-sm text-slate-600">
        {CONTACT_INFO.businessName} · {CONTACT_INFO.address.display}
      </p>
    </div>
  )
}
