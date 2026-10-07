"use client";

import Link from "next/link";
import {
  BOOK_LABEL,
  CLINIC_PHOTOS,
  HOME_CONTACT,
  HOME_COPY,
  HOME_IMAGES,
  HOME_REVIEWS,
  HOME_STATS,
  HOME_VIDEOS,
  REVIEW_COUNT_LABEL,
  SURGEON_CREDENTIALS,
  VIDEO_PLAYLIST_URL,
} from "@/data/homeContent";
import { BookModal } from "./BookModal";
import { BookProvider, useBook } from "./BookProvider";
import { FaqAccordion } from "./FaqAccordion";
import { FillImage } from "./FillImage";
import { HomeNav } from "./HomeNav";
import { IvoryFooter } from "./IvoryFooter";
import { TreatmentLibrary } from "./TreatmentLibrary";
import "./home.css";

export function IvoryHome() {
  return (
    <BookProvider>
      <div className="home-ivory font-ui min-h-full">
        <IvoryPage />
        <BookModal />
      </div>
    </BookProvider>
  );
}

function IvoryPage() {
  const { openBook } = useBook();

  return (
    <>
      <HomeNav />

      <main id="main-content">
      <div className="home-band-white">
      <div className="home-wrap pt-3 pb-6 sm:pt-4 sm:pb-8 lg:pt-6 lg:pb-10">
        <section className="neo rounded-[24px] p-5 sm:rounded-[40px] sm:p-7 lg:px-12 lg:py-9">
          <div className="grid items-stretch gap-5 lg:grid-cols-2 lg:gap-10">
            <div className="flex flex-col justify-center">
              <div className="home-kicker mb-4 font-ui sm:mb-5">
                {HOME_COPY.heroKicker}
              </div>
              <h1 className="home-display mb-4 text-[clamp(36px,8.4vw,82px)] font-extralight leading-[0.96] tracking-[-0.03em] text-black sm:mb-5">
                {HOME_COPY.heroTitle}
                <br />
                <em className="font-light italic text-maroon">{HOME_COPY.heroAccent}</em>
              </h1>
              <p className="home-display mb-6 max-w-[430px] text-[16px] font-light leading-[1.62] text-pretty text-black sm:mb-7 sm:text-[19px]">
                {HOME_COPY.heroBody}
              </p>
              <div className="flex flex-col items-stretch gap-3.5 sm:flex-row sm:flex-wrap sm:items-center sm:gap-[22px]">
                <button type="button" onClick={openBook} className="neo-btn neo-btn-solid sm:!w-auto">
                  {BOOK_LABEL} <span className="text-[15px]">→</span>
                </button>
                <a href="#treatments" className="home-text-link self-center text-center font-ui text-[12px] uppercase tracking-[0.1em] text-black sm:self-auto sm:text-[13px]">
                  {HOME_COPY.viewTreatments}
                </a>
              </div>
            </div>
            <div className="neo neo-media hero-photo relative isolate overflow-hidden rounded-[22px] bg-maroon aspect-[7/5] min-h-[280px] sm:min-h-[340px] sm:rounded-[32px] lg:aspect-auto lg:h-full lg:min-h-[420px]">
              <FillImage
                src={HOME_IMAGES.hero}
                alt="Dr. Sunita Ghanta, board-certified plastic surgeon in Visakhapatnam"
                priority
                quality={100}
                unoptimized
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover object-center"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-black/5 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 z-[1] grid grid-cols-2 bg-maroon/95 text-white lg:grid-cols-4">
                {HOME_STATS.map((stat, index) => (
                  <div
                    key={stat.label}
                    className={[
                      "px-3 py-3 sm:px-4 sm:py-4",
                      index % 2 === 1 ? "border-l border-white/20" : "",
                      index >= 2 ? "border-t border-white/20 lg:border-t-0" : "",
                      index > 0 ? "lg:border-l lg:border-white/20" : "",
                    ].join(" ")}
                  >
                    <div className="home-display text-[22px] font-light leading-none sm:text-[28px]">{stat.value}</div>
                    <div className="mt-1.5 font-ui text-[8px] uppercase leading-[1.35] tracking-[0.12em] text-white/80 sm:text-[9px] sm:tracking-[0.16em]">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
      </div>

      <section id="why-choose-us" className="home-band-white py-6 sm:py-10 lg:py-16">
        <div id="surgeon" className="home-wrap">
        <div className="neo overflow-hidden rounded-[24px] sm:rounded-[40px]">
          <div className="grid lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-stretch">
            <div className="neo-media relative aspect-[4/5] min-h-[360px] overflow-hidden bg-maroon sm:min-h-[440px] lg:aspect-auto lg:min-h-[620px]">
              <FillImage
                src={HOME_IMAGES.surgeonSurgery}
                alt="Dr. Sunita Ghanta performing surgery in Visakhapatnam"
                className="object-[center_35%]"
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
                      <span className="home-display text-[20px] font-light text-black sm:text-[22px]">{item.degree}</span>
                    </span>
                    <span className="text-right font-ui text-[10px] uppercase tracking-[0.14em] text-black/55 sm:text-[11px]">
                      {item.label}
                    </span>
                  </li>
                ))}
              </ol>
              <p className="home-display mt-6 mb-0 max-w-[470px] text-[16px] font-light leading-[1.7] text-pretty text-black sm:text-[17px]">
                {HOME_COPY.surgeonBody}
              </p>
              <blockquote className="relative mt-7 border-l-2 border-maroon pl-5">
                <p className="home-display m-0 text-[clamp(18px,2.6vw,26px)] font-light italic leading-[1.4] text-maroon">
                  “{HOME_COPY.surgeonQuote}”
                </p>
              </blockquote>
              <div className="mt-7 flex flex-col items-stretch gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:gap-[22px]">
                <button type="button" onClick={openBook} className="neo-btn neo-btn-solid sm:!w-auto">
                  {HOME_COPY.bookWithSurgeon}
                </button>
                <Link href="/about" className="home-text-link self-center text-center font-ui text-[13px] uppercase tracking-[0.1em] text-black sm:self-auto">
                  {HOME_COPY.readStory}
                </Link>
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>

      <section id="clinic" className="home-band-maroon py-12 lg:py-20">
        <div className="home-wrap">
        <div className="home-on-maroon mb-7 flex flex-col gap-4 sm:mb-[30px] sm:flex-row sm:flex-wrap sm:items-end sm:justify-between sm:gap-5">
          <div>
            <div className="home-kicker mb-3 font-ui sm:mb-4">{HOME_COPY.clinicKicker}</div>
            <h2 className="home-display m-0 text-[clamp(32px,6vw,54px)] font-extralight leading-[1.04] tracking-[-0.025em]">
              {HOME_COPY.clinicTitle}
            </h2>
          </div>
          <p className="home-display m-0 max-w-[330px] text-[16px] font-light leading-[1.65] text-pretty">
            {HOME_COPY.clinicBody}
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-6">
          {CLINIC_PHOTOS.map((photo, index) => (
            <div
              key={photo.src}
              className={[
                "neo neo-media relative overflow-hidden rounded-[28px] sm:rounded-[34px]",
                index === 0
                  ? "h-[260px] sm:h-[clamp(260px,26vw,340px)] lg:col-span-4"
                  : index === 1
                    ? "h-[220px] sm:h-[clamp(260px,26vw,340px)] lg:col-span-2"
                    : "h-[200px] sm:h-[clamp(200px,20vw,262px)] lg:col-span-2",
              ].join(" ")}
            >
              <FillImage src={photo.src} alt={photo.alt} />
              <span className="pointer-events-none absolute bottom-3 left-3 rounded-full bg-white/95 px-3.5 py-1.5 font-ui text-[10px] uppercase tracking-[0.18em] text-black shadow-sm sm:bottom-4 sm:left-4 sm:px-4 sm:py-2 sm:tracking-[0.2em]">
                {photo.label}
              </span>
            </div>
          ))}
        </div>
        </div>
      </section>

      <div id="services" className="home-band-white py-12 lg:py-20">
        <TreatmentLibrary />
      </div>

      <section id="stories" className="home-band-maroon py-12 lg:py-20">
        <div className="home-wrap">
        <div className="home-on-maroon mb-8 flex flex-col gap-4 sm:mb-10 sm:flex-row sm:flex-wrap sm:items-end sm:justify-between">
          <div>
            <div className="home-kicker mb-3 font-ui sm:mb-4">{HOME_COPY.storiesKicker}</div>
            <h2 className="home-display m-0 text-[clamp(32px,6vw,54px)] font-extralight leading-[1.04] tracking-[-0.025em]">
              {HOME_COPY.storiesTitle}
            </h2>
          </div>
          <a
            href={VIDEO_PLAYLIST_URL}
            target="_blank"
            rel="noreferrer"
            className="home-text-link self-start font-ui text-[12px] uppercase tracking-[0.12em]"
          >
            {HOME_COPY.allStories}
          </a>
        </div>

        <div className="grid items-stretch gap-5 lg:grid-cols-[1.35fr_1fr] lg:gap-6">
          <a
            href={`https://www.youtube.com/watch?v=${HOME_VIDEOS[0].videoId}`}
            target="_blank"
            rel="noreferrer"
            className="neo neo-press block overflow-hidden rounded-[28px] sm:rounded-[36px]"
          >
            <div className="relative h-[min(72vw,380px)] lg:h-full lg:min-h-[380px]">
              <FillImage src={HOME_VIDEOS[0].poster} alt={HOME_VIDEOS[0].title} className="object-[center_18%]" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-black/10" />
              <span className="pointer-events-none absolute top-1/2 left-1/2 flex size-[64px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-[0_12px_30px_rgba(0,0,0,0.2)] sm:size-[72px]">
                <span className="ml-1 border-y-[11px] border-l-[18px] border-y-transparent border-l-maroon" />
              </span>
              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-8">
                <div className="font-ui text-[10px] uppercase tracking-[0.2em] text-white/90">{HOME_VIDEOS[0].meta}</div>
                <h3 className="home-display mt-2 mb-2 max-w-[420px] text-[clamp(24px,6vw,36px)] font-light leading-[1.15] text-pretty text-white">
                  {HOME_VIDEOS[0].title}
                </h3>
                <p className="home-display mb-3 hidden max-w-[440px] text-[15px] font-light leading-[1.55] text-pretty text-white/90 sm:mb-4 sm:block">
                  {HOME_VIDEOS[0].summary}
                </p>
                <span className="font-ui text-[11px] uppercase tracking-[0.14em] text-white">Watch full story →</span>
              </div>
            </div>
          </a>

          <div className="flex flex-col gap-5">
            {HOME_VIDEOS.slice(1).map((video) => (
              <a
                key={video.videoId}
                href={`https://www.youtube.com/watch?v=${video.videoId}`}
                target="_blank"
                rel="noreferrer"
                className="neo neo-press grid min-h-0 flex-1 grid-cols-1 overflow-hidden rounded-[28px] sm:grid-cols-[minmax(180px,42%)_1fr] sm:rounded-[32px]"
              >
                <div className="neo-media relative h-[180px] sm:h-full sm:min-h-[180px]">
                  <FillImage src={video.poster} alt={video.title} className="object-[center_18%]" />
                  <span className="pointer-events-none absolute top-1/2 left-1/2 flex size-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white">
                    <span className="ml-0.5 border-y-[8px] border-l-[13px] border-y-transparent border-l-maroon" />
                  </span>
                </div>
                <div className="flex flex-col justify-center px-5 py-5 sm:px-6">
                  <div className="font-ui text-[10px] uppercase tracking-[0.2em] text-maroon">{video.meta}</div>
                  <h3 className="home-display mt-2 mb-2 text-[22px] font-light leading-[1.25] text-pretty text-black">
                    {video.title}
                  </h3>
                  <p className="home-display mb-4 text-[14px] font-light leading-[1.55] text-pretty text-black">
                    {video.summary}
                  </p>
                  <span className="font-ui text-[11px] uppercase tracking-[0.14em] text-maroon">Watch full story →</span>
                </div>
              </a>
            ))}
          </div>
        </div>
        </div>
      </section>

      <section id="reviews" className="home-band-white py-12 lg:py-20">
        <div className="home-wrap">
        <div className="neo rounded-[24px] p-5 sm:rounded-[44px] sm:p-8 lg:p-[52px]">
          <div className="flex flex-col items-start justify-between gap-5 border-b border-black/10 pb-6 sm:flex-row sm:flex-wrap sm:items-end sm:gap-6 sm:pb-[30px]">
            <div className="flex items-end gap-5 sm:gap-[22px]">
              <div className="home-display text-[clamp(44px,8vw,72px)] font-extralight leading-none text-maroon">5.0</div>
              <div className="pb-1 sm:pb-2">
                <div className="font-ui text-[15px] tracking-[0.3em] text-maroon">★★★★★</div>
                <div className="mt-3 font-ui text-[11px] uppercase tracking-[0.18em] text-black">
                  {REVIEW_COUNT_LABEL}
                </div>
              </div>
            </div>
            <Link href="/reviews" className="neo-btn sm:!w-auto">
              See all reviews
            </Link>
          </div>
          <div className="mt-7 grid grid-cols-1 gap-4 sm:mt-[30px] sm:grid-cols-2 lg:grid-cols-4">
            {HOME_REVIEWS.map((review) => (
              <div key={review.name} className="neo-inset rounded-[22px] p-5 sm:rounded-[26px] sm:p-[26px]">
                <div className="mb-4 font-ui text-[12px] tracking-[0.24em] text-maroon">★★★★★</div>
                <p className="home-display mb-5 text-[15px] font-light leading-[1.62] text-pretty text-black">
                  {review.text}
                </p>
                <div className="font-ui text-[11px] uppercase tracking-[0.18em] text-black">
                  {review.name} · {review.tag}
                </div>
              </div>
            ))}
          </div>
        </div>
        </div>
      </section>

      <section id="faqs" className="home-band-maroon py-12 lg:py-20">
        <div className="home-wrap">
        <div className="grid items-start gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="home-on-maroon">
            <div className="home-kicker mb-4 font-ui">{HOME_COPY.faqKicker}</div>
            <h2 className="home-display mt-0 mb-5 text-[clamp(32px,6vw,54px)] font-extralight leading-[1.04] tracking-[-0.025em]">
              {HOME_COPY.faqTitle}
            </h2>
            <p className="home-display mb-6 max-w-[330px] text-[16px] font-light leading-[1.65] text-pretty sm:mb-[26px]">
              {HOME_COPY.faqBody}
            </p>
            <button type="button" onClick={openBook} className="neo-btn neo-btn-light sm:!w-auto">
              {HOME_COPY.askConsult}
            </button>
          </div>
          <FaqAccordion />
        </div>
        </div>
      </section>

      <section className="home-band-white py-16 lg:py-24">
        <div className="home-wrap text-center">
          <div className="home-kicker mx-auto mb-5 font-ui sm:mb-6">{HOME_COPY.ctaKicker}</div>
          <h2 className="home-display mx-auto mb-5 max-w-[620px] text-[clamp(32px,7vw,64px)] font-extralight leading-[1.06] tracking-[-0.03em] text-black sm:mb-[22px]">
            {HOME_COPY.ctaTitle}
          </h2>
          <p className="home-display mx-auto mb-8 max-w-[440px] text-[17px] font-light leading-[1.65] text-pretty text-black sm:mb-[34px]">
            {HOME_COPY.ctaBody}
          </p>
          <div className="flex flex-col items-center justify-center gap-5 sm:flex-row sm:flex-wrap sm:gap-6">
            <button type="button" onClick={openBook} className="neo-btn sm:!w-auto">
              {BOOK_LABEL} <span className="text-[15px]">→</span>
            </button>
            <a href={HOME_CONTACT.phoneHref} className="home-text-link font-ui text-[13px] uppercase tracking-[0.1em] text-black">
              {HOME_COPY.contactClinic}
            </a>
          </div>
        </div>
      </section>

      </main>
      <IvoryFooter />
    </>
  );
}
