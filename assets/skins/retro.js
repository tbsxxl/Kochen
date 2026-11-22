// Skin „Retro“ (Dez. 2026, mehr eigener Charakter): alles ist ein Fenster wie auf einem alten Schreibtisch-Rechner.
// Start: Fenster „Tobis Kochbuch“ mit Menüleiste und Ordner-Symbolen für die Kategorien; Rezeptliste: Explorer-Fenster in der
// Detailansicht (Name, Zeit, Art); Rezeptseite: Bildbetrachter-Fenster mit Statusleiste.
(()=>{
  "use strict";
  const esc = (t)=> String(t || "").replace(/[&<>"]/g, (c)=> ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);
  const BAR = (t)=> `<div class="rtBar"><span class="rtTitle">${t}</span><span class="rtBtns" aria-hidden="true"><i>_</i><i>□</i><i>×</i></span></div>`;
  const FOLDER = `<svg viewBox="0 0 32 32" aria-hidden="true"><path d="M2 8h11l3 3h14v17H2z" fill="#F7D560" stroke="#000" stroke-width="1.5"/><path d="M2 12h28" stroke="#C9A22C" stroke-width="1.5"/></svg>`;
  const CATS = ["Schnell", "Pasta", "Curry", "Schmorgerichte", "Burger & Sandwiches", "Süßes & Backen", "Suppen & Eintöpfe", "Wochenendprojekt"];

  function home(api){
    const g = document.querySelector(".homeGreeting"); if(!g) return;
    let cats = []; try{ cats = JSON.parse(document.getElementById("homeCats")?.textContent || "[]"); }catch{}
    const list = CATS.filter((c)=> !cats.length || cats.includes(c));
    const el = api.bit("rtDesk", "retro");
    el.innerHTML = `<div class="rtWin">${BAR("Tobis Kochbuch")}<div class="rtMenu" aria-hidden="true"><u>D</u>atei <u>B</u>earbeiten <u>A</u>nsicht <u>?</u></div>
      <div class="rtIcons">${list.map((c)=> `<a class="rtIcon" href="/rezeptindex/?kategorie=${encodeURIComponent(c)}">${FOLDER}<span>${esc(c)}</span></a>`).join("")}</div>
      <div class="rtStatus"><span>${list.length} Objekt(e)</span><span>Heute: ${esc(new Date().toLocaleDateString("de-DE", { weekday: "long" }))}</span></div></div>`;
    g.after(el); api.add(()=> el.remove());
  }

  function list(api){
    const grid = document.getElementById("recipeGrid"); if(!grid) return;
    const n = grid.querySelectorAll(".linkCard").length;
    const head = api.bit("rtExplorer", "retro");
    head.innerHTML = `${BAR(`C:\\Rezepte\\*.rez`)}<div class="rtMenu" aria-hidden="true"><u>D</u>atei <u>B</u>earbeiten <u>A</u>nsicht <u>?</u></div><div class="rtCols" aria-hidden="true"><span>Name</span><span>Zeit</span></div>`;
    grid.before(head); api.add(()=> head.remove());
    const st = api.bit("rtStatus rtGridStatus", "retro");
    st.innerHTML = `<span>${n} Objekt(e)</span><span>Tobis Kochbuch</span>`;
    grid.after(st); api.add(()=> st.remove());
    document.documentElement.classList.add("rtList"); api.add(()=> document.documentElement.classList.remove("rtList"));
  }

  function recipe(api){
    const hero = document.querySelector(".recipePageHero"), D = window.RECIPE_DATA; if(!hero || !D) return;
    const name = (D.id || "").split("/").filter(Boolean).pop() || "rezept";
    const bar = api.bit("rtHeroBar", "retro"); bar.innerHTML = BAR(`${esc(name)}.jpg – Bildbetrachter`);
    hero.prepend(bar); api.add(()=> bar.remove());
    const st = api.bit("rtStatus rtHeroStatus", "retro");
    st.innerHTML = `<span>${esc(D.category || "Rezept")}</span><span>${esc(D.baseServings)} Portion(en)</span>`;
    hero.after(st); api.add(()=> st.remove());
  }

  window.KOCHBUCH_FX.retro = { start(api){ if(api.home()) home(api); list(api); recipe(api); } };
})();
