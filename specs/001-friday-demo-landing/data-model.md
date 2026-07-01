# Data Model: Friday Demo Landing

These models are conceptual and non-persistent for v0.1.0. They may be represented as TypeScript data, component inputs, or equivalent local content structures during implementation.

## ApartmentPresentation

**Purpose**: Display one apartment on the public landing.

**Fields**:

- `id`: Stable identifier, `atico` or `jardin`.
- `displayName`: `Ático` or `Jardín`.
- `headline`: TODO(content).
- `summary`: TODO(content).
- `description`: TODO(content).
- `capacityLabel`: TODO(content).
- `bedroomsLabel`: TODO(content).
- `bathroomsLabel`: TODO(content).
- `amenities`: List of Amenity.
- `gallery`: List of ApartmentGalleryImage.
- `location`: LocationInfo.
- `ctaLabel`: Contact or availability CTA text.

**Validation rules**:

- Do not invent capacity, bedrooms, bathrooms, amenities, or address.
- Each apartment must have separate gallery and content placeholders.
- Public copy must not mention confirmed booking if only inquiry/contact exists.

## ApartmentGalleryImage

**Purpose**: Display one image or placeholder in an apartment gallery.

**Fields**:

- `src`: Asset path or placeholder path.
- `alt`: Descriptive alt text or TODO(images) placeholder alt.
- `caption`: Optional caption, TODO(content).
- `isPrimary`: Whether this is the main image for the apartment.

**Validation rules**:

- Alt text must identify the apartment and visible content when real images exist.
- Placeholder alt text must not describe invented room details.
- Each apartment should have at least one primary image slot.

## Amenity

**Purpose**: Display a feature or service for one apartment.

**Fields**:

- `label`: TODO(content).
- `icon`: Optional icon key if using approved UI icons.
- `category`: Optional grouping such as comfort, kitchen, outdoor, connectivity.

**Validation rules**:

- Amenities must be verified before being presented as facts.
- Example amenities must be marked as placeholders until confirmed.

## LocationInfo

**Purpose**: Display apartment-specific or shared location information.

**Fields**:

- `title`: Location label.
- `description`: TODO(content).
- `addressDisplay`: TODO(owner/user) exact or approximate location.
- `mapLink`: TODO(owner/user) optional map URL.
- `accuracy`: `exact`, `approximate`, or `pending`.

**Validation rules**:

- Do not publish an exact address unless provided and approved.
- If location is pending, the page must use TODO copy rather than invented address details.

## ContactInfo

**Purpose**: Display public contact and CTA data.

**Fields**:

- `displayName`: TODO(owner/user).
- `email`: TODO(owner/user).
- `phone`: TODO(owner/user).
- `preferredContactMethod`: TODO(owner/user).
- `ctaPrimary`: CTA label.
- `ctaSecondary`: Optional secondary CTA label.

**Validation rules**:

- Do not expose private contact details unless approved.
- CTA language must say inquiry/contact, not confirmed booking.

## BookingInquiryDraft

**Purpose**: Conceptual visual-only inquiry form for v0.1.0.

**Fields**:

- `requestedApartment`: `atico`, `jardin`, or `either`.
- `checkIn`: Visual date field only for v0.1.0.
- `checkOut`: Visual date field only for v0.1.0.
- `guestName`: Visual field.
- `guestContact`: Visual field.
- `message`: Visual field.

**Validation rules**:

- Visual/mock only in v0.1.0.
- Must not block availability or create a confirmed reservation.
- Must not promise payment or automatic confirmation.
