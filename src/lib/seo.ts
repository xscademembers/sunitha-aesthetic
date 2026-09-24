import type { Metadata } from "next";
import { CONTACT } from "@/types/content";
import { HOME_FAQS } from "@/data/homeContent";

export const SITE_URL = "https://drsunitaesthetics.com";
export const SITE_NAME = "Dr Sunita Aesthetics";
export const SITE_TITLE =
  "Plastic Surgeon in Visakhapatnam | Dr. Sunita Ghanta";
export const SITE_DESCRIPTION =
  "Dr. Sunita Ghanta is a board-certified plastic, cosmetic and reconstructive surgeon in Visakhapatnam with 17+ years of experience. Face, body, breast, hair and aesthetic treatments with honest advice and natural-looking results.";
export const SITE_OG_IMAGE = "/images/dr-sunita/portraits/white-coat-crossed.jpg";
export const SITE_KEYWORDS = [
  "plastic surgeon in Visakhapatnam",
  "cosmetic surgeon Vizag",
  "Dr Sunita Ghanta",
  "Dr Sunita Aesthetics",
  "rhinoplasty Visakhapatnam",
  "liposuction Vizag",
  "gynecomastia surgery Visakhapatnam",
  "tummy tuck Visakhapatnam",
  "hair transplant Vizag",
  "aesthetic clinic Visakhapatnam",
];

export function absUrl(path = "/") {
  if (path.startsWith("http://") || path.startsWith("https://")) return path;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${normalized === "/" ? "/" : normalized}`;
}

export function pageMetadata({
  title,
  description,
  path,
  image = SITE_OG_IMAGE,
  keywords,
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
  keywords?: string[];
}): Metadata {
  const url = absUrl(path);
  const brandedTitle = title.includes(SITE_NAME) || title.includes("Dr. Sunita")
    ? title
    : `${title} | ${SITE_NAME}`;

  return {
    title,
    description,
    keywords: keywords ?? SITE_KEYWORDS,
    alternates: { canonical: path },
    openGraph: {
      title: brandedTitle,
      description,
      url,
      siteName: SITE_NAME,
      locale: "en_IN",
      type: "website",
      images: [
        {
          url: image,
          alt: brandedTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: brandedTitle,
      description,
      images: [image],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export function clinicJsonLd() {
  const clinicId = `${SITE_URL}/#clinic`;
  const physicianId = `${SITE_URL}/#physician`;
  const websiteId = `${SITE_URL}/#website`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["MedicalClinic", "PlasticSurgery"],
        "@id": clinicId,
        name: SITE_NAME,
        url: SITE_URL,
        image: absUrl(SITE_OG_IMAGE),
        logo: absUrl("/images/logo.svg"),
        email: CONTACT.email,
        telephone: CONTACT.phone,
        medicalSpecialty: "PlasticSurgery",
        priceRange: "₹₹₹",
        address: {
          "@type": "PostalAddress",
          streetAddress:
            "Sunita Nursing Home, TPT Colony, Balaya Sastri Layout, Seethammadara",
          addressLocality: "Visakhapatnam",
          addressRegion: "Andhra Pradesh",
          postalCode: "530013",
          addressCountry: "IN",
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
            ],
            opens: "10:00",
            closes: "19:00",
          },
        ],
        founder: { "@id": physicianId },
        employee: { "@id": physicianId },
        areaServed: [
          "Visakhapatnam",
          "Vizag",
          "Andhra Pradesh",
          "India",
        ],
        sameAs: [
          "https://www.facebook.com/SunitaAesthetics",
          "https://www.instagram.com/drsunita_aesthetics/",
          "https://www.youtube.com/playlist?list=PLu5_mp4Nk_R0TlcTOK-YBXRwMH0T48JA_",
        ],
      },
      {
        "@type": "Physician",
        "@id": physicianId,
        name: "Dr. Sunita Ghanta",
        url: absUrl("/about"),
        image: absUrl(SITE_OG_IMAGE),
        jobTitle: "Consultant Plastic and Aesthetic Surgeon",
        description: SITE_DESCRIPTION,
        medicalSpecialty: ["PlasticSurgery", "CosmeticSurgery"],
        worksFor: { "@id": clinicId },
        alumniOf: [
          { "@type": "EducationalOrganization", name: "MBBS" },
          { "@type": "EducationalOrganization", name: "DNB General Surgery" },
          {
            "@type": "EducationalOrganization",
            name: "MCh Plastic and Reconstructive Surgery",
          },
        ],
        address: {
          "@type": "PostalAddress",
          addressLocality: "Visakhapatnam",
          addressRegion: "Andhra Pradesh",
          addressCountry: "IN",
        },
      },
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: SITE_URL,
        name: SITE_NAME,
        description: SITE_DESCRIPTION,
        inLanguage: "en-IN",
        publisher: { "@id": clinicId },
      },
    ],
  };
}

export function homeFaqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: HOME_FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absUrl(item.path),
    })),
  };
}
