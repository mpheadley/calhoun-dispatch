import fs from "fs";
import path from "path";

const args = process.argv.slice(2);
if (args.length === 0) {
  console.error(
    'Usage: npx ts-node scripts/new-article.ts "Oxford Man Cautiously Optimistic About Spring"'
  );
  process.exit(1);
}

const title = args.join(" ");

const slug = title
  .toLowerCase()
  .replace(/['']/g, "")
  .replace(/[^a-z0-9\s-]/g, "")
  .trim()
  .replace(/\s+/g, "-")
  .replace(/-+/g, "-");

const today = new Date().toISOString().split("T")[0];

const content = `---
title: "${title.replace(/"/g, '\\"')}"
date: "${today}"
excerpt: ""
byline: "Buford Tatum, Bureau Chief"
tags: ["Local"]
published: false
featured: false
breaking: false
developing: false
heroImage: ""
heroAlt: ""
---

ANNISTON, Ala. —
`;

const draftsDir = path.join(process.cwd(), "content/articles/_drafts");
const outputPath = path.join(draftsDir, `${slug}.mdx`);

if (!fs.existsSync(draftsDir)) {
  fs.mkdirSync(draftsDir, { recursive: true });
}

if (fs.existsSync(outputPath)) {
  console.error(`File already exists: ${outputPath}`);
  process.exit(1);
}

fs.writeFileSync(outputPath, content, "utf-8");
console.log(`Created: ${outputPath}`);
