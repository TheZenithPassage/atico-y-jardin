# Quickstart: Validate Project Transition Planning

This quickstart validates documentation and Spec Kit structure only. Do not run application builds for this planning task unless later code changes are added.

## Prerequisites

- Work from the repository root.
- Do not create commits or pull requests unless explicitly instructed.

## Review Steps

1. Confirm the transition spec exists:

   ```powershell
   Test-Path specs/000-project-transition/spec.md
   Test-Path specs/000-project-transition/plan.md
   Test-Path specs/000-project-transition/tasks.md
   ```

2. Confirm the global planning docs exist:

   ```powershell
   Test-Path docs/RELEASE_PLAN.md
   Test-Path docs/DEMO_SCRIPT.md
   Test-Path docs/WORKFLOW.md
   Test-Path docs/CONTENT_INVENTORY.md
   Test-Path docs/GITHUB_ISSUES.md
   ```

3. Inspect remaining CatWorld references:

   ```powershell
   rg -n "CatWorld|catworld|cat boarding|cat-boarding" README.md frontend/README.md docs specs .specify AGENTS.md
   ```

   Expected outcome: remaining references are either inherited/historical or intentionally marked as transition context.

4. Confirm no application code, migrations, or dependency lockfiles were changed for this planning task:

   ```powershell
   git diff --name-only
   ```

   Expected outcome: changed files are documentation, Spec Kit, and planning artifacts only.

## Expected Result

The repository should be ready for v0.1.0 landing implementation planning without suggesting that runtime product behavior has already changed.
