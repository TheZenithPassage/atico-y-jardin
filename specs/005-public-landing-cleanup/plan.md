# Implementation Plan: Public Landing Cleanup

**Branch**: `chore/2-public-landing-cleanup` | **Date**: 2026-07-03 | **Spec**: [spec.md](./spec.md)

**Input**: Feature specification from `specs/005-public-landing-cleanup/spec.md`

## Summary

Remove visible inherited CatWorld/scaffold/debug/version/TODO/template-looking text from the public `/` landing while preserving Ático and Jardín as the two public apartment concepts and keeping the existing private/admin access entry point technically available. The technical approach is a focused frontend content cleanup in the existing Angular public landing template, public landing assets, and i18n translation data, with no backend, database, auth/admin domain, reservation, integration, payment, dependency, or full redesign work.

## Technical Context

**Language/Version**: Frontend TypeScript 5.9 with Angular 21; backend Java 17 with Spring Boot 4.0.2 is present but out of scope for this issue.

**Primary Dependencies**: Angular core/router/forms, Angular Material/CDK, RxJS, FullCalendar in the existing frontend; Spring Boot, MySQL/Flyway, and security dependencies remain unchanged and out of scope.

**Storage**: N/A. No persistence, schema, browser storage, API payload, or data migration changes.

**Testing**: Existing frontend scripts in `frontend/package.json`: `npm run build`, `npm run test:ci`, and `npm run format:check`.

**Target Platform**: Public Angular web application served at `/`, with manual mobile viewport inspection required by the issue.

**Project Type**: Ático y Jardín full-stack web application with inherited backend/frontend baseline; this feature changes only the frontend public landing surface.

**Performance Goals**: N/A. No performance target is defined by the issue or repository evidence.

**Constraints**: Public landing cleanup only; preserve existing navbar structure except visible text cleanup; preserve private/admin access technically; do not introduce backend, database, auth/admin/domain, reservation, iCal/OTA, payment, new language, dependency, or full visual redesign changes.

**Scale/Scope**: Single public `/` landing page, two public apartment concepts (`Ático`, `Jardín`), and one existing private/admin access route smoke check.

## Constitution Check

*GATE 1: Before Phase 0 research, identify applicable constitution principles, assessment triggers, and unresolved decisions.*

*GATE 2: Before decision-dependent Phase 1 design and before implementation task generation, every required architecture and technology assessment MUST be completed and human-approved. Re-check full constitution compliance after Phase 1 design.*

- **Product focus and sustainable evolution**: Compliant. The issue serves the specific Ático and Jardín public demo and avoids generic platform, booking, channel, payment, or multi-owner scope.
- **Layered monolith responsibilities**: Compliant. No backend layer changes are planned.
- **Backend and database authority**: Compliant. No business rule, authorization, validation, or calculation behavior is introduced or moved to the frontend.
- **Schema evolution**: Compliant. No schema changes or Flyway migrations are planned.
- **Protected reservation model**: Compliant. No reservation, booking request, availability, or inherited occupancy behavior is changed.
- **Specification and planning discipline**: Compliant. The spec captures observable `/` behavior, edge cases, exclusions, validation expectations, and no unresolved blocking questions.
- **Architecture and technology assessment**: No trigger. The work uses existing Angular/i18n/template mechanisms and does not introduce a shared capability, dependency, material contract, persistence, security, operational, or costly replacement decision.
- **Focused changes and proportional validation**: Compliant. Scope is limited to public landing UI/copy and validated with existing frontend checks/build plus manual visible route checks.
- **Operational safety and sources of truth**: Compliant. No secrets, real data, production exposure, privacy/RGPD, backup, or recovery changes.

## Architecture and Technology Assessment

**Assessment required**: No. This is a narrow public landing cleanup using existing Angular component template, SCSS if needed, and i18n translation structures.

**Decision trigger**: N/A

**Options considered**:

- Existing platform/framework/project capability: Use the existing public landing component and i18n translation data; fits the confirmed scope with minimal change and no new dependency.
- Established library/framework/service: N/A. No new library or service is needed for copy cleanup.
- Focused custom implementation: N/A. No new custom mechanism is needed beyond local edits to existing public landing files.

**Selected approach**: Existing platform/framework/project capability.

**Why selected**: The public landing already renders from `frontend/src/app/features/public/pages/public-landing-page` and `frontend/src/app/core/i18n/translations/public-landing.translations.ts`; editing those keeps the change small and reviewable.

**Confirmed medium-term use**: N/A. This does not establish a new reusable mechanism.

**Maintenance and operational consequences**: N/A beyond maintaining cleaned public copy in the existing translation file.

**Reversibility and migration path**: Low cost. Copy/template edits can be adjusted or replaced by later content/gallery features without migration.

**Human approval**: N/A; no assessment-triggering architectural or technology decision is made.

## Semantic Equivalence and Replacement Review

**Review required**: No. No UI primitive, shared component, interaction mechanism, data/contract mechanism, or presentation mechanism is being replaced.

**Old behavior/source of truth**: Existing public landing component/template/translations remain the source of truth for `/`.

**New mechanism semantics**: N/A.

**Mismatch risks**: N/A for replacement risk. Scope risk is limited to accidentally hiding the private/admin access path or leaving visible scaffold text.

**Mitigation**: Keep routing and private access mechanics unchanged; search rendered/source-visible public landing content for banned terms; smoke check private/admin access route.

**Proof required**: Existing frontend build/checks, manual mobile `/` inspection, visible text scan for banned terms, and private/admin route smoke check.

## Validation Evidence Plan

| Surface / Requirement | Responsible Layer | Evidence Type | Freshness / Manual Notes |
|-----------------------|-------------------|---------------|--------------------------|
| `/` shows Ático y Jardín without CatWorld/scaffold/TODO/debug/version/template-looking text | DOM/manual visible-device check and source text review | Manual browser review plus term scan | Rerun after any public landing template/translation/asset/style changes |
| Ático and Jardín remain the two public apartment concepts | DOM/manual visible-device check | Manual browser review | Rerun after copy/template changes |
| Existing navbar structure and private/admin entry point remain technically available | Angular route/link smoke check | Manual route/access smoke | Rerun after any routing or shell/link changes |
| Existing frontend build and checks remain healthy | Angular build/test/format tooling | `npm run build`, `npm run test:ci`, `npm run format:check` as available | Rerun after final code changes |
| No backend/database/auth/admin/domain/reservation/integration/payment scope drift | Git diff/source review | Changed-file review | Review immediately before final report |

## Project Structure

### Documentation (this feature)

```text
specs/005-public-landing-cleanup/
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
frontend/src/app/core/i18n/translations/public-landing.translations.ts
frontend/src/app/features/public/models/public-landing.model.ts
frontend/public/landing/
frontend/src/app/app.routes.ts
frontend/src/
src/main/java/
src/main/resources/
docs/
```

**Structure Decision**: Implement in existing public landing frontend files under `frontend/src/app/features/public`, public landing assets under `frontend/public/landing`, and existing public landing translations under `frontend/src/app/core/i18n/translations`. Do not touch backend, database, auth/admin domain, migrations, package dependencies, or private feature modules unless validation reveals an issue directly caused by the public landing cleanup.

## Phase 0 Research Summary

No researchable unknowns were identified. `research.md` records that existing Angular/i18n mechanisms are sufficient, no architecture assessment is required, and no material decisions are unresolved.

## Phase 1 Design Summary

`data-model.md` records that no domain, persistence, API, browser storage, or external contract model changes apply; existing local presentation interfaces remain unchanged unless a small optional translation field removal is needed by implementation. `contracts/public-landing-cleanup.md` defines the visible `/` cleanup contract. `quickstart.md` documents frontend validation and manual browser checks.

## Post-Design Constitution Check

- **Product focus and sustainable evolution**: Still compliant; artifacts remain limited to the two-apartment public landing cleanup.
- **Layered monolith responsibilities**: Still compliant; backend layers are untouched.
- **Backend and database authority**: Still compliant; no business rule or authorization behavior is implemented in the frontend.
- **Schema evolution**: Still compliant; no migrations or schema work.
- **Protected reservation model**: Still compliant; no reservation behavior.
- **Specification and planning discipline**: Still compliant; spec, plan, contract, quickstart, and tasks can trace to issue #2 and contain no unresolved blocking decision.
- **Architecture and technology assessment**: Still no assessment trigger; selected approach uses existing local presentation mechanisms.
- **Focused changes and proportional validation**: Still compliant; validation evidence is proportionate to public UI copy cleanup risk.
- **Operational safety and sources of truth**: Still compliant; no operational exposure, secrets, or real-data changes.

## Complexity Tracking

| Complexity | Why Needed | Simpler Alternative Rejected Because | Constitution Compliance |
|------------|------------|-------------------------------------|-------------------------|
| N/A | N/A | N/A | N/A |
