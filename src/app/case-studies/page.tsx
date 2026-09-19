import type { Metadata } from "next";
import { IvoryCaseStudies } from "@/components/home/IvoryCaseStudies";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Patient Case Studies | Dr Sunita Aesthetics",
  description:
    "Read real patient journeys across breast, body and facial plastic surgery with Dr. Sunita Ghanta in Visakhapatnam. Shared with consent.",
  path: "/case-studies",
  keywords: [
    "plastic surgery case studies Visakhapatnam",
    "before after plastic surgery Vizag",
    "Dr Sunita Ghanta patient stories",
  ],
});

export default function CaseStudiesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Case Studies", path: "/case-studies" },
        ])}
      />
      <IvoryCaseStudies />
    </>
  );
}
