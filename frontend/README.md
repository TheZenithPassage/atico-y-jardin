# Ático y Jardín Frontend

Angular frontend for Ático y Jardín, currently in planning/demo adaptation from
the inherited CatWorld application.

## Current Status

Implemented:

- Inherited authenticated application shell.
- Inherited owner/cat/vet/stay screens from CatWorld.
- Inherited FullCalendar integration.
- Angular Material foundation for interactive UI components and theming.
- Existing English/Spanish internationalization infrastructure.

Planned:

- Public landing page for Ático y Jardín.
- Clearly separated Ático and Jardín sections.
- Separate galleries and information per apartment.
- Location/contact and availability inquiry CTA.
- Later private reservation management replacing inherited stay workflows.
- Later public booking request form connected to backend.

## Run Locally

From `frontend/`:

```bash
npm install
npm start
```

The development server runs at:

```text
http://localhost:4200
```

The local backend is expected at:

```text
http://localhost:8080/api
```

The API base URL is configured under:

```text
src/environments/
```

## Validation

```bash
npm run format
npm run format:check
npm run build
npm run test:ci
```

For the v0.1.0 landing implementation, at minimum run the frontend build and
manual responsive demo checks defined in
`specs/001-friday-demo-landing/quickstart.md`.

## Desired Structure Direction

The current structure remains:

```text
src/app/
  core/       authentication, configuration and infrastructure
  features/   feature-specific screens and logic
  layout/     application shell and navigation
  shared/     reusable UI and helpers
```

The target direction is:

- Public landing experience: public route/page/components with local
  presentation data and static gallery assets for v0.1.0.
- Private admin experience: inherited authenticated shell adapted later toward
  guests, reservations, calendar, booking requests, and users.
- Shared UI: small, concrete helpers only; do not create a broad design-system
  package.

## UI Foundation

Angular Material and Angular CDK remain the default foundation for interactive
UI components, theming, and shared UI behavior. SCSS remains responsible for
public landing layout, apartment presentation, responsive composition, and
product-specific styling.

FullCalendar remains the planned calendar integration for private reservation
management. For v0.2.0, the recommended calendar approach is one calendar with
colors and filters for Ático and Jardín.

During the transition, inherited native controls and CatWorld screens may
remain until their owning feature tasks replace them. New public landing work
should not rename or delete private CatWorld functionality unless a transition
task explicitly owns that change.

## Production

The production build is served by Nginx through Docker Compose. Browser
requests to `/api` are proxied to the Spring Boot backend.

See the [root README](../README.md) for project status, startup instructions,
release plan, and transition guidance.
