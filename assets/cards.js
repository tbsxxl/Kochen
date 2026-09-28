// Rezeptkarten, die per JavaScript entstehen (Startseite). Gleiches Markup wie _includes/recipe-card.html,
// inkl. Kühltruhen-Markierung, Bewertung und Favoriten-Herz (befüllt von updateFavBadges in utils.js).
(function(){
  const esc = (s)=>String(s??"").replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));
  const SVG_CLOCK = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><polyline points="12 7 12 12 15.5 14"/></svg>';
  const SVG_PEOPLE = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>';
  const SVG_ICE = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="12" y1="2" x2="12" y2="22"/><line x1="2" y1="12" x2="22" y2="12"/><polyline points="8 4 12 7 16 4"/><polyline points="8 20 12 17 16 20"/><polyline points="4 8 7 12 4 16"/><polyline points="20 8 17 12 20 16"/></svg>';

  function metaLine(r){
    return (r.time ? `<span class="metaItem"><span class="metaIcon" aria-hidden="true">${SVG_CLOCK}</span><span>${esc(r.time)}</span></span>` : "")
      + (r.servings ? `<span class="metaItem"><span class="metaIcon" aria-hidden="true">${SVG_PEOPLE}</span><span>${esc(r.servings)}</span></span>` : "");
  }

  // opts: { hCard: Karte in waagerechter Leiste, fav: Herz gleich gefüllt zeigen, meta: eigener Metatext (HTML) }
  function recipeCard(r, opts = {}){
    const id = r.id || r.url || "";
    const img = r.image ? `
      <div class="rcImg">
        <img src="${esc(r.image)}" srcset="${esc(r.srcset||"")}" sizes="(min-width:900px) 300px, (min-width:640px) 44vw, 78vw" alt="${esc(r.title)}" loading="lazy" decoding="async">
        ${r.category ? `<div class="heroOverlayCat">${esc(r.category)}</div>` : ""}
        <span class="freezerFlag" data-freezer-badge data-recipe-id="${esc(id)}" hidden title="In der Kühltruhe">${SVG_ICE}<span data-count></span></span>
      </div>` : "";
    return `
      <a class="linkCard${opts.hCard ? " hCard homeFavCard" : ""}" href="${esc(r.url || id)}">
        <div class="card recipeCard cardHover">
          ${img}
          <div class="rcBody">
            <h3 class="recipeTitle">${esc(r.title)}</h3>
            <div class="recipeMeta">${opts.meta != null ? opts.meta : metaLine(r)}<span class="metaRating" data-rating-badge data-recipe-id="${esc(id)}" hidden></span><span class="favBadge rcFavBadge metaFav${opts.fav ? " isFav" : ""}" data-fav-badge data-recipe-id="${esc(id)}" aria-label="Favorit">♥</span></div>
          </div>
        </div>
      </a>`;
  }

  window.KOCHBUCH_CARDS = { recipeCard, metaLine, esc, SVG_ICE };
})();
