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
- Course Duration Updates
  - Updated First Aid and CPR-AED course durations from 4 hours to 6 hours in Pricing and Services components.
  - Updated course descriptions to reflect 6-hour comprehensive training for HSV-First Aid and HSV-CPR-AED.
  - Verified combo course already shows correct 6-hour duration.
- Policies & FAQ Enhancement & SEO Improvements
  - Enhanced Policies component with comprehensive FAQ-style content organized into sections:
    - Class Logistics: Age requirements, class size, location, duration, what to bring, late arrival policy.
    - Payment Policy: Cash vs online/card payment methods, 3.00% + $0.15 fee disclosure, payment timing, deposit info.
    - Refund & Reschedule Policy: Rescheduling rules, refund terms, no-call/no-show policy.
  - Added "Policies & FAQ" link to Header navigation and Footer Quick Links.
  - Added Open Graph and Twitter Card meta tags to `index.html` for enhanced social sharing.
  - Added apple-touch-icon meta tag for iOS home screen.
- Dependency Cleanup
  - Removed unused `react-router-dom` and `@types/react-router-dom` from dependencies.
  - Confirmed no imports of react-router-dom in codebase (safe to remove).
  - Reduced bundle size by removing unused routing library.
- Fee Disclosure Visibility & Waiver Removal
  - Removed waiver UI components and routes (Waiver.tsx, WaiverForm.tsx).
  - Removed React Router (back to simple SPA without routing).
  - Added high-contrast fee disclosure notice above "AHA-Aligned Training" section in Pricing component.
  - Created PaymentNotice component with pure white text for visibility on dark backgrounds.
  - Updated fee disclosure placement: removed from Hero, added to Pricing section below booking CTA.
  - Excluded Lambda backend code from TypeScript app build to fix CI (Lambda code remains but unused).
  - Removed all waiver references from Booking component and email templates.
- Policies Section & Booking Flow Updates
  - Removed Schedule component and nav link (replaced by direct booking).
  - Created Policies component with comprehensive policy information (age requirements, class sizes, payment terms, deposit, cancellation, late arrival, certification details, waiver).
  - Updated all "Book Now" CTAs to point to booking section instead of contact form.
  - Added Family & Friends pricing ($25/person) with Min 6/Max 12 constraints and certification upgrade path.
  - Updated Pricing component with durations (6h First Aid/CPR-AED, 6h Heartsaver combo) and ARC surcharge notes.
  - Enhanced Booking component with instructor list (Jacqueline, Debbie Scott, Tum Poston) and same-day booking policy.
  - Updated Services component with policy details (class size, age limits, location, certification options).
- Pricing Section Redesign & Global Compact Sizing
  - Redesigned Pricing section from card layout to modern table design with detailed course descriptions.
  - Added badge support (Popular, Best Value) for highlighting key courses.
  - Implemented global font-size reduction (15px base, 14.5px on large screens, 15.5px on small phones) for compact, efficient layout.
  - Tightened spacing and typography in Pricing section for better density.
  - Removed scrollbars from pricing table; table displays fully without internal scrolling.
  - Uses CSS Modules (`PricingTable.module.css`) for scoped, component-specific styling.
- Service Area Copy Update & Centralized Course Catalog
  - Updated all service area references from "Fresno" to "Central Valley" across components and documentation.
  - Created centralized course catalog in `src/data/courses.ts` with all pricing and course details.
  - Refactored Pricing component to render from centralized data source.
  - Added AHA e-learning section with external links (no price/time display).
  - Updated header location to "Central Valley, CA".
  - Added Troute payment processing disclosure to Booking component.
  - Created `DOCS/OWNER_NOTES.md` with owner operational policies (Sunday policy, payment processing, service area).
  - Added Maintainers' Notes section to README with link to OWNER_NOTES.
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
  - Vite base path configured for `/wesleys-cpr/`.
  - GitHub Actions workflow created for automated deployment.
  - All asset paths use proper BASE_URL handling.
  - Site live at: https://jadenmaciel.github.io/wesleys-cpr/

- SEO Polish (Initial)
  - `robots.txt` added with sitemap reference.
  - `sitemap.xml` published with homepage entry.
- SEO Enhancement (Latest)
  - Open Graph meta tags added (title, description, image, URL, type).
  - Twitter Card meta tags added (summary_large_image with title, description, image).
  - Apple touch icon meta tag added for iOS home screen.
  - Note: `public/images/og.jpg` (1200×630 JPG) needs to be created for social sharing previews.

- Git Hygiene
  - `.gitignore`, `.editorconfig`, `.env.example` added.
  - npm scripts standardized (dev, build, preview, typecheck).

## Backlog / Next Up
- (Future) Reintroduce waiver flow via PandaDoc or serverless when account is ready
  - Why: Customers need to complete waivers after booking.
  - Scope: Implement waiver capture via PandaDoc or serverless backend; maintain fee disclosure visibility on pricing CTA section (white text on dark background).
  - Note: Lambda backend infrastructure exists in repo (`src/lambda/`, `infra/`) but is currently unused and excluded from app build.
  - Priority: Low (Future enhancement)

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
