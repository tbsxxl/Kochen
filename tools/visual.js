// Bildvergleich: fotografiert jede Seite in jedem Skin mit eingefrorener Uhr und festem Zufall und vergleicht zwei Läufe.
// Zweck: Umbauten an CSS/Skins absichern – vorher aufnehmen, ändern, nachher aufnehmen, vergleichen.
//   node tools/visual.js shoot <ordner> [http://localhost:8411] [skin,skin…]
//   node tools/visual.js diff <ordner-vorher> <ordner-nachher>      (Abweichung > 0,05 % der Pixel = Fund; Exit-Code 1)
// Die Aufnahmen hängen von Schriften und Browser der Maschine ab und werden deshalb nicht eingecheckt.
const { chromium } = require("playwright");
const fs = require("fs"), path = require("path");
const SKINS = ["standard", "retro", "terminal", "diner", "bauhaus", "nordwall", "zauberschule", "jahr3000", "zweistaedte", "insel", "akte", "brigade", "boxengasse"];
const RECIPE = "/rezepte/dal-curry-geroesteter-blumenkohl/";
const PAGES = {
  home: async (p, B)=>{ await p.goto(B + "/"); },
  hometimer: async (p, B)=>{ await p.evaluate(()=> localStorage.setItem("kochbuch.timers", JSON.stringify([{ id: "v", end: Date.now() + 150e3, total: 600, label: "Schritt 2 · 10 Min", title: "Dal", url: "/" }]))); await p.goto(B + "/"); },
  liste: async (p, B)=>{ await p.evaluate(()=> localStorage.removeItem("kochbuch.timers")); await p.goto(B + "/rezeptindex/"); },
  rezept: async (p, B)=>{ await p.goto(B + RECIPE); },
  zutaten: async (p, B)=>{ await p.goto(B + RECIPE); await p.evaluate(()=> scrollTo(0, 640)); },
  prep: async (p, B)=>{ await p.goto(B + RECIPE); await p.waitForTimeout(300); await p.click("#cookingModeQuick"); },
  cook: async (p, B)=>{ await p.goto(B + RECIPE); await p.waitForTimeout(300); await p.click("#cookingModeQuick"); await p.waitForTimeout(300); await p.click("#cookNext"); },
  shop: async (p, B)=>{ await p.goto(B + "/shopping/"); },
  plan: async (p, B)=>{ await p.goto(B + "/wochenplan/"); },
  kat: async (p, B)=>{ await p.goto(B + "/kategorien/"); },
  was: async (p, B)=>{ await p.goto(B + "/was-koche-ich/"); },
  mehr: async (p, B)=>{ await p.goto(B + "/kategorien/"); await p.waitForTimeout(300); await p.click("#moreBtn"); },
  skins: async (p, B)=>{ await p.goto(B + "/kategorien/"); await p.waitForTimeout(300); await p.click("#moreBtn"); await p.waitForTimeout(400); await p.click("#skinRow"); },
};

async function shoot(dir, base, skins){
  fs.mkdirSync(dir, { recursive: true });
  const b = await chromium.launch(), errs = [];
  for(const s of skins){
    const c = await b.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 1, isMobile: true, hasTouch: true, reducedMotion: "reduce", colorScheme: "light", locale: "de-DE", timezoneId: "Europe/Berlin" });
    await c.addInitScript((s)=>{
      // Uhr einfrieren (Dienstag, 10. Nov. 2026, 18:30) und Zufall festlegen, damit zwei Läufe dasselbe zeigen
      const T0 = new Date(2026, 10, 10, 18, 30, 0).getTime(), RealDate = Date;
      class FDate extends RealDate{ constructor(...a){ a.length ? super(...a) : super(T0); } static now(){ return T0; } }
      window.Date = FDate;
      let seed = 42; Math.random = ()=>{ seed = (seed * 9301 + 49297) % 233280; return seed / 233280; };
      try{
        if(s !== "standard") localStorage.setItem("kochbuch.ui.skin", JSON.stringify(s));
        localStorage.setItem("kochbuch.ui.retroBoot", new RealDate(T0).toDateString());
        localStorage.setItem("kochbuch.plan", JSON.stringify({ "2026-11-10": [{ id: "/rezepte/dal-curry-geroesteter-blumenkohl/", title: "Dal", servings: 2 }] }));
      }catch(e){}
    }, s);
    const p = await c.newPage();
    p.on("pageerror", (e)=> errs.push(`${s}: ${e.message}`));
    for(const [name, go] of Object.entries(PAGES)){
      try{
        await go(p, base);
        await p.addStyleTag({ content: "*,*::before,*::after{animation:none !important;transition:none !important;caret-color:transparent !important}.similarSection{display:none !important}" });   // „Ähnliche Rezepte“ würfelt jeder Build neu
        await p.waitForTimeout(700);
        await p.screenshot({ path: path.join(dir, `${s}-${name}.png`) });
      }catch(e){ errs.push(`${s}-${name}: ${e.message.split("\n")[0]}`); }
    }
    await c.close();
  }
  await b.close();
  console.log(errs.length ? errs.join("\n") : `OK: ${skins.length * Object.keys(PAGES).length} Aufnahmen in ${dir}`);
}

async function diff(a, bDir){
  const files = fs.readdirSync(a).filter((f)=> f.endsWith(".png"));
  const b = await chromium.launch(), p = await b.newPage();
  let bad = 0;
  for(const f of files){
    if(!fs.existsSync(path.join(bDir, f))){ console.log(`fehlt: ${f}`); bad++; continue; }
    const [x, y] = [a, bDir].map((d)=> "data:image/png;base64," + fs.readFileSync(path.join(d, f)).toString("base64"));
    const r = await p.evaluate(async ([x, y])=>{
      const load = (u)=> new Promise((res)=>{ const i = new Image(); i.onload = ()=> res(i); i.src = u; });
      const [i1, i2] = await Promise.all([load(x), load(y)]);
      if(i1.width !== i2.width || i1.height !== i2.height) return { pct: 100, box: "andere Größe" };
      const data = (i)=>{ const c = document.createElement("canvas"); c.width = i.width; c.height = i.height; const g = c.getContext("2d"); g.drawImage(i, 0, 0); return g.getImageData(0, 0, i.width, i.height).data; };
      const d1 = data(i1), d2 = data(i2);
      let n = 0, x0 = 1e9, y0 = 1e9, x1 = -1, y1 = -1;
      for(let k = 0; k < d1.length; k += 4){
        if(Math.abs(d1[k] - d2[k]) + Math.abs(d1[k + 1] - d2[k + 1]) + Math.abs(d1[k + 2] - d2[k + 2]) > 48){
          n++; const px = (k / 4) % i1.width, py = Math.floor(k / 4 / i1.width);
          if(px < x0) x0 = px; if(px > x1) x1 = px; if(py < y0) y0 = py; if(py > y1) y1 = py;
        }
      }
      return { pct: n / (d1.length / 4) * 100, box: n ? `x ${x0}–${x1}, y ${y0}–${y1}` : "" };
    }, [x, y]);
    if(r.pct > 0.05){ bad++; console.log(`${f}: ${r.pct.toFixed(2)} % anders (${r.box})`); }
  }
  await b.close();
  console.log(bad ? `${bad} von ${files.length} Aufnahmen weichen ab.` : `OK: ${files.length} Aufnahmen gleich.`);
  process.exit(bad ? 1 : 0);
}

const [cmd, a1, a2, a3] = process.argv.slice(2);
if(cmd === "shoot") shoot(a1, a2 || "http://localhost:8411", a3 ? a3.split(",") : SKINS);
else if(cmd === "diff") diff(a1, a2);
else console.log("node tools/visual.js shoot <ordner> [adresse] [skins] | diff <vorher> <nachher>");
