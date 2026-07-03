# Research: Mobile Split Hero

## Decision: Use Existing Angular Public Landing, I18n, And Local Assets

**Rationale**: Issue #4 requires a focused public hero presentation using existing/local image assets only and explicitly excludes backend, reservation, admin, external image fetching, and navbar replacement work. The repository already has a public landing component, apartment presentation data, section anchors, i18n translations, and local `frontend/public/landing` assets for Ático and Jardín.

**Alternatives considered**:

- Add a new hero/gallery dependency: rejected because the issue does not require dynamic galleries or new presentation infrastructure.
- Fetch remote imagery: rejected because the issue explicitly requires existing/local image assets only.
- Replace navbar or routing patterns: rejected because the issue excludes navbar redesign and the existing app shell already provides public anchor navigation.

## Decision: No Architecture Or Technology Assessment Is Required

**Rationale**: The selected approach is a local presentation update using existing project mechanisms. It introduces no significant dependency, shared infrastructure, persistence, security, operational, authorization, or costly migration decision.

**Alternatives considered**:

- Treating the diagonal/slash hero as a new reusable layout system: rejected because this issue needs a focused first-screen hero for one public page, not a cross-cutting UI capability.
- Waiting for human approval: not required because no assessment-triggering decision is made.

## Decision: Manual Mobile Viewport Review Complements Unit Tests

**Rationale**: Unit tests can verify DOM structure, local image sources, text, and anchor targets, but the issue's primary success criterion is a professional mobile first viewport at 360px, 390px, and 430px. That visible layout quality requires manual browser inspection or screenshots after implementation.

**Alternatives considered**:

- Rely only on unit tests: rejected because DOM assertions cannot fully prove layout polish, image framing, or overlap-free mobile composition.
- Add a new visual regression tool: rejected because it would introduce unapproved tooling for a narrow presentation change.
