# Tasks: Mobile Split Hero

**Input**: Design documents from `specs/007-mobile-split-hero/`

**Prerequisites**: plan.md, spec.md, research.md, data-model.md, contracts/public-mobile-split-hero.md, quickstart.md

**Tests/Evidence**: Required by the plan validation evidence section for visible hero behavior, local image sources, CTA anchors, copy safety, mobile viewport quality, desktop sanity, existing frontend checks, and scope review.

**Organization**: Tasks are grouped by the three independently verifiable user stories from `spec.md`.

## Format: `[ID] [P?] [Trace] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Trace]**: Which user story this task belongs to
- Include exact file paths in descriptions

## Phase 1: Setup

**Purpose**: Confirm feature-local source assets and current public landing surfaces before editing.

- [X] T001 Review available local apartment image assets in `frontend/public/landing/atico/` and `frontend/public/landing/jardin/` and use only those assets for hero media choices

---

## Phase 2: Foundational

**Purpose**: Shared public landing data needed before the user-story slices can render the split hero consistently in both supported languages.

- [X] T002 Extend public landing presentation interfaces for split hero panel data and CTA labels in `frontend/src/app/features/public/models/public-landing.model.ts`
- [X] T003 Add Spanish and English split hero panel copy, local image references, and CTA labels in `frontend/src/app/core/i18n/translations/public-landing.translations.ts`

**Checkpoint**: Shared hero data is available for template, style, and test work.

---

## Phase 3: User Story 1 - Understand Both Apartments Immediately (Priority: P1)

**Goal**: The first mobile viewport below the navbar presents Ático and Jardín as distinct local-image-led apartment choices.

**Verification**: Public landing DOM tests verify both hero panels, local image sources, and apartment copy; manual mobile smoke checks confirm first-viewport polish at 360px, 390px, and 430px after implementation.

### Evidence for User Story 1

- [X] T004 [US1] Add public landing DOM assertions for two split hero apartment panels, apartment names, and local apartment image sources in `frontend/src/app/features/public/pages/public-landing-page/public-landing-page.spec.ts`

### Implementation for User Story 1

- [X] T005 [US1] Replace the single-image public hero markup with a two-panel Ático/Jardín split hero in `frontend/src/app/features/public/pages/public-landing-page/public-landing-page.html`
- [X] T006 [US1] Implement mobile-first split hero layout with diagonal/slash-style separation where feasible, clean stacked fallback behavior, image framing, and narrow-width text/CTA non-overlap behavior in `frontend/src/app/features/public/pages/public-landing-page/public-landing-page.scss`

**Checkpoint**: User Story 1 is independently verifiable through DOM tests and mobile visible inspection.

---

## Phase 4: User Story 2 - Move From Hero To Apartment Sections (Priority: P2)

**Goal**: Hero CTAs move visitors to Ático, Jardín, and contact/availability-intent sections without fake booking wording.

**Verification**: Public landing DOM tests verify CTA targets and source-visible copy review confirms no real-time booking, payment, or reservation claims were introduced.

### Evidence for User Story 2

- [X] T007 [US2] Add public landing DOM assertions for hero CTA hrefs `#atico`, `#jardin`, and `#contact` plus absence of fake booking wording in `frontend/src/app/features/public/pages/public-landing-page/public-landing-page.spec.ts`

### Implementation for User Story 2

- [X] T008 [US2] Wire split hero CTAs to existing public section anchors in `frontend/src/app/features/public/pages/public-landing-page/public-landing-page.html`
- [X] T009 [US2] Review and adjust hero CTA/copy translations to preserve inquiry-only wording in `frontend/src/app/core/i18n/translations/public-landing.translations.ts`

**Checkpoint**: User Story 2 is independently verifiable through DOM tests and manual anchor smoke checks.

---

## Phase 5: User Story 3 - Keep Desktop Acceptable (Priority: P3)

**Goal**: The same split hero remains coherent and usable on desktop.

**Verification**: Source styles define desktop layout behavior and manual desktop smoke checking confirms both apartment choices and CTAs remain usable.

### Evidence for User Story 3

- [X] T010 [US3] Review desktop hero layout behavior against the contract in `frontend/src/app/features/public/pages/public-landing-page/public-landing-page.scss`

### Implementation for User Story 3

- [X] T011 [US3] Add desktop split hero constraints and acceptable wide-screen composition in `frontend/src/app/features/public/pages/public-landing-page/public-landing-page.scss`

**Checkpoint**: User Story 3 is verifiable through desktop visible inspection.

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Final validation, freshness, and scope review required by the plan.

- [X] T012 Run `npm run build` from `frontend/` after final frontend changes
- [X] T013 Run `npm run test:ci` from `frontend/` after final frontend changes
- [X] T014 Run `npm run format:check` from `frontend/` after final frontend changes
- [X] T015 Start the frontend dev server from `frontend/` and manually inspect `/` at 360px, 390px, 430px, and one desktop viewport using `specs/007-mobile-split-hero/quickstart.md`
- [X] T016 Review `frontend/src/app/core/i18n/translations/public-landing.translations.ts` and rendered/source hero copy for fake booking, payment, confirmed reservation, real-time availability, iCal/OTA, or availability-blocking claims
- [X] T017 Review `git diff --name-only` against the source map in `specs/007-mobile-split-hero/plan.md` and report any changed surface outside the approved public hero scope

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No prerequisite beyond active branch and feature artifacts.
- **Foundational (Phase 2)**: Depends on Setup; blocks all user stories because template/tests need the shared hero data.
- **User Story 1 (Phase 3)**: Depends on Foundational; delivers the primary mobile hero.
- **User Story 2 (Phase 4)**: Depends on Foundational and can be implemented after or alongside User Story 1 once hero markup exists.
- **User Story 3 (Phase 5)**: Depends on User Story 1 styles and completes desktop presentation.
- **Polish (Phase 6)**: Depends on all implemented user stories.

### User Story Dependencies

- **US1 (P1)**: Requires Phase 2 shared hero data.
- **US2 (P2)**: Requires Phase 2 shared hero data and the split hero markup from US1 for CTA placement.
- **US3 (P3)**: Requires US1 layout as the desktop base.

### Parallel Opportunities

- T002 and T003 touch different files but should usually be coordinated because the translation object must satisfy the interfaces.
- T004 and T007 both edit `public-landing-page.spec.ts`; do not parallelize them in separate agents.
- T006 and T011 both edit `public-landing-page.scss`; do not parallelize them in separate agents.
- Manual validation T015 can run after T012-T014 pass and the final relevant style/template changes are complete.

---

## Implementation Strategy

### First Verifiable Increment

1. Complete Phase 1 and Phase 2.
2. Complete Phase 3 for US1.
3. Run focused tests or `npm run test:ci` to confirm the split hero DOM evidence.
4. Inspect mobile layout before proceeding to CTA and desktop refinements.

### Incremental Delivery

1. Deliver US1 mobile split hero and evidence.
2. Add US2 CTA/copy safety evidence.
3. Add US3 desktop refinements.
4. Run full build/test/format plus manual mobile and desktop checks after the latest relevant changes.

---

## Notes

- Do not commit unless the user explicitly asks for a commit.
- Do not change backend, database, migrations, admin, auth, reservation, payment, iCal/OTA, package dependencies, private feature modules, or external media configuration.
- Keep user-facing text in the existing i18n translation system.
