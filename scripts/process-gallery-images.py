#!/usr/bin/env python3
"""Prepare gallery photos: strip screenshot chrome, flip selfies, light enhancement."""

from __future__ import annotations

from pathlib import Path

from PIL import Image, ImageEnhance, ImageFilter, ImageOps

IMAGES_DIR = Path(__file__).resolve().parent.parent / "public" / "images"
BLACK_THRESHOLD = 35


def is_dark_pixel(r: int, g: int, b: int) -> bool:
    return r <= BLACK_THRESHOLD and g <= BLACK_THRESHOLD and b <= BLACK_THRESHOLD


def extract_screenshot_photo(img: Image.Image) -> Image.Image:
    """Strip phone screenshot chrome and keep only the embedded photo."""
    rgb = img.convert("RGB")
    width, height = rgb.size

    top = next(
        (
            y
            for y in range(height)
            if sum(1 for x in range(0, width, 3) if is_dark_pixel(*rgb.getpixel((x, y)))) / (width // 3) < 0.15
        ),
        0,
    )
    bottom = next(
        (
            y
            for y in range(height - 1, -1, -1)
            if sum(1 for x in range(0, width, 3) if is_dark_pixel(*rgb.getpixel((x, y)))) / (width // 3) < 0.15
        ),
        height - 1,
    )

    photo = rgb.crop((0, top, width, bottom + 1))
    photo_width, photo_height = photo.size

    left = 0
    while left < photo_width:
        if any(not is_dark_pixel(*photo.getpixel((left, y))) for y in range(0, photo_height, 3)):
            break
        left += 1

    right = photo_width - 1
    while right > left:
        if any(not is_dark_pixel(*photo.getpixel((right, y))) for y in range(0, photo_height, 3)):
            break
        right -= 1

    return photo.crop((left, 0, right + 1, photo_height))


def enhance_photo(img: Image.Image) -> Image.Image:
    """Light polish for web display without over-processing."""
    rgb = img.convert("RGB")
    rgb = ImageEnhance.Contrast(rgb).enhance(1.06)
    rgb = ImageEnhance.Color(rgb).enhance(1.08)
    rgb = ImageEnhance.Brightness(rgb).enhance(1.02)
    rgb = rgb.filter(ImageFilter.UnsharpMask(radius=1.2, percent=90, threshold=3))
    return rgb


def save_jpeg(img: Image.Image, path: Path, *, quality: int = 92, max_width: int = 1400) -> None:
    rgb = img.convert("RGB")
    if rgb.width > max_width:
        ratio = max_width / rgb.width
        new_size = (max_width, max(1, round(rgb.height * ratio)))
        rgb = rgb.resize(new_size, Image.Resampling.LANCZOS)
    rgb.save(path, format="JPEG", quality=quality, optimize=True, progressive=True)


def process_gallery_office_happy(src: Path, dest: Path) -> None:
    img = Image.open(src)
    photo = extract_screenshot_photo(img)
    photo = enhance_photo(photo)
    save_jpeg(photo, dest)


def process_gallery_office_entrance(src: Path, dest: Path) -> None:
    img = Image.open(src).convert("RGB")
    img = enhance_photo(img)
    save_jpeg(img, dest)


def process_gallery_passports(src: Path, dest: Path) -> None:
    img = Image.open(src).convert("RGB")
    img = ImageOps.mirror(img)
    img = enhance_photo(img)
    save_jpeg(img, dest)


def main() -> None:
    repo = IMAGES_DIR.parent.parent
    pre_crop = repo / "scripts" / "gallery-sources"

    happy_src = pre_crop / "gallery-office-happy.png"
    entrance_src = pre_crop / "gallery-office-entrance.png"
    passports_src = pre_crop / "gallery-passports.png"

    if not happy_src.exists():
        raise SystemExit(f"Missing source image: {happy_src}")

    process_gallery_office_happy(happy_src, IMAGES_DIR / "gallery-office-happy.jpg")
    process_gallery_office_entrance(entrance_src, IMAGES_DIR / "gallery-office-entrance.jpg")
    process_gallery_passports(passports_src, IMAGES_DIR / "gallery-passports.jpg")

    for old in IMAGES_DIR.glob("gallery-*.png"):
        old.unlink()

    print("Processed gallery images (full framing, enhanced JPEG).")


if __name__ == "__main__":
    main()
