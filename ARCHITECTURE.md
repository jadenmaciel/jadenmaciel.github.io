# Architecture

This document provides a high-level overview of the technical architecture for the Wesley's CPR static site.

## System Overview

The application is a **Static Single-Page Application (SPA)** built with React and Vite. It is designed to be fast, secure, and easily maintainable. There is no active backend; all content is pre-built and served statically.

```
User Browser --> GitHub Pages CDN --> Static Assets (HTML, CSS, JS) --> React SPA
```

## Frontend

- **Framework**: React 18 with TypeScript.
- **Build Tool**: Vite 5, configured for a static build.
- **Styling**: Tailwind CSS for utility-first styling, with some component-specific styles using CSS Modules.
- **State Management**: Local component state (`useState`, `useEffect`). No global state manager is used.
- **Routing**: None. The application is a single page, and navigation is handled with HTML anchor links (e.g., `#pricing`).

### Key Directories

- **`src/`**: Contains all the application source code.
- **`src/components/`**: Reusable React components that make up the UI.
- **`src/data/`**: Contains the single source of truth for course and pricing data (`courses.ts`).
- **`public/`**: Static assets that are copied directly to the build output directory.
- **`dist/`**: The output directory for the production build, containing the optimized static assets.

## Backend

There is **no active backend**.

- The repository contains code for a future serverless backend in `src/lambda/` (AWS Lambda) and `infra/` (Terraform).
- This code is **explicitly excluded** from the frontend build process via `tsconfig.app.json`.
- The contact form currently uses a `mailto:` link and does not make any API calls.

## External Integrations

- **Booking**: An `iframe` is used to embed the **Booky.buzz** booking widget.
  - The `iframe` is sandboxed with the `allow-scripts`, `allow-same-origin`, and `allow-forms` permissions.
  - Communication with the iframe for resizing is handled via `postMessage`, with strict origin checks to ensure messages are only accepted from `https://booky.buzz`.

## Security

### Implementation Status

- **Input Validation**: The contact form uses **Zod** for client-side schema validation.
- **Iframe Sandboxing**: The Booky.buzz `iframe` is restricted to prevent it from performing privileged actions.
- **Content Security Policy (CSP)**: A basic CSP is delivered via a `<meta>` tag in `index.html` to help prevent XSS attacks.
- **Link Security**: External links use `rel="noopener noreferrer"` to protect against tab-nabbing.

### CI/CD Security

- **Dependency Scanning**: `npm audit` is run as part of the CI pipeline to check for known vulnerabilities in dependencies.
- **Dynamic Application Security Testing (DAST)**: An **OWASP ZAP baseline scan** is run against the live GitHub Pages URL on each deployment to identify common security issues.
  - The scan is configured with `fail_action: false` to avoid blocking deployments on informational findings.

### Known Limitations

- **HTTP Headers on GitHub Pages**: GitHub Pages does not allow for the configuration of custom HTTP security headers (e.g., a full `Content-Security-Policy`, `Strict-Transport-Security`, `X-Frame-Options`). Security is therefore focused on application-level measures.

## Build & Deployment

- **Build Process**: `npm run build` uses Vite to compile the TypeScript/React code and bundle it into static HTML, CSS, and JavaScript files in the `dist/` directory.
- **Deployment**: The site is deployed to **GitHub Pages** automatically on every push to the `main` branch using a GitHub Actions workflow defined in `.github/workflows/gh-pages.yml`.
- **Base Path**: The Vite configuration includes a `base` path of `/wesleys-cpr/` to ensure that all asset links work correctly on GitHub Pages.