"use client";

import Link from "next/link";
import {
  ALL_REVIEWS,
  GOOGLE_REVIEWS_HREF,
  HOME_VIDEOS,
  REVIEW_COUNT_LABEL,
  VIDEO_PLAYLIST_URL,
} from "@/data/homeContent";
import { FillImage } from "./FillImage";
import { IvoryCta, IvoryShell } from "./IvoryShell";

export function IvoryReviews() {
  return (
    <IvoryShell>
      <main id="main-content">
        <div className="home-band-white">
          <div className="home-wrap pt-3 pb-6 sm:pt-4 sm:pb-8 lg:pt-6 lg:pb-10">
            <div className="neo rounded-[24px] p-5 sm:rounded-[44px] sm:p-8 lg:p-[52px]">
              <div className="flex flex-col items-start justify-between gap-5 border-b border-black/10 pb-6 sm:flex-row sm:flex-wrap sm:items-end sm:gap-6 sm:pb-[30px]">
                <div>
                  <div className="home-kicker mb-4 font-ui">Patient reviews</div>
                  <div className="flex items-end gap-5 sm:gap-[22px]">
                    <div className="home-display text-[clamp(44px,8vw,72px)] font-extralight leading-none text-maroon">
                      5.0
                    </div>
                    <div className="pb-1 sm:pb-2">
                      <div className="font-ui text-[15px] tracking-[0.3em] text-maroon">★★★★★</div>
                      <div className="mt-3 font-ui text-[11px] uppercase tracking-[0.18em] text-black">
                        {REVIEW_COUNT_LABEL}
                      </div>
                    </div>
                  </div>
                  <h1 className="home-display mt-5 mb-0 max-w-[520px] text-[clamp(32px,6vw,54px)] font-extralight leading-[1.04] tracking-[-0.025em] text-black">
                    Honest words from people who sat in the same chair.
                  </h1>
                </div>
                <a
                  href={GOOGLE_REVIEWS_HREF}
                  target="_blank"
                  rel="noreferrer"
                  className="neo-btn sm:!w-auto"
                >
                  Read on Google
                </a>
              </div>

              <div className="mt-7 grid grid-cols-1 gap-4 sm:mt-[30px] sm:grid-cols-2 lg:grid-cols-3">
                {ALL_REVIEWS.map((review) => (
                  <div key={`${review.name}-${review.tag}`} className="neo-inset rounded-[22px] p-5 sm:rounded-[26px] sm:p-[26px]">
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
        </div>

        <section className="home-band-maroon py-12 lg:py-20">
          <div className="home-wrap">
            <div className="home-on-maroon mb-8 flex flex-col gap-4 sm:mb-10 sm:flex-row sm:flex-wrap sm:items-end sm:justify-between">
              <div>
                <div className="home-kicker mb-3 font-ui sm:mb-4">Patient stories</div>
                <h2 className="home-display m-0 text-[clamp(32px,6vw,54px)] font-extralight leading-[1.04] tracking-[-0.025em]">
                  Hear the journey in their own words.
                </h2>
              </div>
              <a
                href={VIDEO_PLAYLIST_URL}
                target="_blank"
                rel="noreferrer"
                className="home-text-link self-start font-ui text-[12px] uppercase tracking-[0.12em]"
              >
                All stories
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

            <div className="home-on-maroon mt-8 text-center sm:mt-10">
              <Link href="/case-studies" className="home-text-link font-ui text-[12px] uppercase tracking-[0.12em]">
                Read written case studies →
              </Link>
            </div>
          </div>
        </section>

        <IvoryCta
          kicker="Private consultation"
          title={
            <>
              Ready to start <em className="italic text-maroon">your own story?</em>
            </>
          }
          body="One private appointment. An honest assessment. A written plan you can take home — with zero pressure to book on the day."
        />
      </main>
    </IvoryShell>
  );
}
