# Quickstart: Validate Public Booking Request

This quickstart is for the future v0.3.0 implementation. The current planning task does not run these checks.

## Backend Validation

```powershell
./mvnw verify
```

Expected future outcome:

- Request validation tests reject invalid date ranges.
- Request validation tests require minimum guest contact.
- Request service tests confirm requests do not create reservations automatically.
- Conversion tests reuse reservation overlap validation.
- Flyway migration validation passes.

## Frontend Validation

```powershell
cd frontend
npm run build
npm run test:ci
```

Expected future outcome:

- Public request form builds and validates obvious invalid input.
- Private review UI builds and supports request lifecycle actions.

## Manual Scenarios

1. Open the public landing.
2. Submit a request for Ático with valid dates and contact details.
3. Confirm the public response says the request will be reviewed.
4. Log in privately.
5. Review the new request.
6. Accept the request.
7. Convert it to a reservation.
8. Confirm conversion runs reservation validation and marks the request converted.
9. Submit an invalid date range and confirm rejection.
10. Confirm the request did not block dates before conversion.

## Expected Result

Public visitors can submit requests, admins can review and convert them manually, and requests remain separate from confirmed reservations until conversion.
