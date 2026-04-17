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
          <span class="favBadge" data-fav-badge data-recipe-id="{{ r.url | relative_url }}" aria-hidden="true">★</span>
          {% if r.image %}
            <div class="thumb">
              <img
                class="thumbImg"
                src="{{ r.image | relative_url }}"
                alt="{{ r.title | escape }}"
                loading="lazy"
                decoding="async"
               
              >
            </div>
          {% endif %}

          <div class="recipeTop">
            <h3 class="recipeTitle">{{ r.title }}</h3>
          </div>

          <div class="recipeMeta">
            {% if r.time %}<span class="metaItem"><span class="metaIcon" aria-hidden="true">◷</span><span>{{ r.time }}</span></span>{% endif %}
            {% if r.servings %}<span class="metaItem"><span class="metaIcon" aria-hidden="true">◎</span><span>{{ r.servings }}</span></span>{% endif %}
          </div>
        </div>
      </a>
    {% endfor %}
  </div>
</div>
{% endfor %}
