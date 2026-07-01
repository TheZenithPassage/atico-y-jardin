# Contract: Private Reservations

This contract describes future v0.2.0 private reservation behavior. It is not implemented by the current planning task.

## Access Contract

- Private reservation screens require authentication.
- Internal reservation data is not shown on public landing pages.
- Existing private account behavior remains the baseline unless a later spec changes it.

## Reservation Rule Contract

- Exactly two initial units exist: Ático and Jardín.
- A reservation must have check-out after check-in.
- A confirmed/active reservation blocks availability for its unit.
- Active reservations cannot overlap for the same unit.
- Active reservations for different units may overlap.
- Cancelled reservations do not block availability.
- Public visitors cannot create confirmed reservations in v0.2.0.

## Calendar Contract

- Recommended v0.2.0 calendar: one FullCalendar calendar.
- Each apartment has a stable color.
- Filters allow viewing Ático, Jardín, or both.
- Calendar event labels should identify reservation and unit without exposing public data.

## CatWorld Mapping Contract

- `Stay` maps conceptually to `Reservation`.
- `Cat` maps conceptually to `ApartmentUnit`.
- `Owner` maps conceptually to `Guest`.
- `StayCat` maps conceptually to `ReservationUnit` only if multi-unit reservation support is needed.
- `Vet` is not a direct fit and may be removed or reconverted later to `BookingChannel` / `BookingSource`.
- `Accounts` remain private administration users.

## Implementation Approval Contract

Before coding v0.2.0, the implementation plan must resolve:

- persistence strategy;
- migration approach from inherited tables;
- reservation status strategy;
- exact private API contracts;
- required tests and migration validation.
