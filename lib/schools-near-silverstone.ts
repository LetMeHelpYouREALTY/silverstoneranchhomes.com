/**
 * Schools frequently referenced for Silverstone Ranch / Centennial Hills (CCSD).
 * CCSD boundaries vary by street — verify at ccsd.net/zoning.
 * Enriched via Parallel deep research (June 2026).
 */
import { ASSIGNED_SCHOOLS } from './market-data'

export type SchoolHighlight = {
  name: string
  level: string
  distance: string
  rating: string
  address: string
  highlights: string[]
  isPrimaryAssignment?: boolean
  isCharter?: boolean
}

export const SCHOOLS_NEAR_SILVERSTONE: SchoolHighlight[] = [
  {
    name: ASSIGNED_SCHOOLS.elementary,
    level: 'Elementary (K-5)',
    distance: '1.4 miles',
    rating: '8/10',
    address: '7025 O’Roarke Ave, Las Vegas, NV 89131',
    highlights: ['Common CCSD assignment', 'STEM enrichment', 'Active PTA'],
    isPrimaryAssignment: true,
  },
  {
    name: ASSIGNED_SCHOOLS.middle,
    level: 'Middle (6-8)',
    distance: '2.0 miles',
    rating: '7/10',
    address: '7775 W. Gary Ave, Las Vegas, NV 89131',
    highlights: ['Common CCSD assignment', 'Athletics', 'College prep focus'],
    isPrimaryAssignment: true,
  },
  {
    name: ASSIGNED_SCHOOLS.high,
    level: 'High School (9-12)',
    distance: '2.8 miles',
    rating: '8/10',
    address: '5001 N. Tenaya Way, Las Vegas, NV 89130',
    highlights: ['Common CCSD assignment', 'AP courses', 'Career technical programs'],
    isPrimaryAssignment: true,
  },
  {
    name: ASSIGNED_SCHOOLS.charterOption,
    level: 'Charter (K-8)',
    distance: 'In 89131',
    rating: '#15 NV elementary / #10 NV middle (U.S. News)',
    address: 'Centennial Hills campus, Las Vegas, NV 89131',
    highlights: ['Lottery enrollment', 'STEM focus', 'Top-ranked charter in zip'],
    isCharter: true,
  },
  {
    name: ASSIGNED_SCHOOLS.alternateElementary,
    level: 'Elementary (K-5)',
    distance: 'Varies',
    rating: '7/10',
    address: 'Centennial Hills area',
    highlights: ['Alternate CCSD zone by street', 'Verify per address'],
  },
  {
    name: ASSIGNED_SCHOOLS.alternateHigh,
    level: 'High School (9-12)',
    distance: '3.5 miles',
    rating: '7/10',
    address: '10200 Centennial Hills Blvd, Las Vegas, NV 89149',
    highlights: ['Alternate CCSD zone', 'AP and CTE programs'],
  },
]
