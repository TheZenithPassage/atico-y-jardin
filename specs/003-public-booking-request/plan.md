# Implementation Plan: Public Booking Request

**Branch**: `planning/public-booking-request` | **Date**: 2026-06-30 | **Spec**: [spec.md](./spec.md)

**Input**: Feature specification from `specs/003-public-booking-request/spec.md`

## Summary

Plan v0.3.0 public booking requests: visitors submit availability/reservation requests from the public website, backend persists and validates them, admins review them privately, and an accepted request can be manually converted to a confirmed reservation using private reservation rules. Requests never block availability automatically.

## Technical Context

**Language/Version**: Backend Java 17/Spring Boot 4.0.2. Frontend Angular 21.2.x/TypeScript 5.9.x/SCSS/Angular Material.

**Primary Dependencies**: Existing Spring Web, Spring Security, Spring Data JPA, Bean Validation, MySQL, Flyway, Angular, Angular Material/CDK, Vitest/jsdom, JUnit, Mockito. No new dependencies are required for the base flow.

**Storage**: Future MySQL/Flyway persistence for booking requests. No schema changes in this planning task.

**Testing**: Future implementation requires backend validation/service/controller tests, migration validation, frontend request-form tests or build validation, and private admin lifecycle checks.

**Target Platform**: Public Angular website plus authenticated private admin and Spring Boot API.

**Project Type**: Ático y Jardín full-stack web application inherited from CatWorld.

**Performance Goals**: No numeric performance target. The form must remain reliable for low-volume direct inquiries.

**Constraints**: Requests are not confirmed reservations and do not block dates automatically. No payment, auto-confirmation, channel sync, or pricing engine.

**Scale/Scope**: v0.3.0 lead/request lifecycle for two apartments.

## Constitution Check

- **Product focus and sustainable evolution**: Pass. The flow supports direct inquiries for two apartments, not a marketplace.
- **Layered monolith responsibilities**: Pass for future implementation; backend validation and persistence must use existing layers.
- **Backend and database authority**: Pass. Server-side validation is required.
- **Schema evolution**: Pending implementation gate. Future request persistence requires Flyway.
- **Protected reservation model**: Pass. Requests do not block availability or become confirmed reservations automatically.
- **Specification and planning discipline**: Pass. Notification is a non-blocking open decision if omitted.
- **Architecture and technology assessment**: Required before implementation because this introduces public API, persistence, and conversion contracts.
- **Focused changes and proportional validation**: Pass. Tasks separate public form, backend persistence, private review, conversion, and validation.
- **Operational safety and sources of truth**: Future implementation must review privacy/RGPD implications for public contact data.

## Architecture and Technology Assessment

**Assessment required**: Yes before implementation.

**Decision trigger**: material persistence decision; material public shared-contract decision; privacy/security decision; business-rule correctness responsibility.

**Options considered**:

- Existing platform/framework/project capability: Recommended. Add booking request persistence/API within the existing Spring Boot/Angular app.
- Established library/framework/service: External form or CRM. Deferred because the product needs integrated private conversion to reservations.
- Focused custom implementation: Recommended inside existing layers, with server-side validation and private admin review.

**Selected approach**: Recommended for future approval: integrated public booking request domain in the existing application, with private manual conversion.

**Why selected**: It keeps the request lifecycle traceable, preserves backend authority, and connects naturally to private reservations.

**Confirmed medium-term use**: Supports v0.3.0 and later owner review/beta feedback.

**Maintenance and operational consequences**: Public contact data introduces privacy and spam considerations. Notification behavior may require additional operational configuration if implemented.

**Reversibility and migration path**: Before persistence migration, reversible through docs changes. After persistence, requires Flyway rollback/forward migration planning.

**Human approval**: Pending for implementation. The user approved planning this release, not immediate coding.

## Project Structure

### Documentation (this feature)

```text
specs/003-public-booking-request/
├── plan.md
├── research.md
├── data-model.md
├── quickstart.md
├── contracts/
│   └── public-booking-request.md
└── tasks.md
```

### Source Code (repository root)

```text
src/main/java/
src/main/resources/db/migration/
src/test/java/
frontend/src/app/
docs/ARCHITECTURE.md
docs/RELEASE_PLAN.md
```

**Structure Decision**: Future implementation should add a public-safe request API and private admin review screens without exposing reservation internals publicly.

## Phase 0 Research Summary

[research.md](./research.md) records non-blocking public requests, manual admin conversion, server-side validation, and optional notifications.

## Phase 1 Design Summary

- [data-model.md](./data-model.md) defines planned request entities and statuses.
- [contracts/public-booking-request.md](./contracts/public-booking-request.md) defines public/private lifecycle boundaries.
- [quickstart.md](./quickstart.md) defines future validation scenarios.

## Post-Design Constitution Check

The design keeps requests separate from reservations and marks implementation approval as pending. No runtime changes are made in this planning task.

## Complexity Tracking

| Complexity | Why Needed | Simpler Alternative Rejected Because | Constitution Compliance |
|------------|------------|-------------------------------------|-------------------------|
| Public request persistence | Admins need to review and convert inquiries | Pure email/contact form loses lifecycle and conversion traceability | Backend validation and privacy review are required |
| Manual conversion step | Prevents auto-booking and double-booking | Automatic confirmation would require stronger availability/payment/legal decisions | Preserves protected reservation model |
