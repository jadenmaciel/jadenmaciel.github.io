# Task Tracker

## Next Up

- **Serverless Contact Form**
  - **Why**: The current `mailto:` link is not ideal. A serverless function would provide a better user experience with in-page feedback.
  - **Scope**: Re-introduce the AWS Lambda and API Gateway infrastructure for form handling. Add loading/error/success states to the `Contact.tsx` component.
  - **Priority**: High

- **Image Optimization**
  - **Why**: Large images slow down page load times.
  - **Scope**: Compress all images in the repository, especially the hero image. Consider using modern formats like WebP.
  - **Priority**: Medium

- **Testing Suite**
  - **Why**: To prevent regressions and ensure code quality.
  - **Scope**: Add unit tests for critical components and utility functions. Implement accessibility checks (e.g., with `axe-core`).
  - **Priority**: Medium

## Recently Completed

- **Documentation Overhaul**: Consolidated and updated all project documentation, including `README.md` and `ARCHITECTURE.md`.
- **Pricing Single Source of Truth**: Refactored the application to use `src/data/courses.ts` as the single source of truth for all pricing and course information.
- **Security Enhancements**: Implemented Zod for contact form validation and configured a ZAP scan in the CI/CD pipeline.
- **Dependency Cleanup**: Removed unused dependencies (`react-router-dom`).
- **Component & UI Polish**: Redesigned the pricing section, created a centralized course catalog, and implemented a global compact sizing strategy.
- **Initial Deployment**: Set up the GitHub Actions workflow for automated deployment to GitHub Pages.

## Backlog

- **Waiver Flow**: Re-implement the waiver capture system, either with a serverless solution or a third-party service like PandaDoc.
- **Privacy-Respecting Analytics**: Add a lightweight analytics solution to track site traffic.
- **AWS Migration**: Migrate the site from GitHub Pages to a custom domain using AWS S3 and CloudFront.