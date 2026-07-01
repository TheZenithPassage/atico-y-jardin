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

## Release Workflow

1. Identify the target release.
2. Read the applicable spec, plan, and tasks.
3. Confirm there are no unresolved blocking decisions.
4. Implement the smallest useful slice.
5. Validate according to the risk and task instructions.
6. Update source-of-truth documentation when behavior, architecture,
   operations, or contracts change.
7. Report implemented behavior, validation, risks, suggested commit title, and
   pull request description.

## Validation Expectations

Documentation-only changes:

- Check required files exist.
- Review Markdown structure.
- Review remaining CatWorld references and categorize intentional leftovers.
- No application build required unless code changed.

Frontend public landing changes:

- `cd frontend && npm run build`
- Desktop, tablet, and mobile visual passes.
- Navigation pass.
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

## Branch And PR Guidance

- Use branches named by release/feature where possible, for example
  `feature/friday-demo-landing`.
- Keep PRs focused.
- Do not commit, push, open PRs, or modify issues unless explicitly instructed.
- Suggested commit titles should follow conventional style, such as
  `docs: plan atico y jardin transition` or
  `feat(frontend): add public landing`.

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
