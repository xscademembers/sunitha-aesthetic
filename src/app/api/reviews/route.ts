import { NextResponse } from "next/server";
import { getGoogleReviews } from "@/lib/reviews.server";

export const revalidate = 3600;

export async function GET() {
  try {
    const payload = await getGoogleReviews(25);

    if (!payload.reviews.length) {
      return NextResponse.json({ message: "Could not load reviews" }, { status: 502 });
    }

    return NextResponse.json(payload, {
      headers: {
        "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
      },
    });
  } catch {
    return NextResponse.json({ message: "Could not load reviews" }, { status: 502 });
  }
}
