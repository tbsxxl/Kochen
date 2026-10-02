# Tobis Kochbuch

Statische Jekyll-Seite, gehostet auf Cloudflare Workers (Static Assets), Adresse:
https://kochbuch.tobis.workers.dev/ — Cloudflare baut jeden Push auf `main` automatisch.

## Arbeitsweise

- Änderungen auf einem eigenen Branch machen, Pull Request erstellen und ihn **selbst mergen**,
  sobald alles lokal geprüft ist (ausdrücklicher Wunsch des Besitzers).
- Der Cloudflare-Check auf Nicht-`main`-Branches („Workers Builds: kochbuch“) schlägt ohne Log sofort
  fehl; maßgeblich ist der Build nach dem Merge auf `main`. **Nach jedem Merge prüfen**, ob er grün ist:
  `curl -s https://api.github.com/repos/tbsxxl/Kochen/commits/<sha>/check-runs` (Eintrag „Workers Builds: kochbuch“;
  „build“/„deploy“ gehören zu GitHub Pages und sind egal). Rot = nichts geht live.

## Bauen und prüfen

```sh
bundle install
LANG=C.UTF-8 bundle exec jekyll build   # ohne UTF-8-Locale bricht der Build ab
npx wrangler dev                        # lokal wie auf Cloudflare ausliefern
```

## Worker (`worker/`): Anmeldung, Sync, Rezept-Upload

Nur `/api/*` läuft durch den Worker (`run_worker_first`), alles andere sind statische Dateien. Keine npm-Abhängigkeiten
(Passkey-Prüfung selbst geschrieben in `worker/webauthn.js`, nur WebCrypto).
- Anmeldung per Passkey (Face ID). Ein Besitzer (erste Einrichtung nur mit Secret `SETUP_CODE`; darf hochladen,
  einladen, Mitglieder entfernen) und Mitglieder, die nur per Einladungslink (7 Tage, einmalig) ein Profil anlegen und
  nur ihre eigenen Daten synchronisieren. KV-Schlüssel stehen oben in `worker/index.js` (`user:`, `creds:`, `credmap:`,
  `sync:<uid>`, `invite:`); alte Einzelprofil-Daten werden per `migrate()` übernommen.
  Sitzung = signiertes Cookie mit uid (Schlüssel im KV), „Überall abmelden“ erhöht `epoch:<uid>`.
  Menüpunkte nur für den Besitzer tragen `data-owner-only` (von `assets/account.js` ein-/ausgeblendet).
- Sync (`assets/account.js`): `kochbuch.stats/freezer/shopping/plan/notes/shopsections` pro Profil (Liste `SYNC_KEYS` im Worker und in account.js). Versionsnummer pro Schlüssel; das Gerät
  merkt sich den zuletzt abgeglichenen Stand („base“) und führt bei Änderungen auf beiden Seiten Eintrag für Eintrag zusammen
  (3-Wege-Merge, `merge3`). Der Server lehnt veraltete Stände ab (`conflicts`), das Gerät führt dann erneut zusammen.
  Meldet sich auf einem Gerät ein anderes Profil an, werden dessen lokale Daten ersetzt.
- Gemeinsame Einkaufsliste (Haushalt): `hh:<id>`, Liste unter `hhsync:<id>`, Beitritt per Link `/konto/?haushalt=…`
  (nur angemeldet). Die Einkaufsliste aktualisiert sich live (`kochbuch:synced`, alle 15 s bei geteilter Liste).
- Notizen & Bewertung pro Rezept (`kochbuch.notes`, Abschnitt „Meine Notizen“ auf der Rezeptseite, ★ auf Karten über
  `data-rating-badge`, Sortierung „Beste Bewertung“).
- Vorschläge: Mitglieder reichen über `/neues-rezept/` Rezepte ein (`/api/suggestions`, KV `sug:<id>` inkl. Foto).
  Der Besitzer sieht sie unter `/vorschlaege/` (Zähler im Menü), prüft sie im Formular (`?vorschlag=<id>`) und gibt frei
  (Commit mit `author:`) oder lehnt ab. Entschiedene Vorschläge verfallen nach 30 Tagen.
- Autor: Front Matter `author:` (fehlt er, gilt `owner_name` aus `_config.yml`). Rezeptseite zeigt „von …“,
  die Rezeptliste hat einen Personen-Filter (`?person=Name`), sobald es mehr als eine Person gibt.
- Import per Link (`/api/import`, alle Angemeldeten): liest schema.org/Recipe (JSON-LD) und das Foto, füllt das Upload-Formular.
- Upload (`/neues-rezept/`, `assets/upload.js`): Worker committet Markdown + Bild (JPG, WebP 480/960) per GitHub-API
  (Secret `GITHUB_TOKEN`, fine-grained, nur dieses Repo, Contents read/write) direkt auf `main`. Danach Branch neu holen!
- Bearbeiten/Löschen (nur Besitzer): Schalter „Bearbeiten-Modus“ unter Profil & Sync (`kochbuch.ui.editMode`, pro Gerät)
  blendet auf Rezeptseiten „Rezept bearbeiten“ ein (`data-edit-only`). Formular `/neues-rezept/?bearbeiten=<page.path>`,
  Front Matter per `assets/vendor/js-yaml.min.js`, Zutaten als Zeilen, Zubereitung als Markdown 1:1. Der Worker
  (`/api/recipe`) prüft den sha (409 bei gleichzeitiger Änderung), ersetzt Bilder unter neuem Namen und löscht das
  veraltete vorab erzeugte PDF.
- Sicherheit: `clean()` im Worker entschärft alle Texte vor dem Commit (Liquid, `<`/`>` → ‹/›, `javascript:`-Links);
  Import nur an öffentliche Adressen (lokal testen mit `ALLOW_LOCAL_IMPORT=1` in `.dev.vars`). Security-Header in `_headers`.
- Datensicherung: `/backup/` (Datei sichern/wiederherstellen, lokale Daten), Besitzer: Komplettsicherung `/api/export`.
- Mitteilungen (Web Push, `worker/push.js`, ohne Abhängigkeiten): VAPID-Schlüssel erzeugt der Worker selbst (`push:vapid`),
  Abos unter `push:<uid>`. Auslöser: neuer Vorschlag → Besitzer; freigegeben/abgelehnt → Mitglied; neue Einträge in der
  gemeinsamen Einkaufsliste → andere Haushaltsmitglieder (höchstens alle 10 Min). Anzeige/Klick in `sw.js`.
  Timer im Kochmodus: `assets/cook-timer.js` (auf jeder Seite geladen) zeigt beim Ablauf einen Hinweis mit Ton
  (bis „OK“) und meldet Timer an `/api/timers` (nur mit Profil + Push-Abo). Durable Object `TimerAlarms`
  (Binding `TIMERS`, eins pro Profil) schickt 4 s nach Ablauf die Mitteilung, außer das Gerät hat den Ablauf bei
  sichtbarer Seite schon selbst bemerkt (`/api/timers/cancel`). **Derzeit aus:** Mit Binding + Migration in
  `wrangler.jsonc` schlug der Cloudflare-Build auf main fehl (Log nur im Dashboard). Ohne Binding antwortet
  `/api/timers` mit `{ ok: false }`.
  iPhone: nur in der Homescreen-App. Lokal testen: Push-Mock mit `http_ece` entschlüsseln (`ALLOW_LOCAL_IMPORT` erlaubt
  http://127.0.0.1-Endpunkte); headless Chromium blockiert Mitteilungen immer.
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
- Rezeptkarten gibt es genau zweimal: `_includes/recipe-card.html` (Liquid, Rezeptliste/Kategorien) und
  `assets/cards.js` (`KOCHBUCH_CARDS.recipeCard`, Startseite). Beide mit Kühltruhen-Markierung „❄ n“, Bewertung ★ und
  Favoriten-Herz (befüllt von `updateFavBadges()` in `assets/utils.js`). Änderungen an Karten in beiden Dateien machen.
- Logo: `assets/logo.svg` „Zwei Seiten“: offenes Buch als Schale, linke Seite Apricot, rechte Kräutergrün. Keine Kochmütze, kein Besteck.
  Bei Logo-Änderungen die Icon-Dateinamen (`-v2` → `-v3`) und `?v=` an `logo.svg`/`favicon.ico` hochzählen,
  sonst zeigen iPhones und der Service Worker weiter das alte Icon.

## Bedienhilfen (nur im Browser gespeichert, `kochbuch.ui.*`)

- Rezeptseite: Schritte antippen = abhaken (`stepsDone`, 12 Std), Portionen pro Rezept (`servings`),
  „Ähnliche Rezepte“ (gleiche Kategorie, Liquid `sample`, Karten mit `hcard=true`).
- Kochmodus: Wischen links/rechts; Fortschritt in `cooking` → Startseite zeigt „Weiter kochen“ (12 Std),
  Link `?kochen=1` öffnet den Kochmodus beim gespeicherten Schritt.
  Ab 768 px (iPad) kein Reiter: Schritt links (+ „Danach“-Vorschau), alle Zutaten rechts, die des aktuellen
  Schritts hervorgehoben (`.isStep`). Auf dem Handy bleibt es bei den Reitern „Schritte/Zutaten“.
- Rezeptliste: Suche auch in Zutaten (mehrere Wörter = alle), Schnellfilter über `data-flags` der Karte
  (`schnell`, `veg` aus Kategorien/Tags) und „Nie gekocht“ (aus `kochbuch.stats`).
- Einkaufsliste: nach links wischen = löschen (Rückgängig über `KOCHBUCH_UI.toast(text, {label, run})`),
  lange drücken/Menge antippen = Blatt für Menge, Abteilung, Löschen. Korrigierte Abteilungen in
  `kochbuch.shopsections` (synchronisiert), Vorschläge beim Tippen aus `kochbuch.ui.shopfreq`.

## Seitenwechsel (View Transitions)

Tab-Wechsel: alte Seite blendet aus, neue ein (`vtOut`/`vtIn` in `assets/styles.css`), untere Leiste steht still.
Das Rezeptfoto fliegt nur zwischen Karte und Rezeptseite: Listen haben **keine** festen `view-transition-name`s;
das Skript im Kopf von `_layouts/default.html` vergibt den Namen bei `pageswap`/`pagereveal` an die angetippte,
sichtbare Karte (Name = `img-` + slugify der Rezeptadresse, wie auf der Rezeptseite).

Bewegung allgemein: nur `transform`/`opacity` animieren (keine Höhe/Breite/Filter), Kurven als Tokens
(`--easeSheet` für Sheets/Überlagerungen, `--easeIn` fürs Schließen, `--ease` für kleine Rückmeldungen).
Druck-Effekt `.isPressed` setzt `bindPressables()` in `assets/utils.js` bei Touch erst nach 70 ms und bricht bei
Fingerbewegung ab (kein Zucken beim Scrollen); `:active` nur für Maus. Kein `backdrop-filter` auf wiederholten
Elementen (nur die untere Leiste).

## Umbenannte Rezepte

Neue Rezeptdateinamen nur mit a–z, 0–9 und Bindestrich (keine Umlaute). Wird ein Rezept umbenannt, alte → neue Adresse
in `_data/renamed.yml` eintragen: daraus entstehen die Weiterleitungen (`_redirects`), und `assets/account.js` stellt
gespeicherte Favoriten, Kühltruhe, Wochenplan und Notizen im Browser um. PDF in `assets/pdf/` mit umbenennen.

## GitHub Actions

- `check.yml`: bei jedem Pull Request bauen und `tools/smoke.js` (Seiten öffnen, JS-Fehler/fehlende Dateien) ausführen.
  Lokal: Seite bauen, `python3 -m http.server 8411 --directory _site`, `node tools/smoke.js`.
- `pdfs.yml`: nach Änderungen an Rezepten auf `main` fehlende PDFs erzeugen (`tools/build-pdfs.js --missing`) und committen.

## Offline (`sw.js`)

Seiten netzwerk-zuerst mit 3-s-Zeitlimit, danach aus dem Cache; CSS/JS/Bilder Cache-zuerst (Treffer auch mit anderem `?v=`).
Beim Aktivieren werden alle Rezeptseiten aus `/offline.json` vorgeladen (ohne Bilder). Bei Änderungen an `sw.js`
`VERSION` hochzählen. Offline-Test: Server beenden statt Playwright-`setOffline` (gilt nicht für den Service Worker).

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
**Namen:** `title` = der echte, gängige Name des Gerichts, so wie man es kennt (Philly Cheesesteak, Pad Kra Pao,
Chicken Korma, Spaghetti Bolognese) – nicht eindeutschen, nichts erfinden, keine Fantasie-Mischungen. Kurz (≤ ~40 Zeichen),
deutsche Beschreibungen mit „Soße“, keine Werbe-/Quellenzusätze.
`subtitle:` = kurze deutsche Beschreibung bzw. Beilagen (z. B. „Ragù di Manzo“ – „Schmorfleisch vom Rind auf Paccheri“,
„Hähnchenbrust in Pfefferrahmsoße“ – „mit Romanesco und Kartoffelpüree“); bei fremdsprachigen Namen immer setzen.
Steht unter dem Rezeptnamen und im PDF.
Herkunft in `source:` (z. B. „HelloFresh“, „Fallow“; erscheint als „nach …“), nicht als Tag.
**Tags:** nur aus `_data/tags.yml` (klein, Deutsch: Hauptzutat, Küche ohne eigene Kategorie, Eigenschaft); nichts,
was schon `category`/`categories` sagt, keine Gerichtsnamen. „vegetarisch“ als Tag nur, wenn die Kategorie
„Vegetarisch“ nicht passt (z. B. Süßes, Brot); der Schnellfilter „Vegetarisch“ wertet beides aus.
Titel ändern ändert die Adresse nicht (kommt aus dem Dateinamen); danach PDFs neu erzeugen.
Hauptkategorie (`category:`, steht auf dem Foto) und optionale weitere (`categories: ["Italienisch", …]`) immer aus
`_data/categories.yml` wählen; die Datei bestimmt auch die Reihenfolge in der Kategorie-Auswahl (Bottom-Sheet).
„Schnell“ = Zeitangabe höchstens 30 Min ohne Wartezeiten; „Meal Prep“ = lässt sich gut vorkochen und aufwärmen. Einkaufsliste sortiert Zutaten per Stichwort nach Supermarkt-Abteilung (`assets/shopping.js`,
`KEYWORDS`); neue Zutaten, die unter „Sonstiges“ landen, dort ergänzen.
Neue Bilder mit `python3 tools/optimize-images.py recipes/images/<bild>.jpg` vorbereiten: schneidet links
und rechts je 7 % ab (KI-Wasserzeichen, Motiv bleibt mittig) und erzeugt `-480.webp`/`-960.webp`. Ohne WebP fällt die Seite aufs JPG zurück.
Wenn bestehende Bilder geändert werden: `image_version` in `_config.yml` hochzählen (Cache-Busting).
