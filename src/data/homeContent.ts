import { SERVICE_CATEGORIES } from "@/data/serviceCatalog";
import { CONTACT } from "@/types/content";

export type TreatmentItem = { name: string; href: string };
export type TreatmentGroup = {
  id: string;
  name: string;
  href: string;
  count: number;
  countLabel: string;
  image: string;
  imageAlt: string;
  items: TreatmentItem[];
};

const LIBRARY_IMAGES: Record<string, { src: string; alt: string }> = {
  "face-surgery": {
    src: "/images/services/service-facial.webp",
    alt: "Facial surgery consultation",
  },
  "breast-surgery": {
    src: "/images/services/service-breast.webp",
    alt: "Breast surgery consultation",
  },
  "body-contouring-surgery": {
    src: "/images/home/library-body.webp",
    alt: "Body contouring consultation",
  },
  "mens-cosmetic-surgery": {
    src: "/images/services/service-gynecomastia.webp",
    alt: "Men’s cosmetic surgery consultation",
  },
  "hair-surgery": {
    src: "/images/services/service-hair.webp",
    alt: "Hair surgery consultation",
  },
  "reconstructive-surgery": {
    src: "/images/home/library-reconstructive.webp",
    alt: "Reconstructive surgery consultation",
  },
  injectables: {
    src: "/images/home/library-injectables.webp",
    alt: "Injectable aesthetic treatment",
  },
  "skin-rejuvenation": {
    src: "/images/services/service-nonsurgical.webp",
    alt: "Skin rejuvenation treatment",
  },
  "laser-treatments": {
    src: "/images/home/library-laser.webp",
    alt: "Laser skin treatment",
  },
  "hair-treatments": {
    src: "/images/services/service-hair.webp",
    alt: "Hair treatment consultation",
  },
  "anti-aging-aesthetic": {
    src: "/images/home/library-antiaging.webp",
    alt: "Anti-aging aesthetic care",
  },
};

function buildGroups(kind: "surgical" | "nonsurgical"): TreatmentGroup[] {
  return SERVICE_CATEGORIES.filter((category) => category.kind === kind).map((category) => ({
    id: category.id,
    name: category.title,
    href: `#${category.id}`,
    count: category.items.length,
    countLabel: `${category.items.length} treatments`,
    image: LIBRARY_IMAGES[category.id]?.src ?? category.image,
    imageAlt: LIBRARY_IMAGES[category.id]?.alt ?? category.imageAlt,
    items: category.items.map((item) => ({
      name: item.title,
      href: `/services/${item.slug}`,
    })),
  }));
}

export const SURGICAL_GROUPS = buildGroups("surgical");
export const NONSURGICAL_GROUPS = buildGroups("nonsurgical");
export const ALL_TREATMENT_GROUPS = [...SURGICAL_GROUPS, ...NONSURGICAL_GROUPS];

export const SURGICAL_COUNT = SURGICAL_GROUPS.reduce((sum, group) => sum + group.count, 0);
export const NONSURGICAL_COUNT = NONSURGICAL_GROUPS.reduce((sum, group) => sum + group.count, 0);
export const TOTAL_TREATMENT_COUNT = SURGICAL_COUNT + NONSURGICAL_COUNT;

export const HOME_STATS = [
  { value: "17+", label: "Years of experience" },
  { value: "2,750+", label: "Procedures performed" },
  { value: "5.0", label: "Google rating" },
  { value: "1:1", label: "Personalised care" },
] as const;

export const HOME_FAQS = [
  {
    q: "What happens during a consultation?",
    a: "You meet Dr. Sunita in person. She listens first — what you would like to change, and why — then examines and explains which options genuinely apply to you, what each one involves, and what it does not do. You leave with a written plan and no pressure to decide.",
  },
  {
    q: "How do I know which treatment is right for me?",
    a: "That is decided together, based on your anatomy, medical history, lifestyle and how much recovery time you can realistically take. Sometimes the answer is a smaller procedure than expected, and sometimes it is no procedure at all.",
  },
  {
    q: "What is the recovery time?",
    a: "It varies by procedure and by person. Most non-surgical treatments allow a return to routine the same day; surgical recovery is explained in detail before you consent, including time away from work, restrictions and the follow-up schedule.",
  },
  {
    q: "How should I prepare?",
    a: "You receive written pre-procedure instructions after your consultation. Bring your medical history and a list of current medications, follow the fasting and medication guidance given to you, and arrange for someone to accompany you home if sedation or anaesthesia is planned.",
  },
  {
    q: "Will I still look like myself?",
    a: "That is the intention. The aim is proportion and balance rather than a different face — changes that people notice as rest rather than surgery. If your goal and your anatomy do not agree, Dr. Sunita will tell you before anything is booked.",
  },
  {
    q: "Are results guaranteed?",
    a: "No responsible surgeon can guarantee a result. Outcomes depend on your anatomy, how you heal and how closely aftercare is followed. What is promised is an honest assessment beforehand, careful surgery, and continued care afterwards.",
  },
  {
    q: "How do I book an appointment?",
    a: "Use the Book a Consultation button on this page, call the clinic, or send a message. The clinic confirms your appointment time and tells you what to bring and how long to allow.",
  },
] as const;

export const HOME_REVIEWS = [
  {
    name: "Priya S.",
    tag: "Tummy tuck",
    text: "After two pregnancies I could not regain a flat abdomen. Dr. Sunita listened first, explained every step, and the follow-up care was as careful as the surgery itself.",
  },
  {
    name: "Lakshmi R.",
    tag: "Body contouring",
    text: "The clinic is private and unhurried. I understood exactly what was possible — and what was not — before anything was booked. That honesty is why I felt safe.",
  },
  {
    name: "Srinivas R.",
    tag: "Gynecomastia",
    text: "I had put this off for years. One consultation and I understood exactly what was involved. The result looks natural and nobody could tell.",
  },
  {
    name: "Anitha R.",
    tag: "Rhinoplasty",
    text: "Calm, honest and completely unhurried. Dr. Sunita explained what was possible and what was not, and my questions never felt rushed.",
  },
] as const;

export const HOME_VIDEOS = [
  {
    meta: "Tummy tuck · Patient documentary",
    title: "Back to herself after two children",
    summary:
      "A real tummy tuck and liposuction journey — from the first consultation through surgery, healing and the first months of recovery.",
    videoId: "etkaDnKVXic",
    poster: "/images/testimonials/patient-tummy-tuck-surgery.png",
  },
  {
    meta: "Morpheus8 · Patient experience",
    title: "Skin tightening, told plainly",
    summary:
      "Why she chose Morpheus8, what the treatment felt like, and the changes noticed as the skin settled.",
    videoId: "T4fvx0VU-yo",
    poster: "/images/testimonials/patient-tummy-tuck-recovery.png",
  },
  {
    meta: "Gynecomastia · Patient case study",
    title: "Nine years of hesitation, one clear conversation",
    summary:
      "Why he waited, what changed after the consultation, and how the first month of recovery actually went.",
    videoId: "xglfMidbq8I",
    poster: "/images/testimonials/patient-gynecomastia.png",
  },
] as const;

export const VIDEO_PLAYLIST_URL =
  "https://www.youtube.com/playlist?list=PLu5_mp4Nk_R0TlcTOK-YBXRwMH0T48JA_";

export const CLINIC_PHOTOS = [
  { src: "/images/clinic/clinic-reception.webp", alt: "Clinic reception", label: "Reception" },
  { src: "/images/clinic/clinic-interior-1.webp", alt: "Consultation room", label: "Consultation" },
  { src: "/images/clinic/clinic-interior-2.webp", alt: "Procedure room", label: "Procedure room" },
  { src: "/images/clinic/clinic-interior-3.webp", alt: "Clinic technology", label: "Technology" },
  { src: "/images/clinic/clinic-interior-4.webp", alt: "Patient comfort and recovery", label: "Comfort" },
] as const;

export const HOME_IMAGES = {
  hero: "/images/doctor-hero.webp",
  surgeon: "/images/about/dr-sunita-ghanta.jpg",
  outdoor: "/images/clinic/clinic-outdoor.webp",
} as const;

export const MAP_EMBED_SRC =
  "https://maps.google.com/maps?q=Dr%20Sunita%20Aesthetics%2C%20Seethammadara%2C%20Visakhapatnam&z=15&output=embed";

export const HOME_CONTACT = {
  ...CONTACT,
  hours: "Mon – Sat · 10:00 – 19:00",
  sunday: "Sunday · by appointment",
  addressLines: ["Sunita Nursing Home, TPT Colony,", "Seethammadara, Visakhapatnam 530013"],
} as const;

export const HOME_SOCIALS = [
  { label: "In", name: "LinkedIn", href: "#" },
  { label: "Ig", name: "Instagram", href: "#" },
  { label: "Yt", name: "YouTube", href: "#" },
  { label: "Fb", name: "Facebook", href: "#" },
] as const;

export const BOOK_LABEL = "Book a Consultation";
export const REVIEW_COUNT_LABEL = "240+ Google reviews";
