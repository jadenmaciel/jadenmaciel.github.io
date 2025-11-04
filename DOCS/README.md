# README.md (Draft)

## Wesley's CPR — Marketing Site
A static marketing website for Wesley's CPR built with React, Vite, and Tailwind CSS.

### Overview
- **What it is**: A single-page marketing site showcasing CPR and safety training services.
- **Who uses it**: Prospective customers in the Central Valley seeking CPR/BLS/First Aid training.
- **Why it exists**: Promote services, convey credibility (AHA), and provide clear contact info and calls to action.

### Key Features
- **Responsive SPA** with semantic sections: SkipLink, Header, Hero, About, Services, Pricing, Schedule, Booking, Testimonials, Contact, Footer.
- **Brand-consistent UI** using defined colors: `navy` (#0C1D2F), `red` (#C6423B), `cream` (#F6E3C7), `dark` (#142131).
- **Reusable UI components**: PrimaryButton, SecondaryButton, TrustBadge.
- **CTA flow**: "View Classes" and "Book a Session".
- **Centralized course catalog**: Course data and pricing managed in `src/data/courses.ts` as single source of truth.
- **Pricing transparency**: AHA-aligned pricing table with detailed course descriptions, badges (Popular, Best Value), and transparent rates.
- **Compact design**: Global font-size reduction (15px base) for a tighter, more efficient layout across all sections.
- **Online booking**: Booky Buzz widget embedded with secure postMessage communication.
- **Payment processing**: Troute payment disclosure in Booking component.
- **Contact details**: Address, phone, and email visible and linked; social media links in footer.
- **Accessibility**: Skip link, semantic landmarks, keyboard navigation, mobile menu, focus management, reduced motion support.
- **Simple contact form** (client-side only; logs to console, no backend submission).

### Tech Stack
- **Framework**: React 18, Vite 5
- **Language**: TypeScript
- **Styling**: Tailwind CSS 3
- **Icons**: lucide-react
- **Deployment target**: Static hosting (e.g., Vercel, Netlify, S3/CloudFront, GitHub Pages)

### Auth Model
- No authentication or authorization is implemented or required for this static site.
- No JWTs, API keys, HMAC, or session handling present.
- Multi-tenant context is not applicable.

### Local Development

#### Prerequisites
- Node.js 18+ and npm
- No databases, queues, or external services are required.

#### Setup
```bash
npm install
npm run dev
# Open http://localhost:5173
```

#### Build & Preview
```bash
npm run build
npm run preview
# Open the preview URL shown in the terminal
```

### Environment Variables / Secrets
- None required. The site is fully static with no runtime secrets.
- Security note: Do not embed private keys, tokens, or PII in the client code.

### Tests
- No test suite is present.
- Recommendation: Add component/UI snapshot tests and accessibility checks (TODO: see TASKS.md).

### Deployment
- The output is a static bundle in `dist/` created by Vite.
- Works on any static hosting provider:
  - Vercel: Connect repo and deploy (zero-config for Vite).
  - Netlify: `npm run build` then serve `dist/`.
  - S3/CloudFront: Upload `dist/` and configure distribution.
- No containers or Dockerfiles exist in this repo. Containerization is optional and not required.

### Status
- Working today:
  - All visual sections render with brand colors and responsive layout.
  - Navigation anchors, CTAs, and contact links function.
  - Mobile-responsive navigation with accessible hamburger menu.
  - Keyboard navigation and focus management.
  - Skip link for screen readers.
  - Contact form captures inputs and logs to console.
  - Booky Buzz booking widget integrated with secure messaging.
  - Logo and favicon display correctly on all devices.
  - Deployed to GitHub Pages: https://jadenmaciel.github.io/wesleys-cpr/
- WIP / Not implemented:
  - No backend form handling.
  - No analytics or tracking.
  - No automated tests.

### Git Hygiene
- `.gitignore`: Node modules, build artifacts, env files, IDE cruft, `.cursor/` folder.
- `.editorconfig`: Consistent formatting across editors.
- `.env.example`: Template for future environment variables.

### Maintainers' Notes

For operational decisions, owner policies, and source-of-truth documentation, see [`DOCS/OWNER_NOTES.md`](DOCS/OWNER_NOTES.md).

### Ownership / Contact
- Business: Wesley's CPR, Fresno, CA
- Contact: j.wes@wesleyscprfresno.com, (559) 360-1016