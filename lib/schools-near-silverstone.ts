/**
 * Schools frequently referenced for Silverstone Ranch / Centennial Hills (CCSD).
 * Single source for /schools and /silverstone-ranch/schools — verify zoning with CCSD when advising clients.
 */
export type SchoolHighlight = {
  name: string
  level: string
  distance: string
  rating: string
  address: string
  highlights: string[]
}

export const SCHOOLS_NEAR_SILVERSTONE: SchoolHighlight[] = [
  {
    name: 'Vassiliadis Elementary School',
    level: 'Elementary (K-5)',
    distance: '0.8 miles',
    rating: '8/10',
    address: '10555 Brent Lane, Las Vegas, NV 89131',
    highlights: ['Highly rated', 'Close proximity', 'Strong parent involvement'],
  },
  {
    name: 'Centennial Hills Elementary School',
    level: 'Elementary (K-5)',
    distance: '1.2 miles',
    rating: '7/10',
    address: '9851 Centennial Hills Blvd, Las Vegas, NV 89149',
    highlights: ['Modern facilities', 'Diverse programs', 'Active PTA'],
  },
  {
    name: 'Sig Rogich Middle School',
    level: 'Middle (6-8)',
    distance: '1.5 miles',
    rating: '8/10',
    address: '235 N. Pavilion Center Dr, Las Vegas, NV 89144',
    highlights: ['STEM programs', 'Sports excellence', 'College prep focus'],
  },
  {
    name: 'Centennial High School',
    level: 'High School (9-12)',
    distance: '2.1 miles',
    rating: '7/10',
    address: '10200 Centennial Hills Blvd, Las Vegas, NV 89149',
    highlights: ['AP courses', 'Athletics', 'Career technical programs'],
  },
  {
    name: 'Palo Verde High School',
    level: 'High School (9-12)',
    distance: '3.2 miles',
    rating: '8/10',
    address: '333 S. Pavilion Center Dr, Las Vegas, NV 89144',
    highlights: ['Magnet programs', 'High graduation rate', 'College partnerships'],
  },
]
