---
layout: page
title: Kategorien
permalink: /kategorien/
hide_topbar: true
---

{% assign grouped = site.recipes | group_by: "category" | sort: "name" %}
{% for g in grouped %}
<div class="section" style="margin-top:18px">
  <div class="homeSectionTitle" style="margin-bottom:10px">{{ g.name }}</div>
  <div class="grid">
    {% assign rs = g.items | sort: "title" %}
    {% for r in rs %}
      <a class="linkCard" href="{{ r.url | relative_url }}">
        <div class="card recipeCard cardHover">
          {% if r.image %}
            <div class="rcImg">
              <img
                src="{{ r.image | relative_url }}?v={{ site.image_version }}"
                srcset="{% include srcset.html src=r.image %}"
                sizes="(min-width:900px) 300px, (min-width:641px) 45vw, 92vw"
                alt="{{ r.title | escape }}"
                loading="lazy"
                decoding="async"
              >
            </div>
          {% endif %}
          <div class="rcBody">
            <h3 class="recipeTitle">{{ r.title }}</h3>
            <div class="recipeMeta">
              {% if r.time %}<span class="metaItem"><span class="metaIcon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><polyline points="12 7 12 12 15.5 14"/></svg></span><span>{{ r.time }}</span></span>{% endif %}
              {% if r.servings %}<span class="metaItem"><span class="metaIcon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/></svg></span><span>{{ r.servings }}</span></span>{% endif %}
              <span class="favBadge rcFavBadge metaFav" data-fav-badge data-recipe-id="{{ r.url | relative_url }}" aria-label="Favorit">♥</span>
            </div>
          </div>
        </div>
      </a>
    {% endfor %}
  </div>
</div>
{% endfor %}
