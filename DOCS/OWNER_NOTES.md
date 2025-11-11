# Owner Ops Notes — Wesley's CPR

This document contains operational notes for the business owner.

## Scheduling / Hours

- **No work on Sundays.** This is an operational rule enforced manually by the owner. The website does not programmatically block Sundays.

## Courses & Pricing (Source of Truth)

- The canonical source for all course and pricing information is the `src/data/courses.ts` file in the repository. All UI components render directly from this file.

## Payment Processing

- **Processor**: Troute
- **Fees**: $25/mo + 2.7% + $0.15 per transaction.
- **Funding Speed**: 24h for in-person; 24h or 2-day for online.

## Service Area

- The public-facing service area is the **"Central Valley"**.