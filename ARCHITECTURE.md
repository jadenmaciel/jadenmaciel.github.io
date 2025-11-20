# Architecture

This document provides a high-level overview of the technical architecture for the Wesley's CPR static site.

## System Overview

The application is a **Static Single-Page Application (SPA)** built with React, Vite, and TypeScript. It is designed to be fast, secure, and easily maintainable. There is no active backend; all content is pre-built and served statically.

```
User Browser --> GitHub Pages CDN --> Static Assets (HTML, CSS, JS) --> React SPA
```

## Frontend

### Framework & Build

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite 5, configured for a static build
- **Styling**: Tailwind CSS for utility-first styling
- **State Management**: Local component state (`useState`, `useEffect`). No global state manager is used
- **Routing**: None. The application is a single page, and navigation is handled with HTML anchor links (e.g., `#pricing`, `#booking`, `#policies`)

### Key Directories

- **`src/`**: Contains all application source code
- **`src/components/`**: Reusable React components that make up the UI
  - `Header.tsx` — Navigation header with anchor links
  - `Hero.tsx` — Hero section with call-to-action
  - `About.tsx` — About section
  - `Services.tsx` — Services overview
  - `Pricing.tsx` — Pricing section with dynamic table generated from `courses.ts`
  - `PricingCard.tsx` — Reusable pricing card component
  - `Booking.tsx` — Booky.buzz iframe integration with `postMessage` handling
  - `PoliciesSection.tsx` — Accordion-based policies component (Privacy, Logistics, Payment, Refund)
  - `Testimonials.tsx` — Multi-card testimonials carousel with Tailwind-driven auto-scroll animation on the track (duplicated lists for infinite looping). The animation is active on both mobile and desktop with tuned speeds (faster on mobile, slower on desktop), pauses on hover, and includes a hidden horizontal scrollbar.
  - `Contact.tsx` — Contact information display (info-only, no form)
  - `ContactInfo.tsx` — Reusable contact info component
  - `Footer.tsx` — Site footer with links and compliance note
- **`src/data/`**: Contains the single source of truth for course and pricing data
  - **`courses.ts`** — Course catalog with pricing, descriptions, badges, and metadata
- **`src/lib/`**: Utility functions and shared constants
  - **`fees.ts`** — Payment processing fee constants (`FEES.card_fee_percent`, `FEES.card_fee_fixed`) and calculation utility
- **`src/routes/`**: Route components for standalone pages
  - `Privacy.tsx` — Privacy page (standalone route, if using router)
- **`public/`**: Static assets that are copied directly to the build output directory
  - `images/` — Optimized WebP images with responsive srcSets
  - `robots.txt` — Search engine crawler instructions
  - `sitemap.xml` — Site structure for search engines
- **`dist/`**: The output directory for the production build, containing the optimized static assets (gitignored)

## Data Flow

### Course & Pricing Data

**Source of Truth**: `src/data/courses.ts`

The course catalog is a TypeScript array (`COURSES`) of `Course` objects. Each course includes:
- `code`: Internal identifier
- `name`: Display name
- `price`: Number or string (e.g., "Contact for pricing", "25 / person")
- `desc`: Description
- `badge`: Optional badge ("Popular", "Best Value")
- `priceNote`: Optional pricing note
- `notes`: Optional array of bullet points
- `isELearning`: Boolean flag for e-learning courses
- `elink`: Optional URL for e-learning courses

**Flow**:
1. Courses defined in `src/data/courses.ts`
2. Imported by `Pricing.tsx` component
3. Dynamically rendered in pricing table and pricing cards
4. Any changes to `courses.ts` automatically propagate to UI

### Payment Processing Fees

**Source of Truth**: `src/lib/fees.ts`

Fee constants are defined as:
```typescript
export const FEES = {
  card_fee_percent: 0.03,  // 3%
  card_fee_fixed: 0.15,    // $0.15
};
```

**Flow**:
1. Fees defined in `src/lib/fees.ts`
2. Imported by components that need fee information:
   - `PoliciesSection.tsx` — Payment Policy accordion panel displays fees dynamically
   - Email templates (future) — Can import fees for consistent messaging
3. Fee values are formatted and displayed in UI: `{(FEES.card_fee_percent * 100).toFixed(2)}% + $${FEES.card_fee_fixed.toFixed(2)}`
4. Updates to `fees.ts` automatically propagate to all components

### Navigation Flow

**Single-Page Application (SPA) with Anchor-Based Navigation**:

1. User clicks navigation link (e.g., "Pricing", "Booking", "Policies")
2. Browser scrolls to target section using anchor hash (e.g., `#pricing`, `#booking`, `#policies`)
3. No page reload or client-side router involved
4. Smooth scrolling handled by CSS or browser default behavior

**Sections** (in order):
- `#main` — Skip link target for accessibility
- `#hero` — Hero section
- `#about` — About section
- `#services` — Services overview
- `#pricing` — Pricing table
- `#booking` — Booking iframe
- `#testimonials` — Testimonials
- `#policies` — Policies & FAQ accordion
- `#contact` — Contact information

## External Integrations

### Booking: Booky.buzz

**Integration Method**: Embedded `iframe` with secure sandbox restrictions

**Implementation** (`src/components/Booking.tsx`):
- **URL**: `https://booky.buzz/widget/book/wesleyscpr` (adds `timezone=America/Los_Angeles` query param to force Pacific Time in Booky.buzz emails)
- **Sandbox Attributes**: `allow-scripts allow-forms allow-popups allow-same-origin`
- **Communication**: `postMessage` API for dynamic iframe resizing
  - Only accepts messages from `https://booky.buzz` origin
  - Listens for `buzz:widget:height` message type
  - Updates iframe height dynamically (minimum 480px, default 720px)
- **Security**:
  - CSP meta tag in `index.html` restricts `frame-src` to `https://booky.buzz`
  - Origin validation prevents XSS via postMessage
  - Sandbox restrictions limit iframe capabilities
- **Fallback**: Direct link to `https://booky.buzz/book/wesleyscpr` if widget fails to load

**Flow**:
1. User views booking section
2. Booky.buzz iframe loads (lazy loading)
3. Widget sends height updates via `postMessage`
4. Component adjusts iframe height dynamically
5. User completes booking within iframe (payment processed by Troute)

## Backend & Infrastructure

### Current Status: No Active Backend

There is **no active backend** in the current production deployment.

### Parked/Future Use

The repository contains code for a future serverless backend:

- **`src/lambda/`**: AWS Lambda function code
  - `waiver-handler.ts` — Waiver capture and storage handler
  - `schemas/waiver.json` — JSON schema for waiver validation
  - Explicitly excluded from frontend build via `tsconfig.app.json`
- **`infra/`**: Terraform infrastructure code
  - `main.tf`, `variables.tf`, `outputs.tf`, `providers.tf` — Terraform configuration
  - `terraform.tfvars.example` — Example configuration
  - Not part of current deployment pipeline

These directories are maintained for future use but are not integrated into the current static site deployment.

## Security

### Implementation Status

#### Client-Side Security

- **Input Validation**: Zod schema validation for form inputs (if forms are added in the future)
- **Iframe Sandboxing**: Booky.buzz iframe restricted to prevent privileged actions
- **Content Security Policy (CSP)**: CSP meta tag in `index.html` restricts:
  - Frame sources to `https://booky.buzz`
  - Script sources to `'self'`
  - Style sources to `'self' 'unsafe-inline'`
  - Image sources to `'self' data:`
  - Base URI to `'self'`
  - Object sources to `'none'`
- **Origin Validation**: `postMessage` handlers validate message origins before processing
- **Link Security**: External links use `rel="noopener noreferrer"` to prevent tab-nabbing
- **No Secrets**: No API keys, secrets, or sensitive data in client-side code

#### CI/CD Security

**Security Audit Workflow** (`.github/workflows/security.yml`):

1. **Dependency Scanning** (`npm audit`):
   - Runs on push to `main` or `security` branches
   - Runs weekly via cron schedule (Sunday at midnight UTC)
   - Checks for known vulnerabilities with `--audit-level=high`
   - Fails build if high-severity vulnerabilities are found

2. **Dynamic Application Security Testing (DAST)** (OWASP ZAP Baseline Scan):
   - **Target URL**: `https://jadenmaciel.github.io/wesleys-cpr/`
   - **Tool**: `zaproxy/action-baseline@v0.15.0`
   - **Configuration**:
     - `fail_action: false` — Does not block deployments on informational findings
     - Pre-check verifies site availability (HTTP 200) before scanning
     - Artifact name: `zap-scan-report-{run_id}`
   - **Schedule**: Same as dependency scanning (push + weekly cron)
   - **Report**: ZAP baseline report uploaded as GitHub Actions artifact

### Known Limitations

- **HTTP Headers on GitHub Pages**: GitHub Pages does not allow configuration of custom HTTP security headers (e.g., full `Content-Security-Policy`, `Strict-Transport-Security`, `X-Frame-Options`). Security is therefore focused on application-level measures (meta tags, CSP, iframe sandboxing).
- **404 Spiders**: As a Single-Page Application, automated security scanners may report false 404 errors for the project path (`/wesleys-cpr/`).

## Build & Deployment

### Build Process

**Command**: `npm run build`

**Steps**:
1. TypeScript type checking (`tsc -b tsconfig.app.json`)
2. Vite build process:
   - Transpiles TypeScript to JavaScript
   - Bundles React components and dependencies
   - Optimizes assets (images, CSS, JS)
   - Outputs static HTML, CSS, and JavaScript files to `dist/`

**Output**: `dist/` directory containing optimized static assets

### Deployment

**Platform**: GitHub Pages (primary deployment)

**Automation**: GitHub Actions workflow (`.github/workflows/gh-pages.yml`)
- Triggers on every push to `main` branch
- Builds the application using `npm run build`
- Deploys `dist/` contents to GitHub Pages
- Base path configured as `/wesleys-cpr/` in `vite.config.ts`

**Custom Domain**: AWS deployment also available at `https://wesleyscpr.com/` (see `DOCS/PLANNING.md` for details)

### Base Path Configuration

The Vite configuration includes a `base` path of `/wesleys-cpr/` to ensure that all asset links (CSS, JS, images) work correctly on GitHub Pages. This is configured in `vite.config.ts`:

```typescript
export default defineConfig({
  base: '/wesleys-cpr/',
  // ...
});
```

## Project Exclusions

### Temporary Artifacts

- **`.gemini_tmp/`**: Directory for temporary AI-generated artifacts. This directory is **not part of the architecture** and is ignored by Git (via `.gitignore`). If present, it contains scratch code generated during development and should not be referenced in production code.

### Build Exclusions

- **`src/lambda/`**: Excluded from frontend build via `tsconfig.app.json` `exclude` patterns
- **`infra/`**: Not part of frontend build process
- **`node_modules/`**: Ignored by Git and excluded from builds
- **`dist/`**: Build output directory, gitignored

## Future Considerations

- **Waiver Flow**: Re-implement waiver capture system (serverless or third-party service like PandaDoc)
- **Backend Integration**: Activate `src/lambda/` and `infra/` if backend functionality is needed
- **Analytics**: Consider privacy-respecting analytics solution if traffic tracking becomes a priority
- **Testing**: Expand test coverage beyond `PoliciesSection` component
