# Contributor Workflow (Slice 960)

## Create Draft Content

1. Copy an existing markdown file from the target collection.
2. Name the file using the collection rule:
   - `blog/YYYY-MM-DD_<slug>/README.md`
   - `changelog/<yyyy-mm-dd-slug>.md`
   - `rules/<slug>.md`
   - `site/<slug>/README.md`
3. Set frontmatter fields including `draft` and `lifecycle` where applicable.
4. For work in progress, use:
   - `draft: true`
   - `lifecycle: draft`

## Submit for Review

1. Update `lifecycle` to `review` when the piece is ready for editorial review.
2. Keep `draft: true` until the review is accepted.
3. Open a PR; CODEOWNERS should auto-request reviewers.
4. Run local validation before asking for merge:

```bash
npm ci
npm run lint:markdown
npm run lint:links
npm run validate:frontmatter
npm run validate:content-policy
npm run build:content-index
```

## Publish

1. Set `draft: false`.
2. Set `lifecycle: published`.
3. Confirm `publishedAt` and `updatedAt` are correct.
4. Merge only after all content gates pass.

## Archive

1. Keep the entry in its canonical collection path.
2. Set `lifecycle: archived`.
3. Keep `draft: false` so historical entries stay buildable and linkable.
4. Add a short note in the body when archive context matters.
