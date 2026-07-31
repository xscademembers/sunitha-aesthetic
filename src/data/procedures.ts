import type { ProcedureSectionData } from "@/types/content";

// Order follows the site's category order: Body → (Breast, Gynecomastia have
// dedicated service pages) → Reconstructive → Face → Skin → (Hair). imageSide
// alternates right/left so the layout keeps its zigzag rhythm.
export const PROCEDURE_SECTIONS: ProcedureSectionData[] = [
  {
    id: "body-procedures",
    eyebrow: "Surgical Procedure",
    title: "Body Procedures",
    imageSide: "right",
    image: "/images/procedures/body.webp",
    imageAlt: "Operation theater",
    imageSize: [455, 455],
    circleCrop: true,
    cards: [
      {
        title: "Liposuction",
        slug: "liposuction",
        icon: "/icons/liposuction.svg",
        description:
          "Enhance your body's natural contours and get your desired shape with liposuction.",
      },
      {
        title: "Tummy Tuck",
        slug: "tummy-tuck",
        icon: "/icons/tummy-tuck.svg",
        description: "Tighten and flatten your abdomen by removing excess skin and fat.",
      },
      {
        title: "Mommy Makeover",
        slug: "mommy-makeover",
        icon: "/icons/mommy-makeover.svg",
        description: "Restore your pre-pregnancy body with a combination of procedures.",
      },
      {
        title: "Lower Body Sculpting",
        slug: "lower-body-sculpting",
        icon: "/icons/lower-body-sculpting.svg",
        description:
          "Refine your body shape with contouring techniques designed for natural results.",
      },
    ],
  },
  {
    id: "reconstructive-surgeries",
    eyebrow: "Surgical Procedure",
    title: "Reconstructive Surgeries",
    imageSide: "left",
    image: "/images/procedures/reconstructive.webp",
    imageAlt: "Reconstructive surgery",
    imageSize: [681, 707],
    cards: [
      {
        title: "Chest Reconstruction",
        slug: "chest-reconstruction",
        icon: "/icons/chest-reconstruction.svg",
        description: "Restore chest shape and symmetry following mastectomy or injury.",
      },
      {
        title: "Cleft Lip & Palate Surgery",
        slug: "cleft-lip-palate-surgery",
        icon: "/icons/cleft-lip.svg",
        description: "Correct cleft lip and palate for improved appearance and function.",
      },
    ],
  },
  {
    id: "facial-procedures",
    eyebrow: "Surgical Procedure",
    title: "Facial Procedures",
    imageSide: "right",
    image: "/images/procedures/facial.webp",
    imageAlt: "Facial procedure planning",
    imageSize: [650, 650],
    cards: [
      {
        title: "Nose",
        slug: "nose-surgery",
        icon: "/icons/nose.svg",
        description: "We Enhance the shape, design and function of your nose with surgery.",
      },
      {
        title: "Eyelid",
        slug: "eyelid-surgery",
        icon: "/icons/eyelid.svg",
        description: "Also know as Blepharoplasty, rejuvenate your eyes by removing excess skin.",
      },
      {
        title: "Ear",
        slug: "ear-surgery",
        icon: "/icons/ear.svg",
        description: "Reshape and improve the appearance and design of your ears.",
      },
      {
        title: "Lip",
        slug: "lip-surgery",
        icon: "/icons/lip.svg",
        description: "Enhance the shape and fullness of your lips with lip procedures.",
      },
      {
        title: "Face lift",
        slug: "face-lift",
        icon: "/icons/face-lift.svg",
        description: "Revitalize your look by tightening and lifting facial skin.",
      },
      {
        title: "Double Chin Correction",
        slug: "double-chin-correction",
        icon: "/icons/double-chin.svg",
        description: "Eliminate excess fat and sculpt a defined jawline.",
      },
    ],
  },
  {
    id: "face-treatment",
    eyebrow: "Non - Surgical Procedure",
    title: "Face Treatment",
    imageSide: "left",
    image: "/images/procedures/face-treatment.webp",
    imageAlt: "Face treatment",
    imageSize: [506, 506],
    circleCrop: true,
    cards: [
      {
        title: "Lip Enhancement",
        slug: "lip-enhancement",
        icon: "/icons/lip-enhancement.svg",
        description: "Boost the fullness and shape of your lips with our non-surgical procedure.",
      },
      {
        title: "Rhinoplasty (Non Surgical)",
        slug: "non-surgical-rhinoplasty",
        icon: "/icons/rhinoplasty-ns.svg",
        description: "Refine and reshape your nose without surgery.",
      },
      {
        title: "Power Shots",
        slug: "power-shots",
        icon: "/icons/power-shots.svg",
        description: "Revitalize your skin with powerful, nutrient-rich injections.",
      },
    ],
  },
  {
    id: "morpheus8",
    eyebrow: "Non - Surgical Procedure",
    title: "Morpheus8",
    imageSide: "right",
    image: "/images/procedures/laser.webp",
    imageAlt: "Morpheus8 treatment",
    imageSize: [681, 699],
    cards: [
      {
        title: "Scar Treatment",
        slug: "morpheus8",
        icon: "/icons/morpheus8.svg",
        description:
          "Smooth acne scars and improve skin texture with Morpheus8 RF microneedling.",
      },
    ],
  },
  {
    id: "anti-aging",
    eyebrow: "Non - Surgical Procedure",
    title: "Anti-Aging",
    imageSide: "left",
    image: "/images/procedures/anti-aging.webp",
    imageAlt: "Anti-aging treatment",
    imageSize: [681, 620],
    cards: [
      {
        title: "Vampire Facelift",
        slug: "vampire-facelift",
        icon: "/icons/vampire-facelift.svg",
        description:
          "To Revitalize your face with Platelet-Rich Plasma therapy for a youthful glow.",
      },
      {
        title: "Morpheus8",
        slug: "morpheus8",
        icon: "/icons/morpheus8.svg",
        description: "To Boost Collagen and enhance skin texture with minimally invasive tech.",
      },
      {
        title: "Anti-Wrinkle Injection",
        slug: "anti-wrinkle-injections",
        icon: "/icons/anti-wrinkle.svg",
        description:
          "Smooth wrinkles and fine lines with targeted injections for a youthful look.",
      },
      {
        title: "Dermal Fillers",
        slug: "dermal-fillers",
        icon: "/icons/dermal-fillers.svg",
        description:
          "Restore volume and smooth wrinkles with injectable fillers for a rejuvenated look.",
      },
    ],
  },
];
