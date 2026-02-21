---
layout: page
title: Backup
permalink: /backup/
---

<div class="card cardPad" style="margin-top:10px">
  <div class="h2" style="margin:0 0 8px 0">Export</div>
  <div class="footerRow">
    <button class="btn blue" id="doExport" style="flex:1">Backup erzeugen</button>
    <button class="btn" id="copyExport" style="flex:1">Kopieren</button>
  </div>
  <textarea id="exportOut" style="width:100%;min-height:220px;margin-top:10px;padding:12px;border-radius:14px;border:1px solid #d7dbe4;font-weight:650;outline:none"></textarea>
</div>

<div class="section">
  <div class="card cardPad">
    <div class="h2" style="margin:0 0 8px 0">Import</div>
    <div class="footerRow">
      <button class="btn green" id="doImport" style="flex:1">Import anwenden</button>
      <button class="btn" id="mergeImport" style="flex:1">Import mergen</button>
    </div>
    <div class="dim" style="margin-top:8px">„Anwenden“ überschreibt. „Mergen“ kombiniert (sicherer).</div>
    <textarea id="importIn" style="width:100%;min-height:220px;margin-top:10px;padding:12px;border-radius:14px;border:1px solid #d7dbe4;font-weight:650;outline:none"></textarea>
  </div>
</div>

<script defer src=\"{{ '/assets/backup.js' | relative_url }}\"></script>
