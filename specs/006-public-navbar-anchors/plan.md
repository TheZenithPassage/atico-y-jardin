# Implementation Plan: Public Navbar Anchors

**Branch**: `feat/3-public-navbar-anchors` | **Date**: 2026-07-03 | **Spec**: [spec.md](./spec.md)

**Input**: Feature specification from `specs/006-public-navbar-anchors/spec.md`

## Summary

Preserve the accepted public navbar visual style while ensuring the public entries for `Ático`, `Jardín`, `Ubicación`, and `Contacto` navigate to the intended landing sections, and `Acceso privado` remains available as a discreet link to the existing private access flow. The technical approach is a focused Angular frontend update in the existing app shell, public landing anchors, and public landing i18n/tests as needed, with no backend, database, auth, admin, reservation, integration, payment, route redesign, dependency, or full navbar redesign work.

## Technical Context

**Language/Version**: Frontend TypeScript 5.9 with Angular 21; backend Java 17 with Spring Boot 4.0.2 is present but out of scope for this issue.

**Primary Dependencies**: Existing Angular core/router, Angular Material/CDK, RxJS, and public landing/i18n code; Spring Boot, MySQL/Flyway, security, FullCalendar, and backend dependencies remain unchanged and out of scope.

**Storage**: N/A. No persistence, schema, browser storage, API payload, external contract, or data migration changes.

**Testing**: Existing frontend scripts in `frontend/package.json`: `npm run build`, `npm run test:ci`, and `npm run format:check`.

**Target Platform**: Public Angular web application served at `/`, with manual desktop and mobile viewport inspection required by issue #3.

**Project Type**: Ático y Jardín full-stack web application with inherited backend/frontend baseline; this feature changes only the frontend public navbar/landing surface.

**Performance Goals**: N/A. No performance target is defined by the issue or repository evidence.

**Constraints**: Preserve current navbar visual style; use anchor navigation where appropriate; keep `Acceso privado` available and visually discreet; keep mobile navbar usable; do not introduce backend, database, auth/admin, reservation/calendar, iCal/OTA, payment, dependency, or route redesign changes.

**Scale/Scope**: Single public `/` landing page, four public section links, one existing private access link, and manual mobile viewport review for the Friday demo.

## Constitution Check

*GATE 1: Before Phase 0 research, identify applicable constitution principles, assessment triggers, and unresolved decisions.*

*GATE 2: Before decision-dependent Phase 1 design and before implementation task generation, every required architecture and technology assessment MUST be completed and human-approved. Re-check full constitution compliance after Phase 1 design.*

- **Product focus and sustainable evolution**: Compliant. The issue supports the specific Ático and Jardín public demo and avoids generic marketplace, booking, channel, payment, or multi-owner scope.
- **Layered monolith responsibilities**: Compliant. No backend controller, service, repository, DTO, mapper, or persistence layer changes are planned.
- **Backend and database authority**: Compliant. No business rule, authorization, validation, or important calculation behavior is introduced or moved to frontend-only enforcement.
- **Schema evolution**: Compliant. No schema changes or Flyway migrations are planned.
- **Protected reservation model**: Compliant. No reservation, booking request, availability, calendar, or inherited occupancy behavior is changed.
- **Specification and planning discipline**: Compliant. The spec captures observable navbar behavior, mobile behavior, edge cases, exclusions, and no unresolved blocking questions.
- **Architecture and technology assessment**: No trigger. The work uses existing Angular router/template/i18n mechanisms and does not introduce a shared capability, dependency, material contract, persistence, security, operational, or costly replacement decision.
- **Focused changes and proportional validation**: Compliant. Scope is limited to public navbar/landing UI and validated with focused frontend tests/build plus manual anchor and mobile smoke checks.
- **Operational safety and sources of truth**: Compliant. No secrets, real data, production exposure, privacy/RGPD, backup, or recovery changes.

## Architecture and Technology Assessment

**Assessment required**: No. This is a narrow public navigation wiring update using existing Angular router, template, SCSS, and i18n structures.

**Decision trigger**: N/A

**Options considered**:

- Existing platform/framework/project capability: Use the existing app shell navbar, Angular router fragment navigation, public landing section IDs, and public landing translation data; fits confirmed scope with minimal change and no new dependency.
- Established library/framework/service: N/A. No new library or service is needed for section anchors.
- Focused custom implementation: N/A beyond local helper logic already present or required in the existing app shell.

**Selected approach**: Existing platform/framework/project capability.

**Why selected**: The current app shell already owns unauthenticated public navigation in `frontend/src/app/app.*`, and the public landing already exposes apartment/location/contact sections. Keeping navigation local preserves the accepted navbar and avoids out-of-scope routing or backend changes.

**Confirmed medium-term use**: N/A. This does not establish a new reusable mechanism beyond the existing public navbar.

**Maintenance and operational consequences**: N/A beyond maintaining section IDs and link targets together as public landing content evolves.

**Reversibility and migration path**: Low cost. Link targets, section IDs, and small app shell tests can be adjusted by later content/gallery features without migration.

**Human approval**: N/A; no assessment-triggering architectural or technology decision is made.

## Semantic Equivalence and Replacement Review

**Review required**: No. No UI primitive, shared component, interaction mechanism, data/contract mechanism, or presentation mechanism is being replaced.

**Old behavior/source of truth**: Existing app shell navbar, public landing section IDs, and public landing translations remain the source of truth for `/` navigation.

**New mechanism semantics**: N/A.

**Mismatch risks**: N/A for replacement risk. Scope risk is limited to broken anchors, missing section IDs, accidental visual navbar redesign, mobile overlap, or changing the private access route.

**Mitigation**: Keep existing navbar CSS and private access routing; verify public link hrefs and section IDs; add focused tests for nav labels/targets and landing anchors; run manual desktop/mobile checks.

**Proof required**: Existing frontend build/checks, app shell DOM tests, public landing anchor tests, manual `/` navbar link smoke test, manual mobile viewport smoke test, and changed-file scope review.

## Validation Evidence Plan

| Surface / Requirement | Responsible Layer | Evidence Type | Freshness / Manual Notes |
|-----------------------|-------------------|---------------|--------------------------|
| Public navbar exposes `Ático`, `Jardín`, `Ubicación`, `Contacto`, and `Acceso privado` with correct link targets | Angular app shell DOM/router link rendering | Focused unit test in `frontend/src/app/app.spec.ts` plus manual browser smoke | Rerun after app shell template, i18n, route, or test changes |
| Public landing exposes matching `atico`, `jardin`, `location`, and `contact` anchors | Public landing DOM | Focused unit test in `frontend/src/app/features/public/pages/public-landing-page/public-landing-page.spec.ts` plus manual browser smoke | Rerun after landing template or test changes |
| Current accepted navbar visual style and discreet private access remain intact | CSS/source review and manual visible-device check | Changed-file review plus desktop/mobile smoke | Rerun after app shell SCSS/template changes |
| Mobile navbar does not overlap or break hero | Manual mobile viewport visible-device check | Browser smoke at a mobile viewport | Rerun after app shell or landing layout/style changes |
| Existing frontend build and checks remain healthy | Angular build/test/format tooling | `npm run build`, `npm run test:ci`, `npm run format:check` as available | Rerun after final code/test/spec changes that affect frontend output |
| No backend/database/auth/admin/reservation/integration/payment scope drift | Git diff/source review | Changed-file review | Review immediately before final report |

## Project Structure

### Documentation (this feature)

```text
specs/006-public-navbar-anchors/
├── plan.md
├── research.md
├── data-model.md
├── quickstart.md
├── contracts/
└── tasks.md
```

### Source Code (repository root)

```text
frontend/src/app/app.html
frontend/src/app/app.scss
frontend/src/app/app.ts
frontend/src/app/app.spec.ts
frontend/src/app/features/public/pages/public-landing-page/
frontend/src/app/core/i18n/translations/public-landing.translations.ts
frontend/src/app/app.routes.ts
src/main/java/
src/main/resources/
docs/
```

**Structure Decision**: Implement in the existing Angular app shell and public landing files only when changes are needed. Prefer tests in `app.spec.ts` and `public-landing-page.spec.ts` to lock link targets and section IDs. Do not touch backend, database, migrations, auth/admin domain, package dependencies, reservation/calendar code, or private feature modules unless validation reveals an issue directly caused by the public navbar anchors.

## Phase 0 Research Summary

No researchable unknowns were identified. `research.md` records that existing Angular router/template/i18n mechanisms are sufficient, no architecture assessment is required, and no material decisions are unresolved.

## Phase 1 Design Summary

`data-model.md` records that no domain, persistence, API, browser storage, or external contract model changes apply. `contracts/public-navbar-anchors.md` defines the visible `/` navbar/anchor contract. `quickstart.md` documents frontend validation plus manual desktop and mobile navbar checks.

## Post-Design Constitution Check

- **Product focus and sustainable evolution**: Still compliant; artifacts remain limited to the two-apartment public navbar demo behavior.
- **Layered monolith responsibilities**: Still compliant; backend layers are untouched.
- **Backend and database authority**: Still compliant; no business rule, authorization, validation, or calculation behavior changes.
- **Schema evolution**: Still compliant; no migrations or schema work.
- **Protected reservation model**: Still compliant; no reservation, booking request, availability, or calendar behavior.
- **Specification and planning discipline**: Still compliant; spec, plan, contract, quickstart, and tasks can trace to issue #3 and contain no unresolved blocking decision.
- **Architecture and technology assessment**: Still no assessment trigger; selected approach uses existing local Angular/i18n/navigation mechanisms.
- **Focused changes and proportional validation**: Still compliant; validation evidence is proportionate to public navbar anchor risk.
- **Operational safety and sources of truth**: Still compliant; no operational exposure, secrets, or real-data changes.

## Complexity Tracking

| Complexity | Why Needed | Simpler Alternative Rejected Because | Constitution Compliance |
|------------|------------|-------------------------------------|-------------------------|
| N/A | N/A | N/A | N/A |
