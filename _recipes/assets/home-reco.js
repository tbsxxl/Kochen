(function(){
  const host = document.querySelector("#recommendations");
  const dataEl = document.querySelector("#allRecipesJson");
  if(!host || !dataEl) return;

  let recipes = [];
  try{ recipes = JSON.parse(dataEl.textContent || "[]"); }catch{}
  if(!Array.isArray(recipes) || !recipes.length){
    host.innerHTML = '<div class="card cardPad">Keine Rezepte gefunden.</div>';
    return;
  }

  function getStats(){ try{ return JSON.parse(localStorage.getItem("kochbuch.stats") || "{}"); }catch{ return {}; } }
  function getFreezer(){ try{ return JSON.parse(localStorage.getItem("kochbuch.freezer") || "{}"); }catch{ return {}; } }

  const stats = getStats();
  const freezer = getFreezer();
  const now = Date.now();
  const DAY = 24*60*60*1000;

  const enriched = recipes.map(r=>{
    const e = stats[r.id] || {};
    const last = e.lastCooked ? Date.parse(e.lastCooked) : null;
    const daysSince = (last && !isNaN(last)) ? Math.floor((now - last)/DAY) : null;
    return {
      ...r,
      cookedCount: Number(e.cookedCount || 0),
      favorite: !!e.favorite,
      lastCooked: e.lastCooked || null,
      daysSince,
      inFreezer: !!freezer[r.id],
      freezerPortions: freezer[r.id]?.portions || 0
    };
  });

  function score(r){
    const days = (r.daysSince === null) ? 3650 : r.daysSince;
    const recency = Math.min(days, 3650) * 2.5;      // lange nicht gekocht => hoch
    const fav = r.favorite ? 120 : 0;
    const freq = Math.min(r.cookedCount || 0, 30) * 8;
    return recency + fav + freq;
  }

  const forYou = enriched.slice().sort((a,b)=>score(b)-score(a)).slice(0, 8);
  const freezerPicks = enriched.filter(x=>x.inFreezer).slice(0, 8);

  function card(r, badgeHtml){
    const meta = [r.time?`⏱ ${r.time}`:"", r.servings?`🍽 ${r.servings}`:""].filter(Boolean).join(" · ");
    const last = r.lastCooked ? new Date(r.lastCooked).toLocaleDateString("de-DE") : "nie";
    const hint = (r.daysSince===null) ? "noch nie gekocht" : `zuletzt: ${last}`;
    const right = badgeHtml || (r.category ? `<span class="badge action">${r.category}</span>` : "");
    return `
      <a class="linkCard" href="${r.id}">
        <div class="card recipeCard cardHover">
          <div class="recipeTop">
            <h3 class="recipeTitle">${r.title}</h3>
            ${right}
          </div>
          <div class="recipeMeta">
            ${meta?`<span>${meta}</span>`:""}
            <span>• ${hint}</span>
            ${r.cookedCount?`<span>• ${r.cookedCount}×</span>`:""}
            ${r.favorite?`<span>• ★</span>`:""}
          </div>
        </div>
      </a>
    `;
  }

  function section(title, items, badgeFn){
    if(!items.length) return "";
    return `
      <div class="section">
        <div class="h2" style="padding:0 2px;">${title}</div>
        <div class="grid">
          ${items.map(r=>card(r, badgeFn?badgeFn(r):"")).join("")}
        </div>
      </div>
    `;
  }

  const html =
    section("Für dich", forYou, ()=>'<span class="badge">✨</span>') +
    section("Aus der Kühltruhe", freezerPicks, (r)=>`<span class="badge green">🧊 ${r.freezerPortions||""}</span>`);

  host.innerHTML = html || '<div class="card cardPad">Noch keine Daten. Markiere Rezepte als „Gekocht“ oder „Favorit“.</div>';
})();