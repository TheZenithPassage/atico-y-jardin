# Implementation Plan: Private Reservation Management

**Branch**: `planning/private-reservation-management` | **Date**: 2026-06-30 | **Spec**: [spec.md](./spec.md)

**Input**: Feature specification from `specs/002-private-reservation-management/spec.md`

## Summary

Plan v0.2.0 private reservation-management alpha by adapting inherited CatWorld private administration concepts to apartment reservations. Implementation is not part of this task. The recommended direction is a layered Spring Boot backend with Flyway schema evolution, fixed apartment units Ático and Jardín, guests, reservations, backend overlap validation, and a FullCalendar-based private calendar with colors and filters per apartment.

## Technical Context

**Language/Version**: Backend Java 17 and Spring Boot 4.0.2. Frontend Angular 21.2.x, TypeScript 5.9.x, SCSS, Angular Material/CDK 21.2.x.

**Primary Dependencies**: Existing Spring Web, Spring Security, Spring Data JPA, Bean Validation, MySQL, Flyway, JUnit, Mockito, Angular, FullCalendar, Angular Material/CDK. No new dependencies are recommended for v0.2.0 planning.

**Storage**: Future MySQL schema changes are expected and must use Flyway. No schema changes are made by this planning artifact.

**Testing**: Future implementation must include backend service tests for overlap validation and date rules, controller tests for private contracts, migration validation, frontend build/tests, and calendar behavior checks.

**Target Platform**: Authenticated private admin UI plus Spring Boot API served through the existing Docker/Nginx shape.

**Project Type**: Ático y Jardín full-stack web application inherited from CatWorld.

**Performance Goals**: No numeric performance target. Calendar and reservation screens must remain usable for the two-unit initial scope.

**Constraints**: Exactly two initial apartment units. Public visitors do not create confirmed reservations. Requests are not reservations. No payments, channel sync, iCal sync, or pricing engine.

**Scale/Scope**: v0.2.0 private alpha for two apartments and internal users.

## Constitution Check

- **Product focus and sustainable evolution**: Pass. The scope is two-apartment private management, not a marketplace.
- **Layered monolith responsibilities**: Pass. Future implementation must preserve controller/service/repository/database boundaries.
- **Backend and database authority**: Pass. Reservation overlap and date rules must be backend-enforced.
- **Schema evolution**: Pending implementation gate. Future schema changes require Flyway and migration validation.
- **Protected reservation model**: Pass. Active overlap, check-out-after-check-in, cancelled-does-not-block, and request-is-not-reservation rules are explicit.
- **Specification and planning discipline**: Pass for planning. Persistence strategy remains an open implementation blocker.
- **Architecture and technology assessment**: Required before implementation because this feature changes persistence, shared API contracts, and central domain invariants. This planning artifact records the recommended direction but does not authorize coding.
- **Focused changes and proportional validation**: Pass. Future tasks separate domain mapping, backend, frontend, calendar, and validation.
- **Operational safety and sources of truth**: Pass for planning; future implementation must update operations if production data or backup procedures change.

## Architecture and Technology Assessment

**Assessment required**: Yes before implementation.

**Decision trigger**: material persistence decision; material shared-contract decision; central business-rule correctness responsibility; meaningful migration cost.

**Options considered**:

- Existing platform/framework/project capability: Reuse CatWorld layered monolith, authentication, stay overlap validation pattern, and FullCalendar. Strong fit with lowest new dependency cost.
- Established library/framework/service: Add booking-specific engine or reservation SaaS. Rejected for v0.2.0 because scope is private alpha for two apartments and would add operational/dependency complexity.
- Focused custom implementation: Build apartment reservation domain in the existing codebase using Spring services and Angular UI. Recommended, while reusing existing patterns.

**Selected approach**: Recommended for future approval: phased custom reservation domain inside the inherited layered monolith, backed by Flyway migrations and reused FullCalendar.

**Why selected**: It fits two apartments, reuses proven CatWorld patterns, keeps private admin integrated, and avoids premature platform features.

**Confirmed medium-term use**: Supports v0.2.0 private alpha and becomes the confirmed-reservation foundation for v0.3.0 public booking request conversion.

**Maintenance and operational consequences**: Schema migration and domain conversion must be carefully validated. Historical CatWorld concepts must not be partially renamed without tests and docs.

**Reversibility and migration path**: Prior to schema changes, the plan is reversible. After persistence migration, reversibility requires database migration/rollback planning.

**Human approval**: Pending for implementation. The user approved planning this direction, but coding requires a later active implementation issue/spec/plan.

## Project Structure

### Documentation (this feature)

```text
specs/002-private-reservation-management/
├── plan.md
├── research.md
├── data-model.md
├── quickstart.md
├── contracts/
│   └── private-reservations.md
└── tasks.md
```

### Source Code (repository root)

```text
src/main/java/
src/main/resources/db/migration/
src/test/java/
frontend/src/app/
frontend/src/assets/
docs/ARCHITECTURE.md
docs/RELEASE_PLAN.md
```

**Structure Decision**: Future implementation should adapt existing backend and frontend feature areas in phases, not perform an all-at-once rename. Exact package/component paths must be selected after inspecting current code during v0.2.0 implementation.

## Phase 0 Research Summary

[research.md](./research.md) recommends reusing CatWorld patterns, fixed apartment units, backend overlap validation, and one FullCalendar calendar with colors and filters.

## Phase 1 Design Summary

- [data-model.md](./data-model.md) defines planned reservation entities and rules.
- [contracts/private-reservations.md](./contracts/private-reservations.md) defines future private API/UI contract expectations.
- [quickstart.md](./quickstart.md) defines future validation scenarios.

## Post-Design Constitution Check

The design records all high-risk decisions and marks implementation approval as pending. No runtime changes are made in this planning task.

## Complexity Tracking

| Complexity | Why Needed | Simpler Alternative Rejected Because | Constitution Compliance |
|------------|------------|-------------------------------------|-------------------------|
| Phased domain migration from CatWorld stay concepts | Existing code and schema use Owner/Cat/Stay/Vet terms | Big-bang renaming would be risky and hard to validate | Requires explicit spec, Flyway migration, and focused validation |
| Backend overlap validation by apartment unit | Prevents double-booking | Frontend-only validation would not protect integrity | Follows backend/database authority |
