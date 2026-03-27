import assert from "node:assert/strict";
import { REQUIRED, listMarkdown, parseFrontmatter } from "./lib.mjs";

const issues = [];
const slugSeen = new Set();
for (const doc of listMarkdown()) {
  const { metadata } = parseFrontmatter(doc.raw);
  for (const field of REQUIRED) if (!(field in metadata)) issues.push(`${doc.dir}/${doc.file}: missing ${field}`);
  if (doc.dir === "changelog" && !("version" in metadata)) issues.push(`${doc.dir}/${doc.file}: missing version`);
  if (metadata.tags && !Array.isArray(metadata.tags)) issues.push(`${doc.dir}/${doc.file}: tags must be array`);
  if (metadata.publishedAt && Number.isNaN(Date.parse(metadata.publishedAt))) issues.push(`${doc.dir}/${doc.file}: invalid publishedAt`);
  if (metadata.updatedAt && Number.isNaN(Date.parse(metadata.updatedAt))) issues.push(`${doc.dir}/${doc.file}: invalid updatedAt`);
  if (metadata.slug) {
    const key = `${doc.dir}:${metadata.slug}`;
    if (slugSeen.has(key)) issues.push(`${doc.dir}/${doc.file}: duplicate slug ${metadata.slug}`);
    slugSeen.add(key);
  }
}
assert.equal(issues.length, 0, issues.join("\n"));
console.log("frontmatter validation ok");
