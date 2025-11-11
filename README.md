# Wesley's CPR — Marketing Site

A static marketing website for Wesley's CPR built with React, Vite, and Tailwind CSS, deployed via GitHub Pages.

## Current State

- **Framework**: React 18 / Vite 5 SPA (Single-Page Application).
- **Deployment**: Static site hosted on GitHub Pages at [jadenmaciel.github.io/wesleys-cpr/](https://jadenmaciel.github.io/wesleys-cpr/).
- **Routing**: No client-side router (e.g., `react-router-dom`). Navigation is handled by simple anchor links (`#section`).
- **Backend**: No active backend. The contact form uses client-side validation with Zod and falls back to a `mailto:` link.
- **Booking**: Booking is handled by an embedded Booky.buzz iframe with sandbox restrictions and origin checks for security.

## Key Features

- **Responsive SPA** with semantic sections for accessibility.
- **Brand-consistent UI** using Tailwind CSS.
- **Centralized Course Catalog**: All course data and pricing are managed in `src/data/courses.ts` as the single source of truth.
- **Transparent Pricing**: A detailed pricing table is dynamically generated from the course catalog.
- **Online Booking**: A `Booky.buzz` widget is embedded for course registration.
- **Contact Form**: A client-side validated form using Zod schema validation. No PII is logged in production builds. Falls back to a `mailto:` link for form submission.

## Pricing and Fees

### Course Pricing Source of Truth

All pricing and course details are defined in a single file:
**`src/data/courses.ts`**

Any changes to course offerings or prices should be made in this file. The UI will update automatically.

### Payment Processing Fee Disclosure

All payment processing fees are defined in `src/lib/fees.ts` as a single source of truth. The current fees are:
- **Card Fee (Percentage):** 3.00% (stored as `0.03` in `FEES.card_fee_percent`)
- **Card Fee (Fixed):** $0.15 (stored as `0.15` in `FEES.card_fee_fixed`)

This information is interpolated into all relevant UI components and documentation. To update fees, modify the `FEES` constant in `src/lib/fees.ts`; all components and documentation will reflect the changes.

## Local Development

### Prerequisites

- Node.js v18+
- npm (or your preferred package manager)

### Setup

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/jadenmaciel/wesleys-cpr.git
    cd wesleys-cpr
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```
    The site will be available at `http://localhost:5173`.

### Build and Preview

To create a production build and preview it locally:

1.  **Build the application:**
    ```bash
    npm run build
    ```
    This command bundles the static assets into the `dist/` directory.

2.  **Preview the build:**
    ```bash
    npm run preview
    ```
    This command serves the `dist/` directory at `http://localhost:4173`.

## Security Posture

### Quick Wins Implemented

- **Client-Side Validation**: The contact form uses `zod` for schema validation to prevent malformed data submission. No PII is logged in production builds.
- **Console Guard**: In production builds, `console.log` statements are removed to prevent leaking information.
- **Link Hygiene**: All external links use `rel="noopener noreferrer"` to prevent tab-nabbing.
- **Iframe Security**: The Booky.buzz iframe is sandboxed with strict `allow` permissions (`allow-scripts`, `allow-forms`, `allow-popups`, `allow-same-origin`) and uses origin checks on `postMessage` events to ensure messages are only accepted from `https://booky.buzz`.
- **CSP Meta Tag**: A Content Security Policy is implemented via a `<meta>` tag in `index.html` to mitigate cross-site scripting (XSS) risks. The CSP restricts frame sources to `https://booky.buzz` and enforces other security boundaries.

### CI/CD Hardening

- **`npm audit`**: The CI pipeline includes an `npm audit` step that checks for vulnerabilities in dependencies with `--audit-level=high`.
- **OWASP ZAP Scan**: A ZAP baseline scan is run against the live GitHub Pages URL to check for common web vulnerabilities.
  - **Target**: `https://jadenmaciel.github.io/wesleys-cpr/`
  - **Configuration**: `fail_action` is set to `false` to prevent the build from failing on informational findings.
  - **Artifact**: The scan report is uploaded as an artifact named `zap_scan_report`.

### Known Limitations

- **GitHub Pages Headers**: It is not possible to set custom security headers (like a full CSP or `X-Frame-Options`) on GitHub Pages. The current security model relies on meta tags and application-level hardening.
- **404 Spiders**: The site is a Single-Page Application, and the project path (`/wesleys-cpr/`) can sometimes cause automated scanners to report false 404 errors.

## Deployment

The site is deployed automatically to GitHub Pages on every push to the `main` branch. The workflow is defined in `.github/workflows/gh-pages.yml`.

## Next Actions

- **Security Checklist**: Implement further security hardening measures based on a standard security checklist.
- **Testing**: Add a comprehensive test suite, including unit, integration, and accessibility tests.
- **Contact Form Backend**: Consider adding a serverless backend for contact form submission if email delivery becomes a priority.