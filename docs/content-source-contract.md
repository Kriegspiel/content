# Content Source Contract (Slice 910)

Kriegspiel/content is the source of truth for website collections consumed by ks-home.

## Collections

- blog/ -> blog index + /blog/:slug
- changelog/ -> changelog index + /changelog/:slug
- rules/ -> rules index and rule details

## Required frontmatter

- title
- slug
- summary
- publishedAt
- updatedAt
- author
- tags
- draft
- version (required for changelog and rules)

## Contract checks

Validated from ks-home via:

- npm run content:schema:check
- npm run content:source-contract:check
