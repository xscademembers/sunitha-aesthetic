/** Unique Indian hero images for services that do NOT have a real video. */

const ITEM = (slug: string) => `/images/services/items/${slug}.webp`;

/** Category-level images for library / pricing panels (not per-service heroes). */
export const CATEGORY_IMAGES: Record<string, { src: string; alt: string }> = {
  "face-surgery": {
    src: "/images/services/themes/svc-face-markings.webp",
    alt: "Facial surgery planning consultation with an Indian patient",
  },
  "breast-surgery": {
    src: "/images/services/themes/svc-breast.webp",
    alt: "Breast surgery implant preparation in theatre",
  },
  "body-contouring-surgery": {
    src: "/images/services/themes/svc-body.webp",
    alt: "Body contouring consultation",
  },
  "mens-cosmetic-surgery": {
    src: "/images/services/themes/svc-mens.webp",
    alt: "Men’s cosmetic surgery consultation",
  },
  "hair-surgery": {
    src: "/images/services/themes/svc-hair.webp",
    alt: "Hair transplant and scalp consultation",
  },
  "reconstructive-surgery": {
    src: "/images/services/themes/svc-reconstructive.webp",
    alt: "Cleft and reconstructive surgery care",
  },
  injectables: {
    src: "/images/services/themes/svc-injectables.webp",
    alt: "Anti-wrinkle injectable treatment",
  },
  "skin-rejuvenation": {
    src: "/images/services/themes/svc-skin.webp",
    alt: "Skin rejuvenation treatment",
  },
  "laser-treatments": {
    src: "/images/services/themes/svc-laser.webp",
    alt: "Laser skin treatment",
  },
  "hair-treatments": {
    src: "/images/services/themes/svc-hair.webp",
    alt: "Non-surgical hair treatment consultation",
  },
  "anti-aging-aesthetic": {
    src: "/images/services/themes/svc-antiaging.webp",
    alt: "Non-surgical anti-aging aesthetic treatment",
  },
};

/**
 * Services that already have a real patient video / YouTube embed.
 * These intentionally have NO hero image entry.
 */
export const SERVICES_WITH_VIDEO = new Set([
  "nose-surgery",
  "eyelid-surgery",
  "ear-surgery",
  "breast-augmentation",
  "breast-reduction",
  "liposuction",
  "tummy-tuck",
  "mommy-makeover",
  "gynecomastia-treatment-in-visakhapatnam",
  "laser-hair-reduction",
  "co2-laser",
  "vampire-facelift",
  "morpheus8",
  "anti-wrinkle-injections",
  "dermal-fillers",
]);

/** One unique image per non-video service. */
export const SERVICE_ITEM_IMAGES: Record<string, string> = {
  // Face (video services omitted: nose, eyelid, ear)
  "revision-rhinoplasty": ITEM("revision-rhinoplasty"),
  "face-lift": ITEM("face-lift"),
  "mini-facelift": ITEM("mini-facelift"),
  "neck-lift": ITEM("neck-lift"),
  "brow-lift": ITEM("brow-lift"),
  "forehead-lift": ITEM("forehead-lift"),
  "chin-augmentation": ITEM("chin-augmentation"),
  "chin-reduction": ITEM("chin-reduction"),
  "double-chin-correction": ITEM("double-chin-correction"),
  "lip-lift": ITEM("lip-lift"),
  "lip-enhancement": ITEM("lip-enhancement"),
  "lip-reduction": ITEM("lip-reduction"),
  "facial-fat-grafting": ITEM("facial-fat-grafting"),
  "buccal-fat-removal": ITEM("buccal-fat-removal"),
  "dimple-creation-surgery": ITEM("dimple-creation-surgery"),

  // Breast (video omitted: augmentation, reduction)
  "breast-lift": ITEM("breast-lift"),
  "breast-reconstruction": ITEM("breast-reconstruction"),
  "breast-implant-revision": ITEM("breast-implant-revision"),
  "axillary-breast-surgery":
    "/images/case-studies/bilateral-axillary-breast-removal/hero.jpg",

  // Body (video omitted: liposuction, tummy-tuck, mommy-makeover)
  "hd-liposuction": ITEM("hd-liposuction"),
  "mini-tummy-tuck": ITEM("mini-tummy-tuck"),
  "body-contouring": ITEM("body-contouring"),
  "lower-body-sculpting": ITEM("lower-body-sculpting"),
  "upper-body-reduction": ITEM("upper-body-reduction"),
  "upper-body-augmentation": ITEM("upper-body-augmentation"),
  "arm-lift": ITEM("arm-lift"),
  "thigh-lift": ITEM("thigh-lift"),
  "buttock-lift": ITEM("buttock-lift"),
  "fat-transfer": ITEM("fat-transfer"),

  // Men's (video omitted: gynecomastia)
  "male-chest-contouring": ITEM("male-chest-contouring"),
  "male-chest-liposuction": ITEM("male-chest-liposuction"),

  // Hair surgery
  "hair-transplant": ITEM("hair-transplant"),
  "beard-transplant": ITEM("beard-transplant"),
  "eyebrow-transplant": ITEM("eyebrow-transplant"),

  // Reconstructive
  "cleft-lip-palate-surgery": ITEM("cleft-lip-palate-surgery"),
  "hand-surgery": ITEM("hand-surgery"),
  "trauma-reconstruction": ITEM("trauma-reconstruction"),
  "post-burn-reconstruction": ITEM("post-burn-reconstruction"),
  "scar-revision": ITEM("scar-revision"),
  "skin-grafting": ITEM("skin-grafting"),
  "flap-reconstruction": ITEM("flap-reconstruction"),
  "burn-contracture-release": ITEM("burn-contracture-release"),

  // Injectables (video omitted: anti-wrinkle, dermal-fillers)
  "lip-fillers": ITEM("lip-fillers"),
  "jawline-contouring": ITEM("jawline-contouring"),
  "chin-fillers": ITEM("chin-fillers"),
  "cheek-fillers": ITEM("cheek-fillers"),
  "facial-contouring": ITEM("facial-contouring"),
  "skin-boosters": ITEM("skin-boosters"),
  "power-shots": ITEM("power-shots"),

  // Skin (video omitted: morpheus8, vampire-facelift)
  "prp-skin-rejuvenation": ITEM("prp-skin-rejuvenation"),
  medifacials: ITEM("medifacials"),
  "chemical-peels": ITEM("chemical-peels"),
  microneedling: ITEM("microneedling"),
  "skin-lightening": ITEM("skin-lightening"),
  "skin-brightening": ITEM("skin-brightening"),
  "pigmentation-treatment": ITEM("pigmentation-treatment"),
  "acne-treatment": ITEM("acne-treatment"),
  "acne-scar-treatment": ITEM("acne-scar-treatment"),
  "scar-management": ITEM("scar-management"),
  "stretch-mark-treatment": ITEM("stretch-mark-treatment"),
  "open-pore-treatment": ITEM("open-pore-treatment"),

  // Laser (video omitted: laser-hair-reduction, co2-laser)
  "laser-skin-rejuvenation": ITEM("laser-skin-rejuvenation"),
  "laser-scar-reduction": ITEM("laser-scar-reduction"),

  // Hair treatments
  "prp-hair-treatment": ITEM("prp-hair-treatment"),
  "gfc-hair-treatment": ITEM("gfc-hair-treatment"),
  "hair-fall-treatment": ITEM("hair-fall-treatment"),
  "scalp-micropigmentation": ITEM("scalp-micropigmentation"),

  // Anti-aging
  "non-surgical-rhinoplasty": ITEM("non-surgical-rhinoplasty"),
  "double-chin-reduction": ITEM("double-chin-reduction"),
};
