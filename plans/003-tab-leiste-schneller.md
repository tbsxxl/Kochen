# 003 — Tab-Leiste beim Scrollen schneller verkleinern

- **Status**: TODO
- **Commit**: 1671559
- **Severity**: LOW
- **Category**: Easing & duration
- **Estimated scope**: 1 Datei (assets/styles.css), 2 Zeilen

## Problem

Die Tab-Leiste und die „Kochen läuft“-Kapsel schrumpfen bei jedem Scrollen (Dutzende Male am Tag) über 450 ms. Häufige Bewegung soll unter 300 ms bleiben; bei schnellem Hoch-/Runterscrollen hinkt die Leiste spürbar hinterher.

```css
/* assets/styles.css:1702, 1704 — aktuell */
.bottomRail{transition:transform .45s var(--easeSheet)}
.nowCooking{transition:transform .45s var(--easeSheet)}
```

## Target

```css
.bottomRail{transition:transform .3s var(--easeSheet)}
.nowCooking{transition:transform .3s var(--easeSheet)}
```

Beide behalten exakt dieselbe Dauer und Kurve (sie bewegen sich gemeinsam).

## Repo conventions to follow

- `--easeSheet` ist das iOS-Kurven-Token (`assets/styles.css:92`).
- Die Beschriftung blendet schon in .25 s aus (`.bottomRail .tabLabel`, Zeile 1703) – passt dazu, nicht ändern.
- `sw.js` `VERSION` hochzählen.

## Steps

1. Die beiden Zeilen ersetzen.
2. `sw.js` `VERSION` hochzählen.

## Boundaries

- Nur diese zwei Werte. Skalierung (`scale(.88)`) und Versatz nicht ändern.

## Verification

- **Mechanical**: Bauen, Smoke- und Ablauf-Test → OK.
- **Feel check** (echtes iPhone in der Homescreen-App): lange Rezeptliste schnell runter- und wieder hochscrollen; die Leiste folgt ohne Nachziehen, Kapsel und Leiste bleiben im Gleichschritt.
- **Done when**: beide Übergänge 0,3 s.
