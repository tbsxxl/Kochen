---
layout: page
title: Rezept hochladen
permalink: /neues-rezept/
---

<div class="section" style="margin-top:6px" id="uploadGate" hidden>
  <div class="uEmpty">
    <div class="uEmptyTitle">Bitte zuerst anmelden</div>
    <div class="uEmptyText">Rezepte hochladen kannst nur du. Melde dich mit Face ID an.</div>
    <a class="btn action" href="{{ '/konto/' | relative_url }}" style="margin-top:12px">Zum Profil</a>
  </div>
</div>

<form id="uploadForm" class="uploadForm" hidden autocomplete="off" novalidate>
  <div class="section" style="margin-top:6px">
    <label class="photoPick" id="photoPick">
      <input type="file" id="photoIn" accept="image/*" hidden>
      <img id="photoPreview" alt="" hidden>
      <span class="photoPickEmpty" id="photoEmpty"><span aria-hidden="true">📷</span>Foto auswählen</span>
    </label>
    <label class="checkRow"><input type="checkbox" id="cropIn" checked> Ränder links und rechts abschneiden (KI-Wasserzeichen)</label>
  </div>

  <div class="section card cardPad uploadCard">
    <label class="fieldLabel" for="titleIn">Titel</label>
    <input class="fieldInput" id="titleIn" maxlength="120" placeholder="z. B. Cremige Tomaten-Gnocchi" required>

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
        <input class="fieldInput" id="timeIn" maxlength="40" placeholder="z. B. 30 Min">
      </div>
      <div style="flex:0 0 120px">
        <label class="fieldLabel" for="servIn">Portionen</label>
        <input class="fieldInput" id="servIn" inputmode="numeric" value="2">
      </div>
    </div>

    <label class="fieldLabel" for="tagsIn">Stichwörter (mit Komma getrennt, optional)</label>
    <input class="fieldInput" id="tagsIn" placeholder="z. B. italienisch, one-pot">
  </div>

  <div class="section card cardPad uploadCard">
    <label class="fieldLabel" for="ingIn">Zutaten – eine pro Zeile</label>
    <textarea class="codeArea uploadArea" id="ingIn" rows="8" placeholder="400 g Gnocchi&#10;1 Dose stückige Tomaten&#10;2 Zehen Knoblauch&#10;1 Prise Salz&#10;Parmesan nach Bedarf"></textarea>
    <div class="ingPreview" id="ingPreview"></div>
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
    <p class="sub uploadHint">Das Rezept wird direkt ins Kochbuch übernommen und ist nach ca. 2 Minuten online. Dein Entwurf bleibt bis dahin auf diesem Gerät gespeichert.</p>
  </div>
</form>

<div class="section" id="uploadDone" hidden></div>

<script defer src="{{ '/assets/upload.js' | relative_url }}?v={{ site.time | date: '%s' }}"></script>
