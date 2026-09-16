# Silverstone Ranch Homes - Real Estate Listing Site

A comprehensive Silverstone Ranch community website highlighting luxury homes, amenities, and market insights in Northwest Las Vegas. Built with Next.js 15 and deployed on Vercel.

## Features

- **Property Showcase**: Complete property details, photos, and descriptions
- **Interactive Photo Gallery**: Slideshow viewer with all property photos
- **Contact Forms**: Multiple contact forms (Home Valuation, Request Info, Book Tour)
- **Market Insights**: Real-time market data and trends for Silverstone Ranch
- **Agent Profile**: Complete agent information and contact details
- **Interactive Map**: Property location with Google Maps integration
- **Responsive Design**: Mobile-first, fully responsive layout
- **SEO Optimized**: Complete metadata, structured data, and Open Graph tags

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Forms**: React Hook Form with Zod validation
- **Image Gallery**: react-image-gallery
- **Maps**: Google Maps Embed API
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or pnpm

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   # or
   pnpm install
   ```

3. Set up environment variables (create `.env.local`):
   ```env
   NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
   EMAIL_SERVICE_API_KEY=your_email_service_key (optional)
   ```

4. Run the development server:
   ```bash
   npm run dev
   # or
   pnpm dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
├── app/
│   ├── api/              # API routes for form submissions
│   ├── components/       # App-specific components (removed old v0 SDK components)
│   ├── page.tsx          # Homepage with all sections
│   ├── layout.tsx        # Root layout with metadata
│   ├── home-valuation/   # Home valuation form page
│   ├── request-info/     # Request info form page
│   ├── book-tour/        # Book tour form page
│   └── homes-for-sale/   # Homes for sale listing page
├── components/           # Reusable components
│   ├── Header.tsx        # Navigation header
│   ├── Hero.tsx          # Hero section
│   ├── PhotoGallery.tsx  # Property photo gallery
│   ├── PropertyDescription.tsx
│   ├── PriceFeatures.tsx
│   ├── Amenities.tsx
│   ├── PropertyMap.tsx
│   ├── VideoSection.tsx
│   ├── AreaInfo.tsx
│   ├── MarketInsights.tsx
│   ├── AgentProfile.tsx
│   └── ContactFormModal.tsx
└── public/
    └── images/           # Property and agent images
```

## Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` | Optional | Google Maps API key for interactive map |
| `EMAIL_SERVICE_API_KEY` | Optional | API key for email service (Resend, SendGrid, etc.) |
| `CLOUDFLARE_IMAGES_API_TOKEN` | Upload only | Images Edit token for `npm run images:cloudflare` |
| `NEXT_PUBLIC_CLOUDFLARE_IMAGES_DELIVERY` | Optional | Set to `1` after hosted uploads verify 200 |

## Forms

All forms are functional and ready to integrate with your email service:

- **Contact Form**: General inquiries
- **Home Valuation Form**: Property valuation requests
- **Request Info Form**: Information requests
- **Book Tour Form**: Property tour scheduling

To enable email functionality, update the API routes in `app/api/` to integrate with your preferred email service.

## Images

Heading-matched community photos are **Cloudflare Hosted Images** with git as the backup.

- Storage: upload JPEGs from `public/images/sections/` with custom IDs that match `lib/media.ts`
- Delivery: `https://imagedelivery.net/byE6BTe9lNqo21V57n4aPQ/<image_id>/public`
- Docs: [Serve uploaded images](https://developers.cloudflare.com/images/optimization/hosted-images/serve-uploaded-images/) · [Upload via custom path](https://developers.cloudflare.com/images/storage/upload-images/upload-custom-path/)

Until hosted files return HTTP 200, the site keeps serving git files so Open Graph and Maps share images do not 404 (`cf-images err=9404`).

1. Replace files in `public/images/sections/` and commit (git backup)
2. Upload: `npm run images:cloudflare` (needs `CLOUDFLARE_IMAGES_API_TOKEN` with Images Edit)
3. Confirm: `npm run images:verify`
4. Set `NEXT_PUBLIC_CLOUDFLARE_IMAGES_DELIVERY=1` in Vercel Production

Do **not** orange-cloud the Vercel apex — keep Cloudflare DNS-only for the site hostname and use `imagedelivery.net` for Images.

Property gallery originals remain in `public/images/property/`. Agent headshots remain in `public/images/agent/`.

## Deployment

The site is configured for Vercel deployment:

1. Push to your GitHub repository
2. Import the project in Vercel
3. Set environment variables in Vercel dashboard
4. Deploy!

## Contact Information

- **Agent**: Dr. Jan Duffy REALTOR®
- **Phone**: (702) 500-1530
- **Email**: DrDuffySells@SilverStoneRanchHomes.com
- **Office**: 8721 Deering Bay Dr, Las Vegas, NV 89131
- **Website**: https://www.silverstoneranchhomes.com/
- **Social**: [LinkedIn](https://www.linkedin.com/company/centennialhills/) · [Facebook](https://www.facebook.com/SilverstoneRanchHomes)
- **License**: S.0197614.LLC

## License

Private project for Silverstone Ranch Homes.
