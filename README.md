## Wesley's CPR — Marketing Site
A static marketing website for Wesley's CPR built with React, Vite, and Tailwind CSS.

### Overview
- **What it is**: A single-page marketing site showcasing CPR and safety training services.
- **Who uses it**: Prospective customers in the Central Valley seeking CPR/BLS/First Aid training.
- **Why it exists**: Promote services, convey credibility (AHA), and provide clear contact info and calls to action.

### Key Features
- **Responsive SPA** with semantic sections: SkipLink, Header, Hero, About, Services, Pricing, Booking, Policies, Testimonials, Contact, Footer.
- **Brand-consistent UI** using defined colors: `navy` (#0C1D2F), `red` (#C6423B), `cream` (#F6E3C7), `dark` (#142131).
- **Reusable UI components**: PrimaryButton, SecondaryButton, TrustBadge, PaymentNotice, PricingCard.
- **CTA flow**: "View Classes" and "Book a Session".
- **Centralized course catalog**: Course data and pricing managed in `src/data/courses.ts` as single source of truth.
- **Pricing transparency**: AHA-aligned pricing table with detailed course descriptions, badges (Popular, Best Value), transparent rates, and Family & Friends group pricing.
- **Fee disclosures**: Clear disclosure of 3.00% + $0.15 processing fee for online/card payments; cash has no fee. Fee calculation utility and components show grand totals.
- **Policies section**: Comprehensive policy information including age requirements (12+), class sizes (Min 3/Max 19), payment terms, deposit, cancellation policies, and certification details.
- **Compact design**: Global font-size reduction (15px base) for a tighter, more efficient layout across all sections.
- **Online booking**: Booky Buzz widget embedded with secure postMessage communication; all booking CTAs direct to booking section.
- **Payment processing**: Troute payment disclosure in Booking component with payment and deposit reminders.
- **Contact details**: Address, phone, and email visible and linked; social media links in footer.
- **Accessibility**: Skip link, semantic landmarks, keyboard navigation, mobile menu, focus management, reduced motion support, error summaries with anchors.
- **Simple contact form** (client-side only; logs to console, no backend submission) with waiver reminder.

### Tech Stack
- **Framework**: React 18, Vite 5
- **Language**: TypeScript
- **Styling**: Tailwind CSS 3 + CSS Modules (for component-specific styles like Pricing table)
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
- **Frontend**: `VITE_WAIVER_API_URL` - API Gateway endpoint URL for waiver submissions (set at build time)
  - Example: `https://abc123.execute-api.us-west-2.amazonaws.com`
  - Set in `.env` file or build environment
- **Backend**: Configuration stored in AWS SSM Parameter Store (not in client code)
- Security note: Do not embed private keys, tokens, or PII in the client code.

### Tests
- No test suite is present.
- Recommendation: Add component/UI snapshot tests and accessibility checks (TODO: see TASKS.md).

### Deployment

#### Frontend (GitHub Pages)
- **Current**: Live on GitHub Pages at https://jadenmaciel.github.io/wesleys-cpr/
- **Automation**: GitHub Actions workflow builds and deploys on push to main.
- **Configuration**: Base path `/wesleys-cpr/` configured in `vite.config.ts`.
- **Environment**: Set `VITE_WAIVER_API_URL` in GitHub Actions secrets or `.env` file before building.

#### Backend (AWS Serverless)
- **Infrastructure**: Terraform configuration in `infra/` directory
- **Components**: API Gateway HTTP API, Lambda (Node 20), S3 (waiver storage), SES (email notifications)
- **Deployment**: See `infra/README.md` for detailed deployment steps
- **Prerequisites**: AWS CLI configured, SES email addresses verified, unique S3 bucket name

**Quick Deploy Steps:**
1. Build and package Lambda: `npm run lambda:package`
2. Configure Terraform: Copy `infra/terraform.tfvars.example` to `infra/terraform.tfvars` and edit
3. Deploy: `cd infra && terraform init && terraform apply`
4. Get API URL from Terraform outputs and set `VITE_WAIVER_API_URL` for frontend builds

**Future**: Migrate frontend to AWS S3/CloudFront with Route 53 custom domain.

### SEO
- **Open Graph/Twitter image**: `public/images/og.jpg` (1200×630) referenced via meta tags.
- **Robots**: `public/robots.txt` allows all and points to sitemap.
- **Sitemap**: `public/sitemap.xml` includes homepage URL.

### Status
- **Production-ready**:
  - All visual sections render with brand colors and responsive layout.
  - Pricing section redesigned with modern table layout, badges, detailed descriptions, and Family & Friends pricing.
  - Policies section provides comprehensive policy information (age, class size, payment, cancellation, certification).
  - All booking CTAs direct to booking section with instructor selection and payment reminders.
  - Global compact sizing implemented (15px base font) for improved space efficiency.
  - Logo and favicon display correctly on all devices.
  - Navigation anchors, CTAs, and contact links function.
  - Mobile-responsive navigation with accessible hamburger menu.
  - Keyboard navigation and focus management.
  - Skip link for screen readers.
  - Contact form captures inputs and logs to console with waiver reminder.
  - Booky Buzz booking widget integrated with secure messaging.
- **Future enhancements**:
  - Backend form handling or email service integration.
  - Privacy-respectful analytics.
  - Automated accessibility and performance tests.

### Payment Processing Fee

- The site shows a fee notice below the main booking CTA in the pricing section (above "AHA-Aligned Training").
- Copy: "Online/card payments add **3.00% + $0.15**; cash has **no fee**. You'll see any fee and your grand total before paying online."

**Note**: Waiver capture is currently disabled. Any Lambda/infra added earlier remains in the repo but is not called by the UI.

### Maintainers' Notes

For operational decisions, owner policies, and source-of-truth documentation, see [`DOCS/OWNER_NOTES.md`](DOCS/OWNER_NOTES.md).

### Ownership / Contact
- **Business**: Wesley's CPR, Fresno, CA
- **Contact**: j.wes@wesleyscprfresno.com, (559) 360-1016
- **Live Site**: https://jadenmaciel.github.io/wesleys-cpr/