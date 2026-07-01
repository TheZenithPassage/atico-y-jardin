# Feature Specification: Friday Demo Landing

**Feature Branch**: `feature/friday-demo-landing`

**Created**: 2026-06-30

**Input**: Plan a professional public landing page for Ático y Jardín to demo on Friday, 2026-07-03, without implementing the application yet.

## User Scenarios, Technical Outcomes & Testing *(mandatory)*

### User Story 1 - Visitor Understands The Offer (Priority: P1)

A potential guest opens the public website and quickly understands that Ático y Jardín presents two separate tourist apartments under one brand.

**Why this priority**: The Friday demo must make the public offer clear before any private management functionality matters.

**Independent Test**: Open the home page and verify that the brand, two apartment sections, and contact/availability CTA are visible without CatWorld branding.

**Acceptance Scenarios**:

1. **Given** the public home page, **When** a visitor lands on it, **Then** they see the Ático y Jardín brand, a professional hero, and clear navigation.
2. **Given** the public home page, **When** a visitor scans the page, **Then** Ático and Jardín are presented as two distinct apartments within one website.
3. **Given** missing final content, **When** placeholders are used, **Then** the placeholders look intentional and do not invent facts.

---

### User Story 2 - Visitor Reviews Each Apartment Separately (Priority: P1)

A visitor can inspect Ático and Jardín independently, with separate galleries, information, amenities, location details, and CTA areas.

**Why this priority**: The owners need to see that both apartments receive clear, separate treatment.

**Independent Test**: Navigate to each apartment section and confirm each has its own gallery, information block, amenities, location treatment, and CTA.

**Acceptance Scenarios**:

1. **Given** the Ático section, **When** a visitor opens it, **Then** they see Ático-specific image placeholders or real images, copy placeholders, amenities placeholders, and a contact CTA.
2. **Given** the Jardín section, **When** a visitor opens it, **Then** they see Jardín-specific image placeholders or real images, copy placeholders, amenities placeholders, and a contact CTA.
3. **Given** a mobile viewport, **When** the visitor scrolls through either apartment, **Then** content remains readable and galleries remain usable.

---

### User Story 3 - Visitor Can Contact Or Request Availability (Priority: P1)

A visitor has a clear initial path to contact the manager or request availability without the page pretending to provide a real booking engine.

**Why this priority**: The Friday demo needs a conversion path, but confirmed reservations and availability logic are out of scope.

**Independent Test**: Review the contact/availability section and confirm it is visually complete, honest about inquiry status, and does not promise payment or automatic booking.

**Acceptance Scenarios**:

1. **Given** the contact section, **When** a visitor chooses a CTA, **Then** the page offers contact or inquiry actions using TODO contact details or a visual/mock form.
2. **Given** no backend is connected for v0.1.0, **When** the form is displayed, **Then** the UI does not imply that dates are blocked, payments are accepted, or reservations are confirmed automatically.

---

### User Story 4 - Owners See A Professional Demo (Priority: P2)

The property owners can view a professional first demo that explains the public website now and the private reservation-management roadmap next.

**Why this priority**: The demo must build confidence while staying honest about what is and is not implemented.

**Independent Test**: Follow `docs/DEMO_SCRIPT.md` while using the landing and confirm the talking points match the visible page.

**Acceptance Scenarios**:

1. **Given** the demo script, **When** the presenter walks through the home, apartment sections, galleries, location/contact, and future roadmap, **Then** there are no mismatches between the script and page scope.
2. **Given** a question about reservations, payments, or external channels, **When** the presenter answers, **Then** the answer frames those features as planned later releases, not Friday demo promises.

### Edge Cases

- Real apartment photos may not be available before implementation; placeholders must be elegant, clearly replaceable, and tracked as TODO(images).
- Exact address or location details may be unavailable; the page must use approximate or placeholder location copy only when marked TODO(content).
- Amenities, capacity, bedrooms, bathrooms, and legal details must not be invented.
- Existing login/admin routes may remain available but must not distract from the public landing.
- The inherited application may still contain private CatWorld routes; public UX must not show visible CatWorld branding in the demo path.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: The public landing MUST present the product as `Ático y Jardín`.
- **FR-002**: The public landing MUST include a professional hero, simple navigation, brand presentation, apartment sections, contact/availability CTA, and footer.
- **FR-003**: The public landing MUST present Ático and Jardín as clearly separated apartments.
- **FR-004**: Each apartment section MUST have its own gallery area.
- **FR-005**: Each apartment section MUST have its own information, amenities, location treatment, and CTA.
- **FR-006**: The page MUST support mobile, tablet, and desktop layouts.
- **FR-007**: The public demo path MUST not show visible CatWorld branding.
- **FR-008**: The contact or availability form MAY be visual/mock for v0.1.0, but MUST not imply confirmed booking, payment, or automatic date blocking.
- **FR-009**: The landing MAY use real images or elegant placeholders, but placeholders MUST be clearly replaceable and tracked.
- **FR-010**: Login/admin access MAY remain hidden or secondary, but MUST not distract from the public landing.

### Technical Requirements

- **TR-001**: The feature MUST use the existing Angular, TypeScript, SCSS, and Angular Material/CDK frontend stack.
- **TR-002**: The feature MUST not require backend API, database, schema, migration, payment, or external-channel changes for v0.1.0.
- **TR-003**: Validation MUST include frontend build and responsive visual review after implementation.
- **TR-004**: Implementation MUST not change package dependencies or package locks unless a later approved plan explicitly requires it.
- **TR-005**: Implementation MUST preserve existing private login/admin behavior unless a task explicitly owns a scoped navigation change.

### Scope Boundaries

- **SB-001**: Feature MUST remain within the Ático y Jardín product direction: a public website and future private management tool for the Ático and Jardín tourist apartments.
- **SB-002**: Feature MUST distinguish implemented behavior from assumptions, exclusions, planned future behavior, and unresolved product or architectural questions.
- **SB-003**: Feature MUST NOT introduce generic booking-marketplace, payment-platform, channel-manager, pricing-engine, multi-owner, or broad platform claims without explicit requirements and approval.

### Out of Scope

- Real booking engine or availability calculation.
- Payments or deposits.
- Airbnb, Booking.com, iCal, or channel-manager synchronization.
- SEO beyond basic title/meta placeholders.
- Full multilingual implementation.
- Backend refactor or deep entity renaming.
- Schema changes or migrations.
- Private reservation-management implementation.
- Public booking-request persistence.

### Open Questions

- No blocking questions for planning. Real content, images, address/location, contact details, languages, and legal copy are tracked in `docs/CONTENT_INVENTORY.md`.

### Key Entities

- **ApartmentPresentation**: Non-persistent presentation data for one apartment.
- **ApartmentGalleryImage**: Image metadata for one apartment gallery.
- **Amenity**: Label and optional icon/category for a displayed amenity.
- **LocationInfo**: Displayable location copy, map/link placeholder, and accuracy level.
- **ContactInfo**: Public contact details and CTA labels.
- **BookingInquiryDraft**: Conceptual visual-only inquiry model for a mock form in v0.1.0.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: Public home page review confirms no visible CatWorld branding in the landing demo path.
- **SC-002**: Review confirms Ático and Jardín each have separate galleries, information, amenities, location treatment, and CTA.
- **SC-003**: Responsive review confirms the landing is usable on mobile, tablet, and desktop.
- **SC-004**: Frontend build passes after implementation.
- **SC-005**: Review confirms no visual promise of payment, confirmed booking, or automatic availability blocking.
- **SC-006**: Review confirms existing login/admin behavior is not accidentally broken or made the primary public experience.

## Assumptions

- Real content may arrive after the first implementation pass; TODO placeholders are acceptable for v0.1.0.
- Spanish is the primary public-language baseline for the first demo. English can be planned or added if it does not risk the Friday demo.
- The first CTA may be contact-first or inquiry-first, but must remain honest that it is not a confirmed reservation.
