---
layout: page
title: Kategorien
permalink: /kategorien/
---

{%- comment -%} Kategorien als Kacheln (Foto, Name, Anzahl); Antippen öffnet die Rezeptliste mit diesem Filter.
  Reihenfolge aus _data/categories.yml, danach unbekannte Hauptkategorien. Ein Rezept zählt in seiner Hauptkategorie
  (category) und in allen weiteren (categories). Foto: bevorzugt ein Rezept mit dieser Hauptkategorie. {%- endcomment -%}
{%- assign cat_names = site.data.categories -%}
{%- assign used = "" -%}
{%- assign primaries = site.recipes | map: "category" | uniq -%}
{%- for c in primaries -%}{%- if c -%}{%- unless cat_names contains c -%}{%- assign cat_names = cat_names | push: c -%}{%- endunless -%}{%- endif -%}{%- endfor -%}

<div class="section" style="margin-top:8px">
  <div class="catTiles">
  {%- for c in cat_names -%}
    {%- assign hits = site.recipes | where_exp: "r", "r.category == c or r.categories contains c" -%}
    {%- if hits.size > 0 -%}
      {%- comment -%} Foto: erst Rezepte mit dieser Hauptkategorie, dann die übrigen; jedes Foto nur einmal {%- endcomment -%}
      {%- assign own = hits | where: "category", c -%}
      {%- assign pool = own | concat: hits -%}
      {%- assign main = nil -%}
      {%- for r in pool -%}{%- if r.image -%}{%- unless used contains r.image -%}{%- assign main = r -%}{%- break -%}{%- endunless -%}{%- endif -%}{%- endfor -%}
      {%- unless main -%}{%- assign main = pool | where_exp: "r", "r.image" | first -%}{%- endunless -%}
      {%- assign used = used | append: "|" | append: main.image %}
    {%- assign grp = site.data.category_groups[c] -%}{%- if grp %}
    <div class="catGroupTitle">{{ grp }}</div>{% endif -%}
    <a class="catTile pressable" href="{{ '/rezeptindex/' | relative_url }}?kategorie={{ c | url_encode }}">
      {%- if main %}<img src="{{ main.image | relative_url }}?v={{ site.image_version }}" srcset="{% include srcset.html src=main.image %}" sizes="(min-width:900px) 300px, 46vw" alt="" loading="lazy" decoding="async">{% endif %}
      <span class="catTileText"><span class="catTileName">{{ c }}</span><span class="catTileCount">{{ hits.size }} {% if hits.size == 1 %}Rezept{% else %}Rezepte{% endif %}</span></span>
    </a>
    {%- endif -%}
  {%- endfor %}
  </div>
</div>
