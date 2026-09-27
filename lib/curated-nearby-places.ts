import type { AmenityCategoryId } from '@/lib/nearby-amenities-config'

export type CuratedNearbyPlace = {
  name: string
  category: AmenityCategoryId
  address: string
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
 * Verified nearby destinations cited on this site or from stable public listings.
 * Used for crawlable HTML, schema ItemList, and map fallback when the API key is absent.
 */
export const CURATED_NEARBY_PLACES: CuratedNearbyPlace[] = [
  {
    name: 'Silverstone Ranch Community Park',
    category: 'parks',
    address: 'Silverstone Ranch, Las Vegas, NV 89131',
    schemaType: 'Park',
    note: 'On-site six-acre park with trails, courts, and playgrounds for residents.',
  },
  {
    name: 'Floyd Lamb Park at Tule Springs',
    category: 'parks',
    address: '9200 Tule Springs Rd, Las Vegas, NV 89131',
    schemaType: 'Park',
    note: 'Regional park with fishing lagoons and picnic areas north of the community.',
  },
  {
    name: "Smith's Marketplace",
    category: 'grocery',
    address: '7151 N Durango Dr, Las Vegas, NV 89149',
    schemaType: 'Store',
  },
  {
    name: 'Whole Foods Market',
    category: 'grocery',
    address: '100 S Rainbow Blvd, Las Vegas, NV 89145',
    schemaType: 'Store',
  },
  {
    name: 'Costco Wholesale',
    category: 'grocery',
    address: '801 S Pavilion Center Dr, Las Vegas, NV 89144',
    schemaType: 'Store',
  },
  {
    name: 'The Stove NV',
    category: 'restaurants',
    address: '1980 Festival Plaza Dr, Las Vegas, NV 89135',
    schemaType: 'Restaurant',
  },
  {
    name: 'Firefly Tapas Kitchen & Bar',
    category: 'restaurants',
    address: '9560 W Sahara Ave, Las Vegas, NV 89117',
    schemaType: 'Restaurant',
  },
  {
    name: 'Tenaya Creek Brewery',
    category: 'restaurants',
    address: '8310 W Cheyenne Ave, Las Vegas, NV 89129',
    schemaType: 'Restaurant',
  },
  {
    name: 'Centennial Hills Hospital',
    category: 'healthcare',
    address: '6900 N Durango Dr, Las Vegas, NV 89149',
    schemaType: 'Hospital',
  },
  {
    name: "O'Roarke Elementary School",
    category: 'schools',
    address: '9474 Brent Ln, Las Vegas, NV 89131',
    schemaType: 'School',
    note: 'Typical CCSD assignment for Silverstone Ranch—verify zoning before you offer.',
  },
  {
    name: 'Cadwallader Middle School',
    category: 'schools',
    address: '7775 W Azure Dr, Las Vegas, NV 89128',
    schemaType: 'School',
  },
  {
    name: 'Arbor View High School',
    category: 'schools',
    address: '8101 W Patrick Ln, Las Vegas, NV 89149',
    schemaType: 'School',
  },
  {
    name: 'Centennial Hills YMCA',
    category: 'fitness',
    address: '6601 N Buffalo Dr, Las Vegas, NV 89131',
    schemaType: 'SportsActivityLocation',
  },
  {
    name: 'Las Vegas Paiute Golf Resort',
    category: 'golf',
    address: '10325 Nu-Wav Kaiv Blvd, Las Vegas, NV 89124',
    schemaType: 'GolfCourse',
    note: 'Public course in Northwest Las Vegas; Silverstone’s on-site course remains dormant.',
  },
  {
    name: 'PublicUs Centennial',
    category: 'cafes',
    address: '7180 N Durango Dr, Las Vegas, NV 89149',
    schemaType: 'CafeOrCoffeeShop',
  },
  {
    name: 'Centennial Center',
    category: 'shopping',
    address: '7051 N Durango Dr, Las Vegas, NV 89149',
    schemaType: 'Store',
  },
  {
    name: 'CVS Pharmacy',
    category: 'pharmacies',
    address: '7180 N Durango Dr, Las Vegas, NV 89149',
    schemaType: 'Pharmacy',
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
