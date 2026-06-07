# Performance Optimization Guide

This document outlines the performance optimizations implemented for silverstoneranchhomes.com based on 2026 best practices.

## Core Web Vitals Targets (March 2026 Update)

- **LCP (Largest Contentful Paint)**: < 2.0s (updated from 2.5s)
- **INP (Interaction to Next Paint)**: < 200ms (replaced FID)
- **CLS (Cumulative Layout Shift)**: < 0.1

## Performance Features

### 1. Image Optimization
- ✅ Modern formats (AVIF, WebP) with 30-50% better compression
- ✅ Responsive images with proper `sizes` attribute
- ✅ Lazy loading for below-fold images
- ✅ Hero image preloading for optimal LCP
- ✅ Explicit dimensions to prevent CLS

### 2. Bundle Optimization
- ✅ Bundle analyzer integrated (`npm run build:analyze`)
- ✅ Optimized package imports for lucide-react, framer-motion
- ✅ Server Components by default (24 client components only where needed)
- ✅ Turbopack for faster dev builds

### 3. Caching Strategy
- ✅ Static assets: 1 year cache (immutable)
- ✅ Images: 1 year cache with CDN
- ✅ Next.js static files: aggressive caching

### 4. Security Headers
- ✅ HSTS with preload
- ✅ CSP for images
- ✅ X-Frame-Options, X-Content-Type-Options
- ✅ Permissions-Policy for camera/mic/geolocation

### 5. Resource Hints
- ✅ Preconnect to Google Fonts
- ✅ Preconnect to Google Tag Manager
- ✅ DNS prefetch for Google Analytics
- ✅ Preload for hero image

### 6. Monitoring
- ✅ Web Vitals tracking via Google Analytics
- ✅ Lighthouse CI integration
- ✅ Bundle size tracking in CI/CD

## Running Performance Tests

### Local Lighthouse Audit
```bash
npm run lighthouse
```

### Bundle Analysis
```bash
npm run build:analyze
```

### CI/CD Performance Checks
Performance tests run automatically on every PR via GitHub Actions:
- Lighthouse CI scores (min 90% for performance, SEO)
- Bundle size analysis
- Core Web Vitals validation

## Performance Benchmarks

Based on industry research (2026):
- Sites with good Core Web Vitals see **24% lower bounce rates**
- Proper LCP optimization can increase **revenue by 53%**
- Conversion rates improve by **33%** with optimal performance

## Optimization Checklist

- [x] Next.js Image component for all images
- [x] AVIF/WebP format support
- [x] Hero image preloading
- [x] Resource hints (preconnect, dns-prefetch)
- [x] Security headers
- [x] Bundle analyzer setup
- [x] Lighthouse CI integration
- [x] Web Vitals tracking
- [x] Server Components maximized
- [x] Font optimization (display: swap)
- [x] Aggressive caching headers
- [ ] ISR implementation (if dynamic data needed)
- [ ] Edge Functions for A/B testing (future)

## Resources

- [Next.js 15 Performance Optimization](https://www.verlua.com/blog/nextjs-performance-optimization)
- [Core Web Vitals 2026 Guide](https://skyseodigital.com/core-web-vitals-optimization-complete-guide-for-2026/)
- [Vercel Best Practices](https://vercel.com/docs/production-checklist)
- [March 2026 Core Web Vitals Update](https://www.digitalapplied.com/blog/core-web-vitals-2026-inp-lcp-cls-optimization-guide)

## Monitoring Dashboard

Track real-time performance:
1. **Google Analytics**: Core Web Vitals events
2. **Vercel Analytics**: Speed Insights (after deployment)
3. **Lighthouse CI**: Automated audits on every deploy
4. **Bundle Analyzer**: Visual bundle composition

## Future Optimizations

1. **Partial Prerendering (PPR)**: Once stable in Next.js 15
2. **ISR for dynamic content**: Market data that changes daily
3. **Edge Functions**: Geolocation-based content
4. **Image CDN**: Move to dedicated CDN if traffic scales
