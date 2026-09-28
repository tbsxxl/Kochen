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

  {%- assign authors = "" | split: "" -%}
  {%- for r in site.recipes -%}{%- assign a = r.author | default: site.owner_name -%}{%- unless authors contains a -%}{%- assign authors = authors | push: a -%}{%- endunless -%}{%- endfor -%}

  <div class="filterBar">
    <div class="filterBarLeft">
      <button id="catBtn" class="pillToggle" type="button" aria-haspopup="dialog" aria-controls="catSheet">
        <span id="catBtnLabel">Kategorie</span>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="15" height="15" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg>
      </button>
      {%- if authors.size > 1 %}
      <button id="personBtn" class="pillToggle" type="button" aria-haspopup="dialog" aria-controls="personSheet">
        <span id="personBtnLabel">Person</span>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="15" height="15" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg>
      </button>
      {%- endif %}
      <button id="favToggle" class="pillToggle" type="button" aria-pressed="false" aria-label="Nur Favoriten anzeigen">
        <span aria-hidden="true">♡</span> <span class="favLabel">Favoriten</span>
      </button>
    </div>
    <div class="sortMenuWrap">
      <button id="sortBtn" class="pillToggle sortToggle" type="button" aria-haspopup="true" aria-expanded="false" aria-label="Sortieren">
        <span class="sortLabel">Sortieren</span>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="15" height="15"><path d="M8 9l4-4 4 4M8 15l4 4 4-4"/></svg>
      </button>
      <div id="sortMenu" class="sortMenu sortMenuRight" hidden role="menu">
        <button class="sortMenuItem active" data-sort="title" type="button" role="menuitemradio" aria-checked="true">A–Z</button>
        <button class="sortMenuItem" data-sort="recent" type="button" role="menuitemradio" aria-checked="false">Zuletzt gekocht</button>
        <button class="sortMenuItem" data-sort="often" type="button" role="menuitemradio" aria-checked="false">Am häufigsten</button>
        <button class="sortMenuItem" data-sort="fav" type="button" role="menuitemradio" aria-checked="false">Favoriten zuerst</button>
        <button class="sortMenuItem" data-sort="rating" type="button" role="menuitemradio" aria-checked="false">Beste Bewertung</button>
      </div>
    </div>
  </div>
</div>

<!-- Kategorie-Auswahl -->
<div class="sheetOverlay" id="catSheetOverlay"></div>
<section class="sheet" id="catSheet" aria-label="Kategorie wählen" aria-hidden="true">
  <div class="sheetGrab"></div>
  <div class="sheetHead">
    <div class="sheetTitle">Kategorie</div>
    <button class="navIconBtn pressable" id="catSheetClose" aria-label="Schließen" type="button">✕</button>
  </div>
  <div class="sheetBody">
    <button class="sheetRow catOption active" data-cat="" type="button" aria-pressed="true"><span>Alle Rezepte</span><span class="catOptCount">{{ site.recipes | size }}</span></button>
    {%- for c in cat_names %}
    {%- assign hits = site.recipes | where_exp: "r", "r.category == c or r.categories contains c" -%}
    {%- if hits.size > 0 %}
    <button class="sheetRow catOption" data-cat="{{ c | escape }}" type="button" aria-pressed="false"><span>{{ c }}</span><span class="catOptCount">{{ hits.size }}</span></button>
    {%- endif -%}
    {%- endfor %}
  </div>
</section>

<!-- Personen-Auswahl -->
<div class="sheetOverlay" id="personSheetOverlay"></div>
<section class="sheet" id="personSheet" aria-label="Person wählen" aria-hidden="true">
  <div class="sheetGrab"></div>
  <div class="sheetHead">
    <div class="sheetTitle">Rezepte von …</div>
    <button class="navIconBtn pressable" id="personSheetClose" aria-label="Schließen" type="button">✕</button>
  </div>
  <div class="sheetBody">
    <button class="sheetRow catOption personOption active" data-person="" type="button" aria-pressed="true"><span>Alle</span><span class="catOptCount">{{ site.recipes | size }}</span></button>
    {%- for a in authors %}
    {%- assign n = 0 -%}{%- for r in site.recipes -%}{%- assign ra = r.author | default: site.owner_name -%}{%- if ra == a -%}{%- assign n = n | plus: 1 -%}{%- endif -%}{%- endfor %}
    <button class="sheetRow catOption personOption" data-person="{{ a | escape }}" type="button" aria-pressed="false"><span class="personOptName"><span class="authorAvatar" aria-hidden="true">{{ a | slice: 0 | upcase }}</span>{{ a }}</span><span class="catOptCount">{{ n }}</span></button>
    {%- endfor %}
  </div>
</section>

<div class="section">
  <div id="emptyState" class="uEmpty" hidden>
    <div class="uEmptyTitle">Keine Rezepte gefunden</div>
    <div class="uEmptyText">Versuch einen anderen Suchbegriff oder setze die Filter zurück.</div>
    <button id="resetFilters" class="btn btnGhost" type="button" style="margin-top:12px">Filter zurücksetzen</button>
  </div>
  <div class="grid" id="recipeGrid">
  {% assign sorted = site.recipes | sort: "title" %}
  {% for r in sorted %}
    {%- if forloop.index <= 2 -%}{% include recipe-card.html r=r index=true eager=true %}{%- else -%}{% include recipe-card.html r=r index=true %}{%- endif %}
  {% endfor %}
  </div>
</div>

<script>
(function(){
  const q = document.querySelector('#searchInput');
  const clearBtn = document.querySelector('#clearSearch');
  const grid = document.querySelector('#recipeGrid');
  const cards = Array.from(document.querySelectorAll('[data-recipe-card]'));
  const catOptions = Array.from(document.querySelectorAll('#catSheet .catOption'));
  const catBtn = document.querySelector('#catBtn');
  const catBtnLabel = document.querySelector('#catBtnLabel');
  const catSheet = document.querySelector('#catSheet');
  const catOverlay = document.querySelector('#catSheetOverlay');
  function openCatSheet(){ catOverlay.classList.add('open'); catSheet.classList.add('open','half'); catSheet.setAttribute('aria-hidden','false'); document.body.classList.add('noScroll'); }
  function closeCatSheet(){ catOverlay.classList.remove('open'); catSheet.classList.remove('open'); catSheet.setAttribute('aria-hidden','true'); document.body.classList.remove('noScroll'); }
  catBtn?.addEventListener('click', openCatSheet);
  catOverlay?.addEventListener('click', closeCatSheet);
  document.querySelector('#catSheetClose')?.addEventListener('click', closeCatSheet);
  const favToggle = document.querySelector('#favToggle');
  const sortBtn = document.querySelector('#sortBtn');
  const sortMenu = document.querySelector('#sortMenu');
  const sortMenuItems = Array.from(sortMenu.querySelectorAll('.sortMenuItem'));
  const norm = (s)=> (s||"").toLowerCase().trim();

  let activeCat = "";
  let activePerson = "";
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
      const matchesPerson = !activePerson || c.getAttribute('data-author') === activePerson;
      const visible = matchesTerm && matchesCat && matchesFav && matchesPerson;
      c.style.display = visible ? '' : 'none';
      if (visible) visibleCount++;
    });
    if (emptyState) emptyState.hidden = visibleCount > 0;
    if (typeof window.updateFavBadges === "function") window.updateFavBadges();
  }

  function sortBy(mode){
    const stats = getStats();
    let notes = {};
    try{ notes = JSON.parse(localStorage.getItem('kochbuch.notes') || '{}') || {}; }catch{}
    const val = (c) => {
      const id = c.getAttribute('data-recipe-id');
      const e = stats[id] || {};
      if(mode === 'recent'){ const t = e.lastCooked ? Date.parse(e.lastCooked) : 0; return -t; }
      if(mode === 'often'){ return -(Number(e.cookedCount||0)); }
      if(mode === 'fav'){ return e.favorite ? 0 : 1; }
      if(mode === 'rating'){ return -(Number((notes[id] || {}).rating) || 0); }
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
    catOptions.forEach(x=>{
      const on = (x.getAttribute('data-cat') || '') === activeCat;
      x.classList.toggle('active', on);
      x.setAttribute('aria-pressed', String(on));
    });
    if(catBtnLabel) catBtnLabel.textContent = activeCat || 'Kategorie';
    catBtn?.classList.toggle('pillToggleActive', !!activeCat);
    apply();
  }
  catOptions.forEach(opt=> opt.addEventListener('click', ()=>{ setCat(opt.getAttribute('data-cat')); closeCatSheet(); }));
  // Personen-Filter (nur sichtbar, wenn es Rezepte von mehreren Personen gibt)
  const personBtn = document.querySelector('#personBtn');
  const personSheet = document.querySelector('#personSheet');
  const personOverlay = document.querySelector('#personSheetOverlay');
  const personOptions = Array.from(document.querySelectorAll('#personSheet .personOption'));
  function openPersonSheet(){ personOverlay.classList.add('open'); personSheet.classList.add('open','half'); personSheet.setAttribute('aria-hidden','false'); document.body.classList.add('noScroll'); }
  function closePersonSheet(){ personOverlay.classList.remove('open'); personSheet.classList.remove('open'); personSheet.setAttribute('aria-hidden','true'); document.body.classList.remove('noScroll'); }
  function setPerson(name){
    activePerson = name || '';
    personOptions.forEach(x=>{ const on = (x.getAttribute('data-person') || '') === activePerson; x.classList.toggle('active', on); x.setAttribute('aria-pressed', String(on)); });
    const lbl = document.querySelector('#personBtnLabel');
    if(lbl) lbl.textContent = activePerson ? `von ${activePerson}` : 'Person';
    personBtn?.classList.toggle('pillToggleActive', !!activePerson);
    apply();
  }
  personBtn?.addEventListener('click', openPersonSheet);
  personOverlay?.addEventListener('click', closePersonSheet);
  document.querySelector('#personSheetClose')?.addEventListener('click', closePersonSheet);
  personOptions.forEach(o=> o.addEventListener('click', ()=>{ setPerson(o.getAttribute('data-person')); closePersonSheet(); }));
  const urlPerson = new URLSearchParams(location.search).get('person');
  if(urlPerson && personOptions.some(x=>x.getAttribute('data-person') === urlPerson)) setPerson(urlPerson);

  // Direktlink auf eine Kategorie: /rezeptindex/?kategorie=Pasta
  const urlCat = new URLSearchParams(location.search).get('kategorie');
  if(urlCat && catOptions.some(x=>x.getAttribute('data-cat') === urlCat)) setCat(urlCat);

  favToggle?.addEventListener('click', ()=>{
    favOnly = !favOnly;
    favToggle.setAttribute('aria-pressed', String(favOnly));
    favToggle.classList.toggle('pillToggleActive', favOnly);
    favToggle.innerHTML = favOnly ? '<span aria-hidden="true">♥</span> <span class="favLabel">Favoriten</span>' : '<span aria-hidden="true">♡</span> <span class="favLabel">Favoriten</span>';
    apply();
  });

  q?.addEventListener('input', apply);
  clearBtn?.addEventListener('click', ()=>{ if(!q) return; q.value=''; q.focus(); apply(); });

  resetBtn?.addEventListener('click', ()=>{
    if(q) q.value = '';
    favOnly = false;
    favToggle.setAttribute('aria-pressed','false');
    favToggle.classList.remove('pillToggleActive');
    favToggle.innerHTML = '<span aria-hidden="true">♡</span> <span class="favLabel">Favoriten</span>';
    activePerson = ''; if(personOptions.length) setPerson('');
    setCat('');
  });
})();
</script>
