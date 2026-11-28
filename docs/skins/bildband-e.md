# Bildband – Entwurf E „Spaltensatz“ (Dez. 2026)

Gewählt vom Besitzer aus zehn Entwürfen (bencium-innovative, Runde 1, nur Schrift/Farbe/Abstand).

- **Idee:** jede Seite wie eine Heftseite – riesiger Titel in Fraunces 800 eng, darunter Fließtext in Spalten.
- **Farben:** Creme `#FAF6EE`, Sand `#EFE7D8`, Espresso `#2B211A`, Erdton `#8A4B2A` (Etiketten, Zahlen, Weiter; 6 : 1 auf Creme).
- **Schrift:** Fraunces 800 für alles Große, Fraunces 400/700 für Lesetext, Inter 500/600 für kleine Etiketten (normal geschrieben, keine Versalien mehr).
- **Startseite** (`.bdSpread` in `bildband.js`): Name · Datum, „Heute für dich“, Titel riesig, Foto über die Breite, darunter zwei Spalten
  (ab Tablet drei, dort Blocksatz) mit Untertitel, Zeit, „Zum Rezept“ und den vier größten Kategorien mit Anzahl, „alle n Rezepte“.
  Das alte Titelblatt `.bdCover` ist raus, die Karte „Heute für dich“ wird ausgeblendet.
- **Rezeptliste:** zwei Spalten (Tablet drei), Foto 4:3, „Nº n“ in Erdton, Titel Fraunces 700; jeder fünfte Eintrag über die ganze Breite.
- **Rezeptseite:** Foto, darunter der Titel groß in Espresso; Untertitel als fetter Vorspann (`.bdQuote`, keine Anführungszeichen mehr),
  Schritte in Fraunces (ab Tablet Blocksatz), Nummern in Erdton.
- **Kochmodus:** Creme, Schritt in Fraunces 400 groß, Etiketten Inter in Erdton, Zeiten als Erdton-Kapsel, Weiter Erdton, Timer Espresso.
- Am Handy kein Blocksatz: in schmalen Spalten reißen sonst Lücken auf.
