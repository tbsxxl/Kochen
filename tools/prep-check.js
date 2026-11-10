// Zeigt je Rezept, was der Kochmodus unter „Vorbereiten“ anbietet (automatisch erkannt oder aus `prep:` im Front Matter).
// Aufruf: node tools/prep-check.js [name-teil] [--steps]
const fs = require("fs"), path = require("path");
const yaml = require("../assets/vendor/js-yaml.min.js");
const PREP = require("../assets/prep.js");
const dir = path.join(__dirname, "..", "_recipes"), want = process.argv[2] && !process.argv[2].startsWith("--") ? process.argv[2] : "", showSteps = process.argv.includes("--steps");
for(const f of fs.readdirSync(dir).filter((x)=> x.endsWith(".md") && x.includes(want))){
  const src = fs.readFileSync(path.join(dir, f), "utf8"), m = src.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if(!m) continue;
  const fm = yaml.load(m[1]) || {}, body = m[2];
  const steps = body.split("\n").filter((l)=> /^\d+\.\s/.test(l)).map((l)=> l.replace(/^\d+\.\s+/, ""));
  const g = PREP.build({ steps, ingredients: (fm.ingredients || []).filter((i)=> i && i.item), prep: fm.prep });
  console.log(`\n## ${f.replace(/\.md$/, "")} — ${fm.title} (${fm.time || "?"})${g.manual ? " [von Hand]" : ""}`);
  if(showSteps) steps.forEach((s, i)=> console.log(`   ${i + 1}. ${s}`));
  g.start.forEach((t)=> console.log(`  ▶ ${t.text}`));
  g.tasks.forEach((t)=> console.log(`  • ${t.text}${t.step ? `  (S${t.step})` : ""}`));
  g.later.forEach((t)=> console.log(`  ⏳ ${t.text}`));
  if(!g.start.length && !g.tasks.length) console.log("  (nichts erkannt)");
}
