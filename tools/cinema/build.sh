#!/bin/sh
# Baut die Kino-Köpfe (Three.js + GSAP, nur benötigte Teile) zu je einer Datei in assets/cinema/.
# Einmalig: (cd tools/cinema && npm install). Danach: sh tools/cinema/build.sh
set -e
cd "$(dirname "$0")"
for f in nordwall; do
  npx esbuild "$f.js" --bundle --format=esm --minify --target=es2020,safari15 --legal-comments=eof --outfile="../../assets/cinema/$f.js"
done
ls -la ../../assets/cinema/
