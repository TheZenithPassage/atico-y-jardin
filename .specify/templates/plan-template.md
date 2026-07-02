# Implementation Plan: [FEATURE]

**Branch**: `[###-feature-name]` | **Date**: [DATE] | **Spec**: [link]

**Input**: Feature specification from `/specs/[###-feature-name]/spec.md`

**Note**: This template is filled in by the `/speckit-plan` command. See `.specify/templates/plan-template.md` for the execution workflow.

## Summary

[Extract from feature spec: primary requirement + technical approach from research]

## Technical Context

**Language/Version**: [Inspect current repository; record backend and frontend languages and versions or NEEDS CLARIFICATION]

**Primary Dependencies**: [Inspect current repository; record relevant dependencies or NEEDS CLARIFICATION]

**Storage**: [Inspect current repository; record affected persistence/storage or N/A]

**Testing**: [Inspect current repository; record relevant test commands/frameworks or NEEDS CLARIFICATION]

**Target Platform**: [Inspect current repository; record affected runtime/deployment target or NEEDS CLARIFICATION]

**Project Type**: [Ático y Jardín full-stack web application with inherited backend/frontend baseline; refine only if current repository evidence requires it]

**Performance Goals**: [Use N/A if no confirmed requirement. Record only measurable targets supported by the specification, current repository, or explicit human decision.]

**Constraints**: [Use N/A if no confirmed constraint. Record only constraints supported by the specification, current repository, or explicit human decision.]

**Scale/Scope**: [Use N/A if no confirmed scale requirement. Record only measurable scope or scale supported by the specification, current repository, or explicit human decision.]

## Constitution Check

*GATE 1: Before Phase 0 research, identify applicable constitution principles, assessment triggers, and unresolved decisions.*

*GATE 2: Before decision-dependent Phase 1 design and before implementation task generation, every required architecture and technology assessment MUST be completed and human-approved. Re-check full constitution compliance after Phase 1 design.*

- **Product focus and sustainable evolution**: Does the feature serve the
  specific Ático and Jardín apartment product, avoid generic marketplace or
  platform scope, and respect the public-first/private-management-second
  release direction?
- **Layered monolith responsibilities**: Does the plan preserve controller ->
  service -> repository -> database responsibilities, with DTOs/mappers keeping
  HTTP contracts separate from JPA entities where backend work is involved?
- **Backend and database authority**: Are business rules, authorization,
  validation, and important calculations enforced by the backend and, where
  applicable, protected by database constraints rather than frontend-only logic?
- **Schema evolution**: If schema changes are needed, are Flyway migrations and
  proportional migration validation planned, with Hibernate auto-update
  excluded from real schema changes?
- **Protected reservation model**: If reservations, booking requests, inherited
  stays, or availability are affected, does the plan preserve unit overlap
  protection, check-out-after-check-in, cancelled-does-not-block, and
  request-is-not-confirmed-reservation rules?
- **Specification and planning discipline**: Are observable behavior, scope,
  edge cases, exclusions, planned-vs-implemented status, and major decisions
  resolved before implementation, with observable-state and validation-matrix
  detail when visible or state-sensitive behavior is in scope?
- **Architecture and technology assessment**: If the feature introduces a
  significant shared capability, cross-cutting concern, accessibility or
  correctness responsibility, material security/persistence/shared-contract/
  operational decision, significant dependency, or costly replacement path, has
  the required assessment been completed and human-approved?
- **Focused changes and proportional validation**: Is the change scoped and
  reviewable, with validation depth proportional to business, persistence,
  security, contract, accessibility, and operational risk? Are planned evidence
  layers strong enough to verify externally visible behavior rather than only
  implementation internals?
- **Operational safety and sources of truth**: Are secrets, real data,
  deployment exposure, privacy/RGPD, recovery procedures, and documentation
  updates handled for the active deployment model?

## Architecture and Technology Assessment

**Assessment required**: [Yes/No, with reason]

**Decision trigger**: [significant shared capability | significant cross-cutting concern | confirmed repeated approved use | non-trivial accessibility or correctness responsibility | material security decision | material persistence decision | material shared-contract decision | material operational decision | significant dependency | meaningful replacement or migration cost | N/A]

**Options considered**:

- Existing platform/framework/project capability: [fit, cost, risk, and constraints for confirmed requirements or N/A]
- Established library/framework/service: [fit, cost, risk, maturity, lock-in, and operational consequences or N/A]
- Focused custom implementation: [fit, correctness/accessibility responsibility, maintenance cost, and reversibility or N/A]

**Selected approach**: [Chosen option or N/A]

**Why selected**: [Fit for confirmed current requirements, confirmed medium-term reuse, and tradeoffs or N/A]

**Confirmed medium-term use**: [Approved features or repeated use this is expected to support, or N/A]

**Maintenance and operational consequences**: [Ongoing ownership, upgrade, security, accessibility, correctness, and operational considerations or N/A]

**Reversibility and migration path**: [How the decision can be changed later and expected migration cost or N/A]

**Human approval**: [pending/approved; keep pending unless explicit human
approval or a valid prior approved decision is referenced. Explicit human
approval of the completed feature plan counts as approval of the selected
approach.]

## Semantic Equivalence and Replacement Review

<!--
  Complete this section when the feature replaces UI primitives, shared
  components, interaction mechanisms, presentation mechanisms, data/contract
  mechanisms, or other behavior-preserving mechanisms with mismatch risk.
  Examples: native input/label/button to Angular Material form-field/input/button,
  native error markup to a shared state component, native select to searchable
  selector, table/list replacement, dialog/overlay/routing/focus replacement,
  date/money/status/role/filtering presentation changes, or migration between
  validation/error-handling mechanisms. Use N/A for features with no replacement
  or migration risk.
-->

**Review required**: [Yes/No, with reason]

**Old behavior/source of truth**: [Existing behavior, contracts, tests, docs, or source files that define what must be preserved, or N/A]

**New mechanism semantics**: [Relevant semantics of the new component, framework, pattern, or mechanism, or N/A]

**Mismatch risks**: [Potential behavior, accessibility, validation, navigation, focus, i18n, responsive/mobile, contract, authorization, persistence, migration, or styling mismatches, or N/A]

**Mitigation**: [Design constraints or implementation choices that preserve semantics, or N/A]

**Proof required**: [Automated DOM/harness/navigation/focus/API/persistence/security/migration checks and any manual visible-device smoke checks required, or N/A]

## Validation Evidence Plan

<!--
  Identify evidence at the layer that can prove each affected behavior. Keep this
  proportional: backend-only and documentation-only work should not get heavy UI
  checks, while observable, contract-visible, authorization, persistence,
  migration, security, shared component, global style, mobile, i18n, and other
  correctness-sensitive work needs stronger evidence.
-->

| Surface / Requirement | Responsible Layer | Evidence Type | Freshness / Manual Notes |
|-----------------------|-------------------|---------------|--------------------------|
| [visible UI state or user-observable behavior] | [DOM, Angular Material/CDK harness, route, focus/keyboard, or manual visible-device check] | [test/review/smoke] | [rerun after relevant changes or N/A] |
| [backend business rule or validation] | [service/controller/API] | [test/review] | [rerun after relevant changes or N/A] |
| [contract, authorization, persistence, migration, security, i18n, mobile, shared component, or global style behavior] | [responsible layer] | [test/review/smoke] | [rerun after relevant changes or N/A] |

## Project Structure

### Documentation (this feature)

```text
specs/[###-feature]/
├── plan.md
├── research.md
├── data-model.md
├── quickstart.md
├── contracts/
└── tasks.md
```

### Source Code (repository root)

```text
src/main/java/
src/main/resources/
src/test/java/
frontend/src/
docs/
```

**Structure Decision**: [Document the selected structure and reference the real
directories captured above]

## Phase 0 Research Summary

[Summarize research.md decisions after Phase 0]

## Phase 1 Design Summary

[Summarize generated data-model.md, contracts/, and quickstart.md after Phase 1]

## Post-Design Constitution Check

[Re-check applicable constitution principles after design decisions are recorded]

## Complexity Tracking

| Complexity | Why Needed | Simpler Alternative Rejected Because | Constitution Compliance |
|------------|------------|-------------------------------------|-------------------------|
| [N/A] | [N/A] | [N/A] | [N/A] |
