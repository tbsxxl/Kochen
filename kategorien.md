---
layout: page
title: Kategorien
permalink: /kategorien/
---

{%- comment -%} Alle Kategorien: Reihenfolge aus _data/categories.yml, danach unbekannte Hauptkategorien.
  Ein Rezept erscheint in seiner Hauptkategorie (category) und in allen weiteren (categories). {%- endcomment -%}
{%- assign cat_names = site.data.categories -%}
{%- assign primaries = site.recipes | map: "category" | uniq -%}
{%- for c in primaries -%}{%- if c -%}{%- unless cat_names contains c -%}{%- assign cat_names = cat_names | push: c -%}{%- endunless -%}{%- endif -%}{%- endfor -%}

<div class="section" style="margin-top:8px">
  <button id="jumpBtn" class="pillToggle" type="button" aria-haspopup="dialog" aria-controls="jumpSheet">
    Springe zu Kategorie
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="15" height="15" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg>
  </button>
</div>

<div class="sheetOverlay" id="jumpSheetOverlay"></div>
<section class="sheet" id="jumpSheet" aria-label="Kategorie wählen" aria-hidden="true">
  <div class="sheetGrab"></div>
  <div class="sheetHead">
    <div class="sheetTitle">Springe zu</div>
    <button class="navIconBtn pressable" id="jumpSheetClose" aria-label="Schließen" type="button">✕</button>
  </div>
  <div class="sheetBody">
    {%- for c in cat_names -%}
      {%- assign hits = site.recipes | where_exp: "r", "r.category == c or r.categories contains c" -%}
      {%- if hits.size > 0 %}
    <a class="sheetRow catOption" href="#cat-{{ c | slugify }}"><span>{{ c }}</span><span class="catOptCount">{{ hits.size }}</span></a>
      {%- endif -%}
    {%- endfor %}
  </div>
</section>
<script>
(function(){
  const btn = document.getElementById('jumpBtn'), sheet = document.getElementById('jumpSheet'), ov = document.getElementById('jumpSheetOverlay');
  const open = ()=>{ ov.classList.add('open'); sheet.classList.add('open','half'); sheet.setAttribute('aria-hidden','false'); document.body.classList.add('noScroll'); };
  const close = ()=>{ ov.classList.remove('open'); sheet.classList.remove('open'); sheet.setAttribute('aria-hidden','true'); document.body.classList.remove('noScroll'); };
  btn.addEventListener('click', open); ov.addEventListener('click', close);
  document.getElementById('jumpSheetClose').addEventListener('click', close);
  sheet.querySelectorAll('a').forEach(a=>a.addEventListener('click', close));
})();
</script>

{% for c in cat_names %}
{%- assign hits = site.recipes | where_exp: "r", "r.category == c or r.categories contains c" -%}
{%- if hits.size > 0 %}
<div class="section catSection" id="cat-{{ c | slugify }}">
  <div class="homeSectionTitle">{{ c }} <span class="catCount">{{ hits.size }}</span></div>
  <div class="grid">
    {% assign rs = hits | sort: "title" %}
    {% for r in rs %}
      <a class="linkCard" href="{{ r.url | relative_url }}">
        <div class="card recipeCard cardHover">
          {% if r.image %}
            <div class="rcImg">
              <img
                src="{{ r.image | relative_url }}?v={{ site.image_version }}"
                srcset="{% include srcset.html src=r.image %}"
                sizes="(min-width:900px) 300px, (min-width:641px) 45vw, 92vw"
                alt="{{ r.title | escape }}"
                loading="lazy"
                decoding="async"
              >
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
{% endif %}
{% endfor %}
