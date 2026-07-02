# Repository Workflow

This workflow keeps Ático y Jardín focused while the repository transitions
from CatWorld.

## Planning Rules

- Do not implement without a spec, issue, or explicit task.
- Every meaningful change must belong to a release.
- Create a Spec Kit feature for large behavior, architecture, persistence,
  security, shared-contract, or operational changes.
- Use a simple issue/task for small local changes.
- Keep `main` demoable.
- Use feature branches for implementation work.
- Keep lightweight SDD visible for issue handoffs:
  - **Spec**: observable behavior or verifiable technical outcome, scope,
    exclusions, edge cases, dependencies, and assumptions.
  - **Design fit**: architecture/technology assessment only when the
    constitution requires it; otherwise record why none is needed.
  - **Diff plan**: expected files/surfaces and explicit out-of-scope surfaces.
  - **Delivery validation**: commands, manual checks, evidence layer, and
    freshness expectations.
- Do not delegate unresolved product, architecture, persistence, security,
  shared-contract, authorization, UX, operational, or correctness-sensitive
  decisions to Codex. Record the blocker and wait for a human decision.

## Scope Rules

- Do not mix public rebranding, domain refactoring, persistence migration, and
  new reservation functionality in one PR unless explicitly approved.
- Do not delete inherited CatWorld logic until a transition task owns the
  deletion.
- Do not introduce dependencies without an architecture and technology
  assessment when required by the constitution.
- Do not build payment, pricing, channel-manager, or generic marketplace
  features prematurely.
- Prefer small vertical slices that can be demoed and validated.
- For v0.1.1 public demo issues, do not make backend, database, Flyway, iCal,
  OTA integration, payment, real reservation, live availability, or admin work
  mandatory unless the issue explicitly says so.

## Release Workflow

1. Identify the target release.
2. Read the applicable spec, plan, and tasks.
3. Confirm there are no unresolved blocking decisions.
4. Implement the smallest useful slice.
5. Validate according to the risk and task instructions, using evidence at the
   layer that proves the behavior.
6. Update source-of-truth documentation when behavior, architecture,
   operations, or contracts change.
7. Review changed files against the issue/spec/plan/tasks source map.
8. Report implemented behavior, validation, risks, suggested commit title, and
   pull request description.

## Validation Expectations

Documentation-only changes:

- Check required files exist.
- Review Markdown structure.
- Review remaining inherited-reference terms and categorize intentional
  historical/reference leftovers.
- No application build required unless code changed.

Frontend public landing changes:

- `cd frontend && npm run build`
- DOM, route/navigation, and visible-copy checks proportional to the change.
- Desktop, tablet, and mobile visual passes when layout or styling changes.
- No-visible-CatWorld public UX pass.
- Demo script pass.

Backend or private reservation changes:

- `./mvnw verify`
- Flyway validation when schema changes.
- Service tests for business rules.
- Controller tests for API contracts.
- Frontend build/tests when UI changes.

Public booking request changes:

- Backend validation and lifecycle tests.
- Frontend request-form validation.
- Privacy review.
- Manual request submission and conversion scenario.

Validation freshness:

- Rerun affected validation after relevant late changes.
- Do not summarize failed, skipped, timed-out, interrupted, partial, stale, or
  not-rerun validation as passed.
- If evidence cannot be rerun within scope, report it explicitly as
  `not revalidated` or `stale`.

Evidence by layer:

- Visible frontend behavior needs DOM assertions, Angular Material/CDK harness
  checks where appropriate, routed navigation/focus/keyboard checks, or manual
  visible-device smoke evidence.
- Backend business rules need service-layer evidence and controller/API
  evidence when externally observable.
- Authorization/security behavior needs backend enforcement evidence; add
  frontend role visibility or navigation evidence when UI changes.
- Persistence and migrations need Flyway/schema/data-integrity evidence
  proportional to risk.
- Documentation/source-of-truth changes need focused review, stale-reference
  search, and scope-drift review.

## Branch And PR Guidance

- For issue implementation, use branches named
  `<type>/<issue-number>-<short-description>`, for example
  `feat/2-public-landing-shell` or `chore/16-sync-spec-kit-workflow`.
- Keep PRs focused.
- Do not commit, push, open PRs, or modify issues unless explicitly instructed.
- Suggested commit titles should follow conventional style, such as
  `docs: plan atico y jardin transition` or
  `feat(frontend): add public landing`.

## Review Guidance

- Review proportional to risk. Small public-demo PRs should focus on changed
  behavior, scope, validation evidence, and visible product honesty instead of
  unrelated audits.
- Lead with bounded blocker findings: correctness, scope drift, missing
  validation, constitutional conflicts, or stale source-of-truth docs.
- Prefer Codex remediation prompts or local review notes by default. Do not post
  public GitHub comments unless explicitly instructed.
- Flag unplanned touched surfaces, especially shared shell, global styles,
  shared components, routing, contracts, migrations, authorization, persistence,
  security, or other cross-cutting areas.

## Source Of Truth

Current source-of-truth files include:

- `.specify/memory/constitution.md`
- active specs under `specs/`
- `README.md`
- `docs/ARCHITECTURE.md`
- `docs/RELEASE_PLAN.md`
- `docs/WORKFLOW.md`
- `docs/OPERATIONS.md` for inherited operations until replaced
- current source code and migrations for implemented behavior
