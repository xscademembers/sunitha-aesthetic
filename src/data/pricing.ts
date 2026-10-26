import { SERVICE_CATEGORIES, type ServiceKind } from "@/data/serviceCatalog";

/** Approximate INR→USD for display; final quotes are confirmed in clinic. */
export const INR_PER_USD = 83;

export type PriceUnit =
  | "procedure"
  | "per session"
  | "per unit"
  | "per ml"
  | "per graft"
  | "on consultation";

export interface ServicePrice {
  slug: string;
  title: string;
  icon: string;
  /** Inclusive range in INR. Omit when quote is consultation-only. */
  inrMin?: number;
  inrMax?: number;
  unit: PriceUnit;
  note?: string;
}

export interface PricingSection {
  id: string;
  kind: ServiceKind;
  title: string;
  image: string;
  imageAlt: string;
  items: ServicePrice[];
}

/**
 * Indicative price ranges for every service in the catalog.
 * Overlapping aesthetic procedures follow transparent min–max ranges
 * similar to standard Indian clinic pricing pages; reconstructive and
 * combo plans are marked for personalised quotes where needed.
 * Update values here when the clinic revises packages.
 */
const PRICE_BY_SLUG: Record<
  string,
  Pick<ServicePrice, "inrMin" | "inrMax" | "unit" | "note">
> = {
  // Face surgery
  "nose-surgery": { inrMin: 175_000, inrMax: 650_000, unit: "procedure" },
  "revision-rhinoplasty": { inrMin: 250_000, inrMax: 750_000, unit: "procedure" },
  "eyelid-surgery": { inrMin: 60_000, inrMax: 140_000, unit: "procedure", note: "Upper and/or lower lids" },
  "face-lift": { inrMin: 325_000, inrMax: 550_000, unit: "procedure" },
  "mini-facelift": { inrMin: 275_000, inrMax: 450_000, unit: "procedure" },
  "neck-lift": { inrMin: 200_000, inrMax: 450_000, unit: "procedure" },
  "brow-lift": { inrMin: 150_000, inrMax: 350_000, unit: "procedure" },
  "forehead-lift": { inrMin: 150_000, inrMax: 350_000, unit: "procedure" },
  "chin-augmentation": { inrMin: 110_000, inrMax: 375_000, unit: "procedure" },
  "chin-reduction": { inrMin: 150_000, inrMax: 400_000, unit: "procedure" },
  "double-chin-correction": { inrMin: 80_000, inrMax: 250_000, unit: "procedure" },
  "ear-surgery": { inrMin: 60_000, inrMax: 95_000, unit: "procedure" },
  "lip-lift": { inrMin: 50_000, inrMax: 120_000, unit: "procedure" },
  "lip-enhancement": { inrMin: 50_000, inrMax: 150_000, unit: "procedure" },
  "lip-reduction": { inrMin: 50_000, inrMax: 120_000, unit: "procedure" },
  "facial-fat-grafting": { inrMin: 50_000, inrMax: 120_000, unit: "procedure" },
  "buccal-fat-removal": { inrMin: 40_000, inrMax: 75_000, unit: "procedure" },
  "dimple-creation-surgery": { inrMin: 40_000, inrMax: 65_000, unit: "procedure" },

  // Breast surgery
  "breast-augmentation": { inrMin: 150_000, inrMax: 300_000, unit: "procedure" },
  "breast-lift": { inrMin: 175_000, inrMax: 650_000, unit: "procedure" },
  "breast-reduction": { inrMin: 175_000, inrMax: 600_000, unit: "procedure" },
  "breast-reconstruction": { unit: "on consultation", note: "Personalised after clinical assessment" },
  "breast-implant-revision": { inrMin: 175_000, inrMax: 450_000, unit: "procedure" },
  "axillary-breast-surgery": { inrMin: 50_000, inrMax: 150_000, unit: "procedure" },

  // Body contouring
  liposuction: { inrMin: 50_000, inrMax: 400_000, unit: "procedure", note: "Depends on number of areas" },
  "hd-liposuction": { inrMin: 80_000, inrMax: 350_000, unit: "procedure" },
  "tummy-tuck": { inrMin: 275_000, inrMax: 600_000, unit: "procedure" },
  "mini-tummy-tuck": { inrMin: 150_000, inrMax: 350_000, unit: "procedure" },
  "mommy-makeover": { unit: "on consultation", note: "Combination package quoted after consultation" },
  "lower-body-sculpting": { inrMin: 150_000, inrMax: 450_000, unit: "procedure" },
  "upper-body-reduction": { inrMin: 120_000, inrMax: 350_000, unit: "procedure" },
  "arm-lift": { inrMin: 150_000, inrMax: 355_000, unit: "procedure" },
  "thigh-lift": { inrMin: 175_000, inrMax: 400_000, unit: "procedure" },
  "buttock-lift": { inrMin: 175_000, inrMax: 450_000, unit: "procedure" },
  "fat-transfer": { inrMin: 120_000, inrMax: 250_000, unit: "procedure", note: "Breast / buttocks / face" },

  // Men's surgery
  "gynecomastia-treatment-in-visakhapatnam": {
    inrMin: 60_000,
    inrMax: 250_000,
    unit: "procedure",
  },
  "male-chest-contouring": { inrMin: 80_000, inrMax: 280_000, unit: "procedure" },
  "male-chest-liposuction": { inrMin: 50_000, inrMax: 250_000, unit: "procedure" },

  // Hair surgery
  "hair-transplant": { inrMin: 66, inrMax: 100, unit: "per graft" },
  "beard-transplant": { inrMin: 66, inrMax: 100, unit: "per graft" },
  "eyebrow-transplant": { inrMin: 80, inrMax: 120, unit: "per graft" },

  // Reconstructive — highly individual
  "cleft-lip-palate-surgery": { unit: "on consultation" },
  "hand-surgery": { unit: "on consultation" },
  "trauma-reconstruction": { unit: "on consultation" },
  "post-burn-reconstruction": { unit: "on consultation" },
  "scar-revision": { inrMin: 40_000, inrMax: 200_000, unit: "procedure" },
  "skin-grafting": { unit: "on consultation" },
  "flap-reconstruction": { unit: "on consultation" },
  "burn-contracture-release": { unit: "on consultation" },

  // Injectables
  "anti-wrinkle-injections": { inrMin: 400, inrMax: 500, unit: "per unit" },
  "dermal-fillers": { inrMin: 25_000, inrMax: 35_000, unit: "per ml" },
  "lip-fillers": { inrMin: 18_000, inrMax: 35_000, unit: "per ml" },
  "jawline-contouring": { inrMin: 35_000, inrMax: 80_000, unit: "procedure" },
  "chin-fillers": { inrMin: 20_000, inrMax: 45_000, unit: "procedure" },
  "cheek-fillers": { inrMin: 30_000, inrMax: 70_000, unit: "procedure" },
  "facial-contouring": { inrMin: 40_000, inrMax: 120_000, unit: "procedure" },
  "skin-boosters": { inrMin: 12_000, inrMax: 25_000, unit: "per session" },
  "power-shots": { inrMin: 8_000, inrMax: 18_000, unit: "per session" },

  // Skin rejuvenation
  morpheus8: { inrMin: 15_000, inrMax: 35_000, unit: "per session" },
  "vampire-facelift": { inrMin: 12_000, inrMax: 25_000, unit: "per session" },
  "prp-skin-rejuvenation": { inrMin: 8_000, inrMax: 18_000, unit: "per session" },
  medifacials: { inrMin: 3_000, inrMax: 8_000, unit: "per session" },
  "chemical-peels": { inrMin: 3_000, inrMax: 12_000, unit: "per session" },
  microneedling: { inrMin: 5_000, inrMax: 15_000, unit: "per session" },
  "skin-lightening": { inrMin: 5_000, inrMax: 20_000, unit: "per session" },
  "skin-brightening": { inrMin: 5_000, inrMax: 18_000, unit: "per session" },
  "pigmentation-treatment": { inrMin: 5_000, inrMax: 25_000, unit: "per session" },
  "acne-treatment": { inrMin: 3_000, inrMax: 15_000, unit: "per session" },
  "acne-scar-treatment": { inrMin: 8_000, inrMax: 30_000, unit: "per session" },
  "scar-management": { inrMin: 5_000, inrMax: 25_000, unit: "per session" },
  "stretch-mark-treatment": { inrMin: 8_000, inrMax: 25_000, unit: "per session" },
  "open-pore-treatment": { inrMin: 5_000, inrMax: 18_000, unit: "per session" },

  // Laser
  "laser-hair-reduction": { inrMin: 2_500, inrMax: 12_000, unit: "per session", note: "Varies by area" },
  "co2-laser": { inrMin: 15_000, inrMax: 45_000, unit: "per session" },
  "laser-skin-rejuvenation": { inrMin: 8_000, inrMax: 30_000, unit: "per session" },
  "laser-scar-reduction": { inrMin: 8_000, inrMax: 35_000, unit: "per session" },

  // Hair treatments
  "prp-hair-treatment": { inrMin: 5_000, inrMax: 12_000, unit: "per session" },
  "gfc-hair-treatment": { inrMin: 8_000, inrMax: 18_000, unit: "per session" },
  "hair-fall-treatment": { inrMin: 3_000, inrMax: 10_000, unit: "per session" },
  "scalp-micropigmentation": { inrMin: 40_000, inrMax: 120_000, unit: "procedure" },

  // Anti-aging aesthetic
  "non-surgical-rhinoplasty": { inrMin: 25_000, inrMax: 55_000, unit: "procedure" },
  "double-chin-reduction": { inrMin: 20_000, inrMax: 60_000, unit: "procedure" },
};

export const PRICING_SECTIONS: PricingSection[] = SERVICE_CATEGORIES.map((category) => ({
  id: category.id,
  kind: category.kind,
  title: category.title,
  image: category.image,
  imageAlt: category.imageAlt,
  items: category.items.map((item) => {
    const price = PRICE_BY_SLUG[item.slug] ?? { unit: "on consultation" as const };
    return {
      slug: item.slug,
      title: item.title,
      icon: item.icon,
      ...price,
    };
  }),
}));

export const CONSULTATION_FEE_INR = 500;

export function formatInr(amount: number) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);
}

export function formatUsd(amountInr: number) {
  const usd = amountInr / INR_PER_USD;
  const digits = usd < 10 ? 2 : 0;
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  }).format(usd);
}

export function formatPriceRange(
  item: ServicePrice,
  currency: "INR" | "USD",
): string {
  if (item.unit === "on consultation" || item.inrMin == null || item.inrMax == null) {
    return "On consultation";
  }

  const format = currency === "INR" ? formatInr : formatUsd;
  const min = format(item.inrMin);
  const max = format(item.inrMax);

  if (item.inrMin === item.inrMax) return min;

  const unitSuffix =
    item.unit === "procedure"
      ? ""
      : item.unit === "per unit"
        ? " / unit"
        : item.unit === "per ml"
          ? " / ml"
          : item.unit === "per graft"
            ? " / graft"
            : item.unit === "per session"
              ? " / session"
              : "";

  return `${min} – ${max}${unitSuffix}`;
}
