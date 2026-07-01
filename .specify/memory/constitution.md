<!--
Sync Impact Report
Version change: 1.0.0 -> 2.0.0
Modified principles:
- I. Domain Focus and Sustainable Evolution -> I. Product Focus and Sustainable Evolution
- II. Layered Monolith Responsibilities -> II. Layered Monolith Responsibilities
- III. Backend and Database Authority -> III. Backend and Database Authority
- IV. Schema Evolution -> IV. Schema Evolution
- V. Protected Stay Model -> V. Protected Reservation Model
- VI. Specification and Planning Discipline -> VI. Specification and Planning Discipline
- VII. Focused Changes and Proportional Validation -> VII. Focused Changes and Proportional Validation
- VIII. Operational Safety and Sources of Truth -> VIII. Operational Safety and Sources of Truth
Added sections:
- Product Transition Boundaries
Removed sections:
- CatWorld-only Product and Architecture Boundaries
Templates requiring updates:
- ✅ .specify/templates/plan-template.md
- ✅ .specify/templates/spec-template.md
- ✅ .specify/templates/tasks-template.md
- ⚠ .specify/templates/commands/*.md not present in this checkout
Runtime guidance:
- ✅ AGENTS.md updated for Ático y Jardín transition
- ✅ README.md updated for planning/demo adaptation state
- ✅ docs/ARCHITECTURE.md updated for inherited architecture and target domain
- ✅ docs/WORKFLOW.md created for repository workflow
Follow-up TODOs: None
-->
# Ático y Jardín Constitution

## Core Principles

### I. Product Focus and Sustainable Evolution

Ático y Jardín is a public website and future private management tool for
exactly two initial tourist apartments: Ático and Jardín. Product work MUST
serve this specific two-apartment business before broader rental-platform
concerns. The public presentation comes first for the Friday demo; private
reservation management and public booking requests follow in later releases.
The product MUST NOT become a generic booking marketplace, channel manager,
pricing engine, payment platform, or multi-owner system without concrete
requirements, explicit specification, and human approval.

Rationale: The project needs a professional demo quickly while preserving a
disciplined path toward the private reservation features that the inherited
CatWorld architecture can support.

### II. Layered Monolith Responsibilities

The inherited Spring Boot backend MUST preserve the controller -> service ->
repository -> database structure unless an explicitly approved architectural
decision replaces it. Controllers MUST handle HTTP concerns and delegate
application behavior. Business rules, transactions, and use cases MUST live in
services. Repositories MUST handle persistence access. DTOs and mappers MUST
separate HTTP contracts from JPA entities.

Rationale: The current layered monolith is simple, testable, and documented; it
is still the right baseline while the domain evolves from CatWorld to apartment
reservations.

### III. Backend and Database Authority

The backend MUST be authoritative for business rules, authorization,
validation, and important calculations. Frontend behavior MAY assist, preview,
hide, or warn, but it MUST NOT be the only protection for important rules.
Database constraints MUST remain the final protection for persisted integrity
where the schema can enforce it.

Rationale: Reservation and account data need server-side integrity; browser-only
protection is not enough for availability, authorization, or operational safety.

### IV. Schema Evolution

Flyway migrations under `src/main/resources/db/migration` MUST be the mechanism
for real schema evolution. Hibernate schema auto-update MUST NOT be used for
real schema changes. Schema-changing work MUST include migration validation
proportional to risk, including verification that the application still
validates the intended schema. This transition planning task MUST NOT alter the
existing database schema.

Rationale: Explicit migrations protect production data and make the future
CatWorld-to-reservation domain migration reviewable.

### V. Protected Reservation Model

Private reservation work MUST preserve the core booking invariant that active
confirmed occupancy cannot overlap for the same apartment unit. For the initial
product, there are exactly two apartment units: Ático and Jardín. A confirmed
reservation MUST belong to at least one unit, normally one. Check-out MUST be
after check-in. Cancelled reservations MUST NOT block availability. Public
booking requests MUST NOT become confirmed reservations or block availability
automatically until a private administrator explicitly converts or confirms
them.

Until the inherited CatWorld stay model is migrated, existing stay invariants
MUST NOT be weakened accidentally. Any conversion from `Stay`, `Cat`, `Owner`,
or `Vet` concepts to reservation concepts requires explicit specification,
tests at the responsible layer, and proportional architecture review.

Rationale: The central business risk moves from cat stay overlap to apartment
occupancy overlap, and the transition must avoid both data loss and accidental
public auto-booking.

### VI. Specification and Planning Discipline

Specifications MUST describe observable behavior, scope, edge cases, and
exclusions without becoming implementation tutorials. Feature plans MUST resolve
important architectural, persistence, security, shared-contract, and
cross-cutting UI decisions before implementation. Plans MUST distinguish
implemented behavior, planned behavior, assumptions, explicit exclusions, and
unresolved questions. Unresolved product decisions that materially affect
scope, security, persistence, shared contracts, architecture, user experience,
or operations MUST block implementation until a human decision is recorded.

When a feature introduces one or more significant decisions, the feature plan
MUST perform a proportional architecture and technology evaluation before
implementation. Significant decisions include a significant shared or
cross-cutting capability; confirmed repeated use across approved features; a
non-trivial accessibility or correctness responsibility; a material security,
persistence, shared-contract, or operational decision; introduction of a
significant dependency; or a decision with meaningful replacement or migration
cost. Ordinary local implementation choices, routine use of the approved stack,
small presentation changes, minor component organization, local utilities, and
normal coding details MUST NOT require ceremonial assessment.

The evaluation MUST consider, where plausible, existing browser, framework, or
project capabilities; relevant established libraries, frameworks, or services;
and focused custom implementation. The selected option MUST be explicitly
recorded and approved before implementation. Approval MUST come from the user
or another explicitly authorized human reviewer. An implementation or planning
agent MUST NOT supply, infer, or mark its own technical decision as
human-approved.

Rationale: Spec Kit artifacts must make decisions visible before code changes
turn uncertainty into accidental architecture.

### VII. Focused Changes and Proportional Validation

Changes MUST remain focused, reviewable, and free from unrelated refactors.
Rebranding, domain refactoring, persistence changes, public landing work, and
new reservation functionality MUST NOT be mixed in one pull request unless an
explicit plan approves that combined scope. Tests and review depth MUST be
proportional to affected risk. Business rules MUST be tested at their
responsible layer. Persistence, migration, security, and shared-contract
changes MUST receive stronger validation than local presentation changes.

Rationale: The project benefits from small, demoable vertical slices while
still raising the validation bar for high-risk behavior.

### VIII. Operational Safety and Sources of Truth

Secrets and real credentials MUST NOT be committed. Real operational data MUST
remain separated from test and sample data. Production exposure, access
boundaries, backup requirements, privacy/RGPD considerations, and recovery
procedures MUST be explicitly documented and reviewed before real launch.
README.md, docs/ARCHITECTURE.md, docs/OPERATIONS.md, docs/uml, migrations,
tests, current code, and active Spec Kit artifacts are sources of truth for
implemented behavior, but they MUST NOT automatically become evidence of
permanent product constraints.

Rationale: Operational safety is mandatory, while inherited CatWorld mechanics
must not silently constrain the new apartment-rental product.

## Product Transition Boundaries

- Ático y Jardín is a distinct project created from the CatWorld technical
  baseline.
- The approved stack remains Spring Boot, Angular, MySQL, Flyway, Docker/Nginx,
  GitHub Actions, Angular Material, SCSS, FullCalendar, Maven, and npm until a
  later approved plan changes it.
- Public demo work MUST remove visible CatWorld branding from the public
  experience before deeper code-domain renames are attempted.
- CatWorld domain terms may remain in inherited code, migrations, screenshots,
  operations notes, and historical specs until their owning transition tasks
  replace them.
- The transition sequence is documentation/spec alignment, public landing,
  visible rebrand, content and galleries, private reservation planning, phased
  domain migration, private reservation management, public booking requests,
  and production readiness.
- Booking requests and confirmed reservations are different concepts. Public
  requests MUST remain reviewable leads until private confirmation.

## Development Workflow and Validation

- Every feature plan MUST include a constitution compliance check before
  implementation and MUST re-check compliance after design decisions are made.
- Plans that touch reservation invariants, inherited stay invariants, schema,
  authorization, persistence, shared API contracts, or cross-cutting UI
  behavior MUST identify responsible layers and validation evidence before
  implementation begins.
- Plans that require architecture and technology evaluation MUST record options
  considered, selected approach, tradeoffs, reversibility, and human approval
  before implementation begins.
- Specifications MUST distinguish implemented facts, assumptions, explicit
  exclusions, and unresolved questions.
- Task lists MUST include constitution-required validation work when a change
  affects business rules, persistence, migrations, security, shared contracts,
  accessibility, or operational safety.
- Documentation updates MUST accompany behavior, architecture, operations, or
  source-of-truth changes that would otherwise leave implemented behavior
  unclear or stale.
- `main` MUST stay demoable. Work SHOULD be delivered in small vertical slices
  tied to an explicit release or issue.

## Governance

This constitution supersedes conflicting local practices for Ático y Jardín
feature planning and implementation. Amendments require an explicit documented
reason, human approval, a semantic version change, and updates to affected Spec
Kit templates or runtime guidance. Current implementation details MUST NOT be
promoted to permanent principles without explicit human approval.

Semantic versioning policy:

- MAJOR: Backward-incompatible governance changes, principle removals, product
  domain redefinitions, or changes that invalidate previously compliant work.
- MINOR: New principles, new mandatory sections, or materially expanded
  guidance.
- PATCH: Clarifications, wording fixes, and non-semantic refinements.

Compliance review expectations:

- Every feature plan MUST evaluate all core principles in its Constitution
  Check.
- Pull requests or implementation reviews MUST identify any constitutional
  impacts and verify that required validation evidence is present.
- If a feature conflicts with this constitution, the constitution MUST be
  amended first or the feature plan MUST change.
- Release-specific decisions, roadmap scope, and issue-specific constraints
  MUST remain in their feature artifacts, not in the constitution.

**Version**: 2.0.0 | **Ratified**: 2026-06-29 | **Last Amended**: 2026-06-30
