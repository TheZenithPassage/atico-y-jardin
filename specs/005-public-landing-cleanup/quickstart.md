# Quickstart: Validate Public Landing Cleanup

Use this after implementing issue #2. Re-run affected checks after any late changes to public landing template, translations, styles, routing, or tests.

## Prerequisites

- Frontend dependencies installed with the repository's existing npm workflow.
- Work is on `chore/2-public-landing-cleanup`.

## Frontend Checks

From `frontend/`:

```powershell
npm run format:check
npm run test:ci
npm run build
```

Expected outcome: each available frontend command completes successfully. If any command is unavailable or fails for an unrelated pre-existing reason, record the exact status instead of marking it passed.

## Run The Public Landing

From `frontend/`:

```powershell
npm start
```

Open:

```text
http://localhost:4200/
```

## Mobile Review

1. Set a mobile viewport.
2. Open `/`.
3. Confirm the first viewport and full page remain readable.
4. Confirm there is no obvious horizontal overflow, text overlap, or broken public landing layout caused by the cleanup.

## Visible Text Review

1. Open `/`.
2. Scan the full visible page, including navigation, hero, apartment sections, form placeholders, captions, status lines, and footer.
3. Confirm no visible CatWorld references remain.
4. Confirm no visible TODO, scaffold, debug, build/version, or template-looking implementation text remains.
5. Confirm Ático and Jardín remain visible as the two public apartment concepts.

## Private/Admin Access Smoke Check

1. Use the existing private/admin access entry point or route.
2. Confirm the route still opens the current private access flow.
3. Do not validate or redesign private/admin domain behavior as part of this issue.

## Scope Review

Before final reporting, review changed files and confirm no backend, database, auth/admin domain, reservation, iCal, OTA, payment, dependency, new-language, or full redesign changes were introduced.
