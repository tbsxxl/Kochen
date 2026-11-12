// Vorschaubilder für die Skin-Auswahl: Startseite je Skin (oberer Teil, 3 : 4) als assets/skins/<skin>.jpg.
// Ablauf: Seite bauen, `python3 -m http.server 8411 --directory _site`, dann `node tools/skin-previews.js`
// und `for f in assets/skins/*.jpg; do convert $f -resize 300x400 -quality 74 -strip $f; done`
// (danach `?v=` an den Bildern in _layouts/default.html hochzählen). Nach sichtbaren Änderungen an einem Skin neu erzeugen.
const { chromium } = require("playwright");
const path = require("path");
const BASE = process.argv[2] || "http://localhost:8411";
const SKINS = ["standard", "retro", "terminal", "diner", "bauhaus", "nordwall", "zauberschule", "jahr3000", "zweistaedte", "insel", "akte", "brigade", "boxengasse", "bildband"];
(async ()=>{
  const b = await chromium.launch();
  for(const s of SKINS){
    const c = await b.newContext({ viewport: { width: 390, height: 760 }, deviceScaleFactor: 1, isMobile: true, hasTouch: true, reducedMotion: "reduce", colorScheme: "light" });
    await c.addInitScript((s)=>{ try{ if(s !== "standard") localStorage.setItem("kochbuch.ui.skin", JSON.stringify(s)); localStorage.setItem("kochbuch.ui.retroBoot", new Date().toDateString()); }catch(e){} }, s);
    const p = await c.newPage();
    await p.goto(BASE + "/"); await p.waitForTimeout(1200);
    // Tab-Leiste und Kapsel gehören nicht ins Vorschaubild
    await p.addStyleTag({ content: ".tabbar,.nowCooking,.retroBoot{display:none !important}" });
    await p.screenshot({ path: path.join(__dirname, "..", "assets", "skins", s + ".jpg"), type: "jpeg", quality: 72, clip: { x: 0, y: 0, width: 390, height: 520 } });
    await c.close();
  }
  await b.close();
  console.log("OK: " + SKINS.length + " Vorschaubilder");
})();
