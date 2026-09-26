# AGENTS.md

## Repository purpose

This repository contains browser userscripts and related small utilities used to smooth over rough edges in websites commonly used in a law office.

Most scripts are expected to be Tampermonkey userscripts or closely related browser-side helpers. Typical targets may include court websites, legal research services, filing systems, government sites, or other web applications used in legal practice.

Favor practical, low-complexity improvements that make existing websites faster, clearer, or less tedious to use. Preserve the behavior of the underlying website unless a change is intentionally part of the task.

## Git workflow

Work directly on `main` by default.

Do not create feature branches, topic branches, or other temporary branches unless the user specifically requests one.

Before making changes, inspect the current working tree and avoid overwriting unrelated user changes.

Make focused changes related to the requested task. Do not perform unrelated cleanup or refactoring unless it is necessary for the requested change.

Review the changes and update the version number of a modified userscript immediately before committing the change to the git repo, if the script has been modified and is included in the git commit.

## Userscript versions

Userscript `@version` values use this format:

```text
YYYY-MM-DD.NN
```

Where:

- `YYYY-MM-DD` is the calendar date of the change.
- `NN` is a zero-padded, two-digit daily change number beginning with `00`.

Examples:

```text
2026-09-25.00
2026-09-25.01
2026-09-25.02
```

When modifying a userscript, update its `@version` at the time the modifications are committed to the git repo. Avoid modifying the version before committing because it may cause version numbering to jump unexpectedly in the git history.

If the script has not yet been changed on the current date, use:

```text
YYYY-MM-DD.00
```

If it has already been changed that day, increment the daily change number.

Do not convert versions to semantic versioning or another format unless the user specifically requests it.

## Userscript metadata

Preserve valid Tampermonkey metadata headers and existing permissions unless a task requires changing them.

When adding or changing metadata such as `@match`, `@grant`, `@require`, `@updateURL`, or `@downloadURL`, keep permissions and URL scope as narrow as reasonably practical.

Do not add unnecessary external dependencies.

## Coding approach

These are primarily small operational tools, not a framework or large application.

Prefer:

- straightforward JavaScript
- minimal dependencies
- readable selectors and DOM manipulation
- defensive handling of missing or changed page elements
- small, targeted functions
- comments where website-specific behavior would otherwise be unclear

Avoid unnecessary abstraction, build systems, dependency managers, or architectural complexity unless the repository evolves to require them.

Websites may change without notice. When interacting with page structure, prefer selectors and logic that are reasonably resilient to minor markup changes.

## Legal-office context

These tools may be used during real legal work, so reliability matters more than cleverness.

Do not silently alter, fabricate, or infer substantive legal information displayed by a website.

Features that modify presentation, navigation, copying, searching, filtering, repetitive interactions, or other workflow friction are generally appropriate.

Be especially cautious with automation that submits forms, sends filings, modifies records, makes purchases, transmits confidential information, or performs other consequential actions. Such behavior should be explicit and should not be introduced merely as a convenience refactor.

## Scope

Follow the user's requested scope.

If a task concerns one script, avoid modifying unrelated scripts unless a shared change is clearly necessary.

When behavior is uncertain because a target website has changed, inspect the relevant code and available page behavior rather than guessing.
