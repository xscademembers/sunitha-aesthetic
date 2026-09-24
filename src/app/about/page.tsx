import type { Metadata } from "next";
import { IvoryAbout } from "@/components/home/IvoryAbout";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "About Dr. Sunita Ghanta | Plastic Surgeon in Visakhapatnam",
  description:
    "Meet Dr. Sunita Ghanta, a board-certified plastic, aesthetic and reconstructive surgeon in Visakhapatnam. Learn about her qualifications, approach and clinic.",
  path: "/about",
  image: "/images/dr-sunita/portraits/scrubs-stethoscope.jpg",
  keywords: [
    "Dr Sunita Ghanta",
    "about Dr Sunita",
    "plastic surgeon Visakhapatnam",
    "cosmetic surgeon Vizag",
    "board certified plastic surgeon Andhra Pradesh",
  ],
});

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "About Dr. Sunita Ghanta", path: "/about" },
        ])}
      />
      <IvoryAbout />
    </>
  );
}
