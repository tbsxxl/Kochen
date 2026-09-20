---
layout: page
title: Admin
permalink: /admin/
---

<div class="section" style="margin-top:6px">
  <div class="card cardPad">
    <div class="h2" style="margin:0 0 10px 0">Zugang</div>
    <div class="searchRow searchRowCompact" style="margin-bottom:8px">
      <input id="pw" type="password" placeholder="Passwort" />
      <button class="btn action" id="unlock" type="button" style="min-height:48px;padding:0 18px">Öffnen</button>
    </div>
    <p class="dim" style="margin:0">Nur als einfache Hürde — kein echter Schutz.</p>
  </div>
</div>

<div id="adminApp" style="display:none">
  <div class="section">
    <div style="display:flex;gap:10px">
      <button class="btn action" id="newRecipe" style="flex:1" type="button">Neues Rezept</button>
      <button class="btn btnGhost" id="lock" style="flex:1" type="button">Sperren</button>
    </div>
  </div>

  <div class="section">
    <div class="card cardPad">
      <div class="h2" style="margin:0 0 10px 0">Lokale Rezepte</div>
      <div id="recipeList"></div>
    </div>
  </div>

  <div class="section">
    <div class="card cardPad">
      <div class="h2" style="margin:0 0 12px 0">Editor</div>

      <div style="display:flex;flex-direction:column;gap:10px">
        <input class="fieldInput" id="title" placeholder="Titel" />
        <input class="fieldInput" id="category" placeholder="Kategorie" />
        <div style="display:flex;gap:10px">
          <input class="fieldInput" id="time" placeholder="Zeit (z. B. 60–90 Min)" style="flex:1" />
          <input class="fieldInput" id="servings" inputmode="numeric" placeholder="Portionen" style="flex:1;max-width:120px" />
        </div>
        <input class="fieldInput" id="tags" placeholder="Tags (kommagetrennt)" />
      </div>

      <div class="hr"></div>
      <div class="h2" style="margin:0 0 10px 0">Zutaten</div>

      <div style="display:flex;gap:8px;margin-bottom:8px">
        <input class="fieldInput" id="ingQty" placeholder="Menge" style="max-width:80px" />
        <input class="fieldInput" id="ingUnit" placeholder="Einheit" style="max-width:80px" />
        <input class="fieldInput" id="ingItem" placeholder="Zutat" style="flex:1" />
        <button class="btn action" id="addIng" type="button" style="min-height:44px;padding:0 14px">+</button>
      </div>
      <div id="ings"></div>

      <div class="hr"></div>
      <div class="h2" style="margin:0 0 10px 0">Zubereitung</div>
      <textarea id="body" class="codeArea" style="min-height:200px" placeholder="Markdown: ## Schritte&#10;1. Schritt eins …"></textarea>

      <div class="hr"></div>
      <div style="display:flex;gap:10px">
        <button class="btn action" id="save" style="flex:1" type="button">Speichern</button>
        <button class="btn btnGhost" id="export" style="flex:1" type="button">Markdown</button>
        <button class="btn btnDangerOutline" id="del" style="flex:1" type="button">Löschen</button>
      </div>

      <div id="exportBox" style="display:none;margin-top:12px">
        <div class="hr"></div>
        <p class="sub" style="margin-bottom:8px">Copy/Paste als Datei in <code style="font-family:var(--font-mono,monospace);font-size:12px;background:var(--muted);padding:2px 5px;border-radius:5px">_recipes/</code></p>
        <textarea id="exportText" class="codeArea" style="min-height:240px"></textarea>
      </div>
    </div>
  </div>
</div>

<script defer src="{{ '/assets/admin.js' | relative_url }}"></script>
