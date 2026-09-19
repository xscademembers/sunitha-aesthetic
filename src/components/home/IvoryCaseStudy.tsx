"use client";

import Link from "next/link";
import type { CaseStudy } from "@/data/caseStudies";
import { FillImage } from "./FillImage";
import { IvoryCta, IvoryShell } from "./IvoryShell";

export function IvoryCaseStudy({
  study,
  related,
}: {
  study: CaseStudy;
  related: CaseStudy[];
}) {
  return (
    <IvoryShell>
      <main id="main-content">
        <div className="home-band-white">
          <div className="home-wrap pt-3 pb-6 sm:pt-4 sm:pb-8 lg:pt-6 lg:pb-10">
            <section className="neo rounded-[24px] p-5 sm:rounded-[40px] sm:p-7 lg:px-12 lg:py-9">
              <Link
                href="/case-studies"
                className="home-text-link mb-6 inline-flex w-fit font-ui text-[12px] uppercase tracking-[0.12em] text-black"
              >
                ← All case studies
              </Link>
              <div className="grid items-stretch gap-5 lg:grid-cols-2 lg:gap-10">
                <div className="flex flex-col justify-center">
                  <div className="mb-4 flex flex-wrap items-center gap-3">
                    <span className="home-kicker font-ui">Case {study.number}</span>
                    <span className="font-ui text-[11px] uppercase tracking-[0.16em] text-black/55">
                      {study.category} · {study.location}
                    </span>
                  </div>
                  <h1 className="home-display mb-4 text-[clamp(32px,6.4vw,58px)] font-extralight leading-[1.02] tracking-[-0.03em] text-black">
                    {study.title}
                  </h1>
                  <p className="home-display mb-4 text-[18px] font-light italic leading-[1.45] text-maroon sm:text-[22px]">
                    {study.subtitle}
                  </p>
                  <p className="home-display mb-6 max-w-[520px] text-[16px] font-light leading-[1.65] text-pretty text-black sm:text-[17px]">
                    {study.excerpt}
                  </p>
                  <dl className="grid grid-cols-2 gap-x-5 gap-y-4 border-t border-black/10 pt-5 sm:grid-cols-3">
                    <div>
                      <dt className="font-ui text-[10px] uppercase tracking-[0.16em] text-maroon">Procedure</dt>
                      <dd className="home-display mt-1.5 text-[15px] font-light leading-[1.45] text-black">
                        {study.procedure}
                      </dd>
                    </div>
                    {study.age && (
                      <div>
                        <dt className="font-ui text-[10px] uppercase tracking-[0.16em] text-maroon">Patient age</dt>
                        <dd className="home-display mt-1.5 text-[15px] font-light text-black">{study.age}</dd>
                      </div>
                    )}
                    <div>
                      <dt className="font-ui text-[10px] uppercase tracking-[0.16em] text-maroon">Journey</dt>
                      <dd className="home-display mt-1.5 text-[15px] font-light text-black">
                        {study.recovery ?? study.readTime}
                      </dd>
                    </div>
                  </dl>
                </div>
                <div className="neo neo-media relative min-h-[280px] overflow-hidden rounded-[22px] bg-maroon aspect-[4/5] sm:min-h-[360px] sm:rounded-[32px] lg:aspect-auto lg:h-full lg:min-h-[420px]">
                  <FillImage
                    src={study.heroImage}
                    alt={`${study.procedure} patient journey`}
                    priority
                    className="object-[center_18%]"
                  />
                </div>
              </div>
            </section>
          </div>
        </div>

        <article className="home-band-white py-12 lg:py-20">
          <div className="home-wrap">
            <div className="mx-auto max-w-[860px]">
              <div className="home-kicker mb-4 font-ui">The patient journey</div>
              <p className="home-display mb-10 text-[clamp(22px,3.6vw,34px)] font-light leading-[1.4] text-pretty text-black sm:mb-14">
                {study.intro}
              </p>

              <div className="flex flex-col gap-6 sm:gap-8">
                {study.sections.map((section, index) => (
                  <section key={section.title} className="neo rounded-[24px] p-5 sm:rounded-[32px] sm:p-8 lg:p-10">
                    <div className="grid gap-5 lg:grid-cols-[180px_1fr] lg:gap-10">
                      <div>
                        <span className="home-display text-[40px] font-extralight leading-none text-maroon/35 sm:text-[48px]">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <p className="mt-2 font-ui text-[11px] uppercase tracking-[0.16em] text-maroon">
                          {section.eyebrow}
                        </p>
                      </div>
                      <div>
                        <h2 className="home-display mt-0 mb-4 text-[clamp(24px,4vw,36px)] font-light leading-[1.2] text-black">
                          {section.title}
                        </h2>
                        <div className="space-y-4">
                          {section.paragraphs.map((paragraph) => (
                            <p
                              key={paragraph}
                              className="home-display m-0 text-[16px] font-light leading-[1.7] text-pretty text-black sm:text-[17px]"
                            >
                              {paragraph}
                            </p>
                          ))}
                        </div>
                        {section.points && (
                          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                            {section.points.map((point) => (
                              <li
                                key={point}
                                className="neo-inset flex gap-3 rounded-[18px] px-4 py-3.5 text-[14px] font-light leading-[1.5] text-black"
                              >
                                <span className="mt-[7px] size-1.5 shrink-0 rounded-full bg-maroon" />
                                {point}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>
                  </section>
                ))}
              </div>
            </div>
          </div>
        </article>

        <section className="home-band-maroon py-12 lg:py-20">
          <div className="home-wrap">
            <div className="home-on-maroon mb-8 text-center sm:mb-10">
              <div className="home-kicker mx-auto mb-4 font-ui">Patient result</div>
              <h2 className="home-display mx-auto mt-0 mb-4 max-w-[640px] text-[clamp(32px,6vw,54px)] font-extralight leading-[1.04] tracking-[-0.025em]">
                Before and after treatment.
              </h2>
              <p className="home-display mx-auto m-0 max-w-[560px] text-[16px] font-light leading-[1.65] text-pretty">
                Images are shared with patient consent. Healing and outcomes are individual, and results vary from person to person.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
              <figure className="neo neo-media relative aspect-square overflow-hidden rounded-[24px] sm:rounded-[32px]">
                <FillImage src={study.beforeImage} alt={`Before ${study.procedure}`} />
                <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3.5 py-1.5 font-ui text-[10px] uppercase tracking-[0.16em] text-black">
                  Before
                </span>
              </figure>
              <figure className="neo neo-media relative aspect-square overflow-hidden rounded-[24px] sm:rounded-[32px]">
                <FillImage src={study.afterImage} alt={`After ${study.procedure}`} />
                <span className="absolute left-4 top-4 rounded-full bg-maroon px-3.5 py-1.5 font-ui text-[10px] uppercase tracking-[0.16em] text-white">
                  After
                </span>
              </figure>
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-3">
              {study.outcomes.map((outcome) => (
                <div
                  key={outcome}
                  className="neo rounded-[22px] px-5 py-5 text-center sm:rounded-[26px] sm:py-6"
                >
                  <p className="home-display m-0 text-[18px] font-light leading-[1.4] text-black sm:text-[20px]">
                    {outcome}
                  </p>
                </div>
              ))}
            </div>

            <p className="home-display mx-auto mt-8 mb-0 max-w-[720px] text-center text-[clamp(18px,3vw,26px)] font-light italic leading-[1.5] text-white sm:mt-10">
              {study.closing}
            </p>
          </div>
        </section>

        {related.length > 0 && (
          <section className="home-band-white py-12 lg:py-20">
            <div className="home-wrap">
              <div className="mb-8 flex flex-col gap-4 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <div className="home-kicker mb-3 font-ui">Continue reading</div>
                  <h2 className="home-display m-0 text-[clamp(32px,6vw,54px)] font-extralight leading-[1.04] tracking-[-0.025em] text-black">
                    More patient stories.
                  </h2>
                </div>
                <Link
                  href="/case-studies"
                  className="home-text-link self-start font-ui text-[12px] uppercase tracking-[0.12em] text-black"
                >
                  View all →
                </Link>
              </div>
              <div className="grid gap-5 md:grid-cols-2">
                {related.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/case-studies/${item.slug}`}
                    className="neo neo-press grid overflow-hidden rounded-[24px] sm:grid-cols-[minmax(160px,38%)_1fr] sm:rounded-[32px]"
                  >
                    <div className="neo-media relative h-[180px] sm:h-full sm:min-h-[180px]">
                      <FillImage src={item.heroImage} alt={item.title} className="object-[center_18%]" />
                    </div>
                    <div className="flex flex-col justify-center px-5 py-5 sm:px-6">
                      <div className="font-ui text-[10px] uppercase tracking-[0.2em] text-maroon">
                        {item.category} · Case {item.number}
                      </div>
                      <h3 className="home-display mt-2 mb-4 text-[22px] font-light leading-[1.25] text-pretty text-black">
                        {item.title}
                      </h3>
                      <span className="font-ui text-[11px] uppercase tracking-[0.14em] text-maroon">
                        Read story →
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        <IvoryCta
          kicker="Personalised surgical care"
          title={
            <>
              Your consultation begins with <em className="italic text-maroon">listening.</em>
            </>
          }
          body="Discuss your concern privately with Dr. Sunita and receive an honest assessment of the options that may suit you."
        />
      </main>
    </IvoryShell>
  );
}
