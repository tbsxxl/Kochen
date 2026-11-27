// Vorschaubilder für die Skin-Auswahl: Startseite je Skin (oberer Teil, 3 : 4) als assets/skins/<skin>.jpg.
// Ablauf: Seite bauen, `python3 -m http.server 8411 --directory _site`, dann `node tools/skin-previews.js`
// und `for f in assets/skins/*.jpg; do convert $f -resize 300x400 -quality 74 -strip $f; done`
// (danach `?v=` an den Bildern in _layouts/default.html hochzählen – sonst zeigen Geräte die alten Bilder aus dem Zwischenspeicher).
// Nach sichtbaren Änderungen an einem Skin neu erzeugen. 3D-Köpfe brauchen WebGL: Chromium mit SwiftShader + `kochbuch.ui.cineForce`.
// Einzelne Skins: `node tools/skin-previews.js http://localhost:8411 nordwall,akte`.
const { chromium } = require("playwright");
const path = require("path");
const BASE = process.argv[2] || "http://localhost:8411";
const ALL = ["standard", "retro", "terminal", "diner", "bauhaus", "nordwall", "zauberschule", "jahr3000", "zweistaedte", "insel", "akte", "brigade", "boxengasse", "bildband", "wortwelt", "blauraum", "glasklar", "tiefsee", "formlabor", "galerie", "brandbrief"];
const SKINS = process.argv[3] ? process.argv[3].split(",") : ALL;
(async ()=>{
  const b = await chromium.launch({ args: ["--use-gl=angle", "--use-angle=swiftshader", "--enable-unsafe-swiftshader", "--ignore-gpu-blocklist"] });
  for(const s of SKINS){
    const c = await b.newContext({ viewport: { width: 390, height: 760 }, deviceScaleFactor: 1, isMobile: true, hasTouch: true, reducedMotion: "reduce", colorScheme: "light" });
    await c.addInitScript((s)=>{ try{ if(s !== "standard") localStorage.setItem("kochbuch.ui.skin", JSON.stringify(s)); localStorage.setItem("kochbuch.ui.retroBoot", new Date().toDateString()); localStorage.setItem("kochbuch.ui.cineForce", "1"); localStorage.setItem("kochbuch.ui.introDay", s + "|" + new Date().toDateString()); sessionStorage.setItem("kochbuch.ui.intro", s); }catch(e){} }, s);
    const p = await c.newPage();
    await p.goto(BASE + "/"); await p.waitForTimeout(6000);
    // Tab-Leiste und Kapsel gehören nicht ins Vorschaubild
    await p.addStyleTag({ content: ".tabbar,.nowCooking,.retroBoot{display:none !important}" });
    await p.screenshot({ path: path.join(__dirname, "..", "assets", "skins", s + ".jpg"), type: "jpeg", quality: 72, timeout: 60000, clip: { x: 0, y: 0, width: 390, height: 520 } });
    await c.close();
  }
  await b.close();
  console.log("OK: " + SKINS.length + " Vorschaubilder");
})();
