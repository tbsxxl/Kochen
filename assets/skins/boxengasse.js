// Skin „Boxengasse“ (Dez. 2026, mehr eigener Charakter): Rezeptliste = Zeitenmonitor (Position, Name, Zeit, Abstand zum Schnellsten,
// Sektorbalken), Start: „Startaufstellung“ der drei schnellsten Gerichte; Rezeptseite: Telemetrie-Leiste.
(()=>{
  "use strict";
  const esc = (t)=> String(t || "").replace(/[&<>"]/g, (c)=> ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);
  const mins = (z)=>{ z = String(z || "").split("·")[0]; const h = /(\d+)\s*Std/.exec(z), m = [...z.matchAll(/(\d+)\s*Min/g)].map((x)=> +x[1]); const r = /(\d+)\s*–\s*(\d+)\s*Min/.exec(z); return (h ? +h[1] * 60 : 0) + (r ? +r[2] : (m.length ? m[m.length - 1] : 0)); };

  function home(api){
    const quick = document.querySelector(".homeQuick"); if(!quick) return;
    const all = api.recipes().map((r)=> ({ ...r, m: mins(r.z) })).filter((r)=> r.m > 0).sort((a, b)=> a.m - b.m).slice(0, 3);
    if(all.length < 3) return;
    const el = api.bit("bxGrid", "boxengasse");
    el.innerHTML = `<p class="bxGridHead"><span>Startaufstellung</span><span>Die Schnellsten</span></p>${[1, 0, 2].map((k)=>{ const r = all[k]; return `<a class="bxSlot bxP${k + 1}" href="${esc(r.u)}"><img src="${esc(r.i)}" alt=""><b>P${k + 1}</b><span>${esc(r.t)}</span><i>${r.m} Min</i></a>`; }).join("")}`;
    quick.after(el); api.add(()=> el.remove());
  }

  function list(api){
    const grid = document.getElementById("recipeGrid"); if(!grid) return;
    const cards = [...grid.querySelectorAll(".linkCard")];
    const ms = cards.map((c)=> mins(c.querySelector(".recipeMeta")?.textContent));
    const best = Math.min(...ms.filter((m)=> m > 0));
    cards.forEach((c, i)=>{
      c.style.setProperty("--pos", `"P${i + 1}"`);
      c.style.setProperty("--gap", `"${ms[i] > 0 ? (ms[i] === best ? "Schnellste" : "+" + (ms[i] - best) + " Min") : "–"}"`);
      c.style.setProperty("--s1", (.3 + ((i * 37) % 70) / 100).toFixed(2));
    });
    if(!document.querySelector(".bxBoardHead")){
      const head = api.bit("bxBoardHead", "boxengasse");
      head.innerHTML = `<span>Pos</span><span>Gericht</span><span>Abstand</span>`;
      grid.before(head); api.add(()=> head.remove());
    }
    document.documentElement.classList.add("bxList"); api.add(()=> document.documentElement.classList.remove("bxList"));
  }

  function recipe(api){
    const body = document.querySelector(".recipePageBody"), D = window.RECIPE_DATA; if(!body || !D) return;
    const facts = [...document.querySelectorAll(".recipeFacts .kv")].map((k)=> k.textContent.trim()).filter(Boolean);
    const steps = document.querySelectorAll("#stepsPane li, .recipeBody ol > li").length;
    const el = api.bit("bxTele", "boxengasse");
    el.innerHTML = [["Zeit", facts[0] || "–"], ["Portionen", D.baseServings], ["Schritte", steps || "–"], ["Zutaten", (D.ingredients || []).filter((x)=> !x.section).length]].map(([k, v])=> `<span><small>${k}</small><b>${esc(v)}</b></span>`).join("");
    body.prepend(el); api.add(()=> el.remove());
  }

  window.KOCHBUCH_FX.boxengasse = { start(api){ if(api.home()) home(api); list(api); recipe(api); }, refresh(api){ list(api); } };
})();
