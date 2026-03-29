import fs from "node:fs";
import path from "node:path";

export const REQUIRED = ["title", "slug", "summary", "publishedAt", "updatedAt", "author", "tags", "draft"];
export const CONTENT_COLLECTIONS = ["blog", "changelog", "rules"];
export const FOLDER_ENTRY_COLLECTIONS = new Set(["blog", "site"]);

export function listMarkdown(root = process.cwd(), collections = CONTENT_COLLECTIONS) {
  return collections.flatMap((dir) => listCollectionMarkdown(root, dir));
}

export function listCollectionMarkdown(root, dir) {
  const full = path.join(root, dir);
  if (!fs.existsSync(full)) return [];
  return walkCollection(full, dir, FOLDER_ENTRY_COLLECTIONS.has(dir));
}

function walkCollection(currentDir, collection, allowFolderEntries) {
  const entries = [];
  for (const item of fs.readdirSync(currentDir, { withFileTypes: true })) {
    const fullPath = path.join(currentDir, item.name);
    if (item.isDirectory()) {
      entries.push(...walkCollection(fullPath, collection, allowFolderEntries));
      continue;
    }
    if (!item.isFile() || !item.name.endsWith(".md")) continue;
    if (item.name.toLowerCase() === "readme.md" && !allowFolderEntries) continue;
    const relativePath = path.relative(path.join(rootOrCwd(collection, currentDir), collection), fullPath);
    entries.push({
      dir: collection,
      file: relativePath,
      fullPath,
      raw: fs.readFileSync(fullPath, "utf8")
    });
  }
  return entries;
}

function rootOrCwd(collection, currentDir) {
  const marker = `${path.sep}${collection}${path.sep}`;
  const idx = currentDir.indexOf(marker);
  return idx >= 0 ? currentDir.slice(0, idx) : process.cwd();
}

export function entryStem(doc) {
  const parsed = path.parse(doc.file);
  if (parsed.base.toLowerCase() === "readme.md") return path.basename(parsed.dir);
  return parsed.name;
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
    return inner ? inner.split(",").map((x) => x.trim().replace(/^\"|\"$/g, "")) : [];
  }
  return value.replace(/^\"|\"$/g, "");
}
