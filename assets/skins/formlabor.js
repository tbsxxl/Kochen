// Skin „Formlabor“ (Dez. 2026, zweiter Neubau nach genauem Vergleich mit dem Vorbild – Studio-Seite: brauner Kopf mit oranger Schleife
// und Dingen, die beim Scrollen auseinanderfliegen; große Leistungsliste, deren aktive Zeile leuchtet; danach Creme mit Text, der sich
// beim Scrollen Wort für Wort füllt, tanzenden orangen Punkten, Titeln aus dünner Grotesk + kursivem Serifenwort, „[ … ]“-Beschriftungen
// und Steckbrief-Tabellen). Ohne echte Grafikkarte bleibt der Kopf ohne 3D, alles andere gilt trotzdem.
(()=>{
  "use strict";
  const PICK = ["Schnell", "Pasta", "Curry", "Schmorgerichte", "Burger & Sandwiches", "Süßes & Backen"];
  const esc = (t)=> String(t).replace(/[&<>"]/g, (c)=> ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);

  // ---------- Titel: letztes Wort kursiv in Serifenschrift ----------
  function mixTitles(api){
    document.querySelectorAll(".pageTitleBlock .h1, .recipeHeroText .recipeName, body:not(.layout-recipe) .recipePageBody .recipeName, .homeSectionTitle").forEach((h)=>{
      if(h.querySelector(".flEm") || h.children.length) return;
      const txt = h.textContent.trim(), i = txt.lastIndexOf(" ");
      const orig = h.innerHTML;
      h.innerHTML = i > 0 ? `${esc(txt.slice(0, i))} <em class="flEm">${esc(txt.slice(i + 1))}</em>` : `<em class="flEm">${esc(txt)}</em>`;
      api.add(()=>{ h.innerHTML = orig; });
    });
  }

  // ---------- orange Punkte, die um eine Fläche tanzen und dem Finger ausweichen ----------
  function dots(api, host, n){
    const c = api.canvas(host, "flDots"), D = [];
    let seed = 3; const rnd = ()=>{ seed = (seed * 9301 + 49297) % 233280; return seed / 233280; };
    for(let i = 0; i < n; i++) D.push({ x: rnd(), y: rnd(), vx: (rnd() - .5) * .0006, vy: (rnd() - .5) * .0006, r: 5 + rnd() * 3, ph: rnd() * 6.28 });
    api.loop(c.cv, (t, dt)=>{
      const g = c.g, w = c.w, h = c.h; if(!w) return;
      g.clearRect(0, 0, w, h); g.fillStyle = "#F2541B";
      const r = c.cv.getBoundingClientRect(), near = performance.now() - api.ptr.t < 1500, px = api.ptr.x - r.left, py = api.ptr.y - r.top;
      D.forEach((d)=>{
        if(!api.reduce()){
          d.x += d.vx * (dt || 16); d.y += d.vy * (dt || 16) + Math.sin(t * .002 + d.ph) * .0004;
          if(near){ const dx = d.x * w - px, dy = d.y * h - py, q = Math.hypot(dx, dy); if(q < 90 && q > 0){ d.x += dx / q * .01; d.y += dy / q * .01; } }
          if(d.x < 0 || d.x > 1) d.vx *= -1; if(d.y < 0 || d.y > 1) d.vy *= -1;
          d.x = Math.max(0, Math.min(1, d.x)); d.y = Math.max(0, Math.min(1, d.y));
        }
        g.beginPath(); g.arc(d.x * w, d.y * h, d.r, 0, 6.283); g.fill();
      });
    });
  }

  // ---------- Startseite: brauner Kopf ----------
  async function hero(api){
    const host = document.querySelector(".homeGreeting");
    if(!host) return;
    const el = api.bit("flHero", "formlabor");
    const word = "kochen".split("").map((ch, i, a)=> `<span style="--i:${i - (a.length - 1) / 2}">${ch}</span>`).join("");
    el.innerHTML = `<div class="flArc" aria-hidden="true">${word}</div>
      <div class="flAnd" aria-hidden="true"><small>aus Tobis</small><em>Küche.</em></div>
      <p class="flKick"><span>Kochen als Handwerk</span><i></i><span>[ Aus Tobis Küche ]</span><i></i><span>${new Date().getFullYear()}</span></p>`;
    host.prepend(el);
    api.add(()=> el.remove());
    document.body.classList.add("flHome"); api.add(()=> document.body.classList.remove("flHome"));
    if(!api.gpu()) return;
    const cv = document.createElement("canvas"); cv.className = "flGL"; cv.setAttribute("aria-hidden", "true");
    el.prepend(cv);
    try{ await document.fonts.load('italic 400 40px "Fraunces"'); await document.fonts.load('300 30px "Skin Raum"'); }catch{}
    const mod = await import(`/assets/skins/formlabor-3d.js?v=${api.ver}`);
    if(!cv.isConnected) return;
    const three = mod.create(cv); api.add(()=> three.dispose());
    const fit = ()=>{ const r = cv.getBoundingClientRect(); if(!r.width) return; three.resize(r.width, r.height, devicePixelRatio || 1, r.height * .5, r.height * .44); lp?.redraw(); };
    const ro = new ResizeObserver(fit); ro.observe(cv); api.add(()=> ro.disconnect());
    const lp = api.loop(cv, (t, dt)=> three.render(t, dt, api.reduce()));
    fit();
    let lastX = null;
    api.on(el, "pointerdown", (e)=>{ lastX = e.clientX; });
    api.on(el, "pointermove", (e)=>{ if(lastX === null) return; three.drag = (e.clientX - lastX) * .006; lastX = e.clientX; if(api.reduce()) lp.redraw(); });
    api.on(window, "pointerup", ()=>{ lastX = null; });
    api.on(window, "scroll", ()=>{ three.scatter = Math.min(1.2, scrollY / Math.max(1, innerHeight * .8)); if(api.reduce()) lp.redraw(); }, { passive: true });
  }

  // ---------- große Liste der Kategorien: die Zeile in der Bildmitte leuchtet ----------
  function catList(api, after){
    let cats = []; try{ cats = JSON.parse(document.getElementById("homeCats")?.textContent || "[]"); }catch{}
    const names = PICK.filter((c)=> cats.includes(c));
    if(!names.length) return after;
    const el = api.bit("flList", "formlabor", "nav");
    el.setAttribute("aria-label", "Kategorien");
    el.innerHTML = names.map((c, i)=>{
      const w = c.split(" "), last = w.pop();
      return `<a class="flRow" style="--o:${[0, 22, 38, 8, 30, 14][i % 6]}%" href="/rezeptindex/?kategorie=${encodeURIComponent(c)}"><span class="flNum">(${String(i + 1).padStart(2, "0")})</span><span class="flName">${w.length ? esc(w.join(" ")) + " " : ""}<em>${esc(last)}</em></span></a>`;
    }).join("");
    after.after(el); api.add(()=> el.remove());
    const rows = [...el.querySelectorAll(".flRow")];
    let raf = 0;
    const lit = ()=>{
      raf = 0; const mid = innerHeight * .5; let best = null, bd = 1e9;
      rows.forEach((r)=>{ const b = r.getBoundingClientRect(), d = Math.abs(b.top + b.height / 2 - mid); if(d < bd){ bd = d; best = r; } });
      rows.forEach((r)=> r.classList.toggle("on", r === best));
    };
    api.on(window, "scroll", ()=>{ if(!raf) raf = requestAnimationFrame(lit); }, { passive: true });
    lit();
    return el;
  }

  // ---------- Creme-Teil: „[ Heute für dich ]“ – Text füllt sich beim Scrollen, Punkte tanzen ----------
  function today(api, after){
    const a = document.getElementById("todayLink"), title = a?.querySelector(".homeFeaturedTitle")?.textContent.trim();
    if(!a || !title) return;
    const meta = [...a.querySelectorAll(".recipeMeta .metaItem")].map((m)=> m.textContent.trim()).filter(Boolean);
    const words = (`Heute auf dem Herd: ¦${title}¦` + (meta[0] ? ` – ${meta[0]}` : "") + (meta[1] ? `, ${meta[1]}.` : ".") +
      " Keine Lust darauf? Dann such nach dem, was noch im Kühlschrank liegt, oder lass dich überraschen.").split(" ");
    let inT = false;
    const html = words.map((w)=>{
      let cls = "flW";
      if(w.startsWith("¦")){ inT = true; w = w.slice(1); }
      const end = w.includes("¦"); w = w.replace("¦", "");
      if(inT) cls += " flWT";
      if(end) inT = false;
      return `<span class="${cls}">${esc(w)}</span>`;
    }).join(" ");
    const el = api.bit("flToday", "formlabor", "section");
    el.innerHTML = `<p class="flBr">[ Heute für dich ]</p><p class="flText">${html}</p><a class="flMore" href="${esc(a.getAttribute("href"))}">Zum Rezept</a>`;
    after.after(el); api.add(()=> el.remove());
    dots(api, el, 14);
    const ws = [...el.querySelectorAll(".flW")];
    let raf = 0;
    const fill = ()=>{
      raf = 0; const r = el.getBoundingClientRect();
      const p = api.reduce() ? 1 : Math.max(0, Math.min(1, (innerHeight * .85 - r.top) / (r.height * .9)));
      const k = Math.round(p * ws.length);
      ws.forEach((w, i)=> w.classList.toggle("on", i < k));
    };
    api.on(window, "scroll", ()=>{ if(!raf) raf = requestAnimationFrame(fill); }, { passive: true });
    fill();
  }

  // ---------- Kopfzeile mit Klammern unter Seitentiteln (Rezeptliste, Kategorien …) ----------
  function kicker(api){
    const t = document.querySelector("body.fieldPage:not(.layout-home) .pageTitleBlock");
    if(!t) return;
    const el = api.bit("flKick flKickPage", "formlabor", "p");
    el.setAttribute("aria-hidden", "true");
    el.innerHTML = `<span>[ ${esc(t.querySelector(".h1")?.textContent.trim() || "")} ]</span><i></i><span>[ Aus Tobis Küche ]</span><i></i><span>${new Date().getFullYear()}</span>`;
    t.after(el); api.add(()=> el.remove());
    const h1 = t.querySelector(".h1"); if(h1) dots(api, h1, 9);
  }

  // ---------- Rezeptseite: Steckbrief „[ Über das Rezept ]“ ----------
  function facts(api){
    const body = document.querySelector(".recipePageBody"), D = window.RECIPE_DATA;
    if(!body || !D) return;
    const kv = [...document.querySelectorAll(".recipeFacts .kv")].map((k)=> k.textContent.trim()).filter(Boolean);
    const who = document.querySelector(".recipeAuthor span:last-child")?.textContent.replace(/^von\s+/, "").trim();
    const rows = [["Kategorie", D.category], ["Zeit", kv[0]], ["Portionen", (kv[1] || "").replace(/\s*Portionen?$/, "")], ["Von", who]].filter((r)=> r[1]);
    const el = api.bit("flFacts", "formlabor");
    el.innerHTML = `<p class="flBr">[ Über das Rezept ]</p><dl>${rows.map(([k, v])=> `<div><dt>${k}</dt><dd>${esc(v)}</dd></div>`).join("")}</dl>`;
    body.prepend(el); api.add(()=> el.remove());
  }

  window.KOCHBUCH_FX.formlabor = {
    start(api){
      mixTitles(api);
      kicker(api);
      facts(api);
      if(!api.home()) return;
      hero(api).catch((e)=> console.warn("Formlabor 3D:", e));
      const host = document.querySelector(".homeGreeting");
      if(host){ const list = catList(api, host); today(api, list); }
      dispatchEvent(new Event("kochbuch:sceneresize"));
    },
  };
})();
