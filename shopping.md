---
layout: page
title: Shopping List
permalink: /shopping/
---

<div class="card cardPad" style="margin-top:10px">
  <div class="searchRow">
    <input id="addShopItem" type="text" placeholder="Artikel hinzufügen (z. B. Milch)" autocomplete="off" />
    <button class="btn" id="addShopBtn" type="button">+</button>
  </div>
</div>

<div class="card cardPad" style="margin-top:10px">
  <div class="footerRow">
    <button class="btn" id="clearChecked" style="flex:1">Erledigte löschen</button>
    <button class="btn red" id="clearAll" style="flex:1">Alles löschen</button>
  </div>
</div>

<div class="section">
  <div id="shopList"></div>
</div>

<script defer src="{{ '/assets/shopping.js' | relative_url }}?v={{ site.time | date: '%s' }}"></script>
