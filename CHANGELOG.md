# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/).

## [Unreleased]

### UI

- **testimonials**: Tuned the auto-scrolling carousel for mobile vs desktop speeds and hid the horizontal scrollbar while preserving hover-to-pause and motion-safe behavior.

## [1.0.0] - 2025-11-11

### Features

- **pricing**: Established a single source of truth for all course and pricing data in `src/data/courses.ts`. The `Pricing.tsx` component now dynamically renders its content from this file, ensuring consistency and simplifying future updates.

### Bug Fixes

- **typing**: Wrapped a Zod error message in `String()` to satisfy the `ReactNode` type requirement in `Contact.tsx`.
- **ui**: Escaped literal braces in `Privacy.tsx` to ensure `{uuid}` renders as text rather than being interpreted by React.

### Documentation

- **consolidate**: Merged and updated all major documentation files (`README.md`, `ARCHITECTURE.md`, `DOCS/*`) to reflect the current state of the application.
- **align**: Removed all references to the defunct `react-router-dom` and `Schedule.tsx` component.
- **privacy**: Promoted the `privacy-data-handling.md` content into the public-facing `Privacy.tsx` component and updated the site footer to link to it.

### Continuous Integration

- **zap**: Updated the ZAP baseline scan configuration in the `security.yml` workflow to target the correct GitHub Pages URL (`https://jadenmaciel.github.io/wesleys-cpr/`), set `fail_action` to `false`, and specified the artifact name as `zap-baseline-report`.
