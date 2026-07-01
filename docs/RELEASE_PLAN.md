# Release Plan

This plan defines the initial Ático y Jardín releases. It distinguishes planned
behavior from implemented behavior and keeps the Friday demo ahead of deeper
domain refactoring.

## v0.1.0 - Friday Demo Landing

**Goal**: Present a professional public landing page for Friday, 2026-07-03.

**Scope**:

- Public rebranding to Ático y Jardín.
- Home/landing with professional hero.
- Simple navigation.
- Separate Ático and Jardín sections.
- Separate galleries for Ático and Jardín.
- Apartment information, amenities, location treatment, and CTA per apartment.
- Shared location/contact if appropriate.
- Responsive mobile/tablet/desktop layout.
- Mock or visual contact/availability CTA.
- No visible CatWorld branding in the public demo path.

**Out of scope**:

- Real booking engine.
- Payments.
- Airbnb/Booking/channel synchronization.
- Backend reservation refactor.
- Schema changes.
- Advanced SEO.
- Complete multilingual system.

**Validation**:

- `cd frontend && npm run build`
- Desktop responsive pass.
- Mobile responsive pass.
- Navigation pass.
- No-visible-CatWorld public pass.
- Demo script pass.

**Primary risk**: Missing real photos, copy, contact, and location details may make the demo feel incomplete.

**Demo/acceptance criteria**:

- Owners see Ático y Jardín as the public brand.
- Ático and Jardín are clearly separated.
- Each apartment has a gallery area and information area.
- The contact/inquiry CTA is visible and honest.
- The page is professional enough to discuss next steps.

## v0.2.0 - Private Reservation Management Alpha

**Goal**: Adapt inherited private CatWorld functionality toward internal reservation management.

**Scope**:

- Private login.
- Internal users.
- Fixed units: Ático and Jardín.
- Guests.
- Reservations.
- Create/edit/cancel reservation.
- Calendar of occupancy.
- No active overlaps for the same apartment.
- Notes.
- Reservation status approach.
- Basic validation.

**Out of scope**:

- Public booking request.
- Payment.
- Channel manager.
- iCal sync.
- Pricing engine.
- Multi-property/multi-owner platform.
- Advanced roles unless separately specified.

**Validation**:

- `./mvnw verify`
- `cd frontend && npm run build`
- `cd frontend && npm run test:ci`
- Flyway migration validation.
- Manual reservation overlap scenarios.
- Manual calendar filter scenarios.

**Primary risk**: Migrating from CatWorld stay/cat/owner concepts to reservation/unit/guest concepts can break inherited behavior if done as a big bang.

**Demo/acceptance criteria**:

- Internal user can create, edit, and cancel a reservation.
- Overlapping active reservations for the same unit are rejected.
- Cancelled reservations do not block availability.
- Calendar shows Ático and Jardín with colors and filters.

## v0.3.0 - Public Booking Request

**Goal**: Connect the public website to a request lifecycle without automatic confirmation.

**Scope**:

- Public form connected to backend.
- Booking request persistence.
- Request status lifecycle.
- Private review of requests.
- Manual conversion from accepted request to confirmed reservation.
- Basic validation.
- Optional email/notification if it does not delay the core flow.

**Out of scope**:

- Payment.
- Automatic confirmation.
- Automatic date blocking.
- External synchronization.
- Channel manager.
- Pricing engine.
- Captcha if it delays the first core lifecycle, though spam risk must be tracked.

**Validation**:

- `./mvnw verify`
- `cd frontend && npm run build`
- `cd frontend && npm run test:ci`
- Public submission scenario.
- Private review and conversion scenario.
- Validation/error scenario.
- Privacy review.

**Primary risk**: Visitors may assume requests are confirmed unless public copy is precise.

**Demo/acceptance criteria**:

- Visitor can submit a request.
- Request appears in private admin.
- Request does not block dates.
- Admin can convert accepted request to reservation only when reservation rules pass.

## v0.4.0 - Owner Review Beta

**Goal**: Prepare a more realistic owner review with content, staging, and operational basics.

**Scope**:

- Final or near-final copy.
- Real optimized photos.
- Definitive languages.
- Basic SEO.
- Basic legal/privacy text.
- Staging domain.
- Real or semi-real test data.
- Backup procedure documented.
- Manual validation checklist.

**Out of scope**:

- Full revenue management.
- Channel automation unless separately approved.
- Advanced marketing analytics.
- Complex owner portals.

**Validation**:

- Frontend build/tests.
- Backend verification if backend changed.
- Staging smoke test.
- Manual owner-review script.
- Backup/restore dry run if real data is used.

**Primary risk**: Real content, legal review, and staging setup can take longer than code changes.

**Demo/acceptance criteria**:

- Owners can review realistic public content.
- Private admin supports the agreed alpha workflow.
- Staging environment can be shared safely.
- Known legal/privacy gaps are documented.

## v1.0.0 - Production Launch

**Goal**: Publish the real Ático y Jardín site and private management tool.

**Scope**:

- Final domain.
- HTTPS.
- Stable deployment.
- Functional backoffice.
- Backups.
- Real users.
- Real data.
- Smoke test.
- Operational documentation.
- Basic privacy/RGPD readiness.

**Out of scope**:

- Unapproved marketplace, payment, pricing, or channel-manager features.
- Broad platform expansion.

**Validation**:

- Backend verification.
- Frontend build/tests.
- Production smoke test.
- Backup and restore validation.
- Security/configuration review.
- Privacy/RGPD checklist.

**Primary risk**: Production readiness depends on operations, privacy, real data, and deployment discipline as much as application features.

**Demo/acceptance criteria**:

- Public site loads on final domain over HTTPS.
- Private users can manage real reservations.
- Backups are documented and validated.
- Launch checklist passes.
