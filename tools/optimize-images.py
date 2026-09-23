#!/usr/bin/env python3
"""Rezeptbilder vorbereiten: Wasserzeichen-Rand abschneiden und WebP-Varianten erzeugen.

    pip install pillow
    python3 tools/optimize-images.py recipes/images/neues-bild.jpg [...]
    python3 tools/optimize-images.py --webp-only      # nur fehlende WebP-Dateien für alle Bilder

Danach bei geänderten (nicht neuen) Bildern image_version in _config.yml hochzählen.
"""
import os
import sys

from PIL import Image

IMAGES = "recipes/images"
CROP_RIGHT = 0.07  # rechte 7 % entfernen (KI-Wasserzeichen unten rechts)


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
    im.convert("RGB").crop((0, 0, w - round(w * CROP_RIGHT), h)).save(
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
