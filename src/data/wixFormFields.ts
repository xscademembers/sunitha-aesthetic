/**
 * Exact field definitions from the live Wix forms on this clinic site.
 * Keep in sync with Wix Studio → Forms.
 */

/** Wix "Book Appointment" form */
export const WIX_BOOK_FORM = {
  formId: "8da20f6c-159d-4ffb-9df3-27107c1e3a2a",
  fields: {
    firstName: { target: "first_name_e338", label: "First name", required: true },
    lastName: { target: "last_name_5cb2", label: "Last name", required: false },
    phone: { target: "phone_0157", label: "Phone", required: true, format: "PHONE" as const },
    treatmentOption: {
      target: "select_treatment_option",
      label: "Select Treatment Option",
      required: true,
    },
  },
} as const;

/** Category → specific-treatment field (shown only when that category is selected, same as Wix rules) */
export const WIX_TREATMENT_CATEGORIES = [
  {
    value: "Breast Surgeries",
    target: "breast_surgeries",
    label: "Breast Surgeries",
    options: ["Breast Augmentation", "Breast Reduction", "Breast Lift", "Gynecomastia"],
  },
  {
    value: "Face Surgeries",
    target: "face_surgeries",
    label: "Face Surgeries",
    options: [
      "Nose Surgery",
      "EyeLid Surgery",
      "Ear Surgery",
      "Lip Surgery",
      "Face Lift",
      "Double Chin Correction",
    ],
  },
  {
    value: "Body Procedures",
    target: "body_procedures",
    label: "Body Procedures",
    options: ["Liposuction", "Tummy Tuck", "Mommy Makeover", "Buttock Augmentation"],
  },
  {
    value: "Face Treatments",
    target: "face_treatment_surgeries",
    label: "Face Treatments",
    options: ["Lip Enhancement", "Rhinoplasty", "Power Shots"],
  },
  {
    value: "Hair Treatments",
    target: "hair_treatments",
    label: "Hair Treatments",
    options: ["HairTransplant", "PRP Treatment", "GFC Treatment", "Mesotherapy"],
  },
  {
    value: "Laser Treatments",
    target: "laser_treatment",
    label: "Laser Treatments",
    options: ["Laser Hair Reduction", "LaserToning", "Laser for Pigmentation"],
  },
  {
    value: "Anti-Aging",
    target: "anti_aging",
    label: "Anti-Aging",
    options: ["Vampire Facelift", "Morpheus 8", "Anti - Wrinkle Injection", "Dermal Fillers"],
  },
  {
    value: "Reconstructive Surgeries",
    target: "reconstructive_surgeries",
    label: "Reconstructive Surgeries",
    options: ["Breast Reconstruction", "Cleft Lip & Palete Surgery"],
  },
  {
    value: "Genital Surgeries",
    target: "genital_surgeries",
    label: "Genital Surgeries",
    options: ["Vaginal Rejuvenation", "Labia Plasty"],
  },
] as const;

export type WixTreatmentCategoryValue = (typeof WIX_TREATMENT_CATEGORIES)[number]["value"];

export function getTreatmentCategory(value: string) {
  return WIX_TREATMENT_CATEGORIES.find((c) => c.value === value);
}

/** Wix "Contact us" form */
export const WIX_CONTACT_FORM = {
  formId: "0291c7e1-ca25-4f8a-8f42-7efd3736424d",
  fields: {
    firstName: { target: "first_name_abae", label: "First name", required: false },
    lastName: { target: "last_name_d97c", label: "Last name", required: false },
    email: { target: "email_5139", label: "Email", required: true, format: "EMAIL" as const },
    message: { target: "long_answer_3524", label: "Message", required: true },
    phone: { target: "phone_4c77", label: "Phone", required: true, format: "PHONE" as const },
  },
} as const;

/** Matches Wix Forms PHONE format: enough digits, allows + ( ) - spaces */
export function isValidWixPhone(value: string): boolean {
  const trimmed = value.trim();
  if (!trimmed) return false;
  if (!/^[+]?[\d\s().-]{7,25}$/.test(trimmed)) return false;
  const digits = trimmed.replace(/\D/g, "");
  return digits.length >= 7 && digits.length <= 15;
}

/** Matches Wix Forms EMAIL format */
export function isValidWixEmail(value: string): boolean {
  const trimmed = value.trim();
  if (!trimmed) return false;
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed);
}
