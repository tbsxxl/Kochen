// Skin „Brigade“ (Dez. 2026, mehr eigener Charakter): Rezeptliste = Bonleiste (jeder Eintrag ein Bon mit Abriss, Bon-Nummer, Garzeit,
// klemmt an einer Edelstahlschiene), Rezeptseite: Name auf blauem Malerkrepp über dem Foto wie an der Station beschriftet,
// Start: Schiene mit drei Bons (heute + zwei weitere).
(()=>{
  "use strict";
  const esc = (t)=> String(t || "").replace(/[&<>"]/g, (c)=> ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);

  function home(api){
    const quick = document.querySelector(".homeQuick"); if(!quick) return;
    const all = api.recipes(); if(all.length < 3) return;
    let seed = Math.floor(Date.now() / 864e5);
    const pick = [0, 1, 2].map((k)=> all[(seed * 7 + k * 13) % all.length]);
    const el = api.bit("bgRail", "brigade");
    el.innerHTML = `<p class="bgRailHead">Auf der Schiene</p><div class="bgTickets">${pick.map((r, i)=> `<a class="bgTicket" href="${esc(r.u)}" style="--r:${[-2, 1.5, -1][i]}deg"><span class="bgNo">Bon ${1020 + ((seed + i * 17) % 80)}</span><b>1× ${esc(r.t)}</b><i>${esc((r.z || "").split("·")[0].trim())}</i></a>`).join("")}</div>`;
    quick.after(el); api.add(()=> el.remove());
  }

  function list(api){
    const grid = document.getElementById("recipeGrid"); if(!grid) return;
    grid.querySelectorAll(".linkCard").forEach((c, i)=> c.style.setProperty("--bon", `"BON ${String(1001 + i)}"`));
    document.documentElement.classList.add("bgList"); api.add(()=> document.documentElement.classList.remove("bgList"));
  }

  function recipe(api){
    const hero = document.querySelector(".recipePageHero"), D = window.RECIPE_DATA; if(!hero || !D) return;
    const t = api.bit("bgTape", "brigade"); t.setAttribute("aria-hidden", "true"); t.textContent = D.title;
    hero.append(t); api.add(()=> t.remove());
  }

  window.KOCHBUCH_FX.brigade = { start(api){ if(api.home()) home(api); list(api); recipe(api); }, refresh(api){ list(api); } };
})();
