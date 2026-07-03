# Research: Public Landing Cleanup

## Decision: Use existing public landing Angular/i18n files

**Rationale**: The visible `/` landing already renders from `frontend/src/app/features/public/pages/public-landing-page` and `frontend/src/app/core/i18n/translations/public-landing.translations.ts`. The issue is a public visible-text cleanup, so the existing component template and translation data are sufficient.

**Alternatives considered**:

- Add a new public landing component: rejected because the issue is not a redesign or replacement and the current component already owns `/`.
- Add a new content service or CMS-like structure: rejected because that would introduce unapproved architecture and scope.

## Decision: No architecture or technology assessment required

**Rationale**: The feature does not introduce dependencies, shared infrastructure, cross-cutting behavior, persistence, contracts, security, operational behavior, or a costly migration path. It uses existing frontend files for local public UI/copy changes.

**Alternatives considered**:

- Run a full architecture assessment: rejected as unnecessary ceremony for a narrow copy/template cleanup under the constitution's local implementation freedom.

## Decision: Preserve private/admin mechanics and verify by smoke check

**Rationale**: The issue explicitly preserves the private/admin entry point technically while keeping admin redesign, auth, and domain logic out of scope. Leaving routes and auth/admin code unchanged and smoke-checking access is the proportional evidence.

**Alternatives considered**:

- Modify auth/admin navigation: rejected because it risks out-of-scope behavior changes.
- Add backend or route tests for auth: rejected unless implementation changes routing/auth, which the plan excludes.
