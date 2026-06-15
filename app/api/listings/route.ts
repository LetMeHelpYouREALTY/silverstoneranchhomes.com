import { NextResponse } from 'next/server'
import { fetchSilverstoneListings } from '@/lib/realscout/fetch-listings'

export const revalidate = 3600

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const hyperlocalOnly = searchParams.get('hyperlocal') !== 'false'
  const limit = Math.min(Number(searchParams.get('limit') ?? 12), 50)

  const listings = await fetchSilverstoneListings({ hyperlocalOnly, limit })

  return NextResponse.json({
    updatedAt: new Date().toISOString(),
    count: listings.length,
    hyperlocalOnly,
    listings,
  })
}
