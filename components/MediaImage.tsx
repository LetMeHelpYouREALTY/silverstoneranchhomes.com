'use client'

import Image, { type ImageProps } from 'next/image'
import { useState } from 'react'
import {
  MEDIA_ASSETS,
  getMediaFallbackUrl,
  getMediaUrl,
  isCloudflareDeliveryUrl,
  type MediaId,
} from '@/lib/media'

type MediaImageProps = Omit<ImageProps, 'src' | 'alt'> & {
  mediaId: MediaId
  alt: string
}

/**
 * Serves Cloudflare Hosted Images when delivery is enabled, then falls back to the
 * git-backed /public file if imagedelivery.net 404s (cf-images err=9404 before upload).
 */
export function MediaImage({
  mediaId,
  alt,
  onError,
  unoptimized,
  width,
  height,
  fill,
  ...imageProps
}: MediaImageProps) {
  const asset = MEDIA_ASSETS[mediaId]
  const fallbackSrc = getMediaFallbackUrl(mediaId)
  const [src, setSrc] = useState(() => getMediaUrl(mediaId))
  const usingCloudflare = isCloudflareDeliveryUrl(src)

  const shared = {
    ...imageProps,
    src,
    alt,
    unoptimized: unoptimized ?? usingCloudflare,
    onError: (event: Parameters<NonNullable<ImageProps['onError']>>[0]) => {
      if (src !== fallbackSrc) {
        setSrc(fallbackSrc)
      }
      onError?.(event)
    },
  }

  if (fill) {
    return <Image {...shared} fill />
  }

  return (
    <Image
      {...shared}
      width={width ?? asset.width}
      height={height ?? asset.height}
    />
  )
}
