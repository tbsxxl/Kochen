#!/usr/bin/env python3
"""Rezeptbilder vorbereiten: links und rechts je 7 % abschneiden (Wasserzeichen weg, Motiv mittig) und WebP-Varianten erzeugen.

    pip install pillow
    python3 tools/optimize-images.py recipes/images/neues-bild.jpg [...]
    python3 tools/optimize-images.py --webp-only      # nur fehlende WebP-Dateien für alle Bilder

Danach bei geänderten (nicht neuen) Bildern image_version in _config.yml hochzählen.
"""
import os
import sys

from PIL import Image

IMAGES = "recipes/images"
CROP = 0.07  # je 7 % links und rechts entfernen (KI-Wasserzeichen unten rechts, Motiv bleibt mittig)


def webp_variants(path):
    stem = os.path.splitext(path)[0]
    im = Image.open(path).convert("RGB")
    w, h = im.size
    for width in (480, 960):
        tw = min(width, w)
        out = im if tw == w else im.resize((tw, round(h * tw / w)), Image.LANCZOS)
        out.save(f"{stem}-{width}.webp", "WEBP", quality=78, method=6)


def crop(path):
    im = Image.open(path)
    im.load()
    w, h = im.size
    c = round(w * CROP)
    im.convert("RGB").crop((c, 0, w - c, h)).save(
        path, "JPEG", quality=82, optimize=True, progressive=True
    )


def main(args):
    if args == ["--webp-only"]:
        for f in sorted(os.listdir(IMAGES)):
            p = os.path.join(IMAGES, f)
            if f.lower().endswith((".jpg", ".jpeg", ".png")) and not os.path.exists(os.path.splitext(p)[0] + "-480.webp"):
                webp_variants(p)
                print("webp:", p)
        return
    for p in args:
        crop(p)
        webp_variants(p)
        print("ok:", p)


if __name__ == "__main__":
    main(sys.argv[1:])
