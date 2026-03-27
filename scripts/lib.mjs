import fs from "node:fs";
import path from "node:path";

export const REQUIRED = ["title", "slug", "summary", "publishedAt", "updatedAt", "author", "tags", "draft"];

export function listMarkdown(root = process.cwd()) {
  return ["blog", "changelog"].flatMap((dir) => {
    const full = path.join(root, dir);
    if (!fs.existsSync(full)) return [];
    return fs.readdirSync(full).filter((f) => f.endsWith(".md") && f.toLowerCase() !== "readme.md").map((file) => ({ dir, file, fullPath: path.join(full, file), raw: fs.readFileSync(path.join(full, file), "utf8") }));
  });
}

export function parseFrontmatter(raw) {
  const lines = raw.split(/\r?\n/);
  if (lines[0] !== "---") return { metadata: {}, body: raw };
  const metadata = {};
  let idx = 1;
  for (; idx < lines.length; idx += 1) {
    const line = lines[idx];
    if (line === "---") { idx += 1; break; }
    const sep = line.indexOf(":");
    if (sep < 1) continue;
    const key = line.slice(0, sep).trim();
    const val = line.slice(sep + 1).trim();
    metadata[key] = parseValue(val);
  }
  return { metadata, body: lines.slice(idx).join("\n") };
}

function parseValue(value) {
  if (value === "true") return true;
  if (value === "false") return false;
  if (value.startsWith("[") && value.endsWith("]")) {
    const inner = value.slice(1, -1).trim();
    return inner ? inner.split(",").map((x) => x.trim().replace(/^"|"$/g, "")) : [];
  }
  return value.replace(/^"|"$/g, "");
}
