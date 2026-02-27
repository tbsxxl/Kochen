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
  const statsKey = "kochbuch.stats";

  function getStats(){
    try { return JSON.parse(localStorage.getItem(statsKey) || "{}"); }
    catch { return {}; }
  }

  window.updateFavBadges = function updateFavBadges(){
    const stats = getStats();

    // Support multiple shapes that may exist across project versions:
    // A) stats[recipeId] = { favorite: true }
    // B) stats.favorites[recipeId] = true
    // Also tolerate baseurl changes by attempting a loose path match.
    function isFavById(id){
      if(!id) return false;

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
