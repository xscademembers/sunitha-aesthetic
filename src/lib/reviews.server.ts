import type { GoogleReview, ReviewsPayload } from "@/lib/reviews";

const PUBLIC_REVIEWS_API = "https://www.gmbqrcode.com/api/public/reviews";
const EMBED_REVIEWS_API = "https://www.gmbqrcode.com/api/embed/reviews";
const BUSINESS_ID = "67fb9e46c9936441d1ac74d3";
const EMBED_TOKEN = process.env.GMB_REVIEWS_TOKEN ?? "86a19a2b77a4e82f0fbd2c93505457936ead";

export const REVIEWS_REVALIDATE = 3600;

const EMPTY: ReviewsPayload = {
  reviews: [],
  businessName: "Dr Sunita Aesthetics",
  averageRating: null,
  totalCount: null,
  writeReviewUrl: null,
};

function clampLimit(limit: number) {
  return Math.min(50, Math.max(1, Math.round(limit)));
}

function asRecord(value: unknown): Record<string, unknown> | null {
  return value && typeof value === "object" ? (value as Record<string, unknown>) : null;
}

function normalizeReview(raw: unknown, index: number): GoogleReview | null {
  const item = asRecord(raw);
  if (!item) return null;

  const comment = typeof item.comment === "string" ? item.comment.trim() : "";
  if (!comment) return null;

  const rating = typeof item.rating === "number" ? item.rating : Number(item.rating);
  const reviewer =
    typeof item.reviewer === "string" && item.reviewer.trim()
      ? item.reviewer.trim()
      : "Google reviewer";

  return {
    id: typeof item.id === "string" && item.id ? item.id : `review-${index}`,
    reviewer,
    rating: Number.isFinite(rating) ? rating : 5,
    comment,
    createTime: typeof item.createTime === "string" ? item.createTime : "",
    updateTime: typeof item.updateTime === "string" ? item.updateTime : undefined,
    hasReply: Boolean(item.hasReply),
    reply: typeof item.reply === "string" ? item.reply : null,
  };
}

function normalizePayload(payload: unknown): ReviewsPayload {
  const root = asRecord(payload);
  if (!root) return EMPTY;

  const business = asRecord(root.business);
  const reviews = Array.isArray(root.reviews)
    ? root.reviews.map(normalizeReview).filter((review): review is GoogleReview => Boolean(review))
    : [];

  const averageRating =
    typeof root.averageRating === "number"
      ? root.averageRating
      : typeof business?.averageRating === "number"
        ? business.averageRating
        : null;

  // API totalCount is only the synced subset — keep it for debugging, but the
  // UI badge uses GOOGLE_MAPS_REVIEW_COUNT via reviewCountLabel().
  const totalCount =
    typeof root.totalCount === "number"
      ? root.totalCount
      : typeof asRecord(root.meta)?.available === "number"
        ? (asRecord(root.meta)?.available as number)
        : null;

  const writeReviewUrl =
    typeof root.writeReviewUrl === "string"
      ? root.writeReviewUrl
      : typeof business?.writeReviewUrl === "string"
        ? business.writeReviewUrl
        : null;

  const businessName =
    typeof root.businessName === "string" && root.businessName
      ? root.businessName
      : typeof business?.name === "string" && business.name
        ? business.name
        : EMPTY.businessName;

  return { reviews, businessName, averageRating, totalCount, writeReviewUrl };
}

async function fetchPublicReviews(limit: number): Promise<ReviewsPayload | null> {
  const apiKey = process.env.REVIEWS_API_KEY?.trim();
  if (!apiKey) return null;

  const url = `${PUBLIC_REVIEWS_API}?businessId=${BUSINESS_ID}&limit=${limit}`;
  const response = await fetch(url, {
    headers: { "x-api-key": apiKey },
    next: { revalidate: REVIEWS_REVALIDATE },
    signal: AbortSignal.timeout(8_000),
  });

  if (!response.ok) return null;
  return normalizePayload(await response.json());
}

async function fetchEmbedReviews(limit: number): Promise<ReviewsPayload | null> {
  const query = new URLSearchParams({
    token: EMBED_TOKEN,
    limit: String(limit),
    minRating: "4",
    sort: "newest",
    withText: "true",
    includeReplies: "false",
  });

  const response = await fetch(`${EMBED_REVIEWS_API}?${query}`, {
    next: { revalidate: REVIEWS_REVALIDATE },
    signal: AbortSignal.timeout(8_000),
  });

  if (!response.ok) return null;
  return normalizePayload(await response.json());
}

/** Server-only: fetch Google reviews. Prefers public API key; falls back to embed token. */
export async function getGoogleReviews(limit = 25): Promise<ReviewsPayload> {
  const safeLimit = clampLimit(limit);

  try {
    const fromPublic = await fetchPublicReviews(safeLimit);
    if (fromPublic?.reviews.length) return fromPublic;

    const fromEmbed = await fetchEmbedReviews(safeLimit);
    if (fromEmbed?.reviews.length) return fromEmbed;
  } catch {
    // Fall through to empty payload — UI can show a quiet empty state.
  }

  return EMPTY;
}
