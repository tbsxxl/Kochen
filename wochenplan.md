---
layout: page
title: Wochenplan
permalink: /wochenplan/
---

<div class="section" style="margin-top:6px">
  <div class="weekNav">
    <button class="navIconBtn pressable" id="weekPrev" type="button" aria-label="Vorherige Woche">‹</button>
    <div class="weekNavLabel"><div id="weekTitle">Diese Woche</div><div class="weekNavRange" id="weekRange"></div></div>
    <button class="navIconBtn pressable" id="weekNext" type="button" aria-label="Nächste Woche">›</button>
  </div>
</div>

<div class="section">
  <div class="stack" id="weekDays"></div>
</div>

<div class="section">
  <button class="btn action" id="weekToShopping" type="button" style="width:100%">Zutaten auf die Einkaufsliste</button>
  <p class="sub weekHint" id="weekHint"></p>
</div>

<!-- Rezept auswählen -->
<div class="sheetOverlay" id="pickSheetOverlay"></div>
<section class="sheet" id="pickSheet" aria-label="Rezept auswählen" aria-hidden="true">
  <div class="sheetGrab"></div>
  <div class="sheetHead">
    <div class="sheetTitle" id="pickTitle">Rezept auswählen</div>
    <button class="navIconBtn pressable" id="pickClose" aria-label="Schließen" type="button">✕</button>
  </div>
  <div class="sheetBody">
    <div class="searchRow searchRowCompact" style="margin-bottom:8px">
      <input id="pickSearch" type="search" placeholder="Rezept suchen …" autocomplete="off" />
    </div>
    <div id="pickList"></div>
  </div>
</section>

<script type="application/json" id="allRecipesJson">
[
{% assign sorted2 = site.recipes | sort: "title" %}
{% for r in sorted2 %}
  {
    "id": "{{ r.url | relative_url }}",
    "title": {{ r.title | jsonify }},
    "category": {{ r.category | jsonify }},
    "time": {{ r.time | jsonify }},
    "servings": {{ r.servings | default: 1 | jsonify }},
    "ingredients": {{ r.ingredients | jsonify }},
    "image": "{% if r.image %}{{ r.image | relative_url }}?v={{ site.image_version }}{% endif %}",
    "srcset": "{% if r.image %}{% include srcset.html src=r.image %}{% endif %}"
  }{% unless forloop.last %},{% endunless %}
{% endfor %}
]
</script>

<script defer src="{{ '/assets/plan.js' | relative_url }}?v={{ site.time | date: '%s' }}"></script>
