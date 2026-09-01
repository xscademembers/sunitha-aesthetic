import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { GetAppointmentButton } from "@/components/BrandButtons";
import { Disclaimer } from "@/components/Disclaimer";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { CASE_STUDIES, getCaseStudy } from "@/data/caseStudies";

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

  return {
    title: `${study.procedure} Case Study | Dr Sunita Aesthetics`,
    description: study.excerpt,
    openGraph: {
      title: study.title,
      description: study.excerpt,
      images: [{ url: study.heroImage }],
    },
  };
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
    image: study.heroImage,
    about: study.procedure,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <SiteHeader />
      <main className="bg-white">
        <section className="bg-white px-6 pb-16 pt-10 lg:px-[72px] lg:pb-24 lg:pt-14">
          <div className="mx-auto max-w-[1320px]">
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 font-sans text-[13px] font-bold uppercase tracking-[0.14em] text-maroon transition-colors hover:text-black"
            >
              <span aria-hidden>←</span> All case studies
            </Link>

            <div className="mt-8 grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-maroon px-4 py-2 font-sans text-[11px] font-bold uppercase tracking-[0.13em] text-white">
                    Case {study.number}
                  </span>
                  <span className="font-sans text-[12px] font-bold uppercase tracking-[0.14em] text-black">
                    {study.category} · {study.location}
                  </span>
                </div>
                <h1 className="mt-6 font-serif text-[39px] leading-[1.16] text-black sm:text-[52px] lg:text-[60px]">
                  {study.title}
                </h1>
                <p className="mt-5 font-serif text-[20px] leading-[1.55] text-maroon sm:text-[23px]">
                  {study.subtitle}
                </p>
                <p className="mt-6 max-w-[650px] font-sans text-[17px] leading-8 text-black">
                  {study.excerpt}
                </p>
                <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-maroon/20 pt-7 sm:grid-cols-3">
                  <div>
                    <dt className="font-sans text-[11px] font-bold uppercase tracking-[0.14em] text-black">
                      Procedure
                    </dt>
                    <dd className="mt-2 font-sans text-[14px] leading-6 text-black">
                      {study.procedure}
                    </dd>
                  </div>
                  {study.age && (
                    <div>
                      <dt className="font-sans text-[11px] font-bold uppercase tracking-[0.14em] text-black">
                        Patient age
                      </dt>
                      <dd className="mt-2 font-sans text-[14px] text-black">{study.age}</dd>
                    </div>
                  )}
                  <div>
                    <dt className="font-sans text-[11px] font-bold uppercase tracking-[0.14em] text-black">
                      Journey
                    </dt>
                    <dd className="mt-2 font-sans text-[14px] text-black">
                      {study.recovery ?? study.readTime}
                    </dd>
                  </div>
                </dl>
              </div>

              <div className="relative aspect-[4/3] overflow-hidden rounded-[30px] bg-white shadow-[0_30px_70px_-35px_rgba(161,83,78,0.55)] lg:aspect-[5/4]">
                <Image
                  src={study.heroImage}
                  alt={`${study.procedure} patient journey`}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <article className="px-6 py-16 lg:px-[72px] lg:py-24">
          <div className="mx-auto max-w-[1060px]">
            <p className="font-sans text-[13px] font-bold uppercase tracking-[0.2em] text-maroon">
              The patient journey
            </p>
            <p className="mt-5 max-w-[900px] font-serif text-[28px] leading-[1.55] text-black sm:text-[34px]">
              {study.intro}
            </p>

            <div className="mt-16 space-y-16 lg:mt-24 lg:space-y-24">
              {study.sections.map((section, index) => (
                <section
                  key={section.title}
                  className="grid gap-8 border-t border-black/10 pt-10 lg:grid-cols-[220px_1fr] lg:gap-14"
                >
                  <div>
                    <span className="font-serif text-[52px] leading-none text-maroon/25">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <p className="mt-3 font-sans text-[12px] font-bold uppercase tracking-[0.17em] text-maroon">
                      {section.eyebrow}
                    </p>
                  </div>
                  <div>
                    <h2 className="font-serif text-[31px] leading-[1.28] text-black sm:text-[39px]">
                      {section.title}
                    </h2>
                    <div className="mt-6 space-y-5">
                      {section.paragraphs.map((paragraph) => (
                        <p
                          key={paragraph}
                          className="font-sans text-[17px] leading-8 text-black"
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>
                    {section.points && (
                      <ul className="mt-8 grid gap-3 rounded-[20px] bg-white p-6 sm:grid-cols-2 sm:p-8">
                        {section.points.map((point) => (
                          <li
                            key={point}
                            className="flex gap-3 font-sans text-[15px] leading-6 text-black"
                          >
                            <span className="mt-[9px] size-1.5 shrink-0 rounded-full bg-maroon" />
                            {point}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </article>

        <section className="bg-white px-6 py-16 lg:px-[72px] lg:py-24">
          <div className="mx-auto max-w-[1180px]">
            <div className="text-center">
              <p className="font-sans text-[13px] font-bold uppercase tracking-[0.2em] text-maroon">
                Patient result
              </p>
              <h2 className="mt-3 font-serif text-[34px] leading-[1.3] text-black sm:text-[44px]">
                Before and after treatment
              </h2>
              <p className="mx-auto mt-4 max-w-[700px] font-sans text-[15px] leading-7 text-black">
                Images are shared with patient consent. Healing and outcomes are individual, and
                results vary from person to person.
              </p>
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              <figure className="overflow-hidden rounded-[24px] bg-white shadow-sm">
                <div className="relative aspect-square bg-white">
                  <Image
                    src={study.beforeImage}
                    alt={`Before ${study.procedure}`}
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-black/70 px-4 py-2 font-sans text-[11px] font-bold uppercase tracking-[0.14em] text-white backdrop-blur-sm">
                    Before
                  </span>
                </div>
              </figure>
              <figure className="overflow-hidden rounded-[24px] bg-white shadow-sm">
                <div className="relative aspect-square bg-white">
                  <Image
                    src={study.afterImage}
                    alt={`After ${study.procedure}`}
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-maroon px-4 py-2 font-sans text-[11px] font-bold uppercase tracking-[0.14em] text-white">
                    After
                  </span>
                </div>
              </figure>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {study.outcomes.map((outcome) => (
                <div
                  key={outcome}
                  className="rounded-[18px] border border-maroon/15 bg-white px-5 py-5 text-center font-serif text-[20px] text-black"
                >
                  {outcome}
                </div>
              ))}
            </div>

            <p className="mx-auto mt-10 max-w-[850px] text-center font-serif text-[24px] leading-[1.6] text-black sm:text-[28px]">
              {study.closing}
            </p>
          </div>
        </section>

        <section className="bg-maroon px-6 py-16 text-center text-white lg:px-[72px] lg:py-20">
          <p className="font-sans text-[12px] font-bold uppercase tracking-[0.2em] text-white/70">
            Personalised surgical care
          </p>
          <h2 className="mx-auto mt-4 max-w-[850px] font-serif text-[34px] leading-[1.28] sm:text-[46px]">
            Your consultation begins with listening
          </h2>
          <p className="mx-auto mt-5 max-w-[700px] font-sans text-[17px] leading-8 text-white/80">
            Discuss your concern privately with Dr. Sunita and receive an honest assessment of
            the options that may suit you.
          </p>
          <div className="mt-8 [&_button]:border-white [&_button]:bg-white [&_button]:text-maroon">
            <GetAppointmentButton />
          </div>
        </section>

        <section className="bg-white px-6 py-16 lg:px-[72px] lg:py-24">
          <div className="mx-auto max-w-[1180px]">
            <div className="flex items-end justify-between gap-6">
              <div>
                <p className="font-sans text-[13px] font-bold uppercase tracking-[0.2em] text-maroon">
                  Continue reading
                </p>
                <h2 className="mt-3 font-serif text-[34px] text-black">More patient stories</h2>
              </div>
              <Link
                href="/case-studies"
                className="hidden font-sans text-[13px] font-bold uppercase tracking-[0.13em] text-maroon sm:block"
              >
                View all →
              </Link>
            </div>
            <div className="mt-10 grid gap-7 md:grid-cols-2">
              {related.map((item) => (
                <Link
                  key={item.slug}
                  href={`/case-studies/${item.slug}`}
                  className="card-lift group grid overflow-hidden rounded-[22px] border border-black/10 bg-white sm:grid-cols-[180px_1fr]"
                >
                  <div className="relative min-h-[210px] bg-white sm:min-h-full">
                    <Image
                      src={item.heroImage}
                      alt={item.title}
                      fill
                      sizes="(max-width: 640px) 100vw, 180px"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <p className="font-sans text-[11px] font-bold uppercase tracking-[0.14em] text-maroon">
                      {item.category} · Case {item.number}
                    </p>
                    <h3 className="mt-3 font-serif text-[23px] leading-[1.35] text-black">
                      {item.title}
                    </h3>
                    <p className="mt-4 font-sans text-[12px] font-bold uppercase tracking-[0.12em] text-maroon">
                      Read story →
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <Disclaimer />
      </main>
      <SiteFooter />
    </>
  );
}
