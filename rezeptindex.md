---
layout: page
title: Alle Rezepte
permalink: /rezeptindex/
---

<div class="section" style="margin-top:6px">
  <div class="searchRow searchRowCompact">
    <input id="searchInput" placeholder="Suchen: z. B. chicken, scharf, 60 min, pasta …" />
    <button id="clearSearch" class="btn btnGhost" type="button" aria-label="Zurücksetzen">↺</button>
  </div>
</div>

<div class="section">
  <div class="grid" id="recipeGrid">
  {% assign sorted = site.recipes | sort: "title" %}
  {% for r in sorted %}
    {% capture tags %}{% if r.tags %}{{ r.tags | join: " " }}{% endif %}{% endcapture %}
    {% capture hay %}{{ r.title }} {{ r.category }} {{ r.time }} {{ r.servings }} {{ tags }}{% endcapture %}
    <a class="linkCard" href="{{ r.url | relative_url }}" data-recipe-card data-haystack="{{ hay | escape }}">
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

        <span class="favBadge"
              data-fav-badge
              data-recipe-id="{{ r.url | relative_url }}"
              aria-hidden="true">★</span>

        <div class="rcBody">
          <h3 class="recipeTitle">{{ r.title }}</h3>

          <div class="recipeMeta">
            {% if r.time %}<span class="metaItem"><span class="metaIcon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><polyline points="12 7 12 12 15.5 14"/></svg></span><span>{{ r.time }}</span></span>{% endif %}
            {% if r.servings %}<span class="metaItem"><span class="metaIcon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/></svg></span><span>{{ r.servings }}</span></span>{% endif %}
          </div>

          {% if r.tags %}
            {% assign tag_count = r.tags | size %}
            {% assign rest = tag_count | minus: 3 %}
            <div class="chips chipsCompact">
              {% for t in r.tags limit: 3 %}
                <span class="chip">{{ t }}</span>
              {% endfor %}
              {% if rest > 0 %}
                <span class="chip chipMore">+{{ rest }}</span>
              {% endif %}
            </div>
          {% endif %}
        </div>

      </div>
    </a>
  {% endfor %}
  </div>
</div>

<script>
(function(){
  const q = document.querySelector('#searchInput');
  const clearBtn = document.querySelector('#clearSearch');
  const cards = Array.from(document.querySelectorAll('[data-recipe-card]'));
  const norm = (s)=> (s||"").toLowerCase().trim();

  function apply(){
    const term = norm(q?.value);
    cards.forEach(c=>{
      const hay = norm(c.getAttribute('data-haystack'));
      c.style.display = (!term || hay.includes(term)) ? '' : 'none';
    });

    // Falls Favoriten erst nach dem Filtern sichtbar werden sollen:
    // (setzt voraus, dass updateFavBadges() global existiert)
    if (typeof window.updateFavBadges === "function") window.updateFavBadges();
  }

  q?.addEventListener('input', apply);
  clearBtn?.addEventListener('click', ()=>{ if(!q) return; q.value=''; q.focus(); apply(); });
})();
</script>
