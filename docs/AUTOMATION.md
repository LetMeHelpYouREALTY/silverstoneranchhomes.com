# SEO & Deployment Automation

Comprehensive automation for SEO validation, schema testing, and continuous deployment optimized for 2026 best practices.

## Overview

This project includes automated workflows for:
- ✅ Schema.org markup validation
- ✅ Lighthouse SEO audits
- ✅ Production site monitoring
- ✅ PR-based SEO checks
- ✅ Scheduled health monitoring

## Workflows

### 1. SEO Validation (`seo-validation.yml`)

**Triggers:**
- Pull requests to `main` affecting SEO files
- Push to `main`
- Manual dispatch

**Jobs:**
1. **validate-schema** - Validates JSON-LD schema markup
   - Checks for required schema types
   - Verifies recommended properties
   - Validates AEO (Answer Engine Optimization) properties
   - Validates GEO (Geographic + Generative Engine) properties

2. **lighthouse-seo** - Runs Lighthouse CI audits
   - Performance score (min 80%)
   - Accessibility score (min 90%)
   - Best practices score (min 90%)
   - **SEO score (min 95%)**
   - Tests multiple pages

3. **seo-checks** - Quick validation checks
   - Meta tags presence
   - Robots.txt configuration
   - Sitemap validation
   - FAQ schema detection
   - AEO optimization

4. **report** - Generates consolidated summary

**Usage:**
```bash
# Triggered automatically on PRs
# Or run manually:
gh workflow run seo-validation.yml
```

### 2. Scheduled SEO Monitor (`scheduled-seo-monitor.yml`)

**Triggers:**
- Daily at 9 AM UTC
- Manual dispatch

**Jobs:**
1. **monitor** - Production site health check
   - Validates all key pages
   - Checks schema markup
   - Verifies AEO/GEO properties
   - Validates robots.txt for AI crawlers
   - Checks sitemap

2. **schema-health** - Schema validation
   - Validates all schema types
   - Checks completeness

**Results:**
- Stored as artifacts for 30 days
- Notifications on failures

### 3. Vercel Production Deploy (`vercel-production.yml`)

**Triggers:**
- Push to `main`
- Manual dispatch

**Purpose:**
Deploys to Vercel production automatically after merge.

## Scripts

### `validate-schema.js`

Validates Schema.org JSON-LD markup for 2026 best practices.

**Checks:**
- Required schema types (Organization, RealEstateAgent, LocalBusiness, WebSite, Place)
- Recommended properties per schema type
- AEO properties (potentialAction, speakable, knowsAbout)
- GEO properties (geo, areaServed, geoRadius)

**Usage:**
```bash
npm run validate:schema
```

**Output:**
- Console report
- `schema-validation-results.json` file

### `seo-monitor.js`

Production site SEO health monitor.

**Checks:**
- HTTP status codes
- Title tags
- Meta descriptions
- OpenGraph images
- Schema markup presence
- FAQ schema
- Canonical URLs
- Viewport meta
- AEO properties
- GEO properties
- Robots.txt for AI crawlers
- Sitemap configuration

**Usage:**
```bash
npm run validate:seo
# Or with custom URL:
SITE_URL=https://example.com npm run validate:seo
```

**Output:**
- Detailed console report
- `seo-monitor-results.json` file

## Lighthouse CI

### Configuration (`lighthouserc.json`)

**Pages audited:**
- Homepage
- Homes for sale
- Agent page
- Amenities
- Silverstone Ranch

**Assertions:**
- Performance: min 80% (warn)
- Accessibility: min 90% (error)
- Best practices: min 90% (warn)
- **SEO: min 95% (error)**

**Usage:**
```bash
npm run lighthouse
```

## NPM Scripts

| Script | Description |
|--------|-------------|
| `npm run validate:schema` | Validate schema markup |
| `npm run validate:seo` | Monitor production SEO |
| `npm run lighthouse` | Run Lighthouse CI audits |

## CI/CD Pipeline

### On Pull Request:
1. Schema validation
2. Lighthouse audits (3 runs averaged)
3. SEO best practices checks
4. Results posted as PR comment

### On Merge to Main:
1. All SEO validations run
2. Automatic Vercel deployment
3. Production monitoring scheduled

### Daily:
1. Production site health check
2. Schema validation
3. Results archived
4. Notifications on failures

## Best Practices Enforced

### SEO (Search Engine Optimization)
- ✅ Complete schema markup with all optional properties
- ✅ Meta tags (title, description, OG, Twitter)
- ✅ Canonical URLs
- ✅ Robots.txt and sitemap.xml
- ✅ Mobile-first viewport
- ✅ Semantic HTML

### GEO (Generative Engine Optimization)
- ✅ AI crawler access (GPTBot, Claude, Perplexity)
- ✅ Geographic coordinates and service areas
- ✅ Structured knowledge areas
- ✅ Rich entity definitions

### AEO (Answer Engine Optimization)
- ✅ PotentialAction schemas for voice assistants
- ✅ Speakable content selectors
- ✅ FAQ schema for featured snippets
- ✅ KnowsAbout properties for expertise signals

## Monitoring & Alerts

### Automatic Notifications
- ❌ Failed SEO validations
- ❌ Schema errors
- ❌ Lighthouse score drops
- ⚠️ Missing recommended properties

### Artifact Storage
- SEO monitor results (30 days)
- Schema validation reports (30 days)
- Lighthouse reports (90 days)

## Troubleshooting

### Schema Validation Failures
```bash
# Run locally to see details:
npm run validate:schema

# Check results:
cat schema-validation-results.json
```

### Lighthouse Failures
```bash
# Build and test locally:
npm run build
npm run start
npm run lighthouse
```

### Production Monitoring Issues
```bash
# Test against staging:
SITE_URL=https://staging.example.com npm run validate:seo
```

## Manual Triggers

All workflows can be triggered manually:

```bash
# Trigger SEO validation
gh workflow run seo-validation.yml

# Trigger monitoring
gh workflow run scheduled-seo-monitor.yml

# Trigger deployment
gh workflow run vercel-production.yml
```

## Future Enhancements

- [ ] Core Web Vitals monitoring
- [ ] Competitive SEO analysis
- [ ] Automated schema updates
- [ ] AI-generated SEO suggestions
- [ ] Integration with Google Search Console
- [ ] Automated sitemap updates

## Related Documentation

- [SEO Best Practices 2026](../README.md#seo)
- [Schema.org Guidelines](../lib/seo.ts)
- [FAQ Content Strategy](../lib/faqs.ts)

## Support

For issues or questions about automation:
1. Check GitHub Actions logs
2. Review artifact outputs
3. Run scripts locally for debugging
4. Open an issue with results attached
