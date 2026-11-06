# 004 — Einkaufsliste: Gummiband statt harter Kante beim Wischen nach rechts

- **Status**: TODO
- **Commit**: 1671559
- **Severity**: LOW
- **Category**: Interruptibility
- **Estimated scope**: 1 Datei (assets/shopping.js), 1 Zeile

## Problem

Ein Eintrag lässt sich nach links wegwischen. Nach rechts bleibt er hart an der Kante stehen – das fühlt sich an wie „eingefroren“. Native Listen geben mit wachsendem Widerstand ein Stück nach.

```js
// assets/shopping.js:183 — aktuell
      dx = Math.min(0, mx);
```

## Target

```js
      // nach rechts mit Gummiband (je weiter, desto weniger folgt der Eintrag), nach links 1:1
      dx = mx < 0 ? mx : (mx * row.offsetWidth * 0.55) / (row.offsetWidth + 0.55 * mx) * 0.25;
```

Beim Loslassen federt der Eintrag wie bisher zurück (`row.style.transform = ""` mit `transform .2s var(--easeSheet)`), weil `armed` nur bei negativem `dx` wahr werden kann.

## Repo conventions to follow

- Gleiche Gummiband-Formel wie `rubber()` in `bindSheetDrag()` (`assets/utils.js`, Suche nach `const rubber`).
- `sw.js` `VERSION` hochzählen.

## Steps

1. Zeile 183 in `assets/shopping.js` durch den Target-Code ersetzen.
2. Prüfen: `const armed = dx < -row.offsetWidth * 0.35 || (dx < -24 && speed > 0.11);` steht weiter in `end()` – sonst STOP.
3. `sw.js` `VERSION` hochzählen.

## Boundaries

- Löschschwelle, Tempo-Erkennung und langes Drücken nicht ändern.

## Verification

- **Mechanical**: Bauen, Smoke- und Ablauf-Test → OK.
- **Feel check** (iPhone): Eintrag nach rechts ziehen → bewegt sich nur wenig (höchstens ~25 px) und federt beim Loslassen zurück; nach links wie bisher löschbar.
- **Done when**: Ziehen nach rechts zeigt Widerstand statt harter Kante.
