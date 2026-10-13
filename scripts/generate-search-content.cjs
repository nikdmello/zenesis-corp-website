/* eslint-disable @typescript-eslint/no-require-imports -- This generator runs directly in Node before Next.js starts. */
const fs = require("node:fs");
const path = require("node:path");
const ts = require("typescript");

const appRoot = path.join(__dirname, "../src/app");
const content = {};
const textFields = new Set(["title", "description", "label", "question", "answer", "text", "bestFor", "intro", "summary", "paragraphs", "points", "items", "bullets", "name"]);

function collect(file) {
  const source = ts.createSourceFile(file, fs.readFileSync(file, "utf8"), ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX);
  const parts = [];
  function visit(node) {
    if (ts.isJsxText(node)) parts.push(node.text);
    if (ts.isStringLiteral(node) || ts.isNoSubstitutionTemplateLiteral(node)) {
      let parent = node.parent;
      while (parent && (ts.isArrayLiteralExpression(parent) || ts.isAsExpression(parent))) parent = parent.parent;
      if ((ts.isPropertyAssignment(parent) && textFields.has(parent.name.getText(source).replace(/["']/g, ""))) ||
          (ts.isJsxAttribute(parent) && textFields.has(parent.name.text)) ||
          (ts.isJsxExpression(parent) && ts.isJsxElement(parent.parent))) parts.push(node.text);
    }
    ts.forEachChild(node, visit);
  }
  visit(source);
  return parts.join(" ").replace(/&apos;/g, "'").replace(/&amp;/g, "&").replace(/\s+/g, " ").trim();
}

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.isDirectory() && !entry.name.startsWith("[") && entry.name !== "api") walk(path.join(dir, entry.name));
    if (entry.isFile() && entry.name === "page.tsx") {
      const route = "/" + path.relative(appRoot, dir).split(path.sep).join("/");
      if (route !== "/search") content[route] = collect(path.join(dir, entry.name));
    }
  }
}
walk(appRoot);
fs.writeFileSync(path.join(__dirname, "../src/lib/page-search-content.json"), JSON.stringify(content, null, 2) + "\n");
console.log(`Updated search content for ${Object.keys(content).length} pages.`);
