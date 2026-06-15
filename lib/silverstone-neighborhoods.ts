/** Silverstone Ranch sub-association pages — copy aligned with site-wide community descriptions. */

export type NeighborhoodSlug =
  | 'pinehurst'
  | 'the-palms'
  | 'tuscany'
  | 'silverlake'
  | 'eastpoint'
  | 'amberly'
  | 'windermere'
  | 'greenfield'
  | 'parkfield'
  | 'somerset'
  | 'clairbrook'

export const NEIGHBORHOOD_SLUGS: NeighborhoodSlug[] = [
  'pinehurst',
  'the-palms',
  'tuscany',
  'silverlake',
  'eastpoint',
  'amberly',
  'windermere',
  'greenfield',
  'parkfield',
  'somerset',
  'clairbrook',
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
    titleSegment: 'Silverlake | Gated Homes',
    metaDescription:
      'Silverlake at Silverstone Ranch: gated single-family homes in Northwest Las Vegas 89131. Privacy, estate lots, and buyer/seller guidance from Dr. Jan Duffy REALTOR®.',
    h1: 'Silverlake | Gated Silverstone Ranch Homes',
    intro:
      'Silverlake is a gated enclave within Silverstone Ranch (not guard-gated—that distinction belongs to The Palms). Single-story homes from roughly 2,025–2,825 sq ft sit on quarter-acre lots with desert landscaping and trail access.',
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
      'Gated Silverlake enclave in ZIP 89131 (The Palms is the only guard-gated enclave)',
      'Single-family homes with estate-scale lots',
      'Hyperlocal pricing and HOA guidance from Dr. Jan Duffy',
    ],
    faqs: [
      {
        question: 'Is Silverlake guard-gated?',
        answer:
          'No. Silverlake is gated with controlled entry but does not have a 24/7 manned guard house. The Palms is the only guard-gated enclave in Silverstone Ranch. Your agent coordinates gate access for showings.',
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
  windermere: {
    slug: 'windermere',
    titleSegment: 'Windermere | Gated Townhomes',
    metaDescription:
      'Windermere at Silverstone Ranch: gated townhome community in Las Vegas 89131. Lock-and-leave living—buyer and seller guidance from Dr. Jan Duffy REALTOR®.',
    h1: 'Windermere | Gated Silverstone Ranch Townhomes',
    intro:
      'Windermere is a gated townhome enclave within Silverstone Ranch. Note: 2026 HOA dues increases may affect Windermere owners—verify the latest budget before you offer. Compare with Pinehurst for similar lock-and-leave footprints.',
    sections: [
      {
        heading: 'Homes & lifestyle',
        body:
          'Windermere offers attached and townhome-style residences with two-story layouts, attached garages, and HOA-managed exterior maintenance. Buyers compare Windermere with Pinehurst when evaluating lock-and-leave options inside the master plan.',
      },
      {
        heading: 'HOA & gate access',
        body:
          'Windermere includes sub-association dues plus master Silverstone HOA fees. Guard-gate procedures require agent coordination for showings—Dr. Jan Duffy handles visitor registration and disclosure review for every transaction.',
      },
      {
        heading: 'Who fits Windermere best?',
        body:
          'Travel professionals, medical staff with variable hours, and investors seeking turnkey townhomes often shortlist Windermere. Tour Eastpoint or Greenfield if you prefer non-gated single-family alternatives at different price points.',
      },
    ],
    bullets: [
      'Gated townhome enclave in Silverstone Ranch 89131',
      'Lock-and-leave lifestyle; verify 2026 HOA dues outlook',
      'Hyperlocal buyer and seller representation',
    ],
    faqs: [
      {
        question: 'Is Windermere the same as Pinehurst?',
        answer:
          'No. Windermere and Pinehurst are separate gated townhome enclaves within Silverstone Ranch with different HOAs, floor plans, and dues. Tour both to compare lifestyle and carrying costs.',
      },
      {
        question: 'What is the price range in Windermere?',
        answer:
          'As of June 2026, Windermere townhomes typically range from the mid-$500s to high-$700s depending on renovation level and garage configuration. Request a current CMA for your criteria.',
      },
      {
        question: 'Can Dr. Jan Duffy show Windermere listings?',
        answer:
          'Yes. Dr. Jan Duffy coordinates guard-gate access, provides HOA document review, and compares Windermere with other Silverstone villages during private tours.',
      },
    ],
  },
  greenfield: {
    slug: 'greenfield',
    titleSegment: 'Greenfield | Silverstone Village',
    metaDescription:
      'Greenfield at Silverstone Ranch: non-gated Northwest Las Vegas homes in 89131. Family-friendly streets, master-plan amenities, and REALTOR® services from Dr. Jan Duffy.',
    h1: 'Greenfield | Non-Gated Silverstone Ranch Homes',
    intro:
      'Greenfield delivers approachable single-family living inside the Silverstone Ranch master plan without guard-gate fees—ideal for buyers who prioritize value, guest access, and proximity to parks and trails.',
    sections: [
      {
        heading: 'Homes & lifestyle',
        body:
          'Greenfield features Pulte-era single-family homes with desert landscaping and flexible two- and three-bedroom floor plans. Residents enjoy master HOA amenities including the six-acre park, tennis courts, and walking trails.',
      },
      {
        heading: 'Value & carrying costs',
        body:
          'Without a guard-gate sub-association, Greenfield often carries lower total monthly HOA costs than The Palms or Silverlake. Compare line-by-line budgets when weighing gated versus non-gated Silverstone villages.',
      },
      {
        heading: 'Compare before you offer',
        body:
          'If Greenfield is on your list, tour Eastpoint and Parkfield the same day. Dr. Jan Duffy helps buyers align budget, school zoning, and commute priorities across all three non-gated options.',
      },
    ],
    bullets: [
      'Non-gated village in Silverstone Ranch ZIP 89131',
      'Lower carrying costs vs. guard-gated enclaves',
      'Walkable access to parks, trails, and schools',
    ],
    faqs: [
      {
        question: 'Is Greenfield guard-gated?',
        answer:
          'No. Greenfield is a non-gated village within Silverstone Ranch. You still pay master HOA dues and follow community architectural guidelines.',
      },
      {
        question: 'What schools serve Greenfield homes?',
        answer:
          'Most Greenfield addresses zone to O\u2019Roarke Elementary, Cadwallader Middle, and Arbor View High. Verify current CCSD boundaries before you offer.',
      },
      {
        question: 'Does Dr. Jan Duffy list and sell Greenfield homes?',
        answer:
          'Yes. Listing strategy includes pricing to June 2026 comps, golf course disclosure preparation, and marketing that highlights Greenfield value for relocation buyers.',
      },
    ],
  },
  parkfield: {
    slug: 'parkfield',
    titleSegment: 'Parkfield | Silverstone Ranch',
    metaDescription:
      'Parkfield at Silverstone Ranch: non-gated Las Vegas 89131 homes near community parks and trails. Buyer and seller guidance from Dr. Jan Duffy REALTOR®.',
    h1: 'Parkfield | Silverstone Ranch Village Homes',
    intro:
      'Parkfield sits within the Silverstone Ranch master plan with convenient access to the central park, playground, and trail network—making it a strong choice for families who want community amenities without guard-gate logistics.',
    sections: [
      {
        heading: 'Homes & lifestyle',
        body:
          'Parkfield offers single-family homes with desert-modern elevations and proximity to the six-acre community park. Floor plans range from efficient two-story layouts to larger family homes with three-car garages.',
      },
      {
        heading: 'HOA & amenities',
        body:
          'Parkfield homeowners participate in the master Silverstone HOA with access to tennis, pickleball, trails, and seasonal programming. Review resale packages for current dues and any pending assessments.',
      },
      {
        heading: 'Parkfield vs. nearby villages',
        body:
          'Compare Parkfield with Greenfield and Eastpoint for non-gated value, or tour Amberly and Tuscany if you are considering gated alternatives within the same master plan.',
      },
    ],
    bullets: [
      'Non-gated Parkfield village near Silverstone community park',
      'Family-oriented streets in Centennial Hills 89131',
      'Side-by-side tours with other Silverstone enclaves',
    ],
    faqs: [
      {
        question: 'Why choose Parkfield over a guard-gated enclave?',
        answer:
          'Parkfield offers simpler guest access and typically lower sub-association costs while keeping master-plan amenities, trails, and Silverstone branding.',
      },
      {
        question: 'How far is Parkfield from the community park?',
        answer:
          'Many Parkfield streets sit within a short walk or bike ride of the central six-acre park and playground. Confirm specific lot orientation during your tour.',
      },
      {
        question: 'Can I tour Parkfield with other Silverstone neighborhoods?',
        answer:
          'Yes. Dr. Jan Duffy schedules multi-village tours so you can experience gated and non-gated options in one Centennial Hills visit.',
      },
    ],
  },
  somerset: {
    slug: 'somerset',
    titleSegment: 'Somerset | Silverstone Village',
    metaDescription:
      'Somerset at Silverstone Ranch: non-gated Las Vegas 89131 homes with $200/mo total HOA. Value-focused village living—REALTOR® guidance from Dr. Jan Duffy.',
    h1: 'Somerset | Non-Gated Silverstone Ranch Homes',
    intro:
      'Somerset shares the non-gated village tier with Eastpoint and Greenfield—$200/mo total HOA ($158 master + $42 sub) covering arterial landscaping, park upkeep, and community security patrol. Homes typically range from 1,559 to 3,448 sq ft.',
    sections: [
      {
        heading: 'Homes & value proposition',
        body:
          'Somerset appeals to budget-conscious buyers who want Silverstone Ranch amenities without guard-gate premiums. Pulte-built homes from 2003–2008 offer desert-modern and traditional elevations across family-friendly streets.',
      },
      {
        heading: 'HOA at the lowest tier',
        body:
          'At $200/mo total, Somerset matches the lowest HOA tier in Silverstone Ranch alongside Eastpoint and Greenfield. Compare carrying costs against gated enclaves before you finalize your short list.',
      },
      {
        heading: 'Tour Somerset with nearby villages',
        body:
          'Dr. Jan Duffy schedules multi-village tours covering Somerset, Parkfield, and Greenfield so you can compare non-gated options in one Centennial Hills visit.',
      },
    ],
    bullets: [
      'Non-gated Somerset village — $200/mo total HOA',
      '1,559–3,448 sq ft Pulte homes in 89131',
      'Side-by-side tours with Eastpoint and Greenfield',
    ],
    faqs: [
      {
        question: 'What is the HOA fee in Somerset?',
        answer:
          'Somerset homeowners typically pay $200/mo total ($158 master + $42 sub). Request the current budget—2026 dues increases may apply community-wide.',
      },
      {
        question: 'How does Somerset compare to gated enclaves?',
        answer:
          'Somerset saves roughly $40–86/mo in HOA costs versus gated villages and avoids guard-gate logistics, while keeping master-plan parks, trails, and Silverstone branding.',
      },
      {
        question: 'Does Dr. Jan Duffy represent Somerset buyers and sellers?',
        answer:
          'Yes. Full buyer and seller representation including pricing, golf course disclosures, and HOA document review for Somerset and all Silverstone enclaves.',
      },
    ],
  },
  clairbrook: {
    slug: 'clairbrook',
    titleSegment: 'Clairbrook | Silverstone Ranch',
    metaDescription:
      'Clairbrook at Silverstone Ranch: non-gated Northwest Las Vegas 89131 homes. Master-plan amenities at $200/mo HOA—tours from Dr. Jan Duffy REALTOR®.',
    h1: 'Clairbrook | Silverstone Ranch Village Homes',
    intro:
      'Clairbrook completes the non-gated village roster alongside Amberly and Parkfield. Like other non-gated enclaves, Clairbrook homeowners pay $200/mo total HOA with access to the six-acre central park and trail network.',
    sections: [
      {
        heading: 'Homes & lifestyle',
        body:
          'Clairbrook features single-family Pulte homes with flexible floor plans and desert landscaping. Some plats include the Princeville Collection with larger footprints (3,064–3,744 sq ft) on premium lots.',
      },
      {
        heading: 'Non-gated advantages',
        body:
          'Guest access is straightforward without guard-gate registration. Clairbrook suits buyers who prioritize convenience and lower carrying costs while staying inside the Silverstone master plan.',
      },
      {
        heading: 'Compare Clairbrook options',
        body:
          'Tour Clairbrook with Amberly (gated) and Parkfield (non-gated) to understand how access type and HOA tiers affect lifestyle and resale in Centennial Hills.',
      },
    ],
    bullets: [
      'Non-gated Clairbrook village in ZIP 89131',
      '$200/mo total HOA tier',
      'Hyperlocal REALTOR® tours and disclosure review',
    ],
    faqs: [
      {
        question: 'Is Clairbrook guard-gated?',
        answer:
          'No. Clairbrook is non-gated. Amberly and The Palms offer gated or guard-gated alternatives within the same master plan.',
      },
      {
        question: 'What is the typical price range in Clairbrook?',
        answer:
          'As of June 2026, Clairbrook homes generally align with the Silverstone Ranch median near $500K, with premium lots and renovations reaching higher bands. Request a current CMA.',
      },
      {
        question: 'Can I tour Clairbrook on the same day as other enclaves?',
        answer:
          'Yes. Dr. Jan Duffy routinely schedules multi-enclave Silverstone tours covering Clairbrook, Parkfield, and gated alternatives in one trip.',
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
