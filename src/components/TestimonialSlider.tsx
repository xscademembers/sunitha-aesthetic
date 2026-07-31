"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { LongArrowIcon, QuoteIcon, StarIcon } from "@/components/icons";
import { cn } from "@/lib/utils";

interface PatientTestimonial {
  id: string;
  reviewer: string;
  rating: number;
  comment: string;
  image: string;
  imageAlt: string;
  videoUrl: string;
}

const TESTIMONIALS: PatientTestimonial[] = [
  {
    id: "tummy-tuck-recovery",
    reviewer: "Priya S.",
    rating: 5,
    comment:
      "After two pregnancies, I couldn't regain a flat abdomen no matter how hard I tried. Dr. Sunita listened to my concerns and guided me through tummy tuck recovery with such care. Today I feel confident in my body again.",
    image: "/images/testimonials/patient-tummy-tuck-recovery.png",
    imageAlt: "Patient sharing her tummy tuck recovery after pregnancy experience",
    videoUrl: "https://youtu.be/vfkY-l5ViB8",
  },
  {
    id: "tummy-tuck-documentary",
    reviewer: "Lakshmi R.",
    rating: 5,
    comment:
      "My tummy tuck journey was documented from start to finish — from the first consultation to seeing my transformed silhouette. Dr. Sunita's team made me feel safe and supported throughout surgery and healing.",
    image: "/images/testimonials/patient-tummy-tuck-surgery.png",
    imageAlt: "Patient sharing her tummy tuck surgery and transformation journey",
    videoUrl: "https://youtu.be/etkaDnKVXic",
  },
  {
    id: "gynecomastia",
    reviewer: "Srinivas R.",
    rating: 5,
    comment:
      "I struggled with gynecomastia for years before finding Dr. Sunita. The surgery was life-changing — natural-looking results and professional care at every step. I finally feel comfortable in my own skin.",
    image: "/images/testimonials/patient-gynecomastia.png",
    imageAlt: "Patient sharing his gynecomastia surgery before and after experience",
    videoUrl: "https://youtu.be/xglfMidbq8I",
  },
];

const AUTO_ADVANCE_MS = 4500;

export function TestimonialSlider() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const go = useCallback((dir: 1 | -1) => {
    setDirection(dir);
    setIndex((current) => (current + dir + TESTIMONIALS.length) % TESTIMONIALS.length);
  }, []);

  const resetTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => go(1), AUTO_ADVANCE_MS);
  }, [go]);

  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [resetTimer]);

  const handleArrow = (dir: 1 | -1) => {
    go(dir);
    resetTimer();
  };

  return (
    <div
      className="relative h-auto w-full max-w-[952px] overflow-hidden rounded-[20px] bg-maroon sm:min-h-[277px]"
      aria-label="Patient testimonials"
    >
      <QuoteIcon
        aria-hidden
        className="pointer-events-none absolute right-[88px] top-5 hidden size-[72px] text-white/15 sm:block"
      />

      {TESTIMONIALS.map((testimonial, testimonialIndex) => (
        <article
          key={testimonial.id}
          aria-hidden={testimonialIndex !== index}
          className={cn(
            "flex-col transition-all duration-700 ease-in-out sm:flex-row",
            testimonialIndex === index
              ? "relative flex translate-y-0 opacity-100"
              : "pointer-events-none absolute inset-0 flex opacity-0",
            testimonialIndex !== index && (direction === 1 ? "-translate-y-6" : "translate-y-6"),
          )}
        >
          <Image
            src={testimonial.image}
            alt={testimonial.imageAlt}
            width={277}
            height={277}
            sizes="(max-width: 639px) 100vw, 277px"
            loading={testimonialIndex === 0 ? "eager" : "lazy"}
            className="h-[277px] w-full shrink-0 rounded-t-[20px] object-cover object-top sm:w-[277px] sm:rounded-l-[20px] sm:rounded-tr-none"
          />

          <div className="px-6 py-6 sm:py-8 sm:pl-[69px] sm:pr-[130px]">
            <div className="flex flex-wrap items-center gap-x-10 gap-y-2">
              <h3 className="font-serif text-[20px] leading-[30px] text-white">
                {testimonial.reviewer}
              </h3>
              <div className="flex gap-2.5" aria-label={`${testimonial.rating} out of 5 stars`}>
                {Array.from({ length: 5 }).map((_, starIndex) => (
                  <StarIcon
                    key={starIndex}
                    aria-hidden
                    className={cn(
                      "size-[31px]",
                      starIndex < testimonial.rating ? "text-white" : "text-white/20",
                    )}
                  />
                ))}
              </div>
            </div>
            <p
              className="mt-4 line-clamp-4 max-w-[489px] font-sans text-[18px] font-bold leading-[28.8px] text-white"
              title={testimonial.comment}
            >
              {testimonial.comment}
            </p>
            <a
              href={testimonial.videoUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex min-h-[42px] items-center justify-center rounded-[10px] border-2 border-white/80 bg-white/10 px-5 font-sans text-[14px] font-bold text-white transition-colors hover:bg-white hover:text-maroon"
            >
              Watch Full Story
            </a>
          </div>
        </article>
      ))}

      <div className="absolute bottom-4 right-6 flex gap-3 sm:bottom-auto sm:right-[40px] sm:top-[92px] sm:flex-col">
        <button
          type="button"
          aria-label="Previous testimonial"
          onClick={() => handleArrow(-1)}
          className="flex size-[42px] items-center justify-center rounded-full bg-white/15 transition-colors hover:bg-white/25"
        >
          <LongArrowIcon className="size-[20px] -rotate-90 text-white" />
        </button>
        <button
          type="button"
          aria-label="Next testimonial"
          onClick={() => handleArrow(1)}
          className="flex size-[42px] items-center justify-center rounded-full bg-white/15 transition-colors hover:bg-white/25"
        >
          <LongArrowIcon className="size-[20px] rotate-90 text-white" />
        </button>
      </div>
    </div>
  );
}
