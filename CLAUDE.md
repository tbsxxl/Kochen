# Tobis Kochbuch

Statische Jekyll-Seite, gehostet auf Cloudflare Workers (Static Assets), Adresse:
https://kochbuch.tobis.workers.dev/ — Cloudflare baut jeden Push auf `main` automatisch.

## Arbeitsweise

- Änderungen auf einem eigenen Branch machen, Pull Request erstellen und ihn **selbst mergen**,
  sobald alles lokal geprüft ist (ausdrücklicher Wunsch des Besitzers).
- Der Cloudflare-Check auf Nicht-`main`-Branches („Workers Builds: kochbuch“) schlägt ohne Log sofort
  fehl; maßgeblich ist der Build nach dem Merge auf `main`.

## Bauen und prüfen

```sh
bundle install
LANG=C.UTF-8 bundle exec jekyll build   # ohne UTF-8-Locale bricht der Build ab
npx wrangler dev                        # lokal wie auf Cloudflare ausliefern
```

## Design-System (in `assets/styles.css` als Tokens)

- Farben: Warm White `#FFF9F2`, Cream `#F7F0E6`, Warm Gray `#E5DED4`, Charcoal `#252A27`,
  Warm Apricot `#E8753D` (nur primäre Aktion, dunkler Text), Herb Green `#526B57` (aktiv, Tags),
  Olive Oil `#B8A35A` (Favoriten), Deep Petrol `#28565A` (Links). Metadaten `#716E67`.
- Schrift: Fraunces 400/600 nur für Rezeptnamen (36) und große Überschriften (28), sonst Inter.
  Größen 12/14/16/18/22/28/36, Abstände 4/8/12/16/24/32/48.
- Standard-Theme hell; Dunkelmodus nur über den Schalter unter „Mehr“.
- Logo: `assets/logo.svg` (Buch/Schale + Kräuteröl-Schwung). Keine Kochmütze, kein Besteck.

## Rezepte

Markdown in `_recipes/`, Bilder in `recipes/images/` (Dateinamen ohne Umlaute/Leerzeichen).
Neue KI-Bilder: rechte 7 % abschneiden, damit das Wasserzeichen verschwindet.
Wenn bestehende Bilder geändert werden: `image_version` in `_config.yml` hochzählen (Cache-Busting).
