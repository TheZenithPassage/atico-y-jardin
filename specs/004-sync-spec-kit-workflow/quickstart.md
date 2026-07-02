# Quickstart: Sync Spec Kit Workflow

## Prerequisites

- Work from branch `chore/16-sync-spec-kit-workflow`, not `main`.
- Keep `C:\Users\moshe\Desktop\catworld.rar` as read-only reference input.
- Extract the archive into a temporary directory outside this repository.

## Reference Inspection

1. Extract the reference archive outside the Ático y Jardín working tree.
2. In the extracted CatWorld reference, run:

   ```powershell
   git branch --all
   ```

3. Identify the latest workflow/spec-kit hardening branch, expected to be related to issue #189 or `chore/189-harden-spec-kit-workflow-validation-coverage`.
4. Compare that branch against CatWorld `main`, prioritizing workflow surfaces called out in issue #16.
5. Use CatWorld `docs/*` only to understand intent and rationale.

## Delivery Validation

Run from the Ático y Jardín repository root unless noted otherwise:

```powershell
git status --short
git diff --check
```

Search changed files for stale CatWorld/domain references:

```powershell
$changed = git diff --name-only
$terms = @('CatWorld', 'cat', 'cats', 'stay', 'stays', 'boarding', 'veterinarian', 'vet')
foreach ($term in $terms) {
  Select-String -Path $changed -Pattern $term -SimpleMatch -CaseSensitive
}
Select-String -Path $changed -Pattern 'owner' -SimpleMatch
```

Manually inspect any matches and confirm:

- Remaining CatWorld references are reference-source context only, not Ático y Jardín product guidance.
- `owner` references refer only to property owners or repository ownership concepts.
- No changed workflow makes backend, database, Flyway, iCal, OTA integration, payments, real reservations, live availability, or admin redesign mandatory for v0.1.1.
- The workflow can produce a safe Codex handoff for issue #2 without implementing issue #2.

Run available checks/build commands where applicable. For documentation-only workflow changes, report when full runtime builds are not necessary or not executed.
