'use client'

import { HeadingVisual } from '@/components/HeadingVisual'
import { headingMediaFromText, type MediaId } from '@/lib/media'
import { cn } from '@/lib/utils'

type HeadingTag = 'h2' | 'h3'

type SectionHeadingProps = {
  as?: HeadingTag
  children: string
  mediaId?: MediaId
  className?: string
  showImage?: boolean
  id?: string
}

export function SectionHeading({
  as = 'h2',
  children,
  mediaId,
  className,
  showImage = true,
  id,
}: SectionHeadingProps) {
  const Tag = as
  const resolved = mediaId ?? headingMediaFromText(children)
  const headingClass =
    as === 'h2'
      ? 'text-3xl font-bold text-slate-900 mb-4'
      : 'text-xl font-semibold text-slate-900 mb-3'

  return (
    <div className={cn('space-y-4', className)}>
      <Tag id={id} className={headingClass}>
        {children}
      </Tag>
      {showImage ? (
        <HeadingVisual
          mediaId={resolved}
          heading={children}
          showCaption={as === 'h2'}
          variant={as === 'h2' ? 'section' : 'supporting'}
        />
      ) : null}
    </div>
  )
}
