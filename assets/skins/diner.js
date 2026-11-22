// Skin „Diner“ (Dez. 2026, mehr eigener Charakter): Leuchtschild „Tobis Diner – geöffnet“ mit Tafel „Tagesgericht“ auf der Startseite,
// die Rezeptliste ist eine Speisekarte (Name …… Zeit, Untertitel klein, Foto rund), die Rezeptseite ein Bestellzettel.
(()=>{
  "use strict";
  const esc = (t)=> String(t || "").replace(/[&<>"]/g, (c)=> ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);

  function home(api){
    const g = document.querySelector(".homeGreeting"); if(!g) return;
    const a = document.getElementById("todayLink"), title = a?.querySelector(".homeFeaturedTitle")?.textContent.trim();
    const meta = [...(a?.querySelectorAll(".recipeMeta .metaItem") || [])].map((m)=> m.textContent.trim()).filter(Boolean)[0] || "";
    const open = new Date().getHours() >= 11 && new Date().getHours() < 23;
    const el = api.bit("dnSign", "diner");
    el.innerHTML = `<div class="dnNeon"><span class="dnTobis">Tobis</span><span class="dnDiner">Diner</span><span class="dnOpen${open ? "" : " off"}">${open ? "Geöffnet" : "Geschlossen"}</span></div>
      ${title ? `<a class="dnBoard" href="${esc(a.getAttribute("href"))}"><small>Tagesgericht</small><b>${esc(title)}</b><i>${esc(meta)}</i></a>` : ""}`;
    g.after(el); api.add(()=> el.remove());
  }

  function list(api){
    const grid = document.getElementById("recipeGrid"); if(!grid) return;
    const head = api.bit("dnMenuHead", "diner");
    head.innerHTML = `<b>Speisekarte</b><span>Alle Gerichte frisch gekocht · Zeit statt Preis</span>`;
    grid.before(head); api.add(()=> head.remove());
    document.documentElement.classList.add("dnList"); api.add(()=> document.documentElement.classList.remove("dnList"));
  }

  function recipe(api){
    const body = document.querySelector(".recipePageBody"), D = window.RECIPE_DATA; if(!body || !D) return;
    let n = 0; for(const c of D.id || "") n = (n * 31 + c.charCodeAt(0)) % 900;
    const facts = [...document.querySelectorAll(".recipeFacts .kv")].map((k)=> k.textContent.trim()).filter(Boolean);
    const el = api.bit("dnSlip", "diner");
    el.innerHTML = `<div class="dnSlipHead"><span>Bestellung Nr. ${100 + n}</span><span>Tisch 1</span></div><p class="dnSlipItem">1× ${esc(D.title)}</p>${facts.map((f)=> `<p class="dnSlipRow">${esc(f)}</p>`).join("")}<p class="dnSlipFoot">Danke für Ihren Besuch!</p>`;
    body.prepend(el); api.add(()=> el.remove());
  }

  window.KOCHBUCH_FX.diner = { start(api){ if(api.home()) home(api); list(api); recipe(api); } };
})();
