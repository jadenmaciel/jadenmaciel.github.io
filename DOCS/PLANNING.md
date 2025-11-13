Last updated: 11/13/2025 9:53am

## Problem & Business Value
Prospects need a credible, clear way to discover and book CPR and safety training in the Central Valley. The site should instill trust, clarify offerings, and drive conversions to calls or bookings.

## Users
- Primary: Prospective students (individuals, parents, healthcare workers).
- Secondary: Businesses/schools seeking on-site group training.

## Core Functional Requirements
- Present training programs with clear descriptions and certification details.
- Display a comprehensive Policies & FAQ section (positioned at the bottom of the page).
- Provide clear calls to action to book classes.
- Provide contact info with actionable links (call, email) - info-only, no contact form.
- Integrate booking via the Booky.buzz widget.

## Non-Functional Requirements
- Static, fast, and reliable delivery via GitHub Pages.
- Mobile-first responsive design.
- Accessibility best practices (semantic HTML, contrast, focus management).
- SEO-friendly titles and meta descriptions.

## Security & Compliance
- No secrets in client-side code.
- No contact form (info-only contact section to reduce attack surface).
- Iframe sandboxing for the booking widget.
- Basic CSP via meta tag.
- If a backend is added in the future:
  - Validate and sanitize input server-side.
  - Avoid storing PII unless required; if stored, document retention and access.
  - Do not log sensitive content.

## Integration Points
- **Current**: Booky.buzz booking widget (iframe with secure `postMessage`).
- **Future**:
  - Waiver capture system (currently disabled in UI).

## Risks / Constraints
- Contact information uses `mailto:` and `tel:` links only (no contact form). Users must use their default email/phone apps.
- The project lacks a comprehensive test suite, increasing the risk of regressions.

## Deployment Status
- **Current**: Deployed on GitHub Pages at [https://jadenmaciel.github.io/wesleys-cpr/](https://jadenmaciel.github.io/wesleys-cpr/). It is also deployed on AWS as (https://wesleyscpr.com/)
- **Automation**: A GitHub Actions workflow handles deployment on every push to the `main` branch.
- **Base Path**: The Vite configuration is set with a `base` path of `/wesleys-cpr/`.