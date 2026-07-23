import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { AppointmentPopup } from "@/components/AppointmentPopup";
import { GetAppointmentButton } from "@/components/BrandButtons";
import { Disclaimer } from "@/components/Disclaimer";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { CASE_STUDIES } from "@/data/caseStudies";

export const metadata: Metadata = {
  title: "Patient Case Studies | Dr Sunita Aesthetics",
  description:
    "Read real patient journeys across breast, body and facial plastic surgery at Dr Sunita Aesthetics in Visakhapatnam.",
};

export default function CaseStudiesPage() {
  const [featured, ...studies] = CASE_STUDIES;

  return (
    <>
      <SiteHeader />
      <main>
        <section className="relative overflow-hidden bg-[#f8f1e8] px-6 py-16 lg:px-[72px] lg:py-24">
          <div className="pointer-events-none absolute -right-24 -top-32 size-[440px] rounded-full bg-maroon/10 blur-3xl" />
          <div className="relative mx-auto grid max-w-[1320px] items-center gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <div>
              <p className="font-sans text-[13px] font-bold uppercase tracking-[0.22em] text-maroon">
                Real patient journeys
              </p>
              <h1 className="mt-5 max-w-[620px] font-serif text-[42px] leading-[1.14] text-black sm:text-[54px] lg:text-[66px]">
                Thoughtful care. Honest stories. Personal results.
              </h1>
              <p className="mt-7 max-w-[590px] font-sans text-[17px] leading-8 text-[#525252] lg:text-[19px]">
                Every patient arrives with a different concern and a different idea of feeling
                comfortable again. These stories share how careful assessment, individual planning
                and supported recovery shaped their experience.
              </p>
              <div className="mt-9 flex flex-wrap gap-x-8 gap-y-3 border-t border-maroon/20 pt-7 font-sans text-[13px] uppercase tracking-[0.13em] text-[#555]">
                <span>100% real patients</span>
                <span>Visakhapatnam-based care</span>
                <span>Shared with consent</span>
              </div>
            </div>

            <Link
              href={`/case-studies/${featured.slug}`}
              className="group relative block min-h-[480px] overflow-hidden rounded-[34px] bg-black shadow-[0_30px_70px_-35px_rgba(75,33,29,0.55)] sm:min-h-[580px]"
            >
              <Image
                src={featured.heroImage}
                alt={featured.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.025]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-7 text-white sm:p-10">
                <span className="inline-flex rounded-full bg-maroon px-4 py-2 font-sans text-[11px] font-bold uppercase tracking-[0.14em]">
                  Featured · Case {featured.number}
                </span>
                <h2 className="mt-5 max-w-[780px] font-serif text-[29px] leading-[1.25] sm:text-[42px]">
                  {featured.title}
                </h2>
                <p className="mt-4 max-w-[700px] font-sans text-[15px] leading-7 text-white/80 sm:text-[17px]">
                  {featured.excerpt}
                </p>
                <span className="mt-6 inline-flex items-center gap-3 font-sans text-[13px] font-bold uppercase tracking-[0.15em]">
                  Read patient story <span aria-hidden>→</span>
                </span>
              </div>
            </Link>
          </div>
        </section>

        <section className="bg-white px-6 py-20 lg:px-[72px] lg:py-28">
          <div className="mx-auto max-w-[1320px]">
            <div className="max-w-[760px]">
              <p className="font-sans text-[13px] font-bold uppercase tracking-[0.22em] text-maroon">
                The collection
              </p>
              <h2 className="mt-3 font-serif text-[34px] leading-[1.25] text-black sm:text-[46px]">
                More stories of comfort and confidence
              </h2>
              <p className="mt-4 font-sans text-[17px] leading-7 text-[#666]">
                Explore each patient&rsquo;s concern, consultation, treatment plan and outcome.
              </p>
            </div>

            <div className="mt-12 grid gap-8 md:grid-cols-2">
              {studies.map((study) => (
                <Link
                  key={study.slug}
                  href={`/case-studies/${study.slug}`}
                  className="card-lift group overflow-hidden rounded-[24px] border border-black/10 bg-[#fcfaf7]"
                >
                  <div className="relative aspect-[16/11] overflow-hidden bg-[#eee]">
                    <Image
                      src={study.heroImage}
                      alt={study.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.025]"
                    />
                    <span className="absolute left-5 top-5 rounded-full bg-white/95 px-4 py-2 font-sans text-[11px] font-bold uppercase tracking-[0.13em] text-maroon shadow-sm">
                      {study.category} · {study.number}
                    </span>
                  </div>
                  <div className="p-6 sm:p-8">
                    <div className="flex flex-wrap gap-2">
                      {study.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-maroon/15 bg-white px-3 py-1.5 font-sans text-[11px] text-[#666]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="mt-5 font-serif text-[26px] leading-[1.32] text-black sm:text-[30px]">
                      {study.title}
                    </h3>
                    <p className="mt-4 font-sans text-[15px] leading-7 text-[#666]">
                      {study.excerpt}
                    </p>
                    <div className="mt-6 flex items-center justify-between border-t border-black/10 pt-5 font-sans text-[12px] font-bold uppercase tracking-[0.12em] text-maroon">
                      <span>{study.readTime}</span>
                      <span>Read story →</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#f8f1e8] px-6 py-20 text-center lg:px-[72px]">
          <p className="font-sans text-[13px] font-bold uppercase tracking-[0.22em] text-maroon">
            Your story is personal
          </p>
          <h2 className="mx-auto mt-4 max-w-[800px] font-serif text-[34px] leading-[1.28] text-black sm:text-[46px]">
            Begin with a private, no-pressure conversation
          </h2>
          <p className="mx-auto mt-5 max-w-[690px] font-sans text-[17px] leading-8 text-[#666]">
            Meet Dr. Sunita to discuss your concern, understand the available options and decide
            what feels right for you.
          </p>
          <div className="mt-8">
            <GetAppointmentButton />
          </div>
        </section>
        <Disclaimer />
      </main>
      <SiteFooter />
      <AppointmentPopup />
    </>
  );
}
