import { NextResponse } from 'next/server'
import { MARKET_SNAPSHOT } from '@/lib/market-data'

const MARKET_STATS = {
  updatedAt: MARKET_SNAPSHOT.lastUpdated,
  reportMonth: MARKET_SNAPSHOT.reportMonth,
  windowLabel: MARKET_SNAPSHOT.windowLabel,
  sourceName: MARKET_SNAPSHOT.sourceName,
  sourceUrl: MARKET_SNAPSHOT.sourceUrl,
  medianPrice: 539000,
  averageSold: 545144,
  pricePerSqFt: 233,
  medianDaysOnMarket: 40,
  activeListings: 26,
  medianAsk: 625000,
  monthsOfSupply: 5.4,
  topSale: 875000,
  closings12Month: 58,
  q3ClosingsToDate: 6,
  zipCode: MARKET_SNAPSHOT.zipCode,
  notes: {
    summary:
      'Silverstone Ranch row, 12 months ending Sep 18, 2026: $539,000 median sold, 40-day median DOM, 26 active listings, 5.4 months of supply.',
    outlook:
      'Median ask on Sep 18, 2026 was $625,000. Q3 closings through that date (6) are still posting. Confirm enclave comps before you price.',
  },
}

export async function GET() {
  return NextResponse.json(MARKET_STATS)
}
