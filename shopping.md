---
layout: page
title: Einkaufsliste
permalink: /shopping/
---

<div class="section" style="margin-top:6px">
  <p class="householdNote" data-household-note hidden></p>
  <div class="searchRow searchRowCompact">
    <input id="addShopItem" type="search" placeholder="Artikel hinzufügen …" autocomplete="off" />
    <button class="btn brandBtn shopAddBtn" id="addShopBtn" type="button" aria-label="Hinzufügen"><svg class="ico icoPM" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 5v14M5 12h14" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/></svg></button>
  </div>
  <div class="shopSuggest" id="shopSuggest" aria-label="Vorschläge" hidden></div>
</div>

<div class="shopToolbar" id="reweStartRow" hidden>
  <div class="shopToolbarInfo"><span id="shopOpenCount"></span><span class="shopFor" id="shopFor"></span></div>
  <button class="reweChip pressable" id="reweStart" type="button"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 4h2l2.4 11.2a1.5 1.5 0 0 0 1.5 1.2h8.6a1.5 1.5 0 0 0 1.5-1.1L21 8H6.2" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><circle cx="9.5" cy="20" r="1.4" fill="currentColor"/><circle cx="17" cy="20" r="1.4" fill="currentColor"/></svg>Bei REWE bestellen</button>
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
    <button class="navIconBtn pressable" id="shopItemDone" aria-label="Fertig" type="button"><svg class="ico" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
  </div>
  <div class="sheetBody shopItemBody">
    <label class="shopItemLabel" for="shopItemQty">Menge</label>
    <input class="shopItemQty" id="shopItemQty" type="text" inputmode="text" placeholder="z. B. 500 g" autocomplete="off">
    <div class="shopItemLabel">Abteilung</div>
    <div class="chips" id="shopItemSections"></div>
    <a class="btn btnGhost" id="shopItemRewe" href="#" target="_blank" rel="noopener">Bei REWE suchen</a>
    <button class="btn btnDangerOutline" id="shopItemDelete" type="button">Löschen</button>
  </div>
</section>

<div class="sheetOverlay" id="reweOverlay"></div>
<section class="sheet" id="reweSheet" aria-labelledby="reweTitle" aria-hidden="true">
  <div class="sheetGrab"></div>
  <div class="sheetHead">
    <div class="sheetTitle" id="reweTitle">Bei REWE bestellen</div>
    <button class="navIconBtn pressable" id="reweClose" aria-label="Schließen" type="button"><svg class="ico" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/></svg></button>
  </div>
  <div class="sheetBody reweBody">
    <div class="reweProgress" id="reweProgress"></div>
    <div class="reweItem" id="reweItem"></div>
    <div class="reweQty" id="reweQty"></div>
    <a class="btn brandBtn" id="reweSearch" href="#" target="_blank" rel="noopener">Bei REWE suchen</a>
    <div class="reweNav">
      <button class="btn btnGhost" id="reweSkip" type="button">Überspringen</button>
      <button class="btn btnGhost" id="reweInCart" type="button">Im Warenkorb ✓</button>
    </div>
    <p class="reweHint">Öffnet die REWE-Suche (App oder Website). Produkt in den Warenkorb legen, zurückkommen und „Im Warenkorb“ tippen.</p>
  </div>
</section>

<div class="section">
  <div style="display:flex;gap:10px">
    <button class="btn btnGhost" id="clearChecked" style="flex:1" type="button">Erledigte löschen</button>
    <button class="btn btnDangerOutline" id="clearAll" style="flex:1" type="button">Alles löschen</button>
  </div>
</div>

<script defer src="{{ '/assets/shopping.js' | relative_url }}?v={{ site.time | date: '%s' }}"></script>
