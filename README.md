# Tobis Kochbuch

Persönliches Online-Kochbuch als statische Jekyll-Seite, gehostet auf **Cloudflare Workers** (Static Assets):
<https://kochbuch.tobis.workers.dev/>.
Rezepte liegen als Markdown in `_recipes/`, Bilder in `recipes/images/`. Favoriten, Einkaufsliste und
Kühltruhe werden nur im Browser gespeichert (localStorage).

## Lokal starten

```sh
bundle install
LANG=C.UTF-8 bundle exec jekyll serve
```

Danach unter <http://localhost:4000> öffnen.

## Auf Cloudflare veröffentlichen

Einmalig im Cloudflare-Dashboard:

1. **Workers & Pages → Create → Import a repository** und dieses Repository auswählen.
2. Einstellungen:
   - **Build command:** `LANG=C.UTF-8 bundle exec jekyll build`
   - **Deploy command:** `npx wrangler deploy` (Standard)
3. Speichern. Ab jetzt baut und veröffentlicht Cloudflare die Seite bei jedem Push automatisch.

Die Konfiguration steht in `wrangler.jsonc` (Ausgabeordner `_site`, eigene 404-Seite).
Cache-Header für Bilder und Assets stehen in `_headers`.

Alternativ von einem Rechner mit Cloudflare-Login:

```sh
LANG=C.UTF-8 bundle exec jekyll build
npx wrangler deploy
```

## Profil, Sync und Rezept-Upload einrichten

Der Worker (`worker/`) braucht zwei Secrets. Im Cloudflare-Dashboard: **Workers & Pages → kochbuch → Settings →
Variables and Secrets → Add**, Typ **Secret**:

- `SETUP_CODE`: ein langer, zufälliger Code. Er wird nur einmal für die erste Einrichtung auf `/konto/` gebraucht.
- `GITHUB_TOKEN`: ein Fine-grained Token von GitHub (Settings → Developer settings → Fine-grained tokens):
  nur Repository `tbsxxl/Kochen`, Berechtigung **Contents: Read and write**.

Danach auf dem iPhone **Mehr → Profil & Sync** öffnen, Name und Einrichtungscode eingeben, mit Face ID bestätigen.
Neue Rezepte über **Mehr → Rezept hochladen**. Sie sind nach ca. 2 Minuten online.

## Daten von der alten GitHub-Pages-Version übernehmen

Browserdaten hängen an der Adresse und ziehen nicht automatisch mit um.

1. Auf der alten Seite: **Mehr → Backup / Import → Backup erzeugen** und den Text kopieren.
2. Auf der neuen Seite: **Mehr → Backup / Import**, Text einfügen, **Mergen**.

Alte Pfade (`/Kochen/…`) werden beim Import automatisch angepasst.
