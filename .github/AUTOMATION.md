# Automation Documentation

This project uses automated workflows to ensure code quality, security, and performance.

## 🤖 Automated Workflows

### CI/CD Pipeline
**Workflow:** `.github/workflows/ci.yml`  
**Triggers:** Pull requests and pushes to `main`  
**Actions:**
- ✅ Lint checking
- ✅ Production build validation
- ✅ Build output verification

### Vercel Preview Checks
**Workflow:** `.github/workflows/vercel-preview.yml`  
**Triggers:** Pull request updates  
**Actions:**
- ✅ TypeScript type checking
- ✅ Code formatting validation
- ✅ Bundle size analysis
- ✅ Preview build generation

### Performance Monitoring
**Workflow:** `.github/workflows/performance.yml`  
**Triggers:** Pull requests & weekly schedule (Mondays at 9 AM)  
**Actions:**
- 📊 Lighthouse performance audit
- 📊 Core Web Vitals measurement
- 📊 Accessibility checks

### Security Audits
**Workflow:** `.github/workflows/security.yml`  
**Triggers:** Pull requests, pushes to `main`, daily at 2 AM  
**Actions:**
- 🔒 npm vulnerability scanning
- 🔒 Dependency audit
- 🔒 Outdated package detection

### Dependency Updates
**Configuration:** `.github/dependabot.yml`  
**Schedule:** Weekly on Mondays at 9 AM  
**Actions:**
- 📦 Automated npm dependency updates
- 📦 GitHub Actions version updates
- 📦 Grouped minor/patch updates
- 📦 Auto-labeled and assigned PRs

## 🛠️ Local Development Scripts

### Validation Commands
```bash
# Run all validations (recommended before commit)
npm run validate

# Individual checks
npm run typecheck      # TypeScript compilation check
npm run lint          # ESLint
npm run format:check  # Prettier formatting
npm run pre-commit    # Same as validate
```

### Development Workflow
```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Format code
npm run format
```

## 🎯 Best Practices

### Before Committing
1. Run `npm run validate` to catch issues early
2. Ensure all tests pass locally
3. Format code with `npm run format`

### Pull Request Guidelines
1. All CI checks must pass before merging
2. Review Lighthouse performance results
3. Check bundle size changes
4. Address security audit findings

### Dependabot PRs
- **Minor/patch updates:** Review and merge weekly
- **Major updates:** Review changelog, test thoroughly
- **Security updates:** Merge immediately after validation

## 🔍 Monitoring

### Performance Budgets
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Total Blocking Time: < 200ms
- Cumulative Layout Shift: < 0.1

### Build Size Alerts
Monitor `.next` build output size in CI logs. Significant increases may indicate:
- Unnecessary dependencies
- Large unoptimized assets
- Missing tree-shaking

## 📚 Resources
- [Next.js Best Practices](https://nextjs.org/docs/app/guides/production-checklist)
- [Tailwind CSS v4 Optimization](https://tailwindcss.com/docs)
- [Vercel Deployment Docs](https://vercel.com/docs)
