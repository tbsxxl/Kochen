---
layout: page
title: Alle Rezepte
permalink: /rezeptindex/
---

<div class="section" style="margin-top:6px">
  <div class="searchRow searchRowCompact searchRowIcon">
    <span class="searchIcon" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
    </span>
    <input id="searchInput" placeholder="z. B. Pasta, Curry, Schnell …" />
    <button id="clearSearch" class="btn btnGhost" type="button" aria-label="Zurücksetzen">↺</button>
  </div>

  {%- assign cat_names = site.data.categories -%}
  {%- assign primaries = site.recipes | map: "category" | uniq -%}
  {%- for c in primaries -%}{%- if c -%}{%- unless cat_names contains c -%}{%- assign cat_names = cat_names | push: c -%}{%- endunless -%}{%- endif -%}{%- endfor -%}
  <nav class="catRow" id="catRow" aria-label="Kategorie filtern">
    <button class="catChip active" data-cat="" type="button" aria-pressed="true">Alle</button>
    {%- for c in cat_names %}
    {%- assign hits = site.recipes | where_exp: "r", "r.category == c or r.categories contains c" -%}
    {%- if hits.size > 0 %}
    <button class="catChip" data-cat="{{ c | escape }}" type="button" aria-pressed="false">{{ c }}</button>
    {%- endif -%}
    {%- endfor %}
  </nav>

  <div class="filterBar">
    <button id="favToggle" class="pillToggle" type="button" aria-pressed="false" aria-label="Nur Favoriten anzeigen">
      <span aria-hidden="true">♡</span> Favoriten
    </button>
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
    {% capture hay %}{{ r.title }} {{ r.categories | join: " " }} {{ r.time }} {{ r.servings }} {{ tags }}{% endcapture %}
    <a class="linkCard" href="{{ r.url | relative_url }}" data-recipe-card data-recipe-id="{{ r.url | relative_url }}" data-title="{{ r.title | escape }}" data-category="{{ r.category | escape }}" data-categories="|{{ r.categories | join: '|' | escape }}|" data-haystack="{{ hay | escape }}">
      <div class="card recipeCard cardHover">

        {% if r.image %}
          <div class="rcImg">
            <img
              src="{{ r.image | relative_url }}?v={{ site.image_version }}"
              style="view-transition-name: img-{{ r.url | slugify }}"
              srcset="{% include srcset.html src=r.image %}"
              sizes="(min-width:900px) 300px, (min-width:641px) 45vw, 92vw"
              alt="{{ r.title | escape }}"
              loading="lazy"
              decoding="async"
            >
            {% if r.category %}<div class="heroOverlayCat">{{ r.category }}</div>{% endif %}
          {% include freezer-flag.html id=r.url %}
          </div>
        {% endif %}

        <div class="rcBody">
          <h3 class="recipeTitle">{{ r.title }}</h3>

          <div class="recipeMeta">
            {% if r.time %}<span class="metaItem"><span class="metaIcon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><polyline points="12 7 12 12 15.5 14"/></svg></span><span>{{ r.time }}</span></span>{% endif %}
            {% if r.servings %}<span class="metaItem"><span class="metaIcon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/></svg></span><span>{{ r.servings }}</span></span>{% endif %}
            <span class="favBadge rcFavBadge metaFav" data-fav-badge data-recipe-id="{{ r.url | relative_url }}" aria-label="Favorit">♥</span>
          </div>
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
  const catChips = Array.from(document.querySelectorAll('#catRow .catChip'));
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
      const cats = c.getAttribute('data-categories') || '';
      const id = c.getAttribute('data-recipe-id');
      const matchesTerm = !term || hay.includes(term);
      const matchesCat = !activeCat || cats.includes('|' + activeCat + '|');
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

  sortBtn?.addEventListener('click', (e)=>{ e.stopPropagation(); sortMenu.hidden ? openMenu(sortMenu, sortBtn) : closeMenu(sortMenu, sortBtn); });
  document.addEventListener('click', (e)=>{
    if (!sortMenu.hidden && !sortMenu.contains(e.target) && e.target !== sortBtn) closeMenu(sortMenu, sortBtn);
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

  function setCat(cat){
    activeCat = cat || '';
    catChips.forEach(x=>{
      const on = (x.getAttribute('data-cat') || '') === activeCat;
      x.classList.toggle('active', on);
      x.setAttribute('aria-pressed', String(on));
      if(on) x.scrollIntoView({ block:'nearest', inline:'center', behavior:'smooth' });
    });
    apply();
  }
  catChips.forEach(chip=> chip.addEventListener('click', ()=> setCat(chip.getAttribute('data-cat'))));
  // Direktlink auf eine Kategorie: /rezeptindex/?kategorie=Pasta
  const urlCat = new URLSearchParams(location.search).get('kategorie');
  if(urlCat && catChips.some(x=>x.getAttribute('data-cat') === urlCat)) setCat(urlCat);

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
    favOnly = false;
    favToggle.setAttribute('aria-pressed','false');
    favToggle.classList.remove('pillToggleActive');
    favToggle.innerHTML = '<span aria-hidden="true">♡</span> Favoriten';
    setCat('');
  });
})();
</script>
