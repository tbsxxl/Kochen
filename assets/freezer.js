(function(){
  const host = document.getElementById('freezerList');
  const dataEl = document.getElementById('allRecipesJson');
  const section = document.getElementById('freezerSection');
  if(!host || !dataEl) return;

  const norm = (x)=> window.KOCHBUCH_STORE?.normalizeId ? window.KOCHBUCH_STORE.normalizeId(x) : String(x||"");
  const STORE_KEY = window.KOCHBUCH_STORE?.STORE_KEY || "kochbuch.stats.v1";

  let recipes=[];
  try{ recipes = JSON.parse(dataEl.textContent || "[]"); }catch{}
  if(!Array.isArray(recipes)) recipes = [];

  const byId = new Map(recipes.map(r=>[norm(r.id||r.url), r]));

  function esc(s){ return String(s||"").replace(/[&<>"']/g, m=>({ "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;" }[m])); }

  function getStats(){
    try{ return window.KOCHBUCH_STORE?.getStats?.() || JSON.parse(localStorage.getItem(STORE_KEY) || "{}"); }
    catch{ return {}; }
  }

  function daysAgoLabel(iso){
    if(!iso) return "";
    const t = Date.parse(iso);
    if(!t) return "";
    const d = Math.floor((Date.now() - t) / 86400000);
    if(d <= 0) return "heute";
    if(d === 1) return "vor 1 Tag";
    return `vor ${d} Tagen`;
  }

  function row(id, entry){
    const r = byId.get(id);
    const title = r?.title || id;
    const metaBits = [];
    if(r?.category) metaBits.push(`🏷 ${r.category}`);
    if(r?.time) metaBits.push(`⏱ ${r.time}`);

    const portions = Number(entry?.freezerCount || 0);
    const frozenLbl = entry?.frozenAt ? `· eingefroren ${daysAgoLabel(entry.frozenAt)}` : "";
    const portionLbl = `${portions} Portion${portions===1?"":"en"}`;

    const debug = (new URLSearchParams(location.search).get("debug")==="1")
      ? `<div class="debugLine">id: ${esc(id)} · frozenAt: ${esc(entry?.frozenAt||"")}</div>`
      : "";

    return `
      <div class="card cardPad freezerCard" data-id="${esc(id)}">
        <span class="favBadge" data-fav-badge data-recipe-id="${esc(id)}" aria-hidden="true">★</span>
        <div class="freezerTop">
          <a class="freezerTitle" href="${esc(r?.url || id)}">${esc(title)}</a>
          <span class="badge green">🧊 ${esc(portionLbl)}</span>
        </div>
        ${metaBits.length?`<div class="freezerMeta">${esc(metaBits.join(" · "))}</div>`:""}
        <div class="freezerSub">${esc(frozenLbl.replace(/^· /,""))}</div>
        ${debug}
      </div>
    `;
  }

  function renderEmpty(){
    host.innerHTML = `
      <div class="emptyState">
        <div class="emptyTitle">Kühltruhe ist leer</div>
        <div class="emptyText">Markiere Rezepte als eingefroren, damit sie hier erscheinen.</div>
        <a class="btnPrimary" href="${esc('/rezeptindex/')}">Als eingefroren markieren</a>
      </div>
    `;
    section && (section.hidden = false);
  }

  function render(){
    const stats = getStats();
    let items=[];
    if(stats && stats.v===1 && stats.recipes){
      for(const [k,e] of Object.entries(stats.recipes)){
        const id = norm(k);
        const c = Number(e?.freezerCount||0);
        if(c>0) items.push({ id, entry: e });
      }
    } else {
      // legacy fallback (very limited)
      for(const [k,e] of Object.entries(stats||{})){
        const c = Number(e?.freezerCount||0);
        if(c>0) items.push({ id:norm(k), entry:e });
      }
    }

    // Sort: newest frozenAt first, fallback title
    const anyTs = items.some(x=>!!x.entry?.frozenAt);
    items.sort((a,b)=>{
      const ta = a.entry?.frozenAt ? Date.parse(a.entry.frozenAt) : 0;
      const tb = b.entry?.frozenAt ? Date.parse(b.entry.frozenAt) : 0;
      if(anyTs && tb!==ta) return tb-ta;
      const ra = byId.get(a.id)?.title || a.id;
      const rb = byId.get(b.id)?.title || b.id;
      return ra.localeCompare(rb, "de", { sensitivity:"base" });
    });

    // Hide if empty
    if(!items.length){
      renderEmpty();
      return;
    }
    section && (section.hidden = false);
    host.innerHTML = items.map(x=>row(x.id, x.entry)).join("");
    window.updateFavBadges && window.updateFavBadges();
  }

  render();

  window.addEventListener("storage", (e)=>{
    if(e?.key === STORE_KEY) render();
  });
  window.addEventListener("kochbuch:stats", render);
})();