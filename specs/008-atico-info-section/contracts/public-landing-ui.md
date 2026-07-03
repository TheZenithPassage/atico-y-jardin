# Public Landing UI Contract

## Ático Section

- The public landing page at `/` exposes an element with `id="atico"`.
- The Ático section visibly identifies the apartment as `Ático`.
- The section presents concise descriptive copy and a small scannable highlight set.
- The section remains visually distinct from surrounding landing sections on mobile.

## Anchor Behavior

- Hero entry points for Ático use `href="#atico"`.
- Public navbar entry points for Ático target `/#atico` and route/scroll to the same `id="atico"` section through the existing app-shell navigation behavior.
- The `#atico` target remains stable for browser hash navigation and manual smoke checks.

## Copy Guardrails

- Public copy must not present unprovided hard facts as real.
- Forbidden hard facts for this issue include exact capacity, number of rooms, exact address, specific amenities, prices, policies, availability, booking confirmation, payment, iCal, OTA, or automatic reservation behavior.
- Safe neutral wording may describe the Ático generally as a bright or comfortable space and may direct visitors to ask for more information by consultation.

## Gallery Boundary

- The issue may preserve or style an existing simple image slot or placeholder.
- The issue must not introduce a new full gallery, carousel, uploaded image set, image management workflow, backend image API, or gallery-specific dependency.
