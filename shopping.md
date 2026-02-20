---
layout: page
title: Shopping List
permalink: /shopping/
---

<div class="card cardPad" style="margin-top:10px">
  <div class="footerRow">
    <button class="btn" id="clearChecked" style="flex:1">Erledigte löschen</button>
    <button class="btn red" id="clearAll" style="flex:1">Alles löschen</button>
  </div>
</div>

<div class="section">
  <div id="shopList"></div>
</div>

<script src="{{ '/assets/shopping.js' | relative_url }}"></script>
