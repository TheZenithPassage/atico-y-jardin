# Ático y Jardín

Ático y Jardín is the new product direction for this repository: a public
website and future private management tool for two tourist apartments, Ático
and Jardín.

This repository starts from a local copy of CatWorld. The inherited technical
base is useful for later private reservation management because it already
contains a Spring Boot backend, Angular frontend, authentication, calendar,
stay overlap validation, MySQL, Flyway, Docker/Nginx, and GitHub Actions. The
runtime code has not yet been fully rebranded or refactored.

## Current Status

Status: planning/demo adaptation.

Implemented today:

- Inherited CatWorld application code and infrastructure.
- Angular frontend and Spring Boot backend baseline.
- Existing private login/admin behavior from the inherited application.
- Existing Docker Compose, Flyway, and CI setup.

Planned next:

- v0.1.0 public landing page for the Friday, 2026-07-03 demo.
- Clear public separation between Ático and Jardín.
- Separate galleries, apartment information, location/contact, and inquiry CTA.
- Later private reservation management adapted from CatWorld stays.
- Later public booking requests that do not become confirmed reservations automatically.

## Product Principles

- Two apartments, not a generic booking marketplace.
- Public presentation first, private management second.
- Booking requests are not confirmed reservations.
- Keep the Friday demo honest.
- Reuse proven CatWorld architecture where it helps.
- Avoid big-bang domain refactors.
- Keep `main` demoable.
- Prefer small vertical slices.
- Do not add dependencies without a clear assessment.
- Do not build payment or channel-manager features prematurely.

## Release Direction

- **v0.1.0 - Friday demo landing**: public landing, brand, two apartment sections, separate galleries, location/contact, responsive demo.
- **v0.2.0 - Private reservation management alpha**: login-protected guests, apartment units, reservations, calendar, overlap validation.
- **v0.3.0 - Public booking request**: public inquiry/request form connected to backend, private review, manual conversion to reservation.
- **v0.4.0 - Owner review beta**: real content, photos, languages, SEO basics, legal basics, staging, backups.
- **v1.0.0 - Production launch**: final domain, HTTPS, stable deployment, backups, real users/data, smoke tests, operational docs.

See [docs/RELEASE_PLAN.md](docs/RELEASE_PLAN.md) for the detailed plan.

## Stack

The inherited stack is preserved for now.

**Backend:** Java 17, Spring Boot, Spring Web, Spring Security, Spring Data JPA,
Bean Validation, MySQL, Flyway, JUnit, and Mockito.

**Frontend:** Angular, TypeScript, SCSS, Angular Material, Angular CDK,
FullCalendar, Vitest/jsdom, and Prettier.

**Infrastructure:** Docker Compose, Nginx, GitHub Actions, Maven wrapper, and
npm.

Do not update dependencies as part of planning or initial landing work unless a
later approved plan explicitly requires it.

## Quick Start

These commands still run the inherited application baseline.

Requirements:

- Docker Desktop or Docker Engine with Docker Compose

Copy `.env.example` to `.env`, then run:

```bash
docker compose up --build
```

Open:

```text
http://localhost:4200
```

Use the login credentials configured in `.env`. On a fresh database, these
credentials bootstrap the first administrator account.

Current inherited deployment, environment, and operations procedures are
documented in [docs/OPERATIONS.md](docs/OPERATIONS.md). That document still
contains CatWorld names and must be updated before real Ático y Jardín
production use.

## Validation

Backend:

```bash
./mvnw verify
```

Frontend:

```bash
cd frontend
npm run build
npm run format:check
npm run test:ci
```

For documentation-only planning changes, lightweight structure and Markdown
review are usually sufficient unless the active task changes code.

## Planning Artifacts

Active transition specs:

- [specs/000-project-transition](specs/000-project-transition)
- [specs/001-friday-demo-landing](specs/001-friday-demo-landing)
- [specs/002-private-reservation-management](specs/002-private-reservation-management)
- [specs/003-public-booking-request](specs/003-public-booking-request)

Supporting docs:

- [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md)
- [docs/RELEASE_PLAN.md](docs/RELEASE_PLAN.md)
- [docs/DEMO_SCRIPT.md](docs/DEMO_SCRIPT.md)
- [docs/WORKFLOW.md](docs/WORKFLOW.md)
- [docs/CONTENT_INVENTORY.md](docs/CONTENT_INVENTORY.md)
- [docs/GITHUB_ISSUES.md](docs/GITHUB_ISSUES.md)

Historical CatWorld specs and diagrams may remain until their owning transition
tasks replace or archive them.
