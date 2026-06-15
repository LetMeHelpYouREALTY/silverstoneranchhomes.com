/**
 * Schools serving Silverstone Ranch / Centennial Hills (CCSD).
 * Primary assignments: O'Roarke ES, Cadwallader MS, Arbor View HS.
 * Verify zoning with CCSD when advising clients — boundaries can change.
 */
import { ASSIGNED_SCHOOLS } from './market-data'

export type SchoolHighlight = {
  name: string
  level: string
  distance: string
  rating: string
  address: string
  highlights: string[]
  /** Primary CCSD assignment for most Silverstone Ranch addresses */
  isPrimaryAssignment?: boolean
}

export const SCHOOLS_NEAR_SILVERSTONE: SchoolHighlight[] = [
  {
    name: ASSIGNED_SCHOOLS.elementary,
    level: 'Elementary (K-5)',
    distance: '1.4 miles',
    rating: '8/10',
    address: '7025 O’Roarke Ave, Las Vegas, NV 89131',
    highlights: ['Primary CCSD assignment', 'STEM enrichment', 'Active PTA'],
    isPrimaryAssignment: true,
  },
  {
    name: ASSIGNED_SCHOOLS.middle,
    level: 'Middle (6-8)',
    distance: '2.0 miles',
    rating: '7/10',
    address: '7775 W. Gary Ave, Las Vegas, NV 89131',
    highlights: ['Primary CCSD assignment', 'Athletics', 'College prep focus'],
    isPrimaryAssignment: true,
  },
  {
    name: ASSIGNED_SCHOOLS.high,
    level: 'High School (9-12)',
    distance: '2.8 miles',
    rating: '8/10',
    address: '5001 N. Tenaya Way, Las Vegas, NV 89130',
    highlights: ['Primary CCSD assignment', 'AP courses', 'Career technical programs'],
    isPrimaryAssignment: true,
  },
  {
    name: 'Vassiliadis Elementary School',
    level: 'Elementary (K-5)',
    distance: '0.8 miles',
    rating: '8/10',
    address: '10555 Brent Lane, Las Vegas, NV 89131',
    highlights: ['Nearby alternative', 'Highly rated', 'Strong parent involvement'],
  },
  {
    name: 'Somerset Academy of Las Vegas (Sky Pointe)',
    level: 'Charter (K-8)',
    distance: '3.5 miles',
    rating: '9/10',
    address: '6650 Sky Pointe Dr, Las Vegas, NV 89131',
    highlights: ['Charter option', 'STEM focus', 'Lottery enrollment'],
  },
]
