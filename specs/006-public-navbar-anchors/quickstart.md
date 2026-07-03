# Quickstart: Validate Public Navbar Anchors

Use this after implementing issue #3. Re-run affected checks after any late changes to app shell template, navbar behavior, public landing template, translations, styles, routing, or tests.

## Prerequisites

- Frontend dependencies installed with the repository's existing npm workflow.
- Work is on `feat/3-public-navbar-anchors`.

## Frontend Checks

From `frontend/`:

```powershell
npm run format:check
npm run test:ci
npm run build
```

Expected outcome: each available frontend command completes successfully. If any command is unavailable, fails, times out, or is not rerun after relevant late changes, record the exact status instead of marking it passed.

## Run The Public Landing

From `frontend/`:

```powershell
npm start
```

Open:

```text
http://localhost:4200/
```

## Desktop Navbar Link Review

1. Open `/`.
2. Activate `Ático` and confirm the page navigates or scrolls to the Ático section.
3. Activate `Jardín` and confirm the page navigates or scrolls to the Jardín section.
4. Activate `Ubicación` and confirm the page navigates or scrolls to the location section.
5. Activate `Contacto` and confirm the page navigates or scrolls to the contact section.
6. Activate `Acceso privado` and confirm it opens the existing private access destination.

## Mobile Review

1. Set a mobile viewport.
2. Open `/`.
3. Confirm the navbar remains usable.
4. Confirm the navbar does not overlap or break the hero.
5. Activate public navbar links and confirm each target remains reachable.

## Scope Review

Before final reporting, review changed files and confirm no backend, database, auth/admin, reservation/calendar, iCal, OTA, payment, dependency, route redesign, or full navbar redesign changes were introduced.
