---
layout: page
title: Einkaufsliste
permalink: /shopping/
---

<div class="section" style="margin-top:6px">
  <p class="householdNote" data-household-note hidden></p>
  <div class="searchRow searchRowCompact">
    <input id="addShopItem" type="search" placeholder="Artikel hinzufügen …" autocomplete="off" />
    <button class="btn brandBtn" id="addShopBtn" type="button" aria-label="Hinzufügen" style="min-height:48px;min-width:48px;padding:0 16px">+</button>
  </div>
  <div class="shopSuggest" id="shopSuggest" aria-label="Vorschläge" hidden></div>
</div>

<div class="section">
  <div id="shopList"></div>
</div>

<p class="shopHint">Antippen = abhaken · nach links wischen = löschen · lange drücken oder Menge antippen = bearbeiten</p>

<div class="sheetOverlay" id="shopItemOverlay"></div>
<section class="sheet" id="shopItemSheet" aria-labelledby="shopItemTitle" aria-hidden="true">
  <div class="sheetGrab"></div>
  <div class="sheetHead">
    <div class="sheetTitle" id="shopItemTitle">Artikel</div>
    <button class="navIconBtn pressable" id="shopItemDone" aria-label="Fertig" type="button">✓</button>
  </div>
  <div class="sheetBody shopItemBody">
    <label class="shopItemLabel" for="shopItemQty">Menge</label>
    <input class="shopItemQty" id="shopItemQty" type="text" inputmode="text" placeholder="z. B. 500 g" autocomplete="off">
    <div class="shopItemLabel">Abteilung</div>
    <div class="chips" id="shopItemSections"></div>
    <button class="btn btnDangerOutline" id="shopItemDelete" type="button">Löschen</button>
  </div>
</section>

<div class="section">
  <div style="display:flex;gap:10px">
    <button class="btn btnGhost" id="clearChecked" style="flex:1" type="button">Erledigte löschen</button>
    <button class="btn btnDangerOutline" id="clearAll" style="flex:1" type="button">Alles löschen</button>
  </div>
</div>

<script defer src="{{ '/assets/shopping.js' | relative_url }}?v={{ site.time | date: '%s' }}"></script>
