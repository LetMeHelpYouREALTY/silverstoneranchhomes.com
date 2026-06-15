# GSC Readiness Report — June 2026

**Site:** https://www.silverstoneranchhomes.com  
**Prepared:** 2026-06-15  
**Agent:** Dr. Jan Duffy · License S.0197614.LLC · Berkshire Hathaway HomeServices

## Summary

This release prepares the site for Google Search Console verification and hyperlocal Silverstone Ranch (89131) realtor SEO.

### Changes in this release

| Area | Update |
|------|--------|
| **Market data** | Centralized in `lib/market-data.ts` — June 2026 snapshot |
| **Schools** | Unified CCSD assignments: O'Roarke ES, Cadwallader MS, Arbor View HS |
| **Neighborhoods** | Added `/neighborhoods/silverlake`, `/eastpoint`, `/amberly` |
| **Schema** | FAQPage on homepage, homes-for-sale ItemList helper, Service schemas |
| **GSC** | `NEXT_PUBLIC_GSC_VERIFICATION` env + setup doc |
| **Breadcrumbs** | Reusable `components/Breadcrumbs.tsx` |
| **Dates** | Refreshed stale November 2025 copy to June 2026 |

### Sitemap URL count

37 indexable routes (dynamic from `NEIGHBORHOOD_SLUGS`; redirect-only URLs removed).

### June 15 follow-up

- Sitemap now imports `NEIGHBORHOOD_SLUGS` and excludes 301 sources (`/resources`, `/resources/las-vegas-hoa`, `/silverstone-ranch/schools`)
- Added canonical `/schools` to sitemap
- FAQ schema aligned with visible content on homepage, homes-for-sale, amenities, market-insights, contact
- Schools page CCSD names corrected to O'Roarke, Cadwallader, Arbor View
- Hyperlocal H1 updates on agent, contact, book-tour, request-info, home-valuation
- Fixed HOA guide Open Graph image URL

### NAP consistency

| Field | Value |
|-------|-------|
| Business | Silverstone Ranch Real Estate \| Homes by Dr. Jan Duffy |
| Address | 8721 Deering Bay Dr, Las Vegas, NV 89131 |
| Phone | (702) 500-1530 |
| URL | https://www.silverstoneranchhomes.com |

Matches `lib/contact-info.ts` and JSON-LD in `app/layout.tsx`.

### Rich results — post-deploy checklist

Run [Rich Results Test](https://search.google.com/test/rich-results) on:

1. `/` — expect FAQPage + Service + RealEstateAgent
2. `/homes-for-sale` — expect ItemList + FAQPage
3. `/contact` — expect LocalBusiness + FAQPage
4. `/neighborhoods/the-palms` — expect FAQPage + breadcrumbs
5. `/market-insights` — expect Article + FAQPage

### Residual risks

- Live MLS listings should eventually feed `RealEstateListing` ItemList dynamically via RealScout API.
- School boundaries must be re-verified with CCSD quarterly.
- `parallel-cli` was unavailable for deep research; content sourced from site audit + public Silverstone Ranch references.

### Next steps after merge

1. Set `NEXT_PUBLIC_GSC_VERIFICATION` in Vercel production env
2. Deploy and verify in GSC
3. Submit `sitemap.xml`
4. Request indexing for priority URLs (see `docs/google-search-console-setup.md`)
