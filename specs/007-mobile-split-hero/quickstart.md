# Quickstart: Mobile Split Hero

## Prerequisites

- Use branch `feat/4-mobile-first-split-hero`.
- Install frontend dependencies if needed from `frontend/`.
- Run validation from the paths shown below and rerun affected checks after any relevant late change.

## Automated Validation

From `frontend/`:

```bash
npm run build
npm run test:ci
npm run format:check
```

Expected results:

- Build completes successfully.
- Focused public landing tests confirm the split hero renders both apartments, uses local image sources, and exposes correct CTA anchors.
- Existing app shell/navbar tests continue to pass.
- Format check passes.

## Manual Browser Validation

Start the Angular dev server from `frontend/`:

```bash
npm start
```

Open `/` and inspect these viewports:

- 360px wide mobile viewport
- 390px wide mobile viewport
- 430px wide mobile viewport
- One desktop viewport

Expected visible outcomes:

- The hero immediately below the navbar occupies the first mobile viewport and looks polished.
- Ático and Jardín are both immediately understandable as distinct apartment choices.
- Each apartment side shows a local image area and short copy.
- Text and CTAs do not overlap image content or each other.
- `Ver Ático` moves to `#atico`.
- `Ver Jardín` moves to `#jardin`.
- Availability/contact-intent CTA moves to `#contact` and does not imply live booking.
- Desktop remains acceptable with both apartment choices and CTAs usable.

## Scope Review

Before final reporting, review `git diff --name-only` and confirm changes are limited to:

- Spec Kit artifacts under `specs/007-mobile-split-hero/`;
- existing public landing component/template/styles/tests;
- public landing presentation model/translations when needed for hero copy.

Report any app shell, backend, database, migration, admin, reservation, payment, iCal/OTA, dependency, or external media changes as scope drift unless directly justified by the plan.
