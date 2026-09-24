from PIL import Image, ImageOps
from pathlib import Path

src = Path(r"Drr sunita")
base = Path(r"public/images/dr-sunita")
portraits = base / "portraits"
surgery = base / "surgery"
portraits.mkdir(parents=True, exist_ok=True)
surgery.mkdir(parents=True, exist_ok=True)


def load(name: str) -> Image.Image:
    im = Image.open(src / name)
    im = ImageOps.exif_transpose(im)
    return im.convert("RGB")


def save(im: Image.Image, dest: Path, max_side: int = 2200, quality: int = 88) -> None:
    im = im.copy()
    im.thumbnail((max_side, max_side), Image.Resampling.LANCZOS)
    dest.parent.mkdir(parents=True, exist_ok=True)
    if dest.suffix.lower() == ".webp":
        im.save(dest, "WEBP", quality=quality, method=6)
    else:
        im.save(dest, "JPEG", quality=quality, optimize=True)
    print(f"{dest.as_posix()}  {im.size}  {dest.stat().st_size // 1024}KB")


# ---- All portraits ----
save(load("DSC05562.jpg"), portraits / "white-coat-crossed.jpg", 2000, 90)
save(load("DSC05566.jpg"), portraits / "white-coat-pockets.jpg", 2000, 90)
save(load("DSC05627.jpg"), portraits / "scrubs-stethoscope.jpg", 2000, 90)
save(load("DSC05634.jpg"), portraits / "scrubs-studio.jpg", 2000, 90)

# ---- All surgery / clinical stills ----
or_map = [
    ("DSC05694.JPG", "or-procedure-1.webp"),
    ("DSC05695.JPG", "or-procedure-2.webp"),
    ("DSC05696.JPG", "or-procedure-3.webp"),
    ("DSC05697.JPG", "or-procedure-4.webp"),
    ("DSC05701.JPG", "or-team-wide.webp"),
    ("DSC05702.JPG", "or-team-scrub.webp"),
    ("DSC05709.JPG", "or-close-incision.webp"),
    ("DSC05710.JPG", "or-team-focus.webp"),
    ("DSC05711.JPG", "or-close-hands.webp"),
    ("vlcsnap-2025-07-23-10h15m07s789.jpg", "team-spotlight.webp"),
    ("vlcsnap-2025-07-23-10h15m23s855.jpg", "surgeon-profile.webp"),
    ("vlcsnap-2025-07-23-10h16m06s188.jpg", "surgeon-focus.webp"),
    ("vlcsnap-2025-07-23-10h17m26s019.jpg", "ot-lights.webp"),
    ("vlcsnap-2025-07-23-10h17m59s600.jpg", "iv-drip.webp"),
    ("vlcsnap-2025-07-23-10h18m33s032.jpg", "iv-prep.webp"),
    ("vlcsnap-2025-07-23-10h19m50s991.jpg", "patient-hand.webp"),
    ("vlcsnap-2025-07-23-10h21m25s989.jpg", "anaesthesia-notes.webp"),
    ("vlcsnap-2025-07-23-10h22m30s784.jpg", "injection-bw.webp"),
    ("vlcsnap-2025-07-23-10h23m43s007.jpg", "instruments.webp"),
]
for src_name, out_name in or_map:
    save(load(src_name), surgery / out_name, 2200, 85)

# ---- Wire into existing site paths (related replacements only) ----
# Hero / about portraits
save(load("DSC05562.jpg"), Path("public/images/about/dr-sunita-ghanta.jpg"), 2000, 90)
save(load("DSC05566.jpg"), Path("public/images/doctor-hero.webp"), 2000, 90)
save(load("DSC05627.jpg"), Path("public/images/about/dr-sunita-scrubs.jpg"), 2000, 90)
save(load("DSC05634.jpg"), Path("public/images/about/dr-sunita-studio.jpg"), 2000, 90)
save(load("vlcsnap-2025-07-23-10h16m06s188.jpg"), Path("public/images/about/dr-sunita-surgery.webp"), 2000, 88)

# Surgical procedure imagery
save(load("DSC05702.JPG"), Path("public/images/procedures/body.webp"), 2200, 85)
save(load("DSC05701.JPG"), Path("public/images/services/service-surgical.webp"), 1600, 85)
save(load("vlcsnap-2025-07-23-10h16m06s188.jpg"), Path("public/images/procedures/facial.webp"), 2000, 85)
save(load("DSC05710.JPG"), Path("public/images/home/library-body.webp"), 2000, 85)
save(load("vlcsnap-2025-07-23-10h15m23s855.jpg"), Path("public/images/services/service-facial.webp"), 1600, 85)

# Clinical / procedural atmosphere (related to clinical care, not specialty-specific stock)
save(load("vlcsnap-2025-07-23-10h22m30s784.jpg"), Path("public/images/home/library-antiaging.webp"), 1800, 85)
save(load("vlcsnap-2025-07-23-10h18m33s032.jpg"), Path("public/images/procedures/anti-aging.webp"), 2000, 85)
save(load("vlcsnap-2025-07-23-10h23m43s007.jpg"), Path("public/images/home/library-injectables.webp"), 1800, 85)

print("ALL DONE")
