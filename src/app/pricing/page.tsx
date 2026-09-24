import type { Metadata } from "next";
import { IvoryPricing } from "@/components/home/IvoryPricing";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Treatment & Procedure Pricing | Dr Sunita Aesthetics Visakhapatnam",
  description:
    "Transparent treatment and procedure pricing at Dr Sunita Aesthetics, Visakhapatnam. Indicative INR and USD ranges for face, body, breast, hair, injectables, laser and reconstructive care.",
  path: "/pricing",
  keywords: [
    "plastic surgery cost Visakhapatnam",
    "cosmetic surgery price Vizag",
    "Dr Sunita Ghanta pricing",
    "rhinoplasty cost Visakhapatnam",
    "liposuction cost Vizag",
    "gynecomastia surgery price",
  ],
});

export default function PricingPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Pricing", path: "/pricing" },
        ])}
      />
      <IvoryPricing />
    </>
  );
}
