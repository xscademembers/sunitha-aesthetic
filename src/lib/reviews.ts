export type GoogleReview = {
  id: string;
  reviewer: string;
  rating: number;
  comment: string;
  createTime: string;
  updateTime?: string;
  hasReply?: boolean;
  reply?: string | null;
};

export type ReviewsPayload = {
  reviews: GoogleReview[];
  businessName: string;
  averageRating: number | null;
  totalCount: number | null;
  writeReviewUrl: string | null;
};

/**
 * Full review count shown on Google Maps / Business Profile.
 * The gmbqrcode API only syncs a recent subset (~50), so never use its
 * totalCount for the public badge — it undercounts badly.
 */
export const GOOGLE_MAPS_REVIEW_COUNT = 464;

export function formatReviewDate(iso: string): string {
  if (!iso) return "Google review";
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return "Google review";
  return date.toLocaleDateString("en-IN", { month: "short", year: "numeric" });
}

export function ratingStars(rating: number): string {
  const filled = Math.max(0, Math.min(5, Math.round(rating)));
  return "★".repeat(filled) + "☆".repeat(5 - filled);
}

export function reviewCountLabel(totalCount?: number | null): string {
  const count = Math.max(totalCount ?? 0, GOOGLE_MAPS_REVIEW_COUNT);
  return `${count}+ Google reviews`;
}

export function averageRatingLabel(averageRating: number | null): string {
  if (averageRating == null || !Number.isFinite(averageRating)) return "5.0";
  return averageRating.toFixed(1);
}
