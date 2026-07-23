export interface CaseStudySection {
  eyebrow: string;
  title: string;
  paragraphs: string[];
  points?: string[];
}

export interface CaseStudy {
  slug: string;
  number: string;
  category: "Breast" | "Body" | "Face";
  title: string;
  subtitle: string;
  excerpt: string;
  procedure: string;
  location: string;
  readTime: string;
  age?: string;
  recovery?: string;
  tags: string[];
  heroImage: string;
  beforeImage: string;
  afterImage: string;
  imagePosition?: string;
  intro: string;
  sections: CaseStudySection[];
  outcomes: string[];
  closing: string;
}

const imagePath = (slug: string, file: string) =>
  `/images/case-studies/${slug}/${file}`;

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "bilateral-axillary-breast-removal",
    number: "01",
    category: "Body",
    title: "For years, she dressed around the swelling beneath her arms",
    subtitle: "A patient journey through bilateral axillary breast removal",
    excerpt:
      "Persistent underarm swelling after childbirth affected her comfort, clothing choices and peace of mind. A clear diagnosis finally gave her a path forward.",
    procedure: "Bilateral axillary breast removal with skin excision",
    location: "Visakhapatnam",
    readTime: "6 min read",
    age: "40 years",
    recovery: "Discharged the next day",
    tags: ["Accessory breast tissue", "Underarm contour", "Patient story"],
    heroImage: imagePath("bilateral-axillary-breast-removal", "hero.jpg"),
    beforeImage: imagePath("bilateral-axillary-breast-removal", "before.jpg"),
    afterImage: imagePath("bilateral-axillary-breast-removal", "after.jpg"),
    intro:
      "What began as a change after pregnancy gradually became a daily source of heaviness, self-consciousness and worry. Her story is a reminder that a concern can be medically benign and still have a very real effect on quality of life.",
    sections: [
      {
        eyebrow: "Her concern",
        title: "A change that never settled after childbirth",
        paragraphs: [
          "She first assumed the fullness near both armpits was ordinary post-pregnancy weight. When it remained for years, fitted blouses and sleeveless clothes became difficult to wear and routine arm movement felt increasingly heavy.",
          "The uncertainty was as difficult as the physical discomfort. Before discussing treatment, her most urgent question was whether the swelling could be dangerous.",
        ],
        points: [
          "Visible fullness beside both underarms",
          "Heaviness and discomfort with movement",
          "Clothes no longer fitting comfortably",
          "Anxiety about the cause of the swelling",
        ],
      },
      {
        eyebrow: "Assessment",
        title: "A reassuring diagnosis brought clarity",
        paragraphs: [
          "Clinical assessment and the required investigations identified bilateral accessory breast tissue. This tissue can become more noticeable after hormonal changes such as pregnancy and, while often harmless, may cause pain, friction and persistent contour concerns.",
          "Once she understood the diagnosis, the conversation could move from fear to a treatment plan shaped around comfort as well as appearance.",
        ],
      },
      {
        eyebrow: "Treatment plan",
        title: "Removing the tissue and refining the underarm contour",
        paragraphs: [
          "Dr. Sunita planned bilateral removal of the accessory breast tissue together with careful skin excision. The aim was to reduce bulk, ease heaviness and create a smoother transition between the chest and upper arm.",
          "The procedure was completed successfully and she was able to leave the hospital the following day with a personalised aftercare plan.",
        ],
      },
    ],
    outcomes: ["Reduced underarm bulk", "Improved comfort", "Better clothing fit"],
    closing:
      "At follow-up, the contour was visibly smoother and the heaviness that had shaped her daily choices had eased. Most importantly, she had both physical relief and an answer to the worry she had carried for years.",
  },
  {
    slug: "breast-lift-augmentation-after-childbirth",
    number: "02",
    category: "Breast",
    title: "After childbirth, she wanted to feel balanced and like herself again",
    subtitle: "A personalised breast lift and augmentation journey",
    excerpt:
      "Pregnancy left her with noticeable asymmetry, sagging on one side and lost volume. Her plan focused on restoring proportion—not creating an artificial look.",
    procedure: "Right breast lift with bilateral breast augmentation",
    location: "Visakhapatnam",
    readTime: "7 min read",
    age: "35 years",
    tags: ["Breast lift", "Breast augmentation", "Post-pregnancy change"],
    heroImage: imagePath("breast-lift-augmentation-after-childbirth", "hero.png"),
    beforeImage: imagePath("breast-lift-augmentation-after-childbirth", "before.png"),
    afterImage: imagePath("breast-lift-augmentation-after-childbirth", "after.png"),
    intro:
      "Motherhood had changed the shape and volume of her breasts in different ways on each side. She was not looking for perfection; she wanted a natural, proportionate result that helped her feel comfortable in her clothes again.",
    sections: [
      {
        eyebrow: "After motherhood",
        title: "Volume loss and asymmetry changed how she saw herself",
        paragraphs: [
          "Following childbirth, her right breast had descended more than the left while both sides lost fullness. Over time, the imbalance became difficult to ignore and choosing clothes became a frustrating reminder of the change.",
          "Her goals were thoughtful and specific: improve symmetry, restore natural volume and keep the result in harmony with her frame.",
        ],
        points: [
          "More pronounced sagging on the right side",
          "Loss of volume in both breasts",
          "Visible asymmetry in fitted clothing",
          "A preference for a subtle, body-proportionate result",
        ],
      },
      {
        eyebrow: "Consultation",
        title: "Treating each side according to what it needed",
        paragraphs: [
          "The examination confirmed a combination of right-sided ptosis, bilateral volume loss and asymmetry—changes frequently seen after pregnancy and breastfeeding.",
          "Because the two breasts did not need identical correction, the plan combined a lift on the right with carefully selected augmentation on both sides.",
        ],
      },
      {
        eyebrow: "Surgical plan",
        title: "Restoring shape while preserving a natural proportion",
        paragraphs: [
          "The right breast was lifted to improve its position, while augmentation restored fullness across both sides. Implant choice and placement were planned around her chest width, existing tissue and desired silhouette.",
          "The result was designed to feel like a restoration of her own shape rather than a dramatic change in identity.",
        ],
      },
    ],
    outcomes: ["Improved symmetry", "Restored volume", "More balanced proportions"],
    closing:
      "As healing progressed, the difference was not only visible in shape and symmetry. She felt more at ease getting dressed and more connected to the version of herself she had missed after childbirth.",
  },
  {
    slug: "revision-breast-augmentation",
    number: "03",
    category: "Breast",
    title: "Four years after a difficult first surgery, she chose to trust again",
    subtitle: "Revision breast augmentation with scar correction",
    excerpt:
      "Pain, prominent scars and implant removal had turned her first augmentation into regret. A carefully planned revision helped rebuild comfort and confidence.",
    procedure: "Revision breast augmentation with scar revision",
    location: "Visakhapatnam",
    readTime: "8 min read",
    tags: ["Revision augmentation", "Scar revision", "Implant surgery"],
    heroImage: imagePath("revision-breast-augmentation", "hero.png"),
    beforeImage: imagePath("revision-breast-augmentation", "before.png"),
    afterImage: imagePath("revision-breast-augmentation", "after.png"),
    intro:
      "Revision surgery begins with more than anatomy. It begins with listening to what went wrong, understanding the patient’s hesitation and creating a plan that earns back trust one decision at a time.",
    sections: [
      {
        eyebrow: "The first experience",
        title: "A hopeful decision became years of disappointment",
        paragraphs: [
          "After pregnancy and breastfeeding, she initially chose augmentation elsewhere to restore lost volume. Persistent discomfort and large, noticeable scars left her unhappy with both the experience and the outcome.",
          "She ultimately had the implants removed. For nearly four years she avoided another procedure, even though she still wished for the result she had originally hoped to achieve.",
        ],
        points: [
          "Persistent pain after the original augmentation",
          "Prominent postoperative scars",
          "Previous implant removal",
          "Understandable anxiety about another operation",
        ],
      },
      {
        eyebrow: "Revision assessment",
        title: "Planning around her history—not starting from zero",
        paragraphs: [
          "Her consultation reviewed the earlier procedures, current breast tissue, scar pattern and long-term goals. The priority was not simply to replace implants; it was to improve the previous scars and create a comfortable, proportionate result.",
          "Clear expectations and a conservative plan helped her feel informed enough to consider surgery again.",
        ],
      },
      {
        eyebrow: "Treatment",
        title: "Augmentation and scar revision in one considered plan",
        paragraphs: [
          "Revision augmentation restored volume with careful attention to breast shape and body proportions. Scar revision addressed the most visible reminders of the first operation.",
          "Every part of the procedure was adapted to her existing tissue and surgical history, with safety, comfort and natural balance guiding the choices.",
        ],
      },
    ],
    outcomes: ["Fuller, balanced shape", "Improved scarring", "Trust restored"],
    closing:
      "At approximately six months, the breasts looked fuller and more balanced and the scars were significantly improved. The emotional result mattered just as much: she finally felt at peace with a decision that had once brought regret.",
  },
  {
    slug: "breast-reduction-axillary-breast-correction",
    number: "04",
    category: "Breast",
    title: "IVF-related changes brought pain that she could no longer postpone",
    subtitle: "Breast reduction with axillary breast correction",
    excerpt:
      "Hormonal treatment caused marked breast enlargement and underarm swelling. One combined operation addressed heaviness, irritation and residual tissue from an earlier surgery.",
    procedure: "Breast reduction with axillary breast correction",
    location: "Visakhapatnam",
    readTime: "8 min read",
    tags: ["Breast reduction", "Axillary breast", "Functional relief"],
    heroImage: imagePath("breast-reduction-axillary-breast-correction", "hero.png"),
    beforeImage: imagePath("breast-reduction-axillary-breast-correction", "before.png"),
    afterImage: imagePath("breast-reduction-axillary-breast-correction", "after.png"),
    intro:
      "During repeated IVF treatment, her breasts enlarged significantly and accessory tissue near the underarms became more prominent. The effect was functional as well as emotional: pain, rashes and restricted movement had become part of everyday life.",
    sections: [
      {
        eyebrow: "Physical change",
        title: "Hormonal treatment was followed by rapid enlargement",
        paragraphs: [
          "While focusing on her goal of becoming a mother, she noticed both breasts becoming increasingly heavy. Underarm fullness developed at the same time and the combined weight made ordinary movement and clothing uncomfortable.",
          "A previous attempt to treat the right axillary area elsewhere had left a noticeable scar and residual tissue, adding another concern to an already difficult period.",
        ],
        points: [
          "Painful bra-strap grooves",
          "Persistent upper-back discomfort",
          "Sweat-related irritation beneath the breasts",
          "Residual underarm tissue and a visible previous scar",
        ],
      },
      {
        eyebrow: "Consultation",
        title: "The priority was comprehensive functional relief",
        paragraphs: [
          "Assessment brought the concerns together: hormonally influenced breast enlargement, symptomatic heaviness, remaining axillary tissue and a scar from earlier surgery.",
          "As she paused fertility treatment, she chose to focus on her physical wellbeing. The plan was designed to treat the breast and underarm concerns in the same operation.",
        ],
      },
      {
        eyebrow: "Combined surgery",
        title: "Reducing weight and correcting the underarm contour",
        paragraphs: [
          "Breast reduction removed excess volume and reshaped the breasts for a lighter, more proportionate result. Axillary correction addressed the remaining tissue and improved the underarm transition, including attention to the previous scar.",
          "Combining the procedures allowed one recovery period and a more coherent contouring plan.",
        ],
      },
    ],
    outcomes: ["Less heaviness", "Easier movement", "Improved underarm contour"],
    closing:
      "After surgery, she described the result first as relief: less weight, less shoulder pressure and less irritation beneath the breasts. Clothing felt easier and she could return her attention to the next chapter of her life with greater comfort.",
  },
  {
    slug: "chin-implant-surgery",
    number: "05",
    category: "Face",
    title: "A subtle chin enhancement brought his profile into balance",
    subtitle: "A patient story of chin implant surgery",
    excerpt:
      "At 20, an under-projected chin made an otherwise strong profile feel incomplete. A carefully selected implant added definition without changing his identity.",
    procedure: "Chin implant surgery (genioplasty enhancement)",
    location: "Visakhapatnam",
    readTime: "6 min read",
    age: "20 years",
    recovery: "Day-care surgery",
    tags: ["Chin implant", "Facial balance", "Profile enhancement"],
    heroImage: imagePath("chin-implant-surgery", "hero.png"),
    beforeImage: imagePath("chin-implant-surgery", "before.png"),
    afterImage: imagePath("chin-implant-surgery", "after.png"),
    intro:
      "He did not want to look different. He wanted the chin to feel proportionate to the features he already had. That distinction guided a subtle plan focused on projection, profile and harmony.",
    sections: [
      {
        eyebrow: "His concern",
        title: "One feature softened an otherwise defined profile",
        paragraphs: [
          "Although tall with naturally strong features, he felt his small, retruded chin reduced jawline definition and made his side profile appear less balanced.",
          "The concern may have seemed minor to others, but it influenced how he saw himself in photographs and in the mirror. His request was for proportion—not a dramatic transformation.",
        ],
        points: [
          "Limited chin projection",
          "A softer-than-desired jawline",
          "Imbalance in the side profile",
          "A clear preference for a natural result",
        ],
      },
      {
        eyebrow: "Facial assessment",
        title: "Choosing an enhancement that complemented his own features",
        paragraphs: [
          "Dr. Sunita assessed the relationship between the chin, lips, nose and jawline before recommending implant size and projection. The goal was to support the existing structure rather than overpower it.",
          "A chin implant offered a focused way to improve forward projection and was planned as a day-care procedure.",
        ],
      },
      {
        eyebrow: "Procedure",
        title: "A small structural change with a broad visual effect",
        paragraphs: [
          "The implant was selected and positioned to create a more defined chin and a cleaner transition into the jawline. He returned home the same day with recovery guidance and scheduled follow-up.",
          "Because the change respected his natural anatomy, the result read as a more balanced version of his own face rather than an obvious surgical alteration.",
        ],
      },
    ],
    outcomes: ["Improved chin projection", "Sharper profile", "Natural facial balance"],
    closing:
      "As the early swelling settled, his jawline appeared stronger and the face more proportionate from the side. The enhancement was intentionally understated—and that subtlety was central to his confidence in the result.",
  },
];

export function getCaseStudy(slug: string) {
  return CASE_STUDIES.find((study) => study.slug === slug);
}
