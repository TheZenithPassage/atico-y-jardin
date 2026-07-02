# Research: Sync Spec Kit Workflow

## Decision: Inspect CatWorld in an external reference directory

**Rationale**: Issue #16 requires `catworld.rar` to be extracted outside the Ático y Jardín working tree, with any included `.git` metadata used only for branch discovery and diffs. This prevents accidental import of CatWorld Git metadata or project files.

**Alternatives considered**:

- Extract inside the repository: rejected because it risks copying or tracking reference material.
- Inspect only the issue text: rejected because the issue explicitly requires archive extraction and branch/diff inspection before porting.

## Reference Inspection Result: Workflow hardening branch identified

**Decision**: Use `origin/chore/189-harden-spec-kit-workflow-validation-coverage` from the extracted CatWorld reference as the workflow hardening reference.

**Rationale**: `git branch --all` in `C:\Users\moshe\AppData\Local\Temp\catworld-reference-16-20260702-080352` showed the expected remote branch. The branch contains the relevant hardening commits:

- `e63ea7b` - harden Spec Kit validation workflow
- `41158a4` - align Spec Kit evidence guidance artifacts
- `c31cc79` - cover technical Spec Kit workflow gaps
- `0d82b94` - scope ignore-file setup verification
- `73d9a23` - keep material plan decisions blocking

CatWorld `main` and the branch currently have the same final tree in the archive, so the reusable changes were inspected from the commit history and the final CatWorld workflow files rather than by treating the working tree as a clean diff source.

**Alternatives considered**:

- Compare the extracted working tree status: rejected because the archive intentionally includes `.git` but not every tracked application file, causing many deleted-path reports unrelated to the workflow reference.
- Guess from branch naming alone: rejected because the issue requires branch/diff/rationale inspection.

## Decision: Treat CatWorld workflow hardening as reference material, not source replacement

**Rationale**: Ático y Jardín has a different v0.1.1 target than CatWorld. Reusable workflow improvements can be adapted, but CatWorld product/domain guidance, screenshots, UML, database upgrade docs, backend assumptions, and issue/PR references must not be copied wholesale.

**Alternatives considered**:

- Copy matching files directly: rejected because it would likely import CatWorld coupling and conflict with the issue's hard constraints.
- Ignore CatWorld entirely: rejected because the issue goal is specifically to synchronize reusable workflow improvements from that reference.

## Decision: Keep implementation to workflow, docs, templates, and agent instructions

**Rationale**: The issue excludes landing implementation, backend, database, iCal, OTA, reservation, payment, and admin work. A workflow-only change keeps the PR reviewable and supports issues #2-#15 without implementing them.

**Alternatives considered**:

- Update application code while touching workflow: rejected as scope creep.
- Update only generated Spec Kit artifacts: rejected because the issue asks to improve the reusable workflow itself.

## Portability Findings

**Decision**: Port the reusable hardening categories and reject CatWorld-specific domain material.

**Rationale**: The reference commits improve workflow correctness without requiring CatWorld domain behavior:

- Add observable behavior detail and input/state validation matrices to specs.
- Add semantic-equivalence and validation-evidence planning to plans.
- Generate tasks by user story or verifiable technical outcome, with evidence tasks when required by risk, matrices, semantic-equivalence review, or constitution.
- Keep material product, architecture, persistence, security, shared-contract, authorization, UX, operational, and correctness-sensitive decisions blocking until a human decision is recorded.
- Scope ignore-file setup verification to active plan/source-map work instead of editing ignore files based only on detected technologies.
- Treat stale, skipped, timed-out, interrupted, partial, failed, or not-rerun validation as not passed.
- Let convergence flag missing verification and unplanned touched surfaces using active-branch metadata only.

Rejected CatWorld-specific material:

- CatWorld skill name and examples, replaced with Ático y Jardín issue workflow naming.
- CatWorld domain examples, stay/cat/vet wording, and cat-boarding template defaults.
- CatWorld feature specs beyond using `specs/003-harden-spec-kit-validation/` as rationale/reference context.
- CatWorld `.git`, screenshots, UML, database upgrade docs, backend assumptions, issue numbers, and PR references as Ático y Jardín docs.

## Decision: No architecture/technology assessment required

**Rationale**: The feature introduces no runtime architecture, dependency, persistence strategy, security model, shared contract, or operational mechanism. It adapts existing Markdown, templates, scripts, workflows, and agent instructions.

**Alternatives considered**:

- Require human approval before implementation: rejected because there is no significant architecture/technology decision pending; the issue already authorizes the workflow synchronization scope.

## Decision: Validate by changed-file search, manual scope review, and available checks

**Rationale**: The highest risk is stale CatWorld coupling or workflow language that accidentally expands v0.1.1. Search terms from the issue plus manual review of `owner` references directly target that risk. `git diff --check` and available repository checks provide proportional no-code-change validation.

**Alternatives considered**:

- Full backend/frontend build as the only validation: insufficient because it would not detect stale workflow/domain language.
- No automated checks: rejected because the issue requires available checks/build commands where applicable.
