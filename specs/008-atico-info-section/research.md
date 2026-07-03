# Research

No researchable unknowns or material decision blockers were identified for issue #5.

## Decisions

- **Decision**: Use the existing Angular public landing component, public landing translations, and component SCSS for the Ático information polish.
  - **Rationale**: Repository inspection shows `PublicLandingPage` already owns the public apartment sections, hero CTA anchors, translation-driven copy, and responsive styling. The issue asks for a focused public Ático information polish and explicitly excludes backend, availability, booking, reservation, price, and integration work.
  - **Alternatives considered**: A new component or new dependency was not considered necessary because the existing component already provides the relevant section and anchor structure. A gallery-specific implementation was excluded by the issue scope.

- **Decision**: Treat missing Ático hard facts as neutral copy, not as blockers.
  - **Rationale**: Issue #5 explicitly permits safe wording when exact details are missing and forbids invented capacity, room count, exact address, amenities, prices, or policies.
  - **Alternatives considered**: Asking for exact content would delay a demo-safe slice even though the issue already defines a safe fallback. Inventing details is prohibited.
