#!/usr/bin/env node
// Rundum-Test: alle Rezeptseiten und die wichtigsten Abläufe im Handy-Format durchspielen.
//
//   LANG=C.UTF-8 bundle exec jekyll build
//   python3 -m http.server 8411 --directory _site &
//   node tools/flows.js [http://localhost:8411]
//
// Prüft je Rezept: Titel, Untertitel, Zutaten, Schritte, keine Reste wie „[1 EL | 2 EL]“ oder „Öl*“, keine JS-Fehler.
// Abläufe: Kochmodus (öffnen, weiter, schließen → „Kochen läuft“-Kapsel), Zur Liste, Planen, Favorit,
// Kategorie-Kachel → gefilterte Liste, Suche + Trefferzahl, Einstellungen „Darstellung“ und „Rezeptliste“.
const fs = require('fs');
const path = require('path');
let chromium;
try { ({ chromium } = require('playwright')); }
catch { ({ chromium } = require(path.join(require('child_process').execSync('npm root -g').toString().trim(), 'playwright'))); }

const BASE = (process.argv[2] || 'http://localhost:8411').replace(/\/$/, '');
const RECIPES = fs.readdirSync(path.join(__dirname, '..', '_recipes')).filter(f => f.endsWith('.md')).map(f => f.slice(0, -3));

(async () => {
  const problems = [];
  const browser = await chromium.launch();
  const ctx = await browser.newContext({ viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true });
  const page = await ctx.newPage();
  let current = '';
  page.on('pageerror', e => problems.push(`${current}: JS-Fehler: ${e.message}`));
  const go = async (p) => { current = p; await page.goto(BASE + p); await page.waitForTimeout(150); };
  const check = (ok, msg) => { if (!ok) problems.push(`${current}: ${msg}`); };

  // ---------- Alle Rezepte ----------
  for (const r of RECIPES) {
    await go(`/rezepte/${r}/`);
    const info = await page.evaluate(() => ({
      title: document.querySelector('.recipeName')?.textContent.trim(),
      subtitle: document.querySelector('.recipeSubtitle')?.textContent.trim(),
      ings: document.querySelectorAll('#ingredientsList .uRow').length,
      steps: document.querySelectorAll('.recipeBody ol li').length,
      text: document.querySelector('.recipeBody')?.innerText || ''
    }));
    check(info.title, 'kein Titel');
    check(info.subtitle, 'kein Untertitel');
    check(info.ings > 0, 'keine Zutaten');
    check(info.steps > 0, 'keine Schritte');
    check(!/\[[^\]]*\|[^\]]*\]/.test(info.text), 'Mengen für andere Portionen „[… | …]“ im Text');
    check(!/[A-Za-zäöüß]\*/.test(info.text), 'Sternchen hinter Zutaten im Text');
  }

  // ---------- Kochmodus, Zur Liste, Planen, Favorit ----------
  const demo = RECIPES.includes('lasagne-wie-beim-italiener') ? 'lasagne-wie-beim-italiener' : RECIPES[0];
  await go(`/rezepte/${demo}/`);
  await page.evaluate(() => localStorage.clear());
  await go(`/rezepte/${demo}/`);
  await page.tap('#cookingModeQuick'); await page.waitForTimeout(300);
  check(await page.evaluate(() => document.querySelector('#cookOverlay')?.classList.contains('open')), 'Kochmodus öffnet nicht');
  await page.tap('#cookNext'); await page.waitForTimeout(150);
  check((await page.textContent('#cookStepPill'))?.startsWith('2/'), 'Kochmodus: „Weiter“ geht nicht zu Schritt 2');
  await page.tap('#cookClose'); await page.waitForTimeout(300);
  check(await page.evaluate(() => !document.querySelector('.nowCooking')?.hidden), '„Kochen läuft“-Kapsel fehlt nach dem Schließen');

  await page.tap('#addToShopping'); await page.waitForTimeout(150);
  const shop = await page.evaluate(() => JSON.parse(localStorage.getItem('kochbuch.shopping') || '[]'));
  check(shop.length > 0, '„Zur Liste“ legt nichts auf die Einkaufsliste');
  check(!shop.some(i => /^fett für die form$/i.test(i.item)), '„Fett für die Form“ landet auf der Liste');

  await page.tap('#planQuick'); await page.waitForTimeout(300);
  await page.tap('#planDays [data-day] >> nth=0'); await page.waitForTimeout(150);
  await page.tap('#planDays [data-day] >> nth=1'); await page.waitForTimeout(150);
  if (await page.getAttribute('#planLeftover', 'aria-checked') !== 'true') { await page.tap('#planLeftover'); await page.waitForTimeout(150); }
  const plan = await page.evaluate(() => JSON.parse(localStorage.getItem('kochbuch.plan') || '{}'));
  const planned = Object.keys(plan).sort().map(k => plan[k]).flat();
  check(planned.length === 2, `„Planen“ über zwei Tage: ${planned.length} Einträge statt 2`);
  check(planned.length === 2 && !planned[0].leftover && planned[1].leftover, '„Einmal kochen, Reste essen“ markiert den zweiten Tag nicht als Reste');
  await page.tap('#planDone'); await page.waitForTimeout(300);

  await page.tap('#favQuick'); await page.waitForTimeout(150);
  check(await page.evaluate(() => Object.values(JSON.parse(localStorage.getItem('kochbuch.stats') || '{}')).some(e => e.favorite)), 'Favorit wird nicht gespeichert');

  await go('/wochenplan/');
  check(await page.evaluate(() => !document.querySelector('#weekToShopping').hidden), 'Wochenplan: Einkaufs-Knopf fehlt trotz geplantem Gericht');
  check(/für 1 Gericht/.test(await page.textContent('#weekToShopping')) || !(await page.$('.planLeftoverTag')), 'Wochenplan: Reste-Tag wird beim Einkaufen mitgezählt');
  await go('/shopping/');
  check(await page.evaluate(() => document.querySelectorAll('#shopList .uRow').length > 0), 'Einkaufsliste zeigt nichts an');

  // ---------- Kategorien → gefilterte Rezeptliste, Suche ----------
  await go('/kategorien/');
  const tiles = await page.$$('.catTile');
  check(tiles.length > 0, 'keine Kategorie-Kacheln');
  if (tiles.length) {
    await tiles[0].tap(); await page.waitForTimeout(400); current = page.url().replace(BASE, '');
    const n = await page.evaluate(() => document.querySelectorAll('[data-recipe-card]:not([style*="none"])').length);
    check(n > 0 && n < RECIPES.length, `Kachel filtert nicht (zeigt ${n})`);
  }
  await go('/rezeptindex/');
  check(/\d+ Rezepte/.test(await page.textContent('#resultCount')), 'Trefferzahl fehlt');
  await page.fill('#searchInput', 'zzzz-gibt-es-nicht'); await page.waitForTimeout(150);
  check(await page.evaluate(() => !document.querySelector('#emptyState').hidden), 'Suche: „Keine Rezepte gefunden“ fehlt');
  check(await page.evaluate(() => !document.querySelector('#clearSearch').hidden), 'Suche: ✕ zum Löschen fehlt');

  // ---------- Einstellungen ----------
  await page.tap('#moreBtn'); await page.waitForTimeout(300);
  await page.tap('[data-theme-opt="dark"]');
  check(await page.evaluate(() => document.documentElement.getAttribute('data-theme') === 'dark'), 'Darstellung „Dunkel“ wirkt nicht');
  await page.tap('[data-list-opt="cards"]');
  check(await page.evaluate(() => getComputedStyle(document.querySelector('#recipeGrid')).gridTemplateColumns.split(' ').length === 1), 'Rezeptliste „Karten“ wirkt nicht');

  await browser.close();
  if (problems.length) { console.error(problems.join('\n')); console.error(`\n${problems.length} Problem(e).`); process.exit(1); }
  console.log(`OK: ${RECIPES.length} Rezepte und alle Abläufe geprüft.`);
})().catch(e => { console.error(e); process.exit(1); });
