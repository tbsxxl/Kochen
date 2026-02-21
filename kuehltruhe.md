---
layout: page
title: Kühltruhe
permalink: /kuehltruhe/
---

<div class="section">
  <div class="card cardPad">
    <div class="h2" style="margin:0">Aus der Kühltruhe</div>
    <div class="dim" style="margin-top:6px">Verwalte Portionen, die du eingefroren hast.</div>
  </div>
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
