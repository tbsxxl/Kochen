---
layout: page
title: Backup
permalink: /backup/
---

<div class="section" style="margin-top:6px">
  <div class="card cardPad">
    <div class="h2" style="margin:0 0 10px 0">Export</div>
    <div style="display:flex;gap:10px;margin-bottom:12px">
      <button class="btn action" id="doExport" style="flex:1" type="button">Backup erzeugen</button>
      <button class="btn btnGhost" id="copyExport" style="flex:1" type="button">Kopieren</button>
    </div>
    <textarea id="exportOut" class="codeArea" placeholder="Hier erscheint dein Backup-JSON …"></textarea>
  </div>
</div>

<div class="section">
  <div class="card cardPad">
    <div class="h2" style="margin:0 0 6px 0">Import</div>
    <p class="dim" style="margin-bottom:12px">„Anwenden" überschreibt alle Daten. „Mergen" ist sicherer — neue Werte werden kombiniert.</p>
    <textarea id="importIn" class="codeArea" placeholder="Backup-JSON hier einfügen …"></textarea>
    <div style="display:flex;gap:10px;margin-top:12px">
      <button class="btn action" id="mergeImport" style="flex:1" type="button">Mergen</button>
      <button class="btn btnDangerOutline" id="doImport" style="flex:1" type="button">Überschreiben</button>
    </div>
  </div>
</div>

<script defer src="{{ '/assets/backup.js' | relative_url }}"></script>
