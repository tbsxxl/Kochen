<!-- kategorien.md (vollständig) -->
---
layout: page
title: Kategorien
permalink: /kategorien/
---

{% assign grouped = site.recipes | group_by: "category" | sort: "name" %}
{% for g in grouped %}
<div class="card cardPad" style="margin-top:10px">
  <div class="h2" style="margin-bottom:6px">{{ g.name }}</div>
  <div class="grid">
    {% assign rs = g.items | sort: "title" %}
    {% for r in rs %}
      <a class="linkCard" href="{{ r.url | relative_url }}">
        <div class="card recipeCard cardHover" style="box-shadow:none;border:1px solid rgba(15,23,42,.10)">
          {% if r.image %}
            <div class="thumb">
              <img
                class="thumbImg"
                src="{{ r.image | relative_url }}"
                alt="{{ r.title | escape }}"
                loading="lazy"
                decoding="async"
                style="width:100%;max-height:170px;object-fit:cover;display:block;"
              >
            </div>
          {% endif %}

          <div class="recipeTop">
            <h3 class="recipeTitle">{{ r.title }}</h3>
          </div>

          <div class="recipeMeta">
            {% if r.time %}<span>⏱ {{ r.time }}</span>{% endif %}
            {% if r.servings %}<span>🍽 {{ r.servings }}</span>{% endif %}
          </div>
        </div>
      </a>
    {% endfor %}
  </div>
</div>
{% endfor %}
