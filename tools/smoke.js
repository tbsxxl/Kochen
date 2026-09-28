#!/usr/bin/env node
// Kurzer Rauchtest: wichtige Seiten im Browser öffnen und auf JS-Fehler und fehlende Dateien prüfen.
//
//   LANG=C.UTF-8 bundle exec jekyll build
//   python3 -m http.server 8411 --directory _site &
//   node tools/smoke.js [http://localhost:8411]
//
// /api/* gibt es nur im Worker (npx wrangler dev) – Fehler dorthin werden ignoriert.
const path = require('path');
let chromium;
try { ({ chromium } = require('playwright')); }
catch { ({ chromium } = require(path.join(require('child_process').execSync('npm root -g').toString().trim(), 'playwright'))); }

const BASE = (process.argv[2] || 'http://localhost:8411').replace(/\/$/, '');
const PAGES = ['/', '/rezeptindex/', '/kategorien/', '/shopping/', '/wochenplan/', '/was-koche-ich/', '/kuehltruhe/', '/konto/', '/neues-rezept/', '/vorschlaege/', '/backup/'];
const FILES = ['/assets/vendor/jspdf.umd.min.js', '/assets/vendor/js-yaml.min.js', '/sw.js', '/manifest.json', '/_redirects'];

(async () => {
  const problems = [];
  const browser = await chromium.launch();
  const page = await (await browser.newContext({ viewport: { width: 390, height: 844 } })).newPage();
  let current = '';
  page.on('pageerror', e => problems.push(`${current}: JS-Fehler: ${e.message}`));
  page.on('response', r => {
    const u = new URL(r.url());
    if (u.origin === new URL(BASE).origin && !u.pathname.startsWith('/api/') && r.status() >= 400) problems.push(`${current}: ${r.status()} ${u.pathname}`);
  });

  for (const f of FILES) {
    const res = await page.request.get(BASE + f);
    if (!res.ok()) problems.push(`Datei fehlt: ${f} (${res.status()})`);
  }

  for (const p of PAGES) {
    current = p;
    await page.goto(BASE + p, { waitUntil: 'load' });
    await page.waitForTimeout(400);
  }

  // Eine Rezeptseite genauer: Menü, Kochmodus, Portionen
  const first = await (await page.request.get(BASE + '/rezeptindex/')).text();
  const m = first.match(/href="(\/rezepte\/[^"]+\/)"/);
  if (!m) problems.push('Keine Rezeptseite gefunden');
  else {
    current = m[1];
    await page.goto(BASE + m[1], { waitUntil: 'load' });
    await page.click('#servingsPlus');
    await page.click('#recipeMoreBtn');
    await page.waitForTimeout(300);
    await page.click('#recipeSheetClose');
    await page.waitForTimeout(300);
    await page.click('#cookingModeQuick');
    await page.waitForTimeout(300);
    if (!(await page.locator('#cookOverlay.open').count())) problems.push(`${m[1]}: Kochmodus öffnet nicht`);
    const pdfLib = await page.evaluate(async () => (await fetch(document.getElementById('pdfBtn').dataset.lib)).status);
    if (pdfLib !== 200) problems.push(`${m[1]}: jsPDF nicht erreichbar (${pdfLib})`);
  }

  await browser.close();
  if (problems.length) {
    console.error('Probleme gefunden:\n- ' + problems.join('\n- '));
    process.exit(1);
  }
  console.log(`OK: ${PAGES.length + 1} Seiten, ${FILES.length} Dateien geprüft.`);
})();
