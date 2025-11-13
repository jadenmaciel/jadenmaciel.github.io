# Wesley's CPR — Marketing Site

A static marketing website for Wesley's CPR built with React, Vite, TypeScript, and Tailwind CSS, deployed via GitHub Pages.

## Overview

This is a production-ready static Single-Page Application (SPA) that provides course information, pricing, policies, and online booking for Wesley's CPR training services. The site is optimized for performance, accessibility, and security.

## Live URLs

- **GitHub Pages**: [https://jadenmaciel.github.io/wesleys-cpr/](https://jadenmaciel.github.io/wesleys-cpr/)
- **Custom Domain**: [https://wesleyscpr.com/](https://wesleyscpr.com/) (AWS deployment)

## Tech Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite 5
- **Styling**: Tailwind CSS
- **Routing**: Single-page application with anchor-based navigation
- **State Management**: Local component state (no global state manager)
- **Testing**: Vitest with React Testing Library

## Key Features

### Courses & Pricing

All course data and pricing are managed in a single source of truth: **`src/data/courses.ts`**

The catalog includes:
- **HSV-First Aid** — AHA-aligned certification
- **HSV-First Aid, CPR-AED Combo** — Complete certification package
- **HSV Skill Only Session** — Skills validation for pre-completed online courses
- **Heartcode BLS (Skills only)** — Healthcare provider level skills check
- **BLS Provider** — Full healthcare professional certification
- **BLS Renewal** — Refresher course with 10% discount for returning customers
- **American Red Cross BLS** — Red Cross certification option
- **N95 Fit Testing** — Appointment-only service (contact for pricing)
- **First Aid & AED Inspections and Supply** — On-site OSHA-aligned inspections and restocking (contact for pricing)
- **American Red Cross Heartsaver Course**
- **Friends and Family** — Non-certification group training
- **AHA e-Learning** — Link-out to official AHA online courses

Any changes to course offerings or prices should be made in `src/data/courses.ts`. The UI will update automatically.

### Policies & FAQ Accordion

A comprehensive accordion-based policies section (`PoliciesSection` component) with four collapsible panels:

1. **Privacy & Data Handling** — Data collection, usage, and user rights
2. **Class Logistics** — Age requirements, class size, duration, certification details, waiver requirements
3. **Payment Policy** — Payment methods, processing fees, deposit requirements, and fee disclosure
4. **Refund & Reschedule Policy** — Rescheduling rules, refund terms, and cancellation policies

All policies use dynamic fee references from `src/lib/fees.ts` to ensure consistency.

### Booking Integration

- **Booky.buzz iframe** — Embedded booking widget with secure sandbox restrictions
- **Security**: CSP meta tag restricts frame sources to `https://booky.buzz`
- **Communication**: `postMessage` API with strict origin checks for iframe resizing
- **Fallback**: Direct link to Booky.buzz booking page if widget fails to load
- **No local contact form** — Contact information is display-only (phone, email, address)

### Payment Processing Fees

All payment processing fees are defined in **`src/lib/fees.ts`** as a single source of truth:

- **Card Fee (Percentage):** 3.00% (stored as `0.03` in `FEES.card_fee_percent`)
- **Card Fee (Fixed):** $0.15 (stored as `0.15` in `FEES.card_fee_fixed`)

These fees are dynamically interpolated into UI components (pricing tables, policies) and documentation. To update fees, modify the `FEES` constant in `src/lib/fees.ts`.

## Local Development

### Prerequisites

- Node.js v18+
- npm (or your preferred package manager)

### Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/jadenmaciel/wesleys-cpr.git
   cd wesleys-cpr
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```
   The site will be available at `http://localhost:5173`.

### Available Scripts

- `npm run dev` — Start development server
- `npm run build` — Build for production (outputs to `dist/`)
- `npm run preview` — Preview production build locally (serves `dist/` at `http://localhost:4173`)
- `npm run typecheck` — Run TypeScript type checking
- `npm test` — Run tests with Vitest
- `npm run test:watch` — Run tests in watch mode
- `npm run test:ui` — Open Vitest UI

## Security & CI

### Security Audit Workflow

The repository includes a GitHub Actions workflow (`.github/workflows/security.yml`) that runs security checks:

1. **`npm audit`** — Checks for known vulnerabilities in dependencies with `--audit-level=high`
2. **OWASP ZAP Baseline Scan** — Dynamic security testing against the live GitHub Pages deployment
   - **Target URL**: `https://jadenmaciel.github.io/wesleys-cpr/`
   - **Configuration**: `fail_action: false` (prevents blocking deployments on informational findings)
   - **Artifact**: ZAP scan report uploaded as `zap-scan-report-{run_id}`

The workflow runs:
- On every push to `main` and `security` branches
- Weekly via scheduled cron job (Sunday at midnight UTC)

### Security Features

- **Input Validation**: Zod schema validation for form inputs (if forms are added)
- **Iframe Sandboxing**: Booky.buzz iframe restricted with `sandbox` attributes
- **Content Security Policy**: CSP meta tag in `index.html` restricts frame sources and mitigates XSS
- **Origin Checks**: `postMessage` handlers validate message origins
- **Link Security**: External links use `rel="noopener noreferrer"` to prevent tab-nabbing
- **No Secrets**: No API keys, secrets, or sensitive data in client-side code

### Known Limitations

- **GitHub Pages Headers**: Custom HTTP security headers (e.g., full CSP, HSTS) cannot be configured on GitHub Pages
- **404 Spiders**: As a SPA, automated scanners may report false 404 errors for the project path (`/wesleys-cpr/`)

## Project Structure

```
wesleys-cpr/
├── src/
│   ├── components/          # React components (Header, Hero, Pricing, Policies, etc.)
│   ├── data/
│   │   └── courses.ts       # Single source of truth for course catalog
│   ├── lib/
│   │   └── fees.ts          # Payment processing fee constants
│   ├── lambda/              # Future serverless backend (not active)
│   └── routes/              # Route components (Privacy page)
├── infra/                   # Terraform infrastructure code (parked/future use)
├── public/                  # Static assets (images, robots.txt, sitemap.xml)
├── .github/workflows/       # CI/CD workflows
│   └── security.yml         # Security audit workflow
└── dist/                    # Production build output (gitignored)
```

### Important Notes

- **Backend/Infra**: `src/lambda/` and `infra/` directories contain code for a future serverless backend but are not part of the current production deployment. They are explicitly excluded from the frontend build via `tsconfig.app.json`.
- **Temporary Artifacts**: The `.gemini_tmp/` directory (if present) contains temporary AI-generated artifacts and is ignored by Git. It is not part of the project architecture.

## Deployment

The site is deployed automatically to GitHub Pages on every push to the `main` branch via the workflow defined in `.github/workflows/gh-pages.yml`.

The Vite configuration includes a `base` path of `/wesleys-cpr/` to ensure all asset links work correctly on GitHub Pages.

## License

MIT
