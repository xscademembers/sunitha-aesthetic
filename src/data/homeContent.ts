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
    src: "/images/procedures/face-treatment.webp",
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
    src: "/images/services/service-facial.webp",
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

export const SURGEON_CREDENTIALS = [
  { degree: "MBBS", label: "Medical foundation" },
  { degree: "DNB", label: "General surgery" },
  { degree: "MCh", label: "Plastic surgery" },
  { degree: "17+", label: "Years in practice" },
] as const;

export const HOME_COPY = {
  heroKicker: "Plastic surgeon in Visakhapatnam · Board-certified · Since 2009",
  heroTitle: "Natural results.",
  heroAccent: "Honest advice.",
  heroBody:
    "Face, body, breast and skin treatments with Dr. Sunita. Seventeen years of natural-looking results, clear answers, and a private consultation with no pressure to decide today.",
  viewTreatments: "See treatments",
  browseLibrary: "Browse treatments",
  surgeonKicker: "Meet the surgeon",
  surgeonName: "Dr. Sunita Ghanta",
  surgeonTitle: "The surgeon patients trust with their face.",
  surgeonBody:
    "Board-certified plastic surgeon in Visakhapatnam for face, body, breast, hair and non-surgical aesthetics. You get a clear plan, realistic outcomes, and a clinic that never rushes you into a decision.",
  surgeonQuote: "Every transformation begins with understanding.",
  bookWithSurgeon: "Book with Dr. Sunita",
  readStory: "Read her full story",
  clinicKicker: "The clinic",
  clinicTitle: "A private clinic, built around you.",
  clinicBody:
    "Calm rooms, discreet entry, and time that is actually yours — from the first hello through recovery.",
  visitLine: "Private from the first door.",
  findClinic: "Find the clinic",
  treatmentsKicker: "Treatments & services",
  treatmentsTitle: "Find the treatment that fits you.",
  treatmentsBody:
    "Surgical and non-surgical options, explained in plain language — who it suits, what recovery looks like, and what it cannot do.",
  storiesKicker: "Patient stories",
  storiesTitle: "Real people. Real journeys.",
  allStories: "All stories",
  fullPlaylist: "Full playlist",
  faqKicker: "Before you begin",
  faqTitle: "Clear answers, before you book.",
  faqBody: "Still unsure? Bring the question to your consultation — that is exactly what it is for.",
  askConsult: "Ask in a consultation",
  ctaKicker: "Private consultation",
  ctaTitle: "Let’s plan your next step.",
  ctaBody:
    "One private appointment. An honest assessment. A written plan you can take home — with zero pressure to book on the day.",
  contactClinic: "Or call the clinic",
  footerBlurb:
    "Natural-looking surgical and non-surgical care in Visakhapatnam, led by Dr. Sunita Ghanta.",
} as const;

export const HOME_FAQS = [
  {
    q: "What happens during a consultation?",
    a: "You meet Dr. Sunita in person. She starts with what you want to change and why, then examines you and explains which options actually apply — including what each one cannot do. You leave with a written plan and no pressure to decide that day.",
  },
  {
    q: "How do I know which treatment is right for me?",
    a: "That is decided together, based on your anatomy, medical history, lifestyle and how much recovery time you can take. Sometimes the right answer is a smaller treatment than expected — and sometimes it is no procedure at all.",
  },
  {
    q: "What is the recovery time?",
    a: "It depends on the treatment and on you. Most non-surgical visits let you return to routine the same day. Surgical recovery is explained in detail before you consent, including time off work, restrictions and follow-up visits.",
  },
  {
    q: "How should I prepare?",
    a: "You receive written instructions after your consultation. Bring your medical history and current medications, follow any fasting or medicine guidance, and arrange someone to take you home if sedation or anaesthesia is planned.",
  },
  {
    q: "Will I still look like myself?",
    a: "That is the goal. The aim is balance and a rested look — not a different face. If your wish and your anatomy do not match, Dr. Sunita will tell you before anything is booked.",
  },
  {
    q: "Are results guaranteed?",
    a: "No responsible surgeon can guarantee a result. Healing, anatomy and aftercare all matter. What you can expect is an honest assessment, careful surgery, and continued care afterwards.",
  },
  {
    q: "How do I book an appointment?",
    a: "Click Book a Consultation on this page, call the clinic, or send a message. The team confirms your time and tells you what to bring.",
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

export const MORE_REVIEWS = [
  {
    name: "Meena K.",
    tag: "Breast reduction",
    text: "I finally felt heard. The plan was clear, the recovery instructions were practical, and the result looks like me — only more comfortable in my own clothes.",
  },
  {
    name: "Ravi K.",
    tag: "Liposuction",
    text: "No sales pitch, no rush. Dr. Sunita told me what surgery could and could not change. That honesty made the decision easier.",
  },
  {
    name: "Sneha P.",
    tag: "Eyelid surgery",
    text: "The clinic felt private from the first door. Follow-up visits were as careful as the procedure, and people say I look rested rather than ‘done’.",
  },
  {
    name: "Deepa M.",
    tag: "Skin tightening",
    text: "I wanted a smaller treatment, not a dramatic change. The advice was measured, the appointments were unhurried, and the result settled naturally.",
  },
  {
    name: "Arjun V.",
    tag: "Hair transplant",
    text: "Every step was explained in plain language. I knew the timeline, the aftercare, and what to expect in the first months. No surprises.",
  },
  {
    name: "Kavitha L.",
    tag: "Mommy makeover",
    text: "A personalised plan, realistic recovery, and a team that checked in after surgery. I felt looked after, not processed.",
  },
] as const;

export const ALL_REVIEWS = [...HOME_REVIEWS, ...MORE_REVIEWS];

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
  { src: "/images/clinic/clinic-reception.webp", alt: "Reception at Dr. Sunita Aesthetics in Visakhapatnam", label: "Reception" },
  { src: "/images/clinic/clinic-interior-1.webp", alt: "Private consultation room at Dr. Sunita Aesthetics", label: "Consultation" },
  { src: "/images/clinic/clinic-interior-2.webp", alt: "Procedure room at Dr. Sunita Aesthetics clinic", label: "Procedure room" },
  { src: "/images/clinic/clinic-interior-3.webp", alt: "In-clinic pharmacy at Dr. Sunita Aesthetics", label: "Pharmacy" },
  { src: "/images/clinic/clinic-interior-4.webp", alt: "Patient comfort and recovery area at Dr. Sunita Aesthetics", label: "Comfort" },
] as const;

export const HOME_IMAGES = {
  hero: "/images/about/dr-sunita-ghanta.jpg",
  surgeon: "/images/doctor-hero.webp",
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

export const BOOK_LABEL = "Book a Consultation";
export const REVIEW_COUNT_LABEL = "240+ Google reviews";
export const GOOGLE_REVIEWS_HREF =
  "https://www.google.com/maps/search/?api=1&query=Dr%20Sunita%20Aesthetics%20Seethammadara%20Visakhapatnam";
