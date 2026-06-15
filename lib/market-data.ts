/**
 * Silverstone Ranch (89131) market snapshot — single source for visible copy and schema dates.
 * Refresh monthly; last updated June 2026.
 */
export const MARKET_SNAPSHOT = {
  reportMonth: 'June 2026',
  reportMonthShort: 'Jun 2026',
  lastUpdated: '2026-06-01',
  datePublished: '2026-06-01',
  dateModified: '2026-06-01',
  zipCode: '89131',
  community: 'Silverstone Ranch',
  area: 'Centennial Hills',
  medianPrice: '$695,000',
  medianPriceShort: '$695K',
  medianPriceYoY: '+4.8%',
  pricePerSqFt: '$289',
  pricePerSqFtYoY: '+3.2%',
  daysOnMarket: '15 Days',
  daysOnMarketChange: '-2 Days YoY',
  activeListings: '22 Homes',
  activeListingsChange: '+8% MoM',
  listToSaleRatio: '100.4%',
  priceRange: '$565K – $1.15M+',
  hoaRange: '$200 – $286/mo',
  cashAndJumboShare: '46%',
} as const

export const ASSIGNED_SCHOOLS = {
  elementary: "O'Roarke Elementary School",
  middle: 'Cadwallader Middle School',
  high: 'Arbor View High School',
  note:
    'CCSD attendance boundaries can change. Always verify current zoning with CCSD or your REALTOR® before you offer.',
} as const
