# V0 (Vercel) — SEO, GEO & AEO prep for Silverstone Ranch Homes

Use this doc to generate UI in [v0.dev](https://v0.dev) that matches this repo, then paste components into `components/` and wire them on pages.

## Already in the codebase (do not duplicate in V0)

- **Canonical host:** `https://www.silverstoneranchhomes.com` — `lib/contact-info.ts` (`CONTACT_INFO`), `metadataBase` in `app/layout.tsx`
- **JSON-LD helpers:** `lib/seo.ts` — `buildFaqSchema`, `buildWebPageSchema`, `buildLocalBusinessSchema`, `buildRealEstateAgentSchema`, etc.
- **Injection:** `components/SeoJsonLd.tsx` — pass FAQ schema next to visible FAQ copy (same Q&A text)
- **Tailwind:** `tailwind.config.js` — `fontFamily.sans`: Inter; CSS variables for `primary`, `muted`, `border`, etc. in `app/globals.css`
- **Utilities:** `lib/utils.ts` — `cn()` with `clsx` + `tailwind-merge`

## Design tokens (match V0 output to this)

| Token | Usage |
|--------|--------|
| Font | `font-sans` (Inter) |
| Primary actions | `bg-blue-600 hover:bg-blue-700 text-white` |
| Page background | `bg-slate-50` / cards `bg-white border border-slate-200` |
| Text | Headings `text-slate-900`, body `text-slate-700` |
| Radius | `rounded-xl` for cards, `rounded-lg` for buttons |
| Icons | `lucide-react` (already a dependency) |

## GEO (entity) content rules

- **One** business identity: Dr. Jan Duffy, license `S.0197614.LLC`, Berkshire Hathaway HomeServices, phone `(702) 500-1530`, address `8721 Deering Bay Dr, Las Vegas, NV 89131`
- NAP in visible HTML must **match** `CONTACT_INFO` and JSON-LD (no alternate numbers)
- Do not invent awards, review counts, or sales volume

## AEO (answer) content rules

- Section **H2** = natural-language question (e.g. “What is Silverstone Ranch?”)
- **First paragraph** under it = direct answer in plain language (40–80 words)
- FAQ: each item = **H3 or button** question + short answer; mirror the same strings in `buildFaqSchema` on the server

## SEO (technical) rules

- One **H1** per page (usually in the page file, not inside every V0 section)
- V0 sections use **H2** / **H3** only
- Internal links: descriptive anchors (“Silverstone Ranch schools guide”, not “click here”)
- Images: if V0 adds images, `alt` must mention Silverstone Ranch / Las Vegas where relevant

---

## Copy-paste: Master prompt for v0.dev

```
You are building React (TSX) sections for a Next.js 16 App Router real estate site: Silverstone Ranch Homes in Northwest Las Vegas (Centennial Hills, ZIP 89131). Stack: Tailwind CSS 3, lucide-react, clsx + tailwind-merge via a cn() helper.

Design: Inter font, professional real estate aesthetic. Colors: slate neutrals (slate-50 background, white cards, slate-900 headings, slate-700 body), blue-600/blue-700 for primary buttons and accents. Rounded-xl cards, subtle border-slate-200 shadow-sm. Mobile-first responsive grids.

Generate these as separate exported components in one file (or clearly separated), using TypeScript props for all copy and links so content can be passed from lib/contact-info later:

1) LocalEntityCard (GEO)
- Semantic <section> with aria-labelledby.
- Displays: business name "Silverstone Ranch Homes", agent "Dr. Jan Duffy", brokerage "Berkshire Hathaway HomeServices", license "S.0197614.LLC", full address "8721 Deering Bay Dr, Las Vegas, NV 89131", phone as tel: link "(702) 500-1530", email as mailto from prop.
- Optional props: businessHours (string[]), googleMapsUrl (string), googleReviewsUrl (string).
- Primary CTAs: Call, Directions (external link), View on Google (reviews link) — only render if URLs provided.
- No star ratings or review counts unless passed as props (default: omit).

2) AnswerFirstBlock (AEO)
- Props: question (string), directAnswer (string, 2-4 sentences), supportingPoints (string[], optional).
- Structure: H2 = question; first paragraph = directAnswer; optional ul with check icons for supportingPoints.
- No marketing fluff; factual, local (Silverstone Ranch, Las Vegas).

3) FaqAccordion (AEO + SEO)
- Props: items: { id: string; question: string; answer: string }[]
- Client component pattern: 'use client', accessible accordion (button + panel, aria-expanded). One item open at a time OR all collapsed by default — choose one and document in a comment.
- Questions styled as clear H3 typography inside each item.

4) TopicClusterLinks (SEO internal linking)
- Props: title (string), links: { href: string; label: string; description: string }[]
- Grid of cards linking to internal paths only (href as string). Descriptive labels for local SEO (e.g. "Schools near Silverstone Ranch", "HOA & fees in Silverstone Ranch").

5) TrustStrip (E-E-A-T)
- Compact row: license number, brokerage name, MLS/IDX disclaimer line as props (mlsDisclaimer: string).
- Muted small text; no fake statistics.

Implementation details:
- Import { cn } from "@/lib/utils" (assume path alias @/*).
- Use lucide-react icons: Phone, MapPin, Mail, ExternalLink, HelpCircle, CheckCircle2, Shield.
- No external UI libraries beyond Tailwind. No placeholder images with fake URLs.
- Export types for props (e.g. LocalEntityCardProps).

File should be valid TSX with no Next.js metadata API — presentational components only.
```

---

## After V0 returns code

1. Save output as e.g. `components/seo/MarketingSections.tsx` (split if V0 outputs multiple files).
2. Replace hardcoded strings with imports from `@/lib/contact-info` where appropriate.
3. On the target page (e.g. `app/page.tsx` or `app/contact/page.tsx`):
   - Import sections and render below the H1.
4. For FAQ: duplicate the **same** Q&A in `buildFaqSchema` from `lib/seo.ts` and render `<SeoJsonLd data={faqSchema} />` next to `<FaqAccordion />`.
5. Run `npm run lint` and `npm run build`.

## Optional next prompts (second V0 chats)

- **Contact page:** Map embed + NAP card + hours grid (props-driven).
- **Blog/GBP post landing:** Article layout with author byline, `dateModified`, and FAQ at bottom.
