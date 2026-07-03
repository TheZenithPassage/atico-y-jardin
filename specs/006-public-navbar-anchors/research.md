# Research: Public Navbar Anchors

## Decision: Use existing Angular app shell and public landing anchors

**Rationale**: The unauthenticated public navbar already renders from `frontend/src/app/app.html`, with behavior in `frontend/src/app/app.ts`, and the public landing already renders apartment/location/contact sections from `frontend/src/app/features/public/pages/public-landing-page`. Issue #3 asks for reliable public section navigation without a redesign, so the existing app shell and landing anchors are the correct surface.

**Alternatives considered**:

- Add new routes for public sections: rejected because the issue asks for anchor navigation where appropriate and lists new routes as a non-goal unless already aligned with current structure.
- Replace the navbar component or visual system: rejected because the issue explicitly preserves the current navbar visual style.

## Decision: No architecture or technology assessment required

**Rationale**: The feature does not introduce dependencies, shared infrastructure, cross-cutting behavior, persistence, contracts beyond the visible UI contract, security, operational behavior, or a costly migration path. It uses existing Angular router/template/i18n mechanisms for local public UI behavior.

**Alternatives considered**:

- Run a full architecture assessment: rejected as unnecessary ceremony for a narrow local navigation wiring update under the constitution's local implementation freedom.

## Decision: Prove behavior with focused frontend tests plus manual desktop/mobile smoke checks

**Rationale**: Link target rendering and landing section IDs are objectively testable in Angular DOM tests, while the issue's visual preservation and mobile overlap criteria require manual visible-device evidence. Backend/auth/admin tests are unnecessary because those surfaces are out of scope and should remain unchanged.

**Alternatives considered**:

- Add backend or authorization tests: rejected because implementation must not change backend, auth, admin, or reservation behavior.
- Rely only on manual checks: rejected because link/anchor regressions are cheap to lock with focused frontend tests.
