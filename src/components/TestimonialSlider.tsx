"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { LongArrowIcon, QuoteIcon, StarIcon } from "@/components/icons";
import { cn } from "@/lib/utils";

interface GoogleReview {
  id: string;
  reviewer: string;
  rating: number;
  comment: string;
}

interface ReviewsResponse {
  reviews: GoogleReview[];
}

const FALLBACK_REVIEW: GoogleReview = {
  id: "fallback",
  reviewer: "Swati Kiran",
  rating: 5,
  comment:
    "Dr. Sunita is a wonderful surgeon, I had recently underwent a surgery. Not only has she taken great care of my health, but also she is lovely to speak with all my doubts and queries at every appointment. She ensured that I had a smooth prep surgery and follow-up.",
};

const AUTO_ADVANCE_MS = 4500;
const REVIEW_IMAGE = "/images/testimonials/swati-kiran.webp";

function isGoogleReview(value: unknown): value is GoogleReview {
  if (!value || typeof value !== "object") return false;
  const review = value as Partial<GoogleReview>;
  return (
    typeof review.id === "string" &&
    typeof review.reviewer === "string" &&
    review.reviewer.trim().length > 0 &&
    typeof review.rating === "number" &&
    typeof review.comment === "string" &&
    review.comment.trim().length > 0
  );
}

export function TestimonialSlider() {
  const [reviews, setReviews] = useState<GoogleReview[]>([FALLBACK_REVIEW]);
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    async function loadReviews() {
      try {
        const response = await fetch("/api/reviews", { signal: controller.signal });
        if (!response.ok) throw new Error("Could not load reviews");

        const payload = (await response.json()) as ReviewsResponse;
        const liveReviews = Array.isArray(payload.reviews)
          ? payload.reviews.filter(isGoogleReview)
          : [];

        if (liveReviews.length > 0) {
          setIndex(0);
          setReviews(liveReviews);
        }
      } catch (error) {
        if (error instanceof DOMException && error.name === "AbortError") return;
        // Keep the original testimonial visible if the reviews service is unavailable.
      }
    }

    void loadReviews();
    return () => controller.abort();
  }, []);

  const go = useCallback(
    (dir: 1 | -1) => {
      setDirection(dir);
      setIndex((current) => (current + dir + reviews.length) % reviews.length);
    },
    [reviews.length],
  );

  const resetTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    if (reviews.length > 1) {
      timerRef.current = setInterval(() => go(1), AUTO_ADVANCE_MS);
    }
  }, [go, reviews.length]);

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
      className="relative h-auto w-full max-w-[952px] overflow-hidden rounded-[20px] bg-maroon sm:h-[277px]"
      aria-label="Google reviews"
    >
      <QuoteIcon
        aria-hidden
        className="pointer-events-none absolute right-[88px] top-5 hidden size-[72px] text-white/15 sm:block"
      />

      {reviews.map((review, reviewIndex) => (
        <article
          key={review.id}
          aria-hidden={reviewIndex !== index}
          className={cn(
            "flex-col transition-all duration-700 ease-in-out sm:flex-row",
            reviewIndex === index
              ? "relative flex translate-y-0 opacity-100"
              : "pointer-events-none absolute inset-0 flex opacity-0",
            reviewIndex !== index && (direction === 1 ? "-translate-y-6" : "translate-y-6"),
          )}
        >
          <Image
            src={REVIEW_IMAGE}
            alt="Patient testimonial"
            width={277}
            height={277}
            sizes="(max-width: 639px) 100vw, 277px"
            loading="eager"
            className="h-[277px] w-full shrink-0 rounded-t-[20px] object-cover sm:w-[277px] sm:rounded-l-[20px] sm:rounded-tr-none"
          />

          <div className="px-6 py-6 sm:py-[70px] sm:pl-[69px] sm:pr-[130px]">
            <div className="flex flex-wrap items-center gap-x-10 gap-y-2">
              <h3 className="font-serif text-[20px] leading-[30px] text-white">
                {review.reviewer}
              </h3>
              <div className="flex gap-2.5" aria-label={`${review.rating} out of 5 stars`}>
                {Array.from({ length: 5 }).map((_, starIndex) => (
                  <StarIcon
                    key={starIndex}
                    aria-hidden
                    className={cn(
                      "size-[31px]",
                      starIndex < Math.round(review.rating) ? "text-white" : "text-white/20",
                    )}
                  />
                ))}
              </div>
            </div>
            <p
              className="mt-5 line-clamp-5 max-w-[489px] whitespace-pre-line font-sans text-[18px] font-bold leading-[28.8px] text-white"
              title={review.comment}
            >
              {review.comment}
            </p>
          </div>
        </article>
      ))}

      <div className="absolute bottom-4 right-6 flex gap-3 sm:bottom-auto sm:right-[40px] sm:top-[92px] sm:flex-col">
        <button
          type="button"
          aria-label="Previous review"
          onClick={() => handleArrow(-1)}
          className="flex size-[42px] items-center justify-center rounded-full bg-white/15 transition-colors hover:bg-white/25"
        >
          <LongArrowIcon className="size-[20px] -rotate-90 text-white" />
        </button>
        <button
          type="button"
          aria-label="Next review"
          onClick={() => handleArrow(1)}
          className="flex size-[42px] items-center justify-center rounded-full bg-white/15 transition-colors hover:bg-white/25"
        >
          <LongArrowIcon className="size-[20px] rotate-90 text-white" />
        </button>
      </div>
    </div>
  );
}
