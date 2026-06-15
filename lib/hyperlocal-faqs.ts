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
