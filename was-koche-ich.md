---
layout: page
title: Was koche ich?
permalink: /was-koche-ich/
---

<div class="section" style="margin-top:6px">
  <div class="segmented" role="tablist" aria-label="Modus">
    <button class="segBtn active" id="modePantry" type="button" role="tab" aria-selected="true">Was habe ich da?</button>
    <button class="segBtn" id="modeRandom" type="button" role="tab" aria-selected="false">Überrasch mich</button>
  </div>
</div>

<!-- Zutatensuche -->
<div id="pantryPanel">
  <div class="section">
    <p class="sub" style="margin:0 0 12px">Gib ein, was im Kühlschrank ist. Salz, Pfeffer, Öl und Wasser setze ich als vorhanden voraus.</p>
    <div class="searchRow searchRowCompact">
      <input id="pantryInput" type="text" placeholder="z. B. Hähnchen, Paprika, Reis" autocomplete="off" enterkeyhint="done" list="pantrySuggest" />
      <button id="pantryAdd" class="btn action" type="button" aria-label="Zutat hinzufügen">+</button>
    </div>
    <datalist id="pantrySuggest"></datalist>
    <div class="chips pantryChips" id="pantryChips"></div>
  </div>
  <div class="section">
    <div class="stack" id="pantryResults"></div>
  </div>
</div>

<!-- Zufall -->
<div id="randomPanel" hidden>
  <div class="section">
    <div class="chips" id="randomFilters">
      <button class="pillToggle" type="button" data-filter="Schnell" aria-pressed="false">Schnell</button>
      <button class="pillToggle" type="button" data-filter="Vegetarisch" aria-pressed="false">Vegetarisch</button>
      <button class="pillToggle" type="button" data-filter="fav" aria-pressed="false">♡ Nur Favoriten</button>
    </div>
  </div>
  <div class="section" id="randomHost"></div>
  <div class="section">
    <button class="btn action" id="randomAgain" type="button" style="width:100%">🎲 Nochmal würfeln</button>
  </div>
</div>

<script type="application/json" id="allRecipesJson">
[
{% assign sorted2 = site.recipes | sort: "title" %}
{% for r in sorted2 %}
  {
    "id": "{{ r.url | relative_url }}",
    "vt": "{{ r.url | slugify }}",
    "title": {{ r.title | jsonify }},
    "category": {{ r.category | jsonify }},
    "categories": {{ r.categories | jsonify }},
    "time": {{ r.time | jsonify }},
    "servings": {{ r.servings | jsonify }},
    "ings": {{ r.ingredients | map: "item" | jsonify }},
    "image": "{% if r.image %}{{ r.image | relative_url }}?v={{ site.image_version }}{% endif %}",
    "srcset": "{% if r.image %}{% include srcset.html src=r.image %}{% endif %}"
  }{% unless forloop.last %},{% endunless %}
{% endfor %}
]
</script>

<script defer src="{{ '/assets/what-to-cook.js' | relative_url }}?v={{ site.time | date: '%s' }}"></script>
