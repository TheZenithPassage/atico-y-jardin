# Feature Specification: Ático Information Section

**Feature Branch**: `feat/5-polish-atico-information-section`

**Created**: 2026-07-03

**Input**: User description: "GitHub issue #5: Polish Ático information section for the v0.1.1 Friday mobile-first landing demo."

## User Scenarios, Technical Outcomes & Testing *(mandatory)*

### User Story 1 - Scan Ático Information On Mobile (Priority: P1)

A visitor viewing the public landing page on a mobile device can quickly identify the Ático section, understand the apartment at a high level from short neutral copy, and scan a small set of highlights without needing backend data or reservation functionality.

**Why this priority**: Issue #5 exists to make the Ático public presentation demo-ready while keeping the landing page light and mobile-first.

**Independent Test**: Open `/` on a mobile viewport, navigate to the Ático section, and verify the section is visually distinct, concise, and free of exact unprovided facts.

**Acceptance Scenarios**:

1. **Given** a visitor is on the public landing page on a mobile viewport, **When** they reach the Ático section, **Then** they see a visually distinct Ático information section with a short heading, concise descriptive copy, and a small set of highlights.
2. **Given** exact apartment details have not been provided, **When** the Ático copy and highlights are reviewed, **Then** they use neutral wording and do not claim capacity, room count, exact address, amenities, prices, policies, or availability.

---

### User Story 2 - Navigate To Ático From Landing Anchors (Priority: P2)

A visitor can use existing landing navigation from the navbar or hero to jump directly to the Ático section.

**Why this priority**: The issue acceptance criteria require section anchors to work from navbar/hero so the demo can move between landing sections cleanly.

**Independent Test**: Open `/`, activate each available Ático navigation link from the navbar or hero, and verify the viewport lands on the Ático section.

**Acceptance Scenarios**:

1. **Given** the visitor is at the top of the public landing page, **When** they activate an Ático anchor from the navbar or hero, **Then** the page scrolls to the Ático information section.

### Observable Behavior Detail *(include when visible UI or user-observable behavior changes)*

- **Visible states**: The Ático section renders as its own distinct public landing section, with concise Spanish-facing copy, a short highlight list, and a simple visual/image slot or related presentation area if needed for the later gallery issue.
- **Interaction outcomes**: Existing or new Ático anchor links from the public navbar or hero target the Ático section and remain usable by pointer and keyboard navigation.
- **Copy and localization**: User-facing copy follows the existing internationalization system. Copy may use safe neutral wording such as "Un espacio luminoso pensado para estancias comodas" or "Mas informacion disponible bajo consulta" when exact facts are unavailable. Copy must preserve the public product name `Ático y Jardín` and apartment name `Ático` where relevant.
- **Responsive/mobile behavior**: The Ático section is optimized for mobile scanning first: short paragraphs, compact highlights, no overcrowded columns, and no text overlap at common mobile widths.

### Input/State Validation Matrix *(include when validation or state-sensitive behavior changes)*

- [x] N/A: This feature does not add forms, validation, backend-rejected states, permissions, or state transitions.

### Edge Cases

- If no approved Ático-specific hard facts are available, the section still reads naturally using neutral descriptive copy and consultation-oriented wording.
- On small mobile widths, headings, highlights, and visual placeholders must not overlap or require horizontal scrolling.
- Anchor navigation must still work when the section appears after prior landing content.

## Requirements *(mandatory)*

### Functional Requirements *(include when observable product or user behavior changes)*

- **FR-001**: The public landing page MUST include a visually distinct Ático information section.
- **FR-002**: The Ático section MUST present short descriptive copy suitable for a mobile demo.
- **FR-003**: The Ático section MUST include a small set of selling-point highlights or bullets that are easy to scan on mobile.
- **FR-004**: The Ático section MUST avoid unprovided hard facts, including exact capacity, number of rooms, exact address, specific amenities, prices, policies, availability, or reservation claims.
- **FR-005**: Ático navigation anchors from the public navbar or hero MUST target the Ático section successfully.
- **FR-006**: The section MUST be prepared for the later Ático gallery issue by leaving room for a simple visual/image slot without implementing a full gallery.
- **FR-007**: The implementation MUST remain public-frontend only and MUST NOT change backend, database, admin, authentication, availability, booking, reservation, iCal, OTA integration, payment, or real reservation logic.

### Scope Boundaries

- **SB-001**: Feature MUST remain within the Ático y Jardín product direction: a public website and future private management tool for the Ático and Jardín tourist apartments.
- **SB-002**: Feature MUST distinguish implemented behavior from assumptions, exclusions, planned future behavior, and unresolved product or architectural questions.
- **SB-003**: Feature MUST NOT introduce generic booking-marketplace, payment-platform, channel-manager, pricing-engine, multi-owner, or broad platform claims without explicit requirements and approval.

### Out of Scope

- Full Ático gallery implementation beyond a simple image slot or visual placeholder.
- Backend, database, admin, authentication, availability, booking, reservation, iCal, OTA, payment, or integration changes.
- Prices, capacity, room counts, exact address, exact amenities, policies, or any apartment-specific hard facts not already present in approved sources.

### Open Questions

- None. Missing hard facts are handled by the issue-approved neutral-copy guardrail and do not block this frontend presentation slice.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: On a mobile viewport, `/` shows a visually distinct Ático section with concise copy and a small highlight set that can be scanned without horizontal scrolling or text overlap.
- **SC-002**: Activating Ático links from available navbar or hero entry points scrolls to the Ático section.
- **SC-003**: Review of the changed public copy finds no invented hard facts about capacity, rooms, exact address, amenities, prices, policies, availability, booking, or reservations.
- **SC-004**: Existing project checks/build required by the active plan pass or any inability to run them is reported explicitly.

## Assumptions

- The landing page is already present from predecessor issues #2 and #3, so this issue polishes the Ático section rather than creating the entire landing page structure.
- The section uses Spanish-facing copy consistent with the current public landing experience and internationalization system.
- A simple image slot or placeholder is acceptable preparation for the separate Ático gallery issue, but a gallery carousel or image collection is excluded.
