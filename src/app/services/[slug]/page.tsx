import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AppointmentPopup } from "@/components/AppointmentPopup";
import { ContactSection } from "@/components/ContactSection";
import { Disclaimer } from "@/components/Disclaimer";
import { MeetTheDoctor } from "@/components/MeetTheDoctor";
import {
  BeforeAfterGallery,
  FinalCTA,
  KeyBenefits,
  PatientStories,
  RelatedServices,
  ServiceFAQs,
  ServiceHero,
  WhatToExpect,
  WhoIsItFor,
} from "@/components/ServiceSections";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { TestimonialSlider } from "@/components/TestimonialSlider";
import { SERVICES } from "@/data/services";

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
  return {
    title: `${service.title} in Visakhapatnam | Dr Sunita Aesthetics`,
    description: service.metaDescription,
  };
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

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <SiteHeader />
      <main>
        <ServiceHero service={service} />
        <KeyBenefits service={service} />
        <WhoIsItFor service={service} />
        <WhatToExpect service={service} />
        <BeforeAfterGallery service={service} />
        <PatientStories service={service} />
        <ServiceFAQs service={service} />
        <RelatedServices service={service} />
        <section id="reviews" className="bg-white px-6 pb-[72px] lg:px-[72px]">
          <p className="text-center font-sans text-[18px] font-bold leading-[25.2px] text-maroon">
            Trusted across Andhra Pradesh
          </p>
          <h2 className="mt-1 text-center font-serif text-[28px] leading-[1.4] text-black lg:text-[32px] lg:leading-[44.8px]">
            What Our Patients Say
          </h2>
          <div className="mx-auto mt-12 max-w-[952px]">
            <TestimonialSlider />
          </div>
        </section>
        <MeetTheDoctor />
        <FinalCTA service={service} />
        <ContactSection />
        <Disclaimer />
      </main>
      <SiteFooter />
      <AppointmentPopup />
    </>
  );
}
