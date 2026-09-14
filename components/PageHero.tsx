import { HeadingVisual } from '@/components/HeadingVisual'
import type { MediaId } from '@/lib/media'
import { cn } from '@/lib/utils'

type PageHeroProps = {
  kicker?: string
  title: string
  description?: string
  mediaId: MediaId
  align?: 'left' | 'center'
  children?: React.ReactNode
}

export function PageHero({
  kicker,
  title,
  description,
  mediaId,
  align = 'left',
  children,
}: PageHeroProps) {
  return (
    <header
      className={cn(
        'mb-12 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center',
        align === 'center' && 'lg:grid-cols-1',
      )}
    >
      <div className={cn(align === 'center' && 'text-center mx-auto max-w-3xl')}>
        {kicker ? (
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-700 mb-3">{kicker}</p>
        ) : null}
        <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4 leading-tight">{title}</h1>
        {description ? <p className="text-lg text-slate-700 leading-relaxed">{description}</p> : null}
        {children}
      </div>
      <HeadingVisual mediaId={mediaId} heading={title} priority showCaption={align !== 'center'} />
    </header>
  )
}
