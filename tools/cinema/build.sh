#!/bin/sh
# Baut die Kino-Köpfe (Three.js + GSAP, nur benötigte Teile) zu je einer Datei in assets/cinema/.
# Einmalig: (cd tools/cinema && npm install). Danach: sh tools/cinema/build.sh
set -e
cd "$(dirname "$0")"
rm -rf ../../assets/cinema
# Gemeinsamer Teil (three, gsap, core) landet in einer geteilten Datei: das iPhone lädt ihn nur einmal für alle Skins.
npx esbuild nordwall.js zauberschule.js jahr3000.js zweistaedte.js insel.js akte.js brigade.js --bundle --splitting --format=esm \
  --minify --target=es2020,safari15 --legal-comments=eof --chunk-names="core-[hash]" --outdir=../../assets/cinema
ls -la ../../assets/cinema/
