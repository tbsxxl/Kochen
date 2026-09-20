---
layout: page
title: Kühltruhe
permalink: /kuehltruhe/
---

<div class="section" style="margin-top:6px">
  <p class="sub">Portionen die du eingefroren hast. Tippe auf einem Rezept auf „Kühltruhe" um Einträge hinzuzufügen.</p>
</div>

<div class="section">
  <div id="freezerList"></div>
</div>

<script type="application/json" id="allRecipesJson">
[
{% assign sorted2 = site.recipes | sort: "title" %}
{% for r in sorted2 %}
  {
    "id": "{{ r.url | relative_url }}",
    "title": {{ r.title | jsonify }},
    "category": {{ r.category | jsonify }},
    "time": {{ r.time | jsonify }},
    "servings": {{ r.servings | jsonify }}
  }{% unless forloop.last %},{% endunless %}
{% endfor %}
]
</script>

<script defer src="{{ '/assets/freezer.js' | relative_url }}?v={{ site.time | date: '%s' }}"></script>
