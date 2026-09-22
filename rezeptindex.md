---
layout: page
title: Alle Rezepte
permalink: /rezeptindex/
hide_topbar: true
---

<div class="section" style="margin-top:6px">
  <div class="searchRow searchRowCompact searchRowIcon">
    <span class="searchIcon" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
    </span>
    <input id="searchInput" placeholder="z. B. Pasta, Curry, Schnell …" />
    <button id="clearSearch" class="btn btnGhost" type="button" aria-label="Zurücksetzen">↺</button>
  </div>

  <div class="filterBar">
    <div class="filterBarLeft">
      <button id="favToggle" class="pillToggle" type="button" aria-pressed="false" aria-label="Nur Favoriten anzeigen">
        <span aria-hidden="true">♡</span> Favoriten
      </button>
      <div class="sortMenuWrap">
        <button id="catToggle" class="pillToggle" type="button" aria-expanded="false">Kategorien</button>
        <div id="catMenu" class="sortMenu" hidden role="menu">
          {% assign cats = site.recipes | map: "category" | uniq | sort %}
          <button class="sortMenuItem active" data-cat="" type="button">Alle</button>
          {% for c in cats %}
            {% if c %}<button class="sortMenuItem" data-cat="{{ c | escape }}" type="button">{{ c }}</button>{% endif %}
          {% endfor %}
        </div>
      </div>
    </div>
    <div class="sortMenuWrap">
      <button id="sortBtn" class="pillToggle sortToggle" type="button" aria-haspopup="true" aria-expanded="false" aria-label="Sortieren">
        Sortieren
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="15" height="15"><path d="M8 9l4-4 4 4M8 15l4 4 4-4"/></svg>
      </button>
      <div id="sortMenu" class="sortMenu sortMenuRight" hidden role="menu">
        <button class="sortMenuItem active" data-sort="title" type="button" role="menuitemradio" aria-checked="true">A–Z</button>
        <button class="sortMenuItem" data-sort="recent" type="button" role="menuitemradio" aria-checked="false">Zuletzt gekocht</button>
        <button class="sortMenuItem" data-sort="often" type="button" role="menuitemradio" aria-checked="false">Am häufigsten</button>
        <button class="sortMenuItem" data-sort="fav" type="button" role="menuitemradio" aria-checked="false">Favoriten zuerst</button>
      </div>
    </div>
  </div>
</div>

<div class="section">
  <div id="emptyState" class="uEmpty" hidden>
    <div class="uEmptyTitle">Keine Rezepte gefunden</div>
    <div class="uEmptyText">Versuch einen anderen Suchbegriff oder setze die Filter zurück.</div>
    <button id="resetFilters" class="btn btnGhost" type="button" style="margin-top:12px">Filter zurücksetzen</button>
  </div>
  <div class="grid" id="recipeGrid">
  {% assign sorted = site.recipes | sort: "title" %}
  {% for r in sorted %}
    {% capture tags %}{% if r.tags %}{{ r.tags | join: " " }}{% endif %}{% endcapture %}
    {% capture hay %}{{ r.title }} {{ r.category }} {{ r.time }} {{ r.servings }} {{ tags }}{% endcapture %}
    <a class="linkCard" href="{{ r.url | relative_url }}" data-recipe-card data-recipe-id="{{ r.url | relative_url }}" data-title="{{ r.title | escape }}" data-category="{{ r.category | escape }}" data-haystack="{{ hay | escape }}">
      <div class="card recipeCard cardHover">

        {% if r.image %}
          <div class="rcImg">
            <img
              src="{{ r.image | relative_url }}"
              alt="{{ r.title | escape }}"
              loading="lazy"
              decoding="async"
            >
            {% if r.category %}<div class="heroOverlayCat">{{ r.category }}</div>{% endif %}
          </div>
        {% endif %}

        <div class="rcBody">
          <h3 class="recipeTitle">{{ r.title }}</h3>

          <div class="recipeMeta">
            {% if r.time %}<span class="metaItem"><span class="metaIcon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><polyline points="12 7 12 12 15.5 14"/></svg></span><span>{{ r.time }}</span></span>{% endif %}
            {% if r.servings %}<span class="metaItem"><span class="metaIcon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/></svg></span><span>{{ r.servings }}</span></span>{% endif %}
            <span class="favBadge rcFavBadge metaFav" data-fav-badge data-recipe-id="{{ r.url | relative_url }}" aria-label="Favorit">♥</span>
          </div>

          {% if r.tags %}
            {% assign tag_count = r.tags | size %}
            {% assign rest = tag_count | minus: 3 %}
            <div class="chips chipsCompact">
              {% for t in r.tags limit: 3 %}
                <span class="chip">{{ t }}</span>
              {% endfor %}
              {% if rest > 0 %}
                <span class="chip chipMore">+{{ rest }}</span>
              {% endif %}
            </div>
          {% endif %}
        </div>

      </div>
    </a>
  {% endfor %}
  </div>
</div>

<script>
(function(){
  const q = document.querySelector('#searchInput');
  const clearBtn = document.querySelector('#clearSearch');
  const grid = document.querySelector('#recipeGrid');
  const cards = Array.from(document.querySelectorAll('[data-recipe-card]'));
  const catMenu = document.querySelector('#catMenu');
  const catMenuItems = Array.from(catMenu.querySelectorAll('.sortMenuItem'));
  const catToggle = document.querySelector('#catToggle');
  const favToggle = document.querySelector('#favToggle');
  const sortBtn = document.querySelector('#sortBtn');
  const sortMenu = document.querySelector('#sortMenu');
  const sortMenuItems = Array.from(sortMenu.querySelectorAll('.sortMenuItem'));
  const norm = (s)=> (s||"").toLowerCase().trim();

  let activeCat = "";
  let favOnly = false;
  const emptyState = document.querySelector('#emptyState');
  const resetBtn = document.querySelector('#resetFilters');

  function getStats(){ try{ return JSON.parse(localStorage.getItem('kochbuch.stats')||'{}'); }catch{ return {}; } }
  function isFavById(id){ const s = getStats(); return !!(s[id] && s[id].favorite); }

  function apply(){
    const term = norm(q?.value);
    let visibleCount = 0;
    cards.forEach(c=>{
      const hay = norm(c.getAttribute('data-haystack'));
      const cat = c.getAttribute('data-category') || '';
      const id = c.getAttribute('data-recipe-id');
      const matchesTerm = !term || hay.includes(term);
      const matchesCat = !activeCat || cat === activeCat;
      const matchesFav = !favOnly || isFavById(id);
      const visible = matchesTerm && matchesCat && matchesFav;
      c.style.display = visible ? '' : 'none';
      if (visible) visibleCount++;
    });
    if (emptyState) emptyState.hidden = visibleCount > 0;
    if (typeof window.updateFavBadges === "function") window.updateFavBadges();
  }

  function sortBy(mode){
    const stats = getStats();
    const val = (c) => {
      const id = c.getAttribute('data-recipe-id');
      const e = stats[id] || {};
      if(mode === 'recent'){ const t = e.lastCooked ? Date.parse(e.lastCooked) : 0; return -t; }
      if(mode === 'often'){ return -(Number(e.cookedCount||0)); }
      if(mode === 'fav'){ return e.favorite ? 0 : 1; }
      return 0;
    };
    const sorted = cards.slice().sort((a,b)=>{
      const va = val(a), vb = val(b);
      if(va !== vb) return va - vb;
      return (a.getAttribute('data-title')||'').localeCompare(b.getAttribute('data-title')||'','de');
    });
    sorted.forEach(c => grid.appendChild(c));
    if (typeof window.updateFavBadges === "function") window.updateFavBadges();
  }

  function closeMenu(menu, btn){ menu.hidden = true; btn?.setAttribute('aria-expanded','false'); }
  function openMenu(menu, btn){ menu.hidden = false; btn?.setAttribute('aria-expanded','true'); }

  sortBtn?.addEventListener('click', (e)=>{ e.stopPropagation(); closeMenu(catMenu, catToggle); sortMenu.hidden ? openMenu(sortMenu, sortBtn) : closeMenu(sortMenu, sortBtn); });
  catToggle?.addEventListener('click', (e)=>{ e.stopPropagation(); closeMenu(sortMenu, sortBtn); catMenu.hidden ? openMenu(catMenu, catToggle) : closeMenu(catMenu, catToggle); });
  document.addEventListener('click', (e)=>{
    if (!sortMenu.hidden && !sortMenu.contains(e.target) && e.target !== sortBtn) closeMenu(sortMenu, sortBtn);
    if (!catMenu.hidden && !catMenu.contains(e.target) && e.target !== catToggle) closeMenu(catMenu, catToggle);
  });

  sortMenuItems.forEach(item=>{
    item.addEventListener('click', ()=>{
      sortMenuItems.forEach(x=>{ x.classList.remove('active'); x.setAttribute('aria-checked','false'); });
      item.classList.add('active');
      item.setAttribute('aria-checked','true');
      sortBy(item.getAttribute('data-sort'));
      closeMenu(sortMenu, sortBtn);
    });
  });

  catMenuItems.forEach(item=>{
    item.addEventListener('click', ()=>{
      catMenuItems.forEach(x=>x.classList.remove('active'));
      item.classList.add('active');
      activeCat = item.getAttribute('data-cat') || '';
      catToggle.classList.toggle('pillToggleActive', !!activeCat);
      closeMenu(catMenu, catToggle);
      apply();
    });
  });

  favToggle?.addEventListener('click', ()=>{
    favOnly = !favOnly;
    favToggle.setAttribute('aria-pressed', String(favOnly));
    favToggle.classList.toggle('pillToggleActive', favOnly);
    favToggle.innerHTML = favOnly ? '<span aria-hidden="true">♥</span> Favoriten' : '<span aria-hidden="true">♡</span> Favoriten';
    apply();
  });

  q?.addEventListener('input', apply);
  clearBtn?.addEventListener('click', ()=>{ if(!q) return; q.value=''; q.focus(); apply(); });

  resetBtn?.addEventListener('click', ()=>{
    if(q) q.value = '';
    activeCat = '';
    favOnly = false;
    catMenuItems.forEach(x=>x.classList.remove('active'));
    catMenuItems[0]?.classList.add('active');
    catToggle.classList.remove('pillToggleActive');
    favToggle.setAttribute('aria-pressed','false');
    favToggle.classList.remove('pillToggleActive');
    favToggle.innerHTML = '<span aria-hidden="true">♡</span> Favoriten';
    apply();
  });
})();
</script>
