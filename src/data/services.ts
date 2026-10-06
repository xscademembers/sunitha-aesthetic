import { beforeAfterCasesForSlug } from "@/data/beforeAfterImages";
import { CATALOG_ITEMS } from "@/data/serviceCatalog";

export interface ServiceFact {
  label: string;
  value: string;
}

export interface ServiceBenefit {
  title: string;
  description: string;
}

export interface ServiceStep {
  title: string;
  description: string;
}

export interface BeforeAfterCase {
  label: string;
  /** Combined before/after image (side-by-side in one file). */
  image?: string;
  /** Legacy split images — used only when `image` is absent. */
  before?: string;
  after?: string;
}

export interface PatientStory {
  name: string;
  city: string;
  quote: string;
}

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ServiceData {
  slug: string;
  /** Procedure name — H1 renders as "{title} in Visakhapatnam". */
  title: string;
  /** Eyebrow above the H1, e.g. "Surgical Procedure — Body". */
  category: string;
  metaDescription: string;
  heroDescription: string;
  /** Video and its pre-generated final-frame thumbnail. */
  videoSrc: string;
  videoPoster: string;
  /** YouTube video ID when this service uses an embedded documentary instead of an MP4. */
  youtubeVideoId?: string;
  facts: ServiceFact[];
  benefits: ServiceBenefit[];
  whoIsItFor: string[];
  steps: ServiceStep[];
  beforeAfter: BeforeAfterCase[];
  stories: PatientStory[];
  faqs: ServiceFAQ[];
}

/* ---------------------------------------------------------------------------
   Generic, procedure-agnostic placeholder content.
   Every service starts from these defaults via makeService() and overrides
   only what it needs. All of this is placeholder copy to be populated per
   service later — kept here once so pages stay consistent and cheap to add.
--------------------------------------------------------------------------- */

const PLACEHOLDER_VIDEO =
  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";
const PLACEHOLDER_POSTER = "/images/doctor-hero.webp";

const GENERIC_FACTS: ServiceFact[] = [
  { label: "Procedure Time", value: "Varies" },
  { label: "Anaesthesia", value: "As advised" },
  { label: "Recovery", value: "Varies" },
  { label: "Results", value: "Long-lasting" },
];

const GENERIC_BENEFITS: ServiceBenefit[] = [
  {
    title: "Natural-Looking Results",
    description:
      "A refined outcome that suits your features and proportions — never overdone.",
  },
  {
    title: "Personalised to You",
    description:
      "Every plan is tailored to your anatomy, goals, and lifestyle in a private consultation.",
  },
  {
    title: "Renewed Confidence",
    description:
      "Feel more like yourself with results delivered safely and with meticulous care.",
  },
];

const GENERIC_WHO: string[] = [
  "You are bothered by a concern this procedure is designed to address",
  "You are in good general health",
  "You have realistic expectations about the outcome",
  "You are a non-smoker, or willing to stop before and after the procedure",
  "You want guidance from a board-certified plastic surgeon",
];

const GENERIC_STEPS: ServiceStep[] = [
  {
    title: "Consultation & Assessment",
    description:
      "A private one-on-one evaluation of your anatomy, goals, and medical history with Dr. Sunita.",
  },
  {
    title: "Personalised Plan",
    description:
      "A treatment plan tailored to you — the approach, the technique, and the expected outcome.",
  },
  {
    title: "The Procedure",
    description:
      "Performed in a fully equipped facility with experienced support staff and modern equipment.",
  },
  {
    title: "Recovery & Aftercare",
    description:
      "Guided aftercare with scheduled follow-ups and clear do's and don'ts throughout healing.",
  },
  {
    title: "Enjoy the Results",
    description:
      "As you heal, your refined, natural-looking result settles in over the following weeks.",
  },
];

const GENERIC_BEFORE_AFTER: BeforeAfterCase[] = [
  { label: "Patient Result 1" },
  { label: "Patient Result 2" },
  { label: "Patient Result 3" },
];

const GENERIC_STORIES: PatientStory[] = [
  {
    name: "Ananya R.",
    city: "Visakhapatnam",
    quote:
      "From consultation to recovery, the team kept me informed at every step. The results feel natural and the confidence boost has been incredible.",
  },
  {
    name: "Priya M.",
    city: "Kakinada",
    quote:
      "I wanted subtle, refined results — and that is exactly what Dr. Sunita delivered. The recovery guidance was clear and reassuring throughout.",
  },
  {
    name: "Sneha V.",
    city: "Rajahmundry",
    quote:
      "The outcome feels personalised to my features. Honest timelines and aftercare were discussed before the procedure, which made the journey stress-free.",
  },
];

function genericFaqs(title: string): ServiceFAQ[] {
  return [
    {
      question: `Am I a good candidate for ${title}?`,
      answer:
        "Candidacy is confirmed in person. During your consultation, Dr. Sunita reviews your health, goals, and anatomy to advise whether this is the right option for you.",
    },
    {
      question: "How long is the recovery?",
      answer:
        "Recovery varies by procedure and individual. You will receive a clear, personalised recovery timeline and aftercare plan before your treatment.",
    },
    {
      question: "When will I see the final results?",
      answer:
        "Initial changes are visible once early swelling settles. The final refined result typically emerges gradually over the following weeks to months.",
    },
    {
      question: "Can this be combined with other procedures?",
      answer:
        "In many cases, yes. Suitable combinations are planned during your consultation based on your health, goals, and what is safe to do in one session.",
    },
    {
      question: "Will there be visible scarring?",
      answer:
        "Where incisions are needed, they are placed discreetly and cared for to heal as inconspicuously as possible. This is discussed in detail beforehand.",
    },
    {
      question: "How do I get started?",
      answer:
        "Book a private consultation with Dr. Sunita. You will get an honest assessment, your options explained, and a plan with no pressure.",
    },
  ];
}

interface ServiceSeed {
  slug: string;
  title: string;
  category: string;
  /** Real portrait (9:16) doctor video URL. Falls back to the placeholder when absent. */
  video?: string;
  youtubeVideoId?: string;
  heroDescription?: string;
  metaDescription?: string;
  facts?: ServiceFact[];
  benefits?: ServiceBenefit[];
  whoIsItFor?: string[];
  steps?: ServiceStep[];
  beforeAfter?: BeforeAfterCase[];
  stories?: PatientStory[];
  faqs?: ServiceFAQ[];
}

/** Fill a full ServiceData from a small seed, using generic placeholder defaults. */
function makeService(seed: ServiceSeed): ServiceData {
  const heroDescription =
    seed.heroDescription ??
    `${seed.title} in Visakhapatnam by Dr. Sunita Ghanta — a board-certified plastic surgeon with 17+ years of experience. Content for this page is being finalised; book a consultation to discuss your goals in detail.`;
  return {
    slug: seed.slug,
    title: seed.title,
    category: seed.category,
    heroDescription,
    metaDescription:
      seed.metaDescription ??
      `${seed.title} in Visakhapatnam by Dr. Sunita Ghanta, board-certified plastic surgeon with 17+ years of experience and 2,750+ surgeries.`,
    videoSrc: seed.video ?? PLACEHOLDER_VIDEO,
    videoPoster: seed.video
      ? `/images/video-posters/${seed.slug}.jpg`
      : PLACEHOLDER_POSTER,
    youtubeVideoId: seed.youtubeVideoId,
    facts: seed.facts ?? GENERIC_FACTS,
    benefits: seed.benefits ?? GENERIC_BENEFITS,
    whoIsItFor: seed.whoIsItFor ?? GENERIC_WHO,
    steps: seed.steps ?? GENERIC_STEPS,
    beforeAfter: beforeAfterCasesForSlug(
      seed.slug,
      seed.beforeAfter ?? GENERIC_BEFORE_AFTER,
    ),
    stories: seed.stories ?? GENERIC_STORIES,
    faqs: seed.faqs ?? genericFaqs(seed.title),
  };
}

/** Extra copy, videos and FAQs for services that already have dedicated content. */
const OVERRIDES: Record<string, Omit<Partial<ServiceSeed>, "slug" | "title" | "category">> = {
  "lower-body-sculpting": {
    metaDescription:
      "Lower body sculpting in Visakhapatnam by Dr. Sunita Ghanta — targeted reshaping of the thighs, hips, and buttocks for smoother, more defined contours. Board certified plastic surgeon, 17+ years of experience.",
    heroDescription:
      "Targeted reshaping of the thighs, hips, and buttocks to create smoother, more defined lower body contours. Dr. Sunita Ghanta combines a keen sense of body proportion with meticulous surgical technique to deliver results that look natural and feel like you.",
    facts: [
      { label: "Procedure Time", value: "2–4 Hrs" },
      { label: "Anaesthesia", value: "General" },
      { label: "Recovery", value: "2–3 Weeks" },
      { label: "Final Results", value: "3–6 Months" },
    ],
    benefits: [
      {
        title: "Proportionate Figure",
        description:
          "Create balanced lower body proportions that complement your natural frame and posture.",
      },
      {
        title: "Smoother Contours",
        description:
          "Reduce stubborn, irregular fat deposits that diet and exercise alone cannot reach.",
      },
      {
        title: "Enhanced Curves",
        description:
          "Sculpt and define natural curves for a refined silhouette — never an overdone look.",
      },
    ],
    whoIsItFor: [
      "You have excess fat on the thighs, hips, or buttocks that resists diet and exercise",
      "You want a more proportionate, balanced lower body",
      "You have loose skin after significant weight loss or pregnancy",
      "You are at a stable weight and maintain a healthy lifestyle",
      "You have realistic expectations about surgical outcomes",
    ],
    steps: [
      {
        title: "Consultation & Assessment",
        description:
          "A private one-on-one evaluation of your anatomy, goals, and medical history with Dr. Sunita.",
      },
      {
        title: "Personalised Plan",
        description:
          "A treatment plan tailored to your body — which areas to treat, the technique, and the expected outcome.",
      },
      {
        title: "The Procedure",
        description:
          "Performed under anaesthesia in a fully equipped surgical facility with experienced support staff.",
      },
      {
        title: "Recovery & Aftercare",
        description:
          "Guided aftercare with scheduled follow-ups, compression garments, and clear do's and don'ts.",
      },
      {
        title: "Enjoy the Results",
        description:
          "Swelling settles over the following weeks, revealing your refined contours by 3–6 months.",
      },
    ],
    beforeAfter: [
      { label: "Thigh Contouring" },
      { label: "Hip & Flank Sculpting" },
      { label: "Buttock Reshaping" },
    ],
    faqs: [
      {
        question: "What areas can be treated with lower body sculpting?",
        answer:
          "The inner and outer thighs, hips, flanks, and buttocks can all be treated — individually or in combination. During your consultation, Dr. Sunita maps the areas that will give the most balanced overall contour.",
      },
      {
        question: "Can I combine this with other procedures?",
        answer:
          "Yes. Lower body sculpting is often combined with liposuction of other areas, a tummy tuck, or fat grafting in a single session when it is safe to do so. Combinations are planned during your consultation based on your health and goals.",
      },
      {
        question: "How long until I see the final results?",
        answer:
          "Initial changes are visible once the early swelling settles, usually within a few weeks. The final, refined contour typically emerges over 3–6 months as the tissues fully heal.",
      },
      {
        question: "Will lower body sculpting help with cellulite?",
        answer:
          "The procedure targets fat deposits and overall contour. Cellulite often looks improved as a result, but no surgical procedure is a guaranteed cure for cellulite — this is discussed honestly during your assessment.",
      },
      {
        question: "What is the difference between a thigh lift and liposuction?",
        answer:
          "Liposuction removes excess fat, while a thigh lift removes loose, sagging skin. If you have good skin elasticity, liposuction alone may be enough; after major weight loss, a lift or a combination usually gives the better result.",
      },
      {
        question: "How long do I need to wear compression garments?",
        answer:
          "Most patients wear a compression garment for about 4–6 weeks. It reduces swelling and helps the skin settle smoothly over the new contour. You will receive exact instructions for your case.",
      },
      {
        question: "Can I sit normally after buttock enhancement?",
        answer:
          "For the first two weeks you will be asked to modify how you sit, using a special cushion to protect the treated area. Normal sitting resumes gradually as advised at your follow-up visits.",
      },
      {
        question: "What is the recovery like?",
        answer:
          "Most patients return to desk work within 1–2 weeks and resume exercise by 4–6 weeks. You will have scheduled follow-ups, and our team remains available throughout your recovery.",
      },
    ],
  },
  liposuction: {
    video: "https://video.wixstatic.com/video/2139b1_59e0f0efcf504580b64214b96f05eae1/1080p/mp4/file.mp4",
  },
  "tummy-tuck": {
    video: "https://video.wixstatic.com/video/2139b1_d37b3212afb64bd684eb946a5910a201/1080p/mp4/file.mp4",
  },
  "mommy-makeover": {
    video: "https://video.wixstatic.com/video/2139b1_ae4a94e496b440dc97911268b8532051/1080p/mp4/file.mp4",
  },
  "nose-surgery": {
    video: "https://video.wixstatic.com/video/2139b1_5b016c1c304f485ea624cfb27a032241/1080p/mp4/file.mp4",
  },
  "eyelid-surgery": {
    video: "https://video.wixstatic.com/video/2139b1_7f0c28b76d2742e289cc635a2099c1bf/1080p/mp4/file.mp4",
  },
  "ear-surgery": {
    video: "https://video.wixstatic.com/video/2139b1_7d6a2f1c4edc41ae95106ed7634da8b3/1080p/mp4/file.mp4",
  },
  "breast-augmentation": {
    video: "https://video.wixstatic.com/video/2139b1_f696a39cf25141c78752458f66ec7fe2/1080p/mp4/file.mp4",
  },
  "breast-reduction": {
    video: "https://video.wixstatic.com/video/2139b1_0addbbe11e294c958d5de74c175e686e/1080p/mp4/file.mp4",
  },
  "axillary-breast-surgery": {
    metaDescription:
      "Axillary breast surgery (accessory breast tissue removal) in Visakhapatnam by Dr. Sunita Ghanta — remove underarm breast tissue for a smoother contour, less heaviness and better clothing comfort. Board-certified plastic surgeon, 17+ years of experience.",
    heroDescription:
      "Axillary (accessory) breast tissue creates fullness, heaviness or discomfort in the underarm that diet and exercise rarely fix. Dr. Sunita Ghanta removes the excess tissue — and skin when needed — to restore a smoother chest-to-arm transition with discreetly placed incisions and a clear recovery plan.",
    facts: [
      { label: "Procedure Time", value: "1–2 Hrs" },
      { label: "Anaesthesia", value: "General / Sedation" },
      { label: "Recovery", value: "1–2 Weeks" },
      { label: "Final Results", value: "2–3 Months" },
    ],
    benefits: [
      {
        title: "Smoother Underarm Contour",
        description:
          "Accessory tissue and excess skin are removed so the transition from chest to upper arm looks cleaner in fitted and sleeveless clothes.",
      },
      {
        title: "Comfort Day to Day",
        description:
          "Reduce heaviness, friction and tenderness that can make arm movement, bras and daily wear uncomfortable.",
      },
      {
        title: "Clear Diagnosis, Tailored Plan",
        description:
          "A proper assessment confirms accessory breast tissue and shapes a plan — liposuction, excision, or both — around your anatomy and goals.",
      },
    ],
    whoIsItFor: [
      "You have persistent fullness or a bulge in one or both underarms",
      "The area feels heavy, tender or worsens with hormonal changes or pregnancy",
      "Fitted or sleeveless clothes feel uncomfortable or self-conscious to wear",
      "Diet and exercise have not flattened the underarm contour",
      "You are in good general health with realistic expectations",
    ],
    steps: [
      {
        title: "Consultation & Assessment",
        description:
          "A private evaluation of the underarm tissue, skin quality and any related breast concerns, with investigations when needed to confirm the diagnosis.",
      },
      {
        title: "Personalised Plan",
        description:
          "A tailored approach — liposuction, direct excision, or both — with incision placement planned for the most discreet result.",
      },
      {
        title: "The Procedure",
        description:
          "Performed under anaesthesia in a fully equipped facility, often with same-day or next-day discharge depending on the plan.",
      },
      {
        title: "Recovery & Aftercare",
        description:
          "Supportive dressing and clear aftercare guidance; most patients return to light routines within one to two weeks.",
      },
      {
        title: "Enjoy the Results",
        description:
          "Swelling settles over the following weeks, revealing a smoother underarm contour by about two to three months.",
      },
    ],
    faqs: [
      {
        question: "What is axillary breast tissue?",
        answer:
          "Axillary or accessory breast tissue is extra breast tissue in the underarm. It can become more noticeable after hormonal changes such as puberty or pregnancy. It is usually benign but may cause fullness, pain, friction or clothing concerns.",
      },
      {
        question: "Is surgery the only option?",
        answer:
          "True accessory breast tissue does not reliably disappear with diet or exercise. When fullness is mainly fat, liposuction may help; when glandular tissue or excess skin is present, surgical excision is usually the lasting solution. Dr. Sunita advises the right approach after assessment.",
      },
      {
        question: "Will there be a visible scar?",
        answer:
          "Incisions are placed as discreetly as possible in the underarm crease or natural folds. Scar care is part of aftercare so healing stays as inconspicuous as possible. Exact placement is discussed before surgery.",
      },
      {
        question: "Can it be done on one side only?",
        answer:
          "Yes. Some patients have accessory tissue on one side; others on both. The plan is tailored to the side or sides that need correction.",
      },
      {
        question: "Can axillary breast surgery be combined with other breast procedures?",
        answer:
          "Often yes — for example with breast reduction or lift when underarm tissue is part of a wider contour concern. Suitable combinations are planned for safety and recovery in your consultation.",
      },
      {
        question: "How soon can I return to normal activity?",
        answer:
          "Most patients return to desk work within several days to a week and avoid strenuous arm activity for a few weeks. A personalised timeline is given with your aftercare plan.",
      },
    ],
  },
  "gynecomastia-treatment-in-visakhapatnam": {
    youtubeVideoId: "xglfMidbq8I",
    metaDescription:
      "Gynecomastia surgery (male breast reduction) in Visakhapatnam by Dr. Sunita Ghanta — remove excess glandular tissue and fat for a flatter, firmer, more masculine chest. Board-certified plastic surgeon, 17+ years of experience.",
    heroDescription:
      "Gynecomastia — enlarged male breast tissue — is common and treatable. Dr. Sunita Ghanta combines gland excision with precision liposuction to flatten and re-contour the chest for a natural, masculine result, with discreetly placed incisions and a comfortable recovery.",
    facts: [
      { label: "Procedure Time", value: "1–2 Hrs" },
      { label: "Anaesthesia", value: "General / Sedation" },
      { label: "Recovery", value: "1–2 Weeks" },
      { label: "Final Results", value: "3–6 Months" },
    ],
    benefits: [
      {
        title: "Flatter, Firmer Chest",
        description:
          "Excess gland and fat are removed to create a flat, toned chest contour that looks and feels masculine.",
      },
      {
        title: "Confidence, Shirt On or Off",
        description:
          "Feel at ease at the pool, the gym, or in fitted shirts without self-consciousness about your chest.",
      },
      {
        title: "Long-Lasting Results",
        description:
          "Once glandular tissue is removed it does not return, so results are permanent with a stable weight and lifestyle.",
      },
    ],
    whoIsItFor: [
      "You have enlarged or puffy male breast tissue that has not resolved on its own",
      "Diet and exercise have not flattened your chest",
      "You feel self-conscious wearing fitted shirts or going shirtless",
      "Your gynecomastia has been stable and is not due to a treatable medication or condition",
      "You are in good general health with realistic expectations",
    ],
    steps: [
      {
        title: "Consultation & Assessment",
        description:
          "A private evaluation of your chest, the amount of gland versus fat, skin quality, and any underlying causes with Dr. Sunita.",
      },
      {
        title: "Personalised Plan",
        description:
          "A tailored plan — liposuction, gland excision, or both — with incisions mapped discreetly around the areola.",
      },
      {
        title: "The Procedure",
        description:
          "Performed under anaesthesia in a fully equipped surgical facility, typically as a day-care procedure.",
      },
      {
        title: "Recovery & Aftercare",
        description:
          "A compression vest supports healing; most men return to desk work within a week with clear aftercare guidance.",
      },
      {
        title: "Enjoy the Results",
        description:
          "Swelling settles over the following weeks, revealing a flatter, firmer chest contour by 3–6 months.",
      },
    ],
    beforeAfter: [
      { label: "Glandular Gynecomastia" },
      { label: "Fatty (Pseudo) Gynecomastia" },
      { label: "Puffy Nipple Correction" },
    ],
    faqs: [
      {
        question: "What causes gynecomastia?",
        answer:
          "Gynecomastia is enlarged male breast tissue, usually caused by a hormonal imbalance between oestrogen and testosterone. It can appear during puberty, with weight gain, with certain medications or supplements, or with no clear cause. Dr. Sunita reviews possible causes before recommending surgery.",
      },
      {
        question: "What is the difference between glandular and fatty gynecomastia?",
        answer:
          "Fatty (pseudo) gynecomastia is mostly excess fat and often responds to liposuction alone. Glandular gynecomastia involves firm breast tissue that must be surgically excised. Most men have a combination, treated with liposuction plus gland excision in one procedure.",
      },
      {
        question: "Will diet and exercise fix gynecomastia?",
        answer:
          "Weight loss can reduce fatty fullness, but true glandular tissue will not disappear with diet or exercise. If a firm disc of tissue remains under the nipple despite being fit, surgery is the reliable way to flatten the chest.",
      },
      {
        question: "Are the scars noticeable?",
        answer:
          "Incisions are small and placed discreetly — usually along the lower edge of the areola where the colour change hides them. Liposuction access points are tiny. Scars are cared for to fade as inconspicuously as possible.",
      },
      {
        question: "Will the gynecomastia come back after surgery?",
        answer:
          "Once glandular tissue is removed it does not grow back. Results are long-lasting, though significant weight gain, steroid use, or certain medications can affect the chest. Maintaining a stable weight and lifestyle keeps results looking their best.",
      },
      {
        question: "How soon can I return to the gym?",
        answer:
          "Most men return to desk work within a week and light cardio in about two weeks. Chest and upper-body weight training is usually resumed around 4–6 weeks, once cleared at your follow-up.",
      },
    ],
  },
  "male-chest-liposuction": {
    metaDescription:
      "Male liposuction in Visakhapatnam by Dr. Sunita Ghanta — remove stubborn chest, abdomen or flank fat for a flatter, more defined physique. Board-certified plastic surgeon, 17+ years of experience.",
    heroDescription:
      "For men whose fullness is mainly excess fat rather than firm gland, targeted liposuction removes fat through tiny incisions to reveal a flatter, more defined contour — with minimal scarring and a quick recovery.",
    facts: [
      { label: "Procedure Time", value: "45–90 Min" },
      { label: "Anaesthesia", value: "LA + Sedation / GA" },
      { label: "Recovery", value: "3–7 Days" },
      { label: "Final Results", value: "2–4 Months" },
    ],
    whoIsItFor: [
      "Your fullness is mainly soft fat rather than firm glandular tissue",
      "You have good skin elasticity that will re-drape after fat removal",
      "Diet and exercise have not removed stubborn fat on the chest, abdomen or flanks",
      "You want the least-invasive option with tiny incisions",
      "You are at a stable weight and in good general health",
    ],
    beforeAfter: [
      { label: "Chest Contouring" },
      { label: "Fatty Gynecomastia" },
      { label: "Athletic Chest Definition" },
    ],
  },
  "laser-hair-reduction": {
    video: "https://video.wixstatic.com/video/2139b1_cec11bc2e9a44adb9722c435aa6005d1/1080p/mp4/file.mp4",
  },
  "co2-laser": {
    video: "https://video.wixstatic.com/video/2139b1_b87f08c997f94d18a2e38b587cd489b3/1080p/mp4/file.mp4",
  },
  "vampire-facelift": {
    video: "https://video.wixstatic.com/video/2139b1_12630743c332423e8c4c96c65800a00d/1080p/mp4/file.mp4",
  },
  morpheus8: {
    video: "https://video.wixstatic.com/video/2139b1_d0a1b35e11b3476daaa0001e499d629b/1080p/mp4/file.mp4",
  },
  "anti-wrinkle-injections": {
    video: "https://video.wixstatic.com/video/2139b1_115b8333c7bc4b77b642734dd669e1a6/1080p/mp4/file.mp4",
  },
  "dermal-fillers": {
    video: "https://video.wixstatic.com/video/2139b1_cfe87843b9fb472a881a671e9b1e0c90/1080p/mp4/file.mp4",
  },
};

const SEEDS: ServiceSeed[] = CATALOG_ITEMS.map((item) => ({
  slug: item.slug,
  title: item.title,
  category: item.category.categoryLabel,
  heroDescription: `${item.description} Performed in Visakhapatnam by Dr. Sunita Ghanta, a board-certified plastic surgeon with 17+ years of experience.`,
  ...OVERRIDES[item.slug],
}));

export const SERVICES: ServiceData[] = SEEDS.map(makeService);

