# Tasks: Ático Information Section

**Input**: Design documents from `/specs/008-atico-info-section/`

**Prerequisites**: plan.md (required), spec.md (required), research.md, data-model.md, contracts/

**Tests/Evidence**: Required by the feature plan for visible UI behavior, copy guardrails, anchors, mobile smoke, and scope-drift review.

**Organization**: Tasks are grouped by the two independently verifiable user stories from the specification.

## Format: `[ID] [P?] [Trace] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Trace]**: Which user story this task belongs to
- Include exact file paths in descriptions

## Phase 1: User Story 1 - Scan Ático Information On Mobile (Priority: P1)

**Goal**: Visitors can quickly identify and scan a distinct Ático section with short neutral copy and a small highlight set on mobile.

**Verification**: `frontend/src/app/features/public/pages/public-landing-page/public-landing-page.spec.ts` asserts the visible Ático section, concise neutral copy, highlight count, no forbidden hard facts, and mobile smoke is run from `specs/008-atico-info-section/quickstart.md`.

### Evidence for User Story 1

- [X] T001 [P] [US1] Add DOM evidence for Ático section heading, concise summary/description, highlight list, and forbidden hard-fact guardrails in `frontend/src/app/features/public/pages/public-landing-page/public-landing-page.spec.ts`
- [X] T002 [US1] Review changed Ático copy for forbidden hard facts in `frontend/src/app/core/i18n/translations/public-landing.translations.ts`

### Implementation for User Story 1

- [X] T003 [US1] Update Ático Spanish and English public landing copy and highlight labels with neutral demo-safe wording in `frontend/src/app/core/i18n/translations/public-landing.translations.ts`
- [X] T004 [US1] Add Ático-specific section/detail CSS hooks while preserving existing IDs and translated content binding in `frontend/src/app/features/public/pages/public-landing-page/public-landing-page.html`
- [X] T005 [US1] Style the Ático section and highlight list for mobile-first scanability without text overlap or horizontal scrolling in `frontend/src/app/features/public/pages/public-landing-page/public-landing-page.scss`

**Checkpoint**: The Ático information section is visually distinct, neutral, concise, scannable, and objectively covered by DOM evidence.

---

## Phase 2: User Story 2 - Navigate To Ático From Landing Anchors (Priority: P2)

**Goal**: Existing navbar and hero entry points continue to target the Ático section.

**Verification**: Public landing and app-shell tests prove `#atico`/`/#atico` targets remain wired, and quickstart smoke verifies browser navigation to the Ático section.

### Evidence for User Story 2

- [X] T006 [US2] Add or preserve DOM evidence that the hero Ático CTA uses `href="#atico"` and the page exposes `id="atico"` in `frontend/src/app/features/public/pages/public-landing-page/public-landing-page.spec.ts`
- [X] T007 [P] [US2] Confirm existing unauthenticated public navbar evidence still expects `/#atico` in `frontend/src/app/app.spec.ts`

### Implementation for User Story 2

- [X] T008 [US2] Preserve the Ático section `id="atico"` and hero panel `ctaHref: '#atico'` wiring in `frontend/src/app/features/public/pages/public-landing-page/public-landing-page.html` and `frontend/src/app/core/i18n/translations/public-landing.translations.ts`

**Checkpoint**: Ático anchor targets work from public navbar and hero entry points without routing, backend, or booking changes.

---

## Phase 3: Polish & Cross-Cutting Concerns

**Purpose**: Final validation and scope review required by the active plan.

- [X] T009 Run `npm run test:ci` from `frontend/` after the latest relevant frontend changes
- [X] T010 Run `npm run build` from `frontend/` after the latest relevant frontend changes
- [X] T011 Run the manual mobile smoke in `specs/008-atico-info-section/quickstart.md` for `/`, navbar Ático anchor, hero Ático CTA, mobile scanability, and copy guardrails
- [X] T012 Review `git diff --name-only` against the source map in `specs/008-atico-info-section/plan.md` and justify or remove any unplanned changed surfaces
- [X] T013 Restore the `AGENTS.md` managed Spec Kit active-plan block to the `main` version if it changed only as local workflow state

---

## Dependencies & Execution Order

### Phase Dependencies

- **User Story 1 (Phase 1)**: First verifiable increment; no implementation dependencies.
- **User Story 2 (Phase 2)**: Can be validated after or alongside User Story 1, but final anchor smoke should run after template/copy/style changes.
- **Polish (Phase 3)**: Depends on all user story implementation and evidence tasks.

### User Story Dependencies

- **US1 (P1)**: No dependency.
- **US2 (P2)**: No functional dependency, but final validation should run after US1 because US1 may touch the section template/styles.

### Parallel Opportunities

- T001 and T007 can run in parallel because they touch different test files.
- T003 and T004 can be prepared in parallel if template hooks do not depend on copy shape changes.
- T006 should be combined with or run after T001 because both touch `frontend/src/app/features/public/pages/public-landing-page/public-landing-page.spec.ts`.

---

## Implementation Strategy

### First Verifiable Increment

1. Complete Phase 1 tasks T001-T005.
2. Run the public landing unit evidence for the Ático section.
3. Confirm the section is neutral, concise, and visually distinct.

### Incremental Delivery

1. Deliver US1 as the demo-visible Ático information polish.
2. Deliver US2 by preserving and validating navbar/hero anchor behavior.
3. Run the full quickstart validation and scope-drift review after the latest relevant change.

---

## Notes

- Do not commit unless the user explicitly asks for a commit.
- Do not touch backend, database, admin, auth, availability, booking, reservation, iCal, OTA integrations, payments, or real reservation logic.
- Do not add dependencies or a full gallery implementation for this issue.
