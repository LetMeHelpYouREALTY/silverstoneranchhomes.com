import type { AmenityCategoryId } from '@/lib/nearby-amenities-config'

export type CuratedNearbyPlace = {
  name: string
  category: AmenityCategoryId
  /** Verified street address for display and JSON-LD; omit when not verified. */
  address?: string
  /** Official business or agency page used to verify name and address. */
  sourceUrl: string
  schemaType:
    | 'Restaurant'
    | 'Park'
    | 'Hospital'
    | 'GolfCourse'
    | 'School'
    | 'Pharmacy'
    | 'Store'
    | 'SportsActivityLocation'
    | 'CafeOrCoffeeShop'
    | 'Place'
  note?: string
}

/**
 * Hyperlocal destinations verified against primary sources (official sites, CCSD, city/county parks).
 * Used for crawlable HTML, schema ItemList, and map fallback when Places is unavailable.
 */
export const CURATED_NEARBY_PLACES: CuratedNearbyPlace[] = [
  {
    name: 'Silverstone Ranch Community Park',
    category: 'parks',
    schemaType: 'Park',
    sourceUrl: 'https://www.silverstoneranchhomes.com/amenities',
    note: 'On-site park with trails, courts, and playgrounds for residents (HOA-maintained).',
  },
  {
    name: 'Floyd Lamb Park at Tule Springs',
    category: 'parks',
    address: '9200 Tule Springs Rd, Las Vegas, NV 89131',
    schemaType: 'Park',
    sourceUrl: 'https://www.lasvegasnevada.gov/Residents/Parks-Facilities/Floyd-Lamb-Park',
    note: 'Regional park with fishing lagoons and picnic areas north of the community.',
  },
  {
    name: 'Craig Ranch Regional Park',
    category: 'parks',
    address: '628 W Craig Rd, North Las Vegas, NV 89032',
    schemaType: 'Park',
    sourceUrl: 'https://www.cityofnorthlasvegas.com/things-to-do/parks-and-recreation/parks/craig-ranch-regional-park',
    note: '170-acre regional park with sports courts, skate park, and open space.',
  },
  {
    name: "Smith's Marketplace",
    category: 'grocery',
    address: '7130 N Durango Dr, Las Vegas, NV 89149',
    schemaType: 'Store',
    sourceUrl:
      'https://www.smithsfoodanddrug.com/stores/grocery/nv/las-vegas/montecito-marketplace/706/00332',
  },
  {
    name: 'Whole Foods Market (Summerlin)',
    category: 'grocery',
    address: '2475 S Town Center Dr, Las Vegas, NV 89135',
    schemaType: 'Store',
    sourceUrl: 'https://www.wholefoodsmarket.com/stores/summerlin',
  },
  {
    name: 'Costco Wholesale (Summerlin)',
    category: 'grocery',
    address: '801 S Pavilion Center Dr, Las Vegas, NV 89144',
    schemaType: 'Store',
    sourceUrl: 'https://www.costco.com/warehouse-locations/las-vegas-summerlin-nv-685.html',
  },
  {
    name: 'Timbers Bar & Grill',
    category: 'restaurants',
    address: '7045 N Durango Dr, Las Vegas, NV 89149',
    schemaType: 'Restaurant',
    sourceUrl: 'https://timbersgaming.com/n-durango-dorrell/',
  },
  {
    name: 'Centennial Hills Hospital Medical Center',
    category: 'healthcare',
    address: '6900 N Durango Dr, Las Vegas, NV 89149',
    schemaType: 'Hospital',
    sourceUrl: 'https://www.centennialhillshospital.com/about/contact-us',
  },
  {
    name: "Thomas J. O'Roarke Elementary School",
    category: 'schools',
    address: "8455 O'Hare Rd, Las Vegas, NV 89143",
    schemaType: 'School',
    sourceUrl: 'https://www.oroarke-ccsd.net/',
    note: 'Typical CCSD assignment for many Silverstone Ranch addresses—verify zoning at ccsd.net/zoning before you offer.',
  },
  {
    name: 'Ralph Cadwallader Middle School',
    category: 'schools',
    address: '7775 Elkhorn Rd, Las Vegas, NV 89131',
    schemaType: 'School',
    sourceUrl: 'https://www.cadwalladerms.org/',
  },
  {
    name: 'Arbor View High School',
    category: 'schools',
    address: '7500 Whispering Sands Dr, Las Vegas, NV 89131',
    schemaType: 'School',
    sourceUrl: 'https://www.arborviewhs.org/apps/contact/',
  },
  {
    name: 'Centennial Hills YMCA',
    category: 'fitness',
    address: '6601 N Buffalo Dr, Las Vegas, NV 89131',
    schemaType: 'SportsActivityLocation',
    sourceUrl: 'https://lasvegasymca.org/locations/centennial-hills-ymca/',
  },
  {
    name: 'TPC Las Vegas',
    category: 'golf',
    address: '9851 Canyon Run Dr, Las Vegas, NV 89144',
    schemaType: 'GolfCourse',
    sourceUrl: 'https://tpc.com/lasvegas/contact-directions/',
    note: 'Public PGA TOUR course in Summerlin; Silverstone’s on-site course remains dormant.',
  },
  {
    name: "Smith's Pharmacy",
    category: 'pharmacies',
    address: '7130 N Durango Dr, Las Vegas, NV 89149',
    schemaType: 'Pharmacy',
    sourceUrl:
      'https://www.smithsfoodanddrug.com/stores/grocery/nv/las-vegas/montecito-marketplace/706/00332',
  },
]

export const NEARBY_COMMUTE_DESTINATIONS = [
  {
    name: 'Downtown Summerlin',
    approximateDrive: 'About 18 minutes off-peak via the 215 Beltway (approximate).',
  },
  {
    name: 'Las Vegas Strip resort corridor',
    approximateDrive: 'About 28–35 minutes depending on traffic (approximate).',
  },
  {
    name: 'Harry Reid International Airport',
    approximateDrive: 'About 32–40 minutes in typical traffic (approximate).',
  },
  {
    name: '215 Beltway (N Hualapai Way entrance)',
    approximateDrive: 'About 6 minutes from Silverstone Ranch (approximate).',
  },
] as const

export function curatedPlacesForCategory(category: AmenityCategoryId): CuratedNearbyPlace[] {
  return CURATED_NEARBY_PLACES.filter((place) => place.category === category)
}
