# Feature Specification: Project Transition

**Feature Branch**: `planning/atico-y-jardin-transition`

**Created**: 2026-06-30

**Status**: Draft

**Input**: Transition the inherited CatWorld repository into planning/specification artifacts for the new Ático y Jardín product without implementing application functionality.

## User Scenarios, Technical Outcomes & Testing *(mandatory)*

### Verifiable Technical Outcomes

- **TO-001**: The repository documentation and Spec Kit artifacts identify Ático y Jardín as the active product while preserving the inherited CatWorld technical baseline.
  - **Why this priority**: Future work must not continue planning against a cat-boarding product model.
  - **Acceptance Scenarios**:
    1. **Given** a developer opens the root documentation, **When** they read the product overview, **Then** it is clear that Ático y Jardín is a two-apartment public website and future private management tool built from a CatWorld copy.
    2. **Given** a developer opens the Spec Kit artifacts, **When** they inspect the transition plan, **Then** it distinguishes implemented CatWorld code from planned Ático y Jardín behavior.
  - **Validation Evidence**: Review of README, architecture docs, release plan, workflow docs, and this feature's artifacts.

- **TO-002**: The transition plan records the release sequence from v0.1.0 Friday demo landing through v1.0.0 production launch.
  - **Why this priority**: The Friday demo has higher priority than deep domain refactoring, but later reservation work needs a traceable path.
  - **Acceptance Scenarios**:
    1. **Given** the release plan, **When** a developer selects tomorrow's work, **Then** v0.1.0 landing tasks are separated from v0.2.0 private reservation work and v0.3.0 public booking requests.
  - **Validation Evidence**: Review of `docs/RELEASE_PLAN.md` and linked feature specs.

- **TO-003**: The transition guidance prevents big-bang refactors and protects inherited functionality until owned by later specs.
  - **Why this priority**: The project starts from working CatWorld code; removing or renaming broad areas before the public demo would increase risk.
  - **Acceptance Scenarios**:
    1. **Given** a future implementation task, **When** it requires source-code domain renames or schema changes, **Then** the documentation requires a feature spec and proportional validation before implementation.
  - **Validation Evidence**: Review of constitution, workflow, architecture, and transition tasks.

### Edge Cases

- Existing CatWorld references remain in historical specs, code, migrations, screenshots, or operations notes; they must be identified as inherited or intentionally pending rather than treated as current public product identity.
- The project has an existing `specs/001-angular-material-foundation` directory; the requested `specs/001-friday-demo-landing` intentionally coexists with it as a new product-transition spec.
- Missing apartment content, images, legal copy, location details, or contact details must be marked as TODOs rather than invented.

## Requirements *(mandatory)*

### Technical Requirements

- **TR-001**: Documentation MUST state that Ático y Jardín is a distinct product created from a local CatWorld repository copy.
- **TR-002**: Documentation MUST preserve the current approved stack: Angular, TypeScript, SCSS, Angular Material, Angular CDK, FullCalendar, Vitest/jsdom, Prettier, Java 17, Spring Boot, Spring Web, Spring Security, Spring Data JPA, Bean Validation, MySQL, Flyway, JUnit, Mockito, Docker/Nginx, GitHub Actions, Maven, and npm.
- **TR-003**: The transition plan MUST define releases v0.1.0, v0.2.0, v0.3.0, v0.4.0, and v1.0.0 with scope, exclusions, validation, risk, and demo/acceptance criteria.
- **TR-004**: The transition plan MUST document the conceptual CatWorld-to-Ático-y-Jardín mapping without implementing source-code renames.
- **TR-005**: The transition plan MUST prioritize removing visible CatWorld branding from the public experience before documentation cleanup and deeper code-domain refactoring.
- **TR-006**: The transition plan MUST distinguish public website, private admin, backend API, database, and frontend UI responsibilities.
- **TR-007**: This task MUST NOT implement landing functionality, backend refactors, schema changes, dependency upgrades, package-lock changes, or functional Angular component changes.

### Scope Boundaries

- **SB-001**: Feature MUST remain within the Ático y Jardín product direction: a public website and future private management tool for the Ático and Jardín tourist apartments.
- **SB-002**: Feature MUST distinguish implemented behavior from assumptions, exclusions, planned future behavior, and unresolved product or architectural questions.
- **SB-003**: Feature MUST NOT introduce generic booking-marketplace, payment-platform, channel-manager, pricing-engine, multi-owner, or broad platform claims without explicit requirements and approval.

### Out of Scope

- Implementing the public landing page.
- Refactoring backend domain entities, DTOs, endpoints, migrations, or tests.
- Renaming packages, application IDs, build metadata, environment variable names, or database tables.
- Removing inherited CatWorld functionality.
- Adding dependencies or changing dependency versions.
- Creating a real booking engine, payment flow, channel synchronization, or production deployment.

### Open Questions

- No blocking questions for this planning task. Missing real content is tracked in `docs/CONTENT_INVENTORY.md` as TODOs.

### Key Entities

- **ProjectIdentity**: Public product name, short description, inherited baseline, and transition status.
- **Release**: A planned product milestone with goal, scope, out-of-scope items, validation, risk, and acceptance criteria.
- **DomainMapping**: A conceptual mapping from CatWorld terms to future apartment-rental terms.
- **TransitionStep**: Ordered work needed to move from inherited documentation toward public demo and later reservation management.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: `specs/000-project-transition/` contains spec, plan, research, data model, quickstart, contract, and tasks artifacts.
- **SC-002**: `docs/RELEASE_PLAN.md` exists and defines v0.1.0 through v1.0.0 with scope and validation.
- **SC-003**: `docs/WORKFLOW.md` exists and prevents implementation without a spec, issue, or task.
- **SC-004**: Review confirms no functional application source, migration, dependency, or package-lock changes were made for this planning task. Public metadata-only fixes such as the `frontend/src/index.html` browser title are allowed only when recorded in `docs/TRANSITION_AUDIT.md`.
- **SC-005**: Review confirms remaining CatWorld references in historical or inherited areas are documented as intentionally pending.

## Assumptions

- The current repository state is the inherited CatWorld baseline.
- The public product name is `Ático y Jardín`; technical prose may also use `Atico y Jardin` when accents are inconvenient in tooling.
- The apartment names are `Ático` and `Jardín`.
- The first owner-facing demo is Friday, 2026-07-03.
