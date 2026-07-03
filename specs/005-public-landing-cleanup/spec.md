# Feature Specification: Public Landing Cleanup

**Feature Branch**: `chore/2-public-landing-cleanup`

**Created**: 2026-07-03

**Input**: GitHub issue #2, "Remove visible scaffold and CatWorld leftovers from public landing"

## User Scenarios, Technical Outcomes & Testing *(mandatory)*

### User Story 1 - Visitor Sees Ático y Jardín, Not CatWorld (Priority: P1)

A public visitor opens `/` and sees a landing page that clearly belongs to Ático y Jardín instead of an inherited CatWorld application, scaffold, or technical template.

**Why this priority**: The Friday mobile-first demo depends on the public landing looking like the intended two-apartment product before deeper backend or domain migration work begins.

**Independent Test**: Open `/` and scan all visible landing content to confirm there are no CatWorld references, scaffold labels, debug/version labels, TODOs, or template-looking copy.

**Acceptance Scenarios**:

1. **Given** the public landing page, **When** a visitor loads `/`, **Then** the visible brand and public copy present Ático y Jardín.
2. **Given** the public landing page, **When** a visitor scans the page from top to bottom, **Then** no visible CatWorld references remain.
3. **Given** the public landing page, **When** a visitor scans labels, badges, footer text, and secondary copy, **Then** no visible TODO, debug, version, scaffold, or template-style text remains.

---

### User Story 2 - Visitor Recognizes The Two Apartments (Priority: P1)

A public visitor can still understand that the offering is built around two apartment concepts: Ático and Jardín.

**Why this priority**: The cleanup must preserve the approved public product structure while removing inherited noise.

**Independent Test**: Open `/` and verify that Ático and Jardín remain visible as the two apartment concepts.

**Acceptance Scenarios**:

1. **Given** the public landing page, **When** a visitor reviews the apartment presentation, **Then** Ático is still presented as one public apartment concept.
2. **Given** the public landing page, **When** a visitor reviews the apartment presentation, **Then** Jardín is still presented as one public apartment concept.
3. **Given** the existing navbar structure, **When** cleanup is complete, **Then** navigation remains structurally recognizable unless visible text required cleanup.

---

### User Story 3 - Private Access Remains Available (Priority: P2)

An administrator or private user can still reach the existing private/admin access entry point after the public landing copy cleanup.

**Why this priority**: The issue explicitly preserves the private access/admin entry point technically while limiting changes to public landing cleanup.

**Independent Test**: Use the visible or known private/admin entry point after implementation and confirm it still routes to the existing private access flow.

**Acceptance Scenarios**:

1. **Given** the implemented cleanup, **When** a private/admin user follows the existing access entry point, **Then** the private access route still opens.
2. **Given** the implemented cleanup, **When** public landing text changes are reviewed, **Then** no backend, database, auth, admin domain, real reservation, iCal, OTA, or payment behavior has been introduced.

### Observable Behavior Detail *(include when visible UI or user-observable behavior changes)*

- **Visible states**: `/` shows polished public-facing Ático y Jardín copy with no visible CatWorld, TODO, scaffold, debug, or version text.
- **Interaction outcomes**: Existing public navigation structure remains, and the existing private/admin access entry point continues to route to the current private access flow.
- **Copy and localization**: User-facing copy follows the existing internationalization system; this feature does not add new language support.
- **Responsive/mobile behavior**: `/` remains readable and non-broken in a mobile viewport during manual inspection.

### Input/State Validation Matrix *(include when validation or state-sensitive behavior changes)*

N/A: this feature does not add or change forms, submitted inputs, backend-rejected states, persistence states, permissions, or validation flows. The private/admin entry point is preserved technically and verified through route/access smoke checking.

### Edge Cases

- Inherited CatWorld terms may remain in private/admin routes or internal code not visible on `/`; this issue only owns public landing cleanup.
- Existing navbar structure should remain unless a visible label itself contains scaffold or inherited wording.
- Public copy must not imply real reservations, payments, iCal/OTA synchronization, or new booking behavior.
- Version numbers, build metadata, debug labels, TODO markers, and template-sounding placeholder text must be removed from visible `/` content even if they are small or secondary.

## Requirements *(mandatory)*

### Functional Requirements *(include when observable product or user behavior changes)*

- **FR-001**: The `/` public landing MUST not show visible CatWorld references.
- **FR-002**: The `/` public landing MUST not show visible TODO, scaffold, debug, version, or template-style copy.
- **FR-003**: The `/` public landing MUST present the public product as Ático y Jardín.
- **FR-004**: The `/` public landing MUST preserve Ático and Jardín as the two public apartment concepts.
- **FR-005**: The existing navbar structure MUST remain unless a visible text label requires cleanup to satisfy this issue.
- **FR-006**: The existing private access/admin entry point MUST remain technically available.
- **FR-007**: The cleanup MUST avoid adding real reservation, payment, iCal, OTA, backend, database, auth, admin-domain, or new-language behavior.

### Technical Requirements *(include for technical, architectural, migration, security, operational, refactoring, documentation, or enabling work)*

- **TR-001**: Implementation MUST stay within the existing frontend stack and public landing surface.
- **TR-002**: Implementation MUST not modify backend code, database schema, Flyway migrations, auth/admin domain logic, reservation logic, OTA/iCal integrations, or payment behavior.
- **TR-003**: User-facing copy changes MUST follow the existing internationalization structure.
- **TR-004**: Validation MUST include the existing frontend checks/build available in the project.
- **TR-005**: Validation MUST include manual mobile viewport inspection of `/`, a visible-text check for removed scaffold/CatWorld/TODO/debug/version copy, and a smoke check that private/admin access still routes.

### Scope Boundaries

- **SB-001**: Feature MUST remain within the Ático y Jardín product direction: a public website and future private management tool for the Ático and Jardín tourist apartments.
- **SB-002**: Feature MUST distinguish implemented behavior from assumptions, exclusions, planned future behavior, and unresolved product or architectural questions.
- **SB-003**: Feature MUST NOT introduce generic booking-marketplace, payment-platform, channel-manager, pricing-engine, multi-owner, or broad platform claims without explicit requirements and approval.

### Out of Scope

- Backend changes.
- Database changes or migrations.
- Authentication, authorization, admin redesign, or admin domain changes.
- Real reservations or booking confirmation behavior.
- Calendar, iCal, OTA, channel-manager, or payment integrations.
- New language support.
- Full visual redesign.
- Deep CatWorld code/domain cleanup outside visible `/` content.

### Open Questions

- No blocking questions. The issue provides the required scope, non-goals, validation expectations, and private/admin preservation constraint.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: Manual review of `/` confirms no visible CatWorld references remain.
- **SC-002**: Manual review of `/` confirms no visible TODO, scaffold, debug, version, or template-looking text remains.
- **SC-003**: Manual review of `/` confirms Ático and Jardín remain the two public apartment concepts.
- **SC-004**: Mobile viewport inspection confirms `/` remains readable and free of obvious visible layout breakage caused by the cleanup.
- **SC-005**: Private/admin access smoke check confirms the existing access entry point still routes to the current private access flow.
- **SC-006**: Existing frontend checks/build available in the project complete successfully after implementation.

## Assumptions

- The existing `/` route is the public landing surface owned by this issue.
- Private/admin pages may still contain inherited CatWorld concepts until separate transition work explicitly owns them.
- Minor copy edits that remove scaffold tone are allowed when they do not add new product capabilities or change the approved navbar structure.
