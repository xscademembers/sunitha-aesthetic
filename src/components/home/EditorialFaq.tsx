"use client";

import { useState } from "react";
import { HOME_FAQS } from "@/data/homeContent";
import { cn } from "@/lib/utils";

function pad(index: number) {
  return String(index + 1).padStart(2, "0");
}

export function EditorialFaq() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div>
      {HOME_FAQS.map((faq, index) => {
        const open = index === openIndex;
        return (
          <div key={faq.q} className="border-t border-white/20 last:border-b">
            <button
              type="button"
              onClick={() => setOpenIndex(open ? -1 : index)}
              className="flex w-full items-center justify-between gap-4 py-4 text-left"
            >
              <span className="flex min-w-0 items-baseline gap-4">
                <span className="w-6 shrink-0 text-[10px] tracking-[0.16em] text-white/70">{pad(index)}</span>
                <span className="atelier-display text-[16px] leading-[1.3] text-pretty sm:text-[18px]">{faq.q}</span>
              </span>
              <span className={cn("shrink-0 text-[18px] leading-none", open ? "text-white" : "text-white/70")}>
                {open ? "−" : "+"}
              </span>
            </button>
            {open && (
              <p className="atelier-fade m-0 max-w-[640px] pr-6 pb-4 pl-10 text-[14px] leading-[1.7] text-white/90 sm:pl-12">
                {faq.a}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}
