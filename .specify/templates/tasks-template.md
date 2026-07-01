---

description: "Task list template for feature implementation"
---

# Tasks: [FEATURE NAME]

**Input**: Design documents from `/specs/[###-feature-name]/`

**Prerequisites**: plan.md (required), spec.md (required), research.md, data-model.md, contracts/

**Tests**: Include test tasks when explicitly requested in the feature specification or required by the constitution for reservation rules, inherited stay rules, persistence, migrations, security, shared contracts, accessibility, operational safety, or other high-risk behavior.

**Organization**: Tasks are grouped by independently verifiable user journeys when natural, or by dependency-driven verifiable technical outcomes for technical/enabling work.

## Format: `[ID] [P?] [Trace] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Trace]**: Which user story or technical outcome this task belongs to
  (e.g., US1, US2, TO1)
- Include exact file paths in descriptions

## Path Conventions

- **Backend source**: `src/main/java/`
- **Backend resources and migrations**: `src/main/resources/`
- **Backend tests**: `src/test/java/`
- **Frontend source and tests**: `frontend/src/`
- **Documentation**: `docs/`, `README.md`, `frontend/README.md`
- Generated tasks MUST use exact file paths and include only paths relevant to
  the feature.

## Architecture and Technology Assessment Gate

Before generating implementation tasks, inspect plan.md.

- If Architecture and Technology Assessment is required and **Human approval**
  is still `pending`, treat the feature as blocked.
- Do not generate implementation tasks that assume or select an architecture,
  framework, library, service, native capability, or custom design while the
  required approval is pending.
- If a valid prior approved architectural decision is referenced and
  applicable, no duplicate approval task is needed.

## Phase 1: Setup (Optional)

**Purpose**: Feature-specific setup only. Omit this phase if the feature has no
real setup work.

- [ ] T001 Add or adjust only feature-required scaffolding in [exact path]

---

## Phase 2: Foundational (Optional Blocking Prerequisites)

**Purpose**: Shared work that MUST be complete before affected user stories or
technical outcomes can be implemented. Omit this phase if the feature has no
shared foundational work.

- [ ] T002 Add shared model, contract, route, fixture, or documentation prerequisite in [exact path]
- [ ] T003 Add constitution-required validation task(s) for reservation rules, inherited stay rules, persistence, security, contracts, accessibility, or operational safety

**Checkpoint**: Shared prerequisites complete - affected user story or
technical outcome implementation can now begin

---

## Phase 3: User Story or Technical Outcome 1 - [Title] (Priority: P1)

**Goal**: [Brief description of what this user journey or technical outcome delivers]

**Verification**: [How to verify this user journey or technical outcome works on its own, or document real dependencies]

### Tests for User Story or Technical Outcome 1 (include if requested or constitution-required)

- [ ] T011 [P] [US1/TO1] Add required test in [exact path]

### Implementation for User Story or Technical Outcome 1

- [ ] T012 [US1/TO1] Implement required change in [exact path]
- [ ] T013 [US1/TO1] Add validation, accessibility, error handling, or documentation required by this user journey or technical outcome in [exact path]

**Checkpoint**: At this point, User Story or Technical Outcome 1 should be fully functional and objectively verifiable

---

## Phase N: Polish & Cross-Cutting Concerns

**Purpose**: Concrete final work supported by the feature artifacts

- [ ] TXXX [P] Documentation update in [exact path] if required by the feature or constitution
- [ ] TXXX Run constitution compliance validation
- [ ] TXXX Run quickstart.md validation only if quickstart.md exists for this feature

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: Optional; include only when real setup work exists
- **Foundational (Phase 2)**: Optional; include only when shared prerequisites exist
- **User Stories or Technical Outcomes (Phase 3+)**: Depend on included prerequisite phases and the actual dependencies recorded in plan.md
- **Polish (Final Phase)**: Depends on all desired user stories or technical outcomes being complete

### User Story or Technical Outcome Dependencies

- **User Story or Technical Outcome 1 (P1)**: [Actual dependencies from plan.md]

### Parallel Opportunities

- Included setup tasks marked [P] can run in parallel
- Independent file changes marked [P] may run in parallel
- Different user stories or technical outcomes may be worked on in parallel when dependencies allow

---

## Implementation Strategy

### First Verifiable Increment

1. Complete included prerequisite phases, if any
2. Complete Phase 3: User Story or Technical Outcome 1
3. Stop and validate objective evidence
4. Demo if relevant

### Incremental Delivery

1. Complete included prerequisite phases, if any
2. Add User Story or Technical Outcome 1 and validate objective evidence
3. Add later user stories or technical outcomes in dependency order
4. Each increment preserves previous validated behavior

---

## Notes

- Do not commit unless the user explicitly asks for a commit.
- Do not mix public rebranding, domain refactoring, persistence changes, and new reservation behavior unless the active plan explicitly approves that combined scope.
- Do not add dependencies without the required architecture and technology assessment.
- Keep tasks specific enough that another implementation agent can execute them without re-planning.
