# Transition Reference Audit

Audit date: 2026-07-01

This audit classifies remaining CatWorld and cat-domain references after the
first planning/spec-kit adaptation to Ático y Jardín. It is intentionally not a
blanket replacement plan.

## Search Scope

Patterns reviewed:

- `CatWorld`
- `catworld`
- `cat boarding`
- `cat-boarding`
- `cats`
- `owners`
- `vets`
- `stays`

Primary planning/docs files reviewed:

- `README.md`
- `frontend/README.md`
- `docs/ARCHITECTURE.md`
- `docs/DEMO_SCRIPT.md`
- `docs/RELEASE_PLAN.md`
- `docs/GITHUB_ISSUES.md`
- `docs/CONTENT_INVENTORY.md`
- `docs/WORKFLOW.md`
- `.specify/memory/constitution.md`
- `.specify/templates/*.md`
- `specs/000-project-transition/**`
- `specs/001-friday-demo-landing/**`
- `specs/002-private-reservation-management/**`
- `specs/003-public-booking-request/**`

Repository source/config references were also sampled so inherited code,
configuration, and public metadata could be separated correctly.

## Classification

### Keep: Inherited Technical Context

Keep references that explicitly say the project starts from the CatWorld
technical baseline or reuses inherited architecture. These appear in:

- `README.md`
- `frontend/README.md`
- `docs/ARCHITECTURE.md`
- `.specify/memory/constitution.md`
- `.specify/templates/plan-template.md`
- `specs/000-project-transition/**`
- `specs/002-private-reservation-management/**`
- `specs/003-public-booking-request/**`

Reason: They explain why the existing Spring Boot, Angular, authentication,
calendar, validation, Flyway, Docker/Nginx, and CI baseline still matter.

### Keep: Historical/Spec Context

Keep references in:

- Existing historical spec `specs/001-angular-material-foundation/**`.
- `docs/V1_DATABASE_UPGRADE_VALIDATION.md`.
- `docs/uml/**`.
- Planning docs that explicitly define the CatWorld-to-reservation mapping.

Reason: These are historical artifacts or source-of-truth descriptions of
implemented inherited behavior, not current public product identity.

### Keep: Source Code Pending Future Domain Migration

Keep current references in:

- `src/**`
- `src/main/resources/**`
- `src/test/**`
- `frontend/src/app/**`
- `frontend/src/styles.scss`
- `.env.example`
- `.env.production.example`
- `compose.yml`
- `compose.prod.yml`
- `pom.xml`

Reason: They belong to inherited backend/frontend/admin/config behavior. They
must be migrated during v0.2.0 or another scoped transition feature, not during
the planning audit.

### Fix Now: Public Identity Conflict

Fixed in this audit:

- `frontend/src/index.html` browser title changed from `CatWorld` to
  `Ático y Jardín`.

Reason: The browser title is public product metadata, not a private admin
domain refactor.

### Fix Now: Friday Demo Conflict

No documentation/spec conflicts were found in the current Friday demo materials.

The remaining Friday-demo references are instructions not to show inherited
CatWorld private/admin screens as finished Ático y Jardín reservation
management, or validation tasks requiring no visible CatWorld branding in the
public demo path.

### Fix Later: Private Reservation Migration

Handle these during v0.2.0 private reservation work:

- Backend package names and configuration prefixes.
- Owner/cat/vet/stay models, DTOs, services, repositories, controllers, and
  tests.
- Private Angular routes, translations, navigation, tables, styles, and feature
  names for owners/cats/vets/stays.
- Docker/database names and backup filenames if the operations plan approves
  renaming them.
- Historical UML and database validation docs once replacement reservation
  diagrams and validation procedures exist.

Reason: These changes affect behavior, contracts, persistence, operations, or
private admin migration and need their own implementation plan and validation.
