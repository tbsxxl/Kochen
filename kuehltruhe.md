---
layout: page
title: Kühltruhe
permalink: /kuehltruhe/
---

<div class="section" style="margin-top:6px">
  <p class="sub">Was du eingefroren hast, das Älteste zuerst. Neue Einträge legst du auf der Rezeptseite über „Kühltruhe“ an.</p>
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
    "servings": {{ r.servings | jsonify }},
    "image": "{% if r.image %}{{ r.image | relative_url }}?v={{ site.image_version }}{% endif %}",
    "srcset": "{% if r.image %}{% include srcset.html src=r.image %}{% endif %}"
  }{% unless forloop.last %},{% endunless %}
{% endfor %}
]
</script>

<script defer src="{{ '/assets/freezer.js' | relative_url }}?v={{ site.time | date: '%s' }}"></script>
