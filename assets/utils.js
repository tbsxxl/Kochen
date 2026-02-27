(function(){
  const STORE_KEY = "kochbuch.stats.v1";
  const LEGACY_STATS_KEY = "kochbuch.stats";
  const LEGACY_FAVORITES_KEY = "favorites";
  const LEGACY_FREEZER_KEY = "kochbuch.freezer";

  function safeParse(s, fb){
    try{ return JSON.parse(s ?? ""); }catch{ return fb; }
  }

  // Normalize recipe ids/urls so we can match across baseurl + trailing slash variants.
  function normalizeId(x){
    if(!x) return "";
    x = String(x).trim();
    // Drop origin if someone stored an absolute URL
    try{
      if(/^https?:\/\//i.test(x)){
        x = new URL(x).pathname;
      }
    }catch{}
    // Remove query/hash
    x = x.split("#")[0].split("?")[0];
    // Ensure leading slash
    if(x && !x.startsWith("/")) x = "/"+x;
    // Collapse multiple slashes
    x = x.replace(/\/{2,}/g, "/");
    // Remove trailing slash except root
    if(x.length > 1) x = x.replace(/\/+$/,"");
    return x;
  }

  function nowIso(){ return new Date().toISOString(); }

  function load(key, fb){
    return safeParse(localStorage.getItem(key), fb);
  }
  function save(key, val){
    try{ localStorage.setItem(key, JSON.stringify(val)); }catch{}
  }

  function emptyV1(){
    return { v: 1, recipes: {} };
  }

  function toV1Entry(from){
    const e = (from && typeof from === "object") ? from : {};
    return {
      favorite: !!e.favorite,
      favoriteAt: e.favoriteAt || null,
      cookedCount: Number(e.cookedCount || 0),
      lastCooked: e.lastCooked || null,
      history: Array.isArray(e.history) ? e.history : [],
      freezerCount: Number(e.freezerCount || 0),
      frozenAt: e.frozenAt || null,
      bestBeforeAt: e.bestBeforeAt || null
    };
  }

  function mergeEntry(dst, src){
    const out = toV1Entry(dst);
    const s = toV1Entry(src);
    // Merge with preference for src values if meaningful
    out.favorite = s.favorite || out.favorite;
    out.favoriteAt = s.favoriteAt || out.favoriteAt;
    out.cookedCount = (s.cookedCount || 0) + (out.cookedCount || 0);
    out.lastCooked = s.lastCooked || out.lastCooked;
    if(Array.isArray(s.history) && s.history.length){
      out.history = [...(out.history||[]), ...s.history];
    }
    out.freezerCount = Math.max(out.freezerCount||0, s.freezerCount||0);
    out.frozenAt = s.frozenAt || out.frozenAt;
    out.bestBeforeAt = s.bestBeforeAt || out.bestBeforeAt;
    return out;
  }

  function migrate(){
    const current = load(STORE_KEY, null);
    if(current && current.v === 1 && current.recipes && typeof current.recipes === "object"){
      return current;
    }

    const v1 = emptyV1();

    // 1) legacy stats (shape A or B)
    const legacyStats = load(LEGACY_STATS_KEY, {});
    if(legacyStats && typeof legacyStats === "object"){
      // Shape B: legacyStats.favorites[recipeId] = true
      if(legacyStats.favorites && typeof legacyStats.favorites === "object"){
        for(const k of Object.keys(legacyStats.favorites)){
          if(legacyStats.favorites[k] !== true) continue;
          const id = normalizeId(k);
          v1.recipes[id] = mergeEntry(v1.recipes[id], { favorite:true, favoriteAt: nowIso() });
        }
      }
      // Shape A: legacyStats[recipeId] = { favorite, cookedCount, ... }
      for(const k of Object.keys(legacyStats)){
        if(k === "favorites") continue;
        const val = legacyStats[k];
        if(!val || typeof val !== "object") continue;
        const id = normalizeId(k);
        const mapped = {
          favorite: !!val.favorite,
          favoriteAt: val.favoriteAt || (val.favorite ? nowIso() : null),
          cookedCount: val.cookedCount,
          lastCooked: val.lastCooked,
          history: val.history
        };
        v1.recipes[id] = mergeEntry(v1.recipes[id], mapped);
      }
    }

    // 2) legacy favorites array (if present)
    const legacyFavArr = load(LEGACY_FAVORITES_KEY, null);
    if(Array.isArray(legacyFavArr)){
      for(const k of legacyFavArr){
        const id = normalizeId(k);
        v1.recipes[id] = mergeEntry(v1.recipes[id], { favorite:true, favoriteAt: nowIso() });
      }
    }

    // 3) legacy freezer map: freezer[id] = { portions, ... }
    const legacyFreezer = load(LEGACY_FREEZER_KEY, {});
    if(legacyFreezer && typeof legacyFreezer === "object"){
      for(const k of Object.keys(legacyFreezer)){
        const val = legacyFreezer[k];
        const id = normalizeId(k);
        const portions = Number(val?.portions ?? val ?? 0);
        if(!portions) continue;
        v1.recipes[id] = mergeEntry(v1.recipes[id], {
          freezerCount: portions,
          frozenAt: val?.frozenAt || null,
          bestBeforeAt: val?.bestBeforeAt || null
        });
      }
    }

    save(STORE_KEY, v1);

    // Optional cleanup (keep legacy keys for safety if someone downgrades)
    // localStorage.removeItem(LEGACY_FAVORITES_KEY);
    // localStorage.removeItem(LEGACY_FREEZER_KEY);

    return v1;
  }

  function getStats(){
    return migrate();
  }

  function setStats(next){
    if(!next || next.v !== 1) return;
    save(STORE_KEY, next);
    try{ window.dispatchEvent(new Event("kochbuch:stats")); }catch{}
  }

  function getEntry(id){
    const s = getStats();
    const key = normalizeId(id);
    const e = s.recipes[key] || {};
    return { id: key, ...toV1Entry(e) };
  }

  function setEntry(id, patch){
    const s = getStats();
    const key = normalizeId(id);
    const prev = s.recipes[key] || {};
    const next = mergeEntry(prev, patch || {});
    // If favorite toggled off, clear favoriteAt
    if(patch && Object.prototype.hasOwnProperty.call(patch,"favorite") && !patch.favorite){
      next.favoriteAt = null;
    }
    // If freezerCount set to 0, clear freezer timestamps
    if(Object.prototype.hasOwnProperty.call(patch||{},"freezerCount") && !Number(patch.freezerCount||0)){
      next.freezerCount = 0;
      next.frozenAt = null;
      next.bestBeforeAt = null;
    }
    // If freezerCount becomes >0 and frozenAt empty -> set now
    if(next.freezerCount > 0 && !next.frozenAt){
      next.frozenAt = nowIso();
    }
    s.recipes[key] = next;
    setStats(s);
    return { id:key, ...next };
  }

  function toggleFavorite(id){
    const e = getEntry(id);
    const nextFav = !e.favorite;
    return setEntry(id, { favorite: nextFav, favoriteAt: nextFav ? nowIso() : null });
  }

  function setFreezerCount(id, count, opts){
    count = Math.max(0, Number(count||0));
    const patch = { freezerCount: count };
    if(opts && typeof opts === "object"){
      if(opts.frozenAt) patch.frozenAt = opts.frozenAt;
      if(opts.bestBeforeAt) patch.bestBeforeAt = opts.bestBeforeAt;
    }
    return setEntry(id, patch);
  }

  window.KOCHBUCH_STORE = {
    STORE_KEY,
    normalizeId,
    getStats,
    setStats,
    getEntry,
    setEntry,
    toggleFavorite,
    setFreezerCount
  };
})();


(function(){
  const UNIT_ALIASES = {
    "gramm":"g","gram":"g","g":"g",
    "kilogramm":"kg","kilogram":"kg","kg":"kg",
    "milliliter":"ml","ml":"ml",
    "liter":"l","l":"l",
    "el":"EL","esslöffel":"EL","essloeffel":"EL","tbsp":"EL",
    "tl":"TL","teelöffel":"TL","teeloeffel":"TL","tsp":"TL",
    "stk":"Stk","stück":"Stk","stueck":"Stk"
  };

  function normUnit(u){
    const s = String(u||"").trim().toLowerCase();
    return UNIT_ALIASES[s] || (u ? String(u).trim() : "");
  }

  function tryNum(x){
    if(typeof x === "number" && isFinite(x)) return x;
    const s = String(x||"").trim().replace(",", ".");
    const n = Number(s);
    return (isFinite(n) ? n : null);
  }

  function autoConvert(qty, unit){
    const u = normUnit(unit);
    const q = tryNum(qty);
    if(q === null) return { qty, unit: u };

    if(u === "g" && q >= 1000) return { qty: q/1000, unit: "kg" };
    if(u === "kg" && q > 0 && q < 1) return { qty: q*1000, unit: "g" };

    if(u === "ml" && q >= 1000) return { qty: q/1000, unit: "l" };
    if(u === "l" && q > 0 && q < 1) return { qty: q*1000, unit: "ml" };

    return { qty: q, unit: u };
  }

  function roundSmart(n){
    if(typeof n !== "number" || !isFinite(n)) return "";
    const r = Math.round(n * 100) / 100;
    return (Math.abs(r - Math.round(r)) < 1e-9) ? String(Math.round(r)) : String(r);
  }


  function renderToggleList(container, items, opts){
    if(!container) return;
    const {
      emptyText = "Keine Einträge.",
      getId = (_item, idx) => String(idx),
      getLabel = (item) => String(item?.label ?? item?.item ?? ""),
      getSub = (_item) => "",
      getRightText = (_item) => "",
      isChecked = (item) => !!item?.checked,
      onToggle = ()=>{},
      // UI options
      showStatus = true
    } = (opts || {});

    container.innerHTML = "";
    if(!items || !items.length){
      const empty = document.createElement("div");
      empty.className = "uEmpty";
      empty.textContent = emptyText;
      container.appendChild(empty);
      return;
    }

    items.forEach((item, idx)=>{
      const row = document.createElement("div");
      row.className = "uRow pressable";
      row.dataset.id = getId(item, idx);

      const checked = isChecked(item);
      if(checked) row.classList.add("checked");

      // Accessibility: behave like checkbox row
      row.setAttribute("role","checkbox");
      row.setAttribute("tabindex","0");
      row.setAttribute("aria-checked", checked ? "true" : "false");

      const left = document.createElement("div");
      left.className = "uLead";

      if(showStatus){
        const dot = document.createElement("span");
        dot.className = "";
        dot.textContent = checked ? "✓" : "○";
        left.appendChild(dot);
      }

      const mid = document.createElement("div");
      mid.className = "uMid";

      const label = document.createElement("div");
      label.className = "uName";
      label.textContent = getLabel(item) || "";
      mid.appendChild(label);

      const sub = getSub(item);
      if(sub){
        const subEl = document.createElement("div");
        subEl.className = "uSub";
        subEl.textContent = sub;
        mid.appendChild(subEl);
      }

      const right = document.createElement("div");
      right.className = "uRight num";
      right.textContent = getRightText(item) || "";

      row.appendChild(left);
      row.appendChild(mid);
      row.appendChild(right);

      const toggle = ()=>{
        const now = !isChecked(item);
        onToggle(item, idx, now);
      };

      row.addEventListener("click", toggle);
      row.addEventListener("keydown", (e)=>{
        if(e.key === "Enter" || e.key === " "){
          e.preventDefault();
          toggle();
        }
      });

      container.appendChild(row);
    });
  }


  window.KOCHBUCH_UTILS = { normUnit, autoConvert, roundSmart, tryNum, renderToggleList };
})();

// Favorite badge indicator on list cards (uses kochbuch.stats)
(function(){
  const statsKey = (window.KOCHBUCH_STORE?.STORE_KEY) || "kochbuch.stats.v1";

  function getStats(){
    try{
      return window.KOCHBUCH_STORE?.getStats?.() || JSON.parse(localStorage.getItem(statsKey) || "{}");
    }catch{
      return {};
    }
  }

  window.updateFavBadges = function updateFavBadges(){
    const stats = getStats();

    // v1 schema: {v:1, recipes:{id:{favorite:true}}}
    const v1Recipes = (stats && stats.v===1 && stats.recipes && typeof stats.recipes==="object") ? stats.recipes : null;

    // Support multiple shapes that may exist across project versions:
    // A) stats[recipeId] = { favorite: true }
    // B) stats.favorites[recipeId] = true
    // Also tolerate baseurl changes by attempting a loose path match.
    function isFavById(id){
      if(!id) return false;
      const nid = window.KOCHBUCH_STORE?.normalizeId ? window.KOCHBUCH_STORE.normalizeId(id) : id;
      if(v1Recipes){
        const e = v1Recipes[nid];
        if(e && e.favorite === true) return true;
      }

      // Normalize to path-only, tolerant to:
      // - trailing slash differences
      // - baseurl depth differences (GitHub Pages)
      // - accidentally stored absolute URLs
      function normPath(x){
        try{
          x = String(x || "");
          x = x.replace(/^https?:\/\/[^/]+/i, "");
          x = x.split('#')[0].split('?')[0];
          if(x && x[0] !== '/') x = '/' + x;
          x = x.replace(/\/+/g, '/');
          return x;
        }catch{ return String(x || ""); }
      }

      const raw = normPath(id);
      const withSlash = raw.endsWith('/') ? raw : raw + '/';
      const noSlash = raw.replace(/\/$/, '');

      const favMap = stats && stats.favorites;

      // Direct A/B checks (as-is)
      const a0 = stats && stats[id];
      if(a0 && typeof a0 === 'object' && 'favorite' in a0) return !!a0.favorite;
      if(favMap && typeof favMap === 'object' && id in favMap) return !!favMap[id];

      // Candidate list (raw + slash variants + progressively stripped baseurl segments)
      const candidates = [];
      const seen = new Set();
      function push(v){
        v = normPath(v);
        if(!v) return;
        const vs = v.endsWith('/') ? v : v + '/';
        const vn = v.replace(/\/$/, '');
        for(const t of [v, vs, vn]){
          if(!seen.has(t)){
            seen.add(t);
            candidates.push(t);
          }
        }
      }
      push(raw);
      push(withSlash);
      push(noSlash);

      try{
        let cur = withSlash;
        // strip '/a/b/c/' -> try '/b/c/', '/c/' etc.
        while(cur.split('/').filter(Boolean).length > 1){
          cur = '/' + cur.split('/').filter(Boolean).slice(1).join('/') + '/';
          push(cur);
        }
      }catch{}

      // Fast candidate checks
      for(const cid of candidates){
        const a = stats && stats[cid];
        if(a && typeof a === 'object' && 'favorite' in a) return !!a.favorite;
        if(favMap && typeof favMap === 'object' && cid in favMap) return !!favMap[cid];
      }

      // Loose match: compare normalized endings
      try{
        const keys = Object.keys(stats || {});
        for(const k of keys){
          if(k === 'favorites') continue;
          const nk = normPath(k);
          for(const cid of candidates){
            const nc = normPath(cid);
            if(nk && nc && (nk.endsWith(nc) || nc.endsWith(nk))){
              const e = stats[k];
              if(e && typeof e === 'object' && 'favorite' in e) return !!e.favorite;
            }
          }
        }
      }catch{}

      return false;
    }

    document.querySelectorAll('[data-fav-badge][data-recipe-id]').forEach(el=>{
      const id = el.getAttribute('data-recipe-id');
      el.classList.toggle('isFav', isFavById(id));
    });
  };

  // initial
  if(document.readyState === "loading"){
    document.addEventListener("DOMContentLoaded", ()=> window.updateFavBadges());
  } else {
    window.updateFavBadges();
  }

  // update when navigating back/forward (bfcache on iOS Safari)
  window.addEventListener("pageshow", ()=> window.updateFavBadges());

  // update when another tab changes localStorage
  window.addEventListener("storage", (e)=>{
    if(e.key === statsKey) window.updateFavBadges();
  });
})();
