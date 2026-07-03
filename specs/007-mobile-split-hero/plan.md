# Implementation Plan: Mobile Split Hero

**Branch**: `feat/4-mobile-first-split-hero` | **Date**: 2026-07-03 | **Spec**: [spec.md](./spec.md)

**Input**: Feature specification from `specs/007-mobile-split-hero/spec.md`

## Summary

Implement a mobile-first first-screen public hero below the existing navbar that visually splits Ático and Jardín into two distinct local-image-led apartment choices, with elegant short copy and CTAs that scroll to the existing public apartment/contact sections. The technical approach is a focused Angular frontend update in the existing public landing template, SCSS, i18n translations, public landing presentation types, and focused tests, using only existing local assets and avoiding backend, database, admin, reservation, payment, iCal/OTA, external image, dependency, or navbar redesign work.

## Technical Context

**Language/Version**: Frontend TypeScript 5.9 with Angular 21; backend Java 17 with Spring Boot 4.0.2 is present but out of scope for this issue.

**Primary Dependencies**: Existing Angular core/router, Angular Material/CDK, RxJS, public landing component/i18n structures, and local static assets under `frontend/public/landing`; Spring Boot, MySQL/Flyway, security, FullCalendar, and backend dependencies remain unchanged and out of scope.

**Storage**: N/A. No persistence, schema, browser storage, API payload, external contract, or data migration changes.

**Testing**: Existing frontend scripts in `frontend/package.json`: `npm run build`, `npm run test:ci`, and `npm run format:check`.

**Target Platform**: Public Angular web application served at `/`, with manual mobile viewport inspection at approximately 360px, 390px, and 430px plus desktop sanity checking required by issue #4.

**Project Type**: Ático y Jardín full-stack web application with inherited backend/frontend baseline; this feature changes only the frontend public landing hero surface.

**Performance Goals**: N/A. No performance target is defined by the issue or repository evidence.

**Constraints**: Use existing/local image assets only; keep the existing navbar design; prioritize mobile layout; keep desktop acceptable; avoid fake booking wording and real-time availability claims; do not introduce backend, database, auth/admin, reservation/calendar, iCal/OTA, payment, external image fetching, dependency, or route redesign changes.

**Scale/Scope**: Single public `/` landing page hero, two apartment choices (`Ático`, `Jardín`), existing public section anchors (`atico`, `jardin`, `contact`), and manual viewport review for the Friday mobile-first demo.

## Constitution Check

*GATE 1: Before Phase 0 research, identify applicable constitution principles, assessment triggers, and unresolved decisions.*

*GATE 2: Before decision-dependent Phase 1 design and before implementation task generation, every required architecture and technology assessment MUST be completed and human-approved. Re-check full constitution compliance after Phase 1 design.*

- **Product focus and sustainable evolution**: Compliant. The issue serves the specific Ático and Jardín public demo, emphasizes the two-apartment product, and avoids generic marketplace, channel, pricing, payment, multi-owner, or platform scope.
- **Layered monolith responsibilities**: Compliant. No backend controller, service, repository, DTO, mapper, or persistence layer changes are planned.
- **Backend and database authority**: Compliant. No business rule, authorization, validation, or important calculation behavior is introduced or moved to frontend-only enforcement.
- **Schema evolution**: Compliant. No schema changes or Flyway migrations are planned.
- **Protected reservation model**: Compliant. No reservation, booking request, availability, calendar, or inherited occupancy behavior is changed. Availability wording remains inquiry/contact-only.
- **Specification and planning discipline**: Compliant. The spec captures observable hero behavior, mobile targets, CTA behavior, edge cases, exclusions, and no unresolved blocking questions.
- **Architecture and technology assessment**: No trigger. The work uses existing Angular template/SCSS/i18n/static-asset mechanisms and does not introduce a shared capability, dependency, material contract, persistence, security, operational, or costly replacement decision.
- **Focused changes and proportional validation**: Compliant. Scope is limited to public landing hero UI/copy/tests and validated with focused frontend checks plus manual mobile/desktop visible checks.
- **Operational safety and sources of truth**: Compliant. No secrets, real data, production exposure, privacy/RGPD, backup, recovery, or operational process changes.

## Architecture and Technology Assessment

**Assessment required**: No. This is a narrow public hero presentation update using existing Angular component, SCSS, i18n translation structures, and local static assets.

**Decision trigger**: N/A

**Options considered**:

- Existing platform/framework/project capability: Use the existing public landing component, existing presentation model/i18n translations, section anchors, and local image assets; fits confirmed scope with minimal change and no new dependency.
- Established library/framework/service: N/A. No new library, service, carousel, gallery engine, or external image provider is needed for a static two-apartment hero.
- Focused custom implementation: N/A beyond local template/SCSS composition inside the existing public landing component.

**Selected approach**: Existing platform/framework/project capability.

**Why selected**: The current public landing already owns the `/` experience, apartment data, anchor sections, and local asset references, so changing the hero there keeps the feature small, reversible, and aligned with prior public landing/navbar work.

**Confirmed medium-term use**: N/A. This does not establish a new reusable mechanism beyond the current public landing hero presentation.

**Maintenance and operational consequences**: N/A beyond maintaining hero copy and local image references as public landing content evolves.

**Reversibility and migration path**: Low cost. Hero template, translations, and styles can be adjusted or replaced by later content/gallery features without persistence or integration migration.

**Human approval**: N/A; no assessment-triggering architectural or technology decision is made.

## Semantic Equivalence and Replacement Review

**Review required**: No. No UI primitive, shared component, interaction mechanism, data/contract mechanism, or presentation mechanism with behavior-preserving mismatch risk is being replaced.

**Old behavior/source of truth**: Existing public landing hero, apartment section anchors, public landing translations, local asset references, and navbar anchor behavior remain the relevant source of truth.

**New mechanism semantics**: N/A.

**Mismatch risks**: N/A for replacement risk. Scope risk is limited to mobile text/image overlap, broken local image references, CTA anchors pointing to the wrong section, accidental fake booking wording, desktop visual regression, or out-of-scope navbar/backend changes.

**Mitigation**: Use existing section IDs and local apartment gallery assets; keep CTAs as anchor navigation; keep copy inquiry/contact-only; add focused DOM tests for the split hero, local image sources, and CTA targets; manually inspect mobile and desktop viewports.

**Proof required**: Existing frontend build/checks, focused public landing unit tests, manual browser checks at 360px/390px/430px and desktop, copy review for booking/availability claims, and changed-file scope review.

## Validation Evidence Plan

| Surface / Requirement | Responsible Layer | Evidence Type | Freshness / Manual Notes |
|-----------------------|-------------------|---------------|--------------------------|
| Hero presents Ático and Jardín as two visually separated apartment blocks below the navbar | Public landing DOM and manual visible-device check | Focused unit test plus browser smoke at 360px, 390px, 430px | Rerun after landing template, style, translation, or asset-reference changes |
| Each hero side uses local apartment image assets and short apartment copy | Public landing DOM/i18n/source review | Focused unit test plus source review | Rerun after translation/model/template changes |
| Hero CTAs scroll/navigate to `#atico`, `#jardin`, and `#contact` | Public landing DOM/anchor contract | Focused unit test and manual browser smoke | Rerun after template, app shell navigation, or section ID changes |
| Copy avoids fake booking, real-time availability, reservation confirmation, payment, iCal/OTA, and external-fetch implications | i18n/source review and manual visible text review | Regex/source review plus browser smoke | Rerun after translation or template copy changes |
| Mobile-first layout is professional at 360px, 390px, and 430px and desktop remains acceptable | Manual visible-device/browser check | Browser screenshots/inspection | Rerun after final style/template changes |
| Existing frontend build and checks remain healthy | Angular build/test/format tooling | `npm run build`, `npm run test:ci`, `npm run format:check` | Rerun after final code/test/spec changes that affect frontend output |
| No backend/database/auth/admin/reservation/integration/payment/external-image scope drift | Git diff/source review | Changed-file review | Review immediately before final report |

## Project Structure

### Documentation (this feature)

```text
specs/007-mobile-split-hero/
├── plan.md
├── research.md
├── data-model.md
├── quickstart.md
├── contracts/
└── tasks.md
```

### Source Code (repository root)

```text
frontend/src/app/features/public/pages/public-landing-page/
frontend/src/app/features/public/models/public-landing.model.ts
frontend/src/app/core/i18n/translations/public-landing.translations.ts
frontend/public/landing/
frontend/src/app/app.html
frontend/src/app/app.scss
frontend/src/app/app.ts
frontend/src/app/app.spec.ts
src/main/java/
src/main/resources/
docs/
```

**Structure Decision**: Implement in the existing public landing component template, SCSS, presentation model/translations, and focused public landing tests. App shell files are part of the source map only for regression review of existing navbar/anchor behavior; do not change them unless validation reveals a directly caused issue. Do not touch backend, database, migrations, auth/admin domain, package dependencies, reservation/calendar code, private feature modules, or remote media/dependency configuration.

## Phase 0 Research Summary

No researchable unknowns were identified. `research.md` records that existing Angular/i18n/local-asset mechanisms are sufficient, no architecture assessment is required, and no material decisions are unresolved.

## Phase 1 Design Summary

`data-model.md` records that no domain, persistence, API, browser storage, or external contract model changes apply. `contracts/public-mobile-split-hero.md` defines the visible `/` hero contract, including image-source and CTA-anchor expectations. `quickstart.md` documents frontend validation plus manual mobile and desktop hero checks.

## Post-Design Constitution Check

- **Product focus and sustainable evolution**: Still compliant; artifacts remain limited to the Ático/Jardín public hero demo.
- **Layered monolith responsibilities**: Still compliant; backend layers are untouched.
- **Backend and database authority**: Still compliant; no business rule, authorization, validation, or calculation behavior changes.
- **Schema evolution**: Still compliant; no migrations or schema work.
- **Protected reservation model**: Still compliant; no reservation, booking request, availability, or calendar behavior.
- **Specification and planning discipline**: Still compliant; spec, plan, contract, quickstart, and tasks can trace to issue #4 and contain no unresolved blocking decision.
- **Architecture and technology assessment**: Still no assessment trigger; selected approach uses existing local Angular/i18n/static-asset mechanisms.
- **Focused changes and proportional validation**: Still compliant; validation evidence is proportionate to public hero presentation risk, with manual mobile viewport checks where automation is insufficient.
- **Operational safety and sources of truth**: Still compliant; no operational exposure, secrets, real-data, privacy/RGPD, backup, or recovery changes.

## Complexity Tracking

| Complexity | Why Needed | Simpler Alternative Rejected Because | Constitution Compliance |
|------------|------------|-------------------------------------|-------------------------|
| N/A | N/A | N/A | N/A |
