# Contract: Public Landing

This contract defines the v0.1.0 public landing behavior and content boundaries.

## Page Structure Contract

The public landing must include:

1. Header with Ático y Jardín identity and simple navigation.
2. Hero with professional first impression.
3. Brand introduction.
4. Ático section.
5. Ático gallery.
6. Ático information.
7. Ático amenities.
8. Ático location treatment.
9. Ático CTA.
10. Jardín section.
11. Jardín gallery.
12. Jardín information.
13. Jardín amenities.
14. Jardín location treatment.
15. Jardín CTA.
16. Shared location block if appropriate.
17. Contact or availability inquiry CTA.
18. Footer.

## Apartment Separation Contract

- Ático and Jardín must be distinguishable by heading, gallery, content, and CTA.
- No section may imply that one apartment's amenities, capacity, or photos apply to the other unless confirmed.
- Missing details must use TODO placeholders during implementation planning and be replaced before production.

## Gallery Contract

- Each apartment has its own image collection.
- Each apartment has one primary image slot and supporting grid/list behavior.
- Real images require descriptive alt text.
- Placeholder images must not invent apartment details.
- Mobile layout must remain usable without horizontal overflow.

## Inquiry/Contact Contract

- v0.1.0 may show contact links, a visual/mock form, or both.
- The UI must not say that a submitted inquiry is a confirmed reservation.
- The UI must not claim online payment, automatic availability lock, or external channel synchronization.
- Public inquiry persistence belongs to v0.3.0.

## Public Rebranding Contract

- The public demo path must display `Ático y Jardín`.
- The public demo path must not display visible `CatWorld`, cat-boarding, owner/cat/stay/vet labels, or cat-oriented screenshots.
- Inherited private admin routes may remain present if not visible or distracting in the public landing.

## Responsive Contract

- Desktop: hero, apartment sections, galleries, contact, and footer are polished and scannable.
- Tablet: navigation and two-column content collapse gracefully.
- Mobile: no text overlap, no horizontal scrolling, readable CTA buttons, usable galleries.
