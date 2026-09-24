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

## Worker (`worker/`): Anmeldung, Sync, Rezept-Upload

Nur `/api/*` läuft durch den Worker (`run_worker_first`), alles andere sind statische Dateien. Keine npm-Abhängigkeiten
(Passkey-Prüfung selbst geschrieben in `worker/webauthn.js`, nur WebCrypto).
- Anmeldung per Passkey (Face ID), genau ein Besitzer. Erste Einrichtung nur mit Secret `SETUP_CODE`, weitere Passkeys nur angemeldet.
  Sitzung = signiertes Cookie (Schlüssel im KV), „Überall abmelden“ erhöht `auth:epoch`.
- Sync (`assets/account.js`): `kochbuch.stats/freezer/shopping/plan`, pro Schlüssel gewinnt der neueste Stand; beim ersten
  Anmelden eines Geräts werden lokale Daten mit dem Server zusammengeführt.
- Upload (`/neues-rezept/`, `assets/upload.js`): Worker committet Markdown + Bild (JPG, WebP 480/960) per GitHub-API
  (Secret `GITHUB_TOKEN`, fine-grained, nur dieses Repo, Contents read/write) direkt auf `main`. Danach Branch neu holen!
- Speicher: KV-Binding `KV` (ohne id, Wrangler legt es beim Deploy an).
- Lokal testen: `.dev.vars` mit `SETUP_CODE`, `GITHUB_TOKEN`, optional `GITHUB_API` (Mock), dann `npx wrangler dev`
  und in Playwright einen virtuellen Authenticator (CDP `WebAuthn.addVirtualAuthenticator`) nutzen; Adresse `localhost`, nicht 127.0.0.1.

## Design-System (in `assets/styles.css` als Tokens)

- Farben: Warm White `#FFF9F2`, Cream `#F7F0E6`, Warm Gray `#E5DED4`, Charcoal `#252A27`,
  Warm Apricot `#E8753D` (nur primäre Aktion, dunkler Text), Herb Green `#526B57` (aktiv, Tags),
  Olive Oil `#B8A35A` (Favoriten), Deep Petrol `#28565A` (Links). Metadaten `#716E67`.
- Schriften liegen selbst gehostet in `assets/fonts/` (kein Google Fonts, Datenschutz).
- Schrift: Fraunces 400/600 nur für Rezeptnamen (36) und große Überschriften (28), sonst Inter.
  Größen 12/14/16/18/22/28/36, Abstände 4/8/12/16/24/32/48.
- Standard-Theme hell; Dunkelmodus nur über den Schalter unter „Mehr“ (warme Espresso-Töne, kein Grüngrau).
- Kühltruhe: Rezeptkarten zeigen oben rechts „❄ n“, sobald Portionen eingefroren sind (`_includes/freezer-flag.html`,
  Logik in `updateFavBadges()` in `assets/utils.js`). Neue Kartenvorlagen brauchen diese Markierung auch.
- Logo: `assets/logo.svg` „Zwei Seiten“: offenes Buch als Schale, linke Seite Apricot, rechte Kräutergrün. Keine Kochmütze, kein Besteck.
  Bei Logo-Änderungen die Icon-Dateinamen (`-v2` → `-v3`) und `?v=` an `logo.svg`/`favicon.ico` hochzählen,
  sonst zeigen iPhones und der Service Worker weiter das alte Icon.

## PDF-Export

„Als PDF speichern“ im Rezept-Menü erzeugt das PDF im Browser mit jsPDF (`assets/vendor/jspdf.umd.min.js`,
`assets/recipe-pdf.js`) und öffnet das Teilen-Menü (iPhone: „In Dateien sichern“). `window.print()` funktioniert in der
iOS-Homescreen-App nicht, daher ist „Drucken“ auf Touch-Geräten ausgeblendet.
Standardweg: vorab erzeugte PDFs in `assets/pdf/<name>.pdf` (Originalportionen), die der Knopf nur lädt und teilt.
Nur bei geänderten Portionen wird live mit jsPDF erzeugt; schlägt das fehl, kommt das vorab erzeugte PDF.
**Nach Änderungen an Rezepten oder neuen Rezepten die PDFs neu erzeugen:** Seite bauen, lokal ausliefern,
`node tools/build-pdfs.js`, erneut bauen (siehe Kopf von `tools/build-pdfs.js`). Fehlt ein PDF, wird live erzeugt.

## Rezepte

Markdown in `_recipes/`, Bilder in `recipes/images/` (Dateinamen ohne Umlaute/Leerzeichen).
Hauptkategorie (`category:`, steht auf dem Foto) und optionale weitere (`categories: ["Italienisch", …]`) immer aus
`_data/categories.yml` wählen; die Datei bestimmt auch die Reihenfolge in der Kategorie-Auswahl (Bottom-Sheet).
„Schnell“ = Zeitangabe höchstens 30 Min ohne Wartezeiten; „Meal Prep“ = lässt sich gut vorkochen und aufwärmen. Einkaufsliste sortiert Zutaten per Stichwort nach Supermarkt-Abteilung (`assets/shopping.js`,
`KEYWORDS`); neue Zutaten, die unter „Sonstiges“ landen, dort ergänzen.
Neue Bilder mit `python3 tools/optimize-images.py recipes/images/<bild>.jpg` vorbereiten: schneidet links
und rechts je 7 % ab (KI-Wasserzeichen, Motiv bleibt mittig) und erzeugt `-480.webp`/`-960.webp`. Ohne WebP fällt die Seite aufs JPG zurück.
Wenn bestehende Bilder geändert werden: `image_version` in `_config.yml` hochzählen (Cache-Busting).
