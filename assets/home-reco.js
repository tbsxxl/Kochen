(function(){
  const forYouHost = document.querySelector("#forYouRow");
  const freezerHost = document.querySelector("#freezerList");
  const freezerSection = document.querySelector("#freezerSection");
  const dataEl = document.querySelector("#allRecipesJson");
  if(!forYouHost || !dataEl) return;

  let recipes = [];
  try{ recipes = JSON.parse(dataEl.textContent || "[]"); }catch{}
  if(!Array.isArray(recipes) || !recipes.length){
    forYouHost.innerHTML = '<div class="card cardPad sub">Keine Rezepte gefunden.</div>';
    return;
  }

  function getStats(){ try{ return JSON.parse(localStorage.getItem("kochbuch.stats") || "{}"); }catch{ return {}; } }
  function getFreezer(){ try{ return JSON.parse(localStorage.getItem("kochbuch.freezer") || "{}"); }catch{ return {}; } }
  function esc(s){ return String(s??'').replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m])); }

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
    const recency = Math.min(days, 3650) * 2.5;
    const freq = Math.min(r.cookedCount || 0, 30) * 8;
    return recency + freq;
  }

  // Favoriten ausfiltern — die haben ihre eigene Zeile
  const forYou = enriched
    .filter(r => !r.favorite)
    .sort((a,b) => score(b) - score(a))
    .slice(0, 6);

  const freezerPicks = enriched.filter(x => x.inFreezer).slice(0, 6);

  function metaLine(r){
    const parts = [];
    if(r.time) parts.push(`<span class="metaItem"><span class="metaIcon" aria-hidden="true">◷</span><span>${esc(r.time)}</span></span>`);
    if(r.servings) parts.push(`<span class="metaItem"><span class="metaIcon" aria-hidden="true">◎</span><span>${esc(r.servings)}</span></span>`);
    return parts.join(`<span class="metaDivider">·</span>`);
  }

  function miniCard(r){
    const meta = metaLine(r);
    // Same card structure as homeFavCard in home.html
    const thumb = r.image ? `
      <div class="thumb homeFavThumb" style="border-radius:var(--rCard,16px) var(--rCard,16px) 0 0;margin:-13px -13px 0 -13px;overflow:hidden">
        <img class="thumbImg" src="${esc(r.image)}" alt="${esc(r.title)}" loading="lazy" decoding="async"
          style="aspect-ratio:3/2;min-height:0;max-height:180px">
      </div>` : '';
    return `
      <a class="linkCard hCard homeFavCard" href="${esc(r.id)}">
        <div class="card recipeCard cardHover">
          <span class="favBadge" data-fav-badge data-recipe-id="${esc(r.id)}" aria-hidden="true">★</span>
          ${thumb}
          <div class="recipeTop">
            <div class="recipeTopLeft">
              <h3 class="recipeTitle">${esc(r.title)}</h3>
            </div>
            ${r.category ? `<span class="badge action">${esc(r.category)}</span>` : ''}
          </div>
          ${meta ? `<div class="recipeMeta">${meta}</div>` : ''}
        </div>
      </a>`;
  }

  function freezerRow(r){
    const meta = metaLine(r);
    const portions = Number(r.freezerPortions || 0);
    return `
      <a class="linkCard" href="${esc(r.id)}">
        <div class="card cardPad freezerRow cardHover" style="position:relative">
          <span class="favBadge" data-fav-badge data-recipe-id="${esc(r.id)}" aria-hidden="true">★</span>
          <div style="min-width:0">
            <div class="h2" style="margin:0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${esc(r.title)}</div>
            ${meta ? `<div class="dim" style="margin-top:4px">${meta}</div>` : ''}
          </div>
          <div class="freezerRight">
            <span class="freezerBadge"><span class="metaIcon" aria-hidden="true">❄︎</span><span>${portions}</span></span>
          </div>
        </div>
      </a>`;
  }

  forYouHost.innerHTML = forYou.length
    ? forYou.map(miniCard).join("")
    : '<div class="sub" style="padding:8px 2px;font-size:14px">Koche mehr Rezepte, um Empfehlungen zu sehen.</div>';

  if(freezerHost && freezerSection){
    if(freezerPicks.length){
      freezerSection.hidden = false;
      freezerHost.innerHTML = freezerPicks.map(freezerRow).join("");
    } else {
      freezerSection.hidden = true;
    }
  }

  if(typeof window.updateFavBadges === "function") window.updateFavBadges();
})();
