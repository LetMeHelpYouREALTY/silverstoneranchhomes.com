import Image from 'next/image'
import { cn } from '@/lib/utils'
import {
  MEDIA_ASSETS,
  getMediaUrl,
  mediaAltForHeading,
  type MediaId,
} from '@/lib/media'

type HeadingVisualVariant = 'hero' | 'supporting' | 'section'

type HeadingVisualProps = {
  mediaId: MediaId
  heading: string
  priority?: boolean
  className?: string
  showCaption?: boolean
  variant?: HeadingVisualVariant
}

const VARIANT_IMAGE_CLASS: Record<HeadingVisualVariant, string> = {
  hero: 'h-auto max-h-[32rem] w-full object-cover',
  supporting: 'h-40 w-full object-cover',
  section: 'max-h-64 w-full object-cover',
}

const VARIANT_SIZES: Record<HeadingVisualVariant, string> = {
  hero: '(max-width: 768px) 100vw, (max-width: 1280px) 90vw, 1200px',
  supporting: '(max-width: 768px) 100vw, 33vw',
  section: '(max-width: 768px) 100vw, 800px',
}

function imageClassForVariant(variant: HeadingVisualVariant): string {
  switch (variant) {
    case 'hero':
      return VARIANT_IMAGE_CLASS.hero
    case 'supporting':
      return VARIANT_IMAGE_CLASS.supporting
    case 'section':
      return VARIANT_IMAGE_CLASS.section
    default: {
      const _exhaustive: never = variant
      return _exhaustive
    }
  }
}

function sizesForVariant(variant: HeadingVisualVariant): string {
  switch (variant) {
    case 'hero':
      return VARIANT_SIZES.hero
    case 'supporting':
      return VARIANT_SIZES.supporting
    case 'section':
      return VARIANT_SIZES.section
    default: {
      const _exhaustive: never = variant
      return _exhaustive
    }
  }
}

export function HeadingVisual({
  mediaId,
  heading,
  priority = false,
  className,
  showCaption = true,
  variant = 'hero',
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
        sizes={sizesForVariant(variant)}
        className={imageClassForVariant(variant)}
      />
      {showCaption ? (
        <figcaption className="px-4 py-3 text-sm text-slate-600">{asset.caption}</figcaption>
      ) : null}
    </figure>
  )
}
