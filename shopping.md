---
layout: page
title: Shopping List
permalink: /shopping/
---

<div class="card cardPad" style="margin-top:10px">
  <div class="searchRow">
    <input id="addShopItem" type="search" placeholder="Artikel hinzufügen (z. B. Milch)" autocomplete="off" />
    <button class="btn" id="addShopBtn" type="button">+</button>
  </div>
</div>

<div class="card cardPad" style="margin-top:10px">
  <div class="footerRow">
    <button class="btn btnGhost" id="clearChecked" style="flex:1" type="button">Erledigte löschen</button>
    <button class="btn btnDangerOutline" id="clearAll" style="flex:1" type="button">Alles löschen</button>
  </div>
</div>

<div class="section">
  <div class="listGroup compactList" id="shopList"></div>
</div>

<script defer src="{{ '/assets/shopping.js' | relative_url }}?v={{ site.time | date: '%s' }}"></script>
