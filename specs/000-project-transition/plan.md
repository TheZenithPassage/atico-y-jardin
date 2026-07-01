# Implementation Plan: Project Transition

**Branch**: `planning/atico-y-jardin-transition` | **Date**: 2026-06-30 | **Spec**: [spec.md](./spec.md)

**Input**: Feature specification from `specs/000-project-transition/spec.md`

## Summary

Adapt the inherited CatWorld repository's planning, documentation, and Spec Kit context so that future work targets Ático y Jardín. This is documentation/specification work only: preserve the current stack and code while defining the release sequence, transition rules, conceptual domain mapping, and near-term landing priorities.

## Technical Context

**Language/Version**: Backend Java 17. Frontend Angular 21.2.x, TypeScript 5.9.x, SCSS, Node/npm per `frontend/package.json`.

**Primary Dependencies**: Spring Boot 4.0.2, Spring Web, Spring Security, Spring Data JPA, Bean Validation, MySQL, Flyway, Angular Material/CDK 21.2.x, FullCalendar 6.1.x, Vitest/jsdom, Prettier. No dependency changes in this task.

**Storage**: N/A for this planning task. Existing MySQL/Flyway persistence remains untouched.

**Testing**: Documentation validation only. No application build is required because no application code changes are planned.

**Target Platform**: Repository documentation and Spec Kit artifacts used by developers before implementation. Future releases still target the existing Docker/Nginx/Spring Boot/Angular deployment shape until changed by an approved plan.

**Project Type**: Ático y Jardín full-stack web application inherited from CatWorld.

**Performance Goals**: N/A. No runtime behavior changes.

**Constraints**: Do not implement functionality, refactor source code, change backend contracts, alter migrations, update dependencies, or delete inherited logic. Keep missing apartment content as TODOs.

**Scale/Scope**: One transition planning pass covering global documentation and four feature-spec tracks: project transition, Friday demo landing, private reservation management, and public booking request.

## Constitution Check

- **Product focus and sustainable evolution**: Pass. The plan explicitly narrows the product to two apartments and prevents generic marketplace scope.
- **Layered monolith responsibilities**: Pass. No backend structure changes are made.
- **Backend and database authority**: Pass. No business rules are implemented; future reservation rules are documented as backend-authoritative.
- **Schema evolution**: Pass. No schema changes occur in this task.
- **Protected reservation model**: Pass. Future reservation invariants are documented; inherited stay invariants are not modified.
- **Specification and planning discipline**: Pass. The task creates the planning artifacts required before implementation.
- **Architecture and technology assessment**: Not required for this documentation-only transition. The stack is preserved and no significant new technology is introduced.
- **Focused changes and proportional validation**: Pass. Changes are limited to documentation, Spec Kit context, and planning artifacts.
- **Operational safety and sources of truth**: Pass. No secrets or real data are introduced; source-of-truth docs are updated to reflect transition state.

## Architecture and Technology Assessment

**Assessment required**: No.

**Decision trigger**: N/A. This task preserves the inherited architecture and stack without adding dependencies, persistence mechanisms, or shared runtime infrastructure.

**Options considered**:

- Existing platform/framework/project capability: Selected. Use the inherited Spec Kit, Angular/Spring documentation, and current repo structure.
- Established library/framework/service: N/A; no new tool is required.
- Focused custom implementation: N/A; no runtime implementation is included.

**Selected approach**: Update documentation and Spec Kit artifacts in place while leaving code, schema, and dependencies unchanged.

**Why selected**: It gives tomorrow's implementation work clear direction without risking the Friday demo with premature refactors.

**Confirmed medium-term use**: Supports v0.1.0 landing, v0.2.0 private reservation management, and v0.3.0 public booking request planning.

**Maintenance and operational consequences**: Developers must keep planned and implemented behavior separate until each release slice is built.

**Reversibility and migration path**: Documentation-only changes can be revised without data migration. Future code-domain changes will require their own specs and validation.

**Human approval**: Approved for planning scope by the user's 2026-06-30 request. Implementation of future runtime changes still requires active feature artifacts.

## Project Structure

### Documentation (this feature)

```text
specs/000-project-transition/
├── plan.md
├── research.md
├── data-model.md
├── quickstart.md
├── contracts/
│   └── project-transition.md
└── tasks.md
```

### Source Code (repository root)

```text
README.md
frontend/README.md
docs/ARCHITECTURE.md
docs/RELEASE_PLAN.md
docs/DEMO_SCRIPT.md
docs/WORKFLOW.md
docs/CONTENT_INVENTORY.md
docs/GITHUB_ISSUES.md
.specify/
AGENTS.md
specs/
```

**Structure Decision**: Keep transition artifacts in documentation and Spec Kit directories only. Do not modify runtime code, migrations, package metadata, or frontend components in this task.

## Phase 0 Research Summary

Research confirms an incremental transition is safer than big-bang code renaming. Public demo work should be mostly frontend and content-focused; private reservation work should reuse inherited authentication, calendar, overlap validation, and layered backend patterns later.

## Phase 1 Design Summary

- [data-model.md](./data-model.md) defines transition planning entities only.
- [contracts/project-transition.md](./contracts/project-transition.md) defines the documentation contract for the transition.
- [quickstart.md](./quickstart.md) defines validation steps for reviewing this planning pass.

## Post-Design Constitution Check

The design remains documentation-only, preserves the stack, and records future reservation rules without changing code. No additional approval gate is triggered for this task.

## Complexity Tracking

| Complexity | Why Needed | Simpler Alternative Rejected Because | Constitution Compliance |
|------------|------------|-------------------------------------|-------------------------|
| Maintaining inherited CatWorld references in some areas | Historical specs, code, migrations, and operations docs still describe implemented behavior | Removing all references now would imply source-code and schema refactors that are out of scope | References are documented as inherited/pending rather than current public product identity |
