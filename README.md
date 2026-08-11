# Silverstone Ranch Homes

Official website for Silverstone Ranch luxury homes in Northwest Las Vegas.  
Built with Next.js 15, Tailwind CSS v4, and deployed on Vercel with comprehensive CI/CD automation.

## Features

- **Property Showcase**: Complete property details, photos, and descriptions
- **Interactive Photo Gallery**: Slideshow viewer with all property photos
- **Contact Forms**: Multiple contact forms (Home Valuation, Request Info, Book Tour)
- **Market Insights**: Real-time market data and trends for Silverstone Ranch
- **Agent Profile**: Complete agent information and contact details
- **Interactive Map**: Property location with Google Maps integration
- **Responsive Design**: Mobile-first, fully responsive layout
- **SEO Optimized**: Complete metadata, structured data, and Open Graph tags

## 🏗️ Tech Stack

- **Framework**: Next.js 15.5.3 (App Router)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS v4 with PostCSS
- **UI Components**: Radix UI primitives
- **Animations**: Framer Motion
- **Forms**: React Hook Form with Zod validation
- **Image Gallery**: react-image-gallery
- **Maps**: @react-google-maps/api
- **Deployment**: Vercel

## 🤖 Automation

This project includes comprehensive automation for **development workflows** and **business operations**:

### Development Automation
- ✅ **Build Validation** - Lint, typecheck, and build on every PR
- 🔍 **Preview Checks** - Format validation and bundle analysis
- 📊 **Performance Monitoring** - Weekly Lighthouse audits
- 🔒 **Security Audits** - Daily vulnerability scanning
- 📦 **Dependency Updates** - Automated Dependabot PRs

See [.github/AUTOMATION.md](.github/AUTOMATION.md) for development automation docs.

### CRM & Lead Automation
- 🎯 **Auto-Lead Capture** - All forms → Follow Up Boss CRM
- 📧 **Email Notifications** - Instant alerts for new leads
- 🔗 **Zapier Integration** - Connect to 5,000+ apps
- 🏷️ **Smart Tagging** - Auto-categorize by lead source
- ⚡ **Parallel Processing** - All integrations run simultaneously

**Form Types:**
- Contact Form → Standard lead
- Tour Request → URGENT priority
- Home Valuation → HOT seller lead
- Info Request → Nurture sequence

See [.github/CRM-AUTOMATION.md](.github/CRM-AUTOMATION.md) for complete CRM setup guide.

### Setup Local Git Hooks
```bash
./scripts/setup-hooks.sh
```

### Test CRM Integrations
```bash
npx tsx scripts/test-crm-integration.ts
```

## Getting Started

### Prerequisites

- Node.js 20+
- npm 9+
- Git

### Installation

```bash
# Clone the repository
git clone https://github.com/DrJanDuffy/silverstoneranchhomes.com.git
cd silverstoneranchhomes.com

# Install dependencies
npm install

# Setup local git hooks (recommended)
./scripts/setup-hooks.sh

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your API keys

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### Available Scripts

**Development**
- `npm run dev` - Start development server with Turbopack
- `npm run build` - Create production build
- `npm start` - Start production server

**Code Quality**
- `npm run validate` - Run all checks (recommended before commit)
- `npm run typecheck` - TypeScript type checking
- `npm run lint` - ESLint
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting

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

## Forms

All forms are functional and ready to integrate with your email service:

- **Contact Form**: General inquiries
- **Home Valuation Form**: Property valuation requests
- **Request Info Form**: Information requests
- **Book Tour Form**: Property tour scheduling

To enable email functionality, update the API routes in `app/api/` to integrate with your preferred email service.

## Images

Place property photos in `public/images/property/` and agent photos in `public/images/agent/`. The gallery component will automatically handle missing images with fallbacks.

## 🚢 Deployment

**Automatic Deployment via Vercel:**
- Push to `main` → Production deployment
- Open PR → Preview deployment with unique URL
- All deployments validated by CI/CD pipeline

**Manual Deployment:**
```bash
npm run build
npm start
```

## 📊 Performance Targets

- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Total Blocking Time: < 200ms
- Cumulative Layout Shift: < 0.1

Monitored via automated Lighthouse audits.

## 🔒 Security

- Daily automated vulnerability scanning
- Dependabot security updates
- npm audit in CI pipeline

## 📚 Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for development guidelines and best practices.

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
