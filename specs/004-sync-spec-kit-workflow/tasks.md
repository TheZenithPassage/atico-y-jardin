# Tasks: Sync Spec Kit Workflow

**Input**: Design documents from `specs/004-sync-spec-kit-workflow/`

**Prerequisites**: plan.md (required), spec.md (required), research.md, data-model.md, quickstart.md

**Tests**: No application test tasks are required by the constitution because this feature changes workflow/docs/templates only. Validation tasks are required for stale domain references, v0.1.1 scope protection, and changed-file integrity.

**Organization**: Tasks are grouped by dependency-driven verifiable technical outcomes.

## Format: `[ID] [P?] [Trace] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Trace]**: Which technical outcome this task belongs to
- Include exact file paths in descriptions

## Phase 1: Setup

**Purpose**: Prepare safe reference inspection without modifying the Ático y Jardín working tree.

- [x] T001 [TO1] Extract the provided `catworld.rar` reference archive into a temporary reference directory outside the Ático y Jardín repository working tree
- [x] T002 [TO1] Run `git branch --all` in the extracted CatWorld reference directory and identify the latest workflow/spec-kit hardening branch in `specs/004-sync-spec-kit-workflow/research.md`

---

## Phase 2: Foundational

**Purpose**: Compare current Ático y Jardín workflow surfaces with the CatWorld reference before editing.

- [x] T003 [P] [TO1] Inspect current Ático y Jardín workflow surfaces in `AGENTS.md`, `.agents/skills/`, `.specify/templates/`, `.specify/scripts/`, `.specify/workflows/`, `.specify/integrations/`, `.specify/extensions/`, `.specify/memory/constitution.md`, `docs/WORKFLOW.md`, and `README.md`
- [x] T004 [TO1] Compare the identified CatWorld workflow-hardening branch against CatWorld `main` for the priority surfaces listed in `specs/004-sync-spec-kit-workflow/spec.md`
- [x] T005 [TO1] Record reusable workflow improvements to port, and CatWorld-specific changes to reject, in `specs/004-sync-spec-kit-workflow/research.md`

**Checkpoint**: Reference branch, reusable changes, and rejected CatWorld-specific changes are known before implementation edits.

---

## Phase 3: Technical Outcome 1 - Port Reusable Workflow Improvements (Priority: P1)

**Goal**: Adapt reusable Spec Kit / SDD workflow hardening into Ático y Jardín without copying CatWorld wholesale.

**Verification**: Local diff shows only adapted workflow/docs/templates/agent-instruction changes and no public landing implementation changes.

### Implementation for Technical Outcome 1

- [x] T006 [TO1] Update agent workflow instructions in `AGENTS.md` and relevant `.agents/skills/*.md` files to use Ático y Jardín naming, issue workflow boundaries, branch safety, and completion reporting
- [x] T007 [TO1] Update reusable Spec Kit templates, scripts, workflows, integrations, or extensions under `.specify/` only where the CatWorld reference contains reusable workflow-hardening improvements
- [x] T008 [P] [TO1] Update relevant workflow documentation in `docs/WORKFLOW.md`, `README.md`, or other existing workflow docs only when needed to keep source-of-truth guidance consistent

**Checkpoint**: Reusable workflow improvements are ported and adapted to the current product.

---

## Phase 4: Technical Outcome 2 - Preserve v0.1.1 Scope (Priority: P1)

**Goal**: Ensure synchronized workflow guidance protects the static, mobile-first public landing demo target.

**Verification**: Changed workflow text does not require backend, database, Flyway, iCal, OTA integration, payment, real reservation, live availability, or admin work for v0.1.1.

### Implementation for Technical Outcome 2

- [x] T009 [TO2] Remove or rewrite stale CatWorld domain coupling in changed workflow/docs/templates under `AGENTS.md`, `.agents/skills/`, `.specify/`, `docs/`, and `README.md`
- [x] T010 [TO2] Add or preserve explicit v0.1.1 exclusions for backend, database, Flyway, iCal, OTA integration, payments, real reservations, live availability, and admin redesign in changed workflow guidance

**Checkpoint**: Scope protection is explicit and aligned with issue #16.

---

## Phase 5: Technical Outcome 3 - Safe Codex Handoff for Issues #2-#15 (Priority: P2)

**Goal**: Make the resulting workflow useful for small, reviewable Codex PRs without implementing those issues.

**Verification**: Manual review confirms issue #2 can be handed to Codex using the updated workflow while remaining bounded to its own scope.

### Implementation for Technical Outcome 3

- [x] T011 [TO3] Review the workflow against issue #2 as a representative handoff target and adjust changed workflow guidance if it lacks clear spec, design-fit, diff-plan, delivery-validation, dependency, or scope-control expectations
- [x] T012 [TO3] Confirm changed review guidance preserves proportional review, bounded blocker findings, Codex remediation prompts by default, and no unrelated audits for small PRs

**Checkpoint**: The workflow can guide future issue implementations without expanding their scope.

---

## Final Phase: Polish & Cross-Cutting Concerns

**Purpose**: Validate changed files and prepare final reporting.

- [x] T013 [TO2] Run changed-file searches for `CatWorld`, `cat`, `cats`, `stay`, `stays`, `boarding`, `veterinarian`, and `vet`; manually inspect all matches in changed files
- [x] T014 [TO2] Manually inspect changed-file matches for `owner` and retain only property-owner or repository-ownership usage
- [x] T015 [TO2] Run `git diff --check` from the Ático y Jardín repository root
- [x] T016 [TO1] Run available checks/build commands where applicable, or document why no automated runtime checks apply to workflow/docs-only changes
- [x] T017 [TO1] Review `git status --short` and `git diff --stat` to confirm changed files stay within issue #16 scope

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: Must complete before comparing reference changes.
- **Foundational (Phase 2)**: Depends on Setup and must complete before implementation edits.
- **Technical Outcome 1 (Phase 3)**: Depends on Foundational.
- **Technical Outcome 2 (Phase 4)**: Depends on Technical Outcome 1 because scope wording is validated in changed workflow text.
- **Technical Outcome 3 (Phase 5)**: Depends on Technical Outcome 1 and can run after scope wording is present.
- **Polish**: Depends on desired technical outcomes being complete.

### Technical Outcome Dependencies

- **TO1 (P1)**: Requires extracted reference branch and diff inspection.
- **TO2 (P1)**: Requires changed workflow text from TO1.
- **TO3 (P2)**: Requires updated workflow guidance from TO1.

### Parallel Opportunities

- T003 can run in parallel with other read-only current-repository inspection after the reference branch is identified.
- T008 can run in parallel with T006/T007 once reusable changes are known, provided it touches different files.
- T013 and T014 can run after implementation edits and may be performed together as changed-file searches.

---

## Implementation Strategy

### First Verifiable Increment

1. Complete setup and foundational reference inspection.
2. Complete TO1 by porting only reusable workflow improvements.
3. Stop and validate the diff stays limited to workflow/docs/templates/agent instructions.

### Incremental Delivery

1. Add TO2 scope protection and stale-reference cleanup.
2. Add TO3 handoff/review guidance if the CatWorld reference contains reusable improvements for it.
3. Run final validation from `quickstart.md`.

---

## Notes

- Do not commit unless the user explicitly asks for a commit.
- Do not push, create a pull request, merge, or post GitHub comments.
- Do not implement issues #2-#15.
- Do not copy `.git` or CatWorld reference metadata into Ático y Jardín.
