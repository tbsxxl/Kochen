---
layout: page
title: Rezept hochladen
permalink: /neues-rezept/
---

<div class="section" style="margin-top:6px" id="uploadGate" hidden>
  <div class="uEmpty">
    <div class="uEmptyTitle">Bitte zuerst anmelden</div>
    <div class="uEmptyText">Melde dich mit Face ID an, um Rezepte hochzuladen oder vorzuschlagen.</div>
    <a class="btn action" href="{{ '/konto/' | relative_url }}" style="margin-top:12px">Zum Profil</a>
  </div>
</div>

<form id="uploadForm" class="uploadForm" hidden autocomplete="off" novalidate>
  <div class="section card cardPad uploadCard importCard" id="importCard" style="margin-top:6px">
    <label class="fieldLabel" for="importUrl">Von einer Webseite übernehmen (optional)</label>
    <div class="searchRow searchRowCompact">
      <input id="importUrl" type="url" inputmode="url" placeholder="Link zum Rezept einfügen" autocomplete="off">
      <button class="btn secondary" id="importBtn" type="button">Laden</button>
    </div>
    <p class="sub importHint" id="importHint">Klappt bei den meisten großen Rezeptseiten. Danach alles prüfen und bei Bedarf anpassen.</p>
  </div>

  <div class="section">
    <label class="photoPick" id="photoPick">
      <input type="file" id="photoIn" accept="image/*" hidden>
      <img id="photoPreview" alt="" hidden>
      <span class="photoPickEmpty" id="photoEmpty"><svg class="uiIcon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14.5 4h-5L7 7H4a2 2 0 00-2 2v9a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2h-3z"/><circle cx="12" cy="13" r="3.5"/></svg>Foto auswählen</span>
    </label>
    <label class="checkRow"><input type="checkbox" id="cropIn" checked> Ränder links und rechts abschneiden (KI-Wasserzeichen)</label>
  </div>

  <div class="section card cardPad uploadCard">
    <label class="fieldLabel" for="titleIn">Titel</label>
    <input class="fieldInput" id="titleIn" maxlength="120" placeholder="z. B. Hähnchenbrust in Pfefferrahmsoße" required>
    <p class="fieldHint">Nur das Gericht, kurz (höchstens etwa 40 Zeichen). Beilagen kommen in die Unterzeile.</p>

    <label class="fieldLabel" for="subtitleIn">Unterzeile (optional)</label>
    <input class="fieldInput" id="subtitleIn" maxlength="120" placeholder="z. B. mit Romanesco und Kartoffelpüree">

    <label class="fieldLabel" for="catIn">Kategorie (steht auf dem Foto)</label>
    <select class="fieldInput" id="catIn" required>
      <option value="">Bitte wählen …</option>
      {% for c in site.data.categories %}<option>{{ c }}</option>{% endfor %}
    </select>

    <div class="fieldLabel">Weitere Kategorien</div>
    <div class="chips" id="extraCats">
      {% for c in site.data.categories %}<button type="button" class="pillToggle" data-cat="{{ c | escape }}" aria-pressed="false">{{ c }}</button>{% endfor %}
    </div>

    <div class="fieldRow">
      <div style="flex:1">
        <label class="fieldLabel" for="timeIn">Zeit</label>
        <input class="fieldInput" id="timeIn" maxlength="160" placeholder="z. B. 30 Min">
      </div>
      <div style="flex:0 0 120px">
        <label class="fieldLabel" for="servIn">Portionen</label>
        <input class="fieldInput" id="servIn" inputmode="numeric" value="2">
      </div>
    </div>

    <label class="fieldLabel" for="tagsIn">Stichwörter (antippen oder mit Komma getrennt eintragen)</label>
    <input class="fieldInput" id="tagsIn" placeholder="z. B. hähnchen, ofen">
    <div class="chips tagPicker" id="tagPicker">
      {%- for grp in site.data.tags %}{% for t in grp[1] %}<button type="button" class="pillToggle" data-tag="{{ t | escape }}" aria-pressed="false">{{ t }}</button>{% endfor %}{% endfor %}
    </div>

    <label class="fieldLabel" for="sourceIn">Quelle (optional)</label>
    <input class="fieldInput" id="sourceIn" maxlength="60" placeholder="z. B. HelloFresh">
  </div>

  <div class="section card cardPad uploadCard">
    <label class="fieldLabel" for="ingIn">Zutaten – eine pro Zeile</label>
    <textarea class="codeArea uploadArea" id="ingIn" rows="8" placeholder="400 g Gnocchi&#10;1 Dose stückige Tomaten&#10;2 Zehen Knoblauch&#10;1 Prise Salz&#10;Parmesan nach Bedarf"></textarea>
    <div class="ingPreview" id="ingPreview"></div>
    <div class="ingRows" id="ingRows" hidden></div>
    <button class="btn accountBtn" id="ingRowAdd" type="button" hidden>+ Zutat</button>
  </div>

  <div class="section card cardPad uploadCard">
    <label class="fieldLabel" for="stepsIn">Schritte – einer pro Zeile</label>
    <textarea class="codeArea uploadArea" id="stepsIn" rows="8" placeholder="Knoblauch hacken und in Olivenöl anschwitzen.&#10;Tomaten dazugeben und 10 Min köcheln lassen.&#10;…"></textarea>

    <label class="fieldLabel" for="notesIn">Tipps (optional)</label>
    <textarea class="codeArea uploadArea" id="notesIn" rows="3" placeholder="z. B. Schmeckt auch mit Mozzarella."></textarea>
  </div>

  <div class="section">
    <p class="accountError" id="uploadErr" hidden></p>
    <button class="btn action" id="uploadBtn" type="submit" style="width:100%">Rezept veröffentlichen</button>
    <p class="sub uploadHint" id="uploadHint">Das Rezept wird direkt ins Kochbuch übernommen und ist nach ca. 2 Minuten online. Dein Entwurf bleibt bis dahin auf diesem Gerät gespeichert.</p>
  </div>

  <div class="section" id="deleteSection" hidden>
    <button class="btn btnDangerOutline" id="deleteBtn" type="button" style="width:100%">Rezept löschen</button>
  </div>
</form>

<div class="section" id="uploadDone" hidden></div>

<script defer src="{{ '/assets/upload.js' | relative_url }}?v={{ site.time | date: '%s' }}"></script>
