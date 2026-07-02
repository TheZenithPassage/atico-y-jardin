# Feature Specification: Sync Spec Kit Workflow

**Feature Branch**: `chore/16-sync-spec-kit-workflow`

**Created**: 2026-07-02

**Input**: User description: "Implement GitHub issue #16, Sync reusable Spec Kit workflow updates from CatWorld, using the provided CatWorld reference archive only as inspection material and preserving the Ático y Jardín v0.1.1 static landing-demo direction."

## User Scenarios, Technical Outcomes & Testing *(mandatory)*

### Verifiable Technical Outcomes *(use instead of user stories for technical/enabling work)*

- **TO-001**: The Ático y Jardín Spec Kit / SDD workflow files reflect reusable workflow-hardening improvements identified from the CatWorld reference archive.
  - **Why this priority**: Issue #16 exists to improve Codex issue planning, scope control, validation evidence, and PR review workflow before issues #2-#15 are delegated.
  - **Acceptance Scenarios**:
    1. **Given** the extracted CatWorld reference archive and current Ático y Jardín workflow files, **When** the reusable workflow changes are reviewed, **Then** only project-agnostic improvements are selected for adaptation.
    2. **Given** a selected workflow improvement, **When** it is ported, **Then** names, examples, constraints, and product guidance are adapted to Ático y Jardín.
  - **Validation Evidence**: Branch and diff inspection of the extracted CatWorld reference; local diff review of changed workflow, documentation, template, and agent-instruction files.

- **TO-002**: The resulting workflow protects the v0.1.1 static, mobile-first public landing demo scope.
  - **Why this priority**: Backend, database, iCal, OTA integration, payments, real reservations, and admin redesign are explicitly out of scope for v0.1.1.
  - **Acceptance Scenarios**:
    1. **Given** a v0.1.1 public landing issue, **When** Codex follows the workflow, **Then** backend, database, payment, live availability, external calendar, real booking, and admin work are not made mandatory unless the issue explicitly requires them.
  - **Validation Evidence**: Changed-file review for scope language and explicit validation that no workflow rule forces those out-of-scope areas.

- **TO-003**: The synchronized workflow remains useful for small, reviewable Codex PRs for issues #2-#15.
  - **Why this priority**: The issue requires a workflow that improves handoff quality without expanding feature scope.
  - **Acceptance Scenarios**:
    1. **Given** issue #2 as a representative handoff target, **When** the workflow is reviewed, **Then** it provides enough issue-planning, diff-planning, validation, and review guidance for a bounded Codex implementation.
  - **Validation Evidence**: Manual workflow walkthrough for a safe Codex handoff path for issue #2.

### Edge Cases

- The CatWorld archive cannot be extracted or does not contain usable Git history; implementation must stop instead of guessing the relevant workflow branch.
- The CatWorld workflow-hardening branch contains CatWorld-specific domain rules; those rules must not be ported unless rewritten as project-neutral workflow guidance.
- A candidate workflow instruction conflicts with Ático y Jardín product direction; the Ático y Jardín direction must remain authoritative unless the conflict is clearly a generic workflow bug.
- Changed workflow text uses terms such as "owner"; those references require manual review because property owners may be valid in Ático y Jardín while CatWorld ownership concepts are not.

## Requirements *(mandatory)*

### Technical Requirements *(include for technical, architectural, migration, security, operational, refactoring, documentation, or enabling work)*

- **TR-001**: The implementation MUST extract the provided `catworld.rar` reference archive into a temporary reference directory outside the Ático y Jardín repository working tree.
- **TR-002**: The implementation MUST inspect CatWorld branches and identify the latest workflow/spec-kit hardening branch, expected to be related to issue #189 or `chore/189-harden-spec-kit-workflow-validation-coverage`.
- **TR-003**: The implementation MUST compare the identified CatWorld workflow-hardening branch against CatWorld `main`, prioritizing `AGENTS.md`, `.agents/skills/*`, `.specify/templates/*`, `.specify/scripts/*`, `.specify/workflows/*`, `.specify/integrations/*`, `.specify/extensions/*`, `.specify/memory/constitution.md`, `specs/003-harden-spec-kit-validation/*`, and relevant `docs/*` only as supporting context.
- **TR-004**: The implementation MUST port only reusable Spec Kit / SDD workflow improvements and adapt project names, examples, and instructions to Ático y Jardín.
- **TR-005**: The implementation MUST keep changes limited to workflow, docs, templates, and agent instructions; it MUST NOT modify public landing implementation files or implement issues #2-#15.
- **TR-006**: The implementation MUST NOT copy CatWorld Git metadata, screenshots, UML/domain diagrams, database upgrade docs, backend assumptions, issue numbers, PR references, or domain rules into Ático y Jardín.
- **TR-007**: The workflow MUST preserve lightweight SDD expectations: Spec, Design fit, Diff plan, and Delivery validation.
- **TR-008**: The workflow MUST preserve small-PR planning rules, explicit dependency handling, no unresolved product decisions delegated to Codex, no scope creep, and validation evidence requirements.
- **TR-009**: The workflow MUST preserve review proportionality, bounded blocker findings, Codex remediation prompts instead of public GitHub comments by default, and avoidance of unrelated audits for small PRs.
- **TR-010**: Validation MUST search changed files for stale CatWorld domain references: `CatWorld`, `cat`, `cats`, `stay`, `stays`, `boarding`, `veterinarian`, and `vet`.
- **TR-011**: Validation MUST manually inspect `owner` references and retain only references that correctly refer to property owners or repository ownership concepts.
- **TR-012**: Validation MUST confirm no changed workflow makes backend, database, iCal, payment, real reservation, external OTA integration, or admin work mandatory for v0.1.1.

### Scope Boundaries

- **SB-001**: Feature MUST remain within the Ático y Jardín product direction:
  a public website and future private management tool for the Ático and Jardín
  tourist apartments.
- **SB-002**: Feature MUST distinguish implemented behavior from assumptions,
  exclusions, planned future behavior, and unresolved product or architectural
  questions.
- **SB-003**: Feature MUST NOT introduce generic booking-marketplace,
  payment-platform, channel-manager, pricing-engine, multi-owner, or broad
  platform claims without explicit requirements and approval.

### Out of Scope

- Implementing issues #2-#15.
- Landing page, public UI, frontend feature, backend, database, Flyway, iCal, OTA integration, payment, real reservation, or admin redesign changes.
- Copying `.git` or any CatWorld Git metadata into Ático y Jardín.
- Publishing commits, pushing branches, opening pull requests, merging changes, or posting GitHub comments.

### Open Questions

- None. Issue #16 supplies the required scope, constraints, reference package, validation expectations, and branch preparation requirement.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: The CatWorld reference archive is extracted outside the Ático y Jardín repository and the relevant workflow-hardening branch is identified before porting begins.
- **SC-002**: Local changed files are limited to workflow, documentation, template, Spec Kit artifact, and agent-instruction surfaces.
- **SC-003**: Changed workflow text contains no unadapted CatWorld domain coupling; any remaining CatWorld references are clearly reference-source context, not Ático y Jardín product guidance.
- **SC-004**: Review confirms the synchronized workflow does not make backend, database, iCal, OTA integration, payment, real reservation, or admin work mandatory for v0.1.1 issues.
- **SC-005**: Available repository checks or appropriate no-code-change validation commands run successfully, or unavailable checks are explicitly reported.

## Assumptions

- The supplied issue body is the authoritative product and workflow scope for this synchronization.
- The provided CatWorld archive is trustworthy reference material but not a source to copy wholesale.
- Because this is workflow synchronization, no application runtime behavior, persistence schema, or public copy changes are expected.
