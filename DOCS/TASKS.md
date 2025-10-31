## Current Work
- Contact Form Submission Strategy
  - Why: Currently logs to console; needs safe handling and user feedback.
  - Scope: Decide backend (serverless or email service) vs. mailto-only; if backend, add API endpoint and validation; add loading/error/success states in `Contact.tsx`.
  - Priority: High

- Image Optimization
  - Why: Current hero image is 2.3MB; needs compression for web performance.
  - Scope: Optimize `cpr-stock.png` and other images; consider WebP format; add responsive srcset.
  - Priority: Mid

## Recently Completed
- Brand Foundation Complete
  - Tailwind theme extended with brand colors (`navy`, `red`, `cream`, `dark`).
  - Logo and favicon implemented with proper base-path handling for GitHub Pages.
  - Hero image replaced placeholder with real CPR training photo.

- Reusable UI Components
  - PrimaryButton, SecondaryButton, TrustBadge created in `src/components/ui/`.
  - Header and Hero refactored to use components.

- Accessible Navigation & Mobile Menu
  - SkipLink.tsx added for keyboard navigation.
  - Mobile hamburger menu with ARIA attributes.
  - Focus management and reduced motion support.
  - Main landmark added to App.tsx.

- Pricing & Booking Integration
  - Pricing.tsx added with transparent AHA-aligned rates.
  - Booking.tsx integrated Booky Buzz widget with secure postMessage.
  - Social media links added to Footer.

- GitHub Pages Deployment
  - Vite base path configured for `/wesleys-cpy/`.
  - GitHub Actions workflow created for automated deployment.
  - All asset paths use proper BASE_URL handling.
  - Site live at: https://jadenmaciel.github.io/wesleys-cpy/

- Git Hygiene
  - `.gitignore`, `.editorconfig`, `.env.example` added.
  - npm scripts standardized (dev, build, preview, typecheck).

## Backlog / Next Up
- Basic Analytics (Privacy-Respectful)
  - Why: Understand traffic and conversions while respecting privacy.
  - Scope: Add lightweight, privacy-first analytics (e.g., self-hosted or cookieless option) with a clear consent approach; document in README.
  - Priority: Low

- Accessibility Automated Checks
  - Why: Prevent regressions and enforce baseline a11y.
  - Scope: Add unit/integration tests or CI checks (axe) for key pages/components.
  - Priority: Mid

- Form Input Validation and Sanitization
  - Why: Prevent malformed submissions; resilience if backend added.
  - Scope: Client-side validation for `Contact.tsx`; if backend exists later, server-side validation there.
  - Priority: High

- Performance Polishing
  - Why: Faster loads and better Lighthouse scores.
  - Scope: Optimize hero image size, code-splitting, icon tree-shaking; preconnect/manifest tweaks.
  - Priority: Mid

- AWS Migration
  - Why: Move from GitHub Pages to custom domain with CDN.
  - Scope: Setup S3 + CloudFront, Route 53 DNS, update base path and canonical URL.
  - Priority: Low

- CI/CD Enhancements
  - Why: Add quality gates before deployment.
  - Scope: Add linting, typecheck, and accessibility tests to workflow.
  - Priority: Mid
