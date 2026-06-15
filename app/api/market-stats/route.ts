import { NextResponse } from 'next/server'
import { MARKET_SNAPSHOT } from '@/lib/market-data'

const MARKET_STATS = {
  updatedAt: MARKET_SNAPSHOT.lastUpdated,
  reportMonth: MARKET_SNAPSHOT.reportMonth,
  medianPrice: 695000,
  pricePerSqFt: 289,
  averageDaysOnMarket: 15,
  activeListings: 22,
  listToSaleRatio: 1.004,
  buyerDemandIndex: 44,
  zipCode: MARKET_SNAPSHOT.zipCode,
  notes: {
    summary:
      'Silverstone Ranch (89131) inventory remains constrained, with renovated guard-gated properties averaging 15 days on market and closing near list price.',
    outlook:
      'Expect steady summer demand from relocation buyers. Stage and price to June 2026 comps for optimal results in Centennial Hills.',
  },
}

export async function GET() {
  return NextResponse.json(MARKET_STATS)
}
