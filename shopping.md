---
layout: page
title: Shopping List
permalink: /shopping/
---

<div class="card cardPad" style="margin-top:10px">
  <div class="footerRow shopActions">
    <button class="btn" id="clearChecked">Erledigte löschen</button>
    <button class="btn red" id="clearAll">Alles löschen</button>
  </div>
</div>

<div class="section">
  <div id="shopList"></div>
</div>

<script defer src="{{ '/assets/shopping.js' | relative_url }}?v={{ site.time | date: '%s' }}"></script>
