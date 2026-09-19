import type { Metadata } from "next";
import { IvoryReviews } from "@/components/home/IvoryReviews";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Patient Reviews | Dr Sunita Aesthetics Visakhapatnam",
  description:
    "Read patient reviews and stories from Dr. Sunita Aesthetics in Visakhapatnam. 5.0 Google rating from 240+ reviews of honest, unhurried plastic surgery care.",
  path: "/reviews",
  keywords: [
    "Dr Sunita Ghanta reviews",
    "plastic surgeon Visakhapatnam reviews",
    "Dr Sunita Aesthetics Google reviews",
    "patient testimonials Vizag",
  ],
});

export default function ReviewsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Reviews", path: "/reviews" },
        ])}
      />
      <IvoryReviews />
    </>
  );
}
