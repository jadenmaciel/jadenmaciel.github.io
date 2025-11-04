## High-Level Architecture
- Static single-page application (SPA) built with React and Vite.
- No backend, database, or external services configured.
- Tailwind CSS provides utility-first styling with brand colors.

```
Browser → Vite-built static bundle → React SPA renders sections
```

## Modules / Components
- `src/App.tsx`: Composes top-level sections with SkipLink, Header, main content, Footer.
- `src/components/`:
  - `SkipLink.tsx`: Keyboard-accessible skip to main content link.
  - `Header.tsx`: Fixed header with logo, navigation, mobile menu, and "Book Now" CTA.
  - `Hero.tsx`: Headline, subheadline, primary/secondary CTAs, hero image, trust badges.
  - `About.tsx`: Feature highlights with icons.
  - `Services.tsx`: Grid of training programs.
  - `Pricing.tsx`: AHA-aligned pricing table with detailed descriptions, badges, and transparent rates (uses CSS Modules for styling).
  - `Schedule.tsx`: Upcoming classes (static data).
  - `Booking.tsx`: Booky Buzz widget embed with auto-resize messaging.
  - `Testimonials.tsx`: Social proof (static data).
  - `Contact.tsx`: Contact info and client-only form.
  - `Footer.tsx`: Business info, AHA note, quick links, social media links.
- `src/components/ui/`:
  - `PrimaryButton.tsx`: Red CTA button component.
  - `SecondaryButton.tsx`: Cream CTA button component.
  - `TrustBadge.tsx`: Trust indicator pill badge.

## Request / Data Flow
- Initial load:
  - `index.html` → loads `src/main.tsx` → renders `App.tsx`.
- Internal navigation:
  - Anchor links jump to sections within the SPA.
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
- `vite` for dev and build; `typescript` project refs enabled for build.
- Tailwind configured in `tailwind.config.js` with brand colors.
- CSS Modules used for component-specific styles (e.g., `PricingTable.module.css`).
- Global compact sizing via root font-size reduction (15px base, responsive breakpoints).
- Base path configured for GitHub Pages: `/wesleys-cpr/`.
- Scripts:
  - `npm run dev` — start dev server on http://localhost:5173
  - `npm run build` — type-check then bundle to `dist/`
  - `npm run preview` — preview built app on http://localhost:4173
  - `npm run typecheck` — run TypeScript checks without building

## Deployment
- Output: `dist/` static assets.
- Current: GitHub Pages at https://jadenmaciel.github.io/wesleys-cpr/
- GitHub Actions workflow: `.github/workflows/gh-pages.yml` builds and deploys on push to main.
- Future: Migrate to AWS S3/CloudFront with Route 53 domain.

## SEO Assets (Static)
- Social share image: `public/images/og.jpg` referenced via Open Graph/Twitter meta.
- Robots: `public/robots.txt` allowing all and pointing to sitemap.
- Sitemap: `public/sitemap.xml` with homepage URL.
