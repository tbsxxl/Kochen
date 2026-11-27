# Kochmodus – Richtung A2 (festgelegt vom Besitzer, Nov. 2026)

Entstanden mit `bencium-innovative-ux-designer`: zehn reine Schrift-Entwürfe A–J für einen Kochschritt (Jollof Rice, Schritt 4),
Besitzer: „A, B, F bleiben im Kopf“ → Feinrunde A2/B2/F2 → **„A2“**. Die Entwürfe liegen nicht im Repo (nur Entwurfsdateien).

## Grundgedanke
Ein Blick aus 60 cm: Am Herd schaut man kurz aufs aufgestellte Handy, oft mit nassen Händen. Das Tun („Zwiebeln anbraten“) ist die
größte Fläche, alles andere tritt in Salbei zurück.

## Festgelegt (gleich bleiben)
- **Grund:** Feld-Grün `#1D4A33` über den ganzen Kochmodus (dunkel `#123120`). Keine Karten, keine Rahmen, keine Linien; Gruppen nur über Abstand.
- **Farben:** Weiß `#FFFFFF` = das, was zählt (Überschrift, Text, Zeiten, Mengen, „Weiter“, Timer-Zahl). Salbei `#BFE8CB` = alles
  Nebensächliche (Rezeptname/Schrittzahl, Nebensätze „bis …“, Klammern, Gerät · Hitze, Zutatennamen, „Zurück“, Beschriftungen). Nur zwei Textfarben.
- **Schrift:** Inter (Rasmus Andersson, SIL OFL, `assets/fonts/inter.woff2`, variabel 100–900) als „Koch Inter“.
- **Überschrift:** 800, `clamp(3.25rem, 14.5vw, 6.5rem)`, Zeilenhöhe .9, Laufweite −.05em, getrennt nach Silben.
- **Text:** 430, `clamp(1.3125rem, 5vw, 1.625rem)`, Zeilenhöhe 1.4; Zeiten im Text 700 weiß; Nebensätze und Klammern in Salbei.
- **Timer:** Zahl 200, `clamp(4.5rem, 22vw, 8rem)`, Laufweite −.05em, Ziffern gleich breit; daneben „Timer starten“ als fetter Text, kein Kasten.
- **Zutaten:** Beschriftung „Für diesen Schritt | 2 Portionen“ in Salbei, darunter Menge (700, weiß, rechtsbündig) + Name (Salbei).
- **Unten:** „Zurück“ (Salbei, 500) und „Weiter“ (weiß, 800) als Text, stehen fest unten am Daumen; keine Knopf-Flächen.
- **Abstände:** große, gleiche Abstände (2rem) zwischen Gruppen, enge innerhalb.

## Darf sich anpassen
iPad (zwei Spalten: Schritt links, Zutaten rechts), Vorbereiten-Seite und Zutaten-Reiter nehmen Grund und Farben auf; laufender Timer
zeigt „+1 Min“ (Salbei) und „Beenden“ (weiß); abgelaufener Timer „Fertig“.

## Nicht zurück zu
Karten mit weißer Fläche, grüne Knopf-Kapseln, mehrfarbige Hervorhebungen, Schritt-Punkte-Reihe, Zeichnungen der Zutaten.

## Offen
Eieruhr-Symbol an den Zeiten und Pfeile bleiben als bestehende Projekt-Symbole (Regel „Kochzeiten überall mit der Eieruhr“); der Skill
selbst erzeugt keine neuen Symbole.
