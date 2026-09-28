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
      {% include recipe-card.html r=r %}
    {% endfor %}
  </div>
</div>
{% endif %}
{% endfor %}
