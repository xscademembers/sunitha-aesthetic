import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { IvoryCaseStudy } from "@/components/home/IvoryCaseStudy";
import { JsonLd } from "@/components/JsonLd";
import { CASE_STUDIES, getCaseStudy } from "@/data/caseStudies";
import { absUrl, breadcrumbJsonLd, pageMetadata, SITE_NAME } from "@/lib/seo";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return CASE_STUDIES.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return {};

  return pageMetadata({
    title: `${study.procedure} Case Study | ${SITE_NAME}`,
    description: study.excerpt,
    path: `/case-studies/${study.slug}`,
    image: study.heroImage,
    keywords: [
      `${study.procedure} Visakhapatnam`,
      `${study.procedure} case study`,
      "Dr Sunita Ghanta",
    ],
  });
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  const related = CASE_STUDIES.filter((item) => item.slug !== study.slug).slice(0, 2);
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: study.title,
    description: study.excerpt,
    image: absUrl(study.heroImage),
    about: study.procedure,
    url: absUrl(`/case-studies/${study.slug}`),
    author: {
      "@type": "Physician",
      name: "Dr. Sunita Ghanta",
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
    },
  };

  return (
    <>
      <JsonLd data={articleJsonLd} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Case Studies", path: "/case-studies" },
          { name: study.procedure, path: `/case-studies/${study.slug}` },
        ])}
      />
      <IvoryCaseStudy study={study} related={related} />
    </>
  );
}
