import { NextResponse } from 'next/server'
import { MARKET_SNAPSHOT } from '@/lib/market-data'

const MARKET_STATS = {
  updatedAt: MARKET_SNAPSHOT.lastUpdated,
  reportMonth: MARKET_SNAPSHOT.reportMonth,
  medianPrice: 500000,
  pricePerSqFt: 224,
  averageDaysOnMarket: 140,
  activeListings: 15,
  listToSaleRatio: 0.99,
  buyerDemandIndex: 33,
  zipCode: MARKET_SNAPSHOT.zipCode,
  notes: {
    summary:
      'Silverstone Ranch (89131) Q1 2026: $500K median (+11.1% YoY), 140 days on market, rebalancing toward buyer leverage.',
    outlook:
      'Well-priced guard-gated and renovated homes still attract offers; overpriced listings face longer DOM. Verify 2026 HOA dues increases during due diligence.',
  },
}

export async function GET() {
  return NextResponse.json(MARKET_STATS)
}
