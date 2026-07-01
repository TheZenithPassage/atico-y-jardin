# Tasks: Friday Demo Landing

**Input**: Design documents from `specs/001-friday-demo-landing/`

**Prerequisites**: `spec.md`, `plan.md`, `research.md`, `data-model.md`, `contracts/public-landing.md`, `quickstart.md`, `docs/CONTENT_INVENTORY.md`, `docs/DEMO_SCRIPT.md`

**Tests**: Build and responsive validation are required after implementation. No backend, database, payment, or public booking request tests are required for v0.1.0.

## Phase 1 - Content Placeholders And Information Architecture

| ID | Description | Files likely affected | Dependencies | Done when | Validation |
|----|-------------|----------------------|--------------|-----------|------------|
| [X] L001 | Define the non-persistent `ApartmentPresentation` data shape with fields for id, display name, headline, summary, description, capacity, bedrooms, bathrooms, amenities, gallery, location, and CTA. | `frontend/src/app/**`, likely a public landing content/model file | None | A single local data shape can represent both Ático and Jardín without backend or persistence. | Review against `specs/001-friday-demo-landing/data-model.md`. |
| [X] L002 | Add TODO placeholders for all missing Ático content: headline, description, capacity, bedrooms, bathrooms, amenities, location, gallery captions, and CTA copy. | `frontend/src/app/**`, `frontend/src/assets/**` | L001 | Ático can render without invented facts, and every missing fact is visibly traceable to TODO content/images. | Compare with `docs/CONTENT_INVENTORY.md`; no invented facts. |
| [X] L003 | Add TODO placeholders for all missing Jardín content: headline, description, capacity, bedrooms, bathrooms, amenities, location, gallery captions, and CTA copy. | `frontend/src/app/**`, `frontend/src/assets/**` | L001 | Jardín can render without invented facts, and every missing fact is visibly traceable to TODO content/images. | Compare with `docs/CONTENT_INVENTORY.md`; no invented facts. |
| [X] L004 | Decide and encode the section order: header, hero, brand intro, Ático, Ático gallery/info/amenities/location/CTA, Jardín, Jardín gallery/info/amenities/location/CTA, shared location/contact, footer. | `frontend/src/app/**` | L001 | Page structure follows `contracts/public-landing.md`. | Manual page review against the contract. |
| [X] L005 | Decide initial CTA labels for hero, apartment CTAs, and contact/inquiry area using honest inquiry/contact language. | `frontend/src/app/**` | L002, L003 | CTAs invite contact or availability inquiry without promising confirmed booking. | Inquiry honesty review from `quickstart.md`. |
| [X] L006 | Decide image folder conventions for separate apartment galleries, such as one directory for Ático and one for Jardín under the existing Angular asset path. | `frontend/src/assets/**` | L001 | Asset paths clearly separate Ático images/placeholders from Jardín images/placeholders. | Manual file/path review; no shared ambiguous gallery directory for both apartments. |

## Phase 2 - Public Landing Shell

| ID | Description | Files likely affected | Dependencies | Done when | Validation |
|----|-------------|----------------------|--------------|-----------|------------|
| [X] L007 | Define the public route strategy so the root or selected public route opens the landing while inherited private admin/login remains available but secondary. | `frontend/src/app/app.routes.ts`, related routing files | L004 | Opening the public URL shows the landing first; private routes are not accidentally removed. | Manual route review and local navigation pass. |
| [X] L008 | Build the public header/nav with Ático y Jardín identity and simple links to apartment, location/contact, and footer sections. | `frontend/src/app/**`, component SCSS | L007 | Header is visible, responsive, and free of CatWorld branding. | Desktop/mobile navigation pass. |
| [X] L009 | Build the hero with professional visual presentation, brand name, short value proposition, and primary CTA. | `frontend/src/app/**`, `frontend/src/assets/**`, component SCSS | L008, L005 | First viewport communicates Ático y Jardín and hints at the rest of the page. | Desktop and mobile first-viewport review. |
| [X] L010 | Build the footer with brand name, contact placeholders, legal placeholders, and any secondary links. | `frontend/src/app/**`, component SCSS | L008 | Footer uses Ático y Jardín identity and TODO labels for missing legal/contact content. | Manual footer review against content inventory. |
| [X] L011 | Establish responsive layout baseline for page bands, typography, spacing, and section anchors without creating a broad design system. | `frontend/src/app/**`, component SCSS, maybe `frontend/src/styles.scss` | L008, L009, L010 | Layout adapts at mobile/tablet/desktop without overlap or horizontal scrolling. | Responsive review from `quickstart.md`. |

## Phase 3 - Apartment Sections

| ID | Description | Files likely affected | Dependencies | Done when | Validation |
|----|-------------|----------------------|--------------|-----------|------------|
| [X] L012 | Implement the Ático section using Ático-specific presentation data, heading, summary, info fields, and CTA. | `frontend/src/app/**` | L002, L011 | Ático has its own clearly labeled section and does not reuse Jardín content. | Apartment review for Ático. |
| [X] L013 | Implement the Jardín section using Jardín-specific presentation data, heading, summary, info fields, and CTA. | `frontend/src/app/**` | L003, L011 | Jardín has its own clearly labeled section and does not reuse Ático content. | Apartment review for Jardín. |
| [X] L014 | Add amenities display for each apartment using confirmed data or TODO placeholders only. | `frontend/src/app/**` | L012, L013 | Amenities are visually scannable and separated per apartment. | Review for no invented amenities. |
| [X] L015 | Add capacity/info cards or compact info rows for each apartment with TODO placeholders for unknown capacity, bedrooms, and bathrooms. | `frontend/src/app/**` | L012, L013 | Info blocks are polished but clearly pending where facts are missing. | Review against content inventory. |
| [X] L016 | Add CTA area per apartment with honest inquiry/contact wording. | `frontend/src/app/**` | L005, L012, L013 | Each apartment has a CTA that does not promise booking confirmation. | Inquiry honesty review. |

## Phase 4 - Galleries

| ID | Description | Files likely affected | Dependencies | Done when | Validation |
|----|-------------|----------------------|--------------|-----------|------------|
| [X] L017 | Create image directory conventions and placeholder files or references for Ático gallery. | `frontend/src/assets/**`, `frontend/src/app/**` | L006, L012 | Ático gallery assets are separate and replaceable. | Asset path review. |
| [X] L018 | Create image directory conventions and placeholder files or references for Jardín gallery. | `frontend/src/assets/**`, `frontend/src/app/**` | L006, L013 | Jardín gallery assets are separate and replaceable. | Asset path review. |
| [X] L019 | Implement main image plus supporting grid behavior for each apartment gallery. | `frontend/src/app/**`, component SCSS | L017, L018 | Each apartment has a primary image slot and supporting image layout. | Desktop apartment gallery review. |
| [X] L020 | Implement mobile gallery behavior that avoids overlap, tiny targets, and horizontal page overflow. | `frontend/src/app/**`, component SCSS | L019 | Galleries remain usable on mobile. | Mobile review from `quickstart.md`. |
| [X] L021 | Add alt text requirements to gallery data and ensure placeholders do not invent real room details. | `frontend/src/app/**` | L019 | Every image entry has alt text or TODO(images) placeholder alt. | Accessibility/content review. |

## Phase 5 - Location/Contact

| ID | Description | Files likely affected | Dependencies | Done when | Validation |
|----|-------------|----------------------|--------------|-----------|------------|
| [X] L022 | Add apartment-specific or shared location block using TODO address/location placeholders when exact details are unavailable. | `frontend/src/app/**` | L012, L013 | Location content is useful but does not invent exact address. | Review against `docs/CONTENT_INVENTORY.md`. |
| [X] L023 | Add contact CTA block with TODO contact details and preferred contact method placeholders. | `frontend/src/app/**` | L005, L022 | Visitors see a clear way to contact or inquire, with pending real details marked. | Contact section review. |
| [X] L024 | Add inquiry form visual/mock if chosen, including apartment, date, guest contact, and message fields without backend submission. | `frontend/src/app/**` | L023 | Form is visually complete but clearly does not confirm reservations or block dates. | Inquiry honesty review. |
| [X] L025 | Ensure no backend requirement is introduced for v0.1.0 contact/inquiry behavior. | `frontend/src/app/**`, backend untouched | L024 | No new API contract, backend controller, service, DTO, migration, or persistence change exists for the landing. | `git diff --name-only` review confirms frontend/docs only for this release slice. |

## Phase 6 - Public Rebranding

| ID | Description | Files likely affected | Dependencies | Done when | Validation |
|----|-------------|----------------------|--------------|-----------|------------|
| [X] L026 | Remove visible CatWorld references from the public landing UX, including header, footer, hero, public nav, public empty states, and visible public copy. | `frontend/src/app/**` | L007-L025 | Public demo path displays Ático y Jardín and no CatWorld/cat-boarding labels. | `rg -n "CatWorld|catworld|cat boarding|cat-boarding" frontend/src` plus manual public-page review. |
| [X] L027 | Update browser title/meta placeholders for the public demo. | `frontend/src/index.html`, route/title handling if present | L026 | Browser title identifies Ático y Jardín or TODO public title. | Browser tab/title review. |
| [X] L028 | Review all public copy placeholders for tone, honesty, and missing content markers. | `frontend/src/app/**`, `docs/CONTENT_INVENTORY.md` | L026 | Public copy is professional and does not invent property facts. | Copy review against content inventory. |

## Phase 7 - Demo Validation

| ID | Description | Files likely affected | Dependencies | Done when | Validation |
|----|-------------|----------------------|--------------|-----------|------------|
| [X] L029 | Run desktop demo pass through home, Ático, Ático gallery, Jardín, Jardín gallery, location/contact, and footer. | Running frontend | L028 | Desktop page is polished and demoable. | Manual desktop pass recorded in implementation notes. |
| [X] L030 | Run mobile demo pass through the same flow. | Running frontend | L028 | Mobile page has no overlap, no horizontal overflow, and readable CTAs. | Manual mobile pass recorded in implementation notes. |
| [X] L031 | Run navigation pass for header links, section anchors, CTA links/buttons, and preserved private login/admin access. | Running frontend | L029, L030 | Navigation works and private admin is not accidentally broken. | Manual navigation pass. |
| [X] L032 | Run no-visible-CatWorld pass on the public demo path. | Running frontend, `frontend/src/**` | L029, L030 | Public demo path has no visible CatWorld branding. | Manual review plus text search for likely strings. |
| [X] L033 | Run frontend build. | `frontend/` | L029-L032 | Build succeeds. | `cd frontend && npm run build`. |
| [X] L034 | Run demo script pass against `docs/DEMO_SCRIPT.md`. | `docs/DEMO_SCRIPT.md`, running frontend | L033 | Presenter can follow the script without contradicting the page. | Manual scripted walkthrough. |

## Dependencies & Execution Order

- Phase 1 defines content shape and placeholders before UI layout.
- Phase 2 creates the shell that apartment sections plug into.
- Phase 3 and Phase 4 can partly overlap after the data shape and shell exist.
- Phase 5 depends on initial apartment content and CTA labels.
- Phase 6 should run after visible public elements exist.
- Phase 7 is the final validation gate before the Friday demo.

## First Verifiable Increment

Complete L001-L011, then open the landing route and confirm the public shell displays Ático y Jardín with hero, navigation, footer, and responsive baseline.

## Notes

- Do not implement backend booking, public request persistence, payments, or channel synchronization in v0.1.0.
- Do not invent apartment facts. Use TODO placeholders until content is provided.
- Do not add dependencies without a separate approved architecture and technology assessment.
- Keep changes narrow enough that the Friday demo remains the priority.

## Implementation Notes

- Desktop pass: in-app browser at 1280x720 confirmed hero, apartment sections, galleries, location/contact, footer, no horizontal overflow, and no visible CatWorld branding.
- Tablet pass: in-app browser at 768x1024 confirmed single-column hero behavior, usable galleries, no horizontal overflow, and no visible CatWorld branding.
- Mobile pass: in-app browser at 390x844 confirmed wrapped public navigation, readable CTAs, no page overflow, and a first-viewport hint of the next section.
- Navigation pass: header Ático/Jardín/location/contact links update fragments and scroll below the sticky header; `/login` loads the private access page; `/dashboard` redirects unauthenticated users to `/login?returnUrl=%2Fdashboard`.
- Inquiry honesty pass: public copy states that v0.1.0 does not confirm reservations, accept payment, or block availability.
- Build pass: `cd frontend && npm run build` succeeds. Angular reports the existing `calendar-page.scss` component-style budget warning.
