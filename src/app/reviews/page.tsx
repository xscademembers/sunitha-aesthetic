import type { Metadata } from "next";
import { IvoryReviews } from "@/components/home/IvoryReviews";
import { JsonLd } from "@/components/JsonLd";
import { getGoogleReviews } from "@/lib/reviews.server";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Google Reviews | Dr Sunita Aesthetics Visakhapatnam",
  description:
    "Read Google reviews from Dr. Sunita Aesthetics in Visakhapatnam. Real patient feedback on honest, unhurried plastic surgery care.",
  path: "/reviews",
  keywords: [
    "Dr Sunita Ghanta reviews",
    "plastic surgeon Visakhapatnam reviews",
    "Dr Sunita Aesthetics Google reviews",
    "patient testimonials Vizag",
  ],
});

export default async function ReviewsPage() {
  const googleReviews = await getGoogleReviews(50);

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Reviews", path: "/reviews" },
        ])}
      />
      <IvoryReviews googleReviews={googleReviews} />
    </>
  );
}
