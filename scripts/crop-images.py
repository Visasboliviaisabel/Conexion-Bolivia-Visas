#!/usr/bin/env python3
"""Crop site photos: remove black screenshot bars and focus on upper-body framing."""

from __future__ import annotations

from pathlib import Path

from PIL import Image

IMAGES_DIR = Path(__file__).resolve().parent.parent / "public" / "images"
BLACK_THRESHOLD = 35


def is_dark_pixel(r: int, g: int, b: int) -> bool:
    return r <= BLACK_THRESHOLD and g <= BLACK_THRESHOLD and b <= BLACK_THRESHOLD


def trim_black_bars(img: Image.Image) -> Image.Image:
    """Remove letterbox/pillarbox black bars from screenshots."""
    rgb = img.convert("RGB")
    width, height = rgb.size
    pixels = rgb.load()

    left = 0
    while left < width:
        if any(not is_dark_pixel(*pixels[left, y]) for y in range(height)):
            break
        left += 1

    right = width - 1
    while right >= left:
        if any(not is_dark_pixel(*pixels[right, y]) for y in range(height)):
            break
        right -= 1

    top = 0
    while top < height:
        if any(not is_dark_pixel(*pixels[x, top]) for x in range(left, right + 1)):
            break
        top += 1

    bottom = height - 1
    while bottom >= top:
        if any(not is_dark_pixel(*pixels[x, bottom]) for x in range(left, right + 1)):
            break
        bottom -= 1

    if left >= right or top >= bottom:
        return img

    return rgb.crop((left, top, right + 1, bottom + 1))


def crop_upper_body(
    img: Image.Image,
    *,
    height_ratio: float,
    width_ratio: float = 1.0,
    vertical_anchor: float = 0.0,
    horizontal_anchor: float = 0.5,
) -> Image.Image:
    """Crop to a tighter frame centered on faces / upper body."""
    width, height = img.size
    crop_h = max(1, int(height * height_ratio))
    crop_w = max(1, int(width * width_ratio))

    max_left = max(0, width - crop_w)
    max_top = max(0, height - crop_h)

    left = int(max_left * horizontal_anchor)
    top = int(max_top * vertical_anchor)

    return img.crop((left, top, left + crop_w, top + crop_h))


def save_jpeg(img: Image.Image, path: Path, quality: int = 90) -> None:
    rgb = img.convert("RGB")
    rgb.save(path, format="JPEG", quality=quality, optimize=True)


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


def process_gallery_office_happy() -> None:
    src = IMAGES_DIR / "gallery-office-happy.png"
    img = Image.open(src)
    photo = extract_screenshot_photo(img)
    cropped = crop_upper_body(photo, height_ratio=0.58, width_ratio=0.94)
    save_jpeg(cropped, src)


def process_gallery_office_entrance() -> None:
    src = IMAGES_DIR / "gallery-office-entrance.png"
    img = Image.open(src).convert("RGB")
    cropped = crop_upper_body(img, height_ratio=0.62, width_ratio=0.88, vertical_anchor=0.0)
    save_jpeg(cropped, src)


def process_gallery_passports() -> None:
    src = IMAGES_DIR / "gallery-passports.png"
    img = Image.open(src).convert("RGB")
    cropped = crop_upper_body(img, height_ratio=0.78, width_ratio=0.82, vertical_anchor=0.08, horizontal_anchor=0.42)
    save_jpeg(cropped, src)


def process_team() -> None:
    src = IMAGES_DIR / "team.png"
    img = Image.open(src).convert("RGB")
    cropped = crop_upper_body(img, height_ratio=0.55, width_ratio=0.78, vertical_anchor=0.04, horizontal_anchor=0.5)
    save_jpeg(cropped, src)


def main() -> None:
    process_gallery_office_happy()
    process_gallery_office_entrance()
    process_gallery_passports()
    process_team()
    print("Cropped gallery and team images.")


if __name__ == "__main__":
    main()
