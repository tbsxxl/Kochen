---
layout: page
title: Shopping List
permalink: /shopping/
---

<div class="section" style="margin-top:6px">
  <div class="searchRow searchRowCompact">
    <input id="addShopItem" type="search" placeholder="Artikel hinzufügen …" autocomplete="off" />
    <button class="btn brandBtn" id="addShopBtn" type="button" aria-label="Hinzufügen" style="min-height:48px;min-width:48px;padding:0 16px">+</button>
  </div>
</div>

<div class="section">
  <div class="listGroup compactList" id="shopList"></div>
</div>

<div class="section">
  <div style="display:flex;gap:10px">
    <button class="btn btnGhost" id="clearChecked" style="flex:1" type="button">Erledigte löschen</button>
    <button class="btn btnDangerOutline" id="clearAll" style="flex:1" type="button">Alles löschen</button>
  </div>
</div>

<script defer src="{{ '/assets/shopping.js' | relative_url }}?v={{ site.time | date: '%s' }}"></script>
