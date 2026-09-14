import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const CANONICAL_HOST = 'www.silverstoneranchhomes.com'

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone()
  const hostname = request.headers.get('host') || ''

  // Skip middleware for internal Next.js requests and static assets
  if (
    url.pathname.startsWith('/_next') ||
    url.pathname.startsWith('/api') ||
    url.pathname.startsWith('/static') ||
    url.pathname.match(/\.(ico|jpg|jpeg|png|gif|svg|webp|woff|woff2|ttf|eot|css|js)$/i)
  ) {
    return NextResponse.next()
  }

  // Redirect apex only. Do not send localhost or Vercel preview hosts to production.
  const host = hostname.split(':')[0]
  if (host === 'silverstoneranchhomes.com') {
    url.protocol = 'https:'
    url.host = CANONICAL_HOST
    return NextResponse.redirect(url, 301)
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - files with extensions (e.g., .jpg, .png, .svg)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)',
  ],
}

