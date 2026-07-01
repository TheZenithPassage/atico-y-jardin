# Research: Project Transition

## Decision: Use an incremental product transition instead of a big-bang rename

**Rationale**: The Friday demo requires visible public progress quickly. Renaming backend packages, entities, migrations, API contracts, tests, and frontend features in one pass would raise risk without improving the demo.

**Alternatives considered**:

- Big-bang code and database rename. Rejected because it would combine rebranding, schema work, backend contracts, UI changes, and migration risk before the landing exists.
- Leave all CatWorld documentation unchanged until implementation. Rejected because tomorrow's work would lack a clear product contract.

## Decision: Preserve the inherited stack for the initial releases

**Rationale**: The current Spring Boot, Angular, MySQL, Flyway, Docker/Nginx, GitHub Actions, Angular Material, and FullCalendar stack already supports the future private-admin direction. No dependency update is required for the planning task.

**Alternatives considered**:

- Introduce a static-site generator for the landing. Rejected for now because it would add a new framework before a demo and split the frontend.
- Replace FullCalendar. Rejected because it is useful for v0.2.0 private reservation calendar work.

## Decision: Remove visible CatWorld references from public UX before deep domain cleanup

**Rationale**: Owners and visitors must see Ático y Jardín, not CatWorld. Historical docs and code can remain until their owning transition tasks replace them.

**Alternatives considered**:

- Clean all documentation and code first. Rejected because it delays the demo and risks accidental behavior changes.
- Keep CatWorld branding visible during the demo. Rejected because it would undermine the professional presentation.

## Decision: Treat public booking requests as leads, not reservations

**Rationale**: The initial website should allow contact or availability inquiry without creating confirmed occupancy or blocking dates automatically.

**Alternatives considered**:

- Confirm reservations directly from the public website. Rejected for v0.3.0 because it requires availability authority, internal review rules, notifications, and likely legal/payment decisions.
- Hide contact until the private system is complete. Rejected because the landing needs a conversion path.
