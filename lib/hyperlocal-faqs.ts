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
] as const
