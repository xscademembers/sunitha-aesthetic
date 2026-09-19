export interface Testimonial {
  name: string;
  quote: string;
  photo: string;
}

export interface Stat {
  label: string;
  value: string;
}

export interface ProcedureCard {
  title: string;
  description: string;
  /** Path under /public, e.g. "/icons/nose.svg" */
  icon: string;
  /** Service page slug — arrow links to /services/<slug>. Falls back to /contact when absent. */
  slug?: string;
}

export interface ProcedureSectionData {
  id: string;
  eyebrow: string;
  title: string;
  cards: ProcedureCard[];
  /** Composite circle image under /public */
  image: string;
  imageAlt: string;
  /** Which side the image sits on at desktop */
  imageSide: "left" | "right";
  /** Rendered image box size at 1440px (w, h) */
  imageSize: [number, number];
  /** True when the image itself is a plain photo needing a CSS circle crop */
  circleCrop?: boolean;
}

export interface ServiceSlide {
  title: string;
  image: string;
}

export interface JourneyStep {
  number: string;
  label: string;
  icon: string;
}

export interface WhyChooseCard {
  title: string;
  body: string;
  icon: string;
}

export interface FooterLinkGroup {
  heading: string;
  links: { label: string; href: string }[];
}

export const TREATMENT_OPTIONS = [
  "Face Surgery",
  "Breast Surgery",
  "Body Contouring Surgery",
  "Men's Cosmetic Surgery",
  "Hair Surgery",
  "Reconstructive Surgery",
  "Injectables",
  "Skin Rejuvenation",
  "Laser Treatments",
  "Hair Treatments",
  "Anti-Aging & Aesthetic Procedures",
] as const;

export const CONTACT = {
  email: "drsunitaghanta@gmail.com",
  phone: "+91 985633 7799",
  phoneHref: "tel:+919856337799",
  address:
    "Sunita Nursing Home, TPT Colony, Balaya Sastri Layout, Seethammadara, Visakhapatnam, Andhra Pradesh 530013",
} as const;
