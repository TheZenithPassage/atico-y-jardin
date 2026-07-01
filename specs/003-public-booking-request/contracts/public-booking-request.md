# Contract: Public Booking Request

This contract describes future v0.3.0 request lifecycle behavior. It is not implemented by the current planning task.

## Public Submission Contract

- A visitor can request Ático, Jardín, or either apartment.
- The visitor provides check-in, check-out, contact details, and optional message.
- The submission creates a `BookingRequest` with status `NEW`.
- The submission does not create a reservation.
- The submission does not block dates.
- Public response copy must say the request will be reviewed.

## Validation Contract

- Check-out must be after check-in.
- Minimum guest contact is required.
- Server-side validation is authoritative.
- Frontend validation may assist but cannot be the only protection.
- Invalid public input must not expose internal details.

## Private Review Contract

- Authenticated admins can view requests.
- Admins can mark requests reviewed, accepted, declined, or cancelled.
- Admins can convert an accepted request to a reservation only through explicit action.
- Conversion must reuse private reservation validation, including overlap checks.
- Converted requests become `CONVERTED_TO_RESERVATION`.

## Privacy Contract

- Public users cannot see private reservation data, internal notes, or admin-only status history.
- Public contact data must be treated as private operational data.
- Future production work must review privacy/RGPD copy and retention expectations.

## Notification Contract

- Notification is optional for the first v0.3.0 implementation.
- If added, it requires explicit configuration, secret handling, template/copy review, and validation.
