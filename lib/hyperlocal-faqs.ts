import { CONTACT_INFO } from './contact-info'
import { ASSIGNED_SCHOOLS, MARKET_SNAPSHOT } from './market-data'

/** Shared FAQ entries for Silverstone Ranch realtor services (89131). */
export const HOMEPAGE_FAQS = [
  {
    question: 'Who is the best REALTOR® for Silverstone Ranch in Las Vegas?',
    answer: `${CONTACT_INFO.agentName} specializes in Silverstone Ranch (${MARKET_SNAPSHOT.zipCode}) buyer and seller representation—guard-gate tours, HOA document review, golf course disclosures, and data-driven pricing for Centennial Hills.`,
  },
  {
    question: 'How competitive is Silverstone Ranch compared to other guard-gated communities?',
    answer: `${MARKET_SNAPSHOT.reportMonth} absorption rates show Silverstone homes closing in ${MARKET_SNAPSHOT.daysOnMarket} versus 18–21 days in comparable north valley enclaves. Limited inventory and relocation demand keep negotiations brisk.`,
  },
  {
    question: 'What should I budget for post-closing enhancements in Silverstone Ranch?',
    answer:
      'Allocate funds for desert landscaping refreshes ($8K–$15K), smart irrigation controllers ($1K–$2K), and HVAC optimization ($500–$1,200). These upgrades improve comfort and resale value in the 89131 microclimate.',
  },
  {
    question: 'How can I stay informed about Silverstone Ranch golf course developments?',
    answer: `Subscribe to ${CONTACT_INFO.agentName}'s quarterly golf course briefings, monitor City of Las Vegas planning agendas, and attend HOA town halls before you remove contingencies.`,
  },
] as const

export const HOMES_FOR_SALE_FAQS = [
  {
    question: 'How do I tour guard-gated homes in Silverstone Ranch?',
    answer: `Contact ${CONTACT_INFO.agentName} to schedule a private tour. You will need a valid ID at the gate; your agent coordinates visitor access with HOA security for The Palms, Silverlake, and other gated enclaves.`,
  },
  {
    question: 'Are pocket listings available in Silverstone Ranch?',
    answer: `Yes. Qualified buyers working with ${CONTACT_INFO.agentName} receive alerts for off-market and coming-soon inventory across Pinehurst, Tuscany, Amberly, and other Silverstone villages before public MLS exposure.`,
  },
  {
    question: 'What is the median home price in Silverstone Ranch (89131)?',
    answer: `As of ${MARKET_SNAPSHOT.reportMonth}, the median sale price is ${MARKET_SNAPSHOT.medianPrice} (${MARKET_SNAPSHOT.medianPriceYoY} year-over-year) with ${MARKET_SNAPSHOT.activeListings} active listings.`,
  },
  {
    question: 'How fast do homes move under $700K in Silverstone Ranch?',
    answer:
      'Homes priced between $630K and $700K often attract multiple offers within the first week in Centennial Hills. Dr. Duffy recommends touring immediately when Silverstone Ranch listing alerts hit your inbox.',
  },
  {
    question: 'Can I negotiate if the home backs dormant golf course land?',
    answer:
      'Yes. Buyers often secure landscaping credits, fencing allowances, or price adjustments. Documented golf course status and HOA resale packages are part of due diligence for every 89131 offer.',
  },
  {
    question: 'Are there rental restrictions in Silverstone Ranch?',
    answer:
      'Silverstone Ranch typically requires a minimum six-month lease, HOA approval, and guard-gate registration. Investors should review master and sub-association bylaws before writing offers.',
  },
  {
    question: 'What about insurance considerations for Silverstone Ranch homes?',
    answer:
      'Insurance premiums vary based on heat and wind mitigation. Work with carriers that recognize Silverstone’s lower wildfire and flood risk compared to western valley communities in Northwest Las Vegas.',
  },
] as const

export const CONTACT_FAQS = [
  {
    question: 'Can I schedule a private Silverstone Ranch tour outside of business hours?',
    answer: `Yes. The ${CONTACT_INFO.businessName} team arranges private tours and virtual walk-throughs around your schedule, including evenings and weekends in ZIP 89131.`,
  },
  {
    question: 'Do you offer relocation assistance for Silverstone Ranch buyers?',
    answer: `${CONTACT_INFO.agentName} provides concierge relocation support—lender introductions, guard gate registration, school resources, and vendor coordination for Centennial Hills moves.`,
  },
  {
    question: 'How quickly will I receive a response from Dr. Jan Duffy?',
    answer:
      'Expect a personal reply within the same business day. Urgent Silverstone Ranch listing or valuation inquiries are typically answered within two hours.',
  },
] as const

export const AGENT_FAQS = [
  {
    question: 'Does Dr. Jan Duffy only work in Silverstone Ranch?',
    answer: `${CONTACT_INFO.agentName} focuses on Silverstone Ranch and Northwest Las Vegas—including Centennial Hills, Tule Springs, Iron Mountain Ranch, and nearby 89131/89143 subdivisions—for hyperlocal buyer and seller representation.`,
  },
  {
    question: 'What credentials does Dr. Jan Duffy hold?',
    answer: `${CONTACT_INFO.agentName} is a Nevada REALTOR® (License ${CONTACT_INFO.license}) with ${CONTACT_INFO.brokerage}, recognized in the Berkshire Hathaway Circle of Excellence for top Las Vegas production.`,
  },
  {
    question: 'Can Dr. Jan Duffy help with HOA documents in Silverstone Ranch?',
    answer: 'Yes. Buyer and seller clients receive plain-language review of master and sub-association budgets, CC&Rs, reserve studies, and golf course assessment history before offers and listing launch.',
  },
  {
    question: 'How does Dr. Duffy uncover off-market opportunities?',
    answer:
      'Through long-standing relationships with Silverstone homeowners, HOA stakeholders, and relocation partners, Dr. Duffy is notified of upcoming listings weeks in advance. Clients receive private preview windows before homes hit the MLS.',
  },
  {
    question: 'What does the concierge team handle during escrow?',
    answer:
      'Inspection scheduling, appraisal coordination, repair negotiation, HOA document review, contractor bids, lender communication, and weekly milestone reporting so buyers and sellers stay confident.',
  },
  {
    question: 'Can Dr. Duffy help with new construction near Silverstone?',
    answer:
      'Yes. She negotiates builder incentives, monitors construction milestones, and aligns move-in timelines with the sale or purchase of Silverstone properties to minimize double moves and carrying costs.',
  },
] as const

export const BOOK_TOUR_FAQS = [
  {
    question: 'What do I need to tour guard-gated homes in Silverstone Ranch?',
    answer: `Bring a valid government-issued photo ID. ${CONTACT_INFO.agentName} pre-registers your visit with HOA security for The Palms, Silverlake, and other gated enclaves in ZIP 89131.`,
  },
  {
    question: 'Can I tour Silverstone Ranch virtually before visiting Las Vegas?',
    answer: `Yes. ${CONTACT_INFO.agentName} offers live video walk-throughs, Matterport-style previews, and neighborhood drive-bys so out-of-state buyers can shortlist 89131 homes before flying in.`,
  },
  {
    question: 'How far in advance should I book a Silverstone Ranch tour?',
    answer:
      'Book at least 48 hours ahead for guard-gate coordination. Peak weekends in Centennial Hills fill quickly—same-week tours are often available on weekdays.',
  },
] as const

export const HOME_VALUATION_FAQS = [
  {
    question: 'How accurate is a Silverstone Ranch home valuation?',
    answer: `${CONTACT_INFO.agentName} blends MLS sold data, enclave-specific comps (The Palms, Pinehurst, Amberly), and current buyer demand for 89131 to produce a pricing range—not a generic Zestimate.`,
  },
  {
    question: 'What affects home value in Silverstone Ranch?',
    answer:
      'Guard-gated vs non-gated enclave, golf course frontage, remodel quality, HOA tier, lot orientation, and days-on-market trends in Centennial Hills all influence list price and net proceeds.',
  },
  {
    question: 'Is the Silverstone Ranch valuation free?',
    answer: `Yes. Sellers and curious homeowners receive a complimentary market analysis from ${CONTACT_INFO.agentName} with recommended list price, staging notes, and a launch timeline.`,
  },
] as const

export const REQUEST_INFO_FAQS = [
  {
    question: 'What information can I request about Silverstone Ranch?',
    answer: `Relocation kits, HOA fee breakdowns, school boundary notes, golf course status updates, listing alerts, and buyer or seller strategy sessions tailored to 89131.`,
  },
  {
    question: 'How fast will I receive Silverstone Ranch market intel?',
    answer: `Most concierge requests receive a personalized reply the same business day. Urgent listing or valuation questions are typically answered within two hours.`,
  },
  {
    question: 'Can I request info if I am not ready to buy yet?',
    answer:
      'Absolutely. Many Centennial Hills buyers start 6–12 months ahead. Early intel on inventory, HOA reserves, and enclave fit helps you act quickly when the right Silverstone home appears.',
  },
] as const

export const MAP_FAQS = [
  {
    question: 'Where is Silverstone Ranch located in Las Vegas?',
    answer:
      'Silverstone Ranch sits in Northwest Las Vegas (ZIP 89131) in Centennial Hills, bordered by the 215 Beltway, Floyd Lamb Park, and Spring Mountain views—about 25 minutes from the Las Vegas Strip.',
  },
  {
    question: 'How do I get to Silverstone Ranch from the airport?',
    answer:
      'From Harry Reid International Airport, take I-215 west to Centennial Hills—typically 25–35 minutes depending on traffic. Dr. Jan Duffy provides relocation drive-time maps for commuting buyers.',
  },
  {
    question: 'What is near Silverstone Ranch?',
    answer:
      'Centennial Center shopping, Centennial Hills Hospital, CCSD schools, Floyd Lamb Park, Tule Springs Fossil Beds, and quick 215 Beltway access to Summerlin and the Strip.',
  },
] as const

export const PHOTOS_FAQS = [
  {
    question: 'What architectural styles are common in Silverstone Ranch?',
    answer:
      'Mediterranean and desert contemporary designs dominate—stucco exteriors, tile roofs, courtyard entries, and indoor-outdoor living suited to the 89131 climate.',
  },
  {
    question: 'Can I see interior photos before touring Silverstone Ranch homes?',
    answer: `${CONTACT_INFO.agentName} shares MLS photography, virtual tours, and private preview galleries for active Silverstone listings before scheduling guard-gate access.`,
  },
] as const

export const VIDEO_FAQS = [
  {
    question: 'Are virtual tours available for Silverstone Ranch homes?',
    answer: `Yes. ${CONTACT_INFO.agentName} coordinates video walk-throughs, drone neighborhood overviews, and live FaceTime tours for buyers relocating to Centennial Hills.`,
  },
  {
    question: 'Can I tour Silverstone Ranch amenities on video?',
    answer:
      'Community park, trail, and enclave drive-through videos help out-of-state buyers compare guard-gated vs non-gated villages before visiting 89131 in person.',
  },
] as const

export const PRICE_FEATURES_FAQS = [
  {
    question: 'What price range are Silverstone Ranch homes in 2026?',
    answer: `As of ${MARKET_SNAPSHOT.reportMonth}, Silverstone Ranch homes span roughly ${MARKET_SNAPSHOT.priceRange} with a ${MARKET_SNAPSHOT.medianPrice} median in ZIP 89131.`,
  },
  {
    question: 'What features do Silverstone Ranch buyers want most?',
    answer:
      'Pool-ready yards, single-story layouts, upgraded kitchens, smart-home wiring, golf course or mountain views, and guard-gated privacy in The Palms or Silverlake enclaves.',
  },
  {
    question: 'How do HOA fees vary by Silverstone Ranch enclave?',
    answer: `Non-gated villages start near $200/mo total; guard-gated enclaves like The Palms run higher. ${CONTACT_INFO.agentName} breaks down master and sub-association dues before you write an offer.`,
  },
] as const

export const RESOURCES_FAQS = [
  {
    question: 'What real estate resources are available for Silverstone Ranch buyers?',
    answer:
      'HOA fee guides, school boundary references, market reports, buyer checklists, environmental risk briefs, and golf course status updates—all curated for Northwest Las Vegas (89131).',
  },
  {
    question: 'Where can I find Silverstone Ranch HOA fee information?',
    answer:
      'See the dedicated Silverstone Ranch HOA guide for master and sub-association dues, amenity access, CAMCO contacts, and resale package requirements.',
  },
] as const

export const HOA_GUIDE_FAQS = [
  {
    question: 'How much are HOA fees in Silverstone Ranch?',
    answer: `Master HOA plus sub-association dues typically range ${MARKET_SNAPSHOT.hoaRange} depending on enclave—non-gated villages near $200/mo; guard-gated enclaves higher.`,
  },
  {
    question: 'Who manages Silverstone Ranch HOA?',
    answer:
      'CAMCO Management administers master and many sub-associations. Buyers should review resale packages, reserve studies, and golf course assessment history during due diligence.',
  },
  {
    question: 'Are Silverstone Ranch amenities included in HOA fees?',
    answer:
      'Master HOA covers community park, trails, and shared infrastructure. Guard gates, pools, and courts may require additional sub-association dues—confirm in your resale package.',
  },
] as const

export const AMENITIES_FAQS = [
  {
    question: 'What amenities does Silverstone Ranch offer?',
    answer:
      'Silverstone Ranch features staffed guard gates (in select enclaves), a six-acre community park, walking trails, tennis and pickleball courts, picnic areas, and HOA-coordinated seasonal events across the master plan.',
  },
  {
    question: 'Are Silverstone Ranch pools and courts open to all residents?',
    answer:
      'Amenity access depends on your sub-association and master HOA membership. Confirm guest policies, reservation requirements, and hours in your resale package or with CAMCO Management.',
  },
  {
    question: 'What schools serve Silverstone Ranch homes?',
    answer: `Most Silverstone Ranch addresses zone to ${ASSIGNED_SCHOOLS.elementary}, ${ASSIGNED_SCHOOLS.middle}, and ${ASSIGNED_SCHOOLS.high}. ${ASSIGNED_SCHOOLS.note}`,
  },
] as const

export const MARKET_INSIGHTS_FAQS = [
  {
    question: "Is Silverstone Ranch a buyer's or seller's market in 2026?",
    answer: `${MARKET_SNAPSHOT.reportMonth} data shows a balanced-to-seller-leaning market: ${MARKET_SNAPSHOT.daysOnMarket} average DOM, ${MARKET_SNAPSHOT.listToSaleRatio} list-to-sale ratio, and tight guard-gated inventory under 25 active homes.`,
  },
  {
    question: 'Which Silverstone Ranch enclave appreciates fastest?',
    answer:
      'Renovated single-story homes in The Palms and Silverlake often lead appreciation, while Pinehurst townhomes attract investors. Enclave-level comps vary—request a micro-market brief for your target village.',
  },
  {
    question: 'How does the closed golf course affect Silverstone Ranch home values?',
    answer:
      'Buyers factor golf course deed restrictions and landscaping into offers. Transparent disclosure and strategic pricing help sellers minimize discounts; buyers may negotiate landscaping credits.',
  },
  {
    question: 'Will the dormant golf course impact my Silverstone Ranch property value?',
    answer:
      'Buyers still pay premiums for guard-gated access, school zoning, and remodeled interiors. Pricing models separate golf frontage value until redevelopment plans or landscaping enhancements are confirmed.',
  },
  {
    question: 'Are price reductions expected in Silverstone Ranch heading into 2026?',
    answer:
      'Inventory remains constrained and migration from California and Nevada job hubs continues. Expect moderate appreciation with stronger competition for move-in-ready properties in Centennial Hills.',
  },
  {
    question: 'How can I position my offer to win in Silverstone Ranch?',
    answer:
      'Pair strong financing or cash reserves with appraisal gap coverage, flexible closing dates, and clear HOA compliance assurances. Dr. Jan Duffy crafts competitive yet protected offers for every 89131 scenario.',
  },
] as const

export const SCHOOLS_FAQS = [
  {
    question: 'What school district serves Silverstone Ranch?',
    answer: `Silverstone Ranch (89131) is served by the Clark County School District (CCSD). Most addresses zone to ${ASSIGNED_SCHOOLS.elementary}, ${ASSIGNED_SCHOOLS.middle}, and ${ASSIGNED_SCHOOLS.high}. ${ASSIGNED_SCHOOLS.note}`,
  },
  {
    question: 'Are there private school options near Silverstone Ranch?',
    answer:
      'Northwest Las Vegas offers private options including Faith Lutheran Middle & High School, The Meadows School, and Alexander Dawson School. Many Centennial Hills families also consider charter lottery schools.',
  },
  {
    question: 'How do I enroll my child in a Silverstone Ranch area school?',
    answer:
      'Enrollment typically requires proof of residency, birth certificate, immunization records, and previous transcripts. Dr. Jan Duffy provides relocation families with CCSD enrollment assistance and boundary verification.',
  },
  {
    question: 'What are the school ratings for Silverstone Ranch area schools?',
    answer: `${ASSIGNED_SCHOOLS.elementary}, ${ASSIGNED_SCHOOLS.middle}, and ${ASSIGNED_SCHOOLS.high} generally rate 7–8/10 on GreatSchools.org. Verify current ratings and boundaries before you remove contingencies.`,
  },
  {
    question: 'Are there charter school options in Northwest Las Vegas?',
    answer: `${ASSIGNED_SCHOOLS.charterOption} is a popular lottery option. Dr. Jan Duffy helps relocation families compare charter, private, and CCSD zoned schools for their Silverstone Ranch address.`,
  },
] as const
