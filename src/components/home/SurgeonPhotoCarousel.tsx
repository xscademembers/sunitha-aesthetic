"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { HOME_COPY, SURGEON_SECTION_PHOTOS } from "@/data/homeContent";
import { cn } from "@/lib/utils";
import { FillImage } from "./FillImage";

const AUTO_ADVANCE_MS = 4500;

export function SurgeonPhotoCarousel({
  className,
}: {
  className?: string;
}) {
  const [active, setActive] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = useCallback((index: number) => {
    setActive(((index % SURGEON_SECTION_PHOTOS.length) + SURGEON_SECTION_PHOTOS.length) % SURGEON_SECTION_PHOTOS.length);
  }, []);

  const resetTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setActive((current) => (current + 1) % SURGEON_SECTION_PHOTOS.length);
    }, AUTO_ADVANCE_MS);
  }, []);

  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [resetTimer]);

  const handleDot = (index: number) => {
    goTo(index);
    resetTimer();
  };

  return (
    <div
      className={cn(
        "neo-media relative aspect-[4/5] max-h-[560px] min-h-[300px] overflow-hidden bg-maroon sm:aspect-[4/3] sm:min-h-[380px] lg:aspect-auto lg:max-h-none lg:min-h-[620px]",
        className,
      )}
    >
      {SURGEON_SECTION_PHOTOS.map((photo, index) => (
        <div
          key={photo.src}
          aria-hidden={active !== index}
          className={cn(
            "absolute inset-0 transition-opacity duration-700 ease-out",
            active === index ? "opacity-100" : "opacity-0",
          )}
        >
          <FillImage
            src={photo.src}
            alt={photo.alt}
            priority={index === 0}
            className="object-cover"
            style={{ objectPosition: photo.objectPosition }}
          />
        </div>
      ))}

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />

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

        <div
          className="pointer-events-auto mt-5 flex items-center gap-2"
          role="tablist"
          aria-label="Surgeon photos"
        >
          {SURGEON_SECTION_PHOTOS.map((photo, index) => (
            <button
              key={photo.src}
              type="button"
              role="tab"
              aria-label={`Show photo ${index + 1}`}
              aria-selected={active === index}
              onClick={() => handleDot(index)}
              className={cn(
                "h-2 rounded-full transition-all duration-300",
                active === index ? "w-6 bg-white" : "w-2 bg-white/45 hover:bg-white/70",
              )}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
