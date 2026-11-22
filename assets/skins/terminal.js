// Skin „Terminal“ (Dez. 2026, mehr eigener Charakter): die Startseite ist eine Sitzung im Terminal (Befehle tippen sich, Antworten
// sind antippbar), die Rezeptliste eine `ls -l`-Ausgabe, die Rezeptseite beginnt mit `cat <rezept>.rez`.
(()=>{
  "use strict";
  const esc = (t)=> String(t || "").replace(/[&<>"]/g, (c)=> ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);
  const P = `<b>tobi@kochbuch</b>:<i>~</i>$ `;

  function home(api){
    const g = document.querySelector(".homeGreeting"); if(!g) return;
    const a = document.getElementById("todayLink"), title = a?.querySelector(".homeFeaturedTitle")?.textContent.trim() || "";
    const meta = [...(a?.querySelectorAll(".recipeMeta .metaItem") || [])].map((m)=> m.textContent.trim()).filter(Boolean).join("  ");
    let cats = []; try{ cats = JSON.parse(document.getElementById("homeCats")?.textContent || "[]"); }catch{}
    const d = new Date();
    const lines = [
      [P, "date", `${d.toLocaleDateString("de-DE", { weekday: "short", day: "2-digit", month: "short", year: "numeric" })} ${d.toTimeString().slice(0, 5)}`],
      [P, "heute --empfehlung", title ? `<a href="${esc(a.getAttribute("href"))}">→ ${esc(title)}</a>  <span>${esc(meta)}</span>` : "keine Empfehlung"],
      [P, "ls kategorien/", cats.slice(0, 9).map((c)=> `<a href="/rezeptindex/?kategorie=${encodeURIComponent(c)}">${esc(c.toLowerCase().replace(/ & /g, "+").replace(/ /g, "_"))}/</a>`).join("  ")],
      [P, "", ""],
    ];
    const el = api.bit("tmShell", "terminal");
    el.innerHTML = lines.map(([p, c, o], i)=> `<p class="tmCmd" style="--i:${i}">${p}<kbd data-c="${esc(c)}">${api.reduce() ? esc(c) : ""}</kbd>${i === lines.length - 1 ? '<span class="tmCaret"></span>' : ""}</p>${o ? `<p class="tmOut" style="--i:${i}">${o}</p>` : ""}`).join("");
    g.after(el); api.add(()=> el.remove());
    if(api.reduce()) { el.classList.add("done"); return; }
    // Befehle nacheinander tippen
    const ks = [...el.querySelectorAll("kbd")], outs = [...el.querySelectorAll(".tmOut")];
    outs.forEach((o)=> o.hidden = true);
    let k = 0, ch = 0, alive = true; api.add(()=>{ alive = false; });
    const step = ()=>{
      if(!alive || k >= ks.length) { el.classList.add("done"); return; }
      const full = ks[k].dataset.c;
      if(ch <= full.length){ ks[k].textContent = full.slice(0, ch++); setTimeout(step, 38 + Math.random() * 40); return; }
      if(outs[k]) outs[k].hidden = false;
      k++; ch = 0; setTimeout(step, 260);
    };
    setTimeout(step, 300);
  }

  function list(api){
    const grid = document.getElementById("recipeGrid"); if(!grid) return;
    const n = grid.querySelectorAll(".linkCard").length;
    const head = api.bit("tmLs", "terminal", "p");
    head.innerHTML = `${P}<kbd>ls -l rezepte/</kbd><br><span>insgesamt ${n}</span>`;
    grid.before(head); api.add(()=> head.remove());
    document.documentElement.classList.add("tmList"); api.add(()=> document.documentElement.classList.remove("tmList"));
  }

  function recipe(api){
    const hero = document.querySelector(".recipePageHero"), D = window.RECIPE_DATA; if(!hero || !D) return;
    const name = (D.id || "").split("/").filter(Boolean).pop() || "rezept";
    const el = api.bit("tmCat", "terminal", "p");
    el.innerHTML = `${P}<kbd>cat ${esc(name)}.rez</kbd>`;
    hero.before(el); api.add(()=> el.remove());
  }

  window.KOCHBUCH_FX.terminal = { start(api){ if(api.home()) home(api); list(api); recipe(api); } };
})();
