// Skin „Zwei Städte“ (Dez. 2026, mehr eigener Charakter): Start = geteilter Bildschirm – oben die goldene Stadt (Art-déco-Bogen mit
// Tagesgericht), unten die Neon-Stadt (schnelles Gericht mit Leuchtrahmen), dazwischen ein Zahnrad-Grat. Rezeptliste im Wechsel
// gold (Bogenrahmen) und neon (Leuchtrahmen), Rezeptseite mit Bogenrahmen.
(()=>{
  "use strict";
  const esc = (t)=> String(t || "").replace(/[&<>"]/g, (c)=> ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);
  const GEAR = `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 8a4 4 0 100 8 4 4 0 000-8zM10.5 2h3l.5 2.6 2 .9 2.2-1.5 2.1 2.1-1.5 2.2.9 2 2.6.5v3l-2.6.5-.9 2 1.5 2.2-2.1 2.1-2.2-1.5-2 .9-.5 2.6h-3l-.5-2.6-2-.9-2.2 1.5-2.1-2.1 1.5-2.2-.9-2L2 13.5v-3l2.6-.5.9-2L4 5.8l2.1-2.1 2.2 1.5 2-.9z" fill="none" stroke="currentColor" stroke-width="1.4"/></svg>`;

  function home(api){
    const g = document.querySelector(".homeGreeting"); if(!g) return;
    const all = api.recipes(); if(!all.length) return;
    const a = document.getElementById("todayLink"), title = a?.querySelector(".homeFeaturedTitle")?.textContent.trim();
    const top = all.find((r)=> r.t === title) || all[0];
    let seed = Math.floor(Date.now() / 864e5) + 7; const quick = all.filter((r)=>{ const z = (r.z || "").split("·")[0]; if(/Std/.test(z)) return false; const n = (z.match(/\d+/g) || []).map(Number); return r !== top && n.length && Math.max(...n) <= 35; });
    const low = quick.length ? quick[seed % quick.length] : all[(seed * 3) % all.length];
    const el = api.bit("zwSplit", "zweistaedte");
    el.innerHTML = `<a class="zwUp" href="${esc(top.u)}"><span class="zwArch"><img src="${esc(top.i)}" alt=""></span><small>Oben · Festtafel</small><b>${esc(top.t)}</b><i>${esc(top.z || "")}</i></a>
      <div class="zwGear" aria-hidden="true">${GEAR}</div>
      <a class="zwDown" href="${esc(low.u)}"><span class="zwNeonImg"><img src="${esc(low.i)}" alt=""></span><small>Unten · schnell &amp; heiß</small><b>${esc(low.t)}</b><i>${esc(low.z || "")}</i></a>`;
    g.after(el); api.add(()=> el.remove());
  }

  function list(api){
    if(!document.getElementById("recipeGrid")) return;
    document.documentElement.classList.add("zwList"); api.add(()=> document.documentElement.classList.remove("zwList"));
  }

  window.KOCHBUCH_FX.zweistaedte = { start(api){ if(api.home()) home(api); list(api); } };
})();
