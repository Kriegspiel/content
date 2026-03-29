# Content Repository Organization (Slice 960)

## Canonical Layout

```text
blog/         published, review, and draft editorial posts (folder entries)
changelog/    versioned product updates and release notes
rules/        public rules references consumed by ks-home
site/         singleton public pages consumed by ks-home (folder entries)

docs/         contributor-facing process and policy docs
scripts/      repository validation/build tooling
.github/      CI workflows and review routing
```

## Naming Policy

- Site singleton pages live at `site/<slug>/README.md`.
- Blog entries live at `blog/YYYY-MM-DD_<slug>/README.md`.
- `README.md` inside an entry folder is canonical content, not collection documentation.
- `changelog/<slug>.md` must match the frontmatter `slug` exactly; the slug must start with an ISO date prefix (`YYYY-MM-DD-...`).
- `rules/<slug>.md` must match the frontmatter `slug` exactly.
- Site folder names must match the frontmatter `slug` exactly.
- Blog folder suffixes must match the frontmatter `slug` exactly.

## Lifecycle Policy

Allowed values for `lifecycle`:

- `draft` — preview-only work in progress; must keep `draft: true`
- `review` — content awaiting editorial approval; must keep `draft: true`
- `published` — public content; must keep `draft: false`
- `archived` — historically preserved content excluded from active editing; must keep `draft: false`

Additional rules:

- Every content document in `blog/`, `changelog/`, and `rules/` must declare `lifecycle`.
- `site/` singleton pages do not use lifecycle; they are consumed directly as canonical public pages.
- `publishedAt` and `updatedAt` must remain valid dates for every lifecycle state.
- Changelog and rules entries must continue to declare `version`.

## Ownership

- `CODEOWNERS` is the source of truth for required reviewers.
- Changes touching public content, policy docs, or validation scripts must request review from the listed owners before merge.

## CI Gate

The blocking policy gate is `npm run validate:content-policy`.
It verifies:

- folder architecture exists
- entry-folder naming and slug policy
- lifecycle metadata rules
- CODEOWNERS coverage for required paths
