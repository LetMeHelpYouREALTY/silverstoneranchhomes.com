import Image from 'next/image'
import { cn } from '@/lib/utils'
import {
  MEDIA_ASSETS,
  getMediaUrl,
  mediaAltForHeading,
  type MediaId,
} from '@/lib/media'

type HeadingVisualProps = {
  mediaId: MediaId
  heading: string
  priority?: boolean
  className?: string
  showCaption?: boolean
}

export function HeadingVisual({
  mediaId,
  heading,
  priority = false,
  className,
  showCaption = true,
}: HeadingVisualProps) {
  const asset = MEDIA_ASSETS[mediaId]
  return (
    <figure className={cn('overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-sm', className)}>
      <Image
        src={getMediaUrl(mediaId)}
        alt={mediaAltForHeading(mediaId, heading)}
        width={asset.width}
        height={asset.height}
        priority={priority}
        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 90vw, 1200px"
        className="h-auto w-full object-cover"
      />
      {showCaption ? (
        <figcaption className="px-4 py-3 text-sm text-slate-600">{asset.caption}</figcaption>
      ) : null}
    </figure>
  )
}
