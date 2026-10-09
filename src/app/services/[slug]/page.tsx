import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { IvoryService } from "@/components/home/IvoryService";
import { JsonLd } from "@/components/JsonLd";
import { SERVICES } from "@/data/services";
import { getGoogleReviews } from "@/lib/reviews.server";
import { absUrl, breadcrumbJsonLd, pageMetadata, SITE_NAME } from "@/lib/seo";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return {};
  return pageMetadata({
    title: `${service.title} in Visakhapatnam | ${SITE_NAME}`,
    description: service.metaDescription,
    path: `/services/${service.slug}`,
    keywords: [
      `${service.title} Visakhapatnam`,
      `${service.title} Vizag`,
      "Dr Sunita Ghanta",
      "plastic surgeon Visakhapatnam",
    ],
  });
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) notFound();

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  const procedureJsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    name: service.title,
    description: service.metaDescription,
    url: absUrl(`/services/${service.slug}`),
    procedureType: service.category,
    howPerformed: service.steps.map((step) => step.title).join(", "),
    performedBy: {
      "@type": "Physician",
      name: "Dr. Sunita Ghanta",
    },
  };

  const googleReviews = await getGoogleReviews(6);

  return (
    <>
      <JsonLd data={faqJsonLd} />
      <JsonLd data={procedureJsonLd} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: service.title, path: `/services/${service.slug}` },
        ])}
      />
      <IvoryService service={service} googleReviews={googleReviews} />
    </>
  );
}
