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
  Wird `status-bar-style` geändert, die App vom Homescreen löschen und neu hinzufügen. `html` malt unten die Blatt-Farbe (kein Grün unter kurzen Seiten).
- **Schrift (Abschnitt 38, gilt vor 34/37, Wahl des Besitzers):** Titel in der Apple-Systemschrift (SF Pro Display, sonst Inter),
  fett (Seitentitel/Begrüßung/Rezeptname 800, Abschnitte/Karten 700), **normal geschrieben, keine Versalien, nicht schmal**.
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
- **Versteckter Retro-Modus (Abschnitt 36, `html.retro`, `kochbuch.ui.retro`):** Startseite 5× schnell auf Logo/„Tobis Kochbuch“
  tippen (Hinweis mit Rückgängig); danach steht „Retro-Modus“ als Schalter unter „Mehr“ (`kochbuch.ui.retroFound`).
  Graue Fenster mit harten Kanten und schwarzem Versatz, weiße Lesefelder, Navy-Titelleisten, Gelb = Hauptaktion,
  Lila = gedrückte Auswahl, Petrol = aktiver Tab, Pink = Hauptkategorie; eckig, kein Blur. Schriften Host Grotesk /
  IBM Plex Sans / IBM Plex Mono (selbst gehostet aus npm `@fontsource…`, OFL, nicht vorgeladen). Gilt hell und dunkel gleich.
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
- Kochmodus: Wischen links/rechts; Fortschritt in `cooking` (12 Std). „Kochen läuft“-Kapsel über der unteren Leiste
  (`assets/now-cooking.js`, wie der Mini-Player in Apple Music) auf jeder Seite, solange Fortschritt oder Timer laufen:
  Foto, Name, Timer-Restzeit (Uhr-SVG), „Schritt n von m“, Fortschritt grün; Antippen öffnet `?kochen=1` (auf der Rezeptseite direkt
  `KOCHBUCH_OPENCOOK`). recipe.js meldet `kochbuch:cooking` / `kochbuch:cookmode`.
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
