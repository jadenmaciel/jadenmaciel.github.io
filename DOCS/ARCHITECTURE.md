## High-Level Architecture
- Static single-page application (SPA) built with React and Vite.
- No routing (React Router removed; dependency removed from package.json); simple anchor-link navigation within SPA.
- No active backend; Lambda/infra code exists in repo but is unused and excluded from app build.
- Tailwind CSS provides utility-first styling with brand colors.
- SEO optimized with Open Graph and Twitter Card meta tags.

```
Browser → Vite-built static bundle → React SPA renders sections
```

## Modules / Components
- `src/App.tsx`: Composes top-level sections with SkipLink, Header, main content, Footer (no routing).
- `src/components/`:
  - `SkipLink.tsx`: Keyboard-accessible skip to main content link.
  - `Header.tsx`: Fixed header with logo, navigation, mobile menu, and "Book Now" CTA (links to booking section).
  - `Hero.tsx`: Headline, subheadline, primary/secondary CTAs, hero image, trust badges.
  - `About.tsx`: Feature highlights with icons.
  - `Services.tsx`: Grid of training programs with policy details (class size, age, location, certification).
  - `Pricing.tsx`: AHA-aligned pricing table with detailed descriptions, badges, transparent rates, durations, Family & Friends pricing, booking CTA, and fee disclosure notice above "AHA-Aligned Training" section (uses CSS Modules for styling).
  - `Booking.tsx`: Booky Buzz widget embed with auto-resize messaging, instructor list, same-day booking policy, and payment reminders.
  - `Policies.tsx`: Comprehensive Policies & FAQ section with class logistics, payment policy (cash vs card with 3.00% + $0.15 fee disclosure), refund/reschedule policies, age requirements, class sizes, what to bring, and certification details.
  - `Testimonials.tsx`: Social proof (static data).
  - `Contact.tsx`: Contact info and client-only form.
  - `Footer.tsx`: Business info, AHA note, quick links, social media links.
  - `PaymentNotice.tsx`: Reusable fee disclosure component with high-contrast white text for dark backgrounds.
  - `PricingCard.tsx`: Pricing card component with fee disclosure (for future use).
- `src/components/ui/`:
  - `PrimaryButton.tsx`: Red CTA button component.
  - `SecondaryButton.tsx`: Cream CTA button component.
  - `TrustBadge.tsx`: Trust indicator pill badge.
- `src/lib/`:
  - `fees.ts`: Fee calculation utility (3.00% + $0.15 for online/card payments).
- `src/lambda/`: AWS Lambda handler code (unused, excluded from app build).
- `infra/`: Terraform infrastructure code (unused, for future waiver backend).

## Request / Data Flow
- Initial load:
  - `index.html` → loads `src/main.tsx` → renders `App.tsx`.
- Internal navigation:
  - Anchor links jump to sections within the SPA.
  - All "Book Now" CTAs direct to booking section (#booking).
- Contact form (current):
  - Submit → prevents default → console.log form data → no network request.
  - No stateful backend, no storage, no API calls.

## Multi-Tenant Model
- Not applicable. Static site with no auth or tenant separation.

## Security Model
- No JWTs, API keys, or HMAC in use.
- No secrets or tokens stored client-side.
- Logging:
  - Only console logging of the contact form data in `Contact.tsx`.
  - Recommendation: If backend added, ensure sensitive fields are not logged; implement server-side validation and rate limiting.

## External Integrations
- Icons: `lucide-react`.
- Booking: Booky Buzz widget embedded via iframe with secure postMessage communication.
  - Origin validation for `https://booky.buzz`.
  - Auto-resize height updates based on widget content.
  - Fallback link to public booking page.
- Social Links: Facebook, Instagram, Yelp (opens in new tab with security headers).
- No third-party API clients or token storage.

## Caching Strategy
- Default static file caching by hosting provider/CDN (recommended).
- No client-side state persistence beyond React component state.

## Persistence / Data Model
- None. All data shown is static within components.
- Lambda backend infrastructure exists (`src/lambda/`, `infra/`) but is unused and not called by the UI.

## Testing Strategy
- Current coverage: None.
- Gaps:
  - No unit tests for components.
  - No accessibility tests.
  - No visual regression tests.
- Recommendations:
  - Add component tests for rendering and interactions (e.g., contact form).
  - Add basic a11y checks (axe) in CI.
  - Consider snapshot tests for critical sections.

## Build & Tooling
- `vite` for dev and build; TypeScript configured with project references.
- `tsconfig.app.json` excludes `src/lambda/**` from app build (Lambda code remains but unused).
- Tailwind configured in `tailwind.config.js` with brand colors.
- CSS Modules used for component-specific styles (e.g., `PricingTable.module.css`).
- Global compact sizing via root font-size reduction (15px base, responsive breakpoints).
- Base path configured for GitHub Pages: `/wesleys-cpr/`.
- Scripts:
  - `npm run dev` — start dev server on http://localhost:5173
  - `npm run build` — type-check (app only) then bundle to `dist/`
  - `npm run preview` — preview built app on http://localhost:4173
  - `npm run typecheck` — run TypeScript checks without building (app only)
  - `npm run build:lambda` — type-check Lambda code separately (optional)

## Deployment
- Output: `dist/` static assets.
- Current: GitHub Pages at https://jadenmaciel.github.io/wesleys-cpr/
- GitHub Actions workflow: `.github/workflows/gh-pages.yml` builds and deploys on push to main.
- Future: Migrate to AWS S3/CloudFront with Route 53 domain.

## SEO Assets (Static)
- Social share image: `public/images/og.jpg` (1200×630 JPG) referenced via Open Graph/Twitter meta tags.
- Open Graph meta tags: Title, description, image, URL, type configured in `index.html`.
- Twitter Card meta tags: Summary large image card with title, description, image.
- Apple touch icon: `public/images/logo.png` (180×180) for iOS home screen.
- Robots: `public/robots.txt` allowing all and pointing to sitemap.
- Sitemap: `public/sitemap.xml` with homepage URL.
