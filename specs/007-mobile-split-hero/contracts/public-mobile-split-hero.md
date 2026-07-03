# Public Mobile Split Hero Contract

## Surface

The public `/` landing page hero below the existing navbar.

## Required Visible Behavior

- The first public hero viewport presents Ático and Jardín as two distinct apartment choices.
- Each apartment choice has:
  - the apartment name (`Ático` or `Jardín`);
  - one local image sourced from the repository's existing landing assets;
  - short, elegant copy;
  - a CTA that points to the matching public apartment section.
- The hero includes an availability/contact-intent CTA only when it links to the existing contact section and does not imply real-time availability, booking confirmation, payment, or reservation logic.
- The hero must not replace the existing navbar design.

## Anchor Contract

| CTA | Expected target | Expected behavior |
|-----|-----------------|-------------------|
| `Ver Ático` | `#atico` | Moves to the Ático public section |
| `Ver Jardín` | `#jardin` | Moves to the Jardín public section |
| Availability/contact-intent CTA | `#contact` | Moves to contact/inquiry content without starting booking or reservation logic |

## Media Contract

- Ático hero media must use an existing local asset under `frontend/public/landing/atico/`.
- Jardín hero media must use an existing local asset under `frontend/public/landing/jardin/`.
- External image URLs, network image fetches, or new remote-media dependencies are out of scope.

## Copy Contract

- User-facing text follows the existing i18n system.
- The product name `Ático y Jardín` and apartment names `Ático` and `Jardín` remain exact.
- Copy may invite visitors to consult or ask about availability by direct contact.
- Copy must not promise live availability, confirmed booking, automatic reservation, payment, OTA/iCal behavior, or availability blocking.

## Verification

- Unit tests verify visible apartment names, local image sources, and CTA targets.
- Manual checks at approximately 360px, 390px, and 430px verify first-viewport polish, legibility, image framing, and non-overlap.
- Desktop sanity check verifies both apartment choices and CTAs remain usable.
