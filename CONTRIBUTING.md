# Contributing Guide

Thank you for contributing to Silverstone Ranch Homes!

## 🚀 Getting Started

### Prerequisites
- Node.js 20 or later
- npm 9 or later
- Git

### Setup
```bash
# Clone the repository
git clone https://github.com/DrJanDuffy/silverstoneranchhomes.com.git
cd silverstoneranchhomes.com

# Install dependencies
npm install

# Start development server
npm run dev
```

## 🔄 Development Workflow

### 1. Create a Feature Branch
```bash
git checkout -b feature/your-feature-name
# or
git checkout -b fix/issue-description
```

### 2. Make Changes
- Write clean, readable code
- Follow existing code style
- Add comments for complex logic
- Update documentation as needed

### 3. Validate Locally
```bash
# Run all checks before committing
npm run validate

# Individual checks
npm run typecheck      # TypeScript
npm run lint          # ESLint
npm run format:check  # Prettier
```

### 4. Commit Changes
```bash
# Format code
npm run format

# Commit with descriptive message
git add .
git commit -m "feat: add new feature description"
```

### 5. Push and Create PR
```bash
git push -u origin feature/your-feature-name
```

Then create a Pull Request on GitHub.

## 📋 Commit Message Format

Follow conventional commits:

- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation changes
- `style:` Code style changes (formatting, etc.)
- `refactor:` Code refactoring
- `perf:` Performance improvements
- `test:` Adding or updating tests
- `chore:` Maintenance tasks

**Examples:**
```
feat: add property search filter
fix: resolve mobile navigation issue
docs: update deployment instructions
perf: optimize image loading
```

## ✅ Pull Request Checklist

Before submitting a PR, ensure:

- [ ] All automated CI checks pass
- [ ] Code is formatted (`npm run format`)
- [ ] No TypeScript errors (`npm run typecheck`)
- [ ] No linting errors (`npm run lint`)
- [ ] Build succeeds (`npm run build`)
- [ ] Changes are documented
- [ ] PR description explains what and why

## 🤖 Automated Checks

Your PR will automatically run:
- ✅ Build validation
- ✅ Type checking
- ✅ Linting
- ✅ Format checking
- ✅ Bundle size analysis
- 📊 Performance audit
- 🔒 Security scan

See [.github/AUTOMATION.md](.github/AUTOMATION.md) for details.

## 🏗️ Project Structure

```
silverstoneranchhomes.com/
├── app/                 # Next.js app directory
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Home page
│   └── globals.css     # Global styles
├── components/         # React components
├── lib/               # Utility functions
├── public/            # Static assets
├── .github/           # GitHub workflows & configs
└── package.json       # Dependencies & scripts
```

## 🎨 Code Style

### TypeScript
- Use TypeScript for all new files
- Define types/interfaces for props
- Avoid `any` type
- Use strict mode

### React
- Prefer function components
- Use React Server Components by default
- Add "use client" only when needed
- Extract reusable logic to custom hooks

### Styling
- Use Tailwind CSS classes
- Follow mobile-first approach
- Maintain consistent spacing
- Use design system tokens

## 🐛 Reporting Issues

When reporting bugs, include:
1. Description of the issue
2. Steps to reproduce
3. Expected vs actual behavior
4. Screenshots (if applicable)
5. Browser/device information

## 📞 Questions?

For questions or discussions:
- Open a GitHub Issue
- Email: janet.duffy@bhhsnv.com

## 📄 License

By contributing, you agree that your contributions will be licensed under the same license as the project.
