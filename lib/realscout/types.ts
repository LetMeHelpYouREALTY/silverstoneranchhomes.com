export type RealScoutProperty = {
  id: string
  display_price: string
  subtitle: string
  listing_status: string
  full_address: string
  image_url: string | null
  sold_date: string | null
  slug: string
}

export type RealScoutPropertiesResponse = {
  properties: RealScoutProperty[]
}

export type SilverstoneListing = {
  id: string
  name: string
  url: string
  description: string
  displayPrice: string
  price?: string
  address: string
  image?: string
  subtitle: string
  listingStatus: string
}
