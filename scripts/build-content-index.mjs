import fs from "node:fs";
import path from "node:path";
import { listMarkdown, parseFrontmatter } from "./lib.mjs";

const entries = listMarkdown().map((doc) => {
  const { metadata } = parseFrontmatter(doc.raw);
  return {
    collection: doc.dir,
    file: doc.file,
    title: metadata.title,
    slug: metadata.slug,
    summary: metadata.summary,
    publishedAt: metadata.publishedAt,
    updatedAt: metadata.updatedAt,
    author: metadata.author,
    tags: metadata.tags,
    draft: metadata.draft,
    version: metadata.version || null,
    path: `/${doc.dir}/${metadata.slug}`
  };
}).sort((a, b) => String(b.publishedAt).localeCompare(String(a.publishedAt)));

const out = path.join(process.cwd(), "dist/content-index.json");
fs.mkdirSync(path.dirname(out), { recursive: true });
fs.writeFileSync(out, JSON.stringify({ generatedAt: new Date().toISOString(), entries }, null, 2) + "\n", "utf8");
console.log(`content index built: ${entries.length} entries`);
