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
- **Pricing transparency**: AHA-aligned pricing cards for all training programs.
- **Online booking**: Booky Buzz widget embedded with secure postMessage communication.
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
- **Current**: Live on GitHub Pages at https://jadenmaciel.github.io/wesleys-cpr/
- **Automation**: GitHub Actions workflow builds and deploys on push to main.
- **Configuration**: Base path `/wesleys-cpr/` configured in `vite.config.ts`.
- **Future**: Migrate to AWS S3/CloudFront with Route 53 custom domain.

### SEO
- **Open Graph/Twitter image**: `public/images/og.jpg` (1200×630) referenced via meta tags.
- **Robots**: `public/robots.txt` allows all and points to sitemap.
- **Sitemap**: `public/sitemap.xml` includes homepage URL.

### Status
- **Production-ready**:
  - All visual sections render with brand colors and responsive layout.
  - Logo and favicon display correctly on all devices.
  - Navigation anchors, CTAs, and contact links function.
  - Mobile-responsive navigation with accessible hamburger menu.
  - Keyboard navigation and focus management.
  - Skip link for screen readers.
  - Contact form captures inputs and logs to console.
  - Booky Buzz booking widget integrated with secure messaging.
- **Future enhancements**:
  - Backend form handling or email service integration.
  - Privacy-respectful analytics.
  - Automated accessibility and performance tests.

### Maintainers' Notes

For operational decisions, owner policies, and source-of-truth documentation, see [`DOCS/OWNER_NOTES.md`](DOCS/OWNER_NOTES.md).

### Ownership / Contact
- **Business**: Wesley's CPR, Fresno, CA
- **Contact**: j.wes@wesleyscprfresno.com, (559) 360-1016
- **Live Site**: https://jadenmaciel.github.io/wesleys-cpr/