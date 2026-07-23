import { NextResponse } from "next/server";

const REVIEWS_API = "https://www.gmbqrcode.com/api/embed/reviews";
const DEFAULT_WIDGET_TOKEN = "86a19a2b77a4e82f0fbd2c93505457936ead";

export const revalidate = 3600;

export async function GET() {
  const query = new URLSearchParams({
    token: process.env.GMB_REVIEWS_TOKEN ?? DEFAULT_WIDGET_TOKEN,
    limit: "10",
    minRating: "4",
    sort: "newest",
    withText: "true",
    includeReplies: "false",
  });

  try {
    const response = await fetch(`${REVIEWS_API}?${query}`, {
      next: { revalidate },
      signal: AbortSignal.timeout(8_000),
    });

    if (!response.ok) {
      return NextResponse.json({ message: "Could not load reviews" }, { status: 502 });
    }

    const payload: unknown = await response.json();
    return NextResponse.json(payload, {
      headers: {
        "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
      },
    });
  } catch {
    return NextResponse.json({ message: "Could not load reviews" }, { status: 502 });
  }
}
