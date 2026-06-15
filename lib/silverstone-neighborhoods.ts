/** Silverstone Ranch sub-association pages — copy aligned with site-wide community descriptions. */

export type NeighborhoodSlug = 'pinehurst' | 'the-palms' | 'tuscany' | 'silverlake' | 'eastpoint' | 'amberly'

export const NEIGHBORHOOD_SLUGS: NeighborhoodSlug[] = [
  'pinehurst',
  'the-palms',
  'tuscany',
  'silverlake',
  'eastpoint',
  'amberly',
]

export type NeighborhoodPageContent = {
  slug: NeighborhoodSlug
  /** Short `metadata.title` segment (root layout adds `| ${businessName}`). */
  titleSegment: string
  metaDescription: string
  h1: string
  intro: string
  sections: { heading: string; body: string }[]
  bullets: string[]
  faqs: { question: string; answer: string }[]
}

const neighborhoodPages: Record<NeighborhoodSlug, NeighborhoodPageContent> = {
  pinehurst: {
    slug: 'pinehurst',
    titleSegment: 'Pinehurst Townhomes',
    metaDescription:
      'Pinehurst at Silverstone Ranch: gated townhome villas near Centennial Hills, Northwest Las Vegas. Lock-and-leave living, HOA-managed maintenance, and local expertise from Dr. Jan Duffy.',
    h1: 'Pinehurst | Silverstone Ranch Townhome Villas',
    intro:
      'Pinehurst blends lock-and-leave convenience with Silverstone Ranch charm. This gated enclave sits along the former golf corridors in Northwest Las Vegas—ideal for buyers who want low-maintenance living without leaving the master plan.',
    sections: [
      {
        heading: 'Homes & lifestyle',
        body:
          'Pinehurst offers two-story townhomes with attached garages and outdoor space oriented for sunrise and sunset views. HOA-managed exterior maintenance appeals to busy professionals, seasonal residents, and investors who want predictable upkeep inside a guard-gated master community.',
      },
      {
        heading: 'HOA & sub-association context',
        body:
          'Silverstone Ranch uses a master association plus sub-associations (including Pinehurst) that add rules, dues, and maintenance scope. Always review the latest budgets, CC&Rs, and resale packages before you offer—Dr. Duffy helps buyers and sellers interpret HOA documents in plain language.',
      },
      {
        heading: 'Is Pinehurst the right fit?',
        body:
          'Buyers who prioritize walkable connections to trails and parks, quick access to Centennial Hills services, and a turnkey townhome footprint often gravitate here. Compare Pinehurst with non-gated villages or larger single-family pockets once you have a short list of must-haves.',
      },
    ],
    bullets: [
      'Gated townhome enclave within Silverstone Ranch',
      'Strong match for lock-and-leave and investment strategies',
      'Hyperlocal tours with HOA and disclosure context',
    ],
    faqs: [
      {
        question: 'Where is Pinehurst within Silverstone Ranch?',
        answer:
          'Pinehurst is a gated townhome neighborhood inside the Silverstone Ranch master plan in Northwest Las Vegas (ZIP 89131). It sits near the former golf corridors with trail connections to the broader community.',
      },
      {
        question: 'What should I verify before buying in Pinehurst?',
        answer:
          'Review master and sub-association dues, rental restrictions (if applicable), parking rules, and any pending special assessments. Your purchase contract should include time to approve HOA documents.',
      },
      {
        question: 'Can Dr. Jan Duffy show Pinehurst homes and nearby alternatives?',
        answer:
          'Yes. Tours typically include Pinehurst listings plus comparable Silverstone villages—such as The Palms or non-gated enclaves—so you can compare lifestyle, fees, and resale dynamics side by side.',
      },
    ],
  },
  'the-palms': {
    slug: 'the-palms',
    titleSegment: 'The Palms Estates',
    metaDescription:
      'The Palms at Silverstone Ranch: guard-gated estate homes in Northwest Las Vegas. Privacy, larger lots, and community park access—buyer and seller guidance from Dr. Jan Duffy.',
    h1: 'The Palms | Guard-Gated Silverstone Ranch Estates',
    intro:
      'The Palms anchors the Silverstone Ranch guard-gated core with estate-style homes, privacy-oriented landscaping, and a short walk to the community park. It is a strong match for buyers who want presence and curb appeal within the master plan.',
    sections: [
      {
        heading: 'Homes & lifestyle',
        body:
          'The Palms features larger single-family homes with deep setbacks, private courtyards, and flexible layouts—including options that work for multi-generational households. Professional landscaping and single-access entry reinforce a quiet, residential feel.',
      },
      {
        heading: 'HOA & sub-association context',
        body:
          'Expect master HOA dues plus a Palms sub-association layer that may cover enhanced landscaping, front-yard standards, or shared amenities. Dr. Duffy coordinates disclosure review so you understand what is covered before you finalize price and timeline.',
      },
      {
        heading: 'Who thrives in The Palms?',
        body:
          'Households that value guard-gated privacy, room for outdoor living, and proximity to Silverstone’s trails and park often shortlist The Palms. Compare with Tuscany or Pinehurst if you are weighing cottages, townhomes, or different fee structures.',
      },
    ],
    bullets: [
      'Guard-gated core within Silverstone Ranch',
      'Estate-style homes with strong curb appeal',
      'Walkable ties to community parks and trails',
    ],
    faqs: [
      {
        question: 'What makes The Palms different from other Silverstone villages?',
        answer:
          'The Palms is positioned as a guard-gated core neighborhood with estate-scale homes and privacy-oriented landscaping. Exact dues and rules differ from Tuscany, Pinehurst, and non-gated villages—always compare current HOA packages.',
      },
      {
        question: 'How competitive is inventory in The Palms?',
        answer:
          'Inventory varies by season and price band. Dr. Duffy tracks new listings, price reductions, and off-market opportunities for qualified buyers and can align your offer strategy with recent comparable sales.',
      },
      {
        question: 'Does Dr. Duffy help sellers in The Palms?',
        answer:
          'Yes. Listing strategy includes pricing, presentation, disclosure preparation, and marketing that highlights the Palms lifestyle for relocation and local buyers.',
      },
    ],
  },
  tuscany: {
    slug: 'tuscany',
    titleSegment: 'Tuscany & The Cottages',
    metaDescription:
      'Tuscany & The Cottages at Silverstone Ranch: gated Northwest Las Vegas homes with community green space and front-yard maintenance options—tours and local insight from Dr. Jan Duffy.',
    h1: 'Tuscany & The Cottages | Silverstone Ranch',
    intro:
      'Tuscany & The Cottages delivers gated streets, front-yard maintenance in many pockets, and flexible floor plans within Silverstone Ranch. Pocket greens and community gathering spaces reinforce a neighborhood feel while keeping you inside the master plan’s amenities.',
    sections: [
      {
        heading: 'Homes & lifestyle',
        body:
          'Tuscany appeals to buyers who want a single-family or cottage-style footprint with less exterior hassle than a fully custom estate. Community gardens, bocce, and small event spaces show up across marketing materials—confirm what is active today during your tour.',
      },
      {
        heading: 'HOA & sub-association context',
        body:
          'Tuscany carries its own sub-association expectations alongside the master Silverstone HOA. Review architectural guidelines, maintenance responsibilities, and any club or landscape assessments with your agent before you remove contingencies.',
      },
      {
        heading: 'Compare before you commit',
        body:
          'If Tuscany is on your list, tour The Palms for larger estates and Pinehurst for townhomes in the same master plan. Seeing multiple villages helps you align budget, dues, and lifestyle in one trip.',
      },
    ],
    bullets: [
      'Gated Tuscany & cottage-style options within Silverstone',
      'Community green space and walkable connections',
      'Side-by-side comparison tours with other Silverstone villages',
    ],
    faqs: [
      {
        question: 'What is included in Tuscany HOA maintenance?',
        answer:
          'Coverage varies by plat and phase. Typical items to verify include front-yard landscaping, irrigation, exterior paint cycles, and common-area maintenance. Request the current budget and reserve study with your resale package.',
      },
      {
        question: 'Are cottages and Tuscany homes the same HOA?',
        answer:
          'Marketing often groups Tuscany and The Cottages. Specific dues and rules can differ by tract—treat each listing’s disclosures as authoritative and compare line by line.',
      },
      {
        question: 'Can I tour Tuscany on the same day as other Silverstone neighborhoods?',
        answer:
          'Yes. Dr. Jan Duffy routinely schedules multi-village tours so you can experience Silverstone’s guard gates, trails, and amenities in one visit.',
      },
    ],
  },
  silverlake: {
    slug: 'silverlake',
    titleSegment: 'Silverlake | Guard-Gated Homes',
    metaDescription:
      'Silverlake at Silverstone Ranch: guard-gated single-family homes in Northwest Las Vegas (89131). Estate lots, privacy, and local buyer/seller guidance from Dr. Jan Duffy.',
    h1: 'Silverlake | Guard-Gated Silverstone Ranch Homes',
    intro:
      'Silverlake is one of Silverstone Ranch’s guard-gated enclaves, offering larger single-family homes with privacy-oriented landscaping and direct access to community trails and parks in Centennial Hills.',
    sections: [
      {
        heading: 'Homes & lifestyle',
        body:
          'Silverlake features Mediterranean and desert-modern floor plans from the Pulte era (roughly 1,600–3,800 sq ft). Buyers value deep setbacks, three-car garages, and cul-de-sac locations that minimize through traffic while staying inside the master plan.',
      },
      {
        heading: 'HOA & sub-association context',
        body:
          'Silverlake carries master Silverstone HOA dues plus a sub-association layer for enhanced gate security and shared landscape standards. Review architectural guidelines, rental caps, and reserve studies with your agent before you offer.',
      },
      {
        heading: 'Compare Silverlake with nearby enclaves',
        body:
          'Tour The Palms for similar guard-gated estate living, Eastpoint for non-gated alternatives, or Pinehurst if you prefer lock-and-leave townhomes—all within the same Silverstone master plan.',
      },
    ],
    bullets: [
      'Guard-gated Silverlake enclave in ZIP 89131',
      'Single-family homes with estate-scale lots',
      'Hyperlocal pricing and HOA guidance from Dr. Jan Duffy',
    ],
    faqs: [
      {
        question: 'Is Silverlake guard-gated?',
        answer:
          'Yes. Silverlake is a guard-gated neighborhood within Silverstone Ranch. Visitors need agent coordination and valid ID at the gate for private showings.',
      },
      {
        question: 'What is the typical price range in Silverlake?',
        answer:
          'As of June 2026, Silverlake homes typically range from the mid-$600s to $1M+ depending on renovation level, lot size, and golf-course proximity. Request a current CMA for your target criteria.',
      },
      {
        question: 'Does Dr. Jan Duffy represent Silverlake buyers and sellers?',
        answer:
          'Yes. Dr. Jan Duffy provides buyer tours, listing strategy, disclosure preparation, and negotiation tailored to Silverlake and other Silverstone enclaves.',
      },
    ],
  },
  eastpoint: {
    slug: 'eastpoint',
    titleSegment: 'Eastpoint | Silverstone Ranch Village',
    metaDescription:
      'Eastpoint at Silverstone Ranch: non-gated Northwest Las Vegas homes in 89131. Family-friendly streets, master-plan amenities, and REALTOR® guidance from Dr. Jan Duffy.',
    h1: 'Eastpoint | Silverstone Ranch Village Homes',
    intro:
      'Eastpoint offers non-gated single-family living inside the Silverstone Ranch master plan—ideal for buyers who want community amenities and CCSD school access without guard-gate logistics.',
    sections: [
      {
        heading: 'Homes & lifestyle',
        body:
          'Eastpoint includes a mix of one- and two-story Pulte floor plans with desert landscaping and proximity to the six-acre community park. Families appreciate walkable connections to trails and quick drives to Centennial Hills retail.',
      },
      {
        heading: 'HOA & value proposition',
        body:
          'Eastpoint homeowners pay master Silverstone HOA dues without a guard-gate sub-association premium. Compare total monthly carrying costs against The Palms or Silverlake when budgeting.',
      },
      {
        heading: 'Who should consider Eastpoint?',
        body:
          'Buyers prioritizing value, straightforward guest access, and family-oriented streets often shortlist Eastpoint. Compare with Amberly and Greenfield for similar non-gated footprints.',
      },
    ],
    bullets: [
      'Non-gated village within Silverstone Ranch 89131',
      'Access to parks, trails, and master-plan amenities',
      'Side-by-side tours with gated and non-gated enclaves',
    ],
    faqs: [
      {
        question: 'How is Eastpoint different from guard-gated Silverstone neighborhoods?',
        answer:
          'Eastpoint has no guard gate, which simplifies guest access and may reduce sub-association fees. You still benefit from master HOA amenities, trails, and Silverstone branding.',
      },
      {
        question: 'What schools serve Eastpoint homes?',
        answer:
          'Most Eastpoint addresses zone to O’Roarke Elementary, Cadwallader Middle, and Arbor View High. Verify current CCSD boundaries before you offer.',
      },
      {
        question: 'Can I tour Eastpoint and gated enclaves the same day?',
        answer:
          'Yes. Dr. Jan Duffy schedules multi-village Silverstone tours so you can compare Eastpoint with The Palms, Silverlake, or Pinehurst in one visit.',
      },
    ],
  },
  amberly: {
    slug: 'amberly',
    titleSegment: 'Amberly | Gated Silverstone Enclave',
    metaDescription:
      'Amberly at Silverstone Ranch: gated Northwest Las Vegas homes in 89131. Privacy, community amenities, and expert buyer/seller representation from Dr. Jan Duffy.',
    h1: 'Amberly | Gated Silverstone Ranch Enclave',
    intro:
      'Amberly is a gated village within Silverstone Ranch, popular with buyers seeking controlled access, cohesive streetscapes, and proximity to Centennial Hills services without leaving the master plan.',
    sections: [
      {
        heading: 'Homes & lifestyle',
        body:
          'Amberly offers single-family homes with desert-modern and traditional elevations. Lot sizes and floor plans vary by phase—confirm square footage, bed/bath counts, and garage configuration on each listing.',
      },
      {
        heading: 'HOA considerations',
        body:
          'Amberly includes sub-association rules alongside the master Silverstone HOA. Review rental restrictions, architectural approval timelines, and landscape maintenance responsibilities during due diligence.',
      },
      {
        heading: 'Amberly vs. other gated options',
        body:
          'Compare Amberly with The Palms and Silverlake for guard-gated living, or tour Eastpoint and Tuscany if you want lower carrying costs or different maintenance models.',
      },
    ],
    bullets: [
      'Gated Amberly enclave in Silverstone Ranch 89131',
      'Single-family homes near Centennial Hills amenities',
      'Local REALTOR® tours with HOA and disclosure context',
    ],
    faqs: [
      {
        question: 'Is Amberly guard-gated?',
        answer:
          'Yes. Amberly is a gated enclave within Silverstone Ranch. Your agent coordinates gate access for showings and open-house events.',
      },
      {
        question: 'What are typical HOA fees in Amberly?',
        answer:
          'Total monthly HOA costs include master Silverstone dues plus Amberly sub-association fees—typically $200–$286 combined depending on phase. Request the current budget in your resale package.',
      },
      {
        question: 'Does Dr. Jan Duffy help with Amberly listings and purchases?',
        answer:
          'Yes. Dr. Jan Duffy provides pricing strategy, staging guidance, buyer representation, and plain-language HOA document review for Amberly and all Silverstone villages.',
      },
    ],
  },
}

export function isNeighborhoodSlug(s: string): s is NeighborhoodSlug {
  return NEIGHBORHOOD_SLUGS.includes(s as NeighborhoodSlug)
}

export function getNeighborhoodContent(slug: string): NeighborhoodPageContent | undefined {
  if (!isNeighborhoodSlug(slug)) return undefined
  return neighborhoodPages[slug]
}

export function getAllNeighborhoods(): NeighborhoodPageContent[] {
  return NEIGHBORHOOD_SLUGS.map((id) => neighborhoodPages[id])
}
