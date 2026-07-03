# Feature Specification: Public Navbar Anchors

**Feature Branch**: `feat/3-public-navbar-anchors`

**Created**: 2026-07-03

**Input**: GitHub issue #3, "Preserve navbar and wire public section anchors"

## User Scenarios, Technical Outcomes & Testing *(mandatory)*

### User Story 1 - Navigate Public Landing Sections (Priority: P1)

As a public visitor on the landing page, I can use the existing navbar entries to move to the intended public sections for the two apartments, location, and contact details without the navbar changing visual style.

**Why this priority**: The Friday mobile-first demo depends on visitors being able to reach the visible public content from the accepted navbar.

**Independent Test**: Open `/`, activate the navbar entries for `Ático`, `Jardín`, `Ubicación`, and `Contacto`, and verify each one navigates or scrolls to the matching public section.

**Acceptance Scenarios**:

1. **Given** a visitor is on `/`, **When** they activate `Ático`, **Then** the page navigates to the Ático public section without opening a new route.
2. **Given** a visitor is on `/`, **When** they activate `Jardín`, **Then** the page navigates to the Jardín public section without opening a new route.
3. **Given** a visitor is on `/`, **When** they activate `Ubicación`, **Then** the page navigates to the location section without opening a new route.
4. **Given** a visitor is on `/`, **When** they activate `Contacto`, **Then** the page navigates to the contact section without opening a new route.

---

### User Story 2 - Reach Private Access Discreetly (Priority: P2)

As an owner or administrator, I can still find and activate `Acceso privado` from the navbar while it remains visually secondary to the public apartment and contact links.

**Why this priority**: The private entry point must remain available for current operations, but the public demo should keep attention on the public landing experience.

**Independent Test**: Open `/`, inspect the navbar, and verify `Acceso privado` remains available, visually discreet, and navigates to the existing private access destination.

**Acceptance Scenarios**:

1. **Given** a visitor is on `/`, **When** they activate `Acceso privado`, **Then** the app navigates to the existing private access destination without changing backend, auth, admin, or reservation behavior.

---

### User Story 3 - Use Navbar On Mobile (Priority: P3)

As a mobile visitor, I can use the navbar without it overlapping or breaking the hero area.

**Why this priority**: The milestone is a mobile-first landing demo, so the accepted navbar must stay usable on small screens.

**Independent Test**: Open `/` in a mobile viewport, activate the navbar links, and verify the navbar remains usable and does not overlap or break the hero.

**Acceptance Scenarios**:

1. **Given** a mobile viewport on `/`, **When** the landing page first renders, **Then** the navbar remains usable and does not obscure or break the hero presentation.
2. **Given** a mobile viewport on `/`, **When** the visitor activates public navbar entries, **Then** the page navigates to the intended sections and the hero remains visually intact.

### Observable Behavior Detail *(include when visible UI or user-observable behavior changes)*

- **Visible states**: The current accepted navbar visual style is preserved; public entries remain visible, and `Acceso privado` remains available but secondary/discreet.
- **Interaction outcomes**: `Ático`, `Jardín`, `Ubicación`, and `Contacto` use landing-page section navigation where appropriate. `Acceso privado` keeps the existing private access navigation behavior.
- **Copy and localization**: User-facing labels use the existing internationalization system and preserve the Spanish public labels named by the issue.
- **Responsive/mobile behavior**: On mobile viewports, the navbar remains usable and must not overlap or break the hero.

### Input/State Validation Matrix *(include when validation or state-sensitive behavior changes)*

N/A: This feature does not introduce forms, submit actions, backend-rejected states, role-dependent visibility changes, or validation-sensitive state transitions.

### Edge Cases

- Activating navbar links from `/` should not route to missing pages or empty anchors.
- Landing sections should remain reachable if the page is loaded directly at an anchor fragment.
- Mobile navigation should remain usable at narrow viewport widths used for the Friday demo.

## Requirements *(mandatory)*

### Functional Requirements *(include when observable product or user behavior changes)*

- **FR-001**: The system MUST preserve the current accepted navbar visual style while changing only navigation wiring needed for this issue.
- **FR-002**: The navbar MUST expose entries for `Ático`, `Jardín`, `Ubicación`, `Contacto`, and `Acceso privado`.
- **FR-003**: Activating `Ático` from `/` MUST navigate or scroll to the Ático public landing section.
- **FR-004**: Activating `Jardín` from `/` MUST navigate or scroll to the Jardín public landing section.
- **FR-005**: Activating `Ubicación` from `/` MUST navigate or scroll to the location public landing section.
- **FR-006**: Activating `Contacto` from `/` MUST navigate or scroll to the contact public landing section.
- **FR-007**: `Acceso privado` MUST remain available from the navbar and visually discreet relative to the public section links.
- **FR-008**: Mobile navbar behavior MUST remain usable and MUST NOT overlap or break the hero.

### Technical Requirements *(include for technical, architectural, migration, security, operational, refactoring, documentation, or enabling work)*

- **TR-001**: The implementation MUST use the existing Angular public landing and navigation structure without introducing backend, database, auth, admin, reservation, payment, iCal, or OTA integration changes.
- **TR-002**: User-facing navbar copy MUST follow the existing internationalization system.
- **TR-003**: Existing checks/build required by the active plan and task list MUST pass or be reported with explicit failure details.

### Scope Boundaries

- **SB-001**: Feature MUST remain within the Ático y Jardín product direction: a public website and future private management tool for the Ático and Jardín tourist apartments.
- **SB-002**: Feature MUST distinguish implemented behavior from assumptions, exclusions, planned future behavior, and unresolved product or architectural questions.
- **SB-003**: Feature MUST NOT introduce generic booking-marketplace, payment-platform, channel-manager, pricing-engine, multi-owner, or broad platform claims without explicit requirements and approval.

### Out of Scope

- Navbar redesign.
- Backend, authentication, authorization, or admin changes.
- New routes unless already aligned with the current structure.
- Reservation, calendar, booking-request, payment, iCal, OTA integration, or database behavior.
- Deeper domain model refactoring or inherited CatWorld code cleanup.

### Open Questions

None.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: Manual testing on `/` confirms every navbar entry named in issue #3 reaches its intended section or existing private destination.
- **SC-002**: Manual mobile inspection confirms the navbar remains usable and does not overlap or break the hero.
- **SC-003**: The implementation changes only the public frontend surface and Spec Kit artifacts allowed by this feature scope.
- **SC-004**: Existing checks/build required by the feature plan and tasks complete successfully or are reported with explicit status.

## Assumptions

- The current accepted navbar means the navbar present on `main` when the issue branch was created.
- `Acceso privado` should keep the existing private access destination because issue #3 excludes backend, auth, admin, and route redesign work.
