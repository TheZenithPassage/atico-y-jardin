# Research: Private Reservation Management

## Decision: Reuse the inherited layered monolith

**Rationale**: The current controller/service/repository/database pattern already supports authenticated operational workflows, validation, persistence, and tests.

**Alternatives considered**:

- Separate reservation microservice. Rejected because two apartments do not justify distributed architecture.
- External booking engine. Rejected for v0.2.0 because the goal is private alpha, not channel automation.

## Decision: Start with exactly two fixed ApartmentUnit records

**Rationale**: The business has two apartments: Ático and Jardín. Fixed units reduce scope and make overlap rules clear.

**Alternatives considered**:

- Generic property/unit catalog. Rejected as premature platform scope.
- Hardcoded strings only. Rejected for future persistence and calendar filtering needs.

## Decision: Reuse overlap-validation concepts from Stay

**Rationale**: CatWorld already validates overlapping active stays for cats. The future reservation rule is analogous: no overlapping active reservations for the same apartment unit.

**Alternatives considered**:

- Only rely on manual admin discipline. Rejected because double-booking is a core risk.
- Persist derived availability state. Rejected for the initial plan because availability can be computed from active reservations.

## Decision: Recommended calendar is one FullCalendar calendar with colors and filters

**Rationale**: For two apartments, one calendar gives a complete occupancy view while colors and filters keep units distinguishable.

**Alternatives considered**:

- Two separate calendars. Useful if owners prefer separate views, but less efficient for overall occupancy.
- Resource timeline view. Deferred until the need is confirmed.

## Decision: Public booking requests remain outside v0.2.0

**Rationale**: v0.2.0 is private management alpha. Public request intake, review, and conversion belong to v0.3.0.

**Alternatives considered**:

- Build public request intake immediately. Rejected because private reservation authority should exist first.
