#!/bin/bash
# Setup Git Hooks for Local Development

set -e

HOOKS_DIR=".git/hooks"
PROJECT_ROOT="$(git rev-parse --show-toplevel)"

echo "🔧 Setting up Git hooks..."

# Create pre-commit hook
cat > "$HOOKS_DIR/pre-commit" << 'EOF'
#!/bin/bash
# Pre-commit hook: Run validation before committing

echo "🔍 Running pre-commit validations..."

# Run format check
echo "  → Checking code formatting..."
if ! npm run format:check --silent; then
    echo "❌ Code formatting check failed!"
    echo "   Run 'npm run format' to fix formatting issues."
    exit 1
fi

# Run linter
echo "  → Running linter..."
if ! npm run lint --silent; then
    echo "❌ Linting failed!"
    echo "   Fix linting errors before committing."
    exit 1
fi

# Run type check
echo "  → Type checking..."
if ! npm run typecheck --silent; then
    echo "❌ Type check failed!"
    echo "   Fix TypeScript errors before committing."
    exit 1
fi

echo "✅ All pre-commit checks passed!"
exit 0
EOF

# Make hook executable
chmod +x "$HOOKS_DIR/pre-commit"

# Create pre-push hook
cat > "$HOOKS_DIR/pre-push" << 'EOF'
#!/bin/bash
# Pre-push hook: Run build validation before pushing

echo "🚀 Running pre-push validations..."

# Run build
echo "  → Building application..."
if ! npm run build --silent; then
    echo "❌ Build failed!"
    echo "   Fix build errors before pushing."
    exit 1
fi

echo "✅ Build successful - ready to push!"
exit 0
EOF

# Make hook executable
chmod +x "$HOOKS_DIR/pre-push"

echo "✅ Git hooks installed successfully!"
echo ""
echo "Hooks installed:"
echo "  • pre-commit  - Format, lint, and type checks"
echo "  • pre-push    - Build validation"
echo ""
echo "To skip hooks (not recommended):"
echo "  git commit --no-verify"
echo "  git push --no-verify"
