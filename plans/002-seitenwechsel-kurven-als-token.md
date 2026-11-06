# 002 — Seitenwechsel: kein ease-in, Kurven aus den Tokens

- **Status**: DONE
- **Commit**: 1671559
- **Severity**: MEDIUM
- **Category**: Easing & duration / Cohesion & tokens
- **Estimated scope**: 1 Datei (assets/styles.css), 3 Zeilen

## Problem

Jeder Tab-Wechsel (über 100-mal am Tag) blendet die alte Seite mit einer **ease-in**-Kurve aus – sie startet langsam, genau im Moment, in dem man hinschaut. Dazu stehen drei handgetippte Kurven neben den vorhandenen Tokens.

```css
/* assets/styles.css:1149–1150, 1154 — aktuell */
::view-transition-old(root){animation:vtOut .12s cubic-bezier(.4,0,1,1) both}
::view-transition-new(root){animation:vtIn .18s cubic-bezier(0,0,.2,1) .06s both}
::view-transition-group(*){animation-duration:.34s;animation-timing-function:cubic-bezier(.2,0,0,1)}
```

## Target

```css
::view-transition-old(root){animation:vtOut .1s var(--ease) both}
::view-transition-new(root){animation:vtIn .18s var(--ease) .04s both}
::view-transition-group(*){animation-duration:.34s;animation-timing-function:var(--easeSheet)}
```

(`--ease: cubic-bezier(.2,.8,.2,1)` und `--easeSheet: cubic-bezier(.32,.72,0,1)` sind in `assets/styles.css:91–92` definiert.)

## Repo conventions to follow

- Kurven stehen als Tokens in `:root` (`assets/styles.css:91–93`); kein neues Token anlegen.
- Das Foto-Fliegen zwischen Karte und Rezeptseite nutzt `::view-transition-group(*)` – Dauer .34 s bleibt (Modals/Übergänge dürfen bis 500 ms).
- `sw.js` `VERSION` hochzählen.

## Steps

1. Die drei Zeilen in `assets/styles.css` durch den Target-Block ersetzen.
2. `sw.js` `VERSION` hochzählen.

## Boundaries

- `@keyframes vtOut/vtIn` (Zeile ~1151–1152) nicht ändern.
- Die Tab-Leisten-Regeln (`::view-transition-*(tabbar)`) nicht ändern.

## Verification

- **Mechanical**: Bauen, `node tools/smoke.js`, `node tools/flows.js` → OK.
- **Feel check** (Chrome/Safari mit View Transitions): zwischen Start, Rezepte, Plan, Liste wechseln; in DevTools → Animations auf 10 % stellen:
  - die alte Seite verschwindet sofort zu Beginn, nicht erst gegen Ende;
  - von einer Rezeptkarte aufs Rezept: das Foto fliegt weich und landet ohne Ruck.
- **Done when**: `grep -c "cubic-bezier(" assets/styles.css` ergibt 3 (nur noch die Token-Definitionen).
