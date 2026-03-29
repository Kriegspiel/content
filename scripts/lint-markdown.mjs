import assert from "node:assert/strict";
import { listMarkdown } from "./lib.mjs";

const docs = [...listMarkdown(), ...listMarkdown(process.cwd(), ["site"] )];
const issues = [];
for (const doc of docs) {
  const lines = doc.raw.split(/\r?\n/);
  if (lines[0] !== "---") issues.push(`${doc.dir}/${doc.file}: missing frontmatter start`);
  if (!doc.raw.includes("\n---\n")) issues.push(`${doc.dir}/${doc.file}: missing frontmatter end`);
  if (/\t/.test(doc.raw)) issues.push(`${doc.dir}/${doc.file}: contains tab characters`);
}
assert.equal(issues.length, 0, issues.join("\n"));
console.log(`markdown lint ok: ${docs.length} files`);
