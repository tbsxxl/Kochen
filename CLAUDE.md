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

## Design-System (in `assets/styles.css` als Tokens)

Skill `apple-design` (`.claude/skills/apple-design`, Apples Human Interface Guidelines; installiert mit
`npx skills add dickwu/apple-design-skill --agent claude-code`, Stand in `skills-lock.json`) für Design-Reviews nutzen.
Skill `swiftui-expert-skill` (`.claude/skills/swiftui-expert-skill`, aus avdlee/swiftui-agent-skill) nur für nativen
SwiftUI-Code, nicht für diese Web-App.
Weitere Design-Skills (Nov. 2026, `npx skills add <quelle> --agent claude-code --all -y`; Dateien in `.agents/skills/` (einen dabei angelegten Ordner `agent/` für andere Agenten löschen, Jekyll bricht sonst an Liquid in den Skill-Texten ab),
in `.claude/skills/` nur Verweise): `impeccable` (pbakaus/impeccable: Kritik, Audit, Feinschliff), Emil Kowalskis Paket
(emilkowalski/skill: `emil-design-eng`, `animate`, `review-animations`, `mobile-native`, `break-ui` u. a.; sein
`apple-design` heißt hier **`apple-design-web`**, damit es den HIG-Skill `apple-design` nicht überschreibt; nach einem
`skills update` prüfen) und `shadcn` (shadcn/ui; nur relevant für React-Projekte, diese Seite nutzt kein shadcn).
Bewegung: `review-animations`/`remove-animations`; Mobil-Feinheiten: `mobile-native`.
`design-taste-frontend` (leonxlnx/taste-skill, Nov. 2026, `npx skills add leonxlnx/taste-skill --agent claude-code --all -y`;
den dabei angelegten Ordner `agent/` löschen): Anti-Slop-Skill mit Prüf-Skripten, vollständig im Repo
(inkl. `assets/`, 38 MB Fotos/Renders; Wunsch des Besitzers). Für Design-Reviews zusammen mit `impeccable` (impeccable.style) und Emil Kowalskis Paket.
`unslop` (heydamir/unslop, CC BY 4.0, Nov. 2026 von Hand übernommen: Ordner `skills/unslop` nach `.agents/skills/unslop`, Verweis in
`.claude/skills/`, Eintrag in `skills-lock.json`): räumt KI-typische Merkmale auf (Abstände, Farben, Symbole, Texte, Bewegung).
Erster Lauf (Abschnitt 42): nur leichter Feinschliff nötig – Bewertung auf Karten mit SVG-Stern (`.rateStar`) statt „★“,
Häkchen als SVG statt „✓“, keine Ausrufezeichen in UI-Texten, keine Versal-Etiketten. Zweiter Schritt (Abschnitt 43, der Besitzer
hatte das nicht gewählt): Titel 600 statt 800 (Rangfolge über Größe), Startseite zeigt das Datum als Überschrift
(Wochentag / „7. November“, zwei Zeilen) statt „Guten Abend“, Rezeptfoto ohne Parallax/Dehnen.
Dritter Schritt (Abschnitt 44): alle Symbole Linienstärke 2 (per CSS, auch wenn im SVG anderes steht), Knopf-Symbole 20 px,
Symbole neben Text 1em, Tab-Leiste/Listen 24 px; kurze Platzhalter ohne „…“. **Erkennungsdetail Eieruhr:** Kochzeiten überall
mit eiförmigem Küchenwecker (`M5.5 15.5a6.5 6.5 0 0 0 13 0c0-4.5-3-9-6.5-9s-6.5 4.5-6.5 9z` + Knopf + Zeiger) statt Uhr –
Karten (beide Dateien!), Rezeptseite, Kochmodus-Zeiten (`cook-timer.js`), „Kochen läuft“ (`now-cooking.js`), Kühltruhe, Was koche ich?.
Geschirrtuch-Streifen am Feldrand (Abschnitt 45) hat der Besitzer wieder verworfen („wirkt unruhig“) – keine Linien im Feld.
Die kleine Titelleiste (`.navCompact`) erscheint auf Feld-Seiten erst, wenn das ganze Feld weggescrollt ist (`bindCompactTitle()`).
Datum auf der Startseite höchstens `10.5vw` groß (passt auch bei 200 % Schrift in eine Zeile).
Am Computer (Abschnitt 47, ab 1100 px): Spalte 92 % der Breite bis 1680 px (große Bildschirme 5–6 Karten), Raster `auto-fill` mit Karten ab 260 px (4 Spalten bei 1440 px),
Heute-Karte höchstens 46 vh, Rezeptseite nur bis 1120 px breit, Rezeptfoto höchstens 50 vh. Mit Maus/Trackpad ist die Grundfarbe von `html`
die Blatt-Farbe statt Feld-Grün (sonst grüner Streifen neben dem Scrollbalken).
Umgesetzt (Abschnitt 24/25 in `assets/styles.css`): Hover nur mit `(hover:hover) and (pointer:fine)`, Knöpfe/Tabs/Kapseln
ohne Textauswahl und Kontextmenü beim langen Drücken, Textfelder ≥ 16 px (sonst zoomt iOS), `interactive-widget=resizes-content`;
Fortschrittsbalken (Kochmodus, Timer, „Kochen läuft“) per `transform: scaleX()` statt `width`; „Bewegung reduzieren“ lässt nur Bewegung weg, Überblenden (0,15 s) bleibt; Seitenwechsel und Tab-Leiste (0,3 s) nur mit Kurven-Tokens; Pläne aus `improve-animations` in `plans/` (von Jekyll ausgeschlossen); `--easeIn` ist ein kräftiges
Ease-out (nie ease-in), Tab-Druck `scale(.95)`.
Weitere Skill-Runden (Nov. 2026): `break-ui` (Abschnitt 26; extreme Testdaten in `tools/worstcase/`: Rezept mit
120-Zeichen-Titel, Rezept ohne Foto, Kommentar im Kopf von `worst.js` zeigt den Ablauf; Karten ohne Foto zeigen ein Topf-Symbol,
Titel > 44 Zeichen auf dem Foto kleiner), `remove-animations` (kein Wackeln bei Schritt/Reiter/Portionen, Seitenwechsel nur
Überblenden), `find-animation-opportunities` (Einkaufsliste: Haken erst an Ort und Stelle, Wischen löscht auch bei schnellem
Wischen), `apple-design-web` (alle Blätter lassen sich nach unten wegziehen: `bindSheetDrag()` in `assets/utils.js`,
1:1, Gummiband nach oben, schließt über einen Klick aufs vorangehende `.sheetOverlay`; jedes Blatt braucht diese Reihenfolge),
`impeccable` (Abschnitt 27: Cursor, Unterstriche, Scrollbalken, `text-wrap`). Funde des `impeccable detect`, die bewusst
bleiben: weißer Text auf Fotos (Detektor sieht das Bild nicht), versteckte `#continueImg` ohne src, Fotos randlos.
`impeccable audit` (Abschnitt 30): Blätter und Kochmodus sind echte Dialoge (`bindDialogs()` in `assets/utils.js`: role=dialog, Hintergrund `inert`, Escape, Fokus zurück); Startseite h1/h2, Karten-Bilder `alt=""` (Name steht im Titel), aktiver Tab `aria-current`, Fraunces wird (seit Abschnitt 31) überall vorgeladen.
`impeccable harden` (Nov. 2026): Fehler laufen über `api()` in `assets/account.js` (Netzfehler/5xx → deutscher Text, nie „Failed to fetch“/„Fehler 404“), offline nicht gespeicherte Seiten → `/offline/` (`offline-seite.md`), „Überall abmelden“ ohne Netz meldet Fehler, gemeinsame Liste zeigt „Nicht synchronisiert · zuletzt …“, Datensicherung „Ersetzen“ mit Rückgängig.
Nach der `impeccable`-Kritik (Abschnitt 28): „Kochen läuft“ erst ab Schritt 2/Timer (bloßes Öffnen merkt nichts),
„Fertig“ bietet „Bewerten“ an; Rezeptseite zeigt 3 Kapseln + „+n“; Startseite: Suche oben, „Heute für dich“ flacher (≤ 60 vh),
heute nichts geplant → nächstes geplantes Gericht der Woche („Morgen geplant“), Zufall abends ohne Süßes/Grundrezepte;
„n. B.“ als „nach Bedarf“; Menüpunkt „Datensicherung“; „Was koche ich?“/„Überrasch mich“/„Zutaten suchen“ bleiben
getrennt (Wunsch des Besitzers).


- **Apple-Look (iOS „Liquid Glass“)**, Abschnitt 10 in `assets/styles.css`: schwebende Glas-Kapsel als Tab-Leiste,
  große Titel (34/700), die beim Scrollen in eine kleine Glas-Leiste oben wandern (`.navCompact`, `bindCompactTitle()` in
  `assets/utils.js`; ohne zusätzlichen Rand dahinter – einen Rand/Streifen oben hat der Besitzer im Nov. 2026 verworfen), gruppierte Listen mit eingerückten Trennlinien, Kapsel-Knöpfe, gefüllte Felder statt Rahmen
  (`--fill`), Glas-Sheets mit großer Rundung, iOS-Schalter (Grün `#34C759`). Glas (`--glass`, `--glassBlur`) nur für
  Leisten, Sheets, Menüs, Hinweise; bei „Transparenz reduzieren“ volle Fläche. Hintergrund `--bg` dunkler als Zellen
  `--surface` (wie iOS). Radien: Karten 22, Listen 16, Felder 14.
- **Aktueller Look „Weiß, Tinte & Kräutergrün“ (Nov. 2026, Abschnitt 35, gilt vor allem anderen):** Sand/Kaffee/Tangerine
  (Abschnitt 34) fand der Besitzer zu nah an Claudes eigenen Farben – **kein Creme/Sand, kein Terrakotta/Orange als Akzent**.
  Drei Farben: hell reines Weiß `#FFFFFF` (Zellen `#F4F6F4`), Tinte `#101511`, Sekundär `#4A534D`; dunkel Grünschwarz
  `#0C1410`/`#16211B`, Text `#F2F6F3`. Knöpfe/Aktives kräftiges Kräutergrün `#34B864` (dunkel `#5CD685`) mit Tinte-Schrift
  `#0E1A12` (7 : 1); Grün als Text hell `#187A41`. Kategorie-Kacheln/-Kapseln Waldgrün `#1E3B2A` (Variable `--coffee`).
  `theme-color` hell `#FFFFFF`, dunkel `#0C1410`. Archivo-Titel und Layout aus Abschnitt 34 bleiben.
- **Look „Markthalle“ (Abschnitt 39, gilt vor allem anderen, Wahl des Besitzers aus drei `impeccable`-Entwürfen;
  die anderen: „Bildband“ = Foto-Pinnwand, „Mediathek“ = iOS-Listen mit kleinen Fotos):** Start- und Listenseiten
  (`body.fieldPage`, gesetzt in `_layouts/default.html` für `layout: home` und `layout: page` mit Titel) haben oben ein
  tiefes Basilikum-Farbfeld `--field` (hell `#1D4A33`, dunkel `#123120`) mit weißem Titel; auf der Startseite liegen
  Begrüßung, Suche und Schnellknöpfe im Feld (Füllung `rgba(255,255,255,.14)`), ab „Heute für dich“ beginnt das Blatt.
  Der Inhalt liegt auf einem Blatt (`--bg`, runde Ecken 28 oben), das sich über das Feld schiebt. Rezeptseite bleibt
  Foto oben. Gefüllte Knöpfe hell im Feld-Grün (`--brand` = `#1D4A33`), dunkel `#7EC48A`. `theme-color` auf Feld-Seiten
  = Feld-Grün (`window.KOCHBUCH_FIELD`, Startwert schon per Liquid im `<meta>`), sonst Weiß/Schwarz; Manifest `theme_color`
  ebenfalls `#1D4A33`. Statusleiste: `apple-mobile-web-app-status-bar-style` = `black-translucent` (mit `default` malt iOS
  in der Homescreen-App selbst einen weißen/schwarzen Streifen über das Feld); die Seite reicht unter die Uhr, `body::before`
  (fest, Höhe `safe-area-inset-top`) färbt den Streifen: Feld-Seiten Feld-Grün, sonst dunkler Verlauf (weiße Uhr lesbar), Retro Navy.
  Wird `status-bar-style` geändert, die App vom Homescreen löschen und neu hinzufügen. `html` malt unten die Blatt-Farbe (kein Grün unter kurzen Seiten),
  hat aber als `background-color` das Feld-Grün: Safari (iOS 26) färbt den Bereich unter der Uhr danach, nicht nach `theme-color`.
  Nach dem 2. `apple-design`-Audit (Abschnitt 40): hell nur noch ein Grün – Links, Listen-Symbole, aktiver Tab = Feld-Grün
  `#1D4A33`, Tönung `#DCE8E0` (dunkel bleibt `#7EC48A` als helle Stufe). Rezeptliste: Suchfeld im Feld unter dem Titel
  (`_includes/recipe-search.html`, eingebunden über Front Matter `field_include:` in `_layouts/page.html`, `.fieldExtra`).
  Feld-Füllung 20 %, Schriftzug höchstens 30 px, dunkel Blatt `#0B0B0C` mit feiner Oberkante.
  Logo auf dem Feld immer in der Variante `logo-dark.svg` (gleiche Farben, helleres Kräutergrün; das dunkle Grün ging unter).
- **Schrift (Abschnitt 38, gilt vor 34/37, Wahl des Besitzers):** Titel in der Apple-Systemschrift (SF Pro Display, sonst Inter),
  fett (Seitentitel/Datum/Rezeptname seit Abschnitt 43: 600), **normal geschrieben, keine Versalien, nicht schmal**.
  Archivo (schmal, versal) hat der Besitzer verworfen („passt nicht“); Bricolage Grotesque und Young Serif waren die anderen
  Vorschläge. Archivo wird nicht mehr vorgeladen. Retro-Modus behält seine Schriften (Regeln mit `:root:not(.retro)`).
- **Nach dem `apple-design`-Audit (Abschnitt 37, gilt vor 35):** ein Grün für alle gefüllten Knöpfe/Auswahlen: hell `#1F8247`
  mit Weiß (4,8 : 1), dunkel `#7EC48A` mit Tinte `#0E1A12` (8,6 : 1); Grün als Text hell `#187A41`. Dunkel wieder Apples
  neutrales `#000`/`#1C1C1E`/`#F5F5F7`, Sekundär `#AEAEB2` (kein Grünschwarz + Neon-Grün, das ist ein Vorlagen-Look).
  Grün nur für Antippbares, Hauptaktion, aktiven Zustand – Infozeilen-Symbole, Stern und Autor-Avatar neutral (`--sub`/`--fill`).
  Kategorie-Kacheln mit schwarzem Verlauf (kein Farbschleier über Essen). Kartentitel in der Blätter-Liste normal
  geschrieben (Versalien nur Seitentitel, Begrüßung, Rezeptname auf dem Foto, Heute-Karte). Seiten mit gruppierten
  Listen tragen `grouped: true` im Front Matter (→ `body.grouped`: grauer Grund `#F2F4F2`, weiße Zellen wie iOS).
  Aktionsreihe: „Kochen“ rutscht bei großer Schrift allein in die erste Zeile, die vier runden Knöpfe bleiben zusammen.
  Logo: ein Umfärben auf Tinte/Grün hat der Besitzer zurückgenommen – **das Logo behält seine Farben
  (Terrakotta/Kräutergrün, siehe unten)**, auch wenn die App kein Terrakotta mehr nutzt. Icons `-v10`
  (Inhalt wie früher `-v8`), `logo.svg?v=9`, `logo-dark.svg?v=11`, `favicon.svg?v=13`, `favicon.ico?v=11`.
- **Skins (Abschnitt 48, Nov. 2026, Wunsch des Besitzers):** „Mehr“ → „Skin ›“ öffnet ein Blatt mit Vorschau-Kacheln
  (`#skinSheet`); gespeichert in `kochbuch.ui.skin` (pro Gerät, fehlt/unbekannt = Standard; alte `kochbuch.ui.retro` wird übernommen).
  Liste und Statusleisten-Farben in `window.KOCHBUCH_SKINS` im Kopf von `_layouts/default.html` (`KOCHBUCH_APPLY_SKIN()`).
  **12 Skins:** Standard (Markthalle), Retro (`html.retro`, Abschnitt 36), **terminal** (grüne Schrift, Bildschirmzeilen,
  Cursor, „[ KOCHEN ]“, Kochmodus tippt den Schritt – `typeStep()` in `assets/recipe.js`; seit Wunsch „mehr Fallout“:
  Metallblende mit Schrauben an Tab-Leiste/Kochmodus-Kopf, gewölbter Bildschirm, Fortschritt in Segmenten), **diner**
  (Kirschrot/Mint/Chrom, Schachbrett-Streifen, Leuchtschrift nur im Seitentitel), **bauhaus** (Kantinen-Speiseplan:
  Schwarz/Weiß, rotes Quadrat = Fleisch, gelber Kreis = vegetarisch, blaues Dreieck = Fisch; `data-kind` auf `.recipeCard`
  aus `recipe-card.html` und `kindOf()` in `assets/cards.js`, Legende `.kindLegend` in `_includes/recipe-search.html`) –
  diese fünf „sollen gleich bleiben“ – und sieben in der Stimmung von Serien/Filmen des Besitzers, **mit eigenen Namen,
  ohne Logos, Figuren, Zitate oder Original-Schriften**: **nordwall** (Game of Thrones: Stein/Pergament, Blutrot, Cinzel;
  Timer-Hinweis als Brief mit Wachssiegel), **zauberschule** (Harry Potter: Pergament, Weinrot/Gold, IM Fell; Mengen in
  den Zutaten golden), **jahr3000** (Futurama: Mint/Lila, Righteous, Röhren-TV-Rahmen um Fotos; Einkaufsliste als
  Lieferschein „Paket n“), **zweistaedte** (Arcane: Teal/Messing oben, Neon-Pink auf Tinte, Bebas Neue, Pinselkante am
  Blatt; aktueller Kochschritt mit pinkem Farbstrich), **insel** (Lost: 70er-Konsole beige/Dschungelgrün, Share Tech Mono;
  Kochtimer als große Klappziffern), **akte** (Shutter Island: Sturmblau, Special Elite, Rezeptkarten als Aktenmappen mit
  Reiter; Bewertung als Stempel), **brigade** (The Bear: Edelstahl, Malerband-Etiketten mit Permanent Marker, Einkaufsliste
  heißt „Mise en place“; Kochschritt als Bon an der Leiste). `body[data-page]` (slugify der Adresse) für seitenbezogene Regeln.
  Kreidetafel, Zeitung, Aqua, Synthwave und Kladde hat der Besitzer gestrichen.
  **Erkennbare Welten (Wunsch „man soll die Serie erkennen“, nicht nur Farbe):** `assets/skins.js` (auf jeder Seite) setzt
  auf Feld-Seiten eine selbst gezeichnete Szene `.skinScene` als erstes Kind von `body` (z-index -1, Höhe bis Blattkante;
  `.pageTitleBlock` hat in Skins keinen Feld-Schatten, das Feld kommt vom `html`-Hintergrund) und steuert das Verhalten:
  Nordwall = Karte + Kompassrose, Wappenbanner je Hauptzutat auf Karten (`data-protein` aus beiden Kartendateien:
  Wolf = Rind/Hack, Löwe = Schwein/Ente, Falke = Hähnchen, Kraken = Fisch, Rose = vegetarisch), Rabe fliegt zum
  Timer-Brief; Zauberschule = Sternenhimmel mit schwebenden Kerzen (Feld Nachtblau), Fotos atmen leicht, Fortschritt im
  Kochmodus als Fußspuren (`--p` aus dem scaleX der Leiste); Jahr 3000 = Skyline mit Röhrenbahn und fahrender Kapsel,
  Datum „… 3026“, „Zur Liste“ schickt eine Kapsel zum Listen-Tab; Zwei Städte = leuchtende Hex-Kristalle, Farbspritzer,
  „Kochen“ wie ein blauer Kristall; Die Insel = Vorspann-Titel (weiße gesperrte Serife taucht aus dem Dunkel auf),
  Nachtstrand mit Mond, Palmen und Wrackteil, Hieroglyphen beim Timer-Ablauf; Akte = Sturm mit Regen, Leuchtturm mit
  kreisendem Lichtkegel, Karten „Akte Nr. 01 …“, Stempel „Gekocht“ (aus `kochbuch.stats`); Brigade = Wärmelampen, Bon-Leiste,
  Küchenrufe als Hinweis beim Abhaken („Gehört, Chef“, „Hinter dir“, „Ecke“ …). Bewegung nur im Kopf, bei „Bewegung
  reduzieren“ alles still.
  **Mehr Stimmung (Abschnitt 48 · 11, Wunsch „noch viel mehr den Vibe der Serien“, nach taste-skill/impeccable/review-animations):**
  Szenen neu: Nordwall = Schneefall + Eismauer mit Burg und Fackeln; Zauberschule = Kerzen + Schloss mit erleuchteten Fenstern;
  Jahr 3000 = Ringplanet, Skyline mit Leuchtschild und Röhrenbahn, fliegendes Auto, **kein Violett** (Feld Nachtblau `#0B1E3B`);
  Zwei Städte = Kristall, Luftschiff, Rohre der Unterstadt mit Graffiti und grünem Dunst; Insel = Abendrot, Meer mit Wellen,
  Dschungelblätter, Flugzeugwrack, Luke mit „4 8 15 16 23 42“; Akte = Regen, Nebel, gelegentlicher Blitz, Klippe mit Anstalt,
  Leuchtturm, dessen **Kegel waagerecht über das Meer streicht** (scaleX-Wechsel, Lampe blitzt auf, wenn er zum Betrachter
  zeigt – nicht im Kreis nach oben); Brigade = Wärmelampen, hängendes Werkzeug, Bons mit Tischnummern, Dampf.
  Horizonte (`.scHorizon`) liegen frei unter Schnellknöpfen/Suche (Feld dafür höher: Heute-Karte `margin-top:84px`,
  `.pageTitleBlock` unten 96 px); auf Listenseiten (`.scList`) rücken Eck-Motive in die Titelzeile. Blattkanten statt runder
  Ecken: Nordwall gerissenes Pergament, Zauberschule Büttenrand, Insel Brandung, Akte Klemmbrett, Brigade Stahlkante,
  Jahr 3000 große Rundung mit Mint-Linie. Überschriften: Schwert (Nordwall), Goldschnörkel (Zauberschule), erfundene
  Schriftzeichen (Jahr 3000), Pinselstrich (Zwei Städte), Stationsschild (Insel), „Betr.:“ (Akte), Malerband (Brigade).
  Heute-Karte gerahmt (Eisenrahmen, Goldrahmen, Sticker-Versatz, Büroklammer, Klebeband). Stimme (`VOICE` in skins.js):
  Leertexte, „Heute für dich“ und Timer-Titel je Skin („Heute an der Tafel“, „Hände, Chef!“ …). Verhalten: Zauberschule
  goldene Funken beim Abhaken/Kochen, Brigade druckt bei „Zur Liste“ einen Bon, Kapsel 0,45 s. **Auf Wunsch des Besitzers
  zurück:** Zauberschule-Fotos leben wie verzauberte Porträts (Heute-Karte + Rezeptfoto, `portraitLive` 9 s) und der
  Insel-Vorspann läuft bei jedem Öffnen (2,2 s, unscharf und groß → scharf; reines CSS, kein Skript). Szenen-Bewegung nur per transform/opacity und
  angehalten, wenn der Kopf weggescrollt ist (`.scPaused`, IntersectionObserver, SMIL `pauseAnimations`).
  **Ausbau je Skin (Abschnitt 48 · 12, Wunsch des Besitzers „hochwertig, nicht billig“):** Logik in `enhance()` in `assets/skins.js`,
  eingefügte Elemente tragen `.skinBit` + `data-for` und verschwinden beim Skin-Wechsel. Nordwall: Kochschritt als Schriftrolle mit
  Siegel (entrollt sich), letzter Knopf „Das Mahl ist bereitet“, Wochenplan-Tage mit mehr Portionen als im Rezept = Banner „Festmahl“
  (`data-serv`/`data-base` auf `.planEntry`, `assets/plan.js`). Zauberschule: Wochenpunkte-Pokal im Feld (gekocht seit Montag aus
  `kochbuch.stats`, Ziel 5), Einkaufsliste als Pergamentrolle, Abgehaktes verblasst. Jahr 3000: Werbespot im Röhrenfernseher unter der
  Heute-Karte (Rezept des Tages), Kühltruhe heißt „Kryo-Kammer“ mit sekundengenauer Uhr seit `added`. Zwei Städte: pinker Farbstrich
  unter dem aktiven Reiter Zutaten/Zubereitung, Aufkleber „Oben“ (Wochenendprojekt) / „Unten“ (Schnell) über `data-level` auf
  `.recipeCard` (beide Kartendateien). Insel: „Überrasch mich“ zeigt 1,5 s Klappziffern „4 8 15 16 23 42“, Timer-Knopf „Eingabe“ groß.
  Akte: Aktenkopf (Akte Nr., Betreff, Abteilung, zuletzt gekocht, Bewertung, Stempel) über dem Reiter, Notizen in roter Tinte.
  Brigade: „Kochen läuft“ als Bon mit Uhrzeit, vor dem Kochmodus Mise-en-place-Liste („Alles da, Chef“ / „Überspringen“).
  Terminal: Statusbalken ZEIT/PORT/WERT/GEKO in Segmenten (`clip-path`). Diner: Speisekarte mit Punktlinie zwischen Name und Zeit.
  Bauhaus: Wochenplan-Einträge mit Form je Art (`data-kind`), Wochenbilanz als Balken. Retro: einmal am Tag ein Startfenster
  „Kochbuch.exe“ mit Ladebalken (`kochbuch.ui.retroBoot`). Letzter-Knopf-Texte auch Zauberschule „Vollbracht“, Brigade „Service!“.
  **Kino-Köpfe (Abschnitt 48 · 13, Nov. 2026, Wunsch „cineastisch, nicht billig“; erst Nordwall als Muster, nach Freigabe
  alle sieben Serien-Skins):** Auf Feld-Seiten ersetzt eine Three.js-Szene die SVG-Szene (`.cineCanvas`, fest hinter dem Feld, `html.cine`).
  Quelle `tools/cinema/`: `core.js` (Kamera, Scrollen, Einblendung, Vorspann, Pause, Helfer `sky`/`ridge`/`water`/`particles`/
  `windowsOn`/`glow`) und je Skin eine Szene `<skin>.js` (Beschreibung: Farben, `cam`, `intro`, `build()` → `update(t)`).
  Gebaut mit `sh tools/cinema/build.sh` (einmalig `npm install` in `tools/cinema`; esbuild mit `--splitting`: geteilter Kern
  `assets/cinema/core-<hash>.js` ~180 KB gz, einmal geladen; jede Szene 2–4 KB; nur in Skins aus `CINEMA` in `skins.js`, `?v=` dort hochzählen).
  Szenen: Zauberschule = Schloss mit vielen Türmen und Fenstern über einem See, schwebende Kerzen, goldene Funken; Jahr 3000 =
  Ringplanet, Skyline mit Kuppeln/Untertassen-Dächern und Fensterreihen, Röhrenbahn mit Kapseln, fliegende Autos (kein Violett);
  Zwei Städte = Oberstadt aus Messing auf einem Plateau, blauer Kristall im Himmel, Unterstadt mit grünem Dunst und pinken
  Leuchtzeichen (Scrollen senkt die Kamera nach unten); Insel = Sonnenuntergang über dem Meer, Palmen, Flugzeugwrack, Lagerfeuer,
  Glühwürmchen (Titel ohne Buchstaben-Einblendung, der CSS-Vorspann bleibt: `splitTitle: false`); Akte = Sturm mit Wolken, Blitzen,
  Regen-Streifen, Anstalt auf der Klippe, Leuchtturm mit waagerecht streichendem Kegel. Brigade hat keinen Kino-Kopf mehr (siehe unten). Bildaufbau-Regel: Himmel/Licht hinter Titel und Datum, Bauten im unteren Drittel
  des Felds unter den Schnellknöpfen. Vorspann-Schrift je Skin über `--cineFont`, Glühfarbe beim Überfahren `--cineGlow`.
  Zeit im Kern nie negativ (erstes Bild kann vor dem Start liegen).
  3D nur mit echter Grafikkarte: meldet WebGL einen Software-Renderer (SwiftShader, llvmpipe), bleibt die SVG-Szene
  (zeichnete in Tests fehlerhafte Zacken). Für Screenshots erzwingen mit `localStorage['kochbuch.ui.cineForce'] = '1'`
  plus Chromium-Optionen `--use-gl=angle --use-angle=swiftshader --enable-unsafe-swiftshader`. Das Canvas wird per
  `clip-path` auf den sichtbaren Feldbereich beschnitten (kurze Seiten), Partikel direkt vor der Kamera werden ausgeblendet.
  Vorsicht beim Entfernen von Skin-Regeln per Skript: Selektorlisten über mehrere Zeilen (z. B. „…akte …,⏎html.skin-brigade …{…}“)
  hinterlassen sonst ein hängendes Komma, die Regel verschmilzt mit der nächsten (so geschehen, `flows.js` fiel dadurch).
  Nordwall: Nachthimmel mit Mond und Sternen hinter dem Titel, Eismauer mit Mondlicht-Krone im unteren Drittel, Burg-Silhouette
  mit flackernden Fenstern/Fackeln, Zickzack-Treppe aus Lichtern, dunkle Hügel vorn, Schnee als Partikel. Startseite: Feld
  ~90 % der Bildschirmhöhe (`marginTop` der Heute-Karte per Skript), Datum Buchstabe für Buchstabe, dann Suche/Knöpfe; Scrollen hebt
  die Kamera (ScrollTrigger), Titel blendet aus, Heute-Foto weitet sich (scale 1,22 → 1). Computer: Kamera folgt leicht der Maus,
  Schnellknöpfe glühen beim Überfahren. Wechsel auf Nordwall: Vorspann „Nordwall“ (startet erst, wenn das Skin-Blatt zu ist;
  Antippen überspringt). `gsap.ticker.lagSmoothing(0)` + Sicherung: Inhalt ist nach spätestens ~2,5 s sichtbar, auch bei langsamem
  Rendern. Ohne WebGL bleibt die SVG-Szene; „Bewegung reduzieren“ = Standbild ohne Einblendungen. Rendern pausiert, wenn das Feld
  weggescrollt oder die Seite verborgen ist. Testen mit Chromium-Optionen `--use-gl=angle --use-angle=swiftshader --enable-unsafe-swiftshader`.
  **Brigade neu (Abschnitt 48 · 14, Nov. 2026, nach einer Kritik, die der Besitzer übernommen hat: „unruhig, verspielt“):**
  Küchen-Terminal an der Pass-Station statt Edelstahl/Malerband/Handschrift. Dunkel: Feld `#0E0F10`, Grund `#121212`, Karten
  `#1C1C1E` mit Haarlinien (keine weichen Schatten), Text `#F2F2F0`/`#A8A8A4`, einziger Akzent Kupfer `#D9822B` (Schrift darauf
  `#140C04`), rote LED `#FF3B30` nur für Uhr und Timer. Überschriften Archivo schmal (`font-stretch:72%`, 800) in Versalien,
  Text SF; Knöpfe normal geschrieben. Ecken 6 px über `--rPill/--rCard/--rBtn` (auch Kapseln werden kantig). Feld nur mit feinem
  Stahlraster (`.skinScene-brigade::before`), kein Küchenbild, keine 3D-Szene. Auf der Startseite unten im Feld eine rote
  LED-Uhr mit Sekunden (`passClock()` in `skins.js`: Sieben-Segment-SVG, unbeleuchtete Segmente schwach sichtbar; `.passClock svg`
  braucht `position:static`, weil Szenen-SVGs sonst absolut liegen), auf Listenseiten keine Uhr. Tab-Leiste festes dunkles
  Paneel, Linien-Symbole, aktiv = Kupfer ohne Blase. Kochmodus-Schritt mit Kupferkante, Timer in roter LED-Schrift,
  „Kochen läuft“ dunkel mit LED-Zeitstempel, Mise en place dunkel. Statusleiste `#0E0F10`, Logo-Band Kupfer.
  Den Serien-Spruch „Every Second Counts“ bewusst nicht übernommen (keine Zitate), die Uhr trägt die Idee.
  **Seit Dez. 2026 hell** (Besitzer: „sieht aus wie Dark Mode“): Feld gebürsteter Edelstahl (`--field:#CDD1D5`, feine
  Schliff-Linien + Glanzstreifen in `.skinScene-brigade::before`), Grund `#F2F3F3`, weiße Flächen mit Stahlkanten `#D5D9DC`,
  Text `#16191B`, Kupfer `#D9822B` als Füllung (Schrift `#140C04`), als Text `#9A4F12`; Tab-Leiste helles Stahlpaneel,
  aktiv Kupfer. LED-Uhr, Timer-Zeiten und Bon-Zeitstempel bleiben dunkle Anzeigen (Gerät). Statusleiste Graphit `#2A2F33`.
  **Serienwelten nach Design-Analyse (Abschnitt 48 · 15, Nov. 2026, vom Besitzer geschickt; ohne Logos/Figuren/Namen/Zitate,
  daher z. B. kein DHARMA-Logo, keine Stark/Targaryen-Wappen, kein „Dinner is Coming“, kein Bender/Slurm):**
  Nordwall dunkel (Schiefer `#1A1A1D`, Karten als Metallplatten mit Nieten und Goldlinie, Drachenfeuer-Rot `#C8323C` für
  Hauptaktion, Gold `#C9A55A` für Auswahl, Überschriften Cinzel in Versalien, Schritte/Notizen in Baskerville/Georgia,
  Kochfortschritt als Klinge). Zauberschule bleibt Pergament (vergoldete Doppelrahmen um Karten und Fotos, Notizen kursiv wie
  Tinte). Insel dunkel wie ein Röhrenmonitor (`#0A0A08`, Bernstein `#FFB000` statt Phosphor-Grün, damit sie sich vom
  Terminal-Skin abhebt; Hauptknöpfe als beige Tasten; feine Bildschirmzeilen; Titel behält den Serifen-Vorspann).
  Jahr 3000 dunkel in Raumschiff-Blau (`#0C1828`, kein Violett), Neon-Grün `#39FF14` (Schrift `#04210A`), Stahlblau
  `#4CC9FE`, Cel-Shading-Kanten (2 px dunkle Linie + harter Versatz). Zwei Städte tiefes Hex-Blau `#0A0E1A`, Hextech-Cyan
  `#00F0FF`, Chemtech-Pink für Timer, Art-déco-Karten mit 45°-Ecken und Messingwinkeln.
  **Uhr-Element je Welt** (`worldClock()` in `skins.js`, Startseite unter den Schnellknöpfen, `.worldClock`): läuft ein
  Kochtimer (`kochbuch.timers`, frühestes `end`), zeigt es Restzeit, Fortschritt und Namen, sonst die Uhrzeit.
  Zauberschule Sanduhr (Sand oben/unten nach Fortschritt), Nordwall Astrolabium (Stunden-/Minutenring, Zahnrad, roter Bogen),
  Insel Klappziffern (nur geänderte Felder klappen) mit „4 8 15 16 23 42“ klein darunter, Jahr 3000 Holo-Ring (dreht schneller
  bei Timer), Zwei Städte Hex-Kristall (pulsiert schneller bei Timer; `window.KOCHBUCH_TIMER_ACTIVE` lässt auch den
  3D-Kristall schneller drehen). Suchfeld-Text je Welt (`PLACEHOLDER` in `skins.js`, z. B. „Im Zauberbuch suchen“).
  Tab-Symbole bleiben überall gleich (Navigation muss eindeutig bleiben).
  **Welten mit eigenem Material (Abschnitt 48 · 16, Nov. 2026; Kritik des Besitzers „sehen alle gleich aus“, Entwürfe als Bilder
  gezeigt, dann „setze alles um“):** Charakter kommt aus Material und Aufbau, nicht aus Farbe. Zauberschule = aufgeschlagenes
  Buch (Pergament über die ganze Seite, Buchschnitt links, Lesebändchen, Kopfzeile „Kapitel … ❧ Wochentag“ am oberen Rand,
  Einleitungssatz mit Initiale zum Gericht des Tages, Gericht als ovales Goldrahmen-Porträt mit Namensschild, Rezeptliste mit
  Seitenzahlen und Punktlinie, Schritte römisch nummeriert, Leiste als Ledereinband). Nordwall = Kartentisch (Holz, gezeichnete
  Landkarte als Szene `.nwMap`, Datum auf Eisenplatte mit Nieten, Rezepte in den Reihen als Wappenfahnen in `--banner`-Farbe).
  Insel = Monitor der Station (alles Share Tech Mono in Bernstein, beiger Gehäuserahmen über den ganzen Bildschirm, Kopfzeile
  „Versorgung · Terminal 2“, große Klappziffern, Heute-Karte als Fenster „Eintrag … · heute [ öffnen ]“, Rezepte nummeriert
  „[01]“, Tabs als beige Tasten). Jahr 3000 = Zeichentrick (hell: Himmelblau→Mint→Sand, 3 px schwarze Konturen, harter Versatz,
  Gelb/Mint/Orange flach, Ringplanet und Wolken als Szene, Sprechblase „Frisch aus dem Menü-o-mat“). Zwei Städte = geteilte Stadt
  (Feld hell-golden mit Art-déco-Strahlen, Blatt dunkel mit gezacktem Riss, Abschnitts-Titel als pinkes Graffiti
  „Unten kocht es“). Akte = Schreibtisch (Holz, Begrüßung als Blatt im Aktendeckel mit Reiter „AKTE jjjj/mm-tt“, Büroklammer,
  Betreff/Status/Hinweis, Stempel „Offen“/„Erledigt“, Heute-Karte als Polaroid „Beweisstück A“, Karten als Karteikarten;
  Grund-Schrift hell, Papierflächen setzen ihre Tokens lokal dunkel). Brigade zusätzlich: gedruckter Bon des Tages über der
  Heute-Karte (Bon-Nr., Uhrzeit, „1× Gericht“, Portionen/Zeit, Tisch), Kapseln und Zutatenmengen auf der Rezeptseite als blaues
  Malerband in schmaler Versalschrift. Elemente kommen aus `worldHome()` in `skins.js` (`.skinBit`). Die 3D-Köpfe sind für diese
  Welten aus (`CINEMA = {}`, Code bleibt). Regeln mit `html.skin.skin-x:not(._a)…:not(._e)` (schlagen Abschnitt 11/15).
  Hintergründe von Welten mit Szene (Nordwall, Jahr 3000, Zwei Städte) gehören auf `html`, nicht auf `body` (sonst deckt der
  Body-Hintergrund die Szene mit z-index -1 zu). Nach `impeccable`-Kritik: keine Karte in der Karte auf der Rezeptseite,
  Leuchten bei der Insel nur für Überschriften, `::selection` und `caret-color` je Welt.
  **Logo je Skin** (Wunsch des Besitzers): `assets/logos/<skin>.svg` – gleiche Buchform „Zwei Seiten“, Material je Welt
  (Terminal grüne Umrisse mit Zeilen, Diner Neonröhren gelb/mint, Bauhaus Rot/Blau + gelber Kreis, Nordwall Stahl mit Nieten
  und rotem Lesebändchen, Zauberschule Pergament mit Goldkante und Stern, Jahr 3000 mit Umlaufbahn, Zwei Städte Gold mit Hex
  links / Pink mit Farbläufern rechts, Insel Sand/Dschungel mit Welle, Akte Mappe mit Stempel, Brigade Edelstahl mit
  Malerband). `<img class="logoSkin">` auf der Startseite, `src` setzt `skinLogo()` in `assets/skins.js`.
  **Regeln (nach `unslop`, Wunsch „Bilder müssen erkennbar sein“):** Fotos in jedem Skin unverfälscht (keine Filter),
  der Skin prägt nur die Oberfläche, jedes Erkennungsdetail soll beim Kochen nützen.
  Aufbau: helles Standard-Layout (data-theme wird entfernt, festes Aussehen), Tokens (`--field`, `--bg`, `--brand`, `--leaf`,
  Kochmodus `--cBg … --cOnLeaf`, optional `--statusBar`) mit Selektoren `html.skin-x:not(._a):not(._b):not(._c):not(._d)`.
  Schriften selbst gehostet (npm @fontsource, OFL bzw. Apache 2.0 bei Special Elite/Permanent Marker; Lizenzen in
  `assets/fonts/`). `tools/flows.js` schaltet jeden Skin einmal durch. Neue Bedienelemente in allen Skins ansehen
  (iPhone-Screenshots je Skin von Start, Rezeptliste, Rezept, Kochmodus, Einkaufsliste).
- **Retro-Modus (Abschnitt 36, `html.retro`, Skin „Retro“):** zusätzlich als verstecktes Extra: Startseite 5× schnell auf
  Logo/„Tobis Kochbuch“ tippen schaltet Retro an/aus (Hinweis mit Rückgängig).
  Graue Fenster mit harten Kanten und schwarzem Versatz, weiße Lesefelder, Navy-Titelleisten, Gelb = Hauptaktion,
  Lila = gedrückte Auswahl, Petrol = aktiver Tab, Pink = Hauptkategorie; eckig, kein Blur. Schriften Host Grotesk /
  IBM Plex Sans / IBM Plex Mono (selbst gehostet aus npm `@fontsource…`, OFL, nicht vorgeladen). Gilt hell und dunkel gleich.
  Logo im Retro-Modus: Pixel-Version `assets/logo-retro.svg` (aus dem echten Logo gerastert, 27 × 13 Pixel, gleiche Farben,
  schwarze Kontur, Lücke zwischen den Seiten offen; `.logoRetro` auf der Startseite, `image-rendering:pixelated`).
  Heute-Karte im Retro-Modus mit 16 px Innenabstand; `html` im Retro-Modus Navy (Safari färbt den Bereich unter der Uhr danach).
- Rezeptliste: „Raster“/„Karten“ unter „Mehr“ speichert jetzt beide Werte (vorher sprang „Raster“ zurück).
  Bewertung ★ auf Karten zeigt alle eigenen Bewertungen 1–5 (nicht mehr nur ab 4), damit unbewertet ≠ schlecht.
- **Vorstufe „Kaffee & Tangerine“ (Abschnitt 34, Farben durch 35 ersetzt):** nach einer Vorlage des Besitzers
  (Plakat „DARK“, Prinzip „nicht mehr Farben, sondern drei“). Hell: Sand `#F3E6DA` (Hintergrund), `#FBF4EE` (Zellen),
  Text Kaffee `#2A160D`, Sekundär `#5E3E2E` (7,8 : 1); dunkel: Kaffeebraun `#2A160D`/`#3A1E12`, Text `#FBF1E8`.
  **Tangerine `#FE4D03` nur für Knöpfe/Aktives, mit dunkler Schrift `#2A140A`** (5,2 : 1; Weiß nur 3,4 : 1);
  Tangerine als Textfarbe hell `#A83300` (5,5 : 1), dunkel `#FE6A2A`. Kaffeebraun `#693822` für Kategorie-Kacheln/-Kapseln
  (die Farben aus `_data/category_colors.yml`, Abschnitt 32, sind damit aus). Schrift **Archivo** (selbst gehostet,
  `assets/fonts/archivo.woff2`, variabel: Breite 62–125 %, Gewicht 100–900, OFL) statt Fraunces: große Titel 900, 75 % Breite,
  GROSSBUCHSTABEN (Seitentitel, Begrüßung, Rezeptname auf dem Foto, Heute-Karte, Karten in der Blätter-Liste),
  Abschnitte/Karten 750–850 normal geschrieben; Fließtext/Bedienung SF. `theme-color` hell `#F3E6DA`, dunkel `#2A160D`.
  Logo bleibt (Terrakotta/Kräutergrün). Abschnitte 31–33 beschreiben die Vorstufen.
- **Neuer Look „Porzellan & Kräuter“ (Nov. 2026, Abschnitt 31 in `assets/styles.css`, gilt vor allem anderen):**
  Neuentwurf auf Wunsch des Besitzers (Superpowers-Brainstorming + Skill `frontend-design`, Leitfaden „Prompting for frontend
  aesthetics“). Weg vom Creme-Serifen-Terrakotta-Einheitslook: Hintergrund kühles Porzellanweiß `#F1F4F0` (auch
  `theme-color`/Manifest), Zellen `#FFFFFF`, Linien `#DCE3DB`, Text Waldtinte `#17201A`, Sekundärtext `#47524A`
  (7,6 : 1). Kräutergrün bleibt die eine Farbe. **Fraunces (Logo-Schrift) ist die Stimme für alle Überschriften**:
  Seitentitel, Abschnitte, Kartentitel, Blatt-Titel, Kategorien; Fließtext und Bedienung SF. Keine Etiketten in
  GROSSBUCHSTABEN mehr (Datum, Abteilungen, Kategorie-Gruppen in normaler Schreibung). Dunkelmodus unverändert.
  Die Farbangaben unten (Papierweiß usw.) gelten nur noch, wo Abschnitt 31 nichts sagt.
- **Kochbuch zum Blättern (Nov. 2026, Abschnitt 33):** Rezeptliste standardmäßig untereinander (`listCards`): Foto randlos
  über die ganze Breite (4 : 3), Name groß in Fraunces darunter; Raster weiter unter „Mehr“ → „Rezeptliste“. Einmalige
  Umstellung über `kochbuch.ui.listViewV2` (alte Einstellung wird zurückgesetzt). Heute-Karte auf der Startseite randlos.
- **Farbe je Kategorie (Nov. 2026, Abschnitt 32, Wunsch des Besitzers „mehr Farbe“):** jede der 25 Kategorien hat einen
  Farbton aus der Küche in `_data/category_colors.yml` (Tomate, Kurkuma, Basilikum, Aubergine …; alle mit Weiß ≥ 5,6 : 1;
  neue Kategorie → dort Farbe ergänzen und Kontrast prüfen). Über `--cat` im Markup: Kategorie-Kacheln laufen unten in den
  Farbton aus, Hauptkategorie-Kapsel und Heute-Karte-Kapsel gefüllt, Rezeptseite leicht im Farbton der Hauptkategorie getönt
  (Hintergrund 9 %, Inhaltsfläche 6 %; dunkel 16/12 %). Kräutergrün bleibt für Bedienung (Kochen, Tabs, Haken).
- **Neuanfang Okt. 2026 (Abschnitt 16 in `assets/styles.css`, gilt vor allen älteren Abschnitten):** Die Fotos sind die
  Farbe, die Oberfläche bleibt ruhig. Hellmodus warm (Abschnitt 19): Hintergrund Papierweiß `#F6F1E9`, Zellen `#FFFDF9`,
  Füllung `#EDE7DD`, Linien `#E6E0D6`, Text `#1F1D1A`, Sekundärtext und Metadaten `#57534C` (6,8 : 1, Apple empfiehlt für kleine Schrift ~7 : 1);
  dunkel Apples neutrales `#000`/`#1C1C1E`/`#F5F5F7`. `theme-color`/Manifest hell `#F6F1E9`.
  **Markenfarbe Kräutergrün (Abschnitt 17 = Rollen, Abschnitt 18 = Farben):** das Grün aus dem Logo, eine einzige Farbe.
  `--brand`/`--leaf` hell `#526B57` (weißer Inhalt 5,8 : 1, als Text 5,2 : 1), dunkel `#7EC48A` (kräftiger, 10 : 1 auf Schwarz) mit dunklem Inhalt,
  blasse Fläche `--brandSoft` `#E2EAE3`/`#1D3524`. Für Hauptaktion und Fortschritt (Kochen, Play, Weiter, Haken, Balken,
  aktiver Tab als blasse Kapsel) und als Tönung für Text und Symbole (Links, „Alle ›“, Sterne, Herz). Auswahl (aktive
  Filter-Kapseln) grün gefüllt (`--sel` = `--brand`, Abschnitt 22). Safran, Basilikum-Palette (`#287A36` …) und Spiegelei-/Blatt-Logo hat der Besitzer
  verworfen. Text sonst nie grün.
- Schriften liegen selbst gehostet in `assets/fonts/` (kein Google Fonts, Datenschutz). Inter wird nicht mehr
  vorgeladen (auf iPhone/iPad/Mac greift SF).
- Schrift: Systemschrift (SF auf Apple-Geräten, sonst das selbst gehostete Inter als Ersatz) für Text und Bedienung; Fraunces 600
  für Überschriften (seit Abschnitt 31), wird auf jeder Seite vorgeladen.
  Größen 12/14/16/18/22/28/36, Abstände 4/8/12/16/24/32/48.
- Darstellung folgt dem iPhone (Hell/Dunkel, „auto“ = kein Eintrag in `kochbuch.ui.theme`); ganz unten unter „Mehr“ Auswahl
  Auto · Hell · Dunkel (Apple rät von eigener Darstellungs-Wahl ab, daher nur als Ausnahme, Standard Auto). Dunkel = Apples neutrales Schwarz/Grau. „Kontrast erhöhen“ (iPhone) schaltet wie der
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
  wie ✕ ‹ › ✓ ♡ ★ + − als Knopf-Symbol (Plus/Minus: `.icoPM`, Bewertungssterne als SVG mit Füllung bei `.on`). „Alle ›“ mit CSS-Chevron. Listen-Symbole („Mehr“-Menü, Rezept-Menü, Konto) ohne Kacheln, in Kräutergrün
  (`.rowGlyph`, wie die Mediathek in Apple Music; Abschnitt 22). Schalter in Kräutergrün statt
  Apples Systemgrün; Kühltruhen-Markierung auf Fotos Kräutergrün. Rot nur für Löschen/Warnungen.
  Plus/Minus überall als gefüllte runde Knöpfe (`.stepBtn` wie `.recipePortionStep`, Abschnitt 21).
- Logo „Zwei Seiten“ (offenes Buch als Schale; Spiegelei und Basilikumblatt hat der Besitzer verworfen; keine Kochmütze,
  kein Besteck). Hell (`assets/logo.svg`, „mit Tiefe“): Terrakotta-Verlauf `#DB875F`→`#C46A42` links, Kräutergrün-Verlauf
  `#5E7863`→`#465C4B` rechts, feine helle Oberkante. Dunkel (`assets/logo-dark.svg`): Terrakotta `#E0906A`→`#C97350`,
  rechte Seite kräftiges Kräutergrün `#92D09D`→`#6FB57C` (wie das Grün der App im Dunkelmodus; Creme war zu weit weg). Startseite zeigt je nach App-Darstellung `.logoLight`/`.logoDark`;
  `assets/favicon.svg` und `favicon.ico` = nur das Zeichen auf transparentem Grund, **ohne Kachel** (eine helle
  Kachel wirkte in dunklen Browser-Tab-Leisten wie ein weißer Kasten); Grün etwas heller (`#6E8C74`), dunkel wie `logo-dark.svg`.
  Homescreen-/Android-Icons (`apple-touch-icon-v10.png`, `icon-512-v10.png`, `icon-maskable-512-v10.png`, `favicon.ico`)
  auf Weiß mit leichtem Verlauf nach `#EEEEF0` (wie Apples Health-Icon), nur hell (Web-Apps können kein dunkles Icon festlegen), gerendert per Playwright, ico mit ImageMagick `convert`.
  Bei Logo-Änderungen die Icon-Dateinamen (`-v10` → `-v11`) und `?v=` an `logo.svg`/`favicon.ico` hochzählen,
  sonst zeigen iPhones und der Service Worker weiter das alte Icon.

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
- Kochmodus: Wischen links/rechts; Fortschritt in `cooking` (12 Std). „Kochen läuft“-Kapsel über der unteren Leiste
  (`assets/now-cooking.js`, wie der Mini-Player in Apple Music) auf jeder Seite, solange Fortschritt oder Timer laufen:
  Foto, Name, Timer-Restzeit (Eieruhr-SVG), „Schritt n von m“, Fortschritt grün; Antippen öffnet `?kochen=1` (auf der Rezeptseite direkt
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
