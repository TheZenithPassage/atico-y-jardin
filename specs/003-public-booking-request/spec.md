# Feature Specification: Public Booking Request

**Feature Branch**: `planning/public-booking-request`

**Created**: 2026-06-30

**Status**: Draft

**Input**: Plan the v0.3.0 public booking request flow that connects the public website to private review without creating confirmed reservations automatically.

## User Scenarios, Technical Outcomes & Testing *(mandatory)*

### User Story 1 - Visitor Requests Availability (Priority: P1)

A public visitor can submit an availability or booking request for Ático, Jardín, or either apartment.

**Why this priority**: The public website needs a real lead-capture path after the landing demo.

**Independent Test**: Submit a valid public request and confirm it appears in private review without creating a confirmed reservation.

**Acceptance Scenarios**:

1. **Given** the public request form, **When** a visitor enters a valid date range and contact details, **Then** the request is stored with status `NEW`.
2. **Given** the public request form, **When** check-out is not after check-in, **Then** the request is rejected with a user-appropriate validation message.
3. **Given** a submitted request, **When** availability is later reviewed privately, **Then** the request has not blocked dates automatically.

---

### User Story 2 - Admin Reviews And Converts Requests (Priority: P1)

An authenticated internal user can review public requests and manually convert an accepted request to a confirmed reservation.

**Why this priority**: Public requests must remain controlled leads until an internal decision confirms them.

**Independent Test**: Review a request in private admin, mark it reviewed/accepted/declined, and convert it to a reservation only through an explicit admin action.

**Acceptance Scenarios**:

1. **Given** a `NEW` request, **When** an admin reviews it, **Then** the status can become `REVIEWED`, `ACCEPTED`, or `DECLINED`.
2. **Given** an accepted request, **When** an admin converts it, **Then** the system creates a confirmed reservation only if reservation rules pass.
3. **Given** a request converted to a reservation, **When** it is viewed later, **Then** it has status `CONVERTED_TO_RESERVATION`.

### Edge Cases

- Requests with invalid date ranges must be rejected.
- Requests without minimum guest contact must be rejected.
- A request may ask for an apartment that becomes unavailable before review.
- A request must not expose internal notes or existing reservation data publicly.
- Email/notification can be missing in v0.3.0 if it would delay the core flow.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: Public visitors MUST be able to submit a booking or availability request.
- **FR-002**: A public request MUST NOT be a confirmed reservation.
- **FR-003**: A public request MUST NOT block availability automatically.
- **FR-004**: Requests MUST include requested apartment, date range, guest contact, optional message, and status.
- **FR-005**: Request status MUST support `NEW`, `REVIEWED`, `ACCEPTED`, `DECLINED`, `CONVERTED_TO_RESERVATION`, and `CANCELLED`.
- **FR-006**: Check-out MUST be after check-in.
- **FR-007**: Minimum guest contact MUST be required.
- **FR-008**: Authenticated admins MUST be able to review requests.
- **FR-009**: Authenticated admins MUST be able to manually convert an accepted request to a confirmed reservation if private reservation rules pass.
- **FR-010**: Internal data MUST NOT be exposed publicly.

### Technical Requirements

- **TR-001**: Public request persistence MUST use backend API, service validation, repository persistence, and Flyway migration.
- **TR-002**: Request validation MUST be enforced server-side, with frontend validation only as assistance.
- **TR-003**: Conversion to reservation MUST reuse private reservation validation and overlap rules.
- **TR-004**: Email or notification MAY be planned as optional/future if it risks delaying the core request lifecycle.
- **TR-005**: Basic invalid-data protection MUST exist; captcha can be documented as a future risk if it delays v0.3.0.

### Scope Boundaries

- **SB-001**: Feature MUST remain within the Ático y Jardín product direction: a public website and future private management tool for the Ático and Jardín tourist apartments.
- **SB-002**: Feature MUST distinguish implemented behavior from assumptions, exclusions, planned future behavior, and unresolved product or architectural questions.
- **SB-003**: Feature MUST NOT introduce generic booking-marketplace, payment-platform, channel-manager, pricing-engine, multi-owner, or broad platform claims without explicit requirements and approval.

### Out of Scope

- Payment.
- Automatic confirmation.
- Automatic blocking of dates.
- External synchronization.
- Channel manager integration.
- Pricing engine.
- Captcha if it delays the first core request flow, though spam risk should be tracked.

### Open Questions

- Notification channel, if any, must be selected before implementing email/SMS/WhatsApp behavior. This is not blocking for the core request lifecycle if notifications are omitted.

### Key Entities

- **BookingRequest**: Public request record awaiting private review.
- **RequestedApartment**: Requested unit selection: Ático, Jardín, or either.
- **RequestedDateRange**: Check-in and check-out dates.
- **GuestContact**: Public visitor contact information.
- **RequestStatus**: Lifecycle state for review and conversion.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: Plan distinguishes public booking requests from confirmed reservations.
- **SC-002**: Plan states that public requests do not block availability automatically.
- **SC-003**: Data model defines requested apartment, date range, guest contact, and request status.
- **SC-004**: Tasks include admin review and manual conversion to reservation.
- **SC-005**: Scope excludes payments, automatic confirmation, automatic date blocking, and external synchronization.

## Assumptions

- v0.2.0 private reservation management exists before v0.3.0 conversion is implemented.
- A request may target Ático, Jardín, or either apartment.
- Email/notification is useful but not required for the first request lifecycle.
