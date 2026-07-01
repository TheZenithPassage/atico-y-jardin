# Feature Specification: Private Reservation Management

**Feature Branch**: `planning/private-reservation-management`

**Created**: 2026-06-30

**Input**: Plan the v0.2.0 private reservation-management alpha that adapts the inherited CatWorld private administration system for Ático y Jardín.

## User Scenarios, Technical Outcomes & Testing *(mandatory)*

### User Story 1 - Admin Manages Apartment Reservations (Priority: P1)

An authenticated internal user can manage reservations for the fixed apartment units Ático and Jardín.

**Why this priority**: Private reservation management is the core operational feature after the public landing.

**Independent Test**: With a private login, create, edit, cancel, and review a reservation for one apartment without affecting the other apartment.

**Acceptance Scenarios**:

1. **Given** an authenticated admin, **When** they create a reservation for Ático with valid dates and guest details, **Then** the reservation is stored as an active occupancy for Ático.
2. **Given** an authenticated admin, **When** they cancel a reservation, **Then** it no longer blocks availability.
3. **Given** an unauthenticated user, **When** they attempt private reservation management, **Then** access is denied.

---

### User Story 2 - Admin Prevents Overlapping Occupancy (Priority: P1)

An authenticated internal user cannot create or update active reservations that overlap for the same apartment.

**Why this priority**: Overlap prevention is the central business invariant for apartment reservations.

**Independent Test**: Attempt overlapping active reservations for the same apartment and verify rejection; attempt overlapping reservations for different apartments and verify they can coexist if otherwise valid.

**Acceptance Scenarios**:

1. **Given** an active reservation for Ático, **When** an admin creates another active reservation that overlaps Ático dates, **Then** the system rejects it.
2. **Given** an active reservation for Ático, **When** an admin creates a reservation for Jardín with overlapping dates, **Then** the system allows it if all other rules pass.
3. **Given** a cancelled reservation, **When** an admin creates a new reservation for the same dates and apartment, **Then** the cancelled reservation does not block availability.

---

### User Story 3 - Admin Reviews Occupancy In Calendar (Priority: P2)

An authenticated internal user can view reservations in a calendar using colors and filters for Ático and Jardín.

**Why this priority**: Calendar review is a high-value inherited CatWorld capability and helps daily operations.

**Independent Test**: Create sample reservations for both units and confirm the calendar displays them with distinguishable unit colors and filters.

**Acceptance Scenarios**:

1. **Given** reservations for both apartments, **When** the admin opens the calendar, **Then** each reservation appears with the correct apartment color.
2. **Given** a filter for Ático or Jardín, **When** the admin applies it, **Then** the calendar shows only the selected apartment's reservations.

### Edge Cases

- Check-out equal to or before check-in must be rejected.
- A reservation must belong to at least one unit; for v0.2.0, normally exactly one unit.
- Cancelled reservations must not block availability.
- Existing CatWorld stay data may still exist during migration; conversion strategy must be explicit before schema changes.
- Public visitors must not create confirmed reservations in this phase.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: Private reservation management MUST require login.
- **FR-002**: The system MUST model exactly two initial units: Ático and Jardín.
- **FR-003**: Internal users MUST be able to create, edit, cancel, and list reservations.
- **FR-004**: Reservations MUST include guest information sufficient for internal management.
- **FR-005**: Active reservations MUST not overlap for the same apartment unit.
- **FR-006**: Cancelled reservations MUST not block availability.
- **FR-007**: Check-out MUST be after check-in.
- **FR-008**: Internal notes MAY be attached to reservations.
- **FR-009**: Calendar events MUST map reservations to apartment-specific colors and filters.
- **FR-010**: Public visitors MUST NOT create confirmed reservations directly in v0.2.0.

### Technical Requirements

- **TR-001**: The implementation plan MUST reuse the inherited layered monolith pattern.
- **TR-002**: Persistence changes MUST use Flyway migrations and proportional migration validation.
- **TR-003**: Reservation overlap validation MUST be enforced in backend services and protected by persistence constraints where practical.
- **TR-004**: The feature MUST document the CatWorld concept mapping: `Stay` -> `Reservation`, `Cat` -> `ApartmentUnit`, `Owner` -> `Guest`, `StayCat` -> `ReservationUnit` if needed, `Vet` -> possible `BookingChannel` or removal.
- **TR-005**: FullCalendar SHOULD be reused with one calendar, apartment colors, and apartment filters for v0.2.0.

### Scope Boundaries

- **SB-001**: Feature MUST remain within the Ático y Jardín product direction: a public website and future private management tool for the Ático and Jardín tourist apartments.
- **SB-002**: Feature MUST distinguish implemented behavior from assumptions, exclusions, planned future behavior, and unresolved product or architectural questions.
- **SB-003**: Feature MUST NOT introduce generic booking-marketplace, payment-platform, channel-manager, pricing-engine, multi-owner, or broad platform claims without explicit requirements and approval.

### Out of Scope

- Public booking request persistence.
- Online payments.
- Channel manager integration.
- iCal synchronization.
- Pricing engine.
- Multi-property or multi-owner platform behavior.
- Advanced roles beyond inherited private access unless specified later.

### Open Questions

- Implementation planning must decide whether to migrate existing CatWorld tables in place, create parallel reservation tables, or perform a staged compatibility approach. This is a blocking persistence decision before coding.

### Key Entities

- **ApartmentUnit**: Fixed unit, initially Ático or Jardín.
- **Guest**: Person or party associated with a reservation.
- **Reservation**: Confirmed or internally tracked booking for one or more units.
- **ReservationStatus**: Controlled lifecycle state.
- **BookingChannel**: Optional future source such as direct, owner, Airbnb, Booking, or other.
- **InternalNote**: Optional private note attached to guest or reservation.
- **CalendarEvent**: UI mapping of reservations to date ranges, labels, colors, and filters.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: Plan and tasks define the domain mapping from CatWorld stay concepts to reservation concepts.
- **SC-002**: Plan records one-calendar-with-colors-and-filters as the recommended v0.2.0 calendar approach.
- **SC-003**: Tasks include backend validation for no active overlaps per apartment unit.
- **SC-004**: Tasks include Flyway migration planning and validation before schema changes.
- **SC-005**: Scope explicitly excludes public booking requests, payments, channel sync, and pricing.

## Assumptions

- Existing authentication and account management remain the private-access baseline until a later plan changes them.
- A reservation normally targets one apartment, but the model may allow multi-unit reservations only if the implementation plan justifies it.
- The existing FullCalendar dependency remains available.
