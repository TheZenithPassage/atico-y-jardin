# Data Model: Public Booking Request

This is a planned v0.3.0 domain model. It is not implemented by the current planning task.

## BookingRequest

**Purpose**: Stores a public visitor request for availability or reservation review.

**Fields**:

- `id`.
- `requestedApartment`.
- `dateRange`.
- `guestContact`.
- `message`.
- `status`.
- `adminNotes`.
- `convertedReservationId`.
- `createdAt`.
- `updatedAt`.

**Validation rules**:

- Must not create or imply a confirmed reservation on submission.
- Must not block availability automatically.
- Must have valid date range and minimum guest contact.

## RequestedApartment

**Purpose**: Identifies the requested unit.

**Values**:

- `ATICO`
- `JARDIN`
- `EITHER`

**Validation rules**:

- Public copy must display `Ático`, `Jardín`, or equivalent visitor-friendly labels.

## RequestedDateRange

**Purpose**: Captures desired stay dates.

**Fields**:

- `checkIn`.
- `checkOut`.

**Validation rules**:

- `checkOut` must be after `checkIn`.
- Date validity must be enforced server-side.

## GuestContact

**Purpose**: Minimum information needed to respond to a public request.

**Fields**:

- `fullName`.
- `email`.
- `phone`.
- `preferredLanguage`.

**Validation rules**:

- Minimum contact fields must be defined before implementation.
- Internal notes and private reservation data must not be exposed publicly.

## RequestStatus

**Values**:

- `NEW`
- `REVIEWED`
- `ACCEPTED`
- `DECLINED`
- `CONVERTED_TO_RESERVATION`
- `CANCELLED`

**State transitions**:

- `NEW` -> `REVIEWED`
- `NEW` or `REVIEWED` -> `ACCEPTED`
- `NEW` or `REVIEWED` -> `DECLINED`
- `ACCEPTED` -> `CONVERTED_TO_RESERVATION`
- `NEW`, `REVIEWED`, or `ACCEPTED` -> `CANCELLED`

**Validation rules**:

- Conversion to reservation must run private reservation validation.
- Converted requests should retain a link to the created reservation.
