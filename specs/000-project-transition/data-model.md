# Data Model: Project Transition

This feature defines planning entities only. It introduces no persistence model,
schema migration, API payload, or runtime browser storage.

## ProjectIdentity

**Purpose**: Describes the active product identity during the transition.

**Fields**:

- `publicName`: `Ático y Jardín`.
- `shortDescription`: Public website and future private management tool for two tourist apartments.
- `apartments`: `Ático`, `Jardín`.
- `inheritedBaseline`: Local copy of CatWorld.
- `transitionStatus`: Planning/demo adaptation.

**Validation rules**:

- Must not imply that reservation management is already implemented.
- Must preserve missing content as TODOs.

## Release

**Purpose**: Defines an initial milestone.

**Fields**:

- `version`: v0.1.0, v0.2.0, v0.3.0, v0.4.0, or v1.0.0.
- `name`: Short release label.
- `goal`: One-sentence release objective.
- `scope`: Included work.
- `outOfScope`: Explicit exclusions.
- `validation`: Required checks.
- `primaryRisk`: Main risk for the release.
- `acceptanceCriteria`: Demo or launch criteria.

## DomainMapping

**Purpose**: Records future conceptual conversions without implementing them.

**Mappings**:

- `CatWorld` -> `Ático y Jardín`.
- `Owner` -> `Guest` / `Huésped` / `Cliente`.
- `Cat` -> `ApartmentUnit` / `Unidad` / `Apartamento`.
- `Stay` -> `Reservation` / `Reserva`.
- `StayCat` -> `ReservationUnit` if multi-unit reservations are needed.
- `Vet` -> possible `BookingChannel` / `BookingSource`, or removal.
- `Accounts` -> private administration users.

## TransitionStep

**Purpose**: Orders work across releases.

**Recommended order**:

1. Adapt docs and Spec Kit.
2. Build public landing.
3. Rebrand visible public UX.
4. Add galleries.
5. Add location and contact.
6. Plan private reservations.
7. Adapt backend/frontend domain in phases.
8. Implement private reservation management.
9. Implement public booking requests.
10. Prepare production.
