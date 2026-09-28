---
layout: page
title: Backup
permalink: /backup/
---

<div class="section" style="margin-top:6px">
  <p class="sub" style="margin:0">Sichert Favoriten, Kochstatistik, Notizen & Bewertungen, Kühltruhe, Einkaufsliste und Wochenplan von diesem Gerät. Mit Profil sind diese Daten zusätzlich automatisch auf dem Server gespeichert.</p>
</div>

<div class="section">
  <div class="card cardPad accountCard">
    <h2 class="h2 accountTitle">Sichern</h2>
    <button class="btn action accountBtn" id="saveFile" type="button">Als Datei sichern</button>
    <button class="btn btnGhost accountBtn" id="doExport" type="button">Als Text anzeigen</button>
    <div id="exportBox" hidden>
      <textarea id="exportOut" class="codeArea" readonly></textarea>
      <button class="btn accountBtn" id="copyExport" type="button" style="margin-top:8px">Kopieren</button>
    </div>
  </div>
</div>

<div class="section">
  <div class="card cardPad accountCard">
    <h2 class="h2 accountTitle">Wiederherstellen</h2>
    <label class="btn accountBtn" for="importFile">Sicherungsdatei auswählen</label>
    <input id="importFile" type="file" accept="application/json,.json" hidden>
    <textarea id="importIn" class="codeArea" placeholder="… oder den Text einer Sicherung hier einfügen"></textarea>
    <p class="sub">„Zusammenführen“ behält deine jetzigen Daten und ergänzt sie. „Ersetzen“ überschreibt sie.</p>
    <div class="fieldRow">
      <button class="btn action accountBtn" id="mergeImport" type="button">Zusammenführen</button>
      <button class="btn btnDangerOutline accountBtn" id="doImport" type="button">Ersetzen</button>
    </div>
  </div>
</div>

<script defer src="{{ '/assets/backup.js' | relative_url }}?v={{ site.time | date: '%s' }}"></script>
