# 001 — Reduzierte Bewegung: Bewegung weglassen, Überblenden behalten

- **Status**: DONE
- **Commit**: 1671559
- **Severity**: MEDIUM
- **Category**: Accessibility
- **Estimated scope**: 1 Datei (assets/styles.css), ~10 Zeilen

## Problem

Bei „Bewegung reduzieren“ (iPhone: Bedienungshilfen → Bewegung) schaltet eine globale Regel **jede** Animation und jeden Übergang ab, auch reine Überblendungen und Farbwechsel. Blätter, Hinweise und die Abdunkelung erscheinen dann schlagartig; Druck-Rückmeldung (Hintergrundfarbe) fehlt. Reduzierte Bewegung heißt „weniger und sanfter“, nicht „gar nichts“.

```css
/* assets/styles.css:1188–1190 — aktuell */
@media (prefers-reduced-motion: reduce){
  *,*::before,*::after{animation:none !important;transition:none !important;scroll-behavior:auto !important}
}
```

## Target

Bewegung (transform) entfällt, Deckkraft- und Farbwechsel bleiben kurz erhalten:

```css
@media (prefers-reduced-motion: reduce){
  *,*::before,*::after{
    animation-duration:.01ms !important;animation-iteration-count:1 !important;
    transition-property:opacity,background-color,border-color,color !important;
    transition-duration:.15s !important;transition-timing-function:ease !important;
    scroll-behavior:auto !important;
  }
  /* Blätter und Hinweise erscheinen per Überblenden statt Hereinschieben */
  .sheet{transform:none !important;opacity:0}
  .sheet.open{opacity:1}
  .uiToast{transform:translate3d(-50%,0,0) !important}
}
```

## Repo conventions to follow

- Abschnitte in `assets/styles.css` sind nummeriert; spätere überschreiben frühere. Diese Änderung ersetzt die Regel an ihrer Stelle (Abschnitt „Bewegung reduzieren“, Zeile 1188).
- Vorbild für sanftes Ersatzverhalten: `assets/styles.css:1707–1712` (Tab-Leiste bleibt bei reduzierter Bewegung einfach stehen).
- `.sheet` ist geschlossen `transform:translate3d(0,105%,0); visibility:hidden` (Zeile ~313), offen `.sheet.open`. `visibility` bleibt unangetastet, damit geschlossene Blätter nicht antippbar sind.
- Nach CSS-Änderungen `VERSION` in `sw.js` hochzählen (aktuell `kochbuch-v48` → `kochbuch-v49`).

## Steps

1. In `assets/styles.css` den Block bei Zeile 1188–1190 durch den Target-Block ersetzen.
2. Prüfen, dass `.uiToast` im geschlossenen Zustand `opacity:0` hat (Zeile ~1135); falls nicht, STOP und melden.
3. `sw.js`: `VERSION` hochzählen.

## Boundaries

- Keine Änderungen an JavaScript, Markup oder anderen Abschnitten.
- Den Rezeptfoto-Parallax (Skript in `_layouts/recipe.html`) nicht anfassen – er prüft `prefers-reduced-motion` selbst.
- Wenn die Zeilen nicht dem Zitat entsprechen: STOP und melden.

## Verification

- **Mechanical**: `LANG=C.UTF-8 bundle exec jekyll build`, dann `python3 -m http.server 8411 --directory _site`, `node tools/smoke.js http://localhost:8411` und `node tools/flows.js http://localhost:8411` → beide „OK“.
- **Feel check** (Playwright mit `reducedMotion: 'reduce'` oder DevTools → Rendering → prefers-reduced-motion):
  - „Mehr“ öffnen: Blatt blendet in ~150 ms ein, ohne zu gleiten.
  - Einkaufsliste: Eintrag wegwischen → Hinweis „Rückgängig“ blendet ein, rutscht nicht.
  - Tab-Leiste schrumpft beim Scrollen nicht.
- **Done when**: kein `transform`-Übergang läuft bei reduzierter Bewegung, Überblendungen sind sichtbar.
