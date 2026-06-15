import Link from 'next/link'

export type BreadcrumbItem = {
  name: string
  path?: string
}

type BreadcrumbsProps = {
  items: BreadcrumbItem[]
  className?: string
}

/**
 * Visible HTML breadcrumbs for users and supplemental crawl signals alongside JSON-LD.
 */
export function Breadcrumbs({ items, className = '' }: BreadcrumbsProps) {
  if (!items.length) return null

  return (
    <nav className={`text-sm text-gray-500 mb-8 ${className}`.trim()} aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, index) => {
          const isLast = index === items.length - 1
          return (
            <li key={`${item.name}-${index}`} className="flex items-center gap-2">
              {index > 0 && (
                <span aria-hidden className="text-gray-400">
                  /
                </span>
              )}
              {isLast || !item.path ? (
                <span className="text-gray-900 font-medium" aria-current={isLast ? 'page' : undefined}>
                  {item.name}
                </span>
              ) : (
                <Link href={item.path} className="hover:text-blue-600">
                  {item.name}
                </Link>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
