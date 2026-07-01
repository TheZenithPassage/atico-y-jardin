# Data Model: Private Reservation Management

This is a planned v0.2.0 domain model. It is not implemented by the current planning task.

## ApartmentUnit

**Purpose**: Represents one rentable apartment.

**Fields**:

- `id`: Stable identifier.
- `code`: `ATICO` or `JARDIN`.
- `displayName`: `Ático` or `Jardín`.
- `color`: Calendar display color.
- `active`: Whether the unit is available for internal booking.

**Validation rules**:

- Initial dataset contains exactly two active units.
- Unit names must not be user-editable unless a later spec approves it.

## Guest

**Purpose**: Represents the guest/customer for a reservation.

**Fields**:

- `id`.
- `fullName`.
- `email`.
- `phone`.
- `preferredLanguage`.
- `notes`.

**Validation rules**:

- Minimum contact requirements must be defined during implementation.
- Private guest data must not be exposed publicly.

## Reservation

**Purpose**: Represents a confirmed or internally tracked reservation.

**Fields**:

- `id`.
- `guest`.
- `units`: One or more ApartmentUnit links; normally one for v0.2.0.
- `checkIn`.
- `checkOut`.
- `status`.
- `bookingChannel`.
- `internalNotes`.
- `createdAt`.
- `updatedAt`.

**Validation rules**:

- `checkOut` must be after `checkIn`.
- Active reservations must not overlap for the same unit.
- Cancelled reservations do not block availability.
- A reservation must include at least one unit.

## ReservationStatus

**Suggested values**:

- `RESERVED`
- `CHECKED_IN`
- `CHECKED_OUT`
- `CANCELLED`

**Planning note**: The implementation plan must decide whether status is derived, persisted, or mixed. This decision is material because inherited CatWorld stay status is dynamic.

## BookingChannel

**Purpose**: Optional source or origin of a reservation.

**Suggested values**:

- `DIRECT`
- `OWNER`
- `AIRBNB`
- `BOOKING`
- `OTHER`

**Planning note**: Optional for v0.2.0. Do not implement channel synchronization.

## InternalNote

**Purpose**: Private operational note.

**Fields**:

- `id`.
- `reservation`.
- `author`.
- `body`.
- `createdAt`.

**Validation rules**:

- Internal notes are private and must not be exposed on public pages.

## CalendarEvent

**Purpose**: Frontend mapping for FullCalendar.

**Fields**:

- `id`.
- `title`.
- `start`.
- `end`.
- `unitCode`.
- `color`.
- `reservationStatus`.

**Validation rules**:

- Event color must correspond to apartment unit.
- Cancelled reservations may be hidden or styled distinctly according to implementation plan.
