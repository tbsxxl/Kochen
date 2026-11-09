// Rezeptkarten, die per JavaScript entstehen (Startseite). Gleiches Markup wie _includes/recipe-card.html,
// inkl. Kühltruhen-Markierung, Bewertung und Favoriten-Herz (befüllt von updateFavBadges in utils.js).
(function(){
  const esc = (s)=>String(s??"").replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));
  const SVG_CLOCK = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5.5 15.5a6.5 6.5 0 0 0 13 0c0-4.5-3-9-6.5-9s-6.5 4.5-6.5 9z"/><path d="M12 6.5V4M10.5 4h3"/><path d="M12 15l2.5-2"/></svg>';
  const SVG_PEOPLE = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>';
  const SVG_ICE = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="12" y1="2" x2="12" y2="22"/><line x1="2" y1="12" x2="22" y2="12"/><polyline points="8 4 12 7 16 4"/><polyline points="8 20 12 17 16 20"/><polyline points="4 8 7 12 4 16"/><polyline points="20 8 17 12 20 16"/></svg>';

  function metaLine(r){
    return (r.time ? `<span class="metaItem"><span class="metaIcon" aria-hidden="true">${SVG_CLOCK}</span><span>${esc(r.time)}</span></span>` : "")
      + (r.servings ? `<span class="metaItem"><span class="metaIcon" aria-hidden="true">${SVG_PEOPLE}</span><span>${esc(r.servings)}<span class="srOnly"> Portionen</span></span></span>` : "");
  }

  // Hauptzutat als Art (Skin „Bauhaus“: Kantinen-Farbcode), gleiche Regel wie _includes/recipe-card.html
  function kindOf(r){
    const cats = [r.category, ...(r.categories || [])];
    const tags = (r.tags || []).join(" ").toLowerCase();
    if (cats.includes("Fisch")) return "fisch";
    if (["Hähnchen","Rind","Hackfleisch","Schwein","Ente"].some(c => cats.includes(c))) return "fleisch";
    if (cats.includes("Vegetarisch") || /vegetarisch|vegan/.test(tags)) return "veg";
    return "";
  }

  // Hauptzutat genauer (Skin „Nordwall“: Wappen je Zutat), gleiche Regel wie _includes/recipe-card.html
  function proteinOf(r){
    const cats = [r.category, ...(r.categories || [])];
    const map = [["Fisch","fisch"],["Rind","rind"],["Hackfleisch","hack"],["Schwein","schwein"],["Hähnchen","haehnchen"],["Ente","ente"]];
    for (const [c, v] of map) if (cats.includes(c)) return v;
    return kindOf(r) === "veg" ? "veg" : "";
  }

  // Aufwand (Skin „Zwei Städte“: Aufkleber „oben“ = Wochenendprojekt, „unten“ = schnell), gleiche Regel wie recipe-card.html
  function levelOf(r){
    const cats = [r.category, ...(r.categories || [])];
    return cats.includes("Wochenendprojekt") ? "oben" : cats.includes("Schnell") ? "unten" : "";
  }

  // opts: { hCard: Karte in waagerechter Leiste, fav: Herz gleich gefüllt zeigen, meta: eigener Metatext (HTML) }
  function recipeCard(r, opts = {}){
    const id = r.id || r.url || "";
    const img = r.image ? `
      <div class="rcImg">
        <img src="${esc(r.image)}" srcset="${esc(r.srcset||"")}" sizes="(min-width:900px) 300px, (min-width:640px) 44vw, 78vw" alt="" loading="lazy" decoding="async">
        <span class="freezerFlag" data-freezer-badge data-recipe-id="${esc(id)}" hidden title="In der Kühltruhe">${SVG_ICE}<span data-count></span></span>
      </div>` : `
      <div class="rcImg rcImgEmpty" aria-hidden="true"><svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 11h16v3a6 6 0 01-6 6h-4a6 6 0 01-6-6z"/><path d="M2 11h2M20 11h2M9 7c0-1 1-1 1-2M14 7c0-1 1-1 1-2"/></svg><span class="freezerFlag" data-freezer-badge data-recipe-id="${esc(id)}" hidden title="In der Kühltruhe">${SVG_ICE}<span data-count></span></span></div>`;
    return `
      <a class="linkCard${opts.hCard ? " hCard homeFavCard" : ""}" href="${esc(r.url || id)}">
        <div class="card recipeCard cardHover"${kindOf(r) ? ` data-kind="${kindOf(r)}"` : ""}${proteinOf(r) ? ` data-protein="${proteinOf(r)}"` : ""}${levelOf(r) ? ` data-level="${levelOf(r)}"` : ""}>
          ${img}
          <div class="rcBody">
            <${opts.hLevel || "h2"} class="recipeTitle">${esc(r.title)}</${opts.hLevel || "h2"}>
            <div class="recipeMeta">${opts.meta != null ? opts.meta : metaLine(r)}<span class="metaRating" data-rating-badge data-recipe-id="${esc(id)}" hidden></span><span class="favBadge rcFavBadge metaFav${opts.fav ? " isFav" : ""}" data-fav-badge data-recipe-id="${esc(id)}" aria-label="Favorit"><svg class="ico" viewBox="0 0 24 24" aria-hidden="true"><path d="M20.8 4.6a5.5 5.5 0 00-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 00-7.8 7.8l1 1.1L12 21l7.8-7.5 1-1.1a5.5 5.5 0 000-7.8z" fill="currentColor"/></svg></span></div>
          </div>
        </div>
      </a>`;
  }

  window.KOCHBUCH_CARDS = { recipeCard, metaLine, esc, SVG_ICE };
})();
