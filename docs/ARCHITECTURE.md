# Ático y Jardín Architecture

Ático y Jardín is a public website and future private management tool for two
tourist apartments: Ático and Jardín.

This repository is currently a transition from the CatWorld technical baseline.
The implemented code still contains CatWorld domain concepts. The target
product domain is apartment rental presentation and reservation management, but
runtime domain refactoring must happen in planned phases.

## Current State

Implemented inherited baseline:

- Spring Boot layered backend.
- Angular frontend.
- HTTP Basic authentication backed by persistent application users.
- Admin account management with fixed inherited roles.
- Owner, cat, vet, stay, and calendar workflows from CatWorld.
- Stay overlap validation.
- MySQL persistence managed by Flyway.
- Docker Compose and Nginx production shape.
- GitHub Actions backend and frontend CI.

Planned Ático y Jardín target:

- Public website for Ático and Jardín.
- Separate apartment presentation and galleries.
- Public location/contact and future inquiry/request CTA.
- Private admin for guests, apartment units, reservations, calendar, public
  requests, and internal users.
- Backend API protecting private operations and future public request intake.

## Stack

- Java 17
- Spring Boot 4.0.2
- Spring Web
- Spring Data JPA
- Spring Security
- Bean Validation
- MySQL
- Flyway
- Docker Compose
- Nginx
- JUnit 5
- Mockito
- Angular 21.2.x
- Angular Material 21.2.x
- Angular CDK 21.2.x
- TypeScript 5.9.x
- SCSS
- FullCalendar 6.1.x
- Vitest/jsdom
- Prettier
- GitHub Actions
- Maven wrapper
- npm

No dependency changes are planned for the transition documentation or v0.1.0
landing work.

## Architecture Style

The inherited backend remains a layered monolith:

```txt
controller -> service -> repository -> database
```

Responsibilities:

- `controller`: HTTP endpoints, request validation entry point, and response
  status handling.
- `service`: business rules, transactions, and application use cases.
- `repository`: persistence access through Spring Data JPA.
- `model`: JPA entities and domain behavior.
- `dto`: API input/output contracts.
- `mapper`: conversion between DTOs and entities.
- `exception`: application exceptions and HTTP exception handling.

This structure remains the default for future reservation and booking-request
work.

## Product Architecture

### Public Website

Release v0.1.0 is primarily frontend work.

Responsibilities:

- Public landing.
- Ático section.
- Jardín section.
- Separate galleries.
- Apartment information and amenities.
- Location and contact.
- Availability/contact CTA.

Boundaries:

- No real booking engine in v0.1.0.
- No payment.
- No automatic date blocking.
- No public exposure of private reservation or guest data.
- Real images and content may start as TODO placeholders.

### Private Admin

Release v0.2.0 adapts the inherited private application toward reservation
management.

Responsibilities:

- Login.
- Internal users.
- Guests.
- Fixed apartment units: Ático and Jardín.
- Reservations.
- Calendar.
- Internal notes.
- Future public request review.

Private admin must remain authenticated. Public visitors must not create
confirmed reservations directly.

### Backend API

The Spring Boot backend remains authoritative for:

- authentication and authorization;
- validation;
- reservation overlap rules;
- request lifecycle transitions;
- persistence;
- private data protection.

Frontend validation may assist but cannot be the only protection for important
rules.

### Database

MySQL and Flyway remain the persistence baseline.

Rules:

- Real schema changes must use Flyway migrations under
  `src/main/resources/db/migration`.
- Hibernate schema auto-update must not be used for real schema evolution.
- This planning task does not change schema.
- Future domain migration must preserve data intentionally and include
  migration validation.

### Frontend UI

Angular remains the frontend framework.

Guidelines:

- Use Angular Material/CDK for interactive controls where it fits.
- Use SCSS for public landing layout, responsive composition, and
  product-specific presentation.
- Keep FullCalendar styling separate from Material styling.
- Do not create a generic design-system package for the landing.
- Do not mix public landing work with private domain refactors unless a plan
  explicitly approves it.

## Domain Transition

Future conceptual mapping:

| Inherited CatWorld concept | Ático y Jardín direction |
|----------------------------|--------------------------|
| CatWorld | Ático y Jardín |
| Owner | Guest / Huésped / Cliente |
| Cat | ApartmentUnit / Unidad / Apartamento |
| Stay | Reservation / Reserva |
| StayCat | ReservationUnit, if multi-unit reservations are needed |
| Vet | Possible BookingChannel / BookingSource, or removal |
| Accounts | Private administration users |

Do not implement these renames as a big bang. The first public demo should
remove visible CatWorld branding from the public UX; deeper documentation and
source-code domain changes belong to later scoped tasks.

## Reservation Rules Target

For v0.2.0 private reservation management:

- There are exactly two initial apartment units: Ático and Jardín.
- A confirmed reservation belongs to at least one unit, normally one.
- Check-out must be after check-in.
- Active reservations must not overlap for the same unit.
- Cancelled reservations do not block availability.
- Public visitors do not create confirmed reservations in v0.2.0.

For v0.3.0 public booking requests:

- A public request is not a confirmed reservation.
- A public request does not block dates automatically.
- An admin may review and manually convert a request to a reservation.
- Conversion must reuse private reservation validation.

## Calendar Strategy

Do not implement reservation calendar changes in v0.1.0.

Recommended v0.2.0 approach:

- One FullCalendar calendar.
- Colors per apartment.
- Filters for Ático, Jardín, and both.

Alternatives:

- Two separate calendars, one per apartment.
- Resource-style view if operational needs justify it later.

For two apartments, start with one calendar plus filters and colors.

## Authentication

The inherited private authentication remains in place until a later spec changes
it. Private reservation management must require login. Public landing pages
must not require login.

On a fresh inherited database, existing environment variables still bootstrap
the first admin account. These names may remain CatWorld-specific until an
operations/configuration transition task owns the rename.

## Testing Strategy

Validation should match risk:

- Documentation-only planning: structure, Markdown, and reference review.
- v0.1.0 public landing: frontend build plus desktop/mobile/tablet visual
  review and no-visible-CatWorld public pass.
- v0.2.0 private reservations: backend service tests for overlap/date rules,
  controller tests, Flyway validation, frontend build/tests, and manual
  calendar scenarios.
- v0.3.0 public requests: public API validation tests, persistence tests,
  request lifecycle tests, conversion tests using reservation validation,
  frontend build/tests, and privacy review.

CI workflows remain:

```txt
.github/workflows/backend-ci.yml
.github/workflows/frontend-ci.yml
```

Backend validation:

```bash
./mvnw verify
```

Frontend validation:

```bash
cd frontend
npm run build
npm run format:check
npm run test:ci
```

## Diagrams

PlantUML diagrams live in:

```txt
docs/uml/
```

Current diagrams still describe the inherited CatWorld implementation. They are
useful historical/source-of-truth references for implemented behavior, but they
are not the target Ático y Jardín domain model.

## Operations

`docs/OPERATIONS.md` still describes the inherited CatWorld deployment and
backup flow. It remains useful for the technical baseline, but it must be
updated before real Ático y Jardín production use, especially for:

- final domain;
- HTTPS;
- privacy/RGPD;
- backups;
- real credentials;
- real data handling;
- production smoke tests.

## Source Of Truth

Current source-of-truth documents:

- `README.md`
- `docs/ARCHITECTURE.md`
- `docs/RELEASE_PLAN.md`
- `docs/WORKFLOW.md`
- active feature specs under `specs/`
- existing code and migrations for implemented inherited behavior

Historical CatWorld specs, screenshots, and diagrams remain intentionally until
their owning transition tasks replace them.
