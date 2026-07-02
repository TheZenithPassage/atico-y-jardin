# Implementation Plan: Sync Spec Kit Workflow

**Branch**: `chore/16-sync-spec-kit-workflow` | **Date**: 2026-07-02 | **Spec**: [spec.md](spec.md)

**Input**: Feature specification from `specs/004-sync-spec-kit-workflow/spec.md`

## Summary

Synchronize reusable Spec Kit / SDD workflow hardening from the supplied CatWorld reference archive into Ático y Jardín. The implementation will inspect the CatWorld reference branch and diff, port only project-agnostic workflow improvements, adapt names/examples/scope guidance to Ático y Jardín, and validate that v0.1.1 remains a static mobile-first landing-demo release with no mandatory backend, database, iCal, payment, live reservation, OTA, or admin work.

## Technical Context

**Language/Version**: Java 17 with Spring Boot 4.0.2 backend present; Angular 21 / TypeScript 5.9 frontend present; PowerShell scripts under `.specify/scripts/powershell`.

**Primary Dependencies**: Existing Spec Kit repository structure under `.specify`, local `.agents/skills`, Markdown docs, Maven wrapper, npm frontend tooling. No new dependencies are planned.

**Storage**: N/A. This feature changes workflow/docs/templates only and introduces no persistence, schema, browser storage, API payload, or external contract changes.

**Testing**: Workflow validation by reference-branch inspection, changed-file searches, `git diff --check`, targeted Markdown/file review, and available repository checks where proportional for docs/workflow-only changes.

**Target Platform**: Developer workflow and Codex handoff surfaces in the repository; no runtime deployment target is affected.

**Project Type**: Ático y Jardín full-stack web application inherited from CatWorld, with this feature limited to Spec Kit / SDD workflow documentation and agent instructions.

**Performance Goals**: N/A. No runtime performance behavior changes.

**Constraints**: Must not write to `main`; must not copy CatWorld `.git` metadata; must not implement issues #2-#15; must not modify landing implementation files; must preserve v0.1.1 as a static mobile-first public landing demo.

**Scale/Scope**: One workflow synchronization issue (#16) intended to support small, reviewable PRs for issues #2-#15.

## Constitution Check

*GATE 1: Before Phase 0 research, identify applicable constitution principles, assessment triggers, and unresolved decisions.*

*GATE 2: Before decision-dependent Phase 1 design and before implementation task generation, every required architecture and technology assessment MUST be completed and human-approved. Re-check full constitution compliance after Phase 1 design.*

- **Product focus and sustainable evolution**: Compliant. The plan preserves the Ático and Jardín two-apartment direction and explicitly prevents generic booking-marketplace, payment, channel-manager, and broader platform scope.
- **Layered monolith responsibilities**: Not directly applicable. No backend controller, service, repository, entity, DTO, or mapper changes are planned.
- **Backend and database authority**: Not directly applicable. No business rules, authorization behavior, calculations, or persisted integrity rules change.
- **Schema evolution**: Not applicable. No Flyway, database, or Hibernate schema behavior changes.
- **Protected reservation model**: Not applicable to implementation. The workflow must preserve future reservation/request boundaries and avoid making real reservations part of v0.1.1.
- **Specification and planning discipline**: Compliant. The spec defines technical outcomes, scope boundaries, exclusions, validation, and no unresolved blocking decisions.
- **Architecture and technology assessment**: No assessment required. This is scoped to adapting existing workflow/docs/templates and does not introduce a significant dependency, persistence strategy, shared runtime mechanism, security model, or costly replacement path.
- **Focused changes and proportional validation**: Compliant. Changes are limited to workflow, docs, templates, and agent instructions; validation is proportional to docs/workflow risk.
- **Operational safety and sources of truth**: Compliant. No secrets, production exposure, real data, privacy/RGPD, backups, or recovery behavior change; workflow/source-of-truth docs remain explicit about implemented versus future behavior.

## Architecture and Technology Assessment

**Assessment required**: No. The feature adapts existing repository workflow artifacts and does not introduce new frameworks, dependencies, persistence mechanisms, runtime architecture, security boundaries, or cross-cutting application behavior.

**Decision trigger**: N/A.

**Options considered**:

- Existing platform/framework/project capability: Use the current Spec Kit layout, existing local skill files, existing Markdown docs, and existing PowerShell scripts. This matches the issue and avoids new dependencies.
- Established library/framework/service: N/A. No external tooling is needed for docs/workflow synchronization.
- Focused custom implementation: Limited text/template/script adaptation is the only needed implementation approach; it is reversible through normal git review.

**Selected approach**: Existing project capability plus focused adaptation of reusable workflow text from the CatWorld reference.

**Why selected**: It satisfies issue #16, keeps the PR small, avoids importing CatWorld domain coupling, and preserves Ático y Jardín release direction.

**Confirmed medium-term use**: The workflow is expected to support issues #2-#15 as small Codex handoff PRs.

**Maintenance and operational consequences**: Maintainers must keep workflow instructions aligned with future product direction and avoid turning planned reservation/iCal/backend work into current v0.1.1 requirements.

**Reversibility and migration path**: Changes are Markdown/script/template-level and can be revised or reverted in a focused follow-up PR if later workflow requirements change.

**Human approval**: N/A for new architecture/technology assessment; no significant decision is introduced. The issue itself approves adapting reusable workflow improvements while preserving Ático y Jardín constraints.

## Project Structure

### Documentation (this feature)

```text
specs/004-sync-spec-kit-workflow/
├── plan.md
├── research.md
├── data-model.md
├── quickstart.md
├── checklists/
│   └── requirements.md
└── tasks.md
```

### Source Code (repository root)

```text
AGENTS.md
.agents/skills/
.specify/templates/
.specify/scripts/
.specify/workflows/
.specify/integrations/
.specify/extensions/
.specify/memory/constitution.md
docs/
README.md
```

**Structure Decision**: Implementation may update only workflow, documentation, template, Spec Kit artifact, and agent-instruction surfaces. Public landing implementation files, backend source, database migrations, and frontend feature files are outside this feature's change surface.

## Phase 0 Research Summary

Research will resolve how to inspect the CatWorld reference archive safely, which branch/diff contains the reusable workflow hardening, and which categories of change should be ported versus intentionally rejected as CatWorld-specific.

## Phase 1 Design Summary

This feature has no domain data model and no external interface contracts. The quickstart defines validation commands and manual checks for archive inspection, stale reference searches, scope protection, and changed-file review.

## Post-Design Constitution Check

- Product and transition boundaries remain protected: this workflow sync does not add application functionality and does not expand v0.1.1 beyond the public landing demo.
- No backend, database, reservation invariant, security, persistence, or shared API behavior changes are designed.
- The change remains focused on workflow/docs/templates/agent instructions and includes proportional validation evidence.
- No unresolved human approval or architecture/technology assessment remains before task generation.

## Complexity Tracking

| Complexity | Why Needed | Simpler Alternative Rejected Because | Constitution Compliance |
|------------|------------|-------------------------------------|-------------------------|
| N/A | N/A | N/A | N/A |
