# Brandbrief – neuer Skin (Dez. 2026)

Entwurf I aus der Zauberschule-Runde (`bencium-innovative-ux-designer`), Besitzer: „I aufsparen und als zusätzlichen Skin ergänzen“,
Name „Brandbrief“ (ohne Serienbegriff).

## Grundgedanke
Ein Brief, der schreit: alles groß und versal auf Rot, das Gericht des Tages so groß, dass es aus dem Bild läuft.

## Festgelegt
- Signalrot `#E2473A` (gegenüber dem Entwurf `#B3221E` aufgehellt, damit auch kleine Schrift 4,9 : 1 erreicht), eine Schriftfarbe `#120606`.
- Archivo („Skin Brief“, variabel, Breite 62–125): Großes schmal (wdth 62) und 800 in Versalien, Lesetext normal breit.
- Startseite `.bbrHero` (`brandbrief.js`): Name, Datum, „Heute für dich“, Gericht Wort für Wort in 31vw (läuft aus dem Bild, voller
  Name als aria-label), Untertitel, Zeit, „Kategorien“, vier größte Kategorien mit hochgestellter Zahl, „Alle n Rezepte“ – alles antippbar.
- Keine Kartenflächen; Trennung über schwarze Linien (2 px). Aktives = schwarze Fläche mit roter Schrift. Kein Logo.
- Kochmodus: Rot, Schritt groß in Archivo 600, Zeiten/Weiter/Timer schwarz mit roter Schrift.
