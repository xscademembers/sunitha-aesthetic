"use client";

import { useState } from "react";
import { HOME_FAQS } from "@/data/homeContent";
import { cn } from "@/lib/utils";

export function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="neo rounded-[28px] p-2 sm:rounded-[36px] sm:p-3.5">
      {HOME_FAQS.map((faq, index) => {
        const open = index === openIndex;
        return (
          <div key={faq.q} className="border-b border-black/10 last:border-b-0">
            <button
              type="button"
              onClick={() => setOpenIndex(open ? -1 : index)}
              className={cn(
                "flex w-full cursor-pointer items-center justify-between gap-4 rounded-[22px] border-0 bg-transparent px-3.5 py-4 text-left transition-shadow sm:gap-6 sm:px-[22px] sm:py-[22px]",
                open && "neo-inset",
              )}
            >
              <span
                className={cn(
                  "home-display text-[16px] leading-[1.4] font-light text-pretty sm:text-[17px]",
                  open ? "text-maroon" : "text-black",
                )}
              >
                {faq.q}
              </span>
              <span className="neo flex size-8 shrink-0 items-center justify-center rounded-full font-ui text-[16px] text-maroon sm:size-[30px]">
                {open ? "−" : "+"}
              </span>
            </button>
            {open && (
              <p className="home-display home-rise m-0 px-4 pb-5 text-[15px] leading-[1.72] font-light text-pretty text-black sm:px-[22px] sm:pr-[62px] sm:pb-6">
                {faq.a}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}
