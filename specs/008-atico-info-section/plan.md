# Implementation Plan: Ático Information Section

**Branch**: `feat/5-polish-atico-information-section` | **Date**: 2026-07-03 | **Spec**: [spec.md](./spec.md)

**Input**: Feature specification from `/specs/008-atico-info-section/spec.md`

**Note**: This template is filled in by the `/speckit-plan` command. See `.specify/templates/plan-template.md` for the execution workflow.

## Summary

Polish the public landing page's Ático information section so mobile visitors can scan neutral descriptive copy and a short highlight set, while preserving working Ático anchors and avoiding any invented hard facts or reservation behavior. The technical approach is to reuse the existing Angular public landing component, public landing translations, and SCSS presentation layer; no backend, persistence, routing, dependency, or shared architecture changes are required.

## Technical Context

**Language/Version**: Java 17 / Spring Boot 4.0.2 backend exists but is not affected. Affected surface is Angular 21.2.x with TypeScript 5.9.2 and SCSS under `frontend/src`.

**Primary Dependencies**: Existing Angular core/router/browser packages, existing custom `I18nService`, existing public landing translation model, and existing SCSS. No new dependencies.

**Storage**: N/A. No persistence, browser storage, schema, API payload, or external contract changes.

**Testing**: Frontend Vitest/Angular unit tests through `npm run test:ci`; production frontend build through `npm run build`; manual mobile browser smoke for `/` and `#atico` anchor.

**Target Platform**: Browser-rendered Angular single-page application served from the existing frontend build.

**Project Type**: Ático y Jardín full-stack web application with inherited Spring Boot backend and Angular frontend baseline. This feature affects the frontend public landing page only.

**Performance Goals**: N/A. No measurable performance target is included in the issue or specification.

**Constraints**: Mobile-first scanability; neutral copy only; do not invent capacity, rooms, exact address, amenities, prices, policies, availability, booking, or reservation facts; preserve existing i18n; public frontend only.

**Scale/Scope**: One public Ático section on the landing page, plus anchor verification from existing navbar/hero entry points.

## Constitution Check

*GATE 1: Before Phase 0 research, identify applicable constitution principles, assessment triggers, and unresolved decisions.*

*GATE 2: Before decision-dependent Phase 1 design and before implementation task generation, every required architecture and technology assessment MUST be completed and human-approved. Re-check full constitution compliance after Phase 1 design.*

- **Product focus and sustainable evolution**: Pass. The feature serves the Ático public presentation for the two-apartment product and does not broaden the product into marketplace, pricing, channel, payment, or multi-owner scope.
- **Layered monolith responsibilities**: Pass / N/A. No backend work is planned; existing controller/service/repository/database boundaries remain untouched.
- **Backend and database authority**: Pass / N/A. No business rules, authorization, validation, calculations, APIs, or persistence behavior are changed.
- **Schema evolution**: Pass / N/A. No schema changes or Flyway migrations are planned.
- **Protected reservation model**: Pass / N/A. No reservation, booking request, availability, occupancy, stay, or confirmation behavior is changed.
- **Specification and planning discipline**: Pass. The spec defines visible UI behavior, anchor behavior, copy guardrails, exclusions, edge cases, and assumptions with no unresolved open questions.
- **Architecture and technology assessment**: Pass. No significant shared capability, cross-cutting mechanism, dependency, security/persistence/shared-contract/operational decision, or costly replacement is introduced.
- **Focused changes and proportional validation**: Pass. Planned changes are limited to public landing presentation, translations, and tests; validation uses frontend unit/build checks plus mobile visual smoke.
- **Operational safety and sources of truth**: Pass / N/A. No secrets, real data, deployment exposure, privacy/RGPD, backup, or recovery procedure changes.

## Architecture and Technology Assessment

**Assessment required**: No. This is a local public presentation/content polish using existing Angular component, translation, and SCSS mechanisms with no new dependency, shared architecture, persistence, security, authorization, or operational decision.

**Decision trigger**: N/A

**Options considered**:

- Existing platform/framework/project capability: Use the existing public landing Angular component, translation data, and SCSS. Fits the feature with lowest risk and no architectural change.
- Established library/framework/service: N/A. No gallery library, UI framework change, or content service is required.
- Focused custom implementation: N/A beyond ordinary local template/style/test edits inside the existing component.

**Selected approach**: Existing project capability.

**Why selected**: The existing landing page already owns apartment presentation, anchors, translation-driven copy, and responsive SCSS. Reusing it keeps the change focused and reviewable.

**Confirmed medium-term use**: Supports issue #5 only and leaves the current simple visual slot compatible with later Ático gallery work without implementing that gallery here.

**Maintenance and operational consequences**: No new ownership, upgrade, security, persistence, or operations burden. Future content updates continue through the existing public landing translations.

**Reversibility and migration path**: Low cost. Changes can be adjusted or reverted within public landing translation/template/style files.

**Human approval**: N/A. No architecture and technology assessment is required.

## Semantic Equivalence and Replacement Review

**Review required**: No. The feature does not replace UI primitives, shared components, interaction mechanisms, presentation mechanisms, data contracts, or persistence mechanisms.

**Old behavior/source of truth**: Existing public landing source files and tests under `frontend/src/app/features/public/pages/public-landing-page/`, plus public landing translations.

**New mechanism semantics**: N/A. Existing mechanisms remain in place.

**Mismatch risks**: N/A for mechanism replacement. Ordinary responsive styling and anchor risks are covered by the validation evidence plan.

**Mitigation**: Keep IDs and anchor hrefs stable, keep copy in translations, and avoid changing router, backend, or form behavior.

**Proof required**: Frontend unit tests for DOM/copy/anchors, frontend build, manual mobile smoke for `/` and `#atico`.

## Validation Evidence Plan

| Surface / Requirement | Responsible Layer | Evidence Type | Freshness / Manual Notes |
|-----------------------|-------------------|---------------|--------------------------|
| FR-001, FR-002, FR-003 Ático section is distinct, concise, and scannable | Angular DOM + manual mobile viewport | Unit test assertions and visible smoke check | Rerun after translation/template/style changes |
| FR-004 no invented hard facts | Translation/content review + unit test text guardrail | Review changed copy and test forbidden wording patterns | Rerun after copy changes |
| FR-005 navbar/hero anchors target Ático | Angular DOM/router-adjacent anchor evidence + manual browser navigation | Unit tests for href/target IDs and manual `/#atico` smoke | Rerun after anchor/template changes |
| FR-006 gallery readiness without full new gallery | DOM/content review | Confirm no carousel or gallery behavior is introduced by this issue | Rerun after template/style changes |
| FR-007 public frontend-only scope | Git diff review | Confirm changed source files stay in public landing/spec artifacts | Review before final report |

## Project Structure

### Documentation (this feature)

```text
specs/008-atico-info-section/
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
├── public-landing-page.html
├── public-landing-page.scss
└── public-landing-page.spec.ts

frontend/src/app/core/i18n/translations/
└── public-landing.translations.ts

frontend/src/app/features/public/models/
└── public-landing.model.ts (only if existing presentation data shape must be extended)
```

**Structure Decision**: Keep the work in the existing public landing feature and translation files. Avoid backend, database, admin, auth, routing, global style, and shared component changes unless implementation evidence shows they are already required for the existing public landing anchors.

## Phase 0 Research Summary

No researchable unknowns or material decision blockers were identified. Repository inspection confirmed the existing Angular public landing component, translation data, SCSS, and tests are sufficient for the feature.

## Phase 1 Design Summary

Generated design artifacts:

- `research.md`: records that existing project mechanisms are sufficient and no external research or material decision is needed.
- `data-model.md`: records non-applicability because there are no entities, persistence, API payloads, schema, browser storage, external contracts, or structured feature data changes.
- `contracts/public-landing-ui.md`: defines the public UI contract for the Ático section, anchors, copy guardrails, and gallery boundary.
- `quickstart.md`: documents build, test, copy review, and mobile smoke validation.

## Post-Design Constitution Check

Pass. Phase 1 design keeps the feature public-frontend only, uses existing project mechanisms, avoids invented facts and reservation behavior, introduces no schema/security/persistence/shared-contract/operational decisions, and defines proportional validation for visible UI, anchor behavior, copy guardrails, and scope drift.

## Complexity Tracking

| Complexity | Why Needed | Simpler Alternative Rejected Because | Constitution Compliance |
|------------|------------|-------------------------------------|-------------------------|
| N/A | N/A | N/A | N/A |
