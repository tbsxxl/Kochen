(function(){
  const forYouHost = document.querySelector("#forYouRow");
  const freezerHost = document.querySelector("#freezerList");
  const freezerSection = document.querySelector("#freezerSection");
  const dataEl = document.querySelector("#allRecipesJson");
  if(!forYouHost || !dataEl) return;

  let recipes = [];
  try{ recipes = JSON.parse(dataEl.textContent || "[]"); }catch{}
  if(!Array.isArray(recipes) || !recipes.length){
    forYouHost.innerHTML = '<div class="card cardPad">Keine Rezepte gefunden.</div>';
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

  const forYou = enriched.slice().sort((a,b)=>score(b)-score(a)).slice(0, 6);
  const freezerPicks = enriched.filter(x=>x.inFreezer).slice(0, 6);

  function metaLine(r){
    return [r.time?`⏱ ${r.time}`:"", r.servings?`🍽 ${r.servings}`:""]
      .filter(Boolean)
      .join(" · ");
  }

  function miniCard(r){
    const meta = metaLine(r);
    return `
      <a class="linkCard hCard" href="${r.id}">
        <div class="card recipeCard cardHover">
          <div class="recipeTop">
            <h3 class="recipeTitle">${r.title}</h3>
            <span class="favBadge" data-fav-badge data-recipe-id="${r.id}" aria-hidden="true">★</span>
          </div>
          <div class="recipeMeta">${meta?`<span>${meta}</span>`:""}</div>
        </div>
      </a>
    `;
  }

  function freezerRow(r){
    const meta = metaLine(r);
    const portions = Number(r.freezerPortions || 0);
    return `
      <a class="linkCard" href="${r.id}">
        <div class="card cardPad freezerRow cardHover">
          <span class="favBadge" data-fav-badge data-recipe-id="${r.id}" aria-hidden="true">★</span>
          <div style="min-width:0">
            <div class="h3" style="margin:0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${r.title}</div>
            ${meta?`<div class="dim" style="margin-top:4px">${meta}</div>`:""}
          </div>
          <div class="freezerRight">
            <span class="freezerBadge">🧊 ${portions}</span>
          </div>
        </div>
      </a>
    `;
  }

  forYouHost.innerHTML = forYou.length
    ? forYou.map(miniCard).join("")
    : '<div class="card cardPad">Noch keine Daten. Markiere Rezepte als „Gekocht“ oder „Favorit“.</div>';

  if(freezerHost && freezerSection){
    if(freezerPicks.length){
      freezerSection.hidden = false;
      freezerHost.innerHTML = freezerPicks.map(freezerRow).join("");
    }else{
      freezerSection.hidden = true;
      freezerHost.innerHTML = "";
    }
  }
})();
