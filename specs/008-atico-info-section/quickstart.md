# Quickstart

## Prerequisites

- Use the local issue branch `feat/5-polish-atico-information-section`.
- Install frontend dependencies if missing with `npm install` from `frontend/`.

## Automated Validation

From `frontend/`:

```powershell
npm run test:ci
npm run build
```

Expected result:

- Unit tests pass, including public landing DOM/copy/anchor coverage.
- Production build completes without Angular, TypeScript, or budget failures.

## Manual Mobile Smoke

Start the frontend dev server from `frontend/`:

```powershell
npm start -- --host 127.0.0.1
```

Then inspect the public landing page in a mobile viewport:

1. Open `/`.
2. Activate the Ático link from the public navbar.
3. Activate the Ático CTA from the hero panel.
4. Confirm the viewport lands on the Ático section.
5. Confirm the Ático section is visually distinct, concise, scannable on mobile, and has no text overlap or horizontal scrolling.
6. Confirm changed public copy does not claim exact capacity, rooms, address, amenities, prices, policies, availability, booking, payment, iCal, OTA, or automatic reservation behavior.

Validation must be rerun after relevant late changes. If the smoke check or automated validation is not rerun after a relevant change, report it as not revalidated rather than passed.
