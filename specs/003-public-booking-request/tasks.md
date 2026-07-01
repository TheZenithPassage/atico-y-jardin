# Tasks: Public Booking Request

**Input**: Design documents from `specs/003-public-booking-request/`

**Prerequisites**: `spec.md`, `plan.md`, `research.md`, `data-model.md`, `contracts/public-booking-request.md`, `quickstart.md`, and completed/approved v0.2.0 private reservation management.

**Tests**: Future implementation requires backend validation/service/controller tests, migration validation, frontend build/tests, and manual lifecycle validation.

## Implementation Gate

| ID | Description | Files likely affected | Dependencies | Done when | Validation |
|----|-------------|----------------------|--------------|-----------|------------|
| B001 | Confirm v0.2.0 private reservation management exists and conversion can reuse reservation validation. | `specs/002-private-reservation-management/`, future code | None | Private reservation creation and overlap validation are implemented and validated. | v0.2.0 quickstart passes. |
| B002 | Approve public request persistence, privacy, and notification scope before coding. | `specs/003-public-booking-request/plan.md`, future ADR if used | B001 | Human-approved plan records persistence and notification choices. | Constitution check confirms approval no longer pending. |

## Phase 1 - Backend Request Lifecycle

| ID | Description | Files likely affected | Dependencies | Done when | Validation |
|----|-------------|----------------------|--------------|-----------|------------|
| B003 | Add Flyway migration for booking request persistence according to approved plan. | `src/main/resources/db/migration/**` | B002 | Request data can be persisted without touching reservation tables unnecessarily. | Flyway validation in `./mvnw verify`. |
| B004 | Add backend model/DTO/mapper/repository/service/controller for public booking requests. | `src/main/java/**` | B003 | Public request API can create and validate requests. | Controller/service tests. |
| B005 | Enforce server-side date validation: check-out after check-in. | `src/main/java/**`, `src/test/java/**` | B004 | Invalid date ranges are rejected. | Backend tests. |
| B006 | Enforce minimum guest contact validation. | `src/main/java/**`, `src/test/java/**` | B004 | Requests without required contact are rejected. | Backend tests. |
| B007 | Ensure public request creation does not create reservations or block dates. | `src/main/java/**`, `src/test/java/**` | B004 | New requests have status `NEW` only. | Service tests prove no reservation is created. |

## Phase 2 - Public Form

| ID | Description | Files likely affected | Dependencies | Done when | Validation |
|----|-------------|----------------------|--------------|-----------|------------|
| B008 | Connect the public landing inquiry form to the booking request API. | `frontend/src/app/**` | B004-B007 | Valid public submissions reach backend and show review-pending copy. | Manual public submission scenario. |
| B009 | Add frontend validation hints for dates and contact fields. | `frontend/src/app/**` | B008 | Obvious invalid inputs are caught before submission while backend remains authoritative. | Frontend test/build and manual invalid input scenario. |
| B010 | Ensure public copy states that requests are reviewed and not confirmed reservations. | `frontend/src/app/**` | B008 | Visitor-facing response is honest. | Copy review. |

## Phase 3 - Private Review And Conversion

| ID | Description | Files likely affected | Dependencies | Done when | Validation |
|----|-------------|----------------------|--------------|-----------|------------|
| B011 | Add private request list/detail review UI. | `frontend/src/app/**`, `src/main/java/**` | B004-B007 | Authenticated admins can see submitted requests. | Manual private review scenario. |
| B012 | Add status actions for reviewed, accepted, declined, and cancelled. | `frontend/src/app/**`, `src/main/java/**`, `src/test/java/**` | B011 | Admins can manage request lifecycle. | Backend tests and manual lifecycle scenario. |
| B013 | Add manual conversion from accepted request to reservation using private reservation validation. | `frontend/src/app/**`, `src/main/java/**`, `src/test/java/**` | B001, B012 | Accepted request can become a confirmed reservation only if reservation rules pass. | Conversion tests include overlap conflict. |
| B014 | Mark converted requests as `CONVERTED_TO_RESERVATION` and retain reservation link. | `src/main/java/**`, `frontend/src/app/**` | B013 | Converted request status and reservation link are visible privately. | Manual conversion scenario. |

## Phase 4 - Privacy, Spam, And Validation

| ID | Description | Files likely affected | Dependencies | Done when | Validation |
|----|-------------|----------------------|--------------|-----------|------------|
| B015 | Review public/private data exposure so internal notes and reservation data are not public. | `src/main/java/**`, `frontend/src/app/**` | B011-B014 | Public API exposes only public-safe request response data. | Controller tests and manual API review. |
| B016 | Document spam/captcha risk and decide whether captcha is needed before launch. | `docs/ARCHITECTURE.md`, `docs/RELEASE_PLAN.md`, future ops docs | B008-B010 | Spam risk is acknowledged; captcha is either implemented by approved plan or deferred. | Documentation review. |
| B017 | Run backend verification. | Backend | B003-B016 | Backend tests and migration validation pass. | `./mvnw verify`. |
| B018 | Run frontend build and tests. | Frontend | B008-B016 | Frontend validation passes. | `cd frontend && npm run build && npm run test:ci`. |
| B019 | Run manual public request quickstart. | Running app | B017, B018 | Manual scenarios in `quickstart.md` pass. | Scenario notes in implementation report. |
