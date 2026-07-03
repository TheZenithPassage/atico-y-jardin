# Contract: Public Landing Cleanup

This contract defines the visible `/` behavior for issue #2.

## Visible Text Contract

- `/` must not visibly render `CatWorld`, cat-boarding copy, or inherited private-domain labels as public landing content.
- `/` must not visibly render `TODO`, `debug`, build/version labels, scaffold labels, or placeholder instructions.
- Copy may remain honest about future availability/contact behavior, but it must read as public-facing product copy rather than implementation notes.
- Ático y Jardín must remain the public product identity.

## Apartment Concept Contract

- Ático remains visible as one public apartment concept.
- Jardín remains visible as one public apartment concept.
- The page must not collapse both apartments into a generic rental-platform concept.
- Public copy must not invent confirmed capacity, amenities, address, license, payment, or reservation facts.

## Navigation And Access Contract

- The existing navbar structure remains recognizable unless visible text cleanup is required.
- The private/admin access entry point remains technically available.
- The cleanup must not change auth guards, admin routes, backend endpoints, or private domain behavior.

## Scope Guard Contract

- No backend, database, Flyway, authentication, authorization, admin-domain, reservation, iCal, OTA, payment, dependency, or new language behavior is introduced.
- No full visual redesign is performed.
- Any CatWorld references that remain in inherited private/admin code or documentation are outside this issue unless they become visible on `/`.
