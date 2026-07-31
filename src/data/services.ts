import { beforeAfterCasesForSlug } from "@/data/beforeAfterImages";

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

const SURGICAL_FACE = "Surgical Procedure — Face";
const SURGICAL_BODY = "Surgical Procedure — Body";
const SURGICAL_BREAST = "Surgical Procedure — Breast";
const SURGICAL_GYNECOMASTIA = "Surgical Procedure — Gynecomastia";
const NONSURGICAL_FACE = "Non-Surgical — Face";
const NONSURGICAL_LASER = "Non-Surgical — Laser";
const NONSURGICAL_ANTIAGING = "Non-Surgical — Anti-Aging";
const RECONSTRUCTIVE = "Reconstructive Surgery";
const HAIR = "Hair Treatment";

/* ---------------------------------------------------------------------------
   All service pages. Add a seed here to publish a new page at /services/<slug>.
   Only lower-body-sculpting has fully written content today; the rest use
   placeholder defaults and will be populated service by service.
--------------------------------------------------------------------------- */

const SEEDS: ServiceSeed[] = [
  // ---- Body (surgical) ----
  {
    slug: "lower-body-sculpting",
    title: "Lower Body Sculpting",
    category: SURGICAL_BODY,
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
  {
    slug: "liposuction",
    title: "Liposuction",
    category: SURGICAL_BODY,
    video: "https://video.wixstatic.com/video/2139b1_59e0f0efcf504580b64214b96f05eae1/1080p/mp4/file.mp4",
  },
  {
    slug: "tummy-tuck",
    title: "Tummy Tuck",
    category: SURGICAL_BODY,
    video: "https://video.wixstatic.com/video/2139b1_d37b3212afb64bd684eb946a5910a201/1080p/mp4/file.mp4",
  },
  {
    slug: "mommy-makeover",
    title: "Mommy Makeover",
    category: SURGICAL_BODY,
    video: "https://video.wixstatic.com/video/2139b1_ae4a94e496b440dc97911268b8532051/1080p/mp4/file.mp4",
  },

  // ---- Face (surgical) ----
  {
    slug: "nose-surgery",
    title: "Nose Surgery (Rhinoplasty)",
    category: SURGICAL_FACE,
    video: "https://video.wixstatic.com/video/2139b1_5b016c1c304f485ea624cfb27a032241/1080p/mp4/file.mp4",
  },
  {
    slug: "eyelid-surgery",
    title: "Eyelid Surgery (Blepharoplasty)",
    category: SURGICAL_FACE,
    video: "https://video.wixstatic.com/video/2139b1_7f0c28b76d2742e289cc635a2099c1bf/1080p/mp4/file.mp4",
  },
  {
    slug: "ear-surgery",
    title: "Ear Surgery (Otoplasty)",
    category: SURGICAL_FACE,
    video: "https://video.wixstatic.com/video/2139b1_7d6a2f1c4edc41ae95106ed7634da8b3/1080p/mp4/file.mp4",
  },
  { slug: "lip-surgery", title: "Lip Surgery", category: SURGICAL_FACE },
  { slug: "face-lift", title: "Face Lift", category: SURGICAL_FACE },
  { slug: "double-chin-correction", title: "Double Chin Correction", category: SURGICAL_FACE },

  // ---- Breast (surgical) ----
  {
    slug: "breast-augmentation",
    title: "Breast Augmentation (Implants)",
    category: SURGICAL_BREAST,
    video: "https://video.wixstatic.com/video/2139b1_f696a39cf25141c78752458f66ec7fe2/1080p/mp4/file.mp4",
  },
  {
    slug: "breast-reduction",
    title: "Breast Reduction",
    category: SURGICAL_BREAST,
    video: "https://video.wixstatic.com/video/2139b1_0addbbe11e294c958d5de74c175e686e/1080p/mp4/file.mp4",
  },

  // ---- Gynecomastia (male chest — "men's breast") ----
  {
    slug: "gynecomastia-treatment-in-visakhapatnam",
    title: "Gynecomastia Surgery",
    category: SURGICAL_GYNECOMASTIA,
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
  {
    slug: "male-chest-liposuction",
    title: "Male Chest Liposuction",
    category: SURGICAL_GYNECOMASTIA,
    metaDescription:
      "Male chest liposuction in Visakhapatnam by Dr. Sunita Ghanta — remove stubborn chest fat for a flatter, more defined, masculine chest. Board-certified plastic surgeon, 17+ years of experience.",
    heroDescription:
      "For men whose chest fullness is mainly excess fat rather than firm gland, targeted liposuction removes fat through tiny incisions to reveal a flatter, more defined chest — with minimal scarring and a quick recovery.",
    facts: [
      { label: "Procedure Time", value: "45–90 Min" },
      { label: "Anaesthesia", value: "LA + Sedation / GA" },
      { label: "Recovery", value: "3–7 Days" },
      { label: "Final Results", value: "2–4 Months" },
    ],
    whoIsItFor: [
      "Your chest fullness is mainly soft fat rather than firm glandular tissue",
      "You have good skin elasticity that will re-drape after fat removal",
      "Diet and exercise have not removed the last bit of chest fat",
      "You want the least-invasive option with tiny incisions",
      "You are at a stable weight and in good general health",
    ],
    beforeAfter: [
      { label: "Chest Contouring" },
      { label: "Fatty Gynecomastia" },
      { label: "Athletic Chest Definition" },
    ],
  },
  {
    slug: "glandular-gynecomastia-correction",
    title: "Glandular Gynecomastia Correction",
    category: SURGICAL_GYNECOMASTIA,
    metaDescription:
      "Glandular gynecomastia correction in Visakhapatnam by Dr. Sunita Ghanta — surgical excision of firm male breast tissue for a flat, masculine chest. Board-certified plastic surgeon, 17+ years of experience.",
    heroDescription:
      "When a firm disc of breast tissue sits beneath the nipple, liposuction alone is not enough. Dr. Sunita Ghanta precisely excises the glandular tissue through a discreet incision at the edge of the areola, delivering a permanently flat, masculine chest.",
    facts: [
      { label: "Procedure Time", value: "1–2 Hrs" },
      { label: "Anaesthesia", value: "General / Sedation" },
      { label: "Recovery", value: "1–2 Weeks" },
      { label: "Final Results", value: "3–6 Months" },
    ],
    whoIsItFor: [
      "You can feel a firm, rubbery disc of tissue under the nipple",
      "Your chest stays full despite being lean or losing weight",
      "You want a permanent solution to true glandular gynecomastia",
      "You are bothered by the shape or projection of your chest",
      "You are in good general health with realistic expectations",
    ],
    beforeAfter: [
      { label: "Glandular Excision" },
      { label: "Gland + Liposuction" },
      { label: "Nipple Flattening" },
    ],
  },
  {
    slug: "puffy-nipple-correction",
    title: "Puffy Nipple Correction",
    category: SURGICAL_GYNECOMASTIA,
    metaDescription:
      "Puffy nipple correction in Visakhapatnam by Dr. Sunita Ghanta — flatten protruding or puffy male nipples caused by localised gland tissue. Board-certified plastic surgeon, 17+ years of experience.",
    heroDescription:
      "Puffy or protruding nipples are usually caused by a small amount of glandular tissue directly behind the areola. Dr. Sunita Ghanta removes this tissue through a tiny, well-hidden incision to flatten the nipple and restore a natural chest contour.",
    facts: [
      { label: "Procedure Time", value: "45–60 Min" },
      { label: "Anaesthesia", value: "LA + Sedation" },
      { label: "Recovery", value: "3–7 Days" },
      { label: "Final Results", value: "2–3 Months" },
    ],
    whoIsItFor: [
      "Your nipples look puffy or cone-shaped, especially through thin shirts",
      "There is a small amount of tissue directly behind the areola",
      "Your chest is otherwise flat but the nipples still protrude",
      "You want a quick, minimally invasive correction",
      "You are in good general health with realistic expectations",
    ],
    beforeAfter: [
      { label: "Puffy Nipple" },
      { label: "Areolar Flattening" },
      { label: "Bilateral Correction" },
    ],
  },

  // ---- Laser (non-surgical) ----
  {
    slug: "laser-hair-reduction",
    title: "Laser Hair Reduction",
    category: NONSURGICAL_LASER,
    video: "https://video.wixstatic.com/video/2139b1_cec11bc2e9a44adb9722c435aa6005d1/1080p/mp4/file.mp4",
  },
  { slug: "laser-toning", title: "Laser Toning", category: NONSURGICAL_LASER },
  { slug: "laser-for-pigmentation", title: "Laser for Pigmentation", category: NONSURGICAL_LASER },
  {
    slug: "co2-laser",
    title: "CO2 Laser Resurfacing",
    category: NONSURGICAL_LASER,
    video: "https://video.wixstatic.com/video/2139b1_b87f08c997f94d18a2e38b587cd489b3/1080p/mp4/file.mp4",
  },

  // ---- Face treatments (non-surgical) ----
  { slug: "lip-enhancement", title: "Lip Enhancement", category: NONSURGICAL_FACE },
  { slug: "non-surgical-rhinoplasty", title: "Non-Surgical Rhinoplasty", category: NONSURGICAL_FACE },
  { slug: "power-shots", title: "Power Shots", category: NONSURGICAL_FACE },
  {
    slug: "microblading",
    title: "Microblading",
    category: NONSURGICAL_FACE,
    video: "https://video.wixstatic.com/video/2139b1_5a45baa641e64bcf87cd46ae7e4dd2f7/1080p/mp4/file.mp4",
  },

  // ---- Anti-aging (non-surgical) ----
  {
    slug: "vampire-facelift",
    title: "Vampire Facelift (PRP / GFC)",
    category: NONSURGICAL_ANTIAGING,
    video: "https://video.wixstatic.com/video/2139b1_12630743c332423e8c4c96c65800a00d/1080p/mp4/file.mp4",
  },
  {
    slug: "morpheus8",
    title: "Morpheus8",
    category: NONSURGICAL_ANTIAGING,
    video: "https://video.wixstatic.com/video/2139b1_d0a1b35e11b3476daaa0001e499d629b/1080p/mp4/file.mp4",
  },
  {
    slug: "anti-wrinkle-injections",
    title: "Anti-Wrinkle Injections (Botox)",
    category: NONSURGICAL_ANTIAGING,
    video: "https://video.wixstatic.com/video/2139b1_115b8333c7bc4b77b642734dd669e1a6/1080p/mp4/file.mp4",
  },
  {
    slug: "dermal-fillers",
    title: "Dermal Fillers",
    category: NONSURGICAL_ANTIAGING,
    video: "https://video.wixstatic.com/video/2139b1_cfe87843b9fb472a881a671e9b1e0c90/1080p/mp4/file.mp4",
  },
  {
    slug: "forma",
    title: "Forma Skin Tightening",
    category: NONSURGICAL_ANTIAGING,
    video: "https://video.wixstatic.com/video/2139b1_ca6bb2f8e17a4f609444cc138ca8cc55/1080p/mp4/file.mp4",
  },

  // ---- Hair ----
  { slug: "hair-treatments", title: "Hair Treatments", category: HAIR },

  // ---- Reconstructive ----
  { slug: "chest-reconstruction", title: "Chest Reconstruction", category: RECONSTRUCTIVE },
  { slug: "cleft-lip-palate-surgery", title: "Cleft Lip & Palate Surgery", category: RECONSTRUCTIVE },
  { slug: "scar-revision", title: "Scar Revision", category: RECONSTRUCTIVE },
  { slug: "post-burn-reconstruction", title: "Post-Burn Reconstruction", category: RECONSTRUCTIVE },
];

export const SERVICES: ServiceData[] = SEEDS.map(makeService);
