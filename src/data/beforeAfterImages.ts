/** Combined before/after images per service slug (one side-by-side image per file). */
export const BEFORE_AFTER_BY_SLUG: Record<string, string[]> = {
  "breast-augmentation": [
    "/images/before-after/breast-augmentation/4.png",
    "/images/before-after/breast-augmentation/5.png",
    "/images/before-after/breast-augmentation/62.png",
  ],
  "breast-reduction": [
    "/images/before-after/breast-reduction/copy-of-dr-sunita.png",
    "/images/before-after/breast-reduction/6.png",
    "/images/before-after/breast-reduction/55.png",
    "/images/before-after/breast-reduction/60.png",
  ],
  "cleft-lip-palate-surgery": [
    "/images/before-after/cleft-lip-palate-surgery/9.png",
    "/images/before-after/cleft-lip-palate-surgery/10.png",
    "/images/before-after/cleft-lip-palate-surgery/11.png",
    "/images/before-after/cleft-lip-palate-surgery/50.png",
  ],
  "co2-laser": ["/images/before-after/co2-laser/14.png"],
  "double-chin-correction": [
    "/images/before-after/double-chin-correction/7.png",
    "/images/before-after/double-chin-correction/54.png",
  ],
  "eyelid-surgery": ["/images/before-after/eyelid-surgery/46.png"],
  "face-lift": ["/images/before-after/face-lift/13.png"],
  "gynecomastia-treatment-in-visakhapatnam": [
    "/images/before-after/gynecomastia-treatment-in-visakhapatnam/32.png",
    "/images/before-after/gynecomastia-treatment-in-visakhapatnam/35.png",
    "/images/before-after/gynecomastia-treatment-in-visakhapatnam/49.png",
  ],
  "prp-hair-treatment": ["/images/before-after/hair-treatments/33.png"],
  "pigmentation-treatment": ["/images/before-after/laser-for-pigmentation/8.png"],
  "lip-lift": [
    "/images/before-after/lip-surgery/51.png",
    "/images/before-after/lip-surgery/58.png",
    "/images/before-after/lip-surgery/59.png",
  ],
  "lip-enhancement": [
    "/images/before-after/lip-surgery/51.png",
    "/images/before-after/lip-surgery/58.png",
    "/images/before-after/lip-surgery/59.png",
  ],
  "liposuction": [
    "/images/before-after/liposuction/30.png",
    "/images/before-after/liposuction/31.png",
    "/images/before-after/liposuction/57.png",
  ],
  "male-chest-liposuction": [
    "/images/before-after/male-chest-liposuction/61.png",
  ],
  "nose-surgery": [
    "/images/before-after/nose-surgery/16.png",
    "/images/before-after/nose-surgery/19.png",
    "/images/before-after/nose-surgery/20.png",
    "/images/before-after/nose-surgery/21.png",
    "/images/before-after/nose-surgery/25.png",
    "/images/before-after/nose-surgery/28.png",
    "/images/before-after/nose-surgery/34.png",
    "/images/before-after/nose-surgery/47.png",
    "/images/before-after/nose-surgery/63.png",
    "/images/before-after/nose-surgery/64.png",
  ],
  "scar-revision": [
    "/images/before-after/scar-revision/15.png",
    "/images/before-after/scar-revision/48.png",
  ],
  "tummy-tuck": [
    "/images/before-after/tummy-tuck/52.png",
    "/images/before-after/tummy-tuck/56.png",
  ],
};

export function beforeAfterCasesForSlug(slug: string, fallback: { label: string }[]) {
  const images = BEFORE_AFTER_BY_SLUG[slug];
  if (!images?.length) return fallback;
  return images.map((image, index) => ({
    label: `Patient Result ${index + 1}`,
    image,
  }));
}
