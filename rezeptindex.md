---
layout: page
title: Alle Rezepte
permalink: /rezeptindex/
---
<div class="card" style="margin-top:10px">
  <div class="searchRow">
    <input id="searchInput" placeholder="Suchen: z. B. chicken, scharf, 60 min, pasta …" />
    <button id="clearSearch" class="btn" style="min-height:48px">Reset</button>
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
        <span class="favBadge" data-fav-badge data-recipe-id="{{ r.url | relative_url }}" aria-hidden="true">★</span>
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
          {% if r.category %}<span class="badge action">{{ r.category }}</span>{% endif %}
        </div>

        <div class="recipeMeta">
          {% if r.time %}<span>⏱ {{ r.time }}</span>{% endif %}
          {% if r.servings %}<span>🍽 {{ r.servings }}</span>{% endif %}
        </div>

        {% if r.tags %}
        <div class="chips">
          {% for t in r.tags limit: 6 %}
            <span class="chip">{{ t }}</span>
          {% endfor %}
        </div>
        {% endif %}
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
  }
  q?.addEventListener('input', apply);
  clearBtn?.addEventListener('click', ()=>{ if(!q) return; q.value=''; q.focus(); apply(); });
})();
</script>
