import type { ProcedureSectionData } from "@/types/content";
import { CATEGORY_IMAGES, SERVICE_ITEM_IMAGES } from "@/data/serviceImages";

export type ServiceKind = "surgical" | "nonsurgical";

export interface CatalogItem {
  slug: string;
  title: string;
  icon: string;
  description: string;
  /** Indian service-specific hero image under /public. */
  image?: string;
}

export interface CatalogCategory {
  id: string;
  kind: ServiceKind;
  menuLabel: string;
  title: string;
  /** Eyebrow on the inner service page, e.g. "Surgical Procedure — Face". */
  categoryLabel: string;
  eyebrow: string;
  image: string;
  imageAlt: string;
  imageSide: "left" | "right";
  imageSize: [number, number];
  circleCrop?: boolean;
  items: CatalogItem[];
}

const I = {
  nose: "/icons/nose.svg",
  eyelid: "/icons/eyelid.svg",
  ear: "/icons/ear.svg",
  lip: "/icons/lip.svg",
  faceLift: "/icons/face-lift.svg",
  doubleChin: "/icons/double-chin.svg",
  lipEnhance: "/icons/lip-enhancement.svg",
  rhinoNs: "/icons/rhinoplasty-ns.svg",
  chest: "/icons/chest-reconstruction.svg",
  lipo: "/icons/liposuction.svg",
  tummy: "/icons/tummy-tuck.svg",
  mommy: "/icons/mommy-makeover.svg",
  lower: "/icons/lower-body-sculpting.svg",
  cleft: "/icons/cleft-lip.svg",
  laserHair: "/icons/laser-hair.svg",
  laserTone: "/icons/laser-toning.svg",
  laserPig: "/icons/laser-pigmentation.svg",
  vampire: "/icons/vampire-facelift.svg",
  morpheus: "/icons/morpheus8.svg",
  botox: "/icons/anti-wrinkle.svg",
  fillers: "/icons/dermal-fillers.svg",
  power: "/icons/power-shots.svg",
} as const;

export const SERVICE_CATEGORIES: CatalogCategory[] = [
  {
    id: "face-surgery",
    kind: "surgical",
    menuLabel: "Face Surgery",
    title: "Face Surgery",
    categoryLabel: "Surgical Procedure — Face",
    eyebrow: "Surgical Procedure",
    image: CATEGORY_IMAGES["face-surgery"].src,
    imageAlt: CATEGORY_IMAGES["face-surgery"].alt,
    imageSide: "right",
    imageSize: [650, 650],
    circleCrop: true,
    items: [
      {
        slug: "nose-surgery",
        title: "Rhinoplasty (Nose Surgery)",
        icon: I.nose,
        description: "Refine the shape, profile and function of your nose with surgical rhinoplasty.",
      },
      {
        slug: "revision-rhinoplasty",
        title: "Revision Rhinoplasty",
        icon: I.nose,
        description: "Correct or refine the results of a previous nose surgery with a tailored revision plan.",
      },
      {
        slug: "eyelid-surgery",
        title: "Blepharoplasty (Eyelid Surgery)",
        icon: I.eyelid,
        description: "Rejuvenate tired eyes by removing excess eyelid skin and restoring a fresher look.",
      },
      {
        slug: "face-lift",
        title: "Facelift",
        icon: I.faceLift,
        description: "Lift and tighten sagging facial tissues for a natural, youthful contour.",
      },
      {
        slug: "mini-facelift",
        title: "Mini Facelift",
        icon: I.faceLift,
        description: "A focused lift for early jowls and lower-face laxity with a shorter recovery.",
      },
      {
        slug: "neck-lift",
        title: "Neck Lift",
        icon: I.faceLift,
        description: "Smooth banding and loose skin to restore a defined, elegant neckline.",
      },
      {
        slug: "brow-lift",
        title: "Brow Lift",
        icon: I.eyelid,
        description: "Elevate a heavy brow to open the eyes and refresh the upper face.",
      },
      {
        slug: "forehead-lift",
        title: "Forehead Lift",
        icon: I.eyelid,
        description: "Smooth forehead lines and lift the brow for a brighter, less tired expression.",
      },
      {
        slug: "chin-augmentation",
        title: "Chin Augmentation",
        icon: I.doubleChin,
        description: "Balance your profile by enhancing chin projection and facial proportion.",
      },
      {
        slug: "chin-reduction",
        title: "Chin Reduction",
        icon: I.doubleChin,
        description: "Refine an overly prominent chin for a softer, more harmonious profile.",
      },
      {
        slug: "double-chin-correction",
        title: "Double Chin Surgery",
        icon: I.doubleChin,
        description: "Remove excess fat and tighten the jawline for a sharper neck-chin angle.",
      },
      {
        slug: "ear-surgery",
        title: "Otoplasty (Ear Reshaping)",
        icon: I.ear,
        description: "Reshape prominent or uneven ears so they sit naturally closer to the head.",
      },
      {
        slug: "lip-lift",
        title: "Lip Lift",
        icon: I.lip,
        description: "Shorten the upper lip and enhance the cupid’s bow for a more defined smile.",
      },
      {
        slug: "lip-enhancement",
        title: "Lip Enhancement",
        icon: I.lipEnhance,
        description: "Surgically enhance lip shape and fullness for a balanced, lasting result.",
      },
      {
        slug: "lip-reduction",
        title: "Lip Reduction",
        icon: I.lip,
        description: "Reduce overly full lips while keeping a natural shape and smile.",
      },
      {
        slug: "facial-fat-grafting",
        title: "Facial Fat Grafting",
        icon: I.faceLift,
        description: "Restore youthful volume using your own fat for soft, natural facial contours.",
      },
      {
        slug: "buccal-fat-removal",
        title: "Buccal Fat Removal",
        icon: I.faceLift,
        description: "Slim round cheeks to reveal a more sculpted mid-face and cheekbone line.",
      },
      {
        slug: "dimple-creation-surgery",
        title: "Dimple Creation Surgery",
        icon: I.lip,
        description: "Create natural-looking cheek dimples with a precise, minimally invasive procedure.",
      },
    ],
  },
  {
    id: "breast-surgery",
    kind: "surgical",
    menuLabel: "Breast Surgery",
    title: "Breast Surgery",
    categoryLabel: "Surgical Procedure — Breast",
    eyebrow: "Surgical Procedure",
    image: CATEGORY_IMAGES["breast-surgery"].src,
    imageAlt: CATEGORY_IMAGES["breast-surgery"].alt,
    imageSide: "left",
    imageSize: [455, 455],
    circleCrop: true,
    items: [
      {
        slug: "breast-augmentation",
        title: "Breast Augmentation",
        icon: I.chest,
        description: "Enhance breast size and shape with implants chosen for your frame and goals.",
      },
      {
        slug: "breast-lift",
        title: "Breast Lift (Mastopexy)",
        icon: I.chest,
        description: "Lift and reshape sagging breasts for a firmer, more youthful position.",
      },
      {
        slug: "breast-reduction",
        title: "Breast Reduction",
        icon: I.chest,
        description: "Reduce volume and weight to relieve discomfort and create a balanced silhouette.",
      },
      {
        slug: "breast-reconstruction",
        title: "Breast Reconstruction",
        icon: I.chest,
        description: "Rebuild breast shape and symmetry after mastectomy, injury or previous surgery.",
      },
      {
        slug: "breast-implant-revision",
        title: "Breast Implant Revision",
        icon: I.chest,
        description: "Replace, reposition or remove implants to correct issues and refine your result.",
      },
      {
        slug: "axillary-breast-surgery",
        title: "Axillary Breast Surgery",
        icon: I.chest,
        description:
          "Remove accessory breast tissue under the arms for a smoother contour and greater comfort.",
      },
    ],
  },
  {
    id: "body-contouring-surgery",
    kind: "surgical",
    menuLabel: "Body Contouring",
    title: "Body Contouring Surgery",
    categoryLabel: "Surgical Procedure — Body",
    eyebrow: "Surgical Procedure",
    image: CATEGORY_IMAGES["body-contouring-surgery"].src,
    imageAlt: CATEGORY_IMAGES["body-contouring-surgery"].alt,
    imageSide: "right",
    imageSize: [455, 455],
    circleCrop: true,
    items: [
      {
        slug: "liposuction",
        title: "Liposuction",
        icon: I.lipo,
        description: "Remove stubborn fat deposits and refine body contours that diet cannot change.",
      },
      {
        slug: "hd-liposuction",
        title: "HD Liposuction",
        icon: I.lipo,
        description: "Sculpt athletic definition by selectively removing fat around natural muscle lines.",
      },
      {
        slug: "tummy-tuck",
        title: "Tummy Tuck (Abdominoplasty)",
        icon: I.tummy,
        description: "Tighten abdominal muscles and remove excess skin for a flatter, firmer midsection.",
      },
      {
        slug: "mini-tummy-tuck",
        title: "Mini Tummy Tuck",
        icon: I.tummy,
        description: "Target lower-belly laxity with a smaller incision and a shorter recovery.",
      },
      {
        slug: "mommy-makeover",
        title: "Mommy Makeover",
        icon: I.mommy,
        description: "Restore pre-pregnancy contours with a personalised combination of procedures.",
      },
      {
        slug: "lower-body-sculpting",
        title: "Lower Body Sculpting",
        icon: I.lower,
        description: "Refine the thighs, hips and buttocks for smoother, more defined lower-body contours.",
      },
      {
        slug: "upper-body-reduction",
        title: "Upper Body Reduction",
        icon: I.lipo,
        description: "Reduce excess fat and tissue in the upper body for a slimmer, more balanced frame.",
      },
      {
        slug: "arm-lift",
        title: "Arm Lift (Brachioplasty)",
        icon: I.lower,
        description: "Remove loose upper-arm skin and fat for a firmer, more toned arm contour.",
      },
      {
        slug: "thigh-lift",
        title: "Thigh Lift",
        icon: I.lower,
        description: "Tighten sagging inner or outer thigh skin after weight loss or ageing.",
      },
      {
        slug: "buttock-lift",
        title: "Buttock Lift",
        icon: I.lower,
        description: "Lift and smooth the buttocks for a rounder, more youthful lower-body shape.",
      },
      {
        slug: "fat-transfer",
        title: "Fat Transfer",
        icon: I.lipo,
        description: "Move your own fat to restore volume in the face, breasts, hips or buttocks.",
      },
    ],
  },
  {
    id: "mens-cosmetic-surgery",
    kind: "surgical",
    menuLabel: "Men's Surgery",
    title: "Men's Cosmetic Surgery",
    categoryLabel: "Surgical Procedure — Men's Cosmetic Surgery",
    eyebrow: "Surgical Procedure",
    image: CATEGORY_IMAGES["mens-cosmetic-surgery"].src,
    imageAlt: CATEGORY_IMAGES["mens-cosmetic-surgery"].alt,
    imageSide: "left",
    imageSize: [455, 455],
    circleCrop: true,
    items: [
      {
        slug: "gynecomastia-treatment-in-visakhapatnam",
        title: "Gynecomastia Surgery (Male Breast Reduction)",
        icon: I.chest,
        description: "Flatten and re-contour the male chest by removing excess gland and fat.",
      },
      {
        slug: "male-chest-contouring",
        title: "Male Chest Contouring",
        icon: I.chest,
        description: "Sculpt a firmer, more masculine chest with targeted fat and tissue refinement.",
      },
      {
        slug: "male-chest-liposuction",
        title: "Male Liposuction",
        icon: I.lipo,
        description: "Remove stubborn fat from the chest, abdomen or flanks for a leaner male physique.",
      },
    ],
  },
  {
    id: "hair-surgery",
    kind: "surgical",
    menuLabel: "Hair Surgery",
    title: "Hair Surgery",
    categoryLabel: "Surgical Procedure — Hair",
    eyebrow: "Surgical Procedure",
    image: CATEGORY_IMAGES["hair-surgery"].src,
    imageAlt: CATEGORY_IMAGES["hair-surgery"].alt,
    imageSide: "right",
    imageSize: [650, 650],
    circleCrop: true,
    items: [
      {
        slug: "hair-transplant",
        title: "Hair Transplant",
        icon: I.laserHair,
        description: "Restore a natural hairline and density with follicular unit transplant techniques.",
      },
      {
        slug: "beard-transplant",
        title: "Beard Transplant",
        icon: I.laserHair,
        description: "Fill patchy or sparse facial hair for a fuller, well-defined beard.",
      },
      {
        slug: "eyebrow-transplant",
        title: "Eyebrow Transplant",
        icon: I.laserHair,
        description: "Rebuild thin or over-plucked brows with naturally placed hair grafts.",
      },
    ],
  },
  {
    id: "reconstructive-surgery",
    kind: "surgical",
    menuLabel: "Reconstructive",
    title: "Reconstructive Surgery",
    categoryLabel: "Reconstructive Surgery",
    eyebrow: "Surgical Procedure",
    image: CATEGORY_IMAGES["reconstructive-surgery"].src,
    imageAlt: CATEGORY_IMAGES["reconstructive-surgery"].alt,
    imageSide: "left",
    imageSize: [650, 650],
    circleCrop: true,
    items: [
      {
        slug: "cleft-lip-palate-surgery",
        title: "Cleft Lip & Palate Surgery",
        icon: I.cleft,
        description: "Repair cleft lip and palate to improve appearance, speech and feeding function.",
      },
      {
        slug: "hand-surgery",
        title: "Hand Surgery",
        icon: I.cleft,
        description: "Restore hand form and function after injury, deformity or previous surgery.",
      },
      {
        slug: "trauma-reconstruction",
        title: "Trauma Reconstruction",
        icon: I.cleft,
        description: "Rebuild damaged tissues after accidents to restore both appearance and function.",
      },
      {
        slug: "post-burn-reconstruction",
        title: "Post-Burn Reconstruction",
        icon: I.cleft,
        description: "Release tight scars and restore mobility and appearance after burn injury.",
      },
      {
        slug: "scar-revision",
        title: "Scar Revision Surgery",
        icon: I.cleft,
        description: "Improve the appearance of prominent scars so they blend more naturally with the skin.",
      },
      {
        slug: "skin-grafting",
        title: "Skin Grafting",
        icon: I.cleft,
        description: "Cover wounds or reconstructed areas with healthy skin for better healing and contour.",
      },
      {
        slug: "flap-reconstruction",
        title: "Flap Reconstruction",
        icon: I.cleft,
        description: "Transfer tissue with its own blood supply to rebuild complex defects.",
      },
      {
        slug: "burn-contracture-release",
        title: "Burn Contracture Release",
        icon: I.cleft,
        description: "Release tight burn scars that limit movement and restore a more natural contour.",
      },
    ],
  },
  {
    id: "injectables",
    kind: "nonsurgical",
    menuLabel: "Injectables",
    title: "Injectables",
    categoryLabel: "Non-Surgical — Injectables",
    eyebrow: "Non-Surgical Procedure",
    image: CATEGORY_IMAGES.injectables.src,
    imageAlt: CATEGORY_IMAGES.injectables.alt,
    imageSide: "right",
    imageSize: [650, 650],
    circleCrop: true,
    items: [
      {
        slug: "anti-wrinkle-injections",
        title: "Anti-Wrinkle Injections (Botox)",
        icon: I.botox,
        description: "Smooth frown lines, crow’s feet and forehead creases with targeted injections.",
      },
      {
        slug: "dermal-fillers",
        title: "Dermal Fillers",
        icon: I.fillers,
        description: "Restore volume and soften folds for a refreshed, natural-looking result.",
      },
      {
        slug: "lip-fillers",
        title: "Lip Fillers",
        icon: I.lipEnhance,
        description: "Add shape, hydration and balanced fullness to the lips without surgery.",
      },
      {
        slug: "jawline-contouring",
        title: "Jawline Contouring",
        icon: I.fillers,
        description: "Define the jawline with fillers for a sharper, more structured lower face.",
      },
      {
        slug: "chin-fillers",
        title: "Chin Fillers",
        icon: I.doubleChin,
        description: "Enhance chin projection and profile balance with precise filler placement.",
      },
      {
        slug: "cheek-fillers",
        title: "Cheek Fillers",
        icon: I.fillers,
        description: "Lift and restore mid-face volume for higher, more youthful cheeks.",
      },
      {
        slug: "facial-contouring",
        title: "Facial Contouring",
        icon: I.fillers,
        description: "Sculpt overall facial proportions with a customised injectable plan.",
      },
      {
        slug: "skin-boosters",
        title: "Skin Boosters",
        icon: I.power,
        description: "Hydrate and improve skin quality from within for a healthier, dewy glow.",
      },
      {
        slug: "power-shots",
        title: "Power Shots",
        icon: I.power,
        description: "Revitalise dull skin with nutrient-rich injections for brightness and bounce.",
      },
    ],
  },
  {
    id: "skin-rejuvenation",
    kind: "nonsurgical",
    menuLabel: "Skin Rejuvenation",
    title: "Skin Rejuvenation",
    categoryLabel: "Non-Surgical — Skin Rejuvenation",
    eyebrow: "Non-Surgical Procedure",
    image: CATEGORY_IMAGES["skin-rejuvenation"].src,
    imageAlt: CATEGORY_IMAGES["skin-rejuvenation"].alt,
    imageSide: "left",
    imageSize: [506, 506],
    circleCrop: true,
    items: [
      {
        slug: "morpheus8",
        title: "Morpheus8 (MNRF)",
        icon: I.morpheus,
        description: "Tighten skin and improve texture with RF microneedling that stimulates collagen.",
      },
      {
        slug: "vampire-facelift",
        title: "Vampire Facelift (PRP)",
        icon: I.vampire,
        description: "Use your own platelet-rich plasma to refresh tone, texture and facial glow.",
      },
      {
        slug: "prp-skin-rejuvenation",
        title: "PRP Skin Rejuvenation",
        icon: I.vampire,
        description: "Improve dull, tired skin with PRP to support collagen and a healthier complexion.",
      },
      {
        slug: "medifacials",
        title: "Medifacials",
        icon: I.morpheus,
        description: "Clinical facials tailored to acne, pigmentation, dryness or early ageing.",
      },
      {
        slug: "chemical-peels",
        title: "Chemical Peels",
        icon: I.laserTone,
        description: "Exfoliate damaged layers to reveal brighter, smoother, more even-toned skin.",
      },
      {
        slug: "microneedling",
        title: "Microneedling",
        icon: I.morpheus,
        description: "Stimulate collagen to soften scars, pores and overall skin texture.",
      },
      {
        slug: "skin-lightening",
        title: "Skin Lightening",
        icon: I.laserPig,
        description: "Gradually even out darker patches for a more uniform complexion.",
      },
      {
        slug: "skin-brightening",
        title: "Skin Brightening",
        icon: I.laserPig,
        description: "Restore radiance to dull skin with a customised clinical brightening plan.",
      },
      {
        slug: "pigmentation-treatment",
        title: "Pigmentation Treatment",
        icon: I.laserPig,
        description: "Target melasma, sun spots and uneven tone with a personalised protocol.",
      },
      {
        slug: "acne-treatment",
        title: "Acne Treatment",
        icon: I.morpheus,
        description: "Calm active acne and prevent new breakouts with medical-grade skin care.",
      },
      {
        slug: "acne-scar-treatment",
        title: "Acne Scar Treatment",
        icon: I.morpheus,
        description: "Soften pitted and textured acne scars for smoother-looking skin.",
      },
      {
        slug: "scar-management",
        title: "Scar Management",
        icon: I.cleft,
        description: "Improve the colour, texture and flexibility of new or mature scars.",
      },
      {
        slug: "stretch-mark-treatment",
        title: "Stretch Mark Treatment",
        icon: I.morpheus,
        description: "Reduce the appearance of stretch marks on the body with targeted therapies.",
      },
      {
        slug: "open-pore-treatment",
        title: "Open Pore Treatment",
        icon: I.morpheus,
        description: "Minimise enlarged pores and refine skin texture for a smoother finish.",
      },
    ],
  },
  {
    id: "laser-treatments",
    kind: "nonsurgical",
    menuLabel: "Laser Treatments",
    title: "Laser Treatments",
    categoryLabel: "Non-Surgical — Laser",
    eyebrow: "Non-Surgical Procedure",
    image: CATEGORY_IMAGES["laser-treatments"].src,
    imageAlt: CATEGORY_IMAGES["laser-treatments"].alt,
    imageSide: "right",
    imageSize: [650, 650],
    circleCrop: true,
    items: [
      {
        slug: "laser-hair-reduction",
        title: "Laser Hair Reduction",
        icon: I.laserHair,
        description: "Permanently reduce unwanted hair with medical-grade laser sessions.",
      },
      {
        slug: "co2-laser",
        title: "CO2 Fractional Laser",
        icon: I.laserTone,
        description: "Resurface scars, wrinkles and sun damage with fractional CO2 laser.",
      },
      {
        slug: "laser-skin-rejuvenation",
        title: "Laser Skin Rejuvenation",
        icon: I.laserTone,
        description: "Improve tone, texture and glow with targeted laser skin treatments.",
      },
      {
        slug: "laser-scar-reduction",
        title: "Laser Scar Reduction",
        icon: I.laserPig,
        description: "Soften surgical, acne or injury scars with laser-based scar remodelling.",
      },
    ],
  },
  {
    id: "hair-treatments",
    kind: "nonsurgical",
    menuLabel: "Hair Treatments",
    title: "Hair Treatments",
    categoryLabel: "Non-Surgical — Hair Treatments",
    eyebrow: "Non-Surgical Procedure",
    image: CATEGORY_IMAGES["hair-treatments"].src,
    imageAlt: CATEGORY_IMAGES["hair-treatments"].alt,
    imageSide: "left",
    imageSize: [650, 650],
    circleCrop: true,
    items: [
      {
        slug: "prp-hair-treatment",
        title: "PRP Hair Treatment",
        icon: I.laserHair,
        description: "Stimulate thinning hair with platelet-rich plasma to support denser growth.",
      },
      {
        slug: "gfc-hair-treatment",
        title: "GFC Hair Treatment",
        icon: I.laserHair,
        description: "Use growth factor concentrate to strengthen follicles and reduce hair fall.",
      },
      {
        slug: "hair-fall-treatment",
        title: "Hair Fall Treatment",
        icon: I.laserHair,
        description: "Diagnose the cause of hair fall and build a medical plan to slow shedding.",
      },
      {
        slug: "scalp-micropigmentation",
        title: "Scalp Micropigmentation",
        icon: I.laserHair,
        description: "Create the look of denser hair with precise scalp pigmentation.",
      },
    ],
  },
  {
    id: "anti-aging-aesthetic",
    kind: "nonsurgical",
    menuLabel: "Anti-Aging",
    title: "Anti-Aging & Aesthetic Procedures",
    categoryLabel: "Non-Surgical — Anti-Aging",
    eyebrow: "Non-Surgical Procedure",
    image: CATEGORY_IMAGES["anti-aging-aesthetic"].src,
    imageAlt: CATEGORY_IMAGES["anti-aging-aesthetic"].alt,
    imageSide: "right",
    imageSize: [650, 650],
    circleCrop: true,
    items: [
      {
        slug: "non-surgical-rhinoplasty",
        title: "Non-Surgical Rhinoplasty (Liquid Rhinoplasty)",
        icon: I.rhinoNs,
        description: "Refine nasal shape and smooth small irregularities without surgery.",
      },
      {
        slug: "double-chin-reduction",
        title: "Double Chin Reduction (Non-Surgical)",
        icon: I.doubleChin,
        description: "Reduce submental fullness and sharpen the jawline without an operation.",
      },
    ],
  },
];

export const CATALOG_ITEMS = SERVICE_CATEGORIES.flatMap((category) =>
  category.items.map((item) => ({
    ...item,
    // Only attach a unique item image — never reuse the category image for service heroes.
    image: SERVICE_ITEM_IMAGES[item.slug],
    category,
  })),
);

export function getCatalogItem(slug: string) {
  return CATALOG_ITEMS.find((item) => item.slug === slug);
}

export const PROCEDURE_SECTIONS: ProcedureSectionData[] = SERVICE_CATEGORIES.map(
  (category) => ({
    id: category.id,
    eyebrow: category.eyebrow,
    title: category.title,
    imageSide: category.imageSide,
    image: category.image,
    imageAlt: category.imageAlt,
    imageSize: category.imageSize,
    circleCrop: category.circleCrop,
    cards: category.items.map((item) => ({
      title: item.title,
      slug: item.slug,
      icon: item.icon,
      description: item.description,
    })),
  }),
);
