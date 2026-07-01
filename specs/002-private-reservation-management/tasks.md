# Tasks: Private Reservation Management

**Input**: Design documents from `specs/002-private-reservation-management/`

**Prerequisites**: `spec.md`, `plan.md`, `research.md`, `data-model.md`, `contracts/private-reservations.md`, `quickstart.md`

**Tests**: Future implementation requires backend service/controller tests, Flyway migration validation, frontend build/tests, and manual calendar validation.

## Implementation Gate

| ID | Description | Files likely affected | Dependencies | Done when | Validation |
|----|-------------|----------------------|--------------|-----------|------------|
| R001 | Resolve and approve persistence strategy before coding: in-place migration, parallel reservation tables, or staged compatibility. | `specs/002-private-reservation-management/plan.md`, future ADR if used | None | Human-approved implementation plan records selected persistence approach. | Constitution check confirms approval no longer pending. |

## Phase 1 - Domain Mapping

| ID | Description | Files likely affected | Dependencies | Done when | Validation |
|----|-------------|----------------------|--------------|-----------|------------|
| R002 | Map CatWorld `Stay` concepts to `Reservation` concepts and identify fields to preserve, rename, split, or remove. | `docs/ARCHITECTURE.md`, future backend files | R001 | Mapping is explicit and does not weaken inherited booking invariants accidentally. | Review against `contracts/private-reservations.md`. |
| R003 | Map CatWorld `Cat` concepts to fixed `ApartmentUnit` concepts for Ático and Jardín. | future backend model/migration files | R001 | Exactly two initial units are represented. | Backend tests or migration data checks in implementation. |
| R004 | Map CatWorld `Owner` concepts to `Guest` concepts and define minimum private contact fields. | future backend/frontend files | R001 | Guest fields are sufficient for internal reservation management. | Controller/service contract review. |
| R005 | Decide whether `Vet` is removed from the future private flow or converted to `BookingChannel` later. | planning docs, future backend files | R001 | v0.2.0 scope does not carry irrelevant vet UI into reservation UX. | Manual scope review. |

## Phase 2 - Backend Reservation Rules

| ID | Description | Files likely affected | Dependencies | Done when | Validation |
|----|-------------|----------------------|--------------|-----------|------------|
| R006 | Introduce ApartmentUnit persistence or reference data according to the approved migration plan. | `src/main/resources/db/migration/**`, `src/main/java/**` | R001, R003 | Ático and Jardín exist as active units. | Flyway migration validation and repository tests. |
| R007 | Introduce Guest persistence and private API contracts according to the approved plan. | `src/main/resources/db/migration/**`, `src/main/java/**` | R001, R004 | Guests can be created/listed for private reservation use. | Backend tests and controller validation. |
| R008 | Introduce Reservation persistence and service behavior. | `src/main/resources/db/migration/**`, `src/main/java/**` | R006, R007 | Reservations link guest, unit, dates, status/cancellation, and notes as planned. | Backend service and repository tests. |
| R009 | Implement backend validation for check-out after check-in. | `src/main/java/**`, `src/test/java/**` | R008 | Invalid date ranges are rejected. | Service/controller tests pass. |
| R010 | Implement backend validation preventing active overlaps for the same apartment. | `src/main/java/**`, `src/test/java/**` | R008 | Same-unit active overlaps are rejected; different-unit overlaps are allowed. | Service tests cover both cases. |
| R011 | Implement cancellation behavior so cancelled reservations do not block availability. | `src/main/java/**`, `src/test/java/**` | R010 | Cancelled reservation dates can be reused. | Service tests cover cancelled overlap case. |

## Phase 3 - Private Frontend

| ID | Description | Files likely affected | Dependencies | Done when | Validation |
|----|-------------|----------------------|--------------|-----------|------------|
| R012 | Adapt private navigation labels from inherited stay/cat flows toward reservations, guests, and calendar where scoped. | `frontend/src/app/**` | R006-R011 | Private nav reflects reservation management without exposing unfinished public booking requests. | Frontend manual navigation pass. |
| R013 | Add reservation list/create/edit/cancel UI according to approved private API contracts. | `frontend/src/app/**` | R008-R011 | Internal user can manage reservations. | Frontend tests/build and manual scenario. |
| R014 | Add guest selection or guest management flow needed for reservation creation. | `frontend/src/app/**` | R007, R013 | Reservation creation can attach a guest. | Manual private reservation scenario. |

## Phase 4 - Calendar

| ID | Description | Files likely affected | Dependencies | Done when | Validation |
|----|-------------|----------------------|--------------|-----------|------------|
| R015 | Map reservations to FullCalendar events with apartment-specific colors. | `frontend/src/app/**` | R013 | Ático and Jardín events are visually distinguishable. | Calendar manual scenario. |
| R016 | Add filters for Ático, Jardín, and both apartments. | `frontend/src/app/**` | R015 | Admin can filter calendar by apartment. | Calendar filter manual scenario. |

## Phase 5 - Validation

| ID | Description | Files likely affected | Dependencies | Done when | Validation |
|----|-------------|----------------------|--------------|-----------|------------|
| R017 | Run backend verification. | Backend | R006-R011 | Backend tests and migration validation pass. | `./mvnw verify`. |
| R018 | Run frontend build and tests. | Frontend | R012-R016 | Frontend validation passes. | `cd frontend && npm run build && npm run test:ci`. |
| R019 | Run manual private reservation quickstart. | Running app | R017, R018 | Manual scenarios in `quickstart.md` pass. | Scenario notes in implementation report. |
