# Implementation Plan: Friday Demo Landing

**Branch**: `feature/friday-demo-landing` | **Date**: 2026-06-30 | **Spec**: [spec.md](./spec.md)

**Input**: Feature specification from `specs/001-friday-demo-landing/spec.md`

## Summary

Plan a professional public landing page for the Friday, 2026-07-03 owner demo. The implementation should be a frontend-first vertical slice in the existing Angular app, with public sections for Ático and Jardín, separate galleries, location/contact content, visible rebranding, and a mock or visual inquiry CTA. No backend reservation, payment, schema, or dependency work is part of v0.1.0.

## Technical Context

**Language/Version**: Frontend Angular 21.2.x, TypeScript 5.9.x, SCSS, Angular Material/CDK 21.2.x. Backend Java 17/Spring Boot remains untouched for this release slice.

**Primary Dependencies**: Existing Angular, Angular Material, Angular CDK, FullCalendar, RxJS, Vitest/jsdom, and Prettier. No new dependencies.

**Storage**: None for v0.1.0. Landing content is non-persistent presentation data and static assets/placeholders.

**Testing**: After implementation, run `cd frontend && npm run build`. Also run responsive manual checks on desktop, tablet, and mobile. Format/test commands may be run if touched files or project policy require them.

**Target Platform**: Public Angular route served by the existing frontend build and Nginx path. Private admin remains inherited and secondary.

**Project Type**: Ático y Jardín full-stack web application inherited from CatWorld; this release slice is frontend-public-page work.

**Performance Goals**: No numeric performance target. The landing must feel responsive and avoid obviously oversized or broken images.

**Constraints**: No backend API, persistence, schema migration, dependency update, payment flow, channel sync, or deep CatWorld code/domain refactor. Missing content must remain TODO-marked.

**Scale/Scope**: One public landing for two apartment units: Ático and Jardín.

## Constitution Check

- **Product focus and sustainable evolution**: Pass. The landing focuses on exactly two apartments and avoids marketplace features.
- **Layered monolith responsibilities**: Pass. No backend work is planned.
- **Backend and database authority**: Pass. No business rule is implemented in the frontend; the inquiry form is visual/mock only.
- **Schema evolution**: Pass. No schema changes.
- **Protected reservation model**: Pass. The page must not create confirmed reservations or block dates.
- **Specification and planning discipline**: Pass. Implemented vs planned behavior and exclusions are explicit.
- **Architecture and technology assessment**: Not required. The feature uses the existing approved Angular/Material/SCSS stack and adds no dependency or shared infrastructure.
- **Focused changes and proportional validation**: Pass. Scope is a public frontend vertical slice with build and responsive review.
- **Operational safety and sources of truth**: Pass. No secrets or real data; content TODOs identify missing owner-supplied information.

## Architecture and Technology Assessment

**Assessment required**: No.

**Decision trigger**: N/A. This uses existing frontend technology and does not add dependencies or new runtime infrastructure.

**Options considered**:

- Existing platform/framework/project capability: Selected. Build the landing inside the existing Angular frontend.
- Established library/framework/service: Not needed; no landing-specific dependency is approved for v0.1.0.
- Focused custom implementation: Use local Angular components/SCSS and existing Material controls where useful.

**Selected approach**: Create a frontend-first public landing route/page inside the existing Angular application, using local presentation data and static/gallery assets.

**Why selected**: It minimizes risk before the Friday demo, keeps deployment simple, and preserves the path to later private admin work.

**Confirmed medium-term use**: The public landing becomes the base for v0.3.0 public booking requests.

**Maintenance and operational consequences**: Content placeholders must be replaced with owner-approved content and optimized images before production.

**Reversibility and migration path**: Presentation data and route/component structure can be revised without backend or schema migration.

**Human approval**: Approved for planning by the user's v0.1.0 release request. No new architecture approval is required unless implementation proposes new dependencies or backend contracts.

## Project Structure

### Documentation (this feature)

```text
specs/001-friday-demo-landing/
├── plan.md
├── research.md
├── data-model.md
├── quickstart.md
├── contracts/
│   └── public-landing.md
└── tasks.md
```

### Source Code (repository root)

```text
frontend/src/app/
frontend/src/assets/
frontend/src/styles.scss
frontend/src/index.html
frontend/src/environments/
docs/DEMO_SCRIPT.md
docs/CONTENT_INVENTORY.md
```

**Structure Decision**: Keep landing implementation in the existing Angular app. Prefer a small public-facing feature area and static content model over backend contracts for v0.1.0. Use `frontend/src/assets/` or an equivalent existing Angular asset path for apartment gallery images/placeholders.

## Phase 0 Research Summary

[research.md](./research.md) records decisions for a single public landing, separated apartment sections, static/placeholder content, mock inquiry CTA, and visible rebranding without backend work.

## Phase 1 Design Summary

- [data-model.md](./data-model.md) defines non-persistent presentation models.
- [contracts/public-landing.md](./contracts/public-landing.md) defines the public-page UI/content contract.
- [quickstart.md](./quickstart.md) defines build, responsive, and demo validation.

## Post-Design Constitution Check

The design remains within the public v0.1.0 scope, uses existing technology, avoids backend authority conflicts by keeping inquiry visual/mock, and preserves later private reservation rules.

## Complexity Tracking

| Complexity | Why Needed | Simpler Alternative Rejected Because | Constitution Compliance |
|------------|------------|-------------------------------------|-------------------------|
| Separate sections and galleries for both apartments | Owners need to see two distinct apartment presentations | One combined generic apartment section would hide the main product structure | Supports the two-apartment product focus |
| Mock inquiry form or visual CTA | Friday demo needs a conversion path | Real booking request backend is v0.3.0 scope | Explicitly avoids confirmed reservations and date blocking |
