# Data Model

No new domain entities, persistence model, API payloads, schema changes, browser storage, external contracts, or structured feature data are introduced.

The existing local public landing presentation interfaces may remain in place:

- `PublicLandingTranslations`
- `ApartmentPresentation`
- `ApartmentGalleryImage`
- `Amenity`
- `LocationInfo`
- `ContactInfo`
- `BookingInquiryDraftLabels`

Implementation should clean values rendered from these structures and may remove fields only when they are no longer rendered and no other source depends on them. No backend or database model changes apply.
