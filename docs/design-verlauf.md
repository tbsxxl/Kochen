# Design-Verlauf

Entstehungsgeschichte aller Looks, Skins und Design-Runden (bis Dez. 2026), ausgelagert aus `CLAUDE.md`.
Der aktuelle Stand steht kurz in `CLAUDE.md`; hier nachlesen, **warum** etwas so ist und was der Besitzer verworfen hat.
Abschnittsnummern beziehen sich auf die Kommentare in `assets/styles.css` und `assets/skins/*.css`.

## Verlauf

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
  aktiv Kupfer. LED-Uhr, Timer-Zeiten und Bon-Zeitstempel bleiben dunkle Anzeigen (Gerät). **Seit Dez. 2026 Schürzenblau statt Kupfer** (Wunsch des Besitzers „The-Bear-Blau“): Füllung `#2E62A8` mit weißer Schrift (6,1 : 1), als Text `#1F4E8C`, Logo-Band blau (`?v=2` an den Skin-Logos). Statusleiste Graphit `#2A2F33`.
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
  **Welten bis ins Detail (Abschnitt 48 · 17 in `skins.js`, Abschnitt 18 in `styles.css`, Dez. 2026, Blaupause des Besitzers mit Tokens/Bauteilen
  je Serie; Figuren, Logos, Namen, Zitate daraus bewusst weggelassen, z. B. kein Roboterkopf, keine Hauswappen, kein „Every Second Counts“):**
  Jahr 3000 = Hangar-Türkis `#58C4C3`, weiße Flächen mit 4-px-Konturen `#1A1A1A` (unregelmäßige Rundung `--j3Hand`), Comic Neue,
  Schriftzug gelb/schräg, Raumschiff oben rechts blinzelt beim Antippen (`.j3Ship`), Suche mit Raumschiff statt Lupe und Filzstift-Platzhalter,
  Knöpfe schief + Quetschen, Fotos hart mit Kontur, Aufkleber „Roboter-geprüft“, Uhr als Visier mit grünen Segmentziffern, gelbe Tab-Leiste,
  aktives Symbol ploppt hoch. Nordwall = Kriegstisch aus Schiefer `#121215` (Karte in den Stein geritzt), Leder `#23211C` mit Naht,
  Knochenweiß/Altgold `#C5A059`, Drachenfeuer-Rot `#8B0000` nur für „Kochen“, Cinzel Decorative, Text Baskerville, Schriftzug auf Eisenplakette,
  Suche als Rinne (Text glüht wie Erz), Knöpfe als Eisenplatten mit Nieten (senken sich), Bronzerahmen, Astrolabium mit Schwertzeiger,
  Holzleiste mit Metall-Einlagen. Zauberschule = Ledereinband `#1F1A17` um eine Pergamentseite mit Brandrändern, Tinte `#2B2118`, Gold, Purpur
  `#581845`, EB Garamond kursiv, eigene Notiz als Randnotiz in Federschrift (Caveat, `.zsMargin`), abgehakte Zutaten goldglühend durchgestrichen,
  Siegel als Wasserzeichen, Lesebändchen öffnet das Menü, Ecken-Knöpfe, Tinte fließt beim Tippen, Rauchwolke beim Timer-Ablauf, Lederleiste.
  Zwei Städte = Nachtblau `#0A0E1A` mit Pinselstruktur, Messinglinien symmetrisch, Schriftzug in Hextech-Cyan, Josefin Sans, Suche mit
  laufendem Stromimpuls, 45°-Knöpfe mit Funken, Zutaten als Bauplan (Raster, Messing), Zubereitung als Unterstadt (Sprühfarbe, Schweißnähte),
  Kristall-Uhr mit Energiebahnen bei Timer, Tab-Leiste auf goldener Stromschiene. Insel = Röhrenmonitor `#050505`, Bernstein, grüne Statuslampe,
  VT323 + Courier Prime, Titel flackert, Suche als beiger Plastikkasten mit Block-Cursor (`.inCaret`, per Canvas gemessen), Tasten rasten ein,
  „Protokoll n · Rationen“ auf der Rezeptseite, Fallblatt-Uhr unter 4 Min rot + blinkende Zahlenreihe. Akte = verregnetes Büro `#161513`
  (Regen am Fenster als Szene), Manila `#D4C5A9` mit Kaffeeflecken, Schreibmaschine schlägt ungleich an (`typeJitter()`, Buchstaben als `.tj`),
  Akten-Rot `#A93226`. Brigade bleibt hell (Wunsch des Besitzers), Überschriften SF fett in Versalien eng, LED `#FF2D55`, „Küche läuft“,
  Bon kommt beim Öffnen aus einem Druckerschlitz. Klänge (WebAudio, je Welt: Plopp, Eisenplatte, Papier, Elektroklick, Taste, Schreibmaschine,
  Bondrucker; Jahr 3000 eigener Roboter-Alarm über `KOCHBUCH_SKIN_RING`) nur mit Schalter „Klänge der Welten“ im Skin-Blatt
  (`kochbuch.ui.skinSound`, Standard aus). Haptik: `KOCHBUCH_UI.haptic` nutzt auf dem iPhone (kein `navigator.vibrate`) einen unsichtbaren
  `<input type="checkbox" switch>` (ab iOS 18). Selektoren in Abschnitt 18 mit `:not(._f)`; achtet auf die Spezifität von `:is()` (zählt das
  stärkste Glied) – zum Überschreiben notfalls `:not(#_x#_y)`.
  **Vorspann je Welt (Abschnitt 19 in `styles.css`, `playIntro()` in `skins.js`, Dez. 2026, Wunsch „markante Animation“):** Vollbild-Ebene
  `.skIntro`, einmal pro Sitzung auf der Startseite (`sessionStorage kochbuch.ui.intro`) und beim Wechsel auf den Skin (nach dem Schließen
  des Skin-Blatts); Antippen überspringt, „Bewegung reduzieren“ = keiner, Klang nur mit „Klänge der Welten“. Insel: „Die Insel“ in weißer
  Serife treibt in 3D aus dem Dunkel auf die Kamera zu und rauscht vorbei, Schnitt auf Schwarz (der alte CSS-Titel-Vorspann wurde von
  Abschnitt 18 überdeckt). Nordwall: Uhrwerk – Astrolabium dreht sich auf, Karte zeichnet sich, Türme steigen ruckweise. Zauberschule: Name
  schreibt sich mit Goldtinte, Funkenregen. Jahr 3000: Raumschiff kracht in die Werbetafel („Bonk“). Zwei Städte: Sprühfarbe, Kristall flammt
  auf, Ring. Akte: Blitze, Stempel „Fall offen“ knallt auf die Akte. Brigade: LED-Selbsttest 88:88:88, erster Bon. Im SVG mit
  `transform-box:view-box` liegt der Ursprung bei 0 0 des viewBox-Koordinatensystems (nicht in der Mitte).
  **Timer-Mitteilung:** wird nur beim Start und bei „+1 Min“ gesetzt; beim Laden einer Seite nur ergänzt, wenn sie für diesen Timer noch nie
  gezeigt wurde (`kochbuch.ui.timerNotified`) – iOS meldet jede ersetzte Mitteilung neu (Fehler: 10 Mitteilungen beim Herumtippen).
  **Feinschliff Bedienung (Abschnitt 21 in `styles.css`, Dez. 2026, Vorschläge nach Screenshots, vom Besitzer freigegeben):**
  Startseite ohne die Zeile „Was kochst du heute?“; die Uhr der Welten ist ohne Timer nur eine kleine Zeile (`.wcIdle`), mit Timer groß –
  so ist das Gericht des Tages beim Öffnen zu sehen. Timer überall gleich geschrieben („2:28“, ab 1 Std „1:02:28“) mit Endzeit
  („fertig um 21:30“ bzw. „bis 21:30“) und „Rezept · Schritt n“ (`timerLine()`). Ist der Timer auf der Startseite im Bild
  (`body.homeTimerVisible`, `markTimerVisible()`), blendet die „Kochen läuft“-Kapsel aus; die Kapsel ist einzeilig (48 px).
  Kochmodus in Zauberschule, Akte und Insel: Schritt, Vorbereitung und Zutaten in Systemschrift (Lesbarkeit am Herd), die Welt bleibt im
  Rahmen. Vorspann voll nur beim Skin-Wechsel und beim ersten Öffnen des Tages (`kochbuch.ui.introDay`), sonst Kurzfassung
  (vierfache Geschwindigkeit, ohne Klang). Skin-Auswahl mit echten Vorschaubildern (`assets/skins/<skin>.jpg`, `tools/skin-previews.js`;
  nach sichtbaren Änderungen an einem Skin neu erzeugen und `?v=` hochzählen). Insel-Titel flackert nur einmal beim Öffnen.
  Alle Seiten in den sieben Welten geprüft (Einkaufsliste, Wochenplan, Kategorien, Konto, Kühltruhe, Was koche ich?, Blätter):
  Jahr 3000 hatte dunkle Blätter mit dunkler Schrift (jetzt weiß mit Kontur), Akte einen unsichtbaren aktiven Reiter.
  Abschnitt 21 nutzt `:not(#_x#_y)` (ID-Gewicht), um über allen Skin-Abschnitten zu liegen.
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
