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
  Im November 2026 meldete Cloudflare viermal hintereinander „failure“ (PR #105–#108), alles war trotzdem live.

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

## Design (aktueller Stand; Geschichte und Begründungen in `docs/design-verlauf.md`)

**Vor Design-Arbeit `docs/design-verlauf.md` lesen** – dort steht, was der Besitzer gewählt und was er verworfen hat.

- **Skills für Reviews:** `apple-design` (HIG), `impeccable`, Emil Kowalskis Paket (`emil-design-eng`, `animate`, `review-animations`,
  `mobile-native`, `break-ui`; sein `apple-design` heißt hier `apple-design-web`), `design-taste-frontend`, `unslop`.
  `swiftui-expert-skill` und `shadcn` passen nicht zu dieser Web-App. Dateien in `.agents/skills/`, Verweise in `.claude/skills/`;
  ein beim Installieren angelegter Ordner `agent/` muss gelöscht werden (Jekyll bricht sonst ab).
- **Standard-Look „Markthalle“:** Feld-Seiten (`body.fieldPage`: Start, Listen) haben oben ein Basilikum-Farbfeld `--field`
  (hell `#1D4A33`, dunkel `#123120`), der Inhalt liegt auf einem Blatt `--bg`. Ein Grün für alles Antippbare
  (hell Feld-Grün, dunkel `#7EC48A`), dunkel Apples neutrales Schwarz/Grau. Titel in Systemschrift (SF, sonst Inter), 600, normal
  geschrieben. **Nicht:** Creme/Sand, Terrakotta/Orange als Akzent, Versal-Etiketten, schmale Schrift, Linien im Feld.
  Das Logo „Zwei Seiten“ behält Terrakotta/Kräutergrün; bei Logo-Änderungen Icon-Dateinamen und `?v=` hochzählen.
- **Regeln:** Tippflächen ≥ 44 pt, Text ≥ 4,5 : 1, Textfelder ≥ 16 px, alles in `rem` (bis 200 % Schrift prüfen). Symbole nur als
  Linien-SVG (`.ico`, Stärke 2), keine Schriftzeichen als Knopf-Symbol; Kochzeiten überall mit der Eieruhr. Hover nur mit
  `(hover:hover) and (pointer:fine)`. Bewegung nur über `transform`/`opacity` mit den Kurven-Tokens; „Bewegung reduzieren“ lässt
  Bewegung weg. Rezeptkarten gibt es zweimal (`_includes/recipe-card.html`, `assets/cards.js`) – Änderungen in beiden.
  Blätter sind echte Dialoge (`bindDialogs()`), lassen sich wegziehen (`bindSheetDrag()`).
- **Skins:** „Mehr“ → „Skin“ (`kochbuch.ui.skin`, pro Gerät). 14 Stück (dazu Boxengasse und Bildband, siehe unten): Standard, Retro (`html.retro`, bleibt in `styles.css`),
  Terminal, Diner, Bauhaus (diese fünf „sollen gleich bleiben“) und sieben Serien-Welten mit eigenen Namen: Nordwall, Zauberschule,
  Jahr 3000, Zwei Städte, Die Insel, Akte, Brigade. **Keine Logos, Figuren, Namen, Zitate oder Original-Schriften der Serien;
  Fotos unverfälscht; Tab-Symbole überall gleich; jedes Detail soll beim Kochen nützen.**
  - **Dateien:** Jeder Skin hat `assets/skins/<skin>.css`; geladen wird nur die des aktiven Skins, direkt nach `styles.css`
    (`KOCHBUCH_SKIN_CSS()` im Kopf von `_layouts/default.html`). In den Dateien stehen die Regeln in der Reihenfolge ihrer
    Entstehung, spätere überschreiben frühere über längere Selektoren (`html.skin-x:not(._a)…`, zuletzt `:not(#_x#_y)`).
    Neue Regeln ans Ende der Skin-Datei; was für alle Skins gilt, nach `styles.css`.
  - **Verhalten:** `assets/skins.js` (Szenen `.skinScene`, eingefügte Elemente `.skinBit` + `data-for`, Uhr je Welt `worldClock()`,
    Timer-Karte `homeTimer()`, Vorspann `playIntro()`, Klänge nur mit Schalter „Klänge der Welten“, Stimme `VOICE`).
  - **Vorschaubilder** der Skin-Auswahl: `assets/skins/<skin>.jpg` aus `tools/skin-previews.js` – nach sichtbaren Änderungen neu erzeugen.
  - **Boxengasse** (Nov. 2026, Wunsch des Besitzers: Aufbau, UI und Scroll-Bewegung wie landonorris.com, nicht der Inhalt): dunkles Oliv
    `#282C20`, Limette `#D2FF00` als einzige Signalfarbe, fette Versal-Titel mit einem Wort in dünner Serifenschrift (`em.bxSerif`),
    Karten mit ausgeklinkter Ecke. Bewegung in `boxengasse()` (`skins.js`): Einblenden beim Scrollen (`.bxRv`, nur was beim Aufbau
    außerhalb des Bildschirms lag), Foto-Parallaxe in Karten, Fortschrittslinie oben, Laufband mit den Kategorien (antippbar, Daten
    aus `#homeCats` in `home.html`), Limetten-Vorhang als Vorspann. Selektoren dort: `html.skin-boxengasse:not(#_x#_y)`.
    Ansehen der Vorlage braucht `landonorris.com` + `cdn.prod.website-files.com` in den Netzwerk-Freigaben; ihr Skript-Server
    (`lando.itsoffbrand.io`) ist nicht freigegeben, die Seite bleibt dann im Ladebild (per Skript ausblenden).
  - **Bildband** (Nov. 2026, Wunsch des Besitzers: Food-Magazin, „jedes Rezept ein Kapitel“): Creme `#FAF6EE`/`#EFE7D8`, Espresso-Text,
    Erdton `#8A4B2A`, Titel in Fraunces (Abschnittstitel kursiv), Rezeptliste mit hohen Fotos und „Nº n“ (CSS-Zähler), Foto fährt beim
    Öffnen des Rezepts heran (`bbKen()`), Schlussseite `.bbFooter` auf Start und Rezeptliste mit Kräuterblättern auf einem Canvas, die
    Finger/Maus ausweichen (`bbFooter()`, läuft nur, solange sichtbar). Scroll-Bewegung teilt er sich mit Boxengasse (`SCROLL_FX`).
    Creme/Sand ist nur im Standard-Look unerwünscht – hier ausdrücklich gewollt.
    Die Schlussseite gibt es auf Wunsch des Besitzers auch im Standard-Look (Abschnitt 23 in `styles.css`): Feld-Grün, grüne Blätter
    (`FOOT_LEAVES`), Systemschrift, keine Versalien; bei „Bewegung reduzieren“ stehen die Blätter still.
  - **Brigade** ist hell (Edelstahl) mit Schürzenblau `#2E62A8`; ein dunkler Brigade-Look wurde abgelehnt.
  - Die 3D-Köpfe (Three.js) sind im Dez. 2026 entfernt worden.
- **Vor und nach Umbauten an CSS/Skins:** `node tools/visual.js shoot <ordner>` vorher und nachher, dann
  `node tools/visual.js diff <vorher> <nachher>` (13 Seiten × alle Skins, eingefrorene Uhr). So wurde das Zerlegen der CSS-Datei
  geprüft. Neue Bedienelemente in allen Skins ansehen, auch Einkaufsliste, Wochenplan, Kategorien, Konto, Kühltruhe, Blätter
  und am iPad (1000 × 750).
- **iPad-Homescreen-App:** über fest stehenden Ebenen bleibt oben ein Streifen, in dem die Seite dahinter durchscheint. Bei offenem
  Kochmodus wird deshalb die Seite ausgeblendet (`html:has(.cookOverlay.open) body{visibility:hidden}`) und `html` in der Kopf-Farbe gemalt.


## Bedienhilfen (nur im Browser gespeichert, `kochbuch.ui.*`)

- Haupt-Leiste unten (5 Tabs, `_layouts/default.html`): Start · Rezepte · Plan (Wochenplan) · Liste · Mehr.
  Wie iOS 26: beim Runterscrollen kleiner ohne Beschriftung (`html.tabbarMin`), beim Hochscrollen/oben/unten wieder groß.
- Startseite: läuft ein Kochmodus, steht „Weiterkochen“ ganz oben (`#homeContinue`, solange sichtbar keine
  „Kochen läuft“-Kapsel, `body.continueVisible`). Leere Zustände ohne Rahmen und ohne Logo, keine Gesten-Erklärtexte.
- Startseite wie der „Heute“-Tab im App Store: Datum über der Begrüßung, „Heute für dich“ als Bildkarte mit Titel auf dem
  Foto. Rezeptfoto mit Parallaxe/Dehnen beim Scrollen (Skript in `_layouts/recipe.html`, aus bei „Bewegung reduzieren“).
  Aktiver Tab: Kapsel, Grün, Symbol gefüllt (`fill-opacity`).
- Rezeptseite: die Tab-Leiste bleibt stehen (Apple: Tab-Leiste = Navigation, keine Aktionen). Aktionen direkt unter dem
  Foto (`.recipeActions`, Abschnitt 23 in `assets/styles.css`, wie „Wiedergabe“ unter einem Album in Apple Music):
  **Kochen** als grüne Kapsel, daneben runde Knöpfe Favorit · Planen · Zur Liste · Mehr (Gekocht, Kühltruhe, PDF,
  Drucken, Bearbeiten). Die IDs (`#cookingModeQuick`, `#favQuick`, …) nutzen recipe.js und die Tests.
- Planen (Kalender-Knopf unter dem Foto): Blatt mit 10 Tagen, mehrere antippbar; Schalter „Einmal kochen, Reste essen“ markiert alle
  außer dem frühesten Tag mit `leftover: true` (Wochenplan zeigt „Reste“, Einkaufen zählt sie nicht). Standard an bei
  „Meal Prep“ (`RECIPE_DATA.mealPrep`). Tags auf der Rezeptseite = antippbare Kapseln (`/rezeptindex/?q=<tag>`), Infos
  (Zeit, Portionen, Favorit, Bewertung, Kühltruhe) als ruhige Zeile mit Symbolen.
- Rezeptseite: großes Foto mit Rezeptname (Fraunces, weiß) und Untertitel darauf (`.recipeHeroText`). Darunter Autor,
  Infos, Kapseln (alle neutral `--fill`, Hauptkategorie zuerst und fett, `.chipMainCat`, dann weitere Kategorien und Tags), dann der Umschalter „Zutaten | Zubereitung“ (`#recipeSegWrap`, `data-pane` auf `.recipePageCard`), der
  beim Scrollen unter Zurück-Taste und Titelleiste kleben bleibt (`.isStuck` legt eine ruhige Fläche dahinter;
  `.recipePageCard` braucht `overflow:clip`, nicht `hidden`). Ab 900 px kein Umschalter, beide Teile nebeneinander.
  Kategorie für das PDF steht in `RECIPE_DATA.category`.
- Rezeptseite: Schritte antippen = abhaken (`stepsDone`, 12 Std), Portionen pro Rezept (`servings`),
  „Ähnliche Rezepte“ (gleiche Kategorie, Liquid `sample`, Karten mit `hcard=true`).
- **Timer auf der Startseite (Dez. 2026, Wunsch des Besitzers):** solange ein Kochtimer läuft, zeigt die Startseite unter den
  Schnellknöpfen eine Karte `.homeTimer` (Eieruhr, Restzeit, Timer-Name · Rezept, „+n“ bei mehreren, Fortschrittslinie; Antippen
  öffnet `?kochen=1`) – in allen Skins ohne eigenes Uhr-Element (`homeTimer()` in `skins.js`, Abschnitt 17 in `styles.css`).
  Welten mit Uhr-Element zeigen den Timer dort; Brigades LED-Uhr zählt dann den Timer herunter (Beschriftung = Timer-Name).
- **Laufender Timer als Mitteilung:** mit erteilter Mitteilungs-Erlaubnis legt `cook-timer.js` beim Start eine stille,
  stehenbleibende Mitteilung „<Name> läuft · Fertig um 18:42 · Rezept“ ab (`notifyRunning()`, Kennung `timer-<id>` wie der
  Ablauf-Push des Workers, der sie dann durch „fertig“ ersetzt); „+1 Min“ aktualisiert sie, Beenden oder Ablauf bei offener App
  schließt sie (`clearRunning()`). Eine sekundengenaue Live-Anzeige (wie iOS-Live-Aktivitäten) können Web-Apps nicht.
- **Vorbereiten (Mise en place, Dez. 2026, Wunsch des Besitzers):** Im Kochmodus steht vor Schritt 1 die Seite „Vorbereiten“ (Brigade:
  „Mise en place“) mit drei Gruppen: „Zuerst anstellen“ (Ofen, Wasser), „Schneiden und bereitstellen“, „Erst später dran“ (Teile, die
  während einer langen Garzeit gemacht werden). Abhaken gilt 12 Std (`kochbuch.ui.prepDone`), „Los geht’s“ → Schritt 1, von Schritt 1
  führt „Zurück“ wieder hin; beim Weiterkochen erscheint sie nicht. Quelle: Front Matter `prep:` (Liste aus Texten, `{ start: "…" }`,
  `{ later: "…" }`; im Formular Feld „Vorbereiten“, Zeilen mit „zuerst:“/„später:“), sonst erkennt `assets/prep.js` die Aufgaben aus
  Schritten (Sätze mit Schneide-Verben ohne Hitze/Zeit, Soßen anrühren nur „in einer Schüssel“) und Zutaten („Zwiebel, gewürfelt“).
  `node tools/prep-check.js [name] [--steps]` zeigt, was je Rezept erscheint – bei neuen Rezepten ansehen und bei Back-, Frittier- und
  Mehrtages-Rezepten `prep:` von Hand setzen (27 Rezepte haben es). Reihenfolge der Schritte: was erst spät gebraucht wird, steht
  auch spät (Short Ribs: erst schmoren, Püree in der letzten Stunde; Nudelwasser erst kurz vor Ende aufsetzen).
- „Kochen läuft“-Kapsel erscheint nicht auf der Seite des Rezepts, das gerade gekocht wird (dort steht „Kochen“; Ausnahme: laufender
  Timer). Wer in „Vorbereiten“ etwas abhakt oder „Los geht’s“ drückt, hat begonnen: der Fortschritt wird gemerkt (`prep: true` =
  noch in der Vorbereitung, „Weiterkochen“ zeigt dann „Vorbereiten“ und öffnet diese Seite wieder).
  Die stehende Timer-Mitteilung lässt sich unter Profil & Sync → Mitteilungen abschalten (`kochbuch.ui.timerNotify = "0"`).
- Skill-Runde Dez. 2026 (`impeccable`, `mobile-native`, `apple-design`, `unslop`, `break-ui`; Abschnitt 22 in `styles.css`): Vorbereiten-Kopf
  ohne Erklärtext (Titel + Zähler in einer Zeile), Zeilen mit Tipp-Rückmeldung; Kapsel-Knöpfe 44 pt, die Restzeit wird nie gekürzt
  (`.ncTime`), Endzeit/„(+n)“ weichen zuerst (`.ncRest`), kaputtes Foto → Eieruhr-Kachel; Timer-Leiste im Kochmodus am Handy höchstens
  gut zwei Zeilen hoch (scrollt), sonst verdecken fünf Timer den Inhalt; Timer-Karte am iPad höchstens 440 px breit.
  `review-animations` und einige andere Skills lassen sich nur vom Besitzer selbst starten (`/review-animations`).
- Kochmodus: Wischen links/rechts; Fortschritt in `cooking` (12 Std). „Kochen läuft“-Kapsel über der unteren Leiste
  (`assets/now-cooking.js`, wie der Mini-Player in Apple Music) auf jeder Seite, solange Fortschritt oder Timer laufen:
  Foto (aus dem Kochmodus, sonst `image` des Timers – `start()` in cook-timer.js speichert `RECIPE_DATA.image`; ältere Timer ohne Foto: grüne Kachel mit Eieruhr), Name, Timer-Restzeit (Eieruhr-SVG), „Schritt n von m“, Fortschritt grün; Antippen öffnet `?kochen=1` (auf der Rezeptseite direkt
  `KOCHBUCH_OPENCOOK`). recipe.js meldet `kochbuch:cooking` / `kochbuch:cookmode`.
  **Farben seit Abschnitt 41 (Wunsch des Besitzers):** im Dunkelmodus wie bisher neutrales Schwarz mit hellgrünem „Weiter“;
  im hellen Modus hell mit grünem Kopf (Kopfzeile Feld-Grün, Grund `#F2F4F2`, weiße Karten, „Weiter“/Haken/Timer-Feld
  im Feld-Grün). Variante „ganz grün“ hat der Besitzer nicht gewählt. Ältere Angabe:
  Farben (Abschnitt 14/16 in `assets/styles.css`): neutrales Dunkel, Fortschritt, Haken und „Weiter“ Kräutergrün,
  Segment-Umschalter und Zurück als Kapseln.
  Ab 768 px (iPad) kein Reiter: Schritt links (+ „Danach“-Vorschau), alle Zutaten rechts, die des aktuellen
  Schritts hervorgehoben (`.isStep`). Auf dem Handy bleibt es bei den Reitern „Schritte/Zutaten“.
- Rezeptliste (Standard seit Nov. 2026: untereinander, Abschnitt 33); als Raster mit 2 Spalten (Abschnitt 12, quadratische Fotos, nur
  Zeit statt Zeit + Portionen) unter „Mehr“ → „Rezeptliste“ umschaltbar (`kochbuch.ui.listView`,
  Klasse `listCards` auf `<html>`, schon im Kopf gesetzt). Kategorien-Seite = Kacheln (Foto, Name, Anzahl; jedes Foto nur einmal), Antippen →
  `/rezeptindex/?kategorie=…`. Menüzeilen, die eine Seite öffnen, zeigen „›“.
- Rezeptliste: eine wischbare Filterreihe (Kategorie, Favoriten, Schnell, Vegetarisch, Nie gekocht), Sortieren als
  Symbol rechts (angeschnittene Ränder blenden weich aus, `fadeL`/`fadeR`), Trefferzahl („8 von 63 Rezepten“), ✕ im Suchfeld. Wochenplan als gruppierte Liste, Einkaufs-Knopf
  nur mit geplanten Gerichten. Timer ohne Mitteilungs-Abo: Hinweis höchstens einmal pro Woche (`kochbuch.ui.timerPushHint`).
- Rezeptliste: Suche auch in Zutaten (mehrere Wörter = alle), Schnellfilter über `data-flags` der Karte
  (`schnell`, `veg` aus Kategorien/Tags) und „Nie gekocht“ (aus `kochbuch.stats`).
- Einkaufsliste: nach links wischen = löschen (Rückgängig über `KOCHBUCH_UI.toast(text, {label, run})`);
  „Erledigte löschen“/„Alles löschen“ ohne Rückfrage, mit „Rückgängig“ (`clearWithUndo`), nur sichtbar, wenn sie etwas tun;
  Kühltruhe genauso: Entfernen (auch per Minus auf 0) ohne Rückfrage, mit „Rückgängig“ (`assets/freezer.js`).
  lange drücken/Menge antippen = Blatt für Menge, Abteilung, Löschen. Korrigierte Abteilungen in
  `kochbuch.shopsections` (synchronisiert), Vorschläge beim Tippen aus `kochbuch.ui.shopfreq`.
  Gleiche Zutaten kommen zusammen: `shopName()` in `assets/utils.js` lässt Zubereitung weg („Knoblauch, fein gehackt“,
  „…, in Scheiben“ → „Knoblauch“; „(ca.)“, „für die Soße“), behält aber, was beim Kaufen zählt (gemahlen, frisch, Dose,
  optional). Zehe/Zehen usw. gelten als gleiche Einheit, „1–2“ zählt als 2, Zutaten ohne Menge legen sich zu einer
  vorhandenen, „(alternativ …)“ und „trocken“ fallen weg, „Kalte Butter – zum Fertigstellen“ verschwindet, wenn Butter schon
  draufsteht. Ältere Listen räumt `compactShopping()` beim Öffnen der Liste genauso auf.
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
**KI-Fotos (Okt. 2026, Stil vom Besitzer):** Prompt je Rezept in `tools/image-prompts.json` (Gericht + gemeinsamer Stil:
heller greige Steintisch, weiches Seitenlicht, warmweißes Keramikgeschirr, skandinavisch-minimalistisch, 16 : 9), erzeugt mit
Canva `generate-image` (`LANDSCAPE_16_9`); `canva_media_id` = schon erzeugt. Canva-Kontingent ist begrenzt (Okt. 2026 nach
9 Bildern erschöpft); Herunterladen braucht `media.canva.com` in den Netzwerk-Freigaben der Umgebung.
Neue Bilder mit `python3 tools/optimize-images.py recipes/images/<bild>.jpg` vorbereiten: schneidet links
und rechts je 7 % ab (KI-Wasserzeichen, Motiv bleibt mittig) und erzeugt `-480.webp`/`-960.webp`. Ohne WebP fällt die Seite aufs JPG zurück.
Wenn bestehende Bilder geändert werden: `image_version` in `_config.yml` hochzählen (Cache-Busting).
