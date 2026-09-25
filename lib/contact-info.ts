/** Google Business Profile–aligned business identity (single source of truth for NAP / GEO). */
export const CONTACT_INFO = {
  businessName: 'Silverstone Ranch Real Estate | Homes by Dr. Jan Duffy',
  agentName: 'Dr. Jan Duffy',
  brokerage: 'Berkshire Hathaway HomeServices',
  license: 'S.0197614.LLC',
  /** Full GBP “From the business” description (visible + meta where appropriate). */
  gbpDescription:
    'Who is the top real estate specialist in Silverstone Ranch and Northwest Las Vegas? I focus on neighborhoods like Silverstone Ranch, Tule Springs, and Centennial Hills. Looking for gated communities like The Palms or non-gated areas like Amberly and Greenfield? I provide expert, data-driven advice to help you buy or sell your home. Let me guide you to achieve your real estate goals with local market expertise and personalized solutions.',
  /** ISO 8601 date the business opened (GBP). */
  foundingDate: '1993-09-20',
  phone: {
    display: '(702) 500-1530',
    tel: '7025001530',
    international: '+1-702-500-1530',
  },
  email: 'DrDuffySells@SilverStoneRanchHomes.com',
  chat: {
    label: 'Chat',
    url: '/request-info#chat',
  },
  website: {
    url: 'https://www.silverstoneranchhomes.com/',
    base: 'https://www.silverstoneranchhomes.com',
    display: 'SilverstoneRanchHomes.com',
  },
  address: {
    street: '8721 Deering Bay Dr',
    city: 'Las Vegas',
    state: 'NV',
    postalCode: '89131',
    country: 'US',
    display: '8721 Deering Bay Dr, Las Vegas, NV 89131',
  },
  /**
   * Google Business Profile / Maps engagement URLs.
   * Place ID verified via Google Business Profile Business Information API (Sep 2026).
   */
  gbp: {
    placeId: 'ChIJ4XFjBbAyMygR_HWWIFui-Ig',
    cid: '9869817095654897148',
    mapsSearchUrl:
      'https://www.google.com/maps/search/?api=1&query=Silverstone%20Ranch%20Real%20Estate%20%7C%20Homes%20by%20Dr.%20Jan%20Duffy%2C%208721%20Deering%20Bay%20Dr%2C%20Las%20Vegas%2C%20NV%2089131&query_place_id=ChIJ4XFjBbAyMygR_HWWIFui-Ig',
    mapsUri: 'https://maps.google.com/maps?cid=9869817095654897148',
    directionsUrl:
      'https://www.google.com/maps/dir/?api=1&destination=8721%20Deering%20Bay%20Dr%2C%20Las%20Vegas%2C%20NV%2089131&destination_place_id=ChIJ4XFjBbAyMygR_HWWIFui-Ig',
    reviewsUrl: 'https://search.google.com/local/reviews?placeid=ChIJ4XFjBbAyMygR_HWWIFui-Ig',
    writeReviewUrl: 'https://search.google.com/local/writereview?placeid=ChIJ4XFjBbAyMygR_HWWIFui-Ig',
  },
  socialProfiles: [
    {
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/company/centennialhills/',
    },
    {
      label: 'Facebook',
      url: 'https://www.facebook.com/SilverstoneRanchHomes',
    },
  ],
  /** Service areas from Google Business Profile (hyperlocal GEO). */
  serviceAreas: [
    'North Las Vegas, NV',
    'Tule Springs, Las Vegas, NV',
    'Centennial Hills, Las Vegas, NV',
    'Four Winds, Las Vegas, NV 89131',
    'Wyeth Ranch, Las Vegas, NV 89131',
    'Carmel Canyon, Las Vegas, NV 89131',
    'Carriage Park, Las Vegas, NV 89131',
    'Whisper Creek, Las Vegas, NV 89131',
    'Stone Mountain, Las Vegas, NV 89131',
    'San Marino Circle, Las Vegas, NV 89131',
    'Silverstone Ranch, Las Vegas, NV 89131',
    'Canyon Mist Estates, Las Vegas, NV 89131',
    'Iron Mountain Ranch, Las Vegas, NV 89131',
    'Astoria Trails North, Las Vegas, NV 89143',
    'Astoria Trails South, Las Vegas, NV 89143',
    'Iron Mountain Estates, Las Vegas, NV 89131',
    'The Meadows At Elkhorn Springs, Las Vegas, NV 89131',
  ],
  /** Languages offered (GBP). */
  languagesOffered: ['English', 'Spanish', 'Russian'],
  /**
   * Default weekly hours (GBP). 8:00 AM–8:00 PM every day (Monday–Sunday).
   */
  businessHours: {
    opens: '08:00',
    closes: '20:00',
    /** Human-readable label for visible UI (matches opens/closes). */
    display: '8:00 AM – 8:00 PM',
    /** Schema.org dayOfWeek values used in JSON-LD. */
    dayOfWeek: [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday',
    ],
  },
  /** One-off closures (visible on Contact; note in copy). */
  specialClosures: [{ date: '2026-04-05', label: 'Easter — Closed' }],
  /** GBP business attributes (only if accurate in your live GBP). */
  gbpAttributes: {
    womenOwned: true,
    veteranOwned: true,
    wheelchairAccessibleParking: true,
    wheelchairAccessibleEntrance: true,
    offersOnlineAppointments: true,
  },
}
