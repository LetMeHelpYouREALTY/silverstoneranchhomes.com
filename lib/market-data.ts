/**
 * Silverstone Ranch (89131) market snapshot — single source for visible copy and schema dates.
 * Sourced from Parallel deep research (Q1–June 2026) + RealScout MLS feed.
 * Refresh monthly; last updated June 2026.
 */
export const MARKET_SNAPSHOT = {
  reportMonth: 'June 2026',
  reportMonthShort: 'Jun 2026',
  lastUpdated: '2026-06-15',
  datePublished: '2026-06-01',
  dateModified: '2026-06-15',
  zipCode: '89131',
  community: 'Silverstone Ranch',
  area: 'Centennial Hills',
  /** Q1 2026 Silverstone Ranch micro-market (Parallel research, March 2026 baseline). */
  medianPrice: '$500,000',
  medianPriceShort: '$500K',
  medianPriceYoY: '+11.1%',
  pricePerSqFt: '$224',
  pricePerSqFtYoY: '-8.4%',
  daysOnMarket: '140 Days',
  daysOnMarketChange: '+93 Days YoY',
  activeListings: '15 Sold (Q1)',
  activeListingsChange: 'Balanced market',
  listToSaleRatio: '99%',
  priceRange: '$500K – $1.35M+',
  hoaRange: '$200 – $286/mo',
  cashAndJumboShare: '33%',
  golfCourseFairwayDiscount: '6–10%',
} as const

/** Master + sub-association HOA breakdown (Parallel research, June 2026). */
export const HOA_FEES = {
  masterMonthly: 158,
  nonGatedTotal: 200,
  thePalmsTotal: 240,
  tuscanyTotal: 252,
  pinehurstTotal: 286,
  displayRange: '$200 – $286/mo',
  duesIncreaseNote:
    'The Silverstone Ranch HOA board has indicated potential dues increases in 2026—request the latest budget and reserve study during due diligence.',
} as const

/**
 * CCSD assignments vary by street within 89131.
 * Verify at ccsd.net/zoning before you offer.
 */
export const ASSIGNED_SCHOOLS = {
  elementary: "O'Roarke Elementary School",
  middle: 'Cadwallader Middle School',
  high: 'Arbor View High School',
  alternateElementary: 'Gwendolyn B. Woolley Elementary',
  alternateMiddle: 'Thurman White Middle School',
  alternateHigh: 'Centennial High School',
  charterOption: 'Coral Academy of Science — Centennial Hills (K-8, lottery)',
  note:
    'CCSD attendance boundaries change. Verify current zoning at ccsd.net/zoning or with your REALTOR® before you offer.',
} as const
