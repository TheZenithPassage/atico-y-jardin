# Contract: Public Navbar Anchors

This contract defines the visible `/` navbar and anchor behavior for issue #3.

## Public Navbar Contract

- The unauthenticated public navbar must continue to look like the current accepted navbar rather than a redesigned navigation system.
- The navbar must expose public entries labeled `Ático`, `Jardín`, `Ubicación`, and `Contacto`.
- The navbar must expose `Acceso privado` as an available, visually discreet private access entry.
- User-facing navbar labels must come from the existing internationalization system.

## Anchor Navigation Contract

- `Ático` must target the public landing section with the `atico` anchor.
- `Jardín` must target the public landing section with the `jardin` anchor.
- `Ubicación` must target the public landing section with the `location` anchor.
- `Contacto` must target the public landing section with the `contact` anchor.
- Activating public section links from `/` must navigate or scroll to the matching section without introducing separate section routes.
- Loading `/` directly with one of the supported fragments should leave the target section present in the rendered page.

## Private Access Contract

- `Acceso privado` must keep the existing private access destination.
- The implementation must not change auth guards, login behavior, admin routes, backend endpoints, or private domain behavior.

## Mobile Contract

- The public navbar must remain usable on a mobile viewport.
- The navbar must not overlap or break the hero during the Friday demo mobile review.

## Scope Guard Contract

- No backend, database, Flyway, authentication, authorization, admin-domain, reservation, calendar, iCal, OTA, payment, dependency, or new language behavior is introduced.
- No full navbar redesign or public route redesign is performed.
