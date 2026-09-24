"use client";

import Link from "next/link";
import {
  BOOK_LABEL,
  HOME_COPY,
  HOME_IMAGES,
  SURGEON_CREDENTIALS,
} from "@/data/homeContent";
import { getCatalogItem } from "@/data/serviceCatalog";
import type { BeforeAfterCase, ServiceData } from "@/data/services";
import { FillImage } from "./FillImage";
import { FaqAccordion } from "./FaqAccordion";
import { useBook } from "./BookProvider";
import { IvoryCta, IvoryDisclaimer, IvoryShell } from "./IvoryShell";

export function IvoryService({ service }: { service: ServiceData }) {
  return (
    <IvoryShell>
      <ServiceInner service={service} />
    </IvoryShell>
  );
}

function ServiceInner({ service }: { service: ServiceData }) {
  const { openBook } = useBook();
  const catalog = getCatalogItem(service.slug);
  const hasVideo = Boolean(service.youtubeVideoId) || !service.videoSrc.includes("BigBuckBunny");
  // Video pages show the video only — no service hero image.
  // Image-only pages use a unique per-service photo (never a shared category fallback).
  const heroImage = hasVideo
    ? (service.videoPoster ?? HOME_IMAGES.surgeonPortrait)
    : (catalog?.image ?? service.videoPoster ?? HOME_IMAGES.surgeonPortrait);
  const related = catalog?.category.items.filter((item) => item.slug !== service.slug) ?? [];
  const hasPhotos = service.beforeAfter.some((item) => item.image || item.before || item.after);

  return (
    <main id="main-content">
      <div className="home-band-white">
        <div className="home-wrap pt-3 pb-6 sm:pt-4 sm:pb-8 lg:pt-6 lg:pb-10">
          <section className="neo rounded-[24px] p-5 sm:rounded-[40px] sm:p-7 lg:px-12 lg:py-9">
            <div className="grid items-stretch gap-5 lg:grid-cols-2 lg:gap-10">
              <div className="flex flex-col justify-center">
                <div className="home-kicker mb-4 font-ui sm:mb-5">{service.category}</div>
                <h1 className="home-display mb-4 text-[clamp(36px,7.4vw,72px)] font-extralight leading-[0.96] tracking-[-0.03em] text-black sm:mb-5">
                  {service.title}
                  <br />
                  <em className="font-light italic text-maroon">in Visakhapatnam</em>
                </h1>
                <p className="home-display mb-6 max-w-[470px] text-[16px] font-light leading-[1.62] text-pretty text-black sm:mb-7 sm:text-[19px]">
                  {service.heroDescription}
                </p>
                <div className="flex flex-col items-stretch gap-3.5 sm:flex-row sm:flex-wrap sm:items-center sm:gap-[22px]">
                  <button type="button" onClick={openBook} className="neo-btn neo-btn-solid sm:!w-auto">
                    {BOOK_LABEL} <span className="text-[15px]">→</span>
                  </button>
                  <a
                    href="#benefits"
                    className="home-text-link self-center text-center font-ui text-[12px] uppercase tracking-[0.1em] text-black sm:self-auto sm:text-[13px]"
                  >
                    Why patients choose this
                  </a>
                </div>
              </div>

              {hasVideo ? (
                <div className="flex w-full items-center justify-center">
                  <div
                    className={[
                      "neo neo-media w-full overflow-hidden rounded-[22px] bg-black sm:rounded-[32px]",
                      service.youtubeVideoId ? "max-w-[640px] aspect-video" : "max-w-[360px] aspect-[9/16]",
                    ].join(" ")}
                  >
                    {service.youtubeVideoId ? (
                      <iframe
                        className="h-full w-full"
                        src={`https://www.youtube-nocookie.com/embed/${service.youtubeVideoId}?rel=0`}
                        title={`${service.title} with Dr. Sunita Ghanta`}
                        referrerPolicy="strict-origin-when-cross-origin"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      />
                    ) : (
                      <video
                        controls
                        playsInline
                        preload="metadata"
                        poster={service.videoPoster}
                        src={service.videoSrc}
                        className="h-full w-full bg-black object-cover"
                      />
                    )}
                  </div>
                </div>
              ) : (
                <div className="neo neo-media relative isolate min-h-[340px] overflow-hidden rounded-[22px] bg-maroon aspect-[4/5] sm:min-h-[400px] sm:rounded-[32px] lg:aspect-auto lg:h-full lg:min-h-[460px]">
                  <FillImage
                    src={heroImage}
                    alt={`${service.title} at Dr. Sunita Aesthetics, Visakhapatnam`}
                    priority
                    className="object-[center_18%]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                </div>
              )}
            </div>
          </section>
        </div>
      </div>

      <section id="benefits" className="home-band-white py-12 lg:py-20">
        <div className="home-wrap">
          <div className="mb-8 max-w-[720px] sm:mb-10">
            <div className="home-kicker mb-4 font-ui">Why patients choose this</div>
            <h2 className="home-display m-0 text-[clamp(32px,6vw,54px)] font-extralight leading-[1.04] tracking-[-0.025em] text-black">
              Key benefits, planned around you.
            </h2>
            <p className="home-display mt-4 mb-0 max-w-[470px] text-[16px] font-light leading-[1.65] text-pretty text-black">
              A refined outcome that suits your features — never a one-size-fits-all procedure.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {service.benefits.map((benefit, index) => (
              <article
                key={benefit.title}
                className="neo flex min-h-[220px] flex-col rounded-[22px] p-5 sm:min-h-[240px] sm:rounded-[26px] sm:p-[26px]"
              >
                <span className="font-ui text-[11px] tracking-[0.18em] text-maroon">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="home-display mt-6 mb-3 text-[24px] font-light leading-[1.2] text-black sm:text-[28px]">
                  {benefit.title}
                </h3>
                <p className="home-display m-0 flex-1 text-[15px] font-light leading-[1.6] text-pretty text-black">
                  {benefit.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="home-band-white py-6 sm:py-10 lg:py-16">
        <div className="home-wrap">
          <div className="neo overflow-hidden rounded-[24px] sm:rounded-[40px]">
            <div className="grid lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-stretch">
              <div className="flex flex-col justify-center px-5 py-7 sm:px-8 sm:py-10 lg:px-12 lg:py-14">
                <div className="home-kicker font-ui">Are you a candidate?</div>
                <h2 className="home-display mt-4 mb-0 text-[clamp(28px,4.8vw,44px)] font-extralight leading-[1.12] tracking-[-0.03em] text-black">
                  Who {service.title.toLowerCase()} is for.
                </h2>
                <p className="home-display mt-5 mb-0 max-w-[470px] text-[16px] font-light leading-[1.7] text-pretty text-black sm:text-[17px]">
                  If the points here sound familiar, a private consultation can confirm whether this
                  treatment is the right next step. Every plan starts with an honest, one-on-one
                  assessment with Dr. Sunita.
                </p>
                <div className="mt-7 flex flex-col items-stretch gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:gap-[22px]">
                  <button type="button" onClick={openBook} className="neo-btn neo-btn-solid sm:!w-auto">
                    {BOOK_LABEL} <span className="text-[15px]">→</span>
                  </button>
                  <a
                    href="#journey"
                    className="home-text-link self-center text-center font-ui text-[13px] uppercase tracking-[0.1em] text-black sm:self-auto"
                  >
                    See the journey
                  </a>
                </div>
              </div>
              <ol className="flex flex-col justify-center px-5 py-7 sm:px-8 sm:py-10 lg:px-10 lg:py-12">
                {service.whoIsItFor.map((item, index) => (
                  <li
                    key={item}
                    className="flex items-start gap-4 border-b border-black/10 py-3.5 first:border-t last:border-b-0"
                  >
                    <span className="w-6 shrink-0 pt-1 font-ui text-[10px] tracking-[0.14em] text-maroon">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="home-display text-[16px] font-light leading-[1.55] text-pretty text-black sm:text-[17px]">
                      {item}
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section id="journey" className="home-band-maroon py-12 lg:py-20">
        <div className="home-wrap">
          <div className="home-on-maroon mb-8 max-w-[720px] sm:mb-10">
            <div className="home-kicker mb-4 font-ui">Your journey, step by step</div>
            <h2 className="home-display m-0 text-[clamp(32px,6vw,54px)] font-extralight leading-[1.04] tracking-[-0.025em]">
              What to expect.
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {service.steps.map((step, index) => (
              <article key={step.title} className="neo flex flex-col rounded-[22px] p-5 sm:rounded-[26px] sm:p-6">
                <span className="home-display text-[36px] font-extralight leading-none text-maroon/40">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="home-display mt-4 mb-3 text-[20px] font-light leading-[1.25] text-black sm:text-[22px]">
                  {step.title}
                </h3>
                <p className="home-display m-0 text-[14px] font-light leading-[1.6] text-pretty text-black sm:text-[15px]">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="home-band-maroon py-12 lg:py-20">
        <div className="home-wrap">
          <div className="home-on-maroon mb-8 text-center sm:mb-10">
            <div className="home-kicker mx-auto mb-4 font-ui">Real patient results</div>
            <h2 className="home-display mx-auto mt-0 mb-4 max-w-[720px] text-[clamp(32px,6vw,54px)] font-extralight leading-[1.04] tracking-[-0.025em]">
              {service.title} — before and after.
            </h2>
            <p className="home-display mx-auto m-0 max-w-[560px] text-[16px] font-light leading-[1.65] text-pretty">
              Images are shared with consent. Healing and outcomes are individual, and results vary
              from person to person.
            </p>
          </div>
          {hasPhotos ? (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-5">
              {service.beforeAfter.map((item, index) => (
                <BeforeAfterCard key={`${item.label}-${index}`} item={item} serviceTitle={service.title} />
              ))}
            </div>
          ) : (
            <div className="neo rounded-[24px] px-6 py-12 text-center sm:rounded-[32px]">
              <p className="home-display m-0 text-[18px] font-light leading-[1.5] text-black">
                Before and after photographs are shared during your private consultation.
              </p>
            </div>
          )}
        </div>
      </section>

      <section className="home-band-white py-12 lg:py-20">
        <div className="home-wrap">
          <div className="neo rounded-[24px] p-5 sm:rounded-[44px] sm:p-8 lg:p-[52px]">
            <div className="flex flex-col items-start justify-between gap-5 border-b border-black/10 pb-6 sm:flex-row sm:flex-wrap sm:items-end sm:gap-6 sm:pb-[30px]">
              <div>
                <div className="home-kicker mb-4 font-ui">In their own words</div>
                <h2 className="home-display m-0 max-w-[520px] text-[clamp(32px,6vw,54px)] font-extralight leading-[1.04] tracking-[-0.025em] text-black">
                  Patient stories.
                </h2>
              </div>
              <Link href="/reviews" className="neo-btn sm:!w-auto">
                See all reviews
              </Link>
            </div>
            <div className="mt-7 grid grid-cols-1 gap-4 sm:mt-[30px] sm:grid-cols-2 lg:grid-cols-3">
              {service.stories.map((story) => (
                <article key={`${story.name}-${story.city}`} className="neo-inset rounded-[22px] p-5 sm:rounded-[26px] sm:p-[26px]">
                  <div className="mb-4 font-ui text-[12px] tracking-[0.24em] text-maroon">★★★★★</div>
                  <p className="home-display mb-5 text-[15px] font-light leading-[1.62] text-pretty text-black">
                    {story.quote}
                  </p>
                  <div className="font-ui text-[11px] uppercase tracking-[0.18em] text-black">
                    {story.name} · {story.city}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="home-band-maroon py-12 lg:py-20">
        <div className="home-wrap">
          <div className="grid items-start gap-8 lg:grid-cols-2 lg:gap-12">
            <div className="home-on-maroon">
              <div className="home-kicker mb-4 font-ui">Good to know</div>
              <h2 className="home-display mt-0 mb-5 text-[clamp(32px,6vw,54px)] font-extralight leading-[1.04] tracking-[-0.025em]">
                Questions about {service.title.toLowerCase()}.
              </h2>
              <p className="home-display mb-6 max-w-[330px] text-[16px] font-light leading-[1.65] text-pretty sm:mb-[26px]">
                Clear answers before you decide. Anything more specific can be discussed in
                consultation.
              </p>
              <button type="button" onClick={openBook} className="neo-btn neo-btn-light sm:!w-auto">
                Ask in consultation
              </button>
            </div>
            <FaqAccordion
              items={service.faqs.map((faq) => ({ q: faq.question, a: faq.answer }))}
            />
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="home-band-white py-12 lg:py-20">
          <div className="home-wrap">
            <div className="mb-8 flex flex-col gap-4 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <div className="home-kicker mb-3 font-ui">{catalog?.category.title}</div>
                <h2 className="home-display m-0 text-[clamp(32px,6vw,54px)] font-extralight leading-[1.04] tracking-[-0.025em] text-black">
                  Related procedures.
                </h2>
              </div>
              <Link
                href="/#treatments"
                className="home-text-link self-start font-ui text-[12px] uppercase tracking-[0.12em] text-black"
              >
                View all treatments →
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((item, index) => (
                <Link
                  key={item.slug}
                  href={`/services/${item.slug}`}
                  className="neo neo-press flex min-h-[180px] flex-col rounded-[22px] p-5 sm:rounded-[26px] sm:p-[26px]"
                >
                  <span className="font-ui text-[11px] tracking-[0.18em] text-maroon">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="home-display mt-5 mb-3 text-[22px] font-light leading-[1.2] text-black sm:text-[24px]">
                    {item.title}
                  </h3>
                  <p className="home-display mb-5 flex-1 text-[15px] font-light leading-[1.6] text-pretty text-black">
                    {item.description}
                  </p>
                  <span className="font-ui text-[11px] uppercase tracking-[0.14em] text-maroon">
                    Explore treatment →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="home-band-white py-6 sm:py-10 lg:pb-6">
        <div className="home-wrap">
          <div className="neo overflow-hidden rounded-[24px] sm:rounded-[40px]">
            <div className="grid lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-stretch">
              <div className="neo-media relative aspect-[4/5] min-h-[320px] overflow-hidden bg-maroon sm:min-h-[400px] lg:aspect-auto lg:min-h-[520px]">
                <FillImage
                  src={HOME_IMAGES.surgeonPortrait ?? HOME_IMAGES.surgeon}
                  alt="Dr. Sunita Ghanta, board-certified plastic surgeon in Visakhapatnam"
                  className="object-[center_12%]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7 lg:p-8">
                  <div className="font-ui text-[10px] uppercase tracking-[0.22em] text-white/75">
                    Consultant plastic surgeon
                  </div>
                  <h2 className="home-display mt-1.5 mb-0 text-[28px] font-light leading-none text-white sm:text-[36px]">
                    {HOME_COPY.surgeonName}
                  </h2>
                  <p className="mt-3 mb-0 font-ui text-[10px] uppercase tracking-[0.16em] text-white/80">
                    Visakhapatnam · Board-certified · Since 2009
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center px-5 py-7 sm:px-8 sm:py-10 lg:px-12 lg:py-14">
                <div className="home-kicker font-ui">{HOME_COPY.surgeonKicker}</div>
                <p className="home-display mt-4 mb-0 text-[clamp(28px,4.8vw,44px)] font-extralight italic leading-[1.12] tracking-[-0.03em] text-maroon">
                  {HOME_COPY.surgeonTitle}
                </p>
                <ol className="mt-6 border-y border-black/10">
                  {SURGEON_CREDENTIALS.map((item, index) => (
                    <li
                      key={item.degree}
                      className="flex items-baseline justify-between gap-4 border-b border-black/10 py-3 last:border-b-0"
                    >
                      <span className="flex min-w-0 items-baseline gap-3">
                        <span className="w-6 shrink-0 font-ui text-[10px] tracking-[0.14em] text-maroon">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span className="home-display text-[20px] font-light text-black sm:text-[22px]">
                          {item.degree}
                        </span>
                      </span>
                      <span className="text-right font-ui text-[10px] uppercase tracking-[0.14em] text-black/55 sm:text-[11px]">
                        {item.label}
                      </span>
                    </li>
                  ))}
                </ol>
                <div className="mt-7 flex flex-col items-stretch gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:gap-[22px]">
                  <button type="button" onClick={openBook} className="neo-btn neo-btn-solid sm:!w-auto">
                    {HOME_COPY.bookWithSurgeon}
                  </button>
                  <Link
                    href="/about"
                    className="home-text-link self-center text-center font-ui text-[13px] uppercase tracking-[0.1em] text-black sm:self-auto"
                  >
                    {HOME_COPY.readStory}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <IvoryCta
        kicker="Private consultation"
        title={
          <>
            Ready to talk about <em className="italic text-maroon">{service.title.toLowerCase()}?</em>
          </>
        }
        body={`Meet Dr. Sunita for an honest assessment of ${service.title.toLowerCase()} — privately, with no pressure to decide on the day.`}
      />
      <IvoryDisclaimer />
    </main>
  );
}

function BeforeAfterCard({ item, serviceTitle }: { item: BeforeAfterCase; serviceTitle: string }) {
  if (item.image) {
    return (
      <figure className="neo neo-media relative aspect-[4/3] overflow-hidden rounded-[24px] bg-white sm:rounded-[28px]">
        <FillImage src={item.image} alt={`${serviceTitle} before and after — ${item.label}`} className="object-contain" />
        <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3.5 py-1.5 font-ui text-[10px] uppercase tracking-[0.16em] text-black">
          {item.label}
        </span>
      </figure>
    );
  }

  if (item.before || item.after) {
    return (
      <figure className="neo overflow-hidden rounded-[24px] sm:rounded-[28px]">
        <div className="grid grid-cols-2">
          <SplitPanel label="Before" src={item.before} />
          <SplitPanel label="After" src={item.after} after />
        </div>
      </figure>
    );
  }

  return (
    <figure className="neo flex aspect-[4/3] items-center justify-center rounded-[24px] sm:rounded-[28px]">
      <p className="home-display m-0 px-6 text-center text-[16px] font-light text-black">
        Photo coming soon
      </p>
    </figure>
  );
}

function SplitPanel({ label, src, after = false }: { label: string; src?: string; after?: boolean }) {
  return (
    <div className="relative aspect-[3/4] overflow-hidden bg-maroon/10">
      {src ? <FillImage src={src} alt={label} /> : null}
      <span
        className={`absolute left-3 top-3 rounded-full px-3 py-1.5 font-ui text-[10px] uppercase tracking-[0.16em] ${
          after ? "bg-maroon text-white" : "bg-white/95 text-black"
        }`}
      >
        {label}
      </span>
    </div>
  );
}
