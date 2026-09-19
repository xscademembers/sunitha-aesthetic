"use client";

import Link from "next/link";
import { CASE_STUDIES } from "@/data/caseStudies";
import { FillImage } from "./FillImage";
import { IvoryCta, IvoryShell } from "./IvoryShell";

export function IvoryCaseStudies() {
  const [featured, ...studies] = CASE_STUDIES;

  return (
    <IvoryShell>
      <main id="main-content">
        <div className="home-band-white">
          <div className="home-wrap pt-3 pb-6 sm:pt-4 sm:pb-8 lg:pt-6 lg:pb-10">
            <section className="neo rounded-[24px] p-5 sm:rounded-[40px] sm:p-7 lg:px-12 lg:py-9">
              <div className="grid items-stretch gap-5 lg:grid-cols-[0.85fr_1.15fr] lg:gap-10">
                <div className="flex flex-col justify-center">
                  <div className="home-kicker mb-4 font-ui sm:mb-5">Real patient journeys</div>
                  <h1 className="home-display mb-4 text-[clamp(36px,8.4vw,72px)] font-extralight leading-[0.96] tracking-[-0.03em] text-black sm:mb-5">
                    Thoughtful care.
                    <br />
                    <em className="font-light italic text-maroon">Honest stories.</em>
                  </h1>
                  <p className="home-display mb-6 max-w-[430px] text-[16px] font-light leading-[1.62] text-pretty text-black sm:mb-7 sm:text-[19px]">
                    Every patient arrives with a different concern and a different idea of feeling
                    comfortable again. These stories share how careful assessment, individual planning
                    and supported recovery shaped their experience.
                  </p>
                  <div className="flex flex-wrap gap-x-6 gap-y-2 border-t border-black/10 pt-5 font-ui text-[11px] uppercase tracking-[0.14em] text-black">
                    <span>100% real patients</span>
                    <span>Visakhapatnam</span>
                    <span>Shared with consent</span>
                  </div>
                </div>

                <Link
                  href={`/case-studies/${featured.slug}`}
                  className="neo neo-press neo-media relative isolate block min-h-[320px] overflow-hidden rounded-[22px] bg-maroon sm:min-h-[400px] sm:rounded-[32px] lg:min-h-[460px]"
                >
                  <FillImage src={featured.heroImage} alt={featured.title} priority className="object-[center_18%]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-5 sm:p-8">
                    <span className="inline-flex rounded-full bg-white/95 px-3.5 py-1.5 font-ui text-[10px] uppercase tracking-[0.16em] text-black">
                      Featured · Case {featured.number}
                    </span>
                    <h2 className="home-display mt-3 mb-2 max-w-[520px] text-[clamp(22px,4vw,34px)] font-light leading-[1.15] text-pretty text-white">
                      {featured.title}
                    </h2>
                    <p className="home-display mb-4 hidden max-w-[480px] text-[15px] font-light leading-[1.55] text-pretty text-white/90 sm:block">
                      {featured.excerpt}
                    </p>
                    <span className="font-ui text-[11px] uppercase tracking-[0.14em] text-white">
                      Read patient story →
                    </span>
                  </div>
                </Link>
              </div>
            </section>
          </div>
        </div>

        <section className="home-band-maroon py-12 lg:py-20">
          <div className="home-wrap">
            <div className="home-on-maroon mb-8 flex flex-col gap-4 sm:mb-10 sm:flex-row sm:flex-wrap sm:items-end sm:justify-between">
              <div>
                <div className="home-kicker mb-3 font-ui sm:mb-4">The collection</div>
                <h2 className="home-display m-0 text-[clamp(32px,6vw,54px)] font-extralight leading-[1.04] tracking-[-0.025em]">
                  More stories of comfort and confidence.
                </h2>
              </div>
              <p className="home-display m-0 max-w-[300px] text-[16px] font-light leading-[1.65] text-pretty">
                Explore each patient’s concern, consultation, treatment plan and outcome.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {studies.map((study) => (
                <Link
                  key={study.slug}
                  href={`/case-studies/${study.slug}`}
                  className="neo neo-press group overflow-hidden rounded-[24px] sm:rounded-[32px]"
                >
                  <div className="neo-media relative aspect-[16/10] overflow-hidden bg-maroon">
                    <FillImage src={study.heroImage} alt={study.title} className="object-[center_18%]" />
                    <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3.5 py-1.5 font-ui text-[10px] uppercase tracking-[0.16em] text-black">
                      {study.category} · {study.number}
                    </span>
                  </div>
                  <div className="px-5 py-5 sm:px-7 sm:py-7">
                    <div className="flex flex-wrap gap-2">
                      {study.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-white px-3 py-1.5 font-ui text-[10px] uppercase tracking-[0.12em] text-black"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="home-display mt-4 mb-3 text-[22px] font-light leading-[1.25] text-pretty text-black sm:text-[26px]">
                      {study.title}
                    </h3>
                    <p className="home-display mb-5 text-[15px] font-light leading-[1.6] text-pretty text-black">
                      {study.excerpt}
                    </p>
                    <div className="flex items-center justify-between font-ui text-[11px] uppercase tracking-[0.14em] text-maroon">
                      <span>{study.readTime}</span>
                      <span>Read story →</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <IvoryCta
          kicker="Your story is personal"
          title={
            <>
              Begin with a private, <em className="italic text-maroon">no-pressure conversation.</em>
            </>
          }
          body="Meet Dr. Sunita to discuss your concern, understand the available options and decide what feels right for you."
        />
      </main>
    </IvoryShell>
  );
}
