"use client";

import Link from "next/link";
import {
  BOOK_LABEL,
  CLINIC_PHOTOS,
  HOME_CONTACT,
  HOME_COPY,
  HOME_IMAGES,
  HOME_REVIEWS,
  HOME_SOCIALS,
  HOME_STATS,
  HOME_VIDEOS,
  MAP_EMBED_SRC,
  NONSURGICAL_GROUPS,
  REVIEW_COUNT_LABEL,
  SURGICAL_GROUPS,
  VIDEO_PLAYLIST_URL,
} from "@/data/homeContent";
import { BookModal } from "./BookModal";
import { BookProvider, useBook } from "./BookProvider";
import { FaqAccordion } from "./FaqAccordion";
import { FillImage } from "./FillImage";
import { TreatmentLibrary } from "./TreatmentLibrary";
import { HomeNav } from "./HomeNav";
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

      <div className="home-band-white">
      <div className="home-wrap pt-3 pb-6 sm:pt-4 sm:pb-8 lg:pt-6 lg:pb-10">
        <section className="neo rounded-[24px] p-5 sm:rounded-[44px] sm:p-8 lg:p-[58px]">
          <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
            <div>
              <div className="home-kicker mb-4 font-ui sm:mb-[26px]">
                {HOME_COPY.heroKicker}
              </div>
              <h1 className="home-display mb-4 text-[clamp(36px,8.4vw,82px)] font-extralight leading-[0.96] tracking-[-0.03em] text-black sm:mb-6">
                {HOME_COPY.ivoryHeroTitle}
                <br />
                <em className="font-light italic text-maroon">{HOME_COPY.ivoryHeroAccent}</em>
              </h1>
              <p className="home-display mb-6 max-w-[430px] text-[16px] font-light leading-[1.62] text-pretty text-black sm:mb-[34px] sm:text-[19px]">
                {HOME_COPY.heroBody}
              </p>
              <div className="flex flex-col items-stretch gap-3.5 sm:flex-row sm:flex-wrap sm:items-center sm:gap-[22px]">
                <button type="button" onClick={openBook} className="neo-btn sm:!w-auto">
                  {BOOK_LABEL} <span className="text-[15px]">→</span>
                </button>
                <a href="#treatments" className="home-text-link self-center text-center font-ui text-[12px] uppercase tracking-[0.1em] text-black sm:self-auto sm:text-[13px]">
                  {HOME_COPY.viewTreatments}
                </a>
              </div>
            </div>
            <div className="neo neo-media relative h-[min(78vw,420px)] overflow-hidden rounded-[22px] sm:h-[clamp(340px,32vw,440px)] sm:rounded-[38px]">
              <FillImage src={HOME_IMAGES.hero} alt="Dr. Sunita Ghanta" priority />
            </div>
          </div>
          <div className="mt-6 grid grid-cols-2 gap-2.5 sm:mt-10 sm:grid-cols-4 sm:gap-4">
            {HOME_STATS.map((stat) => (
              <div key={stat.label} className="neo-inset rounded-[18px] px-3 py-3.5 sm:rounded-[22px] sm:px-5 sm:py-5">
                <div className="home-display text-[26px] font-light leading-none text-maroon sm:text-[36px]">{stat.value}</div>
                <div className="mt-1.5 font-ui text-[9px] uppercase leading-[1.4] tracking-[0.1em] text-black sm:mt-2 sm:text-[10px] sm:tracking-[0.2em]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
      </div>

      <section id="why-choose-us" className="home-band-white py-12 lg:py-20">
        <div id="surgeon" className="home-wrap">
        <div className="neo grid items-start gap-6 rounded-[24px] p-5 sm:rounded-[44px] sm:p-8 lg:grid-cols-2 lg:gap-12 lg:p-[58px]">
          <div className="neo neo-media relative h-[min(86vw,440px)] overflow-hidden rounded-[22px] sm:h-[clamp(360px,34vw,470px)] sm:rounded-[36px]">
            <FillImage src={HOME_IMAGES.surgeon} alt="Dr. Sunita Ghanta, plastic surgeon" />
          </div>
          <div>
            <div className="home-kicker font-ui">{HOME_COPY.surgeonKicker}</div>
            <h2 className="home-display mt-4 mb-0 text-[clamp(34px,6vw,58px)] font-extralight leading-[1.02] tracking-[-0.025em] text-black">
              {HOME_COPY.surgeonName}
            </h2>
            <p className="home-display mt-3 mb-0 max-w-[470px] text-[20px] font-light italic leading-[1.35] text-maroon sm:text-[24px]">
              {HOME_COPY.ivorySurgeonTitle}
            </p>
            <div className="mt-5 flex flex-wrap gap-2 sm:mt-[22px]">
              {["MBBS", "DNB", "MCh", "17+ years"].map((tag) => (
                <span
                  key={tag}
                  className="neo-inset rounded-full px-4 py-2 font-ui text-[11px] uppercase tracking-[0.14em] text-maroon sm:px-[18px] sm:py-[9px] sm:text-[12px]"
                >
                  {tag}
                </span>
              ))}
            </div>
            <p className="home-display mt-6 mb-0 max-w-[470px] text-[16px] font-light leading-[1.7] text-pretty text-black sm:mt-[26px] sm:text-[17px]">
              {HOME_COPY.surgeonBody}
            </p>
            <div className="neo-inset mt-7 rounded-[28px] px-6 py-5 sm:mt-[30px] sm:px-[30px] sm:py-[26px]">
              <p className="home-display m-0 text-[clamp(18px,3vw,26px)] font-light italic leading-[1.42] text-maroon">
                “{HOME_COPY.surgeonQuote}”
              </p>
            </div>
            <div className="mt-7 flex flex-col items-stretch gap-4 sm:mt-[30px] sm:flex-row sm:flex-wrap sm:items-center sm:gap-[22px]">
              <button type="button" onClick={openBook} className="neo-btn sm:!w-auto">
                {HOME_COPY.bookWithSurgeon}
              </button>
              <Link href="/about" className="home-text-link self-center text-center font-ui text-[13px] uppercase tracking-[0.1em] text-black sm:self-auto">
                {HOME_COPY.readStory}
              </Link>
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
            <div className="relative h-[min(88vw,460px)] lg:h-full lg:min-h-[480px]">
              <FillImage src={HOME_VIDEOS[0].poster} alt={HOME_VIDEOS[0].title} />
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
                <div className="neo-media relative h-[180px] sm:h-full sm:min-h-[200px]">
                  <FillImage src={video.poster} alt={video.title} />
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
            <a
              href="https://www.google.com/maps/search/?api=1&query=Dr%20Sunita%20Aesthetics%20Seethammadara%20Visakhapatnam"
              target="_blank"
              rel="noreferrer"
              className="neo-btn sm:!w-auto"
            >
              Read more reviews
            </a>
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

      <IvoryFooter />
    </>
  );
}

function IvoryFooter() {
  const { openBook } = useBook();

  return (
    <footer id="contact" className="home-band-maroon pt-12 pb-[max(2rem,env(safe-area-inset-bottom))] lg:pt-[76px] lg:pb-[34px]">
      <div className="home-wrap">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-8">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="home-display text-[24px] leading-none text-white">Sunita Aesthetics</div>
            <div className="mt-2 font-ui text-[8px] uppercase tracking-[0.3em] text-white/70">
              Plastic &amp; cosmetic surgery
            </div>
            <p className="home-display mt-5 mb-6 max-w-[260px] text-[15px] font-light leading-[1.65] text-pretty text-white">
              {HOME_COPY.footerBlurb}
            </p>
            <div className="flex gap-2.5">
              {HOME_SOCIALS.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  aria-label={social.name}
                  className="neo neo-press flex size-[38px] items-center justify-center rounded-full font-ui text-[11px] tracking-[0.06em] text-maroon"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>
          <div>
            <div className="mb-5 font-ui text-[10px] uppercase tracking-[0.24em] text-white/70">Quick links</div>
            <div className="flex flex-col gap-3">
              {[
                { label: "Home 1", href: "/" },
                { label: "Home 2", href: "/home-2" },
                { label: "About the clinic", href: "/about" },
                { label: "Dr. Sunita", href: "#surgeon" },
                { label: "Treatments", href: "#treatments" },
                { label: "Patient stories", href: "#stories" },
                { label: "FAQs", href: "#faqs" },
              ].map((link) => (
                <a key={link.label} href={link.href} className="font-ui text-[14px] text-white hover:text-white/70">
                  {link.label}
                </a>
              ))}
            </div>
          </div>
          <div>
            <div className="mb-5 font-ui text-[10px] uppercase tracking-[0.24em] text-white/70">Surgical</div>
            <div className="flex flex-col gap-3">
              {SURGICAL_GROUPS.map((group) => (
                <a key={group.id} href={group.href} className="font-ui text-[14px] leading-[1.3] text-white hover:text-white/70">
                  {group.name}
                </a>
              ))}
            </div>
          </div>
          <div>
            <div className="mb-5 font-ui text-[10px] uppercase tracking-[0.24em] text-white/70">Non-surgical</div>
            <div className="flex flex-col gap-3">
              {NONSURGICAL_GROUPS.map((group) => (
                <a key={group.id} href={group.href} className="font-ui text-[14px] leading-[1.3] text-white hover:text-white/70">
                  {group.name}
                </a>
              ))}
            </div>
          </div>
          <div>
            <div className="mb-5 font-ui text-[10px] uppercase tracking-[0.24em] text-white/70">Visit &amp; contact</div>
            <div className="flex flex-col gap-2.5 rounded-[24px] bg-white p-4 font-ui text-[14px] text-black">
              <a href={HOME_CONTACT.phoneHref} className="hover:text-maroon">
                {HOME_CONTACT.phone}
              </a>
              <a href={`mailto:${HOME_CONTACT.email}`} className="hover:text-maroon">
                {HOME_CONTACT.email}
              </a>
              <span className="home-display text-[15px] font-light leading-[1.55]">
                {HOME_CONTACT.addressLines[0]}
                <br />
                {HOME_CONTACT.addressLines[1]}
              </span>
              <span className="mt-1.5 font-ui text-[12px] leading-[1.6] tracking-[0.06em]">
                {HOME_CONTACT.hours}
                <br />
                {HOME_CONTACT.sunday}
              </span>
              <button type="button" onClick={openBook} className="neo-btn mt-2 !h-auto !w-full px-4 py-3 text-[11px]">
                {BOOK_LABEL}
              </button>
            </div>
            <div className="relative mt-5 h-[120px] overflow-hidden rounded-[22px] bg-white">
              <iframe title="Clinic map" src={MAP_EMBED_SRC} className="h-full w-full border-0 grayscale" loading="lazy" />
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-4 border-t border-white/20 pt-6 sm:mt-11 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:pt-[22px]">
          <span className="font-ui text-[12px] tracking-[0.06em] text-white/80">
            © 2026 Sunita Aesthetics. All rights reserved.
          </span>
          <div className="flex flex-wrap gap-6">
            <a href="#privacy" className="font-ui text-[12px] tracking-[0.06em] text-white hover:text-white/70">
              Privacy Policy
            </a>
            <a href="#terms" className="font-ui text-[12px] tracking-[0.06em] text-white hover:text-white/70">
              Terms &amp; Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
