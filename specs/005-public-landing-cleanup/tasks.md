# Tasks: Public Landing Cleanup

**Input**: Design documents from `specs/005-public-landing-cleanup/`

**Prerequisites**: plan.md, spec.md, research.md, data-model.md, contracts/public-landing-cleanup.md, quickstart.md

**Tests/Evidence**: Visible public landing behavior requires DOM/source evidence plus manual mobile browser review. Private/admin access preservation requires route/link smoke evidence. Existing frontend checks/build must run after implementation.

**Organization**: Tasks are grouped by independently verifiable user stories from `spec.md`.

## Format: `[ID] [P?] [Trace] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Trace]**: User story trace (`US1`, `US2`, `US3`)
- Include exact file paths in descriptions

## Phase 1: User Story 1 - Visitor Sees Ático y Jardín, Not CatWorld (Priority: P1)

**Goal**: `/` visibly belongs to Ático y Jardín and no longer exposes CatWorld, TODO, scaffold, debug, version, or template-looking implementation text.

**Verification**: Public landing DOM/source review shows the Ático y Jardín brand and no banned visible text on `/`.

### Evidence for User Story 1

- [x] T001 [US1] Add public landing DOM regression coverage for Ático y Jardín branding and forbidden visible text in `frontend/src/app/features/public/pages/public-landing-page/public-landing-page.spec.ts`

### Implementation for User Story 1

- [x] T002 [US1] Remove visible version/status/TODO scaffolding and placeholder attributes from `frontend/src/app/features/public/pages/public-landing-page/public-landing-page.html`
- [x] T003 [US1] Replace TODO/scaffold/template-looking public landing strings in `frontend/src/app/core/i18n/translations/public-landing.translations.ts` with public-facing copy that does not invent unavailable apartment facts
- [x] T004 [US1] Replace visible scaffold labels in public landing SVG assets under `frontend/public/landing/`
- [x] T005 [US1] Review public landing styles after cleanup in `frontend/src/app/features/public/pages/public-landing-page/public-landing-page.scss`

**Checkpoint**: `/` can render without visible CatWorld, TODO, scaffold, debug, version, or template-looking implementation text.

---

## Phase 2: User Story 2 - Visitor Recognizes The Two Apartments (Priority: P1)

**Goal**: Ático and Jardín remain clearly visible as the two public apartment concepts after the cleanup.

**Verification**: Public landing DOM/manual review confirms both apartment concepts remain present and distinct.

### Evidence for User Story 2

- [x] T006 [US2] Extend public landing DOM coverage to assert Ático and Jardín section concepts remain visible in `frontend/src/app/features/public/pages/public-landing-page/public-landing-page.spec.ts`

### Implementation for User Story 2

- [x] T007 [US2] Ensure Ático and Jardín translation content remains distinct and neutral after cleanup in `frontend/src/app/core/i18n/translations/public-landing.translations.ts`

**Checkpoint**: Ático and Jardín remain visible and distinct without invented capacity, amenity, address, legal, payment, or reservation claims.

---

## Phase 3: User Story 3 - Private Access Remains Available (Priority: P2)

**Goal**: Existing private/admin access remains technically available while the cleanup stays public-surface only.

**Verification**: Public shell still exposes the private access route/link for unauthenticated users, and `/login` still opens the existing login flow.

### Evidence for User Story 3

- [x] T008 [US3] Add or preserve app-shell test coverage for the unauthenticated private access link to `/login` in `frontend/src/app/app.spec.ts`
- [x] T009 [US3] Smoke check the existing `/login` private access flow using `specs/005-public-landing-cleanup/quickstart.md`

### Implementation for User Story 3

- [x] T010 [US3] Preserve route definitions for `/`, `/login`, and private/admin routes in `frontend/src/app/app.routes.ts` unless validation reveals a cleanup-caused issue

**Checkpoint**: The existing private/admin access entry point remains technically available and no auth/admin/domain behavior is redesigned.

---

## Phase 4: Polish & Cross-Cutting Concerns

**Purpose**: Final validation and scope review required by the issue, plan, and workflow.

- [x] T011 Run `npm run format:check` from `frontend/` and record the result
- [x] T012 Run `npm run test:ci` from `frontend/` and record the result
- [x] T013 Run `npm run build` from `frontend/` and record the result
- [x] T014 Manually inspect `/` in a mobile viewport per `specs/005-public-landing-cleanup/quickstart.md`
- [x] T015 Manually confirm no visible CatWorld/scaffold/TODO/debug/version text remains on `/` per `specs/005-public-landing-cleanup/quickstart.md`
- [x] T016 Manually confirm private/admin access is not broken through `/login` per `specs/005-public-landing-cleanup/quickstart.md`
- [x] T017 Review changed files with `git status --short` and `git diff --name-only` against `specs/005-public-landing-cleanup/plan.md`
- [x] T018 Rerun any validation affected by late changes, or report it explicitly as stale/not revalidated

---

## Dependencies & Execution Order

### Phase Dependencies

- **Phase 1 (US1)**: First verifiable increment; establishes visible cleanup and banned-text evidence.
- **Phase 2 (US2)**: Depends on Phase 1 translation/template cleanup because it verifies the retained apartment concepts after those edits.
- **Phase 3 (US3)**: Can run after Phase 1; it should remain mostly evidence-focused unless public shell routing is accidentally affected.
- **Phase 4 (Polish)**: Depends on all intended user stories being complete.

### User Story Dependencies

- **US1 (P1)**: No dependencies.
- **US2 (P1)**: Depends on US1 copy/template cleanup.
- **US3 (P2)**: Depends on avoiding route/auth changes during US1 and US2.

### Parallel Opportunities

- T001 and T008 touch different test files and may be prepared in parallel before implementation.
- Manual review tasks T014, T015, and T016 can be performed in one browser session after build/test validation.

---

## Implementation Strategy

### First Verifiable Increment

1. Complete Phase 1.
2. Run the public landing DOM regression test.
3. Confirm `/` no longer exposes visible inherited/scaffold text.

### Incremental Delivery

1. Deliver US1 visible cleanup.
2. Deliver US2 apartment concept preservation.
3. Deliver US3 private access preservation evidence.
4. Run Phase 4 validation and scope review after the final relevant change.

---

## Notes

- Do not commit unless the user explicitly asks for a commit.
- Do not modify backend, database, auth/admin domain logic, real reservations, iCal, OTA integrations, payments, dependencies, or new language support.
- Keep CatWorld/private-domain cleanup outside `/` for future transition issues unless it becomes visible on the public landing.
