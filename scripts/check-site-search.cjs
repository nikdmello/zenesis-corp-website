/* eslint-disable @typescript-eslint/no-require-imports -- This Node CommonJS runner loads the TypeScript search module. */
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const Module = require("node:module");
const ts = require("typescript");
const root = path.join(__dirname, "..");
const resolve = Module._resolveFilename;
Module._resolveFilename = function (id, parent, ...args) {
  return resolve.call(this, id.startsWith("@/") ? path.join(root, "src", id.slice(2)) : id, parent, ...args);
};
require.extensions[".ts"] = (module, file) => module._compile(ts.transpileModule(fs.readFileSync(file, "utf8"), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020, esModuleInterop: true },
}).outputText, file);
const { searchSite, searchDocuments } = require("../src/lib/site-search.ts");
const { serviceDetailPages } = require("../src/lib/service-pages.ts");
const { teamMembers } = require("../src/lib/site-content.ts");
const { businessSetupStartingPrices } = require("../src/lib/business-setup-pricing.ts");
for (const [query, route] of [
  ["RAKEZ", "/business-setup"], ["rakez", "/free-zones"],
  ["IFZA", "/business-setup"], ["DMCC", "/free-zones"],
  ["Jeslia", "/about"], ["Nikhil", "/about"], ["Sajal", "/about"],
  ["flexi desk", "/business-setup-cost-dubai"], ["two visa", "/business-setup-cost-dubai"],
  ["e-channel", "/business-setup-cost-dubai"], ["ESR", "/corporate-support"],
]) assert(searchSite(query).some((result) => result.href === route), `${query} should return ${route}`);
assert.equal(searchSite("xyznonexistent987").length, 0);
assert(!searchSite("e-channel").some((result) => result.href === "/featured-profile"));
for (const service of Object.values(serviceDetailPages)) {
  const document = searchDocuments.find((entry) => entry.href === `/${service.slug}` && entry.type === "Service");
  for (const text of [...(service.supportParagraphs ?? []), ...(service.directAnswers ?? []).flatMap((item) => [item.question, item.answer]), ...(service.comparisonTable?.rows.flat() ?? [])]) {
    assert(document.searchText.includes(text), `Missing service content on ${service.slug}`);
  }
}
const about = searchDocuments.find((entry) => entry.href === "/about");
for (const member of teamMembers) assert(about.searchText.includes(member.summary));
const pricing = searchDocuments.find((entry) => entry.href === "/business-setup-cost-dubai");
for (const item of businessSetupStartingPrices) for (const text of [item.description, ...item.highlights]) assert(pricing.searchText.includes(text));
console.log("Search relevance and shared-content coverage checks passed.");
