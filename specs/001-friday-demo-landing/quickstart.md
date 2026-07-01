# Quickstart: Validate Friday Demo Landing

Use this after the v0.1.0 landing implementation. The current planning task does not run these build or visual checks because no app code is changed.

## Prerequisites

- Frontend dependencies installed with the existing npm workflow.
- Real photos and content may still be TODO placeholders for the first demo.

## Run The Frontend

```powershell
cd frontend
npm start
```

Open:

```text
http://localhost:4200
```

## Build Validation

```powershell
cd frontend
npm run build
```

Expected outcome: build succeeds without new dependency or package-lock changes.

## Desktop Review

1. Open the public route/home page.
2. Confirm the first viewport shows Ático y Jardín and a professional hero.
3. Confirm navigation reaches Ático, Jardín, location/contact, and any footer links.
4. Confirm no visible CatWorld branding appears in the public demo path.

## Mobile Review

1. Use a mobile viewport.
2. Confirm header/navigation, hero, apartment sections, galleries, CTA buttons, contact area, and footer fit without overlap or horizontal scrolling.
3. Confirm CTA labels remain readable.

## Apartment Review

1. Inspect Ático.
2. Confirm separate gallery, information, amenities, location treatment, and CTA.
3. Inspect Jardín.
4. Confirm separate gallery, information, amenities, location treatment, and CTA.

## Inquiry Honesty Review

Confirm the contact or inquiry UI:

- does not claim payment support;
- does not claim confirmed booking;
- does not claim automatic availability blocking;
- does not submit to a backend unless v0.3.0 scope has been implemented later.

## Demo Script Review

Read `docs/DEMO_SCRIPT.md` and walk the page in this order:

1. Home.
2. Ático.
3. Ático gallery.
4. Jardín.
5. Jardín gallery.
6. Location/contact.
7. Future private reservation management.
