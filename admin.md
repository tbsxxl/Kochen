---
layout: page
title: Admin
permalink: /admin/
---

<div class="card cardPad" style="margin-top:10px">
  <div class="h2" style="margin:0 0 8px 0">Admin-Zugang</div>
  <div class="searchRow" style="padding:0">
    <input id="pw" type="password" placeholder="Passwort" />
    <button class="btn blue" id="unlock" style="min-height:48px">Öffnen</button>
  </div>
  <p class="dim" style="margin-top:8px">Nur als Hürde (kein echter Schutz).</p>
</div>

<div id="adminApp" style="display:none">
  <div class="section">
    <div class="card cardPad">
      <div class="footerRow">
        <button class="btn green" id="newRecipe" style="flex:1">Neues Rezept</button>
        <button class="btn" id="lock" style="flex:1">Sperren</button>
      </div>
    </div>
  </div>

  <div class="section">
    <div class="card cardPad">
      <div class="h2" style="margin:0 0 8px 0">Lokale Rezepte</div>
      <div id="recipeList"></div>
    </div>
  </div>

  <div class="section">
    <div class="card cardPad">
      <div class="h2" style="margin:0 0 8px 0">Editor</div>

      <div class="searchRow" style="padding:0">
        <input id="title" placeholder="Titel" />
      </div>
      <div class="searchRow" style="padding:0;margin-top:8px">
        <input id="category" placeholder="Kategorie" />
      </div>
      <div class="searchRow" style="padding:0;margin-top:8px">
        <input id="time" placeholder="Zeit (z. B. 60–90 Min)" />
      </div>
      <div class="searchRow" style="padding:0;margin-top:8px">
        <input id="servings" inputmode="numeric" placeholder="Basis-Portionen (Zahl)" />
      </div>
      <div class="searchRow" style="padding:0;margin-top:8px">
        <input id="tags" placeholder="Tags (kommagetrennt)" />
      </div>

      <div class="hr"></div>
      <div class="h2" style="margin:0 0 8px 0">Zutaten</div>

      <div class="searchRow" style="padding:0">
        <input id="ingQty" placeholder="Menge" />
        <input id="ingUnit" placeholder="Einheit (g, ml, TL …)" />
      </div>
      <div class="searchRow" style="padding:0;margin-top:8px">
        <input id="ingItem" placeholder="Zutat" />
        <button class="btn green" id="addIng" style="min-height:48px">Hinzufügen</button>
      </div>

      <div id="ings"></div>

      <div class="hr"></div>
      <div class="h2" style="margin:0 0 8px 0">Zubereitung (Markdown)</div>
      <textarea id="body" style="width:100%;min-height:220px;padding:12px;border-radius:14px;border:1px solid #d7dbe4;font-weight:700;outline:none"></textarea>

      <div class="hr"></div>
      <div class="footerRow">
        <button class="btn blue" id="save" style="flex:1">Speichern</button>
        <button class="btn" id="export" style="flex:1">Export Markdown</button>
        <button class="btn red" id="del" style="flex:1">Löschen</button>
      </div>

      <div id="exportBox" style="display:none;margin-top:10px">
        <div class="hr"></div>
        <div class="sub">Copy/Paste als Datei in <code>_recipes/…</code></div>
        <textarea id="exportText" style="width:100%;min-height:260px;padding:12px;border-radius:14px;border:1px solid #d7dbe4;font-weight:650;outline:none"></textarea>
      </div>
    </div>
  </div>
</div>

<script src="{{ ' /assets/.js?v=20260220_5' | relative_url }}"></script>
