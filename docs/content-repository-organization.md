# Content Repository Organization (Slice 960)

## Canonical Layout

```text
blog/         published, review, and draft editorial posts
changelog/    versioned product updates and release notes
rules/        public rules references consumed by ks-home

docs/         contributor-facing process and policy docs
scripts/      repository validation/build tooling
.github/      CI workflows and review routing
```

## Naming Policy

- Filenames must be lowercase kebab-case with a `.md` suffix.
- `blog/<slug>.md` must match the frontmatter `slug` exactly.
- `changelog/<slug>.md` must match the frontmatter `slug` exactly; the slug must start with an ISO date prefix (`YYYY-MM-DD-...`).
- `rules/<slug>.md` must match the frontmatter `slug` exactly.
- Collection `README.md` files are allowed only as non-index documentation and are ignored by build loaders.

## Lifecycle Policy

Allowed values for `lifecycle`:

- `draft` — preview-only work in progress; must keep `draft: true`
- `review` — content awaiting editorial approval; must keep `draft: true`
- `published` — public content; must keep `draft: false`
- `archived` — historically preserved content excluded from active editing; must keep `draft: false`

Additional rules:

- Every content document in `blog/`, `changelog/`, and `rules/` must declare `lifecycle`.
- `publishedAt` and `updatedAt` must remain valid dates for every lifecycle state.
- Changelog and rules entries must continue to declare `version`.

## Ownership

- `CODEOWNERS` is the source of truth for required reviewers.
- Changes touching public content, policy docs, or validation scripts must request review from the listed owners before merge.

## CI Gate

The blocking policy gate is `npm run validate:content-policy`.
It verifies:

- folder architecture exists
- filename and slug policy
- lifecycle metadata rules
- CODEOWNERS coverage for required paths
