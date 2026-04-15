/** Silverstone Ranch sub-association pages — copy aligned with site-wide community descriptions. */

export type NeighborhoodSlug = 'pinehurst' | 'the-palms' | 'tuscany'

export const NEIGHBORHOOD_SLUGS: NeighborhoodSlug[] = ['pinehurst', 'the-palms', 'tuscany']

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
