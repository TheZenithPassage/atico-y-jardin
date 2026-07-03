# Feature Specification: Mobile Split Hero

**Feature Branch**: `feat/4-mobile-first-split-hero`

**Created**: 2026-07-03

**Input**: GitHub issue #4, "Implement mobile-first split hero for Ático and Jardín"

## User Scenarios, Technical Outcomes & Testing *(mandatory)*

### User Story 1 - Understand Both Apartments Immediately (Priority: P1)

As a public mobile visitor, I can open the landing page and immediately understand that Ático y Jardín offers two distinct apartments, Ático and Jardín, through a professional first-screen hero below the navbar.

**Why this priority**: The Friday demo will be shown primarily from a phone in person, so the first mobile viewport must create the strongest public impression without relying on explanations.

**Independent Test**: Open `/` at mobile widths around 360px, 390px, and 430px and verify the first viewport below the navbar shows both Ático and Jardín as visually distinct apartment choices with polished image-led presentation.

**Acceptance Scenarios**:

1. **Given** a visitor opens `/` in a 390px-wide mobile viewport, **When** the landing page first renders, **Then** the area below the navbar presents Ático and Jardín as two immediately understandable, visually separated apartment blocks.
2. **Given** a visitor opens `/` in a 360px-wide mobile viewport, **When** they inspect the first viewport, **Then** each apartment block includes an image area and short elegant copy without requiring scrolling past explanatory dashboard-style content.
3. **Given** a visitor opens `/` in a 430px-wide mobile viewport, **When** the hero renders, **Then** the presentation remains professional, legible, and tailored to Ático y Jardín rather than looking like a generic template.

---

### User Story 2 - Move From Hero To Apartment Sections (Priority: P2)

As a public visitor, I can use the hero calls to action to move directly to Ático, Jardín, or availability/contact information without fake booking promises.

**Why this priority**: The hero must turn the first impression into the next useful action while preserving the issue's non-goals around real availability and reservation logic.

**Independent Test**: Open `/`, activate the hero CTAs, and verify they navigate or scroll to the correct public sections without introducing booking, payment, or real availability flows.

**Acceptance Scenarios**:

1. **Given** a visitor is viewing the hero, **When** they activate `Ver Ático`, **Then** the page moves to the Ático public section.
2. **Given** a visitor is viewing the hero, **When** they activate `Ver Jardín`, **Then** the page moves to the Jardín public section.
3. **Given** a visitor is viewing the hero, **When** they activate an availability/contact CTA, **Then** the page moves to the public contact or availability-intent section without promising real-time booking or confirmed availability.

---

### User Story 3 - Keep Desktop Acceptable (Priority: P3)

As a desktop visitor, I can view the same public landing page and see an acceptable split hero that still presents Ático and Jardín clearly.

**Why this priority**: Mobile is the priority, but the public site should not regress on wider screens.

**Independent Test**: Open `/` at a desktop viewport and verify the hero remains visually coherent, both apartments are visible, and the CTAs still navigate to the intended sections.

**Acceptance Scenarios**:

1. **Given** a visitor opens `/` on desktop, **When** the hero renders below the navbar, **Then** Ático and Jardín remain visually separated and readable.
2. **Given** a desktop visitor activates the hero CTAs, **When** navigation occurs, **Then** the page moves to the intended public sections.

### Observable Behavior Detail *(include when visible UI or user-observable behavior changes)*

- **Visible states**: The landing page first viewport below the navbar contains a near-full-screen hero split between Ático and Jardín, each with one local image area, short elegant copy, and clear CTAs. A diagonal/slash-style separation is preferred where feasible; if brittle, a clean intentional stacked mobile split is acceptable.
- **Interaction outcomes**: Hero CTAs such as `Ver Ático`, `Ver Jardín`, and an availability/contact-intent action navigate or scroll to the correct public landing sections. They do not start a booking, payment, admin, or reservation workflow.
- **Copy and localization**: User-facing copy uses the existing internationalization system. Text must preserve the product/apartment names `Ático y Jardín`, `Ático`, and `Jardín`; it must avoid fake booking wording or real-time availability claims.
- **Responsive/mobile behavior**: Mobile widths around 360px, 390px, and 430px are the primary verification targets. The hero should occupy the first viewport below the navbar while staying legible and free of incoherent overlap. Desktop must remain acceptable.

### Input/State Validation Matrix *(include when validation or state-sensitive behavior changes)*

N/A: This feature does not introduce forms, submit actions, backend-rejected states, role-dependent visibility changes, data validation, or state-sensitive behavior.

### Edge Cases

- The hero must remain usable and legible at narrow mobile widths around 360px without text overflowing or CTAs overlapping image content.
- The existing navbar must remain visible and usable; this feature does not replace its design.
- CTA targets must be valid public landing sections and should still work when visitors load the page with an anchor fragment.
- Local image assets may have different aspect ratios; the hero must crop or frame them intentionally without exposing broken or empty image areas.
- If a diagonal/slash divider becomes brittle at mobile widths, the fallback stacked split must still look deliberate and clearly separate Ático from Jardín.

## Requirements *(mandatory)*

### Functional Requirements *(include when observable product or user behavior changes)*

- **FR-001**: The landing page MUST present a hero section occupying the first viewport below the navbar on the primary mobile demo widths around 360px, 390px, and 430px.
- **FR-002**: The hero MUST show Ático and Jardín as visually separated apartment choices.
- **FR-003**: The hero MUST include one local image area for Ático and one local image area for Jardín.
- **FR-004**: Each apartment area MUST include short, elegant copy that helps visitors understand the apartment without long explanations.
- **FR-005**: The hero MUST include CTAs for apartment navigation, including `Ver Ático` and `Ver Jardín`, and MAY include a contact/availability-intent CTA if it avoids fake booking wording.
- **FR-006**: Hero CTA links MUST navigate or scroll to the correct public landing sections.
- **FR-007**: The hero MUST avoid fake booking wording, real-time availability claims, confirmed reservation claims, payment language, or wording that implies implemented booking logic.
- **FR-008**: The implementation MUST prioritize mobile presentation and keep desktop presentation acceptable.
- **FR-009**: The existing navbar design MUST NOT be replaced by this feature.

### Technical Requirements *(include for technical, architectural, migration, security, operational, refactoring, documentation, or enabling work)*

- **TR-001**: The implementation MUST use existing/local image assets only and MUST NOT fetch external images.
- **TR-002**: The implementation MUST remain on the existing frontend stack and public landing structure without introducing new frameworks, backend changes, database changes, admin changes, iCal/OTA/payment integrations, or reservation logic.
- **TR-003**: User-facing copy MUST follow the existing internationalization system.
- **TR-004**: Existing checks/build required by the active plan and task list MUST pass or be reported with explicit failure details.

### Scope Boundaries

- **SB-001**: Feature MUST remain within the Ático y Jardín product direction: a public website and future private management tool for the Ático and Jardín tourist apartments.
- **SB-002**: Feature MUST distinguish implemented behavior from assumptions, exclusions, planned future behavior, and unresolved product or architectural questions.
- **SB-003**: Feature MUST NOT introduce generic booking-marketplace, payment-platform, channel-manager, pricing-engine, multi-owner, or broad platform claims without explicit requirements and approval.

### Out of Scope

- Backend, database, authentication, authorization, admin, or private management changes.
- Dynamic galleries.
- Real availability, real reservations, booking confirmation, payments, iCal, OTA integrations, or public booking-request workflows.
- External image fetching or new remote media dependencies.
- Replacing the navbar design.
- Deeper domain model refactoring or inherited CatWorld code cleanup.

### Open Questions

None.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: Manual inspection at mobile widths around 360px, 390px, and 430px confirms the first viewport below the navbar looks professional and immediately presents both Ático and Jardín.
- **SC-002**: Manual inspection confirms each apartment has a local image area, short elegant copy, and clear visual separation.
- **SC-003**: CTA testing confirms `Ver Ático`, `Ver Jardín`, and any availability/contact-intent CTA move to the correct public sections.
- **SC-004**: Copy review confirms no fake booking wording, real-time availability claims, or reservation/payment implications were introduced.
- **SC-005**: Desktop sanity checking confirms the hero remains acceptable and both apartment CTAs remain usable.
- **SC-006**: Existing checks/build required by the feature plan and tasks complete successfully or are reported with explicit status.

## Assumptions

- The correct public sections are the existing landing sections for Ático, Jardín, and contact/availability-intent navigation from prior public landing/navbar work.
- Local image assets already available in the repository are sufficient for this issue's demo scope; choosing among those assets is a minor presentation detail as long as no external image fetching is introduced.
