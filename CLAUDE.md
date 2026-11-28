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
  Dazu (Nov. 2026, vom Besitzer installiert, MIT, github.com/bencium/bencium-claude-code-design-skill): `bencium-controlled-ux-designer`
  (fragt vor Design-Entscheidungen, Barrierefreiheit/Bewegung/Responsive) und `bencium-innovative-ux-designer` (eigene Bildsprache über
  zehn Typo-Richtungen – nur für Neues, nicht für kleine Korrekturen). Im Original-Repo liegt die `SKILL.md` in `<name>/skills/<name>/`;
  kopiert ist nur dieser innere Ordner.
  Außerdem (Nov. 2026, vom Besitzer gewünscht; `/plugin` gibt es in der Cloud-Sitzung nicht, darum per git geholt): `ui-ux-pro-max` (MIT,
  nextlevelbuilder; Suche in mitgelieferten Tabellen: `python3 .agents/skills/ui-ux-pro-max/scripts/search.py "<begriffe>" --domain style`,
  englische Begriffe) und accesslint (MIT): `accessibility-scan/-audit/-inspect/-fix/-diff` + gemeinsamer Ordner `shared/`. Die accesslint-Skills
  rufen `npx @accesslint/cli`/`@accesslint/chrome` auf – das Ausführen dieser npm-Pakete hat die Sitzungs-Prüfung gesperrt; ohne Freigabe
  stattdessen mit Playwright prüfen. Vercels `web-design-guidelines` ohne Lizenzangabe → nicht im Repo (nur je Sitzung nach `~/.claude/skills`).
  `frontend-design` aus dem Anthropic-Marktplatz ist schon eingebaut; dessen übrige Plugins sind Entwickler-Werkzeuge.
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
- **Skins:** „Mehr“ → „Skin“ (`kochbuch.ui.skin`, pro Gerät). 21 Stück (dazu Brandbrief, Boxengasse, Bildband und die sechs Effekt-Skins, siehe unten): Standard, Retro (`html.retro`, bleibt in `styles.css`),
  Terminal, Diner, Bauhaus (diese fünf „sollen gleich bleiben“) und sieben Serien-Welten mit eigenen Namen: Nordwall, Zauberschule,
  Jahr 3000, Zwei Städte, Die Insel, Akte, Brigade. **Keine Logos, Figuren, Namen, Zitate oder Original-Schriften der Serien;
  Fotos unverfälscht; Tab-Symbole überall gleich; jedes Detail soll beim Kochen nützen.**
  - **Dateien:** Jeder Skin hat `assets/skins/<skin>.css`; geladen wird nur die des aktiven Skins, direkt nach `styles.css`
    (`KOCHBUCH_SKIN_CSS()` im Kopf von `_layouts/default.html`). In den Dateien stehen die Regeln in der Reihenfolge ihrer
    Entstehung, spätere überschreiben frühere über längere Selektoren (`html.skin-x:not(._a)…`, zuletzt `:not(#_x#_y)`).
    Neue Regeln ans Ende der Skin-Datei; was für alle Skins gilt, nach `styles.css`.
  - **Verhalten:** `assets/skins.js` (Szenen `.skinScene`, eingefügte Elemente `.skinBit` + `data-for`, Uhr je Welt `worldClock()`,
    Timer-Karte `homeTimer()`, Vorspann `playIntro()`, Klänge nur mit Schalter „Klänge der Welten“, Stimme `VOICE`).
  - **Vorschaubilder** der Skin-Auswahl: `assets/skins/<skin>.jpg` aus `tools/skin-previews.js` (mit WebGL/SwiftShader, auch einzeln:
    `node tools/skin-previews.js <url> nordwall,akte`) – nach sichtbaren Änderungen neu erzeugen **und `?v=` an den Bildern in
    `_layouts/default.html` hochzählen** (sonst bleiben auf den Geräten die alten Bilder; Dez. 2026 auf `?v=2`).
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
    Braucht `z-index:2`: am PC malt `.pageContent` (z-index 1) seinen Grund per `box-shadow:0 0 0 100vmax` und verdeckte das Feld sonst.
  - **Effekt-Skins (Nov. 2026, Wunsch des Besitzers nach sechs Vorbild-Seiten; nur Aufbau/Bewegung, eigene Grafiken):** Wortwelt (Farbwelten
    mit Küchenwörtern wechseln beim Scrollen, flache Illustrationen in drei Ebenen), Blauraum (Rose aus Küchen-Dingen auf Blau, schwebende
    Fotos), Glasklar (Titel auf der Leinwand nachgezeichnet, ein Eisblock bricht ihn), Tiefsee (Titel aus Leuchtteilchen zerfällt beim
    Scrollen/Antippen, Quallen), Formlabor (rote Formen aus schattierten Kugeln, Retro-Computer mit Uhrzeit/Timer unter den Schnellknöpfen,
    antippbar bei laufendem Timer), Galerie (gemaltes Winterbild in drei Ebenen, Karten blenden ein und oben wieder aus).
    Verhalten je Skin in `assets/skins/<skin>.js`, nur für den aktiven Skin nachgeladen (`fxRun()`/`fxStop()` in `skins.js`, `FX_JS`);
    die Datei meldet sich mit `KOCHBUCH_FX.<skin> = { start(api), refresh?, stop? }`. `api.canvas()`, `api.loop()` (zeichnet nur sichtbar,
    bei „Bewegung reduzieren“ einmal), `api.on()/add()` räumen beim Wechsel selbst auf; `api.zone(titel, szene)` = freier Platz neben der
    kürzesten Titelzeile (dort stehen Rose, Formen, Illustrationen), `api.glyphs()` = Buchstaben mit Lage zum Nachzeichnen. Glasklar/Tiefsee
    machen den echten Titel durchsichtig (`.fxDrawn`, bleibt fürs Vorlesen), erst nachdem die Leinwand ihn gezeichnet hat. Alle sechs nutzen die
    leise Scroll-Bewegung (`LITE_FX`) und die Schlussseite mit eigenen Farben (`FOOT_LEAVES`).
    **Nach Vergleich mit den echten Vorbild-Seiten (Besitzer: „nicht mal annähernd vergleichbar“) werden die Skins einzeln mit echtem 3D neu
    gebaut.** Vorbild-Seiten jetzt in den Netzwerk-Freigaben; ansehen mit Playwright + `--use-gl=angle --use-angle=swiftshader
    --enable-unsafe-swiftshader` (WebGL-Seiten rendern langsam, Screenshot-Timeout 60 s). **Blauraum** (Dez. 2026 zweiter Neubau, Besitzer: „zu nah am Standard, eigener Charakter“ – darf den ganzen Aufbau ändern;
    Vorbild k95.it genau angesehen: Start, Arbeiten, Projektseite): elektrisches Blau `#0C0CD6` mit gebogenem Gitter (`blauraum-grid.svg`
    als `html::before`), alle Beschriftungen winzige Versalien, Abschnitte als „(Favoriten)“, Glas-Kapseln, Fotos ohne Kartenfläche und
    ohne Rundung, gelber Punkt `#F4F000` (aktiver Reiter, Mauszeiger `.blDot`). Start: erster Bildschirm = Vollbild-3D-Raum `.blHero`
    (`blauraum-3d.js`: drei Ringe aus Rezeptfotos um eine Kochmütze aus verchromten Lamellen, Ringe/Spirale, Ziehen/Scrollen dreht, Antippen
    öffnet, am Rechner Etikett `.blTip` am Zeiger); ohne Grafikkarte CSS-Bilderring `.blRing`. Rezeptliste: Fotos hochkant auf gewölbter
    Fläche (Neigung je nach Lage, `listPage()`), Umschalter „Raster | Liste“ (`kochbuch.ui.blList`). Rezeptseite: Foto mittig, Name klein
    in Versalien, Untertitel groß. Nach dem OK des Besitzers sind die anderen fünf Effekt-Skins genauso umgebaut worden (Dez. 2026).
    **Bilderbuch** (Schlüssel `wortwelt`; Dez. 2026 zweiter Neubau wie Blauraum, Vorbild howtotalktowhitekidsaboutracism.com mit „Open book“
    durchgeblättert): dunkler, diagonal gestrichener Grund (`html::before`); die Startseite IST das Buch (`.wwHero`): erst geschlossen (Kreide-Deckel
    „Tobis KOCH BUCH“, Kapsel „Buch öffnen“, Widmung mit Datum), dann je Rezept eine Doppelseite in kräftiger Farbe (`VIVID`: Rosa, Koralle, Grün,
    Violett, Gelb, Blau; links eingeklebtes Foto, rechts riesiges handgemaltes Wort mit Kreide-Struktur, kleiner Rest darüber), darunter
    Bildunterschrift `.wwCap` (Name, Untertitel, Zeit), handgezeichnete Pfeile, farbige Seitenpunkte `.wwDots` (12 Rezepte am Tag). Ohne Grafikkarte
    flache Doppelseite `.wwFlat`. Karten überall als farbige Buchseiten (`--pc`, dunkle Schrift auf Rosa/Gelb `.wwInkDark`), Rezeptseite: Foto auf
    farbiger Seite, Name handgemalt. Handschrift „Skin Feder“ für große Wörter, Fraunces für Text. Gemeinsame Helfer: `api.gpu()`, `api.recipes()` (`#homeRecipes` mit t/s/z/u/i).
    **Tiefsee** (Dez. 2026 zweiter Neubau wie Blauraum, Vorbild labs.noomoagency.com: Start nach „Start“-Klick, Werkseite): Lavendel-Verlauf mit
    Punktraster (`html::before`, steht still), riesige Versal-Titel in Bebas („Skin Zwei“), alles Kleine in „Retro Mono“ versal, Untertitel als weiße
    Milchglas-Kapsel (`.tsPill`, auch Rezept-Untertitel), Karten mit Chrom-Rahmen und Pfeil-Kreis, Rezeptliste versetzt (Handy links/rechts, ab
    Tablet zwei Spalten mit Versatz). Start: stehender Raum `.tsPin` (190svh, `.tsStage` sticky) mit Schriftzug „Tobis Kochbuch“ als 3D-Fläche,
    Scherbenkugel und rosa durchscheinender Qualle (`tiefsee-3d.js`); Scrollen und Gedrückthalten sprengen die Kugel, Balken „Bereit für den Herd?“
    füllt sich, weißer Kreis „Gedrückt halten“ mit Eckklammern. 3D nur noch auf der Startseite.
    **Formlabor** (Dez. 2026 zweiter Neubau wie Blauraum, Vorbild studioloop.com.br: Start, Work, Projektseite): Seiten in Creme `#F5F3EE` mit
    Dunkelbraun `#2A1912`, Lavendel `#C9C3FF` für Aktives, Orange `#F2541B` nur als Schmuck. Titel dünne Grotesk + letztes Wort kursiv in Fraunces
    (`mixTitles()`, `.flEm`), Beschriftungen in „[ … ]“ mit Linien (`.flKick`), tanzende orange Punkte am Seitentitel (`dots()`). Start: brauner
    Vollbild-Kopf `.flHero` (3D-Schleife mit Topf/Buch/Löffel/Tomate/Aufklebern, fliegt beim Scrollen auseinander, `scatter`), „kochen“ im Bogen,
    „aus Tobis Küche.“; darunter große Kategorienliste auf Braun (Zeile in der Bildmitte leuchtet, `.flRow.on`), dann Creme-Teil „[ Heute für dich ]“,
    dessen Text sich beim Scrollen Wort für Wort füllt (`today()`). Rezeptliste: eine Spalte großer Fotos (4:5). Rezeptseite: großer Titel über dem
    Foto, Steckbrief „[ Über das Rezept ]“ (Kategorie, Zeit, Portionen, Von; `facts()`).
    **Glasklar** (Dez. 2026 zweiter Neubau wie Blauraum, Vorbild daikifujita.com – bleibt im Container beim Ladebild, weil `api.framer.com`
    gesperrt ist; Aufbau aus dem Seitentext): Schwarz `#0B0B0C`, Versal-Grotesk Archivo („Skin Glas“), winzige Versal-Beschriftungen, Abschnitte
    nummeriert „(02) Favoriten“ (`numbers()`, `.gkN` in Eisblau `#9FD8FF`), Fotos ohne Kartenfläche (Liste 2–4 Spalten, 3:4). Start: Vollbild `.gkHero`
    mit Leitsatz „Rezepte zum Aufwachen. / Gerichte zum Träumen.“ (Grotesk + kursive Fraunces), oben Beschriftungen, unten „Zum Entdecken scrollen“;
    davor ein Eisbrocken aus echtem 3D-Glas (`glasklar-3d.js`, Titel als undurchsichtige Fläche, folgt dem Finger; `glass()` zeichnet jede Spanne mit
    eigener Schrift und beachtet `text-transform`). Danach „(01) Heute“: Versal-Satz mit kursivem Teil, füllt sich beim Scrollen. Auf anderen
    Feld-Seiten Glas über dem Seitentitel. Rezeptseite: Titel groß über dem Foto, Untertitel kursiv.
    **Galerie** (Dez. 2026 dritte Fassung, Besitzer: „nicht vergleichbar, keine Winter-Ausgabe“; Vorbild shopify.com/editions/winter2026 arbeitet mit
    echten alten Gemälden): **gemeinfreie Gemälde alter Meister** in `assets/skins/galerie/` (Quellen in `quellen.txt`, von Wikimedia Commons; zum
    Nachladen `commons.wikimedia.org` + `upload.wikimedia.org` freigegeben, nur Standard-Vorschaugrößen wie 1280px laden, sonst „Too many requests“).
    Graubeige Seiten `#DCDAD1`, Serifen-Titel mit verziertem Anfangsbuchstaben (`::first-letter` „Skin Garamond“ kursiv), schwarze Kapseln.
    Start: Beuckelaers Küchenszene über die ganze Fläche (`.gaHero`, `art()` mit Parallaxe), dünner weißer Rahmen `.gaFrame` „Tobis Koch✱buch – Die
    Tafel-Ausgabe“ mit Inhaltsverzeichnis (römische Zahlen), Funkelring beim Scrollen; Kapitel `.gaChapter` „Heute“ auf Arcimboldos Vertumnus mit
    Satz und Anfangsbuchstabe. Den Papierriss an den Bildkanten hat der Besitzer abgelehnt („sieht billig aus“) – gerade Kanten. Andere Feld-Seiten: Kopf `.gaHead` mit eigenem Stillleben (`PAGE_ART`: Rezepte Claesz,
    Kategorien Cotán, Plan van Dyck, Liste Chardin, sonst Peeters) und riesigem weißem Titel. Am Rechner ab 1180 px links festes Inhaltsverzeichnis
    `.gaSide`. Rezeptseite: Foto über die ganze Breite, weißer Titel, Untertitel als Satz mit Anfangsbuchstabe (`.gaStatement`).
    **Ausbau (Dez. 2026, Besitzer: „Galerie ist geil – noch mehr“):** zwölf Gemälde (neu: Carracci Bohnenesser, Campi Obsthändlerin,
    Heda Austern, Aertsen Marktfrau, Snyders Speisekammer; Werkangaben in `WORKS` in `galerie.js`). Jedes Gemälde trägt ein Werkschild
    `.gaPlaque` (Maler, Titel, Jahr). Startseite: nach „Heute“ bis zu vier Säle `.gaSaal` („Saal II – Pasta“, römische Zahl wie im
    Inhaltsverzeichnis, eigenes Gemälde aus `SAAL_ART`, drei gerahmte Werke mit Museumsschild, „Den ganzen Saal ansehen“); dafür hat
    `#homeRecipes` jetzt auch `c` (Hauptkategorie). Rezeptliste = Sammlung: Foto mit Passepartout und dunklem Rahmen, Museumsschild
    „Nº n“, jedes fünfte Werk am Handy hochkant (am iPad nicht doppelt breit, die Karten laden nur 480-px-Bilder). Rezeptseite: Titel in
    Fraunces, Museumsschild `.gaRecLabel` (Kategorie, Zeit · Portionen, „Aus der Sammlung von …“ – ohne Namen, der steht schon groß auf dem Foto; Autor und Zeit/Portionen-Zeile
    darum ausgeblendet), Schritte mit römischen Zahlen in Garamond. Einkaufsliste/Plan/Kochmodus mit Serifen und Garamond-Überschriften.
  - **Mehr Charakter für die älteren Skins (Dez. 2026, Wunsch des Besitzers: „die alten behalten ihre Themes, aber mehr eigenen Charakter“; alle
    außer Standard):** jeder hat jetzt ein eigenes Aufbau-Skript `assets/skins/<skin>.js` (in `FX_JS`) mit eigenem Start-Element, Rezeptliste und
    Rezeptseite. Retro hat dafür eine eigene `retro.css` (Grundlook bleibt in `styles.css`). **Retro:** alles Fenster (Start: Ordner-Fenster mit
    Kategorien, Liste: Explorer-Detailansicht `html.rtList`, Rezept: Bildbetrachter mit Statusleiste). **Terminal:** Start = Sitzung, Befehle tippen
    sich (`.tmShell`), Liste = `ls -l` (`html.tmList`), Rezept beginnt mit `cat …rez`. **Diner:** Leuchtschild „Tobis Diner“ mit „Geöffnet“ (11–23 Uhr)
    + Kreidetafel „Tagesgericht“, Liste = Speisekarte mit Punktlinie zur Zeit (`html.dnList`), Rezept mit Bestellzettel `.dnSlip`. **Bauhaus:**
    Start = Kreis/Quadrat/Dreieck mit riesigem Datum (`.bhComp`), Liste = Farbflächen-Raster mit Nummern, Foto als Kreis (Fleisch), Quadrat (Gemüse),
    Dreieck (Fisch) (`html.bhList`), Rezept: Foto im Kreis auf Gelb, Kategorie senkrecht.
    **Nordwall:** Start = hängende Banner der Kategorien mit eigenen Wappenzeichen (`.nwBanner`, schwingen leicht) + Steintafel „Heute an der Tafel“,
    Liste = Wappenschilde (Foto im Schild, rotes Band mit römischer Nummer, `html.nwList`), Rezept: eiserner Rahmen, Titel auf Steinplatte.
    **Zauberschule:** Start = Titelseite der Zeitung „Die Küchenpost“ (Kopf, Schlagzeile = Tagesgericht, Bild atmet leicht, zwei Spalten mit Initiale,
    `.zpFront`), Liste = Zeitungsseite in Spalten (`html.zpList`, jede dritte Meldung ohne Bild). **Jahr 3000:** Comic – Start = Titelbild mit
    Erzählkasten, Sprechblase und „Zack!“-Stern (`.cmCover`), Liste = Comicseite mit großen und kleinen Bildfeldern (`html.cmList`), Rezept mit Ausruf.
    **Zwei Städte:** Start geteilt – oben goldene Stadt (Bogenrahmen, Tagesgericht), unten Neon-Stadt (schnelles Gericht ≤ 35 Min mit Leuchtrahmen),
    Zahnrad dazwischen (`.zwSplit`); Liste im Wechsel gold/Bogen und neon/versetzt (`html.zwList`). **Die Insel:** Start = Stationsrechner mit
    Fallblatt-Uhr bis 18:30 und Eingabezeile (`.isStation`), Liste = Stationsprotokoll mit Nummer, Eintrag, Foto im Röhrenrahmen (`html.isList`).
    **Akte:** Start = aufgeschlagene Mappe „Fall des Tages“ mit angeklammertem Sofortbild, Schreibmaschinen-Befund und Stempel (`.akFolder`), Liste =
    Mappen mit Reiter „AZ Jahr-Nr“ und schiefem Sofortbild (`html.akList`), Rezept als Sofortbild mit Büroklammer.
    **Brigade:** Start = Schiene mit drei Bons (`.bgRail`), Liste = Bons mit Abriss und Bon-Nummer an der Edelstahlschiene (`html.bgList`), Rezept
    mit blauem Krepp-Etikett `.bgTape`. **Boxengasse:** Start = „Startaufstellung“ der drei schnellsten Gerichte (`.bxGrid`), Liste = Zeitenmonitor
    mit Position, Abstand zum Schnellsten, Sektorbalken (`html.bxList`), Rezept mit Telemetrie-Leiste `.bxTele`. **Bildband:** Start = Titelblatt
    (Foto über die Fläche, riesiges „Tobis“, Titelgeschichte, Titelzeilen; `.bdCover`), Liste = „Inhalt“ mit Seitenzahlen, jeder fünfte Eintrag
    als großer Aufmacher (`html.bdList`), Rezept mit Untertitel als Zitat `.bdQuote`.
  - **Serien-Skins neu (Dez. 2026, Besitzer: „zu wenig wie die Serie, wirkt billig/gebastelt“; frei interpretiert, keine Vorlagen ansehen):**
    `PURE` in `skins.js` schaltet für Nordwall, Zauberschule, Jahr 3000, Zwei Städte, Insel, Akte, Brigade alle alten Spielereien ab (Szenen,
    Welt-Uhren, `worldHome`, Aufkleber, Bons, Kryo-Kammer …; die Timer-Karte `homeTimer()` gilt dort wieder). Jeder hat einen gemalten
    Vollbild-Kopf auf der Startseite (`.cxHero` in `<skin>.js`: unbewegte Ebenen einmal je Größe auf eine Leinwand gemalt, darüber Bewegung
    wie Schnee/Kerzen/Feuer, Parallaxe beim Scrollen, Titel „Tobis / Kochbuch“ + Linie + Datum, unten Sprung zu „Heute“). Die CSS-Dateien sind
    neu und folgen einem Muster (Tokens, ruhige Karten mit Haarlinie, Heute-Karte groß mit Titel auf dem Foto, Rezeptfoto über die Breite);
    erzeugt mit dem Python-Baukasten `tools/skin_cx.py` (`build(skin, werte, extra, vorspann)`). Nordwall = Eismauer im
    Mondlicht, Burg mit Feuern, Nadelwald, Schnee; Schiefer, Cinzel-Versalien, Blutrot nur für Kochen/aktiven Reiter. Zauberschule = Schloss
    mit erleuchteten Fenstern über dem See, Spiegelungen, schwebende Kerzen; Mitternachtsblau, Gold, Weinrot, IM Fell mit Goldschimmer.
    Jahr 3000 = Zukunftsstadt in der Dämmerung (Ringplanet, Kuppeltürme mit Rundfenstern und Konturen, Röhrenbahnen mit Kapseln, fliegende
    Autos mit Lichtspur); Nachtblau, Mint, Orange, Righteous. Zwei Städte = oben goldene Art-déco-Türme im Abendlicht mit Luftschiff und
    schwebendem blauem Kristall, unten Unterstadt in grünem Dunst mit Rohren, Rauch, pinken/türkisen Leuchtzeichen; Josefin-Versalien, Gold.
    Insel = Sonnenuntergang über dem Meer, Palmen mit feinen Wedeln, Flugzeugwrack am Strand, Lagerfeuer, Glühwürmchen, glitzerndes Wasser;
    Fraunces weit gesperrt (Titel taucht unscharf auf), Glut-Orange. Akte = Sturmnacht: Wolken, schräger Regen, Wetterleuchten, Leuchtturm
    mit streichendem Kegel, langes Gebäude auf der Klippe; Schreibmaschine, Rostrot. Brigade (hell) = Küchenpass aus gebürstetem Edelstahl,
    Wärmelampen mit warmem Licht, Bonschiene, Teller mit Dampf; Archivo kräftig, „Tobis“ auf blauem Malerband, Schürzenblau.
    **Dritte Fassung (überholt durch die vierte unten; Besitzer: „gezeichnete Teile wie Teller, Lampen, Zettel wirken billig“):** Der Kopf war ein Stimmungsfoto
    (`assets/skins/fotos/<skin>.jpg`, frei lizenziert von Wikimedia Commons, Nachweis klein im Bild `.cxCredit` und in `fotos/quellen.txt`),
    gemeinsam aufgebaut von `assets/skins/cx-hero.js` (`KOCHBUCH_CX(api, {skin, img, pos, down, credit, fx})`: Foto mit langsamem Heranfahren und
    Parallaxe, darüber nur Licht-Teilchen `fx` = snow/rain/motes/steam/haze und die Schrift). Fotos: Nordwall Gletscher-Eiswand (abgedunkelt) +
    Schnee, Zauberschule Schloss Hohenschwangau im Abendrot + Lichter, Jahr 3000 Pudong bei Nacht, Zwei Städte Neonschilder + Dunst, Insel Palme im
    Sonnenuntergang + Glühwürmchen, Akte Leuchtturm im Sturm + Regen/Wetterleuchten, Brigade echte Restaurantküche + Dampf. Gemalte Szenen sind raus.
    Die älteren Angaben zu diesen sieben Skins (unten und im Absatz „Mehr Charakter“) gelten nicht mehr.
    **Vierte Fassung (Besitzer: „Fotos haben nichts mit den Serien zu tun; soll hochwertig und erkennbar sein, aus welchem Universum“):**
    die Köpfe werden einer nach dem anderen echte 3D-Szenen (`assets/skins/<skin>-3d.js`, Three.js, `KOCHBUCH_CX(api, {scene})`;
    Vertrag `create(canvas)` → `{resize, render(t, dt, still, {scroll, px, py, near}), dispose}`; ohne Grafikkarte dunkler Verlauf
    `.cxPoster` mit den 2D-Teilchen). **Nordwall:** Pergament-Landkarte, darüber eine Messing-Armillarsphäre mit glühendem Kern,
    Türme aus Zahnrädern wachsen aus der Karte und versinken wieder, 3D-Schnee; Scrollen senkt die Kamera.
    **Nordwall, fünfte Fassung (Dez. 2026, Richtung D2 „Karte des Reichs“ aus `bencium-innovative-ux-designer`, vom Besitzer festgelegt;
    `docs/skins/nordwall-d2.md`, letzter Block in `nordwall.css`):** Pergament `#E2D3B2` statt Schiefer, vier Tinten (Text, Rot = Gerichte/Aktives,
    Waldgrün = Kategorien, Meerblau = Zahlen/Daten), Cinzel weit gesperrt + Garamond kursiv. Startseite = Landkarte aus Schrift (`.nwMap` in
    `nordwall.js`): Norden oben, vier größte Kategorien an den Himmelsrichtungen (`#homeCatCount` in `home.html`), Gericht des Tages als Hauptstadt
    in der Mitte; die 3D-Karte liegt unter einem Pergament-Schleier dahinter. Keine Kartenflächen/Rahmen. Kochmodus ebenfalls auf Pergament (Besitzer: „Kochmodi nicht vergessen“): Schritt in Tinte, Zeiten Meerblau kursiv, Gruppen Waldgrün gesperrt, Weiter/Haken Rot.
    **Zauberschule, fünfte Fassung (Dez. 2026, Richtung C „Sternendecke“, `docs/skins/zauberschule-c.md`, letzter Block in `zauberschule.css`):**
    Nachtblau `#0D1530`, nur Kerzenweiß `#E9DDB8` + Gold `#C9A94A`, Fraunces 300 weich + Jost gesperrt; Startseite = goldene „Sterne“ (`.zsSky`:
    Name, Datum, Kategorien, Zeit, Links) um das Gericht des Tages; 3D-Halle unter Schleier; Kochmodus ohne Karten, Weiter golden.
    **Brandbrief (neuer Skin, Dez. 2026, Entwurf I der Zauberschule-Runde, `docs/skins/brandbrief.md`, `brandbrief.css/.js`):** Signalrot
    `#E2473A`, eine Schriftfarbe `#120606`, Archivo schmal 800 versal; Startseite `.bbrHero` mit riesigem Tagesgericht, das aus dem Bild läuft;
    schwarze Linien statt Karten, Aktives schwarz mit roter Schrift; in `PURE` und `FX_JS`, kein Logo.
    **Jahr 3000, fünfte Fassung (Dez. 2026, Richtung D „Fünfziger-Zukunft“, `docs/skins/jahr3000-d.md`, letzter Block in `jahr3000.css`):**
    Creme `#FBEBD1`, vier Tinten (Tinte, Orange `#C04A28` = Beschriftungen/Aktives, Petrol `#1F7068` = Zahlen, Lila `#6B5CA5` = Kategorien),
    Jost 800 versal + Pacifico; Startseite `.j3Block` mit großen Kategorie-Zahlen; 3D-Stadt unter Creme-Schleier; keine Comic-Umrisse mehr.
    **Zwei Städte, fünfte Fassung (Dez. 2026, Richtung A „Oben und unten“, `docs/skins/zweistaedte-a.md`, letzter Block in `zweistaedte.css`):**
    `#14110E`, oben Gold Josefin gesperrt + Garamond kursiv, unten Permanent Marker Pink/Türkis; Startseite `.zwPage` (oben Gericht, unten
    Kategorien); 3D-Szene unter dunklem Schleier; keine Art-déco-Ecken/Sechsecke mehr; Kochmodus dunkel, Weiter Pink.
    **Die Insel, fünfte Fassung (Dez. 2026, Richtung F2 „Funkspruch“ + Countdown aus C2, `docs/skins/insel-f2.md`, letzter Block in `insel.css`):**
    `#07100C`, Funk-Grau in Stufen, Share Tech Mono versal; Name des Tagesgerichts mit schwächer werdenden Echos (aria-hidden); alles mit Zeit in
    Bernstein `#FFB547` (Startseite `.isRadio`: Kochdauer als riesiger VT323-Countdown, `clock()` in `insel.js`); Kochmodus dunkel, Weiter Bernstein.
    **Akte = Shutter-Island-Welt (nicht Akte X!), fünfte Fassung (Dez. 2026, Richtung D „Lichtkegel“, `docs/skins/akte-d.md`, letzter Block in `akte.css`):**
    Sturmnacht `#0F151B`, Graublau `#7E8C99` + Leuchtgelb `#F3E9C6`, Jost; Startseite `.akBeam` mit treppenartig eingerückten Zeilen wie ein
    streichender Leuchtturmstrahl; 3D-Insel im Sturm unter dunklem Schleier; keine Mappen/Sofortbilder/Stempel mehr; Kochmodus Weiter hell.
    **Brigade (The-Bear-Welt), fünfte Fassung (Dez. 2026, Mischung M3 aus I/H/D/E, `docs/skins/brigade-m3.md`, letzter Block in `brigade.css`):**
    hell `#ECEEEF`, Tinte, Schürzenblau `#2E62A8` gesperrt, Rot `#B3261E` in Courier; Startseite `.bgMenu` als ruhige Karte mit Tafelzeilen;
    3D-Pass unter hellem Schleier; keine Bons/Perforation/Malerband mehr; Kochmodus hell, Weiter blau. Damit sind alle sieben Serien-Skins neu.
    **Bildband, dritte Fassung (Dez. 2026, Entwurf E „Spaltensatz“, `docs/skins/bildband-e.md`, letzter Block in `bildband.css`):** Heftseite –
    Fraunces 800 eng für Großes, Lesetext in Spalten, Etiketten Inter in Erdton (keine Versalien mehr); Startseite `.bdSpread` (Titel, Foto,
    Spalten mit Untertitel/Zeit/Kategorien) statt Titelblatt; Liste zwei Spalten, jeder fünfte breit; Kochmodus Creme, Weiter Erdton.
    **Blauraum, dritte Fassung (Dez. 2026, Entwurf J „Dünn und fett“, `docs/skins/blauraum-j.md`, letzter Block in `blauraum.css`):** Host
    Grotesk 200 und 800 im selben Satz; nach dem 3D-Raum `.blJ` (Gericht des Tages als Satz, Kategorien „**Name** Zahl“); Rezeptseite Name +
    Untertitel als ein Satz; Kochmodus blau, Schritt dünn, Zeiten/Mengen fett, Weiter weiß.
    **Bilderbuch, dritte Fassung (Dez. 2026, Entwurf B „Farbwechsel“, `docs/skins/bilderbuch-b.md`, letzter Block in `wortwelt.css`):** dunkel,
    Buchfarben nur als Schriftfarbe (`--pw`, `WORD`), Handschrift für Großes; nach dem 3D-Buch `.wwB` (Gericht + Kategorien je in eigener Farbe);
    Karten dunkel ohne Farbfläche und ohne Schräglage; Kochmodus dunkel, Überschriften in Handschrift, Weiter rosa.
    Retro, Terminal, Diner, Bauhaus und Boxengasse bleiben in dieser Runde unverändert (Wunsch des Besitzers).
    Reihenfolge der Skill-Runden: ein Skin nach dem anderen (Wunsch des Besitzers), Arbeitsstand der Entwürfe nicht im Repo.
    **Zauberschule:** hohe Halle mit Sternenhimmel als Decke, ~260 schwebende Kerzen, vier lange Tafeln mit goldenen Kelchen und
    Tellern, Spitzbogenfenster, Rosette am Ende; die Kamera gleitet durch die Halle, Scrollen hebt den Blick zur Decke.
    **Jahr 3000:** Zukunftsstadt im Comic-Stil (Toon-Schattierung, schwarze Umrisse über Rückseiten-Hülle) in der Dämmerung: Türme mit
    Untertassen, Kugeln und Ringen, runde Fenster, gläserne Röhrenbahnen mit Kapseln, fliegende Autos mit Lichtspur, Ringplanet.
    **Zwei Städte:** blauer Kristall in drei Messing-Gyroskopringen mit Zahnkranz, Funken, pinke Farbspritzer; oben goldene Art-déco-Türme
    und Bögen, unten dunkle Unterstadt mit Rohren, Leuchtschildern und grünem Dunst; Scrollen sinkt hinab.
    **Insel:** Strand bei Sonnenuntergang mit Rumpf eines abgestürzten Flugzeugs (Fensterreihe, gezackte Abrisskante, Tragfläche,
    Triebwerk), Trümmer und Koffer, Palmen im Wind, Lagerfeuer mit Funken, bewegtes Meer mit Brandungssaum, dunkler Dschungel;
    der Titel schwebt beim Öffnen aus der Tiefe heran (`inRise`, nur transform/opacity).
    **Akte:** Anfahrt übers Meer auf eine Felseninsel im Sturm: langes Backsteingebäude mit Turm und wenigen erleuchteten Fenstern,
    Zaun am Klippenrand, Leuchtturm mit zwei streichenden Lichtkegeln, schräger Regen, Wetterleuchten, schwere Dünung, Kamera schaukelt.
    **Brigade:** Edelstahl-Pass vor weißen Metro-Fliesen, Wärmelampen, an der Bonschiene hängen die echten Rezeptfotos (unverändert,
    nur zugeschnitten) als Bestellungen mit blauem Malerband und Namen, rutschen langsam weiter; Dampf. Der Ordner `fotos/` ist entfernt.
    **Unterseiten (Dez. 2026, Besitzer: „nur die Startseite ist individuell“):** Auf allen anderen Feld-Seiten liegt ein Ausschnitt der 3D-Szene
    hinter dem Seitentitel (`KOCHBUCH_CX_HEAD()` in `cx-hero.js`, Option `compact`, Abschnitt 25 in `styles.css`). Jede Welt hat am Ende ihrer
    CSS einen Block „Unterseiten mit eigener Bildsprache“ für Rezeptkarten, Zutaten (`#ingredientsGroup`), Einkaufsliste (`.listGroup.compactList`),
    Wochenplan (`.planDayCard`), Kategorien, Schritte, Umschalter und Kochmodus: Nordwall = Pergament + doppelter Messingrahmen, römische
    Nummern; Zauberschule = Spitzbogen-Fotos mit Goldrand, Sternenhimmel, Stern als Haken; Jahr 3000 = Comic (3 px Umriss, harter Schatten,
    Pastellflächen); Zwei Städte = abgeschrägte Art-déco-Ecken in Gold, Sechseck-Ziffern, pinkes Neon für Erledigtes; Insel = Sofortbilder
    (leicht gedreht), Dämmerungs-Tafeln mit Glutkante; Akte = Aktenmappen mit Reiter „AKTE 01“, Papier mit rotem Rand, „§ 1“, Stempel „HEUTE“;
    Brigade = Bons mit Perforation (`mask`), Titel auf blauem Malerband, Mengen in Monospace. **Keine mehrfachen Innen-Schatten mit Unschärfe
    auf vielen Elementen** (zeichnete in Chromium Teile der Seite nicht mehr) – doppelte Rahmen mit `border` + `outline`/`outline-offset`.
    3D-Szenen mit wenigen Lichtern (höchstens drei Punkt-/Spotlichter).
  - **Brigade** ist hell (Edelstahl) mit Schürzenblau `#2E62A8`; ein dunkler Brigade-Look wurde abgelehnt.
  - Die 3D-Köpfe der Serien-Skins (Three.js, vierte Fassung, siehe oben) sind seit Dez. 2026 wieder da; die älteren 3D-Köpfe waren zuvor entfernt worden.
- **Leise Bewegung im Standard-Look (Nov. 2026, alle sechs vom Besitzer gewählt; Abschnitt 24 in `styles.css`, nur `html:not(.skin):not(.retro)`):**
  Karten blenden beim Scrollen ein (`SCROLL_FX.standard`, leise Fassung ohne Parallaxe/Fortschrittslinie), Rezeptfoto fährt beim Öffnen
  heran (`stdKen`), Haken zeichnet sich beim Abhaken (`.tickNow` auf `.uRow`/`.prepRow`; die Zeile wird beim Abhaken neu aufgebaut, darum
  sucht der Klick-Lauscher sie per `elementFromPoint` wieder), Blätter-Wirbel bei „Gekocht“ (`KOCHBUCH_LEAVES()` aus `markCooked()`, auch
  im Bildband), Herz federt (`#favQuick.heartPop`), leere Zustände mit stillen Blättern (`.uEmpty::before`, `.homeEmpty::after`).
  Laufband und Foto-Parallaxe bleiben den Skins vorbehalten.
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
  **Neuer Schritt-Aufbau im Standard-Look (Nov. 2026, nach einer Vorlage des Besitzers; Skins behalten den alten):** Klasse `.ckNew`
  am Kochmodus, nur ohne `html.skin`/`html.retro` (Abschnitt 27 in `styles.css`). Je Schritt: „Schritt n von m“ + antippbare Punkte
  (`#ckHead`), große Überschrift in Systemschrift (Fraunces abgelehnt: „passt nicht zum Stil“), darunter der Text (ein Doppelpunkt-Kopf „Soße: …“ wird zur Überschrift), große Timer-Box
  (`#ckTimer`, startet/verlängert/beendet den Timer des Schritts), Draufsicht als SVG (`#ckStage`: Pfanne/Topf/Wok/Blech/Form/Schüssel/
  Sieb/Mixer/Brett/Teller mit Zutaten-Symbolen) mit Gerät · Hitze darunter, ruhige Karte „Für diesen Schritt“ mit den Zutaten (`#ckBon`,
  fehlt ohne Zutaten). Den Papier-Bon mit Zackenrand und Schreibmaschinenschrift hat der Besitzer abgelehnt („passt nicht zum cleanen
  Design“): Systemschrift, nichts schief, Haarlinien (Abschnitt 27b). Skill-Runde (Abschnitt 27c): „Schritt n von m“ nur fürs Vorlesen
  (Kopfzeile, Linie und Punkte zeigen es schon), Punktreihe mit weichen Rändern, Fokusring in `--cLeaf`, Zeichnung blendet als Ganzes ein
  (nicht je Zutat – sonst läuft der Körnungs-Filter bei jedem Bild neu). Unslop-Runde (Abschnitt 27d): antippbare Zeiten im Dunkelmodus grün
  statt orange (galt im ganzen Standard-Look), „Timer starten“ als leiser grüner Knopf (nur „Weiter“ ist voll grün), Überschrift 600.
  Timer-Box (`ckRenderTimer()`): cook-timer.js meldet alle 0,5 s – läuft derselbe Timer, nur Zeit und Linie erneuern, bei gleichem Zustand
  nichts neu bauen (sonst verliert Tastatur/VoiceOver den Fokus); nach Start/Beenden springt der Fokus auf den neuen Knopf.
  **Zutatenbilder weggelassen (Nov. 2026, Besitzer: „Zutatenbilder ganz weglassen“, nachdem echte Fotos nicht in einheitlicher Qualität zu
  bekommen waren – Commons hat keine passende Serie und drosselt):** `#ckStage` zeigt nur noch „Gerät · Hitze“ als Zeile; `CS.scene()` und die
  Zeichnungen bleiben in cook-scene.js, werden aber nicht aufgerufen. Am iPad zwei Spalten (Abschnitt 27e). Die Angaben zu Zeichnungen unten
  gelten nur noch für `scene()`. **Richtung A2 (Nov. 2026, vom Besitzer festgelegt, Abschnitt 28 in `styles.css`, Festlegung in `docs/kochmodus-a2.md`):** ganzer
  Kochmodus im Feld-Grün (dunkel `#123120`), nur Weiß (was zählt) und Salbei `#BFE8CB` (Nebensächliches), Schrift „Koch Inter“ (variabel),
  Überschrift Inter 800 riesig, Text 430 groß, Nebensätze „, bis …“ und Klammern in Salbei (`.ckSub`, recipe.js), Zeiten fett weiß ohne Kapsel,
  Timer als dünne Riesenzahl + „Timer starten“ als Text, Zutaten ohne Karte (Menge weiß rechtsbündig, Name Salbei), Zurück/Weiter als Text;
  keine Schritt-Punkte mehr (Kopfzeile zeigt n/m). Überholt die Optik aus 27b–27e und die helle Variante aus Abschnitt 41 (nur im Kochmodus des
  Standard-Looks). Vorbereiten-Seite und Zutaten-Reiter ebenso ohne Karten (Abschnitt 28b: Titel wie die Schritt-Überschrift,
  Gruppen nur über Abstand; Zutaten = Haken · Menge weiß · Name Salbei, Zutaten des Schritts mit weißem Namen).
  Läuft der Timer des Schritts, steht er nur groß im Schritt (in der Leiste oben ausgeblendet, `ckSyncBar()`; im Zutaten-Reiter und in
  anderen Schritten wieder oben), „+1 Min“/„Beenden“ übereinander rechts neben der Zahl (28c).
  Überschrift, Gerät, Hitze, Zeit und Bild erkennt `assets/cook-scene.js` (`KOCHBUCH_COOKSCENE.analyze()/scene()`) aus dem Schritttext –
  keine Lookbehind-Regexe (alte iOS). Zutaten möglichst echt gezeichnet: unregelmäßige Formen (`blob()`), viele kleine Stücke (`pile()`),
  Licht-Verläufe je Zutat (`g…` in `DEFS`), leichte Körnung (`ckGrain`, ein Filter über alle Zutaten); Ansicht aller Zutaten zum Prüfen:
  `KOCHBUCH_COOKSCENE.scene("board", [{item:"Zwiebel"}])` je Zutat.
  Gerät: ausdrücklich genannte Geräte („in einer Pfanne“) zählen vor Tätigkeiten; nennt ein Schritt keins oder nur schwache Tätigkeiten
  (rühren, erhitzen, braten), bleibt das Gerät des vorigen Schritts (Topf/Pfanne/Wok; „backen“ nach der Auflaufform bleibt die Form); nie
  ein Schneidebrett als Ersatz, ohne Gerät kein Bild. Im Bild liegt alles, was in den letzten Schritten in dasselbe Gerät kam. Creme in
  Form/Schüssel wird zur Schicht (Kakao bestäubt sie, Biskuits liegen in Reihen). Schuss Likör/Aroma wird nicht gezeichnet. Zutat → Zeichnung (`iconOf()`): zählt nur der Kern des Namens („Hähnchenkeule in
  Kräutermarinade“ → Hähnchen, nicht Kräuter; vor „in/mit/oder“, Komma, Klammer), Vorregeln `PRE` (Pulver, Stärke, Essig, Fond, Pasten …)
  vor der Liste `ICONS`; allgemeines „Fleisch“ im Schritt holt die Fleisch-Zutat des Rezepts. Hähnchen hat drei Formen: Keule mit Knochen (`keule`), Flügel (`fluegel`),
  Brustfilet mit Grillstreifen (`brust`); ohne Knochen/in Streifen = Stücke (`haehnchen`). Gewürze liegen fein gestreut, nicht als Haufen.
  **Prüfen (Wunsch des Besitzers nach Tiramisu):** `node tools/cook-scenes.js ausgabe.txt [rezept]` listet je Schritt Überschrift,
  Gerät und Zutaten – nach Änderungen an cook-scene.js und bei neuen Rezepten durchsehen. Ab 768 px Raster mit Text links und Bild/Bon rechts, ab 1100 px drei Spalten.
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
- Beide Workflows laufen auf `ubuntu-24.04` (Nov. 2026: `ubuntu-latest` = 26.04 bietet Ruby 3.3.6 aus `.ruby-version` nicht mehr;
  `.ruby-version` nicht ändern, ohne den Cloudflare-Build mitzudenken).
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
9 Bildern erschöpft). Herunterladen geht aus dem Container nicht: `get-assets` liefert nur eine signierte 200-px-Vorschau
(`media.canva.com`, andere Größen → 403). Der Besitzer lädt das Bild über den Canva-Link (`https://www.canva.com/M/<canva_media_id>`)
selbst und setzt es per „Rezept bearbeiten“ ein; bis dahin Rezept ohne `image:` anlegen (Karte zeigt die Platzhalter-Kachel).
Neue Bilder mit `python3 tools/optimize-images.py recipes/images/<bild>.jpg` vorbereiten: schneidet links
und rechts je 7 % ab (KI-Wasserzeichen, Motiv bleibt mittig) und erzeugt `-480.webp`/`-960.webp`. Ohne WebP fällt die Seite aufs JPG zurück.
Wenn bestehende Bilder geändert werden: `image_version` in `_config.yml` hochzählen (Cache-Busting).
