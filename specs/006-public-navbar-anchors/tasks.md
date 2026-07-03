# Tasks: Public Navbar Anchors

**Input**: Design documents from `specs/006-public-navbar-anchors/`

**Prerequisites**: plan.md (required), spec.md (required), research.md, data-model.md, contracts/, quickstart.md

**Tests/Evidence**: Required by the plan validation evidence section for visible navbar behavior, link targets, landing anchors, mobile usability, and scope review.

**Organization**: Tasks are grouped by the three independently verifiable user journeys from `spec.md`.

## Format: `[ID] [P?] [Trace] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Trace]**: Which user story this task belongs to
- Include exact file paths in descriptions

## Phase 1: User Story 1 - Navigate Public Landing Sections (Priority: P1)

**Goal**: Public visitors can activate `Ático`, `Jardín`, `Ubicación`, and `Contacto` in the accepted navbar and reach the matching public landing sections.

**Verification**: Angular DOM tests prove navbar link targets and landing anchor IDs; manual `/` smoke confirms link activation reaches the expected sections.

### Evidence for User Story 1

- [x] T001 [P] [US1] Add or update app shell DOM assertions for public navbar labels and `/#atico`, `/#jardin`, `/#location`, and `/#contact` targets in frontend/src/app/app.spec.ts
- [x] T002 [P] [US1] Add or update public landing DOM assertions for `#atico`, `#jardin`, `#location`, and `#contact` anchors in frontend/src/app/features/public/pages/public-landing-page/public-landing-page.spec.ts

### Implementation for User Story 1

- [x] T003 [US1] Adjust public navbar anchor wiring only if needed in frontend/src/app/app.html and frontend/src/app/app.ts
- [x] T004 [US1] Adjust public landing section IDs only if needed in frontend/src/app/features/public/pages/public-landing-page/public-landing-page.html

**Checkpoint**: Ático, Jardín, Ubicación, and Contacto navbar entries are fully functional and objectively verifiable.

---

## Phase 2: User Story 2 - Reach Private Access Discreetly (Priority: P2)

**Goal**: `Acceso privado` remains available from the public navbar, keeps the existing private access destination, and stays visually secondary.

**Verification**: Angular DOM tests prove the `/login` target and label; source/style review confirms no private route, auth, admin, backend, or visual redesign changes were introduced.

### Evidence for User Story 2

- [x] T005 [P] [US2] Add or update app shell DOM assertions for `Acceso privado`, `/login`, and the private access styling hook in frontend/src/app/app.spec.ts

### Implementation for User Story 2

- [x] T006 [US2] Preserve or adjust the private access link only if needed in frontend/src/app/app.html and frontend/src/app/app.scss

**Checkpoint**: Private access remains available and discreet without changing auth/admin behavior.

---

## Phase 3: User Story 3 - Use Navbar On Mobile (Priority: P3)

**Goal**: Mobile visitors can use the navbar without it overlapping or breaking the hero.

**Verification**: Source/style review plus manual mobile smoke confirms the navbar remains usable and the hero remains intact.

### Evidence for User Story 3

- [x] T007 [US3] Review responsive navbar and hero behavior against the mobile contract in frontend/src/app/app.scss and frontend/src/app/features/public/pages/public-landing-page/public-landing-page.scss

### Implementation for User Story 3

- [x] T008 [US3] Adjust responsive navbar styles only if needed to preserve mobile usability in frontend/src/app/app.scss

**Checkpoint**: Mobile navbar remains usable and does not overlap or break the hero.

---

## Phase 4: Polish & Cross-Cutting Concerns

**Purpose**: Final validation, freshness, and scope review required by the issue and plan.

- [x] T009 Run focused frontend tests from frontend/package.json for app shell and public landing changes, using the commands documented in specs/006-public-navbar-anchors/quickstart.md
- [x] T010 Run full frontend validation from frontend/package.json: `npm run format:check`, `npm run test:ci`, and `npm run build`
- [x] T011 Manually smoke test all navbar links on `/` using specs/006-public-navbar-anchors/quickstart.md
- [x] T012 Manually inspect the navbar on a mobile viewport using specs/006-public-navbar-anchors/quickstart.md
- [x] T013 Review changed files against the source map in specs/006-public-navbar-anchors/plan.md and confirm no backend, database, auth/admin, reservation/calendar, iCal, OTA, payment, dependency, route redesign, or full navbar redesign scope drift
- [x] T014 Rerun affected validation after relevant late changes, or report any stale/not-revalidated evidence explicitly in specs/006-public-navbar-anchors/quickstart.md

---

## Dependencies & Execution Order

### Phase Dependencies

- **User Story 1 (P1)**: No prerequisite phase; complete first because public section navigation is the primary issue goal.
- **User Story 2 (P2)**: Independent of US1 implementation, but should be checked before final validation because the same app shell owns the public navbar.
- **User Story 3 (P3)**: Independent of US1/US2 implementation except for any app shell style changes.
- **Polish (Phase 4)**: Depends on all desired user stories being complete.

### User Story Dependencies

- **US1**: No dependencies.
- **US2**: No dependencies.
- **US3**: No dependencies, but rerun after any app shell style changes from US1 or US2.

### Parallel Opportunities

- T001 and T002 can run in parallel because they touch different test files.
- T005 can run in parallel with T002 after app shell link expectations are known.
- T007 can run in parallel with test additions because it is a source/style review.

---

## Implementation Strategy

### First Verifiable Increment

1. Complete US1 test evidence in T001 and T002.
2. Apply only the minimal app shell or landing anchor changes needed by T003 and T004.
3. Run focused frontend tests before moving to US2/US3.

### Incremental Delivery

1. Validate US1 anchor navigation.
2. Validate US2 private access preservation.
3. Validate US3 mobile usability.
4. Run full frontend validation and manual smoke checks.
5. Perform final scope review and validation freshness check.

---

## Notes

- Do not commit unless the user explicitly asks for a commit.
- Do not mix public rebranding, domain refactoring, persistence changes, and new reservation behavior.
- Do not add dependencies or change routes without a new approved plan.
- Keep changes scoped to the public frontend surface and Spec Kit artifacts.
