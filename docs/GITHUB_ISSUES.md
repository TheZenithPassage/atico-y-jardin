# Proposed GitHub Issues

This backlog can be copied into GitHub manually. Do not create remote issues
from this document unless explicitly instructed.

## Milestone: v0.1.0 - Friday Demo Landing

### 1. [Product] Define Friday demo content

**Goal**: Collect or placeholder the minimum content needed for the Friday landing demo.

**Scope**: Apartment names, short copy, photos/placeholders, amenities placeholders, contact placeholders, location placeholders, and CTA labels.

**Out of scope**: Final legal copy, final SEO, full multilingual copy, backend changes.

**Done when**: `docs/CONTENT_INVENTORY.md` has every missing item marked TODO and implementation-ready placeholder decisions are recorded.

**Validation**: Review confirms no apartment facts are invented.

### 2. [Frontend] Build public landing shell

**Goal**: Add the public landing route/page shell for Ático y Jardín.

**Scope**: Public route strategy, header/nav, hero, footer, responsive baseline.

**Out of scope**: Backend APIs, booking requests, payments, deep private admin changes.

**Done when**: Opening the public URL shows Ático y Jardín with hero, nav, and footer.

**Validation**: `cd frontend && npm run build`; desktop/mobile shell review.

### 3. [Frontend] Add Ático apartment section

**Goal**: Present Ático clearly on the public landing.

**Scope**: Ático heading, copy placeholders, info placeholders, amenities placeholders, location treatment, CTA.

**Out of scope**: Real booking logic, backend persistence, Jardín section.

**Done when**: Ático has a complete section using confirmed content or TODO placeholders only.

**Validation**: Manual review against content inventory.

### 4. [Frontend] Add Jardín apartment section

**Goal**: Present Jardín clearly on the public landing.

**Scope**: Jardín heading, copy placeholders, info placeholders, amenities placeholders, location treatment, CTA.

**Out of scope**: Real booking logic, backend persistence, Ático section.

**Done when**: Jardín has a complete section using confirmed content or TODO placeholders only.

**Validation**: Manual review against content inventory.

### 5. [Frontend] Add separate galleries for both apartments

**Goal**: Give Ático and Jardín separate gallery experiences.

**Scope**: Asset folder conventions, placeholders or real images, main image plus grid behavior, mobile behavior, alt text.

**Out of scope**: Image CMS, upload management, advanced optimization pipeline.

**Done when**: Each apartment has its own gallery area and image data.

**Validation**: Desktop/mobile gallery review; alt text review.

### 6. [Frontend] Add location and contact sections

**Goal**: Add public location and contact/availability CTA areas.

**Scope**: Location block, contact block, optional visual/mock inquiry form, CTA copy.

**Out of scope**: Backend submission, automatic availability, payments.

**Done when**: Visitors have a clear contact/inquiry path that does not promise confirmation.

**Validation**: Inquiry honesty review.

### 7. [Frontend] Remove visible CatWorld branding from public demo

**Goal**: Ensure the public demo path looks like Ático y Jardín.

**Scope**: Public header, hero, footer, navigation, browser title/meta placeholders, public copy.

**Out of scope**: Deep backend/package/schema renames, inherited private screens unless visible in public demo.

**Done when**: The public landing path has no visible CatWorld/cat-boarding branding.

**Validation**: Manual review plus text search for likely visible strings.

### 8. [QA] Validate Friday demo on desktop and mobile

**Goal**: Confirm the landing is demoable before Friday.

**Scope**: Desktop pass, mobile pass, navigation pass, no-visible-CatWorld pass, build pass.

**Out of scope**: Full cross-browser matrix, automated visual regression.

**Done when**: Known demo flow works from home through contact/footer.

**Validation**: `cd frontend && npm run build`; manual demo checklist.

### 9. [Docs] Prepare Friday owner demo script

**Goal**: Align the verbal demo with implemented scope.

**Scope**: What to show, what to say, future reservations explanation, what not to promise.

**Out of scope**: Sales deck, final marketing copy.

**Done when**: Presenter can follow `docs/DEMO_SCRIPT.md` without contradicting the page.

**Validation**: Scripted walkthrough.

## Milestone: v0.2.0 - Private Reservation Management Alpha

### 1. [Architecture] Map CatWorld stay model to reservation model

**Goal**: Decide how inherited stay concepts become reservation concepts.

**Scope**: `Stay` -> `Reservation`, `Cat` -> `ApartmentUnit`, `Owner` -> `Guest`, `StayCat` -> optional `ReservationUnit`, `Vet` decision.

**Out of scope**: Coding before persistence strategy approval.

**Done when**: Approved implementation plan records migration/domain strategy.

**Validation**: Constitution check passes with no pending persistence blocker.

### 2. [Backend] Introduce apartment units

**Goal**: Represent Ático and Jardín as fixed units.

**Scope**: Backend model/persistence/reference data according to approved plan.

**Out of scope**: Generic property catalog.

**Done when**: Exactly two active units exist.

**Validation**: Flyway/backend tests.

### 3. [Backend] Introduce guests

**Goal**: Replace owner-centric private workflow with guest/customer records.

**Scope**: Guest model, validation, private API contracts.

**Out of scope**: Public account creation.

**Done when**: Private admin can use guest data for reservations.

**Validation**: Backend service/controller tests.

### 4. [Backend] Adapt stays to reservations

**Goal**: Implement reservation lifecycle and rules.

**Scope**: Create/edit/cancel reservations, date validation, overlap validation, cancellation behavior.

**Out of scope**: Public requests, payments, channel sync.

**Done when**: Active same-unit overlaps are rejected and cancelled reservations do not block dates.

**Validation**: `./mvnw verify`.

### 5. [Frontend] Adapt private navigation to reservations

**Goal**: Make the private UI reflect reservation workflows.

**Scope**: Navigation labels/routes/screens according to approved backend contracts.

**Out of scope**: Public landing changes.

**Done when**: Private users can navigate to guests, reservations, and calendar.

**Validation**: Frontend build and manual private navigation pass.

### 6. [Frontend] Adapt calendar to show reservations by apartment

**Goal**: Show reservations in one calendar with apartment colors and filters.

**Scope**: FullCalendar event mapping, colors, Ático/Jardín filters.

**Out of scope**: Resource timeline unless later approved.

**Done when**: Calendar displays and filters both units.

**Validation**: Frontend build/tests and manual calendar scenarios.

### 7. [QA] Validate reservation overlap rules

**Goal**: Prove the core double-booking protection works.

**Scope**: Same-unit overlap rejection, different-unit overlap allowance, cancelled reservation reuse, invalid date rejection.

**Out of scope**: Public request lifecycle.

**Done when**: Automated and manual overlap scenarios pass.

**Validation**: `./mvnw verify`; manual quickstart scenario.

## Milestone: v0.3.0 - Public Booking Request

### 1. [Architecture] Define public booking request flow

**Goal**: Approve the request lifecycle and privacy boundaries.

**Scope**: Public submission, backend persistence, private review, status lifecycle, manual conversion, notification decision.

**Out of scope**: Payment, automatic confirmation, automatic date blocking.

**Done when**: Approved implementation plan removes pending persistence/privacy blockers.

**Validation**: Constitution check passes.

### 2. [Backend] Add booking request persistence

**Goal**: Store public requests for private review.

**Scope**: Flyway migration, request model, DTOs, repository, service, controller, validation.

**Out of scope**: Confirmed reservation creation on public submit.

**Done when**: Valid requests persist with status `NEW`.

**Validation**: `./mvnw verify`.

### 3. [Frontend] Connect public inquiry form

**Goal**: Submit public inquiry/request data to the backend.

**Scope**: Form fields, validation hints, submit state, review-pending response copy.

**Out of scope**: Payment, automatic availability display.

**Done when**: Visitor can submit a valid request and sees honest confirmation copy.

**Validation**: Frontend build/tests and manual public submission.

### 4. [Admin] Review and convert booking requests

**Goal**: Let admins review requests and convert accepted ones to reservations.

**Scope**: Private request list/detail, status actions, conversion using reservation validation.

**Out of scope**: Automatic conversion.

**Done when**: Accepted request can become a reservation only if reservation rules pass.

**Validation**: Backend tests and manual conversion scenario.

### 5. [QA] Validate public request lifecycle

**Goal**: Confirm requests remain separate from reservations until manual conversion.

**Scope**: Valid request, invalid request, private review, conversion, privacy review, no date blocking before conversion.

**Out of scope**: Full spam/captcha implementation unless separately approved.

**Done when**: Manual and automated request lifecycle checks pass.

**Validation**: `./mvnw verify`; `cd frontend && npm run build && npm run test:ci`; manual quickstart.
