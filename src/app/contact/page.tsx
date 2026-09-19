import type { Metadata } from "next";
import { IvoryContact } from "@/components/home/IvoryContact";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Contact Us | Dr Sunita Aesthetics Visakhapatnam",
  description:
    "Visit Dr. Sunita Aesthetics in Seethammadara, Visakhapatnam or send an enquiry. Find clinic address, phone, email, hours and the appointment form.",
  path: "/contact",
  keywords: [
    "contact Dr Sunita Ghanta",
    "plastic surgeon Visakhapatnam contact",
    "Dr Sunita Aesthetics address",
    "aesthetic clinic Vizag phone",
    "book consultation Visakhapatnam",
  ],
});

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Contact Us", path: "/contact" },
        ])}
      />
      <IvoryContact />
    </>
  );
}
