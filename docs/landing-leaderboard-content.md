# Landing + Leaderboard Content Integration (Slice 920)

This document records how ks-home Slice 920 surfaces integrate with content contracts from Slice 910.

## Landing/Home

- Trust snippet derives counts from source-of-truth collections in this repo:
  - `rules/*.md`
  - `blog/*.md`
- CTA targets are route-contract aligned (`/leaderboard`, `/rules`).

## Leaderboard

- Leaderboard data is API-backed (`/api/leaderboard`) and not sourced from markdown content.
- Content contract influence is route and metadata consistency from Slice 910.
- Stale-data UX threshold: 15 minutes (`updatedAt` based).

## Contract Links

- `ks-home/contracts/content-source-contract.json`
- `ks-home/contracts/routes.json`
- `ks-home/contracts/leaderboard-contract.json`
