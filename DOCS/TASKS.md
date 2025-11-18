Last updated: 11/13/2025 2:45pm

# Task Tracker

## Next Up


## Recently Completed
- **Testing Suite**
  - **Why**: To prevent regressions and ensure code quality.
  - **Scope**: Add unit tests for critical components and utility functions. Implement accessibility checks (e.g., with `axe-core`).
  - **Priority**: Medium
  - **Progress**: Initial testing setup completed with Vitest, React Testing Library, and vitest-axe. `PoliciesSection` component now has comprehensive unit and accessibility tests covering rendering, interactions, keyboard navigation, and ARIA attributes. Test infrastructure is in place for expanding to other components.

- **New Services**
  - **Why**: Owner wants to implement these services
  - **Scope**: Add "First Aid & AED Inspections and Supply" services to website and Booky.buzz software to meet OSHA standards. Use "Call or email for pricing information."
  - **Priority**: High
  - **Progress**: Website implementation complete. Service added to `src/data/courses.ts` with proper pricing messaging. Appears in pricing table. Booky.buzz configuration pending (separate task).

- **Update 'Policies & FAQ' Section**
  - **Why**: Privacy & Data Handling as a separate block above Policies & FAQ makes the page feel disjointed. The new accordion-style design provides a cleaner, unified experience and keeps all policies together.
  - **Scope**:
    - Convert the provided "Policies & FAQ" HTML mockup (accordion with icons, dark theme, collapsible sections) into React component(s) that fit the existing design system (Tailwind utilities, spacing, colors).
    - Replace the existing Policies & FAQ layout with a single accordion component that includes these items:
      - Privacy & Data Handling
      - Class Logistics
      - Payment Policy
      - Refund & Reschedule Policy
    - Move the existing **Privacy & Data Handling** content into the first accordion item and remove the old standalone privacy block from the main page so privacy becomes part of Policies & FAQ instead of sitting above it.
    - Ensure all text matches the latest owner-approved business rules:
      - Age, class size, duration, waiver requirements, same-day booking preference, AHA vs ARC, etc.
    - **Fee consistency**: Do **not** hard-code `3.00% + $0.15` in the Payment Policy. Instead, pull the fee values from the shared `FEES` configuration (or update the copy to stay in sync with whatever is defined there) so the new policy text and email templates always match.
    - Preserve and improve accessibility:
      - Accordion should be keyboard-navigable (Enter/Space to toggle, focus states).
      - Use appropriate ARIA attributes (`aria-expanded`, `aria-controls`, etc.).
      - Ensure headings and contrast remain accessible in the dark theme.
  - **Priority**: High

- **Image Optimization**: Optimized all images with WebP format and responsive images:
  - **Hero image (cpr-stock.png)**: Optimized from 2.3 MB to 14-67 KB (97-99% reduction) with responsive sizes (400w, 600w, 800w, 1200w WebP variants)
  - **Logo (logo.png)**: Optimized from 300 KB to 1-6 KB (97-99% reduction) with retina-ready sizes (48w, 96w, 192w WebP variants)
  - **OG image (og.jpg)**: Created optimized 1200x630px Open Graph image at 86 KB for social media sharing
  - Updated `Hero.tsx` to use `<picture>` element with WebP srcSet for responsive images
  - Updated `Header.tsx` to use optimized logo with WebP srcSet
  - Changed hero image loading from `lazy` to `eager` (above the fold)
  - Updated `index.html` preload tags to use optimized WebP images
  - Created optimization scripts (`scripts/optimize-images.mjs` and `scripts/create-og-image.mjs`) using Sharp for future use
  - All images maintain quality while significantly reducing file sizes for improved page load performance
- **Contact Form Removal & Info-Only Contact**: Removed the contact form and replaced it with a simple info-only Contact component. Created a reusable `ContactInfo` component for consistent contact information display.
- **Privacy Page Redesign**: Restructured the Privacy page with card-based layout, removed Waivers section, consolidated contact info to a single location, and updated styling with custom CSS.
- **Policies Section Positioning**: Moved Policies & FAQ section to the bottom of the page (immediately above Footer) with subtle muted links for better information hierarchy.
- **Booking Component Updates**: Updated booking section text with instructor names (Jacqueline, Debbie, Tim) and improved messaging about same-day bookings.
- **Documentation Overhaul**: Consolidated and updated all project documentation, including `README.md` and `ARCHITECTURE.md`.
- **Pricing Single Source of Truth**: Refactored the application to use `src/data/courses.ts` as the single source of truth for all pricing and course information.
- **Security Enhancements**: Implemented Zod for contact form validation and configured a ZAP scan in the CI/CD pipeline.
- **Dependency Cleanup**: Removed unused dependencies (`react-router-dom`).
- **Component & UI Polish**: Redesigned the pricing section, created a centralized course catalog, and implemented a global compact sizing strategy.
- **Initial Deployment**: Set up the GitHub Actions workflow for automated deployment to GitHub Pages.
- **AWS Migration**: Migrate the site from GitHub Pages to a custom domain using AWS S3 and CloudFront.
- **Privacy-Respecting Analytics**: Add a lightweight analytics solution to track site traffic.

## Backlog

- **Waiver Flow**: Re-implement the waiver capture system, either with a serverless solution or a third-party service like PandaDoc (Ask Austin for PandaDoc.)
