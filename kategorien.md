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
        <div class="card recipeCard cardHover">
          <span class="favBadge" data-fav-badge data-recipe-id="{{ r.url | relative_url }}" aria-hidden="true">★</span>
          {% if r.image %}
            <div class="thumb" style="position:relative">
              <img
                class="thumbImg"
                src="{{ r.image | relative_url }}"
                alt="{{ r.title | escape }}"
                loading="lazy"
                decoding="async"
              >
              {% if r.category %}
                <div class="heroOverlayCat" style="bottom:10px;left:10px;font-size:10.5px;padding:4px 9px">{{ r.category }}</div>
              {% endif %}
            </div>
          {% endif %}

          <div class="recipeTop">
            <h3 class="recipeTitle">{{ r.title }}</h3>
          </div>

          <div class="recipeMeta">
            {% if r.time %}<span class="metaItem"><span class="metaIcon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><polyline points="12 7 12 12 15.5 14"/></svg></span><span>{{ r.time }}</span></span>{% endif %}
            {% if r.servings %}<span class="metaItem"><span class="metaIcon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg></span><span>{{ r.servings }}</span></span>{% endif %}
          </div>
        </div>
      </a>
    {% endfor %}
  </div>
</div>
{% endfor %}
