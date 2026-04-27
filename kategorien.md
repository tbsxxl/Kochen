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
          {% if r.image %}
            <div class="rcImg">
              <img
                src="{{ r.image | relative_url }}"
                alt="{{ r.title | escape }}"
                loading="lazy"
                decoding="async"
              >
              {% if r.category %}
                <div class="heroOverlayCat">{{ r.category }}</div>
              {% endif %}
            </div>
          {% endif %}
          <span class="favBadge" data-fav-badge data-recipe-id="{{ r.url | relative_url }}" aria-hidden="true">★</span>
          <div class="rcBody">
            <h3 class="recipeTitle">{{ r.title }}</h3>
            <div class="recipeMeta">
              {% if r.time %}<span class="metaItem"><span class="metaIcon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><polyline points="12 7 12 12 15.5 14"/></svg></span><span>{{ r.time }}</span></span>{% endif %}
              {% if r.servings %}<span class="metaItem"><span class="metaIcon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/></svg></span><span>{{ r.servings }}</span></span>{% endif %}
            </div>
          </div>
        </div>
      </a>
    {% endfor %}
  </div>
</div>
{% endfor %}
