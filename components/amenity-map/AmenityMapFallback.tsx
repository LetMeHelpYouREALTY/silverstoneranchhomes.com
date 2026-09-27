import { COMMUNITY_LOCATION, buildMapsEmbedFallbackUrl } from '@/lib/nearby-amenities-config'

type AmenityMapFallbackProps = {
  title: string
  className?: string
}

/** Keyless embed centered on the community (no Maps JavaScript API). */
export function AmenityMapFallback({ title, className }: AmenityMapFallbackProps) {
  const { lat, lng } = COMMUNITY_LOCATION.center
  const embedUrl = buildMapsEmbedFallbackUrl()

  return (
    <div className={className}>
      <div
        className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-sm"
        style={{ minHeight: 420 }}
      >
        <iframe
          title={title}
          width="100%"
          height="420"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          src={embedUrl}
        />
      </div>
      <p className="mt-2 text-xs text-slate-500">
        Map centered on {COMMUNITY_LOCATION.name} ({lat.toFixed(4)}, {lng.toFixed(4)}).
      </p>
    </div>
  )
}
