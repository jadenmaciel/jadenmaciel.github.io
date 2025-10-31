## Problem & Business Value
Prospects need a credible, clear way to discover and book CPR and safety training in Fresno. The site should instill trust, clarify offerings, and drive conversions to calls or bookings.

## Users
- Primary: Prospective students (individuals, parents, healthcare workers).
- Secondary: Businesses/schools seeking on-site group training.

## Core Functional Requirements
- Present training programs with clear descriptions and certification details.
- Display schedule highlights and calls to action to contact or book.
- Provide contact info with actionable links (call, email).
- Maintain brand consistency and accessible UI.
- Optional future: basic booking integration.

## Non-Functional Requirements
- Static, fast, and reliable delivery.
- Mobile-first responsive design.
- Accessibility best practices (semantic HTML, contrast, focus management).
- SEO-friendly titles/meta; clear headings.

## Security & Compliance
- No secrets in client code.
- No third-party trackers by default; if added, must be privacy-aware and disclosed.
- If form backend is added:
  - Validate and sanitize input server-side.
  - Avoid storing PII unless required; if stored, document retention and access.
  - Do not log sensitive content; mask emails/phones in logs.
  - Rate-limit and bot-protect endpoints.

## Performance / SLA
- Page interactive under 2s on standard mobile network for initial load.
- Lighthouse performance score target: 90+.

## Observability / Audit Logging
- Current: None (static site).
- If backend endpoints are added later:
  - Request logging without sensitive payloads.
  - Error monitoring and alerting (e.g., hosted logs/metrics).
  - Minimal retention aligned with privacy.

## Integration Points
- Current: None.
- Future candidates:
  - Booking/scheduling embed (e.g., Calendly).
  - Email service for contact form (e.g., SES, Mailgun) via serverless function.
  - Privacy-preserving analytics.

## Risks / Constraints / Pain Points
- No working backend for form submission; potential lead loss if users expect in-page confirmation.
- No tests; risk of regressions.
- Asset placeholders (favicon, images) may look unbranded.

## Open Questions
- ✅ Hosting provider: GitHub Pages (current), AWS S3/CloudFront (planned).
- TODO: Do we want a backend for contact submissions or mailto-only?
- TODO: Approved analytics vendor and consent approach?
- ✅ Compliance: AHA note added to Footer and Pricing sections.

## Deployment Status
- Current: GitHub Pages at https://jadenmaciel.github.io/wesleys-cpy/
- Automation: GitHub Actions workflow on push to main.
- Base path: `/wesleys-cpy/` configured in Vite.
- Asset handling: All images and icons use proper BASE_URL resolution.
