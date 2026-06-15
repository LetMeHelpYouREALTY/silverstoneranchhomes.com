# Google Search Console Setup — Silverstone Ranch Homes

Site: **https://www.silverstoneranchhomes.com**

## 1. Verify ownership

Choose one method in [Google Search Console](https://search.google.com/search-console):

| Method | This repo |
|--------|-----------|
| **HTML tag** (recommended) | Set `NEXT_PUBLIC_GSC_VERIFICATION` in Vercel env to the `content` value from GSC. The root layout injects `<meta name="google-site-verification">`. |
| **DNS TXT** | Add TXT record at your DNS host (Cloudflare: DNS only / gray cloud). |
| **Google Analytics** | Already configured via `GA_MEASUREMENT_ID` in `lib/analytics.ts` if the same Google account owns GA. |

After deploy, click **Verify** in GSC.

## 2. Submit sitemap

1. GSC → **Sitemaps** → enter: `https://www.silverstoneranchhomes.com/sitemap.xml`
2. Confirm **Success** status after crawl (36+ URLs including neighborhood enclaves).

`app/sitemap.ts` and `app/robots.ts` already reference the canonical host from `lib/contact-info.ts`.

## 3. Request indexing (priority URLs)

Use **URL Inspection** → **Request indexing** for:

- `/` (homepage)
- `/homes-for-sale`
- `/silverstone-ranch`
- `/contact`
- `/home-valuation`
- `/neighborhoods/the-palms`
- `/neighborhoods/silverlake`
- `/resources/las-vegas-hoa/silverstone-ranch`

## 4. Rich results validation

After deploy, test in [Rich Results Test](https://search.google.com/test/rich-results):

| Page | Expected schema |
|------|-----------------|
| `/` | WebPage, RealEstateAgent, Service, FAQPage |
| `/contact` | LocalBusiness, Service, FAQPage |
| `/homes-for-sale` | WebPage, ItemList, FAQPage |
| `/neighborhoods/*` | WebPage, FAQPage, BreadcrumbList |
| `/market-insights` | Article, FAQPage |

See `reports/gsc-readiness-2026-06.md` for the full audit.

## 5. Ongoing maintenance

- Refresh `lib/market-data.ts` monthly (median price, DOM, listing count).
- Resubmit sitemap after adding neighborhood or resource pages.
- Monitor GSC → **Enhancements** for FAQ, Breadcrumbs, and Article issues.
- Keep NAP in visible HTML aligned with GBP (`lib/contact-info.ts`).

## 6. Hyperlocal focus

All pages target **Silverstone Ranch, Las Vegas NV 89131** realtor services:

- Guard-gated and non-gated enclave pages under `/neighborhoods/`
- HOA deep-dive at `/resources/las-vegas-hoa/silverstone-ranch`
- Community hub at `/silverstone-ranch`
- Service CTAs: `/book-tour`, `/home-valuation`, `/request-info`
