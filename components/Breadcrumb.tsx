import Link from 'next/link'
import { ChevronRight, Home } from 'lucide-react'

export interface BreadcrumbItem {
  name: string
  path: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
  className?: string
}

/**
 * Breadcrumb navigation component with schema.org markup.
 * Improves UX and SEO with visual navigation path.
 */
export default function Breadcrumb({ items, className = '' }: BreadcrumbProps) {
  const allItems = [{ name: 'Home', path: '/' }, ...items]

  return (
    <nav
      aria-label="Breadcrumb"
      className={`flex items-center space-x-2 text-sm text-slate-600 ${className}`}
    >
      {allItems.map((item, index) => {
        const isLast = index === allItems.length - 1

        return (
          <div key={item.path} className="flex items-center">
            {index > 0 && <ChevronRight className="h-4 w-4 mx-2 text-slate-400" aria-hidden="true" />}

            {index === 0 ? (
              <Link
                href={item.path}
                className="flex items-center hover:text-blue-600 transition-colors"
                aria-label="Home"
              >
                <Home className="h-4 w-4" />
              </Link>
            ) : isLast ? (
              <span className="font-medium text-slate-900" aria-current="page">
                {item.name}
              </span>
            ) : (
              <Link href={item.path} className="hover:text-blue-600 transition-colors">
                {item.name}
              </Link>
            )}
          </div>
        )
      })}
    </nav>
  )
}
