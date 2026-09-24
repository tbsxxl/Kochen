// „Was koche ich?“: Rezepte nach vorhandenen Zutaten finden und Zufallsvorschlag.
(function(){
  const dataEl = document.getElementById("allRecipesJson");
  if(!dataEl) return;
  let recipes = [];
  try{ recipes = JSON.parse(dataEl.textContent || "[]"); }catch{ return; }

  const $ = (s)=>document.querySelector(s);
  const PANTRY_KEY = "kochbuch.ui.pantry";
  const esc = (s)=>String(s??"").replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));
  const ls = {
    get(k, fb){ try{ const v = localStorage.getItem(k); return v ? JSON.parse(v) : fb; }catch{ return fb; } },
    set(k, v){ try{ localStorage.setItem(k, JSON.stringify(v)); }catch{} }
  };

  // Grundzutaten, die man meistens da hat: zählen weder als Treffer noch als „fehlt“
  const BASICS = /^(salz|meersalz|pfeffer|schwarzer pfeffer|wasser|öl|olivenöl|pflanzenöl|rapsöl|sonnenblumenöl|neutrales öl|zucker|eiswürfel)$/;

  function head(item){
    return String(item||"").toLowerCase().replace(/\(.*?\)/g," ").split(",")[0]
      .replace(/(^|\s)(zum|zur|für|nach|n\. ?b\.)(\s.*)?$/,"")
      .replace(/(^|\s)(etwas|frisch|frische|frischer|frisches|gehackt|gehackte)(?=\s|$)/g," ")
      .replace(/\s+/g," ").trim();
  }
  function stem(w){
    w = w.toLowerCase().trim();
    if(w.length > 4) w = w.replace(/(en|er|n|e|s)$/,"");
    return w;
  }
  function words(s){ return String(s).toLowerCase().split(/[^a-zäöüß]+/).filter(Boolean); }

  // Zutat des Rezepts passt zu einem eingegebenen Begriff?
  function matches(ingHead, term){
    const t = stem(term);
    if(!t) return false;
    if(t.length <= 3) return words(ingHead).some(w => stem(w) === t || w === term);
    return ingHead.includes(t) || words(ingHead).some(w => stem(w) === t);
  }

  const prepared = recipes.map(r=>{
    const heads = (r.ings || []).map(head).filter(Boolean);
    const main = [];
    const seen = new Set();
    heads.forEach((h, i)=>{
      if(BASICS.test(h) || seen.has(h)) return;
      seen.add(h);
      main.push({ head: h, label: String(r.ings[i]).replace(/\(.*?\)/g,"").split(",")[0].trim() });
    });
    return { ...r, main };
  });

  // Vorschläge für die Eingabe: häufige Zutaten
  const counts = new Map();
  prepared.forEach(r => r.main.forEach(m => { const k = m.label; counts.set(k, (counts.get(k)||0) + 1); }));
  const suggest = $("#pantrySuggest");
  if(suggest){
    suggest.innerHTML = [...counts.entries()].sort((a,b)=>b[1]-a[1]).slice(0, 150)
      .map(([k])=>`<option value="${esc(k)}"></option>`).join("");
  }

  const SVG_CLOCK = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><polyline points="12 7 12 12 15.5 14"/></svg>';

  function rowCard(r, extra){
    return `
      <a class="linkCard" href="${esc(r.id)}">
        <div class="card cardPad cardHover pantryRow">
          ${r.image ? `<img class="pantryThumb" src="${esc(r.image)}" srcset="${esc(r.srcset||"")}" sizes="72px" alt="" loading="lazy">` : ""}
          <div class="pantryInfo">
            <div class="pantryTitle">${esc(r.title)}</div>
            ${extra || ""}
          </div>
        </div>
      </a>`;
  }

  // ---------- Zutatensuche ----------
  let pantry = ls.get(PANTRY_KEY, []);
  if(!Array.isArray(pantry)) pantry = [];
  const input = $("#pantryInput");
  const chipsEl = $("#pantryChips");
  const resultsEl = $("#pantryResults");

  function renderChips(){
    chipsEl.innerHTML = pantry.map((p, i)=>`<button type="button" class="chip pantryChip" data-i="${i}" aria-label="${esc(p)} entfernen">${esc(p)} <span aria-hidden="true">✕</span></button>`).join("")
      + (pantry.length > 1 ? `<button type="button" class="chip pantryClear" id="pantryClear">Alle löschen</button>` : "");
  }

  function renderResults(){
    if(!pantry.length){
      resultsEl.innerHTML = `<div class="uEmpty"><div class="uEmptyTitle">Was ist da?</div><div class="uEmptyText">Füge ein paar Zutaten hinzu, dann zeige ich passende Rezepte – die mit den wenigsten fehlenden Zutaten zuerst.</div></div>`;
      return;
    }
    const scored = prepared.map(r=>{
      const have = r.main.filter(m => pantry.some(p => matches(m.head, p)));
      const missing = r.main.filter(m => !have.includes(m));
      return { r, have, missing };
    }).filter(x => x.have.length)
      .sort((a,b)=> (a.missing.length - b.missing.length) || (b.have.length - a.have.length) || a.r.title.localeCompare(b.r.title, "de"));

    if(!scored.length){
      resultsEl.innerHTML = `<div class="uEmpty"><div class="uEmptyTitle">Kein Rezept gefunden</div><div class="uEmptyText">Versuch es mit anderen oder allgemeineren Zutaten, z. B. „Hähnchen“ statt „Hähnchenbrustfilet“.</div></div>`;
      return;
    }
    resultsEl.innerHTML = scored.slice(0, 30).map(({r, have, missing})=>{
      const total = r.main.length;
      const pct = Math.round(have.length / total * 100);
      const miss = missing.length
        ? `Es fehlt: ${esc(missing.slice(0, 4).map(m=>m.label).join(", "))}${missing.length > 4 ? ` +${missing.length-4}` : ""}`
        : "Du hast alles da!";
      return rowCard(r, `
        <div class="pantryScore"><span class="pantryBar"><span style="width:${pct}%"></span></span><span>${have.length} von ${total}</span></div>
        <div class="pantryMissing${missing.length ? "" : " isComplete"}">${miss}</div>`);
    }).join("");
  }

  function addFromInput(){
    const parts = String(input.value||"").split(/[,;]+/).map(s=>s.trim()).filter(Boolean);
    let added = false;
    parts.forEach(p=>{ if(!pantry.some(x=>x.toLowerCase() === p.toLowerCase())){ pantry.push(p); added = true; } });
    input.value = "";
    if(added){ ls.set(PANTRY_KEY, pantry); renderChips(); renderResults(); }
  }

  input?.addEventListener("keydown", (e)=>{ if(e.key === "Enter" || e.key === ","){ e.preventDefault(); addFromInput(); } });
  input?.addEventListener("change", ()=>{ if(input.value && counts.has(input.value)) addFromInput(); });
  $("#pantryAdd")?.addEventListener("click", ()=>{ addFromInput(); input.focus(); });
  chipsEl?.addEventListener("click", (e)=>{
    if(e.target.closest("#pantryClear")){ pantry = []; }
    else{
      const b = e.target.closest("[data-i]"); if(!b) return;
      pantry.splice(Number(b.dataset.i), 1);
    }
    ls.set(PANTRY_KEY, pantry); renderChips(); renderResults();
  });

  // ---------- Zufall ----------
  const randomHost = $("#randomHost");
  const filters = new Set();
  let lastPick = null;

  function stats(){ return ls.get("kochbuch.stats", {}); }
  function pickRandom(){
    const st = stats();
    const now = Date.now();
    let pool = prepared.filter(r=>{
      for(const f of filters){
        if(f === "fav"){ if(!st[r.id]?.favorite) return false; }
        else if(!(r.categories || []).includes(f) && r.category !== f) return false;
      }
      return true;
    });
    if(!pool.length) return null;
    if(pool.length > 1 && lastPick) pool = pool.filter(r => r.id !== lastPick);
    // Gewichtung: länger nicht gekocht → wahrscheinlicher
    const weights = pool.map(r=>{
      const last = st[r.id]?.lastCooked ? Date.parse(st[r.id].lastCooked) : 0;
      const days = last ? (now - last) / 86400000 : 60;
      return Math.max(1, Math.min(days, 60));
    });
    let x = Math.random() * weights.reduce((a,b)=>a+b, 0);
    for(let i=0;i<pool.length;i++){ x -= weights[i]; if(x <= 0) return pool[i]; }
    return pool[pool.length-1];
  }

  function renderRandom(){
    const r = pickRandom();
    if(!r){
      randomHost.innerHTML = `<div class="uEmpty"><div class="uEmptyTitle">Nichts gefunden</div><div class="uEmptyText">Mit diesen Filtern gibt es kein Rezept. Nimm einen Filter weg.</div></div>`;
      return;
    }
    lastPick = r.id;
    const st = stats()[r.id] || {};
    const last = st.lastCooked ? new Date(st.lastCooked).toLocaleDateString("de-DE", { day:"numeric", month:"long" }) : null;
    randomHost.innerHTML = `
      <a class="linkCard randomCard" href="${esc(r.id)}">
        <div class="card recipeCard cardHover homeFeatured">
          ${r.image ? `<div class="rcImg"><img src="${esc(r.image)}" srcset="${esc(r.srcset||"")}" sizes="(min-width:960px) 928px, 100vw" alt="${esc(r.title)}" decoding="async" style="view-transition-name:img-${esc(r.vt)}">${r.category ? `<div class="heroOverlayCat">${esc(r.category)}</div>` : ""}</div>` : ""}
          <div class="rcBody">
            <h2 class="recipeTitle homeFeaturedTitle">${esc(r.title)}</h2>
            <div class="recipeMeta">
              ${r.time ? `<span class="metaItem"><span class="metaIcon" aria-hidden="true">${SVG_CLOCK}</span><span>${esc(r.time)}</span></span>` : ""}
              <span class="metaItem">${last ? `Zuletzt gekocht am ${esc(last)}` : "Noch nie gekocht"}</span>
            </div>
          </div>
        </div>
      </a>`;
    try{ window.KOCHBUCH_UI?.pop?.(randomHost.firstElementChild); }catch{}
  }

  document.querySelectorAll("#randomFilters [data-filter]").forEach(b=>{
    b.addEventListener("click", ()=>{
      const f = b.dataset.filter;
      filters.has(f) ? filters.delete(f) : filters.add(f);
      const on = filters.has(f);
      b.setAttribute("aria-pressed", String(on));
      b.classList.toggle("pillToggleActive", on && f !== "fav");
      if(f === "fav") b.textContent = on ? "♥ Nur Favoriten" : "♡ Nur Favoriten";
      renderRandom();
    });
  });
  $("#randomAgain")?.addEventListener("click", ()=>{ renderRandom(); try{ window.KOCHBUCH_UI?.haptic?.("light"); }catch{} });

  // ---------- Modus ----------
  const modePantry = $("#modePantry"), modeRandom = $("#modeRandom");
  function setMode(m){
    const random = m === "random";
    modePantry.classList.toggle("active", !random); modePantry.setAttribute("aria-selected", String(!random));
    modeRandom.classList.toggle("active", random); modeRandom.setAttribute("aria-selected", String(random));
    $("#pantryPanel").hidden = random;
    $("#randomPanel").hidden = !random;
    if(random && !randomHost.innerHTML) renderRandom();
    history.replaceState(null, "", random ? "?zufall=1" : location.pathname);
  }
  modePantry?.addEventListener("click", ()=>setMode("pantry"));
  modeRandom?.addEventListener("click", ()=>setMode("random"));

  renderChips();
  renderResults();
  setMode(new URLSearchParams(location.search).has("zufall") ? "random" : "pantry");
})();
