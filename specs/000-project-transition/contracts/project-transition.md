# Contract: Project Transition

This contract defines how transition documentation must describe the project until runtime implementation catches up.

## Product Identity Contract

- Public product name: `Ático y Jardín`.
- Apartments: `Ático` and `Jardín`.
- Current state: planning/demo adaptation from a CatWorld repository copy.
- The documentation must not imply that the landing, reservation management, public request flow, payments, channel synchronization, or production launch are already implemented.

## Release Contract

Every initial release entry must include:

- Version.
- Goal.
- Scope.
- Out of scope.
- Validation.
- Primary risk.
- Demo or acceptance criteria.

## Transition Safety Contract

- Do not delete inherited CatWorld code until a feature spec owns the removal.
- Do not rename backend entities, DTOs, endpoints, packages, or migrations in this planning task.
- Do not change dependencies or package locks in this planning task.
- Keep future public requests separate from confirmed reservations.

## Documentation Status Contract

Documentation may use these status labels:

- `Implemented`: present in the current codebase.
- `Planned`: approved direction, not yet implemented.
- `Out of scope`: explicitly excluded from the current release or task.
- `TODO(owner/user)`: information needed from the user or owners.
- `TODO(content)`: copy, legal, or business content still needed.
- `TODO(images)`: visual assets still needed.
