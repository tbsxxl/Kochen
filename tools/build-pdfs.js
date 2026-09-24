#!/usr/bin/env node
// Erzeugt für jedes Rezept ein PDF unter assets/pdf/<name>.pdf (Originalportionen).
// Nutzt denselben PDF-Aufbau wie der Knopf „Als PDF speichern“ (assets/recipe-pdf.js).
//
//   LANG=C.UTF-8 bundle exec jekyll build
//   python3 -m http.server 8411 --directory _site &      # oder npx wrangler dev
//   node tools/build-pdfs.js [http://localhost:8411]
//   LANG=C.UTF-8 bundle exec jekyll build                # damit die Seiten den PDF-Link bekommen
//
// Benötigt Playwright mit Chromium (npm i -g playwright).
const fs = require('fs');
const path = require('path');
let chromium;
try { ({ chromium } = require('playwright')); }
catch { ({ chromium } = require(path.join(require('child_process').execSync('npm root -g').toString().trim(), 'playwright'))); }

const BASE = process.argv[2] || 'http://localhost:8411';
const ROOT = path.join(__dirname, '..');
const OUT = path.join(ROOT, 'assets', 'pdf');

(async () => {
  fs.mkdirSync(OUT, { recursive: true });
  const slugs = fs.readdirSync(path.join(ROOT, '_site', 'rezepte'));
  const browser = await chromium.launch();
  const page = await (await browser.newContext({ viewport: { width: 390, height: 844 } })).newPage();
  let ok = 0;
  for (const slug of slugs) {
    await page.goto(`${BASE}/rezepte/${encodeURIComponent(slug)}/`, { waitUntil: 'load' });
    await page.waitForFunction(() => { const i = document.querySelector('.recipeHeroImg'); return !i || (i.complete && i.naturalWidth > 0); }, null, { timeout: 10000 }).catch(() => {});
    const res = await page.evaluate(async () => {
      const name = document.getElementById('pdfBtn')?.getAttribute('data-pdf-name');
      const blob = await window.KOCHBUCH_PDF.buildLive();
      const b64 = await new Promise(r => { const fr = new FileReader(); fr.onload = () => r(String(fr.result).split(',')[1]); fr.readAsDataURL(blob); });
      return { name, b64 };
    });
    fs.writeFileSync(path.join(OUT, res.name), Buffer.from(res.b64, 'base64'));
    ok++;
  }
  await browser.close();
  console.log(`${ok} PDFs in assets/pdf/`);
})();
