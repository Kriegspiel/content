import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { listMarkdown } from "./lib.mjs";

const issues = [];
const pattern = /\[[^\]]+\]\(([^)]+)\)/g;
for (const doc of [...listMarkdown(), ...listMarkdown(process.cwd(), ["site"])]) {
  for (const match of doc.raw.matchAll(pattern)) {
    const href = match[1];
    if (/^https?:\/\//.test(href) || href.startsWith("mailto:") || href.startsWith("/")) continue;
    const target = path.resolve(path.dirname(doc.fullPath), href);
    if (!fs.existsSync(target)) issues.push(`${doc.dir}/${doc.file}: broken relative link ${href}`);
  }
}
assert.equal(issues.length, 0, issues.join("\n"));
console.log("link lint ok");
