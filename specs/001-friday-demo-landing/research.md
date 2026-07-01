# Research: Friday Demo Landing

## Decision: Build the landing inside the existing Angular frontend

**Rationale**: The project already has Angular, SCSS, Angular Material, Docker/Nginx, and frontend CI. Reusing it avoids new dependencies and keeps deployment aligned with the inherited app.

**Alternatives considered**:

- Static HTML outside Angular. Rejected because it would split the public experience from the app that later hosts public booking requests.
- New site framework. Rejected because v0.1.0 does not justify dependency or build-system changes.

## Decision: Use one public page with clear apartment separation

**Rationale**: The product is one brand with two apartments. A single landing with separate Ático and Jardín sections is easier to demo, navigate, and extend.

**Alternatives considered**:

- Separate websites or domains. Rejected as too broad for the demo.
- Only one combined apartment overview. Rejected because the owners need both apartments distinguished.

## Decision: Use presentation data and static assets for v0.1.0

**Rationale**: The landing does not need persistence. A local presentation model can hold TODO content and later be replaced or connected to backend content only if needed.

**Alternatives considered**:

- Backend-driven content. Rejected for v0.1.0 because it adds API, persistence, and admin needs before the demo.
- Hardcode copy directly in scattered templates. Rejected because a structured presentation model keeps missing content visible and easier to replace.

## Decision: Keep inquiry CTA visual/mock or contact-only

**Rationale**: Visitors need a conversion path, but no backend or availability engine exists in v0.1.0. The UI must not promise confirmed reservations.

**Alternatives considered**:

- Implement public booking request persistence now. Rejected as v0.3.0 scope.
- Hide inquiry/contact. Rejected because the landing needs a business CTA.

## Decision: Remove visible CatWorld branding from public UX first

**Rationale**: The Friday demo is public-facing. Visible CatWorld text would make the demo look like a reused internal app instead of a professional property site.

**Alternatives considered**:

- Rename all code and schema first. Rejected because it is unnecessary for public UX and risky before the demo.
- Leave CatWorld visible in public header/footer. Rejected because it breaks the new brand.
