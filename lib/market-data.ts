/**
 * Silverstone Ranch market snapshot — single source for visible copy and schema dates.
 *
 * Community row from the Nevada Real Estate Group guard-gated report (Las Vegas MLS via
 * Repliers), published September 19, 2026. Window: closings September 19, 2025 through
 * September 18, 2026. Active listings and median ask are as of September 18, 2026.
 * https://www.nevadarealestategroup.com/blog/las-vegas-guard-gated-market-report-q3-2026/
 *
 * Southern Nevada single-family median is a separate series: Las Vegas REALTORS®, August 2026.
 * Do not mix that metro median into the Silverstone row.
 */
export const MARKET_SNAPSHOT = {
  reportMonth: 'September 2026',
  reportMonthShort: 'Sep 2026',
  lastUpdated: '2026-09-19',
  datePublished: '2026-09-19',
  dateModified: '2026-09-25',
  windowLabel: '12 months ending Sep 18, 2026',
  sourceName: 'Nevada Real Estate Group, Las Vegas Guard-Gated Market Report Q3 2026',
  sourceUrl: 'https://www.nevadarealestategroup.com/blog/las-vegas-guard-gated-market-report-q3-2026/',
  zipCode: '89131',
  community: 'Silverstone Ranch',
  area: 'Centennial Hills',
  medianPrice: '$539,000',
  medianPriceShort: '$539K',
  medianPriceContext: '12-month median sold',
  averageSold: '$545,144',
  pricePerSqFt: '$233',
  pricePerSqFtContext: '12-month sold price per sq. ft.',
  daysOnMarket: '40 days',
  daysOnMarketChange: 'Median DOM in the 12-month window',
  activeListings: '26',
  activeListingsChange: 'Active on Sep 18, 2026',
  monthsOfSupply: '5.4 months',
  medianAsk: '$625,000',
  topSale: '$875,000',
  closings12Month: '58',
  q3ClosingsToDate: '6',
  priceRange: '$539K median sold · $875K top sale',
  hoaRange: '$200 – $286/mo',
  /** Four-city market in the same NREG window (Las Vegas, Henderson, North Las Vegas, Boulder City). */
  metroMedianPrice: '$445,000',
  metroMedianDom: '30 days',
  /** Las Vegas REALTORS® existing single-family median, August 2026. */
  southernNevadaSfrMedian: '$475,000',
  southernNevadaSfrMedianNote: 'August 2026, down 1% from August 2025',
} as const

/** Master + sub-association HOA breakdown (research dated June 2026; confirm in the resale package). */
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
