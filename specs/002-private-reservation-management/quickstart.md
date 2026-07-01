# Quickstart: Validate Private Reservation Management

This quickstart is for the future v0.2.0 implementation. The current planning task does not run these checks.

## Backend Validation

```powershell
./mvnw verify
```

Expected future outcome:

- Reservation service tests cover check-out after check-in.
- Reservation service tests reject active overlaps for the same apartment.
- Reservation service tests allow overlaps for different apartments.
- Reservation service tests ignore cancelled reservations for overlap blocking.
- Controller tests cover private access and validation errors.
- Flyway migration validation passes.

## Frontend Validation

```powershell
cd frontend
npm run build
npm run test:ci
```

Expected future outcome:

- Private reservation screens build successfully.
- Calendar renders reservations for both apartments.
- Filters work for Ático, Jardín, and both.
- Existing login/admin access remains protected.

## Manual Scenarios

1. Log in as an internal user.
2. Create a guest.
3. Create a reservation for Ático.
4. Attempt overlapping active reservation for Ático and confirm rejection.
5. Create overlapping reservation for Jardín and confirm success.
6. Cancel Ático reservation.
7. Create a new Ático reservation for the cancelled dates and confirm success.
8. Review the calendar with both apartments visible.
9. Filter to Ático and Jardín separately.

## Expected Result

Private reservation management works for two apartments without public auto-booking, payments, or channel synchronization.
