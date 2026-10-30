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
  Gelegentlich scheitert ein Build auch bei harmlosen Commits (z. B. reine Rezeptänderung); dann behebt der nächste
  Push auf `main` es meist. Lokal bauen + grüner GitHub-Check sprechen gegen einen echten Fehler.
  Ende Oktober 2026 meldete Cloudflare „failure“, obwohl die Änderungen live waren (Screenshot vom Besitzer) – bei Rot
  also erst auf der Seite nachsehen (aus dem Container nicht erreichbar, ggf. den Besitzer fragen).

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
  sichtbarer Seite schon selbst bemerkt (`/api/timers/cancel`). Die Klasse erbt von `DurableObject`
  (`cloudflare:workers`, Pflicht für `new_sqlite_classes`); Node lädt den Worker nur mit
  `node --import ./tools/cf-workers-stub.mjs` (so auch im GitHub-Check). Ohne Binding antwortet `/api/timers` mit `{ ok: false }`.
  iPhone: nur in der Homescreen-App. Lokal testen: Push-Mock mit `http_ece` entschlüsseln (`ALLOW_LOCAL_IMPORT` erlaubt
  http://127.0.0.1-Endpunkte); headless Chromium blockiert Mitteilungen immer.
- Speicher: KV-Binding `KV` (ohne id, Wrangler legt es beim Deploy an).
- Lokal testen: `.dev.vars` mit `SETUP_CODE`, `GITHUB_TOKEN`, optional `GITHUB_API` (Mock), dann `npx wrangler dev`
  und in Playwright einen virtuellen Authenticator (CDP `WebAuthn.addVirtualAuthenticator`) nutzen; Adresse `localhost`, nicht 127.0.0.1.

## Design-System (in `assets/styles.css` als Tokens)

Skill `apple-design` (`.claude/skills/apple-design`, Apples Human Interface Guidelines; installiert mit
`npx skills add dickwu/apple-design-skill --agent claude-code`, Stand in `skills-lock.json`) für Design-Reviews nutzen.
Skill `swiftui-expert-skill` (`.claude/skills/swiftui-expert-skill`, aus avdlee/swiftui-agent-skill) nur für nativen
SwiftUI-Code, nicht für diese Web-App.


- **Apple-Look (iOS „Liquid Glass“)**, Abschnitt 10 in `assets/styles.css`: schwebende Glas-Kapsel als Tab-Leiste,
  große Titel (34/700), die beim Scrollen in eine kleine Glas-Leiste oben wandern (`.navCompact`, `bindCompactTitle()` in
  `assets/utils.js`), gruppierte Listen mit eingerückten Trennlinien, Kapsel-Knöpfe, gefüllte Felder statt Rahmen
  (`--fill`), Glas-Sheets mit großer Rundung, iOS-Schalter (Grün `#34C759`). Glas (`--glass`, `--glassBlur`) nur für
  Leisten, Sheets, Menüs, Hinweise; bei „Transparenz reduzieren“ volle Fläche. Hintergrund `--bg` dunkler als Zellen
  `--surface` (wie iOS). Radien: Karten 22, Listen 16, Felder 14.
- **Neuanfang Okt. 2026 (Abschnitt 16 in `assets/styles.css`, gilt vor allen älteren Abschnitten):** Die Fotos sind die
  Farbe, die Oberfläche bleibt ruhig. Flächen in Apples neutralen Grautönen: hell Hintergrund `#F2F2F7`, Zellen `#FFFFFF`,
  Linien `#E3E3E8`, Text `#1C1C1E`, Sekundärtext `#545458`, Metadaten `#6C6C70`; dunkel `#000`/`#1C1C1E`/`#F5F5F7`.
  **Eine einzige Akzentfarbe: Kräutergrün** (`--leaf` hell `#526B57` mit weißem Text, dunkel `#9DBBA3` mit dunklem Text)
  für alles Antippbare und die Hauptaktion; `--accent`, `--gold`, `--ice`, `--petrol` zeigen alle darauf.
  Apricot nur noch im Logo. Text nie Grün (Grün heißt „antippbar“).
- Schriften liegen selbst gehostet in `assets/fonts/` (kein Google Fonts, Datenschutz). Inter wird nicht mehr
  vorgeladen (auf iPhone/iPad/Mac greift SF).
- Schrift: Systemschrift (SF auf Apple-Geräten, sonst das selbst gehostete Inter als Ersatz) überall; Fraunces 600
  nur für den Rezeptnamen auf dem Foto der Rezeptseite und den Logo-Schriftzug.
  Größen 12/14/16/18/22/28/36, Abstände 4/8/12/16/24/32/48.
- Darstellung folgt dem iPhone (Hell/Dunkel, „auto“ = kein Eintrag in `kochbuch.ui.theme`); unter „Mehr“ Auswahl
  Auto · Hell · Dunkel. Dunkel = Apples neutrales Schwarz/Grau. „Kontrast erhöhen“ (iPhone) schaltet wie der
  Schalter „Hoher Kontrast“ (`prefers-contrast: more`).
- Apples Regeln (Abschnitt 11 in `assets/styles.css`, geprüft mit Skill `apple-design`): Tippflächen mindestens
  44 × 44 pt (bei kleinen Chips per `::after`), Text mind. 4,5 : 1,
  Schrift wächst mit der iPhone-Textgröße (`font: -apple-system-body` auf `html`, alles in `rem`; bis 200 % ohne
  seitliches Scrollen prüfen; Großtitel trennen, Symbole neben Text in `em`, Abschnitt 15). Rezeptseite hat oben links eine Zurück-Taste (`#recipeBack`).
- Rezeptkarten gibt es genau zweimal: `_includes/recipe-card.html` (Liquid, Rezeptliste/Kategorien) und
  `assets/cards.js` (`KOCHBUCH_CARDS.recipeCard`, Startseite). Beide mit Kühltruhen-Markierung „❄ n“, Bewertung ★ und
  Favoriten-Herz (befüllt von `updateFavBadges()` in `assets/utils.js`). Änderungen an Karten in beiden Dateien machen.
  Kartentitel mit Silbentrennung (`hyphens:auto`), Zeitangabe einzeilig mit „…“. Karten haben **keine** Kartenfläche
  (wie Alben in Apple Music): Foto mit Rundung, Name und Zeit direkt auf dem Hintergrund, keine Kategorie-Kapsel
  (nur die „Heute“-Karte behält sie).
- Symbole: nur Linien-SVGs (Klasse `.ico`, Strichstärke ~2, `currentColor`) wie in der Tab-Leiste – keine Schriftzeichen
  wie ✕ ‹ › ✓ ♡ + − als Knopf-Symbol (Plus/Minus: `.icoPM`). „Alle ›“ mit CSS-Chevron. „Mehr“-Menü mit farbigen Symbol-Kacheln wie die
  iPhone-Einstellungen (`--tile` je Zeile, weißes Symbol).
- Logo: `assets/logo.svg` „Zwei Seiten“: offenes Buch als Schale, linke Seite Apricot, rechte Kräutergrün. Keine Kochmütze, kein Besteck.
  Bei Logo-Änderungen die Icon-Dateinamen (`-v2` → `-v3`) und `?v=` an `logo.svg`/`favicon.ico` hochzählen,
  sonst zeigen iPhones und der Service Worker weiter das alte Icon.

## Bedienhilfen (nur im Browser gespeichert, `kochbuch.ui.*`)

- Haupt-Leiste unten (5 Tabs, `_layouts/default.html`): Start · Rezepte · Plan (Wochenplan) · Liste · Mehr.
  Wie iOS 26: beim Runterscrollen kleiner ohne Beschriftung (`html.tabbarMin`), beim Hochscrollen/oben/unten wieder groß.
- Startseite: läuft ein Kochmodus, steht „Weiterkochen“ ganz oben (`#homeContinue`, solange sichtbar keine
  „Kochen läuft“-Kapsel, `body.continueVisible`). Leere Zustände ohne Rahmen und ohne Logo, keine Gesten-Erklärtexte.
- Startseite wie der „Heute“-Tab im App Store: Datum über der Begrüßung, „Heute für dich“ als Bildkarte mit Titel auf dem
  Foto. Rezeptfoto mit Parallaxe/Dehnen beim Scrollen (Skript in `_layouts/recipe.html`, aus bei „Bewegung reduzieren“).
  Aktiver Tab: Kapsel, Grün, Symbol gefüllt (`fill-opacity`).
- Rezept-Leiste unten: Favorit · Planen · **Kochen** (Mitte, Kapsel wie aktiver Tab, Symbol Grün) · Zur Liste · Mehr (Gekocht, Kühltruhe, PDF,
  Drucken, Bearbeiten).
- Planen (Rezept-Leiste): Blatt mit 10 Tagen, mehrere antippbar; Schalter „Einmal kochen, Reste essen“ markiert alle
  außer dem frühesten Tag mit `leftover: true` (Wochenplan zeigt „Reste“, Einkaufen zählt sie nicht). Standard an bei
  „Meal Prep“ (`RECIPE_DATA.mealPrep`). Tags auf der Rezeptseite = antippbare Kapseln (`/rezeptindex/?q=<tag>`), Infos
  (Zeit, Portionen, Favorit, Bewertung, Kühltruhe) als ruhige Zeile mit Symbolen.
- Rezeptseite: großes Foto mit Rezeptname (Fraunces, weiß) und Untertitel darauf (`.recipeHeroText`). Darunter Autor,
  Infos, Tags, dann der Umschalter „Zutaten | Zubereitung“ (`#recipeSegWrap`, `data-pane` auf `.recipePageCard`), der
  beim Scrollen unter Zurück-Taste und Titelleiste kleben bleibt (`.isStuck` legt eine ruhige Fläche dahinter;
  `.recipePageCard` braucht `overflow:clip`, nicht `hidden`). Ab 900 px kein Umschalter, beide Teile nebeneinander.
  Kategorie für das PDF steht in `RECIPE_DATA.category`.
- Rezeptseite: Schritte antippen = abhaken (`stepsDone`, 12 Std), Portionen pro Rezept (`servings`),
  „Ähnliche Rezepte“ (gleiche Kategorie, Liquid `sample`, Karten mit `hcard=true`).
- Kochmodus: Wischen links/rechts; Fortschritt in `cooking` (12 Std). „Kochen läuft“-Kapsel über der unteren Leiste
  (`assets/now-cooking.js`, wie der Mini-Player in Apple Music) auf jeder Seite, solange Fortschritt oder Timer laufen:
  Foto, Name, Timer-Restzeit (Uhr-SVG), „Schritt n von m“, Fortschritt grün; Antippen öffnet `?kochen=1` (auf der Rezeptseite direkt
  `KOCHBUCH_OPENCOOK`). recipe.js meldet `kochbuch:cooking` / `kochbuch:cookmode`.
  Farben (Abschnitt 14/16 in `assets/styles.css`): neutrales Dunkel, Fortschritt, Haken und „Weiter“ Kräutergrün,
  Segment-Umschalter und Zurück als Kapseln.
  Ab 768 px (iPad) kein Reiter: Schritt links (+ „Danach“-Vorschau), alle Zutaten rechts, die des aktuellen
  Schritts hervorgehoben (`.isStep`). Auf dem Handy bleibt es bei den Reitern „Schritte/Zutaten“.
- Rezeptliste auf dem Handy als Raster mit 2 Spalten (Abschnitt 12 in `assets/styles.css`, quadratische Fotos, nur
  Zeit statt Zeit + Portionen); unter „Mehr“ → „Rezeptliste“ auf „Karten“ umschaltbar (`kochbuch.ui.listView`,
  Klasse `listCards` auf `<html>`, schon im Kopf gesetzt). Kategorien-Seite = Kacheln (Foto, Name, Anzahl; jedes Foto nur einmal), Antippen →
  `/rezeptindex/?kategorie=…`. Menüzeilen, die eine Seite öffnen, zeigen „›“.
- Rezeptliste: eine wischbare Filterreihe (Kategorie, Favoriten, Schnell, Vegetarisch, Nie gekocht), Sortieren als
  Symbol rechts (angeschnittene Ränder blenden weich aus, `fadeL`/`fadeR`), Trefferzahl („8 von 63 Rezepten“), ✕ im Suchfeld. Wochenplan als gruppierte Liste, Einkaufs-Knopf
  nur mit geplanten Gerichten. Timer ohne Mitteilungs-Abo: Hinweis höchstens einmal pro Woche (`kochbuch.ui.timerPushHint`).
- Rezeptliste: Suche auch in Zutaten (mehrere Wörter = alle), Schnellfilter über `data-flags` der Karte
  (`schnell`, `veg` aus Kategorien/Tags) und „Nie gekocht“ (aus `kochbuch.stats`).
- Einkaufsliste: nach links wischen = löschen (Rückgängig über `KOCHBUCH_UI.toast(text, {label, run})`),
  lange drücken/Menge antippen = Blatt für Menge, Abteilung, Löschen. Korrigierte Abteilungen in
  `kochbuch.shopsections` (synchronisiert), Vorschläge beim Tippen aus `kochbuch.ui.shopfreq`.
  „Zur Liste“ lässt reine Verwendungszeilen weg (`usageBase()` in `assets/utils.js`: „Fett für die Form“ immer,
  „Mehl für die Arbeitsfläche“/„Öl zum Braten“ nur, wenn die Grundzutat schon im Rezept oder auf der Liste steht).
  REWE: keine Warenkorb-Schnittstelle, nur Suche (`REWE_SEARCH` in `assets/shopping.js`). „Bei REWE bestellen“ geht die
  offenen Artikel nacheinander durch (suchen → „Im Warenkorb“ hakt ab); im Artikel-Blatt „Bei REWE suchen“.

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

- `check.yml`: bei jedem Pull Request bauen, `tools/smoke.js` (Seiten öffnen, JS-Fehler/fehlende Dateien) und
  `tools/flows.js` (alle Rezepte: Titel/Untertitel/Zutaten/Schritte, keine „[…|…]“/„Öl*“-Reste; Abläufe: Kochmodus,
  Zur Liste, Planen, Favorit, Kategorie-Kachel, Suche, Einstellungen) ausführen. Neue Abläufe dort mit aufnehmen.
  Lokal: Seite bauen, `python3 -m http.server 8411 --directory _site`, `node tools/smoke.js`, `node tools/flows.js`.
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
**Zwischenüberschriften in Zutaten:** `- { section: "Knusperpanade" }` (Rezeptseite: eigene Gruppen, Kochmodus, PDF;
Einkaufsliste/Wochenplan überspringen sie; `KOCHBUCH_UTILS.sectionOf()`). Im Formular eine Zeile mit „## “ (oder „*…*“, „…:“).
Herkunft in `source:` (z. B. „HelloFresh“, „Fallow“; erscheint als „nach …“), nicht als Tag.
**Einheitlicher Stil:** Schritte im Infinitiv („Backofen vorheizen“, nicht „Heize …“), Mengen nur für die Rezept-Portionen
(keine „[1,5 EL | 2 EL]“, keine Sternchen), keine Markennamen von Gewürzmischungen („Paprika-Gewürzmischung“ statt
„Hello Paprika“), „Soße“ statt „Sauce“ (außer Eigennamen wie Worcestersauce), Tipps unter `## Tipps` statt als Schritt,
keine Quellen-Links im Text. Zeitangaben: Spanne „25–35 Min“ (Halbgeviertstrich, ohne „ca.“), sonst „ca. 55 Min“,
„ca. 1 Std 30 Min“; Wartezeiten dahinter („ca. 45 Min + über Nacht marinieren“). Der Import per Link räumt Schritte
schon so auf (`tidyStep()`, `sourceName()` in `worker/index.js`).
**Tags:** nur aus `_data/tags.yml` (schönerer Anzeigename optional in `_data/tag_labels.yml`) (klein, Deutsch: Hauptzutat, Küche ohne eigene Kategorie, Eigenschaft); nichts,
was schon `category`/`categories` sagt, keine Gerichtsnamen. „vegetarisch“ als Tag nur, wenn die Kategorie
„Vegetarisch“ nicht passt (z. B. Süßes, Brot); der Schnellfilter „Vegetarisch“ wertet beides aus.
Titel ändern ändert die Adresse nicht (kommt aus dem Dateinamen); danach PDFs neu erzeugen.
Hauptkategorie (`category:`) und optionale weitere (`categories: ["Italienisch", …]`) immer aus
`_data/categories.yml` wählen (25 Kategorien in fünf Gruppen, Zwischenüberschriften aus `_data/category_groups.yml`):
**Anlass** Schnell · Meal Prep · Wochenendprojekt (lange/aufwendig, Vorlauf) — **Gericht** Pasta · Curry · Bowls & Salate ·
Burger & Sandwiches · Pizza & Brot · Knusprig & Frittiert · Suppen & Eintöpfe · Schmorgerichte — **Hauptzutat** Hähnchen ·
Rind (Stücke/Steak) · Hackfleisch · Schwein · Ente · Fisch · Vegetarisch — **Küche** Amerikanisch · Italienisch · Indisch ·
Asiatisch · Mexikanisch — **Süßes & Basics** Süßes & Backen · Saucen & Basics.
Hauptkategorie = Art des Gerichts, sonst die Hauptzutat; Hauptzutat und Küche zusätzlich unter `categories`.
Hauptzutaten, „Amerikanisch“ und „aufwendig“ sind keine Tags mehr (stehen in den Kategorien).
„Schnell“ = Zeitangabe höchstens 30 Min ohne Wartezeiten; „Meal Prep“ = lässt sich gut vorkochen und aufwärmen. Einkaufsliste sortiert Zutaten per Stichwort nach Supermarkt-Abteilung (`assets/shopping.js`,
`KEYWORDS`); neue Zutaten, die unter „Sonstiges“ landen, dort ergänzen.
Neue Bilder mit `python3 tools/optimize-images.py recipes/images/<bild>.jpg` vorbereiten: schneidet links
und rechts je 7 % ab (KI-Wasserzeichen, Motiv bleibt mittig) und erzeugt `-480.webp`/`-960.webp`. Ohne WebP fällt die Seite aufs JPG zurück.
Wenn bestehende Bilder geändert werden: `image_version` in `_config.yml` hochzählen (Cache-Busting).
