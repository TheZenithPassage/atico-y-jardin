# Tasks: Project Transition

**Input**: Design documents from `specs/000-project-transition/`

**Prerequisites**: `spec.md`, `plan.md`, `research.md`, `data-model.md`, `contracts/project-transition.md`, `quickstart.md`

**Tests**: Documentation validation only. No application builds are required because this feature does not change runtime code.

## Phase 1: Spec Kit Governance

| ID | Description | Files likely affected | Dependencies | Done when | Validation |
|----|-------------|----------------------|--------------|-----------|------------|
| T000-001 | Update the project constitution from CatWorld-only governance to Ático y Jardín transition governance. | `.specify/memory/constitution.md` | None | Constitution names Ático y Jardín, preserves the inherited stack, and defines protected reservation rules. | Review for no unexplained template tokens and correct version/date. |
| T000-002 | Update Spec Kit templates so future specs and plans use Ático y Jardín scope boundaries. | `.specify/templates/spec-template.md`, `.specify/templates/plan-template.md`, `.specify/templates/tasks-template.md` | T000-001 | Templates no longer require CatWorld cat-boarding scope for new features. | `rg -n "cat-boarding|CatWorld cat" .specify/templates` returns no active template blockers. |
| T000-003 | Update agent instructions for the new product while acknowledging inherited CatWorld workflows. | `AGENTS.md` | T000-001 | Agents are told not to delete inherited logic or mix rebranding, refactor, and new features. | Manual review against constitution principles. |

## Phase 2: Transition Documentation

| ID | Description | Files likely affected | Dependencies | Done when | Validation |
|----|-------------|----------------------|--------------|-----------|------------|
| T000-004 | Rewrite the root overview to describe Ático y Jardín as a planning/demo adaptation from CatWorld. | `README.md` | T000-001 | README identifies implemented vs planned behavior and links release/docs. | Manual review; no claim that the landing or reservations are implemented. |
| T000-005 | Rewrite frontend documentation to describe future public landing and later private admin adaptation. | `frontend/README.md` | T000-004 | Frontend README preserves stack and validation while explaining public/admin direction. | Manual review against requested stack. |
| T000-006 | Update architecture docs to separate current inherited implementation from target public/private architecture. | `docs/ARCHITECTURE.md` | T000-004 | Architecture doc covers public website, private admin, backend API, database, frontend UI, and future domain mapping. | Manual review; CatWorld references are transition context only. |
| T000-007 | Create release plan for v0.1.0 through v1.0.0. | `docs/RELEASE_PLAN.md` | T000-004 | Each release includes goal, scope, out of scope, validation, risk, and acceptance criteria. | Manual review against requested release list. |
| T000-008 | Create Friday demo script. | `docs/DEMO_SCRIPT.md` | T000-007 | Script explains public website first, private reservations later, and what not to promise. | Manual review against v0.1.0 scope. |
| T000-009 | Create repository workflow documentation. | `docs/WORKFLOW.md` | T000-001 | Workflow requires spec/issue scope, release ownership, validation, and focused PRs. | Manual review against constitution. |
| T000-010 | Create content inventory with explicit TODOs. | `docs/CONTENT_INVENTORY.md` | T000-004 | Missing apartment photos, descriptions, amenities, capacity, location, contact, legal, logo, colors, and languages are listed. | Manual review for no invented apartment facts. |
| T000-011 | Create proposed GitHub issue backlog. | `docs/GITHUB_ISSUES.md` | T000-007 | Initial v0.1.0, v0.2.0, and v0.3.0 issues include goal, scope, out of scope, done when, and validation. | Manual review against requested issue list. |

## Phase 3: Feature Planning Tracks

| ID | Description | Files likely affected | Dependencies | Done when | Validation |
|----|-------------|----------------------|--------------|-----------|------------|
| T000-012 | Create project transition Spec Kit artifacts. | `specs/000-project-transition/` | T000-001 | Spec, plan, research, data model, quickstart, contract, and tasks exist. | `Test-Path` checks in quickstart. |
| T000-013 | Create Friday demo landing Spec Kit artifacts with implementation-ready tasks. | `specs/001-friday-demo-landing/` | T000-007, T000-010 | All requested artifacts exist and tasks are actionable by phase. | Review task table for ID, files, dependencies, done when, and validation. |
| T000-014 | Create private reservation management planning artifacts. | `specs/002-private-reservation-management/` | T000-007 | Planning covers ApartmentUnit, Guest, Reservation, statuses, overlap rules, and calendar recommendation. | Manual review against v0.2.0 requirements. |
| T000-015 | Create public booking request planning artifacts. | `specs/003-public-booking-request/` | T000-014 | Planning covers BookingRequest states, non-blocking requests, admin review, and conversion to reservation. | Manual review against v0.3.0 requirements. |

## Phase 4: Validation

| ID | Description | Files likely affected | Dependencies | Done when | Validation |
|----|-------------|----------------------|--------------|-----------|------------|
| T000-016 | Run lightweight structure validation for required docs/spec files. | Documentation and specs | T000-012, T000-013, T000-014, T000-015 | Required files exist. | PowerShell `Test-Path` checks pass. |
| T000-017 | Review remaining CatWorld references and categorize intentional leftovers. | Documentation and specs | T000-016 | Remaining references are inherited, historical, or explicitly pending. | `rg -n "CatWorld|catworld|cat boarding|cat-boarding" ...` reviewed. |
| T000-018 | Produce summarized diff and final report. | N/A | T000-017 | Final response includes summary, created/modified files, decisions, next steps, risks, validation, and diff summary. | `git diff --stat` reviewed. |
